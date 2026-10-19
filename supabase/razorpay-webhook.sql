-- NyayaMitra Razorpay webhook idempotency ledger.
-- Run once in Supabase SQL Editor before enabling the Live webhook.

create table if not exists public.webhook_events (
  event_id text primary key,
  event_name text not null,
  razorpay_order_id text,
  razorpay_payment_id text,
  payload jsonb not null,
  received_at timestamptz not null default now()
);

alter table public.webhook_events enable row level security;

-- No public policies are intentionally created. The Vercel webhook uses the
-- Supabase service-role key, while public/anon users cannot read or write it.

create index if not exists webhook_events_order_id_idx
  on public.webhook_events (razorpay_order_id);

create index if not exists webhook_events_payment_id_idx
  on public.webhook_events (razorpay_payment_id);
