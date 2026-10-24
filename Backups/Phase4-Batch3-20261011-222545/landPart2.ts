import type { CivilSubCategory } from '../../../types/legal';

export const landPart2: CivilSubCategory[] = [
  {
    id: 'sub-land-26',
    title: {
      en: 'Boundary Wall Erection Injunction & Neighbor Nuisance',
      bn: 'সীমানা প্রাচীর নির্মাণে বাধা ও দেওয়ানি প্রতিকার',
      hi: 'बाउंड्री वॉल निर्माण में बाधा एवं पड़ोसी द्वारा उपद्रव पर रोक'
    },
    relevant_act: 'Order XXXIX Rules 1 & 2 CPC r/w Sec 152 BNSS, 2023',
    summary: {
      en: 'Secure emergency court injunctions against hostile neighbors violently halting lawful boundary fencing in rural and urban areas.',
      bn: 'নিজের জমিতে পাঁচিল দেওয়ায় প্রতিবেশীর বাধা ও হামলার বিরুদ্ধে আদালতের জরুরি নিষেধাজ্ঞা।',
      hi: 'अपनी निजी भूमि पर बाउंड्री बनाने पर पड़ोसी द्वारा रोकने पर अदालत से त्वरित स्थगनादेश।'
    },
    authority_forum: {
      en: 'Civil Court (Junior Division) / City Civil Court Kolkata',
      bn: 'দেওয়ানি আদালত (জুনিয়র ডিভিশন) / সিটি সিভিল কোর্ট কলকাতা',
      hi: 'सिविल न्यायालय (जूनियर डिवीजन) / सिटी सिविल कोर्ट कोलकाता'
    },
    forum_type: 'Civil_Court',
    is_complex: false,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '7 to 15 days (Interim Stay)',
      bn: '৭ থেকে ১৫ দিন (অন্তর্বর্তী স্থগিতাদেশ)',
      hi: '7 से 15 दिन (अंतरिम आदेश)'
    },
    search_keywords: {
      en: ['boundary wall injunction', 'neighbor land obstruction', 'order 39 cpc boundary'],
      bn: ['পাঁচিল নির্মাণে বাধা', 'সীমানা বিরোধ ইনজাংশন', 'দেওয়াল তোলার অধিকার'],
      hi: ['बाउंड्री विवाद', 'दीवार निर्माण रोक', 'आदेश 39 सीपीसी सीमा']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Lodge a General Diary (GD) entry at the local police station regarding physical obstruction.',
        'File petition under Section 163 BNSS before Executive Magistrate to prevent breach of peace.',
        'Institute a Title Suit with an urgent ex-parte ad-interim injunction petition (Order XXXIX CPC).',
        'Pray for police assistance under Section 151 CPC to deploy officers during boundary wall construction.'
      ],
      bn: [
        'শারীরিক হুমকি ও বাধার বিরুদ্ধে স্থানীয় থানায় জেনারেল ডায়েরি (GD) দায়ের করুন।',
        'শান্তিভঙ্গ প্রতিরোধে এগজিকিউটিভ ম্যাজিস্ট্রেটের কাছে ধারা ১৬৩ বিএনএসএস পিটিশন করুন।',
        'অর্ডার ৩৯ সিপিসি অনুযায়ী দেওয়ানি আদালতে জরুরি অন্তর্বর্তী নিষেধাজ্ঞার আবেদন করুন।',
        'ধারা ১৫১ সিপিসি অনুযায়ী আদালতের মাধ্যমে পাঁচিল তোলার সময় পুলিশি প্রহরা নিন।'
      ],
      hi: [
        'धमकी एवं निर्माण में बाधा के विरुद्ध स्थानीय थाने में जनरल डायरी (GD) दर्ज कराएं।',
        'शांति भंग की आशंका पर कार्यपालक दंडाधिकारी के समक्ष धारा 163 बीएनएसएस का वाद करें।',
        'सिविल जज के समक्ष आदेश 39 सीपीसी के तहत एकपक्षीय अंतरिम स्थगनादेश प्राप्त करें।',
        'धारा 151 सीपीसी के तहत निर्माण के दौरान सुरक्षा हेतु पुलिस बल तैनात कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-26-1',
        name: { en: 'Title Deed & Municipal / Panchayat Boundary Sanction', bn: 'মালিকানা দলিল ও প্ল্যান অনুমোদন', hi: 'स्वामित्व विलेख एवं नगरपालिका/पंचायत अनुमति' },
        issuing_authority: { en: 'Municipality / KMC / Panchayat', bn: 'পৌরসভা / কেএমসি / পঞ্চায়েত', hi: 'नगर पालिका / केएमसी / पंचायत' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-27',
    title: {
      en: 'Agricultural Land Ceiling Exemption & Surplus Land Disputes',
      bn: 'কৃষি জমির ঊর্ধ্বসীমা ও খাস জমি সংক্রান্ত বিরোধ',
      hi: 'कृषि भूमि सीलिंग छूट एवं अतिरिक्त घोषित जमीन विवाद'
    },
    relevant_act: 'Chapter II-B, West Bengal Land Reforms Act, 1955',
    summary: {
      en: 'Protect ancestral agricultural land holdings within statutory ceiling limits against wrongful vesting by Revenue Officers.',
      bn: 'সীমার মধ্যে থাকা সত্ত্বেও সরকারিভাবে কৃষি জমি খাস বা বাজেয়াপ্ত করার নোটিশের বিরুদ্ধে প্রতিকার।',
      hi: 'कानूनी सीमा के भीतर होने पर भी जमीन को सीलिंग अतिरिक्त घोषित करने के विरुद्ध वाद।'
    },
    authority_forum: {
      en: 'West Bengal Land Reforms Tenancy Tribunal (WBLRTT)',
      bn: 'ভূমি সংস্কার ট্রাইব্যুনাল (WBLRTT)',
      hi: 'भूमि सुधार अधिकरण (WBLRTT)'
    },
    forum_type: 'High_Court',
    is_complex: true,
    official_portal_url: 'https://banglarbhumi.gov.in/',
    statutory_timeframe: {
      en: '6 months to 1 year',
      bn: '৬ মাস থেকে ১ বছর',
      hi: '6 माह से 1 वर्ष'
    },
    search_keywords: {
      en: ['land ceiling wb', 'chapter ii-b wblr', 'wblrtt surplus land vesting'],
      bn: ['জমির সিলিং', 'খাস ঘোষণা চ্যালেঞ্জ', 'ভূমি সংস্কার ট্রাইব্যুনাল'],
      hi: ['भूमि सीलिंग', 'अतिरिक्त जमीन विवाद', 'ट्रिब्यूनल याचिका']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Collate Warishan family tree proving adult members lived as separate family units on appointed date.',
        'File statutory objection under Section 14T before Revenue Officer challenging surplus calculation.',
        'Challenge adverse vesting orders by filing Original Application (OA) before WBLRTT at Salt Lake.',
        'Secure stay on physical dispossession or redistribution to third-party Patta holders.'
      ],
      bn: [
        'আইন অনুযায়ী প্রাপ্তবয়স্ক সদস্যদের পৃথক পরিবার প্রমাণে ওয়ারিশান নথি সংগ্রহ করুন।',
        'ধারা ১৪টি অনুযায়ী খাস ঘোষণার বিরুদ্ধে রেভিনিউ অফিসারের কাছে আপত্তি দিন।',
        'সল্টলেকের ডব্লুবিএলআরটিটি ট্রাইব্যুনালে অরিজিনাল অ্যাপ্লিকেশন (OA) দায়ের করুন।',
        'জমি থেকে উচ্ছেদ এবং অন্যদের পাট্টা বিলিবণ্টনের ওপর স্থগিতাদেশ আদায় করুন।'
      ],
      hi: [
        'वंशावली द्वारा सिद्ध करें कि परिवार के वयस्क सदस्य अलग यूनिट के रूप में रहते हैं।',
        'धारा 14T के तहत राजस्व अधिकारी के समक्ष जमीन को सीलिंग मुक्त सिद्ध करें।',
        'प्रतिकूल जब्ती आदेश के विरुद्ध WBLRTT अधिकरण के समक्ष याचिका (OA) दाखिल करें।',
        'जमीन से बेदखली अथवा अन्य लोगों को पट्टा बांटने पर अदालत से स्थगनादेश लें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-27-1',
        name: { en: 'Historical Form 7A Returns & Legacy Porcha', bn: 'ফর্ম ৭এ রিটার্ন ও পুরনো খতিয়ান', hi: 'फॉर्म 7A रिटर्न एवं पुश्तैनी खतियान' },
        issuing_authority: { en: 'DL&LRO Land Reforms Section', bn: 'ভূমি দপ্তর', hi: 'भूमि राजस्व विभाग' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-28',
    title: {
      en: 'Waqf Land Encroachment & Dedicated Estate Protection',
      bn: 'ওয়াকফ সম্পত্তির বেআইনি দখল ও ট্রাইব্যুনাল মামলা',
      hi: 'वक्फ संपत्ति पर अवैध कब्जा एवं वक्फ अधिकरण वाद'
    },
    relevant_act: 'Sec 54, 83 & 85, Waqf Act, 1995 (Amended)',
    summary: {
      en: 'Eviction of unauthorized encroachers and cancellation of illegal private sales of registered Waqf properties across West Bengal.',
      bn: 'নিবন্ধিত ওয়াকফ সম্পত্তি বেআইনি বিক্রি বা দখলদারদের উচ্ছেদে ওয়াকফ ট্রাইব্যুনালে মামলা।',
      hi: 'वक्फ की जमीन को बेचने या उस पर अवैध कब्जा करने वालों को बेदखल कराने की कानूनी प्रक्रिया।'
    },
    authority_forum: {
      en: 'West Bengal Waqf Tribunal, Kolkata',
      bn: 'পশ্চিমবঙ্গ ওয়াকফ ট্রাইব্যুনাল, কলকাতা',
      hi: 'पश्चिम बंगाल वक्फ अधिकरण'
    },
    forum_type: 'Waqf_Tribunal',
    is_complex: true,
    official_portal_url: 'https://wbwaqfboard.gov.in/',
    statutory_timeframe: {
      en: '6 months to 1 year',
      bn: '৬ মাস থেকে ১ বছর',
      hi: '6 माह से 1 वर्ष'
    },
    search_keywords: {
      en: ['waqf land dispute', 'section 54 waqf', 'waqf tribunal kolkata eviction'],
      bn: ['ওয়াকফ জমি', 'ওয়াকফ দখল উচ্ছেদ', 'ওয়াকফ ট্রাইব্যুনাল'],
      hi: ['वक्फ जमीन विवाद', 'वक्फ अधिकरण', 'वक्फ संपत्ति संरक्षण']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Mutawalli submits application to CEO, Board of Waqfs, WB with property enrollment details.',
        'CEO conducts inquiry and serves statutory eviction notice under Section 54(1) of Waqf Act.',
        'If encroacher defaults, CEO files application before Waqf Tribunal for an eviction order.',
        'Order transmitted to Sub-Divisional Magistrate (SDM) to execute physical removal with police aid.'
      ],
      bn: [
        'ওয়াকফ বোর্ডের সিইও-র নিকট মোতোয়াল্লি কর্তৃক দখল উচ্ছেদের আবেদন দাখিল করুন।',
        'ওয়াকফ আইন ধারা ৫৪(১) অনুযায়ী সিইও দখলদারকে উচ্ছেদের সরকারি নোটিশ দেবেন।',
        'দখল না ছাড়লে সিইও কলকাতার ওয়াকফ ট্রাইব্যুনালে উচ্ছেদ আদেশের মামলা করবেন।',
        'মহকুমা শাসকের (SDM) মাধ্যমে পুলিশি সহায়তায় ওয়াকফ জমি দখলমুক্ত করা হবে।'
      ],
      hi: [
        'मुतवल्ली द्वारा वक्फ बोर्ड के सीईओ के समक्ष वक्फ पंजीकरण सहित आवेदन दें।',
        'सीईओ द्वारा धारा 54(1) के तहत कब्जाधारी को आधिकारिक बेदखली नोटिस भेजा जाएगा।',
        'खाली न करने पर सीईओ द्वारा वक्फ अधिकरण से बेदखली वारंट प्राप्त किया जाएगा।',
        'एसडीएम द्वारा पुलिस बल की मदद से वक्फ भूमि को खाली कराकर सौंपा जाएगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-28-1',
        name: { en: 'Waqf Board Enrollment Register Extract', bn: 'ওয়াকফ বোর্ড রেজিস্ট্রেশন নথি', hi: 'वक्फ बोर्ड पंजीकरण प्रमाणपत्र' },
        issuing_authority: { en: 'Board of Waqfs, West Bengal', bn: 'ওয়াকফ বোর্ড', hi: 'वक्फ बोर्ड पश्चिम बंगाल' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-29',
    title: {
      en: 'Sale of Mortgaged Land Without Bank Disclosure',
      bn: 'ব্যাঙ্কে বন্ধকি জমি গোপনে বিক্রি প্রতারণা',
      hi: 'बैंक बंधक जमीन को धोखे से बेचने के विरुद्ध विधिक कार्रवाई'
    },
    relevant_act: 'Sec 55, TP Act, 1882 r/w Sec 318 BNS, 2023',
    summary: {
      en: 'Rescission of contract and refund when buyer discovers unreleased mortgage charge after deed registration.',
      bn: 'ব্যাঙ্ক লোন গোপন করে জমি বিক্রির প্রতারণায় টাকা ফেরত ও চুক্তি বাতিলের মামলা।',
      hi: 'बैंक में गिरवी रखी जमीन को बिना बताए बेचने पर खरीदार द्वारा पैसा वापसी एवं फौजदारी वाद।'
    },
    authority_forum: {
      en: 'Civil Court (Senior Division) / Police EOW',
      bn: 'দেওয়ানি আদালত / অর্থনৈতিক অপরাধ দমন শাখা',
      hi: 'सिविल न्यायालय / ईओडब्ल्यू'
    },
    forum_type: 'Civil_Court',
    is_complex: true,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: 'Immediate FIR; 1 to 2 years civil suit',
      bn: 'অবিলম্বে এফআইআর; ১ থেকে ২ বছর মামলা',
      hi: 'त्वरित प्राथमिकी; 1 से 2 वर्ष सिविल वाद'
    },
    search_keywords: {
      en: ['mortgaged land fraud', 'hidden bank loan land', 'section 55 tp act rescission'],
      bn: ['বন্ধকি জমি বিক্রি', 'ব্যাঙ্ক লোন জমি প্রতারণা', 'দলিল বাতিল'],
      hi: ['बंधक जमीन धोखा', 'बैंक लोन छिपाई जमीन', 'जमीन धोखाधड़ी']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain Non-Encumbrance Certificate (NEC) confirming pre-existing bank mortgage charge.',
        'Serve immediate legal notice for deed rescission and demand full refund plus interest.',
        'File criminal FIR under Section 318(4) BNS for cheating at local Cyber/EOW cell.',
        'Institute Money Suit with attachment-before-judgment application (Order XXXVIII CPC).'
      ],
      bn: [
        'সাব-রেজিস্ট্রার অফিস থেকে এনইসি (NEC) ও ব্যাঙ্কের লোন নোটিশ সংগ্রহ করুন।',
        'বিক্রেতাকে চুক্তি বাতিল ও সুদে-আসলে টাকা ফেরতের আইনি নোটিশ দিন।',
        'প্রতারণার অভিযোগে থানায় ধারা ৩১৮(৪) বিএনএস অনুযায়ী ফৌজদারি এফআইআর করুন।',
        'টাকা উদ্ধারে বিক্রেতার অন্যান্য সম্পত্তি ক্রোকের আবেদনসহ মানি স্যুট দায়ের করুন।'
      ],
      hi: [
        'रजिस्ट्री कार्यालय से एनईसी निकालें जिससे बैंक के पूर्व बंधक का पता चले।',
        'बिक्री निरस्त करने एवं पूरी राशि ब्याज सहित लौटाने का विधिक नोटिस भेजें।',
        'धारा 318(4) बीएनएस के तहत धोखाधड़ी की प्राथमिकी (FIR) दर्ज कराएं।',
        'राशि वसूली हेतु आदेश 38 सीपीसी के तहत विक्रेता की अन्य संपत्तियां कुर्क कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-29-1',
        name: { en: 'Non-Encumbrance Certificate (NEC)', bn: 'নন-এনকামব্রান্স সার্টিফিকেট (NEC)', hi: 'भारमुक्त प्रमाणपत्र (NEC)' },
        issuing_authority: { en: 'Inspector General of Registration', bn: 'সাব-রেজিস্ট্রি অফিস', hi: 'पंजीयन विभाग' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-30',
    title: {
      en: 'Lis Pendens Invalidation of Third-Party Land Deals',
      bn: 'মামলা চলাকালীন জমি বিক্রি অবৈধকরণ — লিস পেন্ডেন্স',
      hi: 'मुकदमे के दौरान बेची गई जमीन पर रोक (लिस पेंडेंस)'
    },
    relevant_act: 'Sec 52, Transfer of Property Act, 1882',
    summary: {
      en: 'Binding subsequent purchasers to court decrees and invalidating land sales made while a dispute was pending.',
      bn: 'আদালতে মামলা চলাকালীন বিবাদী গোপনে জমি তৃতীয় পক্ষের কাছে বিক্রি করলে তা অবৈধ ঘোষণার নিয়ম।',
      hi: 'अदालत में वाद लंबित रहने के दौरान किसी अन्य को बेची गई जमीन को अवैध सिद्ध करना।'
    },
    authority_forum: {
      en: 'Civil Trial Court / City Civil Court at Calcutta',
      bn: 'মূল দেওয়ানি আদালত / সিটি সিভিল কোর্ট',
      hi: 'सिविल विचारण न्यायालय'
    },
    forum_type: 'Civil_Court',
    is_complex: false,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: 'During trial until final decree execution',
      bn: 'মামলার চলাকালীন চূড়ান্ত রায় পর্যন্ত',
      hi: 'मुकदमा चलने तक'
    },
    search_keywords: {
      en: ['lis pendens', 'section 52 tp act', 'transfer during suit invalid'],
      bn: ['লিস পেন্ডেন্স', 'মামলা চলাকালীন বিক্রি', 'ধারা ৫২'],
      hi: ['लिस पेंडेंस', 'मुकदमे के दौरान बिक्री', 'धारा 52 टीपी एक्ट']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Confirm original Title/Partition Suit was actively pending when third-party transfer occurred.',
        'Move Order I Rule 10 CPC application to implead new purchaser as co-defendant.',
        'File petition under Section 52 TP Act declaring transfer subservient to court decree.',
        'Secure explicit injunction restraining new buyer from raising construction or changing land nature.'
      ],
      bn: [
        'প্রমাণ করুন বিক্রির সময় মূল স্বত্ব বা বাটোয়ারা মামলা আদালতে চলমান ছিল।',
        'অর্ডার ১ রুল ১০ সিপিসি অনুযায়ী নতুন ক্রেতাকে মামলায় পক্ষভুক্ত করুন।',
        'ধারা ৫২ অনুযায়ী আদালতের ডিক্রি ক্রেতার ওপর কার্যকর ঘোষণার আবেদন দিন।',
        'নতুন ক্রেতা যেন জমিতে কোনো নির্মাণ না করতে পারে তার ইনজাংশন নিন।'
      ],
      hi: [
        'प्रमाणित करें कि जमीन बिक्री के समय मूल स्वामित्व वाद अदालत में विचाराधीन था।',
        'आदेश 1 नियम 10 सीपीसी के तहत नए खरीदार को मुकदमे में पक्षकार बनाएं।',
        'धारा 52 के तहत आवेदन कर खरीद को अंतिम अदालती फैसले के अधीन कराएं।',
        'नए खरीदार द्वारा जमीन पर निर्माण या बदलाव करने पर स्थगनादेश प्राप्त करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-30-1',
        name: { en: 'Plaint & Summons Service Report of Original Suit', bn: 'মূল মামলার আরজি ও নোটিশ জারির কপি', hi: 'मूल वाद की प्रति एवं समन तामिला रिपोर्ट' },
        issuing_authority: { en: 'Civil Court Sheristadar', bn: 'দেওয়ানি আদালত সেরেস্তা', hi: 'सिविल कोर्ट' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-31',
    title: {
      en: 'Writ of Mandamus Against Revenue Officer Inaction',
      bn: 'ভূমি সংস্কার আধিকারিকের নিষ্ক্রিয়তার বিরুদ্ধে রিট',
      hi: 'राजस्व अधिकारी की निष्क्रियता के विरुद्ध हाईकोर्ट रिट'
    },
    relevant_act: 'Article 226, Constitution of India',
    summary: {
      en: 'Compelling BL&LRO or KMC Revenue Officers to dispose of mutation or conversion hearings delayed past statutory limits.',
      bn: 'মিউটেশন বা কনভার্সন ফাইল বছরের পর বছর আটকে রাখলে হাইকোর্ট থেকে সরকারি নির্দেশ জারি।',
      hi: 'म्यूटेशन या कन्वर्जन आवेदन पर महीनों सुनवाई न करने वाले राजस्व अधिकारी के विरुद्ध परमादेश रिट।'
    },
    authority_forum: {
      en: 'High Court at Calcutta (Appellate Side)',
      bn: 'কলকাতা হাইকোর্ট (অ্যাপেলেট সাইড)',
      hi: 'कलकत्ता उच्च न्यायालय'
    },
    forum_type: 'High_Court',
    is_complex: true,
    official_portal_url: 'https://calcuttahighcourt.gov.in/',
    statutory_timeframe: {
      en: '30 to 90 days',
      bn: '৩০ থেকে ৯০ দিন',
      hi: '30 से 90 दिन'
    },
    search_keywords: {
      en: ['mandamus against bllro', 'high court mutation writ', 'bllro delay hearing'],
      bn: ['বিএলঅ্যান্ডএলআরও নিষ্ক্রিয়তা', 'হাইকোর্ট রিট', 'মিউটেশন দেরি'],
      hi: ['बीएल एंड एलआरओ रिट', 'म्यूटेशन देरी', 'हाईकोर्ट परमादेश']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Extract application receipts demonstrating pendency beyond 45 days.',
        'Send formal Demand for Justice notice through High Court advocate giving 15-day window.',
        'File Writ Petition in Nature of Mandamus (WPA) before High Court Single Bench.',
        'High Court directs authority to hold hearing and pass reasoned order within 6 weeks.'
      ],
      bn: [
        'বাংলারভূমি বা পুরসভা থেকে রসিদ তুলে প্রমাণ করুন আবেদনটি ৪৫ দিনের বেশি আটকে আছে।',
        'আইনজীবীর মাধ্যমে সংশ্লিষ্ট কর্তৃপক্ষকে ১৫ দিনের ডিমান্ড ফর জাস্টিস নোটিশ পাঠান।',
        'কলকাতা হাইকোর্টের একক বেঞ্চে অনুচ্ছেদ ২২৬ অনুযায়ী রিট পিটিশন (WPA) দায়ের করুন।',
        'হাইকোর্ট ৬ সপ্তাহের মধ্যে শুনানি শেষ করে আদেশ জারির কড়া নির্দেশ দেবে।'
      ],
      hi: [
        'पोर्टल रसीद द्वारा सिद्ध करें कि आवेदन वैधानिक समय सीमा से अधिक समय से लंबित है।',
        'अधिवक्ता द्वारा अधिकारी को 15 दिनों का औपचारिक न्याय मांग नोटिस दें।',
        'उच्च न्यायालय में अनुच्छेद 226 के तहत परमादेश याचिका (WPA) दाखिल करें।',
        'उच्च न्यायालय अधिकारी को 6 सप्ताह में सुनवाई कर अंतिम आदेश का निर्देश देगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-31-1',
        name: { en: 'Application Slip with Case No & Postal Tracking of Demand Notice', bn: 'অনলাইন আবেদনের রসিদ ও ডিমান্ড নোটিশ ট্র্যাকিং', hi: 'ऑनलाइन आवेदन पर्ची एवं न्याय मांग नोटिस डाक रसीद' },
        issuing_authority: { en: 'Banglarbhumi Portal / India Post', bn: 'বাংলারভূমি / ডাক বিভাগ', hi: 'बांगलारभूमि / डाक विभाग' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-32',
    title: {
      en: 'Restoration of Dispossessed Agricultural Tenant / Ryot',
      bn: 'রায়ত প্রজার বেআইনি উচ্ছেদ ও পুনর্বহাল',
      hi: 'कृषि रैयत/काश्तकार की बेदखली के विरुद्ध पुनर्बहाली आवेदन'
    },
    relevant_act: 'Sec 49A & 50, WBLR Act r/w Tenancy Regulations',
    summary: {
      en: 'Rural & district focus: summary administrative restoration of marginal farmers forcibly displaced from agricultural holdings.',
      bn: 'জমির মালিক বা প্রভাবশালীদের দ্বারা জোরপূর্বক উচ্ছেদ হওয়া বর্গাদার ও রায়তদের জমি ফেরত পাওয়া।',
      hi: 'दबंगों द्वारा जोत से बेदखल किए गए गरीब काश्तकार किसानों की जमीन बहाली।'
    },
    authority_forum: {
      en: 'Revenue Officer / Sub-Divisional Land Reforms Officer',
      bn: 'রাজস্ব আধিকারিক / মহকুমা ভূমি সংস্কার দপ্তর',
      hi: 'राजस्व अधिकारी / एसडी एंड एलआरओ'
    },
    forum_type: 'BL_LRO',
    is_complex: false,
    official_portal_url: 'https://banglarbhumi.gov.in/',
    statutory_timeframe: {
      en: 'Within 3 years of dispossession; 45 days hearing',
      bn: 'উচ্ছেদের ৩ বছরের মধ্যে; ৪৫ দিন শুনানি',
      hi: 'बेदखली के 3 वर्ष में; 45 दिन सुनवाई'
    },
    search_keywords: {
      en: ['section 49a wblr', 'ryot restoration', 'dispossessed farmer wb'],
      bn: ['রায়ত পুনর্বহাল', 'ধারা ৪৯এ', 'কৃষক উচ্ছেদ'],
      hi: ['रैयत बहाली', 'काश्तकार बेदखली', 'जमीन कब्जा बहाली']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'File restoration application before Revenue Officer under Section 49A WBLR Act.',
        'Attach rent receipts, crop sale vouchers, or historical Porcha proving cultivation.',
        'Revenue Officer serves notice on dispossessor and conducts spot field inquiry.',
        'Executive order directs local police to escort farmer back onto holding.'
      ],
      bn: [
        'ডব্লুবিএলআর আইনের ধারা ৪৯এ অনুযায়ী রেভিনিউ অফিসারের কাছে পুনর্বহাল দরখাস্ত দিন।',
        'পুরনো খাজনা রসিদ, ফসল বিক্রির প্রমাণ ও খতিয়ান জমা দিয়ে চাষাবাদ প্রমাণ করুন।',
        'রাজস্ব আধিকারিক দখলদারকে নোটিশ পাঠিয়ে সরেজমিনে মাঠ তদন্ত করবেন।',
        'আদেশের মাধ্যমে স্থানীয় পুলিশ কৃষককে সশরীরে জমিতে বসিয়ে দিয়ে আসবে।'
      ],
      hi: [
        'धारा 49A के अंतर्गत राजस्व अधिकारी के समक्ष जमीन बहाली आवेदन दें।',
        'लगान रसीद, फसल बिक्री पर्ची एवं पुराने खतियान से अपनी जोत साबित करें।',
        'राजस्व अधिकारी अवैध कब्जाधारी को नोटिस देकर स्थल जांच करेंगे।',
        'प्रशासनिक आदेश से पुलिस बल की मौजूदगी में किसान को खेत का कब्जा वापस मिलेगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-32-1',
        name: { en: 'Historical Cultivation Evidence / Porcha', bn: 'চাষাবাদের ঐতিহাসিক প্রমাণ বা পর্চা', hi: 'पुश्तैनी जोत का पर्चा या गवाही' },
        issuing_authority: { en: 'BL&LRO / Local Panchayat', bn: 'ভূমি দপ্তর / পঞ্চায়েত', hi: 'राजस्व विभाग / पंचायत' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-33',
    title: {
      en: 'Forest Dwellers & Scheduled Tribes Land Claims (FRA)',
      bn: 'বনাধিকার আইন ও আদিবাসী পাট্টা দাবি নিষ্পত্তি',
      hi: 'वनाधिकार अधिनियम (FRA) एवं वन पट्टा दावा'
    },
    relevant_act: 'Forest Rights Act, 2006 (FRA)',
    summary: {
      en: 'District & tribal belts: securing heritable, non-alienable Pattas over forest lands occupied prior to December 13, 2005.',
      bn: '২০০৫ সালের পূর্ববর্তী বনভূমিতে বসবাসকারী আদিবাসী ও ঐতিহ্যবাহী বনবাসীদের পাট্টা প্রাপ্তি।',
      hi: 'दिसंबर 2005 से पूर्व वन भूमि पर काबिज आदिवासियों को वैधानिक वन पट्टा दिलाना।'
    },
    authority_forum: {
      en: 'Gram Sabha -> SDLC -> District Level Committee (DLC)',
      bn: 'গ্রামসভা -> এসডিএলসি -> জেলা কমিটি (DLC)',
      hi: 'ग्राम सभा / जिला स्तरीय वनाधिकार समिति'
    },
    forum_type: 'Competent_Authority',
    is_complex: true,
    official_portal_url: 'https://wbtribal.gov.in/',
    statutory_timeframe: {
      en: '60 to 90 working days',
      bn: '৬০ থেকে ৯০ কার্যদিবস',
      hi: '60 থেকে 90 कार्यदिवस'
    },
    search_keywords: {
      en: ['forest rights act', 'fra patta wb', 'tribal forest claim'],
      bn: ['বনাধিকার আইন', 'বন পাট্টা', 'আদিবাসী অধিকার'],
      hi: ['वनाधिकार पट्टा', 'एफआरए कानून', 'वन भूमि दावा']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Pass formal resolution before Gram Sabha verifying continuous ancestral cultivation.',
        'Submit Form-A with elder witness statements and physical occupation markers.',
        'Sub-Divisional Level Committee (SDLC) inspects boundaries and forwards report.',
        'District Level Committee (DLC) chaired by DM issues statutory Forest Land Title.'
      ],
      bn: [
        'গ্রামসভার বন অধিকার কমিটির সাধারণ সভায় চাষাবাদের পক্ষে প্রস্তাব পাস করান।',
        'বয়োজ্যেষ্ঠদের সাক্ষ্য ও দখলের প্রমাণসহ ফর্ম-এ আবেদন পেশ করুন।',
        'মহকুমা কমিটি (SDLC) সীমানা সরেজমিনে যাচাই করে জেলা কমিটির কাছে পাঠাবে।',
        'জেলাশাসকের নেতৃত্বাধীন জেলা কমিটি (DLC) চূড়ান্ত বন পাট্টা জারি করবে।'
      ],
      hi: [
        'ग्राम सभा की वनाधिकार समिति में पुश्तैनी जोत के समर्थन में प्रस्ताव पारित कराएं।',
        'वृद्धजनों के साक्ष्य एवं कब्जे के प्रमाण के साथ फॉर्म-ए जमा करें।',
        'अनुमंडल स्तरीय समिति (SDLC) द्वारा सत्यापन कर जिला समिति को भेजा जाएगा।',
        'जिला कलेक्टर की अध्यक्षता वाली जिला समिति (DLC) द्वारा पट्टा जारी होगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-33-1',
        name: { en: 'Gram Sabha Verification Resolution', bn: 'গ্রামসভার যাচাইকরণ প্রস্তাব', hi: 'ग्राम सभा वनाधिकार प्रस्ताव' },
        issuing_authority: { en: 'Gram Sabha / Forest Rights Committee', bn: 'গ্রামসভা', hi: 'ग्राम सभा' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-34',
    title: {
      en: 'De-freezing & Release of Land Attached in Criminal Trials',
      bn: 'ফৌজদারি মামলায় ক্রোক করা জমি অবমুক্ত করা',
      hi: 'आपराधिक मुकदमों में कुर्क की गई जमीन को मुक्त कराना'
    },
    relevant_act: 'Sec 107 & Sec 88, BNSS, 2023',
    summary: {
      en: 'Releasing innocent co-sharer land parcels erroneously attached in state financial scam probes.',
      bn: 'চিটফান্ড বা অন্য কোনো আর্থিক কেলেঙ্কারির তদন্তে ভুলবশত ক্রোক করা নির্দোষ অংশীদারের জমি ছাড়ানোর নিয়ম।',
      hi: 'आर्थिक घोटालों की जांच में बेगुनाह सह-हिस्सेदारों की कुर्क जमीन को मुक्त कराने की प्रक्रिया।'
    },
    authority_forum: {
      en: 'Court of Sessions / Special Designated Court',
      bn: 'দায়রা আদালত / বিশেষ আদালত',
      hi: 'सत्र न्यायालय / विशेष अदालत'
    },
    forum_type: 'Civil_Court',
    is_complex: true,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '3 to 6 months',
      bn: '৩ থেকে ৬ মাস',
      hi: '3 से 6 माह'
    },
    search_keywords: {
      en: ['defreeze attached land', 'section 107 bnss', 'release criminal attachment'],
      bn: ['ক্রোক জমি অবমুক্ত', 'জমি ক্রোক চ্যালেঞ্জ', 'ধারা ১০৭ বিএনএসএস'],
      hi: ['कुर्क जमीन मुक्ति', 'धारा 107 बीएनएसएस', 'अटैचमेंट निरस्तीकरण']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain certified copies of criminal attachment order issued by Special Judge.',
        'File Objection Petition under Section 107(3) BNSS proving bona fide separate title.',
        'Produce bank statements, purchase sources, and deeds proving innocence.',
        'Obtain judicial de-attachment order and submit to ADSR and BL&LRO to clear records.'
      ],
      bn: [
        'বিশেষ আদালতের জারিকৃত জমি ক্রোক আদেশের সার্টিফাইড কপি সংগ্রহ করুন।',
        'ধারা ১০৭(৩) বিএনএসএস অনুযায়ী জমিতে অপরাধের অর্থ না থাকার আপত্তি জানান।',
        'জমি কেনার বৈধ আয়ের উৎস ও ব্যাঙ্ক স্টেটমেন্ট আদালতে জমা দিন।',
        'বিচারকের অবমুক্তির আদেশ নিয়ে রেজিস্ট্রি অফিস ও ভূমি দপ্তরের রেকর্ড মুক্ত করান।'
      ],
      hi: [
        'विशेष न्यायालय द्वारा जारी कुर्की आदेश की प्रमाणित प्रति निकालें।',
        'धारा 107(3) बीएनएसएस के तहत अपनी निर्दोषता एवं स्वतंत्र खरीद साबित करें।',
        'बैंक स्टेटमेंट एवं पुराने विलेखों से सिद्ध करें कि जमीन अपराध से अर्जित नहीं है।',
        'अदालती आदेश प्राप्त कर उप-पंजीयक एवं बीएल एंड एलआरओ पोर्टल से रोक हटवाएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-34-1',
        name: { en: 'Certified Court Order of Attachment', bn: 'আদালতের ক্রোক আদেশের কপি', hi: 'अदालती कुर्की आदेश प्रति' },
        issuing_authority: { en: 'Sessions Court Registry', bn: 'দায়রা আদালত', hi: 'सत्र न्यायालय' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-35',
    title: {
      en: 'Allotment of Vested Surplus Land to Landless Laborers',
      bn: 'ভূমিহীন দিনমজুরদের সরকারি খাস জমি বিলিবণ্টন',
      hi: 'भूमिहीन कृषि मजदूरों को सरकारी सीलिंग अतिरिक्त भूमि आवंटन'
    },
    relevant_act: 'Sec 49(1), West Bengal Land Reforms Act, 1955',
    summary: {
      en: 'Rural & district focus: procedural eligibility roadmap for BPL agricultural laborers applying for up to 1 acre of vested land.',
      bn: 'ভূমিহীন খেতমজুর ও প্রান্তিক কৃষকদের জীবিকা নির্বাহের জন্য সরকারি খাস জমি পাট্টা পাওয়ার পদ্ধতি।',
      hi: 'बीपीएल कृषि मजदूरों को खेती हेतु 1 एकड़ तक सरकारी जमीन का कानूनी पट्टा पाना।'
    },
    authority_forum: {
      en: 'Block Land Reforms Committee (BL&LRO / BDO)',
      bn: 'ব্লক ভূমি সংস্কার কমিটি (BL&LRO / BDO)',
      hi: 'प्रखंड भूमि सुधार समिति'
    },
    forum_type: 'BL_LRO',
    is_complex: false,
    official_portal_url: 'https://banglarbhumi.gov.in/',
    statutory_timeframe: {
      en: '60 to 90 working days',
      bn: '৬০ থেকে ৯০ কার্যদিবস',
      hi: '60 থেকে 90 कार्यदिवस'
    },
    search_keywords: {
      en: ['landless patta allotment', 'section 49 wblr', 'khas land distribution'],
      bn: ['ভূমিহীন পাট্টা', 'খাস জমি বণ্টন', 'ধারা ৪৯(১)'],
      hi: ['भूमिहीन पट्टा आवंटन', 'सरकारी जमीन वितरण', 'धारा 49 WBLR']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Verify family eligibility: must be agricultural laborer owning under 1 acre.',
        'Submit Form 12 before BL&LRO with BPL card, Aadhaar, and Panchayat residency.',
        'Block Land Reforms Committee conducts public inquiry and prepares roster.',
        'Issue heritable, non-transferable Patta signed by Sub-Divisional Officer (SDO).'
      ],
      bn: [
        'যোগ্যতা নিশ্চিত করুন: পরিবারটিকে দিনমজুর ও ১ একরের কম জমির মালিক হতে হবে।',
        'বিপিএল কার্ড ও আধারসহ বিএলঅ্যান্ডএলআরও অফিসে ফর্ম ১২ পূরণ করে জমা দিন।',
        'ব্লক ভূমি সংস্কার কমিটি গণতদন্ত সম্পন্ন করে যোগ্যদের তালিকা তৈরি করবে।',
        'মহকুমা শাসকের (SDO) স্বাক্ষরিত হস্তান্তর-অযোগ্য স্থায়ী পাট্টা গ্রহণ করুন।'
      ],
      hi: [
        'पात्रता जांचें: परिवार भूमिहीन कृषि मजदूर हो एवं 1 एकड़ से कम जमीन हो।',
        'बीपीएल कार्ड एवं आधार सहित बीएल एंड एलआरओ में फॉर्म 12 जमा करें।',
        'प्रखंड समिति द्वारा सार्वजनिक जांच कर पात्र लाभार्थियों की सूची बनेगी।',
        'एसडीओ के हस्ताक्षर से गैर-हस्तांतरणीय पुश्तैनी पट्टा जारी किया जाएगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-35-1',
        name: { en: 'BPL Card & Landless Certificate', bn: 'বিপিএল কার্ড ও ভূমিহীন শংসাপত্র', hi: 'बीपीएल कार्ड एवं भूमिहीन प्रमाणपत्र' },
        issuing_authority: { en: 'Panchayat Pradhan / BDO Office', bn: 'পঞ্চায়েত / বিডিও অফিস', hi: 'ग्राम पंचायत / बीडीओ' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-36',
    title: {
      en: 'Tree Cutting & Timber Rights on Boundary / Joint Land',
      bn: 'সীমানার গাছ কাটা ও কাঠ বিক্রির অংশীদারি বিরোধ',
      hi: 'सीमावर्ती एवं संयुक्त भूमि पर पेड़ काटने व लकड़ी बेचने का विवाद'
    },
    relevant_act: 'WB Trees (Protection & Conservation) Act, 2006 (Districts) / KMC Parks (Kolkata)',
    summary: {
      en: 'Tree-felling permits and boundary timber rights: in districts via Forest Range Officer/DFO; in Kolkata via KMC Parks & Squares Department.',
      bn: 'গাছ কাটার অনুমতি: জেলায় বন দপ্তর (DFO); কলকাতায় কেএমসি পার্কস অ্যান্ড স্কয়ার্স বিভাগ।',
      hi: 'पेड़ कटाई अनुमति: जिलों में वन विभाग (DFO); कोलकाता में केएमसी पार्क विभाग।'
    },
    authority_forum: {
      en: 'DFO (Districts) / KMC Parks Dept (Kolkata)',
      bn: 'ডিএফও (জেলা) / কেএমসি পার্কস শাখা (কলকাতা)',
      hi: 'वन प्रभाग अधिकारी (DFO) / केएमसी'
    },
    forum_type: 'Competent_Authority',
    is_complex: false,
    official_portal_url: 'https://westbengalforest.gov.in/',
    statutory_timeframe: {
      en: '30 working days (Permit) / Urgent for Stay',
      bn: '৩০ কার্যদিবস (পারমিট) / জরুরি স্থগিতাদেশ',
      hi: '30 कार्यदिवस (अनुमति) / त्वरित रोक'
    },
    search_keywords: {
      en: ['tree cutting permit wb', 'kmc tree felling permission', 'dfo felling permission'],
      bn: ['গাছ কাটার অনুমতি', 'কেএমসি গাছ কাটা', 'ডিএফও পারমিট'],
      hi: ['पेड़ काटने की अनुमति', 'केएमसी पेड़ अनुमति', 'वन विभाग पेड़ कटाई']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Apply for tree-felling permit before Range Officer/DFO with replanting pledge.',
        'If co-sharer cuts timber secretly, lodge immediate objection with Range Officer.',
        'File Civil Suit for Injunction under Order XXXIX CPC to halt felling.',
        'If already sold, pray for taking accounts and deposit of your share in court.'
      ],
      bn: [
        'গাছ কাটার কারণ ও নতুন চারা লাগানোর অঙ্গীকারসহ রেঞ্জ অফিসারের কাছে আবেদন দিন।',
        'সহ-অংশীদার গোপনে গাছ কাটলে বন দপ্তরের রেঞ্জ অফিসারের কাছে অভিযোগ করুন।',
        'গাছ কাটা বন্ধ করতে দেওয়ানি আদালতে অর্ডার ৩৯ অনুযায়ী ইনজাংশন মামলা করুন।',
        'গাছ বিক্রি হয়ে থাকলে কাঠের হিসাব চেয়ে আদালতে নিজের অংশ জমা করান।'
      ],
      hi: [
        'पौधारोपण के हलफनामे के साथ वन क्षेत्राधिकारी/DFO के पास अनुमति आवेदन दें।',
        'सह-हिस्सेदार द्वारा चुपके से पेड़ काटने पर वन विभाग में लिखित शिकायत दें।',
        'पेड़ काटने पर तुरंत रोक लगाने हेतु अदालत में आदेश 39 सीपीसी का वाद करें।',
        'लकड़ी बिक जाने पर अदालत के माध्यम से बिक्री राशि का अपना हिस्सा वसूलें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-36-1',
        name: { en: 'Forest Officer / KMC Felling Permission Certificate', bn: 'বন দপ্তর বা কেএমসি গাছ কাটার অনুমতিপত্র', hi: 'वन विभाग / केएमसी पेड़ कटाई अनुमति' },
        issuing_authority: { en: 'Divisional Forest Officer / KMC', bn: 'বন দপ্তর / কেএমসি', hi: 'वन विभाग / केएमसी' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-37',
    title: {
      en: 'Bhoodan Land Grant Alienation Challenge',
      bn: 'ভূদান আন্দোলনের জমির হস্তান্তর বাতিল ও সংরক্ষণ',
      hi: 'भूदान आंदोलन की जमीन की अवैध बिक्री रद्द कराना'
    },
    relevant_act: 'State Bhoodan Yagna Regulations r/w WBLR Act',
    summary: {
      en: 'Rural & district focus: setting aside unauthorized commercial sales of plots donated under Bhoodan movement.',
      bn: 'বিনোবা ভাবের ভূদান যজ্ঞে পাওয়া দান করা জমি বেআইনি বিক্রি বা হস্তান্তর রদ করার নিয়ম।',
      hi: 'भूदान में मिली जमीन को अवैध रूप से व्यावसायिक उपयोग हेतु बेचने पर विलेख निरस्तीकरण।'
    },
    authority_forum: {
      en: 'SDO Revenue Court / District Land & Land Reforms Officer',
      bn: 'মহকুমা শাসক (SDO) / ডিএলঅ্যান্ডএলআরও',
      hi: 'एसडीओ राजस्व न्यायालय / डीएल एंड एलआरओ'
    },
    forum_type: 'BL_LRO',
    is_complex: true,
    official_portal_url: 'https://banglarbhumi.gov.in/',
    statutory_timeframe: {
      en: '60 working days',
      bn: '৬০ কার্যদিবস',
      hi: '60 कार्यदिवস'
    },
    search_keywords: {
      en: ['bhoodan land sale', 'bhoodan yagna act', 'cancel bhoodan transfer'],
      bn: ['ভূদান জমি', 'ভূদান যজ্ঞ', 'ভূদান পাট্টা বাতিল'],
      hi: ['भूदान जमीन', 'भूदान यज्ञ विलेख', 'भूदान जमीन अवैध बिक्री']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain historical Bhoodan Yagna Samiti allotment registers and early records.',
        'Submit official representation to SDO highlighting unauthorized private sale.',
        'Revenue Officer conducts inquiry and serves notice on unauthorized purchaser.',
        'Cancel fraudulent mutation entries and re-allot holding to landless families.'
      ],
      bn: [
        'ভূমি রেকর্ড আর্কাইভ থেকে ঐতিহাসিক ভূদান বণ্টন তালিকার নথি সংগ্রহ করুন।',
        'বেআইনি হস্তান্তরের বিবরণ দিয়ে মহকুমা শাসকের (SDO) কাছে অভিযোগ দিন।',
        'রাজস্ব আধিকারিক তদন্ত করে অবৈধ ক্রেতার বিরুদ্ধে উচ্ছেদ নোটিশ দেবেন।',
        'ভুয়ো মিউটেশন বাতিল করে প্রকৃত ভূমিহীন কৃষকদের মধ্যে জমি পুনর্বণ্টন করুন।'
      ],
      hi: [
        'भूदान यज्ञ समिति के ऐतिहासिक आवंटन रजिस्टर से जमीन का रिकॉर्ड निकालें।',
        'अवैध खरीद-बिक्री के विरुद्ध एसडीओ राजस्व के समक्ष अभ्यावेदन दें।',
        'अधिकारी द्वारा जांच कर अवैध खरीदार को नोटिस जारी किया जाएगा।',
        'गलत म्यूटेशन निरस्त कर जमीन को पुनः पात्र भूमिहीनों को सौंपा जाएगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-37-1',
        name: { en: 'Bhoodan Allotment Sanad Extract', bn: 'ভূদান দানপত্র সনদের কপি', hi: 'भूदान सनद प्रमाणपत्र प्रति' },
        issuing_authority: { en: 'Bhoodan Board / Land Reforms Collector', bn: 'ভূমি দপ্তর', hi: 'भूदान बोर्ड / राजस्व विभाग' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-38',
    title: {
      en: 'Consolidation of Fragmented Holdings (Chakbandi)',
      bn: 'জমি একত্রীকরণ ও খণ্ডবিখণ্ড জোত সমন্বয়',
      hi: 'चकबंदी: बिखरे हुए खेतों का एकीकरण एवं नक्शा सुधार'
    },
    relevant_act: 'WBLR Act (Chakbandi Provisions) & Bengal Survey Act',
    summary: {
      en: 'Rural agricultural focus: rationalizing scattered agricultural strips to enable mechanized cultivation and shared irrigation.',
      bn: 'বিভিন্ন স্থানে ছড়িয়ে থাকা খণ্ডবিখণ্ড কৃষিজমি একত্র করে একটি বড় জোতে রূপান্তর (চকবন্দি)।',
      hi: 'अलग-अलग जगह बिखरे छोटे-छोटे कृषि खेतों को एक जगह मिलाकर चक बनाना।'
    },
    authority_forum: {
      en: 'Consolidation Officer / DL&LRO',
      bn: 'চকবন্দি আধিকারিক / ডিএলঅ্যান্ডএলআরও',
      hi: 'चकबंदी अधिकारी / डीएल एंड एलआरओ'
    },
    forum_type: 'BL_LRO',
    is_complex: true,
    official_portal_url: 'https://banglarbhumi.gov.in/',
    statutory_timeframe: {
      en: '6 months to 1 year',
      bn: '৬ মাস থেকে ১ বছর',
      hi: '6 माह से 1 वर्ष'
    },
    search_keywords: {
      en: ['chakbandi wb', 'consolidation of holdings', 'agricultural fragment'],
      bn: ['চকবন্দি', 'জমি একত্রীকরণ', 'জোত সমন্বয়'],
      hi: ['चकबंदी', 'खेत एकीकरण', 'कृषि चक सुधार']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Form an association of contiguous plot holders and submit joint Chakbandi Petition.',
        'Consolidation Officer prepares valuation map equalizing different soil qualities.',
        'Draft preliminary consolidation scheme and publish for 30 days for objections.',
        'Issue revised Consolidated Khatian certificates and update Banglarbhumi maps.'
      ],
      bn: [
        'সংলগ্ন প্লটের কৃষকরা একত্র হয়ে ডিএলঅ্যান্ডএলআরও-তে চকবন্দি আবেদন করুন।',
        'চকবন্দি আধিকারিক মাটির গুণমান ও সেচ ব্যবস্থার সমতা বজায় রেখে মূল্য তালিকা করবেন।',
        'খসড়া চকবন্দি স্কিম তৈরি করে ৩০ দিনের জন্য গণবিজ্ঞপ্তি প্রকাশ করা হবে।',
        'সংশোধিত নতুন খতিয়ান ও মৌজা ম্যাপ তৈরি করে একক প্লট বুঝিয়ে দেওয়া হবে।'
      ],
      hi: [
        'आसपास के किसान मिलकर चकबंदी अधिकारी के पास संयुक्त आवेदन दें।',
        'अधिकारी द्वारा जमीन की गुणवत्ता एवं सिंचन क्षमता के आधार पर मूल्यांकन होगा।',
        'प्रारंभिक चकबंदी योजना बनाकर 30 दिनों के लिए आपत्तियां आमंत्रित होंगी।',
        'नया समेकित खतियान जारी कर किसानों को एक स्थान पर चक का कब्जा मिलेगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-38-1',
        name: { en: 'All Dispersed Plot Khatians', bn: 'ছড়িয়ে থাকা সমস্ত প্লটের খতিয়ান', hi: 'सभी बिखरे हुए खेतों के खतियान' },
        issuing_authority: { en: 'Banglarbhumi BL&LRO', bn: 'বাংলারভূমি', hi: 'बांगलারভূমি' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-39',
    title: {
      en: 'Police Protection Against Armed Land Grabbers',
      bn: 'মাফিয়া দ্বারা জমি দখল প্রতিরোধে পুলিশি সহায়তা',
      hi: 'भू-माफिया एवं असामाजिक तत्वों द्वारा जमीन कब्जा रोकने हेतु पुलिस सुरक्षा'
    },
    relevant_act: 'Sec 151 CPC r/w Sec 168 BNSS, 2023',
    summary: {
      en: 'Securing enforceable judicial orders commanding local police to physically secure land against armed cartels in districts & Kolkata.',
      bn: 'মাফিয়া ও দুষ্কৃতীদের হাত থেকে জমি রক্ষা করতে আদালতের নির্দেশে সশস্ত্র পুলিশি নিরাপত্তা লাভ।',
      hi: 'अदालती आदेश के अनुपालन एवं जमीन पर शांति व्यवस्था हेतु पुलिस बल की तैनाती।'
    },
    authority_forum: {
      en: 'Civil Court (Injunction Wing) / High Court',
      bn: 'দেওয়ানি আদালত / কলকাতা হাইকোর্ট',
      hi: 'सिविल न्यायालय / उच्च न्यायालय'
    },
    forum_type: 'High_Court',
    is_complex: true,
    official_portal_url: 'https://calcuttahighcourt.gov.in/',
    statutory_timeframe: {
      en: 'Emergency (Within 48 hours)',
      bn: 'জরুরি (৪৮ ঘণ্টার মধ্যে)',
      hi: 'अति आवश्यक (48 घंटे के भीतर)'
    },
    search_keywords: {
      en: ['police help for land', 'land grabber protection', 'section 151 cpc police'],
      bn: ['জমি দখলে পুলিশি সাহায্য', 'মাফিয়া দখল', 'ধারা ১৫১ সিপিসি'],
      hi: ['जमीन पर पुलिस सुरक्षा', 'भू-माफिया सुरक्षा', 'धारा 151 सीपीसी']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain ad-interim injunction order under Order XXXIX CPC prohibiting trespass.',
        'File urgent application under Section 151 CPC for police deployment due to violations.',
        'If local police station fails to deploy, file Writ Petition (Art 226) before High Court.',
        'High Court directs Superintendent of Police (SP) or Police Commissioner to ensure 24/7 boundary protection.'
      ],
      bn: [
        'দেওয়ানি আদালত থেকে জমিতে অনুপ্রবেশের ওপর অর্ডার ৩৯ নিষেধাজ্ঞা জারি করান।',
        'নিষেধাজ্ঞা অমান্য করায় ধারা ১৫১ সিপিসি অনুযায়ী পুলিশি সহায়তার আবেদন দিন।',
        'থানা নিষ্ক্রিয় থাকলে হাইকোর্টে অনুচ্ছেদ ২২৬ অনুযায়ী পুলিশ প্রোটেকশন রিট করুন।',
        'হাইকোর্ট সরাসরি পুলিশ সুপার (SP) বা পুলিশ কমিশনারকে নির্দেশ দিয়ে জমিতে সশস্ত্র প্রহরা বসাবে।'
      ],
      hi: [
        'सिविल न्यायालय से आदेश 39 सीपीसी के तहत प्रवेश निषेध का स्थगनादेश लें।',
        'उल्लंघन होने पर धारा 151 सीपीसी के तहत अदालत से पुलिस सुरक्षा की मांग करें।',
        'थाने द्वारा आनाकानी करने पर उच्च न्यायालय में अनुच्छेद 226 के तहत रिट करें।',
        'उच्च न्यायालय सीधे पुलिस अधीक्षक या पुलिस आयुक्त को 24 घंटे सुरक्षा व्यवस्था का आदेश देगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-39-1',
        name: { en: 'Certified Court Injunction Order', bn: 'আদালতের নিষেধাজ্ঞার সার্টিফাইড কপি', hi: 'अदालती स्थगनादेश की प्रमाणित प्रति' },
        issuing_authority: { en: 'Civil Court Bench', bn: 'দেওয়ানি আদালত', hi: 'सिविल कोर्ट' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-40',
    title: {
      en: 'Digitization Data Errors & Corrupted Record Recovery',
      bn: 'ডিজিটাল ডাটাবেসে বাদ পড়া খতিয়ান পুনরুদ্ধার',
      hi: 'डिजिटल डेटाबेस से गायब खतियान एवं जमीन रिकॉर्ड की बहाली'
    },
    relevant_act: 'Information Technology Act r/w WBLR Act / KMC IT Cell',
    summary: {
      en: 'Restoring missing land records deleted or corrupted during Banglarbhumi or KMC database server migrations.',
      bn: 'বাংলারভূমি বা কেএমসি অনলাইন পোর্টালে সার্ভার পরিবর্তনের সময় হারিয়ে যাওয়া পুরনো খতিয়ান বা এসেসি রেকর্ড পুনরুদ্ধার।',
      hi: 'पोर्टल माइग्रेशन के दौरान ऑनलाइन सिस्टम से गायब पैतृक जमीन रिकॉर्ड को पुनः दर्ज कराना।'
    },
    authority_forum: {
      en: 'DL&LRO IT Cell (Districts) / KMC IT Cell (Kolkata)',
      bn: 'ডিএলঅ্যান্ডএলআরও আইটি সেল / কেএমসি আইটি সেল',
      hi: 'डीएल एंड एलआरओ आईटी सेल / केएमसी आईटी सेल'
    },
    forum_type: 'BL_LRO',
    is_complex: false,
    official_portal_url: 'https://banglarbhumi.gov.in/',
    statutory_timeframe: {
      en: '30 to 45 working days',
      bn: '৩০ থেকে ৪৫ কার্যদিবস',
      hi: '30 থেকে 45 कार्यदिवस'
    },
    search_keywords: {
      en: ['banglarbhumi data missing', 'restore corrupted khatian', 'kmc database error'],
      bn: ['বাংলারভূমি রেকর্ড গায়েব', 'খতিয়ান পুনরুদ্ধার', 'কেএমসি ডাটাবেস ভুল'],
      hi: ['बांगलारभूमि डेटा गायब', 'खतियान बहाली', 'केएमसी रिकॉर्ड सुधार']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Locate physical legacy records: RS/LR Porchas, volume ledgers, and Khajna / KMC tax tokens.',
        'File an administrative petition for Data Restoration before IT Nodal Officer.',
        'Departmental data manager retrieves physical register volumes and executes verification.',
        'Authorized database update by Revenue Officer / KMC with system audit logging.'
      ],
      bn: [
        'পুরনো কাগজের আরএস/এলআর পর্চা ও ভলিউম নম্বরের খাজনা বা পুর কর রশিদ সংগ্রহ করুন।',
        'আইটি নোডাল অফিসারের কাছে ডাটা রিস্টোরেশনের লিখিত আবেদন জমা দিন।',
        'বিভাগীয় ডাটা ম্যানেজার মূল ফিজিক্যাল রেজিস্টার খতিয়ে দেখে তথ্য যাচাই করবেন।',
        'রাজস্ব আধিকারিকের ডিজিটাল সাইন সহযোগে ডাটাবেসে রেকর্ড রিস্টোর করা হবে।'
      ],
      hi: [
        'पुराने भौतिक अभिलेख: आरएस/एलआर पर्चा, जिल्द संख्या एवं टैक्स रसीदें निकालें।',
        'आईटी नोडल अधिकारी के पास डेटा बहाली का औपचारिक आवेदन दें।',
        'आईटी टीम द्वारा रिकॉर्ड रूम की मूल जिल्द से मिलान कर भौतिक सत्यापन होगा।',
        'अधिकारी द्वारा डिजिटल हस्ताक्षर कर पोर्टल पर खतियान डेटा पुनः बहाल किया जाएगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-40-1',
        name: { en: 'Historical Hard Copy RS/LR Porcha or Municipal Tax Ledger', bn: 'পুরনো কাগজের আরএস/এলআর পর্চা বা পুর কর লেজার', hi: 'पुराना मूल भौतिक खतियान पर्चा या नगर निगम लेजर' },
        issuing_authority: { en: 'District Record Room (DL&LRO) / KMC', bn: 'জেলা রেকর্ড রুম / কেএমসি', hi: 'जिला अभिलेखागार / केएमसी' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-41',
    title: {
      en: 'Challenge to Highway Land Acquisition Compensation',
      bn: 'জাতীয় সড়ক প্রকল্পে জমি অধিগ্রহণের অবমূল্যায়ন চ্যালেঞ্জ',
      hi: 'राष्ट्रीय राजमार्ग (NH) भूमि अधिग्रहण में कम मुआवजे को चुनौती'
    },
    relevant_act: 'Sec 3G(5), National Highways Act, 1956',
    summary: {
      en: 'Challenging low Circle Rate valuations applied by the Competent Authority for NHAI highway projects.',
      bn: 'জাতীয় সড়ক সম্প্রসারণে নেওয়া জমির নামমাত্র ক্ষতিপূরণের বিরুদ্ধে সালিশি আদালতে মামলা।',
      hi: 'हाईवे चौड़ीकरण में अधिग्रहीत जमीन के कम मुआवजे के विरुद्ध डीएम पंचाट में वाद।'
    },
    authority_forum: {
      en: 'Central Government Arbitrator (District Magistrate) / Commercial Court',
      bn: 'আর্বিট্রেটর (জেলাশাসক) / বাণিজ্যিক আদালত',
      hi: 'मध्यस्थ (जिला मजिस्ट्रेट) / वाणिज्यिक न्यायालय'
    },
    forum_type: 'Commercial_Court',
    is_complex: true,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: 'Within 3 years of award',
      bn: 'অ্যাওয়ার্ডের ৩ বছরের মধ্যে',
      hi: 'अवार्ड के 3 वर्ष के भीतर'
    },
    search_keywords: {
      en: ['nhai land acquisition', 'section 3g5 nh act', 'highway compensation arbit'],
      bn: ['জাতীয় সড়ক জমি অধিগ্রহণ', 'এনএইচএআই ক্ষতিপূরণ', 'ধারা ৩জি(৫)'],
      hi: ['हाईवे जमीन अधिग्रहण', 'एनएचएआई मुआवजा वृद्धि', 'धारा 3G मध्यस्थता']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Receive CALA compensation award notice under Section 3G(1) National Highways Act.',
        'Collect certified sale deeds of high-value commercial land in immediate vicinity.',
        'File Arbitration Petition under Section 3G(5) before Arbitrator (District Magistrate).',
        'If award is inadequate, challenge arbitral award under Section 34 Arbitration Act.'
      ],
      bn: [
        'এনএইচএআই-এর ধারা ৩জি(১) অনুযায়ী নির্ধারিত অ্যাওয়ার্ড নোটিশ সংগ্রহ করুন।',
        'আশেপাশের জমির সাম্প্রতিক উচ্চমূল্যের রেজিস্ট্রি দলিলের সার্টিফাইড কপি নিন।',
        'জেলাশাসকের (আর্বিট্রেটর) কাছে ধারা ৩জি(৫) অনুযায়ী ক্ষতিপূরণ বৃদ্ধির মামলা করুন।',
        'রায় মনমতো না হলে বাণিজ্যিক আদালতে ধারা ৩৪ আর্বিট্রেশন অ্যাক্টে আপিল করুন।'
      ],
      hi: [
        'राष्ट्रीय राजमार्ग अधिनियम की धारा 3G(1) के तहत जारी अवार्ड नोटिस प्राप्त करें।',
        'आसपास की व्यावसायिक जमीनों के हालिया ऊंचे विलेखों की प्रमाणित प्रति लें।',
        'मध्यस्थ (जिला मजिस्ट्रेट) के समक्ष धारा 3G(5) के तहत मध्यस्थता याचिका दें।',
        'मुआवजा असंतोषजनक होने पर वाणिज्यिक न्यायालय में धारा 34 के तहत चुनौती दें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-41-1',
        name: { en: 'CALA Section 3G(1) Award Determination Order', bn: 'অধিগ্রহণ ক্ষতিপূরণ অ্যাওয়ার্ডের কপি', hi: 'अधिग्रहण अवार्ड निर्धारण प्रति' },
        issuing_authority: { en: 'Competent Authority for Land Acquisition (CALA)', bn: 'ভূমি অধিগ্রহণ দপ্তর', hi: 'सक्षम भूमि अधिग्रहण प्राधिकारी' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-42',
    title: {
      en: 'Riverbed Siltation & Illegal Sand Mining Farmland Erosion',
      bn: 'নদীর বালি চুরি ও কৃষিজমি ভাঙন প্রতিরোধ',
      hi: 'अवैध बालू खनन एवं नदी किनारे कृषि भूमि कटाव की रोकथाम'
    },
    relevant_act: 'Mines & Minerals Act, 1957 & State Minor Mineral Rules',
    summary: {
      en: 'District agrarian riverine focus: stopping mechanized illegal sand mining that erodes adjoining private agricultural riverbanks.',
      bn: 'নদীর চর ও তীরবর্তী কৃষিজমির মাটি কেটে বালি মাফিয়াদের ধ্বংসযজ্ঞ বন্ধে এনজিটি মামলা।',
      hi: 'खेतों के किनारे अवैध बालू खनन से जमीन धंसने व कटने के विरुद्ध एनजीटी से कानूनी रोक।'
    },
    authority_forum: {
      en: 'District Magistrate / National Green Tribunal (NGT Eastern Bench)',
      bn: 'জেলাশাসক / ন্যাশনাল গ্রিন ট্রাইব্যুনাল (NGT)',
      hi: 'जिला मजिस्ट्रेट / नेशनल ग्रीन ट्रिब्यूनल (NGT)'
    },
    forum_type: 'NGT',
    is_complex: true,
    official_portal_url: 'https://greentribunal.gov.in/',
    statutory_timeframe: {
      en: 'Urgent (Stay in 7 to 15 days)',
      bn: 'জরুরি (৭ থেকে ১৫ দিনে স্থগিতাদেশ)',
      hi: 'अति आवश्यक (7 से 15 दिन)'
    },
    search_keywords: {
      en: ['illegal sand mining wb', 'ngt sand mining kolkata', 'riverbed erosion farm'],
      bn: ['অবৈধ বালি খাদান', 'নদী ভাঙন', 'গ্রিন ট্রাইব্যুনাল বালি'],
      hi: ['अवैध बालू खनन', 'एनजीटी कोलकाता', 'खेत कटाव रोकथाम']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Record geotagged photographs of mechanized excavators mining outside lease boundaries.',
        'Submit emergency complaint to District Mining Officer and Superintendent of Police.',
        'File Original Application (OA) before National Green Tribunal (Eastern Zone Bench).',
        'NGT halts mining, directs joint inspection, and levies environmental compensation.'
      ],
      bn: [
        'অনুমোদনহীন খননের জিপিএস যুক্ত ছবি ও ভিডিও রেকর্ড সংগ্রহ করুন।',
        'জেলা খনিজ আধিকারিক ও পুলিশ সুপারের কাছে জরুরি লিখিত অভিযোগ জানান।',
        'কলকাতায় অবস্থিত জাতীয় পরিবেশ আদালতে (NGT ইস্টার্ন বেঞ্চ) ওএ (OA) মামলা করুন।',
        'ট্রাইব্যুনাল বালি তোলা বন্ধ করে খননকারীদের ওপর পরিবেশ ক্ষতিপূরণ জরিমানা করবে।'
      ],
      hi: [
        'स्वीकृत पट्टे की सीमा से बाहर हो रहे खनन के जीपीएस फोटो व वीडियो साक्ष्य जुटाएं।',
        'जिला खनन अधिकारी एवं पुलिस अधीक्षक को तत्काल लिखित शिकायत प्रस्तुत करें।',
        'राष्ट्रीय हरित अधिकरण (NGT पूर्वी जोन, कोलकाता) में मूल याचिका (OA) दायर करें।',
        'एनजीटी द्वारा खनन पर रोक लगाकर दोषियों पर भारी पर्यावरण हर्जाना लगाया जाएगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-42-1',
        name: { en: 'Deed & Porcha proving Agricultural Riverbank Land', bn: 'নদীতীরবর্তী জমির দলিল ও খতিয়ান', hi: 'नदी किनारे कृषि जमीन का विलेख व पर्चा' },
        issuing_authority: { en: 'BL&LRO Office', bn: 'ভূমি দপ্তর', hi: 'भूमि राजस्व विभाग' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-43',
    title: {
      en: 'Eviction of Encroachers from Railway Siding Commercial Zones',
      bn: 'রেলওয়ে বা সরকারি করিডোর দখল উচ্ছেদ',
      hi: 'रेलवे या सरकारी सार्वजनिक भूमि से बेदखली नोटिस का बचाव'
    },
    relevant_act: 'Public Premises (Eviction of Unauthorised Occupants) Act, 1971',
    summary: {
      en: 'Defending long-term civilian occupants or merchants against summary eviction notices by public authorities.',
      bn: 'রেলওয়ে বা পোর্ট ট্রাস্টের জমিতে দীর্ঘদিনের বাসিন্দা বা ব্যবসায়ীদের উচ্ছেদ নোটিশের আইনি জবাব।',
      hi: 'रेलवे अथवा सार्वजनिक उपक्रमों की जमीन पर बसे पुराने निवासियों का विधिक बचाव।'
    },
    authority_forum: {
      en: 'Estate Officer -> District Judge (Appellate)',
      bn: 'এস্টেট অফিসার -> জেলা জজ (আপিল)',
      hi: 'एस्टेट ऑफिसर -> जिला जज'
    },
    forum_type: 'Civil_Court',
    is_complex: true,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '15-day show cause; 30-day appeal window',
      bn: '১৫ দিনের কারণ দর্শাও; ৩০ দিনে আপিল',
      hi: '15 दिन में जवाब; 30 दिन में अपील'
    },
    search_keywords: {
      en: ['ppe act eviction', 'railway land eviction', 'estate officer notice'],
      bn: ['রেলওয়ে উচ্ছেদ নোটিশ', 'পাবলিক প্রিমাইসেস অ্যাক্ট', 'এস্টেট অফিসার'],
      hi: ['रेलवे बेदखली नोटिस', 'पीपीई एक्ट', 'एस्टेट ऑफिसर अपील']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Receive show-cause notice under Section 4(1) of PPE Act from Estate Officer.',
        'File written reply asserting valid lease renewal or rehabilitation entitlement.',
        'Cross-examine authority surveyor regarding exact boundary right-of-way.',
        'If eviction order passes, file Statutory Appeal under Section 9 before District Judge.'
      ],
      bn: [
        'পাবলিক প্রিমাইসেস আইনের ধারা ৪(১) অনুযায়ী কারণ দর্শানোর নোটিশ গ্রহণ করুন।',
        'বৈধ লাইসেন্স নবায়ন বা সরকারি পুনর্বাসনের অধিকার দাবি করে লিখিত জবাব দিন।',
        'রেলওয়ের জমি পরিমাপকের কাছে মূল রাইট-অব-ওয়ে সীমানা নিয়ে জেরা করুন।',
        'উচ্ছেদের আদেশ হলে ৩০ দিনের মধ্যে জেলা জজ আদালতে ধারা ৯ অনুযায়ী আপিল করুন।'
      ],
      hi: [
        'पीपीई एक्ट की धारा 4(1) के तहत संपदा अधिकारी (Estate Officer) का नोटिस लें।',
        'वैध लीज, पुनर्वास नीति अथवा कब्जे के दस्तावेजों सहित लिखित प्रतिवाद करें।',
        'रेलवे अथवा सार्वजनिक उपक्रम के सर्वेक्षक से सटीक सीमा पर जिरह करें।',
        'बेदखली आदेश होने पर 30 दिन में जिला जज के समक्ष धारा 9 में वैधानिक अपील करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-43-1',
        name: { en: 'Section 4(1) PPE Act Show Cause Notice', bn: 'পাবলিক প্রিমাইসেস ধারা ৪(১) নোটিশ', hi: 'धारा 4(1) कारण बताओ नोटिस प्रति' },
        issuing_authority: { en: 'Estate Officer (Railways / Port Trust)', bn: 'রেলওয়ে এস্টেট অফিস', hi: 'रेलवे एस्टेट कार्यालय' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-44',
    title: {
      en: 'Ground Water Extraction & Farm Borewell Permissions',
      bn: 'সেচের সাবমার্সিবল পাম্প ও ভূগর্ভস্থ জল নিকাশী ছাড়পত্র',
      hi: 'कृषि सबमर्सिबल पंप एवं भूजल दोहन अनापत्ति अनुमति'
    },
    relevant_act: 'WB Ground Water Resources (Management, Control & Reg) Act, 2005',
    summary: {
      en: 'Rural & district focus: obtaining drilling permits for 5HP+ irrigation submersible pumps from SWID to prevent neighbor aquifer disputes.',
      bn: 'চাষের জমিতে শক্তিশালী সাবমার্সিবল বসাতে রাজ্য জল সম্পদ দপ্তরের সরকারি অনুমতি লাভ।',
      hi: 'खेतों में सिंचाई हेतु 5HP से अधिक सबमर्सिबल बोरवेल लगाने की सरकारी कानूनी अनुमति।'
    },
    authority_forum: {
      en: 'State / District Ground Water Authority (SWID)',
      bn: 'জেলা ভূগর্ভস্থ জল কর্তৃপক্ষ (SWID)',
      hi: 'जिला भूजल प्राधिकरण (SWID)'
    },
    forum_type: 'Competent_Authority',
    is_complex: false,
    official_portal_url: 'https://swidwb.gov.in/',
    statutory_timeframe: {
      en: '30 to 60 working days',
      bn: '৩০ থেকে ৬০ কার্যদিবস',
      hi: '30 से 60 कार्यदिवस'
    },
    search_keywords: {
      en: ['submersible pump permission', 'swid wb borewell', 'groundwater license'],
      bn: ['সাবমার্সিবল পারমিশন', 'বোরওয়েল লাইসেন্স', 'ভূগর্ভস্থ জল আইন'],
      hi: ['सबमर्सिबल अनुमति', 'बोरवेल परमिशन', 'भूजल लाइसेंस']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Submit Form-1 application for borewell sinking permit to District Authority (SWID).',
        'Attach land deeds, Mouza map, and distance certificates from neighboring wells.',
        'Technical site inspection by Geologist to assess local groundwater extraction.',
        'Issuance of registration certificate and permit specifying allowed extraction depth.'
      ],
      bn: [
        'জেলা জল সম্পদ দপ্তরে (SWID) সাবমার্সিবল পাম্প বসাতে ফর্ম-১ আবেদন জমা দিন।',
        'জমির দলিল, মৌজা ম্যাপ ও পার্শ্ববর্তী পাম্প থেকে দূরত্বের বিবরণ পেশ করুন।',
        'সরকারি ভূতত্ত্ববিদ সরেজমিনে জলের স্তর পরীক্ষা করে অনুমতি রিপোর্ট দেবেন।',
        'অনুমোদিত গভীরতা ও পাম্প চালানোর সময়সীমা উল্লেখ করে লাইসেন্স জারি করা হবে।'
      ],
      hi: [
        'जिला भूजल प्राधिकरण (SWID) में बोरवेल खनन हेतु फॉर्म-1 आवेदन प्रस्तुत करें।',
        'भूमि विलेख, मौजा नक्शा एवं नजदीकी नलकूपों से निर्धारित दूरी का विवरण दें।',
        'भूवैज्ञानिक द्वारा स्थल निरीक्षण कर भूजल दोहन की व्यवहार्यता जांची जाएगी।',
        'अधिकतम गहराई एवं संचालन शर्तों के साथ आधिकारिक बोरवेल परमिट जारी होगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-44-1',
        name: { en: 'Agricultural Land Title Porcha & Mouza Map', bn: 'কৃষি জমির পর্চা ও মৌজা সাইট ম্যাপ', hi: 'कृषि जमीन पर्चा एवं साइट नक्शा' },
        issuing_authority: { en: 'BL&LRO Office', bn: 'ভূমি দপ্তর', hi: 'भूमि राजस्व विभाग' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-45',
    title: {
      en: 'Forged Patwari/Amin Revenue Endorsements',
      bn: 'রাজস্ব কর্মচারীদের যোগসাজশে জাল রেকর্ড সংশোধন',
      hi: 'पटवारी/अमीन की मिलीभगत से बने फर्जी राजस्व रिकॉर्ड निरस्तीकरण'
    },
    relevant_act: 'Sec 51A(4), WBLR Act r/w Sec 336 BNS, 2023',
    summary: {
      en: 'Administrative cancellation of fraudulent Record-of-Rights created through departmental collusion with land mafias.',
      bn: 'অসৎ কর্মচারীদের যোগসাজশে খতিয়ানে অন্যের নাম তুলে দেওয়া ভুয়ো এন্ট্রি বাতিল।',
      hi: 'राजस्व कर्मियों की मिलीभगत से फर्जी तरीके से चढ़ाए गए नाम को रिकॉर्ड से कटवाना।'
    },
    authority_forum: {
      en: 'DL&LRO Vigilance / Special Investigation Team (CID)',
      bn: 'ডিএলঅ্যান্ডএলআরও ভিজিল্যান্স / সিআইডি (CID)',
      hi: 'डीएल एंड एलआरओ सतर्कता / सीआईडी'
    },
    forum_type: 'BL_LRO',
    is_complex: true,
    official_portal_url: 'https://banglarbhumi.gov.in/',
    statutory_timeframe: {
      en: '45 working days',
      bn: '৪৫ কার্যদিবস',
      hi: '45 कार्यदिवस'
    },
    search_keywords: {
      en: ['forged revenue record', 'corrupt patwari wb', '51a4 correction fraud'],
      bn: ['জাল রেকর্ড সংশোধন', 'দালাল চক্র খতিয়ান', 'ভূমি ভিজিল্যান্স'],
      hi: ['फर्जी राजस्व रिकॉर्ड', 'पटवारी धांधली', 'फर्जी खतियान निरस्तीकरण']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Apply for certified copies of original field notebook, Jamabandi, and mutation docket.',
        'File formal complaint detailing forgery before Additional District Magistrate (DL&LRO).',
        'DL&LRO initiates summary correction proceedings under Section 51A(4) WBLR Act.',
        'Erroneous digital entries purged, historical title restored, and inquiry ordered.'
      ],
      bn: [
        'বিএলঅ্যান্ডএলআরও অফিস থেকে মূল ফিল্ড নোটবুক ও রেজিস্টার খাতার কপি তুলুন।',
        'জালিয়াতির বিশদ বিবরণ দিয়ে অতিরিক্ত জেলাশাসক (ভূমি)-এর কাছে নালিশ জানান।',
        'ডব্লুবিএলআর আইনের ধারা ৫১এ(৪) অনুযায়ী রেকর্ড বাতিলের মামলা শুরু হবে।',
        'জাল রেকর্ড মুছে দিয়ে পূর্বতন বৈধ মালিকের নাম অনলাইনে পুনর্বহাল করা হবে।'
      ],
      hi: [
        'रिकॉर्ड रूम से मूल फील्ड नोटबुक, जमाबंदी एवं म्यूटेशन पत्रावली की नकल लें।',
        'अपर जिला मजिस्ट्रेट (भूमि) के समक्ष धोखाधड़ी की लिखित शिकायत प्रस्तुत करें।',
        'धारा 51A(4) के तहत त्वरित कार्यवाही कर फर्जी प्रविष्टियों की जांच होगी।',
        'फर्जी नाम पोर्टल से हटाकर वैध भूस्वामी का नाम पुनः बहाल किया जाएगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-45-1',
        name: { en: 'Certified Copy of Historical Jamabandi Volume', bn: 'মূল রেজিস্টার ভলিউমের সার্টিফাইড কপি', hi: 'मूल जमाबंदी रजिस्टर की प्रमाणित नकल' },
        issuing_authority: { en: 'DL&LRO Record Room', bn: 'জেলা রেকর্ড রুম', hi: 'जिला अभिलेखागार' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-46',
    title: {
      en: 'Separation of Joint Khasra/Chittas & Demarcation',
      bn: 'যৌথ দাগের নকশা ভিত্তিক ভাগ ও সীমানা নিরূপণ',
      hi: 'संयुक्त खसरे/प्लॉट का नक्शा आधारित भौतिक विभाजन (बटाक)'
    },
    relevant_act: 'Order XXVI CPC r/w West Bengal Land Reforms Manual',
    summary: {
      en: 'Field partition, pillar installation, and issuance of separate sub-plot numbers (Batag numbers) on joint land.',
      bn: 'যৌথ দাগের জমি সরকারি নকশা অনুযায়ী আলাদা করে বাটা দাগ তৈরি ও সীমানা নির্ধারণ।',
      hi: 'संयुक्त खाते की जमीन पर अमीन द्वारा नापी कर अलग-अलग बटाक नंबर व सीमांकन कराना।'
    },
    authority_forum: {
      en: 'BL&LRO Survey Wing / Civil Court',
      bn: 'বিএলঅ্যান্ডএলআরও সার্ভে বিভাগ / আদালত',
      hi: 'बीएल एंड एलआरओ सर्वेक्षण शाखा'
    },
    forum_type: 'BL_LRO',
    is_complex: false,
    official_portal_url: 'https://banglarbhumi.gov.in/',
    statutory_timeframe: {
      en: '30 to 60 working days',
      bn: '৩০ থেকে ৬০ কার্যদিবস',
      hi: '30 से 60 कार्यदिवस'
    },
    search_keywords: {
      en: ['batag number plot', 'khasra separation', 'joint plot division wb'],
      bn: ['বাটা দাগ', 'যৌথ দাগ ভাগ', 'প্লট ডিমারকেশন'],
      hi: ['बटाक नंबर', 'खसरा विभाजन', 'संयुक्त प्लॉट सीमांकन']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'File joint demarcation petition signed by co-sharers before BL&LRO.',
        'Pay statutory survey fee via GRIPS challan and secure official date.',
        'Revenue Amin visits plot with Total Station and drives concrete boundary pillars.',
        'BL&LRO survey division updates Mouza map with new sub-plot (Bata) numbers.'
      ],
      bn: [
        'সমস্ত অংশীদারদের স্বাক্ষরসহ বিএলঅ্যান্ডএলআরও-তে সীমানা ভাগের দরখাস্ত দিন।',
        'GRIPS চালানের মাধ্যমে সরকারি জরিপ ফি ট্রেজারিতে জমা করুন।',
        'সরকারি আমিন মাঠে উপস্থিত হয়ে পরিমাপ শেষে সীমানা পিলার বসিয়ে দেবেন।',
        'ভূমি দপ্তর মৌজা ম্যাপে নতুন বাটা দাগ কেটে পৃথক খতিয়ান প্রস্তুত করবে।'
      ],
      hi: [
        'सभी सह-खातेदारों के हस्ताक्षर युक्त विभाजन आवेदन बीएल एंड एलआरओ में दें।',
        'GRIPS पोर्टल पर निर्धारित सरकारी सर्वेक्षण शुल्क का भुगतान करें।',
        'राजस्व अमीन स्थल पर आकर नापी करेंगे एवं कंक्रीट के सीमा पिलर गाड़ेंगे।',
        'सर्वेक्षण विभाग द्वारा नक्शे पर नया बटाक नंबर दर्ज कर अलग पर्चा जारी होगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-46-1',
        name: { en: 'Co-Sharers Partition Deed / Consent Affidavit', bn: 'আপস-বণ্টননামা বা সম্মতি হলফনামা', hi: 'पारस्परिक विभाजन विलेख / सहमति पत्र' },
        issuing_authority: { en: 'Notary Public / Sub-Registrar', bn: 'নোটারি / সাব-রেজিস্ট্রার', hi: 'नोटरी / उप-पंजीयक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-47',
    title: {
      en: 'Easement of Necessity for Landlocked Plots',
      bn: 'চারিদিক ঘেরা জমির আইনি চলাচলের রাস্তা আদায়',
      hi: 'चारों तरफ से घिरी जमीन हेतु अनिवार्य रास्ते का अधिकार (आवश्यकता का सुखाधिकार)'
    },
    relevant_act: 'Sec 13, Indian Easements Act, 1882',
    summary: {
      en: 'Securing pedestrian and vehicular ingress/egress over surrounding plots following severance of ancestral land.',
      bn: 'অন্যের জমি দিয়ে ঘেরা হয়ে পড়া জমিতে আইন অনুযায়ী নিকাশী ও চলাচলের রাস্তা আদায়ের মামলা।',
      hi: 'पैतृक बंटवारे के बाद रास्ते से वंचित हुई जमीन हेतु पड़ोसी के खेत से रास्ता पाने का वाद।'
    },
    authority_forum: {
      en: 'Civil Court (Junior Division)',
      bn: 'দেওয়ানি আদালত (জুনিয়র ডিভিশন)',
      hi: 'सिविल न्यायालय (जूनियर डिवीजन)'
    },
    forum_type: 'Civil_Court',
    is_complex: false,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '6 months to 1 year',
      bn: '৬ মাস থেকে ১ বছর',
      hi: '6 माह से 1 वर्ष'
    },
    search_keywords: {
      en: ['easement of necessity', 'landlocked plot path', 'section 13 easements'],
      bn: ['আবদ্ধ জমির রাস্তা', 'নেসেসিটি এজমেন্ট', 'চলাচলের আইনি পথ'],
      hi: ['घिरी जमीन का रास्ता', 'आवश्यकता का सुखाधिकार', 'खेत का रास्ता वाद']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Produce original parent partition deed showing disputed land was severed from common holding.',
        'File Civil Suit for Declaration of Easement of Necessity under Section 13.',
        'Move application for Advocate Commissioner to verify that no alternative access exists.',
        'Court decrees minimum motorable pathway (8 to 12 feet) over surrounding land.'
      ],
      bn: [
        'মূল বণ্টন দলিল দাখিল করে প্রমাণ করুন জমিটি একসময় বৃহত্তর জোতের অংশ ছিল।',
        'ভারতীয় এজমেন্ট আইনের ধারা ১৩ অনুযায়ী চলাচলের রাস্তা চেয়ে মামলা করুন।',
        'কোর্ট কমিশনার নিয়োগ করিয়ে আদালতে প্রমাণ দিন যে বিকল্প কোনো পথ নেই।',
        'আদালত প্রতিবেশীর জমির ওপর দিয়ে ন্যূনতম ৮ থেকে ১২ ফুটের রাস্তা মঞ্জুর করবে।'
      ],
      hi: [
        'मूल विभाजन विलेख से सिद्ध करें कि यह जमीन पहले एक ही बड़े भूखंड का हिस्सा थी।',
        'सुखाधिकार अधिनियम की धारा 13 के तहत दीवानी न्यायालय में वाद दायर करें।',
        'कोर्ट कमिश्नर द्वारा स्थल मुआयना कराकर सिद्ध करें कि अन्य कोई रास्ता उपलब्ध नहीं है।',
        'अदालत द्वारा पड़ोसी की भूमि से 8 से 12 फीट चौड़ा न्यूनतम रास्ता डिक्री किया जाएगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-47-1',
        name: { en: 'Parent Partition Deed proving Severance', bn: 'মূল বণ্টন দলিল বা খতিয়ান', hi: 'मूल पारिवारिक विभाजन विलेख' },
        issuing_authority: { en: 'Sub-Registrar Office (ADSR)', bn: 'সাব-রেজিস্ট্রার অফিস', hi: 'उप-पंजीयक कार्यालय' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-48',
    title: {
      en: 'Restoration of Alienated Scheduled Caste Land',
      bn: 'তপশিলি জাতিভুক্ত কৃষকদের জমি হস্তান্তর প্রতিরোধ',
      hi: 'अनुसूचित जाति (SC) किसानों की अवैध अंतरित भूमि बहाली'
    },
    relevant_act: 'State Agrarian Welfare Regulations r/w Article 15(4)',
    summary: {
      en: 'Rural & district focus: setting aside unapproved distress sales of agricultural holdings belonging to Scheduled Caste farmers.',
      bn: 'অনুমতি ছাড়া অভাবের সুযোগ নিয়ে কেনা তপশিলি কৃষকদের জমি বাতিল ও জমি ফেরত।',
      hi: 'मजबूरी का लाभ उठाकर बिना अनुमति खरीदी गई दलित/एससी किसानों की जमीन को वापस दिलाना।'
    },
    authority_forum: {
      en: 'Sub-Divisional Officer (SDO) / District Magistrate',
      bn: 'মহকুমা শাসক (SDO) / জেলাশাসক',
      hi: 'अनुमंडल दंडाधिकारी (SDO) / जिला कलेक्टर'
    },
    forum_type: 'Competent_Authority',
    is_complex: true,
    official_portal_url: 'https://banglarbhumi.gov.in/',
    statutory_timeframe: {
      en: 'Within 30 to 60 days',
      bn: '৩০ থেকে ৬০ কার্যদিবস',
      hi: '30 से 60 कार्यदिवस'
    },
    search_keywords: {
      en: ['sc land transfer', 'scheduled caste restoration', 'sdo sc land appeal'],
      bn: ['তপশিলি জমি রক্ষা', 'এসসি জমি পুনরুদ্ধার', 'মহকুমা শাসক জমি'],
      hi: ['एससी जमीन बहाली', 'अनुसूचित जाति भूमि संरक्षण', 'एसडीओ जमीन वाद']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'File restoration petition before Sub-Divisional Officer (SDO).',
        'Submit proof that transferor belongs to Scheduled Caste community and lacked DM nod.',
        'SDO summons buyer and conducts summary inquiry into consideration adequacy.',
        'SDO annuls sale deed, cancels mutation, and restores physical possession.'
      ],
      bn: [
        'মহকুমা শাসকের (SDO) কাছে জমি পুনরুদ্ধারের আবেদন পেশ করুন।',
        'প্রমাণপত্র দিন যে বিক্রেতা তপশিলি জাতিভুক্ত এবং বিক্রিতে জেলাশাসকের অনুমতি ছিল না।',
        'এসডিও ক্রেতাকে তলব করে জবরদস্তি ও নামমাত্র মূল্যের বিষয়টি খতিয়ে দেখবেন।',
        'এসডিও বিক্রয় দলিল ও মিউটেশন বাতিল করে কৃষককে দখল ফেরত দেওয়ার আদেশ দেবেন।'
      ],
      hi: [
        'अनुमंडल दंडाधिकारी (एसडीओ) के समक्ष जमीन बहाली याचिका प्रस्तुत करें।',
        'प्रमाण दें कि विक्रेता अनुसूचित जाति का है और बिना सरकारी अनुमति रजिस्ट्री हुई।',
        'एसडीओ खरीदार को तलब कर धन की पर्याप्तता एवं दबाव की जांच करेंगे।',
        'अवैध बिक्री रद्द कर म्यूटेशन खारिज किया जाएगा एवं किसान को कब्जा वापस मिलेगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-48-1',
        name: { en: 'SC Caste Certificate & Revenue Record', bn: 'তপশিলি জাতি শংসাপত্র ও জমির খতিয়ান', hi: 'जाति प्रमाणपत्र एवं संबंधित खतियान' },
        issuing_authority: { en: 'Sub-Divisional Officer (SDO)', bn: 'মহকুমা শাসক', hi: 'एसडीओ कार्यालय' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-49',
    title: {
      en: 'Suit for Mesne Profits from Illegal Cultivation',
      bn: 'জমি দখলের ফসল ও বেআইনি আয়ের ক্ষতিপূরণ মামলা',
      hi: 'अवैध खेती से अर्जित आय एवं हर्जाना वसूली का वाद (मेस्ने प्रॉफिट्स)'
    },
    relevant_act: 'Sec 2(12) & Order XX Rule 12, CPC, 1908',
    summary: {
      en: 'Recovering market value of crops, seasonal yield, and interest generated by a trespasser during unlawful occupation.',
      bn: 'জমি জবরদখল করে অন্য কেউ ফসল বিক্রি করলে সেই উপার্জিত অর্থ ও সুদ আদায়ের মামলা।',
      hi: 'जमीन पर अवैध कब्जा कर फसल बेचने वालों से पूरी उपज राशि ब्याज सहित वसूलना।'
    },
    authority_forum: {
      en: 'Civil Court (Senior Division)',
      bn: 'দেওয়ানি আদালত (সিনিয়র ডিভিশন)',
      hi: 'सिविल न्यायालय (सीनियर डिवीजन)'
    },
    forum_type: 'Civil_Court',
    is_complex: true,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '1 to 2 years',
      bn: '১ থেকে ২ বছর',
      hi: '1 से 2 वर्ष'
    },
    search_keywords: {
      en: ['mesne profits land', 'illegal cultivation damages', 'order 20 rule 12 cpc'],
      bn: ['মেসনে প্রফিট', 'ফসলের ক্ষতিপূরণ', 'দখলদারির জরিমানা'],
      hi: ['मेस्ने प्रॉफिट्स', 'फसल हर्जाना वाद', 'अवैध जोत मुआवजा']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain preliminary decree declaring lawful ownership and wrongful dispossession.',
        'File application under Order XX Rule 12 CPC praying for inquiry into mesne profits.',
        'Produce local mandi crop yield receipts and agricultural market prices for disputed years.',
        'Court passes final decree directing trespasser to pay assessed sum plus 6% annual interest.'
      ],
      bn: [
        'আদালত থেকে প্রাথমিক ডিক্রি নিয়ে বেআইনি দখল ও স্বত্ব প্রমাণ করুন।',
        'অর্ডার ২০ রুল ১২ সিপিসি অনুযায়ী দখলকালীন আয়ের তদন্তের আবেদন দিন।',
        'স্থানীয় কৃষি মান্ডি থেকে ফসলের তৎকালীন পাইকারি বাজার দর জমা করুন।',
        'আদালত চূড়ান্ত ডিক্রি জারি করে দখলদারকে ৬% সুদসহ সমস্ত টাকা পরিশোধের নির্দেশ দেবে।'
      ],
      hi: [
        'अदालत से प्रारंभिक डिक्री प्राप्त कर साबित करें कि प्रतिवादी का कब्जा अवैध था।',
        'आदेश 20 नियम 12 सीपीसी के तहत अवैध जोत से हुई आय की न्यायिक जांच का आवेदन दें।',
        'कृषि मंडी से उस अवधि के फसल उत्पादन एवं बाजार मूल्य के प्रमाण पेश करें।',
        'अदालत कब्जाधारी को संपूर्ण फसल मूल्य 6% वार्षिक ब्याज सहित चुकाने की डिक्री देगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-49-1',
        name: { en: 'Agricultural Market Committee (Mandi) Rate Certificates', bn: 'কৃষি মান্ডির ফসল মূল্যের প্রত্যয়িত কপি', hi: 'कृषि उपज मंडी समिति दर प्रमाणपत्र' },
        issuing_authority: { en: 'Regulated Market Committee', bn: 'কৃষি বিপণন দপ্তর', hi: 'कृषि विपणन बोर्ड' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-50',
    title: {
      en: 'Solar & Wind Power Project Land Lease Disputes',
      bn: 'সৌর বিদ্যুৎ প্রকল্পের জমি ইজারা চুক্তি ভঙ্গ ও ক্ষতিপূরণ',
      hi: 'सौर एवं पवन ऊर्जा परियोजना भूमि पट्टा विवाद एवं किराया वसूली'
    },
    relevant_act: 'Indian Contract Act, 1872 & Transfer of Property Act',
    summary: {
      en: 'Enforcing non-payment of guaranteed monthly lease rents by renewable energy developers on rural farmland.',
      bn: 'সোলার প্ল্যান্টের জন্য দেওয়া জমিতে প্রতিশ্রুত মাসিক ভাড়া না দিলে চুক্তিভঙ্গ ও ক্ষতিপূরণের মামলা।',
      hi: 'सौर ऊर्जा कंपनियों द्वारा किसानों को लीज किराया न देने पर अनुबंध निरस्तीकरण व वसूली।'
    },
    authority_forum: {
      en: 'Commercial Court / High Court',
      bn: 'বাণিজ্যিক আদালত / হাইকোর্ট',
      hi: 'वाणिज्यिक न्यायालय / उच्च न्यायालय'
    },
    forum_type: 'Commercial_Court',
    is_complex: true,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '6 months to 1 year',
      bn: '৬ মাস থেকে ১ বছর',
      hi: '6 माह से 1 वर्ष'
    },
    search_keywords: {
      en: ['solar farm land dispute', 'renewable lease rent default', 'commercial lease farm'],
      bn: ['সোলার জমি লিজ', 'বিদ্যুৎ প্রকল্প ভাড়া ফাঁকি', 'বাণিজ্যিক জমি বিরোধ'],
      hi: ['सोलर प्लांट लीज विवाद', 'ऊर्जा परियोजना किराया', 'वाणिज्यिक पट्टा उल्लंघन']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Issue formal 30-day default notice citing unpaid monthly lease rent and escalation.',
        'If solar firm defaults, file Commercial Suit under Commercial Courts Act, 2015.',
        'Pray for attachment of revenue generated from grid electricity feed to discoms (WBSEDCL).',
        'Obtain eviction order, compensation decree, and unencumbered land restoration.'
      ],
      bn: [
        'বকেয়া লিজ ভাড়া ও সুদ পরিশোধের দাবি জানিয়ে কোম্পানিকে ৩০ দিনের নোটিশ দিন।',
        'বকেয়া না মেটালে বাণিজ্যিক আদালত আইন ২০১৫ অনুযায়ী কমার্শিয়াল স্যুট করুন।',
        'বিদ্যুৎ বণ্টনকারী সংস্থাকে (WBSEDCL) গ্রিড বিলের টাকা আদালতে জমার নির্দেশ করান।',
        'আদালতের মাধ্যমে জমি থেকে প্ল্যান্টের সরঞ্জাম সরিয়ে পূর্ণ ক্ষতিপূরণ আদায় করুন।'
      ],
      hi: [
        'अनुबंध की शर्तों के अनुसार 30 दिनों का वैधानिक किराया मांग नोटिस भेजें।',
        'कंपनी द्वारा भुगतान न करने पर वाणिज्यिक न्यायालय अधिनियम 2015 में वाद करें।',
        'पावर ग्रिड को बेची जा रही बिजली के भुगतान को अदालत में कुर्क करने की मांग करें।',
        'अदालत से कंपनी को बेदखल कर उपकरण हटाने एवं पूरा किराया वसूलने की डिक्री लें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-50-1',
        name: { en: 'Registered Long-Term Solar Lease Agreement', bn: 'রেজিস্ট্রি সোলার লিজ চুক্তিপত্র', hi: 'पंजीकृत सौर ऊर्जा लीज अनुबंध' },
        issuing_authority: { en: 'Sub-Registrar Office (ADSR)', bn: 'সাব-রেজিস্ট্রার অফিস', hi: 'उप-पंजीयक कार्यालय' },
        is_mandatory: true
      }
    ]
  }
];