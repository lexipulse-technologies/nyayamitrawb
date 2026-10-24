import type { CivilSubCategory } from '../../../types/legal';

export const tenancyPart2: CivilSubCategory[] = [
  {
    id: 'sub-tenancy-26',
    productCategory: 'free-checklist',
    title: {
      en: 'Sub-Tenant Protection in Collusive Tenancy Surrenders',
      bn: 'বাড়িওয়ালা ও মূল ভাড়াটের আঁতাতে উপ-ভাড়াটে উচ্ছেদ রদ',
      hi: 'मकान मालिक व मुख्य किरायेदार की मिलीभगत से उप-किरायेदार बेदखली पर रोक'
    },
    relevant_act: 'Sec 26, West Bengal Premises Tenancy Act, 1997',
    summary: {
      en: 'Protecting registered sub-tenants when primary tenants secretly surrender their lease to force out sub-tenants.',
      bn: 'বাড়িওয়ালা ও মূল ভাড়াটের চক্রান্তে উপ-ভাড়াটে উচ্ছেদ রুখতে সরাসরি মূল ভাড়াটে স্বত্ব লাভের প্রক্রিয়া।',
      hi: 'मुख्य किरायेदार द्वारा चुपके से लीज सरेंडर कर उप-किरायेदार को बेदखल करने की साजिश के विरुद्ध सुरक्षा।'
    },
    authority_forum: {
      en: 'Rent Controller Court (SDO in Districts / Kolkata Bench)',
      bn: 'রেন্ট কন্ট্রোলার আদালত (জেলায় SDO / কলকাতা বেঞ্চ)',
      hi: 'रेंट कंट्रोलर न्यायालय (जिलों में एसडीओ / कोलकाता)'
    },
    forum_type: 'Rent_Controller',
    is_complex: true,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '30 working days',
      bn: '৩০ কার্যদিবস',
      hi: '30 कार्यदिवस'
    },
    search_keywords: {
      en: ['collusive surrender tenancy', 'subtenant direct tenant', 'section 26 wbpt subtenant protection'],
      bn: ['উপ-ভাড়াটে সুরক্ষা', 'চক্রান্তমূলক সারেন্ডার', 'সরাসরি ভাড়াটে অধিকার'],
      hi: ['उप-किरायेदार संरक्षण', 'मिलीभगत से सरेंडर', 'धारा 26 प्रत्यक्ष किरायेदार']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Produce written proof that subletting was with landlord consent or notified under Section 26.',
        'Upon learning of collusive surrender, file petition before Rent Controller claiming direct tenancy.',
        'Tender rent directly to the superior landlord; if refused, deposit under Section 21 WBPT Act.',
        'Obtain injunction restraining landlord from taking physical possession without a civil decree.'
      ],
      bn: [
        'প্রমাণপত্র দিন যে উপ-ভাড়াটে বসানোর ব্যাপারে বাড়িওয়ালার লিখিত সম্মতি বা আইনি নোটিশ ছিল।',
        'মূল ভাড়াটের চক্রান্তমূলক ত্যাগের পর রেন্ট কন্ট্রোলারের কাছে সরাসরি ভাড়াটে স্বীকৃতির আবেদন দিন।',
        'বাড়িওয়ালাকে সরাসরি ভাড়া দিন; প্রত্যাখ্যান করলে ধারা ২১ অনুযায়ী সরকারি ট্রেজারিতে জমা করুন।',
        'আদালত থেকে অন্তর্বর্তী আদেশ নিয়ে আইনি ডিক্রি ব্যতিরেকে উচ্ছেদ কার্যক্রম স্থগিত করান।'
      ],
      hi: [
        'सिद्ध करें कि उप-किरायेदारी मकान मालिक की लिखित सहमति या धारा 26 की सूचना से थी।',
        'सरेंडर की जानकारी मिलते ही रेंट कंट्रोलर के पास सीधे किरायेदार घोषित करने का वाद दें।',
        'मकान मालिक को सीधा किराया भेजें; मना करने पर धारा 21 में सरकारी चालान से जमा करें।',
        'बिना विधिक अदालती डिक्री मकान खाली कराने पर न्यायालय से स्थगनादेश प्राप्त करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-26-1',
        name: { en: 'Written Notice of Sub-Tenancy under Section 26', bn: 'ধারা ২৬ অনুযায়ী উপ-ভাড়াটের আইনি নোটিশ', hi: 'धारा 26 के तहत उप-किरायेदारी की विधिक सूचना' },
        issuing_authority: { en: 'Chief Tenant / India Post', bn: 'মূল ভাড়াটে / ডাক বিভাগ', hi: 'मुख्य किरायेदार / डाक विभाग' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-27',
    productCategory: 'free-checklist',
    title: {
      en: 'Landlord Refusal to Issue Legal Rent Receipts',
      bn: 'ভাড়ার সরকারি রশিদ না দেওয়া এবং দণ্ডমূলক প্রতিকার',
      hi: 'मकान मालिक द्वारा किराया रसीद न देने पर दंडात्मक कार्रवाई'
    },
    relevant_act: 'Sec 23, West Bengal Premises Tenancy Act, 1997',
    summary: {
      en: 'Penalizing landlords who refuse signed receipts and validating bank passbooks/UPI logs as legal evidence.',
      bn: 'ভাড়ার টাকা নিয়েও রসিদ দিতে অস্বীকারকারী বাড়িওয়ালার বিরুদ্ধে জরিমানা ও আইনি প্রতিকার।',
      hi: 'किराया लेकर लिखित रसीद न देने वाले मकान मालिकों पर जुर्माना एवं बैंक रिकॉर्ड की मान्यता।'
    },
    authority_forum: {
      en: 'Rent Controller Court (SDO in Districts / Kolkata Bench)',
      bn: 'রেন্ট কন্ট্রোলার আদালত (জেলায় SDO / কলকাতা বেঞ্চ)',
      hi: 'रेंट कंट्रोलर न्यायालय'
    },
    forum_type: 'Rent_Controller',
    is_complex: false,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '30 working days',
      bn: '৩০ কার্যদিবস',
      hi: '30 কার্যদিবস'
    },
    search_keywords: {
      en: ['landlord refusing rent receipt', 'section 23 wbpt fine', 'upi rent payment proof'],
      bn: ['ভাড়ার রসিদ দিচ্ছে না', 'ধারা ২৩ ডব্লুবিপিটি', 'রেন্ট কন্ট্রোলার জরিমানা'],
      hi: ['किराया रसीद न देना', 'धारा 23 जुर्माना', 'यूपीआई किराया साक्ष्य']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Pay monthly rent exclusively via bank transfer (NEFT/UPI) or postal money order with clear memo.',
        'Send registered demand letter requesting signed paper receipts for last 12 months under Section 23.',
        'If landlord refuses, file application before Rent Controller praying for penal action and receipt issuance.',
        'Rent Controller summons landlord, levies fine up to double the rent, and certifies payments on record.'
      ],
      bn: [
        'ব্যাঙ্ক ট্রান্সফার (NEFT/UPI) বা পোস্টাল মানি অর্ডারের মাধ্যমে নির্দিষ্ট কারণ লিখে ভাড়া পাঠান।',
        'বিগত ১২ মাসের স্বাক্ষরিত রসিদ চেয়ে ধারা ২৩ অনুযায়ী বাড়িওয়ালাকে রেজিস্ট্রি চিঠি দিন।',
        'রসিদ না দিলে রেন্ট কন্ট্রোলারের এজলাসে বাড়িওয়ালার বিরুদ্ধে জরিমানা ও রসিদের মামলা করুন।',
        'রেন্ট কন্ট্রোলার বাড়িওয়ালাকে তলব করে ভাড়ার দ্বিগুণ পর্যন্ত জরিমানা ও রসিদ বই তলব করবেন।'
      ],
      hi: [
        'माह का उल्लेख करते हुए किराया हमेशा बैंक ट्रांसफर (NEFT/UPI) अथवा मनी ऑर्डर से दें।',
        'धारा 23 के तहत विगत 12 माह की रसीदें जारी करने हेतु पंजीकृत मांग पत्र भेजें।',
        'मकान मालिक के टालमटोल पर रेंट कंट्रोलर के समक्ष दंड एवं रसीद दिलाने की याचिका दें।',
        'रेंट कंट्रोलर मकान मालिक पर मासिक किराये का दोगुना जुर्माना लगाकर भुगतान प्रमाणित करेंगे।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-27-1',
        name: { en: 'Bank Account Passbook / UPI Electronic Statements', bn: 'ব্যাঙ্ক পাসবুক বা ইউপিআই পেমেন্ট স্টেটমেন্ট', hi: 'बैंक पासबुक / यूपीआई डिजिटल भुगतान पर्ची' },
        issuing_authority: { en: 'Commercial Bank / Payment Gateway', bn: 'ব্যাঙ্ক', hi: 'बैंक / पेमेंट गेटवे' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-28',
    productCategory: 'free-checklist',
    title: {
      en: 'Tenant Right of Pre-emption / First Refusal to Buy',
      bn: 'ভাড়া বাড়ি বিক্রির ক্ষেত্রে ভাড়াটের প্রথম ক্রয়ের অধিকার',
      hi: 'किराये की संपत्ति बिक्री पर किरायेदार का पहला खरीद अधिकार (ROFR)'
    },
    relevant_act: 'Specific Relief Act, 1963 & Indian Contract Act, 1872',
    summary: {
      en: 'Enforcing lease covenants granting long-term tenants first option to match external purchase offers.',
      bn: 'ভাড়া চুক্তিতে অগ্রাধিকারের শর্ত থাকলে বহিরাগতের আগে ভাড়াটের বাড়ি কেনার আইনগত অধিকার বলবৎকরণ।',
      hi: 'मकान मालिक द्वारा किराये का घर बेचने पर अनुबंध के आधार पर किरायेदार को पहला क्रय अधिकार दिलाना।'
    },
    authority_forum: {
      en: 'Civil Court (Specific Performance Bench) / City Civil Court',
      bn: 'দেওয়ানি আদালত (স্পেসিফিক পারফরম্যান্স বেঞ্চ)',
      hi: 'सिविल न्यायालय (विशिष्ट अनुतोष अधिकरण)'
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
      en: ['tenant right of first refusal', 'rofr lease clause', 'specific performance tenant buy'],
      bn: ['ভাড়াটের প্রথম ক্রয়ের অধিকার', 'বাড়ি ক্রয়ে অগ্রাধিকার', 'চুক্তি বাস্তবায়ন'],
      hi: ['किरायेदार खरीद अधिकार', 'पहला खरीद हक', 'विशिष्ट अनुतोष खरीद']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Verify rental contract contains an explicit Right of First Refusal (ROFR) or pre-emption clause.',
        'Upon landlord intent to sell, request written disclosure of third-party offer and match it in 30 days.',
        'If landlord secretly sells to an outsider, issue immediate legal notice asserting breach of contract.',
        'File Civil Suit for Specific Performance, depositing matching purchase consideration into court.'
      ],
      bn: [
        'ভাড়া চুক্তিপত্র খতিয়ে দেখে নিশ্চিত হন যে প্রথম ক্রয়ের অধিকারের (ROFR) ধারা অন্তর্ভুক্ত রয়েছে।',
        'বাড়িওয়ালা বাড়ি বিক্রি করতে চাইলে বহিরাগত ক্রেতার অফার প্রকাশ্যে এনে সমপরিমাণ টাকা অফার করুন।',
        'বাড়িওয়ালা গোপনে অন্য কারও কাছে বিক্রি করলে চুক্তিভঙ্গের কারণে রেজিস্ট্রি চ্যালেঞ্জের নোটিশ দিন।',
        'আদালতে সমপরিমাণ টাকা জমা রেখে চুক্তির শর্ত পালনে বাড়ি ক্রয়ের দেওয়ানি মামলা করুন।'
      ],
      hi: [
        'किराया अनुबंध में जांचें कि पहले खरीद के अधिकार (ROFR) की स्पष्ट शर्त मौजूद है या नहीं।',
        'बिक्री की सूचना पर तीसरे पक्ष के ऑफर की लिखित प्रति मांगें एवं 30 दिन में मैच करें।',
        'मकान मालिक द्वारा गुप्त रूप से बेचने पर अनुबंध उल्लंघन का कानूनी नोटिस प्रेषित करें।',
        'अदालत में उतनी राशि जमा कर संपत्ति अपने नाम पंजीकृत कराने का विशिष्ट अनुतोष वाद करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-28-1',
        name: { en: 'Tenancy Contract Containing ROFR Purchase Clause', bn: 'ক্রয়ের অগ্রাধিকার শর্তযুক্ত মূল ভাড়া চুক্তি', hi: 'क्रय प्राथमिकता शर्त युक्त मूल किराया अनुबंध' },
        issuing_authority: { en: 'Sub-Registrar (ADSR) / Notary', bn: 'সাব-রেজিস্ট্রার / নোটারি', hi: 'उप-पंजीयक / नोटरी' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-29',
    productCategory: 'lawyer-only',
    title: {
      en: 'Gated Society Maintenance Surcharges on Tenants',
      bn: 'সোসাইটির অতিরিক্ত রক্ষণাবেক্ষণ ফি নিয়ে বিরোধ',
      hi: 'हाउसिंग सोसाइटी द्वारा किरायेदारों पर अतिरिक्त मेंटेनेंस शुल्क'
    },
    relevant_act: 'WB Apartment Ownership Act, 1972 r/w CPA, 2019',
    summary: {
      en: 'Challenging discriminatory dual-pricing rules where RWAs charge tenants higher maintenance than flat owners.',
      bn: 'ফ্ল্যাট মালিকদের তুলনায় ভাড়াটেদের থেকে অতিরিক্ত মেইনটেন্যান্স বা ক্লাব ফি আদায়ের বিরুদ্ধে প্রতিকার।',
      hi: 'अपार्टमेंट सोसाइटी द्वारा मकान मालिकों की तुलना में किरायेदारों से अधिक मेंटेनेंस वसूलने पर रोक।'
    },
    authority_forum: {
      en: 'Competent Authority (Housing Dept) / Consumer Commission',
      bn: 'কম্পিটেন্ট অথরিটি (আবাসন দপ্তর) / উপভোক্তা আদালত',
      hi: 'सक्षम प्राधिकारी (आवास विभाग) / उपभोक्ता आयोग'
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
      en: ['rwa dual maintenance tenant', 'apartment ownership act wb', 'society overcharging tenant'],
      bn: ['সোসাইটির অতিরিক্ত চার্জ', 'ভাড়াটের মেইনটেন্যান্স বিরোধ', 'ফ্ল্যাট ওনার্স বৈষম্য'],
      hi: ['सोसाइटी मेंटेनेंस विवाद', 'किरायेदार से अधिक वसूली', 'आरडब्ल्यूए अवैध शुल्क']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain certified copy of RWA by-laws and circulars mandating higher fees for tenants.',
        'Issue legal notice asserting maintenance must match actual common expenses without discrimination.',
        'File complaint before Competent Authority under West Bengal Apartment Ownership Act.',
        'Move District Consumer Commission for refund of excess charges collected under threat of amenity cuts.'
      ],
      bn: [
        'আবাসন সমিতির বাই-ল ও নোটিশের কপি তুলুন যেখানে ভাড়াটেদের বেশি চার্জের উল্লেখ আছে।',
        'আইন অনুযায়ী মেইনটেন্যান্স খরচ সমান হওয়া বাধ্যতামূলক জানিয়ে কমিটিকে আইনি চিঠি দিন।',
        'পশ্চিমবঙ্গ অ্যাপার্টমেন্ট ওনারশিপ অ্যাক্টের আওতায় আবাসন দপ্তরে আনুষ্ঠানিক নালিশ জানান।',
        'পরিষেবা কাটার হুমকি দিয়ে নেওয়া অতিরিক্ত ফি ফেরতের দাবিতে ক্রেতা সুরক্ষা আদালতে মামলা করুন।'
      ],
      hi: [
        'सोसाइटी के उप-नियमों (By-laws) की प्रति निकालें जिसमें किरायेदारों पर ज्यादा शुल्क दर्ज हो।',
        'विधिक नोटिस देकर स्पष्ट करें कि वास्तविक खर्च के अलावा कोई भेदभावपूर्ण शुल्क अवैध है।',
        'अपार्टमेंट ओनरशिप एक्ट के तहत सक्षम आवास प्राधिकारी के समक्ष शिकायत दर्ज कराएं।',
        'लिफ्ट या सुविधाएं रोकने की धमकी देकर वसूली गई अतिरिक्त राशि वापसी हेतु उपभोक्ता फोरम जाएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-29-1',
        name: { en: 'RWA Maintenance Circular & Discriminatory Invoices', bn: 'সোসাইটির দ্বৈত ফি ধার্যের সার্কুলার ও বিল', hi: 'सोसाइटी मेंटेनेंस बिल एवं सर्कुलर' },
        issuing_authority: { en: 'Apartment Owners Association (RWA)', bn: 'আবাসন সমিতি (RWA)', hi: 'अपार्टमेंट एसोसिएशन' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-30',
    productCategory: 'free-checklist',
    title: {
      en: 'Tenant Making Structural Alterations Without Written NOC',
      bn: 'বাড়িওয়ালার অনুমতি ছাড়া দেওয়াল বা ছাদ ভাঙা প্রতিরোধ',
      hi: 'बिना अनुमति किरायेदार द्वारा दीवार या छत तोड़ने पर कानूनी रोक'
    },
    relevant_act: 'Sec 6(1)(e) & 108(p) TP Act r/w WBPT Act',
    summary: {
      en: 'Emergency injunctions and eviction orders against tenants knocking down load-bearing walls without NOC.',
      bn: 'অনুমতি না নিয়ে ভাড়াটে লোড-বেয়ারিং দেওয়াল বা মূল কাঠামো ভাঙচুর করলে দ্রুত উচ্ছেদ ও নিষেধাজ্ঞা।',
      hi: 'मकान मालिक की लिखित अनुमति के बिना मुख्य दीवारें तोड़ने या स्थायी ढांचा बदलने पर रोक व बेदखली।'
    },
    authority_forum: {
      en: 'Civil Court (Civil Judge Division) / City Civil Court',
      bn: 'দেওয়ানি আদালত (সিভিল জজ) / সিটি সিভিল কোর্ট',
      hi: 'सिविल न्यायालय (सिविल जज)'
    },
    forum_type: 'Civil_Court',
    is_complex: false,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '24 to 48 hours (Interim Injunction)',
      bn: '২৪ থেকে ৪৮ ঘণ্টা (অন্তর্বর্তী নিষেধাজ্ঞা)',
      hi: '24 से 48 घंटे (अंतरिम स्थगनादेश)'
    },
    search_keywords: {
      en: ['unauthorized alteration tenant', 'section 6 1 e wbpt', 'knocking down walls tenant injunction'],
      bn: ['দেওয়াল ভাঙা ভাড়াটে', 'কাঠামো ক্ষতিসাধন', 'ধারা ৬(১)(ই)'],
      hi: ['किरायेदार द्वारा तोड़फोड़', 'दीवार गिराना बेदखली', 'धारा 6(1)(e)']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Capture real-time photographic evidence of unauthorized wall demolition or construction.',
        'Lodge immediate General Diary (GD) with local police station and alert municipal surveyor.',
        'File Title Eviction Suit under Section 6(1)(e) WBPT Act with urgent ex-parte injunction petition.',
        'Obtain mandatory injunction directing tenant to restore damaged structure at their personal cost.'
      ],
      bn: [
        'অননুমোদিত দেওয়াল ভাঙা বা রাজমিস্ত্রি দিয়ে নির্মাণের ছবি ও ভিডিও প্রমাণ সংগ্রহ করুন।',
        'স্থানীয় থানায় অবিলম্বে জিডি করুন এবং পুরসভার বিল্ডিং সার্ভেয়ারকে লিখিতভাবে জানান।',
        'ডব্লুবিপিটি আইনের ধারা ৬(১)(ঙ) অনুযায়ী উচ্ছেদ মামলা করে জরুরি ইনজাংশনের আবেদন দিন।',
        'আদালত থেকে আদেশ নিয়ে ভাড়াটের নিজস্ব খরচে পূর্বাবস্থায় কাঠামো মেরামতের নির্দেশ করান।'
      ],
      hi: [
        'दीवार गिराने अथवा अनधिकृत निर्माण के तत्काल फोटो व वीडियो साक्ष्य जुटाएं।',
        'स्थानीय थाने में जीडी दर्ज कराएं एवं नगरपालिका के भवन निरीक्षक को सूचना दें।',
        'धारा 6(1)(e) के तहत बेदखली वाद दायर कर तुरंत काम रोकने का एकपक्षीय स्थगनादेश लें।',
        'अदालत से आदेशात्मक निर्देश प्राप्त कर किरायेदार के खर्चे पर पुनः मूल स्थिति बहाल कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-30-1',
        name: { en: 'Photographic Evidence of Demolition / Structural Damage', bn: 'দেওয়াল ভাঙার ছবি ও ইঞ্জিনিয়ারিং ক্ষতিপূরণ রিপোর্ট', hi: 'तोड़फोड़ के स्पष्ट फोटो एवं क्षति मूल्यांकन' },
        issuing_authority: { en: 'Complainant / Licensed Civil Surveyor', bn: 'বাড়িওয়ালা / ইঞ্জিনিয়ার', hi: 'मकान मालिक / सर्वेक्षक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-31',
    productCategory: 'lawyer-only',
    title: {
      en: 'Tenancy at Will vs Tenancy at Sufferance Liabilities',
      bn: 'মেয়াদোত্তীর্ণ বৈধ বনাম অবৈধ ভাড়াটের আইনি পার্থক্য',
      hi: 'सहमति से अतिरिक्त ठहराव (एट विल) बनाम अवैध ठहराव (सफरेंस) देनदारी'
    },
    relevant_act: 'Sec 106 & 111, Transfer of Property Act, 1882',
    summary: {
      en: 'Calculating legal liabilities when a landlord stops accepting rent versus when landlord expressly consents to holding over.',
      bn: 'বাড়িওয়ালা ভাড়া নেওয়া বন্ধ করলে অনুপ্রবেশকারী বনাম সম্মতিক্রমে থাকার আইনি দেনা-পাওনা।',
      hi: 'किराया स्वीकार न करने पर अवैध दखलकार मानने एवं हर्जाना तय करने के विधिक नियम।'
    },
    authority_forum: {
      en: 'Civil Court',
      bn: 'দেওয়ানি আদালত',
      hi: 'सिविल न्यायालय'
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
      en: ['tenancy at sufferance', 'tenancy at will liabilities', 'holding over tp act rent'],
      bn: ['টেন্যান্সি অ্যাট উইল', 'টেন্যান্সি অ্যাট সাফারেন্স', 'হোল্ডিং ওভার ভাড়া'],
      hi: ['सफरेंस किरायेदारी', 'टेनेंसी एट विल', 'अवैध ठहराव देनदारी']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Determine whether tenant holds over with consent (Tenancy at Will) or without (Tenancy at Sufferance).',
        'If rent was accepted post-expiry, serve statutory 15-day notice under Section 106 to terminate tenancy.',
        'If rent was refused, institute suit for recovery of possession against Tenant at Sufferance as trespasser.',
        'Claim full mesne profits and occupational charges assessed on prevailing commercial market rates.'
      ],
      bn: [
        'যাচাই করুন ভাড়াটে সম্মতিক্রমে রয়েছে (অ্যাট উইল) নাকি সম্পূর্ণ অনুমতিহীনভাবে (অ্যাট সাফারেন্স)।',
        'মেয়াদ শেষের পরও ভাড়া নিয়ে থাকলে ধারা ১০৬ অনুযায়ী ১৫ দিনের আনুষ্ঠানিক উচ্ছেদ নোটিশ দিন।',
        'ভাড়া প্রত্যাখ্যান করা হয়ে থাকলে অনুপ্রবেশকারী হিসেবে সরাসরি ঘর উদ্ধারের মামলা করুন।',
        'বর্তমান বাণিজ্যিক বাজার দরের ভিত্তিতে সম্পূর্ণ সময়কালের ক্ষতিপূরণ ও ভাড়া ডিক্রি করান।'
      ],
      hi: [
        'निर्धारित करें कि ठहराव मकान मालिक की सहमति से है अथवा बिना सहमति के अवैध कब्जा।',
        'यदि बाद में भी किराया लिया गया था, तो धारा 106 के तहत 15 दिन का समाप्ति नोटिस दें।',
        'यदि किराया लेने से मना किया गया था, तो अतिचारी मानकर तुरंत कब्जा बहाली का वाद करें।',
        'वर्तमान बाजार दरों के आधार पर संपूर्ण अनधिकृत अवधि का पूरा हर्जाना अदालत से वसूलें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-31-1',
        name: { en: 'Notice of Refusal to Hold Over / Bank Statements', bn: 'ভাড়া প্রত্যাখানের নোটিশ ও ব্যাঙ্ক বিবরণী', hi: 'किराया अस्वीकृति नोटिस व बैंक स्टेटमेंट' },
        issuing_authority: { en: 'Landlord / India Post', bn: 'বাড়িওয়ালা', hi: 'मकान मालिक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-32',
    productCategory: 'free-checklist',
    title: {
      en: 'Industrial Warehouse & Logistics Space Eviction',
      bn: 'শিল্প গুদাম ও লজিস্টিক হাবের বকেয়া ভাড়া ও উচ্ছেদ',
      hi: 'औद्योगिक गोदाम एवं लॉजिस्टिक्स परिसर से बेदखली व बकाया वसूली'
    },
    relevant_act: 'Commercial Courts Act, 2015 r/w Transfer of Property Act',
    summary: {
      en: 'Fast-track commercial eviction, attachment of stored goods, and recovery of high-value freight warehousing arrears.',
      bn: 'গুদাম ও ইন্ডাস্ট্রিয়াল শেডের লক্ষাধিক টাকার বকেয়া ভাড়া আদায় ও মালপত্র ক্রোক করে উচ্ছেদ।',
      hi: 'लॉजिस्टिक्स गोदाम का भारी किराया बकाया होने पर अंदर रखे माल की कुर्की एवं बेदखली।'
    },
    authority_forum: {
      en: 'Designated Commercial Court',
      bn: 'বাণিজ্যিক আদালত',
      hi: 'वाणिज्यिक न्यायालय'
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
      en: ['warehouse lease eviction', 'commercial godown rent recovery', 'attachment of warehouse goods'],
      bn: ['গুদাম উচ্ছেদ', 'লজিস্টিক শেড ভাড়া', 'গুদামের মাল ক্রোক'],
      hi: ['गोदाम बेदखली', 'वेयरहाउस किराया वसूली', 'गोदाम माल जब्ती']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Audit commercial lease agreement and quantify unpaid warehousing rent and CAM charges.',
        'Complete pre-institution mediation under Section 12A Commercial Courts Act through DLSA.',
        'File Commercial Eviction Suit praying for summary judgment under Order XIII-A CPC.',
        'Move urgent application under Order XXXVIII Rule 5 CPC for attachment of stored warehouse inventory.'
      ],
      bn: [
        'লিজ চুক্তি অডিট করে বকেয়া গুদাম ভাড়া ও বিদ্যুৎ-রক্ষণাবেক্ষণ ব্যয়ের সঠিক হিসাব করুন।',
        'বাণিজ্যিক আদালত আইনের ধারা ১২এ অনুযায়ী ডিএলএসএ-তে প্রি-ইনস্টিটিউশন মধ্যস্থতা শেষ করুন।',
        'অর্ডার ১৩-এ সিপিসি অনুযায়ী বাণিজ্যিক আদালতে সামারি জাজমেন্ট চেয়ে উচ্ছেদ মামলা করুন।',
        'অর্ডার ৩৮ রুল ৫ সিপিসি অনুযায়ী গুদামে মজুত থাকা মালপত্র ক্রোকের জরুরি আদেশ পান।'
      ],
      hi: [
        'लीज अनुबंध की जांच कर गोदाम का बकाया किराया एवं मेंटेनेंस का आधिकारिक ऑडिट करें।',
        'धारा 12A के तहत जिला विधिक सेवा प्राधिकरण से प्री-इंस्टीट्यूशन मध्यस्थता पूर्ण करें।',
        'आदेश 13-A सीपीसी के तहत त्वरित फैसले हेतु वाणिज्यिक बेदखली वाद दायर करें।',
        'आदेश 38 नियम 5 सीपीसी के तहत गोदाम में रखे व्यावसायिक माल की कुर्की का आदेश लें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-32-1',
        name: { en: 'Registered Commercial Warehouse Lease & Invoices', bn: 'রেজিস্ট্রি গুদাম লিজ ও জিএসটি ইনভয়েস', hi: 'पंजीकृत वेयरहाउस लीज एवं जीएसटी इनवॉयस' },
        issuing_authority: { en: 'Sub-Registrar (ADSR)', bn: 'সাব-রেজিস্ট্রার', hi: 'उप-पंजीयक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-33',
    productCategory: 'free-checklist',
    title: {
      en: 'Eviction Defense for Schools, Hospitals & Charities',
      bn: 'হাসপাতাল ও শিক্ষাপ্রতিষ্ঠানের ভাড়া উচ্ছেদে জনস্বার্থ সুরক্ষা',
      hi: 'स्कूल, अस्पताल एवं धर्मार्थ संस्थानों की बेदखली से जनहित सुरक्षा'
    },
    relevant_act: 'Sec 6, WBPT Act r/w Public Policy Exceptions',
    summary: {
      en: 'Extending academic session transitional protections against sudden commercial lockouts of public institutions.',
      bn: 'স্কুল, নার্সিংহোম বা দাতব্য প্রতিষ্ঠানের ক্ষেত্রে শিক্ষাবর্ষের মাঝে আকস্মিক উচ্ছেদ আটকানোর নিয়ম।',
      hi: 'स्कूल या अस्पताल को शैक्षणिक सत्र या मरीजों के इलाज के बीच में अचानक बेदखल करने पर कानूनी रोक।'
    },
    authority_forum: {
      en: 'Civil Court / High Court at Calcutta',
      bn: 'দেওয়ানি আদালত / কলকাতা হাইকোর্ট',
      hi: 'सिविल न्यायालय / उच्च न्यायालय'
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
      en: ['school eviction defense', 'hospital tenancy dispute', 'public interest tenancy stay'],
      bn: ['স্কুল উচ্ছেদ প্রতিরোধ', 'হাসপাতাল ভাড়া বিরোধ', 'জনস্বার্থ স্টে অর্ডার'],
      hi: ['स्कूल बेदखली सुरक्षा', 'अस्पताल किरायेदारी वाद', 'जनहित स्थगनादेश']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Reply to landlord notice highlighting premises house recognized education/health facilities.',
        'Offer current fair commercial rent and request an extended timeline until academic session ends.',
        'If landlord cuts utilities, apply to Rent Controller under Section 27 for immediate restoration.',
        'File an application before Civil Judge praying for an equitable balance-of-convenience stay.'
      ],
      bn: [
        'বাড়িওয়ালার নোটিশের জবাবে শিক্ষাপ্রতিষ্ঠান বা স্বাস্থ্য পরিষেবার অনুমোদনের নথি পেশ করুন।',
        'ন্যায্য ভাড়া দেওয়ার প্রতিশ্রুতি দিয়ে শিক্ষাবর্ষ শেষ না হওয়া পর্যন্ত সময়সীমা বৃদ্ধির চিঠি দিন।',
        'বাড়িওয়ালা জল বা বিদ্যুৎ কাটলে ধারা ২৭ অনুযায়ী রেন্ট কন্ট্রোলারের জরুরি পুনর্বহাল আদেশ নিন।',
        'জনস্বার্থ ও মানবিক কারণে উচ্ছেদের ওপর আদালতের ব্যালেন্স অব কনভেনিয়েন্স স্থগিতাদেশ নিন।'
      ],
      hi: [
        'नोटिस का उत्तर देकर मान्यता प्राप्त स्कूल अथवा अस्पताल संचालन के साक्ष्य प्रस्तुत करें।',
        'सत्र समाप्ति तक का समय मांगते हुए बाजार दर पर किराया देने की तत्परता दिखाएं।',
        'मकान मालिक द्वारा बिजली-पानी काटने पर धारा 27 में रेंट कंट्रोलर से तुरंत कनेक्शन जुड़वाएं।',
        'छात्रों व मरीजों के व्यापक हित में अदालत से सुविधा संतुलन (Balance of Convenience) पर रोक लें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-33-1',
        name: { en: 'Government School Recognition / Clinical Establishment License', bn: 'স্কুলের সরকারি স্বীকৃতি বা ক্লিনিক্যাল লাইসেন্স', hi: 'स्कूल मान्यता प्रमाणपत्र / अस्पताल संचालन लाइसेंस' },
        issuing_authority: { en: 'Education Dept / Health Dept', bn: 'শিক্ষা দপ্তর / স্বাস্থ্য দপ্তর', hi: 'शिक्षा विभाग / स्वास्थ्य विभाग' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-34',
    productCategory: 'free-checklist',
    title: {
      en: 'Expiry of 99-Year Leasehold Estate & Resumption',
      bn: '৯৯ বছরের দীর্ঘমেয়াদী লিজ মেয়াদপূর্তি ও পুনর্নবীকরণ বিরোধ',
      hi: '99 वर्षीय दीर्घकालिक पट्टा समाप्ति एवं फ्रीहोल्ड नवीनीकरण'
    },
    relevant_act: 'Transfer of Property Act r/w State Urban Land Allotment Policies',
    summary: {
      en: 'Resolving lease renewal and freehold conversion for Salt Lake (BMC/UD Dept) and district industrial plots facing government resumption.',
      bn: 'সল্টলেক বা সরকারি জমিতে ৯৯ বছরের লিজের মেয়াদ ফুরিয়ে গেলে লিজ নবায়ন বা ফ্রি-হোল্ড করার নিয়ম।',
      hi: 'सरकारी या ट्रस्ट की भूमि पर 99 साल की लीज अवधि पूरी होने पर उसे फ्रीहोल्ड में बदलवाने की प्रक्रिया।'
    },
    authority_forum: {
      en: 'Urban Development Department / High Court (Appellate Side)',
      bn: 'নগরোন্নয়ন দপ্তর / কলকাতা হাইকোর্ট',
      hi: 'नगर विकास विभाग / उच्च न्यायालय'
    },
    forum_type: 'High_Court',
    is_complex: true,
    official_portal_url: 'https://wburbanservices.gov.in/',
    statutory_timeframe: {
      en: '6 months to 1 year',
      bn: '৬ মাস থেকে ১ বছর',
      hi: '6 माह से 1 वर्ष'
    },
    search_keywords: {
      en: ['99 year lease expiry wb', 'leasehold to freehold salt lake', 'land resumption defense'],
      bn: ['৯৯ বছরের লিজ', 'লিজ থেকে ফ্রিহোল্ড', 'সল্টলেক জমি লিজ'],
      hi: ['99 साल की लीज', 'पट्टा नवीनीकरण', 'लीजहोल्ड से फ्रीहोल्ड']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Review original 99-year lease grant for renewal clauses, covenants for automatic extension, or heir rights.',
        'Submit application for Leasehold-to-Freehold Conversion under State Urban Development scheme.',
        'Pay prescribed government conversion and development charges via treasury challan.',
        'If government issues arbitrary resumption notice, file Writ Petition (Art 226) before High Court.'
      ],
      bn: [
        'মূল ৯৯ বছরের লিজ ডিড খতিয়ে দেখুন নবায়ন বা উত্তরাধিকারীদের স্বত্ব বহালের শর্ত কী রয়েছে।',
        'রাজ্য সরকারের নগরোন্নয়ন নীতি অনুযায়ী লিজহোল্ড থেকে ফ্রিহোল্ড রূপান্তরের আবেদন জমা দিন।',
        'সরকারি চালানের মাধ্যমে নির্ধারিত কনভার্সন ফি ও উন্নয়ন কর ট্রেজারিতে জমা করুন।',
        'সরকার একতরফাভাবে জমি বাজেয়াপ্ত করতে চাইলে কলকাতা হাইকোর্টে রিট পিটিশন করে স্থগিতাদেশ নিন।'
      ],
      hi: [
        'मूल 99 वर्षीय लीज डीड में नवीनीकरण एवं वैध वारिसों के अधिकारों की शर्तों की जांच करें।',
        'शहरी विकास विभाग की योजना के तहत पट्टे को फ्रीहोल्ड में बदलने का आवेदन दाखिल करें।',
        'ट्रेजरी चालान के माध्यम से निर्धारित सरकारी रूपांतरण शुल्क का भुगतान करें।',
        'सरकार द्वारा जमीन पुनः कब्जे का नोटिस देने पर उच्च न्यायालय में रिट कर रोक प्राप्त करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-34-1',
        name: { en: 'Original Registered 99-Year Lease Deed', bn: 'মূল রেজিস্ট্রি ৯৯ বছরের লিজ দলিল', hi: 'मूल पंजीकृत 99 वर्षीय पट्टा विलेख' },
        issuing_authority: { en: 'Urban Development Dept / ADSR', bn: 'নগরোন্নয়ন দপ্তর', hi: 'नगर विकास विभाग' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-35',
    productCategory: 'paid',
    title: {
      en: 'Tenant Installing Separate Electric Meter (CESC vs WBSEDCL)',
      bn: 'ভাড়াটের জন্য আলাদা বিদ্যুৎ মিটার ও বাড়িওয়ালার NOC (CESC বনাম WBSEDCL)',
      hi: 'किरायेदार हेतु स्वतंत्र बिजली मीटर (CESC बनाम WBSEDCL)'
    },
    relevant_act: 'Sec 43, Electricity Act, 2003 r/w WBERC Regulations',
    summary: {
      en: 'Compelling utility companies (CESC in Kolkata/Howrah; WBSEDCL in districts) to install independent meters without requiring landlord NOC upon proof of occupancy.',
      bn: 'বাড়িওয়ালার এনওসি ছাড়াই ভাড়াটের নিজের নামে স্বাধীন বিদ্যুৎ মিটার সংযোগ নেওয়ার আইনি অধিকার (কলকাতা/হাওড়ায় CESC বনাম জেলায় WBSEDCL)।',
      hi: 'मकान मालिक की एनओसी के बिना किरायेदार द्वारा स्वतंत्र बिजली मीटर पाना (कोलकाता में CESC बनाम जिलों में WBSEDCL)।'
    },
    authority_forum: {
      en: 'CGRF GRO (CESC / WBSEDCL) / High Court',
      bn: 'গ্রাহক অভিযোগ নিবারণ ফোরাম (GRO) / হাইকোর্ট',
      hi: 'विद्युत उपभोक्ता शिकायत फोरम / हाईकोर्ट'
    },
    forum_type: 'Electricity_Ombudsman',
    is_complex: false,
    official_portal_url: 'https://wberc.gov.in/',
    statutory_timeframe: {
      en: '30 working days',
      bn: '৩০ কার্যদিবস',
      hi: '30 कार्यदिवस'
    },
    search_keywords: {
      en: ['tenant electricity meter wb', 'cesc meter without landlord noc', 'wbsedcl separate meter tenant'],
      bn: ['ভাড়াটের বিদ্যুৎ মিটার', 'সিইএসসি মিটার এনওসি ছাড়া', 'ডব্লুবিএসইডিসিএল মিটার'],
      hi: ['किरायेदार बिजली मीटर', 'बिना एनओसी विद्युत कनेक्शन', 'धारा 43 विद्युत अधिनियम']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'WBSEDCL Customer Care Center / Regional GRO',
          bn: 'ডব্লুবিএসইডিসিএল কাস্টমার কেয়ার সেন্টার / রিজিওনাল জিআরও',
          hi: 'डब्ल्यूबीएसईडीसीएल ग्राहक सेवा केंद्र / क्षेत्रीय जीआरओ'
        },
        portal_name: { en: 'WBSEDCL Portal', bn: 'ডব্লুবিএসইডিসিএল পোর্টাল', hi: 'डब्ल्यूबीएसईडीसीएल' },
        portal_url: 'https://wbsedcl.in/',
        steps: {
          en: [
            'Apply online on WBSEDCL portal for domestic connection uploading rent receipts/tenancy agreement.',
            'If WBSEDCL issues objection citing lack of landlord NOC, submit representation citing Section 43.',
            'Lodge grievance before Regional Consumer Grievance Redressal Forum (CGRF).',
            'If denied, file Writ Petition before High Court; Calcutta HC precedent confirms power is an Article 21 right.'
          ],
          bn: [
            'ভাড়ার রসিদ দিয়ে ডব্লুবিএসইডিসিএল পোর্টালে আলাদা মিটারের অনলাইন আবেদন জমা দিন।',
            'বাড়িওয়ালার এনওসি নেই বলে বিদ্যুৎ বোর্ড আপত্তি জানালে ধারা ৪৩ উল্লেখ করে আইনি চিঠি দিন।',
            'বিদ্যুৎ আইন ধারা ৪২(৫) অনুযায়ী রিজিওনাল উপভোক্তা অভিযোগ ফোরামে নালিশ করুন।',
            'হাইকোর্টে রিট পিটিশন করুন; কলকাতা হাইকোর্টের রায় অনুযায়ী বিদ্যুৎ পাওয়া জীবনের মৌলিক অধিকার।'
          ],
          hi: [
            'किराया रसीद को कब्जे का प्रमाण मानकर डब्ल्यूबीएसईडीसीएल में मीटर का आवेदन करें।',
            'मकान मालिक की एनओसी न होने पर विद्युत अधिनियम की धारा 43 का हवाला देकर पत्र दें।',
            'धारा 42(5) के तहत क्षेत्रीय उपभोक्ता शिकायत निवारण फोरम के समक्ष वाद दायर करें।',
            'उच्च न्यायालय से आदेश लें; कलकत्ता हाईकोर्ट के अनुसार बिजली अनुच्छेद 21 का मौलिक अधिकार है।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'CESC Limited (Kolkata & Howrah Commercial Cell)',
          bn: 'সিইএসসি লিমিটেড (কলকাতা ও হাওড়া কমার্শিয়াল সেল)',
          hi: 'सीईएससी लिमिटेड (कोलकाता एवं हावड़ा)'
        },
        portal_name: { en: 'CESC Official Portal', bn: 'সিইএসসি অফিশিয়াল পোর্টাল', hi: 'सीईएससी पोर्टल' },
        portal_url: 'https://www.cesc.co.in/',
        steps: {
          en: [
            'Submit online new connection request on CESC portal with rent challan/receipt as occupancy proof.',
            'CESC inspector inspects meter board room; if landlord obstructs, inspector lodges police diary.',
            'File representation before Central Grievance Redressal Officer (CGRO) at Victoria House, Kolkata.',
            'High Court at Calcutta issues police assistance order commanding CESC to energize meter.'
          ],
          bn: [
            'ভাড়া রসিদ বা রেন্ট কন্ট্রোলার চালান দিয়ে সিইএসসি পোর্টালে নতুন মিটারের আবেদন করুন।',
            'সিইএসসি পরিদর্শক মিটার রুম দেখতে গেলে বাড়িওয়ালা বাধা দিলে পুলিশ ডায়েরি করা হবে।',
            'ভিক্টোরিয়া হাউসে সিইএসসি কেন্দ্রীয় অভিযোগ নিবারণ আধিকারিকের কাছে নালিশ জানান।',
            'কলকাতা হাইকোর্টের আদেশে পুলিশি পাহারায় সিইএসসি নতুন মিটার লাগিয়ে বিদ্যুৎ চালু করবে।'
          ],
          hi: [
            'किराया रसीद या चालान के साथ सीईएससी पोर्टल पर ऑनलाइन नए मीटर का आवेदन करें।',
            'सीईएससी निरीक्षक के निरीक्षण में मकान मालिक द्वारा बाधा डालने पर थाने में सूचना दी जाएगी।',
            'विक्टोरिया हाउस स्थित सीईएससी मुख्य शिकायत निवारण अधिकारी के समक्ष मामला रखें।',
            'कलकत्ता हाईकोर्ट से पुलिस सहायता का आदेश लेकर सीईएससी द्वारा नया मीटर लगवाया जाएगा।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Apply for new connection on utility portal (CESC/WBSEDCL) with rent receipts as proof.',
        'If utility issues objection citing lack of Landlord NOC, submit representation citing Section 43.',
        'File statutory grievance before Consumer Grievance Redressal Forum (CGRF) under Section 42(5).',
        'If denied, file Writ Petition before High Court; Calcutta HC precedent confirms power is an Article 21 right.'
      ],
      bn: [
        'ভাড়ার রসিদ দিয়ে সিইএসসি বা ডব্লুবিএসইডিসিএল পোর্টালে আলাদা মিটারের অনলাইন আবেদন জমা দিন।',
        'বাড়িওয়ালার এনওসি নেই বলে বিদ্যুৎ বোর্ড আপত্তি জানালে ধারা ৪৩ উল্লেখ করে আইনি চিঠি দিন।',
        'বিদ্যুৎ আইন ধারা ৪২(৫) অনুযায়ী উপভোক্তা অভিযোগ নিবারণ ফোরামে (CGRF) নালিশ করুন।',
        'হাইকোর্টে রিট পিটিশন করুন; কলকাতা হাইকোর্টের রায় অনুযায়ী বিদ্যুৎ পাওয়া জীবনের মৌলিক অধিকার।'
      ],
      hi: [
        'किराया रसीद को कब्जे का प्रमाण मानकर बिजली बोर्ड (CESC/WBSEDCL) में मीटर का आवेदन करें।',
        'मकान मालिक की एनओसी न होने पर विद्युत अधिनियम की धारा 43 का हवाला देकर पत्र दें।',
        'धारा 42(5) के तहत उपभोक्ता शिकायत निवारण फोरम (CGRF) के समक्ष वाद दायर करें।',
        'उच्च न्यायालय से आदेश लें; कलकत्ता हाईकोर्ट के अनुसार बिजली अनुच्छेद 21 का मौलिक अधिकार है।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-35-1',
        name: { en: 'Rent Receipts / Rent Controller Challans (Occupancy Proof)', bn: 'ভাড়ার রসিদ বা সরকারি চালানের কপি', hi: 'किराया रसीदें / रेंट कंट्रोलर चालान' },
        issuing_authority: { en: 'Landlord / Rent Controller', bn: 'বাড়িওয়ালা / রেন্ট কন্ট্রোলার', hi: 'मकान मालिक / रेंट कंट्रोलर' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-36',
    productCategory: 'free-checklist',
    title: {
      en: 'Eviction Due to Public Nuisance & Immoral Activities',
      bn: 'অসামাজিক কার্যকলাপ ও উপদ্রবের কারণে ভাড়াটে উচ্ছেদ',
      hi: 'असामाजिक गतिविधियों एवं उपद्रव (पब्लिक न्यूसेंस) पर किरायेदार निष्कासन'
    },
    relevant_act: 'Sec 6(1)(b), WBPT Act, 1997 r/w Sec 292, BNS',
    summary: {
      en: 'Expelling tenants causing severe public nuisance, commercial noise, or operating gambling/brothels in residential premises.',
      bn: 'ভাড়া ঘরে অসামাজিক কার্যকলাপ, জুয়া বা গভীর রাতে চিৎকার-চেঁচামেচির কারণে প্রতিবেশীদের আপত্তিতে উচ্ছেদ।',
      hi: 'किराये के परिसर में जुआ, वेश्यावृत्ति अथवा भारी उपद्रव करने वाले किरायेदार की बेदखली।'
    },
    authority_forum: {
      en: 'Civil Court / Executive Magistrate',
      bn: 'দেওয়ানি আদালত / এগজিকিউটিভ ম্যাজিস্ট্রেট',
      hi: 'सिविल न्यायालय / कार्यपालक दंडाधिकारी'
    },
    forum_type: 'Civil_Court',
    is_complex: false,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '3 to 6 months',
      bn: '৩ থেকে ৬ মাস',
      hi: '3 से 6 माह'
    },
    search_keywords: {
      en: ['nuisance tenant eviction', 'section 6 1 b wbpt', 'immoral activity tenancy'],
      bn: ['উপদ্রবকারী ভাড়াটে উচ্ছেদ', 'অসামাজিক কাজ ফ্ল্যাটে', 'ধারা ৬(১)(খ)'],
      hi: ['उपद्रवी किरायेदार बेदखली', 'असामाजिक गतिविधि निष्कासन', 'धारा 6(1)(b)']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Collect written complaints signed by neighbors, apartment RWA, and police intervention diaries.',
        'Lodge petition under Section 152 BNSS before Executive Magistrate to record findings of public nuisance.',
        'Serve statutory 1-month Notice to Quit under Section 6(1)(b) WBPT Act citing nuisance and misuse.',
        'File Title Eviction Suit and obtain interim restraining order preventing antisocial activities pending trial.'
      ],
      bn: [
        'প্রতিবেশীদের গণস্বাক্ষরিত অভিযোগপত্র, আবাসন সমিতির চিঠি ও পুলিশের হস্তক্ষেপের নথি সংগ্রহ করুন।',
        'উপদ্রব বন্ধে এগজিকিউটিভ ম্যাজিস্ট্রেটের কাছে ধারা ১৫২ বিএনএসএস অনুযায়ী পিটিশন দাখিল করুন।',
        'অসামাজিক কাজের কারণ দেখিয়ে ধারা ৬(১)(খ) অনুযায়ী ভাড়াটের কাছে ১ মাসের উচ্ছেদ নোটিশ পাঠান।',
        'দেওয়ানি আদালতে উচ্ছেদ মামলা করে শুনানিকালীন অসামাজিক কাজ বন্ধের ইনজাংশন নিন।'
      ],
      hi: [
        'पड़ोसियों एवं सोसाइटी के हस्ताक्षरित शिकायत पत्र तथा पुलिस हस्तक्षेप की प्रतियां जुटाएं।',
        'कार्यपालक दंडाधिकारी के समक्ष धारा 152 बीएनएसएस में न्यूसेंस निषेध का वाद दें।',
        'धारा 6(1)(b) के तहत उपद्रव एवं दुरुपयोग के आधार पर 1 माह का बेदखली नोटिस भेजें।',
        'अदालत में टाइटल वाद दायर कर मुकदमे के दौरान शांति व्यवस्था बनाए रखने का आदेश लें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-36-1',
        name: { en: 'Joint Public Complaint from Neighbors / RWA', bn: 'প্রতিবেশীদের যৌথ অভিযোগপত্র ও পুলিশ জিডি', hi: 'पड़ोसियों का सामूहिक शिकायत पत्र व पुलिस जीडी' },
        issuing_authority: { en: 'Apartment RWA / Local Police', bn: 'আবাসন সমিতি / থানা', hi: 'हाउसिंग सोसाइटी / थाना' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-37',
    productCategory: 'free-checklist',
    title: {
      en: 'Impounding of Unstamped / Under-Stamped Rental Deeds',
      bn: 'অপর্যাপ্ত স্ট্যাম্পের ভাড়া চুক্তি বাজেয়াপ্তকরণ',
      hi: 'अपर्याप्त स्टांप शुल्क वाले किराया अनुबंध की जब्ती एवं पेनल्टी'
    },
    relevant_act: 'Sec 33 & 35, Indian Stamp Act, 1899',
    summary: {
      en: 'Paying penalty up to 10x deficit duty to admit unregistered or notarized rental agreements as valid evidence in court.',
      bn: 'কম স্ট্যাম্প পেপারে করা নোটারি চুক্তিপত্র আদালতে প্রমাণ হিসেবে গ্রাহ্য করাতে জরিমানা জমা দেওয়ার নিয়ম।',
      hi: 'कम स्टांप वाले सादे या नोटरी एग्रीमेंट को अदालत में वैध साक्ष्य बनाने हेतु 10 गुना जुर्माना जमा करना।'
    },
    authority_forum: {
      en: 'Civil Court / Collector of Stamp Revenue',
      bn: 'দেওয়ানি আদালত / কালেক্টর অব স্ট্যাম্প রেভিনিউ',
      hi: 'सिविल न्यायालय / स्टांप समाहर्ता'
    },
    forum_type: 'Civil_Court',
    is_complex: false,
    official_portal_url: 'https://wbregistration.gov.in/',
    statutory_timeframe: {
      en: '30 to 45 working days',
      bn: '৩০ থেকে ৪৫ কার্যদিবস',
      hi: '30 से 45 कार्यदिवस'
    },
    search_keywords: {
      en: ['unstamped rent agreement', 'impounding lease deed', 'section 35 stamp act'],
      bn: ['স্ট্যাম্প ডিউটি জরিমানা', 'নোটারি চুক্তি আদালতে গ্রাহ্য', 'স্ট্যাম্প অ্যাক্ট ধারা ৩৫'],
      hi: ['कम स्टांप जुर्माना', 'किराया अनुबंध जब्ती', 'स्टांप अधिनियम धारा 35']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Civil court impounds the unstamped agreement under Section 33 when tendered in evidence.',
        'File an application under Section 35 Indian Stamp Act praying for admissibility upon payment of penalty.',
        'Court transmits instrument to Collector of Stamp Revenue to calculate deficit duty and 10x penalty.',
        'Pay certified challan into government treasury; court marks rental agreement as admissible evidence.'
      ],
      bn: [
        'সাক্ষ্য হিসেবে পেশ করার সময় আদালত ধারা ৩৩ অনুযায়ী অপর্যাপ্ত স্ট্যাম্পের চুক্তিপত্র বাজেয়াপ্ত করবে।',
        'ধারা ৩৫ অনুযায়ী জরিমানা প্রদান সাপেক্ষে নথিটি প্রমাণের অংশ করার জন্য আবেদন দাখিল করুন।',
        'আদালত স্ট্যাম্প কালেক্টরের কাছে ফাইল পাঠিয়ে বকেয়া স্ট্যাম্প ডিউটি ও ১০ গুণ জরিমানা নির্ধারণ করাবে।',
        'সরকারি ট্রেজারিতে চালানের টাকা জমা দিন; আদালত চুক্তিপত্রকে মামলার বৈধ প্রমাণ হিসেবে চিহ্নিত করবে।'
      ],
      hi: [
        'सबूत के तौर पर पेश किए जाने पर अदालत धारा 33 के तहत गैर-स्टांपित दस्तावेज जब्त करेगी।',
        'धारा 35 के तहत जुर्माना देकर दस्तावेज को साक्ष्य में ग्राह्य करने का आवेदन दें।',
        'अदालत स्टांप कलेक्टर को भेजकर बकाया स्टांप शुल्क एवं 10 गुना पेनल्टी का निर्धारण कराएगी।',
        'ट्रेजरी में चालान जमा करने के बाद अदालत अनुबंध को कानूनी साक्ष्य के रूप में स्वीकार करेगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-37-1',
        name: { en: 'Impounded Original Tenancy Document', bn: 'বাজেয়াপ্তকৃত মূল ভাড়ার চুক্তিপত্র', hi: 'जब्त मूल किराया अनुबंध पत्र' },
        issuing_authority: { en: 'Civil Court Sheristadar', bn: 'দেওয়ানি আদালত', hi: 'सिविल कोर्ट' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-38',
    productCategory: 'free-checklist',
    title: {
      en: 'Landlord Barring Lift, Common Passages & Rooftop',
      bn: 'লিফট ও সিঁড়ি ব্যবহারে বাড়িওয়ালার বেআইনি নিষেধাজ্ঞা',
      hi: 'लिफ्ट, सीढ़ियों एवं छत के उपयोग पर मकान मालिक की अवैध रोक'
    },
    relevant_act: 'Sec 27, WBPT Act r/w Sec 152, BNSS',
    summary: {
      en: 'Mandatory interim injunction against landlords padlocking elevators or terrace access included in lease terms.',
      bn: 'ভাড়াটে যাতে সিঁড়ি বা লিফট ব্যবহার করতে না পারে সেজন্য তালা মারলে জরুরি ভিত্তিতে তালা ভাঙার নির্দেশ।',
      hi: 'मकान मालिक द्वारा लिफ्ट बंद करने या छत व सीढ़ियों पर ताला जड़ने के विरुद्ध त्वरित अदालती आदेश।'
    },
    authority_forum: {
      en: 'Rent Controller / Executive Magistrate',
      bn: 'রেন্ট কন্ট্রোলার / এগজিকিউটিভ ম্যাজিস্ট্রেট',
      hi: 'रেন্ট কন্ট্রোলার / कार्यपालक दंडाधिकारी'
    },
    forum_type: 'Rent_Controller',
    is_complex: false,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '24 to 48 hours (Restoration Order)',
      bn: '২৪ থেকে ৪৮ ঘণ্টা (পুনর্বহাল আদেশ)',
      hi: '24 से 48 घंटे (बहाली आदेश)'
    },
    search_keywords: {
      en: ['landlord locked lift', 'common passage blocked tenant', 'section 27 lift access'],
      bn: ['লিফট বন্ধ বাড়িওয়ালা', 'সিঁড়িতে তালা', 'কমন প্যাসেজে বাধা'],
      hi: ['लिफ्ट बंद करना', 'रास्ता रोकना किरायेदार', 'धारा 27 लिफ्ट बहाली']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Take photographs and video evidence of locks and barriers blocking elevators or common passages.',
        'File emergency application before Rent Controller under Section 27 for essential service restoration.',
        'Rent Controller conducts summary hearing within 24 hours and issues direction to unblock access.',
        'If landlord defaults, Rent Controller authorizes local police station to physically break padlocks.'
      ],
      bn: [
        'লিফট বা সিঁড়ির গেটে তালা লাগানো বা বাধার সচিত্র প্রমাণ ও ভিডিও রেকর্ড সংগ্রহ করুন।',
        'ধারা ২৭ অনুযায়ী জরুরি পরিসেবা পুনর্বহালের জন্য রেন্ট কন্ট্রোলারের কাছে দরখাস্ত জমা দিন।',
        'রেন্ট কন্ট্রোলার ২৪ ঘণ্টার মধ্যে সংক্ষিপ্ত শুনানি ডেকে অবিলম্বে পথ খুলে দেওয়ার নির্দেশ দেবেন।',
        'বাড়িওয়ালা নির্দেশ না মানলে আদালত স্থানীয় পুলিশকে নির্দেশ দিয়ে তালা ভেঙে যাতায়াত চালু করাবে।'
      ],
      hi: [
        'लिफ्ट या सीढ़ियों पर जड़े ताले और रुकावटों की वीडियो व फोटो साक्ष्य सुरक्षित करें।',
        'रेंट कंट्रोलर के पास धारा 27 में आवश्यक सुविधा बहाली की आपात याचिका प्रस्तुत करें।',
        'रेंट कंट्रोलर 24 घंटे में सुनवाई कर रास्ता एवं लिफ्ट तुरंत खोलने का आदेश देंगे।',
        'मकान मालिक द्वारा ताला न हटाने पर पुलिस बल द्वारा ताला तुड़वाकर सुविधा बहाल होगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-38-1',
        name: { en: 'Photographic Proof of Padlocked Common Amenities', bn: 'তালা লাগানো লিফট বা সিঁড়ির ছবি', hi: 'ताला जड़ी लिफ्ट या रास्ते के फोटो साक्ष्य' },
        issuing_authority: { en: 'Complainant', bn: 'অভিযোগকারী', hi: 'शिकायतकर्ता' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-39',
    productCategory: 'free-checklist',
    title: {
      en: 'Formal Landlord-Tenant Settlement & Exit Agreements',
      bn: 'আপস-মীমাংসার মাধ্যমে দোকান বা বাড়ি হস্তান্তরের চুক্তিপত্র',
      hi: 'मकान/दुकान खाली करने का औपचारिक समझौता विलेख (एग्जिट एग्रीमेंट)'
    },
    relevant_act: 'Sec 89, Code of Civil Procedure, 1908 & Contract Act',
    summary: {
      en: 'Legally binding exit settlements ensuring handover of keys against full refund of security deposits and rent waiver.',
      bn: 'মামলা মোকদ্দমা এড়িয়ে চাবি হস্তান্তর, ডিপোজিট ফেরত ও বকেয়া মকুবের আপস চুক্তি সম্পাদন।',
      hi: 'आपसी समझौते द्वारा चाबी सौंपने, सिक्योरिटी वापसी एवं मुकदमों के अंतिम निपटारे का विलेख।'
    },
    authority_forum: {
      en: 'DLSA Pre-Litigation Mediation Cell / Lok Adalat',
      bn: 'ডিএলএসএ প্রি-লিটিগেশন মধ্যস্থতা সেল / লোক আদালত',
      hi: 'जिला विधिक सेवा प्राधिकरण (DLSA) / लोक अदालत'
    },
    forum_type: 'Lok_Adalat',
    is_complex: false,
    official_portal_url: 'https://wbja.nic.in/',
    statutory_timeframe: {
      en: '15 to 30 days',
      bn: '১৫ থেকে ৩০ দিন',
      hi: '15 से 30 দিন'
    },
    search_keywords: {
      en: ['tenant exit agreement', 'landlord tenant settlement', 'mediation tenancy dlsa'],
      bn: ['ভাড়াটে আপস চুক্তি', 'চাবি হস্তান্তর চুক্তি', 'লোক আদালত ভাড়া নিষ্পত্তি'],
      hi: ['किरायेदार समझौता विलेख', 'चाबी वापसी अनुबंध', 'लोक अदालत समझौता']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Submit joint application for pre-litigation conciliation before District Legal Services Authority (DLSA).',
        'Attend mediation sessions with trained conciliators to finalize exit dates, repairs, and accounts.',
        'Execute formal Memorandum of Settlement (MoS) detailing key handover against deposit bank transfer.',
        'Record settlement before National Lok Adalat; the award operates as a final, non-appealable civil decree.'
      ],
      bn: [
        'জেলা আইনি সেবা কর্তৃপক্ষের (DLSA) কাছে প্রাক-মামলা মধ্যস্থতার যৌথ আবেদন জমা দিন।',
        'সরকারি মধ্যস্থতাকারীর উপস্থিতিতে চাবি হস্তান্তরের তারিখ, মেরামত ও জমার অঙ্ক চূড়ান্ত করুন।',
        'ডিপোজিটের টাকা ফেরত ও ঘর ছাড়ার শর্ত লিখে আনুষ্ঠানিক মেমোরেন্ডাম অব সেটেলমেন্ট সই করুন।',
        'জাতীয় লোক আদালতে চুক্তি পেশ করে ডিক্রি করিয়ে নিন; এই রায়ের বিরুদ্ধে কোনো আপিল চলে না।'
      ],
      hi: [
        'विधिक सेवा प्राधिकरण (DLSA) में मुकदमा-पूर्व मध्यस्थता हेतु संयुक्त आवेदन दें।',
        'मध्यस्थ के समक्ष खाली करने की तारीख, मरम्मत खर्च एवं बकाया राशि का अंतिम निपटारा करें।',
        'चाबी सौंपने एवं सिक्योरिटी वापसी का विधिवत समझौता विलेख (MoS) निष्पादित करें।',
        'राष्ट्रीय लोक अदालत से समझौता डिक्री प्राप्त करें; यह अंतिम एवं गैर-अपीलीय फैसला होगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-39-1',
        name: { en: 'Bilateral Memorandum of Settlement (MoS)', bn: 'দ্বিপাক্ষিক আপস মীমাংসা চুক্তিপত্র', hi: 'द्विपक्षीय समझौता ज्ञापन (MoS)' },
        issuing_authority: { en: 'District Legal Services Authority (DLSA)', bn: 'ডিএলএসএ মধ্যস্থতা সেল', hi: 'जिला विधिक सेवा प्राधिकरण' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-40',
    productCategory: 'paid',
    title: {
      en: 'Bogus Renovation Notice to Force Out Low-Rent Tenants',
      bn: 'মেরামতের মিথ্যা অজুহাতে পুরনো ভাড়াটে উচ্ছেদ রুখতে ব্যবস্থা',
      hi: 'मरम्मत के झूठे बहाने पुराने किरायेदारों को निकालने के नोटिस का विरोध'
    },
    relevant_act: 'Sec 6(1)(f) & Sec 11, WBPT Act, 1997',
    summary: {
      en: 'Restraining landlords from demolishing premises without municipal approved plans and statutory re-entry guarantees: KMC vs District Municipalities.',
      bn: 'বাড়ি সংস্কারের মিথ্যা কারণ দেখিয়ে ভাড়াটে তাড়িয়ে বেশি ভাড়ায় অন্যকে দেওয়ার চক্রান্ত প্রতিহত করার নিয়ম।',
      hi: 'मकान मरम्मत के बहाने किरायेदार को हटाकर दूसरे को ऊंचे किराये पर देने के षड्यंत्र पर विधिक रोक।'
    },
    authority_forum: {
      en: 'Rent Controller / Civil Court',
      bn: 'রেন্ট কন্ট্রোলার / দেওয়ানি আদালত',
      hi: 'রেন্ট কন্ট্রোলার / सिविल न्यायालय'
    },
    forum_type: 'Rent_Controller',
    is_complex: true,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '30 to 60 working days',
      bn: '৩০ থেকে ৬০ কার্যদিবস',
      hi: '30 से 60 कार्यदिवस'
    },
    search_keywords: {
      en: ['fake repair eviction notice', 're-entry rights tenant', 'section 11 wbpt'],
      bn: ['মেরামতের নোটিশ চ্যালেঞ্জ', 'পুনঃপ্রবেশের অধিকার', 'ধারা ১১ ডব্লুবিপিটি'],
      hi: ['झूठा मरम्मत नोटिस', 'पुनरागमन अधिकार', 'धारा 11 किरायेदार अधिकार']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'SDO Rent Controller & Municipality / Panchayat',
          bn: 'মহকুমা শাসক (SDO) রেন্ট কন্ট্রোলার ও পুরসভা/পঞ্চায়েত',
          hi: 'एसडीओ रेंट कंट्रोलर एवं नगर पालिका'
        },
        steps: {
          en: [
            'Reply to repair notice challenging that building is structurally sound without need for eviction.',
            'Demand production of sanctioned reconstruction plan approved by District Municipality / Zilla Parishad.',
            'File Section 11 petition before SDO Rent Controller asserting statutory right of re-entry.',
            'Civil Judge restrains demolition until landlord furnishes bank security for tenant re-accommodation.'
          ],
          bn: [
            'বাড়িটি কাঠামোগতভাবে নিরাপদ জানিয়ে সংস্কারের নোটিশের আনুষ্ঠানিক আইনি জবাব দাখিল করুন।',
            'জেলা পুরসভা বা জেলা পরিষদ কর্তৃক অনুমোদিত পুনর্নির্মাণের স্যাংকশন প্ল্যান তলব করুন।',
            'মেরামত শেষে পুনরায় প্রবেশের আইনি অধিকার চেয়ে মহকুমা শাসকের (SDO) কাছে ধারা ১১ পিটিশন করুন।',
            'আদালত বাড়িওয়ালার কাছ থেকে পুনর্বাসনের আর্থিক জামানত নিশ্চিত না হওয়া পর্যন্ত ভাঙচুর বন্ধ রাখবে।'
          ],
          hi: [
            'मरम्मत नोटिस का जवाब दें कि भवन सुरक्षित है और बिना खाली कराए भी सामान्य काम हो सकता है।',
            'नगर पालिका अथवा जिला परिषद द्वारा स्वीकृत नए भवन प्लान को प्रस्तुत करने की मांग करें।',
            'मरम्मत उपरांत पुनः प्रवेश के अधिकार हेतु एसडीओ रेंट कंट्रोलर में धारा 11 का वाद दें।',
            'अदालत पुनर्वास की वित्तीय गारंटी तय होने तक मकान गिराने पर पूर्ण स्थगनादेश जारी करेगी।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'Rent Controller, Kolkata & KMC Building Department',
          bn: 'রেন্ট কন্ট্রোলার কলকাতা ও কেএমসি বিল্ডিং বিভাগ',
          hi: 'রেন্ট কন্ট্রোলার কলকাতা एवं केएमसी भवन विभाग'
        },
        steps: {
          en: [
            'Submit formal objection before Rent Controller Kolkata challenging bogus renovation claims.',
            'Demand certified copy of KMC sanctioned reconstruction plan under KMC Building Rules.',
            'Invoke Section 11 WBPT Act securing judicial direction for re-entry into reconstructed space.',
            'Move City Civil Court / High Court restraining promoter from altering tenanted space boundary.'
          ],
          bn: [
            'কলকাতার রেন্ট কন্ট্রোলারের কাছে ভুয়ো সংস্কার দাবির বিরুদ্ধে আনুষ্ঠানিক লিখিত আপত্তি দিন।',
            'কেএমসি বিল্ডিং বিধি অনুযায়ী পুরসভা অনুমোদিত স্যাংকশন প্ল্যানের সার্টিফাইড কপি তলব করুন।',
            'ডব্লুবিপিটি আইনের ধারা ১১ প্রয়োগ করে নতুন ভবনে সমপরিমাণ স্থানে পুনঃপ্রবেশের আদালতের আদেশ নিন।',
            'সিটি সিভিল কোর্ট থেকে অন্তর্বর্তী আদেশ এনে প্রমোটারকে ভাড়ার জায়গা ভাঙা থেকে বিরত রাখুন।'
          ],
          hi: [
            'रेंट कंट्रोलर कोलकाता के समक्ष झूठे मरम्मत दावों के खिलाफ औपचारिक आपत्ति दर्ज कराएं।',
            'केएमसी भवन नियमों के तहत स्वीकृत पुनर्निर्माण नक्शे की प्रमाणित प्रति मंगाएं।',
            'धारा 11 रेंट एक्ट लागू कराकर नए भवन में पुनः प्रवेश पाने का वैधानिक अदालती आदेश लें।',
            'कोलकाता सिटी सिविल कोर्ट से अंतरिम रोक लगवाकर बिल्डर को ढांचा तोड़ने से रोकें।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Reply to renovation notice challenging that building is not in a dangerous structural condition.',
        'Demand production of sanctioned reconstruction building plan approved by municipal authorities.',
        'File petition before Rent Controller under Section 11 demanding statutory right of re-entry post-repair.',
        'Move Civil Judge for injunction restraining demolition until landlord deposits security for re-allotment.'
      ],
      bn: [
        'বাড়িটি বিপজ্জনক নয় জানিয়ে সংস্কারের নোটিশের আনুষ্ঠানিক আইনি জবাব দাখিল করুন।',
        'পৌরসভা কর্তৃক বাড়ি পুনর্নির্মাণের অনুমোদিত স্যাংকশন প্ল্যান দাখিলের দাবি জানান।',
        'মেরামত শেষে পুনরায় আগের ঘরে প্রবেশের অধিকার চেয়ে রেন্ট কন্ট্রোলারের কাছে ধারা ১১ পিটিশন করুন।',
        'পুনর্বাসনের জামানত নিশ্চিত না হওয়া পর্যন্ত নির্মাণ ভাঙচুরের ওপর দেওয়ানি স্থগিতাদেশ নিন।'
      ],
      hi: [
        'मरम्मत नोटिस का जवाब दें कि भवन जर्जर नहीं है और बिना खाली किए भी काम हो सकता है।',
        'नगरपालिका द्वारा स्वीकृत नए निर्माण प्लान को प्रस्तुत करने की वैधानिक मांग करें।',
        'मरम्मत के बाद पुनः प्रवेश (Re-entry) के अधिकार हेतु धारा 11 में रेंट कंट्रोलर के पास वाद दें।',
        'पुनर्वास की वित्तीय सुरक्षा तय होने तक अदालत से ध्वस्तीकरण पर स्थगनादेश प्राप्त करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-40-1',
        name: { en: 'Landlord Repair Demand Notice & Tenant Reply', bn: 'বাড়িওয়ালার নোটিশ ও ভাড়াটের প্রতিবাদপত্র', hi: 'मकान मालिक का नोटिस एवं किरायेदार का प्रतिवाद' },
        issuing_authority: { en: 'Landlord / India Post', bn: 'বাড়িওয়ালা', hi: 'मकान मालिक / डाक विभाग' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-41',
    productCategory: 'free-checklist',
    title: {
      en: 'Commercial Mall Kiosk & Retail Space Lock-out',
      bn: 'শপিং মলের দোকান ও কিয়স্ক জোরপূর্বক বন্ধের বিরুদ্ধে মামলা',
      hi: 'शॉपिंग मॉल में दुकान/कियोस्क की मनमानी तालाबंदी के विरुद्ध राहत'
    },
    relevant_act: 'Sec 9, Arbitration & Conciliation Act, 1996 / Commercial Court',
    summary: {
      en: 'Emergency injunctions restoring retail inventory and POS terminal access disconnected over CAM maintenance disputes.',
      bn: 'শপিং মলে মেইনটেন্যান্স বিরোধে দোকান জোর করে বন্ধ করে দিলে জরুরি কোর্ট ইনজাংশনে ব্যবসা চালু।',
      hi: 'मॉल में मेंटेनेंस विवाद पर दुकान सील करने या बिजली काटने के विरुद्ध वाणिज्यिक अदालत से आपात राहत।'
    },
    authority_forum: {
      en: 'Commercial Court (Commercial Division)',
      bn: 'বাণিজ্যিক আদালত',
      hi: 'वाणिज्यिक न्यायालय'
    },
    forum_type: 'Commercial_Court',
    is_complex: true,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '24 to 72 hours (Emergency Injunction)',
      bn: '২৪ থেকে ৭২ ঘণ্টা (জরুরি ইনজাংশন)',
      hi: '24 से 72 घंटे (आपात आदेश)'
    },
    search_keywords: {
      en: ['mall kiosk lockout', 'section 9 arbitration mall', 'cam charges dispute'],
      bn: ['শপিং মল দোকান বন্ধ', 'কিয়স্ক তালা', 'বাণিজ্যিক ইনজাংশন'],
      hi: ['मॉल दुकान तालाबंदी', 'धारा 9 मध्यस्थता मॉल', 'कियोस्क बेदखली']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Verify dispute resolution clause in commercial lease agreement mandates arbitration.',
        'File Section 9 petition before Commercial Court praying for urgent interim measures of protection.',
        'Demonstrate irreparable business loss, loss of customer goodwill, and staff livelihood impact.',
        'Obtain injunction directing mall management to restore power and access upon conditional fee deposit.'
      ],
      bn: [
        'চুক্তিপত্র খতিয়ে দেখুন সালিশি (আর্বিট্রেশন) ধারা চুক্তিতে অন্তর্ভুক্ত আছে কি না।',
        'জরুরি সুরক্ষার নির্দেশ চেয়ে বাণিজ্যিক আদালতে আর্বিট্রেশন অ্যাক্টের ধারা ৯ অনুযায়ী পিটিশন করুন।',
        'দোকান বন্ধ থাকলে দৈনিক আর্থিক ক্ষতি, সুনামহানি ও কর্মীদের কর্মহীনতার প্রমাণ তুলে ধরুন।',
        'কিছু বিতর্কিত অর্থ আদালতে জমা রেখে মল কর্তৃপক্ষকে অবিলম্বে বিদ্যুৎ ও প্রবেশ চালুর নির্দেশ করান।'
      ],
      hi: [
        'लीज अनुबंध में जांचें कि विवाद निपटारे हेतु मध्यस्थता (Arbitration) का प्रावधान है।',
        'वाणिज्यिक न्यायालय के समक्ष धारा 9 में आपातकालीन अंतरिम संरक्षण की याचिका दाखिल करें।',
        'सिद्ध करें कि दुकान बंद रहने से अपूरणीय आर्थिक नुकसान एवं कर्मचारियों की आजीविका प्रभावित होगी।',
        'विवादित राशि का कुछ हिस्सा जमा कराकर अदालत से बिजली व प्रवेश तुरंत चालू करने का आदेश लें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-41-1',
        name: { en: 'Commercial Mall Retail License Agreement', bn: 'শপিং মল রিটেল লাইসেন্স চুক্তিপত্র', hi: 'मॉल रिटेल लाइसेंस अनुबंध विलेख' },
        issuing_authority: { en: 'Mall Developer / Notary Public', bn: 'মল কর্তৃপক্ষ', hi: 'मॉल प्रबंधन' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-42',
    productCategory: 'lawyer-only',
    title: {
      en: 'Public Premises Eviction (PPE) for Overstaying Quarters',
      bn: 'সরকারি কোয়ার্টার ও রেল কলোনি উচ্ছেদ নোটিস',
      hi: 'सरकारी आवास/रेलवे क्वार्टर बेदखली नोटिस एवं अपील'
    },
    relevant_act: 'Public Premises (Eviction of Unauthorised Occupants) Act, 1971',
    summary: {
      en: 'Appellate defense against arbitrary damages and eviction notices served on retired public servants.',
      bn: 'অবসরপ্রাপ্ত সরকারি কর্মচারী বা তাদের পরিবারের কোয়ার্টার খালি করার নোটিশে অতিরিক্ত ক্ষতিপূরণ রদ।',
      hi: 'सेवानिवृत्ति के बाद सरकारी क्वार्टर खाली करने के नोटिस व भारी मार्केट रेंट हर्जाने के विरुद्ध अपील।'
    },
    authority_forum: {
      en: 'Estate Officer -> District Judge (Appellate Authority)',
      bn: 'এস্টেট অফিসার -> জেলা জজ আদালত (আপিল)',
      hi: 'संपदा अधिकारी -> जिला जज'
    },
    forum_type: 'Civil_Court',
    is_complex: true,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '15-day show cause; 30-day appeal window',
      bn: '১৫ দিনের কারণ দর্শাও; ৩০ দিনে আপিল',
      hi: '15 দিন মেं जवाब; 30 দিন মেं अपील'
    },
    search_keywords: {
      en: ['public premises eviction', 'ppe act section 9 appeal', 'railway quarter damages'],
      bn: ['পাবলিক প্রিমাইসেস উচ্ছেদ', 'সরকারি কোয়ার্টার নোটিশ', 'ধারা ৯ আপিল'],
      hi: ['सरकारी क्वार्टर बेदखली', 'पीपीई एक्ट अपील', 'रेलवे आवास हर्जाना']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Receive show-cause notice under Section 4(1) of PPE Act from the Estate Officer.',
        'File written reply explaining retention permissions, medical treatments, or pending gratuity.',
        'If eviction order is issued under Section 5, file immediate Statutory Appeal under Section 9 before District Judge.',
        'Obtain stay on eviction and challenge calculation of penal market rent damages.'
      ],
      bn: [
        'এস্টেট অফিসারের কাছ থেকে পাবলিক প্রিমাইসেস আইনের ধারা ৪(১) কারণ দর্শাও নোটিশ গ্রহণ করুন।',
        'চিকিৎসা সংক্রান্ত জটিলতা বা গ্র্যাচুইটি আটকে থাকার কারণ দেখিয়ে লিখিত জবাব দাখিল করুন।',
        'ধারা ৫ অনুযায়ী উচ্ছেদের নির্দেশ দিলে ৩০ দিনের মধ্যে জেলা জজ আদালতে ধারা ৯ আপিল করুন।',
        'উচ্ছেদের ওপর স্থগিতাদেশ নিন এবং অতিরিক্ত পেনাল মার্কেট রেন্ট বাতিল করার নির্দেশ করান।'
      ],
      hi: [
        'संपदा अधिकारी द्वारा धारा 4(1) के तहत जारी कारण बताओ नोटिस प्राप्त करें।',
        'चिकित्सीय कारण, पेंशन/ग्रेच्युटी में देरी का हवाला देकर लिखित स्पष्टीकरण दें।',
        'धारा 5 में बेदखली आदेश पारित होने पर 30 दिन में जिला जज के समक्ष धारा 9 में अपील करें।',
        'जिला जज से बेदखली पर स्थगनादेश लें एवं लगाए गए दंडात्मक किराये को निरस्त कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-42-1',
        name: { en: 'Estate Officer Section 5 Eviction & Damages Order', bn: 'এস্টেট অফিসারের উচ্ছেদ ও ক্ষতিপূরণ আদেশ', hi: 'संपदा अधिकारी का धारा 5 बेदखली आदेश' },
        issuing_authority: { en: 'Estate Officer (Railways / Central Govt)', bn: 'সরকারি এস্টেট দপ্তর', hi: 'संपदा अधिकारी' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-43',
    productCategory: 'free-checklist',
    title: {
      en: 'Eviction Defense in Heritage Protected Buildings',
      bn: 'ঐতিহ্যবাহী প্রাচীন ভবন সংস্কার ও ভাড়াটেদের অধিকার',
      hi: 'धरोहर (हेरिटেজ) भवनों से किरायेदारों की बेदखली पर रोक व संरक्षण'
    },
    relevant_act: 'West Bengal Heritage Commission Act, 2001 r/w KMC Act',
    summary: {
      en: 'Protecting long-term tenants in Grade-I/II heritage buildings against speculative builder demolition: KMC Heritage Committee vs State Commission.',
      bn: 'কলকাতার হেরিটেজ গ্রেড তালিকাভুক্ত ভবনে প্রমোটারদের দ্বারা প্রাচীন ভাড়াটে উচ্ছেদ ও ভাঙচুর প্রতিরোধ।',
      hi: 'कोलकाता के हेरिटेज घोषित ऐतिहासिक भवनों में पुरानी दुकानों व किरायेदारों को बिल्डरों से बचाना।'
    },
    authority_forum: {
      en: 'Municipal Heritage Committee (Kolkata) / Heritage Commission',
      bn: 'পৌর হেরিটেজ কমিটি (কলকাতা) / হেরিটেজ কমিশন',
      hi: 'हेरिटेज संरक्षण समिति / उच्च न्यायालय'
    },
    forum_type: 'High_Court',
    is_complex: true,
    official_portal_url: 'https://kmcgov.in/',
    statutory_timeframe: {
      en: '60 to 90 working days',
      bn: '৬০ থেকে ৯০ কার্যদিবস',
      hi: '60 से 90 कार्यदिवस'
    },
    search_keywords: {
      en: ['heritage building tenant', 'grade 1 heritage eviction kolkata', 'heritage commission wb'],
      bn: ['হেরিটেজ বাড়ি ভাড়াটে', 'ঐতিহ্যবাহী ভবন উচ্ছেদ', 'হেরিটেজ কমিশন'],
      hi: ['हेरिटेज भवन किरायेदार', 'धरोहर इमारत बेदखली', 'हेरिटेज संरक्षण कानून']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'West Bengal Heritage Commission & District Magistrate',
          bn: 'পশ্চিমবঙ্গ হেরিটেজ কমিশন ও জেলাশাসক',
          hi: 'पश्चिम बंगाल हेरिटेज कमीशन एवं जिला मजिस्ट्रेट'
        },
        steps: {
          en: [
            'Verify historic building listing in state protected monuments register.',
            'File written complaint with District Magistrate against unauthorized commercial demolition.',
            'West Bengal Heritage Commission conducts architectural inspection of site.',
            'District administration posts police guard halting structural changes.'
          ],
          bn: [
            'রাজ্য সংরক্ষিত প্রাচীন স্মারকের সরকারি তালিকায় ভবনটির নাম যাচাই করুন।',
            'অনুমোদনহীন ধ্বংসযজ্ঞ ও সংস্কারের বিরুদ্ধে জেলাশাসকের কাছে লিখিত নালিশ জানান।',
            'রাজ্য হেরিটেজ কমিশনের বিশেষজ্ঞ দল সরেজমিনে স্থাপত্য পরীক্ষা করবে।',
            'জেলা প্রশাসন পুলিশ মোতায়েন করে প্রাচীন কাঠামোর পরিবর্তন বন্ধ করে দেবে।'
          ],
          hi: [
            'राज्य संरक्षित ऐतिहासिक स्मारकों की सूची में इमारत का नाम जांचें।',
            'अवैध व्यावसायिक तोड़फोड़ के खिलाफ जिला कलेक्टर को लिखित शिकायत दें।',
            'हेरिटेज कमीशन का विशेषज्ञ दल मौके पर स्थापत्य मुआयना करेगा।',
            'जिला प्रशासन पुलिस पहरा लगाकर ऐतिहासिक ढांचे में तोड़फोड़ रुकवाएगा।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'KMC Heritage Conservation Committee & High Court',
          bn: 'কেএমসি হেরিটেজ সংরক্ষণ কমিটি ও কলকাতা হাইকোর্ট',
          hi: 'केएमसी हेरिटेज संरक्षण समिति एवं उच्च न्यायालय'
        },
        steps: {
          en: [
            'Check KMC Graded Heritage list (Grade-I, IIA, IIB) for disputed premises.',
            'Lodge objection before KMC Heritage Conservation Committee against builder redevelopment.',
            'Submit representation to Mayor-in-Council halting municipal sanction clearances.',
            'Obtain High Court injunction restraining demolition without full Heritage Commission nod.'
          ],
          bn: [
            'কেএমসি গ্রেডেড হেরিটেজ তালিকা (গ্রেড-১ বা ২) দেখে ভবনের সংরক্ষণ স্থিতি নিশ্চিত করুন।',
            'বিল্ডারের ভাঙার চেষ্টার বিরুদ্ধে কেএমসি হেরিটেজ কনজারভেশন কমিটিতে লিখিত আপত্তি জানান।',
            'মেয়র-ইন-কাউন্সিল বরাবর স্মারকলিপি দিয়ে পুরসভার ডিমোলিশন প্ল্যান বাতিল করান।',
            'কলকাতা হাইকোর্টে রিট পিটিশন করে পূর্ণ হেরিটেজ অনুমতি ছাড়া উচ্ছেদ ও ভাঙা সম্পূর্ণ নিষিদ্ধ করান।'
          ],
          hi: [
            'केएमसी ग्रेडेड हेरिटेज सूची (ग्रेड-1, 2) से भवन की कानूनी स्थिति की पुष्टि करें।',
            'बिल्डर द्वारा गिराने के प्रयास के विरुद्ध केएमसी हेरिटेज समिति में आपत्ति दें।',
            'मेयर-इन-काउंसिल को पत्र देकर नगरपालिका की ध्वस्तीकरण अनुमति पर रोक लगवाएं।',
            'कलकत्ता हाईकोर्ट से रिट आदेश लेकर बिना हेरिटेज एनओसी किसी भी तोड़फोड़ पर रोक लें।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Check municipal heritage building schedule to confirm Grade-I or Grade-II status of premise.',
        'File official objection before Heritage Conservation Committee against unapproved demolition.',
        'Submit representation to West Bengal Heritage Commission to conduct architectural audit.',
        'Obtain injunction from High Court at Calcutta restraining structural alterations and eviction.'
      ],
      bn: [
        'পুরসভার হেরিটেজ তালিকা দেখে নিশ্চিত হন যে বাড়িটি গ্রেড-১ বা গ্রেড-২ সংরক্ষিত ভবন।',
        'অনুমোদনহীন ধ্বংসযজ্ঞ ও সংস্কারের বিরুদ্ধে পুর হেরিটেজ সংরক্ষণ কমিটির কাছে নালিশ জানান।',
        'ঐতিহাসিক গুরুত্ব খতিয়ে দেখতে রাজ্য হেরিটেজ কমিশনে স্থাপত্য নিরীক্ষার আবেদন দিন।',
        'কলকাতা হাইকোর্ট থেকে হেরিটেজ ভবনে কোনো রূপ পরিবর্তন ও উচ্ছেদের ওপর নিষেধাজ্ঞা নিন।'
      ],
      hi: [
        'नगर निगम सूची से पुष्टि करें कि इमारत ग्रेड-1 अथवा ग्रेड-2 हेरिटेज घोषित है।',
        'अवैध तोड़फोड़ के विरुद्ध नगर निगम की हेरिटेज कमेटी में औपचारिक आपत्ति दर्ज कराएं।',
        'पश्चिम बंगाल हेरिटेज कमीशन को स्थापत्य जांच हेतु लिखित अभ्यावेदन प्रेषित करें।',
        'उच्च न्यायालय से ऐतिहासिक ढांचे में फेरबदल करने एवं बेदखली पर पूर्ण स्थगनादेश लें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-43-1',
        name: { en: 'Municipal Heritage Building Graded Gazette Notification', bn: 'হেরিটেজ ভবন গেজেট বিজ্ঞপ্তির কপি', hi: 'हेरिटेज भवन गजट अधिसूचना प्रति' },
        issuing_authority: { en: 'West Bengal Heritage Commission / KMC', bn: 'হেরিটেজ কমিশন / কেএমসি', hi: 'हेरिटेज कमीशन / नगर निगम' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-44',
    productCategory: 'free-checklist',
    title: {
      en: 'Suing Landlord for Withheld Deposit with 18% Interest',
      bn: 'ভাড়া শেষের পর সিকিউরিটি মানি আটকে রাখলে মামলা',
      hi: 'किरायेदारी समाप्ति पर रोकी गई सिक्योरिटी राशि 18% ब्याज सहित वसूली'
    },
    relevant_act: 'Sec 5 & 7, West Bengal Premises Tenancy Act, 1997',
    summary: {
      en: 'Fast-track money decree against landlords refusing deposit returns within 30 days of vacant key handover.',
      bn: 'ঘর খালি করার ৩০ দিনের মধ্যে জামানত ফেরত না দিলে বাড়িওয়ালার বিরুদ্ধে ১৮% সুদে টাকা আদায়ের মামলা।',
      hi: 'मकान खाली करने के 30 दिनों में अमानत राशि न लौटाने वाले मकान मालिक पर ब्याज सहित वसूली वाद।'
    },
    authority_forum: {
      en: 'Small Causes Court / Consumer Commission',
      bn: 'স্মল কজেস কোর্ট / উপভোক্তা আদালত',
      hi: 'स्माल कॉजेज कोर्ट / उपभोक्ता आयोग'
    },
    forum_type: 'Consumer_DCDRC',
    is_complex: false,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '3 to 6 months',
      bn: '৩ থেকে ৬ মাস',
      hi: '3 से 6 माह'
    },
    search_keywords: {
      en: ['sue landlord deposit interest', 'security deposit 18 percent', 'recovery of deposit kolkata'],
      bn: ['সিকিউরিটি মানি সুদসহ ফেরত', 'ডিপোজিট না ফেরত দেওয়া', 'বাড়িওয়ালার বিরুদ্ধে মামলা'],
      hi: ['सिक्योरिटी ब्याज वसूली', 'जमा राशि मुकदमा', 'मकान मालिक हर्जाना']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Produce signed handover memorandum or postal tracking proof that vacant possession was delivered.',
        'Serve statutory legal notice demanding immediate return of deposit with 18% interest in 15 days.',
        'File Summary Suit under Order XXXVII CPC or complaint before District Consumer Commission.',
        'Secure money decree directing refund with interest and attachment of rental premises upon default.'
      ],
      bn: [
        'স্বাক্ষরিত মেমোরেন্ডাম বা কুরিয়ার রসিদ দাখিল করে প্রমাণ করুন ঘর সম্পূর্ণ খালি করে দেওয়া হয়েছে।',
        '১৮% বাণিজ্যিক সুদসহ ১৫ দিনের মধ্যে টাকা ফেরতের দাবিতে আইনজীবীর মাধ্যমে আইনি নোটিশ দিন।',
        'অর্ডার ৩৭ সিপিসি অনুযায়ী সামারি মানি স্যুট অথবা জেলা উপভোক্তা কমিশনে মামলা করুন।',
        'সুদসহ টাকা ফেরতের ডিক্রি নিন; টাকা না দিলে বাড়িওয়ালার ফ্ল্যাট বা ব্যাঙ্ক অ্যাকাউন্ট ক্রোক করান।'
      ],
      hi: [
        'चाबी सौंपने का पावती पत्र अथवा डाक रसीद प्रस्तुत करें जिससे खाली कब्जा साबित हो।',
        '18% ब्याज सहित 15 दिनों में राशि लौटाने का विधिक मांग पत्र अधिवक्ता द्वारा भेजें।',
        'आदेश 37 सीपीसी में संक्षिप्त वाद अथवा जिला उपभोक्ता आयोग में परिवाद दाखिल करें।',
        'ब्याज सहित वापसी की डिक्री लें; न देने पर मकान मालिक की संपत्ति कुर्क कराने का आदेश कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-44-1',
        name: { en: 'Vacant Key Handover Memo / Acknowledgment Voucher', bn: 'ঘর খালি ও চাবি হস্তান্তরের স্বাক্ষরিত রশিদ', hi: 'खाली चाबी सौंपने का पावती पत्र' },
        issuing_authority: { en: 'Landlord / Independent Witnesses', bn: 'বাড়িওয়ালা / সাক্ষী', hi: 'मकान मालिक / गवाह' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-45',
    productCategory: 'free-checklist',
    title: {
      en: 'Landlord Liability for Tenant Injuries from Collapsing Ceilings',
      bn: 'বাড়ি সংস্কারে অবহেলার কারণে ভাড়াটে আহত হলে ক্ষতিপূরণ',
      hi: 'मकान मालिक की लापरवाही से छत गिरने व किरायेदार के घायल होने पर मुआवजा'
    },
    relevant_act: 'Sec 108(f), Transfer of Property Act r/w Law of Torts',
    summary: {
      en: 'Suing negligent landlords for medical bills and personal injury damages after ignored structural repair warnings cause ceiling collapse.',
      bn: 'মেরামতের আবেদন অগ্রাহ্য করায় ছাদের চাঙড় ভেঙে ভাড়াটে আহত হলে চিকিৎসার খরচ ও ক্ষতিপূরণ মামলা।',
      hi: 'चेतावनी के बावजूद छत की मरम्मत न कराने से प्लास्टर गिरने पर चोट लगने का हर्जाना पाना।'
    },
    authority_forum: {
      en: 'Civil Court (Senior Division) / City Civil Court',
      bn: 'দেওয়ানি আদালত (সিনিয়র ডিভিশন) / সিটি সিভিল কোর্ট',
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
      en: ['ceiling collapse tenant injury', 'landlord tortious liability', 'compensation falling plaster'],
      bn: ['ছাদ ভেঙে ভাড়াটে আহত', 'বাড়িওয়ালার গাফিলতিতে ক্ষতিপূরণ', 'টর্ট মামলা'],
      hi: ['छत गिरने से चोट', 'मकान मालिक लापरवाही हर्जाना', 'चिकित्सा खर्च वसूली']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Collate previous written letters and text messages warning landlord of ceiling cracks and plaster fall.',
        'Preserve hospital emergency admission records, injury scan reports, and surgery bills.',
        'File Civil Suit for Damages and Tortious Liability against landlord before Civil Judge.',
        'Move for inquiry into building stability by municipal engineer to support personal injury claim.'
      ],
      bn: [
        'ছাদে ফাটল ও প্লাস্টার খসার বিষয়ে বাড়িওয়ালাকে পূর্বে দেওয়া চিঠিপত্র ও মেসেজ একত্রিত করুন।',
        'হাসপাতালের জরুরি বিভাগে ভর্তির কাগজপত্র, সিটি স্ক্যান রিপোর্ট ও চিকিৎসার খরচের বিল সংরক্ষণ করুন।',
        'বাড়িওয়ালার চরম অবহেলার বিরুদ্ধে দেওয়ানি আদালতে ক্ষতিপূরণ ও চিকিৎসার খরচের মামলা করুন।',
        'পুরসভার ইঞ্জিনিয়ার দ্বারা ছাদের বিপজ্জনক অবস্থা তদন্ত করিয়ে ক্ষতিপূরণের অঙ্ক সুনিশ্চিত করুন।'
      ],
      hi: [
        'छत में दरारों के संबंध में मकान मालिक को पूर्व में दी गई लिखित चेतावनियों के प्रमाण जुटाएं।',
        'अस्पताल की इमरजेंसी भर्ती पर्ची, मेडिकल रिपोर्ट एवं इलाज के सभी बिल सुरक्षित रखें।',
        'लापरवाही के लिए दीवानी न्यायालय में भारी हर्जाने एवं इलाज खर्च का सिविल वाद दायर करें।',
        'नगरपालिका इंजीनियर से भवन की जर्जरता की रिपोर्ट लगवाकर चिकित्सकीय हर्जाना प्रमाणित कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-45-1',
        name: { en: 'Hospital Injury Report & Pre-Accident Warning Letters', bn: 'হাসপাতালের চিকিৎসার বিল ও পূর্ব সতর্কবার্তা চিঠি', hi: 'अस्पताल मेडिकल रिपोर्ट एवं पूर्व चेतावनी पत्र' },
        issuing_authority: { en: 'Government Hospital / India Post', bn: 'হাসপাতাল / ডাক বিভাগ', hi: 'सरकारी अस्पताल / डाक विभाग' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-46',
    productCategory: 'paid',
    title: {
      en: 'Defense of Waiver: Landlord Accepting Rent Post-Notice',
      bn: 'উচ্ছেদ নোটিশের পরেও ভাড়া গ্রহণ করলে নোটিশ বাতিলের দাবি',
      hi: 'बेदखली नोटिस के बाद किराया स्वीकार करने पर नोटिस निरस्तीकरण (वेवर बचाव)'
    },
    relevant_act: 'Sec 113, Transfer of Property Act, 1882',
    summary: {
      en: 'Invalidating eviction suits on the ground that landlord waived the notice to quit by voluntarily cashing post-notice rent checks.',
      bn: 'উচ্ছেদ নোটিশ পাঠানোর পরেও বাড়িওয়ালা পরবর্তী মাসের ভাড়া গ্রহণ করলে নোটিশ বাতিল হওয়ার আইনি প্রতিরোধ।',
      hi: 'खाली करने का नोटिस देने के बाद भी मकान मालिक द्वारा किराया लेने पर बेदखली वाद खारिज कराना।'
    },
    authority_forum: {
      en: 'Civil Court hearing Eviction Suit',
      bn: 'উচ্ছেদ মামলার বিচারক আদালত',
      hi: 'सिविल विचारण न्यायालय'
    },
    forum_type: 'Civil_Court',
    is_complex: false,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: 'Raised in Written Statement (Within 30 days of summons)',
      bn: 'সমন পাওয়ার ৩০ দিনের মধ্যে লিখিত জবাবে উত্থাপন',
      hi: 'समन के 30 दिन में लिखित बयान में बचाव'
    },
    search_keywords: {
      en: ['waiver of notice to quit', 'section 113 tp act', 'landlord accepted rent after notice'],
      bn: ['নোটিশ প্রত্যাহার', 'ভাড়া নেওয়ায় নোটিশ বাতিল', 'ধারা ১১৩ টিপি অ্যাক্ট'],
      hi: ['नोटिस का वेवर', 'किराया लेने पर नोटिस रद्द', 'धारा 113 टीपी एक्ट']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Verify bank statements proving landlord deposited and cleared rent dated after notice expired.',
        'Draft Written Statement raising primary legal defense of "Waiver of Notice to Quit" under Section 113.',
        'Frame preliminary issue of law under Order XIV Rule 2 CPC regarding maintainability of suit.',
        'Secure dismissal of eviction suit on ground that acceptance of rent renewed ongoing tenancy.'
      ],
      bn: [
        'ব্যাঙ্ক স্টেটমেন্ট দিয়ে প্রমাণ করুন নোটিশের মেয়াদের পরের ভাড়া বাড়িওয়ালা ক্লিয়ার করে নিয়েছে।',
        'লিখিত জবাবে (WS) ধারা ১১৩ টিপি অ্যাক্ট অনুযায়ী "নোটিশ প্রত্যাহার হয়ে গেছে" আইনি দাবি তুলুন।',
        'অর্ডার ১৪ রুল ২ সিপিসি অনুযায়ী মামলাটি আইনত অচল ঘোষণা করার প্রাথমিক আর্জি জানান।',
        'পরবর্তী ভাড়া নেওয়ায় নতুন করে ভাড়া বহাল হয়েছে এই যুক্তিতে উচ্ছেদ মামলা খারিজ করান।'
      ],
      hi: [
        'बैंक स्टेटमेंट से सिद्ध करें कि नोटिस अवधि के बाद का किराया भी मकान मालिक ने खाते में भुनाया है।',
        'लिखित बयान (WS) में धारा 113 के तहत "नोटिस वेव हो जाने" का प्रमुख कानूनी बचाव लें।',
        'आदेश 14 नियम 2 सीपीसी के तहत वाद के पोषणीय न होने का प्रारंभिक कानूनी मुद्दा बनवाएं।',
        'किराया स्वीकार करने से किरायेदारी जारी रहने के आधार पर बेदखली वाद खारिज कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-46-1',
        name: { en: 'Bank Statement Proving Post-Notice Rent Realization', bn: 'নোটিশের পরবর্তী ভাড়া গ্রহণের ব্যাঙ্ক স্টেটমেন্ট', hi: 'नोटिस के बाद किराया जमा होने का बैंक स्टेटमेंट' },
        issuing_authority: { en: 'Commercial Bank', bn: 'ব্যাঙ্ক', hi: 'बैंक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-47',
    productCategory: 'free-checklist',
    title: {
      en: 'Determination of Lease by Forfeiture',
      bn: 'শর্তভঙ্গের কারণে চুক্তি রদ ও সরাসরি দখল গ্রহণ নোটিস',
      hi: 'शर्तों के गंभीर उल्लंघन पर पट्टा जब्ती (फॉरफीचर) द्वारा बेदखली'
    },
    relevant_act: 'Sec 111(g), Transfer of Property Act, 1882',
    summary: {
      en: 'Landlords enforcing explicit lease forfeiture clauses after tenants commit serious breaches of contract conditions.',
      bn: 'চুক্তির মূল শর্ত ভঙ্গ করলে ১৫ দিনের নোটিশ দিয়ে লিজ সরাসরি বাতিল ও দখল পুনরুদ্ধারের আইনি পদক্ষেপ।',
      hi: 'अनुबंध की मुख्य शर्त तोड़ने पर 15 दिन का सुधरने का नोटिस देकर लीज निरस्त करना।'
    },
    authority_forum: {
      en: 'Civil Court',
      bn: 'দেওয়ানি আদালত',
      hi: 'सिवিল न्यायालय'
    },
    forum_type: 'Civil_Court',
    is_complex: true,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '15-day cure notice window; 6 months to 1 year trial',
      bn: '১৫ দিনের সংশোধনের নোটিশ; ৬ মাস থেকে ১ বছর মামলা',
      hi: '15 दिन का नोटिस; 6 माह से 1 वर्ष विचारण'
    },
    search_keywords: {
      en: ['lease forfeiture', 'section 111g tp act', 'breach of lease conditions'],
      bn: ['লিজ ফরফিচার', 'চুক্তিভঙ্গে উচ্ছেদ', 'ধারা ১১১(জি)'],
      hi: ['लीज जब्ती', 'अनुबंध उल्लंघन बेदखली', 'धारा 111(g)']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Identify express condition breached in registered lease (e.g. non-payment for 3 consecutive months).',
        'Serve statutory notice in writing under Section 111(g) specifying breach and giving 15-day cure window.',
        'If tenant fails to remedy breach within 15 days, serve final notice determining lease by forfeiture.',
        'File suit for ejectment and mesne profits before Civil Judge based on determination of tenancy.'
      ],
      bn: [
        'রেজিস্ট্রি লিজ দলিলের কোন শর্তটি ভাড়াটে ভঙ্গ করেছে তা চিহ্নিত করুন (যেমন টানা ৩ মাস ভাড়া না দেওয়া)।',
        'ধারা ১১১(জি) অনুযায়ী শর্তভঙ্গের বিবরণ দিয়ে ১৫ দিনের মধ্যে তা সংশোধনের আইনি নোটিশ দিন।',
        'ভাড়াটে ত্রুটি সংশোধন না করলে ফরফিচার বা অধিকার হরণের মাধ্যমে লিজ বাতিল ঘোষণা করুন।',
        'দেওয়ানি আদালতে মামলা দায়ের করে লিজ বাতিলের ভিত্তিতে জমি বা ঘরের খাস দখল নিন।'
      ],
      hi: [
        'पंजीकृत लीज की उस विशेष शर्त को रेखांकित करें जिसका किरायेदार ने गंभीर उल्लंघन किया है।',
        'धारा 111(g) के तहत उल्लंघन सुधारने हेतु 15 दिनों का वैधानिक नोटिस प्रेषित करें।',
        'सुधार न होने पर अनुबंध को जब्त (Forfeited) घोषित करने का अंतिम नोटिस जारी करें।',
        'दीवानी अदालत में बेदखली एवं हर्जाने का वाद दायर कर परिसर का खाली कब्जा प्राप्त करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-47-1',
        name: { en: 'Registered Lease Deed Containing Re-entry Forfeiture Clause', bn: 'ফরফিচার শর্তযুক্ত রেজিস্ট্রি লিজ দলিল', hi: 'जब्ती शर्त युक्त पंजीकृत लीज विलेख' },
        issuing_authority: { en: 'Sub-Registrar Office (ADSR)', bn: 'সাব-রেজিস্ট্রার অফিস', hi: 'उप-पंजीयक कार्यालय' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-48',
    productCategory: 'lawyer-only',
    title: {
      en: 'Dispossession During Court Vacation & Emergency Injunction',
      bn: 'আদালতের ছুটির সুযোগে তালা ভাঙার বিরুদ্ধে ছুটির বেঞ্চে আবেদন',
      hi: 'अदालती छुट्टियों में अवैध तोड़फोड़ या बेदखली पर वेकेशन बेंच से आपात रोक'
    },
    relevant_act: 'Sec 151, CPC r/w High Court Vacation Rules',
    summary: {
      en: 'Securing emergency holiday injunctions to prevent illegal demolition or tenant lockouts during Puja/Summer recesses.',
      bn: 'পূজা বা গ্রীষ্মের ছুটিতে আদালত বন্ধ থাকার সুযোগে বাড়িওয়ালার উচ্ছেদ রুখতে অবকাশকালীন বেঞ্চের জরুরি আদেশ।',
      hi: 'अदालत की छुट्टियों का फायदा उठाकर ताला तोड़ने के प्रयास पर वेकेशन जज से आपात स्थगनादेश।'
    },
    authority_forum: {
      en: 'Vacation Civil Judge / High Court Vacation Bench',
      bn: 'অবকাশকালীন সিভিল জজ / হাইকোর্ট ভ্যাকেশন বেঞ্চ',
      hi: 'वेकेशन सिविल जज / हाईकोर्ट वेकेशन बेंच'
    },
    forum_type: 'High_Court',
    is_complex: true,
    official_portal_url: 'https://calcuttahighcourt.gov.in/',
    statutory_timeframe: {
      en: 'Emergency (Within 12 to 24 hours)',
      bn: 'জরুরি (১২ থেকে ২৪ ঘণ্টার মধ্যে)',
      hi: 'अति आवश्यक (12 से 24 घंटे में)'
    },
    search_keywords: {
      en: ['vacation bench injunction', 'puja vacation eviction stay', 'urgent holiday bench cpc'],
      bn: ['ভ্যাকেশন বেঞ্চ ইনজাংশন', 'পুজোর ছুটিতে উচ্ছেদ বন্ধ', 'জরুরি আদালত আদেশ'],
      hi: ['वेकेशन बेंच स्थगनादेश', 'छुट्टियों में बेदखली रोक', 'आपात वेकेशन याचिका']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Collect real-time photographic proof of demolition threats, padlocks, or forcible dispossession.',
        'Draft urgent Plaint and Injunction Application under Section 151 CPC addressed to Vacation Judge.',
        'Serve notice on Vacation Officer / Registrar of Civil Court or High Court Appellate Side.',
        'Secure emergency holiday injunction order directing local police station to maintain status quo.'
      ],
      bn: [
        'ছুটিতে বলপ্রয়োগ, তালা লাগানো বা ভাঙচুরের চেষ্টার ছবি ও ভিডিও প্রমাণ তাৎক্ষণিক প্রস্তুত করুন।',
        'ধারা ১৫১ সিপিসি অনুযায়ী মনোনীত ভ্যাকেশন জজের এজলাসে জরুরি আরজি ও পিটিশন দাখিল করুন।',
        'দেওয়ানি আদালত বা হাইকোর্টের ভ্যাকেশন অফিসারের কাছে দ্রুত শুনানির বিশেষ অনুমতি নিন।',
        'অবকাশকালীন আদালত থেকে জরুরি আদেশ নিয়ে স্থানীয় থানাকে ঘটনাস্থলে শান্তি বজায় রাখার নির্দেশ দিন।'
      ],
      hi: [
        'छुट्टियों में ताला तोड़ने अथवा तोड़फोड़ के प्रयास के तत्काल फोटो व वीडियो साक्ष्य जुटाएं।',
        'धारा 151 सीपीसी में वेकेशन जज के समक्ष आपातकालीन वाद एवं स्थगन आवेदन दाखिल करें।',
        'अदालत के वेकेशन रजिस्ट्रार से संपर्क कर उसी दिन आपात सुनवाई की अनुमति प्राप्त करें।',
        'वेकेशन अदालत से यथास्थिति (Status Quo) का आदेश लेकर संबंधित थाने में तामील कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-48-1',
        name: { en: 'Photographs of Real-time Holiday Threat & Vacation Memo', bn: 'ছুটির দিনে হুমকির ছবি ও ভ্যাকেশন মেনশন স্লিপ', hi: 'छुट्टियों में दी गई धमकी के फोटो व वेकेशन मेमो' },
        issuing_authority: { en: 'Advocate on Record', bn: 'বিজ্ঞ আইনজীবী', hi: 'अधिवक्ता' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-49',
    productCategory: 'free-checklist',
    title: {
      en: 'Paying Guest (PG) & Student Hostel Arbitrary Eviction',
      bn: 'ছাত্রাবাস ও পিজি থেকে জোরপূর্বক বের করে দেওয়া প্রতিরোধ',
      hi: 'पेइंग गेस्ट (PG) एवं छात्र हॉस्टल से मनमानी बेदखली व फीस जब्ती पर रोक'
    },
    relevant_act: 'Consumer Protection Act, 2019 & Specific Relief Act, 1963',
    summary: {
      en: 'Halting overnight rent increases, utility cutoffs, and sudden 24-hour eviction notices served on students.',
      bn: 'পরীক্ষার মাঝে বা সেমিস্টারের সময় ছাত্র-ছাত্রীদের পিজি বা মেস থেকে অন্যায়ভাবে তাড়িয়ে দেওয়া বন্ধের নিয়ম।',
      hi: 'परीक्षा या सत्र के बीच छात्रों को पीजी या हॉस्टल से 24 घंटे में निकालने की धमकी पर कानूनी सुरक्षा।'
    },
    authority_forum: {
      en: 'District Consumer Commission (DCDRC) / Police Station',
      bn: 'জেলা উপভোক্তা কমিশন (DCDRC) / থানা',
      hi: 'जिला उपभोक्ता आयोग / स्थानीय थाना'
    },
    forum_type: 'Consumer_DCDRC',
    is_complex: false,
    official_portal_url: 'https://e-jagriti.gov.in/',
    statutory_timeframe: {
      en: 'Immediate police intervention; 30 days consumer notice',
      bn: 'অবিলম্বে পুলিশি হস্তক্ষেপ; ৩০ দিনে ক্রেতা সুরক্ষা নোটিশ',
      hi: 'तत्काल पुलिस मदद; 30 दिन में उपभोक्ता नोटिस'
    },
    search_keywords: {
      en: ['pg eviction student', 'paying guest illegal lockout', 'hostel fee forfeiture'],
      bn: ['পিজি থেকে উচ্ছেদ', 'মেস ভাড়াটে বিরোধ', 'ছাত্রাবাস ফি বাজেয়াপ্ত'],
      hi: ['पीजी बेदखली छात्र', 'हॉस्टल से निकालना रोक', 'पेइंग गेस्ट विवाद']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Produce PG rent receipts, UPI payment records, and college identity cards proving occupancy.',
        'Call 112 emergency line if PG owner attempts to lock rooms or throw belongings onto the street.',
        'Lodge a formal police complaint citing criminal intimidation under Section 351 BNS.',
        'File a complaint before District Consumer Commission for gross deficiency of service and fee forfeiture.'
      ],
      bn: [
        'পিজি ভাড়ার রসিদ, ইউপিআই লেনদেন ও কলেজ আইডি কার্ড দিয়ে বৈধ বসবাস প্রমাণ করুন।',
        'রুম আটকে দিলে বা মালপত্র বাইরে ফেলে দিলে সঙ্গে সঙ্গে ১১২ নম্বরে পুলিশে খবর দিন।',
        'অপরাধমূলক হুমকির অভিযোগে থানায় ধারা ৩৫১ বিএনএস অনুযায়ী বাড়িওয়ালার বিরুদ্ধে এফআইআর করুন।',
        'জামানত ফেরত ও মানসিক হয়রানির ক্ষতিপূরণ চেয়ে জেলা ক্রেতা সুরক্ষা আদালতে মামলা দায়ের করুন।'
      ],
      hi: [
        'पीजी किराया रसीदें, यूपीआई भुगतान एवं कॉलेज आईडी कार्ड से अपना वैध निवास सिद्ध करें।',
        'कमरे में ताला जड़ने या सामान फेंकने पर 112 पुलिस हेल्पलाइन पर तुरंत कॉल करें।',
        'आपराधिक धमकी के लिए बीएनएस की धारा 351 के तहत थाने में प्राथमिकी दर्ज कराएं।',
        'सेवा में गंभीर कमी एवं फीस जब्ती के विरुद्ध जिला उपभोक्ता आयोग में परिवाद दाखिल करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-49-1',
        name: { en: 'PG Admission Form / UPI Payment Proof / Student ID', bn: 'পিজি রসিদ, পেমেন্ট হিস্ট্রি ও কলেজ আইডি', hi: 'पीजी रसीद, यूपीआई भुगतान विवरण व छात्र आईडी' },
        issuing_authority: { en: 'PG Management / College Authority', bn: 'পিজি কর্তৃপক্ষ / কলেজ', hi: 'पीजी प्रबंधन / महाविद्यालय' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-50',
    productCategory: 'free-checklist',
    title: {
      en: 'Landlord Obstructing Commercial Trade License Renewal',
      bn: 'বাণিজ্যিক ট্রেড লাইসেন্স পুনর্নবীকরণে বাড়িওয়ালার বাধা',
      hi: 'व्यावसायिक ट्रेड लाइसेंस नवीनीकरण में मकान मालिक की बाधा का निवारণ'
    },
    relevant_act: 'KMC Act, 1980 (Kolkata) / WB Municipal Act (Districts)',
    summary: {
      en: 'Directing municipal commissioners to renew commercial trade licenses based on Rent Controller challans without landlord signatures.',
      bn: 'বাড়িওয়ালা সই না দিলে রেন্ট কন্ট্রোলারের ভাড়ার চালানের ভিত্তিতে পুরসভা থেকে ট্রেড লাইসেন্স পুনর্নবীকরণ (কেএমসি বনাম জেলা পুরসভা)।',
      hi: 'मकान मालिक द्वारा हस्ताक्षर न करने पर रेंट कंट्रोलर चालान के आधार पर ट्रेड लाइसेंस रिन्यू कराना।'
    },
    authority_forum: {
      en: 'Municipal Licensing Dept (KMC / Municipality) / High Court',
      bn: 'পৌর লাইসেন্সিং বিভাগ (কেএমসি / পৌরসভা) / হাইকোর্ট',
      hi: 'नगर निगम अनुज्ञप्ति शाखा / उच्च न्यायालय'
    },
    forum_type: 'High_Court',
    is_complex: false,
    official_portal_url: 'https://kmcgov.in/',
    statutory_timeframe: {
      en: '30 working days',
      bn: '৩০ কার্যদিবস',
      hi: '30 कार्यदिवস'
    },
    search_keywords: {
      en: ['trade license without landlord signature', 'kmc trade license rent challan', 'landlord obstructing trade license'],
      bn: ['ট্রেড লাইসেন্স রসিদ ছাড়া', 'বাড়িওয়ালার সই ছাড়া ট্রেড লাইসেন্স', 'কেএমসি ট্রেড সার্টিফিকেট'],
      hi: ['बिना मकान मालिक ट्रेड लाइसेंस', 'ट्रेड लाइसेंस रिन्यूअल विवाद', 'केएमसी ट्रेड लाइसेंस चालान']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'District Municipality / Gram Panchayat Licensing Wing',
          bn: 'জেলা পুরসভা / গ্রাম পঞ্চায়েত লাইসেন্সিং সেল',
          hi: 'जिला नगर पालिका / ग्राम पंचायत ट्रेड लाइसेंस'
        },
        steps: {
          en: [
            'Produce certified SDO Rent Controller challans proving ongoing lawful commercial tenancy.',
            'Submit Certificate of Enlistment renewal with affidavit of landlord non-cooperation.',
            'Executive Officer issues trade license renewal without requiring landlord physical consent.',
            'If denied, file representation citing High Court Division Bench precedents.'
          ],
          bn: [
            'এসডিও রেন্ট কন্ট্রোলারের প্রত্যয়িত ভাড়ার চালান দিয়ে বৈধ বাণিজ্যিক ভাড়াটে অবস্থান প্রমাণ করুন।',
            'বাড়িওয়ালার অসহযোগিতার হলফনামাসহ ট্রেড এনলিস্টমেন্ট সার্টিফিকেট নবায়নের আবেদন দিন।',
            'পৌর কার্যনির্বাহী আধিকারিক বাড়িওয়ালার সই ছাড়াই ট্রেড লাইসেন্স পুনর্নবীকরণ করবেন।',
            'অস্বীকার করলে হাইকোর্টের ডিভিশন বেঞ্চের নজির উল্লেখ করে স্মারকলিপি পেশ করুন।'
          ],
          hi: [
            'एसडीओ रेंट कंट्रोलर के अद्यतन चालान की प्रमाणित प्रतियां लगाकर वैध किरायेदारी सिद्ध करें।',
            'मकान मालिक के असहयोग का शपथ पत्र लगाकर नगर पालिका में नवीनीकरण आवेदन दें।',
            'नगर पालिका अधिशासी अधिकारी मकान मालिक के हस्ताक्षर के बिना लाइसेंस जारी करेंगे।',
            'आनाकानी होने पर उच्च न्यायालय के स्थापित न्यायिक फैसलों का संदर्भ प्रस्तुत करें।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'KMC License Department (Borough Office)',
          bn: 'কেএমসি লাইসেন্স বিভাগ (বোরো অফিস)',
          hi: 'कोलकाता नगर निगम ट्रेड लाइसेंस विभाग (बोरो)'
        },
        steps: {
          en: [
            'Collect up-to-date Rent Controller Kolkata challans and previous KMC CE certificate.',
            'Apply online on KMC Trade Portal under "Tenant Mode" attaching non-cooperation affidavit.',
            'KMC Licensing Officer conducts verification of shop establishment and generates demand fee.',
            'Download permanent Certificate of Enlistment (CE) from KMC portal.'
          ],
          bn: [
            'কলকাতা রেন্ট কন্ট্রোলারের হাল চালান ও পূর্বের কেএমসি সিই (CE) সার্টিফিকেট প্রস্তুত রাখুন।',
            'কেএমসি ট্রেড পোর্টালে "টেন্যান্ট মোড"-এ গিয়ে হলফনামাসহ অনলাইন নবায়ন আবেদন করুন।',
            'কেএমসি লাইসেন্সিং অফিসার দোকান পরিদর্শন শেষে সরকারি ফির চালান জেনারেট করবেন।',
            'অনলাইনে ফি জমা দিয়ে কেএমসি পোর্টাল থেকে ডিজিটাল সার্টিফিকেট অব এনলিস্টমেন্ট নিন।'
          ],
          hi: [
            'रेंट कंट्रोलर कोलकाता के अद्यतन चालान एवं पिछले केएमसी लाइसेंस का विवरण जुटाएं।',
            'केएमसी ट्रेड पोर्टल पर "टेनेंट मोड" चुनकर असहयोग शपथ पत्र के साथ ऑनलाइन आवेदन करें।',
            'केएमसी लाइसेंस अधिकारी दुकान का भौतिक सत्यापन कर सरकारी फीस का चालान देंगे।',
            'फीस भरकर केएमसी पोर्टल से तुरंत डिजिटल ट्रेड लाइसेंस (CE) डाउनलोड करें।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Collect certified copies of up-to-date Rent Controller challans proving ongoing lawful tenancy.',
        'Submit renewal application to Municipal Borough Licensing Officer with non-cooperation affidavit.',
        'If municipality refuses citing lack of landlord signature, issue legal notice citing High Court precedents.',
        'If municipal department delays, file Writ Petition (Art 226) commanding issuance of certificate of enlistment.'
      ],
      bn: [
        'রেন্ট কন্ট্রোলারের সরকারি ভাড়ার চালানের কপি সংগ্রহ করে বৈধ ভাড়াটে অবস্থান প্রমাণ করুন।',
        'বাড়িওয়ালার অসহযোগিতার হলফনামাসহ পুরসভার বোরো লাইসেন্সিং অফিসারের কাছে নবায়ন আবেদন জমা দিন।',
        'পুরসভা সই দাবি করলে হাইকোর্টের রায় উল্লেখ করে আইনজীবীর মাধ্যমে পুর কমিশনারকে আইনি চিঠি দিন।',
        'কাজ না হলে কলকাতা হাইকোর্টে রিট পিটিশন করে ট্রেড লাইসেন্স অবিলম্বে জারির আদেশ নিন।'
      ],
      hi: [
        'रेंट कंट्रोलर के अद्यतन चालान की प्रमाणित प्रतियां लगाकर वैध किरायेदारी सिद्ध करें।',
        'मकान मालिक के असहयोग का शपथ पत्र लगाकर नगर निगम कार्यालय में नवीनीकरण आवेदन दें।',
        'हस्ताक्षर न होने पर आवेदन अटकाने पर उच्च न्यायालय के फैसलों का हवाला देकर विधिक नोटिस दें।',
        'कार्यवाही न होने पर उच्च न्यायालय से अनुच्छेद 226 में सीधे ट्रेड लाइसेंस जारी करने का आदेश लें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-50-1',
        name: { en: 'Rent Controller Challans & Non-Cooperation Affidavit', bn: 'রেন্ট কন্ট্রোলার চালান ও অসহযোগিতা হলফনামা', hi: 'रेंट कंट्रोलर चालान एवं असहयोग शपथ पत्र' },
        issuing_authority: { en: 'Rent Controller / Notary Public', bn: 'রেন্ট কন্ট্রোলার / নোটারি', hi: 'रेंट कंट्रोलर / नोटरी' },
        is_mandatory: true
      }
    ]
  }
];