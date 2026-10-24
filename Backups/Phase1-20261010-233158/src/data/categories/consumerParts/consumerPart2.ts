import type { CivilSubCategory } from '../../../types/legal';

export const consumerPart2: CivilSubCategory[] = [
  {
    id: 'sub-consumer-26',
    title: {
      en: 'Refusal of Warranty for Home Appliances',
      bn: 'টিভি, ফ্রিজ ও এসির ওয়ারেন্টি প্রদানে অস্বীকৃতি ও সার্ভিসিং গাফিলতি',
      hi: 'घरेलू उपकरणों (TV, फ्रिज, AC) पर वारंटी देने से इनकार'
    },
    relevant_act: 'Sec 35, Consumer Protection Act, 2019',
    summary: {
      en: 'Forcing manufacturers to replace or refund major appliances when service centers make excuses during warranty.',
      bn: 'ওয়ারেন্টি থাকা সত্ত্বেও টিভি বা এসির পার্টস নেই বা ভোল্টেজ ওঠানামার মিথ্যা কারণ দেখিয়ে সার্ভিসিং না করার প্রতিকার।',
      hi: 'वारंटी अवधि में भी उपकरण ठीक न करने या बहाने बनाने पर कंपनी से पूरा रिफंड या नया सामान पाना।'
    },
    authority_forum: {
      en: 'District Consumer Commission (DCDRC)',
      bn: 'জেলা ক্রেতা সুরক্ষা আদালত (DCDRC)',
      hi: 'जिला उपभोक्ता आयोग'
    },
    forum_type: 'Consumer_DCDRC',
    is_complex: false,
    official_portal_url: 'https://e-jagriti.gov.in/',
    statutory_timeframe: {
      en: '21 days admission; 90 days disposal',
      bn: '২১ দিনে শুনানি শুরু; ৯০ দিনে নিষ্পত্তি',
      hi: '21 दिन में दाखिला; 90 दिन में निस्तारण'
    },
    search_keywords: {
      en: ['appliance warranty denied', 'ac repair consumer court', 'fridge replacement warranty'],
      bn: ['ওয়ারেন্টি দিচ্ছে না', 'ফ্রিজ খারাপ ওয়ারেন্টিতে', 'টিভি সার্ভিসিং গাফিলতি'],
      hi: ['वारंटी से इनकार', 'एसी वारंटी केस', 'फ्रिज रिप्लेसमेंट उपभोक्ता फोरम']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Save customer care complaint reference numbers, technician visit sheets, and warranty cards.',
        'Send final demand notice to manufacturer nodal officer giving 7-day replacement deadline.',
        'Register online case on e-Jagriti portal attaching invoices and proof of breakdown.',
        'Obtain order directing full invoice refund or replacement with a brand-new unit plus costs.'
      ],
      bn: [
        'কাস্টমার কেয়ারের টিকিট নম্বর, মেকানিকের ভিজিট স্লিপ ও মূল ওয়ারেন্টি কার্ডের ছবি রাখুন।',
        'কোম্পানির নোডাল অফিসারকে ৭ দিনের মধ্যে নতুন মেশিন দেওয়ার চূড়ান্ত আইনি নোটিশ দিন।',
        'ই-জাগৃতি পোর্টালে কেনাকাটার রসিদ ও বারবার নষ্ট হওয়ার প্রমাণসহ মামলা দায়ের করুন।',
        'আদালত থেকে সম্পূর্ণ নতুন পণ্য প্রদান অথবা সম্পূর্ণ মূল্য সুদসহ ফেরতের রায় লাভ করুন।'
      ],
      hi: [
        'कस्टमर केयर कंप्लेंट नंबर, सर्विस इंजीनियर की रिपोर्ट एवं वारंटी कार्ड संभाल कर रखें।',
        'कंपनी के नोडल अधिकारी को 7 दिन में उपकरण बदलने का अंतिम कानूनी नोटिस भेजें।',
        'ई-जागृति पर टैक्स बिल एवं बार-बार खराबी के प्रमाण लगाकर केस दर्ज कराएं।',
        'अदालत से पूरी बिल राशि ब्याज सहित वापसी अथवा नया उपकरण दिलाने का आदेश प्राप्त करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-26-1',
        name: { en: 'Warranty Card & Service Center Unresolved Inspection Slips', bn: 'ওয়ারেন্টি কার্ড ও সার্ভিস সেন্টারের ভিজিট স্লিপ', hi: 'वारंटी कार्ड एवं सर्विस सेंटर निरीक्षण रिपोर्ट' },
        issuing_authority: { en: 'Manufacturer / Authorized Service Center', bn: 'প্রস্তুতকারক সংস্থা', hi: 'निर्माता / सर्विस सेंटर' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-27',
    title: {
      en: 'Online Furniture & Electronics Damaged in Transit',
      bn: 'অনলাইন অর্ডারের ভাঙা ফার্নিচার বা সামগ্রী ও রিফান্ড অস্বীকার',
      hi: 'ऑनलाइन मंगाए गए फर्नीचर/इलेक्ट्रॉनिक्स का टूटा निकलना व रिफंड इनकार'
    },
    relevant_act: 'Consumer Protection (E-Commerce) Rules, 2020',
    summary: {
      en: 'Holding sellers and e-commerce logistics jointly liable when courier staff deliver damaged items and refuse return.',
      bn: 'অনলাইনে কেনা সোফা, আলমারি বা মনিটর ভাঙা এলে ডেলিভারি বয় ফিরিয়ে নিতে অস্বীকার করার বিরুদ্ধে ব্যবস্থা।',
      hi: 'पार्सल खोलते ही टूटा सामान निकलने पर कोरियर या शॉपिंग ऐप द्वारा वापसी न लेने पर कानूनी समाधान।'
    },
    authority_forum: {
      en: 'National Consumer Helpline (1915) / DCDRC',
      bn: 'জাতীয় উপভোক্তা হেল্পলাইন (১৯১৫) / ক্রেতা আদালত',
      hi: 'राष्ट्रीय उपभोक्ता हेल्पलाइन / उपभोक्ता फोरम'
    },
    forum_type: 'Consumer_DCDRC',
    is_complex: false,
    official_portal_url: 'https://consumerhelpline.gov.in/',
    statutory_timeframe: {
      en: '15 days (NCH) / 60 days (DCDRC)',
      bn: '১৫ দিন (NCH) / ৬০ দিন (আদালত)',
      hi: '15 দিন (हेल्पलाइन) / 60 দিন (अदालत)'
    },
    search_keywords: {
      en: ['damaged furniture delivery refund', 'courier broken item complaint', 'ecommerce transit damage'],
      bn: ['ভাঙা পণ্য ডেলিভারি', 'অনলাইন ফার্নিচার রিফান্ড', 'কুরিয়ার ক্ষতিপূরণ'],
      hi: ['टूटा सामान डिलीवरी', 'फर्नीचर ऑनलाइन रिफंड', 'ई-कॉमर्स पार्सल डैमेज']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Record unboxing video upon delivery and capture photos of damaged items and packaging labels.',
        'Initiate in-app return request within return window; save customer support chat transcripts.',
        'Lodge grievance on National Consumer Helpline (NCH App / Call 1915).',
        'If unresolved in 15 days, file complaint on e-Jagriti against seller and marketplace jointly.'
      ],
      bn: [
        'ডেলিভারির সময় প্যাকেট খোলার স্পষ্ট ভিডিও এবং ট্রানজিট লেবেলের ছবি তুলে রাখুন।',
        'রিটার্ন উইন্ডোর মধ্যে অ্যাপে ফেরতের আবেদন করুন ও চ্যাটের স্ক্রিনশট সংগ্রহ করুন।',
        'জাতীয় উপভোক্তা হেল্পলাইনে (১৯১৫) বিস্তারিত তথ্যসহ তাৎক্ষণিক অভিযোগ দাখিল করুন।',
        '১৫ দিনে সমাধান না হলে ই-জাগৃতিতে সেলার ও মার্কেটপ্লেস উভয়ের বিরুদ্ধেই মামলা করুন।'
      ],
      hi: [
        'पार्सल खोलते समय पूरा वीडियो बनाएं एवं क्षतिग्रस्त हिस्से और शिपिंग लेबल के फोटो लें।',
        'निर्धारित समय में ऐप पर रिटर्न डालें और कस्टमर केयर के टालमटोल वाले चैट सुरक्षित रखें।',
        'राष्ट्रीय उपभोक्ता हेल्पलाइन (1915) पर ऑनलाइन शिकायत दर्ज कराएं।',
        '15 दिन में रिफंड न आने पर ई-जागृति पर सेलर एवं ऐप दोनों को पार्टी बनाकर केस करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-27-1',
        name: { en: 'Unboxing Video Proof & Courier Delivery Slip', bn: 'আনবক্সিং ভিডিও ও কুরিয়ার ডেলিভারি রসিদ', hi: 'अनबॉक्सिंग वीडियो एवं कोरियर डिलीवरी रसीद' },
        issuing_authority: { en: 'Complainant / Logistics Partner', bn: 'অভিযোগকারী', hi: 'शिकायतकर्ता / कोरियर' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-28',
    title: {
      en: 'Foreign Contaminants in Packaged Food & Restaurant Poisoning',
      bn: 'প্যাকেটজাত খাদ্যে ভেজাল ও রেস্তোরাঁর খাবার বিষক্রিয়া',
      hi: 'पैकेटबंद खाद्य में मिलावट, कीड़े निकलना एवं फूड पॉइजनिंग हर्जाना'
    },
    relevant_act: 'Food Safety and Standards Act, 2006 (FSSAI) r/w CPA',
    summary: {
      en: 'Product liability claims for medical bills and punitive damages for dead insects or chemicals found in food.',
      bn: 'রেস্তোরাঁর খাবারে বিষক্রিয়া বা প্যাকেটের খাবারে মরা পোকা বা কাচ থাকলে ক্ষতিপূরণ ও স্বাস্থ্য সুরক্ষা মামলা।',
      hi: 'खाने में कीड़े, कांच या जहरीला पदार्थ निकलने पर अस्पताल खर्च एवं भारी हर्जाना पाने का वाद।'
    },
    authority_forum: {
      en: 'Food Safety Officer / District Consumer Commission',
      bn: 'খাদ্য সুরক্ষা আধিকারিক / জেলা ক্রেতা আদালত',
      hi: 'खाद्य सुरक्षा अधिकारी / जिला उपभोक्ता आयोग'
    },
    forum_type: 'Consumer_DCDRC',
    is_complex: false,
    official_portal_url: 'https://foscos.fssai.gov.in/',
    statutory_timeframe: {
      en: '30 to 60 working days',
      bn: '৩০ থেকে ৬০ কার্যদিবস',
      hi: '30 से 60 কার্যদিবস'
    },
    search_keywords: {
      en: ['food contamination compensation', 'dead insect in food fssai', 'restaurant food poisoning lawsuit'],
      bn: ['খাবারে পোকা ক্ষতিপূরণ', 'খাদ্য বিষক্রিয়া মামলা', 'ভেজাল খাবার এফএসএসএআই'],
      hi: ['खाने में कीड़ा हर्जाना', 'फूड पॉइजनिंग केस', 'एफएसएसएआई शिकायत']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Preserve contaminated food packet, batch number, bill receipt, and seal physical sample.',
        'Secure hospital treatment summaries, blood test reports, and pharmacy bills for poisoning.',
        'File immediate complaint on FSSAI FoSCoS portal (https://foscos.fssai.gov.in/) for lab testing.',
        'File Product Liability claim before DCDRC demanding medical refund, damages, and penalties.'
      ],
      bn: [
        'দূষিত খাবারের নমুনা, ব্যাচ নম্বর, বিলের কপি যত্নসহকারে সিল করে সংরক্ষণ করুন।',
        'বিষক্রিয়ায় অসুস্থ হলে হাসপাতালের প্রেসক্রিপশন, রক্তের রিপোর্ট ও ওষুধের বিল রাখুন।',
        'নমুনা সরকারি ল্যাবে পরীক্ষার জন্য এফএসএসএআই (FSSAI) পোর্টালে অনলাইন অভিযোগ দিন।',
        'জেলা ক্রেতা আদালতে প্রোডাক্ট লায়াবিলিটি মামলা করে চিকিৎসার ব্যয় ও ক্ষতিপূরণ দাবি করুন।'
      ],
      hi: [
        'दूषित खाद्य पैकेट, बैच नंबर एवं बिल को सुरक्षित रखें तथा नमूने को सीलबंद करें।',
        'बीमार पड़ने पर अस्पताल की पर्ची, ब्लड टेस्ट रिपोर्ट एवं दवाइयों के बिल संभाल कर रखें।',
        'खाद्य सुरक्षा विभाग के FoSCoS पोर्टल पर जांच हेतु तत्काल शिकायत दर्ज कराएं।',
        'उपभोक्ता फोरम में वाद दायर कर इलाज का पूरा खर्च एवं दंडात्मक हर्जाना प्राप्त करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-28-1',
        name: { en: 'Purchase Bill, Food Sample Photos & Hospital Records', bn: 'কেনার বিল, খাবারের ছবি ও হাসপাতালের কাগজপত্র', hi: 'खरीद बिल, खाने के फोटो एवं मेडिकल रिपोर्ट' },
        issuing_authority: { en: 'Restaurant / Retailer / Hospital', bn: 'বিক্রেতা / হাসপাতাল', hi: 'दुकानदार / अस्पताल' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-29',
    title: {
      en: 'Laundry & Dry Cleaners Damaging Designer Garments',
      bn: 'লন্ড্রি দ্বারা মূল্যবান পোশাক নষ্ট ও নামমাত্র ক্ষতিপূরণ প্রদান',
      hi: 'लॉन्ड्री/ड्राई क्लीनर द्वारा कीमती कपड़े खराब करने पर हर्जाना'
    },
    relevant_act: 'Consumer Protection Act, 2019 (Deficiency in Service)',
    summary: {
      en: 'Invalidating arbitrary receipt disclaimers capping compensation at 10x wash charges and claiming garment value.',
      bn: 'লন্ড্রিতে বেনারসি শাড়ি বা স্যুট পুড়িয়ে নামমাত্র ২০ গুণ ধোয়ার খরচ দেওয়ার বেআইনি শর্ত বাতিল করে দাম আদায়।',
      hi: 'लॉन्ड्री द्वारा महंगे कपड़े जलाने या रंग उड़ाने पर रसीद की मनमानी शर्तों को रद्द कर पूरा मूल्य पाना।'
    },
    authority_forum: {
      en: 'District Consumer Commission (DCDRC)',
      bn: 'জেলা ক্রেতা সুরক্ষা আদালত (DCDRC)',
      hi: 'जिला उपभोक्ता आयोग'
    },
    forum_type: 'Consumer_DCDRC',
    is_complex: false,
    official_portal_url: 'https://e-jagriti.gov.in/',
    statutory_timeframe: {
      en: '30 to 60 working days',
      bn: '৩০ থেকে ৬০ কার্যদিবস',
      hi: '30 से 60 कार्यদিবস'
    },
    search_keywords: {
      en: ['dry cleaner damaged clothes', 'laundry compensation consumer court', 'unfair dry cleaner terms'],
      bn: ['লন্ড্রি পোশাক নষ্ট ক্ষতিপূরণ', 'ড্রাই ক্লিনার বিরোধ', 'দামি পোশাক নষ্ট'],
      hi: ['ड्राई क्लीनर कपड़ा खराब', 'लॉन्ड्री हर्जाना केस', 'कपड़े जलने का मुआवजा']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Retain original garment purchase invoice and signed receipt voucher from dry cleaner.',
        'Take clear comparative photographs showing chemical burns, color bleeding, or fabric tearing.',
        'Issue legal notice rejecting unilateral receipt limit terms as unfair under Section 2(46) CPA.',
        'File consumer complaint on e-Jagriti claiming current depreciated replacement cost.'
      ],
      bn: [
        'পোশাকটি কেনার মূল দোকান বিল এবং লন্ড্রির দেওয়া জামা জমার রসিদটি সুরক্ষিত রাখুন।',
        'কেমিক্যাল বার্ন বা ছেঁড়ার স্পষ্ট ছবি তুলে বাড়িওয়ালার গাফিলতি প্রমাণ করুন।',
        'রসিদের একতরফা ২০ গুণ ভাড়ার শর্তকে বেআইনি আখ্যা দিয়ে আইনজীবীর নোটিশ পাঠান।',
        'ই-জাগৃতি আদালতে মামলা দায়ের করে পোশাকের বাস্তব বাজার মূল্য ক্ষতিপূরণ হিসেবে আদায় করুন।'
      ],
      hi: [
        'कपड़े का मूल खरीद बिल एवं ड्राई क्लीनर द्वारा दी गई रसीद को सुरक्षित रखें।',
        'कपड़े पर लगे केमिकल के दाग, फटने या रंग उड़ने के स्पष्ट फोटो प्रमाण तैयार करें।',
        'रसीद के पीछे छपी "धुलाई का 10 गुना देंगे" जैसी एकतरफा शर्तों को अवैध बताते हुए नोटिस दें।',
        'ई-जागृति पर उपभोक्ता परिवाद दायर कर कपड़े का वास्तविक बाजार मूल्य वसूलें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-29-1',
        name: { en: 'Dry Cleaning Deposit Receipt & Original Garment Purchase Bill', bn: 'লন্ড্রির জমা রসিদ ও পোশাক কেনার মূল বিল', hi: 'ड्राई क्लीनिंग रसीद एवं कपड़े का खरीद बिल' },
        issuing_authority: { en: 'Dry Cleaner / Garment Retailer', bn: 'লন্ড্রি / কাপড়ের দোকান', hi: 'ड्राई क्लीनर / कपड़ा विक्रेता' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-30',
    title: {
      en: 'Real Estate Channel Partner / Broker Misrepresentation',
      bn: 'মিথ্যা প্রতিশ্রুতি দিয়ে ফ্ল্যাট বুক করানো রিয়েল এস্টেট ব্রোকার',
      hi: 'प्रॉपर्टी ब्रोकर द्वारा झूठे वादे कर फ्लैट बुक कराने पर कार्रवाई'
    },
    relevant_act: 'Sec 9 & 10, Real Estate (Regulation & Dev) Act, 2016',
    summary: {
      en: 'Holding unregistered or rogue brokers liable for deceptive marketing and revoking RERA licenses.',
      bn: 'মেট্রো বা সুইমিং পুলের মিথ্যা প্রতিশ্রুতি দিয়ে ফ্ল্যাট বুক করানো রিয়েল এস্টেট ব্রোকারের লাইসেন্স বাতিল ও রিফান্ড।',
      hi: 'ब्रोकर द्वारा झूठे वादे कर बुकिंग कराने पर रेरा से एजेंट का लाइसेंस रद्द कराना एवं पैसा वापस पाना।'
    },
    authority_forum: {
      en: 'West Bengal RERA Bench (WBRERA)',
      bn: 'পশ্চিমবঙ্গ রেরা বেঞ্চ (WBRERA)',
      hi: 'पश्चिम बंगाल रेरा बेंच (WBRERA)'
    },
    forum_type: 'WBRERA',
    is_complex: false,
    official_portal_url: 'https://rera.wb.gov.in/',
    statutory_timeframe: {
      en: '45 to 60 working days',
      bn: '৪৫ থেকে ৬০ কার্যদিবস',
      hi: '45 থেকে 60 कार्यदिवस'
    },
    search_keywords: {
      en: ['rera broker fraud', 'unregistered real estate agent', 'section 9 rera agent'],
      bn: ['দালাল প্রতারণা ফ্ল্যাট', 'রেরা ব্রোকার লাইসেন্স বাতিল', 'মিথ্যা প্রতিশ্রুতি রিয়েল এস্টেট'],
      hi: ['प्रॉपर्टी डीलर फ्रॉड', 'रेरा एजेंट शिकायत', 'ब्रोकर कमीशन विवाद']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Collate WhatsApp chats, emails, and flyers distributed by channel partner.',
        'Check WBRERA portal to verify whether agent holds an active RERA Registration Number.',
        'File complaint under Section 31 before WBRERA Bench against both agent and developer.',
        'WBRERA initiates license cancellation proceedings and orders refund of commissions.'
      ],
      bn: [
        'ব্রোকারের দেওয়া হোয়াটসঅ্যাপ চ্যাট, অডিও রেকর্ডিং ও প্রচারপত্রের প্রমাণ গুছিয়ে নিন।',
        'রেরা পোর্টালে চেক করে দেখুন ব্রোকারের বৈধ সরকারি রেরা রেজিস্ট্রেশন নম্বর আছে কি না।',
        'রেরা আইনের ধারা ৩১ অনুযায়ী দালাল ও বিল্ডার দুজনের বিরুদ্ধেই রেরা বেঞ্চে নালিশ করুন।',
        'রেরা দালালির লাইসেন্স বাতিল করবে এবং অনৈতিকভাবে নেওয়া বুকিং ফি ফেরতের আদেশ দেবে।'
      ],
      hi: [
        'प्रॉपर्टी डीलर द्वारा भेजे गए व्हाट्सएप संदेश, ऑडियो रिकॉर्डिंग एवं ब्रोशर एकत्र करें।',
        'रेरा पोर्टल पर जांचें कि क्या एजेंट के पास वैध रेरा पंजीकरण संख्या है।',
        'धारा 31 के तहत ब्रोकर एवं बिल्डर दोनों के खिलाफ WBRERA में शिकायत दर्ज कराएं।',
        'रेरा द्वारा एजेंट का लाइसेंस निरस्त किया जाएगा एवं जमा कमीशन वापस कराया जाएगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-30-1',
        name: { en: 'Written Communications / Marketing Flyer of Agent', bn: 'ব্রোকারের প্রচারপত্র ও হোয়াটসঅ্যাপ চ্যাটের কপি', hi: 'प्रॉपर्टी डीलर के प्रचार पर्चे एवं चैट रिकॉर्ड' },
        issuing_authority: { en: 'Real Estate Agent', bn: 'রিয়েল এস্টেট ব্রোকার', hi: 'प्रॉपर्टी एजेंट' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-31',
    title: {
      en: 'Delayed Commercial Retail Space Possession',
      bn: 'দোকান ও বাণিজ্যিক শপিং স্পেস হস্তান্তরে দেরি ও ব্যবসার ক্ষতি',
      hi: 'दुकान एवं व्यावसायिक परिसर पजेशन में देरी पर हर्जाना'
    },
    relevant_act: 'Sec 18 RERA r/w Commercial Dispute Precedents',
    summary: {
      en: 'Claiming monthly delay interest alongside business loss damages for unhanded commercial shops and office units.',
      bn: 'বাণিজ্যিক মল বা অফিসের দোকান নির্দিষ্ট সময়ে না দিলে ব্যবসার ক্ষতিপূরণ ও সুদে-আসলে টাকা ফেরতের মামলা।',
      hi: 'मॉल या कॉम्प्लेक्स में दुकान का कब्जा समय पर न मिलने पर व्यापार नुकसान एवं मासिक ब्याज पाना।'
    },
    authority_forum: {
      en: 'WBRERA / State Consumer Commission (SCDRC)',
      bn: 'রেরা / রাজ্য ক্রেতা সুরক্ষা কমিশন',
      hi: 'रेरा / राज्य उपभोक्ता आयोग'
    },
    forum_type: 'WBRERA',
    is_complex: true,
    official_portal_url: 'https://rera.wb.gov.in/',
    statutory_timeframe: {
      en: '60 to 90 working days',
      bn: '৬০ থেকে ৯০ কার্যদিবস',
      hi: '60 থেকে 90 कार्यदिवस'
    },
    search_keywords: {
      en: ['commercial shop delay rera', 'retail space possession delay', 'business loss rera compensation'],
      bn: ['দোকান হস্তান্তরে দেরি', 'বাণিজ্যিক ফ্ল্যাট বিলম্ব', 'রেরা ব্যবসা ক্ষতিপূরণ'],
      hi: ['दुकान पजेशन देरी रेरा', 'व्यावसायिक परिसर हर्जाना', 'दुकान कब्जा विवाद']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Review commercial agreement for sale and note promised possession completion date.',
        'Issue legal demand notice for immediate possession or monthly delay interest payout.',
        'File online Form-M complaint before WBRERA Authority claiming ongoing delay interest.',
        'If seeking project exit, pray for complete refund of paid principal with commercial interest.'
      ],
      bn: [
        'বাণিজ্যিক চুক্তিপত্র খতিয়ে দেখে দোকান হস্তান্তরের নির্ধারিত শেষ তারিখ চিহ্নিত করুন।',
        'অবিলম্বে দখল দেওয়া অথবা প্রতি মাসের আইনি সুদ মেটানোর দাবিতে লিগ্যাল নোটিশ দিন।',
        'মাসিক সুদের দাবিতে রেরা কর্তৃপক্ষের এজলাসে ফর্ম-এম (Form-M) অভিযোগ দায়ের করুন।',
        'প্রজেক্ট ছেড়ে বেরিয়ে আসতে চাইলে বাণিজ্যিক সুদে সমস্ত মূলধন এককালীন ফেরতের রায় নিন।'
      ],
      hi: [
        'व्यावसायिक अनुबंध से दुकान सौंपने की मूल समय सीमा का निर्धारण करें।',
        'तुरंत पजेशन देने अथवा मासिक देरी ब्याज का भुगतान करने का कानूनी नोटिस भेजें।',
        'रेरा में फॉर्म-M परिवाद दाखिल कर एसबीआई दर पर मासिक ब्याज की मांग करें।',
        'यदि प्रोजेक्ट से हटना हो, तो संपूर्ण जमा पूंजी उच्च ब्याज सहित वापसी की डिक्री लें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-31-1',
        name: { en: 'Commercial Agreement for Sale & Payment Proof', bn: 'বাণিজ্যিক দোকানের রেজিস্ট্রি চুক্তিপত্র ও বিল', hi: 'व्यावसायिक दुकान का बिक्री अनुबंध एवं भुगतान रसीदें' },
        issuing_authority: { en: 'Commercial Developer / ADSR', bn: 'প্রমোটার / সাব-রেজিস্ট্রার', hi: 'बिल्डर / उप-पंजीयक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-32',
    title: {
      en: 'Builder Delay in Executing Registered Conveyance Deed',
      bn: 'ফ্ল্যাট মালিকদের নামে মূল জমির ডিড রেজিস্ট্রি না করা',
      hi: 'फ्लैट खरीदारों के नाम मुख्य कन्वेयंस डीड (रजिस्ट्री) न करना'
    },
    relevant_act: 'Sec 17 RERA r/w WB Apartment Ownership Act',
    summary: {
      en: 'Forcing developers to execute and register final Deed of Conveyance transferring land and common areas within 3 months.',
      bn: 'ফ্ল্যাট হস্তান্তরের ৩ মাসের মধ্যে মূল জমি ও কমন এরিয়ার দলিল সোসাইটির নামে রেজিস্ট্রি করানোর নিয়ম।',
      hi: 'पजेशन मिलने के 3 महीने के भीतर मुख्य जमीन एवं साझा क्षेत्रों की रजिस्ट्री कराने की कानूनी प्रक्रिया।'
    },
    authority_forum: {
      en: 'WBRERA / Civil Court',
      bn: 'রেরা / দেওয়ানি আদালত',
      hi: 'रेरा / सिविल न्यायालय'
    },
    forum_type: 'WBRERA',
    is_complex: true,
    official_portal_url: 'https://rera.wb.gov.in/',
    statutory_timeframe: {
      en: 'Mandatory within 3 months of Occupancy Certificate (OC)',
      bn: 'অকুপ্যান্সি সার্টিফিকেটের ৩ মাসের মধ্যে বাধ্যতামূলক',
      hi: 'ओसी मिलने के 3 माह के भीतर अनिवार्य'
    },
    search_keywords: {
      en: ['deed of conveyance delay builder', 'section 17 rera registration', 'title transfer apartment society'],
      bn: ['কনভেয়েন্স ডিড রেজিস্ট্রি', 'জমির স্বত্ব হস্তান্তর ফ্ল্যাট', 'ধারা ১৭ রেরা'],
      hi: ['कन्वेयंस डीड देरी', 'जमीन रजिस्ट्री बिल्डर विवाद', 'धारा 17 रेरा']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Registered association passes resolution demanding execution of Master Conveyance Deed.',
        'Issue 30-day statutory notice to promoter invoking Section 17 of RERA Act.',
        'File non-compliance application before WBRERA Authority for penal action under Section 61.',
        'WBRERA orders promoter to register; upon default, appoints court officer to execute deeds.'
      ],
      bn: [
        'মালিক সমিতি সাধারণ সভা ডেকে মূল জমির রেজিস্ট্রি ডিড সম্পাদনের দাবি প্রস্তাব পাস করুন।',
        'রেরা আইনের ধারা ১৭ উল্লেখ করে ৩০ দিনের মধ্যে রেজিস্ট্রি করতে বিল্ডারকে আইনি নোটিশ দিন।',
        'দেরি করলে ধারা ৬১ অনুযায়ী শাস্তিমূলক জরিমানার আবেদন জানিয়ে রেরা বেঞ্চে মামলা করুন।',
        'বিল্ডার হাজির না হলে রেরা কোর্ট অফিসার নিয়োগ করে স্বহস্তে রেজিস্ট্রি দলিল সম্পাদন করাবে।'
      ],
      hi: [
        'अपार्टमेंट एसोसिएशन द्वारा मुख्य जमीन की रजिस्ट्री कराने का आधिकारिक प्रस्ताव पारित करें।',
        'रेरा की धारा 17 के तहत बिल्डर को 30 दिनों में कन्वेयंस डीड निष्पादित करने का नोटिस दें।',
        'बिल्डर के टालमटोल पर धारा 61 में दंडात्मक जुर्माने हेतु WBRERA में याचिका लगाएं।',
        'रेरा के आदेश पर बिल्डर द्वारा न करने पर कोर्ट कमिश्नर नियुक्त कर रजिस्ट्री कराई जाएगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-32-1',
        name: { en: 'Draft Master Conveyance Deed & Municipal OC', bn: 'খসড়া কনভেয়েন্স দলিল ও পুরসভার ও-সি সার্টিফিকেট', hi: 'ड्राफ्ट कन्वेयंस विलेख एवं नगरपालिका ओसी' },
        issuing_authority: { en: 'Apartment Association / KMC', bn: 'সোসাইটি / পুরসভা', hi: 'अपार्टमेंट एसोसिएशन / नगर निगम' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-33',
    title: {
      en: 'Insurance Repudiation of Commercial Fire / Flood Losses',
      bn: 'ব্যবসায়িক অগ্নিকাণ্ড ও বন্যায় কারখানার ইনস্যুরেন্স ক্লেইম নাকচ',
      hi: 'कारखाने में आग या बाढ़ से नुकसान का बीमा दावा खारिज होना'
    },
    relevant_act: 'IRDAI Act, 1999 r/w Consumer Protection Act, 2019',
    summary: {
      en: 'Overturning insurance company repudiations of factory fire, cyclone, or flood claims based on arbitrary deductions.',
      bn: 'কারখানা বা গুদামে আগুন বা বন্যায় হওয়া ক্ষয়ক্ষতির ইনস্যুরেন্স ক্লেইম সার্ভেয়ারের খামখেয়ালিপনায় নাকচ হলে প্রতিকার।',
      hi: 'फैक्ट्री में आग लगने या बाढ़ से हुए भारी नुकसान का बीमा क्लेम सर्वेक्षक द्वारा काटने पर चुनौती।'
    },
    authority_forum: {
      en: 'State / National Consumer Commission (NCDRC)',
      bn: 'রাজ্য / জাতীয় ক্রেতা সুরক্ষা কমিশন (NCDRC)',
      hi: 'राज्य / राष्ट्रीय उपभोक्ता आयोग (NCDRC)'
    },
    forum_type: 'Consumer_DCDRC',
    is_complex: true,
    official_portal_url: 'https://e-jagriti.gov.in/',
    statutory_timeframe: {
      en: '6 months to 1 year',
      bn: '৬ মাস থেকে ১ বছর',
      hi: '6 माह से 1 वर्ष'
    },
    search_keywords: {
      en: ['commercial fire insurance dispute', 'factory flood claim rejected', 'surveyor loss assessment dispute'],
      bn: ['কারখানা অগ্নিকাণ্ড বীমা', 'বন্যার ক্ষতিপূরণ বীমা', 'সার্ভেয়ার রিপোর্ট চ্যালেঞ্জ'],
      hi: ['फैक्ट्री आग बीमा विवाद', 'बाढ़ बीमा क्लेम रिजेक्ट', 'सर्वेयर रिपोर्ट चुनौती']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain certified copies of Fire Brigade Incident Report and police Station Diary records.',
        'Secure complete copy of Insurance Surveyor Loss Assessment Report via formal request.',
        'Rebut unjustified depreciation deductions by engaging an independent licensed Loss Assessor.',
        'File consumer complaint before SCDRC (claims up to ₹10 Crore) or NCDRC for loss recovery.'
      ],
      bn: [
        'দমকল বাহিনীর চূড়ান্ত তদন্ত রিপোর্ট ও থানার জেনারেল ডায়েরির সার্টিফাইড কপি সংগ্রহ করুন।',
        'বীমা সার্ভেয়ারের তৈরি ক্ষয়ক্ষতির গোপন অ্যাসেসমেন্ট রিপোর্টের প্রতিলিপি তলব করুন।',
        'অনুমোদিত স্বাধীন চাটার্ড লস অ্যাসেসর দিয়ে সার্ভেয়ারের অযৌক্তিক কর্তন খণ্ডন করুন।',
        'রাজ্য বা জাতীয় ক্রেতা আদালতে মামলা করে সম্পূর্ণ ক্ষয়ক্ষতির টাকা সুদসহ আদায় করুন।'
      ],
      hi: [
        'दमकल विभाग की अंतिम रिपोर्ट एवं थाने की जीडी की प्रमाणित प्रतियां एकत्र करें।',
        'बीमा सर्वेक्षक द्वारा तैयार मूल्यांकन रिपोर्ट की पूरी प्रति औपचारिक रूप से मांगें।',
        'स्वतंत्र लाइसेंसशुदा मूल्यांकनकर्ता से सर्वेक्षक की गलत कटौतियों का तकनीकी खंडन कराएं।',
        'राज्य अथवा राष्ट्रीय उपभोक्ता आयोग में वाद दायर कर नुकसान की पूरी भरपाई कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-33-1',
        name: { en: 'Fire Brigade Incident Report & Surveyor Assessment Copy', bn: 'দমকলের রিপোর্ট ও সার্ভেয়ার অ্যাসেসমেন্ট কপি', hi: 'दमकल रिपोर्ट एवं बीमा सर्वेक्षक मूल्यांकन रिपोर्ट' },
        issuing_authority: { en: 'Fire Dept / Insurance Company', bn: 'দমকল / বীমা সংস্থা', hi: 'अग्निशमन विभाग / बीमा कंपनी' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-34',
    title: {
      en: 'Illegal Gold Loan Auctions Without Statutory Notice',
      bn: 'নোটিশ ছাড়া ব্যাঙ্কে বন্ধকি সোনা জলের দরে নিলাম বিক্রি',
      hi: 'बिना कानूनी नोटिस बैंक द्वारा गिरवी सोने की औने-पौने दाम पर नीलामी'
    },
    relevant_act: 'RBI Master Directions on Gold Loans r/w Sec 176 Contract Act',
    summary: {
      en: 'Setting aside gold auctions conducted by NBFCs without mandatory registered notice and recovering value difference.',
      bn: 'গ্রাহককে আগাম রেজিস্ট্রি নোটিশ না দিয়ে চুরির মতো জলের দরে বন্ধকি সোনা নিলাম করার বিরুদ্ধে ব্যবস্থা।',
      hi: 'बिना 14 दिन का पंजीकृत नोटिस दिए मुथूट/बैंक द्वारा कम दाम में सोना नीलाम करने पर रोक व हर्जाना।'
    },
    authority_forum: {
      en: 'RBI Banking Ombudsman (CMS Portal) / DCDRC',
      bn: 'আরবিআই ন্যায়পাল / জেলা ক্রেতা আদালত',
      hi: 'आरबीआई लोकपाल / जिला उपभोक्ता आयोग'
    },
    forum_type: 'Competent_Authority',
    is_complex: false,
    official_portal_url: 'https://cms.rbi.org.in/',
    statutory_timeframe: {
      en: '30 working days',
      bn: '৩০ কার্যদিবস',
      hi: '30 কার্যদিবস'
    },
    search_keywords: {
      en: ['gold loan illegal auction', 'gold auction without notice rbi', 'nbfc gold jewelry compensation'],
      bn: ['সোনার লোন বেআইনি নিলাম', 'নোটিশ ছাড়া সোনা বিক্রি', 'গোল্ড লোন প্রতারণা'],
      hi: ['गोल्ड लोन अवैध नीलामी', 'बिना नोटिस सोना नीलामी', 'आरबीआई गोल्ड लोन नियम']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Produce gold pawn receipts, loan ledger, and verify lack of 14-day registered notice delivery.',
        'Submit complaint on RBI CMS portal alleging violation of Fair Practices Code on Gold Loans.',
        'Lodge case before DCDRC for deficiency of service, undervaluation, and mental harassment.',
        'Obtain order directing NBFC to return equivalent gold ornaments or pay spot market valuation.'
      ],
      bn: [
        'সোনার জমা রসিদ ও লোন বই দেখিয়ে প্রমাণ করুন কোনো ১৪ দিনের রেজিস্ট্রি নোটিশ দেওয়া হয়নি।',
        'আরবিআই সিএমএস (CMS) পোর্টালে ফেয়ার প্র্যাকটিস কোড লঙ্ঘনের আনুষ্ঠানিক নালিশ জানান।',
        'জেলা উপভোক্তা আদালতে কম দামে সোনা বিক্রির চরম গাফিলতির বিরুদ্ধে মামলা করুন।',
        'ব্যাঙ্ক বা এনবিএফসি-কে সমপরিমাণ স্বর্ণালঙ্কার ফেরত অথবা বর্তমান বাজার দর মেটানোর নির্দেশ পান।'
      ],
      hi: [
        'गोल्ड लोन रसीदें निकालें और साबित करें कि 14 दिन का कोई पंजीकृत नोटिस नहीं मिला था।',
        'आरबीआई के CMS पोर्टल पर फेयर प्रैक्टिसेज कोड के उल्लंघन की ऑनलाइन शिकायत दें।',
        'कम मूल्यांकन में सोना बेचने के खिलाफ जिला उपभोक्ता फोरम में क्षतिपूर्ति का वाद करें।',
        'अदालत से सोने के समान आभूषण वापस दिलाने अथवा वर्तमान बाजार भाव चुकाने का आदेश लें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-34-1',
        name: { en: 'Gold Loan Pledge Card & Weight Verification Certificate', bn: 'স্বর্ণ বন্ধকের প্লেজ কার্ড ও ওজন শংসাপত্র', hi: 'गोल्ड लोन गिरवी पर्ची एवं वजन सत्यापन रसीद' },
        issuing_authority: { en: 'Lending Bank / Gold NBFC', bn: 'স্বর্ণ ঋণদাতা সংস্থা', hi: 'गोल्ड लोन बैंक / एनबीएफसी' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-35',
    title: {
      en: 'Courier Companies Losing Passports & Certified Deeds',
      bn: 'কুরিয়ার কোম্পানি কর্তৃক জরুরি সরকারি নথিপত্র হারানো',
      hi: 'कोरियर कंपनी द्वारा पासपोर्ट, मार्कशीट या मूल दस्तावेज खोना'
    },
    relevant_act: 'Carriage by Road Act, 2007 r/w CPA, 2019',
    summary: {
      en: 'Striking down boilerplate receipt terms capping liability at ₹100 and securing substantial compensation for lost documents.',
      bn: 'কুরিয়ারে পাসপোর্ট, জমির দলিল বা মার্কশিট হারিয়ে গেলে ১০০ টাকার রসিদ শর্ত বাতিল করে লক্ষাধিক টাকা ক্ষতিপূরণ আদায়।',
      hi: 'कोरियर रसीद की "अधिकतम ₹100 देंगे" की शर्त को अवैध कराकर जरूरी दस्तावेज खोने पर भारी मुआवजा पाना।'
    },
    authority_forum: {
      en: 'District Consumer Commission (DCDRC)',
      bn: 'জেলা ক্রেতা সুরক্ষা আদালত (DCDRC)',
      hi: 'जिला उपभोक्ता आयोग'
    },
    forum_type: 'Consumer_DCDRC',
    is_complex: false,
    official_portal_url: 'https://e-jagriti.gov.in/',
    statutory_timeframe: {
      en: '30 to 60 working days',
      bn: '৩০ থেকে ৬০ কার্যদিবস',
      hi: '30 থেকে 60 कार्यदिवस'
    },
    search_keywords: {
      en: ['lost passport courier compensation', 'dhl bluedart lost document claim', 'carriage by road consumer'],
      bn: ['কুরিয়ারে পাসপোর্ট হারানো', 'দলিল হারানো কুরিয়ার ক্ষতিপূরণ', 'কুরিয়ার গাফিলতি'],
      hi: ['कोरियर पासपोर्ट खोना', 'दस्तावेज गुम कोरियर हर्जाना', 'उपभोक्ता फोरम कोरियर']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Save tracking logs showing parcel was scanned as "Out for Delivery" or "Lost in Transit".',
        'File police General Diary (GD) for loss of passport, educational degrees, or registered deeds.',
        'Serve legal notice demanding compensation for re-issuance expenses, visa delay, and distress.',
        'File complaint before DCDRC; consumer forums routinely award ₹1 Lakh to ₹5 Lakhs compensation.'
      ],
      bn: [
        'কুরিয়ার ট্র্যাকিং হিস্ট্রি প্রিন্ট করুন যেখানে পার্সেলটি "হারিয়ে গেছে" হিসেবে চিহ্নিত।',
        'পাসপোর্ট, মার্কশিট বা দলিল হারানোর ঘটনায় স্থানীয় থানায় জেনারেল ডায়েরি (GD) করুন।',
        'পুনরায় নথি তোলা ও বিদেশে যাওয়ার সুযোগ নষ্ট হওয়ার কারণে ক্ষতিপূরণ চেয়ে নোটিশ দিন।',
        'ক্রেতা সুরক্ষা আদালতে মামলা করে ১ থেকে ৫ লক্ষ টাকা পর্যন্ত দৃষ্টান্তমূলক ক্ষতিপূরণ আদায় করুন।'
      ],
      hi: [
        'पार्सल का ट्रैकिंग स्टेटस सुरक्षित करें जिसमें सामान "Lost in Transit" दर्ज हो।',
        'पासपोर्ट, डिग्री या जमीन रजिस्ट्री गुम होने की स्थानीय थाने में जीडी दर्ज कराएं।',
        'दस्तावेज दोबारा बनवाने के खर्च एवं मानसिक तनाव का विधिक मांग पत्र भेजें।',
        'उपभोक्ता फोरम में वाद दायर कर कोरियर की लापरवाही पर ₹1 से ₹5 लाख तक का हर्जाना प्राप्त करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-35-1',
        name: { en: 'Courier Consignment Note & Police Loss GD', bn: 'কুরিয়ারের বুকিং স্লিপ ও পুলিশ জিডি কপি', hi: 'कोरियर बुकिंग रसीद एवं पुलिस गुमशुदगी जीडी' },
        issuing_authority: { en: 'Courier Company / Police Station', bn: 'কুরিয়ার সংস্থা / থানা', hi: 'कोरियर कंपनी / पुलिस' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-36',
    title: {
      en: 'Banks Levying Hidden Foreclosure Charges on Floating Loans',
      bn: 'গৃহঋণে গোপন প্রিপেমেন্ট জরিমানা ও অতিরিক্ত সুদের শোষণ',
      hi: 'फ्लोटिंग होम लोन पर बैंकों द्वारा अवैध प्रीपेमेंट पेनल्टी वसूलना'
    },
    relevant_act: 'RBI Circulars on Prohibition of Prepayment Penalties',
    summary: {
      en: 'Demanding immediate refund of unauthorized 2%–4% foreclosure penalties deducted by banks when closing home loans.',
      bn: 'ফ্লোটিং সুদের গৃহঋণ আগেই পরিশোধ করতে গেলে ব্যাঙ্কের বেআইনি জরিমানা বা চার্জ কেটে নেওয়া বন্ধ।',
      hi: 'होम लोन पहले चुकाने पर बैंकों द्वारा काटा गया 2% से 4% का अवैध पेनल्टी चार्ज वापस पाना।'
    },
    authority_forum: {
      en: 'RBI Banking Ombudsman / DCDRC',
      bn: 'আরবিআই ব্যাঙ্কিং ন্যায়পাল / ক্রেতা আদালত',
      hi: 'आरबीआई बैंकिंग लोकपाल / उपभोक्ता फोरम'
    },
    forum_type: 'Competent_Authority',
    is_complex: false,
    official_portal_url: 'https://cms.rbi.org.in/',
    statutory_timeframe: {
      en: '30 working days',
      bn: '৩০ কার্যদিবস',
      hi: '30 कार्यदिवस'
    },
    search_keywords: {
      en: ['foreclosure charges refund rbi', 'floating home loan prepayment penalty', 'bank overcharged foreclosure'],
      bn: ['হোম লোন প্রিপেমেন্ট জরিমানা', 'আরবিআই ফ্লোটিং লোন নিয়ম', 'ফোরক্লোজার চার্জ ফেরত'],
      hi: ['होम लोन प्रीपेमेंट पेनल्टी', 'आरबीआई फ्लोटिंग लोन नियम', 'फोरक्लोजर चार्ज रिफंड']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Examine loan sanction letter and verify loan is under a floating interest rate regime.',
        'Submit official protest letter to Branch Manager citing RBI Master Circulars banning prepayment fee.',
        'If deducted from foreclosure balance, file complaint on RBI Integrated Ombudsman portal.',
        'Ombudsman directs commercial bank to refund deducted sum with interest and return original deeds.'
      ],
      bn: [
        'লোন স্যাংকশন লেটার দেখে নিশ্চিত হন যে ঋণের সুদের ধরন ফ্লোটিং (Floating) প্রকৃতির।',
        'আরবিআই-এর সার্কুলার উল্লেখ করে প্রি-পেমেন্ট পেনাল্টি কাটার বিরুদ্ধে ব্যাঙ্ক ম্যানেজারকে চিঠি দিন।',
        'টাকা কেটে ফাইনাল ক্লোজ করলে রিজার্ভ ব্যাঙ্কের ওম্বুডসম্যান পোর্টালে সরাসরি নালিশ জানান।',
        'ন্যায়পাল ব্যাংককে সম্পূর্ণ পেনাল্টি টাকা সুদসহ ফেরত এবং মূল দলিল হস্তান্তরের আদেশ দেবে।'
      ],
      hi: [
        'ऋण स्वीकृति पत्र से जांचें कि आपका होम लोन फ्लोटिंग ब्याज दर के तहत स्वीकृत था।',
        'आरबीआई के मास्टर सर्कुलर का हवाला देकर बैंक को पेनल्टी पर ब्याज न लगाने का पत्र दें।',
        'राशि कट जाने पर आरबीआई के एकीकृत लोकपाल (CMS) पोर्टल पर ऑनलाइन शिकायत करें।',
        'लोकपाल बैंक को काटा गया पूरा शुल्क ब्याज सहित लौटाने एवं मूल विलेख सौंपने का आदेश देगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-36-1',
        name: { en: 'Loan Sanction Letter & Final Foreclosure Statement', bn: 'লোন স্যাংকশন লেটার ও ফাইনাল ফোরক্লোজার হিসাবপত্র', hi: 'ऋण स्वीकृति पत्र एवं अंतिम फोरक्लोजर खाता विवरण' },
        issuing_authority: { en: 'Lending Bank / Housing Finance Co', bn: 'গৃহঋণ প্রদানকারী ব্যাঙ্ক', hi: 'ऋणदाता बैंक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-37',
    title: {
      en: 'Misleading Endorsements by Influencers & Celebrities',
      bn: 'তারকাদের বিভ্রান্তিকর বিজ্ঞাপন ও উপভোক্তা প্রতারণা',
      hi: 'सेलेब्रिटीज एवं इन्फ्लुएंसर्स द्वारा भ्रामक प्रचार एवं उपभोक्ता धोखा'
    },
    relevant_act: 'Sec 21 & 89, CPA, 2019 & CCPA Guidelines',
    summary: {
      en: 'Filing complaints penalizing social media influencers promoting fraudulent wellness, financial, or cosmetic products.',
      bn: 'তারকা ও সোশ্যাল মিডিয়া প্রভাবশালীদের অসত্য পণ্যের বিজ্ঞাপনে প্রলুব্ধ হয়ে প্রতারিত হলে জরিমানা মামলা।',
      hi: 'सेलिब्रिटीज द्वारा नकली दवाओं या पोंजी स्कीमों का झूठा प्रचार करने पर भारी जुर्माना व सजा।'
    },
    authority_forum: {
      en: 'Central Consumer Protection Authority (CCPA)',
      bn: 'কেন্দ্রীয় ক্রেতা সুরক্ষা কর্তৃপক্ষ (CCPA)',
      hi: 'केंद्रीय उपभोक्ता संरक्षण प्राधिकरण (CCPA)'
    },
    forum_type: 'Competent_Authority',
    is_complex: false,
    official_portal_url: 'https://consumeraffairs.nic.in/',
    statutory_timeframe: {
      en: '30 to 60 working days',
      bn: '৩০ থেকে ৬০ কার্যদিবস',
      hi: '30 से 60 कार्यदिवস'
    },
    search_keywords: {
      en: ['misleading celebrity ad complaint', 'influencer endorsement penalty', 'ccpa false advertising'],
      bn: ['তারকাদের ভুয়ো বিজ্ঞাপন', 'ইনফ্লুয়েন্সার প্রতারণা', 'বিভ্রান্তিকর বিজ্ঞাপন সিসিএপিএ'],
      hi: ['भ्रामक विज्ञापन शिकायत', 'इन्फ्लुएंसर पेनल्टी', 'सीसीपीए झूठा प्रचार']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Archive promotional videos, Instagram posts, and misleading product claims before deletion.',
        'Submit a formal complaint dossier to Central Consumer Protection Authority (ccpa-ca@nic.in).',
        'CCPA Director General conducts preliminary probe into substantiation of scientific claims.',
        'CCPA issues orders banning ad and imposing fines up to ₹10 Lakhs on the endorser.'
      ],
      bn: [
        'বিজ্ঞাপনের ভিডিও, ইনস্টাগ্রাম পোস্ট ও অতিরঞ্জিত দাবির স্ক্রিনশট ও লিঙ্ক সংরক্ষণ করুন।',
        'কেন্দ্রীয় ক্রেতা সুরক্ষা কর্তৃপক্ষের ইমেলে (ccpa-ca@nic.in) সমস্ত প্রমাণপত্র পাঠান।',
        'সিসিএপিএ-র ডিরেক্টর জেনারেল বিজ্ঞাপনী দাবির সত্যতা যাচাইয়ে আনুষ্ঠানিক তদন্ত করবেন।',
        'বিজ্ঞাপন নিষিদ্ধ করে তারকা বা প্রভাবশালীর ওপর ১০ লক্ষ টাকা পর্যন্ত জরিমানা জারি করা হবে।'
      ],
      hi: [
        'प्रचार वीडियो, सोशल मीडिया पोस्ट एवं झूठे दावों के स्क्रीनशॉट व लिंक सुरक्षित करें।',
        'केंद्रीय उपभोक्ता प्राधिकरण को ईमेल (ccpa-ca@nic.in) द्वारा पूरा विवरण भेजें।',
        'सीसीपीए महानिदेशक द्वारा वैज्ञानिक दावों की सत्यता की जांच कराई जाएगी।',
        'प्राधिकरण विज्ञापन पर रोक लगाकर प्रचारक पर ₹10 लाख तक का जुर्माना लगाएगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-37-1',
        name: { en: 'Digital Archive of Misleading Advertisement & Product Purchase Bill', bn: 'বিজ্ঞাপনের স্ক্রিন রেকর্ডিং ও পণ্য কেনার বিল', hi: 'विज्ञापन का डिजिटल साक्ष्य एवं उत्पाद खरीद बिल' },
        issuing_authority: { en: 'Complainant', bn: 'অভিযোগকারী', hi: 'शिकायतकर्ता' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-38',
    title: {
      en: 'Wedding Banquet Hall & Event Cancellation Forfeitures',
      bn: 'বিবাহের ভেন্যু ও ক্যাটারিং বাতিল এবং অগ্রিম টাকা বাজেয়াপ্ত',
      hi: 'विवाह बैंक्वेट हॉल एवं कैटरिंग अग्रिम राशि जब्ती का विरोध'
    },
    relevant_act: 'Sec 35 CPA, 2019 r/w Sec 74 Contract Act',
    summary: {
      en: 'Recovering non-refundable advance venue bookings when weddings are cancelled or rescheduled with reasonable notice.',
      bn: 'যুক্তিসঙ্গত সময় আগে বিয়ে বা অনুষ্ঠান বাতিল করলে ম্যারেজ হলের সম্পূর্ণ বুকিং টাকা আটকে রাখার বিরুদ্ধে প্রতিকার।',
      hi: 'उचित समय रहते शादी या कार्यक्रम रद्द करने पर बैंक्वेट हॉल द्वारा पूरी अग्रिम राशि जब्त करने पर रोक।'
    },
    authority_forum: {
      en: 'District Consumer Commission (DCDRC)',
      bn: 'জেলা ক্রেতা সুরক্ষা আদালত (DCDRC)',
      hi: 'जिला उपभोक्ता आयोग'
    },
    forum_type: 'Consumer_DCDRC',
    is_complex: false,
    official_portal_url: 'https://e-jagriti.gov.in/',
    statutory_timeframe: {
      en: '30 to 60 working days',
      bn: '৩০ থেকে ৬০ কার্যদিবস',
      hi: '30 থেকে 60 कार्यदिवस'
    },
    search_keywords: {
      en: ['banquet hall booking refund', 'wedding venue advance forfeiture', 'marriage hall consumer court'],
      bn: ['বিবাহ মণ্ডপ অগ্রিম ফেরত', 'ম্যারেজ হল টাকা বাজেয়াপ্ত', 'ক্যাটারিং বুকিং রিফান্ড'],
      hi: ['बैंक्वेट हॉल रिफंड', 'मैरिज हॉल बयाना वापसी', 'शादी हॉल उपभोक्ता फोरम']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Produce booking receipts, cancellation correspondence, and written notice sent to hall.',
        'Issue legal demand notice showing venue was informed with sufficient advance notice (30+ days).',
        'File consumer case on e-Jagriti challenging total forfeiture clause as unfair under Section 2(46).',
        'Obtain award ordering refund minus documented direct expenses incurred by banquet management.'
      ],
      bn: [
        'অগ্রিম বুকিং রসিদ এবং অনুষ্ঠানের ৩০ দিন আগে বাতিল করার লিখিত ইমেল প্রমাণ রাখুন।',
        'অন্য বুকিং নেওয়ার পর্যাপ্ত সময় ছিল উল্লেখ করে টাকা ফেরতের আইনি নোটিশ পাঠান।',
        'ই-জাগৃতি আদালতে একতরফা ১০০% টাকা কাটার অন্যায্য শর্ত চ্যালেঞ্জ করে মামলা করুন।',
        'আদালতের নির্দেশে হলের প্রকৃত খরচ বাদে বাকি সম্পূর্ণ বুকিংয়ের টাকা সুদসহ ফেরত পান।'
      ],
      hi: [
        'बुकिंग रसीदें एवं 30 दिन पूर्व कार्यक्रम रद्द करने के लिखित ईमेल साक्ष्य तैयार रखें।',
        'हॉल प्रबंधन को पर्याप्त समय पूर्व सूचना देने का हवाला देकर अग्रिम वापसी का नोटिस दें।',
        'ई-जागृति पर वाद दायर कर 100% जब्ती की शर्त को धारा 2(46) में अनुचित साबित करें।',
        'हॉल के वास्तविक खर्च काटकर शेष पूरी अग्रिम राशि ब्याज सहित वापसी का फैसला लें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-38-1',
        name: { en: 'Banquet Hall Advance Receipt & Timely Cancellation Proof', bn: 'হলের অগ্রিম জমা রসিদ ও বাতিলের লিখিত চিঠি', hi: 'हॉल बुकिंग रसीद एवं रद्दीकरण सूचना प्रति' },
        issuing_authority: { en: 'Banquet Management / Complainant', bn: 'ম্যারেজ হল কর্তৃপক্ষ', hi: 'बैंक्वेट प्रबंधन' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-39',
    title: {
      en: 'Spurious Seeds & Adulterated Pesticides Crop Failure',
      bn: 'ভেজাল বীজ ও কীটনাশকের কারণে চাষির ফসলের ক্ষতিপূরণ দাবি',
      hi: 'नकली बीज एवं कीटनाशक से फसल बर्बादी पर किसान क्षतिपूर्ति'
    },
    relevant_act: 'Seeds Act, 1966 r/w Consumer Protection Act, 2019',
    summary: {
      en: 'Protecting farmers against seed dealers and chemical companies for selling defective seeds causing total harvest loss.',
      bn: 'ভেজাল কীটনাশক বা অঙ্কুরোদগমহীন বীজ কিনে চাষির ফসল নষ্ট হলে ডিলার ও কোম্পানির থেকে সম্পূর্ণ ক্ষতিপূরণ লাভ।',
      hi: 'नकली कीटनाशक या खराब बीज से फसल जलने पर किसान द्वारा बीज कंपनी से पूरी फसल का हर्जाना पाना।'
    },
    authority_forum: {
      en: 'District Consumer Commission (DCDRC)',
      bn: 'জেলা ক্রেতা সুরক্ষা আদালত (DCDRC)',
      hi: 'जिला उपभोक्ता आयोग'
    },
    forum_type: 'Consumer_DCDRC',
    is_complex: false,
    official_portal_url: 'https://e-jagriti.gov.in/',
    statutory_timeframe: {
      en: '60 to 90 working days',
      bn: '৬০ থেকে ৯০ কার্যদিবস',
      hi: '60 থেকে 90 कार्यदिवस'
    },
    search_keywords: {
      en: ['defective seeds crop failure compensation', 'spurious pesticide lawsuit', 'farmer consumer case wb'],
      bn: ['ভেজাল বীজ ক্ষতিপূরণ', 'কীটনাশকে ফসল নষ্ট', 'কৃষক ক্রেতা সুরক্ষা'],
      hi: ['नकली बीज मुआवजा', 'कीटनाशक से फसल नुकसान', 'किसान उपभोक्ता फोरम']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Retain seed packet, batch tags, cash memo bill, and empty chemical containers.',
        'Request local Assistant Director of Agriculture (ADA) to conduct on-site field inspection.',
        'Agricultural Officer submits certified report establishing failure was caused by seed defect.',
        'File complaint before DCDRC claiming projected market yield value of crop plus input costs.'
      ],
      bn: [
        'বীজের প্যাকেট, ব্যাচ নম্বর, কেনার ক্যাশ মেমো ও কীটনাশকের বোতল সুরক্ষিত রাখুন।',
        'ব্লক কৃষি আধিকারিককে (ADA) ডেকে এনে মাঠের নষ্ট ফসল সরেজমিনে পরিদর্শন করান।',
        'কৃষি আধিকারিক সরকারি রিপোর্ট দেবেন যে আবহাওয়া নয়, বীজের ভেজালের জন্যই ফসল নষ্ট হয়েছে।',
        'জেলা ক্রেতা আদালতে মামলা করে সম্ভাব্য মোট ফসলের বাজার মূল্য ক্ষতিপূরণ হিসেবে আদায় করুন।'
      ],
      hi: [
        'बीज का पैकेट, लॉट नंबर, पक्का कैश मेमो एवं कीटनाशक के खाली डिब्बे सुरक्षित रखें।',
        'सहायक कृषि निदेशक (ADA) से खेत का मुआयना कराकर आधिकारिक जांच रिपोर्ट बनवाएं।',
        'कृषि वैज्ञानिक की रिपोर्ट से सिद्ध करें कि फसल मौसम से नहीं बल्कि बीज दोष से मरी है।',
        'उपभोक्ता फोरम में परिवाद देकर फसल के संभावित बाजार मूल्य एवं लागत की वसूली करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-39-1',
        name: { en: 'Agricultural Officer Crop Loss Inspection Report & Purchase Bill', bn: 'কৃষি আধিকারিকের ক্ষয়ক্ষতি রিপোর্ট ও বিল', hi: 'कृषि अधिकारी की फसल क्षति रिपोर्ट एवं बीज खरीद बिल' },
        issuing_authority: { en: 'Assistant Director of Agriculture (ADA)', bn: 'কৃষি দপ্তর', hi: 'कृषि विभाग' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-40',
    title: {
      en: 'Builder Failure to Provide Drinking Water Connection',
      bn: 'বহুতল আবাসনে পানীয় জলের লাইন না দেওয়া ও ট্যাঙ্কার শোষণ',
      hi: 'अपार्टमेंट में पेयजल कनेक्शन न देने पर बिल्डर से टैंकर खर्च वसूली'
    },
    relevant_act: 'Sec 11 RERA r/w Municipal Water Supply Rules',
    summary: {
      en: 'Directing developers to pay ongoing commercial water tanker expenses until permanent municipal drinking water is supplied.',
      bn: 'ফ্ল্যাটে পানীয় জলের সরকারি লাইন না দিয়ে বছরের পর বছর ট্যাঙ্কারের বাড়তি খরচ চাপানো বন্ধের আইনি পথ।',
      hi: 'बिल्डर द्वारा पीने के पानी की सरकारी पाइपलाइन न जोड़ने पर उसके खर्चे पर पानी मंगाने का आदेश।'
    },
    authority_forum: {
      en: 'WBRERA Bench / District Consumer Commission',
      bn: 'রেরা বেঞ্চ / জেলা ক্রেতা আদালত',
      hi: 'रेरा बेंच / जिला उपभोक्ता आयोग'
    },
    forum_type: 'WBRERA',
    is_complex: true,
    official_portal_url: 'https://rera.wb.gov.in/',
    statutory_timeframe: {
      en: '30 to 60 working days',
      bn: '৩০ থেকে ৬০ কার্যদিবস',
      hi: '30 से 60 कार्यदिवस'
    },
    search_keywords: {
      en: ['builder no drinking water rera', 'water tanker cost builder compensation', 'municipal water connection delay'],
      bn: ['পানীয় জলের লাইন দেয়নি বিল্ডার', 'জলের ট্যাঙ্কারের খরচ আদায়', 'রেরা পানীয় জল বিরোধ'],
      hi: ['पीने का पानी बिल्डर विवाद', 'पानी टैंकर खर्च वसूली', 'रेरा पेयजल कनेक्शन']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Collate monthly society accounts showing expenses paid to private water tanker suppliers.',
        'Serve demand notice on promoter to complete municipal water supply pipework within 15 days.',
        'File petition before WBRERA under Section 31 for failing to deliver essential infrastructure.',
        'Secure order directing builder to reimburse monthly tanker bills until municipal commissioning.'
      ],
      bn: [
        'প্রাইভেট জলের ট্যাঙ্কার কিনতে প্রতি মাসে সোসাইটির কত খরচ হচ্ছে তার পাকা বিল একত্র করুন।',
        'পুরসভার পানীয় জলের পাইপলাইন দ্রুত সম্পন্ন করতে প্রমোটারকে ১৫ দিনের লিগ্যাল নোটিশ দিন।',
        'জরুরি পরিষেবা প্রদানে ব্যর্থতার কারণ দেখিয়ে রেরা এজলাসে ধারা ৩১ অনুযায়ী মামলা করুন।',
        'পুরসভার জল চালু না হওয়া পর্যন্ত প্রতি মাসের ট্যাঙ্কারের বিল প্রমোটারকে দেওয়ার নির্দেশ পান।'
      ],
      hi: [
        'सोसाइटी द्वारा खरीदे जा रहे पानी के टैंकरों के मासिक बिलों का विवरण तैयार करें।',
        'नगरपालिका की मुख्य पेयजल लाइन जोड़ने हेतु बिल्डर को 15 दिनों का नोटिस दें।',
        'बुनियादी सुविधा न देने पर धारा 31 के तहत WBRERA के समक्ष परिवाद दाखिल करें।',
        'सरकारी कनेक्शन चालू होने तक हर महीने पानी के टैंकरों का पूरा खर्च बिल्डर से वसूलें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-40-1',
        name: { en: 'Society Commercial Water Tanker Payment Vouchers', bn: 'জলের ট্যাঙ্কারের পেমেন্ট ভাউচার ও পুরসভার চিঠি', hi: 'पानी टैंकरों के भुगतान वाउचर एवं निगम पत्राचार' },
        issuing_authority: { en: 'Apartment RWA / Water Suppliers', bn: 'আবাসন সমিতি', hi: 'अपार्टमेंट एसोसिएशन' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-41',
    title: {
      en: 'Unlawful Sale of Stilt Parking & Open Terraces by Promoters',
      bn: 'গ্যারাজ ও ছাদ বেআইনিভাবে বহিরাগতদের কাছে বিক্রি প্রতিরোধ',
      hi: 'स्टिल्ट पार्किंग एवं खुली छत को बिल्डर द्वारा अवैध रूप से बेचना'
    },
    relevant_act: 'Nahalchand Laloochand (SC) r/w RERA, 2016',
    summary: {
      en: 'Invalidating separate garage and roof sale deeds executed by promoters to third parties and restoring common areas.',
      bn: 'বহিরাগতদের কাছে ছাদ বা পার্কিং বিক্রি সম্পূর্ণ বেআইনি ঘোষণা করে সমস্ত মালিকদের অধিকারে আনা।',
      hi: 'सुप्रीम कोर्ट के नाहलचंद फैसले के तहत पार्किंग व छत को बिल्डर द्वारा अलग से बेचने पर रोक।'
    },
    authority_forum: {
      en: 'WBRERA / Civil Court',
      bn: 'রেরা / দেওয়ানি আদালত',
      hi: 'रेरा / सिविल न्यायालय'
    },
    forum_type: 'WBRERA',
    is_complex: true,
    official_portal_url: 'https://rera.wb.gov.in/',
    statutory_timeframe: {
      en: '60 working days',
      bn: '৬০ কার্যদিবস',
      hi: '60 कार्यदिवস'
    },
    search_keywords: {
      en: ['stilt parking sale illegal rera', 'nahalchand laloochand', 'open terrace sale builder'],
      bn: ['পার্কিং বিক্রি বেআইনি', 'ছাদ বিক্রি রেরা', 'কমন এরিয়া অধিকার'],
      hi: ['पार्किंग बिक्री अवैध', 'नाहलचंद फैसला', 'छत बेचना बिल्डर रोक']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Inspect approved municipal building plan; open stilt areas and roofs cannot be sold as units.',
        'Pass resolution in Apartment Association challenging third-party occupancy of common parking.',
        'File application before WBRERA Bench for invalidation of separate stilt/roof sale deeds.',
        'WBRERA declares common areas belong exclusively to registered apartment association.'
      ],
      bn: [
        'অনুমোদিত পুর নকশা দেখুন; ছাদ ও পার্কিং কখনোই আলাদা ফ্ল্যাট বা ইউনিট হিসেবে বিক্রি করা যায় না।',
        'কমন স্পেসে বহিরাগতদের অনধিকার দখলের বিরুদ্ধে আবাসন সমিতিতে সর্বসম্মত প্রস্তাব নিন।',
        'বিল্ডারের করা পৃথক পার্কিং বা ছাদের দলিল বাতিলের দাবিতে রেরা ট্রাইব্যুনালে মামলা করুন।',
        'রেরা রায় দেবে যে ছাদ ও পার্কিং সমস্ত ফ্ল্যাট মালিকদের যৌথ সম্পত্তি এবং হস্তান্তর অযোগ্য।'
      ],
      hi: [
        'स्वीकृत नक्शा जांचें; खुली छत एवं स्टिल्ट पार्किंग को स्वतंत्र रूप से नहीं बेचा जा सकता।',
        'कॉमन एरिया में बाहरी व्यक्तियों के कब्जे के विरुद्ध सोसाइटी में प्रस्ताव पारित करें।',
        'बिल्डर द्वारा की गई पार्किंग व छत की अलग रजिस्ट्रियों को रद्द कराने हेतु रेरा में वाद दें।',
        'रेरा फैसला देगा कि सभी कॉमन एरिया पंजीकृत अपार्टमेंट एसोसिएशन की सामूहिक संपत्ति हैं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-41-1',
        name: { en: 'Sanctioned Municipal Common Area Floor Plan', bn: 'অনুমোদিত পুর নকশায় কমন এরিয়ার বিবরণ', hi: 'नगर निगम स्वीकृत कॉमन एरिया फ्लोर प्लान' },
        issuing_authority: { en: 'Kolkata Municipal Corporation (KMC) / Municipality', bn: 'পৌরসভা', hi: 'नगर निगम' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-42',
    title: {
      en: 'Arbitrary Gym & Salon Multi-Year Membership Lock-ins',
      bn: 'জিম ও সেলুনের বার্ষিক সাবস্ক্রিপশন ফেরত দিতে অস্বীকার',
      hi: 'जिम एवं ब्यूटी सैलून द्वारा अग्रिम सदस्यता फीस जब्ती'
    },
    relevant_act: 'CPA, 2019 (Unfair Contract Terms, Sec 2(46))',
    summary: {
      en: 'Securing pro-rata subscription refunds when gyms close branches, change trainers, or fail to provide promised facilities.',
      bn: 'জিমের এসি বা ট্রেনার না থাকলে অথবা শাখা বন্ধ করে দিলে অগ্রিম বার্ষিক মেম্বারশিপের টাকা ফেরত আদায়।',
      hi: 'जिम बंद होने या सुविधाएं न मिलने पर "नो रिफंड" की अवैध शर्त को निरस्त कराकर फीस वापस लेना।'
    },
    authority_forum: {
      en: 'National Consumer Helpline (1915) / DCDRC',
      bn: 'জাতীয় উপভোক্তা হেল্পলাইন (১৯১৫) / ক্রেতা আদালত',
      hi: 'राष्ट्रीय उपभोक्ता हेल्पलाइन / उपभोक्ता फोरम'
    },
    forum_type: 'Consumer_DCDRC',
    is_complex: false,
    official_portal_url: 'https://consumerhelpline.gov.in/',
    statutory_timeframe: {
      en: '15 to 30 days',
      bn: '১৫ থেকে ৩০ দিন',
      hi: '15 से 30 दिन'
    },
    search_keywords: {
      en: ['gym membership refund', 'salon package refund consumer court', 'unfair contract terms gym'],
      bn: ['জিম ফি ফেরত', 'সেলুন প্যাকেজ রিফান্ড', 'অগ্রিম মেম্বারশিপ ফেরত'],
      hi: ['जिम फीस रिफंड', 'सैलून पैकेज वापसी', 'अनुचित अनुबंध जिम']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Save original membership agreements, payment receipts, and promotional lists of amenities.',
        'Document facility deficiencies: broken equipment, absent trainers, or unannounced branch relocations.',
        'Submit formal written refund request for remaining unutilized subscription period.',
        'File complaint on e-Jagriti; consumer forums routinely void "non-refundable" clauses as unfair.'
      ],
      bn: [
        'মেম্বারশিপ ফর্ম, জিএসটি রসিদ ও বিজ্ঞাপনে প্রতিশ্রুত শরীরচর্চার সুবিধার তালিকা রাখুন।',
        'ভাঙা যন্ত্রপাতি, এসি বিকল বা ট্রেনার না থাকার ছবি তুলে গাফিলতির প্রমাণ প্রস্তুত করুন।',
        'বাকি মেয়াদের টাকা ফেরতের লিখিত আবেদন জানিয়ে ম্যানেজমেন্টকে চিঠি দিন।',
        'ই-জাগৃতি আদালতে মামলা করুন; আদালত অফেরতযোগ্য মেম্বারশিপের শর্ত বাতিল করে টাকা ফেরত দেয়।'
      ],
      hi: [
        'सदस्यता रसीद, भुगतान साक्ष्य एवं विज्ञापनों में किए गए वादों की प्रतियां संभालें।',
        'उपकरणों की खराबी, एसी बंद रहने अथवा ट्रेनर न होने के फोटो व वीडियो प्रमाण लें।',
        'बचे हुए महीनों की आनुपातिक फीस लौटाने का औपचारिक मांग पत्र प्रबंधक को दें।',
        'ई-जागृति पर वाद दायर करें; उपभोक्ता अदालतें "नो-रिफंड" की शर्त को अवैध मानकर पैसा दिलाती हैं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-42-1',
        name: { en: 'Membership Invoice & Written Refund Rejection', bn: 'মেম্বারশিপের বিল ও টাকা না দেওয়ার চিঠি', hi: 'सदस्यता बिल एवं रिफंड अस्वीकृति पत्र' },
        issuing_authority: { en: 'Gym / Salon Management', bn: 'জিম কর্তৃপক্ষ', hi: 'जिम प्रबंधन' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-43',
    title: {
      en: 'International Package Tour Operators Stranding Tourists',
      bn: 'ট্যুর অপারেটরদের মিথ্যা প্রতিশ্রুতি ও বিদেশে পর্যটক হয়রানি',
      hi: 'टूर ऑपरेटर द्वारा विदेश में पर्यटकों को छोड़ना एवं होटल डाउनग्रेड'
    },
    relevant_act: 'Consumer Protection Act, 2019 (Deficiency in Service)',
    summary: {
      en: 'Suing travel agencies for itinerary downgrades, missed flights, and substandard hotel accommodation abroad.',
      bn: 'বিদেশে বেড়াতে গিয়ে ৪-স্টার হোটেলের বদলে লজে রাখা বা সাইটসিন না দেখানোর বিরুদ্ধে ক্ষতিপূরণ আদায়।',
      hi: 'विदेश यात्रा में 4-स्टार के बजाय घटिया होटल देने या यात्रा अधूरी छोड़ने पर ट्रैवल एजेंसी पर वाद।'
    },
    authority_forum: {
      en: 'State Consumer Commission (SCDRC) / DCDRC',
      bn: 'রাজ্য / জেলা ক্রেতা সুরক্ষা আদালত',
      hi: 'राज्य / जिला उपभोक्ता आयोग'
    },
    forum_type: 'Consumer_DCDRC',
    is_complex: true,
    official_portal_url: 'https://e-jagriti.gov.in/',
    statutory_timeframe: {
      en: '60 to 90 working days',
      bn: '৬০ থেকে ৯০ কার্যদিবস',
      hi: '60 থেকে 90 कार्यदिवस'
    },
    search_keywords: {
      en: ['package tour fraud', 'travel agency cheating consumer court', 'international tour downgrade refund'],
      bn: ['ট্যুর ট্রাভেলস প্রতারণা', 'বিদেশে পর্যটক হয়রানি', 'প্যাকেজ ট্যুর মামলা'],
      hi: ['टूर पैकेज धोखाधड़ी', 'ट्रैवल एजेंसी पर केस', 'विदेश यात्रा हर्जाना']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Preserve original signed tour itinerary, hotel vouchers, and extra receipts paid abroad.',
        'Take photographs and videos showing substandard hotel rooms or lack of guided transport.',
        'Serve statutory legal notice on travel operator demanding expense reimbursements.',
        'File consumer complaint on e-Jagriti claiming refund of tour margins, expenses, and damages.'
      ],
      bn: [
        'ট্যুরের প্রতিশ্রুত আইটিনারারি, হোটেলের ভাউচার ও বিদেশে নিজে বাধ্য হয়ে করা খরচের বিল রাখুন।',
        'খারাপ হোটেলের ঘর ও গাড়ি না পাওয়ার ছবি ও ভিডিও প্রমাণ হিসেবে সংগ্রহ করুন।',
        'অতিরিক্ত সমস্ত খরচ ফেরত ও মানসিক হয়রানির ক্ষতিপূরণ চেয়ে এজেন্সিকে নোটিশ দিন।',
        'ই-জাগৃতি আদালতে মামলা দায়ের করে ট্যুরের টাকা ফেরত ও মোটা অঙ্কের ক্ষতিপূরণ আদায় করুন।'
      ],
      hi: [
        'स्वीकृत यात्रा कार्यक्रम (इटिनरेरी), होटल वाउचर एवं विदेश में खुद किए गए खर्च के बिल रखें।',
        'घटिया होटल कमरों एवं परिवहन न मिलने के फोटो व वीडियो साक्ष्य तैयार करें।',
        'ट्रैवल एजेंसी को समस्त अतिरिक्त खर्च लौटाने एवं मानसिक पीड़ा का कानूनी नोटिस दें।',
        'ई-जागृति पर उपभोक्ता परिवाद दाखिल कर पैकेज शुल्क वापसी एवं भारी हर्जाना वसूलें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-43-1',
        name: { en: 'Signed Tour Package Contract & Out-of-Pocket Expense Bills', bn: 'ট্যুর প্যাকেজ চুক্তি ও অতিরিক্ত ব্যয়ের বিল', hi: 'हस्ताक्षरित टूर पैकेज अनुबंध एवं जेब से हुए खर्च के बिल' },
        issuing_authority: { en: 'Tour Operator / Overseas Hotels', bn: 'ট্যুর এজেন্সি', hi: 'ट्रैवल ऑपरेटर' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-44',
    title: {
      en: 'Refusal of Warranty for Lack of Paper Bill Despite Digital SMS',
      bn: 'কাগজের রসিদ না থাকায় ডিজিটাল ইনভয়েসে ওয়ারেন্টি অস্বীকার',
      hi: 'कागजी बिल न होने पर एसएमएस/ईमेल इनवॉयस पर वारंटी देने से इनकार'
    },
    relevant_act: 'Consumer Protection (E-Commerce) Rules & IT Act Sec 4',
    summary: {
      en: 'Compelling electronics companies to honor manufacturer warranties based on verified digital invoices, SMS, or serial numbers.',
      bn: 'কাগজের বিল হারিয়ে গেলেও ডিজিটাল ট্যাক্স ইনভয়েস বা এসএমেসের ভিত্তিতে গ্যাজেটের ওয়ারেন্টি লাভের নিয়ম।',
      hi: 'कागजी पर्ची खो जाने पर भी डिजिटल इनवॉयस, एसएमएस या सीरियल नंबर के आधार पर वारंटी सेवा पाना।'
    },
    authority_forum: {
      en: 'District Consumer Commission (DCDRC)',
      bn: 'জেলা ক্রেতা সুরক্ষা আদালত (DCDRC)',
      hi: 'जिला उपभोक्ता आयोग'
    },
    forum_type: 'Consumer_DCDRC',
    is_complex: false,
    official_portal_url: 'https://e-jagriti.gov.in/',
    statutory_timeframe: {
      en: '30 working days',
      bn: '৩০ কার্যদিবস',
      hi: '30 कार्यदिवস'
    },
    search_keywords: {
      en: ['warranty on digital invoice', 'section 4 it act bill proof', 'refusal of warranty without paper bill'],
      bn: ['ডিজিটাল বিলে ওয়ারেন্টি', 'কাগজের রসিদ ছাড়া সার্ভিসিং', 'আইটি অ্যাক্ট ধারা ৪ বিল'],
      hi: ['डिजिटल बिल पर वारंटी', 'बिना कागजी बिल सर्विसिंग', 'आईटी एक्ट इलेक्ट्रॉनिक बिल']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Retrieve digital tax invoice, order confirmation email, or brand registration SMS.',
        'Submit gadget to authorized service center; if rejected, demand a written rejection slip.',
        'File complaint on National Consumer Helpline citing Section 4 of IT Act (electronic record validity).',
        'If service is denied, move DCDRC for order directing free replacement and damages.'
      ],
      bn: [
        'ইমেল ইনভয়েস, কেনাকাটার এসএমএস বা কোম্পানির অনলাইন প্রোডাক্ট রেজিস্ট্রেশন প্রিন্ট করুন।',
        'সার্ভিস সেন্টারে গ্যাজেট জমা দিন; কাগজের বিল না থাকার অজুহাতে ফেরালে লিখিত রিজেকশন নিন।',
        'আইটি আইনের ধারা ৪ (ডিজিটাল নথির সমমর্যাদা) উল্লেখ করে জাতীয় উপভোক্তা হেল্পলাইনে জানান।',
        'ক্রেতা আদালতে মামলা করে নিখরচায় নতুন যন্ত্র প্রতিস্থাপন ও ক্ষতিপূরণের আদেশ নিন।'
      ],
      hi: [
        'ईमेल इनवॉयस, ऑर्डर कन्फर्मेशन एसएमएस अथवा ऑनलाइन वारंटी पंजीकरण का प्रिंट लें।',
        'सर्विस सेंटर में उपकरण जमा करें; मना करने पर लिखित अस्वीकृति रसीद मांगें।',
        'आईटी एक्ट की धारा 4 (इलेक्ट्रॉनिक रिकॉर्ड की मान्यता) का हवाला देकर 1915 पर शिकायत दें।',
        'उपभोक्ता फोरम से आदेश कराकर मुफ्त में नया उपकरण एवं सेवा में देरी का हर्जाना प्राप्त करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-44-1',
        name: { en: 'Digital PDF Tax Invoice / Brand Verification SMS', bn: 'ডিজিটাল পিডিএফ ইনভয়েস বা কোম্পানির এসএমএস', hi: 'डिजिटल पीडीएफ इनवॉयस / कंपनी का पुष्टिकरण एसएमएस' },
        issuing_authority: { en: 'E-Commerce Marketplace / Retailer', bn: 'বিক্রেতা', hi: 'विक्रेता / ई-कॉमर्स' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-45',
    title: {
      en: 'Matrimonial Apps & Fraudulent Profile Matchmaking Scams',
      bn: 'ম্যাট্রিমোনিয়াল সাইটে ভুয়ো প্রোফাইল ও প্রতারণামূলক সাবস্ক্রিপশন',
      hi: 'मैट्रिमोनियल साइटों पर फर्जी प्रोफाइल एवं सब्सक्रिप्शन धोखाधड़ी'
    },
    relevant_act: 'IT Act, 2000 r/w Section 35, CPA, 2019',
    summary: {
      en: 'Suing matchmaking platforms for failing to conduct basic KYC, enabling romance scammers, and refusing fee refunds.',
      bn: 'ম্যাট্রিমোনিয়াল অ্যাপে ভুয়ো প্রোফাইল সাজিয়ে টাকা হাতিয়ে নেওয়া রোমান্স স্ক্যাম ও মেম্বারশিপ ফি রিফান্ড।',
      hi: 'विवाह वेबसाइटों द्वारा बिना सत्यापन फर्जी प्रोफाइल बनाकर प्रीमियम फीस ठगने के विरुद्ध कार्रवाई।'
    },
    authority_forum: {
      en: 'Cyber Crime Police (1930) / District Consumer Commission',
      bn: 'সাইবার ক্রাইম পুলিশ (১৯৩০) / জেলা ক্রেতা আদালত',
      hi: 'साइबर पुलिस (1930) / जिला उपभोक्ता आयोग'
    },
    forum_type: 'Cyber_Cell',
    is_complex: false,
    official_portal_url: 'https://cybercrime.gov.in/',
    statutory_timeframe: {
      en: 'Immediate cyber action; 60 days consumer disposal',
      bn: 'তাৎক্ষণিক সাইবার পদক্ষেপ; ৬০ দিনে ক্রেতা আদালত',
      hi: 'त्वरित साइबर कार्रवाई; 60 दिन में उपभोक्ता फैसला'
    },
    search_keywords: {
      en: ['matrimonial app fraud refund', 'fake profile shaadi bharatmatrimony', 'romance scam consumer case'],
      bn: ['ম্যাট্রিমোনিয়াল সাইট প্রতারণা', 'ভুয়ো বিয়ের প্রোফাইল', 'সাইবার ক্রাইম ১৯৩০'],
      hi: ['मैट्रिमोनियल फ्रॉड रिफंड', 'फर्जी शादी प्रोफाइल', 'रोमांस स्कैम साइबर पुलिस']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Preserve screenshots of fraudulent profile, membership payment invoices, and all chat records.',
        'File emergency complaint on National Cyber Crime Reporting Portal (https://cybercrime.gov.in) or 1930.',
        'Serve legal notice on platform Grievance Officer for failure of due diligence under Intermediary Rules.',
        'File complaint before DCDRC for full refund of premium charges and mental harassment damages.'
      ],
      bn: [
        'ভুয়ো প্রোফাইলের স্ক্রিনশট, মেম্বারশিপের বিল ও আর্থিক লেনদেনের চ্যাট হিস্ট্রি গুছিয়ে রাখুন।',
        'জাতীয় সাইবার ক্রাইম পোর্টাল (cybercrime.gov.in) বা টোল-ফ্রি ১৯৩০ নম্বরে এফআইআর করুন।',
        'আইটি রুলস অনুযায়ী প্রোফাইল যাচাইয়ে অবহেলার দায়ে প্ল্যাটফর্মের গ্রিভেন্স অফিসারকে নোটিশ দিন।',
        'জেলা ক্রেতা আদালতে মামলা দায়ের করে মেম্বারশিপের সম্পূর্ণ টাকা ফেরত ও ক্ষতিপূরণ আদায় করুন।'
      ],
      hi: [
        'फर्जी प्रोफाइल के स्क्रीनशॉट, प्रीमियम मेंबरशिप बिल एवं बातचीत के सभी चैट सुरक्षित करें।',
        'राष्ट्रीय साइबर क्राइम पोर्टल अथवा 1930 पर तुरंत वित्तीय धोखाधड़ी की शिकायत दर्ज कराएं।',
        'आईटी नियमों के तहत अनिवार्य सत्यापन न करने पर कंपनी के शिकायत अधिकारी को विधिक नोटिस दें।',
        'उपभोक्ता फोरम में वाद कर सदस्यता शुल्क की पूरी वापसी एवं मानसिक उत्पीड़न का हर्जाना लें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-45-1',
        name: { en: 'Matrimonial Subscription Invoice & Cyber Crime FIR Slip', bn: 'মেম্বারশিপের বিল ও সাইবার পুলিশ এফআইআর রসিদ', hi: 'सदस्यता इनवॉयस एवं साइबर क्राइम शिकायत पावती' },
        issuing_authority: { en: 'Matrimonial Platform / Cyber Police', bn: 'ম্যাট্রিমোনিয়াল সংস্থা / পুলিশ', hi: 'मैट्रिमोनियल पोर्टल / पुलिस' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-46',
    title: {
      en: 'Cloud Storage Outages & Critical Data Loss for Small Firms',
      bn: 'ক্লাউড হোস্টিং ডাউনটাইম ও ডাটা হারানোর বাণিজ্যিক ক্ষতিপূরণ',
      hi: 'क्लाउड होस्टिंग ठप होने एवं डेटा नष्ट होने पर व्यावसायिक क्षतिपूर्ति'
    },
    relevant_act: 'IT Act r/w Consumer Protection Act (Commercial Defect)',
    summary: {
      en: 'Pursuing damages against cloud hosting providers that breach 99.9% uptime SLAs and lose business databases.',
      bn: 'সার্ভার ডাউন হয়ে ওয়েবসাইটের ডেটাবেস নষ্ট হলে এবং ব্যাকআপ না দিলে ক্লাউড কোম্পানির বিরুদ্ধে ক্ষতিপূরণ মামলা।',
      hi: 'क्लाउड सर्वर क्रैश होने से व्यापारिक डेटा उड़ने पर होस्टिंग कंपनी से नुकसान की भरपाई पाना।'
    },
    authority_forum: {
      en: 'Adjudicating Officer (IT Act) / Commercial Civil Court',
      bn: 'আইটি সেক্রেটারি বিচারক আধিকারিক / বাণিজ্যিক আদালত',
      hi: 'आईटी न्यायनिर्णायक अधिकारी / वाणिज्यिक न्यायालय'
    },
    forum_type: 'Commercial_Court',
    is_complex: true,
    official_portal_url: 'https://e-jagriti.gov.in/',
    statutory_timeframe: {
      en: '3 to 6 months',
      bn: '৩ থেকে ৬ মাস',
      hi: '3 से 6 माह'
    },
    search_keywords: {
      en: ['cloud hosting data loss compensation', 'sla breach server downtime', 'web host negligence lawsuit'],
      bn: ['ক্লাউড সার্ভার ক্ষতিপূরণ', 'ওয়েবসাইট ডাটা নষ্ট', 'হোস্টিং এসএলএ চুক্তিভঙ্গ'],
      hi: ['क्लाउड सर्वर डेटा लॉस', 'होस्टिंग डाउनटाइम हर्जाना', 'एसएलए उल्लंघन मुकदमा']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Document server downtime logs, error monitoring screenshots, and all support tickets raised.',
        'Quantify direct financial losses: lost client orders, payroll disruption, and third-party recovery bills.',
        'Serve formal dispute notice citing breach of contractual uptime guarantees (99.9% availability).',
        'File petition before State IT Secretary Adjudicating Officer or Commercial Court for compensation.'
      ],
      bn: [
        'সার্ভার ডাউন থাকার এরর লগ, সাইট মনিটরিং রিপোর্ট ও কাস্টমার সাপোর্ট টিকিটের কপি রাখুন।',
        'ব্যবসায়িক ক্ষতি নিরূপণ করুন: বাতিল হওয়া অর্ডার, কর্মীদের বেতন অপচয় ও ডেটা রিকভারি খরচ।',
        'চুক্তির ৯৯.৯% আপটাইম গ্যারান্টি ভঙ্গের কারণ দেখিয়ে হোস্টিং কোম্পানিকে আইনি নোটিশ দিন।',
        'রাজ্য তথ্যপ্রযুক্তি সচিবের ট্রাইব্যুনালে অথবা বাণিজ্যিক আদালতে ক্ষতিপূরণের মামলা দায়ের করুন।'
      ],
      hi: [
        'सर्वर डाउनटाइम लॉग, एरर मॉनिटरिंग रिपोर्ट एवं सपोर्ट टिकटों का तकनीकी रिकॉर्ड जुटाएं।',
        'व्यापारिक नुकसान का आकलन करें: रद्द हुए ऑर्डर, डेटा रिकवरी लागत एवं कर्मचारियों का वेतन।',
        'अनुबंध में दी गई 99.9% अपटाइम गारंटी के उल्लंघन का विधिक नोटिस होस्टिंग कंपनी को दें।',
        'राज्य आईटी सचिव (न्यायनिर्णायक अधिकारी) अथवा वाणिज्यिक अदालत में हर्जाने का वाद करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-46-1',
        name: { en: 'Cloud Hosting SLA Agreement & Third-Party Downtime Logs', bn: 'হোস্টিং এসএলএ চুক্তি ও সার্ভার ডাউনটাইম লগ', hi: 'क्लाउड होस्टिंग एसएलए अनुबंध एवं डाउनटाइम लॉग' },
        issuing_authority: { en: 'Hosting Provider / Uptime Monitoring Service', bn: 'ক্লাউড সংস্থা', hi: 'क्लाउड प्रदाता' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-47',
    title: {
      en: 'Credit Card Fraud & Denial of Zero-Liability Protection',
      bn: 'ক্রেডিট কার্ড জালিয়াতি ও ব্যাংকের জিরো-লায়াবিলিটি অস্বীকার',
      hi: 'क्रेडिट कार्ड फ्रॉड एवं बैंक द्वारा जीरो-लायबिलिटी लाभ देने से इनकार'
    },
    relevant_act: 'RBI Limiting Liability Circular on Electronic Transactions',
    summary: {
      en: 'Enforcing zero customer liability where unauthorized credit card charges occurred through cloning or hacking without user fault.',
      bn: 'কার্ড ক্লোনিং বা হ্যাকিংয়ে টাকা চুরি হলে ৩ দিনের মধ্যে জানালে গ্রাহকের শূন্য দায় (Zero Liability) নিশ্চিতকরণ।',
      hi: 'क्लोनिंग या हैकिंग से क्रेडिट कार्ड से हुए फर्जी लेनदेन पर 72 घंटे में सूचना देकर शून्य देनदारी पाना।'
    },
    authority_forum: {
      en: 'RBI Banking Ombudsman (CMS Portal) / DCDRC',
      bn: 'আরবিআই ব্যাঙ্কিং ন্যায়পাল / ক্রেতা আদালত',
      hi: 'आरबीआई बैंकिंग लोकपाल / उपभोक्ता आयोग'
    },
    forum_type: 'Competent_Authority',
    is_complex: false,
    official_portal_url: 'https://cms.rbi.org.in/',
    statutory_timeframe: {
      en: 'Report in 3 days; 30 days Ombudsman disposal',
      bn: '৩ দিনে রিপোর্ট; ৩০ দিনে ন্যায়পাল নিষ্পত্তি',
      hi: '3 দিন মেं सूचना; 30 দিন মেं लोकपाल फैसला'
    },
    search_keywords: {
      en: ['credit card fraud zero liability', 'unauthorized credit card transaction rbi', 'banking ombudsman card fraud'],
      bn: ['ক্রেডিট কার্ড ফ্রড', 'জিরো লায়াবিলিটি ক্রেডিট কার্ড', 'ব্যাঙ্কিং ন্যায়পাল কার্ড চুরি'],
      hi: ['क्रेडिट कार्ड फ्रॉड रिफंड', 'जीरो लायबिलिटी आरबीआई', 'क्रेडिट कार्ड लोकपाल']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Block credit card immediately via mobile app and lodge emergency fraud dispute within 72 hours.',
        'File online cyber complaint on National Cyber Crime Portal and secure acknowledgment.',
        'If bank insists on payment and levies interest, submit formal dispute citing RBI Zero-Liability Mandate.',
        'Escalate to RBI Ombudsman; banks cannot hold customers liable for breaches reported in 3 days.'
      ],
      bn: [
        'অ্যাপের মাধ্যমে কার্ড সঙ্গে সঙ্গে ব্লক করুন এবং ৭২ ঘণ্টার মধ্যে ব্যাঙ্কের ফ্রড সেলে নালিশ জানান।',
        'জাতীয় সাইবার ক্রাইম পোর্টালে অনলাইন ডায়েরি করে পুলিশ একনলেজমেন্ট স্লিপ সংগ্রহ করুন।',
        'ব্যাঙ্ক টাকা দাবি করলে বা সুদ চাপালে আরবিআই-এর জিরো লায়াবিলিটি নির্দেশিকা তুলে ধরুন।',
        'আরবিআই ওম্বুডসম্যান পোর্টালে নালিশ করে সমস্ত বেআইনি চার্জ ও সুদ সম্পূর্ণ মকুব করান।'
      ],
      hi: [
        'मोबाइल ऐप से कार्ड तुरंत ब्लॉक करें एवं 72 घंटे के भीतर बैंक के फ्रॉड डेस्क पर विवाद दर्ज कराएं।',
        'राष्ट्रीय साइबर क्राइम पोर्टल पर ऑनलाइन रिपोर्ट कर आधिकारिक पावती रसीद प्राप्त करें।',
        'बैंक द्वारा बिल भरने का दबाव बनाने पर आरबीआई जीरो-लायबिलिटी सर्कुलर का औपचारिक पत्र दें।',
        'आरबीआई लोकपाल में शिकायत करें; 3 दिन में सूचित करने पर बैंक ग्राहक से पैसा नहीं वसूल सकता।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-47-1',
        name: { en: 'Card Dispute Form & Cyber Crime Acknowledgment Slip', bn: 'ব্যাঙ্ক ডিসপিউট ফর্ম ও সাইবার নালিশ রসিদ', hi: 'बैंक विवाद फॉर्म एवं साइबर क्राइम पावती रसीद' },
        issuing_authority: { en: 'Card Issuing Bank / Cyber Police', bn: 'ব্যাঙ্ক / পুলিশ', hi: 'बैंक / साइबर पुलिस' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-48',
    title: {
      en: 'Severe Medical Malpractice: Wrong Surgery & Foreign Object Left Inside',
      bn: 'চিকিৎসায় চরম গাফিলতি: ভুল অঙ্গ অপারেশন ও পেটে গজ ফেলে রাখা',
      hi: 'गंभीर चिकित्सकीय लापरवाही: गलत अंग का ऑपरेशन एवं पेट में सर्जिकल पट्टी छोड़ना'
    },
    relevant_act: 'CPA, 2019 r/w Jacob Mathew (SC) & Res Ipsa Loquitur',
    summary: {
      en: 'Applying the doctrine of res ipsa loquitur to secure multi-lakh compensation against hospitals for severe surgical negligence.',
      bn: 'অপারেশনের সময় রোগীর পেটে কাঁচি বা গজ ফেলে রাখা কিংবা ভুল অঙ্গ বাদ দেওয়ার বিরুদ্ধে দৃষ্টান্তমূলক ক্ষতিপূরণ।',
      hi: 'ऑपरेशन के दौरान पेट में स्पंज छोड़ देने या गलत अंग काट देने पर अस्पताल से भारी हर्जाना पाना।'
    },
    authority_forum: {
      en: 'State Consumer Commission (SCDRC) / WBCERC, Kolkata',
      bn: 'রাজ্য ক্রেতা সুরক্ষা কমিশন (SCDRC) / স্বাস্থ্য কমিশন',
      hi: 'राज्य उपभोक्ता आयोग (SCDRC) / स्वास्थ्य आयोग'
    },
    forum_type: 'WBCERC',
    is_complex: true,
    official_portal_url: 'https://wbcerc.gov.in/',
    statutory_timeframe: {
      en: '6 months to 1 year',
      bn: '৬ মাস থেকে ১ বছর',
      hi: '6 माह से 1 वर्ष'
    },
    search_keywords: {
      en: ['foreign object left inside surgery', 'res ipsa loquitur medical negligence', 'wbcerc medical malpractice'],
      bn: ['পেটে গজ ফেলে রাখা', 'ভুল অপারেশন ক্ষতিপূরণ', 'চিকিৎসা গাফিলতি মামলা'],
      hi: ['पेट में पट्टी छूटना हर्जाना', 'गलत सर्जरी उपभोक्ता फोरम', 'चिकित्सा लापरवाही मुआवजा']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Secure certified clinical charts, operative notes, and discovery X-ray/CT scan films.',
        'Lodge emergency complaint before West Bengal Clinical Establishments Commission (WBCERC).',
        'File complaint with State Medical Council for inquiry into surgeon’s medical license.',
        'Institute high-value claim before SCDRC or NCDRC claiming full expense refund and lifetime disability relief.'
      ],
      bn: [
        'অপারেশন নোট, অ্যানাস্থেসিয়া চার্ট এবং পরবর্তীতে পেটে গজ বা যন্ত্র ধরা পড়ার সিটি স্ক্যান প্লেট নিন।',
        'কলকাতার ওয়েস্ট বেঙ্গল ক্লিনিক্যাল এস্টাব্লিশমেন্ট রেগুলেটরি কমিশনে (WBCERC) নালিশ জানান।',
        'চিকিৎসকের লাইসেন্স পর্যালোচনার জন্য ওয়েস্ট বেঙ্গল মেডিক্যাল কাউন্সিলে অভিযোগ দাখিল করুন।',
        'রাজ্য বা জাতীয় ক্রেতা আদালতে মামলা করে বিনামূল্যে রি-অপারেশন ও ৫০ লক্ষাধিক ক্ষতিপূরণ পান।'
      ],
      hi: [
        'ऑपरेशन नोट्स, एनेस्थीसिया रिकॉर्ड एवं बाद में पेट में कपड़ा दिखने वाले सीटी स्कैन प्लेट लें।',
        'पश्चिम बंगाल क्लीनिकल एस्टेब्लिशमेंट कमीशन (WBCERC) में तत्काल औपचारिक परिवाद दें।',
        'सर्जन का मेडिकल लाइसेंस निलंबित करने हेतु स्टेट मेडिकल काउंसिल में शिकायत दर्ज कराएं।',
        'उपभोक्ता आयोग में वाद दायर कर इलाज का पूरा खर्च एवं आजीवन अपंगता का भारी हर्जाना लें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-48-1',
        name: { en: 'Operation Notes, CT Scan Films & Corrective Surgery Records', bn: 'অপারেশন নোট, সিটি স্ক্যান ফিল্ম ও দ্বিতীয় অপারেশনের বিল', hi: 'ऑपरेशन नोट्स, सीटी स्कैन फिल्म एवं सुधारात्मक सर्जरी रिकॉर्ड' },
        issuing_authority: { en: 'Government / Private Hospital', bn: 'হাসপাতাল', hi: 'अस्पताल' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-49',
    title: {
      en: 'De-Registration of Defaulting RERA Project & Escrow Seizure',
      bn: 'ফেল মারা প্রজেক্টের রেরা রেজিস্ট্রেশন বাতিল ও কাজ সম্পন্নকরণ',
      hi: 'डिफॉल्टर प्रोजेक्ट का रेरा पंजीकरण रद्द करना एवं एस्क्रो खाता जब्ती'
    },
    relevant_act: 'Sec 7 & 8, Real Estate (Regulation & Dev) Act, 2016',
    summary: {
      en: 'Revoking promoter registration on abandoned projects, freezing 70% escrow accounts, and authorizing buyers association to complete construction.',
      bn: 'প্রমোটার কাজ ফেলে পালালে রেরা রেজিস্ট্রেশন বাতিল, ব্যাঙ্ক অ্যাকাউন্ট বাজেয়াপ্ত এবং ক্রেতাদের দিয়ে বাড়ি তৈরির প্রক্রিয়া।',
      hi: 'काम अधूरा छोड़कर भागने वाले बिल्डर का प्रोजेक्ट सील कर खरीदारों की सोसाइटी को निर्माण पूरा कराने का अधिकार देना।'
    },
    authority_forum: {
      en: 'West Bengal RERA Authority',
      bn: 'পশ্চিমবঙ্গ রেরা কর্তৃপক্ষ',
      hi: 'पश्चिम बंगाल रेरा प्राधिकरण'
    },
    forum_type: 'WBRERA',
    is_complex: true,
    official_portal_url: 'https://rera.wb.gov.in/',
    statutory_timeframe: {
      en: '60 to 90 working days',
      bn: '৬০ থেকে ৯০ কার্যদিবস',
      hi: '60 থেকে 90 कार्यदिवस'
    },
    search_keywords: {
      en: ['section 7 rera revocation', 'section 8 project takeover buyers', 'stalled project rera escrow'],
      bn: ['রেরা রেজিস্ট্রেশন বাতিল', 'ফ্ল্যাট মালিকদের প্রজেক্ট টেকওভার', 'আটকে থাকা প্রজেক্ট রেরা'],
      hi: ['रेरा प्रोजेक्ट निरस्तीकरण', 'धारा 8 प्रोजेक्ट अधिग्रहण', 'फंसे प्रोजेक्ट का समाधान']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Allottees Association passes special resolution showing promoter abandoned construction for 1+ year.',
        'Submit application before WBRERA Authority praying for project de-registration under Section 7.',
        'WBRERA freezes project 70% designated RERA escrow bank accounts.',
        'Authority invokes Section 8, assigning development rights to buyers association to finish flats.'
      ],
      bn: [
        'সমিতির সভায় প্রমাণসহ প্রস্তাব নিন যে প্রমোটার ১ বছরের বেশি সময় কোনো কাজ না করে পালিয়েছে।',
        'রেরা আইনের ধারা ৭ অনুযায়ী প্রজেক্টের সরকারি রেজিস্ট্রেশন বাতিলের আবেদন পেশ করুন।',
        'রেরা অবিলম্বে প্রজেক্টের ৭০% এস্ক্রো ব্যাঙ্ক অ্যাকাউন্ট ফ্রিজ করে টাকা নিরাপদ করবে।',
        'ধারা ৮ অনুযায়ী ক্রেতাদের সমিতিকে প্রজেক্ট পরিচালনার দায়িত্ব দিয়ে নতুন ঠিকাদার দিয়ে কাজ শেষ করাবে।'
      ],
      hi: [
        'एसोसिएशन की बैठक में प्रस्ताव पारित करें कि बिल्डर 1 साल से काम बंद कर फरार है।',
        'धारा 7 के तहत WBRERA में प्रोजेक्ट का पंजीकरण रद्द करने की याचिका दाखिल करें।',
        'रेरा तुरंत प्रोजेक्ट के 70% एस्क्रो बैंक खाते को सील कर राशि सुरक्षित करेगा।',
        'प्राधिकरण धारा 8 लागू कर खरीदारों की सोसाइटी को नए ठेकेदार से काम पूरा कराने का अधिकार देगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-49-1',
        name: { en: 'Site Photography Audit & Association Takeover Resolution', bn: 'সাইট নিরীক্ষা রিপোর্ট ও সমিতির দায়িত্ব নেওয়ার প্রস্তাব', hi: 'अधूरे निर्माण की ऑडिट रिपोर्ट एवं सोसाइटी अधिग्रहण प्रस्ताव' },
        issuing_authority: { en: 'Apartment Association / Chartered Engineer', bn: 'ফ্ল্যাট মালিক সমিতি', hi: 'अपार्टमेंट एसोसिएशन' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-50',
    title: {
      en: 'Allottees Association Class Action Complaint Before State Commission',
      bn: 'ফ্ল্যাট মালিক সংগঠনের যৌথ কনজিউমার মামলা',
      hi: 'फ्लैट खरीदार एसोसिएशन का राज्य उपभोक्ता आयोग में सामूहिक वर्ग वाद (Class Action)'
    },
    relevant_act: 'Sec 35(1)(c), Consumer Protection Act, 2019',
    summary: {
      en: 'Filing a unified class-action complaint representing 50+ flat buyers with common interest to avoid separate individual litigation.',
      bn: 'আলাদা আলাদা মামলা না করে ৫০ বা ততোধিক ফ্ল্যাট মালিকের পক্ষে সমিতির মাধ্যমে একটিমাত্র শক্তিশালী যৌথ ক্রেতা মামলা।',
      hi: 'अलग-अलग मुकदमे से बचकर 50 से अधिक खरीदारों की ओर से एसोसिएशन द्वारा एकल सामूहिक उपभोक्ता वाद।'
    },
    authority_forum: {
      en: 'State Consumer Disputes Redressal Commission (SCDRC, Kolkata)',
      bn: 'রাজ্য ক্রেতা সুরক্ষা কমিশন (কলকাতা বেঞ্চ)',
      hi: 'राज्य उपभोक्ता विवाद निवारण आयोग (कोलकाता)'
    },
    forum_type: 'Consumer_DCDRC',
    is_complex: true,
    official_portal_url: 'https://e-jagriti.gov.in/',
    statutory_timeframe: {
      en: '6 months to 1 year',
      bn: '৬ মাস থেকে ১ বছর',
      hi: '6 माह से 1 वर्ष'
    },
    search_keywords: {
      en: ['class action consumer suit', 'section 35 1 c cpa', 'allottees association scdrc kolkata'],
      bn: ['যৌথ ক্রেতা মামলা', 'ক্লাস অ্যাকশন কনজিউমার', 'ফ্ল্যাট ওনার্স যৌথ মামলা'],
      hi: ['सामूहिक उपभोक्ता वाद', 'क्लास एक्शन केस', 'एसोसिएशन सामूहिक परिवाद']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Pass executive committee resolution authorizing office bearers to represent all buyers in a unified docket.',
        'Prepare consolidated schedule of all member flat numbers, payment receipts, and default timelines.',
        'File Joint Complaint before SCDRC with application seeking leave to proceed as a Class Action.',
        'Secure collective judgment directing standardized delay interest or execution of common conveyance.'
      ],
      bn: [
        'সমিতির সভায় সকল সদস্যের পক্ষে যৌথভাবে আইনি লড়াই চালানোর আইনি রেজোলিউশন নিন।',
        'সমস্ত ফ্ল্যাট নম্বর, জমার রসিদ ও দেরির হিসাব সম্বলিত কনসোলিডেটেড শিডিউল প্রস্তুত করুন।',
        'ধারা ৩৫(১)(গ) অনুযায়ী ক্লাস অ্যাকশন মামলা হিসেবে গ্রহণের আবেদনসহ রাজ্য কমিশনে মামলা করুন।',
        'একক রায়ে সমস্ত সদস্যদের জন্য নির্ধারিত ক্ষতিপূরণ সুদ এবং রেজিস্ট্রি ডিড সম্পাদনের নির্দেশ পান।'
      ],
      hi: [
        'सोसाइटी की कार्यकारिणी में सभी खरीदारों की ओर से संयुक्त मुकदमा लड़ने का प्रस्ताव पारित करें।',
        'सभी सदस्यों के फ्लैट नंबर, जमा राशि एवं देरी के दिनों की संयुक्त तालिका तैयार करें।',
        'धारा 35(1)(c) के तहत क्लास एक्शन की अनुमति के साथ राज्य आयोग (SCDRC) में केस करें।',
        'एकल फैसले द्वारा सभी सदस्यों को एक समान ब्याज एवं रजिस्ट्री कराने का सामूहिक आदेश पाएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-50-1',
        name: { en: 'Class Action Special Resolution & Consolidated Member Schedule', bn: 'যৌথ মামলার বিশেষ প্রস্তাব ও সদস্য তালিকা', hi: 'क्लास एक्शन विशेष प्रस्ताव एवं सदस्यों की संयुक्त सूची' },
        issuing_authority: { en: 'Registered Buyers Association', bn: 'নিবন্ধিত ক্রেতা সংগঠন', hi: 'पंजीकृत खरीदार एसोसिएशन' },
        is_mandatory: true
      }
    ]
  }
];