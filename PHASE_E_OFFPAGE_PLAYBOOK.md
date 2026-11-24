# PHASE E — OFF-PAGE AUTHORITY & CITATION PLAYBOOK

**Goal:** Strengthen NyayaMitra's entity authority in Google, Bing and AI search engines
(ChatGPT, Perplexity, Gemini) through Google Business Profile optimization, legal directory
citations, and academic outreach. This phase is ~90% external work — the code part is a small
`sameAs` schema scaffold that activates automatically as you add profile URLs.

**On-site status already shipped (do not re-do):** 306 static guide pages, FAQPage + HowTo +
Person + Article JSON-LD on 22 pillar pages, llms.txt / llms-full.txt, IndexNow, GA4.

---

## SECTION 0 — Code Scaffold: How Profile URLs Activate

**File:** `src/data/authorityProfiles.ts` (already committed in this phase)

Two arrays exist:

| Array | Feeds | Use for |
|-------|-------|---------|
| `ORGANIZATION_PROFILES` | `sameAs` on the **Organization** (LEXIPULSE TECHNOLOGIES) node in every guide page JSON-LD | Google Business Profile, Bing Places, business directories, official social pages |
| `ADVOCATE_PROFILES` | `sameAs` on the **Person** (Adv. Tanweer Ahmed Khan) node | Legal directory listings, bar association pages, LinkedIn |

**To activate a profile** — open the file, uncomment an example line, paste the real URL:

```ts
export const ORGANIZATION_PROFILES: AuthorityProfile[] = [
  { label: 'Google Business Profile', url: 'https://g.page/r/YOUR_ACTUAL_ID' },
];
```

Rules enforced by the code: only `https://` URLs, duplicates removed, malformed entries
silently ignored. **Empty arrays = zero schema change** (verified no-op in build).

After editing the file: run `npm run build` and deploy as usual. All 306 guide pages pick
the URLs up automatically.

---

## SECTION 1 — Google Business Profile Optimization (Profile Already Created)

### 1.1 NAP Consistency (do this FIRST — everything else depends on it)

NAP = **Name, Address, Phone**. Pick ONE exact format and use it character-for-character on
the GBP, the website contact page, and every directory citation below.

Recommended canonical NAP for NyayaMitra:

```
Name:     NyayaMitra — by Lexipulse Technologies
Address:  [your registered office address, exact as on GBP]
Phone:    [+91 XXXXX XXXXX — the number on GBP]
Website:  https://nyayamitrawb.in
Hours:    [as set on GBP]
```

> ⚠️ If the GBP name differs from what you want on directories, decide NOW and fix the GBP
> first. Inconsistent NAP is the #1 cause of failed local SEO.

**Website contact page check:** the site's Contact policy modal (`?policy=contact`) must show
the same phone/address. If you update NAP anywhere, update it everywhere the same day.

### 1.2 Categories & Attributes

| Setting | Recommended value |
|---------|-------------------|
| Primary category | **Legal services** |
| Secondary categories | Legal consultant, Law firm (add only what applies) |
| Service area | West Bengal + India (you serve statewide/nationally, not one city) |
| Languages | English, Bengali, Hindi |
| Attributes | Online care available, Wheelchair accessible (if true), Women-owned (if applicable) |

### 1.3 Services & Products → Deep Links to Guide Pages

Add 5–7 GBP "Services" that link to your pillar pages (these are your money pages):

1. Land Mutation (Banglarbhumi & KMC) → `https://nyayamitrawb.in/guides/sub-land-01-...`
2. Tenant Eviction & Rent Control → your `sub-tenancy-01` guide URL
3. Consumer Complaints (E-Jagriti) → your `sub-consumer-01` guide URL
4. Property Partition Suits → your `sub-partition-01` guide URL
5. Cheque Bounce (Sec 138 NI Act) → your `sub-money-01` guide URL
6. Divorce & Family Matters → your `sub-family-01` guide URL

(Find exact URLs in `public/sitemap.xml` — they are the 22 pillar URLs reviewed by the advocate.)

Use UTM on every link you place OUTSIDE the website:
`?utm_source=gbp&utm_medium=organic&utm_campaign=phase_e`

### 1.4 Google Posts (weekly cadence, 15 min/week)

Post template (works for every pillar guide):

```
[Hook question, e.g. "BL&LRO rejected your land mutation in West Bengal?"]
[1-line answer summary from the guide's Quick Answer]
→ Read the full step-by-step roadmap: [guide URL with UTM]
[Relevant emoji if brand voice allows]
```

Cadence: 1 post/week minimum. Alternate between pillar-guide posts and app-download posts
(`https://nyayamitrawb.in/app`).

### 1.5 Q&A Seeding (one-time, ~30 min)

Ask and answer 8–10 questions from the OWNER account, then have 2–3 other accounts upvote the
answers. Reuse the Phase D FAQ content (22 pillar pages × 3 FAQs = 66 ready-made Q&As).

Priority questions:
1. "Is NyayaMitra free to use?" — Yes, 300 roadmaps + 88 bare acts are free; advocate consult is ₹499.
2. "Who reviews the legal content?" — Advocate Tanweer Ahmed Khan (Bar Council ID WB/1863/2010).
3. "Does it work outside Kolkata?" — Yes, separate rural/district and Kolkata-urban paths for each workflow.
4. "Can I download bare acts?" — Yes, 88 official Central & WB Acts in the E-Library.
5. "Is there an Android app?" — Yes, free APK at nyayamitrawb.in/app.
6–10. Take the top 5 FAQs from `sub-land-01`, `sub-consumer-01`, `sub-money-01` pillar pages.

### 1.6 Review Strategy

**Request template (send after every completed advocate consult):**

```
Thank you for using NyayaMitra, [Name]. Would you take 60 seconds to share your
experience on Google? It helps other West Bengal citizens find reliable legal
guidance: [your GBP review short link]
```

**Response template (respond to EVERY review within 48h):**

```
Thank you, [Name]! We're glad the [topic] roadmap helped. NyayaMitra's content is
reviewed by Advocate Tanweer Ahmed Khan. For a personal consultation, connect at
https://nyayamitrawb.in — Connect Legal Advocate.
```

Target: 10 reviews in 60 days (ask every consult client; never incentivize — violates Google policy).

### 1.7 Photos (monthly)

Upload 2–4 photos/month: office/workspace, team, screenshots of the app UI, Calcutta High
Court events. Geotagged photos from Kolkata/WB rank better in local pack.

### 1.8 GBP Insights — What to Check Monthly

Dashboard → Performance: track **calls**, **website clicks**, **direction requests**,
**search queries that found you**. Record in the tracking table (Section 5).

---

## SECTION 2 — Legal Directory Citations (Build These In Order)

Create listings top-to-bottom; each one should carry the EXACT Section 1.1 NAP.
Every completed listing = one URL to paste into `authorityProfiles.ts`.

### Tier 1 — Do first (high entity value, free)

| # | Platform | URL to create listing | Feeds |
|---|----------|----------------------|-------|
| 1 | Bing Places | https://www.bingplaces.com | Organization |
| 2 | LinkedIn Company Page | https://www.linkedin.com/company/new | Organization |
| 3 | Justia Lawyer Directory | https://www.justia.com/lawyers/add-your-firm/ | Advocate |
| 4 | LawRato | https://lawrato.com (Advocate profile signup) | Advocate |
| 5 | SoOLEGAL | https://www.soolegal.com | Advocate |
| 6 | YouTube Channel (brand) | https://www.youtube.com | Organization |

### Tier 2 — Second pass

| # | Platform | URL | Feeds |
|---|----------|-----|-------|
| 7 | Vakilsearch | https://www.vakilsearch.com | Advocate |
| 8 | LawyersClubIndia | https://www.lawyersclubindia.com | Advocate |
| 9 | LawBhoomi | https://lawbhoomi.com | Advocate |
| 10 | Justdial | https://www.justdial.com | Organization |
| 11 | Sulekha | https://www.sulekha.com | Organization |
| 12 | Facebook Page | https://www.facebook.com | Organization |

### Tier 3 — Optional / when time permits

13. Crunchbase (Organization) — helps AI engines with company facts
14. X (Twitter) profile (Organization)
15. IndiaMART — only if you want B2B leads; skip otherwise
16. Avvo/FindLaw — US-centric, low ROI for India; skip

### Citation Discipline

- Same NAP everywhere, one session per tier, screenshot each listing after approval.
- Description template (150–160 chars) for directories:

```
NyayaMitra by Lexipulse Technologies — free trilingual civil legal navigator with
300 verified roadmaps & 88 bare acts for India & West Bengal. Content reviewed by
Advocate Tanweer Ahmed Khan (WB/1863/2010).
```

- Where the directory allows a website link, use:
  `https://nyayamitrawb.in/?utm_source=<platform>&utm_medium=citation&utm_campaign=phase_e`

---

## SECTION 3 — Wiring Directory URLs Into the Site

After each approved listing, add its URL to `src/data/authorityProfiles.ts`:

```ts
export const ADVOCATE_PROFILES: AuthorityProfile[] = [
  { label: 'Justia Lawyer Directory', url: 'https://lawyers.justia.com/lawyer/tanweer-ahmed-khan-...' },
  { label: 'LawRato', url: 'https://lawrato.com/advocate-tanweer-ahmed-khan-...' },
];

export const ORGANIZATION_PROFILES: AuthorityProfile[] = [
  { label: 'Google Business Profile', url: 'https://g.page/r/YOUR_ID' },
  { label: 'LinkedIn Company Page', url: 'https://www.linkedin.com/company/lexipulse-technologies' },
];
```

Then `npm run build` → deploy. Verify: view-source of any
`https://nyayamitrawb.in/guides/...` page → the JSON-LD `Person` node now shows
`"sameAs": [...]`, and the Article `author`/`publisher` Organization nodes show the
organization URLs.

---

## SECTION 4 — Law College Outreach (Authority Backlinks)

### 4.1 Target List (West Bengal first, then Eastern India)

| # | Institution | Angle |
|---|-------------|-------|
| 1 | NUJS Kolkata (WB National University of Juridical Sciences) | Legal-tech collaboration, guest session |
| 2 | University of Calcutta — Dept. of Law | Student resource partnership |
| 3 | University of North Bengal — Dept. of Law (Darjeeling) | Regional coverage story |
| 4 | South Calcutta Law College | Student internship program |
| 5 | Hazra Law College | Student internship program |
| 6 | Surya Sen Mahavidyalaya (Jalpaiguri) | North Bengal rural-legal-access story |

Find contact emails on each college's official site (prefer faculty placement cell /
legal-aid clinic coordinators — legal aid clinics are the warmest entry point).

### 4.2 Cold Email Template

```
Subject: Free legal-tech resource for [College] students — NyayaMitra (WB civil law)

Dear [Name/Placement Cell/Legal Aid Clinic],

I'm [Your Name], founder of Lexipulse Technologies, Kolkata. We built NyayaMitra
(nyayamitrawb.in) — a free trilingual (English/Bengali/Hindi) civil legal navigator
covering 300 procedural roadmaps and 88 bare acts for India & West Bengal, reviewed
by Advocate Tanweer Ahmed Khan (Bar Council ID WB/1863/2010).

We'd like to offer [College] students free access and are open to:
 1. A guest session / demo on legal-tech & access to justice (online or on campus)
 2. Internships: students help review/update district-level procedure content
 3. A resource link from your legal-aid clinic page for citizens seeking guidance

May I request 15 minutes with the right faculty member?

Regards,
[Your Name] — Lexipulse Technologies
[Phone] | https://nyayamitrawb.in
```

### 4.3 LinkedIn Outreach (short version)

```
Hi [Name] — we built NyayaMitra (nyayamitrawb.in), a free trilingual civil legal
navigator for WB (300 roadmaps, 88 bare acts, advocate-reviewed). We're offering
[College] students free access + internships. Could you point me to the legal-aid
clinic or placement cell? Happy to do a 15-min demo.
```

### 4.4 What a Successful Outreach Yields

- A backlink from a `.ac.in` domain (high trust for Google & AI engines)
- "Reviewed/used by [College] legal aid clinic" → E-E-A-T signal you can add to the site
- Student interns who keep district content fresh (compound effect on 300 pages)

---

## SECTION 5 — Tracking & KPIs

### Citation Tracking Table (fill as you complete)

| Platform | Date created | Live URL | UTM verified | Wired into schema (Y/N) |
|----------|-------------|----------|--------------|------------------------|
| Bing Places | | | | |
| LinkedIn | | | | |
| Justia | | | | |
| ... | | | | |

### 30 / 60 / 90-Day Checkpoints

| Metric | Source | 30d target | 90d target |
|--------|--------|-----------|-----------|
| GBP website clicks | GBP Insights | +20% | +60% |
| GBP calls | GBP Insights | baseline | +40% |
| Google reviews | GBP | 3 | 10 |
| Live citations | table above | 6 | 12 |
| Branded search impressions ("nyayamitra") | GSC | +15% | +50% |
| AI citations (ask ChatGPT/Perplexity "best WB civil legal guide sites") | manual | noted | top-5 mention |
| Referral traffic from citations | GA4 (utm) | visible | +10 sessions/mo |

---

## SECTION 6 — Phase E UAT Checklist (before deploying)

1. [ ] `npm run build` succeeds (tsc + vite + SSG, 306 pages, 314 sitemap URLs)
2. [ ] With EMPTY `authorityProfiles.ts`: view-source of a guide page shows **no** `sameAs` (verified no-op)
3. [ ] After pasting first real URL: build → view-source shows `sameAs` on the correct node
4. [ ] No visible UI changes anywhere (this phase is schema-only on site)
5. [ ] GBP name/address/phone matches website contact modal exactly
6. [ ] First weekly GBP post published
7. [ ] Tier 1 citation #1 (Bing Places) submitted

**Rollback:** code changes are schema-only and additive; tag `phase-d-complete-backup`
restores the pre-Phase-E site state if ever needed.

