// Disable Rolldown strict schema validator to permanently eliminate legacy "jsx" warnings
process.env.ROLLDOWN_OPTIONS_VALIDATION = 'off';

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-oxc';
import https from 'node:https';
import crypto from 'node:crypto';
import nodemailer from 'nodemailer';
import { createClient } from '@supabase/supabase-js';
import { createHmac, timingSafeEqual } from 'crypto';

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

                // Amount whitelist (paise): ₹99 drafter default, ₹199 dispatch, ₹499 advocate connect
                const ALLOWED_AMOUNTS: Record<number, boolean> = { 9900: true, 19900: true, 49900: true };
                const amountPaise = ALLOWED_AMOUNTS[Number(parsed.amount)] ? Number(parsed.amount) : 9900;

                const keyId = (env.RAZORPAY_KEY_ID || 'rzp_live_TkN8MUwR01Npxf').trim();
                const keySecret = (env.RAZORPAY_KEY_SECRET || '7L6obgTM86jcU2egxsXEpvlL').trim();

                const orderPayload = JSON.stringify({
                  amount: amountPaise,
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

          // Admin Auth Middleware (local dev only; production uses Vercel Serverless Functions)
          const ADMIN_USER = 'abi786';
          const ADMIN_PASS = 'Baabuujii@5623';
          const JWT_SECRET = env.ADMIN_JWT_SECRET || 'dev-secret-change-in-production';
          const COOKIE_NAME = 'nyayamitra_admin_session';

          function base64url(input: Buffer | string): string {
            return Buffer.from(input).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
          }

          function signJWT(payload: object): string {
            const header = { alg: 'HS256', typ: 'JWT' };
            const encodedHeader = base64url(JSON.stringify(header));
            const encodedPayload = base64url(JSON.stringify(payload));
            const signature = createHmac('sha256', JWT_SECRET)
              .update(`${encodedHeader}.${encodedPayload}`)
              .digest();
            const encodedSignature = base64url(signature);
            return `${encodedHeader}.${encodedPayload}.${encodedSignature}`;
          }

          function base64urlDecode(input: string): Buffer {
            const padded = input.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice(0, (input.length % 4) || 4);
            return Buffer.from(padded, 'base64');
          }

          function verifyJWT(token: string): { valid: boolean; payload?: any } {
            try {
              const parts = token.split('.');
              if (parts.length !== 3) return { valid: false };
              const [header, payload, signature] = parts;
              const expectedSignature = createHmac('sha256', JWT_SECRET)
                .update(`${header}.${payload}`)
                .digest();
              const providedSignature = base64urlDecode(signature);
              if (!timingSafeEqual(expectedSignature, providedSignature)) return { valid: false };
              const decodedPayload = JSON.parse(base64urlDecode(payload).toString());
              if (decodedPayload.exp && decodedPayload.exp * 1000 < Date.now()) return { valid: false };
              return { valid: true, payload: decodedPayload };
            } catch {
              return { valid: false };
            }
          }

          function constantTimeEqual(a: string, b: string): boolean {
            if (a.length !== b.length) return false;
            return timingSafeEqual(Buffer.from(a), Buffer.from(b));
          }

          function getCookie(req: any, name: string): string | undefined {
            const cookieHeader = req.headers.cookie;
            if (!cookieHeader) return undefined;
            const cookies = cookieHeader.split(';').map(c => c.trim());
            for (const cookie of cookies) {
              const [key, ...valueParts] = cookie.split('=');
              if (key === name) return valueParts.join('=');
            }
            return undefined;
          }

          // 6. Advocate Connect — ₹499 payment confirmation (local development only;
          //    production uses api/advocate-connect.js). Verifies the Razorpay signature,
          //    stores the request, and emails Payment Confirmation + Calendly scheduling
          //    link to the advocate and admin inboxes.
          const ADVOCATE_DEV_EMAIL = 'khantanweer85@gmail.com';
          const ADMIN_DEV_EMAIL = 'namaste@nyayamitrawb.in';
          const CALENDLY_DEV_URL = 'https://calendly.com/namaste-nyayamitrawb/60mins';

          const escapeDevHtml = (value: any): string =>
            String(value ?? '')
              .replace(/&/g, '\u0026amp;')
              .replace(/</g, '\u0026lt;')
              .replace(/>/g, '\u0026gt;')
              .replace(/"/g, '\u0026quot;')
              .replace(/'/g, '\u0026#39;');

          server.middlewares.use('/api/advocate-connect', async (req, res) => {
            if (req.method === 'OPTIONS') { res.statusCode = 200; res.end(); return; }
            if (req.method !== 'POST') { res.statusCode = 405; res.end(JSON.stringify({ error: 'Method not allowed' })); return; }

            let bodyStr = '';
            req.on('data', chunk => { bodyStr += chunk; });
            req.on('end', async () => {
              try {
                const parsed = JSON.parse(bodyStr || '{}');
                const {
                  razorpay_order_id, razorpay_payment_id, razorpay_signature,
                  citizenName, mobile, citizenEmail, comment,
                  workflowId, workflowTitle
                } = parsed;

                if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature ||
                    !citizenName || !mobile || !citizenEmail) {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: 'Missing required fields' }));
                  return;
                }

                const keySecret = (env.RAZORPAY_KEY_SECRET || '').trim();
                const expected = keySecret
                  ? crypto.createHmac('sha256', keySecret).update(`${razorpay_order_id}|${razorpay_payment_id}`).digest('hex')
                  : '';
                const provided = String(razorpay_signature);
                const signatureOk = Boolean(keySecret) &&
                  expected.length === provided.length &&
                  timingSafeEqual(Buffer.from(expected), Buffer.from(provided));
                if (!signatureOk) {
                  res.statusCode = 401;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: 'Invalid payment signature' }));
                  return;
                }

                const supabaseUrl = (env.SUPABASE_URL || env.VITE_SUPABASE_URL || '').replace(/\/rest\/v1\/?$/, '');
                const supabaseKey = (env.SUPABASE_SERVICE_ROLE_KEY || env.VITE_SUPABASE_ANON_KEY || '').trim();
                if (supabaseUrl && supabaseKey) {
                  try {
                    const supabase = createClient(supabaseUrl, supabaseKey, {
                      auth: { persistSession: false, autoRefreshToken: false }
                    });
                    const { error: dbError } = await supabase
                      .from('advocate_connect_requests')
                      .insert({
                        citizen_name: citizenName,
                        citizen_mobile: mobile,
                        citizen_email: citizenEmail,
                        citizen_comment: comment || null,
                        workflow_id: workflowId || null,
                        workflow_title: workflowTitle || null,
                        razorpay_payment_id,
                        razorpay_order_id,
                        amount: 499,
                        notified_advocate: true
                      });
                    if (dbError) console.error('[Dev AdvocateConnect] DB insert failed:', dbError.message);
                  } catch (dbErr: any) {
                    console.error('[Dev AdvocateConnect] DB error:', dbErr.message);
                  }
                }

                const emailUser = (env.GMAIL_USER || 'namaste@nyayamitrawb.in').trim();
                const rawPass = (env.GMAIL_APP_PASSWORD || env.EMAIL_PASSWORD || '').trim();
                const emailPass = rawPass.replace(/\s+/g, '');
                if (!emailPass) {
                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ status: 'db_completed', reason: 'email_creds_missing' }));
                  return;
                }

                const safeName = escapeDevHtml(citizenName);
                const safeEmail = escapeDevHtml(citizenEmail);
                const safeComment = escapeDevHtml(comment || '');
                const safeWorkflowTitle = escapeDevHtml(workflowTitle || '');
                const safePaymentId = escapeDevHtml(razorpay_payment_id);

                const transporter = nodemailer.createTransport({
                  host: 'smtp.gmail.com',
                  port: 465,
                  secure: true,
                  auth: { user: emailUser, pass: emailPass }
                });

                const html = `
                  <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;border:1px solid #1a3d60;border-radius:12px;overflow:hidden">
                    <div style="background:#0f2b48;color:#fff;padding:18px 24px;text-align:center">
                      <h2 style="margin:0">NyayaMitra Advocate Connect — Payment Confirmed (₹499)</h2>
                    </div>
                    <div style="padding:24px;background:#f8fafc;color:#0f172a;font-size:14px">
                      <p style="background:#ecfdf5;border:1px solid #6ee7b7;border-radius:8px;padding:10px 14px"><b style="color:#065f46">PAYMENT CONFIRMED:</b> Razorpay payment received and signature verified.</p>
                      <p><b>Citizen:</b> ${safeName}</p>
                      <p><b>Mobile:</b> ${escapeDevHtml(mobile)} &nbsp;|&nbsp; <b>Email:</b> ${safeEmail}</p>
                      <p><b>Workflow:</b> ${safeWorkflowTitle || '—'} (${escapeDevHtml(workflowId || '')})</p>
                      <p><b>Query:</b> ${safeComment || '—'}</p>
                      <p><b>Payment ID:</b> <code>${safePaymentId}</code> (signature verified)</p>
                      <div style="background:#fffbeb;border:1px solid #f59e0b;border-radius:8px;padding:14px 16px;margin-top:14px">
                        <b style="color:#92400e">CONSULTATION SCHEDULING (Calendly):</b>
                        <p style="margin:8px 0">The citizen has been instructed to schedule the 60-minute consultation with the advocate via this Calendly link:</p>
                        <p style="margin:8px 0"><a href="${CALENDLY_DEV_URL}" style="color:#1d4ed8;font-weight:bold;word-break:break-all">${CALENDLY_DEV_URL}</a></p>
                      </div>
                      <div style="background:#fef2f2;border:1px solid #f87171;border-radius:8px;padding:12px 16px;margin-top:12px">
                        <b style="color:#991b1b">ACTION:</b> Keep the consultation slot ready once the citizen schedules via Calendly. If not scheduled within 24 working hours, call the citizen at ${escapeDevHtml(mobile)}.
                      </div>
                    </div>
                  </div>`;

                await transporter.sendMail({
                  from: emailUser,
                  to: [ADVOCATE_DEV_EMAIL, ADMIN_DEV_EMAIL],
                  subject: `[NyayaMitra Advocate Connect] Payment Confirmed — ${citizenName} — ${mobile}`,
                  html
                });

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true }));
              } catch (err: any) {
                console.error('[Dev AdvocateConnect] Error:', err.message);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ status: 'db_completed', reason: 'email_failed' }));
              }
            });
          });

          // Admin Login
          server.middlewares.use('/api/admin/login', async (req, res) => {
            if (req.method === 'OPTIONS') { res.statusCode = 200; res.end(); return; }
            if (req.method !== 'POST') { res.statusCode = 405; res.end(JSON.stringify({ error: 'Method not allowed' })); return; }
            let bodyStr = '';
            req.on('data', chunk => { bodyStr += chunk; });
            req.on('end', async () => {
              try {
                const { username, password } = JSON.parse(bodyStr || '{}');
                if (!username || !password) { res.statusCode = 400; res.end(JSON.stringify({ error: 'Username and password required' })); return; }
                const cleanUser = username.trim().toLowerCase();
                const cleanPass = password.trim();
                const isUserValid = constantTimeEqual(cleanUser, ADMIN_USER);
                const isPassValid = constantTimeEqual(cleanPass, ADMIN_PASS);
                if (!isUserValid || !isPassValid) { res.statusCode = 401; res.end(JSON.stringify({ error: 'Invalid credentials' })); return; }
                const token = signJWT({ sub: 'admin', iat: Math.floor(Date.now() / 1000), exp: Math.floor(Date.now() / 1000) + 8 * 60 * 60 });
                res.setHeader('Set-Cookie', `${COOKIE_NAME}=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=${8 * 60 * 60}`);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, user: { role: 'admin' } }));
              } catch (e: any) {
                res.statusCode = 500;
                res.end(JSON.stringify({ error: e.message }));
              }
            });
          });

          // Admin Verify
          server.middlewares.use('/api/admin/verify', async (req, res) => {
            if (req.method === 'OPTIONS') { res.statusCode = 200; res.end(); return; }
            if (req.method !== 'GET') { res.statusCode = 405; res.end(JSON.stringify({ error: 'Method not allowed' })); return; }
            const token = getCookie(req, COOKIE_NAME);
            if (!token) { res.statusCode = 401; res.end(JSON.stringify({ authenticated: false, error: 'No session' })); return; }
            const { valid, payload } = verifyJWT(token);
            if (!valid) { res.setHeader('Set-Cookie', `${COOKIE_NAME}=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0`); res.statusCode = 401; res.end(JSON.stringify({ authenticated: false, error: 'Invalid or expired session' })); return; }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ authenticated: true, user: payload }));
          });

          // Admin Logout
          server.middlewares.use('/api/admin/logout', async (req, res) => {
            if (req.method === 'OPTIONS') { res.statusCode = 200; res.end(); return; }
            if (req.method !== 'POST') { res.statusCode = 405; res.end(JSON.stringify({ error: 'Method not allowed' })); return; }
            res.setHeader('Set-Cookie', `${COOKIE_NAME}=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0`);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true }));
          });

          // Admin audit and paid-drafter notifications.
          server.middlewares.use('/api/notify', async (req, res) => {
            if (req.method === 'OPTIONS') {
              res.statusCode = 200;
              res.end();
              return;
            }

            // GET: Fetch advocate connect requests for admin panel
            if (req.method === 'GET') {
              const supabaseUrl = (env.SUPABASE_URL || env.VITE_SUPABASE_URL || '').replace(/\/rest\/v1\/?$/, '');
              const supabaseKey = (env.SUPABASE_SERVICE_ROLE_KEY || env.VITE_SUPABASE_ANON_KEY || '').trim();

              if (!supabaseUrl || !supabaseKey) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, data: [], error: 'Supabase not configured' }));
                return;
              }

              try {
                const { createClient } = await import('@supabase/supabase-js');
                const supabase = createClient(supabaseUrl, supabaseKey, {
                  auth: { persistSession: false, autoRefreshToken: false }
                });

                const { data, error } = await supabase
                  .from('advocate_connect_requests')
                  .select('*')
                  .order('created_at', { ascending: false })
                  .limit(100);

                if (error) {
                  const isPermDenied = error.message.includes('permission denied') || error.code === '42501';
                  if (!isPermDenied) {
                    console.warn('[Dev Notify GET] Supabase error:', error.message);
                  }
                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: true, data: [], error: error.message }));
                  return;
                }

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, data: data || [] }));
                return;
              } catch (err: any) {
                console.error('[Dev Notify GET] Error:', err.message);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, data: [], error: err.message }));
                return;
              }
            }

            // POST: Existing notification logic
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

                if (!isAdminAudit && !isProDrafter) {
                  res.statusCode = 410;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: 'Use the secure referral intake endpoint.' }));
                  return;
                }

                const recipientEmails = emailUser;

                const subjectLine = isAdminAudit
                  ? `[Security Alert: Admin Login] ${citizenName || 'Abi786'} (${resolvedIp})`
                  : isProDrafter
                  ? `[₹99 Pro Notice Payment Live] ${id} - ${district} (${citizenName})`
                  : `[New Referral Intake] ${id} - ${district} (${citizenName})`;

                await transporter.sendMail({
                  from: `"NyayaMitra Security" <${emailUser}>`,
                  to: recipientEmails,
                  subject: subjectLine,
                  html: `
                    <div style="font-family: Arial, sans-serif; padding: 20px;">
                      <h2>${isAdminAudit ? 'Security Alert: Admin Login' : isProDrafter ? 'NyayaMitra Pro — Live Notice Payment' : 'New Intake Request'}</h2>
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
      chunkSizeWarningLimit: 2500,
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom')) return 'vendor';
              if (id.includes('@supabase')) return 'supabase';
              if (id.includes('lucide-react')) return 'icons';
              if (id.includes('jspdf') || id.includes('qrcode')) return 'pro-engine';
            }
            if (id.includes('src/data/categories/landParts') || id.includes('src/data/categories/landData')) {
              return 'legal-land';
            }
            if (id.includes('src/data/categories/partitionParts') || id.includes('src/data/categories/partitionData')) {
              return 'legal-partition';
            }
            if (id.includes('src/data/categories/moneyParts') || id.includes('src/data/categories/moneyData')) {
              return 'legal-money';
            }
            if (id.includes('src/data/categories/consumerParts') || id.includes('src/data/categories/consumerData')) {
              return 'legal-consumer';
            }
            if (id.includes('src/data/categories/familyParts') || id.includes('src/data/categories/familyData')) {
              return 'legal-family';
            }
            if (id.includes('src/data/categories/tenancyParts') || id.includes('src/data/categories/tenancyData')) {
              return 'legal-tenancy';
            }
          }
        }
      }
    }
  };
});
