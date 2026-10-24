-- NyayaMitra Feature 1 — Legal Advocate Connect (₹499)
-- Run in Supabase SQL Editor to create the payment tracking table

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

-- No public policies (service_role writes only)

-- Verify after running:
-- SELECT * FROM public.advocate_connect_requests LIMIT 5;