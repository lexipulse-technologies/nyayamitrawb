# NyayaMitra — Civil Legal Navigator
## Technical Documentation for Google Play Store Submission

---

## 📋 EXECUTIVE SUMMARY (Play Store Description)

**NyayaMitra** is a free, trilingual civil legal companion for West Bengal — built by **LEXIPULSE TECHNOLOGIES**.  
Whether you're a tenant facing eviction, a landowner with mutation issues, a consumer with a defective product, or someone navigating civil legal disputes, NyayaMitra gives you **step-by-step legal roadmaps** in **English, বাংলা, and हिन्दी**

### What You Get:
- **300+ Civil Workflows** across 6 categories (Land, Tenancy, Consumer, Money, Family, Partition) covering Kolkata & 22 WB districts
- **Official Government Portal Links** — Banglarbhumi, KMC, e-Courts, WB Registration, and many more
- **E-Library Pro** — 88 bare acts (Central & State) in a secure, read-only viewer (no downloads, no copying)
- **Document Drafting Service** — ₹99 for statutory notice draft
- **Advocate Consultation** — ₹499 for 60-minute slot with enrolled advocate (Calendly scheduling)
- **Audio Roadmaps** — Listen to your legal steps in Bengali, Hindi, or English
- **Works Offline** — Core features work without internet
- **Zero Ads, Zero Tracking** — Your data stays private

**Made for Bengal. By Bengal. For Bengal's People.**  
BCI Rule 36 Compliant • DPDP Act 2023 Verified • SSL Encrypted

---

## 🏗️ TECHNICAL ARCHITECTURE

### Platform Strategy
| Aspect | Decision |
|--------|----------|
| **Approach** | Capacitor v8 wrapper around Vite + React 19 + TypeScript SPA |
| **Platforms** | Android only (no iOS) |
| **Package ID** | `in.nyayamitrawb` |
| **Min SDK** | API 24 (Android 7.0) |
| **Target SDK** | API 36 (Android 14) |
| **Version** | 1.0.0 (versionCode 1) |

### Codebase Structure
```
nyayamitra/
├── src/
│   ├── components/          # 11 core UI components
│   ├── pages/               # ELibraryProPage
│   ├── hooks/useCapacitor.ts # Capacitor plugin integrations
│   ├── utils/               # apiBase, speechEngine, triageEngine
│   ├── data/                # civilLegalData, elibraryCatalog, advocateProfile
│   └── App.tsx              # Main app with routing & state
├── api/                     # 9 Vercel serverless functions (backend)
├── android/                 # Capacitor Android project
├── capacitor.config.ts      # Capacitor configuration
└── scripts/generate-icons.mjs # Adaptive icon generator
```

### Capacitor Plugins (6)
| Plugin | Version | Purpose |
|--------|---------|---------|
| `@capacitor/app` | 8.1.2 | App exit handling |
| `@capacitor/network` | 8.0.1 | Online/offline detection |
| `@capacitor/preferences` | 8.0.1 | Trilingual persistence (en/bn/hi) |
| `@capacitor/share` | 8.0.3 | Workflow/document sharing |
| `@capacitor/splash-screen` | 8.0.2 | Native 5s splash with brand navy |
| `@capacitor/status-bar` | 8.0.4 | Dark navy status bar with overlay |

---

## 🔧 KEY FEATURES & IMPLEMENTATION

### 1. Trilingual Support (en/bn/hi)
- **Persistence**: Capacitor Preferences (native) / localStorage (web fallback)
- **Scope**: Full UI — headers, modals, workflows, E-Library, AI chat, policies
- **Deep-linking**: `?lang=bn|hi|en` parameter support

### 2. Splash Screen
- **Duration**: 5 seconds (web) / Native splash (Android)
- **Audio**: Legal-themed F-major arpeggio (F3→A3→C4→F4) via Web Audio API — **zero bytes, zero latency, offline**
- **Background**: Brand navy `#0a1e34` with emblem
- **Dismiss**: Auto + manual skip + "Don't show again" checkbox

### 3. Offline Support
- **Detection**: Capacitor Network plugin + `navigator.onLine` fallback
- **Banner**: Non-intrusive offline indicator
- **Assets**: Bundled in APK for shell offline access

### 4. E-Library Pro (88 PDFs)
- **Structure**: Central_Acts (70) / West_Bengal_Acts (14) / Regulations_Rules (4)
- **Viewer**: PDF.js v4 canvas renderer (lazy-loaded)
- **Security**: Context menu, copy, cut, paste, drag, Ctrl+C/X/S/P/U, download — all blocked
- **Navigation**: Page thumbnails, zoom controls, prev/next, page X of Y
- **Source**: `https://nyayamitrawb.in/statutes/**/*.pdf`

### 5. Payments (Razorpay Live)
| Service | Amount | Purpose |
|---------|--------|---------|
| Notice Draft | ₹99 (9,900 paise) | Statutory legal notice generation |
| Notice Dispatch | ₹199 (19,900 paise) | Draft + registered post |
| Advocate Connect | ₹499 (49,900 paise) | 60-min consultation + Calendly |

- **Flow**: `create-order` → Razorpay WebView checkout → `verify-payment` (HMAC-SHA256 server-side) → `advocate-connect`/`notify`
- **Security**: Only `RAZORPAY_KEY_ID` (public) in app; secrets server-side
- **Classification**: Real-world advocate services — **exempt from Google Play Billing**

### 6. AI Sahayak (NyayaMitra AI)
- **Endpoint**: `POST /api/chat` (Vercel)
- **Guardrails**: Civil law only, BCI Rule 36 footer mandatory, no markdown, declines criminal queries with DLSA 15100 referral
- **Identity Lock**: "NyayaMitra AI Sahayak" branding enforced

### 7. TTS Roadmap Player
- **Endpoint**: `GET /api/tts?text=&lang=` (bn/hi/en)
- **Limits**: 1000 chars, 160-char chunks, audio/mpeg streaming
- **Player**: HTML5 Audio with play/pause/seek

### 8. Exit Confirmation
- **Button**: Header top-right (LogOut icon)
- **Dialog**: "Exit Application?" → Cancel / Yes, Exit
- **Android**: `@capacitor/app` → `App.exitApp()`
- **Web**: `window.close()`

### 9. Admin Exclusion (App Only)
- Admin Login button & modal hidden via `Capacitor.isNativePlatform()` guard
- **Website unchanged** — admin features fully functional on `nyayamitrawb.in`

---

## 🔐 SECURITY & COMPLIANCE

### Data Protection
- **No secrets in APK**: Verified via grep for `SERVICE_ROLE`, `GMAIL_APP`, `KEY_SECRET`
- **HTTPS only**: All API calls to `https://nyayamitrawb.in/api/*`
- **CORS**: `https://localhost` (Capacitor) + production origins
- **Encryption**: TLS 1.2+ in transit

### Privacy (DPDP Act 2023)
- **Collected**: Name, mobile, email (only via Advocate Connect form)
- **Payments**: Processed by Razorpay (PCI-DSS compliant)
- **Analytics**: None
- **Ads**: None
- **Account deletion**: Not applicable (no accounts)

### Play Store Compliance
- **Target API**: 36 (Android 14) ✅
- **Content Rating**: Everyone
- **Privacy Policy**: `https://nyayamitrawb.in` (Privacy Policy page)
- **Support Email**: `namaste@nyayamitrawb.in`
- **BCI Rule 36**: Displayed on splash, AI responses, advocate modal

---

## 📦 BUILD & RELEASE PIPELINE

### Debug APK (Development)
```bash
npm run build           # Vite production build (~3s)
npx cap sync android    # Copy assets + update plugins
cd android
./gradlew assembleDebug # Debug APK (~4s)
```
**Output**: `android/app/build/outputs/apk/debug/app-debug.apk` (~77 MB)

### Release AAB (Play Store)
```bash
cd android
./gradlew bundleRelease # Signed AAB via Play App Signing
```
**Output**: `android/app/build/outputs/bundle/release/app-release.aab`

### Signing
- **Method**: Play App Signing (Google manages keystore)
- **Local keystore**: Not stored in repo; passwords held by owner only

---

## 🧪 UAT VALIDATION CHECKLIST

| Test | Status |
|------|--------|
| Splash screen (5s + audio) | ✅ |
| Language switch (en/bn/hi) | ✅ |
| Offline banner appears | ✅ |
| Workflow navigation (all 6 categories) | ✅ |
| Territory tracks (rural/urban) | ✅ |
| E-Library Pro — 5+ PDFs open | ✅ |
| PDF security (no copy/download) | ✅ |
| AI Sahayak — criminal query declined | ✅ |
| TTS plays (bn/hi/en) | ✅ |
| Document Drafter ₹99 flow | ✅ |
| Advocate Connect ₹499 + Calendly email | ✅ |
| Exit button + confirmation | ✅ |
| Share FAB works | ✅ |
| Admin Login hidden on app | ✅ |
| Admin Login works on website | ✅ |
| New adaptive icon displays | ✅ |
| Build passes (0 errors) | ✅ |

---

## 📱 DEVICE COMPATIBILITY

| Category | Tested |
|----------|--------|
| Small phones (375dp) | ✅ |
| Normal phones (412dp) | ✅ |
| Large phones (1536dp) | ✅ |
| Tablets (7") | ✅ |
| Android 10–15 | ✅ |
| Low-end (2GB RAM) | ✅ |

**Performance**: Cold start ≤3s, TTI ≤5s on mid-range devices

---

## 📞 SUPPORT & CONTACT

- **Developer**: LEXIPULSE TECHNOLOGIES
- **Support Email**: `namaste@nyayamitrawb.in`
- **Advocate**: Advocate Tanweer Ahmed Khan (Bar Council of India enrolled)
- **Website**: `https://nyayamitrawb.in`
- **Privacy Policy**: `https://nyayamitrawb.in` (Privacy Policy tab)

---

## 📝 CHANGELOG

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-11-14 | Initial release: Core shell, payments, E-Library, AI, TTS, exit confirmation, new logo |

---

*Document generated: 2026-11-14*  
*For internal use and Google Play Store submission*