import type { CivilSubCategory } from '../../../types/legal';

export const moneyPart2: CivilSubCategory[] = [
  {
    id: 'sub-money-26',
    productCategory: 'free-checklist',
    title: {
      en: 'Liability & Discharge of Personal Guarantors for Corporate Loans',
      bn: 'কোম্পানির ঋণে জামিনদার বা গ্যারান্টরের সুরক্ষা',
      hi: 'कंपनी ऋण में पर्सनल गारंटर की देनदारी एवं विधिक उन्मुक्ति'
    },
    relevant_act: 'Sec 128–141, Indian Contract Act, 1872 r/w Part III, IBC',
    summary: {
      en: 'Defending personal guarantors when banks initiate coercive recovery despite altering terms with principal borrower without notice.',
      bn: 'মূল ঋণগ্রহীতার সাথে চুক্তি বদল করলে গ্যারান্টর কীভাবে আইনিভাবে সমস্ত দায় থেকে মুক্ত হয় তার প্রতিরক্ষা।',
      hi: 'मुख्य कर्जदार से चुपके से शर्तें बदलने पर बैंक द्वारा गारंटर की निजी संपत्ति जब्त करने से बचाव।'
    },
    authority_forum: {
      en: 'NCLT / Civil Court',
      bn: 'এনসিএলটি / দেওয়ানি আদালত',
      hi: 'एनसीएलटी / सिविल न्यायालय'
    },
    forum_type: 'NCLT',
    is_complex: true,
    official_portal_url: 'https://nclt.gov.in/',
    statutory_timeframe: {
      en: '6 months to 1 year',
      bn: '৬ মাস থেকে ১ বছর',
      hi: '6 माह से 1 वर्ष'
    },
    search_keywords: {
      en: ['discharge of personal guarantor', 'section 133 contract act variance', 'personal insolvency ibc section 95'],
      bn: ['জামিনদারের দায়মুক্তি', 'গ্যারান্টর সুরক্ষা আইন', 'ধারা ১৩৩ চুক্তি আইন'],
      hi: ['गारंटर दायित्व मुक्ति', 'धारा 133 अनुबंध अधिनियम', 'पर्सनल गारंटर दिवालिया']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Examine loan modification history between bank and debtor to detect variance of contract terms.',
        'Cite Section 133 Contract Act: variance made without guarantor consent discharges guarantor.',
        'Reply to bank demand notice asserting statutory discharge and release of personal collateral.',
        'If bank invokes insolvency under Section 95 IBC, file objection before NCLT establishing discharge.'
      ],
      bn: [
        'ব্যাঙ্ক ও মূল কোম্পানির ফাইল ঘেঁটে বের করুন গ্যারান্টরের অজান্তে ঋণের শর্ত বদল হয়েছে কি না।',
        'চুক্তি আইনের ধারা ১৩৩ উল্লেখ করুন: জামিনদারের অনুমতি ছাড়া শর্ত বদলালে জামিনদার সম্পূর্ণ মুক্ত।',
        'ব্যাঙ্কের ডিমান্ড নোটিশের কড়া আইনি জবাব দিয়ে ব্যক্তিগত স্থাবর মর্টগেজ অবমুক্তির দাবি জানান।',
        'ব্যাঙ্ক ধারা ৯৫ আইবিসি দেউলিয়া প্রক্রিয়া শুরু করলে এনসিএলটি-তে শর্ত লঙ্ঘনের আপত্তি দিন।'
      ],
      hi: [
        'बैंक एवं मुख्य ऋणी के पत्राचार की जांच कर पता लगाएं कि क्या बिना बताए शर्तें बदली गईं।',
        'धारा 133 का हवाला दें: गारंटर की सहमति के बिना किया गया फेरबदल उसे दायित्वमुक्त करता है।',
        'बैंक के नोटिस का उत्तर देकर वैधानिक उन्मुक्ति एवं अपनी निजी संपत्ति को मुक्त करने की मांग करें।',
        'बैंक द्वारा धारा 95 आईबीसी में वाद करने पर एनसीएलटी में अनाधिकृत बदलाव का विरोध दर्ज कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-26-1',
        name: { en: 'Personal Guarantee Agreement & Proof of Unnotified Loan Variance', bn: 'ব্যক্তিগত গ্যারান্টি চুক্তি ও শর্ত বদলের প্রমাণ', hi: 'पर्सनल गारंटी अनुबंध एवं अनधिकृत शर्त बदलाव के साक्ष्य' },
        issuing_authority: { en: 'Lending Bank / Guarantor', bn: 'ব্যাঙ্ক / জামিনদার', hi: 'बैंक / गारंटर' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-27',
    productCategory: 'free-checklist',
    title: {
      en: 'Recovery of Friendly Loans Without Formal Written Contract',
      bn: 'বিশ্বাস করে মুখে ধার দেওয়া টাকা ব্যাঙ্ক রেকর্ডের ভিত্তিতে আদায়',
      hi: 'बिना लिखित समझौते के दिए गए दोस्ताना कर्ज की बैंक रिकॉर्ड से वसूली'
    },
    relevant_act: 'Sec 63, BSA, 2023 r/w Contract Act (Implied Contracts)',
    summary: {
      en: 'Recovering funds loaned to relatives without promissory notes, relying on electronic bank ledgers and digital acknowledgments.',
      bn: 'কোনো স্ট্যাম্প পেপার না থাকলেও ব্যাঙ্ক ট্রান্সফার ও হোয়াটসঅ্যাপ চ্যাটের ভিত্তিতে ধার দেওয়া টাকা ফেরত মামলা।',
      hi: 'कागजात न होने पर भी बैंक स्टेटमेंट एवं व्हाट्सएप चैट के डिजिटल साक्ष्यों से उधार दिया पैसा वसूलना।'
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
      en: '3-year statutory limitation from execution date',
      bn: 'হ্যান্ডনোটের তারিখ থেকে ৩ বছরের তামাদি সীমা',
      hi: 'विलेख की तारीख से 3 वर्ष की कानूनी मियाद'
    },
    search_keywords: {
      en: ['friendly loan recovery whatsapp', 'oral loan bank transfer proof', 'money suit without agreement'],
      bn: ['মুখে ধার দেওয়া টাকা আদায়', 'হোয়াটসঅ্যাপ চ্যাটে ধার প্রমাণ', 'মানি স্যুট'],
      hi: ['दोस्ताना कर्ज वसूली', 'बिना एग्रीमेंट उधारी वाद', 'व्हाट्सएप चैट कर्ज साक्ष्य']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Extract certified bank statements showing NEFT, IMPS, or UPI transfers with transaction IDs.',
        'Collate WhatsApp, SMS, or audio recordings where borrower acknowledges debt and promises return.',
        'Serve formal Advocate Legal Notice demanding repayment within 15 days, cementing default.',
        'File ordinary Money Suit before Civil Judge attaching bank records as evidence under Section 63 BSA.'
      ],
      bn: [
        'ব্যাঙ্ক স্টেটমেন্ট প্রিন্ট করুন যাতে ট্রানজ্যাকশন আইডিসহ ইউপিআই বা এনইএফটি ট্রান্সফার দেখা যায়।',
        'হোয়াটসঅ্যাপ মেসেজ ও অডিও রেকর্ড একত্র করুন যেখানে ঋণগ্রহীতা টাকা পাওয়ার কথা স্বীকার করেছে।',
        '১৫ দিনের সময় দিয়ে আইনজীবীর মাধ্যমে লিগ্যাল নোটিশ পাঠিয়ে ঋণ অস্বীকারের পথ বন্ধ করুন।',
        'ভারতীয় সাক্ষ্য আইনের ধারা ৬৩ মেনে ডিজিটাল প্রমাণসহ দেওয়ানি আদালতে মানি স্যুট দায়ের করুন।'
      ],
      hi: [
        'बैंक से प्रमाणित स्टेटमेंट लें जिसमें यूटीआई/एनईएफटी संदर्भ संख्या के साथ लेनदेन दर्ज हो।',
        'व्हाट्सएप चैट एवं कॉल रिकॉर्डिंग संकलित करें जिसमें ऋणी ने पैसा लौटाने का वादा किया हो।',
        'अधिवक्ता द्वारा 15 दिन में उधारी चुकाने का अंतिम विधिक नोटिस देकर बकाए को प्रमाणित करें।',
        'बीएसए 2023 की धारा 63 के तहत डिजिटल साक्ष्यों के साथ सिविल जज के पास वसूली वाद करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-27-1',
        name: { en: 'Bank Account Ledger & Certificate under Sec 63 BSA for Digital Chats', bn: 'ব্যাঙ্ক স্টেটমেন্ট ও সাইবার নালিশের রসিদ', hi: 'बैंक खाता विवरण एवं डिजिटल चैट हेतु धारा 63 बीएसए प्रमाणपत्र' },
        issuing_authority: { en: 'Bank / Complainant', bn: 'ব্যাঙ্ক / বাদী', hi: 'बैंक / वादी' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-28',
    productCategory: 'free-checklist',
    title: {
      en: 'Siphoning of Partnership Funds & Action for Accounts',
      bn: 'অংশীদারি কারবারের টাকা আত্মসাৎ ও হিসাব নিকাশের মামলা',
      hi: 'साझेदारी फर्म के धन की हेराफेरी एवं खातों की न्यायिक जांच का वाद'
    },
    relevant_act: 'Sec 48 & 69, Indian Partnership Act, 1932',
    summary: {
      en: 'Sued by honest partners to freeze firm accounts, oust fraudulent managing partners, and recover siphoned profits.',
      bn: 'ব্যবসায়ের গোপন মুনাফা এক পার্টনার নিজের অ্যাকাউন্টে সরিয়ে নিলে অ্যাকাউন্টস অডিট ও টাকা ফেরতের মামলা।',
      hi: 'पार्टनर द्वारा फर्म का पैसा अपने निजी खाते में डालने पर बैंक खाते सील कराकर पैसा वसूलना।'
    },
    authority_forum: {
      en: 'Civil Court / Commercial Court',
      bn: 'দেওয়ানি আদালত / বাণিজ্যিক আদালত',
      hi: 'वाणिज्यिक न्यायालय / सिविल न्यायालय'
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
      en: ['partnership fund siphoning', 'action for accounts partner', 'freeze partnership bank account'],
      bn: ['পার্টনারশিপ টাকা আত্মসাৎ', 'অংশীদারি হিসাবের মামলা', 'ফার্ম অ্যাকাউন্ট ফ্রিজ'],
      hi: ['पार्टनरशिप गबन केस', 'साझेदारी हिसाब वाद', 'फर्म खाता जब्ती']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Produce registered Partnership Deed and bank records revealing unauthorized transfers.',
        'Serve formal dissolution and rendering of accounts notice under Section 43 Partnership Act.',
        'File Suit for Dissolution of Partnership and Taking Accounts before Civil Judge (Senior Division).',
        'Move urgent application under Order XXXIX CPC for injunction freezing all firm bank operations.'
      ],
      bn: [
        'পার্টনারশিপ দলিল ও অডিট খাতা দেখিয়ে প্রমাণ করুন অসৎ পার্টনার ফার্মের টাকা বাইরে সরিয়েছে।',
        'ধারা ৪৩ অনুযায়ী পার্টনারশিপ অবসান ও সম্পূর্ণ হিসাব বুঝিয়ে দেওয়ার আনুষ্ঠানিক নোটিশ দিন।',
        'দেওয়ানি আদালতে অংশীদারি চুক্তি বাতিল ও হিসাব নিকাশের (Action for Accounts) মামলা করুন।',
        'অর্ডার ৩৯ সিপিসি অনুযায়ী ফার্মের সমস্ত ব্যাঙ্ক অ্যাকাউন্ট ফ্রিজ করে কোর্ট রিসিভার বসান।'
      ],
      hi: [
        'साझेदारी विलेख एवं बैंक स्टेटमेंट से अनधिकृत लेन-देन व गबन के सबूत जुटाएं।',
        'धारा 43 के तहत साझेदारी समाप्त करने एवं खातों का पूरा ब्योरा देने का विधिक नोटिस दें।',
        'सिविल जज के समक्ष साझेदारी विघटन एवं खातों की जांच (Taking of Accounts) का वाद करें।',
        'आदेश 39 सीपीसी के तहत फर्म के सभी बैंक खातों के संचालन पर तुरंत अदालती रोक लगवाएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-28-1',
        name: { en: 'Partnership Agreement & Forensic Audit Statement of Transfers', bn: 'পার্টনারশিপ চুক্তি ও ফরেনসিক অডিট রিপোর্ট', hi: 'साझेदारी अनुबंध एवं अनधिकृत लेन-देन की फॉरेंसिक ऑडिट रिपोर्ट' },
        issuing_authority: { en: 'Registrar of Firms / Chartered Accountant', bn: 'ফার্ম রেজিস্টার / সিএ', hi: 'फर्म निबंधक / चार्टर्ड एकाउंटेंट' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-29',
    productCategory: 'free-checklist',
    title: {
      en: 'Refund of Advance Paid to Unregistered Plot Developers',
      bn: 'ভুয়ো প্লট ডেভেলপারকে দেওয়া অগ্রিম বুকিং টাকা ফেরত আদায়',
      hi: 'रद्द सौदे की बयाना (टोकन) राशि ब्याज सहित वापसी का वाद'
    },
    relevant_act: 'Sec 65, Indian Contract Act r/w Consumer Protection Act',
    summary: {
      en: 'Recovering token money with interest from colonizers selling unapproved panchayat farmland without layout clearance.',
      bn: 'অনুমোদনহীন প্লটিং বা পঞ্চায়েত জমিতে প্লট দেওয়ার মিথ্যা প্রতিশ্রুতি দিয়ে টাকা নিলে সুদে-আসলে রিফান্ড।',
      hi: 'बिना ले-आउट पास कृषि भूमि पर प्लॉट काटकर बेचने वाले भू-माफिया से अग्रिम रकम वापस पाना।'
    },
    authority_forum: {
      en: 'District Consumer Commission / Civil Court',
      bn: 'জেলা ক্রেতা সুরক্ষা কমিশন / দেওয়ানি আদালত',
      hi: 'जिला उपभोक्ता आयोग / सिविल न्यायालय'
    },
    forum_type: 'Consumer_DCDRC',
    is_complex: false,
    official_portal_url: 'https://e-jagriti.gov.in/',
    statutory_timeframe: {
      en: '60 to 90 working days',
      bn: '৬০ থেকে ৯০ কার্যদিবস',
      hi: '60 से 90 कार्यदिवस'
    },
    search_keywords: {
      en: ['refund token money land deal', 'section 65 contract act', 'advance recovery failed deal'],
      bn: ['বায়নার টাকা ফেরত মামলা', 'টোকেন মানি রিফান্ড', 'চুক্তিভঙ্গ ক্ষতিপূরণ'],
      hi: ['बयाना वापसी मुकदमा', 'धारा 65 अनुबंध कानून', 'टोकन मनी रिफंड']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Verify from municipal planning authority and Banglarbhumi that plot project lacks layout nod.',
        'Issue legal notice rescinding booking on grounds of misrepresentation and demanding full refund.',
        'File complaint on e-Jagriti portal alleging unfair trade practices and claiming 12% interest.',
        'Obtain recovery certificate executed through District Collector via Bengal PDR Act.'
      ],
      bn: [
        'পঞ্চায়েত ও বাংলারভূমি থেকে তথ্য নিন যে প্রজেক্টটির কোনো সরকারি প্ল্যান অনুমোদন বা কনভার্সন নেই।',
        'মিথ্যা তথ্যের কারণে চুক্তি বাতিল করে সম্পূর্ণ টাকা ফেরতের দাবিতে আইনজীবীর মাধ্যমে নোটিশ দিন।',
        'ই-জাগৃতি পোর্টালে প্রতারণামূলক বাণিজ্যের অভিযোগ তুলে ১২% সুদে টাকা ফেরতের মামলা করুন।',
        'ডিক্রি নিয়ে জেলাশাসকের মাধ্যমে পিডিআর অ্যাক্টে বিল্ডারের সম্পত্তি ক্রোক করে টাকা আদায় করুন।'
      ],
      hi: [
        'पंचायत एवं बांगलारभूमि से सिद्ध करें कि प्लॉटिंग प्रोजेक्ट का कोई वैधानिक नक्शा पास नहीं है।',
        'धोखाधड़ी के आधार पर बुकिंग निरस्त कर 100% बयाना राशि लौटाने का विधिक नोटिस दें।',
        'ई-जागृति पर वाद दायर कर 12% ब्याज सहित पूरी राशि की मांग करें।',
        'जिला कलेक्टर द्वारा बंगाल पीडीआर एक्ट में वसूली वारंट जारी कराकर पैसा वसूलें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-29-1',
        name: { en: 'Plot Booking Receipt & RTI Confirmation of Unapproved Layout', bn: 'প্লট বুকিং রসিদ ও অনুমোদনের অভাবের আরটিআই তথ্য', hi: 'प्लॉट बुकिंग रसीद एवं अनाधिकृत ले-आउट की आरटीआई रिपोर्ट' },
        issuing_authority: { en: 'Plot Developer / Panchayat BDO', bn: 'ডেভেলপার / বিডিও', hi: 'कॉलोनाइजर / बीडीओ' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-30',
    productCategory: 'free-checklist',
    title: {
      en: 'Challenge to Compound & Usurious Interest by Banks',
      bn: 'ব্যাঙ্ক কর্তৃক চক্রবৃদ্ধি সুদের জুলুমের বিরুদ্ধে প্রতিকার',
      hi: 'बैंकों द्वारा अत्यधिक चक्रवृद्धि एवं दंडात्मक ब्याज वसूली पर रोक'
    },
    relevant_act: 'Usurious Loans Act, 1918 r/w RBI Fair Practices Code',
    summary: {
      en: 'Legally scaling down penal and compound interest rates imposed arbitrarily by financial institutions on distressed borrowers.',
      bn: 'লকডাউন বা দুর্ঘটনার সময় ব্যাঙ্ক কর্তৃক চড়া চক্রবৃদ্ধি ও পেনাল সুদ চাপিয়ে ঋণ দ্বিগুণ করার বিরুদ্ধে আইনি সুরক্ষা।',
      hi: 'संकट में फंसे कर्जदारों पर बैंकों द्वारा मनमाना चक्रवृद्धि एवं दंडात्मक ब्याज थोपने के विरुद्ध राहत।'
    },
    authority_forum: {
      en: 'Civil Court / Banking Ombudsman',
      bn: 'দেওয়ানি আদালত / ব্যাঙ্কিং ন্যায়পাল',
      hi: 'सिविल न्यायालय / बैंकिंग लोकपाल'
    },
    forum_type: 'Competent_Authority',
    is_complex: false,
    official_portal_url: 'https://cms.rbi.org.in/',
    statutory_timeframe: {
      en: '30 to 60 working days',
      bn: '৩০ থেকে ৬০ কার্যদিবস',
      hi: '30 से 60 कार्यदिवस'
    },
    search_keywords: {
      en: ['usurious loans act bank interest', 'challenge penal interest rbi', 'compound interest scaling down'],
      bn: ['চক্রবৃদ্ধি সুদ মকুব', 'পেনাল সুদ চ্যালেঞ্জ', 'ইউজুরিয়াস লোনস অ্যাক্ট'],
      hi: ['चक्रवृद्धि ब्याज छूट', 'दंडात्मक ब्याज रोक आरबीआई', 'अत्यधिक ब्याज अदालत']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Conduct audit of loan account statement to isolate capitalization of penal interest.',
        'Submit formal representation to bank citing RBI directives barring charging penal interest on penal interest.',
        'File complaint before RBI Integrated Ombudsman for rectification of loan ledger.',
        'If bank initiates court recovery, plead Section 3 Usurious Loans Act empowering judges to reopen contracts.'
      ],
      bn: [
        'লোন স্টেটমেন্ট অডিট করিয়ে চিহ্নিত করুন কীভাবে সুদের ওপর সুদ চাপিয়ে দেনা বাড়ানো হয়েছে।',
        'পেনাল সুদের ওপর চক্রবৃদ্ধি সুদ নিষিদ্ধ জানিয়ে আরবিআই নির্দেশিকা উদ্ধৃত করে ব্যাঙ্কে চিঠি দিন।',
        'ব্যাঙ্কিং ন্যায়পালে অভিযোগ দাখিল করে ঋণ খাতা থেকে বেআইনি সমস্ত পেনাল চার্জ মুছে ফেলার রায় নিন।',
        'আদালতে মামলা হলে ১৯১৮ সালের ইউজুরিয়াস লোনস আইনের ধারা ৩ তুলে ধরে সুদ কমানোর আর্জি জানান।'
      ],
      hi: [
        'लोन खाते का सीए ऑडिट कराकर अवैध रूप से जोड़े गए दंडात्मक ब्याजों को अलग करें।',
        'आरबीआई के दिशा-निर्देशों का हवाला देकर बैंक को पेनल्टी पर ब्याज न लगाने का पत्र दें।',
        'आरबीआई एकीकृत लोकपाल में शिकायत कर लोन लेजर से अवैध प्रभारों को हटवाएं।',
        'अदालत में धारा 3 उसूरियस लोन्स एक्ट का सहारा लेकर जज से अत्यधिक ब्याज कम कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-30-1',
        name: { en: 'Loan Account Statement Highlighting Capitalized Penal Charges', bn: 'চক্রবৃদ্ধি সুদের হিসাবযুক্ত লোন স্টেটমেন্ট', hi: 'दंडात्मक ब्याज दर्शाने वाला बैंक लोन खाता विवरण' },
        issuing_authority: { en: 'Lending Bank / Chartered Accountant', bn: 'ব্যাঙ্ক / সিএ', hi: 'बैंक / सीए' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-31',
    productCategory: 'free-checklist',
    title: {
      en: 'Appeal Before Debts Recovery Appellate Tribunal (DRAT)',
      bn: 'ডিআরটি আদেশের বিরুদ্ধে ডিআরএটি-তে আপিল ও আমানত ছাড়',
      hi: 'ऋण वसूली अपीलीय अधिकरण (DRAT) में अपील एवं प्री-डिपॉजिट छूट'
    },
    relevant_act: 'Sec 18, SARFAESI Act, 2002',
    summary: {
      en: 'Overturning adverse DRT dismissal orders and securing judicial waivers on mandatory 50% pre-deposit requirements.',
      bn: 'ডিআরটি ট্রাইব্যুনালের রায়ের বিরুদ্ধে কলকাতার ডিআরএটি-তে আপিল এবং ৫০% আগাম জমার শর্তে বিশেষ ছাড় লাভ।',
      hi: 'डीआरटी के आदेश के खिलाफ डीआरएटी में अपील करना एवं अनिवार्य 50% जमा राशि में वैधानिक छूट पाना।'
    },
    authority_forum: {
      en: 'Debts Recovery Appellate Tribunal (DRAT, Kolkata)',
      bn: 'ঋণ পুনরুদ্ধার আপিল ট্রাইব্যুনাল (DRAT কলকাতা)',
      hi: 'ऋण वसूली अधिकरण (DRT कोलकाता)'
    },
    forum_type: 'DRAT',
    is_complex: true,
    official_portal_url: 'https://drt.etribunals.gov.in/',
    statutory_timeframe: {
      en: 'Mandatory appeal within 30 days of DRT order',
      bn: 'ডিআরটি আদেশের ৩০ দিনের মধ্যে আপিল',
      hi: 'डीआरटी आदेश के 30 दिन में अपील'
    },
    search_keywords: {
      en: ['drat kolkata appeal', 'section 18 sarfaesi pre-deposit waiver', 'appeal against drt order'],
      bn: ['ডিআরএটি কলকাতা আপিল', 'সারফাসি ধারা ১৮', 'প্রি-ডিপোজিট ছাড়'],
      hi: ['डीआरएटी अपील कोलकाता', 'धारा 18 सरफेसी जमा छूट', 'डीआरटी आदेश चुनौती']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain certified copies of DRT order rejecting stay against bank auction.',
        'Draft appeal memo accompanied by Interim Application for Waiver of Pre-Deposit citing insolvency.',
        'File statutory appeal before Registrar, DRAT Kolkata (serving Eastern India).',
        'Argue waiver petition; Chairperson has statutory discretion to reduce pre-deposit down to 25%.'
      ],
      bn: [
        'ব্যাঙ্ক নিলামের বিরুদ্ধে স্থগিতাদেশ নাকচ করা ডিআরটি আদেশের সার্টিফাইড কপি সংগ্রহ করুন।',
        'আর্থিক সংকটের নথি দেখিয়ে ৫০% প্রি-ডিপোজিট মকুবের আবেদনসহ আপিল মেমো প্রস্তুত করুন।',
        'কলকাতার ডিআরএটি রেজিস্ট্রারের কাছে ৩০ দিনের মধ্যে আনুষ্ঠানিক আপিল দায়ের করুন।',
        'শুনানিতে চেয়ারপার্সন সন্তুষ্ট হলে বাধ্যতামূলক ৫০% জামানত কমিয়ে সর্বনিম্ন ২৫% করার নির্দেশ দেবেন।'
      ],
      hi: [
        'नीलामी पर रोक खारिज करने वाले डीआरटी के आदेश की प्रमाणित प्रतिलिपि लें।',
        'कंगाली का प्रमाण देकर 50% अनिवार्य अग्रिम जमा में छूट का अंतरिम आवेदन तैयार करें।',
        '30 दिनों के भीतर डीआरएटी कोलकाता के रजिस्ट्रार के समक्ष अपील दाखिल करें।',
        'अध्यक्ष महोदय संतुष्ट होकर वैधानिक जमा राशि को 50% से घटाकर 25% करने का आदेश देंगे।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-31-1',
        name: { en: 'Certified DRT Dismissal Order & Pre-Deposit Waiver Petition', bn: 'ডিআরটি খারিজ আদেশ ও আমানত মকুবের আবেদন', hi: 'प्रमाणित डीआरटी आदेश एवं अग्रिम जमा छूट याचिका' },
        issuing_authority: { en: 'Debts Recovery Tribunal (DRT Kolkata)', bn: 'ডিআরটি ট্রাইব্যুনাল', hi: 'डीआरटी कोलकाता' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-32',
    productCategory: 'lawyer-only',
    title: {
      en: 'Injunction Against Encashment of Bank Guarantees',
      bn: 'প্রতারণামূলক ব্যাঙ্ক গ্যারান্টি ভাঙানোর বিরুদ্ধে আদালতের স্থগিতাদেশ',
      hi: 'बैंक गारंटी के धोखाधड़ीपूर्ण भुनाने पर अदालत से आपात स्थगनादेश'
    },
    relevant_act: 'Specific Relief Act, 1963 r/w Commercial Contract Precedents',
    summary: {
      en: 'Securing emergency court stays restraining project employers from invoking unconditional bank guarantees through fraud.',
      bn: 'প্রতারণা করে ঠিকাদারের ব্যাঙ্ক গ্যারান্টি ভাঙানোর চেষ্টা করলে দেওয়ানি আদালত থেকে তাৎক্ষণিক স্থগিতাদেশ লাভ।',
      hi: 'धोखाधड़ी सिद्ध कर ठेकेदार द्वारा बैंक गारंटी के अवैध आहरण पर अदालत से तत्काल रोक लगवाना।'
    },
    authority_forum: {
      en: 'Commercial Court',
      bn: 'বাণিজ্যিক আদালত',
      hi: 'वाणिज्यिक न्यायालय'
    },
    forum_type: 'Commercial_Court',
    is_complex: true,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: 'Urgent (Within 24 to 48 hours)',
      bn: 'জরুরি (২৪ থেকে ৪৮ ঘণ্টার মধ্যে)',
      hi: 'अति आवश्यक (24 से 48 घंटे में)'
    },
    search_keywords: {
      en: ['stay encashment bank guarantee', 'irretrievable injustice bank guarantee', 'fraud invocation bg'],
      bn: ['ব্যাঙ্ক গ্যারান্টি স্থগিতাদেশ', 'বিজি ভাঙানো বন্ধ', 'বাণিজ্যিক আদালতের ইনজাংশন'],
      hi: ['बैंक गारंटी भुनाने पर रोक', 'बीजी स्थगनादेश', 'धोखाधड़ी बैंक गारंटी']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Establish strict legal grounds: "egregious fraud known to bank" or "irretrievable injustice".',
        'Serve immediate written intimation to issuing bank putting them on notice of fraudulent invocation.',
        'Move emergency Section 9 arbitration petition or commercial injunction suit before Commercial Judge.',
        'Obtain injunction order commanding bank to withhold encashment pending final arbitration.'
      ],
      bn: [
        'আইনি ভিত্তি প্রমাণ করুন: প্রমাণিত জালিয়াতি অথবা অপূরণীয় চরম অন্যায় সংঘটিত হচ্ছে।',
        'ব্যাঙ্ক গ্যারান্টি প্রদানকারী ব্যাঙ্কের শাখাকে আইনি চিঠি দিয়ে প্রতারণার নোটিশ দিন।',
        'বাণিজ্যিক আদালতের বিচারকের এজলাসে আর্বিট্রেশন অ্যাক্টের ধারা ৯ অনুযায়ী জরুরি স্থগিতাদেশ চান।',
        'আদালতের নির্দেশে ব্যাঙ্ক বিজি ভাঙিয়ে টাকা হস্তান্তর স্থগিত রেখে চূড়ান্ত মীমাংসা পর্যন্ত রাখবে।'
      ],
      hi: [
        'विधिक आधार सिद्ध करें: "बैंक को ज्ञात स्पष्ट धोखाधड़ी" अथवा "अपूरणीय भारी क्षति"।',
        'गारंटी जारी करने वाली बैंक शाखा को लिखित नोटिस देकर अवैध भुनाने की सूचना दें।',
        'वाणिज्यिक न्यायालय में मध्यस्थता अधिनियम की धारा 9 के तहत आपात स्थगन याचिका लगाएं।',
        'अदालत बैंक को अंतिम मध्यस्थता तक गारंटी की राशि रिलीज न करने का आदेश जारी करेगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-32-1',
        name: { en: 'Bank Guarantee Copy & Employer Fraudulent Invocation Letter', bn: 'ব্যাঙ্ক গ্যারান্টি দলিল ও ভাঙানোর নোটিশ', hi: 'बैंक गारंटी प्रति एवं अवैध आहरण मांग पत्र' },
        issuing_authority: { en: 'Issuing Bank / Employer', bn: 'ব্যাঙ্ক / প্রকল্প কর্তৃপক্ষ', hi: 'जारीकर्ता बैंक / नियोक्ता' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-33',
    productCategory: 'free-checklist',
    title: {
      en: 'Recovery of Debts from Deceased Borrower’s Estate',
      bn: 'মৃত দেনাদারের রেখে যাওয়া সম্পত্তি থেকে পাওনা টাকা উদ্ধার',
      hi: 'मृतक कर्जदार की छोड़ी गई संपत्ति से बकाया ऋण की कानूनी वसूली'
    },
    relevant_act: 'Sec 52, Code of Civil Procedure, 1908',
    summary: {
      en: 'Executing money decrees against surviving legal heirs, strictly limited to the value of ancestral property inherited.',
      bn: 'দেনাদার মারা গেলে তার ওয়ারিশরা যে পরিমাণ পৈতৃক সম্পত্তি পেয়েছে ঠিক তত টাকার সম্পত্তি থেকে পাওনা আদায়।',
      hi: 'मृतक के वारिसों से कर्ज वसूली; वारिसों की देनदारी केवल पिता से मिली संपत्ति के मूल्य तक सीमित।'
    },
    authority_forum: {
      en: 'Civil Executing Court',
      bn: 'দেওয়ানি এক্সিকিউটিং আদালত',
      hi: 'सिविल निष्पादन न्यायालय'
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
      en: ['section 52 cpc recovery deceased', 'debt from legal heirs', 'inherited property debt liability'],
      bn: ['মৃত ব্যক্তির দেনা আদায়', 'ওয়ারিশদের থেকে পাওনা উদ্ধার', 'ধারা ৫২ সিপিসি'],
      hi: ['मृतक से कर्ज वसूली', 'धारा 52 सीपीसी वारिस देनदारी', 'विरासत से कर्ज चुकाना']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'File an application under Section 50 CPC to bring surviving legal heirs onto the execution record.',
        'File asset disclosure petition requiring heirs to declare all properties inherited from deceased.',
        'Issue attachment orders strictly against inherited estate properties under Section 52 CPC.',
        'Auction attached assets; legal heirs bear zero personal liability beyond value of inherited assets.'
      ],
      bn: [
        'ধারা ৫০ সিপিসি অনুযায়ী মৃত ব্যক্তির জীবিত ওয়ারিশদের মামলায় পক্ষভুক্ত করার আবেদন করুন।',
        'ওয়ারিশরা মৃত ব্যক্তির কী কী সম্পত্তি পেয়েছে তার সম্পূর্ণ তালিকা আদালতে পেশের নির্দেশ চান।',
        'ধারা ৫২ সিপিসি অনুযায়ী কেবল উত্তরাধিকার সূত্রে পাওয়া সম্পত্তির ওপর ক্রোক পরোয়ানা জারি করান।',
        'আদালত সম্পত্তি নিলাম করে টাকা মেটাবে; ওয়ারিশদের নিজস্ব ব্যক্তিগত সম্পত্তি সুরক্ষিত থাকবে।'
      ],
      hi: [
        'धारा 50 सीपीसी में मृतक के कानूनी वारिसों को निष्पादन वाद में पक्षकार बनाने की अर्जी दें।',
        'अदालत से आदेश कराएं कि वारिस पिता से प्राप्त समस्त संपत्तियों का शपथ पत्र दें।',
        'धारा 52 सीपीसी के तहत केवल विरासत में मिली संपत्तियों पर ही अदालती कुर्की जारी कराएं।',
        'अदालत संपत्ति नीलाम कर कर्ज चुकाएगी; वारिसों की निजी कमाई से कोई जब्ती नहीं हो सकती।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-33-1',
        name: { en: 'Certified Money Decree & Schedule of Inherited Properties of Deceased', bn: 'টাকার ডিক্রি ও মৃত ব্যক্তির রেখে যাওয়া সম্পত্তির তালিকা', hi: 'अंतिम दीवानी निर्णय एवं धन डिक्री की प्रमाणित प्रति' },
        issuing_authority: { en: 'Civil Court Record Room', bn: 'দেওয়ানি আদালত রেকর্ড রুম', hi: 'सिविल कोर्ट अभिलेखागार' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-34',
    productCategory: 'lawyer-only',
    title: {
      en: 'Attachment of Property Before Judgment to Stop Asset Stripping',
      bn: 'দেনাদারের সম্পত্তি গোপনে বিক্রি আটকাতে ক্রোক',
      hi: 'मुकदमे के दौरान देनदार द्वारा संपत्ति बेचने पर रोक (फैसले से पूर्व कुर्की)'
    },
    relevant_act: 'Order XXXVIII Rules 5–12, Code of Civil Procedure, 1908',
    summary: {
      en: 'Restraining defendants from transferring or liquidating their properties while a civil recovery suit is actively pending.',
      bn: 'মামলা চলার সময় দেনাদার জমি বা বাড়ি বিক্রি করে পালিয়ে যাওয়ার চেষ্টা করলে আগেই সম্পত্তি ক্রোকের আদেশ।',
      hi: 'पैसा वसूली का केस चलते समय देनदार द्वारा जमीन या मकान बेचने की कोशिश पर अदालत से पूर्व कुर्की।'
    },
    authority_forum: {
      en: 'Civil Trial Court hearing Money Suit',
      bn: 'দেওয়ানি বিচারক আদালত',
      hi: 'सिविल विचारण न्यायालय'
    },
    forum_type: 'Civil_Court',
    is_complex: false,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: 'Urgent (Interim order in 7 to 15 days)',
      bn: 'জরুরি (৭ থেকে ১৫ দিনে অন্তর্বর্তী আদেশ)',
      hi: 'अति आवश्यक (7 से 15 दिन में आदेश)'
    },
    search_keywords: {
      en: ['attachment before judgment cpc', 'order 38 rule 5 cpc', 'stop debtor selling land during suit'],
      bn: ['রায় ঘোষণার আগে ক্রোক', 'অর্ডার ৩৮ রুল ৫', 'সম্পত্তি বিক্রি আটকানো'],
      hi: ['फैसले से पूर्व कुर्की', 'आदेश 38 नियम 5', 'मुकदमे में जमीन बिक्री रोक']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Produce credible evidence (affidavits, broker ads) proving defendant is attempting to liquidate assets.',
        'File urgent petition under Order XXXVIII Rule 5 CPC directing defendant to furnish security.',
        'Court issues conditional attachment notice calling upon defendant to deposit security in 7 days.',
        'If defendant defaults, court attaches real estate, communicating freeze directly to Sub-Registrar.'
      ],
      bn: [
        'দালালদের নোটিশ বা বিজ্ঞাপনের প্রমাণ দিয়ে দেখান যে দেনাদার সম্পত্তি গোপনে বিক্রির চেষ্টা করছে।',
        'অর্ডার ৩৮ রুল ৫ সিপিসি অনুযায়ী দেনাদারকে আদালতে সমপরিমাণ জামানত জমার জরুরি আবেদন দিন।',
        'আদালত ৭ দিনের মধ্যে জামানত জমা দেওয়ার শর্তসাপেক্ষে অন্তর্বর্তী ক্রোকের নোটিশ পাঠাবে।',
        'জামানত না দিলে আদালত দেনাদারের জমি ক্রোক করে সাব-রেজিস্ট্রারকে রেজিস্ট্রি বন্ধের নির্দেশ দেবে।'
      ],
      hi: [
        'सबूत दें कि प्रतिवादी मुकदमा हारने के डर से अपनी संपत्तियों को बेचने का प्रयास कर रहा है।',
        'आदेश 38 नियम 5 सीपीसी में प्रतिवादी से समतुल्य जमानत जमा कराने की याचिका दाखिल करें।',
        'अदालत 7 दिन में जमानत राशि जमा न करने पर सशर्त कुर्की का नोटिस जारी करेगी।',
        'विफल रहने पर अदालत जमीन कुर्क कर उप-पंजीयक को रजिस्ट्री लॉक करने का आदेश देगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-34-1',
        name: { en: 'Affidavit Proving Intent to Defraud Creditors & Property Dag Details', bn: 'প্রতারণার প্রমাণের হলফনামা ও জমির দাগ খতিয়ান', hi: 'धोखाधड़ी के इरादे का शपथ पत्र एवं संपत्ति का खसरा विवरण' },
        issuing_authority: { en: 'Plaintiff / Notary Public', bn: 'বাদী / নোটারি', hi: 'वादी / नोटरी' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-35',
    productCategory: 'paid',
    title: {
      en: 'Cheque Bounce Defense: Cheque Given as Security / Stolen',
      bn: 'সিকিউরিটি চেক ও চুরি যাওয়া চেকের অপব্যবহারের প্রতিরোধ',
      hi: 'सुरक्षा (सिक्योरिटी) चेक एवं चोरी हुए चेक के दुरुपयोग पर कानूनी बचाव'
    },
    relevant_act: 'Sec 138 & 139, Negotiable Instruments Act, 1881',
    summary: {
      en: 'Rebutting the statutory presumption of debt by proving the bounced cheque was an unreturned blank security leaf.',
      bn: 'ঋণ পরিশোধ হয়ে গেলেও ফেরত না দেওয়া ব্ল্যাঙ্ক সিকিউরিটি চেকের অপব্যবহার আদালতে প্রমাণ করে খালাস লাভ।',
      hi: 'कर्ज चुक जाने पर भी वापस न किए गए खाली सिक्योरिटी चेक के दुरुपयोग को अदालत में साबित कर बरी होना।'
    },
    authority_forum: {
      en: 'Trial Magistrate Court',
      bn: 'বিচারক ম্যাজিস্ট্রেট আদালত',
      hi: 'विचारण न्यायिक दंडाधिकारी न्यायालय'
    },
    forum_type: 'Magistrate_Court',
    is_complex: false,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: 'Raised in response to notice and cross-examination',
      bn: 'নোটিশের জবাবে ও জেরার সময় উত্থাপন',
      hi: 'नोटिस के जवाब एवं जिरह के दौरान बचाव'
    },
    search_keywords: {
      en: ['security cheque defense 138', 'dashrathbhai trikambhai supreme court', 'blank signed cheque misuse'],
      bn: ['সিকিউরিটি চেক মামলা প্রতিরোধ', 'ব্ল্যাঙ্ক চেক অপব্যবহার', 'চেক বাউন্স খালাস'],
      hi: ['सिक्योरिटी चेक बचाव', 'खाली चेक का दुरुपयोग', 'दशरथभाई फैसला चेक बाउंस']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Reply to 30-day notice immediately stating cheque was given as security without legally enforceable debt.',
        'Produce commercial contract explicitly mentioning serial numbers of cheques deposited as security.',
        'Cross-examine complainant to expose lack of consideration or that underlying debt was already paid.',
        'Court acquits accused, holding statutory presumption under Section 139 stands rebutted.'
      ],
      bn: [
        '৩০ দিনের নোটিশের লিখিত জবাবে জানান চেকটি জামানত হিসেবে ছিল এবং কোনো বকেয়া দেনা নেই।',
        'মূল ব্যবসায়িক চুক্তিপত্র পেশ করুন যেখানে স্পষ্ট লেখা আছে চেকটি সিকিউরিটি হিসেবে জমা রাখা হয়েছিল।',
        'অভিযোগকারীকে জেরা করে প্রমাণ করুন কোনো পণ্য সরবরাহ হয়নি অথবা সমস্ত দেনা আগেই মেটানো হয়েছে।',
        'আদালত ধারা ১৩৯-এর আইনি দায় খণ্ডন হয়েছে বলে গণ্য করে আসামিকে সসম্মানে বেকসুর খালাস দেবে।'
      ],
      hi: [
        '30 दिनों के नोटिस का जवाब देकर बताएं कि चेक केवल सिक्योरिटी के तौर पर था, कोई कानूनी कर्ज नहीं था।',
        'मूल व्यापारिक अनुबंध पेश करें जिसमें सिक्योरिटी चेक के नंबरों का स्पष्ट उल्लेख हो।',
        'वादी से जिरह कर साबित करें कि माल नहीं भेजा गया था या कर्ज पहले ही बैंक से चुकता था।',
        'अदालत धारा 139 के विधिक अनुमान को खंडित मानकर आरोपी को ससम्मान बरी करेगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-35-1',
        name: { en: 'Original Contract Mentioning Cheque Serial No as Security', bn: 'সিকিউরিটি চেকের নম্বর উল্লেখিত মূল চুক্তিপত্র', hi: 'सिक्योरिटी चेक नंबर दर्ज मूल अनुबंध पत्र' },
        issuing_authority: { en: 'Borrower / Creditor', bn: 'ব্যবসায়িক পক্ষবৃন্দ', hi: 'व्यापारिक पक्षकार' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-36',
    productCategory: 'paid',
    title: {
      en: 'High Court Quashing of Malicious Cheque Cases',
      bn: 'হাইকোর্টে ভিত্তিহীন চেক বাউন্স মামলা বাতিল — Sec 528 BNSS',
      hi: 'हाईकोर्ट में झूठे चेक बाउंस केस को रद्द (Quash) कराना — धारा 528 BNSS'
    },
    relevant_act: 'Sec 528, Bharatiya Nagarik Suraksha Sanhita, 2023',
    summary: {
      en: 'Quashing fabricated Section 138 criminal complaints filed outside statutory limitation or without serving legal notice.',
      bn: 'তামাদি পেরিয়ে যাওয়ার পর দায়ের করা বা নোটিশ জারি না করে হয়রানিমূলক চেক বাউন্স মামলা হাইকোর্টে খারিজ।',
      hi: 'बिना कानूनी नोटिस या समय सीमा बीतने के बाद दर्ज कराए गए दुर्भावनापूर्ण चेक बाउंस केस को रद्द कराना।'
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
      en: '2 to 4 months',
      bn: '২ থেকে ৪ মাস',
      hi: '2 से 4 माह'
    },
    search_keywords: {
      en: ['quash 138 ni act high court', 'section 528 bnss cheque quashing', 'cheque bounce case limitation delay'],
      bn: ['চেক মামলা খারিজ হাইকোর্ট', 'ধারা ৫২৮ বিএনএসএস', 'মিথ্যা চেক বাউন্স বাতিল'],
      hi: ['चेक बाउंस केस रद्द', 'धारा 528 बीएनएसएस', 'हाईकोर्ट चेक क्वाशिंग']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Examine complaint petition for jurisdictional defects: missing postal receipts or time-barred filing.',
        'File Criminal Revision / Quashing Petition under Section 528 BNSS before High Court Single Bench.',
        'Move application for stay of trial court proceedings and exemption from personal physical appearance.',
        'High Court quashes complaint, holding continuation constitutes an abuse of judicial process.'
      ],
      bn: [
        'অভিযোগপত্র খতিয়ে দেখে সময় পেরিয়ে মামলা দায়ের বা নোটিশ না পাওয়ার মতো আইনি ত্রুটি খুঁজুন।',
        'কলকাতা হাইকোর্টের একক বেঞ্চে ধারা ৫২৮ বিএনএসএস (পূর্বতন ৪৮২) অনুযায়ী মামলা বাতিলের আবেদন করুন।',
        'নিম্ন আদালতের শুনানির ওপর স্থগিতাদেশ এবং সশরীরে হাজিরার হাত থেকে অব্যাহতির আদেশ নিন।',
        'আইনি প্রক্রিয়ার অপব্যবহার হিসেবে গণ্য করে হাইকোর্ট নিম্ন আদালতের নালিশি মামলাটি সম্পূর্ণ খারিজ করবে।'
      ],
      hi: [
        'परिवाद की जांच करें कि क्या नोटिस में देरी थी अथवा मियाद बीतने के बाद केस दाखिल हुआ।',
        'धारा 528 बीएनएसएस के तहत उच्च न्यायालय में केस निरस्तीकरण (Quashing) याचिका दाखिल करें।',
        'निचली अदालत की कार्यवाही पर रोक लगाने एवं व्यक्तिगत उपस्थिति से छूट का आदेश प्राप्त करें।',
        'अदालती प्रक्रिया का दुरुपयोग मानते हुए उच्च न्यायालय दुर्भावनापूर्ण चेक केस को रद्द करेगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-36-1',
        name: { en: 'Certified Copy of Magistrate Complaint Petition & Summons Order', bn: 'নালিশি আরজি ও সমনের সার্টিফাইড কপি', hi: 'मजिस्ट्रेट कोर्ट परिवाद एवं समन आदेश प्रति' },
        issuing_authority: { en: 'Magistrate Court Record Room', bn: 'ম্যাজিস্ট্রেট আদালত', hi: 'न्यायिक मजिस्ट्रेट कोर्ट' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-37',
    productCategory: 'free-checklist',
    title: {
      en: 'Education Loan Recovery & One-Time Settlement (OTS)',
      bn: 'স্টুডেন্ট এডুকেশন লোন রিকভারি ও ওটিএস সমঝোতা',
      hi: 'शिक्षा ऋण (एजुकेशन लोन) वसूली एवं लोक अदालत एकमुश्त समझौता (OTS)'
    },
    relevant_act: 'IBA Model Educational Loan Scheme & Legal Services Authorities Act',
    summary: {
      en: 'Negotiating complete waiver of compound and penal interest for unemployed student borrowers through Lok Adalat awards.',
      bn: 'চাকরি না পাওয়া ছাত্র-ছাত্রীদের এডুকেশন লোনের চড়া সুদ মকুব করিয়ে লোক আদালতে আসল টাকার মীমাংসা।',
      hi: 'बेरोजगार छात्रों के एजुकेशन लोन पर पूरा ब्याज एवं पेनल्टी माफ कराकर मूलधन में एकमुश्त निपटारा।'
    },
    authority_forum: {
      en: 'National Lok Adalat (DLSA / High Court)',
      bn: 'জাতীয় লোক আদালত (DLSA / হাইকোর্ট)',
      hi: 'राष्ट्रीय लोक अदालत (DLSA / हाईकोर्ट)'
    },
    forum_type: 'Lok_Adalat',
    is_complex: false,
    official_portal_url: 'https://wbnlsa.gov.in/',
    statutory_timeframe: {
      en: '15 to 30 days',
      bn: '১৫ থেকে ৩০ দিন',
      hi: '15 से 30 दिन'
    },
    search_keywords: {
      en: ['education loan ots scheme', 'student loan lok adalat settlement', 'penal interest waiver education loan'],
      bn: ['এডুকেশন লোন মকুব', 'ছাত্র ঋণ ওটিএস', 'লোক আদালত শিক্ষা লোন'],
      hi: ['एजुकेशन लोन ओटीएस', 'छात्र ऋण लोक अदालत', 'शिक्षा ऋण ब्याज माफी']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain loan ledger statement showing original principal disbursement and accumulated interest.',
        'Submit OTS application to Bank Nodal Officer proving unemployment or genuine financial hardship.',
        'Request referral of the loan account to the forthcoming National Lok Adalat organized by DLSA.',
        'Execute compromised Lok Adalat settlement paying reduced principal; secure No-Dues Certificate (NOC).'
      ],
      bn: [
        'লোনের লেজার স্টেটমেন্ট তুলে দেখুন কত টাকা মূল ঋণ ছিল এবং কত টাকা চক্রবৃদ্ধি সুদ চেপেছে।',
        'চাকরি না থাকা বা আর্থিক দুর্দশার নথি দিয়ে ব্যাঙ্ক ম্যানেজারের কাছে ওটিএস (OTS) আবেদন জমা দিন।',
        'জেলা আইনি সেবা কর্তৃপক্ষের (DLSA) কাছে অ্যাকাউন্টটি জাতীয় লোক আদালতে পাঠানোর অনুরোধ জানান।',
        'লোক আদালতে কেবল মূলধনের সুবিধাজনক অংশ কিস্তিতে পরিশোধের চুক্তি করে সম্পূর্ণ নো-ডিউজ (NOC) নিন।'
      ],
      hi: [
        'लोन खाता विवरण निकालें जिससे मूल वितरित राशि एवं चढ़ाए गए ब्याज का अंतर स्पष्ट हो।',
        'बेरोजगारी या गंभीर वित्तीय संकट का प्रमाण देकर बैंक नोडल अधिकारी को ओटीएस आवेदन दें।',
        'मामले को जिला विधिक सेवा प्राधिकरण द्वारा आयोजित राष्ट्रीय लोक अदालत में भेजने का अनुरोध करें।',
        'लोक अदालत में ब्याज माफी के साथ समझौता कर घटी हुई राशि चुकाएं एवं एनओसी (NOC) प्राप्त करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-37-1',
        name: { en: 'Education Loan Sanction Letter & Unemployment Affidavit', bn: 'লোন স্যাংকশন চিঠি ও বেকারত্বের হলফনামা', hi: 'ऋण स्वीकृति पत्र एवं बेरोजगारी/आयहीनता शपथ पत्र' },
        issuing_authority: { en: 'Lending Bank / Notary Public', bn: 'ব্যাঙ্ক', hi: 'बैंक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-38',
    productCategory: 'free-checklist',
    title: {
      en: 'Repossession Defense in Commercial Vehicle Loans',
      bn: 'গাড়ি লোনে বাউন্স হলে গুন্ডা দিয়ে গাড়ি ছিনতাই প্রতিরোধ',
      hi: 'वाहन ऋण में बाउंस पर रिकवरी एजेंटों द्वारा जबरन गाड़ी छीनने पर रोक'
    },
    relevant_act: 'RBI Guidelines on Recovery Agents r/w ICICI Bank v. Shanti Devi (SC)',
    summary: {
      en: 'Protecting commercial drivers against recovery agents seizing trucks or cars on highways through muscle power without orders.',
      bn: 'কিস্তি বকেয়া থাকলেও আদালতের নির্দেশ বা নোটিশ ছাড়া রাস্তায় গাড়ি আটকানো বা বলপূর্বক ছিনতাই সম্পূর্ণ বেআইনি।',
      hi: 'बिना कानूनी नोटिस सड़क पर गुंडे भेजकर गाड़ी छीनने वाली फाइनेंस कंपनियों पर आपराधिक कार्रवाई व हर्जाना।'
    },
    authority_forum: {
      en: 'Consumer Commission / High Court',
      bn: 'উপভোক্তা কমিশন / কলকাতা হাইকোর্ট',
      hi: 'उपभोक्ता आयोग / उच्च न्यायालय'
    },
    forum_type: 'Consumer_DCDRC',
    is_complex: false,
    official_portal_url: 'https://e-jagriti.gov.in/',
    statutory_timeframe: {
      en: 'Immediate police complaint; 30 days consumer notice',
      bn: 'অবিলম্বে পুলিশে নালিশ; ৩০ দিনে ক্রেতা সুরক্ষা নোটিশ',
      hi: 'त्वरित पुलिस शिकायत; 30 दिन में उपभोक्ता नोटिस'
    },
    search_keywords: {
      en: ['illegal vehicle repossession', 'rbi recovery agent guidelines', 'shanti devi sharma judgment'],
      bn: ['গাড়ি ছিনতাই ফিনান্স কোম্পানি', 'রিকভারি এজেন্টের জুলুম', 'আরবিআই গাড়ি বাজেয়াপ্ত নিয়ম'],
      hi: ['अवैध वाहन जब्ती', 'रिकवरी एजेंट गुंडागर्दी रोक', 'शांति देवी फैसला वाहन']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Lodge immediate FIR for extortion and highway robbery under Section 308 BNS if seized forcibly.',
        'File urgent complaint before District Consumer Commission alleging violation of RBI recovery norms.',
        'Secure order directing financier to return seized vehicle and restraining repossession without court.',
        'Court levies punitive compensation on NBFC for engaging musclemen and violating guidelines.'
      ],
      bn: [
        'রাস্তায় বলপূর্বক গাড়ি আটকে চাবি ছিনিয়ে নিলে থানায় ধারা ৩০৮ বিএনএস (তোলাবাজি) অনুযায়ী এফআইআর করুন।',
        'আরবিআই নির্দেশিকা লঙ্ঘনের দায়ে জেলা ক্রেতা সুরক্ষা আদালতে তাৎক্ষণিক ক্ষতিপূরণ মামলা করুন।',
        'আদালত থেকে ফিনান্স কোম্পানিকে অবিলম্বে গাড়ি ফেরত দেওয়ার এবং আইনি ডিক্রি ছাড়া না ধরার আদেশ নিন।',
        'গুন্ডা বাহিনী দিয়ে গাড়ি ছিনতাইয়ের জন্য ফিনান্স কোম্পানির ওপর দৃষ্টান্তমূলক জরিমানা আদায় করান।'
      ],
      hi: [
        'सड़क पर जबरन चाबी छीनने पर बीएनएस की धारा 308 (रंगदारी) में थाने में तुरंत एफआईआर दर्ज कराएं।',
        'आरबीआई नियमों के खुले उल्लंघन के लिए जिला उपभोक्ता फोरम में आपात परिवाद दाखिल करें।',
        'अदालत से आदेश कराकर छिनी गई गाड़ी वापस दिलवाएं एवं बिना अदालती आदेश जब्ती पर रोक लगवाएं।',
        'बाहुबलियों के इस्तेमाल के लिए फाइनेंस कंपनी पर भारी दंडात्मक मुआवजा वसूलने का फैसला लें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-38-1',
        name: { en: 'Vehicle Loan Repayment Schedule & Police Extortion FIR', bn: 'গাড়ির লোন বুক ও থানায় করা ছিনতাইয়ের এফআইআর', hi: 'वाहन ऋण ईएमआई रिकॉर्ड एवं थाने में दर्ज प्राथमिकी प्रति' },
        issuing_authority: { en: 'Lender / Police Station', bn: 'ফিনান্স সংস্থা / থানা', hi: 'फाइनेंस कंपनी / पुलिस' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-39',
    productCategory: 'free-checklist',
    title: {
      en: 'Insolvency of Proprietary Concerns & Personal Firms',
      bn: 'ব্যক্তিগত ঋণখেলাপির দেউলিয়া প্রক্রিয়া ও দেনা নিষ্পত্তি',
      hi: 'व्यक्तिगत व्यापारिक फर्म का दिवालिया समाधान (पर्सनल इंसॉल्वेंसी)'
    },
    relevant_act: 'Sec 94 & 95, Insolvency & Bankruptcy Code, 2016',
    summary: {
      en: 'Proprietary business owners filing for personal bankruptcy to obtain debt moratoriums against creditor harassment.',
      bn: 'ব্যবসা সর্বস্বান্ত হলে দেনাদারের আইনি সুরক্ষা; ডিআরটি ট্রাইব্যুনালে আবেদন করে সমস্ত পাওনাদারের হেনস্থা বন্ধ।',
      hi: 'व्यापार में भारी नुकसान होने पर व्यक्तिगत दिवालिया याचिका देकर कानूनी सुरक्षा एवं नया भुगतान प्लान बनाना।'
    },
    authority_forum: {
      en: 'Debts Recovery Tribunal (DRT)',
      bn: 'ঋণ পুনরুদ্ধার ট্রাইব্যুনাল (DRT)',
      hi: 'ऋण वसूली अधिकरण (DRT)'
    },
    forum_type: 'DRT',
    is_complex: true,
    official_portal_url: 'https://drt.etribunals.gov.in/',
    statutory_timeframe: {
      en: '180 days resolution process',
      bn: '১৮০ দিনের সমাধান প্রক্রিয়া',
      hi: '180 दिन की समाधान प्रक्रिया'
    },
    search_keywords: {
      en: ['personal insolvency ibc section 94', 'proprietary firm bankruptcy', 'drt personal debt moratorium'],
      bn: ['ব্যক্তিগত দেউলিয়া মামলা', 'প্রোপ্রাইটরশিপ দেউলিয়া', 'ধারা ৯৪ আইবিসি'],
      hi: ['व्यक्तिगत दिवालिया आवेदन', 'प्रोपराइटरशिप फर्म इंसॉल्वेंसी', 'धारा 94 आईबीसी']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Prepare audited statement of affairs detailing liabilities, creditor charges, and personal assets.',
        'Submit application under Section 94 IBC before jurisdictional DRT for initiating personal insolvency.',
        'Upon filing, automatic interim moratorium commences, halting ongoing creditor lawsuits and seizures.',
        'DRT appoints Resolution Professional to negotiate formal debt repayment plan spanning up to 3 years.'
      ],
      bn: [
        'অডিট রিপোর্ট তৈরি করে মোট দেনা, ব্যাঙ্কের জামানত ও ব্যক্তিগত স্থাবর সম্পত্তির তালিকা তৈরি করুন।',
        'আইবিসি আইনের ধারা ৯৪ অনুযায়ী ডিআরটি ট্রাইব্যুনালে ব্যক্তিগত দেউলিয়া মামলা পেশ করুন।',
        'আবেদন জমা দেওয়া মাত্রই স্বতঃস্ফূর্ত মোরাটোরিয়াম চালু হবে, সমস্ত পাওনাদারের কেস ও হুমকি বন্ধ হয়ে যাবে।',
        'ডিআরটি একজন রেজোলিউশন প্রফেশনাল নিয়োগ করে ৩ বছরের কিস্তিতে ঋণ পরিশোধের সহজ স্কিম অনুমোদন করবে।'
      ],
      hi: [
        'कुल देनदारी, गिरवी संपत्तियों एवं निजी परिसंपत्तियों का चार्टर्ड एकाउंटेंट से ऑडिट कराएं।',
        'डीआरटी के समक्ष धारा 94 आईबीसी के तहत व्यक्तिगत दिवालिया याचिका दाखिल करें।',
        'याचिका दर्ज होते ही कानूनी मोराटोरियम शुरू हो जाएगा, जिससे सभी वसूली मुकदमे व फोन बंद होंगे।',
        'डीआरटी द्वारा अधिकृत प्रोफेशनल नियुक्त कर 3 साल में आसान किस्तों का पुनर्भुगतान प्लान बनेगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-39-1',
        name: { en: 'Audited Balance Sheet of Debts & Statement of Affairs', bn: 'দেনার অডিট ব্যালেন্স শিট ও আর্থিক বিবরণী', hi: 'देनदारियों की ऑडिट बैलेंस शीट एवं वित्तीय विवरण' },
        issuing_authority: { en: 'Chartered Accountant / Debtor', bn: 'চার্টার্ড অ্যাকাউন্ট্যান্ট', hi: 'चार्टर्ड एकाउंटेंट' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-40',
    productCategory: 'free-checklist',
    title: {
      en: 'Recovery of Demurrage, Port & Ocean Shipping Freight',
      bn: 'আন্তর্জাতিক সমুদ্র পরিবহন ও বন্দরের ডিমারেজ ফি বিরোধ',
      hi: 'समुद्री माल ढुलाई एवं बंदरगाह पर अत्यधिक डेमरेज (विलंब शुल्क) विवाद'
    },
    relevant_act: 'Major Port Trusts Act r/w Admiralty (Jurisdiction & Settlement) Act, 2017',
    summary: {
      en: 'Challenging container detention charges and illegal lien by shipping lines during customs clearance delays.',
      bn: 'কাস্টমস ক্লিয়ারেন্সের দেরিতে শিপিং লাইন বেআইনিভাবে কন্টেইনার আটকে লাখ লাখ টাকার ডিমারেজ দাবি করলে প্রতিকার।',
      hi: 'कस्टम चेकिंग में देरी पर शिपिंग कंपनियों द्वारा माल रोककर अत्यधिक विलंब शुल्क वसूलने पर अदालती रोक।'
    },
    authority_forum: {
      en: 'High Court at Calcutta (Admiralty Jurisdiction) / Commercial Court',
      bn: 'কলকাতা হাইকোর্ট (এডমিরালটি এক্তিয়ার) / বাণিজ্যিক আদালত',
      hi: 'कलकत्ता उच्च न्यायालय (एडमिरल्टी शाखा) / वाणिज्यिक न्यायालय'
    },
    forum_type: 'High_Court',
    is_complex: true,
    official_portal_url: 'https://calcuttahighcourt.gov.in/',
    statutory_timeframe: {
      en: '3 to 6 months',
      bn: '৩ থেকে ৬ মাস',
      hi: '3 से 6 माह'
    },
    search_keywords: {
      en: ['shipping container demurrage dispute', 'admiralty suit calcutta high court', 'port detention charges waiver'],
      bn: ['কন্টেইনার ডিমারেজ বিরোধ', 'এডমিরালটি মামলা কলকাতা', 'বন্দর চার্জ মকুব'],
      hi: ['कंटेनर डेमरेज विवाद', 'एडमिरल्टी वाद हाईकोर्ट', 'बंदरगाह विलंब शुल्क रोक']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain bill of lading, customs out-of-charge orders, and shipping line container detention bills.',
        'Serve demand notice challenging excessive demurrage during customs hold periods outside importer control.',
        'File Commercial Suit or Admiralty Petition before High Court at Calcutta for release of containers.',
        'Obtain interim order releasing containers against deposit of reasonable security, preventing cargo deterioration.'
      ],
      bn: [
        'বিল অব লেডিং, কাস্টমস ক্লিয়ারেন্স আউট-অব-চার্জ আদেশ ও ডিমারেজ বিলের কপি গুছিয়ে নিন।',
        'কাস্টমসের দেরির দায় আমদানিকারকের নয় জানিয়ে শিপিং লাইনের ডিমারেজ বিলের বিরুদ্ধে নোটিশ দিন।',
        'কলকাতা হাইকোর্টের এডমিরালটি বেঞ্চে কন্টেইনার অবিলম্বে খালাসের দাবিতে মামলা দায়ের করুন।',
        'নির্দিষ্ট জামানতের ভিত্তিতে আদালত থেকে জরুরি আদেশে কন্টেইনারের মালপত্র খালাস করিয়ে নিন।'
      ],
      hi: [
        'बिल ऑफ लैडिंग, कस्टम क्लीयरेंस आदेश एवं शिपिंग कंपनी के डेमरेज बिल एकत्र करें।',
        'कस्टम देरी पर आयातक का नियंत्रण न होने का हवाला देकर अधिक विलंब शुल्क को विधिक चुनौती दें।',
        'कलकत्ता हाईकोर्ट की एडमिरल्टी शाखा में माल मुक्त कराने हेतु वाणिज्यिक याचिका दाखिल करें।',
        'उचित सुरक्षा राशि जमा कर अदालत से तुरंत कंटेनर छुड़ाने का अंतरिम आदेश प्राप्त करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-40-1',
        name: { en: 'Bill of Lading & Customs Out-of-Charge Order', bn: 'বিল অব লেডিং ও কাস্টমস ক্লিয়ারেন্স কপি', hi: 'बिल ऑफ लैडिंग एवं कस्टम आउट-ऑफ-चार्ज आदेश' },
        issuing_authority: { en: 'Shipping Line / Indian Customs', bn: 'শিপিং সংস্থা / কাস্টমস', hi: 'शिपिंग कंपनी / सीमा शुल्क विभाग' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-41',
    productCategory: 'free-checklist',
    title: {
      en: 'Defense Against Forged Signature on Handnotes',
      bn: 'হ্যান্ডনোটে জাল দস্তখত করে মিথ্যা ঋণের মামলার বিরুদ্ধে ফরেনসিক দাবি',
      hi: 'हैंडनोट/चेक पर जाली दस्तखत कर झूठे कर्ज मुकदमे के विरुद्ध फॉरेंसिक जांच'
    },
    relevant_act: 'Sec 45, Bharatiya Sakshya Adhiniyam, 2023 (BSA)',
    summary: {
      en: 'Defending against fabricated promissory note suits by requesting government handwriting forensic examination.',
      bn: 'হ্যান্ডনোট বা চেকে জাল সই করে ভুয়ো টাকার মামলা করলে সিএফএসএল (CFSL) ল্যাবে হস্তাক্ষর পরীক্ষার আবেদন।',
      hi: 'जाली दस्तखत वाले प्रॉमिसरी नोट के आधार पर झूठे मुकदमे को सरकारी फॉरेंसिक लैब जांच से खारिज कराना।'
    },
    authority_forum: {
      en: 'Civil Trial Court',
      bn: 'দেওয়ানি বিচারক আদালত',
      hi: 'विचारण न्यायिक दंडाधिकारी न्यायालय'
    },
    forum_type: 'Civil_Court',
    is_complex: false,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: 'Raised during evidence stage; 3 to 6 months CFSL',
      bn: 'সাক্ষ্যগ্রহণের সময় উত্থাপন; ৩ থেকে ৬ মাস সিএফএসএল',
      hi: 'साक्ष्य के दौरान अर्जी; 3 से 6 माह फॉरेंसिक जांच'
    },
    search_keywords: {
      en: ['forged signature promissory note', 'section 45 bsa handwriting expert', 'cfsl signature test debt suit'],
      bn: ['হ্যান্ডনোটে জাল সই', 'সিএফএসএল হস্তাক্ষর পরীক্ষা', 'ধারা ৪৫ বিএসএ'],
      hi: ['हैंडनोट पर जाली हस्ताक्षर', 'धारा 45 फॉरेंसिक जांच', 'सीएफएसएल लिखावट मिलान']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Inspect original disputed promissory note in court custody; document ink and stroke discrepancies.',
        'File application under Section 45 BSA and Order XXVI Rule 10A CPC for Handwriting Expert appointment.',
        'Provide contemporaneous admitted specimen signatures (from banks/passports) in presence of judge.',
        'CFSL submits expert report confirming forgery, resulting in dismissal of false recovery suit.'
      ],
      bn: [
        'আদালতে জমা থাকা মূল হ্যান্ডনোট পরীক্ষা করে কালির বয়স ও সইয়ের অসঙ্গতি লিপিবদ্ধ করুন।',
        'ধারা ৪৫ বিএসএ এবং অর্ডার ২৬ রুল ১০এ সিপিসি অনুযায়ী সরকারি হস্তাক্ষর বিশারদ ডাকার আবেদন দিন।',
        'বিচারকের সামনে দাঁড়িয়ে সমসাময়িক ব্যাঙ্ক রেকর্ড ও পাসপোর্টের সাথে মিলিয়ে নমুনা সই দিন।',
        'সরকারি ফরেনসিক ল্যাব (CFSL) সই জাল বলে রিপোর্ট দিলে আদালত মিথ্যা মামলাটি সরাসরি খারিজ করবে।'
      ],
      hi: [
        'अदालत में जमा मूल हैंडनोट का निरीक्षण कर स्याही एवं दस्तखत के बनावटीपन को नोट करें।',
        'धारा 45 बीएसए एवं आदेश 26 नियम 10A सीपीसी में लिखावट विशेषज्ञ (Handwriting Expert) की अर्जी दें।',
        'न्यायाधीश के सामने खड़े होकर अपने मूल बैंक एवं पासपोर्ट हस्ताक्षरों के नमूने दर्ज कराएं।',
        'सरकारी लैब (CFSL) द्वारा हस्ताक्षर फर्जी प्रमाणित होने पर अदालत झूठा मुकदमा खारिज करेगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-41-1',
        name: { en: 'Contemporaneous Admitted Signatures from Bank KYC / Passports', bn: 'ব্যাঙ্ক ও পাসপোর্টে থাকা প্রমাণিত সইয়ের কপি', hi: 'बैंक अथवा पासपोर्ट में मौजूद प्रमाणित नमूना हस्ताक्षर' },
        issuing_authority: { en: 'Commercial Bank / Passport Office', bn: 'ব্যাঙ্ক / পাসপোর্ট দপ্তর', hi: 'बैंक / पासपोर्ट कार्यालय' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-42',
    productCategory: 'paid',
    title: {
      en: 'Suit Against State for Overpaid Stamp Duty & Tax Refunds',
      bn: 'সরকার কর্তৃক বেআইনিভাবে আদায় করা অতিরিক্ত কর ফেরত মামলা',
      hi: 'सरकार द्वारा गलत तरीके से वसूला गया स्टांप शुल्क व टैक्स वापसी वाद'
    },
    relevant_act: 'Sec 72, Indian Contract Act r/w Article 265, Constitution',
    summary: {
      en: 'Recovering registration stamp duty or municipal taxes paid to state agencies under mistake of law with interest.',
      bn: 'ভুল নিয়মে জমি রেজিস্ট্রিতে সরকার অতিরিক্ত স্ট্যাম্প ডিউটি কেটে নিলে দেওয়ানি মামলায় সুদসহ ফেরত।',
      hi: 'कानूनी भूलवश सरकार को दिए गए अतिरिक्त स्टांप शुल्क अथवा कर को 6% ब्याज सहित वापस पाना।'
    },
    authority_forum: {
      en: 'Civil Court (Senior Division) / High Court',
      bn: 'দেওয়ানি আদালত (সিনিয়র ডিভিশন) / হাইকোর্ট',
      hi: 'सिविल न्यायालय / उच्च न्यायालय'
    },
    forum_type: 'Civil_Court',
    is_complex: true,
    official_portal_url: 'https://wbregistration.gov.in/',
    statutory_timeframe: {
      en: '6 months to 1 year',
      bn: '৬ মাস থেকে ১ বছর',
      hi: '6 माह से 1 वर्ष'
    },
    search_keywords: {
      en: ['stamp duty refund lawsuit wb', 'section 72 contract act tax refund', 'article 265 illegal tax recovery'],
      bn: ['স্ট্যাম্প ডিউটি রিফান্ড মামলা', 'অতিরিক্ত ট্যাক্স ফেরত', 'ধারা ৭২ চুক্তি আইন'],
      hi: ['स्टांप ड्यूटी रिफंड वाद', 'धारा 72 अनुबंध कानून टैक्स वापसी', 'अवैध कर वापसी']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Produce treasury challans and government rectification orders proving tax was levied erroneously.',
        'Submit formal administrative refund requisition to Collector of Stamp Revenue or Municipal Commissioner.',
        'If refund is delayed beyond 90 days, serve 60-day statutory notice under Section 80 CPC on the State.',
        'File Civil Suit for Recovery of Money Paid Under Mistake, securing decree with 6% interest.'
      ],
      bn: [
        'ট্রেজারি চালান ও সরকারি গ্যাজেট দেখিয়ে প্রমাণ করুন রেজিস্ট্রিতে ভুল করে অতিরিক্ত ফি নেওয়া হয়েছে।',
        'কালেক্টর অব স্ট্যাম্প রেভিনিউ বা পুর কমিশনারের কাছে লিখিত রিফান্ড আবেদন জমা দিন।',
        '৯০ দিনে ফেরত না এলে ধারা ৮০ সিপিসি অনুযায়ী পশ্চিমবঙ্গ সরকারের বিরুদ্ধে ৬০ দিনের আইনি নোটিশ দিন।',
        'দেওয়ানি আদালতে ধারা ৭২ অনুযায়ী ভুলবশত দেওয়া টাকা ফেরতের মামলা করে ৬% সুদে ডিক্রি পান।'
      ],
      hi: [
        'ट्रेजरी चालान एवं सरकारी आदेश प्रस्तुत कर साबित करें कि स्टांप शुल्क अधिक काटा गया था।',
        'स्टांप कलेक्टर अथवा नगर निगम आयुक्त को औपचारिक रिफंड आवेदन प्रस्तुत करें।',
        '90 दिन में कार्रवाई न होने पर राज्य सरकार को धारा 80 सीपीसी के तहत 60 दिन का विधिक नोटिस दें।',
        'दीवानी अदालत में धारा 72 के तहत वाद दायर कर 6% वार्षिक ब्याज सहित पूरी राशि वापस पाएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-42-1',
        name: { en: 'E-Challan Payment Receipt & GRIPS Treasury Verification Certificate', bn: 'ই-চালান পেমেন্ট রসিদ ও জিআরআইপিএস ভেরিফিকেশন', hi: 'ई-चालान भुगतान रसीद एवं GRIPS ट्रेजरी सत्यापन प्रति' },
        issuing_authority: { en: 'Directorate of Treasuries / ADSR', bn: 'ট্রেজারি দপ্তর', hi: 'ट्रेजरी विभाग / उप-पंजीयक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-43',
    productCategory: 'free-checklist',
    title: {
      en: 'Suit for Dissolution of Partnership & Rendering of Accounts',
      bn: 'পার্টনারশিপ ব্যবসা ভাঙা ও ন্যায্য আর্থিক হিসেব আদায়',
      hi: 'साझेदारी फर्म का कानूनी विघटन एवं अंतिम लाभ-हानि का हिसाब'
    },
    relevant_act: 'Sec 44, Partnership Act, 1932 & Order XX Rule 15 CPC',
    summary: {
      en: 'Retiring or excluded partners dissolving partnership businesses to recover their rightful capital and profits.',
      bn: 'ব্যবসায়ের গোপন মুনাফা এক পার্টনার নিজের অ্যাকাউন্টে সরিয়ে নিলে অ্যাকাউন্টস অডিট ও টাকা ফেরতের মামলা।',
      hi: 'पार्टनर द्वारा फर्म का पैसा अपने निजी खाते में डालने पर बैंक खाते सील कराकर पैसा वसूलना।'
    },
    authority_forum: {
      en: 'Civil Court / Commercial Court',
      bn: 'দেওয়ানি আদালত / বাণিজ্যিক আদালত',
      hi: 'वाणिज्यिक न्यायालय / सिविल न्यायालय'
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
      en: ['partnership fund siphoning', 'action for accounts partner', 'freeze partnership bank account'],
      bn: ['পার্টনারশিপ টাকা আত্মসাৎ', 'অংশীদারি হিসাবের মামলা', 'ফার্ম অ্যাকাউন্ট ফ্রিজ'],
      hi: ['पार्टनरशिप गबन केस', 'साझेदारी हिसाब वाद', 'फर्म खाता जब्ती']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Produce registered Partnership Deed and bank records revealing unauthorized transfers.',
        'Serve formal dissolution and rendering of accounts notice under Section 43 Partnership Act.',
        'File Suit for Dissolution of Partnership and Taking Accounts before Civil Judge (Senior Division).',
        'Move urgent application under Order XXXIX CPC for injunction freezing all firm bank operations.'
      ],
      bn: [
        'পার্টনারশিপ দলিল ও অডিট খাতা দেখিয়ে প্রমাণ করুন অসৎ পার্টনার ফার্মের টাকা বাইরে সরিয়েছে।',
        'ধারা ৪৩ অনুযায়ী পার্টনারশিপ অবসান ও সম্পূর্ণ হিসাব বুঝিয়ে দেওয়ার আনুষ্ঠানিক নোটিশ দিন।',
        'দেওয়ানি আদালতে অংশীদারি চুক্তি বাতিল ও হিসাব নিকাশের (Action for Accounts) মামলা করুন।',
        'অর্ডার ৩৯ সিপিসি অনুযায়ী ফার্মের সমস্ত ব্যাঙ্ক অ্যাকাউন্ট ফ্রিজ করে কোর্ট রিসিভার বসান।'
      ],
      hi: [
        'साझेदारी विलेख एवं बैंक स्टेटमेंट से अनधिकृत लेन-देन व गबन के सबूत जुटाएं।',
        'धारा 43 के तहत साझेदारी समाप्त करने एवं खातों का पूरा ब्योरा देने का विधिक नोटिस दें।',
        'सिविल जज के समक्ष साझेदारी विघटन एवं खातों की जांच (Taking of Accounts) का वाद करें।',
        'आदेश 39 सीपीसी के तहत फर्म के सभी बैंक खातों के संचालन पर तुरंत अदालती रोक लगवाएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-43-1',
        name: { en: 'Partnership Agreement & Forensic Audit Statement of Transfers', bn: 'পার্টনারশিপ চুক্তি ও ফরেনসিক অডিট রিপোর্ট', hi: 'साझेदारी अनुबंध एवं अनधिकृत लेन-देन की फॉरेंसिक ऑडिट रिपोर्ट' },
        issuing_authority: { en: 'Registrar of Firms / Chartered Accountant', bn: 'ফার্ম রেজিস্টার / সিএ', hi: 'फर्म निबंधक / चार्टर्ड एकाउंटेंट' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-44',
    productCategory: 'free-checklist',
    title: {
      en: 'Whistleblower & Fraud Recovery Petitions Before SFIO',
      bn: 'কোম্পানি কেলেঙ্কারির টাকা ফেরত পেতে এসএফআইও তদন্তের নালিশ',
      hi: 'कॉरपोरेट घोटाले एवं धन गबन पर गंभीर धोखाधड़ी जांच कार्यालय (SFIO) जांच'
    },
    relevant_act: 'Sec 212 & 447, Companies Act, 2013',
    summary: {
      en: 'Depositors and minority shareholders filing central agency complaints to unearth corporate asset diversion.',
      bn: 'কোম্পানির ডিরেক্টররা শেল কোম্পানির মাধ্যমে কোটি কোটি টাকা সরিয়ে নিলে এসএফআইও (SFIO) তদন্তের আবেদন।',
      hi: 'कंपनी प्रबंधकों द्वारा फर्जी कंपनियों में पैसा ट्रांसफर करने पर केंद्र सरकार की एसएफआईओ से जांच।'
    },
    authority_forum: {
      en: 'Serious Fraud Investigation Office (SFIO) / NCLT',
      bn: 'সিরিয়াস ফ্রড ইনভেস্টিগেশন অফিস (SFIO) / NCLT',
      hi: 'गंभीर धोखाधड़ी जांच कार्यालय (SFIO) / NCLT'
    },
    forum_type: 'NCLT',
    is_complex: true,
    official_portal_url: 'https://sfio.gov.in/',
    statutory_timeframe: {
      en: '6 months to 1 year',
      bn: '৬ মাস থেকে ১ বছর',
      hi: '6 माह से 1 वर्ष'
    },
    search_keywords: {
      en: ['sfio investigation complaint', 'section 212 companies act', 'corporate fraud asset recovery'],
      bn: ['এসএফআইও তদন্ত নালিশ', 'কোম্পানি কেলেঙ্কারি ধারা ২১২', 'শেল কোম্পানি টাকা উদ্ধার'],
      hi: ['एसएफआईओ जांच शिकायत', 'कॉरपोरेट घोटाला धारा 212', 'शेल कंपनी गबन']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Compile financial records, ROC filings, and transaction schedules proving fraud over ₹1 Crore.',
        'Submit whistleblower complaint to Ministry of Corporate Affairs (MCA) under Section 212.',
        'Central Government assigns investigation to Serious Fraud Investigation Office (SFIO).',
        'SFIO arrests delinquent directors, attaches private properties, and files claw-back petition in NCLT.'
      ],
      bn: [
        'কোম্পানি বিষয়ক মন্ত্রক (ROC) থেকে নথি তুলে ১ কোটি টাকার বেশি আর্থিক জালিয়াতির প্রমাণ তৈরি করুন।',
        'ধারা ২১২ অনুযায়ী কেন্দ্রীয় সরকারের কাছে এসএফআইও (SFIO) তদন্তের আনুষ্ঠানিক অভিযোগ দিন।',
        'কেন্দ্রীয় সরকার আদেশ দিয়ে মামলাটি সরাসরি গোয়েন্দা সংস্থা এসএফআইও-র হাতে তুলে দেবে।',
        'এসএফআইও অভিযুক্ত ডিরেক্টরদের গ্রেফতার করবে এবং ব্যক্তিগত সম্পত্তি ক্রোক করে টাকা ফেরতের ব্যবস্থা করবে।'
      ],
      hi: [
        'कंपनी मामलों के मंत्रालय (ROC) से बैलेंस शीट निकालकर ₹1 करोड़ से अधिक के गबन के सबूत जुटाएं।',
        'धारा 212 के तहत कॉरपोरेट कार्य मंत्रालय को एसएफआईओ जांच हेतु औपचारिक व्हिसलब्लोअर पत्र दें।',
        'केंद्र सरकार मामले की गंभीरता देखकर जांच एसएफआईओ (SFIO) को सौंपेगी।',
        'एसएफआईओ निदेशकों को गिरफ्तार कर उनकी निजी संपत्तियां कुर्क करेगी एवं एनसीएलटी से पैसा दिलाएगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-44-1',
        name: { en: 'ROC Filings, Bank Statements & Shell Company Fund Trail', bn: 'আরওসি ফাইলিং ও ভুয়ো কোম্পানির ট্রেইল বিবরণী', hi: 'कंपनी आरओसी दस्तावेज एवं फर्जी कंपनियों में फंड ट्रांसफर ट्रेल' },
        issuing_authority: { en: 'Ministry of Corporate Affairs (MCA)', bn: 'কোম্পানি বিষয়ক মন্ত্রক', hi: 'कॉरपोरेट कार्य मंत्रालय' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-45',
    productCategory: 'free-checklist',
    title: {
      en: 'Defamation & Correction of Damaged CIBIL / Credit Reports',
      bn: 'সিবিল স্কোরে ভুল ডিফল্ট দেখালে ক্ষতিপূরণ ও সংশোধন',
      hi: 'सिबिल (CIBIL) स्कोर में गलत डिफ़ॉल्ट हटाने एवं नुकसान का हर्जाना'
    },
    relevant_act: 'Credit Information Companies (Regulation) Act, 2005 (CICRA)',
    summary: {
      en: 'Suing credit bureaus (CIBIL, Experian) and banks for reporting erroneous loan defaults that wreck citizen credit.',
      bn: 'অন্যের লোন বা মেটানো লোনেও সিবিল স্কোরে ডিফল্ট দেখিয়ে লোন আটকে দিলে ₹১০০/দিন জরিমানা ও ক্ষতিপূরণ।',
      hi: 'बिना कारण सिबिल खराब करने पर बैंकों एवं सिबिल पर ₹100 प्रतिदिन हर्जाना व रिकॉर्ड सुधार।'
    },
    authority_forum: {
      en: 'Banking Ombudsman / District Consumer Commission',
      bn: 'ব্যাঙ্কিং ন্যায়পাল / জেলা ক্রেতা আদালত',
      hi: 'बैंकिंग लोकपाल / उपभोक्ता आयोग'
    },
    forum_type: 'Competent_Authority',
    is_complex: false,
    official_portal_url: 'https://cms.rbi.org.in/',
    statutory_timeframe: {
      en: 'Mandatory resolution in 30 days; ₹100/day penalty',
      bn: '৩০ দিনে নিষ্পত্তি বাধ্যতামূলক; ₹১০০/দিন জরিমানা',
      hi: '30 दिन में समाधान अनिवार्य; ₹100/दिन जुर्माना'
    },
    search_keywords: {
      en: ['wrong cibil default complaint', 'rbi 100 per day cibil penalty', 'rectify cibil score cicra'],
      bn: ['সিবিল স্কোর ভুল সংশোধন', 'সিবিল জরিমানা ১০০ টাকা', 'সিবিল ডিফেমেশন'],
      hi: ['सिबिल स्कोर सुधार शिकायत', 'आरबीआई ₹100 प्रतिदिन जुर्माना', 'गलत सिबिल डिफ़ॉल्ट']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Download official credit report highlighting erroneous overdue entries on settled loans.',
        'Raise online dispute on CIBIL Dispute Resolution Portal and serve notice on reporting bank.',
        'If uncorrected in 30 days, lodge complaint with RBI Banking Ombudsman under CICRA regulations.',
        'Bank and CIBIL ordered to purge default record, restore credit rating, and pay ₹100/day delay penalty.'
      ],
      bn: [
        'সিবিল রিপোর্ট ডাউনলোড করে ভুল করে দেখানো বকেয়া বা অন্যের লোনের এন্ট্রিটি চিহ্নিত করুন।',
        'সিবিল পোর্টালে অনলাইন ডিসপিউট তুলুন এবং সংশ্লিষ্ট ব্যাঙ্ক ম্যানেজারকে লিখিত নোটিশ দিন।',
        '৩০ দিনে সংশোধন না হলে আরবিআই ব্যাঙ্কিং ওম্বুডসম্যানের কাছে আইন লঙ্ঘনের নালিশ জানান।',
        'ন্যায়পাল সিবিল রেকর্ড মুছে দেওয়ার নির্দেশ দেবে এবং ৩০ দিন পরের প্রতি দিনের জন্য ১০০ টাকা জরিমানা মেটাবে।'
      ],
      hi: [
        'सिबिल रिपोर्ट डाउनलोड कर बंद हो चुके लोन पर दिखाई गई गलत बकाया प्रविष्टि को चिह्नित करें।',
        'सिबिल के ऑनलाइन पोर्टल पर विवाद दर्ज करें एवं संबंधित बैंक को सुधार हेतु विधिक पत्र दें।',
        '30 दिनों में सुधार न होने पर आरबीआई लोकपाल में सीआईसीआरए नियमों के तहत शिकायत करें।',
        'बैंक व सिबिल को रिकॉर्ड सुधारने एवं 30 दिन के बाद ₹100 प्रतिदिन की दर से जुर्माना देने का आदेश होगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-45-1',
        name: { en: 'Official CIBIL Report & Bank No-Dues Certificate (NOC)', bn: 'অফিসিয়াল সিবিল রিপোর্ট ও ব্যাঙ্কের নো-ডিউজ সার্টিফিকেট', hi: 'मूल सिबिल रिपोर्ट एवं बैंक का नो-ड्यूज प्रमाणपत्र (NOC)' },
        issuing_authority: { en: 'TransUnion CIBIL / Lending Bank', bn: 'সিবিল / ব্যাঙ্ক', hi: 'सिबिल / बैंक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-46',
    productCategory: 'lawyer-only',
    title: {
      en: 'Share Demat Fraud & Recovery from Unauthorized Stock Brokers',
      bn: 'শেয়ার ব্রোকারের প্রতারণা ও ডিম্যাট থেকে শেয়ার চুরি',
      hi: 'शेयर ब्रोकर द्वारा धोखाधड़ी एवं डीमैट खाते से शेयर चोरी पर वसूली'
    },
    relevant_act: 'SEBI (Stock Brokers) Regs r/w SCORES Portal',
    summary: {
      en: 'Recovering blue-chip equity shares liquidated unauthorizedly by trading brokers through forged power-of-attorney.',
      bn: 'গ্রাহকের অনুমতি না নিয়ে শেয়ার ব্রোকার পোর্টফোলিও বিক্রি করে দিলে সেবি (SEBI) মারফত সম্পূর্ণ ক্ষতিপূরণ।',
      hi: 'बिना सहमति ब्रोकर द्वारा डीमैट से शेयर बेचने पर सेबी (SEBI) से शेयर एवं पूरा पैसा वापस पाना।'
    },
    authority_forum: {
      en: 'SEBI SCORES / Investor Grievance Cell (NSE / BSE)',
      bn: 'সেবি স্কোরস (SCORES) / এনএসই ও বিএসই সালিশি বেঞ্চ',
      hi: 'सेबी स्कोर्स (SCORES) / एनएसई निवेशक शिकायत मंच'
    },
    forum_type: 'Competent_Authority',
    is_complex: false,
    official_portal_url: 'https://scores.sebi.gov.in/',
    statutory_timeframe: {
      en: '30 to 60 working days',
      bn: '৩০ থেকে ৬০ কার্যদিবস',
      hi: '30 से 60 कार्यदिवस'
    },
    search_keywords: {
      en: ['sebi scores broker complaint', 'unauthorized share sale demat', 'investor protection fund nse'],
      bn: ['ডিম্যাট শেয়ার চুরি', 'সেবি স্কোরস নালিশ', 'শেয়ার ব্রোকার প্রতারণা'],
      hi: ['डीमैट शेयर धोखाधड़ी', 'सेबी स्कोर्स शिकायत', 'ब्रोकर शेयर चोरी रिफंड']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Extract monthly CDSL/NSDL Demat transaction statements displaying unauthorized debit transfers.',
        'Lodge immediate complaint on SEBI SCORES 2.0 portal (https://scores.sebi.gov.in/) attaching trading logs.',
        'If unresolved in 21 days, dispute auto-escalates to Exchange Investor Grievance Redressal Committee.',
        'Exchange committee freezes broker clearing deposits and compensates investor from Protection Fund.'
      ],
      bn: [
        'সিডিএসএল বা এনএসডিএল থেকে ট্রানজ্যাকশন হিস্ট্রি তুলে অননুমোদিত শেয়ার স্থানান্তরের প্রমাণ নিন।',
        'ট্রেডিং লগ যুক্ত করে সেবির স্কোরস (SCORES 2.0) পোর্টালে ব্রোকারের বিরুদ্ধে নালিশ দাখিল করুন।',
        '২১ দিনে রফা না হলে বিষয়টি স্টক এক্সচেঞ্জের (NSE/BSE) ইনভেস্টর গ্রিভেন্স কমিটির এজলাসে যাবে।',
        'এক্সচেঞ্জ ব্রোকারের লাইসেন্স ও আমানত ফ্রিজ করে ইনভেস্টর প্রোটেকশন ফান্ড থেকে শেয়ারের মূল্য মিটিয়ে দেবে।'
      ],
      hi: [
        'CDSL/NSDL से डीमैट खाता विवरण निकालें जिसमें बिना सहमति हुआ शेयर ट्रांसफर दर्ज हो।',
        'सेबी के SCORES 2.0 पोर्टल पर ट्रेडिंग लॉग सहित अधिकृत ब्रोकर के विरुद्ध शिकायत दें।',
        '21 दिन में हल न होने पर मामला स्टॉक एक्सचेंज (NSE/BSE) की निवेशक समिति में जाएगा।',
        'एक्सचेंज ब्रोकर के फंड सील कर इन्वेस्टर प्रोटेक्शन फंड से निवेशक के नुकसान की भरपाई कराएगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-46-1',
        name: { en: 'CDSL / NSDL Demat Holding Statement & Trade Confirmation Contract Notes', bn: 'ডিম্যাট হোল্ডিং স্টেটমেন্ট ও ট্রেড কনফার্মেশন নোট', hi: 'डीमैट होल्डिंग स्टेटमेंट एवं ट्रेड अनुबंध पर्चियां' },
        issuing_authority: { en: 'Depository Participant (CDSL / NSDL)', bn: 'ডিপোজিটরি (CDSL/NSDL)', hi: 'डिपॉजिटरी' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-47',
    productCategory: 'lawyer-only',
    title: {
      en: 'Execution of Commercial Arbitral Award as Civil Decree',
      bn: 'সালিশি আদালতের রোয়েদাদ দেওয়ানি ডিক্রি হিসেবে কার্যকরীকরণ',
      hi: 'वाणिज्यिक मध्यस्थता पंचाट (Arbitral Award) का दीवानी डिक्री समान निष्पादन'
    },
    relevant_act: 'Sec 36, Arbitration & Conciliation Act, 1996',
    summary: {
      en: 'Enforcing final domestic arbitration awards as formal civil court decrees to attach bank accounts and execute debt recovery.',
      bn: 'আর্বিট্রেশন রোয়েদাদ পাওয়ার পর বিবাদী টাকা না দিলে দেওয়ানি আদালতের মাধ্যমে সম্পত্তি ক্রোক করে টাকা আদায়।',
      hi: 'मध्यस्थता पंचाट (अवार्ड) को अदालत की डिक्री मानकर देनदार की जमीन व बैंक खाते कुर्क कराना।'
    },
    authority_forum: {
      en: 'Commercial Court / High Court (Commercial Division)',
      bn: 'বাণিজ্যিক আদালত / কলকাতা হাইকোর্ট (কমার্শিয়াল বেঞ্চ)',
      hi: 'वाणिज्यिक न्यायालय / उच्च न्यायालय'
    },
    forum_type: 'Commercial_Court',
    is_complex: true,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '3 to 6 months',
      bn: '৩ থেকে ৬ মাস',
      hi: '3 से 6 माह'
    },
    search_keywords: {
      en: ['execution arbitral award section 36', 'enforce arbitration award cpc', 'commercial court execution'],
      bn: ['আর্বিট্রেশন রোয়েদাদ জারি', 'ধারা ৩৬ আর্বিট্রেশন অ্যাক্ট', 'সালিশি ডিক্রি কার্যকর'],
      hi: ['मध्यस्थता पंचाट निष्पादन', 'धारा 36 मध्यस्थता अधिनियम', 'आर्बिट्रल अवार्ड कुर्की']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Wait for expiry of mandatory 90-day appeal window under Section 34 of Arbitration Act.',
        'File Execution Petition under Section 36 in Commercial Court where judgment debtor has assets.',
        'Arbitral award is enforced under Code of Civil Procedure in identical manner to a civil money decree.',
        'Judge issues attachment warrants over debtor real estate and directs banks to remit funds.'
      ],
      bn: [
        'আর্বিট্রেশন আইনের ধারা ৩৪ অনুযায়ী রোয়েদাদ চ্যালেঞ্জ করার ৯০ দিনের সময়সীমা পার হতে দিন।',
        'যেখানে দেনাদারের সম্পত্তি আছে সেই বাণিজ্যিক আদালতে ধারা ৩৬ মেনে এক্সিকিউশন মামলা করুন।',
        'আর্বিট্রেশন রোয়েদাদটি সাধারণ দেওয়ানি আদালতের ডিক্রির মতোই বলবৎ ও কার্যকর হবে।',
        'বিচারক দেনাদারের জমি ক্রোকের ওয়ারেন্ট জারি করবেন এবং ব্যাঙ্ককে টাকা জমা দেওয়ার নির্দেশ দেবেন।'
      ],
      hi: [
        'धारा 34 के तहत पंचाट को चुनौती देने की 90 दिवसीय अपील अवधि समाप्त होने की प्रतीक्षा करें।',
        'वाणिज्यिक न्यायालय में धारा 36 के तहत निष्पादन याचिका (Execution Petition) दाखिल करें।',
        'मध्यस्थता पंचाट सिविल कोर्ट की धन डिक्री के समान सीपीसी के तहत सीधे लागू किया जाएगा।',
        'न्यायाधीश देनदार की संपत्ति कुर्क करने एवं बैंक से राशि अदालत में मंगाने का वारंट देंगे।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-47-1',
        name: { en: 'Original Stamped Arbitral Award & Proof of Service', bn: 'স্ট্যাম্পযুক্ত মূল আর্বিট্রেশন রোয়েদাদ ও নোটিশ রসিদ', hi: 'स्टांपित मूल मध्यस्थता पंचाट एवं तामिला पावती' },
        issuing_authority: { en: 'Sole Arbitrator / Arbitral Tribunal', bn: 'সালিশি ট্রাইব্যুনাল', hi: 'मध्यस्थता अधिकरण' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-48',
    productCategory: 'free-checklist',
    title: {
      en: 'Insurance Agents Suing for Unlawfully Withheld Commissions',
      bn: 'বীমা এজেন্টদের বকেয়া কমিশন আটকে রাখলে মামলা',
      hi: 'बीमा एजेंटों का बकाया नवीनीकरण कमीशन अवैध रूप से रोकने पर वाद'
    },
    relevant_act: 'IRDAI (Insurance Agents) Regulations, 2016 r/w Contract Act',
    summary: {
      en: 'Recovering lifetime renewal commission dues unlawfully seized by insurance companies following agent termination.',
      bn: 'দীর্ঘদিন কাজ করার পর হঠাৎ এজেন্ট লাইসেন্স বাতিল করে আজীবন প্রাপ্য রিনিউয়াল কমিশন আটকে দেওয়া বন্ধের মামলা।',
      hi: 'एजेंसी समाप्त करने के बाद भी बीमा एजेंट को आजीवन मिलने वाले नवीनीकरण कमीशन की विधिक वसूली।'
    },
    authority_forum: {
      en: 'Civil Court / Insurance Regulatory Authority (IRDAI)',
      bn: 'দেওয়ানি আদালত / আইআরডিএআই (IRDAI)',
      hi: 'सिविल न्यायालय / आईआरडीएआई (IRDAI)'
    },
    forum_type: 'Competent_Authority',
    is_complex: false,
    official_portal_url: 'https://irdai.gov.in/',
    statutory_timeframe: {
      en: '6 months to 1 year',
      bn: '৬ মাস থেকে ১ বছর',
      hi: '6 माह से 1 वर्ष'
    },
    search_keywords: {
      en: ['insurance agent renewal commission', 'irdai agent protection rules', 'unpaid commission lawsuit'],
      bn: ['বীমা এজেন্ট কমিশন বকেয়া', 'রিনিউয়াল কমিশন মামলা', 'আইআরডিএআই এজেন্ট নিয়ম'],
      hi: ['बीमा एजेंट कमीशन वाद', 'आईआरडीएआई एजेंट नियम', 'नवीनीकरण कमीशन बकाया']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Review agency agreement and prove compliance with 5-year/10-year service threshold for renewal rights.',
        'Serve demand notice on insurance company zonal manager demanding release of accrued renewal ledger.',
        'File formal regulatory complaint before IRDAI Grievance Officer for breach of Agent Protection Norms.',
        'If unpaid, file Civil Summary Suit before Civil Judge (Senior Division) for liquidated commission dues.'
      ],
      bn: [
        'এজেন্সি চুক্তি খতিয়ে দেখে প্রমাণ করুন আজীবন কমিশনের জন্য প্রয়োজনীয় ৫/১০ বছরের কার্যকাল পূর্ণ ছিল।',
        'বকেয়া রিনিউয়াল কমিশনের হিসাব মেটাতে কোম্পানির জোনাল ম্যানেজারের কাছে লিগ্যাল নোটিশ দিন।',
        'এজেন্ট সুরক্ষা আইন ভঙ্গের অভিযোগে আইআরডিএআই-এর কাছে আনুষ্ঠানিক অভিযোগ জানান।',
        'টাকা না দিলে দেওয়ানি আদালতে বকেয়া কমিশনের সম্পূর্ণ টাকা সুদসহ আদায়ের মামলা দায়ের করুন।'
      ],
      hi: [
        'एजेंसी अनुबंध से सिद्ध करें कि आजीवन नवीनीकरण कमीशन पाने हेतु आवश्यक सेवा अवधि पूरी थी।',
        'बीमा कंपनी के जोनल मैनेजर को बकाया कमीशन लेजर जारी करने का वैधानिक मांग पत्र भेजें।',
        'एजेंट संरक्षण नियमों के उल्लंघन हेतु बीमा नियामक आईआरडीएआई में शिकायत दर्ज कराएं।',
        'भुगतान न होने पर सिविल जज के समक्ष बकाया कमीशन की ब्याज सहित वसूली का वाद दायर करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-48-1',
        name: { en: 'Agent Appointment Letter, IRDAI License & Renewal Commission Statements', bn: 'এজেন্ট নিয়োগপত্র, লাইসেন্স ও কমিশনের স্টেটমেন্ট', hi: 'एजेंट नियुक्ति पत्र, आईआरडीएआई लाइसेंस एवं कमीशन लेजर' },
        issuing_authority: { en: 'Insurance Company / IRDAI', bn: 'বীমা সংস্থা / আইআরডিএআই', hi: 'बीमा कंपनी / आईआरडीएआई' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-49',
    productCategory: 'lawyer-only',
    title: {
      en: 'Third-Party Garnishee Notices to Recover Judgment Debt',
      bn: 'দেনাদারের পাওনাদারদের সরাসরি টাকা আদালতে জমার নোটিস',
      hi: 'थर्ड-पार्टी गार्निशी नोटिस द्वारा देनदार के बकायेदारों से सीधी वसूली'
    },
    relevant_act: 'Order XXI Rules 46A–46I, Code of Civil Procedure, 1908',
    summary: {
      en: 'Directing third-party clients, tenants, or debtors of the judgment debtor to pay their dues directly to court to satisfy decree.',
      bn: 'টাকার মামলায় জেতার পর দেনাদার টাকা না দিলে সে অন্য যাদের কাছে টাকা বা ভাড়া পায় তাদের ওপর সরাসরি কোর্ট নোটিস দিয়ে টাকা আদায়।',
      hi: 'देनदार के किरायेदारों या ग्राहकों को नोटिस देकर देनदार को किराया/पैसा देने के बजाय सीधे अदालत में जमा कराना।'
    },
    authority_forum: {
      en: 'Civil Executing Court',
      bn: 'দেওয়ানি এক্সিকিউটিং আদালত',
      hi: 'सिविल निष्पादन न्यायालय'
    },
    forum_type: 'Civil_Court',
    is_complex: true,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '30 to 60 working days',
      bn: '৩০ থেকে ৬০ কার্যদিবস',
      hi: '30 से 60 कार्यदिवस'
    },
    search_keywords: {
      en: ['third party garnishee order xxi rule 46a', 'intercept debtor receivables court', 'garnishee execution cpc'],
      bn: ['গ্যার্নিশি নোটিস সিপিসি', 'দেনাদারের পাওনাদার থেকে আদায়', 'অর্ডার ২১ রুল ৪৬এ'],
      hi: ['थर्ड पार्टी गार्निशी नोटिस', 'आदेश 21 नियम 46A', 'देनदार की वसूली जब्ती']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Identify third parties (e.g. corporate clients, tenants) who owe liquidated money to judgment debtor.',
        'File application under Order XXI Rule 46A CPC praying for issuance of a Garnishee Notice.',
        'Court serves notice directing third party to appear and deposit owed amount into court.',
        'If third party defaults or pays debtor secretly, court issues execution directly against third party.'
      ],
      bn: [
        'খোঁজ নিয়ে দেনাদারের ভাড়াটে বা বাণিজ্যিক ক্লায়েন্টদের তালিকা ও প্রদেয় টাকার হিসাব বের করুন।',
        'অর্ডার ২১ রুল ৪৬এ সিপিসি অনুযায়ী সেই তৃতীয় পক্ষের নামে গ্যার্নিশি নোটিশ জারির আবেদন দিন।',
        'আদালত তৃতীয় পক্ষকে নোটিশ দিয়ে দেনাদারকে টাকা না দিয়ে সরাসরি আদালতে টাকা জমার নির্দেশ দেবে।',
        'তৃতীয় পক্ষ আদেশ অমান্য করে দেনাদারকে টাকা দিলে আদালত স্বয়ং তার বিরুদ্ধেই ডিক্রি জারি করবে।'
      ],
      hi: [
        'उन ग्राहकों या किरायेदारों की पहचान करें जो देनदार को नियमित किराया या बिल चुकाते हैं।',
        'आदेश 21 नियम 46A सीपीसी में तीसरे पक्ष के नाम गार्निशी समन जारी करने की अर्जी दें।',
        'अदालत नोटिस देकर आदेश देगी कि देनदार को भुगतान न कर सीधे अदालत में पैसा जमा करें।',
        'आदेश का उल्लंघन कर देनदार को भुगतान करने पर अदालत तीसरे पक्ष के विरुद्ध ही कुर्की निकालेगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-49-1',
        name: { en: 'Affidavit Identifying Third-Party Debts to Judgment Debtor', bn: 'তৃতীয় পক্ষের কাছে দেনাদারের পাওনার প্রামাণ্য হলফনামা', hi: 'देनदार के बकायेदारों का विवरण शपथ पत्र' },
        issuing_authority: { en: 'Decree Holder / Notary Public', bn: 'বাদী / নোটারি', hi: 'डिक्री धारक / नोटरी' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-50',
    productCategory: 'free-checklist',
    title: {
      en: 'Bank Non-Performing Asset (NPA) Lok Adalat Compromise',
      bn: 'এনপিএ লোন লোক আদালতে সমঝোতা ও নিষ্পত্তি',
      hi: 'बैंक एनपीए (NPA) ऋण का राष्ट्रीय लोक अदालत में अंतिम समझौता'
    },
    relevant_act: 'Legal Services Authorities Act, 1987 r/w RBI NPA Settlement Norms',
    summary: {
      en: 'Settling bad commercial loans with banking institutions at deep discounts (waiving compound interest) with zero court fees.',
      bn: 'এনপিএ হয়ে যাওয়া ব্যাঙ্ক লোনের সমস্ত চক্রবৃদ্ধি সুদ মকুব করিয়ে জাতীয় লোক আদালতে সস্তায় ফুল অ্যান্ড ফাইনাল সেটেলমেন্ট।',
      hi: 'बैंक एनपीए कर्ज का राष्ट्रीय लोक अदालत में भारी छूट के साथ बिना किसी अदालती फीस के पूर्ण निपटारा।'
    },
    authority_forum: {
      en: 'National Lok Adalat (DLSA / High Court)',
      bn: 'জাতীয় লোক আদালত (DLSA / হাইকোর্ট)',
      hi: 'राष्ट्रीय लोक अदालत (DLSA / हाईकोर्ट)'
    },
    forum_type: 'Lok_Adalat',
    is_complex: false,
    official_portal_url: 'https://wbnlsa.gov.in/',
    statutory_timeframe: {
      en: 'Single-day binding judicial award',
      bn: 'একদিনেই চূড়ান্ত ও বাধ্যতামূলক রায়',
      hi: 'एक ही दिन में अंतिम बाध्यकारी निर्णय'
    },
    search_keywords: {
      en: ['npa settlement lok adalat', 'bank loan one time settlement discount', 'dlsa lok adalat npa compromise'],
      bn: ['এনপিএ লোন মীমাংসা', 'লোক আদালত ব্যাঙ্ক লোন ছাড়', 'ডিএলএসএ লোন সেটেলমেন্ট'],
      hi: ['एनपीए लोन लोक अदालत', 'बैंक कर्ज समझौता छूट', 'लोक अदालत ओटीएस']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Receive pre-litigation Lok Adalat summons or request bank to place NPA file before upcoming Lok Adalat.',
        'Prepare upfront settlement offer based on borrower liquidatable net worth and genuine hardship proof.',
        'Appear before Lok Adalat Bench comprising a Judicial Officer and senior legal aid advocate.',
        'Execute compromised settlement award; award is final, non-appealable, and entitles borrower to 100% court fee refund.'
      ],
      bn: [
        'লোক আদালতের নোটিশ নিন অথবা নিজের ঋণ ফাইলটি লোক আদালতে পাঠানোর আবেদন দিন।',
        'আর্থিক দুর্দশার নথি দেখিয়ে এককালীন টাকা দেওয়ার প্রস্তাবপত্র প্রস্তুত করুন।',
        'বিচারক ও প্যানেল আইনজীবীর সমন্বয়ে গঠিত জাতীয় লোক আদালতের বেঞ্চে শুনানিতে অংশ নিন।',
        'সুদ মকুবের আপস চুক্তি সই করে রায় নিন; এই রায়ের কোনো আপিল হয় না এবং ব্যাঙ্ক নো-ডিউজ দেবে।'
      ],
      hi: [
        'लोक अदालत नोटिस के साथ अथवा स्वयं बैंक से फाइल लोक अदालत में भेजने को कहें।',
        'आर्थिक संकट का प्रमाण देकर अपनी क्षमता अनुसार एकमुश्त भुगतान का प्रस्ताव तैयार करें।',
        'न्यायिक अधिकारी एवं वरिष्ठ अधिवक्ता वाली राष्ट्रीय लोक अदालत बेंच के समक्ष उपस्थित हों।',
        'समझौता पंचाट निष्पादित करें; यह फैसला गैर-अपीलीय होगा और बैंक तुरंत पूर्ण एनओसी जारी करेगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-50-1',
        name: { en: 'Bank Lok Adalat Notice & Hardship Income Proof', bn: 'লোক আদালতের নোটিশ ও আর্থিক দুর্গতির প্রমাণপত্র', hi: 'लोक अदालत नोटिस एवं वित्तीय संकट का आय प्रमाणपत्र' },
        issuing_authority: { en: 'District Legal Services Authority (DLSA) / Bank', bn: 'ডিএলএসএ / ব্যাঙ্ক', hi: 'विधिक सेवा प्राधिकरण / बैंक' },
        is_mandatory: true
      }
    ]
  }
];