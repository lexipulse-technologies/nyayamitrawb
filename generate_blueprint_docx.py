# Generates: NyayaMitra_Feature_Implementation_Blueprint.docx
# Purpose: AI-LLM-ingestible implementation playbook for Features 1 & 2
from docx import Document
from docx.shared import Pt, Inches, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH

doc = Document()

# ---------- Base styles ----------
style = doc.styles['Normal']
style.font.name = 'Calibri'
style.font.size = Pt(10)

NAVY = RGBColor(0x0F, 0x2B, 0x48)
AMBER = RGBColor(0xB4, 0x53, 0x09)
RED = RGBColor(0xB9, 0x1C, 0x1C)

def h1(text):
    p = doc.add_heading(text, level=1)
    for r in p.runs: r.font.color.rgb = NAVY
    return p

def h2(text):
    p = doc.add_heading(text, level=2)
    for r in p.runs: r.font.color.rgb = NAVY
    return p

def h3(text):
    p = doc.add_heading(text, level=3)
    for r in p.runs: r.font.color.rgb = NAVY
    return p

def para(text, bold=False, italic=False, color=None):
    p = doc.add_paragraph()
    r = p.add_run(text)
    r.bold = bold; r.italic = italic
    if color: r.font.color.rgb = color
    return p

def bullet(text):
    return doc.add_paragraph(text, style='List Bullet')

def numbered(text):
    return doc.add_paragraph(text, style='List Number')

def code(text, label=None):
    if label:
        lp = doc.add_paragraph()
        lr = lp.add_run(label)
        lr.bold = True; lr.font.size = Pt(9); lr.font.color.rgb = AMBER
    p = doc.add_paragraph()
    r = p.add_run(text)
    r.font.name = 'Consolas'
    r.font.size = Pt(8.5)
    pPr = p._p.get_or_add_pPr()
    return p

def table(headers, rows, widths=None):
    t = doc.add_table(rows=1, cols=len(headers))
    t.style = 'Light Grid Accent 1'
    for i, htext in enumerate(headers):
        cell = t.rows[0].cells[i]
        cell.text = htext
        for p in cell.paragraphs:
            for r in p.runs: r.bold = True
    for row in rows:
        cells = t.add_row().cells
        for i, val in enumerate(row):
            cells[i].text = str(val)
    return t

def callout(text, label='NOTE FOR IMPLEMENTING AI:'):
    p = doc.add_paragraph()
    r1 = p.add_run(label + ' ')
    r1.bold = True; r1.font.color.rgb = RED
    r2 = p.add_run(text)
    r2.font.color.rgb = RED
    return p

# ================= COVER =================
title = doc.add_heading('NyayaMitra — Feature Enhancement Implementation Blueprint', level=0)
sub = doc.add_paragraph()
r = sub.add_run('AI-Ingestible Playbook • Features: (1) Legal Advocate Connect ₹499, (2) Shiprocket Notice Dispatch ₹199 • v1.1 — All decisions CONFIRMED by owner')
r.bold = True
para('Document purpose: Feed this document to any AI LLM (Claude / GPT / Gemini) to obtain granular step-by-step implementation code and playbook. All context needed to implement without codebase access is embedded in Section 1.', italic=True)
table(['Field', 'Value'], [
    ['Document version', '1.1 — CONFIRMED (owner decisions locked 2026-10-23)'],
    ['Generated', '2026-10-23'],
    ['Project', 'NyayaMitra (https://nyayamitrawb.in)'],
    ['Operating entity', 'LEXIPULSE TECHNOLOGIES (tech platform, not a law firm)'],
    ['Deployment', 'Vercel (client: Vite/React/TS; server: Vercel serverless functions in /api)'],
    ['Payment gateway', 'Razorpay LIVE (integrated and verified)'],
    ['Email infra', 'nodemailer + Gmail SMTP (env: GMAIL_USER, GMAIL_APP_PASSWORD) — already used by 4 API files'],
    ['Database', 'Supabase PostgreSQL (service_role writes from /api, RLS enabled, no public policies)'],
])
doc.add_paragraph()

# ================= SECTION 1: CONTEXT =================
h1('SECTION 1 — PROJECT CONTEXT (READ FIRST)')
para('This section gives the implementing AI full context about the existing system. Reuse these patterns; do not invent new infrastructure.')

h2('1.1 Product overview')
para('NyayaMitra is a West-Bengal-specific civil legal navigator with 300 procedural workflows across 7 categories (Land/Mutation, Tenancy, Consumer & Real Estate, Partition & Succession, Money Recovery & Cheque Bounce, Family & Maintenance, plus auxiliary categories). It includes a paid self-service statutory notice drafter at ₹99 per notice (Razorpay Live), PWA support, tri-lingual UI (English default, Bengali, Hindi), and an admin control room.')

h2('1.2 Tech stack')
table(['Layer', 'Technology', 'Notes'], [
    ['Frontend', 'React 18 + TypeScript + Vite 8 + Tailwind CSS 3.4', 'SPA, query-param routing (?cat=&topic=&lang=&track=)'],
    ['Serverless', 'Vercel functions in /api folder (JS + TS mixed)', 'api/create-order.js, api/verify-payment.js, api/razorpay-webhook.js, api/notify.js, api/admin/*.ts'],
    ['Payments', 'Razorpay Standard Checkout (checkout.js) + server-side HMAC verification', 'Pattern: client opens checkout with order from /api/create-order; on success client POSTs payment ids + form data to an /api endpoint which verifies signature with RAZORPAY_KEY_SECRET using timingSafeEqual'],
    ['Database', 'Supabase (Postgres) via @supabase/supabase-js', 'Service role key used ONLY in /api functions; tables have RLS enabled with no public policies'],
    ['Email', 'nodemailer via smtp.gmail.com:465 (secure)', 'Env vars: GMAIL_USER, GMAIL_APP_PASSWORD. Used in api/notify.js, api/verify-payment.js, api/razorpay-webhook.js, api/admin-audit.js'],
    ['Icons', 'lucide-react', 'e.g. Scale, Truck, Zap, ShieldCheck'],
    ['PDF', 'jsPDF + html2canvas (client-side)', 'Notice generated fully in browser RAM'],
])

h2('1.3 Existing reusable patterns (MUST reuse)')
bullet('Razorpay signature verification: createHmac("sha256", RAZORPAY_KEY_SECRET).update(`${razorpay_order_id}|${razorpay_payment_id}`).digest("hex") compared to razorpay_signature with timingSafeEqual. Fail-closed (401 on mismatch).')
bullet('Razorpay script loading: an exported singleton ensureRazorpayLoaded() exists in src/components/DocumentDrafterModal.tsx. Export it and reuse; do not write a second loader.')
bullet('Supabase service-role client creation inside /api functions: createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY).')
bullet('Email sending: nodemailer.createTransport({host:"smtp.gmail.com", port:465, secure:true, auth:{user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD}}).')
bullet('State declarations in src/App.tsx near line ~325 (e.g. showPolicyModal). Add new modal states in the same block.')
bullet('CSS animation class animate-pulse-glow already exists in src/index.css (glowing pulse keyframes) — reuse for glowing buttons; do not duplicate keyframes.')

h2('1.4 Environment variables already configured in Vercel Production')
table(['Variable', 'Purpose'], [
    ['RAZORPAY_KEY_ID', 'Razorpay Live key id (public)'],
    ['RAZORPAY_KEY_SECRET', 'Razorpay Live secret (server-side HMAC)'],
    ['SUPABASE_URL', 'Supabase project URL'],
    ['SUPABASE_SERVICE_ROLE_KEY', 'Server-only DB writes'],
    ['GMAIL_USER', 'namaste@nyayamitrawb.in (SMTP sender)'],
    ['GMAIL_APP_PASSWORD', 'Gmail app password for SMTP'],
    ['ADMIN_JWT_SECRET', 'Admin panel session signing'],
])

h2('1.5 CONFIRMED DECISIONS (owner responses locked 2026-10-23 — implement exactly as stated, do not re-ask)')
table(['#', 'Decision Point', 'Owner Response', 'Implementation Consequence'], [
    ['D1', 'Advocate Connect email recipients', 'FLAG 1 = Option C — send to BOTH khantanweer85@gmail.com AND namaste@nyayamitrawb.in', 'api/advocate-connect.js sends every paid request to both inboxes: advocate (khantanweer85@gmail.com) for action + admin domain inbox (namaste@nyayamitrawb.in) as audit trail. Owner has explicitly overridden the earlier project rule that excluded khantanweer85@gmail.com from notifications. Privacy Policy modal must be updated to disclose that citizen data (name, mobile, email, query) is shared with the independent advocate for contact purposes.'],
    ['D2', 'Admin domain', 'FLAG 2 = .in confirmed', 'All references remain namaste@nyayamitrawb.in (matches live domain, SSL, schema, sitemap). The .com variant in earlier correspondence was a typo — do NOT use nyayamitrawb.com anywhere.'],
    ['D3', 'BCI Rule 36 structuring of ₹499', 'FLAG 3 = Option A — blueprint structuring and disclaimer wording accepted as-is', '₹499 is a citizen-paid platform facilitation service fee. Platform takes 0% commission from the advocate; advocate is independent with Bar Council enrollment number displayed; the statutory disclaimer in Step 2.5.4 Section 2 renders unconditionally and must not be altered.'],
])

h2('1.6 Coding conventions')
bullet('TypeScript strict mode passes (npx tsc --noEmit must pass).')
bullet('Never add code comments unless essential (project convention).')
bullet('All server endpoints: validate method, fail-closed on signature mismatch, persist to Supabase before/after emails, return 200 JSON.')
bullet('Build command: npm run build (tsc && vite build) must pass after every change.')
bullet('UAT in dev server (npm run dev, port 5173) before confirming to user.')

doc.add_page_break()

# ================= SECTION 2: FEATURE 1 =================
h1('SECTION 2 — FEATURE 1: LEGAL ADVOCATE CONNECT (₹499)')

h2('2.1 Objective')
para('Add a glowing golden "Connect Legal Advocate (₹499)" button beside the existing "Open Official Government Portal" button on ALL 300 workflow views. Clicking it opens a dedicated modal page showing the advocate’s bio, Bar Council license, achievements, a citizen contact form, and a "Pay & Send to Advocate" button that invokes Razorpay for ₹499. After verified payment, the citizen’s details are emailed to both the advocate and the admin, and a Thank-You screen promises contact within 24 working hours.')

h2('2.2 User flow')
numbered('User is on any workflow view → sees glowing golden button beside portal button.')
numbered('Click → AdvocateConnectModal opens: advocate bio card + statutory disclaimer + form (name, mobile, email, comment).')
numbered('User clicks "Pay & Send to Advocate (₹499)" → client first calls existing /api/create-order with amount=49900 → receives {orderId, keyId}.')
numbered('Razorpay Checkout opens (₹499). User pays.')
numbered('On handler success → client POSTs {razorpay_order_id, razorpay_payment_id, razorpay_signature, citizenName, mobile, citizenEmail, comment, workflowId, workflowTitle} to /api/advocate-connect.')
numbered('Server: verify HMAC (fail-closed) → insert row in Supabase table advocate_connect_requests → send email to [advocate, admin] → return 200.')
numbered('Client shows success screen: Thank You + Payment ID + 24-working-hours promise.')

h2('2.3 Architecture')
code('''Workflow View (300 pages)
   └─ [glowing golden button: "Connect Legal Advocate"]        (App.tsx)
        └─ AdvocateConnectModal                                 (new component)
             ├─ Section 1: Advocate bio (src/data/advocateProfile.ts)
             ├─ Section 2: Statutory disclaimer strip
             ├─ Section 3: Citizen form (validated)
             └─ Section 4: Pay ₹499
                  ├─ POST /api/create-order  {amount: 49900}      (existing endpoint)
                  ├─ Razorpay Checkout (checkout.js)
                  └─ POST /api/advocate-connect                   (new endpoint)
                       ├─ HMAC verify (RAZORPAY_KEY_SECRET)
                       ├─ INSERT supabase.advocate_connect_requests
                       ├─ nodemailer → khantanweer85@gmail.com + namaste@nyayamitrawb.in
                       └─ 200 → client renders Thank-You screen''')

h2('2.4 Prerequisites')
table(['#', 'Task', 'Owner', 'Time'], [
    ['1', 'Decisions D1/D2/D3 — CONFIRMED (see Section 1.5)', 'Done', '—'],
    ['2', 'Collect advocate details for profile (photo, Bar Council enrollment number, courts, achievements)', 'User', '30 min'],
    ['3', 'Upload advocate photo to public/assets/advocate-photo.jpg', 'User', '5 min'],
    ['4', 'Razorpay account already LIVE — no new config needed', 'Done', '—'],
])

h2('2.5 Implementation steps (granular)')

h3('Step 2.5.1 — Create advocate profile data file')
para('TASK: Create new file src/data/advocateProfile.ts with exactly this shape:')
code('''export const ADVOCATE_PROFILE = {
  name: 'Adv. Khantanweer',
  barCouncilId: 'WB/____/____',
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
};''', 'FILE: src/data/advocateProfile.ts')
callout('Fill every placeholder (barCouncilId, enrollmentYear, experienceYears, achievements) with REAL values before production. Displaying a fake Bar Council number is a legal-credibility risk.')

h3('Step 2.5.2 — Create Supabase table')
para('TASK: Run in Supabase SQL Editor:')
code('''CREATE TABLE IF NOT EXISTS public.advocate_connect_requests (
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
ALTER TABLE public.advocate_connect_requests ENABLE ROW LEVEL SECURITY;''', 'SQL: Supabase SQL Editor')
para('Verification: SELECT * FROM public.advocate_connect_requests LIMIT 5; must return empty set (no error). No public policies — service_role writes only (same pattern as razorpay_webhook_events).')

h3('Step 2.5.3 — Add glowing golden button in workflow view')
para('TASK: In src/App.tsx, locate the workflow roadmap card button that renders "Open Official Government Portal" (search for ExternalLink icon usage inside the main workflow section). Insert this button immediately AFTER it, inside the same flex container:')
code('''{/* ADVOCATE CONNECT — glowing golden CTA (all 300 workflows) */}
<button
  type="button"
  onClick={() => setShowAdvocateModal(true)}
  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm shadow-[0_0_20px_rgba(245,158,11,0.7)] animate-pulse-glow transition hover:scale-105 cursor-pointer border-2 border-amber-300"
  title="Connect with Legal Advocate (₹499)"
>
  <Scale className="w-4 h-4" />
  <span>Connect Legal Advocate (₹499)</span>
</button>''', 'FILE: src/App.tsx (workflow roadmap section)')
para('Also add near line ~325 with other modal states:')
code("const [showAdvocateModal, setShowAdvocateModal] = useState(false);", 'FILE: src/App.tsx (state block)')
para('Also add import at top of App.tsx:')
code("import { AdvocateConnectModal } from './components/AdvocateConnectModal';", 'FILE: src/App.tsx (imports)')
para('Render the modal next to LegalPolicyModal render block (~line 1346):')
code('''{showAdvocateModal && (
  <AdvocateConnectModal
    isOpen={showAdvocateModal}
    onClose={() => setShowAdvocateModal(false)}
    lang={lang}
    workflowId={selectedSubCat?.id ?? ''}
    workflowTitle={selectedSubCat?.title?.[lang] ?? ''}
  />
)}''', 'FILE: src/App.tsx (modal render block)')
para('NOTE: Scale icon is already imported in App.tsx. animate-pulse-glow already exists in src/index.css — do NOT re-add keyframes.')

h3('Step 2.5.4 — Create AdvocateConnectModal component')
para('TASK: Create src/components/AdvocateConnectModal.tsx. The component has 3 internal states: form view, processing, success. Full structural specification:')
bullet('Props: { isOpen: boolean; onClose: () => void; lang: Language; workflowId: string; workflowTitle: string }')
bullet('Early return null when !isOpen.')
bullet('Overlay: fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md, centered card max-w-2xl, same styling language as LegalPolicyModal.')
bullet('SECTION 1 — Advocate bio card: photo (ADVOCATE_PROFILE.photoUrl), name, Bar Council ID + enrollment year badge, courts as chips, specializations as chips, achievements as list, languages. Green "Bar Council Verified" style badge ONLY after real enrollment number is filled.')
bullet('SECTION 2 — Statutory disclaimer strip (amber box, MUST render):')
code('''"NyayaMitra is a technology platform that facilitates your request to the independent advocate
listed above. NyayaMitra is not a law firm, takes no referral commission from any advocate,
and does not guarantee case outcomes. The advocate is solely responsible for all professional
advice. Advocate-client relationship, if any, arises directly between you and the advocate."''')
bullet('SECTION 3 — Form fields with validation: citizenName (non-empty), mobile (Indian 10-digit, regex ^[6-9]\\d{9}$), citizenEmail (standard email regex), comment (optional textarea). Pay button disabled until valid.')
bullet('SECTION 4 — Pay handler (exact logic):')
code('''const handlePay = async () => {
  setError(''); setProcessing(true);
  try {
    await ensureRazorpayLoaded();          // import from DocumentDrafterModal (export it) or copy singleton
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
        if (res.ok) { setStep('success'); }
        else setError('Payment received but notification failed. Our team will contact you.');
      },
      modal: { ondismiss: () => setProcessing(false) }
    });
    rzp.open();
  } catch (e) {
    setError('Could not start payment. Please retry.');
    setProcessing(false);
  }
};''', 'FILE: src/components/AdvocateConnectModal.tsx (pay handler)')
bullet('IMPORTANT: /api/create-order currently may expect a fixed amount of 9900. Verify and extend it to accept an optional amount field (in paise) while defaulting to 9900 for backward compatibility, and optionally an order note/purpose. Do not break the existing ₹99 drafter flow.')
bullet('Success screen: green check, "Thank You!", text: "Your request has been sent to Adv. Khantanweer’s office. You will receive a call within 24 working hours." plus the Razorpay Payment ID in monospace, and a Close button.')
bullet('Reuse ensureRazorpayLoaded(): In src/components/DocumentDrafterModal.tsx change `const ensureRazorpayLoaded = ...` to `export const ensureRazorpayLoaded = ...` and import it here. This is the only modification allowed to that file.')

h3('Step 2.5.5 — Create API endpoint /api/advocate-connect')
para('TASK: Create api/advocate-connect.js (Vercel serverless, JS to match existing /api convention):')
code('''import { createHmac, timingSafeEqual } from 'crypto';
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
}''', 'FILE: api/advocate-connect.js')
para('Design notes: DB insert happens BEFORE email (payment proof is never lost). Emails are best-effort; endpoint still returns 200 if email fails but DB persisted, and the client shows success. Never expose RAZORPAY_KEY_SECRET client-side.')

h3('Step 2.5.6 — Extend /api/create-order for variable amounts')
para('TASK: Open api/create-order.js. Currently it likely hardcodes amount 9900 (₹99). Extend minimally:')
code('''// inside handler, replace fixed amount:
const body = req.body || {};
const amountPaise = Number(body.amount) === 49900 ? 49900 : 9900;
// use amountPaise in the razorpay.orders.create options and in the DB insert / response''')
para('Constraint: ONLY 9900 and 49900 are accepted values (whitelist) to prevent arbitrary amount tampering. Existing ₹99 drafter flow must remain untouched.')

h3('Step 2.5.7 — Build + UAT')
numbered('npm run build → must pass; npx tsc --noEmit → must pass.')
numbered('npm run dev → open any workflow (e.g. ?cat=cat-land-mutation&topic=sub-land-01&lang=en).')
numbered('Verify glowing golden button renders beside "Open Official Government Portal" with pulse-glow animation.')
numbered('Click → modal shows bio, disclaimer, form. Submit with empty fields → button disabled. Enter valid data → enabled.')
numbered('Click Pay → Razorpay opens with ₹499 and correct order id. Pay with live QR/UPI (₹499 real).')
numbered('Verify: success screen with Thank You + Payment ID; both inboxes (advocate + admin) receive the email; Supabase table has the row.')
numbered('Verify existing ₹99 drafter flow still works end-to-end (no regression).')

h2('2.6 UAT acceptance criteria (Feature 1)')
table(['#', 'Criterion', 'Pass Condition'], [
    ['A1', 'Button visibility', 'Glowing golden button on all 300 workflow views beside portal button'],
    ['A2', 'Modal content', 'Bio + Bar Council ID + disclaimer + form render without console errors'],
    ['A3', 'Validation', 'Invalid mobile/email blocks payment; valid input enables'],
    ['A4', 'Payment', 'Razorpay opens ₹499; success → signature-verified API call'],
    ['A5', 'Emails', 'Both ADVOCATE_EMAIL and ADMIN_EMAIL receive formatted HTML email'],
    ['A6', 'Persistence', 'advocate_connect_requests row with unique razorpay_payment_id'],
    ['A7', 'Success UX', 'Thank-You screen with Payment ID and 24-working-hours promise'],
    ['A8', 'No regression', 'Existing ₹99 drafter + webhook + Supabase pro_transactions unchanged'],
])

doc.add_page_break()

# ================= SECTION 3: FEATURE 2 =================
h1('SECTION 3 — FEATURE 2: SHIPROCKET NOTICE DISPATCH (₹199)')

h2('3.1 Objective')
para('At Step 4 of the notice drafter (after successful ₹99 payment and PDF download), add a "Download Notice & Send via Shiprocket (₹199)" button. The user enters pickup and delivery addresses (both within West Bengal), pays ₹199 via Razorpay on NyayaMitra, and the system automatically: creates a Shiprocket order via API → assigns AWB → schedules pickup → emails the user tracking details. The user prints the PDF and hands the envelope to the pickup agent.')

h2('3.2 Researched fee schedule (verified Oct 2026)')
table(['Item', 'Cost (INR)', 'Notes'], [
    ['Shiprocket Lite/Basic plan', 'Free plan; ₹26–35 per 500g prepaid', 'Start here; no monthly fee'],
    ['Cheapest courier 500g intra-WB (DTDC/Ecom/Xpressbees)', '₹26–45', 'Auto-assign picks cheapest'],
    ['India Post Speed Post via Shiprocket (201–500g, 200–1000 km)', '₹70.80', 'e.g. Kolkata → Siliguri'],
    ['Shiprocket Advanced plan', '₹499/month (avg ₹39/shipment)', 'Only if >60 shipments/month; fee refunded at 100 shipments'],
    ['Razorpay fee on ₹199', '≈ ₹4.70 (2% + GST)', 'Deducted by Razorpay'],
    ['Net margin per dispatch (₹199 − courier − fees)', '≈ ₹123–₹168', 'At ₹26–71 courier cost'],
])
callout('The Razorpay connection made inside the Shiprocket panel is for COD reconciliation and is NOT used in this flow. NyayaMitra collects payment first via its own Razorpay integration, then creates a Prepaid API order. Do not rely on panel-side payment automation.')

h2('3.3 API flow (verified against apiv2.shiprocket.in docs)')
code('''Step 4 UI (DocumentDrafterModal)
   └─ [Download Notice & Send via Shiprocket (₹199)]
        └─ Dispatch modal: Step A pickup address → Step B delivery address (WB only) → Pay ₹199
             ├─ POST /api/create-order {amount: 19900}   (extend whitelist)
             ├─ Razorpay Checkout ₹199
             └─ POST /api/shiprocket-order               (new endpoint)
                  ├─ verify Razorpay HMAC (fail-closed)
                  ├─ INSERT supabase.dispatch_orders
                  ├─ POST https://apiv2.shiprocket.in/v1/external/auth/login   (cache JWT 10 days)
                  ├─ POST /orders/create/adhoc            → {order_id, shipment_id}
                  ├─ POST /courier/assign/awb {shipment_id}  → AWB (auto-assign cheapest)
                  ├─ POST /courier/generate/pickup {shipment_id}
                  ├─ email user: AWB + tracking link + print/hand-over instructions
                  └─ 200 → client shows success + AWB
Shiprocket Panel → Webhook URL: /api/shiprocket-webhook (new)
   └─ status updates → update dispatch_orders → email user on Dispatched / Delivered / RTO''')

h2('3.4 Prerequisites (user actions — 30 minutes)')
numbered('Shiprocket panel → Settings → API → Configure → Create API User. Use an email DIFFERENT from the panel login (mandatory per Shiprocket docs). Save credentials for env vars.')
numbered('Settings → Pickup Locations → add the Kolkata pickup address → note the exact pickup_location NAME (e.g. "primary") — this string is required by the create-order API.')
numbered('Add wallet balance (₹500–1000 minimum). Shiprocket deducts per-shipment cost from this wallet.')
numbered('Complete KYC in the panel if prompted (needed for label generation).')
numbered('Assumed parcel spec: 0.5 kg, 25 × 18 × 2 cm envelope (legal documents).')

h2('3.5 Implementation steps (granular)')

h3('Step 3.5.1 — Environment variables (add to Vercel Production + Preview)')
table(['Variable', 'Value', 'Scope'], [
    ['SHIPROCKET_API_EMAIL', 'API user email from Step 3.4.1', 'Server-only'],
    ['SHIPROCKET_API_PASSWORD', 'API user password', 'Server-only'],
    ['SHIPROCKET_PICKUP_LOCATION', 'Exact pickup location name (e.g. primary)', 'Server-only'],
])

h3('Step 3.5.2 — Create Supabase table')
code('''CREATE TABLE IF NOT EXISTS public.dispatch_orders (
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
ALTER TABLE public.dispatch_orders ENABLE ROW LEVEL SECURITY;''', 'SQL: Supabase SQL Editor')

h3('Step 3.5.3 — Shiprocket helper (token + calls)')
para('TASK: Create api/shiprocket-client.js — a module-scope cached-token helper:')
code('''const SR_BASE = 'https://apiv2.shiprocket.in/v1/external';

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
}''', 'FILE: api/shiprocket-client.js')

h3('Step 3.5.4 — Create API endpoint /api/shiprocket-order')
code('''import { createHmac, timingSafeEqual } from 'crypto';
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

  // 1. Validate
  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature ||
      !senderName || !senderPhone || !senderAddress || !senderPincode ||
      !receiverName || !receiverPhone || !receiverAddress || !receiverPincode) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const pinRe = /^\\d{6}$/;
  if (!pinRe.test(senderPincode) || !pinRe.test(receiverPincode)) {
    return res.status(400).json({ error: 'Invalid PIN code' });
  }
  if (senderState !== undefined && receiverState !== undefined &&
      (senderState !== 'West Bengal' || receiverState !== 'West Bengal')) {
    return res.status(400).json({ error: 'Only intra-West Bengal dispatch supported' });
  }

  // 2. Verify Razorpay signature (fail-closed)
  const expected = createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`).digest('hex');
  const provided = String(razorpay_signature);
  if (!(expected.length === provided.length &&
        timingSafeEqual(Buffer.from(expected), Buffer.from(provided)))) {
    return res.status(401).json({ error: 'Invalid payment signature' });
  }

  // 3. Persist BEFORE shipping calls
  const { data: dispatchRow, error: dbError } = await supabase
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
    })
    .select('id')
    .single();
  if (dbError) console.error('[Dispatch] DB insert failed:', dbError);

  // 4. Create Shiprocket order (adhoc)
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

  // 5. Assign AWB (auto-assign cheapest)
  let awb = null, courier = null;
  try {
    const awbRes = await srPost('/courier/assign/awb', { shipment_id: shipmentId });
    awb = awbRes.awb_code || awbRes.response?.data?.awb_code || null;
    courier = awbRes.courier_name || awbRes.response?.data?.courier_name || null;
  } catch (awbErr) {
    console.error('[Dispatch] AWB assign failed:', awbErr?.data || awbErr);
  }

  // 6. Schedule pickup
  try {
    await srPost('/courier/generate/pickup', { shipment_id: shipmentId });
  } catch (pickupErr) {
    console.error('[Dispatch] Pickup schedule failed:', pickupErr?.data || pickupErr);
  }

  // 7. Update row
  await supabase.from('dispatch_orders').update({
    shiprocket_order_id: String(order.order_id ?? srOrderId),
    shiprocket_shipment_id: String(shipmentId ?? ''),
    awb_code: awb, courier_name: courier,
    tracking_status: awb ? 'awb_assigned_pickup_scheduled' : 'order_created_awaiting_awb'
  }).eq('razorpay_payment_id', razorpay_payment_id);

  // 8. Email the user
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', port: 465, secure: true,
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD }
    });
    const trackUrl = awb ? `https://shiprocket.co/tracking/${awb}` : 'https://app.shiprocket.in/seller/orders';
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: userEmail || senderPhone + '@noemail.invalid',
      subject: `[NyayaMitra] Dispatch confirmed — AWB ${awb || 'pending'}`,
      html: `<h2>Your notice dispatch is booked (₹199)</h2>
        <p><b>Shiprocket Order:</b> ${srOrderId}</p>
        <p><b>AWB:</b> ${awb || 'Being assigned shortly'}</p>
        <p><b>Courier:</b> ${courier || 'Auto-assigned'}</p>
        <p><b>Track:</b> <a href="${trackUrl}">${trackUrl}</a></p>
        <div style="background:#fef9c3;border:1px solid #facc15;border-radius:8px;padding:12px">
          <b>NEXT STEP (you):</b> Print the downloaded notice PDF, sign if required, place it in an envelope,
          and hand it to the pickup agent at the scheduled time.
        </div>`
    });
  } catch (mailErr) {
    console.error('[Dispatch] user email failed:', mailErr);
  }

  return res.status(200).json({
    success: true,
    shiprocketOrderId: srOrderId,
    shipmentId,
    awb, courier
  });
}''', 'FILE: api/shiprocket-order.js')
para('Notes: (a) Shiprocket weight unit is KG (0.5). (b) order_date format yyyy-mm-dd HH:mm. (c) The within-state check is primarily enforced client-side; server double-checks if state fields are passed. (d) If AWB assignment fails (courier unavailability), the order still exists in Shiprocket — status row reflects it and user email says AWB pending.')

h3('Step 3.5.5 — Extend /api/create-order whitelist for ₹199')
para('Same as Step 2.5.6 but also allow 19900: accepted amount values become {9900, 19900, 49900}. Keep the default 9900.')

h3('Step 3.5.6 — Step 4 UI in DocumentDrafterModal')
para('TASK: In src/components/DocumentDrafterModal.tsx Step 4 (Downloads) section, below the PDF download card, add:')
code('''<button
  type="button"
  onClick={() => setDispatchStep('address')}
  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl
    bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400
    text-white font-extrabold shadow-lg hover:scale-[1.02] transition"
>
  <Truck className="w-5 h-5" />
  <span>Download Notice & Send via Shiprocket (₹199)</span>
</button>''', 'FILE: src/components/DocumentDrafterModal.tsx (Step 4)')
bullet('Add import { Truck } from lucide-react. Add state dispatchStep: null | "address" | "processing" | "success".')
bullet('Address modal (render when dispatchStep === "address"): two bordered sections — PICKUP (prefill sender name/phone/address from existing drafter inputs where available; editable) and DELIVERY (receiver name, 10-digit phone, address, city, 6-digit PIN). Both states fixed to West Bengal (display-only field). Client-side validation: PIN regex ^\\d{6}$, phone ^[6-9]\\d{9}$.')
bullet('Pay button repeats the same create-order (amount 19900) → Razorpay → POST /api/shiprocket-order pattern as Feature 1. On success: show AWB, courier, tracking URL, and the "print PDF → hand to pickup agent" instruction box.')

h3('Step 3.5.7 — Webhook endpoint + panel configuration')
code('''// FILE: api/shiprocket-webhook.js
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
}''', 'FILE: api/shiprocket-webhook.js')
para('Panel configuration: Shiprocket → Settings → API & Webhooks → Webhook URL = https://nyayamitrawb.in/api/shiprocket-webhook → enable "Order" / "Shipment status" events → Save. Shiprocket webhooks are unauthenticated by design; we treat them as best-effort status enrichment only (payment and order creation are already signature-verified upstream).')

h2('3.6 UAT acceptance criteria (Feature 2)')
table(['#', 'Criterion', 'Pass Condition'], [
    ['B1', 'Button placement', 'Visible on Step 4 only after successful ₹99 payment (same as PDF card)'],
    ['B2', 'Address validation', 'Bad PIN/phone blocked; WB-only enforced; prefill works'],
    ['B3', 'Payment', 'Razorpay ₹199; signature verified server-side; whitelisted amount'],
    ['B4', 'Shiprocket order', 'Order visible in Shiprocket panel with correct addresses + 0.5kg'],
    ['B5', 'AWB + pickup', 'AWB assigned (or tracked pending) and pickup scheduled'],
    ['B6', 'User email', 'Email with AWB + tracking link + print/hand-over instructions'],
    ['B7', 'Webhook', 'Status change in panel reflects in dispatch_orders + user email'],
    ['B8', 'Persistence', 'dispatch_orders row with unique razorpay_payment_id'],
    ['B9', 'No regression', '₹99 drafter, ₹499 advocate connect (Feature 1) unaffected'],
])

doc.add_page_break()

# ================= SECTION 4 =================
h1('SECTION 4 — COMBINED LAUNCH SEQUENCE')
table(['Day', 'Task'], [
    ['1', 'Decisions D1/D2/D3 CONFIRMED. User to supply: advocate profile details (Bar Council number, photo, achievements) + Shiprocket API user creation, pickup location, KYC, wallet balance'],
    ['2–3', 'Build Feature 1 (profile data → Supabase table → button → modal → create-order extension → API)'],
    ['4', 'UAT Feature 1 with live ₹499 payment; verify both inboxes (advocate + admin) + Supabase row'],
    ['5–6', 'Build Feature 2 (client helper → dispatch_orders table → order API → Step 4 UI → webhook)'],
    ['7', 'UAT Feature 2 with live ₹199 payment + real envelope handover; verify panel order, AWB, webhook'],
    ['8', 'git commit → push → Vercel Preview deployment; re-run both UATs on Preview; verify env vars present in Preview scope'],
    ['9', 'Promote to Production; update Privacy & Refund policy modals (see Section 5); submit updated sitemap; monitor Vercel function logs for /api/advocate-connect and /api/shiprocket-order for first 48 hours'],
])

h1('SECTION 5 — COMPLIANCE & RISK NOTES')
bullet('BCI Rule 36 (Decision D3 — structuring accepted as-is): The ₹499 is a citizen-paid platform facilitation fee. The platform receives 0% commission from the advocate. The advocate’s independent status and Bar Council enrollment number must be displayed. The statutory disclaimer in Step 2.5.4 Section 2 must render unconditionally and must not be altered.')
bullet('DPDP Act 2023 (Decision D1 — dual-inbox confirmed): Citizen name/mobile/email/comment are personal data. They are stored in Supabase (RLS, service-role only) and emailed to BOTH the advocate (khantanweer85@gmail.com) for contact purposes AND the admin audit inbox (namaste@nyayamitrawb.in). MANDATORY before production: update the Privacy Policy modal text in LegalPolicyModal.tsx to disclose — (a) Advocate Connect shares citizen contact details and query with the independent advocate; (b) Dispatch shares sender/receiver address and phone with the courier partner (Shiprocket) solely for delivery. Also extend Refund Policy: Advocate Connect — refundable if advocate does not call within 72 working hours; Dispatch — courier fee non-refundable once AWB assigned, full refund if order creation fails before AWB.')
bullet('Payment integrity: Both features reuse the existing fail-closed HMAC verification. Amounts are whitelisted (9900 / 19900 / 49900). Never accept raw amounts from client without whitelist.')
bullet('Razorpay settlement: ₹499 and ₹199 settle to the same LEXIPULSE TECHNOLOGIES live account as the existing ₹99 flow. No new merchant setup needed.')

h1('APPENDIX A — SHIPROCKET API QUICK REFERENCE')
table(['Operation', 'Method + Path', 'Auth', 'Key payload'], [
    ['Authenticate', 'POST /v1/external/auth/login', 'None', '{email, password} → {token} (JWT, ~10 days)'],
    ['Create adhoc order', 'POST /v1/external/orders/create/adhoc', 'Bearer token', 'order_id, order_date, pickup_location (name), billing_*, shipping_*, order_items[], payment_method: Prepaid, sub_total, length/breadth/height/weight(kg)'],
    ['Assign AWB', 'POST /v1/external/courier/assign/awb', 'Bearer token', '{shipment_id} (omit courier_id for auto-assign cheapest)'],
    ['Generate pickup', 'POST /v1/external/courier/generate/pickup', 'Bearer token', '{shipment_id}'],
    ['Track by AWB', 'GET /v1/external/courier/track/awb/{awb}', 'Bearer token', '—'],
    ['Base URL', 'https://apiv2.shiprocket.in/v1/external', '—', 'All calls JSON; Content-Type: application/json'],
])
para('Gotchas: (1) pickup_location must EXACTLY match a pickup location name in the panel. (2) order_id must be unique — we use NYM-DSP-<epoch ms>. (3) Weight is in KG. (4) API user credentials ≠ panel login credentials. (5) Token cached ~10 days; refresh on 401.')

h1('APPENDIX B — EXISTING CODE TOUCHPOINTS (for AI navigation)')
table(['File', 'Relevance'], [
    ['src/App.tsx', 'Workflow view button insertion (roadmap card, ExternalLink portal button); state block ~line 325; modal render block ~line 1346'],
    ['src/components/DocumentDrafterModal.tsx', 'Step 4 downloads section for dispatch button; ensureRazorpayLoaded() singleton (export it)'],
    ['src/components/LegalPolicyModal.tsx', 'Update Privacy + Refund policy text for new data flows'],
    ['api/create-order.js', 'Extend amount whitelist {9900, 19900, 49900}'],
    ['api/notify.js', 'Reference pattern for nodemailer Gmail SMTP'],
    ['api/verify-payment.js', 'Reference pattern for HMAC verification'],
    ['src/index.css', 'animate-pulse-glow keyframes (already exists — reuse)'],
    ['public/sitemap.xml', 'No change required (features are in-app, not new routes)'],
])

# Save
out = 'NyayaMitra_Feature_Implementation_Blueprint.docx'
doc.save(out)
print(f'Saved: {out}')