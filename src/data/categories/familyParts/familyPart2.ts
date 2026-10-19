import type { CivilSubCategory } from '../../../types/legal';

export const familyPart2: CivilSubCategory[] = [
  {
    id: 'sub-family-26',
    productCategory: 'lawyer-only',
    title: {
      en: 'Parental Alienation Syndrome (PAS) & Custody Modification',
      bn: 'সন্তানের মগজধোলাই ও কাস্টডি সংশোধন মামলা (GWA 1890)',
      hi: 'बच्चे का ब्रेनवॉश (पेरेंटल एलियनेशन) एवं कस्टडी में बदलाव'
    },
    relevant_act: 'Sec 7, 10 & 25, Guardians and Wards Act, 1890',
    summary: {
      en: 'Modifying child custody orders when the custodial parent systematically alienates the child and destroys emotional bonding with the other parent.',
      bn: 'হেফাজতে থাকা পিতা বা মাতা সন্তানকে অন্য পক্ষের বিরুদ্ধে বিষিয়ে তুললে এবং দেখা করতে না দিলে হেফাজত পরিবর্তনের আবেদন।',
      hi: 'दूसरे अभिभावक के खिलाफ बच्चे को भड़काने और मिलने न देने पर अदालत से कस्टडी में बदलाव का आदेश कराना।'
    },
    authority_forum: {
      en: 'Family Court / District Judge Court',
      bn: 'পারিবারিক আদালত / জেলা জজ আদালত',
      hi: 'पारिवारिक न्यायालय / जिला जज न्यायालय'
    },
    forum_type: 'Family_Court',
    is_complex: true,
    official_portal_url: 'https://ecourts.gov.in/',
    statutory_timeframe: {
      en: '3 to 6 months',
      bn: '৩ থেকে ৬ মাস',
      hi: '3 से 6 माह'
    },
    search_keywords: {
      en: ['parental alienation syndrome custody', 'custody modification pas', 'child brainwashing custody change'],
      bn: ['সন্তানের মগজধোলাই হেফাজত', 'কাস্টডি বদল মামলা', 'অভিভাবকত্ব পরিবর্তন'],
      hi: ['पेरेंटल एलियनेशन कस्टडी', 'कस्टडी संशोधन याचिका', 'बच्चे का ब्रेनवॉश']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Document repeated violations of visitation orders, recorded phone calls, and missed weekend access.',
        'File an application under Section 25 GWA for modification of custody, alleging Parental Alienation.',
        'Move for independent psychiatric evaluation of the child by a specialized clinical child psychologist.',
        'Court alters custody or grants exclusive overnight visitation to restore natural emotional bonding.'
      ],
      bn: [
        'সাক্ষাতের আদেশ লঙ্ঘন, ফোন কল রেকর্ড এবং বাচ্চার সাথে দেখা করতে না দেওয়ার তারিখভিত্তিক প্রমাণ সংগ্রহ করুন।',
        'মগজধোলাইয়ের অভিযোগ এনে ধারা ২৫ অনুযায়ী হেফাজত আদেশের সংশোধনের আবেদন পারিবারিক আদালতে দাখিল করুন।',
        'বিশেষজ্ঞ শিশু মনোবিজ্ঞানী দিয়ে সন্তানের নিরপেক্ষ মানসিক স্বাস্থ্য পরীক্ষার আবেদন পেশ করুন।',
        'আদালত হেফাজতের শর্ত পরিবর্তন করে অপর পক্ষকে রাত্রিকালীন সাক্ষাৎ ও বিকল্প হেফাজতের নির্দেশ দেবে।'
      ],
      hi: [
        'मुलाकात के अदालती आदेशों के उल्लंघन, कॉल रिकॉर्डिंग एवं बच्चों से न मिलने देने के सबूत जुटाएं।',
        'अभिभावक एवं प्रतिपाल्य अधिनियम की धारा 25 के तहत कस्टडी में बदलाव की याचिका दाखिल करें।',
        'विशेषज्ञ बाल मनोवैज्ञानिक से बच्चे के मानसिक स्वास्थ्य एवं ब्रेनवॉश की स्वतंत्र जांच कराएं।',
        'अदालत कस्टडी में फेरबदल कर अथवा रात्रि ठहराव वाली नियमित विजिटेशन देकर भावनात्मक रिश्ता बहाल करेगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-26-1',
        name: { en: 'Clinical Child Psychologist Evaluation Report', bn: 'শিশু মনোবিজ্ঞানীর ক্লিনিক্যাল রিপোর্ট', hi: 'बाल मनोवैज्ञानिक की आधिकारिक रिपोर्ट' },
        issuing_authority: { en: 'Government Medical College / Certified Psychologist', bn: 'মেডিকেল কলেজ / মনোবিদ', hi: 'मेडिकल कॉलेज / अधिकृत मनोवैज्ञानिक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-27',
    productCategory: 'lawyer-only',
    title: {
      en: 'Setting Aside Ex-Parte Divorce Decrees',
      bn: 'একতরফা বিবাহবিচ্ছেদের ডিক্রি বাতিল মামলা (Order IX Rule 13)',
      hi: 'एकतरफा तलाक डिक्री को रद्द कराना (आदेश 9 नियम 13)'
    },
    relevant_act: 'Order IX Rule 13, Code of Civil Procedure, 1908',
    summary: {
      en: 'Invalidating secret ex-parte divorce decrees obtained by fraudulent summons service at fabricated addresses.',
      bn: 'ভুল ঠিকানায় সমন পাঠিয়ে গোপনে নেওয়া একতরফা বিবাহবিচ্ছেদের ডিক্রি দেওয়ানি আদালতে চ্যালেঞ্জ ও বাতিল।',
      hi: 'गलत पते पर समन भिजवाकर धोखे से प्राप्त एकतरफा तलाक डिक्री को अदालत से निरस्त कराना।'
    },
    authority_forum: {
      en: 'Family Court / Additional District Judge',
      bn: 'পারিবারিক আদালত / অতিরিক্ত জেলা জজ',
      hi: 'पारिवारिक न्यायालय / अतिरिक्त जिला जज'
    },
    forum_type: 'Family_Court',
    is_complex: true,
    official_portal_url: 'https://ecourts.gov.in/',
    statutory_timeframe: {
      en: 'Within 30 days of knowledge of decree',
      bn: 'ডিক্রির খবর জানার ৩০ দিনের মধ্যে',
      hi: 'डिक्री की जानकारी के 30 दिन के भीतर'
    },
    search_keywords: {
      en: ['set aside ex parte divorce', 'order 9 rule 13 hma', 'fraudulent summons divorce cancelled'],
      bn: ['একতরফা ডিভোর্স বাতিল', 'অর্ডার ৯ রুল ১৩ সিপিসি', 'গোপনে বিবাহবিচ্ছেদ খারিজ'],
      hi: ['एकतरफा तलाक रद्द', 'आदेश 9 नियम 13 सीपीसी', 'धोखे से तलाक निरस्तीकरण']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain certified copy of the ex-parte divorce judgment and process server summons return report.',
        'Prove that summons was sent to a bogus address where the applicant never resided.',
        'File petition under Order IX Rule 13 CPC within 30 days of discovering the fraudulent decree.',
        'Family Court sets aside the ex-parte divorce decree and restores the matrimonial suit for fresh trial.'
      ],
      bn: [
        'একতরফা বিবাহবিচ্ছেদের রায়ের সার্টিফাইড কপি ও প্রসেস সার্ভারের ভুয়ো নোটিশ রিপোর্ট আদালত থেকে তুলুন।',
        'ভোটার কার্ড ও বিদ্যুৎ বিল দিয়ে প্রমাণ করুন যে সমন পাঠানোর ঠিকানায় আবেদনকারী কখনোই থাকতেন না।',
        'ডিক্রির কথা জানার ৩০ দিনের মধ্যে অর্ডার ৯ রুল ১৩ সিপিসি অনুযায়ী ডিক্রি বাতিলের আবেদন করুন।',
        'পারিবারিক আদালত একতরফা ডিভোর্স বাতিল করে মূল মামলায় নতুন করে শুনানির নির্দেশ দেবে।'
      ],
      hi: [
        'एकतरफा तलाक आदेश की प्रमाणित प्रतिलिपि एवं समन तामिला की फर्जी रिपोर्ट अदालत से निकालें।',
        'वोटर कार्ड व पते के साक्ष्यों से सिद्ध करें कि समन वाले पते पर आप कभी नहीं रहते थे।',
        'डिक्री की जानकारी होने के 30 दिनों के भीतर आदेश 9 नियम 13 सीपीसी में निरस्तीकरण याचिका दें।',
        'पारिवारिक न्यायालय एकतरफा तलाक रद्द कर मुख्य मुकदमे को नए सिरे से सुनवाई हेतु बहाल करेगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-27-1',
        name: { en: 'Certified Copy of Ex-Parte Decree & Proof of Actual Residence', bn: 'একতরফা ডিক্রির সার্টিফাইড কপি ও প্রকৃত ঠিকানার প্রমাণ', hi: 'एकतरफा डिक्री की प्रमाणित प्रति एवं वास्तविक पते का प्रमाण' },
        issuing_authority: { en: 'Family Court / Municipality', bn: 'পারিবারিক আদালত / পুরসভা', hi: 'पारिवारिक न्यायालय / नगर पालिका' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-28',
    productCategory: 'lawyer-only',
    title: {
      en: 'Enhancement or Reduction of Monthly Maintenance',
      bn: 'খোরপোশের অঙ্ক বৃদ্ধি বা হ্রাসের আবেদন (Sec 144(5) BNSS)',
      hi: 'गुजारा भत्ता में वृद्धि अथवा कमी हेतु आवेदन (धारा 144(5) BNSS)'
    },
    relevant_act: 'Sec 144(5), Bharatiya Nagarik Suraksha Sanhita, 2023',
    summary: {
      en: 'Modifying judicial maintenance orders due to cost of living inflation, child educational advancement, or payer job loss.',
      bn: 'মূল্যবৃদ্ধি, সন্তানের পড়াশোনার খরচ বৃদ্ধি বা স্বামীর চাকরি চলে যাওয়ার ভিত্তিতে খোরপোশের অঙ্ক সংশোধন।',
      hi: 'महंगाई, बच्चों की बढ़ती फीस अथवा पति की नौकरी छूटने के आधार पर मासिक गुजारे में संशोधन कराना।'
    },
    authority_forum: {
      en: 'Family Court / Judicial Magistrate Court',
      bn: 'পারিবারিক আদালত / জুডিশিয়াল ম্যাজিস্ট্রেট আদালত',
      hi: 'पारिवारिक न्यायालय / न्यायिक दंडाधिकारी न्यायालय'
    },
    forum_type: 'Family_Court',
    is_complex: false,
    official_portal_url: 'https://ecourts.gov.in/',
    statutory_timeframe: {
      en: '60 to 90 working days',
      bn: '৬০ থেকে ৯০ কার্যদিবস',
      hi: '60 से 90 कार्यदिवस'
    },
    search_keywords: {
      en: ['alteration of maintenance', 'section 144 5 bnss increase', 'enhance child maintenance'],
      bn: ['খোরপোশ বৃদ্ধি মামলা', 'ধারা ১৪৪(৫) বিএনএসএস', 'খোরপোশ কমানোর আবেদন'],
      hi: ['गुजारा भत्ता वृद्धि वाद', 'धारा 144(5) बीएनएसएस', 'भरण पोषण संशोधन']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Collect evidence of changed circumstances: child admission fees, medical receipts, or termination letters.',
        'File petition for alteration of maintenance under Section 144(5) BNSS before the Family Court.',
        'Submit updated Affidavit of Assets & Liabilities highlighting current living expenses and income disparity.',
        'Magistrate recalculates subsistence needs and passes revised monthly maintenance order.'
      ],
      bn: [
        'পরিস্থিতি পরিবর্তনের প্রমাণ জোগাড় করুন: স্কুলের ফি বৃদ্ধির রসিদ, চিকিৎসার বিল বা চাকরি হারানোর বরখাস্তপত্র।',
        'পারিবারিক আদালতে ধারা ১৪৪(৫) বিএনএসএস অনুযায়ী খোরপোশ পরিবর্তনের দরখাস্ত দাখিল করুন।',
        'বর্তমান আয়-ব্যয়ের অসামঞ্জস্য দেখিয়ে সুপ্রিম কোর্টের ফরম্যাটে সংশোধিত সম্পত্তির হলফনামা দিন।',
        'ম্যাজিস্ট্রেট দৈনন্দিন খরচের পুনর্মূল্যায়ন করে বর্ধিত বা পরিমার্জিত মাসিক খোরপোশের আদেশ দেবেন।'
      ],
      hi: [
        'परिस्थितियों में बदलाव के साक्ष्य जुटाएं: स्कूल फीस रसीदें, मेडिकल बिल अथवा नौकरी समाप्ति पत्र।',
        'पारिवारिक न्यायालय में धारा 144(5) बीएनएसएस के तहत भरण-पोषण संशोधन की याचिका दें।',
        'सुप्रीम कोर्ट के प्रारूप में वर्तमान आय एवं खर्चों का अद्यतन शपथ पत्र प्रस्तुत करें।',
        'मजिस्ट्रेट जीवन-यापन की आवश्यकताओं का पुनर्निर्धारण कर संशोधित मासिक गुजारे का आदेश देंगे।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-28-1',
        name: { en: 'Original Maintenance Order & Fee/Medical Escalation Slips', bn: 'মূল খোরপোশ আদেশ ও বর্ধিত খরচের রসিদ', hi: 'पूर्व भरण-पोषण आदेश एवं बढ़े हुए खर्चों के बिल' },
        issuing_authority: { en: 'Family Court / Educational Institution', bn: 'আদালত / শিক্ষা প্রতিষ্ঠান', hi: 'न्यायालय / विद्यालय' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-29',
    productCategory: 'lawyer-only',
    title: {
      en: 'Lifelong Maintenance for Disabled Adult Offspring',
      bn: 'প্রতিবন্ধী প্রাপ্তবয়স্ক সন্তানের আজীবন খোরপোশ (Sec 144(1)(c) BNSS)',
      hi: 'दिव्यांग वयस्क संतान हेतु आजीवन भरण-पोषण अधिकार'
    },
    relevant_act: 'Sec 144(1)(c), Bharatiya Nagarik Suraksha Sanhita, 2023',
    summary: {
      en: 'Compelling parents to provide lifelong medical and sustenance support for major children suffering from permanent physical or mental disability.',
      bn: '১৮ বছর পার হলেও শারীরিক বা মানসিক প্রতিবন্ধী সন্তানের আজীবন বেঁচে থাকার খরচ ও চিকিৎসা ব্যয় প্রদানে পিতাকে বাধ্য করা।',
      hi: 'शारीरिक या मानसिक रूप से असमर्थ वयस्क संतानों के आजीवन भरण-पोषण एवं इलाज खर्च का वैधानिक अधिकार।'
    },
    authority_forum: {
      en: 'Family Court / Judicial Magistrate Court',
      bn: 'পারিবারিক আদালত / জুডিশিয়াল ম্যাজিস্ট্রেট আদালত',
      hi: 'पारिवारिक न्यायालय / न्यायिक दंडाधिकारी न्यायालय'
    },
    forum_type: 'Family_Court',
    is_complex: false,
    official_portal_url: 'https://ecourts.gov.in/',
    statutory_timeframe: {
      en: 'Interim order in 60 days',
      bn: '৬০ দিনের মধ্যে অন্তর্বর্তী আদেশ',
      hi: '60 दिन में अंतरिम आदेश'
    },
    search_keywords: {
      en: ['maintenance disabled adult child', 'section 144 1 c bnss', 'lifelong support handicapped child'],
      bn: ['প্রতিবন্ধী সন্তানের খোরপোশ', 'আজীবন ভরণপোষণ ধারা ১৪৪', 'অক্ষম সন্তানের দায়িত্ব'],
      hi: ['दिव्यांग वयस्क गुजारा भत्ता', 'धारा 144(1)(c) बीएनएसएस', 'आजीवन भरण पोषण']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Secure government disability certificate (UDID) confirming permanent physical or mental infirmity.',
        'File maintenance petition under Section 144(1)(c) BNSS establishing inability to earn an independent living.',
        'Formulate itemized schedule of lifelong monthly therapy, caregiver, and special medical expenses.',
        'Court decrees lifelong monthly allowance and directs creation of a fixed deposit corpus for the child.'
      ],
      bn: [
        'সরকারি মেডিকেল বোর্ড থেকে স্থায়ী শারীরিক বা মানসিক প্রতিবন্ধকতার শংসাপত্র (UDID) সংগ্রহ করুন।',
        'স্বাবলম্বী না হতে পারার প্রমাণসহ ধারা ১৪৪(১)(গ) বিএনএসএস অনুযায়ী খোরপোশ মামলা দায়ের করুন।',
        'মাসিক থেরাপি, ওষুধ ও পরিচর্যাকারীর খরচের একটি বিস্তারিত আর্থিক বাজেট আদালতে পেশ করুন।',
        'আদালত আজীবন মাসিক খরচ ও সন্তানের সুরক্ষায় ব্যাংকে স্থায়ী আমানত তৈরির নির্দেশ দেবে।'
      ],
      hi: [
        'सरकारी चिकित्सा बोर्ड से जारी स्थायी दिव्यांगता प्रमाणपत्र (UDID कार्ड) प्रस्तुत करें।',
        'स्वयं कमाने में असमर्थ होने के आधार पर धारा 144(1)(c) बीएनएसएस में भरण-पोषण वाद करें।',
        'आजीवन चलने वाले इलाज, दवाइयों एवं देखभाल खर्च का विस्तृत मासिक बजट संलग्न करें।',
        'अदालत आजीवन मासिक गुजारा भत्ता तय कर बच्चे के नाम फिक्स डिपॉजिट जमा का आदेश देगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-29-1',
        name: { en: 'Unique Disability ID (UDID) / Govt Medical Board Certificate', bn: 'ইউডিআইডি (UDID) কার্ড বা সরকারি মেডিকেল বোর্ড সার্টিফিকেট', hi: 'यूडीआईडी (UDID) कार्ड / मेडिकल बोर्ड दिव्यांगता प्रमाणपत्र' },
        issuing_authority: { en: 'Department of Empowerment of Persons with Disabilities', bn: 'স্বাস্থ্য ও পরিবার কল্যাণ দপ্তর', hi: 'दिव्यांगजन सशक्तिकरण विभाग' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-30',
    productCategory: 'free-checklist',
    title: {
      en: 'Declaration of Presumption of Death for Missing Spouse',
      bn: 'নিখোঁজ স্বামী বা স্ত্রীর মৃত ঘোষণা ও পুনর্বিবাহের অধিকার',
      hi: 'लापता पति/पत्नी की मृत्यु की कानूनी घोषणा (धारा 111 BSA)'
    },
    relevant_act: 'Sec 111, Bharatiya Sakshya Adhiniyam, 2023 r/w Sec 108 Evidence Act',
    summary: {
      en: 'Securing judicial declaration of death when a spouse is untraced for 7+ years, enabling valid remarriage and release of family pensions.',
      bn: 'টানা ৭ বছর স্বামী বা স্ত্রীর কোনো খোঁজ না থাকলে আদালতে নিখোঁজ ব্যক্তির মৃত ঘোষণার ডিক্রি ও পেনশন দাবি।',
      hi: '7 वर्षों से अधिक समय से लापता जीवनसाथी की कानूनी मृत्यु घोषणा, पुनर्विवाह एवं पेंशन अधिकार।'
    },
    authority_forum: {
      en: 'Civil Court (Senior Division)',
      bn: 'দেওয়ানি আদালত (সিনিয়র ডিভিশন)',
      hi: 'सिविल न्यायालय (सीनियर डिवीजन)'
    },
    forum_type: 'Civil_Court',
    is_complex: false,
    official_portal_url: 'https://ecourts.gov.in/',
    statutory_timeframe: {
      en: '6 months to 1 year',
      bn: '৬ মাস থেকে ১ বছর',
      hi: '6 माह से 1 वर्ष'
    },
    search_keywords: {
      en: ['presumption of death 7 years', 'section 111 bsa missing spouse', 'declare missing husband dead'],
      bn: ['৭ বছর নিখোঁজ মৃত ঘোষণা', 'ধারা ১১১ সাক্ষ্য আইন', 'নিখোঁজ স্বামীর পেনশন'],
      hi: ['7 साल लापता मृत्यु घोषणा', 'धारा 111 बीएसए', 'लापता पति कानूनी मृत्यु']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Produce original police General Diary (GD) and missing complaint filed at least 7 years prior.',
        'Publish statutory public notice in widely circulated local newspapers calling for information.',
        'File Declaratory Suit under Section 34 Specific Relief Act invoking Section 111 BSA.',
        'Civil Judge issues decree declaring legal presumption of death, enabling pension settlement and remarriage.'
      ],
      bn: [
        'কমপক্ষে ৭ বছর আগে থানায় করা নিখোঁজ ডায়েরি (GD) এবং পুলিশের তদন্ত রিপোর্ট সংগ্রহ করুন।',
        'স্থানীয় বহুল প্রচারিত বাংলা ও ইংরেজি সংবাদপত্রে বিধিবদ্ধ গণবিজ্ঞপ্তি প্রকাশ করুন।',
        'ভারতীয় সাক্ষ্য আইনের ধারা ১১১ উল্লেখ করে দেওয়ানি আদালতে মৃত ঘোষণার স্বত্ব মামলা করুন।',
        'আদালত আইনসম্মত মৃত ঘোষণা ডিক্রি মঞ্জুর করবে যার ভিত্তিতে পেনশন ও বৈধ পুনর্বিবাহ সম্ভব হবে।'
      ],
      hi: [
        'कम से कम 7 वर्ष पूर्व थाने में दर्ज कराई गई गुमशुदगी रिपोर्ट (GD) की प्रमाणित प्रति प्रस्तुत करें।',
        'स्थानीय प्रमुख समाचार पत्रों में सार्वजनिक सूचना प्रकाशित कराकर कोई खबर न होने की पुष्टि करें।',
        'बीएसए 2023 की धारा 111 के तहत दीवानी अदालत में मृत्यु की घोषणा का वाद दाखिल करें।',
        'सिविल जज कानूनी मृत्यु की डिक्री जारी करेंगे, जिससे पारिवारिक पेंशन एवं पुनर्विवाह का मार्ग खुलेगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-30-1',
        name: { en: 'Police Untraced Final Investigation Report & 7-Year-Old GD', bn: 'পুলিশের ৭ বছরের পুরনো জিডি ও চূড়ান্ত তদন্ত রিপোর্ট', hi: 'पुलिस की 7 वर्ष पुरानी गुमशुदगी जीडी व अंतिम जांच रिपोर्ट' },
        issuing_authority: { en: 'Local Police Station / ACP Office', bn: 'স্থানীয় থানা / পুলিশ কমিশনারেট', hi: 'स्थानीय थाना' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-31',
    productCategory: 'lawyer-only',
    title: {
      en: 'Parsi Matrimonial Dissolution & Alimony',
      bn: 'পারসি বিবাহবিচ্ছেদ ও বিশেষ পারসি আদালত প্রক্রিয়া',
      hi: 'पारसी विवाह विच्छेद (तलाक) एवं विशेष पारसी अदालत प्रक्रिया'
    },
    relevant_act: 'Sec 30, 31 & 32, Parsi Marriage and Divorce Act, 1936',
    summary: {
      en: 'Adjudicating Parsi matrimonial dissolution and permanent alimony before the High Court sitting as the Special Parsi Matrimonial Court with delegates.',
      bn: 'কলকাতা হাইকোর্টের বিশেষ পারসি বৈবাহিক আদালতে পারসি সম্প্রদায়ের প্রতিনিধিদের উপস্থিতিতে বিবাহবিচ্ছেদ ও খোরপোশ।',
      hi: 'कलकत्ता हाईकोर्ट की विशेष पारसी वैवाहिक अदालत द्वारा प्रतिनिधियों की सहायता से तलाक एवं गुजारा भत्ता।'
    },
    authority_forum: {
      en: 'Special Parsi Matrimonial Court (High Court at Calcutta)',
      bn: 'বিশেষ পারসি বৈবাহিক আদালত (কলকাতা হাইকোর্ট)',
      hi: 'विशेष पारसी वैवाहिक न्यायालय (कलकत्ता उच्च न्यायालय)'
    },
    forum_type: 'High_Court',
    is_complex: true,
    official_portal_url: 'https://calcuttahighcourt.gov.in/',
    statutory_timeframe: {
      en: '6 months to 1.5 years',
      bn: '৬ মাস থেকে ১.৫ বছর',
      hi: '6 माह से 1.5 वर्ष'
    },
    search_keywords: {
      en: ['parsi divorce calcutta high court', 'parsi marriage act section 32', 'special parsi matrimonial court delegates'],
      bn: ['পারসি ডিভোর্স হাইকোর্ট', 'পারসি বিবাহবিচ্ছেদ আইন', 'পারসি খোরপোশ'],
      hi: ['पारसी तलाक हाईकोर्ट', 'पारसी विवाह कानून', 'विशेष पारसी अदालत']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Secure Parsi Marriage Certificate registered under Section 6 of the 1936 Act.',
        'File divorce plaint before the Special Parsi Matrimonial Court at High Court at Calcutta.',
        'High Court summons five registered Parsi delegates from the community roster to sit with judge.',
        'Delegates adjudicate facts of desertion or cruelty; presiding judge enters dissolution decree and alimony.'
      ],
      bn: [
        '১৯৩৬ সালের পারসি বিবাহ আইনের ধারা ৬ অনুযায়ী নিবন্ধিত ম্যারেজ সার্টিফিকেট সংগ্রহ করুন।',
        'কলকাতা হাইকোর্টের স্পেশাল পারসি ম্যাট্রিমোনিয়াল কোর্টে বিবাহবিচ্ছেদের আরজি দাখিল করুন।',
        'হাইকোর্ট পারসি সম্প্রদায় তালিকা থেকে পাঁচজন মনোনীত প্রতিনিধিকে শুনানিতে বিচারকের সাথে বসাবে।',
        'প্রতিনিধিদের সিদ্ধান্তের ভিত্তিতে হাইকোর্ট বিচারক বিবাহবিচ্ছেদের ডিক্রি ও স্থায়ী খোরপোশ মঞ্জুর করবেন।'
      ],
      hi: [
        '1936 कानून की धारा 6 के तहत पंजीकृत पारसी विवाह प्रमाणपत्र प्रस्तुत करें।',
        'कलकत्ता हाईकोर्ट की विशेष पारसी वैवाहिक अदालत के समक्ष तलाक वाद दाखिल करें।',
        'उच्च न्यायालय पारसी समुदाय के 5 अधिकृत प्रतिनिधियों (डेलीगेट्स) को सुनवाई में शामिल करेगा।',
        'प्रतिनिधियों के फैसले के आधार पर न्यायाधीश विवाह विच्छेद की अंतिम डिक्री एवं गुजारा भत्ता देंगे।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-31-1',
        name: { en: 'Parsi Marriage Certificate & Anjuman Registration Extract', bn: 'পারসি বিবাহ শংসাপত্র ও আঞ্জুমান রেজিস্ট্রি কপি', hi: 'पारसी विवाह प्रमाणपत्र एवं अंजुमन रिकॉर्ड प्रति' },
        issuing_authority: { en: 'Registrar of Parsi Marriages / Anjuman', bn: 'পারসি বিবাহ নিবন্ধক', hi: 'पारसी विवाह पंजीयक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-32',
    productCategory: 'lawyer-only',
    title: {
      en: 'Christian Matrimonial Dissolution & Alimony (Divorce Act)',
      bn: 'খ্রিস্টান বিবাহবিচ্ছেদ ও খোরপোশ মামলা (Divorce Act, 1869)',
      hi: 'ईसाई विवाह विच्छेद (तलाक) एवं भरण-पोषण (तलाक अधिनियम, 1869)'
    },
    relevant_act: 'Sec 10 & 10A, Indian Divorce Act, 1869',
    summary: {
      en: 'Contested or mutual consent dissolution of Christian marriages, child custody, and permanent alimony before the District Judge.',
      bn: 'খ্রিস্টান বিবাহবিচ্ছেদ: পারস্পরিক সম্মতিতে (১০এ) অথবা নিষ্ঠুরতা ও ব্যভিচারের অভিযোগে দেওয়ানি জেলা আদালতে মামলা।',
      hi: 'ईसाई दंपतियों का आपसी सहमति (10A) अथवा क्रूरता व परित्याग के आधार पर जिला जज के समक्ष तलाक वाद।'
    },
    authority_forum: {
      en: 'District Judge Court (Matrimonial Bench)',
      bn: 'জেলা জজ আদালত (বৈবাহিক বেঞ্চ)',
      hi: 'जिला जज न्यायालय (वैवाहिक शाखा)'
    },
    forum_type: 'Civil_Court',
    is_complex: true,
    official_portal_url: 'https://ecourts.gov.in/',
    statutory_timeframe: {
      en: '6 months (Mutual) / 1 to 2 years (Contested)',
      bn: '৬ মাস (আপসে) / ১ থেকে ২ বছর (একতরফা)',
      hi: '6 माह (आपसी) / 1 से 2 वर्ष (विवादित)'
    },
    search_keywords: {
      en: ['christian divorce section 10a', 'indian divorce act 1869', 'christian alimony district judge'],
      bn: ['খ্রিস্টান ডিভোর্স মামলা', 'ইন্ডিয়ান ডিভোর্স অ্যাক্ট ১০এ', 'খ্রিস্টান খোরপোশ'],
      hi: ['ईसाई तलाक धारा 10A', 'ईसाई विवाह विच्छेद', 'भारतीय तलाक कानून 1869']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Produce Church Marriage Certificate and proof of 2 years continuous separate living for Section 10A.',
        'File petition for dissolution before District Judge; for contested cases under Section 10, prove cruelty.',
        'Court conducts mandatory counseling sessions exploring reconciliation.',
        'District Judge enters final decree of dissolution and determines monthly or lump-sum alimony.'
      ],
      bn: [
        'চার্চের ম্যারেজ সার্টিফিকেট এবং ধারা ১০এ-র জন্য টানা ২ বছর আলাদা বসবাসের প্রমাণ সংগ্রহ করুন।',
        'জেলা জজ আদালতে বিবাহবিচ্ছেদের পিটিশন দাখিল করুন; একতরফা হলে নিষ্ঠুরতার প্রমাণ দিন।',
        'আদালত পক্ষদের সমঝোতার জন্য বাধ্যতামূলক মধ্যস্থতা ও কাউন্সেলিং বৈঠক করাবে।',
        'জেলা জজ বিবাহবিচ্ছেদের ডিক্রি মঞ্জুর করে আজীবন মাসিক বা এককালীন খোরপোশ নির্ধারণ করবেন।'
      ],
      hi: [
        'चर्च विवाह प्रमाणपत्र एवं धारा 10A के लिए लगातार 2 वर्ष अलग रहने के साक्ष्य जुटाएं।',
        'जिला जज के समक्ष तलाक याचिका दें; विवादित मामले में धारा 10 में क्रूरता सिद्ध करें।',
        'अदालत सुलह कराने हेतु अनिवार्य काउंसलिंग एवं मध्यस्थता बैठक आयोजित कराएगी।',
        'जिला जज तलाक की अंतिम डिक्री पारित करेंगे एवं स्थायी भरण-पोषण तय करेंगे।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-32-1',
        name: { en: 'Church Marriage Register Extract & 2-Year Separation Proof', bn: 'চার্চের বিবাহ রেজিস্ট্রি সনদ ও ২ বছর আলাদা থাকার প্রমাণ', hi: 'चर्च विवाह प्रमाणपत्र एवं 2 वर्ष पृथक निवास साक्ष्य' },
        issuing_authority: { en: 'Parish Church Authority / Notary', bn: 'চার্চ কর্তৃপক্ষ / নোটারি', hi: 'चर्च प्रशासन / नोटरी' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-33',
    productCategory: 'free-checklist',
    title: {
      en: 'Muslim Dissolution of Marriage (Khula, Faskh & Mubarat)',
      bn: 'মুসলিম বিবাহবিচ্ছেদ (খোলা, ফাসখ ও মুবারাত) এবং দেনমোহর রক্ষা',
      hi: 'मुस्लिम विवाह विघटन (खुला, फस्ख एवं मुबारत) एवं मेहर संरक्षण'
    },
    relevant_act: 'Dissolution of Muslim Marriages Act, 1939 r/w Shayara Bano SC',
    summary: {
      en: 'Judicial dissolution initiated by Muslim women for husband cruelty, impotence, or abandonment, and consensual Khula without forfeiture of legitimate dower.',
      bn: 'স্বামীর অবহেলা, নিষ্ঠুরতা বা নিখোঁজ থাকার কারণে মুসলিম স্ত্রীর ফাসখ মামলা এবং সম্মতিক্রমে খোলা রফা।',
      hi: 'मुस्लिम महिला द्वारा पति के उत्पीड़न या परित्याग पर अदालत से निकाह रद्द (फस्ख) कराना अथवा खुला समझौता।'
    },
    authority_forum: {
      en: 'Family Court / Civil Court',
      bn: 'পারিবারিক আদালত / দেওয়ানি আদালত',
      hi: 'पारिवारिक न्यायालय / सिविल न्यायालय'
    },
    forum_type: 'Family_Court',
    is_complex: false,
    official_portal_url: 'https://ecourts.gov.in/',
    statutory_timeframe: {
      en: '6 months to 1 year',
      bn: '৬ মাস থেকে ১ বছর',
      hi: '6 माह से 1 वर्ष'
    },
    search_keywords: {
      en: ['khula procedure west bengal', 'dissolution of muslim marriages act 1939', 'faskh divorce family court'],
      bn: ['খোলা ডিভোর্স নিয়ম', 'ফাসখ নিকাহ বাতিল', 'মুসলিম বিবাহবিচ্ছেদ আইন ১৯৩৯'],
      hi: ['खुला प्रक्रिया बंगाल', 'फस्ख निकाह विघटन', 'मुस्लिम विवाह विघटन कानून']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Serve formal communication expressing terms of Khula or reasons for seeking dissolution.',
        'File suit under Section 2 of the 1939 Act before Family Court on grounds of cruelty or 2-year non-maintenance.',
        'Family Court examines witnesses and assesses genuine irreparable breakdown of marital tie.',
        'Judge passes dissolution decree confirming divorce and protecting woman rights to prompt Mahr.'
      ],
      bn: [
        'খোলা বা বিবাহ অবসানের কারণ উল্লেখ করে আইনজীবীর মাধ্যমে আনুষ্ঠানিক নোটিশ পাঠান।',
        'টানা ২ বছর ভরণপোষণ না দেওয়া বা নিষ্ঠুরতার কারণ দেখিয়ে পারিবারিক আদালতে ধারা ২ অনুযায়ী মামলা করুন।',
        'পারিবারিক আদালত সাক্ষ্যগ্রহণ করে দাম্পত্য সম্পর্ক পুনরুজ্জীবনের সম্ভাবনাহীনতা খতিয়ে দেখবে।',
        'বিচারক বিবাহবিচ্ছেদের ডিক্রি মঞ্জুর করবেন এবং স্ত্রীর প্রাপ্য দেনমোহর ও স্ত্রীধন পরিশোধের আদেশ দেবেন।'
      ],
      hi: [
        'खुला की शर्तों अथवा निकाह समाप्त करने के कारणों का औपचारिक कानूनी नोटिस भेजें।',
        'लगातार 2 वर्ष से भरण-पोषण न मिलने या क्रूरता के आधार पर 1939 कानून की धारा 2 में वाद करें।',
        'पारिवारिक न्यायालय गवाहों के बयान दर्ज कर रिश्ते में सुधार की असंभवता का आकलन करेगा।',
        'अदालत निकाह विघटन की डिक्री जारी कर महिला के मेहर एवं सामान के अधिकार को सुरक्षित करेगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-33-1',
        name: { en: 'Certified Nikahnama & Written Notice of Khula / Non-Maintenance', bn: 'মূল নিকাহনামা ও খোলা বা খোরপোশহীনতার নোটিশ কপি', hi: 'प्रमाणित निकाहनामा एवं खुला / भरण-पोषण न मिलने का नोटिस' },
        issuing_authority: { en: 'Registered Kazi / Family Court', bn: 'কাজী অফিস / আদালত', hi: 'काजी कार्यालय / अदालत' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-34',
    productCategory: 'lawyer-only',
    title: {
      en: 'Muslim Custody (Hizanat) & Father Guardianship (Wilayat)',
      bn: 'মুসলিম সন্তানের লালন-পালন (হিজানত) ও পিতার অভিভাবকত্ব',
      hi: 'मुस्लिम बच्चे की अभिरक्षा (हिज़ानत) एवं पिता का अभिभावकत्व (विलायत)'
    },
    relevant_act: 'Guardians and Wards Act, 1890 r/w Principles of Mohammedan Law',
    summary: {
      en: 'Protecting mother statutory right of custody (Hizanat) for young children while regulating father visitation and maintenance duties.',
      bn: 'নাবালক সন্তানের প্রাথমিক বয়সে মায়ের কাছে থাকার অধিকার (হিজানত) এবং বাবার নিয়মিত সাক্ষাতের ভারসাম্য।',
      hi: 'कम उम्र के बच्चों पर मां के अभिरक्षा अधिकार (हिज़ानत) की रक्षा एवं पिता से खर्च व विजिटेशन दिलाना।'
    },
    authority_forum: {
      en: 'Family Court / District Judge Court',
      bn: 'পারিবারিক আদালত / জেলা জজ আদালত',
      hi: 'पारिवारिक न्यायालय / जिला जज न्यायालय'
    },
    forum_type: 'Family_Court',
    is_complex: true,
    official_portal_url: 'https://ecourts.gov.in/',
    statutory_timeframe: {
      en: '3 to 6 months',
      bn: '৩ থেকে ৬ মাস',
      hi: '3 से 6 माह'
    },
    search_keywords: {
      en: ['hizanat custody muslim mother', 'wilayat father guardianship', 'muslim child custody family court'],
      bn: ['হিজানত বাচ্চার হেফাজত', 'মুসলিম সন্তানের কাস্টডি', 'বিলায়েত অভিভাবকত্ব'],
      hi: ['हिज़ानत मां का अधिकार', 'मुस्लिम बच्चा कस्टडी', 'विलायत पिता संरक्षक']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Assert mother customary right of Hizanat (male child up to age 7, female child up to puberty).',
        'If father forcibly removes minor child, file petition under Section 25 GWA before Family Court.',
        'Court prioritizes paramount welfare of child over technical personal law assertions.',
        'Judge awards physical custody to mother, directing father to pay monthly maintenance and granting visitation.'
      ],
      bn: [
        'মায়ের আইনি অধিকার (পুত্রসন্তান ৭ বছর এবং কন্যাসন্তান বয়ঃসন্ধি পর্যন্ত) তুলে ধরে আবেদন করুন।',
        'পিতা জোর করে সন্তানকে ছিনিয়ে নিলে পারিবারিক আদালতে ধারা ২৫ জিডব্লুএ অনুযায়ী মামলা করুন।',
        'আদালত ব্যক্তিগত আইনের বিধির ওপরে শিশুর শিক্ষা ও ভবিষ্যৎ মঙ্গলের দিকটিকে সর্বোচ্চ গুরুত্ব দেবে।',
        'বিচারক মায়ের কাছে সন্তানের শারীরিক হেফাজত বহাল রাখবেন এবং পিতাকে মাসিক খরচ ও সাক্ষাতের সময় দেবেন।'
      ],
      hi: [
        'मां के हिज़ानत अधिकार (लड़के हेतु 7 वर्ष एवं लड़की हेतु यौवन तक) का दावा अदालत में प्रस्तुत करें।',
        'पिता द्वारा जबरन बच्चा छीनने पर धारा 25 जीडब्ल्यूए के तहत पारिवारिक न्यायालय में वाद दें।',
        'अदालत पर्सनल लॉ के तकनीकी नियमों से ऊपर बच्चे के स्वास्थ्य व शिक्षा को प्राथमिकता देगी।',
        'अदालत मां को कस्टडी सौंपेगी और पिता को बच्चे का मासिक खर्च उठाने व मिलने का अधिकार देगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-34-1',
        name: { en: 'Child Birth Certificate & Mother Rearing Care Records', bn: 'সন্তানের জন্ম সনদ ও মায়ের লালন-পালনের প্রমাণ', hi: 'बच्चे का जन्म प्रमाणपत्र एवं मां के पास रहने के साक्ष्य' },
        issuing_authority: { en: 'Municipality / School', bn: 'পুরসভা / স্কুল', hi: 'नगर पालिका / स्कूल' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-35',
    productCategory: 'free-checklist',
    title: {
      en: 'Adoption by Single Male or Female Parents (CARA Norms)',
      bn: 'একক অবিবাহিত পিতা বা মাতার শিশু দত্তক গ্রহণ (CARA নিয়মাবলী)',
      hi: 'अविवाहित एकल महिला अथवा पुरुष द्वारा बच्चा गोद लेना (CARA नियम)'
    },
    relevant_act: 'Juvenile Justice Act, 2015 & Central Adoption Regulations',
    summary: {
      en: 'Clear legal procedures enabling single individuals to adopt, noting single males are statutory barred from adopting female children.',
      bn: 'অবিবাহিত বা একা থাকা ব্যক্তিদের শিশু দত্তক নেওয়ার নিয়ম (একক পুরুষ কন্যাসন্তান দত্তক নিতে পারবেন না)।',
      hi: 'एकल महिलाओं व पुरुषों द्वारा बच्चा गोद लेने की कानूनी प्रक्रिया (पुरुष बालिका को गोद नहीं ले सकते)।'
    },
    authority_forum: {
      en: 'District Magistrate (DM Adoption Bench) / CARA',
      bn: 'জেলাশাসক (DM দত্তক এজলাস) / কারা (CARA)',
      hi: 'जिला मजिस्ट्रेट (दत्तक पीठ) / कारा (CARA)'
    },
    forum_type: 'Competent_Authority',
    is_complex: true,
    official_portal_url: 'https://cara.wcd.gov.in/',
    statutory_timeframe: {
      en: '6 months to 1 year',
      bn: '৬ মাস থেকে ১ বছর',
      hi: '6 माह से 1 वर्ष'
    },
    search_keywords: {
      en: ['single parent adoption cara', 'unmarried male adopt boy', 'single woman adoption india'],
      bn: ['একক দত্তক গ্রহণ', 'অবিবাহিত পিতা দত্তক', 'সিঙ্গেল মাদার অ্যাডপশন'],
      hi: ['एकल माता पिता गोद लेना', 'अविवाहित पुरुष बच्चा गोद', 'कारा सिंगल पैरेंट']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Register on CARA portal (carings.wcd.gov.in) selecting category as Single Prospective Adoptive Parent.',
        'Undergo Home Study Report (HSR) by a Specialized Adoption Agency assessing financial and emotional stability.',
        'Comply with age criteria: single parent must be at least 25 years old; single males can adopt only male children.',
        'District Magistrate issues final non-appealable Adoption Order establishing full parental status.'
      ],
      bn: [
        'কারা (CARA) পোর্টালে সিঙ্গেল প্রসপেক্টিভ অ্যাডপ্টভ প্যারেন্ট ক্যাটাগরি বেছে নাম নথিভুক্ত করুন।',
        'অনুমোদিত দত্তক সংস্থার মাধ্যমে আর্থিক সচ্ছলতা ও পারিবারিক পরিবেশের হোম স্টাডি রিপোর্ট (HSR) তৈরি করান।',
        'বয়সের মাপকাঠি নিশ্চিত করুন: ন্যূনতম বয়স ২৫ বছর; একক পুরুষ কেবল পুত্রসন্তান দত্তক নিতে পারবেন।',
        'জেলাশাসক শুনানি শেষে চূড়ান্ত দত্তক আদেশ জারি করবেন যার ভিত্তিতে সন্তানের নতুন জন্ম সনদ মিলবে।'
      ],
      hi: [
        'कारा पोर्टल पर एकल माता-पिता श्रेणी चुनकर अपना ऑनलाइन पंजीकरण पूरा करें।',
        'अधिकृत एडॉप्शन एजेंसी से अपनी वित्तीय और पारिवारिक स्थिति की होम स्टडी रिपोर्ट (HSR) बनवाएं।',
        'आयु एवं लिंग नियम जांचें: न्यूनतम आयु 25 वर्ष; एकल पुरुष केवल बालक को ही गोद ले सकते हैं।',
        'जिला मजिस्ट्रेट द्वारा औपचारिक गोदनामा आदेश जारी होगा जिससे पूर्ण माता-पिता अधिकार मिलेंगे।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-35-1',
        name: { en: 'Financial Solvency Certificate, ITRs & Police Clearance', bn: 'আর্থিক সচ্ছলতার সনদ, আইটি রিটার্ন ও পুলিশ ক্লিয়ারেন্স', hi: 'वित्तीय सक्षमता प्रमाणपत्र, आईटीआर एवं पुलिस सत्यापन' },
        issuing_authority: { en: 'Employer / Income Tax / Police', bn: 'কর্মস্থল / আয়কর দপ্তর / পুলিশ', hi: 'नियोक्ता / आयकर / पुलिस' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-36',
    productCategory: 'lawyer-only',
    title: {
      en: 'Judicial Separation vs Divorce (Sec 10 HMA)',
      bn: 'জুডিশিয়াল সেপারেশন বনাম বিবাহবিচ্ছেদ (Sec 10 HMA)',
      hi: 'न्यायिक पृथक्करण (Judicial Separation) बनाम तलाक (धारा 10 HMA)'
    },
    relevant_act: 'Sec 10, Hindu Marriage Act, 1955',
    summary: {
      en: 'Legal separation relieving spouses from cohabitation duties without severing matrimonial status, preserving pension and inheritance ties.',
      bn: 'বিয়ে না ভেঙেই আইনসম্মতভাবে আলাদা থাকার অধিকার লাভ; পারিবারিক পেনশন ও সামাজিক মর্যাদা অটুট রাখার বিধান।',
      hi: 'विवाह समाप्त किए बिना कानूनी रूप से अलग रहने का अदालती आदेश, जिससे पेंशन व सामाजिक अधिकार सुरक्षित रहें।'
    },
    authority_forum: {
      en: 'Family Court / Additional District Judge',
      bn: 'পারিবারিক আদালত / অতিরিক্ত জেলা জজ',
      hi: 'पारिवारिक न्यायालय / अतिरिक्त जिला जज'
    },
    forum_type: 'Family_Court',
    is_complex: false,
    official_portal_url: 'https://ecourts.gov.in/',
    statutory_timeframe: {
      en: '6 months to 1 year',
      bn: '৬ মাস থেকে ১ বছর',
      hi: '6 माह से 1 वर्ष'
    },
    search_keywords: {
      en: ['judicial separation section 10', 'separation without divorce', 'legal separation hindu law'],
      bn: ['জুডিশিয়াল সেপারেশন', 'ডিভোর্স ছাড়া আলাদা থাকা', 'ধারা ১০ হিন্দু বিবাহ'],
      hi: ['न्यायिक पृथक्करण', 'बिना तलाक अलग रहना', 'धारा 10 हिंदू विवाह']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'File petition for Judicial Separation under Section 10 HMA on grounds of cruelty, desertion, or adultery.',
        'Attend mandatory court-ordered reconciliation sessions with Family Court counselors.',
        'Upon establishing grounds, court grants Decree of Judicial Separation suspending cohabitation duties.',
        'If cohabitation is not resumed for 1 year post-decree, either spouse can petition for full divorce.'
      ],
      bn: [
        'নিষ্ঠুরতা বা পরিত্যাগের কারণ দেখিয়ে পারিবারিক আদালতে ধারা ১০ অনুযায়ী জুডিশিয়াল সেপারেশনের আবেদন দিন।',
        'পারিবারিক আদালতের কাউন্সেলরের সাথে বাধ্যতামূলক সমঝোতা আলোচনায় অংশ নিন।',
        'কারণ প্রমাণিত হলে আদালত জুডিশিয়াল সেপারেশনের ডিক্রি দেবে, যা একসাথে থাকার বাধ্যবাধকতা প্রত্যাহার করবে।',
        'ডিক্রির পর টানা ১ বছর একসাথে বসবাস শুরু না হলে যেকোনো পক্ষ পূর্ণ বিবাহবিচ্ছেদের মামলা করতে পারে।'
      ],
      hi: [
        'क्रूरता अथवा परित्याग के आधार पर धारा 10 में न्यायिक पृथक्करण की याचिका दाखिल करें।',
        'पारिवारिक न्यायालय के काउंसलर के समक्ष अनिवार्य सुलह बैठक में उपस्थित हों।',
        'आधार सिद्ध होने पर अदालत न्यायिक पृथक्करण की डिक्री देगी, जिससे साथ रहने की बाध्यता समाप्त होगी।',
        'डिक्री के बाद 1 वर्ष तक सहवास न होने पर कोई भी पक्ष पूर्ण तलाक हेतु याचिका दाखिल कर सकता है।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-36-1',
        name: { en: 'Marriage Certificate & Documented Grounds of Separation', bn: 'বিবাহের শংসাপত্র ও আলাদা থাকার কারণের নথিপত্র', hi: 'विवाह प्रमाणपत्र एवं अलग रहने के आधार साक्ष्य' },
        issuing_authority: { en: 'Marriage Registrar / Petitioner', bn: 'বিবাহ নিবন্ধক / আবেদনকারী', hi: 'विवाह पंजीयक / याचिकाकर्ता' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-37',
    productCategory: 'lawyer-only',
    title: {
      en: 'Interim Maintenance for Working Wives with Income Disparity',
      bn: 'চাকরিজীবী স্ত্রীর জন্য পরিপূরক খোরপোশ ও জীবনযাত্রার মান সামঞ্জস্য',
      hi: 'कामकाजी पत्नी हेतु आय असमानता पर पूरक अंतरिम गुजारा भत्ता'
    },
    relevant_act: 'Sec 24 HMA r/w Rajnesh v. Neha (Supreme Court Guidelines)',
    summary: {
      en: 'Securing supplemental maintenance for employed wives when husband enjoys a substantially superior financial income and lifestyle.',
      bn: 'স্ত্রী সামান্য চাকরি করলেও স্বামীর বিপুল আয়ের সাথে সামঞ্জস্য বজায় রেখে সম্মানজনক খোরপোশ আদায়ের সুপ্রিম কোর্ট নীতি।',
      hi: 'पत्नी के कामकाजी होने पर भी यदि पति की आय बहुत अधिक है, तो जीवन स्तर बराबर करने हेतु अंतरिम गुजारा दिलाना।'
    },
    authority_forum: {
      en: 'Family Court (Matrimonial Bench)',
      bn: 'পারিবারিক আদালত (বৈবাহিক বেঞ্চ)',
      hi: 'पारिवारिक न्यायालय (वैवाहिक शाखा)'
    },
    forum_type: 'Family_Court',
    is_complex: false,
    official_portal_url: 'https://ecourts.gov.in/',
    statutory_timeframe: {
      en: 'Disposal within 60 days of service',
      bn: 'নোটিশ জারির ৬০ দিনের মধ্যে নিষ্পত্তি',
      hi: 'समन के 60 दिन के भीतर निस्तारण'
    },
    search_keywords: {
      en: ['working wife maintenance disparity', 'rajnesh v neha working wife', 'supplemental alimony income gap'],
      bn: ['চাকরিজীবী স্ত্রীর খোরপোশ', 'স্বামীর বেশি আয় খোরপোশ', 'রাজনেশ নেহা সমতা'],
      hi: ['कामकाजी पत्नी गुजारा भत्ता', 'आय असमानता भरण पोषण', 'राजनेश बनाम नेहा कामकाजी']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Submit comprehensive salary slip and bank statement demonstrating current personal earning threshold.',
        'File Section 24 HMA petition highlighting husband significantly higher taxable income and corporate perks.',
        'Cite Supreme Court *Rajnesh v. Neha* ruling: mere earning capability or job does not bar maintenance.',
        'Judge orders husband to pay supplemental monthly alimony bridging the lifestyle disparity.'
      ],
      bn: [
        'নিজের স্যালারি স্লিপ ও ব্যাঙ্ক স্টেটমেন্ট জমা দিয়ে প্রতি মাসের বাস্তব আয়ের সীমাবদ্ধতা আদালতে দেখান।',
        'স্বামীর উচ্চ আয়কর রিটার্ন ও বিলাস বহুল জীবনযাত্রার প্রমাণসহ ধারা ২৪ এইচএমএ আবেদন করুন।',
        'সুপ্রিম কোর্টের রাজনেশ বনাম নেহা রায় দেখান: সামান্য রোজগার স্ত্রীর খোরপোশ পাওয়ার আইনি অধিকার কাড়ে না।',
        'বিচারক স্বামীর থেকে মাসিক পরিপূরক অর্থ প্রদানের আদেশ দিয়ে বৈবাহিক জীবনযাত্রার সমতা নিশ্চিত করবেন।'
      ],
      hi: [
        'अपनी सैलरी स्लिप और बैंक स्टेटमेंट जमा कर अदालत में अपनी सीमित आय प्रमाणित करें।',
        'पति के ऊंचे आईटीआर, व्यापार एवं विलासिता पूर्ण जीवन के साक्ष्य सहित धारा 24 में अर्जी दें।',
        'सुप्रीम कोर्ट के राजनेश बनाम नेहा फैसले का हवाला दें: पत्नी का कमाना गुजारा भत्ता रोकने का आधार नहीं है।',
        'न्यायाधीश पति को दोनों के जीवन स्तर का अंतर पाटने हेतु पूरक मासिक भरण-पोषण का आदेश देंगे।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-37-1',
        name: { en: 'Comparative Salary Slips & 3-Year ITR Statements of Spouses', bn: 'উভয় পক্ষের স্যালারি স্লিপ ও ৩ বছরের আইটি রিটার্ন', hi: 'दोनों पक्षों की सैलरी स्लिप एवं 3 वर्ष के आयकर रिटर्न' },
        issuing_authority: { en: 'Employers / Income Tax Department', bn: 'কর্মস্থল / আয়কর দপ্তর', hi: 'नियोक्ता / आयकर विभाग' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-38',
    productCategory: 'free-checklist',
    title: {
      en: 'Permanent Alimony & Gross Sum Capital Settlement',
      bn: 'এককালীন স্থায়ী খোরপোশ ও সম্পত্তির ওপর আইনি চার্জ সৃষ্টি (Sec 25 HMA)',
      hi: 'स्थायी गुजारा भत्ता एवं एकमुश्त पूंजीगत निपटारा (धारा 25 HMA)'
    },
    relevant_act: 'Sec 25, Hindu Marriage Act, 1955',
    summary: {
      en: 'Securing lifetime one-time capital settlement (lump-sum alimony) charged against husband immovable properties upon divorce.',
      bn: 'ডিভোর্সের সময় বারবার মামলার ঝামেলা এড়াতে এককালীন মোটা অঙ্কের স্থায়ী খোরপোশ ও স্বামীর সম্পত্তিতে দায় সৃষ্টি।',
      hi: 'तलाक के समय मासिक विवाद से बचकर एकमुश्त स्थायी गुजारा भत्ता पाना और पति की संपत्ति पर कानूनी अधिकार बनाना।'
    },
    authority_forum: {
      en: 'Family Court / Additional District Judge',
      bn: 'পারিবারিক আদালত / অতিরিক্ত জেলা জজ',
      hi: 'पारिवारिक न्यायालय / अतिरिक्त जिला जज'
    },
    forum_type: 'Family_Court',
    is_complex: true,
    official_portal_url: 'https://ecourts.gov.in/',
    statutory_timeframe: {
      en: 'Decided along with final divorce decree',
      bn: 'বিবাহবিচ্ছেদের চূড়ান্ত রায়ের সাথে নির্ধারিত',
      hi: 'अंतिम तलाक डिक्री के साथ फैसला'
    },
    search_keywords: {
      en: ['permanent alimony section 25', 'lump sum alimony calculation', 'charge on husband property alimony'],
      bn: ['স্থায়ী খোরপোশ ধারা ২৫', 'এককালীন খোরপোশ হিসাব', 'স্বামীর সম্পত্তিতে চার্জ'],
      hi: ['स्थायी गुजारा भत्ता धारा 25', 'एकमुश्त गुजारा भत्ता', 'संपत्ति पर भरण पोषण भार']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Move application under Section 25 HMA at the stage of passing final divorce decree.',
        'Produce verified valuation of husband business holdings, corporate shareholding, and real estate.',
        'Propose lump-sum capital settlement calculated to yield lifetime living interest without defaults.',
        'Court decrees gross capital sum and creates statutory charge over specific husband immovable properties.'
      ],
      bn: [
        'বিবাহবিচ্ছেদের চূড়ান্ত ডিক্রি জারির সময় পারিবারিক আদালতে ধারা ২৫ অনুযায়ী আবেদন দাখিল করুন।',
        'স্বামীর ব্যবসা, শেয়ার মার্কেট বিনিয়োগ ও স্থাবর সম্পত্তির সরকারি মূল্যায়ন আদালতে দাখিল করুন।',
        'প্রতি মাসে টাকা চাওয়ার ঝামেলা এড়াতে আজীবন গ্রাসাচ্ছাদনের এককালীন ক্যাপিটাল সেটেলমেন্টের আর্জি জানান।',
        'আদালত এককালীন টাকা মঞ্জুর করবে এবং স্বামীর নির্দিষ্ট জমির ওপর আইনি চার্জ (লিয়েন) রেজিস্ট্রি করাবে।'
      ],
      hi: [
        'अंतिम तलाक आदेश के समय पारिवारिक न्यायालय में धारा 25 एचएमए के तहत आवेदन प्रस्तुत करें।',
        'पति के व्यापार, शेयरों एवं अचल संपत्तियों का अधिकृत मूल्यांकन अदालत के समक्ष पेश करें।',
        'मासिक विवादों से बचने हेतु आजीवन जीवन-यापन के लिए एकमुश्त पूंजीगत राशि का प्रस्ताव रखें।',
        'अदालत एकमुश्त राशि तय करेगी और भुगतान सुरक्षित करने हेतु पति की संपत्ति पर वैधानिक भार बनाएगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-38-1',
        name: { en: 'Husband Net-Worth Valuation Report & Registered Property Dags', bn: 'স্বামীর মোট সম্পত্তির ভ্যালুয়েশন রিপোর্ট ও জমির দাগ নম্বর', hi: 'पति की कुल संपत्ति का वैल्यूएशन रिपोर्ट व जमीन रिकॉर्ड' },
        issuing_authority: { en: 'Approved Chartered Valuer / BL&LRO', bn: 'অনুমোদিত ভ্যালুয়ার / ভূমি দপ্তর', hi: 'मान्यता प्राप्त वैल्यूअर / राजस्व विभाग' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-39',
    productCategory: 'lawyer-only',
    title: {
      en: 'Recovery of Maintenance Arrears Against NRI Spouses',
      bn: 'প্রবাসী এনআরআই স্বামীর বকেয়া খোরপোশ আদায় ও লুক-আউট নোটিশ',
      hi: 'प्रवासी (NRI) पति से बकाया गुजारा वसूली, लुक-आउट नोटिस व पासपोर्ट जब्ती'
    },
    relevant_act: 'Sec 144(3) BNSS r/w Passports Act, 1967 & MEA Guidelines',
    summary: {
      en: 'Securing Look-Out Circulars (LOC) and passport impoundment through Ministry of External Affairs against fugitive NRI spouses defaulting on alimony.',
      bn: 'বিদেশে পালিয়ে থাকা স্বামী খোরপোশ না দিলে বিমানবন্দরে আটক করতে লুক-আউট সার্কুলার (LOC) ও পাসপোর্ট বাজেয়াপ্ত।',
      hi: 'विदेश भाग चुके पति द्वारा गुजारा न देने पर एयरपोर्ट पर गिरफ्तारी हेतु लुक-आउट सर्कुलर एवं पासपोर्ट निरस्तीकरण।'
    },
    authority_forum: {
      en: 'Family Court / Judicial Magistrate / High Court',
      bn: 'পারিবারিক আদালত / জুডিশিয়াল ম্যাজিস্ট্রেট / হাইকোর্ট',
      hi: 'पारिवारिक न्यायालय / न्यायिक दंडाधिकारी / उच्च न्यायालय'
    },
    forum_type: 'Family_Court',
    is_complex: true,
    official_portal_url: 'https://calcuttahighcourt.gov.in/',
    statutory_timeframe: {
      en: '60 to 90 working days for LOC execution',
      bn: 'এলওসি জারির ৬০ থেকে ৯০ কার্যদিবস',
      hi: 'लुक-आउट नोटिस हेतु 60 से 90 दिन'
    },
    search_keywords: {
      en: ['nri husband maintenance loc', 'impound passport defaulting husband', 'look out circular alimony default'],
      bn: ['এনআরআই স্বামীর খোরপোশ', 'পাসপোর্ট বাজেয়াপ্ত স্বামী', 'লুক আউট সার্কুলার'],
      hi: ['एनआरआई पति गुजारा वसूली', 'पासपोर्ट जब्ती भरण पोषण', 'लुक-आउट नोटिस एनआरआई']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Compile certified schedule of unpaid maintenance arrears along with foreign employment records.',
        'Obtain Non-Bailable Warrant (NBW) from Judicial Magistrate following repeated defaults.',
        'Move Family Court to direct Ministry of Home Affairs to issue a Look-Out Circular (LOC) at all Indian airports.',
        'Ministry of External Affairs impounds passport under Section 10(3)(h) Passports Act upon arrival.'
      ],
      bn: [
        'বকেয়া খোরপোশের হিসাব এবং স্বামীর বিদেশের চাকরি ও ঠিকানার প্রমাণপত্র আদালতে জমা দিন।',
        'বারবার আদালতের নির্দেশ অমান্য করার কারণে ম্যাজিস্ট্রেটের কাছ থেকে জামিন-অযোগ্য গ্রেপ্তারি পরোয়ানা নিন।',
        'পারিবারিক আদালতের মাধ্যমে স্বরাষ্ট্র মন্ত্রককে ভারতের সমস্ত বিমানবন্দরে লুক-আউট সার্কুলার (LOC) জারির নির্দেশ করান।',
        'ভারতে নামামাত্র ইমিগ্রেশন পুলিশ স্বামীকে আটক করবে এবং পাসপোর্ট আইনের ধারা ১০(৩)(এইচ) অনুযায়ী পাসপোর্ট বাজেয়াপ্ত হবে।'
      ],
      hi: [
        'बकाया गुजारा भत्ते का गणना पत्र एवं पति के विदेशी रोजगार व पते के प्रमाण अदालत में दें।',
        'लगातार आदेश उल्लंघन पर न्यायिक मजिस्ट्रेट से गैर-जमानती गिरफ्तारी वारंट (NBW) जारी कराएं।',
        'पारिवारिक न्यायालय से गृह मंत्रालय को देश के सभी हवाई अड्डों पर लुक-आउट नोटिस (LOC) भेजने का आदेश लें।',
        'भारत पहुंचते ही आव्रजन पुलिस पति को रोकेगी एवं पासपोर्ट अधिनियम की धारा 10(3)(h) में पासपोर्ट जब्त होगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-39-1',
        name: { en: 'Judicial NBW Order & MEA / Indian Passport Details of Spouse', bn: 'জামিন-অযোগ্য গ্রেপ্তারি পরোয়ানা ও স্বামীর ভারতীয় পাসপোর্ট কপি', hi: 'गैर-जमानती वारंट आदेश एवं पति का पासपोर्ट विवरण' },
        issuing_authority: { en: 'Magistrate Court / Ministry of External Affairs', bn: 'ম্যাজিস্ট্রেট আদালত / বিদেশ মন্ত্রক', hi: 'न्यायिक न्यायालय / विदेश मंत्रालय' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-40',
    productCategory: 'lawyer-only',
    title: {
      en: 'Legal Guardianship of Mentally Challenged Adult Family Members',
      bn: 'মানসিক ভারসাম্যহীন প্রাপ্তবয়স্ক সন্তানের আইনি অভিভাবকত্ব (LLC কমিটি)',
      hi: 'मानसिक रूप से दिव्यांग वयस्क परिजनों का कानूनी अभिभावकत्व प्रमाणपत्र'
    },
    relevant_act: 'Sec 14, National Trust Act, 1999 & RPwD Act, 2016',
    summary: {
      en: 'Appointing statutory legal guardians for adult children with intellectual disabilities to manage bank funds and inherited properties.',
      bn: '১৮ বছর পার হওয়া বিশেষ চাহিদাসম্পন্ন সন্তানের ব্যাঙ্ক অ্যাকাউন্ট ও পৈতৃক সম্পত্তি পরিচালনার জন্য জেলাশাসকের অভিভাবকত্ব সনদ।',
      hi: 'बौद्धिक दिव्यांगता वाले वयस्क संतानों के बैंक खातों एवं पैतृक संपत्ति संचालन हेतु कानूनी अभिभावक नियुक्ति।'
    },
    authority_forum: {
      en: 'Local Level Committee (LLC) chaired by District Magistrate',
      bn: 'স্থানীয় স্তরীয় কমিটি (LLC) - সভাপতি জেলাশাসক',
      hi: 'जिला मजिस्ट्रेट की अध्यक्षता वाली स्थानीय स्तरीय समिति (LLC)'
    },
    forum_type: 'Competent_Authority',
    is_complex: false,
    official_portal_url: 'https://thenationaltrust.gov.in/',
    statutory_timeframe: {
      en: '30 to 45 working days',
      bn: '৩০ থেকে ৪৫ কার্যদিবস',
      hi: '30 से 45 कार्यदिवस'
    },
    search_keywords: {
      en: ['legal guardianship mentally challenged adult', 'national trust act form a', 'dm legal guardian certificate'],
      bn: ['মানসিক প্রতিবন্ধী অভিভাবকত্ব', 'ন্যাশনাল ট্রাস্ট অ্যাক্ট ফর্ম এ', 'জেলাশাসক অভিভাবক সনদ'],
      hi: ['दिव्यांग वयस्क कानूनी संरक्षक', 'नेशनल ट्रस्ट एक्ट फॉर्म A', 'जिला मजिस्ट्रेट गार्जियनशिप']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain permanent Intellectual Disability Assessment Certificate from a recognized government hospital.',
        'Submit Form-A application before the Local Level Committee (LLC) chaired by the District Magistrate.',
        'LLC reviews family caregiving capability, property holding details, and applicant suitability.',
        'District Magistrate issues official Statutory Legal Guardianship Certificate under National Trust seal.'
      ],
      bn: [
        'সরকারি মেডিকেল বোর্ড থেকে বৌদ্ধিক প্রতিবন্ধকতার স্থায়ী শতকরা হারযুক্ত মেডিকেল সনদ সংগ্রহ করুন।',
        'জেলাশাসকের (DM) নেতৃত্বাধীন লোকাল লেভেল কমিটির (LLC) কাছে নির্ধারিত ফর্ম-এ আবেদন পেশ করুন।',
        'কমিটি আবেদনকারীর আর্থিক সচ্ছলতা ও বিশেষ সন্তানের যত্নের উপযুক্ততা সরেজমিনে খতিয়ে দেখবে।',
        'জেলাশাসক সরকারি সিলমোহরযুক্ত লিগ্যাল গার্ডিয়ানশিপ সার্টিফিকেট জারি করবেন যা ব্যাঙ্কে গৃহীত হবে।'
      ],
      hi: [
        'सरकारी अस्पताल के मेडिकल बोर्ड से स्थायी बौद्धिक दिव्यांगता प्रमाणपत्र प्राप्त करें।',
        'जिला मजिस्ट्रेट की अध्यक्षता वाली स्थानीय स्तरीय समिति (LLC) के समक्ष फॉर्म-A में आवेदन दें।',
        'समिति द्वारा अभिभावक की देखभाल क्षमता एवं संपत्ति सुरक्षा का सत्यापन किया जाएगा।',
        'जिला कलेक्टर नेशनल ट्रस्ट की मुहर युक्त आधिकारिक विधिक संरक्षकता प्रमाणपत्र जारी करेंगे।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-40-1',
        name: { en: 'Government Hospital Mental Disability Certificate & LLC Form-A', bn: 'মানসিক প্রতিবন্ধকতার সরকারি সার্টিফিকেট ও ফর্ম-এ আবেদন', hi: 'मानसिक दिव्यांगता प्रमाणपत्र एवं एलएलसी फॉर्म-A आवेदन' },
        issuing_authority: { en: 'Govt Medical Board / District Magistrate LLC Cell', bn: 'মেডিকেল বোর্ড / জেলাশাসক কার্যালয়', hi: 'चिकित्सा बोर्ड / जिला कलेक्ट्रेट' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-41',
    productCategory: 'lawyer-only',
    title: {
      en: 'Injunction Against Matrimonial Private Spying & Wiretapping',
      bn: 'ডিভোর্স মামলায় স্পাইং, গোপনে নজরদারি ও ফোন ট্যাপের বিরুদ্ধে নিষেধাজ্ঞা',
      hi: 'वैवाहिक विवाद में प्राइवेट जासूसों द्वारा जासूसी एवं फोन टैपिंग पर रोक'
    },
    relevant_act: 'Sec 43 & 66E, IT Act, 2000 r/w Right to Privacy (Puttaswamy SC)',
    summary: {
      en: 'Restraining private detectives from planting GPS trackers, illegal spyware, or recording bedroom privacy during matrimonial disputes.',
      bn: 'বৈবাহিক কলহের জেরে স্বামী বা স্ত্রীর পেছনে প্রাইভেট গোয়েন্দা লাগানো, ফোন হ্যাক করা বা গোপন ক্যামেরা বসানোর বিরুদ্ধে দেওয়ানি নিষেধাজ্ঞা।',
      hi: 'ससुराल या पति द्वारा जासूस लगाकर फोन हैक करने, जीपीएस ट्रैकर लगाने व निजता हनन पर कानूनी रोक व हर्जाना।'
    },
    authority_forum: {
      en: 'Civil Court (Injunction Wing) / High Court at Calcutta',
      bn: 'দেওয়ানি আদালত / কলকাতা হাইকোর্ট',
      hi: 'सिविल न्यायालय / कलकत्ता उच्च न्यायालय'
    },
    forum_type: 'Civil_Court',
    is_complex: true,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: 'Urgent (Hearing within 3 to 7 days)',
      bn: 'জরুরি (৩ থেকে ৭ দিনের মধ্যে শুনানি)',
      hi: 'अति आवश्यक (3 से 7 दिन में सुनवाई)'
    },
    search_keywords: {
      en: ['injunction private detective matrimonial', 'illegal wiretapping spouse it act', 'puttaswamy privacy breach spouse'],
      bn: ['প্রাইভেট ডিটেকটিভ নজরদারি বন্ধ', 'ফোন ট্যাপ নিষেধাজ্ঞা', 'গোপনীয়তা রক্ষা দাম্পত্য'],
      hi: ['जासूस जासूसी रोक', 'फोन टैपिंग अवैध पति', 'निजता अधिकार वैवाहिक विवाद']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Document tangible evidence of illegal surveillance: physical GPS trackers, unauthorized call recordings, or vehicle tracking.',
        'File urgent Civil Injunction Suit asserting fundamental Right to Privacy under Article 21 and the *Puttaswamy* ruling.',
        'Serve formal Cease-and-Desist notice on private investigation agency and spouse.',
        'Court grants injunction restraining third-party surveillance and excludes illegally wiretapped records from evidence.'
      ],
      bn: [
        'বেআইনি নজরদারির প্রমাণ সংগ্রহ করুন: গাড়িতে লাগানো জিপিএস ট্র্যাকার, ফোনের স্পাইওয়্যার বা গোপন অডিও।',
        'সুপ্রিম কোর্টের পুট্টস্বামী রায় ও অনুচ্ছেদ ২১ উল্লেখ করে দেওয়ানি আদালতে জরুরি নিষেধাজ্ঞার মামলা করুন।',
        'বেসরকারি গোয়েন্দা সংস্থা ও সংশ্লিষ্ট স্বামী/স্ত্রীর নামে অবিলম্বে নজরদারি বন্ধের আইনি চিঠি দিন।',
        'আদালত নজরদারি বন্ধের নিষেধাজ্ঞা জারি করবে এবং বেআইনিভাবে রেকর্ড করা তথ্য প্রমাণ হিসেবে গ্রহণ বাতিল করবে।'
      ],
      hi: [
        'अवैध जासूसी के ठोस साक्ष्य जुटाएं: गाड़ी में लगा जीपीएस, फोन स्पाइवेयर या अनधिकृत रिकॉर्डिंग।',
        'सुप्रीम कोर्ट के पुट्टास्वामी फैसले का हवाला देकर निजता अधिकार संरक्षण का दीवानी वाद करें।',
        'प्राइवेट जासूसी एजेंसी एवं पति/ससुराल पक्ष को तुरंत जासूसी रोकने का विधिक नोटिस प्रेषित करें।',
        'अदालत जासूसी पर पूर्ण रोक लगाएगी एवं अवैध रूप से रिकॉर्ड की गई सामग्री को खारिज करेगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-41-1',
        name: { en: 'Forensic IT Inspection Report of Tracked Devices & Police GD', bn: 'ডিভাইস ট্র্যাকিংয়ের আইটি ফরেনসিক রিপোর্ট ও পুলিশ জিডি', hi: 'डिवाइस ट्रैकिंग की फॉरेंसिक जांच रिपोर्ट व पुलिस जीडी' },
        issuing_authority: { en: 'Cyber Forensic Expert / Police Station', bn: 'সাইবার ফরেনসিক ল্যাব / থানা', hi: 'साइबर विशेषज्ञ / थाना' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-42',
    productCategory: 'lawyer-only',
    title: {
      en: 'Enforcement of Foreign Divorce Decrees in India (Sec 13 CPC)',
      bn: 'বিদেশের আদালতের বিবাহবিচ্ছেদ ডিক্রির বৈধতা পরীক্ষা ও চ্যালেঞ্জ',
      hi: 'विदेशी अदालत की तलाक डिक्री की भारत में वैधता एवं चुनौती (धारा 13 CPC)'
    },
    relevant_act: 'Sec 13 & 14, Code of Civil Procedure, 1908 r/w Y. Narasimha Rao (SC)',
    summary: {
      en: 'Testing validity of overseas divorce decrees; foreign decrees obtained without wife appearance or consent are void in India.',
      bn: 'আমেরিকা বা লন্ডনের আদালতে একতরফা নেওয়া ডিভোর্স ডিক্রি ভারতে বাতিল ঘোষণা এবং ভারতীয় পারিবারিক আদালতে অধিকার রক্ষা।',
      hi: 'विदेशी अदालत से एकतरफा प्राप्त तलाक डिक्री को सुप्रीम कोर्ट के नृसिंह राव फैसले के तहत भारत में अमान्य ठहराना।'
    },
    authority_forum: {
      en: 'Family Court / High Court at Calcutta',
      bn: 'পারিবারিক আদালত / কলকাতা হাইকোর্ট',
      hi: 'पारिवारिक न्यायालय / कलकत्ता उच्च न्यायालय'
    },
    forum_type: 'Family_Court',
    is_complex: true,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '6 months to 1.5 years',
      bn: '৬ মাস থেকে ১.৫ বছর',
      hi: '6 माह से 1.5 वर्ष'
    },
    search_keywords: {
      en: ['foreign divorce decree validity india', 'y narasimha rao judgment', 'section 13 cpc foreign judgment'],
      bn: ['বিদেশের ডিভোর্স ডিক্রি অবৈধ', 'ধারা ১৩ সিপিসি বিদেশি রায়', 'নরসিমা রাও সুপ্রিম কোর্ট'],
      hi: ['विदेशी तलाक डिक्री अमान्य', 'धारा 13 सीपीसी विदेशी निर्णय', 'नरसिम्हा राव फैसला']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain certified copies of foreign decree and overseas court docket records.',
        'Verify if decree violates Section 13 CPC exceptions (e.g. obtained without natural justice or on non-recognized grounds).',
        'File Civil Declaratory Suit before Family Court praying for declaration that foreign decree is non-conclusive.',
        'Court declares foreign decree null and void in India, restoring matrimonial status and permitting maintenance claims.'
      ],
      bn: [
        'বিদেশের আদালতের রায় ও ডকেটের সার্টিফাইড কপি সংগ্রহ করে আইনজীবীকে দিয়ে যাচাই করান।',
        'প্রমাণ করুন রায়টি ধারা ১৩ সিপিসি লঙ্ঘন করেছে (যেমন স্ত্রীকে নোটিশ ছাড়া বা একতরফাভাবে ডিক্রি হয়েছে)।',
        'পারিবারিক আদালতে দেওয়ানি স্বত্ব মামলা করে বিদেশি ডিক্রিটি ভারতে অকার্যকর ঘোষণার আর্জি জানান।',
        'আদালত বিদেশি ডিভোর্স বাতিল ঘোষণা করবে, ভারতে বিয়ে বহাল রাখবে এবং খোরপোশ মামলা গ্রহণের অনুমতি দেবে।'
      ],
      hi: [
        'विदेशी अदालत के आदेश एवं पत्रावली की प्रमाणित प्रतिलिपि मंगाकर विधिक जांच कराएं।',
        'सिद्ध करें कि विदेशी फैसला सीपीसी की धारा 13 के विरुद्ध है (प्राकृतिक न्याय व पत्नी की सहमति के बिना)।',
        'पारिवारिक न्यायालय में वाद दायर कर विदेशी तलाक को भारत में शून्य घोषित करने की मांग करें।',
        'अदालत विदेशी डिक्री को अमान्य ठहराएगी, भारत में वैवाहिक दर्जा बहाल रखेगी एवं गुजारा वाद स्वीकार करेगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-42-1',
        name: { en: 'Certified Copy of Foreign Court Dissolution Decree & Passport Entries', bn: 'বিদেশের আদালতের রায়ের সার্টিফাইড কপি ও পাসপোর্ট সিল', hi: 'विदेशी तलाक डिक्री की प्रमाणित प्रति एवं पासपोर्ट प्रविष्टियां' },
        issuing_authority: { en: 'Foreign Superior Court / Indian Embassy', bn: 'বিদেশি আদালত / ভারতীয় দূতাবাস', hi: 'विदेशी न्यायालय / भारतीय दूतावास' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-43',
    productCategory: 'lawyer-only',
    title: {
      en: 'Maintenance of Elderly Parents from Multiple Children Equitably',
      bn: 'একাধিক সন্তানের থেকে প্রবীণ পিতা-মাতার সমানুপাতিক খোরপোশ আদায়',
      hi: 'सभी संतानों से वृद्ध माता-पिता हेतु आनुपातिक मासिक भरण-पोषण'
    },
    relevant_act: 'Sec 5, Maintenance & Welfare of Parents & Senior Citizens Act, 2007',
    summary: {
      en: 'Directing all solvent adult sons and daughters to contribute proportionately to parents monthly medical and living expenses.',
      bn: 'পিতা-মাতার দায়িত্ব এক সন্তানের ওপর না চাপিয়ে সমস্ত সক্ষম ছেলে ও মেয়েকে আয়ের অনুপাতে খরচের টাকা দেওয়ার ট্রাইব্যুনাল নির্দেশ।',
      hi: 'सभी सक्षम बेटों एवं बेटियों की वित्तीय स्थिति के अनुसार माता-पिता के इलाज व रहने का खर्च बांटने का आदेश।'
    },
    authority_forum: {
      en: 'SDO Maintenance Tribunal (Districts) / Collector (Kolkata)',
      bn: 'মহকুমা শাসক (SDO) ট্রাইব্যুনাল / কলকাতা কালেক্টর ট্রাইব্যুনাল',
      hi: 'एसडीओ भरण-पोषण अधिकरण / कोलकाता कलेक्टर अधिकरण'
    },
    forum_type: 'SDO_Tribunal',
    is_complex: false,
    official_portal_url: 'https://wbja.nic.in/',
    statutory_timeframe: {
      en: '60 to 90 working days',
      bn: '৬০ থেকে ৯০ কার্যদিবস',
      hi: '60 से 90 कार्यदिवस'
    },
    search_keywords: {
      en: ['senior citizen maintenance all children', 'section 5 senior citizens multiple sons', 'equitable maintenance parents sdo'],
      bn: ['সব ছেলের থেকে পিতা-মাতার খোরপোশ', 'প্রবীণ ট্রাইব্যুনাল যৌথ দায়', 'এসডিও সিনিয়র সিটিজেন'],
      hi: ['सभी बच्चों से माता पिता गुजारा', 'धारा 5 वरिष्ठ नागरिक संयुक्त देयता', 'एसडीओ बुजुर्ग भरण पोषण']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Submit Section 5 petition before SDO Maintenance Tribunal impleading all adult working sons and daughters.',
        'Compile schedule of recurring monthly expenditure: heart/diabetes medications, food, and caregiver charges.',
        'Tribunal examines financial capability of each offspring and dismisses excuses shifting sole blame onto one sibling.',
        'SDO issues binding proportionate payment orders directing monthly bank deposits by all children.'
      ],
      bn: [
        'সমস্ত চাকরিজীবী ও সক্ষম ছেলে-মেয়েদের পক্ষভুক্ত করে মহকুমা শাসকের (SDO) ট্রাইব্যুনালে ধারা ৫ পিটিশন দিন।',
        'প্রতি মাসের ওষুধ, বিশেষ পথ্য ও পরিচর্যাকারীর ব্যয়ের একটি প্রামাণ্য হিসাবপত্র প্রস্তুত করুন।',
        'ট্রাইব্যুনাল প্রতিটি সন্তানের ব্যক্তিগত রোজগার খতিয়ে দেখবে এবং দায় অন্যের ঘাড়ে চাপানোর অজুহাত বাতিল করবে।',
        'এসডিও সমস্ত সন্তানের নামে যার যার আয়ের অনুপাতে প্রতি মাসে পিতা-মাতার অ্যাকাউন্টে টাকা জমার নির্দেশ দেবে।'
      ],
      hi: [
        'सभी कामकाजी बेटों और बेटियों को पक्षकार बनाकर एसडीओ भरण-पोषण ट्रिब्यूनल में धारा 5 की अर्जी दें।',
        'मासिक खर्चों का ब्योरा संलग्न करें: दवाइयों, भोजन एवं देखभाल करने वाले सहायकों का वास्तविक खर्च।',
        'अधिकरण सभी संतानों की कमाई की जांच करेगा और एक-दूसरे पर जिम्मेदारी टालने का बहाना खारिज करेगा।',
        'एसडीओ सभी बच्चों को उनकी आय के अनुपात में माता-पिता के बैंक खाते में मासिक राशि जमा करने का आदेश देंगे।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-43-1',
        name: { en: 'Senior Citizen Medical Bills & Offspring Employment Evidence', bn: 'প্রবীণ পিতামাতার চিকিৎসার প্রেসক্রিপশন ও সন্তানদের আয়ের প্রমাণ', hi: 'बुजुर्ग माता-पिता के मेडिकल बिल एवं संतानों के रोजगार साक्ष्य' },
        issuing_authority: { en: 'Hospital / Employers', bn: 'হাসপাতাল / কর্মস্থল', hi: 'अस्पताल / नियोक्ता' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-44',
    productCategory: 'free-checklist',
    title: {
      en: 'Medical Termination of Pregnancy (MTP) in Spousal Distress',
      bn: 'দাম্পত্য বিচ্ছেদের সময় গর্ভপাত ও প্রজনন স্বাধিকার (MTP Act, 2021)',
      hi: 'वैवाहिक विवाद एवं अलगाव के दौरान सुरक्षित गर्भपात का कानूनी अधिकार'
    },
    relevant_act: 'Medical Termination of Pregnancy Act, 1971 (Amended 2021) r/w Supreme Court Norms',
    summary: {
      en: 'Legal framework enabling married women to terminate pregnancy up to 24 weeks without spousal consent during matrimonial breakdown.',
      bn: 'স্বামীর সম্মতি ছাড়াই বৈবাহিক বিচ্ছেদ বা মানসিক দুর্গতির কারণে ২৪ সপ্তাহ পর্যন্ত আইনসম্মত ও সুরক্ষিত গর্ভপাতের অধিকার।',
      hi: 'पति की सहमति के बिना भी वैवाहिक प्रताड़ना या अलगाव में 24 सप्ताह तक सुरक्षित गर्भपात का महिला अधिकार।'
    },
    authority_forum: {
      en: 'High Court at Calcutta (Writ Bench) / Medical Board',
      bn: 'কলকাতা হাইকোর্ট (রিট বেঞ্চ) / সরকারি মেডিকেল বোর্ড',
      hi: 'कलकत्ता उच्च न्यायालय (रिट शाखा) / मेडिकल बोर्ड'
    },
    forum_type: 'High_Court',
    is_complex: true,
    official_portal_url: 'https://calcuttahighcourt.gov.in/',
    statutory_timeframe: {
      en: 'Immediate (Within 24 to 48 hours for medical safety)',
      bn: 'তাৎক্ষণিক (২৪ থেকে ৪৮ ঘণ্টার মধ্যে)',
      hi: 'अति आवश्यक (24 से 48 घंटे में)'
    },
    search_keywords: {
      en: ['mtp without husband consent', 'termination pregnancy 24 weeks high court', 'supreme court mtp married woman distress'],
      bn: ['স্বামীর অনুমতি ছাড়া গর্ভপাত', 'এমটিপি আইন ২০২১', 'হাইকোর্ট গর্ভপাত অনুমতি'],
      hi: ['बिना पति सहमति गर्भपात', 'एमटीपी कानून 24 सप्ताह', 'उच्च न्यायालय गर्भपात अनुमति']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain ultrasound scan confirming gestational age is within statutory limits (up to 24 weeks).',
        'If government hospital refuses citing lack of husband signature, cite Supreme Court ruling confirming woman sole autonomy.',
        'File emergency Writ Petition (Art 226) before High Court vacation/regular bench if administrative delays occur.',
        'High Court orders Medical Board examination and directs government hospital to perform procedure with full privacy.'
      ],
      bn: [
        'আল্ট্রাসনোগ্রাফি রিপোর্ট দিয়ে নিশ্চিত করুন গর্ভের সময়সীমা বিধিবদ্ধ ২৪ সপ্তাহের ভেতরে রয়েছে।',
        'হাসপাতাল স্বামীর সই দাবি করলে সুপ্রিম কোর্টের নজির দেখান: নারীর প্রজনন স্বাধীনতায় স্বামীর সম্মতির প্রয়োজন নেই।',
        'চিকিৎসক গড়িমসি করলে কলকাতা হাইকোর্টের বেঞ্চে অনুচ্ছেদ ২২৬ অনুযায়ী জরুরি রিট পিটিশন দাখিল করুন।',
        'হাইকোর্ট অবিলম্বে মেডিকেল বোর্ড গঠন করে সরকারি হাসপাতালে সম্পূর্ণ গোপনীয়তায় সুরক্ষিত গর্ভপাতের নির্দেশ দেবে।'
      ],
      hi: [
        'सोनोग्राफी रिपोर्ट से पुष्टि करें कि गर्भधारण की अवधि वैधानिक 24 सप्ताह के भीतर है।',
        'अस्पताल द्वारा पति के हस्ताक्षर मांगने पर सुप्रीम कोर्ट का फैसला दिखाएं कि महिला की सहमति ही अंतिम है।',
        'अस्पताल के इनकार पर कलकत्ता हाईकोर्ट के समक्ष अनुच्छेद 226 में आपात रिट याचिका दाखिल करें।',
        'उच्च न्यायालय मेडिकल बोर्ड गठित कराकर सरकारी अस्पताल में पूर्ण गोपनीयता के साथ प्रक्रिया का आदेश देगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-44-1',
        name: { en: 'Obstetric Ultrasound Gestational Scan Report', bn: 'আল্ট্রাসনোগ্রাফি গর্ভকালীন সময়সীমা রিপোর্ট', hi: 'सोनोग्राफी (अल्ट्रासाउंड) गर्भावस्था रिपोर्ट' },
        issuing_authority: { en: 'Registered Diagnostic Center / Gynecologist', bn: 'ডায়াগনস্টিক সেন্টার / চিকিৎসক', hi: 'मान्यता प्राप्त डायग्नोस्टिक सेंटर' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-45',
    productCategory: 'free-checklist',
    title: {
      en: 'Grandparents Visitation Rights Following Parental Demise',
      bn: 'সন্তানের মৃত্যুর পর নাতি-নাতনির সাথে দাদু-ঠাকুমার দেখা করার আইনি অধিকার',
      hi: 'माता या पिता के निधन उपरांत दादा-दादी/नाना-नानी के मिलने का अधिकार'
    },
    relevant_act: 'Sec 12, Guardians and Wards Act, 1890 (Equitable Welfare Jurisdiction)',
    summary: {
      en: 'Securing weekend visitation and emotional access for paternal or maternal grandparents when surviving in-laws cut off access.',
      bn: 'ছেলে বা মেয়ের অকালমৃত্যুর পর জীবিত জামাই বা পুত্রবধূ নাতি-নাতনির সাথে দেখা করতে না দিলে আদালতের সাক্ষাতের আদেশ।',
      hi: 'संतान की मृत्यु के बाद बहू या दामाद द्वारा पोते-पोतियों से मिलने पर रोक लगाने के विरुद्ध अदालती विजिटेशन पाना।'
    },
    authority_forum: {
      en: 'Family Court / District Judge Court',
      bn: 'পারিবারিক আদালত / জেলা জজ আদালত',
      hi: 'पारिवारिक न्यायालय / जिला जज न्यायालय'
    },
    forum_type: 'Family_Court',
    is_complex: false,
    official_portal_url: 'https://ecourts.gov.in/',
    statutory_timeframe: {
      en: '30 to 60 working days for interim access',
      bn: '৩০ থেকে ৬০ কার্যদিবস',
      hi: '30 से 60 कार्यदिवस'
    },
    search_keywords: {
      en: ['grandparents visitation rights', 'grandparents custody petition', 'access to grandchildren death of parent'],
      bn: ['নাতি নাতনির সাথে দেখা করার অধিকার', 'দাদু ঠাকুমার অধিকার আদালত', 'জিডব্লুএ ধারা ১২'],
      hi: ['दादा दादी विजिटेशन अधिकार', 'पोते से मिलने का हक', 'नाना नानी पारिवारिक न्यायालय']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Produce death certificate of deceased child proving petitioner lineage as natural grandparents.',
        'File application under Section 12 GWA before Family Court asserting emotional bonding and child best interests.',
        'Judge conducts in-camera interaction with grandchild in judicial chambers to ascertain comfort.',
        'Court passes structured visitation schedule granting alternate weekend access and festival holiday hours.'
      ],
      bn: [
        'মৃত ছেলে বা মেয়ের মৃত্যু সনদ দিয়ে প্রমাণ করুন আবেদনকারীরা নাবালকের প্রকৃত দাদু-ঠাকুমা বা দিদিমা।',
        'শিশুর মানসিক সুস্থতার স্বার্থে পারিবারিক আদালতে ধারা ১২ অনুযায়ী সাক্ষাতের আবেদন দাখিল করুন।',
        'বিচারক নিজের চেম্বারে নাতি-নাতনির সাথে কথা বলে তার মানসিক স্বাচ্ছন্দ্য ও স্নেহ খতিয়ে দেখবেন।',
        'আদালত প্রতি মাসের নির্দিষ্ট শনি-রবিবার ও ছুটির দিনে নাতি-নাতনির সাথে নিয়মিত সাক্ষাতের রুটিন নির্ধারণ করবে।'
      ],
      hi: [
        'मृतक संतान का मृत्यु प्रमाणपत्र प्रस्तुत कर सिद्ध करें कि याचिकाकर्ता सगे दादा-दादी या नाना-नानी हैं।',
        'बच्चे के भावनात्मक हित का हवाला देकर धारा 12 जीडब्ल्यूए में मिलने के अधिकार की याचिका दें।',
        'न्यायाधीश अपने चैंबर में बच्चे से अकेले बात कर उसके लगाव एवं सहजता का आकलन करेंगे।',
        'अदालत महीने के निश्चित सप्ताहांत एवं त्योहारों पर बच्चे से मिलने का वैधानिक समय निर्धारित करेगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-45-1',
        name: { en: 'Death Certificate of Deceased Offspring & Lineage Proof', bn: 'মৃত ছেলে বা মেয়ের মৃত্যু সনদ ও সম্পর্কের প্রামাণ্য নথি', hi: 'मृतक संतान का मृत्यु प्रमाणपत्र एवं वंशावली साक्ष्य' },
        issuing_authority: { en: 'Registrar of Births & Deaths / Municipality', bn: 'পুরসভা / পঞ্চায়েত', hi: 'नगर पालिका / रजिस्ट्रार' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-46',
    productCategory: 'lawyer-only',
    title: {
      en: 'Attachment of Father Salary for Defaulted Child School Fees',
      bn: 'সন্তানের বকেয়া স্কুলের ফি আদায়ে পিতার মাসিক বেতন ক্রোক',
      hi: 'बच्चे की बकाया स्कूल फीस हेतु पिता के वेतन की अदालती कुर्की'
    },
    relevant_act: 'Order XXI Rule 48 CPC r/w Sec 144 BNSS',
    summary: {
      en: 'Garnishee orders directly compelling father employer to deduct unpaid school tuition fees from salary and remit to school.',
      bn: 'আদালতের আদেশ সত্ত্বেও বাচ্চার স্কুলের বেতন না দিলে পিতার কর্মস্থলে নোটিশ পাঠিয়ে বেতন কেটে সরাসরি স্কুলে জমা।',
      hi: 'अदालती आदेश के बाद भी स्कूल फीस न भरने पर पिता की कंपनी को वेतन से काटकर सीधे फीस जमा करने का आदेश।'
    },
    authority_forum: {
      en: 'Family Court / Judicial Magistrate Court',
      bn: 'পারিবারিক আদালত / জুডিশিয়াল ম্যাজিস্ট্রেট আদালত',
      hi: 'पारिवारिक न्यायालय / न्यायिक दंडाधिकारी न्यायालय'
    },
    forum_type: 'Family_Court',
    is_complex: false,
    official_portal_url: 'https://ecourts.gov.in/',
    statutory_timeframe: {
      en: '30 to 60 working days',
      bn: '৩০ থেকে ৬০ কার্যদিবস',
      hi: '30 से 60 कार्यदिवस'
    },
    search_keywords: {
      en: ['attach father salary school fees', 'child education maintenance order xxi rule 48', 'school fees default execution'],
      bn: ['পিতার বেতন ক্রোক স্কুলের ফি', 'সন্তানের পড়াশোনার খরচ আদায়', 'অর্ডার ২১ রুল ৪৮'],
      hi: ['स्कूल फीस वेतन कुर्की', 'पिता का वेतन कटेगा फीस हेतु', 'आदेश 21 नियम 48 सीपीसी']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Produce school fee demand notices, fee cards, and bank records demonstrating father non-compliance.',
        'File Execution Application under Order XXI Rule 48 CPC before the Family Court.',
        'Serve formal Salary Garnishee Precept on father employer (DDO / HR Department).',
        'Employer automatically deducts educational dues from monthly pay and deposits directly to school account.'
      ],
      bn: [
        'স্কুলের বকেয়া ফির নোটিশ ও আদালতের পূর্ববর্তী ভরণপোষণ আদেশের সার্টিফাইড কপি সংগ্রহ করুন।',
        'পারিবারিক আদালতে অর্ডার ২১ রুল ৪৮ সিপিসি অনুযায়ী বাবার বেতন ক্রোকের এক্সিকিউশন পিটিশন করুন।',
        'আদালত বাবার কর্মস্থলের এইচআর বা বেতন প্রদানকারী আধিকারিককে (DDO) সরকারি ক্রোক পরোয়ানা পাঠাবে।',
        'নিয়োগকারী সংস্থা প্রতি মাসে বাবার বেতন থেকে টাকা কেটে সরাসরি স্কুলের ব্যাংক অ্যাকাউন্টে জমা করবে।'
      ],
      hi: [
        'स्कूल की बकाया फीस का नोटिस एवं पूर्व अदालती आदेश की प्रमाणित प्रतिलिपि प्रस्तुत करें।',
        'पारिवारिक न्यायालय के समक्ष आदेश 21 नियम 48 सीपीसी में वेतन कुर्की की निष्पादन याचिका दें।',
        'अदालत पिता के नियोक्ता (एचआर अथवा वेतन वितरण अधिकारी) को सीधे वेतन कटौती का वारंट भेजेगी।',
        'कंपनी पिता के मासिक वेतन से राशि काटकर सीधे स्कूल के खाते में जमा कराने हेतु बाध्य होगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-46-1',
        name: { en: 'School Quarterly Fee Demand Vouchers & Father Employer Details', bn: 'স্কুলের বকেয়া ফির রসিদ ও পিতার অফিসের ঠিকানা', hi: 'स्कूल फीस मांग पत्र एवं पिता के नियोक्ता का विवरण' },
        issuing_authority: { en: 'Recognized School Authority / Employer', bn: 'স্কুল কর্তৃপক্ষ', hi: 'स्कूल प्रशासन' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-47',
    productCategory: 'free-checklist',
    title: {
      en: 'Recovery of Stolen Dowry & Wedding Gifts (Sec 316 BNS)',
      bn: 'শ্বশুরবাড়ির আত্মীয়দের দ্বারা বিয়ের উপহার ও পণসামগ্রী আত্মসাৎ প্রতিরোধ',
      hi: 'ससुराल पक्ष द्वारा शादी के उपहार एवं सामान हड़पने पर अमानत में खयानत वाद'
    },
    relevant_act: 'Sec 316, Bharatiya Nyaya Sanhita, 2023 (Criminal Breach of Trust)',
    summary: {
      en: 'Police seizure and criminal complaint against husband and in-laws for retaining, selling, or pawning bride wedding jewelry.',
      bn: 'বিয়ের সময় পাওয়া আসবাব, ইলেকট্রনিক সামগ্রী ও উপহার জোর করে আটকে রাখলে বিশ্বাসভঙ্গের ফৌজদারি মামলা।',
      hi: 'शादी में मिले उपहार, फर्नीचर व सामान को ससुराल वालों द्वारा बेच देने या हड़पने पर दंडात्मक वसूली।'
    },
    authority_forum: {
      en: 'Court of Judicial / Metropolitan Magistrate',
      bn: 'জুডিশিয়াল / মেট্রোপলিটান ম্যাজিস্ট্রেট আদালত',
      hi: 'न्यायिक दंडाधिकारी न्यायालय'
    },
    forum_type: 'Magistrate_Court',
    is_complex: false,
    official_portal_url: 'https://ecourts.gov.in/',
    statutory_timeframe: {
      en: '30 to 60 working days',
      bn: '৩০ থেকে ৬০ কার্যদিবস',
      hi: '30 से 60 कार्यदिवस'
    },
    search_keywords: {
      en: ['section 316 bns breach of trust dowry', 'recover wedding gifts in laws', 'police search warrant bridal gifts'],
      bn: ['বিয়ের উপহার আত্মসাৎ', 'ধারা ৩১৬ বিএনএস', 'শ্বশুরবাড়ি থেকে জিনিস উদ্ধার'],
      hi: ['शादी का सामान हड़पना', 'धारा 316 बीएनएस', 'ससुराल से दहेज सामान बरामदगी']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Prepare detailed inventory list of wedding furniture, electronics, and cash gifts signed during marriage.',
        'Serve formal legal notice demanding return of bridal gifts within 15 days.',
        'File criminal complaint under Section 316 BNS (Criminal Breach of Trust) before Judicial Magistrate.',
        'Magistrate orders police search warrant under Section 97 BNSS to seize and return properties to bride.'
      ],
      bn: [
        'বিয়ের সময় দেওয়া আসবাবপত্র, ইলেকট্রনিক গ্যাজেট ও নগদ উপহারের সচিত্র বিবরণী তৈরি করুন।',
        '১৫ দিনের মধ্যে সমস্ত সামগ্রী অক্ষত অবস্থায় ফেরত চেয়ে আইনজীবীর মাধ্যমে রেজিস্ট্রি নোটিশ দিন।',
        'টাকা বা জিনিস ফেরত না দিলে ম্যাজিস্ট্রেটের কাছে ধারা ৩১৬ বিএনএস অনুযায়ী ফৌজদারি মামলা করুন।',
        'ম্যাজিস্ট্রেট ধারা ৯৭ বিএনএস অনুযায়ী পুলিশকে সার্চ ওয়ারেন্ট দিয়ে শ্বশুরবাড়িতে তল্লাশি চালিয়ে জিনিস উদ্ধার করাবেন।'
      ],
      hi: [
        'विवाह में दिए गए सभी सामान, इलेक्ट्रॉनिक्स एवं फर्नीचर की विस्तृत सूची तैयार करें।',
        'अधिवक्ता द्वारा 15 दिन में सारा सामान सुरक्षित लौटाने का कानूनी नोटिस ससुराल पक्ष को दें।',
        'समान न लौटाने पर न्यायिक मजिस्ट्रेट के समक्ष धारा 316 बीएनएस (अमानत में खयानत) का परिवाद दें।',
        'मजिस्ट्रेट धारा 97 बीएनएसएस के तहत पुलिस सर्च वारंट जारी कर सामान बरामद कराकर सौंपेंगे।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-47-1',
        name: { en: 'Bilateral Wedding Gift Inventory & Purchase Tax Invoices', bn: 'বিয়ের উপহারের স্বাক্ষরিত তালিকা ও ক্রয়ের মূল ক্যাশ মেমো', hi: 'विवाह उपहार सूची एवं खरीद के पक्के टैक्स इनवॉयस' },
        issuing_authority: { en: 'Retailers / Complainant', bn: 'দোকানদার / অভিযোগকারী', hi: 'विक्रेता / वादी' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-48',
    productCategory: 'free-checklist',
    title: {
      en: 'Declaration of Legitimacy of Children of Voidable Marriages',
      bn: 'বাতিল বা অসিদ্ধ বিবাহের সন্তানদের বৈধতা ঘোষণা ও সামাজিক স্বীকৃতি',
      hi: 'अमान्य विवाह से जन्मे बच्चों की वैधानिक वैधता घोषणा (धारा 16 HMA)'
    },
    relevant_act: 'Sec 16, Hindu Marriage Act, 1955',
    summary: {
      en: 'Judicial declaration of legitimacy ensuring children born of annulled marriages retain full inheritance and social status.',
      bn: 'পিতা-মাতার বিয়ে আদালত কর্তৃক বাতিল ঘোষিত হলেও সন্তানদের সম্পূর্ণ বৈধ ঘোষণা এবং পৈতৃক সম্পত্তি রক্ষা।',
      hi: 'माता-पिता का विवाह रद्द होने के बावजूद बच्चों को कानूनन पूरी तरह वैध घोषित कराकर अधिकार सुरक्षित करना।'
    },
    authority_forum: {
      en: 'Civil Court / Family Court',
      bn: 'দেওয়ানি আদালত / পারিবারিক আদালত',
      hi: 'सिविल न्यायालय / पारिवारिक न्यायालय'
    },
    forum_type: 'Family_Court',
    is_complex: false,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '6 months to 1 year',
      bn: '৬ মাস থেকে ১ বছর',
      hi: '6 माह से 1 वर्ष'
    },
    search_keywords: {
      en: ['section 16 hma legitimacy child', 'child legitimacy annulled marriage', 'children of void marriage legitimate'],
      bn: ['সন্তানের বৈধতা ঘোষণা', 'ধারা ১৬ হিন্দু বিবাহ', 'বাতিল বিয়ের সন্তান অধিকার'],
      hi: ['बच्चों की वैधता घोषणा', 'धारा 16 हिंदू विवाह कानून', 'अमान्य विवाह संतान अधिकार']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Produce child municipal birth certificate and certified copy of parents annulment/nullity decree.',
        'File Declaratory Suit under Section 34 Specific Relief Act invoking statutory protection of Section 16 HMA.',
        'Establish child was conceived prior to the date on which decree of nullity was passed.',
        'Court enters judgment declaring child legitimate for all legal, social, and inheritance purposes.'
      ],
      bn: [
        'পৌরসভার জন্ম সনদ এবং পিতা-মাতার বিয়ে বাতিলের আদালতের ডিক্রির সার্টিফাইড কপি সংগ্রহ করুন।',
        'হিন্দু বিবাহ আইনের ধারা ১৬ তুলে ধরে দেওয়ানি আদালতে সন্তানের বৈধতা ঘোষণার আরজি দাখিল করুন।',
        'প্রমাণ করুন যে বিবাহ বাতিলের রায় হওয়ার আগেই সন্তান গর্ভে এসেছিল।',
        'আদালত রায় দিয়ে সন্তানকে সম্পূর্ণ বৈধ ঘোষণা করবে এবং পিতা-মাতার সম্পত্তিতে অধিকার সুরক্ষিত রাখবে।'
      ],
      hi: [
        'नगरपालिका जन्म प्रमाणपत्र एवं माता-पिता के विवाह निरस्तीकरण डिक्री की प्रमाणित प्रति लें।',
        'धारा 16 हिंदू विवाह अधिनियम के तहत दीवानी अदालत में बच्चों की वैधता घोषणा का वाद करें।',
        'सिद्ध करें कि बच्चे का जन्म अथवा गर्भधारण विवाह रद्द होने के फैसले से पूर्व हुआ था।',
        'अदालत बच्चे को पूर्णतः वैध घोषित करने की डिक्री देगी, जिससे उसके सभी उत्तराधिकार सुरक्षित होंगे।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-48-1',
        name: { en: 'Parents Marriage Nullity Decree & Child Municipal Birth Certificate', bn: 'পিতা-মাতার বিয়ে বাতিলের রায় ও সন্তানের জন্ম সনদ', hi: 'माता-पिता की विवाह शून्यता डिक्री एवं बच्चे का जन्म प्रमाणपत्र' },
        issuing_authority: { en: 'Family Court / Municipality', bn: 'পারিবারিক আদালত / পুরসভা', hi: 'पारिवारिक न्यायालय / नगर पालिका' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-49',
    productCategory: 'free-checklist',
    title: {
      en: 'Appointment of Court Guardian for Property of Minor Orphans',
      bn: 'অনাথ নাবালক সন্তানের সম্পত্তি সুরক্ষায় আদালত কর্তৃক অভিভাবক নিয়োগ',
      hi: 'अनाथ नाबालिग बच्चों की संपत्ति सुरक्षा हेतु कोर्ट गार्जियन की नियुक्ति'
    },
    relevant_act: 'Sec 7 & 10, Guardians and Wards Act, 1890',
    summary: {
      en: 'Appointing fit relative or District Collector as legal guardian to manage inherited agricultural land or bank funds of orphaned minors.',
      bn: 'পিতা-মাতার মৃত্যুর পর অনাথ শিশুর জমি বা ব্যাংকের টাকা যাতে অন্যরা আত্মসাৎ করতে না পারে সেজন্য কোর্ট অভিভাবক নিয়োগ।',
      hi: 'माता-पिता दोनों की मृत्यु पर अनाथ बच्चे की जमीन व बैंक जमा की सुरक्षा हेतु अधिकृत संरक्षक नियुक्त कराना।'
    },
    authority_forum: {
      en: 'District Judge Court',
      bn: 'জেলা জজ আদালত',
      hi: 'जिला जज न्यायालय'
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
      en: ['property guardian minor orphan', 'section 7 gwa petition', 'district judge guardian appointment'],
      bn: ['নাবালকের সম্পত্তি অভিভাবক', 'অনাথ শিশুর জমি রক্ষা', 'ধারা ৭ জিডব্লুএ'],
      hi: ['अनाथ बच्चे का संपत्ति संरक्षक', 'धारा 7 जीडब्ल्यूए याचिका', 'जिला जज संरक्षक नियुक्ति']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Close relative files guardianship petition under Section 7 GWA before the District Judge.',
        'Attach parents death certificates and detailed schedule of lands, bank FDs, and LIC policies.',
        'District Judge issues citations in local newspapers and orders background verification of guardian.',
        'Court issues Guardianship Certificate with strict bar on selling minor real estate without prior court nod.'
      ],
      bn: [
        'নাবালকের নিকটাত্মীয় জেলা জজ আদালতে ধারা ৭ জিডব্লুএ অনুযায়ী অভিভাবকত্ব চেয়ে আবেদন করুন।',
        'পিতা-মাতা উভয়ের মৃত্যু সনদ এবং অনাথ শিশুর নামে থাকা জমি ও ব্যাঙ্ক ব্যালেন্সের তালিকা দিন।',
        'জেলা জজ সংবাদপত্রে সাধারণ বিজ্ঞপ্তি দেবেন এবং আত্মীয়ের সততা ও আর্থিক অবস্থা তদন্ত করাবেন।',
        'আদালত অভিভাবকত্ব সনদ জারি করবে এবং আদালতের লিখিত অনুমতি ছাড়া জমি বিক্রির ওপর নিষেধাজ্ঞা রাখবে।'
      ],
      hi: [
        'निकट सम्बन्धी द्वारा जिला जज के समक्ष धारा 7 जीडब्ल्यूए में कानूनी संरक्षकता की याचिका दें।',
        'माता-पिता दोनों के मृत्यु प्रमाणपत्र एवं बच्चे के नाम जमीन व बैंक एफडी की सूची संलग्न करें।',
        'जिला जज समाचार पत्रों में नोटिस जारी कर संरक्षक की पृष्ठभूमि एवं चरित्र का सत्यापन कराएंगे।',
        'अदालत संरक्षकता प्रमाणपत्र जारी करेगी और बिना पूर्व अदालती अनुमति जमीन बेचने पर सख्त रोक लगाएगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-49-1',
        name: { en: 'Parents Death Certificates & Schedule of Minor Properties', bn: 'পিতা-মাতা উভয়ের মৃত্যু সনদ ও নাবালকের সম্পত্তির তালিকা', hi: 'माता-पिता दोनों के मृत्यु प्रमाणपत्र एवं संपत्ति अनुसूची' },
        issuing_authority: { en: 'Municipality / Sub-Registrar', bn: 'পুরসভা / ভূমি দপ্তর', hi: 'नगर पालिका / राजस्व विभाग' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-50',
    productCategory: 'free-checklist',
    title: {
      en: 'Family Court Mandatory In-Camera Conciliation & Mediation',
      bn: 'পারিবারিক আদালতে বাধ্যতামূলক ইন-ক্যামেরা মধ্যস্থতা ও আপস মীমাংসা',
      hi: 'पारिवारिक न्यायालय में अनिवार्य बंद कमरा (In-Camera) सुलह एवं मध्यस्थता'
    },
    relevant_act: 'Sec 9 & 11, Family Courts Act, 1984',
    summary: {
      en: 'Mandatory confidential conciliation before trained judicial mediators to explore peaceful reconciliation or dignified settlement.',
      bn: 'মামলার শুনানির পূর্বে নিরপেক্ষ মধ্যস্থতাকারীর উপস্থিতিতে গোপনীয় কামরায় আপস মীমাংসা ও সমঝোতার সুযোগ।',
      hi: 'अदालती ट्रायल से पूर्व बंद कमरे में गोपनीय मध्यस्थता द्वारा विवाद सुलझाने अथवा सम्मानजनक समझौते का अवसर।'
    },
    authority_forum: {
      en: 'Family Court Mediation Centre',
      bn: 'পারিবারিক আদালত মধ্যস্থতা কেন্দ্র',
      hi: 'पारिवारिक न्यायालय मध्यस्थता केंद्र'
    },
    forum_type: 'Family_Court',
    is_complex: false,
    official_portal_url: 'https://wbja.nic.in/',
    statutory_timeframe: {
      en: '30 to 60 days',
      bn: '৩০ থেকে ৬০ দিন',
      hi: '30 से 60 दिन'
    },
    search_keywords: {
      en: ['family court mediation section 9', 'in camera conciliation matrimonial', 'family dispute settlement agreement'],
      bn: ['পারিবারিক মধ্যস্থতা ধারা ৯', 'ইন ক্যামেরা শুনানি', 'পারিবারিক আপস চুক্তি'],
      hi: ['पारिवारिक मध्यस्थता धारा 9', 'बंद कमरा सुलह बैठक', 'पारिवारिक न्यायालय समझौता']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Family Court Judge refers active dispute to court mediation centre prior to framing trial issues.',
        'Attend confidential in-camera sessions held in private chamber without external lawyers or media.',
        'Judicial mediators assist parties in resolving alimony, child visitation, and division of jewelry.',
        'If agreement is reached, execute Memorandum of Settlement ratified as an irrevocable court decree.'
      ],
      bn: [
        'বিচার শুরু হওয়ার আগেই পারিবারিক বিচারক মামলাটি আদালতের মধ্যস্থতা কেন্দ্রে প্রেরণের নির্দেশ দেবেন।',
        'বাইরের লোক বা আইনজীবীর উপস্থিতি ছাড়া সম্পূর্ণ গোপনীয় চেম্বারে অভিজ্ঞ মধ্যস্থতাকারীর সাথে বসুন।',
        'মধ্যস্থতাকারীরা উভয় পক্ষের বক্তব্য শুনে খোরপোশ, বাচ্চার ভবিষ্যৎ ও গয়না ফেরত সংক্রান্ত আপস করাবেন।',
        'আপস সম্পন্ন হলে মেমোরেন্ডাম অব সেটেলমেন্ট তৈরি হবে এবং আদালত তার ভিত্তিতে ডিক্রি জারি করবে।'
      ],
      hi: [
        'मुख्य ट्रायल से पहले पारिवारिक न्यायालय न्यायाधीश मामले को अदालत के मध्यस्थता केंद्र भेजेंगे।',
        'बिना किसी बाहरी व्यक्ति के बंद कमरे में प्रशिक्षित मध्यस्थ के समक्ष गोपनीय बातचीत में भाग लें।',
        'मध्यस्थ दोनों पक्षों की सहमति से गुजारा भत्ता, बच्चे से मिलना एवं जेवर वापसी का समाधान कराएंगे।',
        'सहमति बनने पर औपचारिक समझौता ज्ञापन तैयार होगा जिसे अदालत स्थायी डিক्री के रूप में मान्यता देगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-50-1',
        name: { en: 'Family Court Mediation Referral Order & Terms of Settlement', bn: 'আদালতের মধ্যস্থতা রেফারেল আদেশ ও আপস শর্তাবলী', hi: 'अदालती मध्यस्थता संदर्भ आदेश एवं समझौते की शर्तें' },
        issuing_authority: { en: 'Family Court Mediation Centre', bn: 'পারিবারিক আদালত মধ্যস্থতা সেল', hi: 'पारिवारिक न्यायालय मध्यस्थता केंद्र' },
        is_mandatory: true
      }
    ]
  }
];