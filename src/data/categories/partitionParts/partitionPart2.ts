import type { CivilSubCategory } from '../../../types/legal';

export const partitionPart2: CivilSubCategory[] = [
  {
    id: 'sub-partition-26',
    productCategory: 'lawyer-only',
    title: {
      en: 'Multi-State Estate Administration & Ancillary Letters',
      bn: 'একাধিক রাজ্যে ছড়ানো স্থাবর সম্পত্তির লেটার্স অব অ্যাডমিনিস্ট্রেশন',
      hi: 'विभिन्न राज्यों में स्थित संपत्तियों हेतु एकल लेटर्स ऑफ एडमिनिस्ट्रेशन'
    },
    relevant_act: 'Sec 270 & 273, Indian Succession Act, 1925',
    summary: {
      en: 'Securing a single nationwide grant of probate or letters of administration covering real estate situated in Kolkata, Delhi, and Mumbai.',
      bn: 'কলকাতা, দিল্লি বা অন্য রাজ্যে থাকা সম্পত্তি একটিমাত্র হাইকোর্ট নির্দেশে পরিচালনার অধিকার লাভ।',
      hi: 'कई राज्यों में फैली जमीन-जायदाद के लिए कलकत्ता हाईकोर्ट से अखिल भारतीय प्रबंध पत्र प्राप्त करना।'
    },
    authority_forum: {
      en: 'High Court at Calcutta (Original Civil Jurisdiction)',
      bn: 'কলকাতা হাইকোর্ট (অরিজিনাল সিভিল বেঞ্চ)',
      hi: 'कलकत्ता उच्च न्यायालय (मूल दीवानी शाखा)'
    },
    forum_type: 'High_Court',
    is_complex: true,
    official_portal_url: 'https://calcuttahighcourt.gov.in/',
    statutory_timeframe: {
      en: '6 months to 1 year',
      bn: '৬ মাস থেকে ১ বছর',
      hi: '6 माह से 1 वर्ष'
    },
    search_keywords: {
      en: ['section 273 isa nationwide effect', 'ancillary probate multiple states', 'calcutta high court letters of administration'],
      bn: ['একাধিক রাজ্যে সম্পত্তি উইল', 'হাইকোর্ট সারা ভারত প্রোবেট', 'ধারা ২৭৩ সাকসেশন'],
      hi: ['अखिल भारतीय प्रोबेट', 'धारा 273 भारतीय उत्तराधिकार', 'विभिन्न राज्यों में संपत्ति अधिकार']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Prepare comprehensive asset inventory listing property coordinates across West Bengal and other states.',
        'File petition under Section 270 ISA before High Court where deceased had permanent abode.',
        'Pray for explicit endorsement under Section 273 extending grant across all states in India.',
        'Use single certified High Court grant to mutate properties directly before other state registries.'
      ],
      bn: [
        'পশ্চিমবঙ্গ ও অন্যান্য রাজ্যে থাকা সমস্ত জমির দাগ ও ব্যাঙ্ক ব্যালেন্সের তালিকা বানান।',
        'কলকাতা হাইকোর্টের অরিজিনাল সাইডে ধারা ২৭০ অনুযায়ী একক পিটিশন দাখিল করুন।',
        'আদালতে আবেদন করুন যেন ধারা ২৭৩ অনুযায়ী এই আদেশ ভারতের সমস্ত রাজ্যের ওপর কার্যকর হয়।',
        'হাইকোর্টের সার্টিফাইড কপি নিয়ে অন্য রাজ্যের ভূমি দপ্তরে সরাসরি মিউটেশন সম্পন্ন করুন।'
      ],
      hi: [
        'पश्चिम बंगाल सहित अन्य राज्यों की संपत्तियों का विस्तृत ब्योरा तैयार करें।',
        'कलकत्ता हाईकोर्ट में धारा 270 के तहत एकल लेटर्स ऑफ एडमिनिस्ट्रेशन याचिका दें।',
        'धारा 273 के तहत संपूर्ण भारत में प्रभावी होने का विशेष आदेश मांगें।',
        'हाईकोर्ट के इस एकल आदेश से अन्य राज्यों के रजिस्ट्री कार्यालयों में सीधे म्यूटेशन कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-26-1',
        name: { en: 'Multi-State Asset Schedule & Title Deeds', bn: 'একাধিক রাজ্যের সম্পত্তির তফসিল ও দলিল', hi: 'विभिन्न राज्यों की संपत्ति अनुसूची एवं विलेख' },
        issuing_authority: { en: 'Respective State Sub-Registrars', bn: 'ভূমি দপ্তরসমূহ', hi: 'संबंधित राज्यों के पंजीयन कार्यालय' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-27',
    productCategory: 'lawyer-only',
    title: {
      en: 'Probate of Lost, Destroyed or Burned Wills',
      bn: 'হারিয়ে যাওয়া, পুড়ে যাওয়া বা নষ্ট উইলের প্রোবেট প্রাপ্তি',
      hi: 'खोई, जली या नष्ट हुई वसीयत का प्रोबेट प्राप्त करना'
    },
    relevant_act: 'Sec 237–240, Indian Succession Act, 1925',
    summary: {
      en: 'Obtaining probate for an unrevoked Will that was lost, accidentally destroyed, or burned in a fire after the testator demise.',
      bn: 'অগ্নিকাণ্ডে বা দুর্ঘটনায় মূল উইল নষ্ট হয়ে গেলে তার ড্রাফট বা ফটোকপি প্রমাণ করে প্রোবেট হাসিল।',
      hi: 'मूल वसीयत खो जाने या जल जाने पर उसकी फोटोकॉपी व गवाहों द्वारा अदालत से प्रोबेट लेना।'
    },
    authority_forum: {
      en: 'District Judge / High Court at Calcutta',
      bn: 'জেলা জজ আদালত / কলকাতা হাইকোর্ট',
      hi: 'जिला जज न्यायालय / कलकत्ता उच्च न्यायालय'
    },
    forum_type: 'High_Court',
    is_complex: true,
    official_portal_url: 'https://calcuttahighcourt.gov.in/',
    statutory_timeframe: {
      en: '6 months to 1 year',
      bn: '৬ মাস থেকে ১ বছর',
      hi: '6 माह से 1 वर्ष'
    },
    search_keywords: {
      en: ['probate of lost will', 'section 237 isa', 'burned will probate'],
      bn: ['হারানো উইলের প্রোবেট', 'পোড়া উইল প্রমাণ', 'ধারা ২৩৭ ইন্ডিয়ান সাকসেশন'],
      hi: ['खोई वसीयत का प्रोबेट', 'नष्ट वसीयत साबित करना', 'धारा 237 उत्तराधिकार']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Retrieve drafts, photocopies, or digital Word/PDF scans preserved by drafting advocate.',
        'File petition under Section 237 or 238 ISA for probate of Will limited until original is produced.',
        'Examine drafting lawyer and attesting witnesses to prove due execution and lack of intent to revoke.',
        'Court issues limited probate confirming reconstructed text as authentic last testamentary Will.'
      ],
      bn: [
        'আইনজীবীর কাছে সংরক্ষিত উইলের খসড়া, ফটোকপি বা কম্পিউটারের ডিজিটাল কপি উদ্ধার করুন।',
        'মূল কপি না পাওয়া পর্যন্ত ধারা ২৩৭ অনুযায়ী সীমিত প্রোবেটের আবেদন দাখিল করুন।',
        'আইনজীবী ও সনাক্তকারী সাক্ষীদের জেরা করিয়ে প্রমাণ করুন উইলটি কখনো বাতিল করা হয়নি।',
        'আদালত ফটোকপিটিকেই সত্য উইল হিসেবে স্বীকৃতি দিয়ে সীমিত প্রোবেট মঞ্জুর করবে।'
      ],
      hi: [
        'अधिवक्ता के पास सुरक्षित वसीयत का ड्राफ्ट, फोटोकॉपी अथवा डिजिटल कॉपी निकालें।',
        'धारा 237 के तहत मूल मिलने तक सीमित प्रोबेट (Limited Probate) हेतु याचिका दें।',
        'वसीयत लिखने वाले वकील एवं गवाहों से गवाही कराकर साबित करें कि इसे रद्द नहीं किया गया था।',
        'अदालत फोटोकॉपी को ही वैध अंतिम वसीयत मानते हुए प्रोबेट प्रमाणपत्र जारी करेगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-27-1',
        name: { en: 'Photocopy / Draft of Lost Will & Advocate Confirmation Affidavit', bn: 'উইলের ফটোকপি ও আইনজীবীর সত্যতা হলফনামা', hi: 'खोई वसीयत की फोटोकॉपी एवं अधिवक्ता का शपथ पत्र' },
        issuing_authority: { en: 'Drafting Advocate / Applicant', bn: 'বিজ্ঞ আইনজীবী', hi: 'अधिवक्ता / आवेदक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-28',
    productCategory: 'lawyer-only',
    title: {
      en: 'Oral (Nuncupative) Wills for Soldiers & Defense Personnel',
      bn: 'সেনাকর্মী ও নাবিকদের যুদ্ধকালীন মৌখিক উইলের আইনি মান্যতা',
      hi: 'सैनिकों एवं नौसैनिकों की मौखिक (विशेषाधिकृत) वसीयत की वैधता'
    },
    relevant_act: 'Sec 66, Indian Succession Act, 1925 (Privileged Wills)',
    summary: {
      en: 'Establishing the validity of unwritten, oral testamentary declarations made by soldiers on active military duty before two witnesses.',
      bn: 'যুদ্ধক্ষেত্রে কর্মরত সেনাকর্মী ও নাবিকদের দুজন সাক্ষীর সামনে বলা মৌখিক উইল আইনিভাবে কার্যকর করার নিয়ম।',
      hi: 'युद्धक्षेत्र में तैनात सैनिकों द्वारा दो गवाहों के सामने मौखिक रूप से की गई वसीयत को कानूनी मान्यता दिलाना।'
    },
    authority_forum: {
      en: 'District Delegate / Civil Court',
      bn: 'জেলা ডেলিগেট / দেওয়ানি আদালত',
      hi: 'जिला डेलीगेट / सिविल न्यायालय'
    },
    forum_type: 'Civil_Court',
    is_complex: false,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '3 to 6 months',
      bn: '৩ থেকে ৬ মাস',
      hi: '3 থেকে 6 माह'
    },
    search_keywords: {
      en: ['privileged will soldier', 'oral will military section 66', 'nuncupative will india'],
      bn: ['মৌখিক উইল সেনা', 'প্রিভিলেজড উইল', 'ধারা ৬৬ ইন্ডিয়ান সাকসেশন'],
      hi: ['सैनिकों की मौखिक वसीयत', 'प्रिविलेज्ड विल', 'धारा 66 सैन्य वसीयत']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Collect military service records proving deceased soldier was deployed on active expedition.',
        'Secure sworn affidavits from two independent witnesses who heard deceased speak wishes aloud.',
        'File petition for Letters of Administration with oral Will annexed under Section 66 ISA.',
        'Court dispenses with formal written execution formalities and issues administration rights.'
      ],
      bn: [
        'সেনা রেকর্ড সংগ্রহ করে প্রমাণ করুন নিহত সেনাকর্মী সক্রিয় সামরিক অভিযানে মোতায়েন ছিলেন।',
        'মৌখিক ইচ্ছা শুনেছেন এমন দুজন নিরপেক্ষ সহযোদ্ধার শপথযুক্ত হলফনামা নিন।',
        'ধারা ৬৬ অনুযায়ী মৌখিক উইলের ভিত্তিতে লেটার্স অব অ্যাডমিনিস্ট্রেশনের মামলা করুন।',
        'আদালত লিখিত দলিলের বাধ্যবাধকতা শিথিল করে মৌখিক উইলের ভিত্তিতে স্বত্ব হস্তান্তর করবে।'
      ],
      hi: [
        'सैन्य सेवा रिकॉर्ड से सिद्ध करें कि सैनिक सक्रिय युद्ध या सैन्य अभियान पर तैनात था।',
        'सैनिक की अंतिम इच्छा सुनने वाले दो स्वतंत्र गवाहों के शपथ पत्र एकत्र करें।',
        'धारा 66 के तहत मौखिक वसीयत के आधार पर लेटर्स ऑफ एडमिनिस्ट्रेशन की अर्जी दें।',
        'अदालत लिखित विलेख की अनिवार्यता से छूट देकर मौखिक वसीयत को मान्यता प्रदान करेगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-28-1',
        name: { en: 'Military Active Deployment Records & Witness Affidavits', bn: 'সেনা চাকরির রেকর্ড ও সহযোদ্ধাদের হলফনামা', hi: 'सक्रिय सैन्य तैनाती रिकॉर्ड एवं गवाहों के शपथ पत्र' },
        issuing_authority: { en: 'Ministry of Defence / Army Records Office', bn: 'প্রতিরক্ষা মন্ত্রক', hi: 'रक्षा मंत्रालय' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-29',
    productCategory: 'lawyer-only',
    title: {
      en: 'Partition of Family Business Assets & Firm Goodwill',
      bn: 'পারিবারিক ব্যবসা, পার্টনারশিপ ফার্ম ও গুডউইল বণ্টন মামলা',
      hi: 'पारिवारिक व्यापार, फर्म एवं साख (Goodwill) का बंटवारा वाद'
    },
    relevant_act: 'Sec 44, Indian Partnership Act, 1932 & Order XX Rule 15 CPC',
    summary: {
      en: 'Appointing an independent valuer to assess family brand trademarks, factory inventory, and distribution goodwill for equitable division.',
      bn: 'পারিবারিক দোকান বা কারখানার স্টক, ব্র্যান্ডের নাম ও সুনাম (Goodwill) মূল্যায়ন করে সমান ভাগে ভাগ।',
      hi: 'पारिवारिक पुश्तैनी व्यापार, दुकान की साख एवं ब्रांड का सीए से मूल्यांकन कराकर बंटवारा कराना।'
    },
    authority_forum: {
      en: 'Commercial Court / Civil Court (Senior Division)',
      bn: 'বাণিজ্যিক আদালত / দেওয়ানি আদালত (সিনিয়র ডিভিশন)',
      hi: 'वाणिज्यिक न्यायालय / सिविल कोर्ट'
    },
    forum_type: 'Commercial_Court',
    is_complex: true,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '1 to 2 years',
      bn: '১ থেকে ২ বছর',
      hi: '1 से 2 वर्ष'
    },
    search_keywords: {
      en: ['family business partition', 'goodwill division partnership', 'commercial dissolution family'],
      bn: ['পারিবারিক ব্যবসা ভাগ', 'পার্টনারশিপ ফার্ম বণ্টন', 'গুডউইল ভাগাভাগি'],
      hi: ['पारिवारिक व्यापार बंटवारा', 'फर्म साख विभाजन', 'दुकान बंटवारा वाद']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'File Civil Suit for Dissolution of Partnership and Division of Family Business Assets.',
        'Move urgent application under Order XL CPC for appointment of a Court Receiver over daily cash counters.',
        'Court appoints Chartered Accountant to value brand goodwill, stocks, and intellectual property.',
        'Pass preliminary decree either auctioning business internally between family branches or dividing sale sum.'
      ],
      bn: [
        'পারিবারিক অংশীদারি ব্যবসা ভেঙে সমস্ত সম্পত্তি ভাগের জন্য দেওয়ানি আদালতে মামলা করুন।',
        'অর্ডার ৪০ সিপিসি অনুযায়ী ক্যাশ কাউন্টার ও ব্যাঙ্ক অ্যাকাউন্টের ওপর কোর্ট রিসিভার বসান।',
        'স্বাধীন চার্টার্ড অ্যাকাউন্ট্যান্ট দিয়ে ব্র্যান্ড গুডউইল ও স্টকের বাজার মূল্য নির্ধারণ করান।',
        'আদালত রায় দিয়ে ভাইদের মধ্যে ব্যবসায়ী নিলাম ডাকবে অথবা ব্যবসা বিক্রি করে অর্থ ভাগ করে দেবে।'
      ],
      hi: [
        'फर्म भंग करने एवं पारिवारिक व्यावसायिक संपत्तियों के बंटवारे हेतु दीवानी वाद दायर करें।',
        'आदेश 40 सीपीसी में गल्ले और खातों का नियंत्रण लेने हेतु कोर्ट रिसीवर नियुक्त कराएं।',
        'अदालत द्वारा स्वतंत्र सीए नियुक्त कर ब्रांड की साख एवं माल का आधिकारिक मूल्यांकन होगा।',
        'अदालत भाइयों के बीच आंतरिक बोली लगाकर अथवा व्यापार बेचकर राशि बराबर बांटेगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-29-1',
        name: { en: 'Partnership Deed, Trade License & GST Audit Statements', bn: 'পার্টনারশিপ চুক্তি ও জিএসটি অডিট বিবরণী', hi: 'साझेदारी विलेख, ट्रेड लाइसेंस एवं जीएसटी ऑडिट रिपोर्ट' },
        issuing_authority: { en: 'Registrar of Firms / GST Authority', bn: 'ফার্ম রেজিস্টার / জিএসটি', hi: 'फर्म निबंधक / वाणिज्य कर विभाग' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-30',
    productCategory: 'free-checklist',
    title: {
      en: 'Benami Land Claims Among Brothers & Joint Family Funds',
      bn: 'যৌথ পরিবারের টাকায় এক ভাইয়ের নামে কেনা জমি বণ্টন',
      hi: 'संयुक्त परिवार के पैसे से एक भाई के नाम खरीदी गई जमीन का बंटवारा'
    },
    relevant_act: 'Sec 4(3)(b), Benami Act r/w Hindu Law Principles',
    summary: {
      en: 'Proving that property purchased in the name of an elder brother was acquired using joint family business funds and is liable for partition.',
      bn: 'এক ভাইয়ের নামে দলিল থাকলেও যৌথ পরিবারের আয়ে কেনা জমি প্রমাণ করে সমস্ত ভাইদের মধ্যে ভাগ করা।',
      hi: 'भले ही रजिस्ट्री एक भाई के नाम हो, पर संयुक्त परिवार की कमाई से खरीदी जमीन में सभी भाइयों का हिस्सा।'
    },
    authority_forum: {
      en: 'Civil Court (Partition Bench)',
      bn: 'দেওয়ানি আদালত (বাটোয়ারা বেঞ্চ)',
      hi: 'सिविल न्यायालय (बंटवारा अधिकरण)'
    },
    forum_type: 'Civil_Court',
    is_complex: true,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '1 to 3 years',
      bn: '১ থেকে ৩ বছর',
      hi: '1 से 3 वर्ष'
    },
    search_keywords: {
      en: ['brother bought land joint fund', 'benami defense joint family', 'nucleus ancestral property'],
      bn: ['এক ভাইয়ের নামে কেনা জমি ভাগ', 'যৌথ পরিবারের জমি', 'বেনামি ছাড়পত্র'],
      hi: ['संयुक्त परिवार जमीन बंटवारा', 'भाई के नाम बेनामी जमीन', 'पैतृक कोष से खरीद']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Compile financial records demonstrating named brother had no independent personal income.',
        'Produce joint family business bank statements showing consideration cheques cleared from joint funds.',
        'Frame specific issue in partition suit asserting exemption under Section 4(3)(b) (fiduciary capacity).',
        'Court passes preliminary partition decree treating disputed asset as joint ancestral property.'
      ],
      bn: [
        'প্রমাণপত্র দিন যে জমি কেনার সময় সংশ্লিষ্ট ভাইয়ের কোনো নিজস্ব স্বাধীন রোজগার ছিল না।',
        'যৌথ পারিবারিক ব্যবসার ব্যাঙ্ক খাতা থেকে জমি কেনার চেকের টাকা ক্লিয়ার হওয়ার প্রমাণ দিন।',
        'বেনামি আইনের ধারা ৪(৩)(খ) অনুযায়ী যৌথ বিশ্বাসের সম্পদ বলে বাটোয়ারা মামলায় দাবি করুন।',
        'আদালত দলিলটি যৌথ সম্পত্তি হিসেবে গণ্য করে সমস্ত ভাইদের মধ্যে সমবণ্টনের রায় দেবে।'
      ],
      hi: [
        'सबूत जुटाएं कि रजिस्ट्री के समय संबंधित भाई की कोई व्यक्तिगत स्वतंत्र कमाई नहीं थी।',
        'संयुक्त परिवार के बैंक खाते से जमीन का चेक कटने का वित्तीय साक्ष्य प्रस्तुत करें।',
        'बेनामी अधिनियम की धारा 4(3)(b) के तहत संयुक्त परिवार की छूट का कानूनी दावा करें।',
        'अदालत विवादित जमीन को पैतृक मानकर सभी भाइयों में समान बंटवारे की डिक्री देगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-30-1',
        name: { en: 'Joint Family Business Ledger & Bank Account Statements', bn: 'যৌথ ব্যবসার খতিয়ান ও ব্যাঙ্ক বিবরণী', hi: 'संयुक्त पारिवारिक व्यापार बहीखाता एवं बैंक स्टेटमेंट' },
        issuing_authority: { en: 'Bank / Commercial Chartered Accountant', bn: 'ব্যাঙ্ক', hi: 'बैंक / सीए' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-31',
    productCategory: 'lawyer-only',
    title: {
      en: 'Agricultural Land Inheritance vs Fragment Ceiling Laws',
      bn: 'কৃষি জমির উত্তরাধিকার ও মিনিমাম প্লট সাইজ খণ্ডন বিরোধ',
      hi: 'कृषि भूमि उत्तराधिकार एवं चक विखंडन न्यूनतम सीमा विवाद'
    },
    relevant_act: 'State Consolidation of Holdings Regulations r/w WBLR Act',
    summary: {
      en: 'Resolving partition conflicts where physical sub-division would create unviable fragments below statutory agricultural limits.',
      bn: 'জমি ভাগ করতে গিয়ে টুকরো এত ছোট হয়ে গেলে যা সরকারি চাষের নিয়মে নিষিদ্ধ, সে ক্ষেত্রে অর্থ দিয়ে ভাগ নিষ্পত্তির নিয়ম।',
      hi: 'बंटवारे में खेत इतने छोटे टुकड़े में बंटने पर जो कानूनन प्रतिबंधित हों, उचित मूल्य देकर हिस्से की खरीद।'
    },
    authority_forum: {
      en: 'Revenue Court (BL&LRO) / Civil Court',
      bn: 'রাজস্ব আদালত (BL&LRO) / দেওয়ানি আদালত',
      hi: 'राजस्व न्यायालय (बीएल एंड एलआरओ) / सिविल कोर्ट'
    },
    forum_type: 'BL_LRO',
    is_complex: true,
    official_portal_url: 'https://banglarbhumi.gov.in/',
    statutory_timeframe: {
      en: '60 working days',
      bn: '৬০ কার্যদিবস',
      hi: '60 कार्यदिवस'
    },
    search_keywords: {
      en: ['fragmentation of agricultural land', 'partition act buy out', 'minimum plot size agriculture'],
      bn: ['জমির খণ্ডন রোধ', 'পার্টিশন অ্যাক্ট বাই আউট', 'কৃষি জোত রক্ষা'],
      hi: ['खेत विखंडन रोक', 'न्यूनतम चक सीमा', 'पार्टीशन एक्ट बाय-आउट']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Calculate whether dividing the Dag number among all heirs breaches statutory fragmentation limits.',
        'If fragmentation is barred, invoke buy-out valuation provisions under Section 3 Partition Act, 1893.',
        'One co-sharer applies to buy out fractional shares of siblings at prevailing circle valuation.',
        'Revenue Officer enters undivided fractional shares in Khatian to preserve single physical plot unit.'
      ],
      bn: [
        'হিসাব করে দেখুন সমস্ত শরিকের মধ্যে ভাগ করলে প্লটের মাপ সরকারি ন্যূনতম চাষযোগ্য সীমার নিচে নামে কি না।',
        'টুকরো করা নিষিদ্ধ হলে পার্টিশন অ্যাক্টের ধারা ৩ অনুযায়ী বাকি শরিকদের অংশ কিনে নেওয়ার আবেদন করুন।',
        'সরকারি বাজার দরে এক ভাই অন্য ভাইদের প্রাপ্য অংশের টাকা আদালতে জমা দিয়ে একক মালিকানা নেবেন।',
        'রাজস্ব আধিকারিক জমিটি না কেটে যৌথ খতিয়ানে একক জোত হিসেবে বহাল রাখার নির্দেশ দেবেন।'
      ],
      hi: [
        'जांचें कि क्या खेत बांटने से टुकड़े कानून द्वारा निर्धारित न्यूनतम सीमा से छोटे हो जाएंगे।',
        'विखंडन वर्जित होने पर पार्टीशन एक्ट 1893 की धारा 3 के तहत हिस्सेदारी खरीदने का आवेदन दें।',
        'एक सह-खातेदार सरकारी सर्किल रेट पर अन्य वारिसों का हिस्सा चुकाकर पूरा खेत ले सकता है।',
        'राजस्व अधिकारी खेत का भौतिक टुकड़ा करने के बजाय खतियान में हिस्सेदारी दर्ज करेंगे।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-31-1',
        name: { en: 'Government Gazette on Minimum Agricultural Fragment Size', bn: 'কৃষি জমির খণ্ডন সংক্রান্ত সরকারি গেজেট', hi: 'न्यूनतम कृषि चक सीमा संबंधी सरकारी गजट' },
        issuing_authority: { en: 'Land Reforms Department', bn: 'ভূমি সংস্কার দপ্তর', hi: 'भूमि सुधार विभाग' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-32',
    productCategory: 'free-checklist',
    title: {
      en: 'Creation & Revocation of Private Family Trusts',
      bn: 'পারিবারিক প্রাইভেট ট্রাস্ট গঠন ও সম্পত্তির ভবিষ্যৎ সুরক্ষা',
      hi: 'पारिवारिक निजी ट्रस्ट का गठन एवं संपत्ति संरक्षण'
    },
    relevant_act: 'Indian Trusts Act, 1882',
    summary: {
      en: 'Settling private family trusts to ringfence ancestral properties from future divorce disputes or spendthrift heirs.',
      bn: 'ভবিষ্যতে সম্পত্তি অপচয় বা পারিবারিক বিচ্ছেদ থেকে রক্ষা করতে পারিবারিক প্রাইভেট ট্রাস্ট গঠনের নিয়ম।',
      hi: 'संतानों के भविष्य एवं संपत्ति को विवादों से बचाने हेतु निजी पारिवारिक ट्रस्ट का पंजीकरण।'
    },
    authority_forum: {
      en: 'Sub-Registrar Office (ADSR) / Civil Court',
      bn: 'সাব-রেজিস্ট্রার অফিস (ADSR) / দেওয়ানি আদালত',
      hi: 'उप-पंजीयक कार्यालय / सिविल न्यायालय'
    },
    forum_type: 'Civil_Court',
    is_complex: true,
    official_portal_url: 'https://wbregistration.gov.in/',
    statutory_timeframe: {
      en: '15 to 30 days registration; 6 months for court suit',
      bn: '১৫ থেকে ৩০ দিনে রেজিস্ট্রেশন; ৬ মাস মামলা',
      hi: '15 से 30 दिन में रजिस्ट्री; 6 माह वाद'
    },
    search_keywords: {
      en: ['private family trust india', 'indian trusts act 1882', 'ringfence ancestral property trust'],
      bn: ['প্রাইভেট ফ্যামিলি ট্রাস্ট', 'পারিবারিক ট্রাস্ট ডিড', 'ইন্ডিয়ান ট্রাস্ট অ্যাক্ট'],
      hi: ['पारिवारिक प्राइवेट ट्रस्ट', 'ट्रस्ट डीड रजिस्ट्री', 'भारतीय ट्रस्ट कानून']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Draft formal Trust Deed identifying Settlor, Trustees, Beneficiaries, and specific distribution triggers.',
        'Execute and register Trust Deed before jurisdictional Sub-Registrar (ADSR) paying state stamp duty.',
        'Transfer scheduled properties from personal name to the Trust entity via registered conveyance.',
        'If seeking revocation, file application under Section 77 Trusts Act proving trust objectives are fulfilled.'
      ],
      bn: [
        'সেটলার, ট্রাস্টি ও সুবিধাভোগীদের নাম এবং শর্ত উল্লেখ করে প্রাইভেট ট্রাস্ট ডিড প্রস্তুত করুন।',
        'সাব-রেজিস্ট্রি অফিসে নির্ধারিত স্ট্যাম্প ডিউটি দিয়ে ট্রাস্ট দলিলটি আনুষ্ঠানিকভাবে রেজিস্ট্রি করান।',
        'ব্যক্তিগত নাম থেকে জমি বা ফ্ল্যাটের মালিকানা ট্রাস্টের নামে রেজিস্ট্রি দলিলের মাধ্যমে হস্তান্তর করুন।',
        'ট্রাস্ট বাতিল করতে চাইলে ভারতীয় ট্রাস্ট আইনের ধারা ৭৭ অনুযায়ী আদালতে উদ্দেশ্য পূরণের মামলা করুন।'
      ],
      hi: [
        'ट्रस्ट विलेख तैयार करें जिसमें ट्रस्टी, लाभार्थी एवं संपत्ति वितरण की स्पष्ट शर्तें हों।',
        'उचित स्टांप शुल्क चुकाकर उप-पंजीयक कार्यालय में ट्रस्ट डीड का पंजीकरण कराएं।',
        'व्यक्तिगत नाम से संपत्ति को पंजीकृत अंतरण द्वारा ट्रस्ट के नाम स्थानांतरित करें।',
        'ट्रस्ट समाप्त कराने हेतु धारा 77 के तहत अदालत में उद्देश्य पूर्ति का वाद दायर करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-32-1',
        name: { en: 'Registered Private Family Trust Deed', bn: 'রেজিস্ট্রি প্রাইভেট ফ্যামিলি ট্রাস্ট দলিল', hi: 'पंजीकृत पारिवारिक ट्रस्ट विलेख' },
        issuing_authority: { en: 'Sub-Registrar Office (ADSR)', bn: 'সাব-রেজিস্ট্রার অফিস', hi: 'उप-पंजीयक कार्यालय' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-33',
    productCategory: 'lawyer-only',
    title: {
      en: 'Right of Pre-emption in Inherited Family Dwelling',
      bn: 'পৈতৃক বসতবাড়ি বহিরাগতদের কাছে বিক্রি রুখতে অগ্রক্রয়াধিকার',
      hi: 'पैतृक आवासीय मकान में बाहरी खरीदार के विरुद्ध परिवार का अग्रक्रयाधिकार'
    },
    relevant_act: 'Sec 4, Partition Act, 1893',
    summary: {
      en: 'Compelling external buyers who bought a co-sharer undivided share in an ancestral family home to sell it back to resident family members.',
      bn: 'পৈতৃক বসতবাড়ির কোনো অংশ এক শরিক বহিরাগতের কাছে বিক্রি করলে পরিবারের সদস্যরা তা কিনে নেওয়ার আইনি অধিকার।',
      hi: 'पैतृक घर में किसी बाहरी व्यक्ति द्वारा हिस्सा खरीदने पर उसे परिवार को ही वापस बेचने के लिए बाध्य करना।'
    },
    authority_forum: {
      en: 'Civil Court hearing Partition Suit',
      bn: 'বাটোয়ারা মামলার বিচারক আদালত',
      hi: 'सिविल विचारण न्यायालय'
    },
    forum_type: 'Civil_Court',
    is_complex: true,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: 'Raised during trial; 30 to 60 days disposal',
      bn: 'বিচার চলাকালীন উত্থাপন; ৩০ থেকে ৬০ দিনে নিষ্পত্তি',
      hi: 'विचारण के दौरान; 30 से 60 दिन में निस्तारण'
    },
    search_keywords: {
      en: ['section 4 partition act dwelling house', 'pre-emption family home', 'buy out stranger partition'],
      bn: ['বসতবাড়ি অগ্রক্রয়াধিকার', 'ধারা ৪ পার্টিশন অ্যাক্ট', 'বহিরাগত ক্রেতা উচ্ছেদ'],
      hi: ['पैतृक घर अग्रक्रयाधिकार', 'धारा 4 बंटवारा कानून', 'बाहरी खरीदार से घर वापसी']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Verify property is a continuous family dwelling house and outsider purchaser has joined suit.',
        'File application under Section 4 Partition Act expressing unconditional willingness to buy out share.',
        'Pray for independent valuation by court-appointed commissioner to assess fair market price of fraction.',
        'Deposit purchase money into court; obtain registered sale certificate transferring share back to family.'
      ],
      bn: [
        'প্রমাণ করুন সম্পত্তিটি অবিভক্ত পৈতৃক বসতবাড়ি এবং বহিরাগত ক্রেতা দখল নিতে মামলায় এসেছে।',
        'পার্টিশন অ্যাক্টের ধারা ৪ অনুযায়ী বহিরাগতের অংশ সরকারি মূল্যে কিনে নেওয়ার আবেদন দাখিল করুন।',
        'কোর্ট কমিশনার দিয়ে বহিরাগতের অংশের নিরপেক্ষ বাজার দর মূল্যায়ন করিয়ে নিন।',
        'আদালতে নির্ধারিত টাকা জমা দিয়ে বহিরাগতের দলিল বাতিল করে পরিবারের নামে সার্টিফিকেট নিন।'
      ],
      hi: [
        'सिद्ध करें कि मकान अविभाजित पैतृक आवास है और बाहरी खरीदार ने इसमें वाद दायर किया है।',
        'धारा 4 पार्टीशन एक्ट के तहत बाहरी व्यक्ति का हिस्सा स्वयं खरीदने का आवेदन दें।',
        'कोर्ट कमिश्नर से बाहरी खरीदार के हिस्से का उचित बाजार मूल्य निर्धारित कराएं।',
        'मूल्यांकन राशि अदालत में जमा कर बाहरी व्यक्ति का हिस्सा परिवार के नाम पंजीकृत कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-33-1',
        name: { en: 'Sale Deed executed to Stranger & Proof of Dwelling House', bn: 'বহিরাগতের দলিল ও বসতবাড়ির প্রমাণ', hi: 'बाहरी व्यक्ति को हुआ बिक्री विलेख एवं आवास का प्रमाण' },
        issuing_authority: { en: 'Sub-Registrar (ADSR) / Municipality', bn: 'সাব-রেজিস্ট্রার / পুরসভা', hi: 'उप-पंजीयक / नगर पालिका' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-34',
    productCategory: 'lawyer-only',
    title: {
      en: 'Exclusion from Inheritance on Ground of Murder of Property Owner',
      bn: 'সম্পত্তির মালিককে হত্যার কারণে উত্তরাধিকার থেকে বাতিল',
      hi: 'संपत्ति मालिक की हत्या करने वाले वारिस को उत्तराधिकार से वंचित करना'
    },
    relevant_act: 'Sec 25 & 27, Hindu Succession Act, 1956',
    summary: {
      en: 'Disqualifying any heir who commits or abets the murder of an ancestor, treating them in law as if they predeceased the victim.',
      bn: 'সম্পত্তির লোভে পিতা বা আত্মীয়কে খুন করলে সেই খুনী উত্তরাধিকার থেকে সম্পূর্ণ বাতিল ও অযোগ্য গণ্য হবে।',
      hi: 'जमीन-जायदाद के लालच में पिता या रिश्तेदार की हत्या करने वाले वारिस का संपत्ति अधिकार समाप्त करना।'
    },
    authority_forum: {
      en: 'Civil Court hearing Partition / Succession suit',
      bn: 'দেওয়ানি আদালত (বাটোয়ারা মামলা)',
      hi: 'सिविल न्यायालय (बंटवारा वाद)'
    },
    forum_type: 'Civil_Court',
    is_complex: false,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: 'Raised in active trial; conclusive upon criminal judgment',
      bn: 'বিচার চলাকালীন উত্থাপন; ফৌজদারি রায়ে চূড়ান্ত',
      hi: 'विचारण के दौरान; आपराधिक फैसले पर अंतिम'
    },
    search_keywords: {
      en: ['murderer disqualified inheritance', 'section 25 hindu succession', 'murder of property owner'],
      bn: ['খুনী উত্তরাধিকার বাতিল', 'ধারা ২৫ হিন্দু উত্তরাধিকার', 'পিতা হত্যার পর সম্পত্তি'],
      hi: ['हत्यारा वारिस अयोग्य', 'धारा 25 हिंदू उत्तराधिकार', 'संपत्ति हेतु हत्या निरस्तीकरण']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain certified copies of criminal charge sheet and conviction judgment under Section 103 BNS.',
        'File application under Section 25 HSA in pending partition suit praying for statutory disqualification.',
        'Establish that under Section 27, the murderer cannot transmit any coparcenary rights to their line.',
        'Secure preliminary decree redistributing entire holding exclusively among surviving innocent heirs.'
      ],
      bn: [
        'থানার চার্জশিট ও সেশন কোর্ট থেকে ধারা ১০৩ বিএনএস (খুন) সাজার আদেশের সার্টিফাইড কপি নিন।',
        'হিন্দু উত্তরাধিকার আইনের ধারা ২৫ অনুযায়ী খুনী ওয়ারিশকে অযোগ্য ঘোষণার আবেদন দাখিল করুন।',
        'ধারা ২৭ দেখিয়ে প্রমাণ করুন খুনী বেঁচে থাকলেও আইন অনুযায়ী সে পিতার আগেই মারা গেছে বলে গণ্য হবে।',
        'আদালত খুনীকে সম্পূর্ণ বাদ দিয়ে বাকি নির্দোষ ওয়ারিশদের মধ্যে সমস্ত সম্পত্তি বণ্টনের রায় দেবে।'
      ],
      hi: [
        'बीएनएस की धारा 103 (हत्या) के तहत आरोप पत्र एवं दोषसिद्धि फैसले की प्रमाणित प्रति लें।',
        'बंटवारा वाद में धारा 25 के तहत हत्यारे वारिस को अयोग्य घोषित करने का आवेदन दें।',
        'धारा 27 के तहत साबित करें कि कानूनन हत्यारे को मृतक से पहले ही मृत मान लिया जाता है।',
        'अदालत हत्यारे को पूर्णतः बाहर कर शेष निर्दोष वारिसों में पूरी संपत्ति बांटने की डिक्री देगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-34-1',
        name: { en: 'Sessions Court Criminal Conviction Judgment Copy', bn: 'ফৌজদারি আদালতের সাজার আদেশের কপি', hi: 'आपराधिक न्यायालय दोषसिद्धि निर्णय प्रति' },
        issuing_authority: { en: 'Court of Sessions / High Court', bn: 'দায়রা আদালত', hi: 'सत्र न्यायालय' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-35',
    productCategory: 'lawyer-only',
    title: {
      en: 'Inheritance Rights of Non-Marital (Illegitimate) Children',
      bn: 'বিবাহবহির্ভূত সম্পর্কের সন্তানদের পৈতৃক সম্পত্তির ভাগ',
      hi: 'गैर-वैवाहिक (विवाहेतर) संतानों का पैतृक संपत्ति में अधिकार'
    },
    relevant_act: 'Revanasiddappa v. Mallikarjun (SC 2023) r/w Sec 16(3) HMA',
    summary: {
      en: 'Enforcing non-marital children equal inheritance rights in their parents share of coparcenary ancestral property.',
      bn: 'বিবাহ আইনসিদ্ধ না হলেও সুপ্রিম কোর্টের রায়ে দ্বিতীয় স্ত্রী বা অসিদ্ধ সম্পর্কের সন্তান পিতার পৈতৃক সম্পত্তিতে সমান ভাগ পাবে।',
      hi: 'सुप्रीम कोर्ट के 2023 फैसले के अनुसार दूसरी शादी या गैर-वैवाहिक संतानों को पिता के पैतृक हिस्से में बराबर का हक।'
    },
    authority_forum: {
      en: 'Civil Court (Senior / Junior Division)',
      bn: 'দেওয়ানি আদালত (সিনিয়র / জুনিয়র ডিভিশন)',
      hi: 'सिविल न्यायालय (सीनियर/जूनियर डिवीजन)'
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
      en: ['revanasiddappa 2023 supreme court', 'illegitimate child ancestral property', 'second wife son share'],
      bn: ['রেভানাসিদ্দাপ্পা সুপ্রিম কোর্ট', 'অবৈধ সন্তানের সম্পত্তি অধিকার', 'দ্বিতীয় পক্ষের সন্তান ভাগ'],
      hi: ['रेवणसिद्धप्पा 2023 फैसला', 'दूसरी शादी संतान का हक', 'विवाहेतर बच्चे पैतृक अधिकार']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Establish biological paternity through birth registration, school records, or DNA orders under Section 114 BSA.',
        'Cite landmark *Revanasiddappa (SC)* precedent confirming children inherit from parents ancestral share.',
        'File Civil Suit for Partition praying for allotment of deceased parents notional coparcenary share.',
        'Secure preliminary decree dividing parents undivided share equally among marital and non-marital children.'
      ],
      bn: [
        'জন্ম সনদ বা ডিএনএ পরীক্ষার নির্দেশের মাধ্যমে জৈবিক পিতৃত্বের আইনি সম্পর্ক প্রমাণ করুন।',
        'সুপ্রিম কোর্টের ঐতিহাসিক রেভানাসিদ্দাপ্পা রায় উল্লেখ করে পিতার পৈতৃক অংশে অধিকার দাবি করুন।',
        'দেওয়ানি আদালতে বাটোয়ারা মামলা করে পিতার অংশের সমবণ্টনের আবেদন দাখিল করুন।',
        'আদালত প্রথম ও দ্বিতীয় পক্ষের সমস্ত সন্তানদের মধ্যে পিতার অংশ সমান ভাগে বণ্টনের রায় দেবে।'
      ],
      hi: [
        'जन्म प्रमाणपत्र या डीएनए आदेश द्वारा जैविक पिता होने का कानूनी प्रमाण प्रस्तुत करें।',
        'सुप्रीम कोर्ट के रेवणसिद्धप्पा फैसले का हवाला देकर पिता के पैतृक हिस्से पर दावा करें।',
        'दीवानी अदालत में बंटवारा वाद दायर कर पिता के अविभाजित हिस्से का विभाजन मांगें।',
        'अदालत पहली एवं दूसरी शादी के सभी बच्चों में पिता का हिस्सा समान रूप से बांटेगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-35-1',
        name: { en: 'Birth Certificate Naming Father & School Admission Ledger', bn: 'পিতার নামযুক্ত জন্ম সনদ ও স্কুল রেকর্ড', hi: 'पिता के नाम वाला जन्म प्रमाणपत्र व स्कूल रिकॉर्ड' },
        issuing_authority: { en: 'Municipality / School Authority', bn: 'পুরসভা / স্কুল', hi: 'नगर पालिका / विद्यालय' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-36',
    productCategory: 'lawyer-only',
    title: {
      en: 'Unilateral Family Settlement Favoring One Sibling',
      bn: 'মেয়েদের বাদ দিয়ে ছেলেদের মধ্যে একতরফা সম্পত্তি বণ্টনের প্রতিবাদ',
      hi: 'बहनों को छोड़कर केवल भाइयों में एकतरफा संपत्ति बंटवारे का विरोध'
    },
    relevant_act: 'Sec 6, Hindu Succession Act (Vineeta Sharma) r/w SRA',
    summary: {
      en: 'Quashing unapproved or coercive family partition deeds signed exclusively by brothers to exclude married sisters from ancestral land.',
      bn: 'বোনেদের না জানিয়ে বা বাদ দিয়ে ভাইদের মধ্যে গোপনে করা বেআইনি সম্পত্তি বণ্টনের দলিল আদালতে বাতিল।',
      hi: 'विवाहित बहनों को हिस्सा दिए बिना केवल भाइयों द्वारा आपस में किए गए फर्जी बंटवारे को अदालत से रद्द कराना।'
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
      en: ['sister excluded family settlement', 'unilateral partition deed cancel', 'daughter coparcener challenge brothers'],
      bn: ['বোনেদের বাদ দিয়ে জমি ভাগ', 'একতরফা বাটোয়ারা বাতিল', 'মেয়েদের বঞ্চিত করা দলিল'],
      hi: ['बहनों को छोड़ा बंटवारा रद्द', 'एकतरफा परिवार समझौता', 'पुत्री अधिकार बंटवारा']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain certified copies of contested family settlement or partition deed from Sub-Registrar (ADSR).',
        'Issue legal notice asserting equal coparcenary co-ownership under amended Section 6 HSA.',
        'File Civil Suit for Declaration that unilateral partition deed is void and non-binding on daughter.',
        'Move application for injunction restraining mutation in Banglarbhumi and halting construction.'
      ],
      bn: [
        'সাব-রেজিস্ট্রি অফিস থেকে ভাইদের করা একতরফা আপস-বণ্টন দলিলের সার্টিফাইড কপি তুলুন।',
        'হিন্দু উত্তরাধিকার আইনের ধারা ৬ অনুযায়ী বোনের সমান অংশ দাবি করে রেজিস্ট্রি নোটিশ পাঠান।',
        'দেওয়ানি আদালতে মামলা করে দলিলটি সম্পূর্ণ বাতিল ও বোনের ওপর অকার্যকর ঘোষণা করান।',
        'বাংলারভূমিতে ভাইদের নামে মিউটেশন এবং জমিতে নতুন নির্মাণ কাজের ওপর আদালতের ইনজাংশন নিন।'
      ],
      hi: [
        'उप-पंजीयक कार्यालय से भाइयों द्वारा की गई एकतरफा बंटवारा डीड की प्रमाणित प्रति लें।',
        'धारा 6 के तहत बहन का बराबर हक जताते हुए भाइयों को औपचारिक विधिक नोटिस दें।',
        'दीवानी अदालत में वाद दायर कर एकतरफा विलेख को शून्य एवं अमान्य घोषित कराएं।',
        'बांगलारभूमि में भाइयों के नाम दाखिल-खारिज एवं निर्माण कार्य पर तुरंत स्थगनादेश लें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-36-1',
        name: { en: 'Certified Copy of Unilateral Partition Deed & Ancestral Porcha', bn: 'একতরফা বণ্টন দলিলের কপি ও পৈতৃক পর্চা', hi: 'एकतरफा बंटवारा विलेख की प्रमाणित प्रति व खतियान' },
        issuing_authority: { en: 'Sub-Registrar (ADSR) / BL&LRO', bn: 'সাব-রেজিস্ট্রার / ভূমি দপ্তর', hi: 'उप-पंजीयक / राजस्व विभाग' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-37',
    productCategory: 'lawyer-only',
    title: {
      en: 'Appointment of Court Receiver to Collect Joint Rents',
      bn: 'বাটোয়ারা মামলা চলাকালীন কোর্ট রিসিভার নিয়োগ ও ভাড়া জমা',
      hi: 'बंटवारा वाद के दौरान दुकान/मकान का किराया एकत्र करने हेतु कोर्ट रिसीवर'
    },
    relevant_act: 'Order XL Rules 1–5, Code of Civil Procedure, 1908',
    summary: {
      en: 'Ousting dominant co-sharers and placing tenanted ancestral properties under court receiver management to stop rent misappropriation.',
      bn: 'এক শরিক একতরফাভাবে সমস্ত ভাড়াটের টাকা আত্মসাৎ করলে আদালতে কোর্ট রিসিভার বসিয়ে সরকারি অ্যাকাউন্টে ভাড়া জমার নিয়ম।',
      hi: 'एक ही भाई द्वारा सारी दुकानों का किराया हड़पने पर अदालत से रिसीवर नियुक्त कराकर कोर्ट में किराया जमा कराना।'
    },
    authority_forum: {
      en: 'Civil Court (Partition Bench)',
      bn: 'দেওয়ানি আদালত (বাটোয়ারা বেঞ্চ)',
      hi: 'सिविल न्यायालय (बंटवारा अधिकरण)'
    },
    forum_type: 'Civil_Court',
    is_complex: false,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '30 to 60 days',
      bn: '৩০ থেকে ৬০ দিন',
      hi: '30 से 60 दिन'
    },
    search_keywords: {
      en: ['court receiver collect rent', 'order 40 rule 1 cpc', 'co-sharer pocketing rent partition'],
      bn: ['কোর্ট রিসিভার নিয়োগ', 'ভাড়া আত্মসাৎ বাটোয়ারা', 'অর্ডার ৪০ সিপিসি'],
      hi: ['कोर्ट रिसीवर नियुक्ति', 'किराया हड़पना बंटवारा', 'आदेश 40 नियम 1']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Compile evidence demonstrating one co-sharer is exclusively pocketing commercial tenant rents.',
        'File interim application under Order XL Rule 1 CPC for appointment of independent Court Receiver.',
        'Court appoints advocate receiver authorized to collect monthly rents, issue receipts, and bank funds.',
        'Accumulated rental funds are distributed among all co-sharers strictly per final partition decree.'
      ],
      bn: [
        'প্রমাণপত্র দিন যে এক শরিক সমস্ত বাণিজ্যিক ভাড়াটের থেকে টাকা তুলে অন্য ভাইদের বঞ্চিত করছে।',
        'অর্ডার ৪০ রুল ১ সিপিসি অনুযায়ী আদালতে নিরপেক্ষ কোর্ট রিসিভার বসানোর জরুরি আবেদন দিন।',
        'আদালত অ্যাডভোকেট রিসিভার নিয়োগ করবে যিনি সমস্ত ভাড়া তুলে আদালতের অ্যাকাউন্টে জমা রাখবেন।',
        'চূড়ান্ত বাটোয়ারা ডিক্রি হওয়ার পর সমস্ত জমানো ভাড়ার টাকা শরিকদের মধ্যে সমবণ্টন করা হবে।'
      ],
      hi: [
        'साक्ष्य प्रस्तुत करें कि एक ही भाई सभी दुकानों का किराया वसूल कर दूसरों को वंचित कर रहा है।',
        'आदेश 40 नियम 1 सीपीसी के तहत स्वतंत्र कोर्ट रिसीवर नियुक्त करने का अंतरिम आवेदन दें।',
        'अदालत वकील को रिसीवर बनाएगी जो किराया वसूलकर अदालत के खाते में जमा करेंगे।',
        'मुकदमे के अंतिम फैसले पर जमा हुआ सारा किराया सभी वारिसों में उनके हिस्से अनुसार बंटेगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-37-1',
        name: { en: 'Tenant Rent Receipts & Affidavit of Excluded Co-Sharers', bn: 'ভাড়াটেদের রসিদ ও বঞ্চিত শরিকদের হলফনামা', hi: 'किरायेदारों की रसीदें एवं वंचित वारिसों का शपथ पत्र' },
        issuing_authority: { en: 'Tenants / Complainants', bn: 'ভাড়াটিয়াবৃন্দ', hi: 'किरायेदार / वादी' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-38',
    productCategory: 'lawyer-only',
    title: {
      en: 'Allocation of Ancestral Debts & Mortgages in Partition',
      bn: 'পৈতৃক ঋণের দায় ও বন্ধকি দেনা ভাগাভাগি সংক্রান্ত বিরোধ',
      hi: 'बंटवारे में पैतृक कर्ज एवं बैंक बंधक देनदारी का आनुपातिक विभाजन'
    },
    relevant_act: 'Mitakshara Principle of Pious Obligation r/w Sec 6 HSA',
    summary: {
      en: 'Equitably apportioning legitimate ancestral mortgages, agricultural loans, and liabilities alongside physical asset distribution.',
      bn: 'সম্পত্তি ভাগের সাথে সাথে পিতার নেওয়া বৈধ ব্যাঙ্ক লোন বা বন্ধকী ঋণের দায় শরিকদের মধ্যে ভাগ করে নেওয়ার নিয়ম।',
      hi: 'जमीन बंटवारे के साथ-साथ पिता द्वारा लिए गए वैध बैंक कर्ज एवं बंधक की देनदारी भी सभी वारिसों में बांटना।'
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
      en: '6 months to 1 year',
      bn: '৬ মাস থেকে ১ বছর',
      hi: '6 माह से 1 वर्ष'
    },
    search_keywords: {
      en: ['ancestral debt division partition', 'pious obligation hindu law', 'mortgage loan partition suit'],
      bn: ['পৈতৃক ঋণ ভাগাভাগি', 'বাবার লোন বাটোয়ারা', 'বন্ধকি ঋণ দায়'],
      hi: ['पैतृक कर्ज बंटवारा', 'पिता का बैंक लोन देनदारी', 'बंधक ऋण विभाजन']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Collate loan sanction letters, bank statements, and KCC loan liability certificates of deceased.',
        'Draft itemized schedule of ancestral liabilities and attach to partition plaint or written statement.',
        'Court adjudicates whether debts were for family necessity or immoral purposes (Avyavaharika).',
        'Final decree mandates legitimate debts be paid from joint estate before physical division.'
      ],
      bn: [
        'বাবার নেওয়া কেসিসি (KCC) লোন, ব্যাঙ্ক স্টেটমেন্ট ও বন্ধকি ঋণের সমস্ত কাগজপত্র একত্রিত করুন।',
        'বাটোয়ারা মামলার আরজিতে সমস্ত স্থাবর সম্পত্তির সাথে পারিবারিক ঋণের সম্পূর্ণ তালিকা যুক্ত করুন।',
        'আদালত বিচার করবে ঋণটি যৌথ পরিবারের প্রয়োজনে নেওয়া হয়েছিল নাকি কোনো অসৎ উদ্দেশ্যে।',
        'চূড়ান্ত ডিক্রিতে যৌথ সম্পত্তি বিক্রি করে আগে ব্যাঙ্ক ঋণ মেটানো অথবা শরিকদের মধ্যে দেনা ভাগ হবে।'
      ],
      hi: [
        'मृतक पिता के किसान क्रेडिट कार्ड (KCC) एवं बैंक बंधक लोन की पत्रावली एकत्र करें।',
        'बंटवारा वाद में संपत्तियों के साथ-साथ पैतृक कर्जों की विस्तृत सूची संलग्न करें।',
        'अदालत तय करेगी कि कर्ज परिवार के भले के लिए था अथवा किसी अनैतिक कार्य के लिए।',
        'अंतिम डिक्री में वैध कर्ज को संयुक्त संपत्ति से चुकाने या सभी में बराबर बांटने का आदेश होगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-38-1',
        name: { en: 'Bank Loan Sanction Letter & Outstanding Balance Certificate', bn: 'ব্যাঙ্ক লোন স্যাংকশন লেটার ও বকেয়া সার্টিফিকেট', hi: 'बैंक ऋण स्वीकृति पत्र एवं बकाया देयता प्रमाणपत्र' },
        issuing_authority: { en: 'Lending Bank', bn: 'ঋণদাতা ব্যাঙ্ক', hi: 'ऋणदाता बैंक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-39',
    productCategory: 'lawyer-only',
    title: {
      en: 'Inventory & Partition of Bank Lockers & Movable Heirlooms',
      bn: 'ব্যাঙ্ক লকার খোলা, অলঙ্কার ইনভেন্টরি ও সোনা বণ্টন',
      hi: 'बैंक लॉकर खुलवाना, गहनों की सूची (इन्वेंट्री) एवं सोने का बंटवारा'
    },
    relevant_act: 'Order XXVI Rules 13 & 14, Code of Civil Procedure, 1908',
    summary: {
      en: 'Appointing a court commissioner to open frozen ancestral safe deposit lockers, inventory gold, and execute equitable division.',
      bn: 'আদালতের নির্দেশে বন্ধ ব্যাঙ্ক লকার ভেঙে অলঙ্কারের ভিডিও তালিকা তৈরি এবং সমস্ত ওয়ারিশের মধ্যে সোনা ভাগ।',
      hi: 'कोर्ट कमिश्नर की मौजूदगी में बंद बैंक लॉकर खुलवाकर पुश्तैनी गहनों की नाप-तौल कराकर बंटवारा कराना।'
    },
    authority_forum: {
      en: 'Civil Court / Advocate Commissioner',
      bn: 'দেওয়ানি আদালত / কোর্ট কমিশনার',
      hi: 'सिविल न्यायालय / कोर्ट कमिश्नर'
    },
    forum_type: 'Civil_Court',
    is_complex: false,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '30 to 60 working days',
      bn: '৩০ থেকে ৬০ কার্যদিবস',
      hi: '30 থেকে 60 कार्यदिवस'
    },
    search_keywords: {
      en: ['open bank locker partition', 'inventory ancestral jewelry commissioner', 'gold division among heirs'],
      bn: ['ব্যাঙ্ক লকার খোলা বাটোয়ারা', 'পৈতৃক সোনা ভাগ', 'কোর্ট কমিশনার লকার'],
      hi: ['बैंक लॉकर बंटवारा', 'पुश्तैनी जेवर विभाजन', 'कोर्ट कमिश्नर लॉकर']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Identify ancestral safe deposit lockers held in commercial banks in deceased parent name.',
        'File application under Order XXVI CPC for Advocate Commissioner to open locker before all heirs.',
        'Commissioner prepares video-recorded inventory and engages approved jeweler to assess purity/weight.',
        'Submit verified inventory report to court to distribute heirlooms via agreed lots or auction proceeds.'
      ],
      bn: [
        'মৃত মা-বাবার নামে ব্যাংকে থাকা সেফ ডিপোজিট লকার নম্বর ও ব্রাঞ্চের বিবরণ চিহ্নিত করুন।',
        'সমস্ত শরিকের উপস্থিতিতে লকার খোলার জন্য অর্ডার ২৬ সিপিসি অনুযায়ী কমিশনারের আবেদন দিন।',
        'কমিশনার ভিডিও রেকর্ডিং করে স্বর্ণকারের উপস্থিতিতে সমস্ত গয়নার ওজন ও ক্যারেট মেপে তালিকা করবেন।',
        'যাচাইকৃত রিপোর্ট আদালতে জমা দিয়ে সমান ওজনে সোনার গয়না শরিকদের মধ্যে ভাগ করে দেওয়া হবে।'
      ],
      hi: [
        'मृतक माता-पिता के नाम बैंक में मौजूद सेफ डिपॉजिट लॉकर की शाखा व खाता संख्या निकालें।',
        'सभी वारिसों के समक्ष लॉकर खोलने हेतु आदेश 26 सीपीसी में कोर्ट कमिश्नर का आवेदन दें।',
        'कमिश्नर वीडियोग्राफी एवं अधिकृत जौहरी के साथ गहनों का वजन व शुद्धता दर्ज करेंगे।',
        'रिपोर्ट अदालत में पेश कर सोने के जेवरों का सभी संतानों में बराबर वजन में बंटवारा कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-39-1',
        name: { en: 'Bank Safe Deposit Locker Allotment Memo & Key Details', bn: 'ব্যাঙ্ক লকার মেমো ও চাবির বিবরণী', hi: 'बैंक लॉकर आवंटन रसीद व चाबी विवरण' },
        issuing_authority: { en: 'Commercial Bank', bn: 'ব্যাঙ্ক', hi: 'बैंक शाखा' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-40',
    productCategory: 'lawyer-only',
    title: {
      en: 'Rights of Posthumous Child Born After Instituted Partition',
      bn: 'মামলা শুরুর পর জন্ম নেওয়া সন্তানের অংশের দাবি',
      hi: 'बंटवारा मुकदमा शुरू होने के बाद जन्मे बच्चे (मरणोपरांत संतान) का हिस्सा'
    },
    relevant_act: 'Sec 20, Hindu Succession Act, 1956',
    summary: {
      en: 'Re-opening and modifying preliminary partition decrees to allot an equal coparcenary share to a child who was in the womb.',
      bn: 'মামলা চলার সময় গর্ভে থাকা সন্তান ভূমিষ্ঠ হলে পূর্বের রায় সংশোধন করে তাকেও সমপরিমাণ অংশ দেওয়ার নিয়ম।',
      hi: 'पिता की मृत्यु या बंटवारे के समय गर्भ में पल रहे बच्चे के जन्म लेने पर उसे बराबर का हिस्सा दिलाना।'
    },
    authority_forum: {
      en: 'Civil Court (Partition Bench)',
      bn: 'দেওয়ানি আদালত (বাটোয়ারা বেঞ্চ)',
      hi: 'सिविल न्यायालय (बंटवारा अधिकरण)'
    },
    forum_type: 'Civil_Court',
    is_complex: false,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '30 to 60 days',
      bn: '৩০ থেকে ৬০ দিন',
      hi: '30 से 60 दिन'
    },
    search_keywords: {
      en: ['posthumous child partition share', 'child in womb inheritance', 'section 20 hindu succession'],
      bn: ['গর্ভস্থ সন্তানের উত্তরাধিকার', 'মরণোত্তর সন্তান বাটোয়ারা', 'ধারা ২০ হিন্দু উত্তরাধিকার'],
      hi: ['गर्भस्थ शिशु का संपत्ति अधिकार', 'मरणोपरांत जन्मे बच्चे का हिस्सा', 'धारा 20 हिंदू उत्तराधिकार']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain municipal birth certificate proving conception occurred prior to father demise or decree.',
        'File application under Section 151 and Order I Rule 10 CPC through natural guardian to implead child.',
        'Cite Section 20 HSA (a child in womb at time of death is deemed born before the death).',
        'Court amends preliminary partition decree, recalculating shares to allot equal portion to child.'
      ],
      bn: [
        'পৌরসভার জন্ম সনদ দিয়ে প্রমাণ করুন পিতার মৃত্যুর সময় বা মামলার শুরুতে শিশুটি গর্ভে ছিল।',
        'অভিভাবকের মাধ্যমে ধারা ১৫১ ও অর্ডার ১ রুল ১০ সিপিসি অনুযায়ী নবজাতককে মামলায় পক্ষভুক্ত করুন।',
        'হিন্দু আইনের ধারা ২০ উল্লেখ করুন যেখানে গর্ভস্থ সন্তানকে জীবিত ব্যক্তির সমমর্যাদা দেওয়া হয়েছে।',
        'আদালত পূর্বের রায় সংশোধন করে নবজাতক সন্তানের নামে সমান অংশের আলাদা ডিক্রি মঞ্জুর করবে।'
      ],
      hi: [
        'जन्म प्रमाणपत्र से सिद्ध करें कि पिता की मृत्यु या मुकदमे के समय बच्चा गर्भ में था।',
        'संरक्षक के माध्यम से आदेश 1 नियम 10 सीपीसी में नवजात को मुकदमे में पक्षकार बनाएं।',
        'धारा 20 का हवाला दें जिसके अनुसार गर्भस्थ शिशु को जीवित संतान के समान माना जाता है।',
        'अदालत प्रारंभिक डिक्री में संशोधन कर नवजात बच्चे को भी बराबर का हिस्सा आवंटित करेगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-40-1',
        name: { en: 'Municipal Birth Certificate & Ultrasound Conception Proof', bn: 'জন্ম সনদ ও গর্ভাবস্থার সনোগ্রাফি রিপোর্ট', hi: 'नगर निगम जन्म प्रमाणपत्र एवं अल्ट्रासाउंड रिपोर्ट' },
        issuing_authority: { en: 'Registrar of Births & Deaths / Hospital', bn: 'পুরসভা / হাসপাতাল', hi: 'नगर पालिका / अस्पताल' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-41',
    productCategory: 'lawyer-only',
    title: {
      en: 'Will Executed Under Mysterious Circumstances',
      bn: 'মৃত্যুর কয়েকদিন আগে হাসপাতালে তৈরি সন্দেহজনক উইল',
      hi: 'अस्पताल में मृत्यु से चंद दिन पहले बनाई गई संदेहास्पद वसीयत'
    },
    relevant_act: 'H. Venkatachala Iyengar (SC) r/w Sec 63 ISA',
    summary: {
      en: 'Challenging suspicious wills created days before death where natural heirs are disinherited and beneficiary took active part.',
      bn: 'মৃত্যুর ঠিক আগে আইসিইউতে তৈরি উইল যেখানে স্বাভাবিক ওয়ারিশদের বাদ দিয়ে এক ব্যক্তি সব লিখিয়ে নিয়েছে—তা বাতিল।',
      hi: 'मृत्यु से ठीक पहले आईसीयू में बनाई गई वसीयत जिसमें असली वारिसों को हटाकर सारी जमीन हड़पी गई हो, उसे रद्द कराना।'
    },
    authority_forum: {
      en: 'District Judge Court / High Court at Calcutta',
      bn: 'জেলা জজ আদালত / কলকাতা হাইকোর্ট',
      hi: 'जिला जज न्यायालय / कलकत्ता उच्च न्यायालय'
    },
    forum_type: 'High_Court',
    is_complex: true,
    official_portal_url: 'https://calcuttahighcourt.gov.in/',
    statutory_timeframe: {
      en: '1 to 3 years',
      bn: '১ থেকে ৩ বছর',
      hi: '1 से 3 वर्ष'
    },
    search_keywords: {
      en: ['suspicious circumstances will venkatachala', 'icu execution will invalid', 'will propounder active part'],
      bn: ['হাসপাতালে তৈরি উইল বাতিল', 'সন্দেহজনক ইচ্ছাপত্র', 'ভেঙ্কটাচালা সুপ্রিম কোর্ট'],
      hi: ['संदेहास्पद वसीयत वेंकटाचला', 'आईसीयू में बनी वसीयत', 'फर्जी वसीयत रद्द']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'File caveat and written objection in probate highlighting suspicious factors (ICU execution).',
        'Summon hospital admission registers and doctor bed-head tickets regarding testator consciousness.',
        'Cross-examine propounder and witnesses regarding discrepancy in signatures and thumbprints.',
        'Probate court refuses probate where propounder fails to dispel grave suspicious circumstances.'
      ],
      bn: [
        'প্রোবেট মামলায় লিখিত আপত্তি দিন যে উইলটি আইসিইউতে অস্বাভাবিক পরিস্থিতিতে তৈরি করা হয়েছে।',
        'হাসপাতালের ডাক্তারদের বেড-হেড টিকিট তলব করে প্রমাণ করুন রোগী সই করার মতো সচেতন ছিলেন না।',
        'সুবিধাভোগী ও তার ভুয়ো সাক্ষীদের জেরা করে সই বা টিপসইয়ের অসঙ্গতি আদালতের সামনে তুলে ধরুন।',
        'সন্দেহ দূর করতে ব্যর্থ হলে আদালত প্রোবেট খারিজ করে উইলটিকে সম্পূর্ণ বাতিল ঘোষণা করবে।'
      ],
      hi: [
        'प्रोबेट में कैविएट लगाकर आपत्ति दें कि वसीयत अस्पताल के आईसीयू में संदिग्ध रूप से बनी है।',
        'डॉक्टर के बेड-हेड टिकट एवं मेडिकल चार्ट तलब कर साबित करें कि मरीज हस्ताक्षर की स्थिति में नहीं था।',
        'लाभार्थी एवं उसके गवाहों से जिरह कर अंगूठे के निशान और हस्ताक्षरों की जालसाजी उजागर करें।',
        'संदेह दूर न होने पर अदालत प्रोबेट देने से इनकार कर वसीयत को पूर्णतः निरस्त करेगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-41-1',
        name: { en: 'Hospital Bed-Head Tickets & Coma / ICU Medical Summary', bn: 'আইসিইউ বেড-হেড টিকিট ও কোমা মেডিকেল সামারি', hi: 'अस्पताल बेड-हेड टिकट एवं आईसीयू मेडिकल सारांश' },
        issuing_authority: { en: 'Treating Hospital Authority', bn: 'হাসপাতাল কর্তৃপক্ষ', hi: 'अस्पताल प्रशासन' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-42',
    productCategory: 'lawyer-only',
    title: {
      en: 'Succession to Estates of Childless Unmarried Persons',
      bn: 'অবিবাহিত ও নিঃসন্তান ব্যক্তির সম্পত্তির আইনি উত্তরাধিকার',
      hi: 'अविवाहित एवं निःसंतान व्यक्ति की संपत्ति का कानूनी उत्तराधिकार'
    },
    relevant_act: 'Sec 8, 9 & 15, Hindu Succession Act, 1956',
    summary: {
      en: 'Order of devolution for property of unmarried, childless deceased persons among parents, siblings, and nephews.',
      bn: 'অবিবাহিত ও নিঃসন্তান ব্যক্তি উইল না করে মারা গেলে পিতা-মাতা, ভাই-বোন ও ভাইপোদের মধ্যে সম্পত্তির অধিকার।',
      hi: 'अविवाहित मृतक की जमीन-जायदाद का माता-पिता, भाइयों, बहनों एवं भतीजों में कानूनी बंटवारा।'
    },
    authority_forum: {
      en: 'Civil Court (Senior / Junior Division)',
      bn: 'দেওয়ানি আদালত (সিনিয়র / জুনিয়র ডিভিশন)',
      hi: 'सिविल न्यायालय (सीनियर/जूनियर डिवीजन)'
    },
    forum_type: 'Civil_Court',
    is_complex: false,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '4 to 6 months',
      bn: '৪ থেকে ৬ মাস',
      hi: '4 से 6 माह'
    },
    search_keywords: {
      en: ['unmarried person property succession', 'class ii heirs section 8', 'childless brother inheritance'],
      bn: ['অবিবাহিত ভাইয়ের জমি উত্তরাধিকার', 'ক্লাস ২ ওয়ারিশ', 'নিঃসন্তান ব্যক্তির সম্পত্তি'],
      hi: ['अविवाहित भाई की संपत्ति', 'क्लास 2 उत्तराधिकारी', 'निःसंतान व्यक्ति का वारिस']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Secure death certificate and verify deceased was unmarried and left no Class-I descendants.',
        'Map Class-II heirs under Section 8: father, mother, followed by brothers and sisters equally.',
        'File application for Succession Certificate or Legal Heirship Certificate before civil court.',
        'Court issues succession grant allowing siblings to liquidate accounts and mutate real estate.'
      ],
      bn: [
        'মৃত্যু সনদ সংগ্রহ করে নিশ্চিত হন যে মৃত ব্যক্তি অবিবাহিত এবং তার কোনো সন্তান বা স্ত্রী নেই।',
        'ধারা ৮ অনুযায়ী দ্বিতীয় শ্রেণির ওয়ারিশ চিহ্নিত করুন: মা, বাবা এবং তাদের অবর্তমানে ভাই ও বোনেরা।',
        'দেওয়ানি আদালতে আইনি ওয়ারিশ ঘোষণা অথবা সাকসেশন সার্টিফিকেটের জন্য পিটিশন দাখিল করুন।',
        'আদালতের সার্টিফিকেট নিয়ে জীবিত ভাই-বোনেরা ব্যাঙ্কের টাকা তুলবে এবং জমির পর্চায় নাম তুলবে।'
      ],
      hi: [
        'मृत्यु प्रमाणपत्र से पुष्टि करें कि मृतक अविवाहित था और कोई प्रथम श्रेणी वारिस नहीं है।',
        'धारा 8 के तहत द्वितीय श्रेणी वारिस तय करें: माता-पिता, और उनके बाद सभी भाई-बहन बराबर।',
        'दीवानी अदालत में उत्तराधिकार प्रमाणपत्र अथवा लीगल हेयर घोषणा का आवेदन दाखिल करें।',
        'अदालती प्रमाणपत्र प्राप्त कर भाई-बहन बैंक खाते से पैसा निकालें एवं जमीन का म्यूटेशन कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-42-1',
        name: { en: 'Death Certificate & Class-II Legal Heir Genealogical Chart', bn: 'মৃত্যু সনদ ও দ্বিতীয় শ্রেণির ওয়ারিশান তালিকা', hi: 'मृत्यु प्रमाणपत्र एवं द्वितीय श्रेणी वंशावली चार्ट' },
        issuing_authority: { en: 'Municipality / Panchayat', bn: 'পুরসভা / পঞ্চায়েত', hi: 'नगर पालिका / पंचायत' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-43',
    productCategory: 'lawyer-only',
    title: {
      en: 'Partition of Real Estate with Pre-existing Bank Mortgage',
      bn: 'ব্যাঙ্কে মর্টগেজ থাকা যৌথ জমি বাটোয়ারা করার নিয়ম',
      hi: 'बैंक में बंधक रखी संयुक्त जमीन का कानूनी बंटवारा'
    },
    relevant_act: 'Order XXXIV, CPC r/w Transfer of Property Act, 1882',
    summary: {
      en: 'Partitioning joint ancestral land where one co-sharer took a bank loan against an undivided share without consensus.',
      bn: 'এক শরিক নিজের ভাগে গোপনে ব্যাঙ্ক লোন নিয়ে জমি বন্ধক রাখলে বাকিদের নির্দোষ অংশ আলাদা করার মামলা।',
      hi: 'एक हिस्सेदार द्वारा संयुक्त जमीन पर बैंक लोन लेने पर बाकी हिस्सेदारों का हिस्सा बंधकमुक्त कराना।'
    },
    authority_forum: {
      en: 'Civil Court / Debts Recovery Tribunal (DRT)',
      bn: 'দেওয়ানি আদালত / ঋণ পুনরুদ্ধার ট্রাইব্যুনাল (DRT)',
      hi: 'सिविल न्यायालय / ऋण वसूली अधिकरण (DRT)'
    },
    forum_type: 'DRT',
    is_complex: true,
    official_portal_url: 'https://drt.etribunals.gov.in/',
    statutory_timeframe: {
      en: '1 to 2 years',
      bn: '১ থেকে ২ বছর',
      hi: '1 से 2 वर्ष'
    },
    search_keywords: {
      en: ['mortgaged joint property partition', 'bank loan undivided share', 'order 34 cpc partition'],
      bn: ['বন্ধকি জমি বাটোয়ারা', 'লোন থাকা জমি ভাগ', 'ব্যাঙ্ক মর্টগেজ যৌথ জমি'],
      hi: ['बंधक संयुक्त जमीन बंटवारा', 'बैंक लोन हिस्सा अलग कराना', 'डीआरटी बंधक बंटवारा']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain bank loan sanction letter identifying specific mortgaged fraction and outstanding debt.',
        'Implead lending bank as formal party under Order I Rule 10 CPC in the partition suit.',
        'Pray for court to carve out defaulting co-sharer lot and shift bank mortgage lien strictly onto it.',
        'Secure final partition decree granting unencumbered, mortgage-free title of remaining lots to others.'
      ],
      bn: [
        'লোন প্রদানকারী ব্যাঙ্কের কাছ থেকে কোন শরিক কত টাকা লোন নিয়েছে তার নোটিশ কপি সংগ্রহ করুন।',
        'অর্ডার ১ রুল ১০ সিপিসি অনুযায়ী বাটোয়ারা মামলায় ঋণদাতা ব্যাঙ্ককে অন্যতম পক্ষভুক্ত করুন।',
        'আদালতে আবেদন করুন যেন ব্যাঙ্কের বন্ধকি দায় কেবল ঋণগ্রহীতা শরিকের নির্দিষ্ট অংশে চাপানো হয়।',
        'চূড়ান্ত ডিক্রির মাধ্যমে বাকি নির্দোষ শরিকদের জমি সম্পূর্ণ লোনমুক্ত ও দাগমুক্ত করে বুঝিয়ে নিন।'
      ],
      hi: [
        'बैंक से लोन दस्तावेज निकालें कि किस भाई ने कितने कर्ज हेतु संयुक्त जमीन गिरवी रखी।',
        'आदेश 1 नियम 10 सीपीसी के तहत बंटवारा मुकदमे में संबंधित बैंक को पक्षकार बनाएं।',
        'अदालत से मांग करें कि बैंक का बंधक केवल कर्ज लेने वाले भाई के हिस्से पर ही सीमित किया जाए।',
        'अंतिम डिक्री द्वारा अन्य सभी भाइयों की जमीन को बैंक बंधक से पूर्णतः मुक्त कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-43-1',
        name: { en: 'Bank Mortgage Notice & Outstanding Loan Ledger Statement', bn: 'ব্যাঙ্কের বন্ধকি নোটিশ ও লোন স্টেটমেন্ট', hi: 'बैंक बंधक नोटिस एवं बकाया ऋण खाता विवरण' },
        issuing_authority: { en: 'Lending Bank Branch', bn: 'ঋণদাতা ব্যাঙ্ক', hi: 'ऋणदाता बैंक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-44',
    productCategory: 'lawyer-only',
    title: {
      en: 'Absolute Ownership Rights of Hindu Widows',
      bn: 'হিন্দু বিধবার সম্পূর্ণ স্বত্ব ও রিভার্শনার দাবি খারিজ',
      hi: 'हिंदू विधवा का संपत्ति पर पूर्ण स्वामित्व एवं देवर/जेठ के दावों का निरस्तीकरण'
    },
    relevant_act: 'Sec 14(1), Hindu Succession Act, 1956',
    summary: {
      en: 'Confirming that property possessed by a female Hindu matures into absolute full ownership, invalidating reversion claims by in-laws.',
      bn: 'স্বামীর মৃত্যুর পর পাওয়া সম্পত্তিতে হিন্দু বিধবা একমাত্র ও সম্পূর্ণ মালিক; শ্বশুরবাড়ির আত্মীয়দের দাবি আইনত অচল।',
      hi: 'पति की संपत्ति पर हिंदू विधवा का पूर्ण व असीमित अधिकार; देवर या ससुराल वालों का सीमित अधिकार का दावा अवैध।'
    },
    authority_forum: {
      en: 'Civil Court / City Civil Court at Calcutta',
      bn: 'দেওয়ানি আদালত / সিটি সিভিল কোর্ট কলকাতা',
      hi: 'सिविल न्यायालय / सिटी सिविल कोर्ट'
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
      en: ['section 14 1 hindu succession', 'widow absolute owner property', 'in laws reversionary claim dismissed'],
      bn: ['হিন্দু বিধবার সম্পূর্ণ স্বত্ব', 'ধারা ১৪(১) হিন্দু উত্তরাধিকার', 'স্বামীর সম্পত্তিতে বিধবার অধিকার'],
      hi: ['हिंदू विधवा पूर्ण स्वामित्व', 'धारा 14(1) हिंदू उत्तराधिकार', 'विधवा संपत्ति बिक्री अधिकार']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Produce title deeds and revenue Porchas proving female Hindu was in lawful possession.',
        'Cite Section 14(1) HSA: property possessed by female Hindu matures into absolute ownership.',
        'File Written Statement or Plaint asserting full right to sell, gift, or bequeath without in-law nod.',
        'Secure declaratory decree dismissing reversionary suits brought by brothers-in-law.'
      ],
      bn: [
        'দলিল ও খতিয়ান জমা দিয়ে প্রমাণ করুন স্বামীর মৃত্যুর পর স্ত্রী বৈধ দখলে রয়েছেন।',
        'হিন্দু উত্তরাধিকার আইনের ধারা ১৪(১) তুলে ধরুন: নারীর অধিকারে থাকা সম্পত্তি তার পূর্ণ মালিকানা।',
        'আদালতে দাবি জানান বিধবা তার সম্পত্তি বিক্রি বা দান করতে স্বাধীন এবং শ্বশুরবাড়ির অনুমতি নিষ্প্রয়োজন।',
        'দেওয়র বা ভাশুরের দায়ের করা রিভার্শনার মামলা খারিজ করিয়ে পূর্ণ স্বত্বাধিকার ঘোষণা করান।'
      ],
      hi: [
        'खतियान एवं विलेख प्रस्तुत कर साबित करें कि विधवा महिला संपत्ति पर वैध काबिज है।',
        'धारा 14(1) का हवाला दें: हिंदू महिला के कब्जे वाली संपत्ति उसका पूर्ण स्वामित्व (Absolute Ownership) बन जाती है।',
        'जवाबदावा देकर स्पष्ट करें कि विधवा को जमीन बेचने, दान करने या वसीयत का पूर्ण कानूनी अधिकार है।',
        'देवर या ससुराल पक्ष द्वारा दायर किए गए सीमित अधिकार के दावे को अदालत से खारिज कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-44-1',
        name: { en: 'Husband Death Certificate & Revenue Porcha in Widow Name', bn: 'স্বামীর মৃত্যু সনদ ও বিধবার নামের পর্চা', hi: 'पति का मृत्यु प्रमाणपत्र एवं विधवा के नाम का पर्चा' },
        issuing_authority: { en: 'Registrar of Births & Deaths / BL&LRO', bn: 'পুরসভা / ভূমি দপ্তর', hi: 'नगर पालिका / राजस्व विभाग' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-45',
    productCategory: 'lawyer-only',
    title: {
      en: 'Succession of Digital Assets, Royalties & Intellectual Property',
      bn: 'ডিজিটাল সম্পদ, কপিরাইট, রয়্যালটি ও পেটেন্ট উত্তরাধিকার',
      hi: 'डिजिटल संपत्ति, रॉयल्टी, कॉपीराइट एवं पेटेंट का उत्तराधिकार'
    },
    relevant_act: 'Copyright Act, 1957 r/w Sec 370, Indian Succession Act',
    summary: {
      en: 'Obtaining succession certificates and administrative grants over digital IP, YouTube ad revenue, book royalties, and software patents.',
      bn: 'মৃত ব্যক্তির বইয়ের রয়্যালটি, ইউটিউব চ্যানেলের আয়, সফ্টওয়্যার কোড বা পেটেন্টের আইনি উত্তরাধিকার লাভ।',
      hi: 'मृतक के यूट्यूब चैनल की कमाई, किताबों की रॉयल्टी एवं सॉफ्टवेयर पेटेंट के अधिकार वारिसों को दिलाना।'
    },
    authority_forum: {
      en: 'Civil Court (Senior Division) / Commercial Court',
      bn: 'দেওয়ানি আদালত / বাণিজ্যিক আদালত',
      hi: 'सिवিল न्यायालय / वाणिज्यिक न्यायालय'
    },
    forum_type: 'Commercial_Court',
    is_complex: true,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '4 to 6 months',
      bn: '৪ থেকে ৬ মাস',
      hi: '4 से 6 माह'
    },
    search_keywords: {
      en: ['digital assets succession', 'youtube royalty inheritance', 'copyright succession certificate'],
      bn: ['ডিজিটাল সম্পদ উত্তরাধিকার', 'ইউটিউব রয়্যালটি সাকসেশন', 'কপিরাইট ভাগ'],
      hi: ['डिजिटल संपत्ति उत्तराधिकार', 'रॉयल्टी उत्तराधिकार प्रमाणपत्र', 'कॉपीराइट वारिस हक']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Compile itemized digital asset schedule including copyright registration numbers and royalty logs.',
        'File petition for Succession Certificate under Section 372 ISA specifically listing intangible debts.',
        'Serve notice on intellectual property collecting societies (IPRS, PPL) and digital publishing platforms.',
        'Submit final Succession Certificate to digital platforms to transfer revenue accounts to legal heirs.'
      ],
      bn: [
        'কপিরাইট রেজিস্ট্রেশন নম্বর, প্রকাশনা চুক্তি ও গুগল অ্যাডসেন্স রয়্যালটি স্টেটমেন্টের তালিকা তৈরি করুন।',
        'অদৃশ্য সম্পদ ও রয়্যালটি দেনা আদায়ের জন্য ধারা ৩৭২ অনুযায়ী সাকসেশন পিটিশন দাখিল করুন।',
        'সঙ্গীত বা লেখক সমিতি (IPRS) এবং ডিজিটাল প্ল্যাটফর্মের ওপর আদালতের লিগ্যাল নোটিশ জারি করান।',
        'আদালতের সার্টিফিকেট জমা দিয়ে ইউটিউব বা রয়্যালটি অ্যাকাউন্ট আইনি ওয়ারিশদের নামে ট্রান্সফার করান।'
      ],
      hi: [
        'कॉपीराइट नंबर, प्रकाशन अनुबंध एवं डिजिटल रॉयल्टी की विस्तृत सूची तैयार करें।',
        'अमूर्त बौद्धिक संपत्तियों हेतु धारा 372 के तहत उत्तराधिकार प्रमाणपत्र याचिका दाखिल करें।',
        'कॉपीराइट सोसायटियों (IPRS) एवं ऑनलाइन प्लेटफॉर्मों को अदालती नोटिस तामील कराएं।',
        'अदालत से प्रमाणपत्र लेकर डिजिटल प्लेटफॉर्मों पर मृतक के खाते वारिसों के नाम स्थानांतरित कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-45-1',
        name: { en: 'Copyright Registration Certificates & Royalty Ledger Sheets', bn: 'কপিরাইট সার্টিফিকেট ও রয়্যালটির লেজার কপি', hi: 'कॉपीराइट पंजीकरण प्रमाणपत्र एवं रॉयल्टी खाता विवरण' },
        issuing_authority: { en: 'Copyright Office of India / Publishers', bn: 'কপিরাইট দপ্তর', hi: 'कॉपीराइट कार्यालय भारत सरकार' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-46',
    productCategory: 'free-checklist',
    title: {
      en: 'Family Settlement Challenged by Non-Signatory Legal Heir',
      bn: 'বণ্টননামায় স্বাক্ষর না থাকা ভাই বা বোনের আদালতে চ্যালেঞ্জ',
      hi: 'हस्ताक्षर न करने वाले भाई/बहन द्वारा पारिवारिक समझौते को चुनौती'
    },
    relevant_act: 'Indian Contract Act, 1872 r/w Specific Relief Act',
    summary: {
      en: 'Non-consenting siblings invalidating private family settlement deeds drawn up and registered behind their back without their signature.',
      bn: 'কোনো এক ভাই বা বোনকে না জানিয়ে বাকিরা মিলে রেজিস্ট্রি আপস-বণ্টননামা তৈরি করলে তা অবৈধ ঘোষণার মামলা।',
      hi: 'किसी एक वारिस को दरकिनार कर शेष परिवार द्वारा गुपचुप की गई बंटवारा रजिस्ट्री को अदालत में रद्द कराना।'
    },
    authority_forum: {
      en: 'Civil Court (Senior Division) / City Civil Court',
      bn: 'দেওয়ানি আদালত (সিনিয়র ডিভিশন) / সিটি সিভিল কোর্ট',
      hi: 'सिवিল न्यायालय (सीनियर डिवीजन)'
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
      en: ['non signatory family settlement', 'challenge partition deed without signature', 'void family arrangement'],
      bn: ['স্বাক্ষরবিহীন বণ্টননামা বাতিল', 'বোনের সই ছাড়া দলিল', 'ভুয়ো পারিবারিক রফা'],
      hi: ['बिना हस्ताक्षर पारिवारिक समझौता', 'अवैध बंटवारा डीड चुनौती', 'शून्य परिवार व्यवस्था']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain certified copies of registered family arrangement deed (Aposh-Bontonnama) from ADSR.',
        'File Civil Suit for Declaration that settlement deed is void ab initio against non-signatory plaintiff.',
        'Establish that an unpartitioned coparcenary cannot be dissolved without consensus of all co-owners.',
        'Secure order canceling fraudulent deed and initiating a fresh judicial partition under Order XX CPC.'
      ],
      bn: [
        'সাব-রেজিস্ট্রি অফিস থেকে রেজিস্ট্রি করা আপস-বণ্টন দলিলের সার্টিফাইড কপি সংগ্রহ করুন।',
        'স্বাক্ষরহীন বাদীর ওপর দলিলটি সম্পূর্ণ অকার্যকর ঘোষণা চেয়ে দেওয়ানি আদালতে মামলা করুন।',
        'প্রমাণ করুন সমস্ত শরিকের সর্বসম্মত সম্মতি ছাড়া যৌথ সম্পত্তি ভাগ করার কোনো আইনি ভিত্তি নেই।',
        'আদালতের মাধ্যমে বেআইনি দলিল বাতিল করিয়ে অর্ডার ২০ সিপিসি অনুযায়ী নতুন করে বাটোয়ারা শুরু করুন।'
      ],
      hi: [
        'उप-पंजीयक कार्यालय से पंजीकृत पारिवारिक समझौते (आपस-बंटननामा) की नकल लें।',
        'हस्ताक्षर न करने वाले वारिस के खिलाफ इस विलेख को प्रारंभ से ही शून्य घोषित कराने का वाद करें।',
        'साबित करें कि सभी सह-खातेदारों की सहमति के बिना पैतृक संपत्ति का विभाजन कानूनन अमान्य है।',
        'फर्जी विलेख रद्द कराकर आदेश 20 सीपीसी के तहत नए सिरे से अदालती बंटवारा शुरू कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-46-1',
        name: { en: 'Certified Copy of Registered Family Settlement without Plaintiff Signature', bn: 'স্বাক্ষরবিহীন আপস দলিলের সার্টিফাইড কপি', hi: 'बिना हस्ताक्षर वाले पंजीकृत पारिवारिक विलेख की प्रमाणित प्रति' },
        issuing_authority: { en: 'Sub-Registrar Office (ADSR)', bn: 'সাব-রেজিস্ট্রার অফিস', hi: 'उप-पंजीयक कार्यालय' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-47',
    productCategory: 'lawyer-only',
    title: {
      en: 'Mohammedan Law Rule on Bequests Capped at One-Third',
      bn: 'মুসলিম আইনে এক-তৃতীয়াংশের বেশি উইল করার আইনি নিষেধাজ্ঞা',
      hi: 'मुस्लिम कानून में एक-तिहाई से अधिक वसीयत करने पर कानूनी प्रतिबंध'
    },
    relevant_act: 'Principles of Mohammedan Law (Wasaya / Will Rules)',
    summary: {
      en: 'Challenging Muslim wills bequeathing more than one-third of net estate to outsiders without express consent of legal heirs.',
      bn: 'মুসলিম আইনে সমস্ত ওয়ারিশদের সম্মতি ছাড়া সম্পত্তির এক-তৃতীয়াংশের (১/৩) বেশি উইল করা সম্পূর্ণ বেআইনি।',
      hi: 'मुस्लिम कानून में सभी वारिसों की रजामंदी के बिना कुल संपत्ति के 1/3 हिस्से से ज्यादा वसीयत करने पर रोक।'
    },
    authority_forum: {
      en: 'Civil Court (Junior / Senior Division)',
      bn: 'দেওয়ানি আদালত (জুনিয়র / সিনিয়র ডিভিশন)',
      hi: 'सिविल न्यायालय (सीनियर/जूनियर डिवीजन)'
    },
    forum_type: 'Civil_Court',
    is_complex: false,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '1 to 2 years',
      bn: '১ থেকে ২ বছর',
      hi: '1 से 2 वर्ष'
    },
    search_keywords: {
      en: ['muslim will one third rule', 'wasaya limit mohammedan law', 'excessive bequest muslim will'],
      bn: ['মুসলিম উইল ১/৩ নিয়ম', 'ওয়াসায়া সীমা', 'এক-তৃতীয়াংশের বেশি উইল বাতিল'],
      hi: ['मुस्लिम वसीयत 1/3 नियम', 'शरिया वसीयत सीमा', 'अवैध वसीयत मुस्लिम कानून']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Quantify net estate value after deducting funeral expenses, debts, and dower (Mahr) liabilities.',
        'Challenge any bequest exceeding one-third (1/3) of net estate as ultra vires Mohammedan law.',
        'File Suit for Partition asserting excess two-thirds must devolve strictly per Quranic shares.',
        'Court limits legatee share to maximum one-third and partitions remaining two-thirds among heirs.'
      ],
      bn: [
        'দাফনের খরচ, দেনা এবং দেনমোহর (Mahr) পরিশোধের পর মোট অবশিষ্ট সম্পত্তির হিসাব নিরূপণ করুন।',
        'এক-তৃতীয়াংশের অতিরিক্ত যেকোনো দান বা উইলকে শ্যারিয়ত বিরোধী আখ্যা দিয়ে আদালতে চ্যালেঞ্জ করুন।',
        'বাকি দুই-তৃতীয়াংশ সম্পত্তি সমস্ত আইনি ওয়ারিশদের মধ্যে কোরানিক নিয়মে ভাগের বাটোয়ারা মামলা করুন।',
        'আদালত বাইরের ব্যক্তির উইল সর্বোচ্চ এক-তৃতীয়াংশে সীমাবদ্ধ রেখে বাকি অংশ ওয়ারিশদের ফিরিয়ে দেবে।'
      ],
      hi: [
        'अंतिम संस्कार, कर्ज एवं मेहर की राशि चुकाने के बाद बची शुद्ध संपत्ति का मूल्यांकन करें।',
        '1/3 से अधिक संपत्ति किसी बाहरी को वसीयत करने को शरिया के विरुद्ध बताते हुए चुनौती दें।',
        'दीवानी अदालत में वाद कर बाकी 2/3 हिस्से को कुरानिक नियमों से सभी वारिसों में बांटने की मांग करें।',
        'अदालत बाहरी व्यक्ति का हिस्सा अधिकतम 1/3 तक सीमित कर शेष संपत्ति सगे वारिसों को सौंपेगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-47-1',
        name: { en: 'Disputed Will & Family Estate Valuation Schedule', bn: 'বিতর্কিত উইল ও সম্পত্তির মূল্যায়ন তালিকা', hi: 'विवादित वसीयत एवं कुल संपत्ति मूल्यांकन सूची' },
        issuing_authority: { en: 'Civil Court / Applicant', bn: 'আদালত / আবেদনকারী', hi: 'सिविल कोर्ट / आवेदक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-48',
    productCategory: 'lawyer-only',
    title: {
      en: 'Revocation of Succession Certificate for Fraudulent Concealment',
      bn: 'ওয়ারিশ লুকিয়ে তোলা সাকসেশন সার্টিফিকেট বাতিল',
      hi: 'वारिसों को छिपाकर धोखाधड़ी से लिया गया उत्तराधिकार प्रमाणपत्र रद्द कराना'
    },
    relevant_act: 'Sec 383, Indian Succession Act, 1925',
    summary: {
      en: 'Revoking succession certificates obtained by one heir through fraudulent non-citation or concealment of daughters or second spouse.',
      bn: 'বোন বা দ্বিতীয় স্ত্রীকে গোপন করে এক ভাই ব্যাঙ্ক থেকে টাকা তুলতে সাকসেশন সার্টিফিকেট নিলে তা বাতিলের মামলা।',
      hi: 'बहनों या अन्य वारिसों का नाम छिपाकर बैंक से पैसा निकालने हेतु लिए गए प्रमाणपत्र को निरस्त कराना।'
    },
    authority_forum: {
      en: 'Civil Court (Senior Division) which granted original certificate',
      bn: 'দেওয়ানি আদালত (যা মূল সার্টিফিকেট মঞ্জুর করেছিল)',
      hi: 'सिविल न्यायालय (जिसने मूल प्रमाणपत्र जारी किया था)'
    },
    forum_type: 'Civil_Court',
    is_complex: false,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '60 to 90 working days',
      bn: '৬০ থেকে ৯০ কার্যদিবস',
      hi: '60 থেকে 90 कार्यदिवस'
    },
    search_keywords: {
      en: ['revocation of succession certificate', 'section 383 isa', 'fraudulent succession grant'],
      bn: ['সাকসেশন সার্টিফিকেট বাতিল', 'ধারা ৩৮৩ সাকসেশন অ্যাক্ট', 'ওয়ারিশ গোপন করে সার্টিফিকেট'],
      hi: ['उत्तराधिकार प्रमाणपत्र निरस्तीकरण', 'धारा 383 उत्तराधिकार कानून', 'फर्जी लीगल हेयर रद्दीकरण']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain certified copies of succession certificate petition, citations, and order sheet from court.',
        'File Revocation Petition under Section 383 ISA proving grant was obtained by untrue allegations of fact.',
        'Present government Warishan certificates proving applicant was a surviving Class-I heir omitted deliberately.',
        'Court revokes certificate, freezes bank accounts, and directs fraudulent petitioner to deposit funds.'
      ],
      bn: [
        'দেওয়ানি আদালত থেকে পূর্বের সাকসেশন মামলার আরজি, নোটিশ ও আদেশের সার্টিফাইড কপি তুলুন।',
        'মিথ্যা তথ্য দিয়ে সার্টিফিকেট নেওয়ার অভিযোগে ধারা ৩৮৩ অনুযায়ী সার্টিফিকেট বাতিলের দরখাস্ত দিন।',
        'সরকারি ওয়ারিশান পেশ করে প্রমাণ করুন আবেদনকারী প্রথম শ্রেণির বৈধ ওয়ারিশ যাকে নোটিশ দেওয়া হয়নি।',
        'আদালত সার্টিফিকেট বাতিল করবে, ব্যাঙ্ক অ্যাকাউন্ট ফ্রিজ করবে এবং তোলা টাকা কোর্টে জমার নির্দেশ দেবে।'
      ],
      hi: [
        'अदालत से पूर्व उत्तराधिकार याचिका, समन एवं अंतिम आदेश की प्रमाणित प्रतियां निकालें।',
        'तथ्य छिपाने एवं झूठी गवाही के आधार पर धारा 383 में प्रमाणपत्र निरस्तीकरण याचिका दें।',
        'सरकारी वारिसान पेश कर सिद्ध करें कि वादी सगा वारिस था जिसे जानबूझकर नोटिस नहीं दिया गया।',
        'अदालत प्रमाणपत्र रद्द करेगी, बैंक खाते सील कराएगी और निकाली गई रकम अदालत में जमा कराएगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-48-1',
        name: { en: 'Revocation Petition under Section 383 & Genuine Warishan Certificate', bn: 'ধারা ৩৮৩ পিটিশন ও আসল ওয়ারিশান সার্টিফিকেট', hi: 'धारा 383 निरस्तीकरण याचिका एवं वास्तविक वारिसान' },
        issuing_authority: { en: 'Civil Court / Municipality', bn: 'দেওয়ানি আদালত / পুরসভা', hi: 'सिविल कोर्ट / नगर पालिका' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-49',
    productCategory: 'lawyer-only',
    title: {
      en: 'Customary Tribal Succession vs Non-Applicability of HSA',
      bn: 'আদিবাসী সাঁওতাল ও মুণ্ডা উত্তরাধিকার বনাম হিন্দু আইন',
      hi: 'अनुसूचित जनजाति (आदिवासी) रूढ़िगत उत्तराधिकार बनाम हिंदू कानून की अमान्यता'
    },
    relevant_act: 'Sec 2(2), Hindu Succession Act, 1956 r/w Chota Nagpur / Santhal Tenancy',
    summary: {
      en: 'Adjudicating tribal succession under codified customary lineage usage, confirming exclusion of the Hindu Succession Act.',
      bn: 'আদিবাসী সাঁওতাল, মুণ্ডা বা ওরাওঁ জনগোষ্ঠীর জমি বণ্টনে সাধারণ হিন্দু আইনের বদলে নিজস্ব প্রথাগত অধিকার প্রতিষ্ঠা।',
      hi: 'आदिवासी समाज की जमीन पर हिंदू उत्तराधिकार कानून लागू न होकर उनके पारंपरिक रूढ़िगत नियमों से फैसला।'
    },
    authority_forum: {
      en: 'Civil Court / Special Tribal Revenue Authority',
      bn: 'দেওয়ানি আদালত / উপজাতি কল্যাণ রাজস্ব দপ্তর',
      hi: 'सिविल न्यायालय / विशेष जनजाति राजस्व प्राधिकारी'
    },
    forum_type: 'Competent_Authority',
    is_complex: true,
    official_portal_url: 'https://wbtribal.gov.in/',
    statutory_timeframe: {
      en: '1 to 2 years',
      bn: '১ থেকে ২ বছর',
      hi: '1 से 2 वर्ष'
    },
    search_keywords: {
      en: ['tribal succession section 2 2 hsa', 'santhal customary inheritance', 'adivasi land succession wb'],
      bn: ['আদিবাসী উত্তরাধিকার', 'সাঁওতাল প্রথাগত আইন', 'ধারা ২(২) হিন্দু উত্তরাধিকার'],
      hi: ['आदिवासी उत्तराधिकार कानून', 'संथाल रूढ़िगत नियम', 'जनजाति जमीन बंटवारा']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Establish membership in a notified Scheduled Tribe under Article 342 of Constitution of India.',
        'Invoke Section 2(2) HSA, demonstrating that general statutory Hindu succession does not apply.',
        'Produce evidence of prevailing patriarchal tribal customs (e.g. lineage maintenance for daughters).',
        'Civil court partitions estate in strict compliance with validated customary tribal jurisprudence.'
      ],
      bn: [
        'সংবিধানের অনুচ্ছেদ ৩৪২ অনুযায়ী বিজ্ঞাপিত তপশিলি উপজাতিভুক্ত (ST) হওয়ার প্রমাণ পেশ করুন।',
        'হিন্দু উত্তরাধিকার আইনের ধারা ২(২) তুলে ধরে প্রমাণ করুন সাধারণ হিন্দু আইন আদিবাসীদের ক্ষেত্রে অচল।',
        'সমাজপতিদের সাক্ষ্য ও প্রথাগত রীতির নথি দিয়ে বংশপরম্পরাগত জমিতালিকা আদালতে দাখিল করুন।',
        'দেওয়ানি আদালত আদিবাসী প্রথাগত সমাজিক নিয়ম মেনেই পারিবারিক জমি বণ্টনের ডিক্রি দেবে।'
      ],
      hi: [
        'संविधान के अनुच्छेद 342 के तहत अधिसूचित अनुसूचित जनजाति (ST) का जाति प्रमाणपत्र दें।',
        'हिंदू उत्तराधिकार की धारा 2(2) का हवाला दें जिसके तहत यह कानून आदिवासियों पर लागू नहीं होता।',
        'पारंपरिक रीति-रिवाजों एवं ग्राम प्रधानों की गवाही से पुश्तैनी उत्तराधिकार परंपरा सिद्ध करें।',
        'दीवानी अदालत आदिवासी समुदाय की मान्य रूढ़िगत परंपरा के अनुसार ही जमीन का बंटवारा करेगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-49-1',
        name: { en: 'Scheduled Tribe (ST) Certificate & Village Pradhan Customary Affidavit', bn: 'তপশিলি উপজাতি শংসাপত্র ও সমাজপতির হলফনামা', hi: 'अनुसूचित जनजाति प्रमाणपत्र एवं ग्राम प्रधान का रूढ़िगत शपथ पत्र' },
        issuing_authority: { en: 'SDO / Tribal Welfare Department', bn: 'মহকুমা শাসক (SDO)', hi: 'एसडीओ / आदिवासी कल्याण विभाग' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-50',
    productCategory: 'lawyer-only',
    title: {
      en: 'Rights of Minor Co-sharers in Family Partition',
      bn: 'নাবালকের স্বার্থবিরোধী সম্পত্তি বণ্টন আদালতে বাতিল মামলা',
      hi: 'नाबालिग (नाबालक) के हितों के विरुद्ध किया गया पारिवारिक बंटवारा रद्द कराना'
    },
    relevant_act: 'Sec 8, Hindu Minority & Guardianship Act, 1956 r/w Order XXXII CPC',
    summary: {
      en: 'Setting aside collusive or unfair partition arrangements executed by guardians that prejudiced a minor legitimate share.',
      bn: 'অভিভাবক কর্তৃক নাবালকের অজান্তে বা তার স্বার্থহানি করে কম মূল্যের জমি দিয়ে করা অন্যায্য বাটোয়ারা বাতিল।',
      hi: 'नाबालिग बच्चे को कम या खराब हिस्सा देकर अभिभावकों द्वारा किए गए अनुचित बंटवारे को बालिग होते ही रद्द कराना।'
    },
    authority_forum: {
      en: 'Civil Court (Partition Trial Bench)',
      bn: 'দেওয়ানি আদালত (বাটোয়ারা বিচারক আদালত)',
      hi: 'सिविल विचारण न्यायालय'
    },
    forum_type: 'Civil_Court',
    is_complex: true,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: 'Within 3 years of minor attaining age 18 (Majority)',
      bn: 'নাবালক ১৮ বছর (সাবালক) হওয়ার ৩ বছরের মধ্যে',
      hi: 'नाबालिग के 18 वर्ष (वयस्क) होने के 3 वर्ष में'
    },
    search_keywords: {
      en: ['minor share partition suit', 'set aside unfair partition minor', 'section 8 hmga guardian'],
      bn: ['নাবালকের সম্পত্তি বাটোয়ারা', 'নাবালকের স্বার্থবিরোধী ভাগ বাতিল', 'সাবালক হয়ে মামলা'],
      hi: ['नाबालिग का हिस्सा बंटवारा', 'अनुचित बंटवारा निरस्तीकरण', 'वयस्क होने पर मुकदमा']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Calculate minor fractional entitlement compared to the substandard lot allotted in prior partition.',
        'File Suit to Set Aside Partition through next friend or within 3 years of attaining majority (Sec 6 Limitation).',
        'Prove guardians failed to obtain prior court permission under Section 8 HMGA for minor disposition.',
        'Court annuls previous division and orders an equitable re-partition and fresh takhta distribution.'
      ],
      bn: [
        'হিসাব করে আদালতে দেখান কীভাবে পূর্ববর্তী বণ্টনে নাবালককে ঠকিয়ে খারাপ বা কম জমি দেওয়া হয়েছে।',
        'সাবালক হওয়ার ৩ বছরের মধ্যে বা শুভাকাঙ্ক্ষীর মাধ্যমে পূর্বের বাটোয়ারা বাতিলের মামলা করুন।',
        'প্রমাণ করুন নাবালকের স্বার্থ বিক্রির আগে আদালতের কোনো আইনি অনুমতি নেওয়া হয়নি।',
        'আদালত পূর্ববর্তী সমস্ত চুক্তি বাতিল করে নতুন করে সমস্ত সম্পত্তি সমানভাবে বণ্টনের নির্দেশ দেবে।'
      ],
      hi: [
        'अदालत में तुलनात्मक चार्ट दें कि कैसे पुराने बंटवारे में नाबालिग को कम या अनुपयोगी जमीन दी गई।',
        '18 वर्ष का होने के 3 साल के भीतर पुराने अनुचित बंटवारे को निरस्त कराने का दीवानी वाद करें।',
        'सिद्ध करें कि नाबालिग के हिस्से का निस्तारण करने से पूर्व अदालत की कोई अनुमति नहीं ली गई थी।',
        'अदालत पुराना बंटवारा रद्द कर नए सिरे से निष्पक्ष नापी कराकर बराबर तख्ताबंदी का आदेश देगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-50-1',
        name: { en: 'Birth Certificate proving Date of Majority & Previous Unfair Partition Deed', bn: 'বয়স প্রমাণের জন্ম সনদ ও পূর্বের ত্রুটিপূর্ণ বণ্টন দলিল', hi: 'आयु प्रमाणपत्र (वयस्कता तिथि) एवं पूर्व अनुचित बंटवारा विलेख' },
        issuing_authority: { en: 'Registrar of Births & Deaths / ADSR', bn: 'পুরসভা / সাব-রেজিস্ট্রার', hi: 'नगर पालिका / उप-पंजीयक' },
        is_mandatory: true
      }
    ]
  }
];