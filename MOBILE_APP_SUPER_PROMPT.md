# NYAYAMITRA MOBILE APP — REUSABLE SUPER PROMPT (ANDROID ONLY)
> Copy everything between the BEGIN/END markers below into any capable AI coding agent
> (Kilo, Cursor, Claude Code, Codex, etc.) in a fresh session. Fill the three
> `[BUILD-TIME VARIABLES]` at the top before running. Re-runnable at any phase.
> TARGET: **Android application hosted on Google Play Store ONLY.** No iOS/iPhone/iPad
> deliverable exists in this project — do not create, configure, or reference any
> Apple/Xcode/APNs/TestFlight artifacts anywhere.

--- BEGIN SUPER PROMPT ---

## 0) BUILD-TIME VARIABLES (fill before running)
- PROJECT_FOLDER: C:\Users\Admin123\Downloads\Project\nyayamitra
- LIVE_API_BASE: https://nyayamitrawb.in
- RUN_PHASE: P0   (resume from any phase: P0–P7 — see §8)
- GIT_REMOTE: https://github.com/abhiroop786/nyayamitra  (branch: master)

## 1) ROLE & MISSION
You are an expert mobile product manager and senior full-stack engineer. Convert the
existing production website **https://nyayamitrawb.in** (source in PROJECT_FOLDER) into
an industry-grade, fully functional **native-shell Android application** shipping to the
**Google Play Store**. The app must achieve 100% feature, data, and functional parity
with the website **EXCEPT the admin back-office**, which is explicitly out of scope (§5).
Work inside PROJECT_FOLDER only. Never modify the live website's production behaviour;
all website-side changes are additive and safe. Android is the sole platform — every
decision, artifact, and test targets Android.

## 2) STANDING WORKFLOW RULES (non-negotiable, apply at every phase)
1. Structure every response modularly; never let output length truncate work mid-file.
2. Before starting each phase, confirm a RESTORE POINT exists: the git tree must be
   clean at the last pushed commit (`git status`), so rollback = `git reset --hard <sha>`
   or the phase tag `git tag mobile-p<phase>-backup`. Ask me before creating any commit.
3. Only I push to production/stores. After each phase you must run `npm run build`,
   confirm it passes, then STOP and wait for my explicit consent: **"Go Ahead"**.
4. Do not break any existing website feature or functionality. The web app must build
   and run identically after every phase (`npm run build` + smoke test the core flows).
5. Ask follow-up clarifying questions before coding whenever anything is ambiguous.
   Never assume, never guess.
6. Commit only after my explicit instruction per phase; use repo style
   ("Feature N: <summary>" / "feat: <summary>").

## 3) SOURCE OF TRUTH — VERIFIED FEATURE/DATA INVENTORY (re-verify before coding)
Stack: Vite + React 19 + TypeScript + Tailwind v4, lucide-react, @supabase/supabase-js,
pdfjs (lazy), Razorpay checkout, Vercel serverless under `/api/*`.

Product identity: **NyayaMitra — West Bengal Civil Legal Navigator & Citizen Advisory**
(parent: LEXIPULSE TECHNOLOGIES). Trilingual: English / বাংলা / हिन्दी (Language = 'en'|'bn'|'hi').
Domain data: **300 civil workflows** across 6 categories (Land, Tenancy, Consumer, Money,
Family, Partition), **23 WB districts**, dual territory tracks (rural_district /
metro_urban) with per-workflow track splitting, step-by-step roadmaps, required-document
checklists, fees/time notes, government portal links.

Runtime components in `src/components/` (all must exist in the app):
- SplashScreen (5s, memoized onClose) → native splash parity
- DisclaimerBanner (WB helplines: DLSA 15100, Cyber Fraud 1930, Banglarbhumi 1800-345-5555; BCI Rule 36 verified strip)
- AdvocateConnectModal — ₹499 Razorpay payment → POST /api/advocate-connect → success
  screen with mandatory Calendly scheduling block (https://calendly.com/namaste-nyayamitrawb/60mins)
- DocumentDrafterModal — ₹99 notice drafting / ₹199 dispatch (NM-DOC- reference ids),
  Razorpay checkout → /api/verify-payment → /api/notify
- AiChatAssistant — "NyayaMitra AI Sahayak" via /api/chat: civil-law-only guardrails,
  brand identity lock, no markdown/asterisks, mandatory BCI Rule 36 footer line,
  declines criminal-defense queries with DLSA 15100 guidance
- AudioRoadmapPlayer — TTS roadmap narration via /api/tts (bn/hi/en, 1000-char cap, 160-char chunks)
- CommandPalette — "Quick Jump" (Ctrl+K): workflow/category/district navigation
- CaseReadinessGauge — document-readiness progress
- LegalPolicyModal — Terms & Conditions, Privacy Policy (DPDP Act 2023), Refund Policy,
  Pricing & Delivery, Contact & Grievance
- OfflineBanner — connectivity state UI
- ELibraryProPage (/elibrarypro) — 88 official bare acts under /statutes/**.pdf,
  STATUTES tree map (Central_Acts 70 / West_Bengal_Acts 14 / Regulations_Rules 4),
  trilingual search, secure read-only PDF.js canvas reader (double-click/Read button;
  download, copy, paste, context-menu, Ctrl+C/X/S/P/U blocked)
- **EXCLUDED: AdminLoginModal, AdminAdvisorPanel, admin session logic** (§5)

Serverless API contracts the app consumes (base = LIVE_API_BASE + /api):
- POST /api/create-order {amount in paise, purpose} — whitelist 9900/19900/49900 → {keyId, orderId}
- POST /api/verify-payment {razorpay_order_id|payment_id|signature,...} → HMAC verification
- POST /api/advocate-connect {razorpay_*, citizenName, mobile, citizenEmail, comment, workflowId, workflowTitle} → emails Payment Confirmed + Calendly link to namaste@nyayamitrawb.in and khantanweer85@gmail.com
- POST /api/notify {notificationType: ADMIN_LOGIN_AUDIT (exclude) | PRO_DRAFTER_PAYMENT}
- POST /api/chat (AI Sahayak), GET /api/tts?text=&lang= (audio/mpeg)
- Static: /statutes/**.pdf (88 files), /assets/*, /brand/*
- NOT for mobile: /api/indexnow (SEO), /api/admin/* (admin), /api/razorpay-webhook (server-to-server)

## 4) LOCKED ARCHITECTURE DECISIONS
- **Strategy: Capacitor wrapper** around the existing Vite+React SPA (single codebase,
  100% UI reuse), Android platform only (`npx cap add android`). No React Native rewrite.
  No PWA-TWA shortcut. No iOS platform is ever added (`npx cap add ios` is forbidden).
- **APIs: reuse the live website backend** at LIVE_API_BASE. All fetch calls must use a
  single configurable `API_BASE` module (default LIVE_API_BASE; localhost override only
  for web dev). Do not duplicate backend logic in the app.
- **CORS (website-side, additive):** Vercel functions must accept the Android app origin —
  `https://localhost` (Capacitor Android WebView) — plus existing origins.
- **Payments in app:** keep the existing Razorpay Web checkout inside the Android WebView;
  UPI intent return handling on Android via Razorpay's own bridge. Compliance note:
  ₹99/₹199/₹499 are fees for real-world legal services (physical service performed by an
  advocate) — outside Google Play billing; no digital-content purchases exist in the app.
- **Security invariants (hard):**
  - NEVER bundle server secrets in the app: SUPABASE_SERVICE_ROLE_KEY, GMAIL_APP_PASSWORD,
    RAZORPAY_KEY_SECRET, JWT/admin secrets must not appear in app code, .env used by the
    app build, or dist output. Only the public RAZORPAY_KEY_ID (returned by create-order)
    is permitted.
  - All signature verification, Supabase writes, and emailing stay server-side.
  - Admin endpoints/keys are never referenced by the app.
  - PDF security posture (no download/copy/paste) must be preserved on Android.
- **PWA → Native:** the existing `sw.js`/manifest remain for the WEBSITE only. In the
  Android build, skip service-worker registration and rely on bundled assets for the
  offline shell.

## 5) EXPLICIT EXCLUSIONS (do not port)
Admin login, admin control room/panel, admin audit alerts, /api/admin/*, /api/indexnow,
sitemap.xml/robots.txt concerns, website-only SEO plumbing, and everything Apple/iOS.
The advocate/AI/TTS/payments serverless endpoints stay on the website backend and are
consumed as-is.

## 6) MOBILE ADAPTATION MATRIX (feature → Android treatment)
| Website capability | Android treatment |
|---|---|
| Splash 5s | Capacitor SplashScreen plugin, 5s parity, fade dismiss |
| Voice search (mic) | Web Speech API where the WebView supports it; graceful hide where unsupported; record-audio permission only if needed; do not block flow |
| TTS roadmap player | Keep /api/tts streaming into HTML5 Audio; background-play optional phase |
| PDF secure reader | PDF.js canvas path forced (Android WebViews cannot inline PDFs); pinch-zoom via scale controls; download/copy/paste blocked; files fetched via XHR from LIVE_API_BASE |
| Razorpay checkout | Same web checkout inside the Android WebView; UPI app intent return (GPay/PhonePe/Paytm) via Razorpay's bridge; `window.open` fallback to Chrome Custom Tabs if checkout is blocked |
| Calendly scheduling | Open https://calendly.com/namaste-nyayamitrawb/60mins in the system browser (Custom Tabs) |
| Quick Jump palette | Keep; remap Ctrl+K to a floating action button |
| Offline banner | Keep; plus Capacitor Network plugin for reliable detection |
| Language switch en/bn/hi | Identical; persist in Preferences plugin |
| Helplines | tel: links (15100, 1930, 1800-345-5555) via the native dialer |
| Email contact | mailto: namaste@nyayamitrawb.in |
| Share | Capacitor Share plugin for workflow + E-Library documents ("Share this workflow") |
| Status bar / notches | StatusBar plugin; edge-to-edge insets for cut-outs (Android 9+ display cutout mode) |
| App links | https://nyayamitrawb.in/* + /elibrarypro open in the app (Android App Links with assetlinks.json) — later phase |
| Push (P6) | Firebase Cloud Messaging via Capacitor PushNotifications; topics: district, category; scheduling reminders post-Calendly; runtime POST_NOTIFICATIONS permission priming (Android 13+) |

## 7) REQUIRED GOOGLE PLAY ARTIFACTS
- App name: "NyayaMitra — Civil Legal Navigator" (≤30 chars) ; short description ≤80 chars:
  "300 WB civil workflows, secure E-Library, AI Sahayak & advocate consult — বাংলা/हिन्दी/English"
- Package id (recommend): `com.lexipulse.nyayamitra` (confirm before P2)
- Versioning: semver `1.0.0`, versionCode 1 (increment per release build)
- Icons: adaptive Android icons (foreground/background layers, all mipmap densities)
  generated from `public/brand/` emblem (red scales emblem on white)
- Splash: native splash = brand navy #0a1e34 background + emblem, 5s parity
- Privacy policy URL: https://nyayamitrawb.in (Privacy Policy / DPDP page) — mandatory in Play Console
- Support email: namaste@nyayamitrawb.in ; no account creation exists → no account-deletion
  requirement; Play Data Safety form: name/email/phone collected via advocate-connect form,
  payments processed externally by Razorpay, no analytics/ads trackers, data encrypted in transit
- Release artifact: signed AAB via Play App Signing (keystore created in P5; I keep all
  passwords — agent never stores them)
- Play listing must repeat the BCI Rule 36 non-commercial disclaimer
- Content rating questionnaire, target-audience declaration, and target API level per
  current Play policy (agent must state the current Play target-API requirement during P5)

## 8) EXECUTION PHASES (run one phase per invocation; stop after each for "Go Ahead")
- **P0 — Inventory & scaffold re-verify:** confirm §3 against the repo (`src/components`,
  `api/*`, 88 PDFs present), print a parity checklist with ✅/⬜, scaffold
  `mobile/` workspace (Capacitor CLI init, Android-only, id per §7), add `API_BASE`
  module, CORS addition on Vercel functions. Exit: parity checklist approved by me.
- **P1 — Core shell parity:** splash, trilingual language persistence, header (E-LIBRARY
  PRO entry + QR share card), disclaimer banner, offline banner, hero + search +
  Quick Jump FAB, workflow navigation with territory tracks, CaseReadinessGauge,
  LegalPolicyModal. Exit: all render on an Android emulator; `npm run build` green.
- **P2 — Monetisation & advocate flows:** Razorpay create-order/verify-payment through
  LIVE_API_BASE from the app, DocumentDrafterModal (₹99/₹199) and AdvocateConnectModal
  (₹499) end-to-end incl. Calendly open + confirmation emails reaching both inboxes;
  Play payment-policy note documented. Exit: one real small-value live test payment from
  an Android device (I perform it), both emails received.
- **P3 — E-Library Pro mobile:** /elibrarypro parity — tree map, search, secure PDF.js
  reader (double-tap/Read → canvas, blocked download/copy/paste), 88 PDFs loading from
  LIVE_API_BASE with loading/error states. Exit: open ≥5 PDFs across categories on device.
- **P4 — AI Sahayak + TTS:** chat assistant with full guardrail parity (incl. exact
  footer line, model privacy), TTS roadmap player (bn/hi/en). Exit: guardrail test-script
  (criminal query, off-topic query, identity probe) all answered per spec.
- **P5 — Play Store readiness:** adaptive icons + splash, AAB signing setup (Play App
  Signing; keystore path documented — I keep passwords), privacy/data-safety answers,
  Play listing draft, Android App Links (assetlinks.json) config, release build:
  `npx cap sync android && cd android && ./gradlew bundleRelease` → signed AAB artifact.
  Exit: AAB produced and uploaded to Play internal testing track by ME.
- **P6 — Push notifications:** Firebase project (I create), google-services.json wired,
  FCM via Capacitor PushNotifications, topic subscribe by district/category, scheduling
  reminder post-Calendly, Android 13+ POST_NOTIFICATIONS runtime permission priming.
  Exit: push received on a physical Android device.
- **P7 — Hardening & release:** Android device-matrix regression (small/normal/large
  phones, 375–1536 CSS px, Android 10–15, low-end 2GB RAM device), performance budget
  (cold start ≤3s, TTI ≤5s on mid-range), crash-free ≥99.5% on the internal testing
  track, final store metadata + phone/7"-tablet screenshots, release checklist. Exit:
  my written release approval; I perform the Play Store submission myself.

## 9) ACCEPTANCE CRITERIA & VALIDATION (every phase)
- `npm run build` passes with zero errors; website bundle behaviour unchanged.
- Feature parity checklist (§3) rows all ✅ before P7 sign-off.
- Every API call from the app hits LIVE_API_BASE over HTTPS; zero secrets in `mobile/`
  (verify: grep for SERVICE_ROLE, GMAIL_APP, KEY_SECRET in `mobile/` must return nothing).
- Trilingual smoke: switch bn/hi/en → header, hero, modals, E-Library, AI chat all localize.
- Payment smoke per phase gate (P2): order → checkout → signature-verified success →
  emails with Calendly link to both IDs.
- No console errors in the Android WebView; graceful offline behaviour with OfflineBanner.
- Play rejections pre-empted: privacy policy linked, payment policy note, disclaimers
  present, target API level current, data safety form accurate.

## 10) OUTPUT STYLE (for the executing agent)
- Produce work in small verifiable modules; one file-group per response.
- Always show the exact commands you ran and their result summary.
- If a phase gate needs something from me (keystore passwords, google-services.json,
  Play Console access), list it as "BLOCKED ON: <item>" and stop.
- Never begin the next phase without my literal "Go Ahead".
- If any step appears to require macOS/Xcode/Apple tooling, STOP — that indicates scope
  drift; Android-only paths must always exist.

--- END SUPER PROMPT ---
