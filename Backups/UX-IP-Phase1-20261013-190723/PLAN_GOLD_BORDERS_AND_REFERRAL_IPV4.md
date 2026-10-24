# Implementation Plan: Landing-Page Accents and Referral IPv4

Status: Plan for founder review only. No source, database, policy, or production data has been changed for these requirements.

## Integrity Check

- Land category remains intact: 300 unique workflow IDs across 18 source files, 50 per category.
- The completed Land category restore point and report remain in `Backups/Phase4-Land-Remaining-20261012-001135`.
- This plan does not close the Land workflow phase. That phase remains open until separately accepted by the founder.
- No dev server is running at this checkpoint. No Vercel production deployment is authorized.

## Important Finding: IPv4 Is Personal Data

The current referral form has affirmative DPDP consent for processing the submitted intake details, but it does not disclose collecting the requester’s IP address. Adding an IP address to the referral database/admin panel is a new personal-data purpose and data field, not just a technical logging detail.

The current browser code inserts directly into Supabase `case_intakes` using the public anon client. A browser cannot securely provide its “real” remote IPv4, and a client-supplied value is forgeable. The safe design is to send the intake to a Vercel serverless endpoint and capture the network IP from the trusted platform request metadata, subject to validation. The endpoint must not trust arbitrary client-supplied `X-Forwarded-For` values.

IPv4 may be absent, proxied, shared, or unavailable (IPv6-only/mobile carrier/VPN). The design must allow `NULL`; it must not fabricate `127.0.0.1`, `0.0.0.0`, or an IPv4 from an untrusted client value.

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

This is a separate phase and must not start without explicit Phase 1 acceptance and new approval.

Design:

1. New server endpoint, proposed `api/submit-intake.js`, becomes the single production referral write path. `TriageIntakeModal.tsx` submits form details to it instead of directly inserting referral PII into Supabase.
2. Server validates required fields, consent, preferred track and basic input lengths. It creates the reference ticket/server timestamp, resolves source IP only from Vercel’s documented trusted request property/header behavior, validates it as an IPv4 literal, otherwise stores `NULL`, then inserts once into Supabase using server-only `SUPABASE_SERVICE_ROLE_KEY`.
3. Email notification becomes best-effort and must not create a second intake insert. Endpoint response should return the already committed ticket record needed by the existing referral-slip/counsel display.
4. Existing unique ticket ID, phone/district/topic/summary, BPL/track fields, consent, timestamp, admin synchronization, CSV export and single-ticket lookup must continue to work.
5. Admin `Free Citizen Intakes` shows the IPv4 field, with `Unavailable`/`Not captured` for null. CSV export should include the field only if approved and must remain formula-injection-safe.
6. Keep RLS deny-by-default for public SELECT. Public referral creation is mediated server-side; the `anon` role must not gain access to read the IPv4 column. Admin access should continue through the authenticated server/RPC path; current client-side admin credentials are a pre-existing security weakness that must not be represented as robust authentication.

Consent, privacy and retention gate:

- Revise the checkbox disclosure before collecting IP. It must say IPv4 may be captured for intake security, abuse prevention and audit, identify the operator/controller, explain purpose/access/retention and provide a grievance/contact route.
- Add a separate privacy-policy subsection for source IP collection.
- Founder/counsel must approve an explicit retention period and deletion/expiry process before the SQL migration is finalized. Do not retain IP indefinitely by default.
- Restrict the IP column to authorized admin roles/service-role server access; audit exports and avoid email notification of IPv4 unless separately approved.
- Do not infer, fabricate or silently geolocate IPs. IPv6 and unavailable IP requests should still be accepted with `NULL` IP unless founder chooses to reject them.

Database migration proposal (not yet approved/executed):

```sql
alter table public.case_intakes
  add column if not exists client_ipv4 inet;

comment on column public.case_intakes.client_ipv4 is
  'Validated request IPv4 captured server-side for disclosed intake security/abuse-prevention purpose; nullable when unavailable; subject to approved retention policy.';
```

Additional retention SQL should be written only after counsel/founder approves the retention period and who may run the cleanup. Do not create a broad public policy for the new column.

Acceptance gate:

- Test POST accepts a valid form and stores valid IPv4, rejects malformed submissions, and safely stores `NULL` if no trusted IPv4 is available.
- Confirm no arbitrary body/header can spoof the saved IP.
- Confirm no unauthenticated SELECT exposes IPv4; verify admin sync returns it only through the privileged route.
- Confirm duplicate retries cannot create duplicate ticket inserts and notification failures do not lose the saved intake.
- Test the citizen success slip, Track A/B matching, BPL behavior, Bengali/Hindi/English, admin table, search, delete flow and CSV export.
- User reviews dev and explicitly closes Phase 2.

Rollback:

- Before migration, create a non-Git restore point for every source file and save the SQL migration and a rollback SQL file.
- A nullable added column is backward-compatible, but rollback/drop is destructive after data exists. Do not drop it automatically. Rollback should first disable its UI/API use; retain the column/data unless the founder expressly approves deletion.
- Database changes are not automatically reverted by restoring source files. Keep the migration ledger and record which SQL was executed.

## Phase 3: Final Dev Acceptance

- After Phase 1 and Phase 2 are individually accepted, provide a consolidated dev-only report and leave the Vite server running for founder inspection.
- No push, deploy, Vercel production action or Supabase production migration execution by the assistant.
- Founder performs any approved SQL execution and any manual Vercel configuration themselves; implementation plan will include exact commands and warnings.
- Phase closes only when the founder says they are satisfied. Each subsequent project phase requires separate Go Ahead.

## Stop Gate

Review and approve/reject this plan before any implementation. Clarifying decisions still needed before Phase 2 coding include:

- The specific IP retention period and whether IP is included in CSV export.
- Whether the notice/email alert should include IP (recommended default: no).
- Whether the migration SQL should only add nullable `inet` column initially (recommended) and retention job to be a later approved operation.

No assumptions about these privacy decisions should be made during implementation.
