# Implementation Plan: Landing-Page Accents and Referral IPv4

Status: Phase 1 implemented locally. Phase 2 implementation is complete in local source and awaiting founder review. No Supabase production migration or Vercel deployment has been performed.

## Integrity Check

- Land category remains intact: 300 unique workflow IDs across 18 source files, 50 per category.
- The completed Land category restore point and report remain in `Backups/Phase4-Land-Remaining-20261012-001135`.
- Phase 2 source restore snapshots: `Backups/UX-IP-Phase2-Implementation-20261013-204405` and continuation snapshot `Backups/UX-IP-Phase2-Resume2-20261013-224733`.
- This plan does not close the Land workflow phase. That phase remains open until separately accepted by the founder.
- Phase 1 golden-border implementation is complete locally.
- Phase 2 source changes are local only. No SQL has been executed against Supabase; no Vercel production deployment is authorized.

## Important Finding: IPv4 Is Personal Data

The current referral form has affirmative DPDP consent for processing the submitted intake details, but it does not disclose collecting the requester’s IP address. Adding an IP address to the referral database/admin panel is a new personal-data purpose and data field, not just a technical logging detail.

The current browser code inserts directly into Supabase `case_intakes` using the public anon client. A browser cannot securely provide its “real” remote IPv4, and a client-supplied value is forgeable. The safe design is to send the intake to a Vercel serverless endpoint and capture the network IP from the trusted platform request metadata, subject to validation. The endpoint must not trust arbitrary client-supplied `X-Forwarded-For` values.

IPv4 may be absent, proxied, shared, or unavailable (IPv6-only/mobile carrier/VPN). The server must never fabricate `127.0.0.1`, `0.0.0.0`, or an IPv4 from an untrusted client value. The founder has approved indefinite retention, inclusion in CSV exports, and inclusion in referral intake notification emails. If an IPv4 address cannot be reliably captured and validated server-side, the plan must not silently claim that an address was captured; Phase 2 implementation must resolve whether that intake can be safely submitted with a NULL value or should be blocked with clear notice.

Indefinite retention is a material privacy/security risk and is not a deletion schedule. It requires an explicit, prominent consent/privacy disclosure; strict need-to-know access; auditability of viewing/export; secure email handling; retention inventory; incident/breach response; and periodic review of whether continued retention remains necessary. Counsel/privacy review is recommended before production use. The developer will not silently impose a shorter retention period contrary to the founder's decision, but must document this risk and must not claim the choice is risk-free or automatically compliant.

## Phase 1: Golden Border UI Only

Scope:

- `src/App.tsx` only, unless inspection shows existing shared styles require one additional CSS file.
- Add a restrained golden border treatment around the “Official Government & Judicial Portals Directory” section and “6 Core Civil Legal Categories” block.
- Preserve NyayaMitra’s navy/emerald palette and use amber-gold as a subtle edge/accent. Use a thin border, controlled glow, keyboard/contrast-safe focus behavior, and reduced-motion-safe styling; avoid continuous animation or high-saturation neon.
- Do not change portal cards, category selection, click handlers, routing, category/workflow data or mobile breakpoints beyond what the new border requires.

Before coding:

1. Verify the Land workflow count and existing backups.
2. Create a timestamped restore copy of `src/App.tsx` and any CSS file that will be edited.
3. Implement and run `npm run build`.
4. Run the dev server and check desktop/mobile widths, contrast, section boundaries and console.

Acceptance gate:

- User visually reviews the two highlighted sections in dev and accepts Phase 1.
- Do not begin Phase 2 until explicit “Go Ahead”.

Rollback:

- Restore the pre-phase copies of the touched files. No database rollback is needed for this phase.

## Phase 2: Referral IPv4 Design and Privacy/Retention Approval

Phase 2 is a separate, user-authorized phase. Its completion remains open until the founder reviews the dev result and explicitly closes it.

Design:

1. Production referral submissions use `api/submit-intake.js`; `TriageIntakeModal.tsx` no longer writes PII directly from the browser.
2. The endpoint validates consent and fields, creates the ticket/timestamp, reads only platform-forwarded IP headers, validates a public IPv4, and treats unavailable/IPv6-only/private/reserved values as NULL rather than fabricating an address.
3. Store IP only in `public.case_intake_ip_audit`, keyed by ticket ID. Do not add IP to `case_intakes`: the public `get_submission_by_id()` RPC returns `SETOF case_intakes`, so preserving that table schema keeps IPv4 out of the public lookup.
4. `supabase/referral-ip-audit.sql` creates an RLS-enabled side table and a service-role-only transactional RPC to insert the ordinary case row and IPv4 audit row together. It has no public/anon/authenticated grants or policies. This SQL is prepared only; founder must execute manually after dev acceptance.
5. Email is sent once by `api/submit-intake.js` after persistence. It contains the IPv4 or explicit “Unavailable” status, escapes user content, and goes only to the configured intended recipients. Legacy `/api/notify` rejects referral submissions, while existing admin audit and Pro-payment paths remain supported.
6. Admin IP lookup uses `api/admin-intake-ip.js` and the separate server-only `INTAKE_IP_ADMIN_TOKEN`, compared in constant time. The token is manually entered, held in sessionStorage, and never embedded in the frontend. Existing public lookup and legacy admin RPC are not modified.
7. Admin shows IPv4 only after an authorized lookup; historical records show “No IP record”, new records with no verified address show “Unavailable”, and test records show “Mock”. CSV includes IP only after every currently listed ticket has an authorized IP-status result and remains formula-injection-safe.
8. Vite local intake/IP endpoints are an opt-in in-memory mock. They do not call Supabase or send email. `198.51.100.23` is a TEST-NET mock only and is rejected by the production public-IP validator.

Consent, privacy and retention gate:

- The checkbox now discloses IPv4 collection when available, indefinite retention, admin/CSV and named referral email use, its personal-data status, and that intake remains available if no verified IPv4 is available.
- The privacy policy now has a separate IPv4 security/retention section and a contact/grievance email. Counsel/privacy review remains recommended before production.
- Founder has approved lifetime/indefinite retention, IPv4 in CSV exports, and IPv4 in intake notification emails. These are recorded as user-directed requirements, with the high privacy/security risk acknowledged. Do not describe indefinite retention as legally required or risk-free.
- The consent disclosure and privacy policy must plainly describe lifetime retention unless the founder changes the policy; identify authorized recipients, including the fixed referral-email recipients and admin/export access. Counsel should confirm the exact lawful basis, notice language, grievance route, access safeguards, and breach response before production.
- Restrict the side table to server/service-role access and the separate authorized admin endpoint; do not add public/anon SELECT or change the public ticket RPC. Email containing IPv4 should go only to the already-configured named intake recipients over TLS, be marked confidential, and not be copied to additional recipients. CSV export remains formula-injection-safe and is treated as a sensitive copy.
- Add access/audit and incident procedures for exposure, unauthorized export, email misdelivery and account compromise. Keep service-role credentials server-only. Define a periodic governance review even though no expiry/deletion date is currently approved.
- Do not infer, fabricate or silently geolocate IPs. IPv6 and unavailable IP requests should still be accepted with `NULL` IP unless founder chooses to reject them.

Database migration proposal (approved design; SQL file prepared, not executed):

```sql
-- See supabase/referral-ip-audit.sql for the additive separate-side-table/RPC migration.
-- It intentionally leaves public.case_intakes and get_submission_by_id() unchanged.
```

Founder-approved retention is indefinite/lifetime; no cleanup job is included. This is an acknowledged material risk, not a statement that indefinite retention is legally required or risk-free. Counsel/privacy review is recommended before production use.

Acceptance gate:

- Test POST accepts a valid form and stores a validated IPv4 from trusted server metadata, rejects malformed/spoofed client values, and explicitly handles unavailable IPv4 without fabricating an address.
- Confirm no arbitrary body/header can spoof the saved IP.
- Confirm no unauthenticated SELECT exposes IPv4; existing public ticket lookup remains unchanged; new admin lookup requires the separate token.
- Confirm duplicate retries cannot create duplicate ticket inserts and notification failures do not lose the saved intake.
- Test the citizen success slip, Track A/B matching, BPL behavior, Bengali/Hindi/English, admin table, search, delete flow and CSV export.
- User reviews dev and explicitly closes Phase 2.

Rollback:

- Before migration, create a non-Git restore point for every source file and save the SQL migration and a rollback SQL file.
- The side table is additive and does not modify `case_intakes`. Rollback should first disable the new API/UI and preserve any captured side-table records. Do not drop retained data automatically; the founder approved indefinite retention.
- Database changes are not automatically reverted by restoring source files. Keep the migration ledger and record which SQL was executed.

## Phase 3: Final Dev Acceptance

- After Phase 1 and Phase 2 are individually accepted, provide a consolidated dev-only report and leave the Vite server running for founder inspection.
- No push, deploy, Vercel production action or Supabase production migration execution by the assistant.
- Founder performs any approved SQL execution and Vercel secret configuration themselves; assistant must not execute production SQL or deploy.
- Phase closes only when the founder says they are satisfied. Each subsequent project phase requires separate Go Ahead.

## Founder Decisions Recorded

- IPv4 retention: lifetime/indefinite (no specific expiry date).
- Include IPv4 in admin CSV exports: yes.
- Include IPv4 in intake notification emails: yes.
- Approve separate RLS-protected `case_intake_ip_audit` table and server-only transactional RPC, keeping `case_intakes` and public ticket lookup unchanged: yes.
- Approve a separate admin IP endpoint protected by `INTAKE_IP_ADMIN_TOKEN`; legacy admin login/RPC remains unchanged in this phase: yes.
- Approve acceptance with NULL/unavailable when no verified public IPv4 is available: yes.
- Approve an opt-in local in-memory mock with no database writes/email: yes.
- These decisions apply only to the later Phase 2 design and do not waive transparency, data minimization/security duties or any separate phase approval.

## Stop Gate

Review the Phase 2 dev result before closure. Remaining governance risk:

- Counsel/privacy review of the approved indefinite-retention policy and exact consent/privacy wording is strongly recommended. Any request for that review must be handled without changing the founder-approved product choice unless the founder revises it.
- The existing client-side admin credential/RPC mechanism remains a pre-existing security weakness. The separate token protects only the IPv4 lookup endpoint; it does not remediate legacy admin authentication.
- No automatic retention/deletion is configured because the founder approved indefinite retention. Periodically review necessity and access; do not represent indefinite retention as risk-free.

No assumptions about these privacy decisions should be made during implementation.
