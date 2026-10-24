# ================================================================================
# SUPER PROMPT — NYAYAMITRA FEATURE IMPLEMENTATION
# Feed this entire file to any AI LLM (Claude / GPT / Gemini) as the opening message.
# It is self-contained: context + confirmed decisions + specs + code + rules.
# Companion document: NyayaMitra_Feature_Implementation_Blueprint.docx (same content, Word format)
# ================================================================================

## ROLE

You are the expert product manager & senior full-stack engineer for **NyayaMitra** (https://nyayamitrawb.in), a
West-Bengal-specific civil legal navigator operated by LEXIPULSE TECHNOLOGIES. You will
implement two paid features end-to-end. Work incrementally: implement one step, verify the
build, run dev-server UAT, then proceed. Ask the owner only if a spec below is genuinely
ambiguous — everything else is already decided and must not be re-litigated.

## CONFIRMED DECISIONS (owner-locked 2026-10-23 — implement exactly; do NOT re-ask)

- **D1 (Advocate Connect email recipients):** Every paid ₹499 request emails BOTH
  `khantanweer85@gmail.com` (advocate action inbox) AND `namaste@nyayamitrawb.in`
  (admin audit-trail inbox). The owner has explicitly overridden an earlier project rule
  that excluded khantanweer85@gmail.com from notifications. Before production, the Privacy
  Policy modal must disclose that citizen data is shared with the independent advocate.
- **D2 (Domain):** Use ONLY `nyayamitrawb.in` and `namaste@nyayamitrawb.in`. The `.com`
  variant that appeared in earlier correspondence was a typo — never use it anywhere.
- **D3 (BCI Rule 36 structuring of ₹499):** The fee is a citizen-paid PLATFORM FACILITATION
  SERVICE FEE. The platform takes 0% commission from the advocate; the advocate is
  independent and his Bar Council enrollment number must be displayed. The statutory
  disclaimer specified in Feature 1 Step 4 renders unconditionally and must not be altered.

## PROJECT CONTEXT (existing system — reuse these patterns; invent nothing new)

- **Frontend:** React 18 + TypeScript (strict) + Vite 8 + Tailwind CSS 3.4. SPA with
  query-param routing: `?cat=&topic=&lang=&track=`. Languages: `en` (default), `bn`, `hi`.
- **Serverless:** Vercel functions in `/api` (JS + TS mixed). Existing:
  `api/create-order.js` (Razorpay order creation, currently amount 9900 paise),
  `api/verify-payment.js`, `api/razorpay-webhook.js`, `api/notify.js`, `api/admin/*.ts`.
- **Payments (Razorpay LIVE, verified):** Client calls `/api/create-order` → gets
  `{orderId, keyId}` → opens `window.Razorpay` checkout → in `handler`, client POSTs
  `{razorpay_order_id, razorpay_payment_id, razorpay_signature, ...formData}` to an API
  endpoint → server verifies signature fail-closed:
  `createHmac('sha256', RAZORPAY_KEY_SECRET).update(\`${razorpay_order_id}|${razorpay_payment_id}\`).digest('hex')`
  compared to `razorpay_signature` with `crypto.timingSafeEqual`. On mismatch → 401.
- **Razorpay script loading:** A singleton `ensureRazorpayLoaded()` exists in
  `src/components/DocumentDrafterModal.tsx` (declared as `const ensureRazorpayLoaded = (() => {...})();`
  IIFE returning a promise that resolves when `window.Razorpay` exists, with dynamic script
  injection fallback + 10s timeout). EXPORT it and reuse — never write a second loader.
- **Database:** Supabase Postgres. Server endpoints create clients with
  `createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)`.
  Tables have RLS enabled with NO public policies (service_role writes only).
- **Email:** nodemailer via Gmail SMTP —
  `nodemailer.createTransport({host:'smtp.gmail.com', port:465, secure:true, auth:{user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD}})`.
  Pattern exists in `api/notify.js`, `api/verify-payment.js`, `api/razorpay-webhook.js`.
- **CSS:** `animate-pulse-glow` keyframes already exist in `src/index.css` (glowing amber
  pulse). Reuse for glowing buttons — do NOT re-add keyframes. lucide-react for icons.
- **Existing environment variables (Vercel Production, already configured):**
  `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`,
  `GMAIL_USER`, `GMAIL_APP_PASSWORD`, `ADMIN_JWT_SECRET`.

## HARD RULES (violation = failed work)

1. `npm run build` (= `tsc && vite build`) and `npx tsc --noEmit` must pass after EVERY step.
2. UAT in dev (`npm run dev`, port 5173) before confirming any step to the owner.
3. NEVER break the existing ₹99 drafter flow (create-order default amount stays 9900).
4. Amounts accepted by `/api/create-order` are WHITELISTED to exactly {9900, 19900, 49900}.
   Never accept arbitrary client-supplied amounts.
5. Never expose `RAZORPAY_KEY_SECRET`, `SUPABASE_SERVICE_ROLE_KEY`, `SHIPROCKET_*`,
   or `GMAIL_APP_PASSWORD` client-side. Server-side env only.
6. DB insert of the payment record happens BEFORE shipping/email calls (payment proof is
   never lost); emails are best-effort (endpoint still returns 200 if DB persisted and
   email fails, with `{status:'db_completed'}`).
7. No code comments unless essential (project convention). Match existing file style.
8. New Supabase tables: `CREATE TABLE ... ; ALTER TABLE ... ENABLE ROW LEVEL SECURITY;`
   with no public policies.
9. Project directory: `C:/Users/Admin123/Downloads/Project/nyayamitra/`. Dev on Windows
   PowerShell 7. Backup before bulk edits to `Backups/<name>-<timestamp>/`.

# FEATURE 1 — LEGAL ADVOCATE CONNECT (₹499)

## Objective
A glowing golden "Connect Legal Advocate (₹499)" button beside the existing
"Open Official Government Portal" button on ALL 300 workflow views. Opens a modal showing
the advocate's bio, Bar Council license, achievements, a citizen contact form, and a
"Pay & Send to Advocate" button invoking Razorpay ₹499. After verified payment: citizen
details emailed to BOTH inboxes (D1), Thank-You screen promises contact within 24 working
hours.

## User flow
1. Any workflow view → glowing golden button → AdvocateConnectModal.
2. Modal sections: (1) advocate bio card, (2) statutory disclaimer, (3) form
   [name, 10-digit mobile, email, optional comment], (4) Pay ₹499.
3. Pay → `POST /api/create-order {amount: 49900}` → `{orderId, keyId}` → Razorpay checkout.
4. `handler` → `POST /api/advocate-connect` with payment ids + form data → 200 → success screen.

## Step 1.1 — Create `src/data/advocateProfile.ts`

```typescript
export const ADVOCATE_PROFILE = {
  name: 'Adv. Khantanweer',
  barCouncilId: 'WB/____/____',        // OWNER MUST FILL real enrollment no. before production
  enrollmentYear: '20__',
  courts: ['Calcutta High Court', 'City Civil Court', 'Bankshall Court'],
  specializations: ['Civil Disputes', 'Property & Tenancy', 'Cheque Bounce (NI Act)', 'Consumer Matters'],
  achievements: [
    '500+ district court appearances across West Bengal',
  ],
  experienceYears: 0,
  languages: ['Bengali', 'Hindi', 'English'],
  email: 'khantanweer85@gmail.com',
  photoUrl: '/assets/advocate-photo.jpg',
  fee: 499,
};
```
Owner must replace all `____` placeholders with REAL values (fake Bar Council numbers are a
legal-credibility risk). Photo goes to `public/assets/advocate-photo.jpg`.

## Step 1.2 — Supabase table (run in SQL Editor)

```sql
CREATE TABLE IF NOT EXISTS public.advocate_connect_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  citizen_name TEXT NOT NULL,
  citizen_mobile TEXT NOT NULL,
  citizen_email TEXT NOT NULL,
  citizen_comment TEXT,
  workflow_id TEXT,
  workflow_title TEXT,
  razorpay_payment_id TEXT UNIQUE NOT NULL,
  razorpay_order_id TEXT,
  amount INTEGER NOT NULL DEFAULT 499,
  status TEXT DEFAULT 'paid_pending_advocate_contact',
  notified_advocate BOOLEAN DEFAULT false
);
ALTER TABLE public.advocate_connect_requests ENABLE ROW LEVEL SECURITY;
```
Verify: `SELECT * FROM public.advocate_connect_requests LIMIT 5;` returns empty set, no error.

## Step 1.3 — Button + wiring in `src/App.tsx`

- Add state near the other modal states (~line 325):
  `const [showAdvocateModal, setShowAdvocateModal] = useState(false);`
- Add import: `import { AdvocateConnectModal } from './components/AdvocateConnectModal';`
- In the workflow roadmap card, locate the "Open Official Government Portal" button
  (search `ExternalLink` usage in the workflow section). Insert immediately AFTER it,
  inside the same flex container:

```tsx
{/* ADVOCATE CONNECT — glowing golden CTA (all 300 workflows) */}
<button
  type="button"
  onClick={() => setShowAdvocateModal(true)}
  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm shadow-[0_0_20px_rgba(245,158,11,0.7)] animate-pulse-glow transition hover:scale-105 cursor-pointer border-2 border-amber-300"
  title="Connect with Legal Advocate (₹499)"
>
  <Scale className="w-4 h-4" />
  <span>Connect Legal Advocate (₹499)</span>
</button>
```
- Render the modal next to the LegalPolicyModal render block (~line 1346):

```tsx
{showAdvocateModal && (
  <AdvocateConnectModal
    isOpen={showAdvocateModal}
    onClose={() => setShowAdvocateModal(false)}
    lang={lang}
    workflowId={selectedSubCat?.id ?? ''}
    workflowTitle={selectedSubCat?.title?.[lang] ?? ''}
  />
)}
```
- `Scale` icon is already imported in App.tsx. Do not duplicate CSS keyframes.

## Step 1.4 — Create `src/components/AdvocateConnectModal.tsx`

Props: `{ isOpen: boolean; onClose: () => void; lang: Language; workflowId: string; workflowTitle: string }`.
Early return `null` when `!isOpen`. Overlay: `fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md`,
centered card `max-w-2xl` styled like LegalPolicyModal. Internal state: `step: 'form' | 'success'`,
form fields, `processing`, `error`, `paymentId`.

**Section 1 — Advocate bio card:** photo, name, Bar Council ID + enrollment-year badge,
courts as chips, specializations as chips, achievements list, languages. A green
"Bar Council Verified" badge ONLY once a real enrollment number is filled.

**Section 2 — Mandatory statutory disclaimer (Decision D3 — render unconditionally, verbatim):**

```
NyayaMitra is a technology platform that facilitates your request to the independent advocate
listed above. NyayaMitra is not a law firm, takes no referral commission from any advocate,
and does not guarantee case outcomes. The advocate is solely responsible for all professional
advice. Advocate-client relationship, if any, arises directly between you and the advocate.
```

**Section 3 — Form validation:** citizenName non-empty; mobile regex `^[6-9]\d{9}$`;
citizenEmail standard email regex; comment optional. Pay button disabled until all valid.

**Section 4 — Pay handler (exact logic):**

```typescript
const handlePay = async () => {
  setError(''); setProcessing(true);
  try {
    await ensureRazorpayLoaded();          // export from DocumentDrafterModal and import here
    const orderRes = await fetch('/api/create-order', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 49900, purpose: 'advocate_connect' })
    });
    if (!orderRes.ok) throw new Error('Order creation failed');
    const orderData = await orderRes.json();

    const rzp = new window.Razorpay({
      key: orderData.keyId,
      amount: 49900,
      currency: 'INR',
      name: 'NyayaMitra Advocate Connect',
      description: `Consultation request — ${ADVOCATE_PROFILE.name}`,
      order_id: orderData.orderId,
      prefill: { name: citizenName, contact: mobile, email: citizenEmail },
      theme: { color: '#0f2b48' },
      handler: async (response: any) => {
        const res = await fetch('/api/advocate-connect', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...response,
            citizenName, mobile, citizenEmail, comment,
            workflowId, workflowTitle
          })
        });
        if (res.ok) { setPaymentId(response.razorpay_payment_id); setStep('success'); }
        else setError('Payment received but notification failed. Our team will contact you.');
      },
      modal: { ondismiss: () => setProcessing(false) }
    });
    rzp.open();
  } catch (e) {
    setError('Could not start payment. Please retry.');
    setProcessing(false);
  }
};
```

**Success screen:** green check, "Thank You!", text: "Your request has been sent to
Adv. Khantanweer's office. You will receive a call within 24 working hours." + Razorpay
Payment ID in monospace + Close button.

**Only permitted change to DocumentDrafterModal.tsx for this feature:** change
`const ensureRazorpayLoaded = ...` to `export const ensureRazorpayLoaded = ...`.

## Step 1.5 — Create `api/advocate-connect.js`

```javascript
import { createHmac, timingSafeEqual } from 'crypto';
import nodemailer from 'nodemailer';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const ADVOCATE_EMAIL = 'khantanweer85@gmail.com';  // CONFIRMED (Decision D1): advocate action inbox
const ADMIN_EMAIL = 'namaste@nyayamitrawb.in';     // CONFIRMED (Decision D2): audit-trail inbox

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature,
          citizenName, mobile, citizenEmail, comment,
          workflowId, workflowTitle } = req.body || {};

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature ||
      !citizenName || !mobile || !citizenEmail) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const expected = createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`).digest('hex');
  const provided = String(razorpay_signature);
  const ok = expected.length === provided.length &&
    timingSafeEqual(Buffer.from(expected), Buffer.from(provided));
  if (!ok) return res.status(401).json({ error: 'Invalid payment signature' });

  const { error: dbError } = await supabase
    .from('advocate_connect_requests')
    .insert({
      citizen_name: citizenName,
      citizen_mobile: mobile,
      citizen_email: citizenEmail,
      citizen_comment: comment || null,
      workflow_id: workflowId || null,
      workflow_title: workflowTitle || null,
      razorpay_payment_id,
      razorpay_order_id,
      amount: 499,
      notified_advocate: true
    });
  if (dbError) console.error('[AdvocateConnect] DB insert failed:', dbError);

  if (!process.env.GMAIL_APP_PASSWORD) {
    return res.status(200).json({ status: 'db_completed', reason: 'email_creds_missing' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', port: 465, secure: true,
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD }
    });

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;border:1px solid #1a3d60;border-radius:12px;overflow:hidden">
        <div style="background:#0f2b48;color:#fff;padding:18px 24px;text-align:center">
          <h2 style="margin:0">NyayaMitra Advocate Connect — New Paid Request (₹499)</h2>
        </div>
        <div style="padding:24px;background:#f8fafc;color:#0f172a;font-size:14px">
          <p><b>Citizen:</b> ${citizenName}</p>
          <p><b>Mobile:</b> ${mobile} &nbsp;|&nbsp; <b>Email:</b> ${citizenEmail}</p>
          <p><b>Workflow:</b> ${workflowTitle || '—'} (${workflowId || '—'})</p>
          <p><b>Query:</b> ${comment || '—'}</p>
          <p><b>Payment ID:</b> <code>${razorpay_payment_id}</code> (signature verified)</p>
          <div style="background:#fef2f2;border:1px solid #f87171;border-radius:8px;padding:12px 16px;margin-top:12px">
            <b style="color:#991b1b">ACTION:</b> Call the citizen within 24 working hours.
          </div>
        </div>
      </div>`;

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: [ADVOCATE_EMAIL, ADMIN_EMAIL],
      subject: `[NyayaMitra Advocate Connect] ${citizenName} — ${mobile}`,
      html
    });

    return res.status(200).json({ success: true });
  } catch (mailError) {
    console.error('[AdvocateConnect] Email failed:', mailError);
    return res.status(200).json({ status: 'db_completed', reason: 'email_failed' });
  }
}
```

## Step 1.6 — Extend `api/create-order.js` amount whitelist

Currently likely hardcodes 9900. Replace with:

```javascript
const body = req.body || {};
const ALLOWED = { 9900: true, 19900: true, 49900: true };
const amountPaise = ALLOWED[Number(body.amount)] ? Number(body.amount) : 9900;
// use amountPaise in razorpay.orders.create options, DB insert, and response
```
Existing ₹99 drafter flow must remain untouched (default 9900).

## Step 1.7 — Feature 1 UAT checklist
1. Build + tsc pass.
2. Dev server → any workflow (e.g. `?cat=cat-land-mutation&topic=sub-land-01&lang=en`) → glowing
   golden button renders beside portal button with pulse-glow.
3. Click → bio + disclaimer + form render; invalid mobile/email blocks payment; valid enables.
4. Pay ₹499 live → success screen with Payment ID.
5. BOTH inboxes receive formatted HTML email (advocate + admin) — Decision D1.
6. Supabase `advocate_connect_requests` row exists with unique payment id.
7. Existing ₹99 drafter flow end-to-end unchanged (regression check).

# FEATURE 2 — SHIPROCKET NOTICE DISPATCH (₹199)

## Objective
At Step 4 of the notice drafter (after ₹99 payment + PDF download), add a
"Download Notice & Send via Shiprocket (₹199)" button. User enters pickup + delivery
addresses (both West Bengal), pays ₹199 via Razorpay on NyayaMitra, and the system
auto-creates a Shiprocket order → assigns AWB → schedules pickup → emails tracking.
User prints the PDF and hands the envelope to the pickup agent.

## Researched fee schedule (verified Oct 2026)
| Item | Cost |
|---|---|
| Shiprocket Lite/Basic plan | Free plan; ₹26–35 per 500g prepaid |
| Cheapest courier 500g intra-WB (DTDC/Ecom/Xpressbees) | ₹26–45 |
| India Post Speed Post via Shiprocket (201–500g, 200–1000 km) | ₹70.80 |
| Advanced plan | ₹499/month (avg ₹39/shipment) — only if >60 shipments/month |
| Razorpay fee on ₹199 | ≈ ₹4.70 |
| Net margin per dispatch | ≈ ₹123–₹168 |

NOTE: The Razorpay connection made inside the Shiprocket panel is for COD reconciliation and
is NOT used here. NyayaMitra collects payment first, then creates a Prepaid API order.

## Step 2.1 — Owner prerequisites (30 min)
1. Shiprocket panel → Settings → API → Configure → **Create API User** (email DIFFERENT from
   panel login — mandatory). Save as env vars.
2. Settings → Pickup Locations → add the Kolkata pickup address → note the exact
   `pickup_location` NAME (e.g. `primary`) — required by create-order API.
3. Add wallet balance (₹500–1000). Shiprocket deducts per-shipment from wallet.
4. Complete KYC if prompted (needed for labels).
5. Parcel spec: 0.5 kg, 25 × 18 × 2 cm envelope.

## Step 2.2 — New env vars (Vercel Production + Preview)
`SHIPROCKET_API_EMAIL`, `SHIPROCKET_API_PASSWORD`, `SHIPROCKET_PICKUP_LOCATION` (e.g. `primary`).

## Step 2.3 — Supabase table

```sql
CREATE TABLE IF NOT EXISTS public.dispatch_orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  payment_transaction_id TEXT UNIQUE,
  razorpay_payment_id TEXT UNIQUE NOT NULL,
  razorpay_order_id TEXT,
  sender_name TEXT NOT NULL,
  sender_phone TEXT NOT NULL,
  sender_address TEXT NOT NULL,
  sender_city TEXT NOT NULL,
  sender_pincode TEXT NOT NULL,
  receiver_name TEXT NOT NULL,
  receiver_phone TEXT NOT NULL,
  receiver_address TEXT NOT NULL,
  receiver_city TEXT NOT NULL,
  receiver_pincode TEXT NOT NULL,
  shiprocket_order_id TEXT,
  shiprocket_shipment_id TEXT,
  awb_code TEXT,
  courier_name TEXT,
  tracking_status TEXT DEFAULT 'created',
  amount INTEGER NOT NULL DEFAULT 199,
  user_email TEXT
);
ALTER TABLE public.dispatch_orders ENABLE ROW LEVEL SECURITY;
```

## Step 2.4 — Create `api/shiprocket-client.js` (cached-token helper)

```javascript
const SR_BASE = 'https://apiv2.shiprocket.in/v1/external';

let cachedToken = null;
let tokenFetchedAt = 0;
const TOKEN_TTL_MS = 9 * 24 * 60 * 60 * 1000;   // refresh before 10-day expiry

export async function getShiprocketToken() {
  const now = Date.now();
  if (cachedToken && now - tokenFetchedAt < TOKEN_TTL_MS) return cachedToken;

  const res = await fetch(`${SR_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: process.env.SHIPROCKET_API_EMAIL,
      password: process.env.SHIPROCKET_API_PASSWORD
    })
  });
  if (!res.ok) throw new Error(`Shiprocket auth failed: ${res.status}`);
  const data = await res.json();
  cachedToken = data.token;
  tokenFetchedAt = now;
  return cachedToken;
}

export async function srPost(path, payload) {
  const token = await getShiprocketToken();
  const res = await fetch(`${SR_BASE}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(payload)
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(`Shiprocket ${path} failed: ${res.status} ${JSON.stringify(data)}`);
    err.data = data;
    throw err;
  }
  return data;
}
```

## Step 2.5 — Create `api/shiprocket-order.js`

```javascript
import { createHmac, timingSafeEqual } from 'crypto';
import nodemailer from 'nodemailer';
import { createClient } from '@supabase/supabase-js';
import { srPost } from './shiprocket-client.js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const {
    razorpay_order_id, razorpay_payment_id, razorpay_signature,
    senderName, senderPhone, senderAddress, senderCity, senderPincode,
    receiverName, receiverPhone, receiverAddress, receiverCity, receiverPincode,
    userEmail, paymentTransactionId
  } = req.body || {};

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature ||
      !senderName || !senderPhone || !senderAddress || !senderPincode ||
      !receiverName || !receiverPhone || !receiverAddress || !receiverPincode) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const pinRe = /^\d{6}$/;
  if (!pinRe.test(senderPincode) || !pinRe.test(receiverPincode)) {
    return res.status(400).json({ error: 'Invalid PIN code' });
  }

  // 1. Verify Razorpay signature (fail-closed)
  const expected = createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`).digest('hex');
  const provided = String(razorpay_signature);
  if (!(expected.length === provided.length &&
        timingSafeEqual(Buffer.from(expected), Buffer.from(provided)))) {
    return res.status(401).json({ error: 'Invalid payment signature' });
  }

  // 2. Persist BEFORE shipping calls
  const { error: dbError } = await supabase
    .from('dispatch_orders')
    .insert({
      razorpay_payment_id, razorpay_order_id,
      payment_transaction_id: paymentTransactionId || null,
      sender_name: senderName, sender_phone: senderPhone,
      sender_address: senderAddress, sender_city: senderCity || '', sender_pincode: senderPincode,
      receiver_name: receiverName, receiver_phone: receiverPhone,
      receiver_address: receiverAddress, receiver_city: receiverCity || '', receiver_pincode: receiverPincode,
      amount: 199, user_email: userEmail || null,
      tracking_status: 'paid_creating_order'
    });
  if (dbError) console.error('[Dispatch] DB insert failed:', dbError);

  // 3. Create Shiprocket adhoc order
  const srOrderId = `NYM-DSP-${Date.now()}`;
  const nowIst = new Date(Date.now() + 5.5 * 3600 * 1000)
    .toISOString().slice(0, 16).replace('T', ' ');

  const order = await srPost('/orders/create/adhoc', {
    order_id: srOrderId,
    order_date: nowIst,
    pickup_location: process.env.SHIPROCKET_PICKUP_LOCATION || 'primary',
    billing_customer_name: senderName,
    billing_last_name: '',
    billing_address: senderAddress,
    billing_city: senderCity || 'Kolkata',
    billing_pincode: senderPincode,
    billing_state: 'West Bengal',
    billing_country: 'India',
    billing_email: userEmail || 'noreply@nyayamitrawb.in',
    billing_phone: senderPhone,
    shipping_is_billing: false,
    shipping_customer_name: receiverName,
    shipping_last_name: '',
    shipping_address: receiverAddress,
    shipping_city: receiverCity || '',
    shipping_pincode: receiverPincode,
    shipping_state: 'West Bengal',
    shipping_country: 'India',
    shipping_email: userEmail || 'noreply@nyayamitrawb.in',
    shipping_phone: receiverPhone,
    order_items: [{
      name: 'Legal Notice (Printed Documents)',
      sku: 'NYM-NOTICE',
      units: 1,
      selling_price: '199',
      hsn: '4909'
    }],
    payment_method: 'Prepaid',
    sub_total: 199,
    length: 25, breadth: 18, height: 2, weight: 0.5
  });

  const shipmentId = order.shipment_id;

  // 4. Assign AWB (auto-assign cheapest)
  let awb = null, courier = null;
  try {
    const awbRes = await srPost('/courier/assign/awb', { shipment_id: shipmentId });
    awb = awbRes.awb_code || awbRes.response?.data?.awb_code || null;
    courier = awbRes.courier_name || awbRes.response?.data?.courier_name || null;
  } catch (awbErr) {
    console.error('[Dispatch] AWB assign failed:', awbErr?.data || awbErr);
  }

  // 5. Schedule pickup
  try {
    await srPost('/courier/generate/pickup', { shipment_id: shipmentId });
  } catch (pickupErr) {
    console.error('[Dispatch] Pickup schedule failed:', pickupErr?.data || pickupErr);
  }

  // 6. Update row
  await supabase.from('dispatch_orders').update({
    shiprocket_order_id: String(order.order_id ?? srOrderId),
    shiprocket_shipment_id: String(shipmentId ?? ''),
    awb_code: awb, courier_name: courier,
    tracking_status: awb ? 'awb_assigned_pickup_scheduled' : 'order_created_awaiting_awb'
  }).eq('razorpay_payment_id', razorpay_payment_id);

  // 7. Email the user
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', port: 465, secure: true,
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD }
    });
    const trackUrl = awb ? `https://shiprocket.co/tracking/${awb}` : 'https://app.shiprocket.in/seller/orders';
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: userEmail || 'noreply@nyayamitrawb.in',
      subject: `[NyayaMitra] Dispatch confirmed — AWB ${awb || 'pending'}`,
      html: `<h2>Your notice dispatch is booked (₹199)</h2>
        <p><b>Shiprocket Order:</b> ${srOrderId}</p>
        <p><b>AWB:</b> ${awb || 'Being assigned shortly'}</p>
        <p><b>Courier:</b> ${courier || 'Auto-assigned'}</p>
        <p><b>Track:</b> <a href="${trackUrl}">${trackUrl}</a></p>
        <div style="background:#fef9c3;border:1px solid #facc15;border-radius:8px;padding:12px">
          <b>NEXT STEP (you):</b> Print the downloaded notice PDF, sign if required, place it
          in an envelope, and hand it to the pickup agent at the scheduled time.
        </div>`
    });
  } catch (mailErr) {
    console.error('[Dispatch] user email failed:', mailErr);
  }

  return res.status(200).json({ success: true, shiprocketOrderId: srOrderId, shipmentId, awb, courier });
}
```

## Step 2.6 — Step 4 UI in `src/components/DocumentDrafterModal.tsx`

- In the Step 4 (Downloads) section, below the PDF download card:

```tsx
<button
  type="button"
  onClick={() => setDispatchStep('address')}
  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl
    bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400
    text-white font-extrabold shadow-lg hover:scale-[1.02] transition"
>
  <Truck className="w-5 h-5" />
  <span>Download Notice & Send via Shiprocket (₹199)</span>
</button>
```
- Add `import { Truck } from 'lucide-react'`. Add state
  `dispatchStep: null | 'address' | 'success'`.
- Address modal (when `dispatchStep === 'address'`): two bordered sections —
  **PICKUP** (prefill sender name/phone/address from existing drafter inputs where
  available; editable) and **DELIVERY** (receiver name, 10-digit phone, address, city,
  6-digit PIN). State field display-only "West Bengal" (intra-state only per spec).
  Client validation: PIN `^\d{6}$`, phone `^[6-9]\d{9}$`.
- Pay button repeats: create-order `{amount: 19900}` → Razorpay → `POST /api/shiprocket-order`
  → success shows AWB, courier, tracking URL, and the print/hand-over instruction box.

## Step 2.7 — Webhook `api/shiprocket-webhook.js` + panel config

```javascript
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const payload = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
  const awb = payload.awb || payload?.shipment?.awb || null;
  const status = payload.current_status || payload?.shipment?.status || null;
  const srOrderId = payload.order_id || payload?.order?.order_id || null;

  if (!awb && !srOrderId) return res.status(200).json({ ignored: true });

  const { data: row } = await supabase
    .from('dispatch_orders')
    .select('*')
    .or(`awb_code.eq.${awb || 'NONE'},shiprocket_order_id.eq.${srOrderId || 'NONE'}`)
    .limit(1)
    .single();

  if (!row) return res.status(200).json({ ignored: true });

  await supabase.from('dispatch_orders')
    .update({ tracking_status: status || row.tracking_status })
    .eq('id', row.id);

  const notifyStatuses = ['Dispatched', 'In Transit', 'Delivered', 'RTO Initiated', 'Undelivered'];
  if (status && notifyStatuses.includes(status) && row.user_email && row.tracking_status !== status) {
    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', port: 465, secure: true,
        auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD }
      });
      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: row.user_email,
        subject: `[NyayaMitra] Dispatch update: ${status} (AWB ${row.awb_code})`,
        html: `<p>Your notice shipment status: <b>${status}</b></p>
               <p>AWB: ${row.awb_code}</p>
               <p>Track: <a href="https://shiprocket.co/tracking/${row.awb_code}">Open tracking</a></p>`
      });
    } catch (e) { console.error('[SR-Webhook] email failed', e); }
  }

  return res.status(200).json({ received: true });
}
```

Panel config: Shiprocket → Settings → API & Webhooks → Webhook URL =
`https://nyayamitrawb.in/api/shiprocket-webhook` → enable "Order"/"Shipment status" events
→ Save. Shiprocket webhooks are unauthenticated by design; treat as best-effort status
enrichment only (payment + order creation are already signature-verified upstream).

## Step 2.8 — Feature 2 UAT checklist
1. Build + tsc pass.
2. Step 4 button visible only after successful ₹99 payment.
3. Address validation: bad PIN/phone blocked; WB-only enforced; prefill works.
4. Pay ₹199 live → signature verified → Shiprocket panel shows order with correct
   addresses + 0.5kg spec.
5. AWB assigned (or tracked pending) + pickup scheduled.
6. User email with AWB + tracking link + print/hand-over instructions.
7. Panel status change → webhook updates `dispatch_orders` + user email.
8. Regression: ₹99 drafter AND Feature 1 (₹499) unaffected.

# SHIPROCKET API QUICK REFERENCE

| Operation | Method + Path | Auth | Notes |
|---|---|---|---|
| Authenticate | POST `https://apiv2.shiprocket.in/v1/external/auth/login` | None | `{email, password}` → `{token}` JWT ~10 days; cache & refresh on 401 |
| Create adhoc order | POST `/v1/external/orders/create/adhoc` | Bearer | order_id unique; order_date `yyyy-mm-dd HH:mm`; pickup_location must EXACTLY match a panel pickup-location NAME; weight in KG; `shipping_is_billing:false` when addresses differ |
| Assign AWB | POST `/v1/external/courier/assign/awb` | Bearer | `{shipment_id}`; omit courier_id for auto-assign cheapest |
| Generate pickup | POST `/v1/external/courier/generate/pickup` | Bearer | `{shipment_id}` |
| Track by AWB | GET `/v1/external/courier/track/awb/{awb}` | Bearer | — |

# EXECUTION ORDER (with UAT gates)

| Day | Task | Gate |
|---|---|---|
| 1 | Owner supplies: advocate profile details (Bar Council number, photo, achievements) + Shiprocket API user, pickup location name, KYC, wallet balance | Assets ready |
| 2–3 | Feature 1: profile data → Supabase table → button → modal → create-order whitelist → API | build + tsc pass |
| 4 | Feature 1 UAT: live ₹499 → BOTH inboxes (D1) → Supabase row → regression check | All UAT 1.7 items pass |
| 5–6 | Feature 2: client helper → dispatch_orders table → order API → Step 4 UI → webhook | build + tsc pass |
| 7 | Feature 2 UAT: live ₹199 + real envelope → panel order → AWB → webhook | All UAT 2.8 items pass |
| 8 | git commit → push → Vercel Preview; re-run both UATs on Preview; verify env vars in Preview scope | Preview green |
| 9 | Promote to Production; update Privacy + Refund policy modals (disclosures per D1 + courier data sharing); monitor Vercel function logs 48h | Prod green |

# POLICY DISCLOSURES TO SHIP WITH LAUNCH (Decision D1 + DPDP)

Update `src/components/LegalPolicyModal.tsx` Privacy tab to add:
- (a) Advocate Connect: citizen contact details and query are shared with the independent
  advocate (email: khantanweer85@gmail.com) solely to enable contact within 24 working hours.
- (b) Dispatch: sender/receiver name, address and phone are shared with the courier partner
  (Shiprocket) solely for delivery of the printed notice.
Update Refund tab to add:
- Advocate Connect: refundable if the advocate does not call within 72 working hours.
- Dispatch: courier fee non-refundable once AWB assigned; full refund if order creation
  fails before AWB.

# END OF SUPER PROMPT
# ================================================================================
