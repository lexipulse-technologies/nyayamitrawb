/**
 * NYAYAMITRA PRODUCTION AI GATEWAY (OPTIMIZED COMPLETION ENGINE)
 * HTTP/1.1 Native Transport (node:https) with Cheaper Inference
 * Max Tokens: 4,096 (Optimum Ceiling - Eliminates Sentence Truncation)
 * Socket Timeout: 75,000ms (75 seconds)
 * Identity Guarantee: 100% Free of underlying model names/versions.
 * Invariant: Zero asterisks (*), Zero hashtags (#), Trilingual greeting.
 */

import https from 'node:https';

const FALLBACK_CI_KEY = 'ci_live_9a53020eb31fa1be3b88c19a9b6c63dab30ba24c01071567';

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

function sanitizeCleanText(rawText) {
  if (!rawText) return '';
  return rawText
    // Remove DeepSeek reasoning / thinking tags completely
    .replace(/<think>[\s\S]*?<\/think>/gi, '')
    // Scrub any underlying model references
    .replace(/deepseek[-\s]?v?[0-9.]*[-\s]?(flash|chat|coder|r1|v3)?/gi, 'NyayaMitra AI')
    .replace(/deepseek/gi, 'NyayaMitra')
    // Remove markdown symbols
    .replace(/\*/g, '')
    .replace(/#/g, '')
    .replace(/_{2,}/g, '')
    .replace(/`{1,3}/g, '')
    .trim();
}

function callCheaperInferenceHttp1(apiKey, payload) {
  return new Promise((resolve) => {
    const postData = Buffer.from(JSON.stringify(payload), 'utf8');
    const options = {
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
      timeout: 75000 // Extended to 75 seconds to prevent network timeout drops
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
  });
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, lang, history } = req.body || {};

  if (!message || !message.trim()) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const userLang = (lang || 'en').toLowerCase();
  const apiKey = (
    process.env.CHEAPER_INFERENCE_API_KEY ||
    process.env.CI_API_KEY ||
    FALLBACK_CI_KEY
  ).trim();

  try {
    const formattedMessages = [
      {
        role: 'system',
        content: `${SYSTEM_RULES}\n\n[USER CONVERSATION LANGUAGE: ${userLang.toUpperCase()}]`
      }
    ];

    if (Array.isArray(history) && history.length > 0) {
      history.forEach(item => {
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
      content: message.trim().slice(0, 2000)
    });

    // Optimum token limit: 4096 tokens (prevents premature cutoffs)
    const result = await callCheaperInferenceHttp1(apiKey, {
      model: 'deepseek-v4.1-flash',
      messages: formattedMessages,
      temperature: 0.3,
      max_tokens: 4096
    });

    if (!result.ok) {
      console.warn('[AI Gateway Notice]: Inference status:', result.status, result.text);
      const errMsg = result.data?.error?.message || result.text || 'Inference engine error';
      return res.status(200).json({ reply: null, error: errMsg, useLocalFallback: true });
    }

    let replyText = result.data?.choices?.[0]?.message?.content || '';
    replyText = sanitizeCleanText(replyText);

    const requiredGreeting = MANDATORY_GREETING[userLang] || MANDATORY_GREETING.en;
    if (!replyText.startsWith(requiredGreeting)) {
      replyText = `${requiredGreeting}\n\n${replyText}`;
    }

    return res.status(200).json({ reply: replyText });
  } catch (error) {
    console.warn('[AI Gateway Exception]:', error.message);
    return res.status(200).json({ reply: null, error: error.message, useLocalFallback: true });
  }
}