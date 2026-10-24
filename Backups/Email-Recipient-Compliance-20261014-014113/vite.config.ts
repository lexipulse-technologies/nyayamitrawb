// Disable Rolldown strict schema validator to permanently eliminate legacy "jsx" warnings
process.env.ROLLDOWN_OPTIONS_VALIDATION = 'off';

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import https from 'node:https';
import crypto from 'node:crypto';
import { timingSafeEqual } from 'node:crypto';
import nodemailer from 'nodemailer';
import { createClient } from '@supabase/supabase-js';
import { createLocalTicketId, getLocalMockIpv4, isLocalIntakeMockEnabled, localIntakeMockRecord } from './api/local-intake-mock.js';

const FALLBACK_CI_KEY = 'ci_live_9a53020eb31fa1be3b88c19a9b6c63dab30ba24c01071567';

function splitIntoChunks(text: string, maxLength = 160): string[] {
  const rawSentences = text.split(/([।\.!\?]+)/).filter(Boolean);
  const sentences: string[] = [];
  for (let i = 0; i < rawSentences.length; i += 2) {
    const s = (rawSentences[i] + (rawSentences[i + 1] || '')).trim();
    if (s) sentences.push(s);
  }

  const chunks: string[] = [];
  let current = '';

  for (const sentence of sentences) {
    if ((current + ' ' + sentence).trim().length <= maxLength) {
      current = (current + ' ' + sentence).trim();
    } else {
      if (current) chunks.push(current);
      if (sentence.length > maxLength) {
        const words = sentence.split(' ');
        let sub = '';
        for (const w of words) {
          if ((sub + ' ' + w).trim().length <= maxLength) {
            sub = (sub + ' ' + w).trim();
          } else {
            if (sub) chunks.push(sub);
            sub = w;
          }
        }
        if (sub) chunks.push(sub);
        current = '';
      } else {
        current = sentence;
      }
    }
  }

  if (current) chunks.push(current);
  return chunks;
}

const MANDATORY_GREETING = {
  en: "Hello, I am here to help you as an AI Friend as your civil legal navigator for West Bengal. However, please consult a legal professional to get these information vetted and provide you further legal assistance.",
  bn: "নমস্কার, আমি আপনার এআই বন্ধু (AI Friend) হিসেবে পশ্চিমবঙ্গের আইনি সহায়িকা প্রদানের জন্য এখানে রয়েছি। তবে অনুগ্রহ করে এই তথ্যাদি যাচাই করতে এবং পরবর্তী আইনি সহায়তার জন্য একজন আইন বিশেষজ্ঞের পরামর্শ নিন।",
  hi: "नमस्ते, मैं आपके এআই मित्र (AI Friend) के रूप में पश्चिम बंगाल के सिविल कानूनी मार्गदर्शिका प्रदान करने के लिए यहाँ उपस्थित हूँ। हालाँकि, कृपया इस जानकारी के सत्यापन एवं आगे की विधिक सहायता के लिए किसी विधि विशेषज्ञ से परामर्श अवश्य लें।"
};

const SYSTEM_RULES = `
You are "NyayaMitra AI Sahayak", an authoritative, articulate, and deeply knowledgeable AI Friend and Civil Legal Navigator for India, with specialization in West Bengal civil, property, tenancy, land revenue, and family procedures (https://nyayamitrawb.in).

CORE DIRECTIVES:

1. RELEVANCE & CIVIL JURISDICTION TRIAGE (STRICT):
   - You strictly specialize in CIVIL, PROPERTY, TENANCY, CONTRACT, DEBT, CONSUMER, SUCCESSION, AND FAMILY CIVIL LEGAL MATTERS in India.
   - If the user query is UNRELATED TO INDIAN CIVIL LAW (e.g. recipes, sports, coding, entertainment, general chit-chat):
     Politely decline in one courteous sentence. Example: "I am specifically trained as a Civil Legal Navigator for India and West Bengal. Please feel free to ask any question regarding land, property, tenancy, cheque bounce, consumer, or family civil matters."
   - If the user query is PURELY VIOLENT CRIMINAL DEFENSE (e.g. murder bail, robbery, rape, kidnapping, NDPS trial):
     Politely decline in one sentence: "I am designed specifically for civil, property, tenancy, debt, and family maintenance matters. For criminal defense or bail trials under Bharatiya Nyaya Sanhita, please consult a criminal defense advocate or contact free DLSA legal aid (Toll-Free 15100)."

2. BRAND IDENTITY & ABSOLUTE MODEL PRIVACY (MANDATORY):
   - You are exclusively "NyayaMitra AI Sahayak", engineered for LEXIPULSE TECHNOLOGIES.
   - You must NEVER mention "DeepSeek", "Deep Seek", "Gemma", "OpenAI", "Meta", "LLM", or any underlying model name, version number, or technical architecture anywhere in your responses or greeting.
   - If the user asks what model you are, what technology you run on, or who created you, state: "I am NyayaMitra AI Sahayak, an AI civil legal navigator engineered for West Bengal by LEXIPULSE TECHNOLOGIES."

3. SUBSTANTIVE, DETAILED & COMPLETE LEGAL ADVICE:
   - Never give vague, generic, or one-paragraph answers. Address the citizen's specific facts in detail.
   - Break down the response into rich, logical sections using PLAIN CAPITAL LETTERS (no markdown hashes):
     * LEGAL POSITION AND APPLICABLE STATUTES: Mention exact Indian Acts and Sections (e.g. West Bengal Land Reforms Act 1955, West Bengal Premises Tenancy Act 1997, Section 138 Negotiable Instruments Act, Section 144 Bharatiya Nagarik Suraksha Sanhita 2023, Consumer Protection Act 2019, Real Estate Act 2016, Hindu Succession Act 1956, Order XX Rule 18 CPC).
     * JURISDICTIONAL FORUM: State the exact office, tribunal, or court to approach. Differentiate between the 22 Administrative Districts (BL&LRO, SDO, District Courts) and Kolkata Urban Area (KMC Assessee, Rent Controller at Kiran Shankar Roy Road, Presidency Small Causes Court, City Civil Court).
     * CHRONOLOGICAL PROCEDURAL ROADMAP: Give an actionable, numbered plan (Step 1: Statutory Notice, Step 2: Petition/Plaint Filing, Step 3: Interim Relief / Injunction, Step 4: Evidence & Execution).
     * REQUIRED DOCUMENT CHECKLIST: List every xerox/original paper needed (registered deed, RoR Porcha, rent receipts, challans, bank memos).
     * STATUTORY LIMITATION & ESTIMATED TIMEFRAME: State the legal time limits to take action.
   - Complete your entire answer thoroughly without cutting off mid-sentence.

4. STRICT FORMATTING INVARIANTS (MANDATORY):
   - MANDATORY GREETING: Your very first sentence MUST be the exact required opening greeting matching the user language.
   - NEVER use any asterisks (*) anywhere. Do not use bold markdown (**), do not use italic stars (*), do not use bullet asterisks (*).
   - NEVER use hashtags (#) or underscores (_).
   - Use plain numbers (1., 2., 3.) or simple hyphens (-) for lists.
   - End your response with: "Note: This is procedural guidance based on https://nyayamitrawb.in in compliance with BCI Rule 36. For representation, consult an empanelled panel advocate or free DLSA legal aid (Toll-Free 15100)."
`;

function sanitizeCleanText(rawText: string): string {
  if (!rawText) return '';
  return rawText
    .replace(/<think>[\s\S]*?<\/think>/gi, '')
    .replace(/deepseek[-\s]?v?[0-9.]*[-\s]?(flash|chat|coder|r1|v3)?/gi, 'NyayaMitra AI')
    .replace(/deepseek/gi, 'NyayaMitra')
    .replace(/\*/g, '')
    .replace(/#/g, '')
    .replace(/_{2,}/g, '')
    .replace(/`{1,3}/g, '')
    .trim();
}

function callCheaperInferenceHttp1(apiKey: string, payload: any): Promise<{ ok: boolean; status: number; text: string; data?: any }> {
  return new Promise((resolve) => {
    try {
      const postData = Buffer.from(JSON.stringify(payload), 'utf8');
      const options: https.RequestOptions = {
        hostname: 'api.cheaperinference.com',
        port: 443,
        path: '/v1/chat/completions',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'Content-Length': postData.length,
          'Accept': 'application/json',
          'User-Agent': 'curl/8.4.0'
        },
        timeout: 75000 // Extended to 75 seconds for dev server
      };

      const req = https.request(options, (res) => {
        let responseBody = '';
        res.setEncoding('utf8');
        res.on('data', chunk => { responseBody += chunk; });
        res.on('end', () => {
          const isOk = (res.statusCode || 500) >= 200 && (res.statusCode || 500) < 300;
          try {
            const parsed = JSON.parse(responseBody);
            resolve({ ok: isOk, status: res.statusCode || 200, text: responseBody, data: parsed });
          } catch {
            resolve({ ok: isOk, status: res.statusCode || 500, text: responseBody });
          }
        });
      });

      req.on('timeout', () => {
        req.destroy();
        resolve({ ok: false, status: 408, text: 'Request Timeout' });
      });

      req.on('error', (err) => {
        console.warn('[AI Gateway Network Notice]:', err.message);
        resolve({ ok: false, status: 503, text: err.message });
      });

      req.end(postData);
    } catch (err: any) {
      resolve({ ok: false, status: 500, text: err.message });
    }
  });
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'local-api-dev-server',
        configureServer(server) {
          const localIntakeEnv = {
            NODE_ENV: 'development',
            NYAYAMITRA_ENABLE_LOCAL_INTAKE_MOCK: env.NYAYAMITRA_ENABLE_LOCAL_INTAKE_MOCK || 'false',
            NYAYAMITRA_DEV_MOCK_IPV4: env.NYAYAMITRA_DEV_MOCK_IPV4 || 'false'
          };
          const safeTokenEquals = (provided: string, expected: string) => {
            const a = Buffer.from(provided || '', 'utf8');
            const b = Buffer.from(expected || '', 'utf8');
            return a.length > 0 && a.length === b.length && timingSafeEqual(a, b);
          };
          // 1. Audio TTS Middleware
          server.middlewares.use('/api/tts', async (req, res) => {
            try {
              const url = new URL(req.url || '', `http://${req.headers.host}`);
              const text = (url.searchParams.get('text') || '').trim();
              const lang = (url.searchParams.get('lang') || 'bn').toLowerCase();

              if (!text) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: 'Text required' }));
                return;
              }

              const langCode = lang === 'bn' ? 'bn' : lang === 'hi' ? 'hi' : 'en';
              const chunks = splitIntoChunks(text.slice(0, 1000), 160);
              const audioBuffers: Buffer[] = [];

              for (const chunk of chunks) {
                if (!chunk.trim()) continue;
                const gUrl = `https://translate.googleapis.com/translate_tts?ie=UTF-8&client=gtx&tl=${langCode}&q=${encodeURIComponent(chunk)}`;
                const response = await fetch(gUrl, {
                  headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
                });
                if (response.ok) {
                  const arrayBuf = await response.arrayBuffer();
                  audioBuffers.push(Buffer.from(arrayBuf));
                }
              }

              if (audioBuffers.length === 0) {
                res.statusCode = 500;
                res.end(JSON.stringify({ error: 'Failed to synthesize audio' }));
                return;
              }

              res.setHeader('Content-Type', 'audio/mpeg');
              res.end(Buffer.concat(audioBuffers));
            } catch {
              res.statusCode = 500;
              res.end('Error generating speech');
            }
          });

          // 2. AI Chat Middleware (Optimum 4096 Tokens & Model Privacy)
          server.middlewares.use('/api/chat', async (req, res) => {
            if (req.method === 'OPTIONS') {
              res.statusCode = 200;
              res.end();
              return;
            }
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.end(JSON.stringify({ error: 'Method not allowed' }));
              return;
            }

            let bodyStr = '';
            req.on('data', chunk => { bodyStr += chunk; });
            req.on('end', async () => {
              try {
                const parsed = JSON.parse(bodyStr || '{}');
                const rawMessage = (parsed.message || '').trim();
                const userLang = (parsed.lang || 'en').toLowerCase();
                const history = parsed.history || [];

                if (!rawMessage) {
                  res.statusCode = 400;
                  res.end(JSON.stringify({ error: 'Message is required' }));
                  return;
                }

                const apiKey = (
                  env.CHEAPER_INFERENCE_API_KEY ||
                  env.CI_API_KEY ||
                  FALLBACK_CI_KEY
                ).trim();

                const formattedMessages: any[] = [
                  {
                    role: 'system',
                    content: `${SYSTEM_RULES}\n\n[USER CONVERSATION LANGUAGE: ${userLang.toUpperCase()}]`
                  }
                ];

                if (Array.isArray(history) && history.length > 0) {
                  history.forEach((item: any) => {
                    if (item.role && item.content) {
                      formattedMessages.push({
                        role: item.role === 'assistant' ? 'assistant' : 'user',
                        content: String(item.content).slice(0, 1500)
                      });
                    }
                  });
                }

                formattedMessages.push({
                  role: 'user',
                  content: rawMessage.slice(0, 2000)
                });

                let replyText = '';

                if (apiKey) {
                  const result = await callCheaperInferenceHttp1(apiKey, {
                    model: 'deepseek-v4.1-flash',
                    messages: formattedMessages,
                    temperature: 0.3,
                    max_tokens: 4096 // Optimum ceiling preventing truncation
                  });

                  if (result.ok && result.data?.choices?.[0]?.message?.content) {
                    replyText = sanitizeCleanText(result.data.choices[0].message.content);
                    const requiredGreeting = MANDATORY_GREETING[userLang as 'en' | 'bn' | 'hi'] || MANDATORY_GREETING.en;
                    if (!replyText.startsWith(requiredGreeting)) {
                      replyText = `${requiredGreeting}\n\n${replyText}`;
                    }
                  } else {
                    console.warn('[Dev Server AI Notice]:', result.status, result.text);
                  }
                }

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({
                  reply: replyText || null,
                  useLocalFallback: !replyText
                }));
              } catch (e: any) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ reply: null, error: e.message, useLocalFallback: true }));
              }
            });
          });

          // 3. Razorpay Live Order Creation Middleware
          server.middlewares.use('/api/create-order', async (req, res) => {
            if (req.method === 'OPTIONS') {
              res.statusCode = 200;
              res.end();
              return;
            }
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.end(JSON.stringify({ error: 'Method not allowed' }));
              return;
            }

            let bodyStr = '';
            req.on('data', chunk => { bodyStr += chunk; });
            req.on('end', async () => {
              try {
                const parsed = JSON.parse(bodyStr || '{}');
                const { referenceId, disputeTopic } = parsed;

                const keyId = (env.RAZORPAY_KEY_ID || 'rzp_live_TkN8MUwR01Npxf').trim();
                const keySecret = (env.RAZORPAY_KEY_SECRET || '7L6obgTM86jcU2egxsXEpvlL').trim();

                const orderPayload = JSON.stringify({
                  amount: 9900,
                  currency: 'INR',
                  receipt: referenceId || `NM-DOC-${Date.now()}`,
                  notes: {
                    platform: 'NyayaMitra Pro',
                    merchant: 'LEXIPULSE TECHNOLOGIES',
                    topic: disputeTopic || 'Statutory Notice'
                  }
                });

                const authHeader = 'Basic ' + Buffer.from(`${keyId}:${keySecret}`).toString('base64');

                const options = {
                  hostname: 'api.razorpay.com',
                  port: 443,
                  path: '/v1/orders',
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': authHeader,
                    'Content-Length': Buffer.byteLength(orderPayload)
                  },
                  timeout: 15000
                };

                const razorpayReq = https.request(options, (razorpayRes) => {
                  let resBody = '';
                  razorpayRes.setEncoding('utf8');
                  razorpayRes.on('data', chunk => { resBody += chunk; });
                  razorpayRes.on('end', () => {
                    res.statusCode = razorpayRes.statusCode || 200;
                    res.setHeader('Content-Type', 'application/json');
                    try {
                      const data = JSON.parse(resBody);
                      if (razorpayRes.statusCode >= 200 && razorpayRes.statusCode < 300) {
                        res.end(JSON.stringify({
                          orderId: data.id,
                          amount: data.amount,
                          currency: data.currency,
                          keyId: keyId
                        }));
                      } else {
                        res.end(JSON.stringify({ error: data.error?.description || 'Razorpay Live order creation failed' }));
                      }
                    } catch {
                      res.end(resBody);
                    }
                  });
                });

                razorpayReq.on('error', (err) => {
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: err.message }));
                });

                razorpayReq.end(orderPayload);
              } catch (e: any) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: e.message }));
              }
            });
          });

          // 4. Razorpay Live Cryptographic Verification Middleware
          server.middlewares.use('/api/verify-payment', async (req, res) => {
            if (req.method === 'OPTIONS') {
              res.statusCode = 200;
              res.end();
              return;
            }
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.end(JSON.stringify({ error: 'Method not allowed' }));
              return;
            }

            let bodyStr = '';
            req.on('data', chunk => { bodyStr += chunk; });
            req.on('end', async () => {
              try {
                const parsed = JSON.parse(bodyStr || '{}');
                const {
                  razorpay_order_id,
                  razorpay_payment_id,
                  razorpay_signature,
                  referenceId,
                  citizenName,
                  phone,
                  district,
                  disputeTopic
                } = parsed;

                if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ verified: false, error: 'Missing Razorpay verification tokens.' }));
                  return;
                }

                const keySecret = (env.RAZORPAY_KEY_SECRET || '7L6obgTM86jcU2egxsXEpvlL').trim();

                const expectedSignature = crypto
                  .createHmac('sha256', keySecret)
                  .update(`${razorpay_order_id}|${razorpay_payment_id}`)
                  .digest('hex');

                const isAuthentic = crypto.timingSafeEqual(
                  Buffer.from(expectedSignature, 'utf8'),
                  Buffer.from(razorpay_signature, 'utf8')
                );

                if (!isAuthentic) {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ verified: false, error: 'Cryptographic signature mismatch.' }));
                  return;
                }

                const currentTimestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

                const supabaseUrl = env.VITE_SUPABASE_URL || env.SUPABASE_URL || 'https://mwborzyxcgykrjuyqfel.supabase.co';
                const supabaseKey = env.VITE_SUPABASE_ANON_KEY || env.SUPABASE_ANON_KEY || env.SUPABASE_SERVICE_ROLE_KEY;

                if (supabaseUrl && supabaseKey) {
                  try {
                    const supabase = createClient(supabaseUrl, supabaseKey, {
                      auth: { persistSession: false, autoRefreshToken: false }
                    });

                    await supabase.from('pro_transactions').upsert([
                      {
                        id: referenceId || razorpay_order_id,
                        citizen_name: citizenName || 'Pro Drafter User',
                        phone: phone || 'Not provided',
                        district: district || 'West Bengal',
                        dispute_topic: disputeTopic || 'Statutory Legal Notice',
                        utr_number: razorpay_payment_id,
                        amount: 99.00,
                        submission_time: currentTimestamp
                      }
                    ]);
                  } catch (dbErr: any) {
                    console.warn('[Dev Server Supabase Error]:', dbErr.message);
                  }
                }

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({
                  verified: true,
                  status: 'SUCCESS',
                  paymentId: razorpay_payment_id,
                  orderId: razorpay_order_id
                }));
              } catch (e: any) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: e.message }));
              }
            });
          });

          // 5. Razorpay Webhook Middleware (local development only; production uses api/razorpay-webhook.js)
          server.middlewares.use('/api/razorpay-webhook', async (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.setHeader('Allow', 'POST');
              res.end(JSON.stringify({ error: 'Method not allowed' }));
              return;
            }

            const chunks: Buffer[] = [];
            req.on('data', chunk => chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)));
            req.on('end', async () => {
              try {
                const rawBody = Buffer.concat(chunks);
                const receivedSignature = Array.isArray(req.headers['x-razorpay-signature'])
                  ? req.headers['x-razorpay-signature'][0]
                  : req.headers['x-razorpay-signature'];
                const eventId = Array.isArray(req.headers['x-razorpay-event-id'])
                  ? req.headers['x-razorpay-event-id'][0]
                  : req.headers['x-razorpay-event-id'];
                const webhookSecret = (env.RAZORPAY_KEY_SECRET || '').trim();
                const expectedSignature = crypto
                  .createHmac('sha256', webhookSecret)
                  .update(rawBody)
                  .digest('hex');
                const expected = Buffer.from(expectedSignature, 'utf8');
                const received = Buffer.from(receivedSignature || '', 'utf8');

                if (!webhookSecret || !eventId || expected.length !== received.length || !crypto.timingSafeEqual(expected, received)) {
                  res.statusCode = 401;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: 'Invalid Razorpay webhook signature' }));
                  return;
                }

                const payload = JSON.parse(rawBody.toString('utf8'));
                const payment = payload?.payload?.payment?.entity || {};
                const order = payload?.payload?.order?.entity || {};
                const supabaseUrl = (env.SUPABASE_URL || env.VITE_SUPABASE_URL || '').replace(/\/rest\/v1\/?$/, '');
                const serviceRoleKey = (env.SUPABASE_SERVICE_ROLE_KEY || '').trim();

                if (supabaseUrl && serviceRoleKey) {
                  const supabase = createClient(supabaseUrl, serviceRoleKey, {
                    auth: { persistSession: false, autoRefreshToken: false }
                  });
                  const { error } = await supabase.from('webhook_events').insert({
                    event_id: eventId,
                    event_name: payload.event || 'unknown',
                    razorpay_order_id: payment.order_id || order.id || null,
                    razorpay_payment_id: payment.id || null,
                    payload
                  });

                  if (error && error.code !== '23505') {
                    throw new Error(`Webhook idempotency write failed: ${error.message}`);
                  }
                }

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ received: true }));
              } catch (error: any) {
                console.error('[Local Razorpay Webhook]:', error.message);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Webhook processing failed' }));
              }
            });
          });

          // 6. Local visitor counter response. Production is served by api/counter.js.
          server.middlewares.use('/api/counter', (req, res) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Cache-Control', 'no-store');
            res.end(JSON.stringify({ success: true, uniqueVisitors: 1420, local: true }));
          });

          // 7. Local-only intake mock. It never writes Supabase or sends email.
          server.middlewares.use('/api/submit-intake', (req, res) => {
            res.setHeader('Cache-Control', 'no-store');
            res.setHeader('Content-Type', 'application/json');
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.setHeader('Allow', 'POST');
              res.end(JSON.stringify({ error: 'Method not allowed' }));
              return;
            }
            if (!isLocalIntakeMockEnabled(localIntakeEnv)) {
              res.statusCode = 503;
              res.end(JSON.stringify({ error: 'Local intake mock is disabled. No remote intake was submitted.' }));
              return;
            }

            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', () => {
              try {
                const payload = JSON.parse(body || '{}');
                if (payload?.consentGiven !== true || !payload.citizenName?.trim() || !/^\d{10}$/.test(String(payload.phone || '').trim())) {
                  res.statusCode = 400;
                  res.end(JSON.stringify({ error: 'Valid name, phone and affirmative consent are required.' }));
                  return;
                }
                const item = localIntakeMockRecord(payload, createLocalTicketId(), localIntakeEnv);
                console.info('[Local intake mock] No Supabase write or email sent.', { ticketId: item.id, ipv4Status: item.ipCaptureStatus });
                res.statusCode = 200;
                res.end(JSON.stringify({ status: 'success', item, mock: true, emailStatus: 'not_sent_local_mock' }));
              } catch {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: 'Invalid JSON request.' }));
              }
            });
          });

          server.middlewares.use('/api/admin-intake-ip', (req, res) => {
            res.setHeader('Cache-Control', 'no-store, private');
            res.setHeader('Content-Type', 'application/json');
            if (req.method !== 'GET') {
              res.statusCode = 405;
              res.setHeader('Allow', 'GET');
              res.end(JSON.stringify({ error: 'Method not allowed' }));
              return;
            }
            if (!isLocalIntakeMockEnabled(localIntakeEnv)) {
              res.statusCode = 503;
              res.end(JSON.stringify({ error: 'Local IPv4 mock is disabled.' }));
              return;
            }
            const query = new URL(req.url || '/', 'http://localhost').searchParams.get('tickets') || '';
            const tickets = [...new Set(query.split(',').map(value => value.trim().toUpperCase()).filter(value => /^WB-REF-\d{6}$/.test(value)))].slice(0, 100);
            const expectedToken = env.INTAKE_IP_ADMIN_TOKEN || 'local-ip-review-token';
            const auth = String(req.headers.authorization || '');
            const supplied = auth.startsWith('Bearer ') ? auth.slice(7).trim() : '';
            if (!safeTokenEquals(supplied, expectedToken)) {
              res.statusCode = 401;
              res.end(JSON.stringify({ error: 'Invalid IPv4 audit token' }));
              return;
            }
            res.statusCode = 200;
            res.end(JSON.stringify({ items: getLocalMockIpv4(tickets, localIntakeEnv), mock: true }));
          });

          // 8. Email Notification & Serverless Dual-Commit Middleware
          server.middlewares.use('/api/notify', async (req, res) => {
            if (req.method === 'OPTIONS') {
              res.statusCode = 200;
              res.end();
              return;
            }
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.end(JSON.stringify({ error: 'Method not allowed' }));
              return;
            }

            let bodyStr = '';
            req.on('data', chunk => { bodyStr += chunk; });
            req.on('end', async () => {
              try {
                const parsed = JSON.parse(bodyStr || '{}');
                const {
                  id,
                  citizenName,
                  phone,
                  district,
                  subcategoryTitle,
                  briefSummary,
                  timestamp,
                  notificationType,
                  utrNumber
                } = parsed;

                const emailUser = (env.GMAIL_USER || 'namaste@nyayamitrawb.in').trim();
                const rawPass = (env.GMAIL_APP_PASSWORD || env.EMAIL_PASSWORD || '').trim();
                const emailPass = rawPass.replace(/\s+/g, '');

                const rawIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '127.0.0.1';
                const resolvedIp = Array.isArray(rawIp) ? rawIp[0] : (String(rawIp).split(',')[0].trim());
                const currentTimestamp = timestamp || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

                const isAdminAudit = notificationType === 'ADMIN_LOGIN_AUDIT';
                const isProDrafter = (id && id.startsWith('NM-DOC-')) ||
                                     (notificationType === 'PRO_DRAFTER_PAYMENT') ||
                                     (subcategoryTitle && subcategoryTitle.includes('Pro Payment'));

                if (!isAdminAudit && !isProDrafter) {
                  res.statusCode = 410;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: 'Use the secure referral intake endpoint.' }));
                  return;
                }

                if (!emailPass) {
                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ status: 'db_completed', reason: 'Email password not set' }));
                  return;
                }

                const transporter = nodemailer.createTransport({
                  host: 'smtp.gmail.com',
                  port: 465,
                  secure: true,
                  auth: { user: emailUser, pass: emailPass }
                });

                const recipientEmails = emailUser;

                const subjectLine = isAdminAudit
                  ? `[Security Alert: Admin Login] ${citizenName || 'Abi786'} (${resolvedIp})`
                  : `[₹99 Pro Notice Payment Live] ${id} - ${district} (${citizenName})`;

                await transporter.sendMail({
                  from: `"NyayaMitra Security" <${emailUser}>`,
                  to: recipientEmails,
                  subject: subjectLine,
                  html: `
                    <div style="font-family: Arial, sans-serif; padding: 20px;">
                      <h2>${isAdminAudit ? 'Security Alert: Admin Login' : 'NyayaMitra Pro — Live Notice Payment'}</h2>
                      <p><strong>Identity / Reference:</strong> ${id || citizenName}</p>
                      <p><strong>IP / Contact:</strong> ${isAdminAudit ? resolvedIp : phone}</p>
                      <p><strong>District:</strong> ${district || 'West Bengal'}</p>
                      <p><strong>Topic / Summary:</strong> ${subcategoryTitle || briefSummary}</p>
                      <p><strong>Time:</strong> ${currentTimestamp}</p>
                      <p style="color: #64748b; font-size: 11px;">Dispatched to: ${recipientEmails}</p>
                    </div>
                  `
                });

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ status: 'success', dispatchedTo: recipientEmails }));
              } catch (err: any) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: err.message }));
              }
            });
          });
        }
      }
    ],
    build: {
      target: 'es2020',
      modulePreload: { polyfill: false },
      cssCodeSplit: true,
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom')) return 'vendor';
              if (id.includes('@supabase')) return 'supabase';
              if (id.includes('lucide-react')) return 'icons';
              if (id.includes('jspdf') || id.includes('qrcode')) return 'pro-engine';
            }
            if (id.includes('src/data/categories') || id.includes('src/data/civilLegalData')) {
              return 'legal-data';
            }
          }
        }
      }
    }
  };
});
