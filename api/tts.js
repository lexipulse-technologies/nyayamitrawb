/**
 * NYAYAMITRA PRODUCTION TEXT-TO-SPEECH GATEWAY
 * Streams uniform MP3 audio across all browsers (Chrome, Edge, Safari, Opera, UC, DuckDuckGo)
 * Uses native Node.js fetch with sentence chunking and Buffer concatenation.
 */

function splitIntoReadableChunks(text, maxLength = 160) {
  // Split on Bengali and English sentence delimiters
  const rawSentences = text
    .split(/([।\.!\?]+)/)
    .filter(Boolean);

  const sentences = [];
  for (let i = 0; i < rawSentences.length; i += 2) {
    const s = (rawSentences[i] + (rawSentences[i + 1] || '')).trim();
    if (s) sentences.push(s);
  }

  const chunks = [];
  let current = '';

  for (const sentence of sentences) {
    if ((current + ' ' + sentence).trim().length <= maxLength) {
      current = (current + ' ' + sentence).trim();
    } else {
      if (current) chunks.push(current);
      if (sentence.length > maxLength) {
        // Fallback split on words if a single sentence is very long
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

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const text = (req.query.text || '').trim();
  const lang = (req.query.lang || 'bn').toLowerCase();

  if (!text) {
    return res.status(400).json({ error: 'Text parameter is required' });
  }

  const langCode = lang === 'bn' ? 'bn' : lang === 'hi' ? 'hi' : 'en';

  try {
    const chunks = splitIntoReadableChunks(text.slice(0, 1000), 160);
    const audioBuffers = [];

    for (const chunk of chunks) {
      if (!chunk.trim()) continue;
      const url = `https://translate.googleapis.com/translate_tts?ie=UTF-8&client=gtx&tl=${langCode}&q=${encodeURIComponent(chunk)}`;

      const response = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });

      if (response.ok) {
        const arrayBuf = await response.arrayBuffer();
        audioBuffers.push(Buffer.from(arrayBuf));
      }
    }

    if (audioBuffers.length === 0) {
      return res.status(500).json({ error: 'Failed to synthesize speech audio' });
    }

    // Concatenate all MP3 chunks into one seamless audio file
    const fullMp3 = Buffer.concat(audioBuffers);
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400');
    return res.status(200).send(fullMp3);
  } catch (error) {
    console.error('Serverless TTS error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}