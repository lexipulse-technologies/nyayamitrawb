from docx import Document
from docx.shared import Inches, Pt, Cm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.enum.style import WD_STYLE_TYPE
import datetime

doc = Document()

# Styles
style = doc.styles['Normal']
font = style.font
font.name = 'Calibri'
font.size = Pt(11)

for level in range(1, 4):
    hstyle = doc.styles[f'Heading {level}']
    hstyle.font.color.rgb = RGBColor(0x0F, 0x2B, 0x48)
    hstyle.font.name = 'Calibri'

# Title Page
for _ in range(4):
    doc.add_paragraph()

title = doc.add_paragraph()
title.alignment = WD_ALIGN_PARAGRAPH.CENTER
run = title.add_run('NYAYAMITRA FEATURE 2')
run.bold = True
run.font.size = Pt(28)
run.font.color.rgb = RGBColor(0x0F, 0x2B, 0x48)

subtitle = doc.add_paragraph()
subtitle.alignment = WD_ALIGN_PARAGRAPH.CENTER
run = subtitle.add_run('Shiprocket Notice Dispatch (\u20b9199)\nComplete Technical Blueprint & Implementation Guide')
run.font.size = Pt(16)
run.font.color.rgb = RGBColor(0x47, 0x55, 0x69)

doc.add_paragraph()
meta = doc.add_paragraph()
meta.alignment = WD_ALIGN_PARAGRAPH.CENTER
run = meta.add_run(f'Prepared: {datetime.date.today().strftime("%B %d, %Y")}\nVersion: 1.0\nClassification: Internal \u2014 Technical Reference\nProject: NyayaMitra (https://nyayamitrawb.in)\nOperator: LEXIPULSE TECHNOLOGIES')
run.font.size = Pt(11)
run.font.color.rgb = RGBColor(0x64, 0x74, 0x8B)

doc.add_page_break()

# Table of Contents
doc.add_heading('Table of Contents', level=1)
toc_items = [
    ('1', 'Executive Summary'),
    ('2', 'Pre-Requisites Checklist (Owner Action Required)'),
    ('3', 'Monetary Payments Required Before Start'),
    ('4', 'Technical Architecture & System Components'),
    ('5', 'Database Schema'),
    ('6', 'API Specifications'),
    ('7', 'Frontend Changes \u2014 DocumentDrafterModal.tsx (Step 4)'),
    ('8', 'Shiprocket API Quick Reference'),
    ('9', 'Implementation Plan \u2014 Step-by-Step (6 Days)'),
    ('10', 'Critical Constraints & Reminders'),
    ('11', 'Files to Create / Modify'),
    ('12', 'Go / No-Go Criteria'),
    ('13', 'Reference Links'),
]
for num, title_text in toc_items:
    p = doc.add_paragraph()
    run = p.add_run(f'{num}. {title_text}')
    run.font.size = Pt(12)

doc.add_page_break()

# 1. Executive Summary
doc.add_heading('1. Executive Summary', level=1)
doc.add_paragraph(
    'Feature 2 implements a paid notice dispatch service (\u20b9199) allowing citizens to have their '
    'generated legal notice printed, picked up from a Kolkata address, and delivered via courier '
    'within West Bengal using Shiprocket\'s logistics network.'
)
bullets = [
    'Citizen fills sender (pickup) and receiver (delivery) addresses in Step 4 of Notice Drafter',
    'Pays \u20b9199 via Razorpay Live \u2192 Server verifies signature \u2192 Creates Shiprocket order',
    'System auto-assigns cheapest AWB, schedules pickup, emails tracking URL',
    'Citizen prints notice PDF, places in envelope, hands to pickup agent',
    'Webhook updates status (Dispatched / In Transit / Delivered / RTO) with email notifications',
]
for b in bullets:
    doc.add_paragraph(b, style='List Bullet')

doc.add_paragraph(
    'Current State: Feature 1 (Advocate Connect \u20b9499) complete. 12/12 Vercel serverless functions '
    'utilized. Feature 2 must operate within existing 12-function limit \u2014 no new serverless functions.'
)

# 2. Pre-Requisites
doc.add_heading('2. Pre-Requisites Checklist (Owner Action Required)', level=1)
doc.add_paragraph('All items below MUST be completed before Phase A (Day 1) begins.')

table = doc.add_table(rows=1, cols=3)
table.style = 'Light Grid Accent 1'
table.alignment = WD_TABLE_ALIGNMENT.CENTER
hdr = table.rows[0].cells
hdr[0].text = '#'
hdr[1].text = 'Item'
hdr[2].text = 'Details / Action Required'
for cell in hdr:
    for paragraph in cell.paragraphs:
        for run in paragraph.runs:
            run.bold = True

rows_data = [
    ('1', 'Shiprocket API User',
     'Create in Shiprocket Panel \u2192 Settings \u2192 API \u2192 Configure \u2192 "Create API User"\n'
     '\u26a0\ufe0f Email MUST be DIFFERENT from panel login email (mandatory).\n'
     'Save credentials as SHIPROCKET_API_EMAIL & SHIPROCKET_API_PASSWORD.'),
    ('2', 'Pickup Location',
     'Settings \u2192 Pickup Locations \u2192 Add Kolkata pickup address.\n'
     'Note the EXACT location NAME (e.g., "primary") \u2014 case-sensitive.\n'
     'Save as SHIPROCKET_PICKUP_LOCATION.'),
    ('3', 'Wallet Balance',
     'Add \u20b9500\u20131000 to Shiprocket wallet (Settings \u2192 Wallet).\n'
     'Shiprocket deducts per shipment from wallet.\n'
     'Maintain \u20b9500+ buffer at all times.'),
    ('4', 'KYC Completion',
     'Complete KYC if prompted (required for label generation).\n'
     'Usually auto-triggered after first few shipments.'),
    ('5', 'Vercel Environment Variables',
     'Add to Vercel Dashboard \u2192 Settings \u2192 Environment Variables (Production + Preview):\n'
     '\u2022 SHIPROCKET_API_EMAIL\n'
     '\u2022 SHIPROCKET_API_PASSWORD\n'
     '\u2022 SHIPROCKET_PICKUP_LOCATION (e.g., "primary")'),
    ('6', 'Supabase Table Creation',
     'Run supabase/dispatch-orders.sql in Supabase SQL Editor.\n'
     'Table: public.dispatch_orders with RLS enabled, no public policies.'),
]
for num, item, details in rows_data:
    row = table.add_row().cells
    row[0].text = num
    row[1].text = item
    row[2].text = details

doc.add_paragraph()

# 3. Monetary Payments
doc.add_heading('3. Monetary Payments Required Before Start', level=1)

table2 = doc.add_table(rows=1, cols=4)
table2.style = 'Light Grid Accent 1'
table2.alignment = WD_TABLE_ALIGNMENT.CENTER
hdr2 = table2.rows[0].cells
hdr2[0].text = 'Payment'
hdr2[1].text = 'Amount'
hdr2[2].text = 'When'
hdr2[3].text = 'Paid To'
for cell in hdr2:
    for p in cell.paragraphs:
        for r in p.runs:
            r.bold = True

payments = [
    ('Shiprocket Wallet Top-up', '\u20b9500\u20131,000', 'Before first dispatch (upfront)', 'Shiprocket (wallet)'),
    ('Razorpay Fees', '\u2248\u20b94.70 per \u20b9199', 'Per transaction (auto-deducted)', 'Razorpay'),
    ('Shiprocket Per Shipment', '\u20b926\u201345 (intra-WB)', 'Per dispatch (from wallet)', 'Shiprocket (wallet)'),
    ('Advanced Plan (optional)', '\u20b9499/month', 'Only if >60 shipments/month', 'Shiprocket'),
    ('Vercel/Infra', '$0 (Hobby plan)', 'Ongoing', 'Vercel'),
]
for pay in payments:
    row = table2.add_row().cells
    for i, val in enumerate(pay):
        row[i].text = val

doc.add_paragraph()
p = doc.add_paragraph()
run = p.add_run('Total Upfront Required: ')
run.bold = True
run = p.add_run('\u20b9500\u20131,000 (wallet top-up only). No subscription fee for Lite plan.')

doc.add_page_break()

# 4. Technical Architecture
doc.add_heading('4. Technical Architecture & System Components', level=1)

doc.add_heading('4.1 System Components (No New Serverless Functions \u2014 Stays at 12/12)', level=2)

table3 = doc.add_table(rows=1, cols=3)
table3.style = 'Light Grid Accent 1'
table3.alignment = WD_TABLE_ALIGNMENT.CENTER
hdr3 = table3.rows[0].cells
hdr3[0].text = 'Component'
hdr3[1].text = 'Type'
hdr3[2].text = 'Description'
for cell in hdr3:
    for p in cell.paragraphs:
        for r in p.runs:
            r.bold = True

components = [
    ('api/shiprocket-client.js', 'Module', 'Cached token helper (10-day JWT, auto-refresh on 401). Exports getShiprocketToken() and srPost(path, payload).'),
    ('api/shiprocket-order.js', 'Serverless (Vercel)', 'Verify Razorpay HMAC \u2192 Supabase insert \u2192 Shiprocket create order \u2192 Assign AWB \u2192 Schedule pickup \u2192 Email user.'),
    ('api/shiprocket-webhook.js', 'Serverless (Vercel)', 'Unauthenticated Shiprocket status updates. Best-effort enrichment. Updates dispatch_orders.tracking_status. Emails on key statuses.'),
    ('DocumentDrafterModal.tsx (Step 4)', 'React Component', 'Address modal (sender prefilled, receiver empty), validation, Razorpay \u20b9199 flow, success screen with AWB/tracking/print instructions.'),
    ('supabase/dispatch-orders.sql', 'SQL Migration', 'Creates public.dispatch_orders with RLS, no public policies (service_role writes only).'),
]
for comp in components:
    row = table3.add_row().cells
    for i, val in enumerate(comp):
        row[i].text = val

doc.add_heading('4.2 Data Flow Overview', level=2)
flow_steps = [
    'Citizen clicks "Download Notice & Send via Shiprocket (\u20b9199)" at Step 4 of Notice Drafter.',
    'Address modal opens: Sender (pickup) \u2014 prefilled from drafter inputs; Receiver (delivery) \u2014 empty, required.',
    'Client validation: PIN ^\\d{6}$, Phone ^[6-9]\\d{9}$, West Bengal only (enforced).',
    'Pay \u20b9199 \u2192 POST /api/create-order {amount: 19900} \u2192 Razorpay checkout opens.',
    'On payment success: Handler POSTs to /api/shiprocket-order with payment_ids + addresses + userEmail.',
    'Server: Verify HMAC-SHA256 (fail-closed, timingSafeEqual) \u2192 Supabase insert dispatch_orders (BEFORE shipping calls).',
    'Shiprocket API: Create adhoc order (0.5kg, 25\u00d718\u00d72cm, Prepaid, pickup_location exact match) \u2192 Assign AWB (auto cheapest) \u2192 Schedule pickup.',
    'Update dispatch_orders row with awb_code, courier_name, shiprocket_shipment_id, tracking_status.',
    'Email citizen: AWB, courier, tracking URL, print instructions.',
    'Shiprocket webhook (unauthenticated, best-effort) updates tracking_status; emails on Dispatched / In Transit / Delivered / RTO Initiated / Undelivered.',
]
for i, step in enumerate(flow_steps, 1):
    p = doc.add_paragraph(f'{i}. {step}')
    p.style = 'List Number'

doc.add_page_break()

# 5. Database Schema
doc.add_heading('5. Database Schema', level=1)

doc.add_heading('5.1 dispatch_orders Table', level=2)
doc.add_paragraph('Run the following SQL in Supabase SQL Editor:')

sql_code = """CREATE TABLE IF NOT EXISTS public.dispatch_orders (
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
-- No public policies (service_role writes only)

-- Verify:
-- SELECT * FROM public.dispatch_orders LIMIT 5;"""
p = doc.add_paragraph()
run = p.add_run(sql_code)
run.font.name = 'Consolas'
run.font.size = Pt(9)
run.font.color.rgb = RGBColor(0x1E, 0x1E, 0x1E)

doc.add_paragraph()
doc.add_paragraph('RLS: Enabled. No public policies. Only service_role key can write (via serverless functions).')

doc.add_page_break()

# 6. API Specifications
doc.add_heading('6. API Specifications', level=1)

# 6.1 shiprocket-client.js
doc.add_heading('6.1 api/shiprocket-client.js (Module)', level=2)
doc.add_paragraph('Purpose: Cached token management (10-day TTL) with auto-refresh on 401. Single source of truth for Shiprocket API calls.')

code1 = """const SR_BASE = 'https://apiv2.shiprocket.in/v1/external';

let cachedToken = null;
let tokenFetchedAt = 0;
const TOKEN_TTL_MS = 9 * 24 * 60 * 60 * 1000;  # refresh before 10-day expiry

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
}"""
p = doc.add_paragraph()
run = p.add_run(code1)
run.font.name = 'Consolas'
run.font.size = Pt(9)

# 6.2 shiprocket-order.js
doc.add_heading('6.2 api/shiprocket-order.js (POST)', level=2)
doc.add_paragraph('Input Payload:')
input_json = """{
  "razorpay_order_id": "order_xxx",
  "razorpay_payment_id": "pay_xxx",
  "razorpay_signature": "sha256_hmac",
  "senderName": "John Doe",
  "senderPhone": "9876543210",
  "senderAddress": "123 Park Street",
  "senderCity": "Kolkata",
  "senderPincode": "700016",
  "receiverName": "Jane Smith",
  "receiverPhone": "9876543211",
  "receiverAddress": "456 Salt Lake",
  "receiverCity": "Kolkata",
  "receiverPincode": "700091",
  "userEmail": "user@example.com",
  "paymentTransactionId": "txn_xxx"
}"""
p = doc.add_paragraph()
run = p.add_run(input_json)
run.font.name = 'Consolas'
run.font.size = Pt(9)

doc.add_paragraph('Processing Flow:')
flow = [
    '1. Verify Razorpay HMAC-SHA256: createHmac("sha256", RAZORPAY_KEY_SECRET).update(`${order_id}|${payment_id}`).digest("hex") compared with timingSafeEqual.',
    '2. Supabase INSERT into dispatch_orders (BEFORE any shipping calls) \u2014 payment proof never lost.',
    '3. Shiprocket: Create adhoc order via srPost("/orders/create/adhoc", {...}) with:\n   - order_id: `NYM-DSP-${Date.now()}` (unique)\n   - order_date: IST now in "yyyy-mm-dd HH:mm"\n   - pickup_location: process.env.SHIPROCKET_PICKUP_LOCATION (exact match)\n   - billing_* = sender, shipping_* = receiver, shipping_is_billing: false\n   - order_items: [{name: "Legal Notice (Printed Documents)", sku: "NYM-NOTICE", units: 1, selling_price: "199", hsn: "4909"}]\n   - payment_method: "Prepaid", sub_total: 199, length: 25, breadth: 18, height: 2, weight: 0.5',
    '4. Assign AWB: srPost("/courier/assign/awb", {shipment_id}) \u2014 omit courier_id for auto cheapest.',
    '5. Schedule pickup: srPost("/courier/generate/pickup", {shipment_id}).',
    '6. Update dispatch_orders with awb_code, courier_name, shiprocket_order_id, shiprocket_shipment_id, tracking_status.',
    '7. Email citizen via nodemailer (Gmail SMTP) with AWB, courier, tracking URL, print instructions.',
]
for f in flow:
    doc.add_paragraph(f, style='List Number')

doc.add_paragraph('Output:')
output_json = """{
  "success": true,
  "shiprocketOrderId": "NYM-DSP-1234567890",
  "shipmentId": "12345678",
  "awb": "1234567890123",
  "courier": "DTDC Express"
}"""
p = doc.add_paragraph()
run = p.add_run(output_json)
run.font.name = 'Consolas'
run.font.size = Pt(9)

# 6.3 shiprocket-webhook.js
doc.add_heading('6.3 api/shiprocket-webhook.js (POST)', level=2)
doc.add_paragraph('Unauthenticated (Shiprocket does not sign webhooks). Best-effort status enrichment only.')

webhook_logic = [
    'Parse payload: awb = payload.awb || payload.shipment.awb; status = payload.current_status || payload.shipment.status; srOrderId = payload.order_id || payload.order.order_id.',
    'Find row: SELECT * FROM dispatch_orders WHERE awb_code = awb OR shiprocket_order_id = srOrderId LIMIT 1.',
    'UPDATE dispatch_orders SET tracking_status = status WHERE id = row.id.',
    'Notify statuses: ["Dispatched", "In Transit", "Delivered", "RTO Initiated", "Undelivered"].',
    'If status in notify list AND row.user_email exists AND previous status != current: send email with AWB + tracking link.',
    'Always return 200 {received: true} (Shiprocket expects 2xx).',
]
for item in webhook_logic:
    doc.add_paragraph(item, style='List Bullet')

doc.add_page_break()

# 7. Frontend Changes
doc.add_heading('7. Frontend Changes \u2014 DocumentDrafterModal.tsx (Step 4)', level=1)

doc.add_heading('7.1 New Button in Step 4 (Downloads Section)', level=2)
doc.add_paragraph('Location: Below existing PDF download card.')
button_props = [
    'Text: "Download Notice & Send via Shiprocket (\u20b9199)" with Truck icon',
    'Style: Green gradient (emerald-600 \u2192 emerald-500), white text, bold, shadow, hover scale',
    'Visible only after successful \u20b999 payment (step === 3)',
    'onClick \u2192 setDispatchStep("address")',
]
for b in button_props:
    doc.add_paragraph(b, style='List Bullet')

doc.add_heading('7.2 Address Modal (dispatchStep === "address")', level=2)

table4 = doc.add_table(rows=1, cols=3)
table4.style = 'Light Grid Accent 1'
table4.alignment = WD_TABLE_ALIGNMENT.CENTER
hdr4 = table4.rows[0].cells
hdr4[0].text = 'Section'
hdr4[1].text = 'Fields'
hdr4[2].text = 'Validation / Notes'
for cell in hdr4:
    for p in cell.paragraphs:
        for r in p.runs:
            r.bold = True

addr_rows = [
    ('PICKUP (Sender)', 'Name, Phone, Address, City, PIN', 'Prefilled from drafter inputs; editable\nPIN: ^\\d{6}$ | Phone: ^[6-9]\\d{9}$\nState: "West Bengal" (display only)'),
    ('DELIVERY (Receiver)', 'Name, Phone, Address, City, PIN', 'Required; same validation\nState: "West Bengal" (display only)\nIntra-WB only enforced'),
]
for sec, fields, val in addr_rows:
    row = table4.add_row().cells
    row[0].text = sec
    row[1].text = fields
    row[2].text = val

doc.add_heading('7.3 Client Validation', level=2)
validations = [
    'PIN: /^\\d{6}$/ (exactly 6 digits)',
    'Phone: /^[6-9]\\d{9}$/ (10 digits, starts with 6-9)',
    'Email: standard regex /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/',
    'All fields required except comment',
    'Pay button disabled until all valid',
    'West Bengal only \u2014 enforced by UI (state dropdown fixed to "West Bengal")',
]
for v in validations:
    doc.add_paragraph(v, style='List Bullet')

doc.add_heading('7.4 Payment Flow Integration', level=2)
pay_flow = [
    'User clicks Pay \u2192 fetch("/api/create-order", {method: "POST", body: {amount: 19900}})',
    'Receive {orderId, keyId} \u2192 new window.Razorpay({key: keyId, amount: 19900, order_id: orderId, ...})',
    'Razorpay handler \u2192 POST /api/shiprocket-order with payment response + form data',
    'On success: setDispatchStep("success") with AWB, courier, tracking URL',
    'Success screen shows: AWB (monospace), Courier, Tracking link, Print instruction box',
]
for f in pay_flow:
    doc.add_paragraph(f, style='List Number')

doc.add_page_break()

# 8. Shiprocket API Quick Reference
doc.add_heading('8. Shiprocket API Quick Reference', level=1)

table5 = doc.add_table(rows=1, cols=4)
table5.style = 'Light Grid Accent 1'
table5.alignment = WD_TABLE_ALIGNMENT.CENTER
hdr5 = table5.rows[0].cells
hdr5[0].text = 'Operation'
hdr5[1].text = 'Method + Path'
hdr5[2].text = 'Auth'
hdr5[3].text = 'Notes'
for cell in hdr5:
    for p in cell.paragraphs:
        for r in p.runs:
            r.bold = True

api_ref = [
    ('Authenticate', 'POST https://apiv2.shiprocket.in/v1/external/auth/login', 'None', '{email, password} \u2192 {token} JWT ~10 days; cache & refresh on 401'),
    ('Create adhoc order', 'POST /v1/external/orders/create/adhoc', 'Bearer', 'order_id unique; order_date "yyyy-mm-dd HH:mm"; pickup_location must EXACTLY match panel name; weight in KG; shipping_is_billing:false'),
    ('Assign AWB', 'POST /v1/external/courier/assign/awb', 'Bearer', '{shipment_id}; omit courier_id for auto cheapest'),
    ('Generate pickup', 'POST /v1/external/courier/generate/pickup', 'Bearer', '{shipment_id}'),
    ('Track by AWB', 'GET /v1/external/courier/track/awb/{awb}', 'Bearer', '\u2014'),
]
for op in api_ref:
    row = table5.add_row().cells
    for i, val in enumerate(op):
        row[i].text = val

doc.add_page_break()

# 9. Implementation Plan
doc.add_heading('9. Implementation Plan \u2014 Step-by-Step (6 Days)', level=1)

table6 = doc.add_table(rows=1, cols=3)
table6.style = 'Light Grid Accent 1'
table6.alignment = WD_TABLE_ALIGNMENT.CENTER
hdr6 = table6.rows[0].cells
hdr6[0].text = 'Phase'
hdr6[1].text = 'Day(s)'
hdr6[2].text = 'Tasks'
for cell in hdr6:
    for p in cell.paragraphs:
        for r in p.runs:
            r.bold = True

phases = [
    ('A: Foundation', 'Day 1',
     '\u2022 Owner completes Shiprocket setup (API user, pickup location, wallet, KYC)\n'
     '\u2022 Add 3 Vercel env vars (Production + Preview)\n'
     '\u2022 Create supabase/dispatch-orders.sql and run in SQL Editor\n'
     '\u2022 Verify Shiprocket API connectivity: curl test to auth endpoint'),
    ('B: Backend', 'Day 2\u20133',
     '\u2022 Create api/shiprocket-client.js (token caching, srPost)\n'
     '\u2022 Create api/shiprocket-order.js (full flow with error handling)\n'
     '\u2022 Create api/shiprocket-webhook.js (status updates)\n'
     '\u2022 Add dev middleware for /api/shiprocket-order in vite.config.ts\n'
     '\u2022 Extend /api/create-order dev middleware for 19900 amount\n'
     '\u2022 Test: curl create-order (19900) \u2192 shiprocket-order \u2192 verify Supabase row'),
    ('C: Frontend', 'Day 4',
     '\u2022 Add Shiprocket button to Step 4 in DocumentDrafterModal.tsx\n'
     '\u2022 Create address modal state (sender prefilled, receiver empty)\n'
     '\u2022 Client validation (PIN, phone, WB-only)\n'
     '\u2022 Integrate Razorpay: create-order (19900) \u2192 checkout \u2192 shiprocket-order\n'
     '\u2022 Success screen with AWB, courier, tracking, print instructions'),
    ('D: Testing & UAT', 'Day 5',
     '\u2022 npm run build passes\n'
     '\u2022 Dev server UAT: Form validation, Razorpay flow (test mode), success screen\n'
     '\u2022 Live \u20b9199 test (owner) \u2192 verify Shiprocket panel shows order\n'
     '\u2022 Webhook test: Change status in Shiprocket \u2192 verify email + DB update\n'
     '\u2022 Regression: \u20b999 drafter + \u20b9499 advocate connect still work'),
    ('E: Deploy', 'Day 6',
     '\u2022 git commit + git push\n'
     '\u2022 npx vercel --prod\n'
     '\u2022 Verify env vars in Vercel Production\n'
     '\u2022 Live UAT on nyayamitrawb.in'),
]
for phase in phases:
    row = table6.add_row().cells
    for i, val in enumerate(phase):
        row[i].text = val

doc.add_page_break()

# 10. Critical Constraints
doc.add_heading('10. Critical Constraints & Reminders', level=1)

constraints = [
    ('12-Function Limit', 'Currently at 12/12. No new serverless functions allowed unless one is removed. Feature 2 reuses existing notify.js GET endpoint for advocate fees; shiprocket-order & webhook are 2 new functions \u2192 must remove counter.js (already done) and consolidate admin auth (already done). Current count: 12.'),
    ('Razorpay in Shiprocket Panel', 'The Razorpay connection inside Shiprocket panel is for COD reconciliation ONLY. It is NOT used here. NyayaMitra collects payment first via own Razorpay account, then creates Prepaid API order.'),
    ('Wallet Balance', 'Shiprocket deducts per shipment from wallet. Maintain \u20b9500+ buffer. Set up low-balance alerts in Shiprocket panel.'),
    ('Pickup Location Name', 'Must EXACTLY match the name in Shiprocket panel (case-sensitive). Stored in SHIPROCKET_PICKUP_LOCATION env var.'),
    ('Intra-WB Only', 'Both sender and receiver must be in West Bengal. Enforced by UI (state fixed to "West Bengal"). No inter-state support in this version.'),
    ('Parcel Specification', 'Hardcoded: 0.5 kg, 25 \u00d7 18 \u00d7 2 cm envelope. HSN: 4909. SKU: NYM-NOTICE.'),
    ('Dev Middleware', 'vite.config.ts must mirror production logic for local UAT. Added GET /api/notify for advocate fees; added amount whitelist to /api/create-order; added /api/shiprocket-order middleware.'),
    ('Supabase RLS', 'dispatch_orders has RLS enabled with NO public policies. Only service_role writes. Production uses SUPABASE_SERVICE_ROLE_KEY; dev uses anon fallback (writes will fail silently \u2014 acceptable for dev).'),
    ('Email Notifications', 'Citizen receives: AWB + tracking URL + print instructions on order creation; status updates (Dispatched/In Transit/Delivered/RTO/Undelivered) via webhook. Advocate Connect emails go to khantanweer85@gmail.com + namaste@nyayamitrawb.in.'),
    ('Non-Refundable Policy', 'Both \u20b999 and \u20b9499 payments are fully non-refundable. Documented in LegalPolicyModal (Refund tab), AdvocateConnectModal, and DocumentDrafterModal payment screens. Only exception: confirmed platform technical failure preventing fulfillment.'),
]

for title_text, detail in constraints:
    p = doc.add_paragraph()
    run = p.add_run(f'{title_text}: ')
    run.bold = True
    p.add_run(detail)

doc.add_page_break()

# 11. Files to Create / Modify
doc.add_heading('11. Files to Create / Modify', level=1)

table7 = doc.add_table(rows=1, cols=3)
table7.style = 'Light Grid Accent 1'
table7.alignment = WD_TABLE_ALIGNMENT.CENTER
hdr7 = table7.rows[0].cells
hdr7[0].text = 'File'
hdr7[1].text = 'Action'
hdr7[2].text = 'Notes'
for cell in hdr7:
    for p in cell.paragraphs:
        for r in p.runs:
            r.bold = True

files = [
    ('api/shiprocket-client.js', 'CREATE', 'Token caching module (srPost, getShiprocketToken)'),
    ('api/shiprocket-order.js', 'CREATE', 'Main order flow: verify \u2192 Supabase \u2192 Shiprocket \u2192 AWB \u2192 pickup \u2192 email'),
    ('api/shiprocket-webhook.js', 'CREATE', 'Status webhook handler (unauthenticated, best-effort)'),
    ('supabase/dispatch-orders.sql', 'CREATE', 'Run in Supabase SQL Editor'),
    ('vite.config.ts', 'MODIFY', 'Add GET /api/notify (already done); add amount whitelist to create-order; add /api/shiprocket-order middleware'),
    ('DocumentDrafterModal.tsx', 'MODIFY', 'Step 4 button + address modal + validation + Razorpay flow + success screen'),
    ('src/data/advocateProfile.ts', 'DONE', 'Already updated for Feature 1'),
    ('supabase/advocate-connect.sql', 'DONE', 'Already created for Feature 1'),
]
for f in files:
    row = table7.add_row().cells
    for i, val in enumerate(f):
        row[i].text = val

doc.add_page_break()

# 12. Go / No-Go Criteria
doc.add_heading('12. Go / No-Go Criteria', level=1)

doc.add_heading('12.1 GO Criteria (All Must Be \u2705)', level=2)
go_items = [
    'Shiprocket API user created with DIFFERENT email from panel login',
    'Pickup location added in Shiprocket panel, exact NAME recorded',
    'Wallet funded with \u20b9500+ balance',
    'KYC completed (or not required yet)',
    'Three Vercel env vars set in Production (and Preview): SHIPROCKET_API_EMAIL, SHIPROCKET_API_PASSWORD, SHIPROCKET_PICKUP_LOCATION',
    'dispatch_orders table created in Supabase (SQL executed, RLS enabled)',
    'Shiprocket API auth test successful (curl returns token)',
]
for item in go_items:
    doc.add_paragraph(f'\u2610 {item}', style='List Bullet')

doc.add_heading('12.2 NO-GO Criteria (Any One Missing = Do Not Proceed)', level=2)
nogos = [
    'API user email same as panel login email',
    'Pickup location not created or name not recorded',
    'Wallet balance < \u20b9500',
    'Any Vercel env var missing in Production scope',
    'dispatch_orders table not created or RLS not enabled',
    'Shiprocket auth test fails',
]
for item in nogos:
    doc.add_paragraph(f'\u2612 {item}', style='List Bullet')

doc.add_page_break()

# 13. Reference Links
doc.add_heading('13. Reference Links', level=1)
links = [
    ('Shiprocket API Documentation', 'https://apidocs.shiprocket.in/'),
    ('Shiprocket Helpsheet (Freshdesk)', 'https://shiprocket.freshdesk.com/support/solutions/articles/43000337456-api-document-helpsheet'),
    ('Razorpay Serverless Integration', 'https://razorpay.com/docs/payments/server-integration/nodejs/'),
    ('Supabase JavaScript Client', 'https://supabase.com/docs/reference/javascript/create-client'),
    ('Vercel Serverless Functions', 'https://vercel.com/docs/concepts/functions/serverless-functions'),
    ('NyayaMitra Production', 'https://nyayamitrawb.in'),
    ('NyayaMitra GitHub', 'https://github.com/abhiroop786/nyayamitra'),
]
for name, url in links:
    p = doc.add_paragraph()
    run = p.add_run(f'{name}: ')
    run.bold = True
    run = p.add_run(url)
    run.font.color.rgb = RGBColor(0x00, 0x66, 0xCC)

doc.add_paragraph()
doc.add_paragraph()

# Footer Note
p = doc.add_paragraph()
p.alignment = WD_ALIGN_PARAGRAPH.CENTER
run = p.add_run('\u2014 End of Technical Blueprint \u2014')
run.italic = True
run.font.color.rgb = RGBColor(0x94, 0xA3, 0xB8)

# Save
output_path = r'C:\Users\Admin123\Downloads\Project\nyayamitra\NyayaMitra_Feature2_Shiprocket_Blueprint.docx'
doc.save(output_path)
print(f'Saved to {output_path}')