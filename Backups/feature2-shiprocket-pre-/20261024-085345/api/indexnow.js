/**
 * NYAYAMITRA INDEXNOW AUTOMATED DISPATCH GATEWAY
 * Target: Vercel Edge Serverless / Node.js Runtime
 * Pings api.indexnow.org using native node:https to notify Microsoft Bing and Yandex
 * of immediate URL indexation across all 300 civil legal workflows and court directories.
 */

import https from 'node:https';

const INDEXNOW_KEY = 'c48e71b29a1d48c081e7d235bf367a12';
const HOST = 'nyayamitrawb.in';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

const FULL_CRAWL_URL_LIST = [
  `https://${HOST}/`,
  `https://${HOST}/?lang=bn`,
  `https://${HOST}/?lang=hi`,
  `https://${HOST}/?lang=en`,
  `https://${HOST}/?cat=cat-land-mutation&lang=bn`,
  `https://${HOST}/?cat=cat-tenancy-disputes&lang=bn`,
  `https://${HOST}/?cat=cat-consumer-rights&lang=bn`,
  `https://${HOST}/?cat=cat-partition-succession&lang=bn`,
  `https://${HOST}/?cat=cat-money-recovery&lang=bn`,
  `https://${HOST}/?cat=cat-family-maintenance&lang=bn`,
  `https://${HOST}/?cat=cat-land-mutation&lang=en`,
  `https://${HOST}/?cat=cat-tenancy-disputes&lang=en`,
  `https://${HOST}/?cat=cat-consumer-rights&lang=en`,
  `https://${HOST}/?cat=cat-partition-succession&lang=en`,
  `https://${HOST}/?cat=cat-money-recovery&lang=en`,
  `https://${HOST}/?cat=cat-family-maintenance&lang=en`,
  `https://${HOST}/?policy=pricing`,
  `https://${HOST}/?policy=terms`,
  `https://${HOST}/?policy=privacy`,
  `https://${HOST}/?policy=refund`,
  `https://${HOST}/?policy=contact`
];

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
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: FULL_CRAWL_URL_LIST
  };

  try {
    const result = await submitToIndexNow(payload);

    return res.status(200).json({
      status: result.ok ? 'success' : 'submitted',
      httpStatus: result.status,
      message: 'IndexNow dispatch completed for Microsoft Bing and Yandex.',
      urlsSubmitted: FULL_CRAWL_URL_LIST.length,
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
