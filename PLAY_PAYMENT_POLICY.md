# Google Play Payment Policy Compliance Note

## NyayaMitra Android App — Payment Classification

### Payment Flows in App

| Feature | Amount | Purpose | Classification |
|---------|--------|---------|----------------|
| DocumentDrafterModal — Notice Drafting | ₹99 (9,900 paise) | Statutory legal notice generation by advocate | **Real-world service fee** |
| DocumentDrafterModal — Notice Dispatch | ₹199 (19,900 paise) | Statutory legal notice + registered post dispatch | **Real-world service fee** |
| AdvocateConnectModal | ₹499 (49,900 paise) | 60-minute advocate consultation scheduling | **Real-world service fee** |

### Policy Justification (Google Play Billing Exemption)

**All three payment tiers are fees for real-world legal services performed by a licensed advocate:**

1. **₹99 Notice Drafting** — A qualified advocate drafts a court-ready statutory legal notice (Section 80 CPC, Section 138 NI Act, etc.) tailored to the citizen's dispute. This is professional legal document preparation, not digital content.

2. **₹199 Notice Dispatch** — Includes the ₹99 drafting service PLUS physical registered post dispatch (India Post) with tracking. The advocate physically sends the notice via postal service.

3. **₹499 Advocate Connect** — Citizen pays for a 60-minute consultation slot with Advocate Tanweer Ahmed Khan (Bar Council of India enrolled). The consultation occurs via phone/video/meeting — a real professional service.

**Key Points:**
- No digital goods, subscriptions, in-app currency, or virtual items are sold
- Each payment triggers a physical/real-world service by a human advocate
- Services fall under "goods or services outside of the app" per Google Play Billing Policy
- Razorpay handles payment processing; Google Play is not the payment processor
- Compliance with Google Play Billing Policy: "Apps that offer physical goods or services... may use payment processors other than Google Play's billing system"

### Technical Implementation

- **Payment Gateway:** Razorpay Live Checkout (web-based) running inside Capacitor Android WebView
- **Order Creation:** `POST https://nyayamitrawb.in/api/create-order` (amount whitelist: 9900, 19900, 49900 paise)
- **Signature Verification:** `POST https://nyayamitrawb.in/api/verify-payment` (HMAC-SHA256 server-side)
- **Advocate Notification:** `POST https://nyayamitrawb.in/api/advocate-connect` → dual email to `namaste@nyayamitrawb.in` + `khantanweer85@gmail.com` with Calendly link
- **UPI Intent Handling:** Razorpay's native Android bridge handles GPay/PhonePe/Paytm app switching
- **Fallback:** `window.open` to Chrome Custom Tabs if WebView checkout blocked

### Security Invariants (Per Architecture Decisions)

- **NO server secrets in app:** `RAZORPAY_KEY_SECRET`, `SUPABASE_SERVICE_ROLE_KEY`, `GMAIL_APP_PASSWORD` never bundled
- Only `RAZORPAY_KEY_ID` (public) returned by `/api/create-order` is used in app
- All HMAC verification, Supabase writes, and emailing stay server-side on Vercel
- CORS configured for `https://localhost` (Capacitor Android WebView origin)

### Play Console Declaration

**Data Safety Form:**
- Payments processed externally by Razorpay (PCI-DSS compliant)
- Personal info collected: name, mobile, email (via advocate-connect form only)
- No analytics/tracking SDKs
- Data encrypted in transit (HTTPS)

**Privacy Policy URL:** https://nyayamitrawb.in (Privacy Policy / DPDP page)

**Content Rating:** "Everyone" — legal information and professional service booking

**Target Audience:** Adults (18+) seeking civil legal guidance in West Bengal

---

**Status:** ✅ Architecture compliant — ready for Play Store submission
**Test Gate:** P2 requires one real small-value live payment test from Android device with email verification