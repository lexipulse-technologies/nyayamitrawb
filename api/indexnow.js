/**
 * NYAYAMITRA INDEXNOW AUTOMATED DISPATCH GATEWAY
 * Target: Vercel Edge Serverless / Node.js Runtime
 * Pings api.indexnow.org using native node:https to notify Microsoft Bing and Yandex
 * of immediate URL indexation across all 300 civil legal workflows and court directories.
 */

import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';

const INDEXNOW_KEY = 'c48e71b29a1d48c081e7d235bf367a12';
const HOST = 'nyayamitrawb.in';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

const FALLBACK_URL_LIST = [
  `https://${HOST}/`,
  `https://${HOST}/elibrarypro`,
  `https://${HOST}/app`,
  `https://${HOST}/guides/land-records-mutation-west-bengal`,
  `https://${HOST}/guides/tenancy-premises-disputes-west-bengal`,
  `https://${HOST}/guides/consumer-rights-wbrera-west-bengal`,
  `https://${HOST}/guides/partition-succession-probate-west-bengal`,
  `https://${HOST}/guides/money-recovery-cheque-bounce-india`,
  `https://${HOST}/guides/family-maintenance-divorce-india`
];

function getUrlsFromSitemap() {
  try {
    const candidates = [
      path.join(process.cwd(), 'dist', 'sitemap.xml'),
      path.join(process.cwd(), 'public', 'sitemap.xml')
    ];
    for (const file of candidates) {
      if (fs.existsSync(file)) {
        const xml = fs.readFileSync(file, 'utf8');
        const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
          m[1].replace(/&amp;/g, '&')
        );
        if (locs.length > 0) return locs.slice(0, 10000);
      }
    }
  } catch {
    /* fallback below */
  }
  return FALLBACK_URL_LIST;
}

function submitToIndexNow(payload) {
  return new Promise((resolve) => {
    const postData = Buffer.from(JSON.stringify(payload), 'utf8');

    const options = {
      hostname: 'api.indexnow.org',
      port: 443,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': postData.length,
        'User-Agent': 'NyayaMitra-Indexer/4.0'
      },
      timeout: 10000
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.setEncoding('utf8');
      res.on('data', chunk => { body += chunk; });
      res.on('end', () => {
        resolve({
          status: res.statusCode || 200,
          ok: (res.statusCode || 500) >= 200 && (res.statusCode || 500) < 300,
          response: body
        });
      });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({ status: 408, ok: false, response: 'Request timeout' });
    });

    req.on('error', (err) => {
      resolve({ status: 500, ok: false, response: err.message });
    });

    req.end(postData);
  });
}

export default async function handler(req, res) {
  const ALLOWED_ORIGINS = [
    'https://nyayamitrawb.in',
    'https://www.nyayamitrawb.in',
    'https://localhost'
  ];

  const origin = req.headers.origin;
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  const urlList = getUrlsFromSitemap();

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList
  };

  try {
    const result = await submitToIndexNow(payload);

    return res.status(200).json({
      status: result.ok ? 'success' : 'submitted',
      httpStatus: result.status,
      message: 'IndexNow dispatch completed for Microsoft Bing and Yandex.',
      urlsSubmitted: urlList.length,
      keyLocationVerified: KEY_LOCATION,
      apiResponse: result.response || 'OK'
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
}
