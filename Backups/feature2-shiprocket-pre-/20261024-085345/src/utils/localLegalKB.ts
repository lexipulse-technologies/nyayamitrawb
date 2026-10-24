import { CIVIL_CATEGORIES } from '../data/civilLegalData';
import type { Language, CivilSubCategory } from '../types/legal';

export const MANDATORY_OPENING_STATEMENT: Record<Language, string> = {
  en: "Hello, I am here to help you as an AI Friend as your civil legal navigator for West Bengal. However, please consult a legal professional to get these information vetted and provide you further legal assistance.",
  bn: "নমস্কার, আমি আপনার এআই বন্ধু (AI Friend) হিসেবে পশ্চিমবঙ্গের দেওয়ানি আইনি সহায়িকা প্রদানের জন্য এখানে রয়েছি। তবে অনুগ্রহ করে এই তথ্যাদি যাচাই করতে এবং পরবর্তী আইনি সহায়তার জন্য একজন আইন বিশেষজ্ঞের পরামর্শ নিন।",
  hi: "नमस्ते, मैं आपके एआई मित्र (AI Friend) के रूप में पश्चिम बंगाल के सिविल कानूनी मार्गदर्शिका प्रदान करने के लिए यहाँ उपस्थित हूँ। हालाँकि, कृपया इस जानकारी के सत्यापन एवं आगे की विधिक सहायता के लिए किसी विधि विशेषज्ञ से परामर्श अवश्य लें।"
};

export const STATUTORY_DISCLAIMER: Record<Language, string> = {
  en: "Note: This is procedural guidance based on https://nyayamitrawb.in in compliance with BCI Rule 36. For formal representation, consult a panel advocate or free DLSA legal aid (Toll-Free 15100).",
  bn: "বিঃদ্রঃ এটি https://nyayamitrawb.in ভিত্তিক পদ্ধতিগত নির্দেশিকা। মামলা বা আবেদনের জন্য বিজ্ঞ প্যানেল আইনজীবী বা সরকারি জেলা আইনি সেবা কর্তৃপক্ষ (DLSA টোল-ফ্রি ১৫১০০)-এর পরামর্শ নিন।",
  hi: "नोट: यह https://nyayamitrawb.in पर आधारित प्रक्रियात्मक संदर्शिका है। विधिक सहायता हेतु अधिवक्ता या DLSA (टोल-ফ্রি 15100) से संपर्क करें।"
};

export const POLITE_REFUSAL_NOTICE: Record<Language, string> = {
  en: "I am programmed to assist citizens exclusively with civil legal procedures in West Bengal (such as land records, tenancy, consumer/RERA, partition, money recovery, and family maintenance). I do not provide content, advice, or assistance regarding sexual, adult, explicit, illegal, or inappropriate topics. Please refrain from using such queries, and feel free to ask any question regarding your civil legal matter.",
  bn: "আমি শুধুমাত্র পশ্চিমবঙ্গের দেওয়ানি আইনি বিষয়ে (যেমন: জমিজমা, খতিয়ান, বাড়িভাড়া, ক্রেতা সুরক্ষা, পারিবারিক ভরণপোষণ, সম্পত্তি বাটোয়ারা ও টাকা আদায়) সহায়তা করার জন্য প্রস্তুত। যৌন, প্রাপ্তবয়স্ক, অশ্লীল, বেআইনি বা অপ্রাসঙ্গিক বিষয়ে কোনো তথ্য বা সহায়তা দেওয়া আমার আওতাভুক্ত নয়। অনুগ্রহ করে আপনার দেওয়ানি আইনি সমস্যা সম্পর্কে প্রশ্ন করুন।",
  hi: "मैं केवल पश्चिम बंगाल के दीवानी/सिवিল कानूनी मामलों (जैसे: भूमि नामांतरण, संपत्ति, किरायेदारी, उपभोक्ता अधिकार, पारिवारिक भरण-पोषण, बंटवारा एवं धन वसूली) में सहायता के लिए अधिकृत हूँ। यौन, वयस्क, अश्लील, अवैध या अनुचित विषयों पर सहायता प्रदान करना मेरे कार्यक्षेत्र से बाहर है। कृपया अपने सिविल कानूनी मामले से संबंधित प्रश्न पूछें।"
};

export function cleanPlainText(text: string): string {
  if (!text) return '';
  return text
    .replace(/\*/g, '')
    .replace(/#/g, '')
    .replace(/_{2,}/g, '')
    .replace(/`{1,3}/g, '')
    .trim();
}

/**
 * TIER 1: SAFETY & EXPLICIT CONTENT FILTER
 */
export function checkQueryModeration(query: string): boolean {
  if (!query) return false;
  const clean = query.toLowerCase();

  const toxicRegex = [
    // Sexual / Adult / Intimacy
    /\b(sex|sexual\w*|intercourse|erotic\w*|porn\w*|xxx|nude|naked|masturbat\w*|orgasm|boobs?|penis|vagina|condom|hookup|dating|escort|prostitut\w*|make\s+love|have\s+sex|ways\s+to\s+have\s+sex|sexual\s+pleasure)\b/i,
    // Smuggling / Contraband / Weapons / Drugs
    /\b(smuggl\w*|contraband|customs?\s+evasion|evad\w*\s+customs|gold\s+smuggl\w*|airport\s+customs|hawala|black\s*money|fake\s*currency|counterfeit\w*|arms?\s+deal\w*|weapons?|firearms?|explosives?|bombs?|rpg|ammunition|drugs?|narcotics?|cocaine|heroin|ganja|charas|meth|lsd|mdma|weed|traffick\w*)\b/i,
    // Violent Crimes / Extortion
    /\b(kill\w*|murder\w*|assassinat\w*|dacoit\w*|robber\w*|loot\w*|theft|burglary|kidnap\w*|abduct\w*|extort\w*|ransom|blackmail\w*|poison\w*|hire\s+goons?|supari|attack\s+someone|shoot\s+someone|rape|molest\w*|sexual\s+assault)\b/i,
    // Forgery / Hacking
    /\b(hack\w*\s+(phone|whatsapp|camera|account|email|bank|website)|phishing|malware|trojan|ransomware|ddos|card\s*cloning|atm\s*skimm\w*|fake\s*(passport|aadhaar|pan|voter|visa)|forge\w*\s+signature)\b/i,
    // Vulgarity & Slang
    /\b(bitch|bastard|asshole|motherfucker|fucker|dick|pussy|slut|whore|chutiya|bhosdike|madarchod|harami|gandu|randi|saala|kamina|kutta|magir\s*chele|khankir\s*chele|bokachoda|chudir\s*bhai|bal\s+chhal)\b/i,
    // Betting & Gambling
    /\b(casino|betting|satta|matka|crypto\s*doubler|get\s*rich\s*quick|lottery\s*winner)\b/i
  ];

  return toxicRegex.some(rx => rx.test(clean));
}

/**
 * TIER 2: SCI-FI, FANTASY & IMPOSSIBLE NON-LEGAL INQUIRIES
 */
function isSciFiOrFantasy(query: string): boolean {
  const clean = query.toLowerCase();
  const sciFiRegex = [
    /\b(time\s+machine|build\s+a?\s*time\s+machine|teleport\w*|spaceship|alien|superpower|magic\s+spell|witchcraft|fly\s+to\s+mars|time\s+travel\w*|immortal\w*|invisibility\s+cloak|laser\s+gun|warp\s+drive|fiction\w*)\b/i
  ];
  return sciFiRegex.some(rx => rx.test(clean));
}

/**
 * TIER 3: CONVERSATIONAL & SMALL-TALK
 */
function isSmallTalk(query: string): boolean {
  const clean = query.toLowerCase().trim().replace(/[?!.,]/g, '');
  const greetings = [
    'hi', 'hello', 'hey', 'namaste', 'nomoshkar', 'good morning',
    'good afternoon', 'good evening', 'who are you', 'what are you',
    'what can you do', 'help', 'help me', 'how are you', 'tell me a joke',
    'thanks', 'thank you', 'dhanyabad', 'shukriya', 'bye', 'goodbye'
  ];
  return greetings.includes(clean);
}

/**
 * TIER 4: GENERAL NON-LEGAL TOPICS
 */
function isNonLegalTopic(query: string): boolean {
  const clean = query.toLowerCase();
  const nonLegalRegex = [
    /\b(cook|cooking|recipe|biryani|weather|temperature|movie|cinema|actor|actress|song|singing|cricket|football|ipl|score|math\s+problem|equation|capital\s+of|game|gaming|python|javascript|html|code)\b/i
  ];
  return nonLegalRegex.some(rx => rx.test(clean));
}

/**
 * POSITIVE CIVIL LEGAL INTENT ANCHORS
 * A query MUST contain at least one genuine civil legal term to match a workflow.
 */
const CIVIL_LEGAL_LEXICON = new RegExp(
  '\\b(' +
  // Land & Property
  'land|property|plot|mutation|porcha|khatian|deed|dalil|khajna|bllro|kmc|sali|vastu|conversion|' +
  'adverse\\s+possession|encroach\\w*|registry|patta|bargadar|boundary|survey|amin|tribal\\s+land|' +
  // Tenancy
  'tenant|landlord|rent|eviction|lockout|lease|license|wbpt|bhadate|uchhed|premises|fair\\s+rent|' +
  'rent\\s+controller|electric\\s+meter|utility\\s+restoration|thika|' +
  // Consumer & RERA
  'rera|wbrera|builder|flat|promoter|possession|delay|defect|compensation|consumer|ejagriti|' +
  'medical\\s+negligence|wbcerc|insurance|mediclaim|' +
  // Succession & Partition
  'inheritance|succession|will|probate|partition|batwara|coparcener|legal\\s+heir|gift\\s+deed|' +
  'danpatra|hindu\\s+succession|senior\\s+citizen\\s+eviction|sdo\\s+tribunal|' +
  // Money & Debt
  'cheque|check|bounce|dishonour|138|promissory|recovery|debt|loan\\s+recovery|ots|one\\s+time\\s+settlement|' +
  'education\\s+loan|lok\\s+adalat|msme|samadhaan|summary\\s+suit|order\\s+37|cyber\\s+fraud|1930|' +
  // Family & Alimony
  'maintenance|khorposh|alimony|divorce|mutual\\s+divorce|13b|custody|child\\s+custody|' +
  'guardianship|domestic\\s+violence|pwdva|144\\s+bnss|paternity|dna|' +
  // Court & Procedure
  'injunction|stay\\s+order|order\\s+39|title\\s+suit|plaint|written\\s+statement|decree|execution|' +
  'limitation|court\\s+fee|affidavit|legal\\s+aid|dlsa|cjm|high\\s+court|city\\s+civil' +
  ')\\b',
  'i'
);

export function hasCivilLegalIntent(query: string): boolean {
  return CIVIL_LEGAL_LEXICON.test(query);
}

/**
 * HIGH-PRECISION SEMANTIC WORKFLOW MATCHER
 * Strictly requires positive civil legal intent.
 */
export function searchWebsiteKnowledgeBase(query: string, lang: Language): CivilSubCategory[] {
  const cleanQ = query.toLowerCase().trim();
  if (!cleanQ) return [];

  // PRUDENCE GATE: If query has zero civil legal anchor terms, return NOTHING.
  if (!hasCivilLegalIntent(cleanQ)) {
    return [];
  }

  const scoredMatches: { sub: CivilSubCategory; score: number }[] = [];

  for (const cat of CIVIL_CATEGORIES) {
    for (const sub of cat.subcategories) {
      let score = 0;
      const title = (sub.title[lang] || sub.title.en || '').toLowerCase();
      const summary = (sub.summary[lang] || sub.summary.en || '').toLowerCase();
      const act = (sub.relevant_act || '').toLowerCase();
      const keywords = (sub.search_keywords?.[lang] || sub.search_keywords?.en || []).map(k => k.toLowerCase());

      // Multi-word phrase matches
      if (title.includes(cleanQ)) score += 50;
      if (keywords.some(k => k.includes(cleanQ))) score += 40;
      if (act.includes(cleanQ)) score += 30;
      if (summary.includes(cleanQ)) score += 20;

      // Extract matching legal anchors
      const legalMatches = cleanQ.match(CIVIL_LEGAL_LEXICON);
      if (legalMatches) {
        for (const term of legalMatches) {
          const rx = new RegExp('\\b' + term + '\\b', 'i');
          if (rx.test(title)) score += 25;
          if (keywords.some(k => rx.test(k))) score += 20;
          if (rx.test(summary)) score += 10;
        }
      }

      // Geo-targeting bonus strictly applied only if primary score is positive
      if (score > 0) {
        if (/\b(kolkata|kmc|calcutta|কলকাতা)\b/i.test(cleanQ) && sub.dual_path?.kolkata_urban) {
          score += 10;
        }
        if (/\b(district|bllro|panchayat|জেলা|গ্রাম)\b/i.test(cleanQ) && sub.dual_path?.rural_district) {
          score += 10;
        }
        scoredMatches.push({ sub, score });
      }
    }
  }

  scoredMatches.sort((a, b) => b.score - a.score);
  return scoredMatches.slice(0, 3).map(m => m.sub);
}

export function getWorkflowContextForAI(query: string, lang: Language): string {
  // If query is sci-fi, non-legal, or lacks civil legal intent, return empty context!
  if (isSciFiOrFantasy(query) || isNonLegalTopic(query) || !hasCivilLegalIntent(query)) {
    return '';
  }

  const matches = searchWebsiteKnowledgeBase(query, lang);
  if (matches.length === 0) return '';

  return matches.map((sub, i) => {
    const title = sub.title[lang] || sub.title.en;
    const act = sub.relevant_act;
    const summary = sub.summary[lang] || sub.summary.en;
    const timeframe = sub.statutory_timeframe?.[lang] || sub.statutory_timeframe?.en || 'Standard statutory timeframe';

    let dualPathInfo = '';
    if (sub.territory_track === 'Dual_Path' && sub.dual_path) {
      const rural = sub.dual_path.rural_district;
      const urban = sub.dual_path.kolkata_urban;
      dualPathInfo = `
[TERRITORIAL JURISDICTION TRACKS]:
Track 1 (Rural & 22 Districts):
- Authority/Forum: ${rural.authority[lang] || rural.authority.en}
- Official Portal: ${rural.portal_name?.[lang] || rural.portal_name?.en || 'Government Portal'} (${rural.portal_url || 'https://banglarbhumi.gov.in'})
- Steps: ${(rural.steps[lang] || rural.steps.en || []).join(' -> ')}

Track 2 (Kolkata Urban & Metro):
- Authority/Forum: ${urban.authority[lang] || urban.authority.en}
- Official Portal: ${urban.portal_name?.[lang] || urban.portal_name?.en || 'KMC Portal'} (${urban.portal_url || 'https://www.kmcgov.in/'})
- Steps: ${(urban.steps[lang] || urban.steps.en || []).join(' -> ')}`;
    } else {
      const forum = sub.authority_forum[lang] || sub.authority_forum.en;
      const steps = (sub.roadmap_steps[lang] || sub.roadmap_steps.en || []).join(' -> ');
      dualPathInfo = `
- Authority/Forum: ${forum}
- Official Portal: ${sub.official_portal_url || 'https://nyayamitrawb.in'}
- Steps: ${steps}`;
    }

    const docs = (sub.required_documents || []).map(d => `${d.name[lang] || d.name.en} (Issuer: ${d.issuing_authority[lang] || d.issuing_authority.en})`).join(', ');

    return `WORKFLOW ${i + 1}:
Topic: ${title}
Governing Statute: ${act}
Summary: ${summary}
Estimated Timeframe: ${timeframe}${dualPathInfo}
Required Documents: ${docs || 'Standard verified identity and title documents'}`;
  }).join('\n\n');
}

/**
 * INTELLIGENT PRUDENCE RESPONSE GENERATOR
 */
export function generateKnowledgeBaseResponse(query: string, lang: Language): string {
  const greeting = MANDATORY_OPENING_STATEMENT[lang] || MANDATORY_OPENING_STATEMENT.en;
  const disclaimer = STATUTORY_DISCLAIMER[lang] || STATUTORY_DISCLAIMER.en;

  // 1. TIER 1: Safety & Explicit Filter
  if (checkQueryModeration(query)) {
    const refusal = POLITE_REFUSAL_NOTICE[lang] || POLITE_REFUSAL_NOTICE.en;
    return `${greeting}\n\n${refusal}\n\n${disclaimer}`;
  }

  // 2. TIER 2: Sci-Fi, Fantasy & Impossible Concepts
  if (isSciFiOrFantasy(query)) {
    if (lang === 'bn') {
      return `${greeting}

টাইম মেশিন তৈরি, মহাকাশ বিজ্ঞান বা কল্পবিজ্ঞান সংক্রান্ত বিষয়াবলি দেওয়ানি আইন ও বিচার ব্যবস্থার আওতাভুক্ত নয়। 

ন্যায়মিত্র একটি দেওয়ানি আইনি সহায়িকা যা পশ্চিমবঙ্গের বাস্তব নাগরিক বিরোধ (যেমন: জমিজমা, খতিয়ান রেকর্ড, বাড়িভাড়া, ফ্ল্যাট ক্রেতা সুরক্ষা, চেক বাউন্স ও পারিবারিক ভরণপোষণ) সমাধানের জন্য নিবেদিত। অনুগ্রহ করে আপনার বাস্তব দেওয়ানি আইনি সমস্যা সংক্রান্ত প্রশ্ন করুন।

${disclaimer}`;
    } else if (lang === 'hi') {
      return `${greeting}

टाइम मशीन बनाना, विज्ञान कथा या काल्पनिक अवधारणाएं दीवानी कानूनों एवं अदालती न्यायशास्त्र के दायरे से बाहर हैं।

न्यायमित्र एक विधिक मंच है जो पश्चिम बंगाल के वास्तविक नागरिक कानूनी विवादों (जैसे: जमीन नामांतरण, किरायेदारी, रेरा बिल्डर, चेक बाउंस एवं पारिवारिक भरण-पोषण) के समाधान हेतु बनाया गया है। कृपया अपने वास्तविक दीवानी कानूनी मामले से संबंधित प्रश्न पूछें।

${disclaimer}`;
    } else {
      return `${greeting}

Building a time machine, science fiction, or fantasy concepts fall completely outside the domain of civil jurisprudence and the scope of NyayaMitra.

NyayaMitra is an open civil legal navigator designed specifically to help citizens resolve real-world civil legal disputes in West Bengal (such as land records, tenancy eviction, builder delays, cheque bounce recovery, and family maintenance). Please feel free to ask any question regarding real-world civil legal matters.

${disclaimer}`;
    }
  }

  // 3. TIER 3: Conversational Small Talk
  if (isSmallTalk(query)) {
    if (lang === 'bn') {
      return `${greeting}

আমি ন্যায়মিত্র এআই সহায়ক। আমি আপনাকে পশ্চিমবঙ্গের দেওয়ানি আইনি বিষয়ে পথনির্দেশ করতে পারি:

১. জমিজমা, রেকর্ড ও মিউটেশন (বাংলারভূমি বনাম কেএমসি)
২. বাড়িভাড়া ও উচ্ছেদ সংক্রান্ত বিরোধ (WBPT Act)
৩. ফ্ল্যাট ক্রেতা সুরক্ষা ও রেরা আবাসন (WBRERA ও e-Jagriti)
৪. পৈতৃক সম্পত্তি বাটোয়ারা ও উইল উত্তরাধিকার
৫. চেক বাউন্স (ধারা ১৩৮) ও টাকা আদায়
৬. পারিবারিক ভরণপোষণ ও খোরপোশ (ধারা ১৪৪ BNSS)

আপনার নির্দিষ্ট দেওয়ানি আইনি সমস্যাটি বিস্তারিত লিখে জানান।

${disclaimer}`;
    } else if (lang === 'hi') {
      return `${greeting}

मैं न्यायमित्र एआई सहायक हूँ। मैं पश्चिम बंगाल के निम्नलिखित सिविल कानूनी मामलों में आपकी सहायता कर सकता हूँ:

1. जमीन, नामांतरण एवं रिकॉर्ड्स (बांगलारभूमि बनाम केएमसी)
2. किरायेदारी एवं बेदखली विवाद (WBPT Act)
3. फ्लैट, बिल्डर विवाद एवं उपभोक्ता संरक्षण (WBRERA व e-Jagriti)
4. पैतृक संपत्ति बंटवारा एवं वसीयत उत्तराधिकार
5. चेक बाउंस (धारा 138) एवं धन वसूली
6. पारिवारिक भरण-पोषण एवं गुजारा भत्ता (धारा 144 BNSS)

अपनी किसी भी सिविल कानूनी समस्या के बारे में मुझसे पूछें।

${disclaimer}`;
    } else {
      return `${greeting}

I am NyayaMitra AI Sahayak, your civil legal navigator for West Bengal. I can assist you with:

1. Land Records, Mutation & Conversion (Banglarbhumi vs KMC)
2. Tenancy, Eviction & Utility Restoration (WBPT Act 1997)
3. Consumer Rights & Builder Delays (WBRERA & e-Jagriti)
4. Ancestral Partition, Wills & Succession
5. Cheque Bounce (Section 138 NI Act) & Money Recovery
6. Family Maintenance & Spousal Alimony (Section 144 BNSS)

Please feel free to describe your specific civil dispute so I can guide you.

${disclaimer}`;
    }
  }

  // 4. TIER 4: General Non-Legal Topics
  if (isNonLegalTopic(query) || !hasCivilLegalIntent(query)) {
    if (lang === 'bn') {
      return `${greeting}

আপনার প্রশ্নটি সাধারণ বিষয়ের আওতাভুক্ত। ন্যায়মিত্র একটি উন্মুক্ত আইনি প্ল্যাটফর্ম যা শুধুমাত্র পশ্চিমবঙ্গের দেওয়ানি আইনি বিরোধ ও সরকারি কার্যপ্রণালীতে পথনির্দেশ করে। আপনার যদি জমিজমা, বাড়িভাড়া, রেরা আবাসন, চেক বাউন্স বা পারিবারিক ভরণপোষণ সংক্রান্ত কোনো আইনি প্রশ্ন থাকে, অনুগ্রহ করে জানান।

${disclaimer}`;
    } else if (lang === 'hi') {
      return `${greeting}

आपका प्रश्न गैर-कानूनी सामान्य विषय से संबंधित है। न्यायमित्र विशेष रूप से पश्चिम बंगाल के दीवानी कानूनों एवं अदालती प्रक्रियाओं में नागरिकों की सहायता हेतु समर्पित है। यदि आपका जमीन, किरायेदारी, रेरा बिल्डर, चेक बाउंस या पारिवारिक भरण-पोषण संबंधी कोई कानूनी प्रश्न है, तो अवश्य पूछें।

${disclaimer}`;
    } else {
      return `${greeting}

Your inquiry relates to a general, non-legal topic. NyayaMitra is an open civil legal navigator dedicated exclusively to civil litigation, administrative procedures, and statutory rights in West Bengal. If you have any questions regarding land mutation, tenancy eviction, builder claims, cheque recovery, or family maintenance, please feel free to ask.

${disclaimer}`;
    }
  }

  const matches = searchWebsiteKnowledgeBase(query, lang);

  if (matches.length === 0) {
    if (lang === 'bn') {
      return `${greeting}

আপনার প্রশ্নটি সাধারণ দেওয়ানি আইন অনুযায়ী বিশ্লেষণ করা হয়েছে:

১. দেওয়ানি আইনি প্রতিকার:
স্থাবর সম্পত্তি, চুক্তিভঙ্গ, নিষেধাজ্ঞা বা পারিবারিক বিরোধে দেওয়ানি কার্যবিধি (CPC 1908) ও নির্দিষ্ট প্রতিকার আইন (Specific Relief Act 1963) অনুযায়ী আদালতে মোকদ্দমা দায়ের করতে হয়। জমিতে অবৈধ দখল বা নির্মাণ বন্ধে সিভিল জজ আদালতে অন্তর্বর্তীকালীন নিষেধাজ্ঞার (Order XXXIX Rules 1 and 2 CPC) আবেদন করা যায়।

২. সংশ্লিষ্ট আদালত ও সহায়তা:
- জমিজমা ও খতিয়ান: সংশ্লিষ্ট ব্লকের বিএলএলআরও (BL&LRO) বা কলকাতা পুরসভা (KMC)।
- দেওয়ানি মামলা: জেলা বা মহকুমা সিভিল জজ আদালত।
- সরকারি আইনি সাহায্য: জেলা আইনি সেবা কর্তৃপক্ষ (DLSA টোল-ফ্রি ১৫১০০)।

অনুগ্রহ করে আপনার বিরোধের নির্দিষ্ট বিবরণ দিয়ে পুনরায় প্রশ্ন করুন যাতে সঠিক পোর্টাল ও পদক্ষেপে সাহায্য করা যায়।

${disclaimer}`;
    } else if (lang === 'hi') {
      return `${greeting}

आपके प्रश्न पर सामान्य सिविल कानूनी सिद्धांत:

1. दीवानी कानूनी उपचार:
भूमि विवाद, अनुबंध उल्लंघन, संपत्ति बंटवारा या अवैध बेदखली के मामलों में सिविल प्रक्रिया संहिता (CPC 1908) के तहत सक्षम अदालत से स्थगन आदेश (Injunction under Order 39 Rules 1 and 2 CPC) प्राप्त किया जा सकता है।

2. संबंधित अदालत एवं सहायता:
- जमीन विवाद: स्थानीय बीएलएलआरओ (BL&LRO) या केएमसी (KMC)।
- दीवानी वाद: जिला या सब-डिवीजन सिविल जज अदालत।
- मुफ्त कानूनी सहायता: जिला विधिक सेवा प्राधिकरण (DLSA टोल-फ्री 15100)।

कृपया अपने मामले का स्पष्ट विवरण लिखकर पुनः पूछें ताकि सटीक प्रक्रिया बताई जा सके।

${disclaimer}`;
    } else {
      return `${greeting}

Here is the general civil legal framework regarding your inquiry:

1. Civil Remedies:
For substantive property, contract, partition, or inheritance disputes, remedies are pursued before the competent civil court under the Code of Civil Procedure (CPC), 1908 and the Specific Relief Act, 1963. In cases involving imminent threat of dispossession or illegal construction, an application for temporary injunction (Order XXXIX Rules 1 & 2 CPC) can be moved immediately before the Civil Judge.

2. Competent Forums in West Bengal:
- Land Records & Mutation: Local BL&LRO (22 Districts) or KMC Assessment Department (Kolkata Urban).
- Title Declarations & Partition Suits: Civil Judge (Junior or Senior Division) at the District or Sub-Divisional Court.
- Free Legal Aid: District Legal Services Authority (DLSA Helpline: 15100).

Please feel free to specify your exact dispute details so I can guide you through the step-by-step roadmap.

${disclaimer}`;
    }
  }

  const primary = matches[0];
  const title = primary.title[lang] || primary.title.en;
  const summary = primary.summary[lang] || primary.summary.en;
  const act = primary.relevant_act;
  const timeframe = primary.statutory_timeframe?.[lang] || primary.statutory_timeframe?.en || 'Standard statutory timeframe';
  const docs = (primary.required_documents || []).map(d => `- ${d.name[lang] || d.name.en} (${d.issuing_authority[lang] || d.issuing_authority.en})`).join('\n');

  let territorialBody = '';

  if (primary.territory_track === 'Dual_Path' && primary.dual_path) {
    const rural = primary.dual_path.rural_district;
    const urban = primary.dual_path.kolkata_urban;

    if (lang === 'bn') {
      territorialBody = `
ভৌগোলিক ও প্রশাসনিক দ্বি-স্তরীয় পদ্ধতি (Dual Jurisdiction):

১. গ্রামীণ ও ২২টি জেলা এক্তিয়ার (Panchayat / BL&LRO / BMC / HMC):
- সংশ্লিষ্ট কর্তৃপক্ষ: ${rural.authority.bn || rural.authority.en}
- অফিসিয়াল পোর্টাল: ${rural.portal_name?.bn || 'সরকারি পোর্টাল'} (${rural.portal_url || 'https://banglarbhumi.gov.in'})
- পদ্ধতিগত ধাপসমূহ:
${(rural.steps.bn || rural.steps.en || []).map((s, idx) => `  ${idx + 1}. ${s}`).join('\n')}

২. কলকাতা পুর এলাকা এক্তিয়ার (KMC / City Civil / Small Causes):
- সংশ্লিষ্ট কর্তৃপক্ষ: ${urban.authority.bn || urban.authority.en}
- অফিসিয়াল পোর্টাল: ${urban.portal_name?.bn || 'কেএমসি পোর্টাল'} (${urban.portal_url || 'https://www.kmcgov.in/'})
- পদ্ধতিগত ধাপসমূহ:
${(urban.steps.bn || urban.steps.en || []).map((s, idx) => `  ${idx + 1}. ${s}`).join('\n')}`;
    } else if (lang === 'hi') {
      territorialBody = `
द्विपक्षीय भौगोलिक एवं प्रशासनिक प्रक्रिया (Dual Jurisdiction):

1. ग्रामीण एवं 22 जिले क्षेत्राधिकार (Panchayat / BL&LRO / BMC / HMC):
- संबंधित प्राधिकरण: ${rural.authority.hi || rural.authority.en}
- आधिकारिक पोर्टल: ${rural.portal_name?.hi || 'सरकारी पोर्टल'} (${rural.portal_url || 'https://banglarbhumi.gov.in'})
- आवश्यक चरणबद्ध कदम:
${(rural.steps.hi || rural.steps.en || []).map((s, idx) => `  ${idx + 1}. ${s}`).join('\n')}

2. कोलकाता नगर निगम क्षेत्र (KMC / City Civil / Small Causes):
- संबंधित प्राधिकरण: ${urban.authority.hi || urban.authority.en}
- आधिकारिक पोर्टल: ${urban.portal_name?.hi || 'केएमसी पोर्टल'} (${urban.portal_url || 'https://www.kmcgov.in/'})
- आवश्यक चरणबद्ध कदम:
${(urban.steps.hi || urban.steps.en || []).map((s, idx) => `  ${idx + 1}. ${s}`).join('\n')}`;
    } else {
      territorialBody = `
Territorial Jurisdiction Breakdown (Dual Track):

Track 1: Rural & 22 Districts (Panchayat / BL&LRO / SDO / BMC / HMC):
- Concerned Forum: ${rural.authority.en}
- Official Portal: ${rural.portal_name?.en || 'Government Portal'} (${rural.portal_url || 'https://banglarbhumi.gov.in'})
- Procedural Steps:
${(rural.steps.en || []).map((s, idx) => `  ${idx + 1}. ${s}`).join('\n')}

Track 2: Kolkata Urban & Metro (KMC / City Civil / Small Causes):
- Concerned Forum: ${urban.authority.en}
- Official Portal: ${urban.portal_name?.en || 'KMC Portal'} (${urban.portal_url || 'https://www.kmcgov.in/'})
- Procedural Steps:
${(urban.steps.en || []).map((s, idx) => `  ${idx + 1}. ${s}`).join('\n')}`;
    }
  } else {
    const forum = primary.authority_forum[lang] || primary.authority_forum.en;
    const steps = (primary.roadmap_steps[lang] || primary.roadmap_steps.en || []).map((s, idx) => `${idx + 1}. ${s}`).join('\n');

    if (lang === 'bn') {
      territorialBody = `
সংশ্লিষ্ট সরকারি কর্তৃপক্ষ বা আদালত: ${cleanPlainText(forum)}
পদ্ধতিগত ধাপসমূহ:
${cleanPlainText(steps)}`;
    } else if (lang === 'hi') {
      territorialBody = `
संबंधित अदालत या प्राधिकरण: ${cleanPlainText(forum)}
आवश्यक कदम:
${cleanPlainText(steps)}`;
    } else {
      territorialBody = `
Concerned Authority / Court Forum: ${cleanPlainText(forum)}
Step-by-Step Procedural Roadmap:
${cleanPlainText(steps)}`;
    }
  }

  if (lang === 'bn') {
    return `${greeting}

আপনার অনুসন্ধান অনুযায়ী পশ্চিমবঙ্গ সরকারের সংশ্লিষ্ট আইন ও পদ্ধতিগত রোডম্যাপ নিচে দেওয়া হলো:

বিষয়: ${cleanPlainText(title)}
প্রযোজ্য আইন: ${cleanPlainText(act)}
আনুমানিক নিষ্পত্তির সময়সীমা: ${cleanPlainText(timeframe)}

আইনি প্রেক্ষাপট ও সমাধান:
${cleanPlainText(summary)}
${territorialBody}

প্রয়োজনীয় কাগজপত্রের চেকলিস্ট:
${cleanPlainText(docs)}

${cleanPlainText(disclaimer)}`;
  } else if (lang === 'hi') {
    return `${greeting}

आपके प्रश्न के अनुसार पश्चिम बंगाल सरकार के संबंधित कानून एवं चरणबद्ध प्रक्रियात्मक समाधान:

विषय: ${cleanPlainText(title)}
संबंधित कानून: ${cleanPlainText(act)}
अनुमानित समय सीमा: ${cleanPlainText(timeframe)}

विधिक संदर्भ एवं प्रक्रिया:
${cleanPlainText(summary)}
${territorialBody}

आवश्यक दस्तावेजों की सूची:
${cleanPlainText(docs)}

${cleanPlainText(disclaimer)}`;
  } else {
    return `${greeting}

Based on the civil legal frameworks of West Bengal on https://nyayamitrawb.in, here is your actionable legal roadmap:

Topic: ${cleanPlainText(title)}
Governing Statute: ${cleanPlainText(act)}
Estimated Statutory Timeframe: ${cleanPlainText(timeframe)}

Legal Context & Solution:
${cleanPlainText(summary)}
${territorialBody}

Required Document Checklist:
${cleanPlainText(docs)}

${cleanPlainText(disclaimer)}`;
  }
}