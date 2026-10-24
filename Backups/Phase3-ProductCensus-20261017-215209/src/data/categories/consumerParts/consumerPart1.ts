import type { CivilSubCategory } from '../../../types/legal';

export const consumerPart1: CivilSubCategory[] = [
  {
    id: 'sub-consumer-01',
    title: {
      en: 'Consumer Claims on e-Jagriti Portal (e-Daakhil)',
      bn: 'ই-জাগৃতি পোর্টালে অনলাইন ক্রেতা মামলা',
      hi: 'ई-जागृति पोर्टल पर ऑनलाइन उपभोक्ता वाद (e-Daakhil)'
    },
    relevant_act: 'Sec 35, Consumer Protection Act, 2019',
    summary: {
      en: 'Filing digital consumer complaints on national e-Jagriti portal against defective goods or deficient services across district commissions.',
      bn: 'ত্রুটিযুক্ত পণ্য বা সেবার গাফিলতির বিরুদ্ধে জাতীয় ই-জাগৃতি পোর্টালে ঘরে বসে অনলাইন ক্রেতা মামলা দায়ের।',
      hi: 'खराब सामान या सेवा में कमी के विरुद्ध राष्ट्रीय ई-जागृति पोर्टल पर घर बैठे ऑनलाइन उपभोक्ता शिकायत दर्ज करना।'
    },
    authority_forum: {
      en: 'District Consumer Disputes Redressal Commission (DCDRC)',
      bn: 'জেলা ক্রেতা সুরক্ষা আদালত (DCDRC)',
      hi: 'जिला उपभोक्ता विवाद निवारण आयोग'
    },
    forum_type: 'Consumer_DCDRC',
    is_complex: false,
    official_portal_url: 'https://e-jagriti.gov.in/',
    statutory_timeframe: {
      en: 'Admission and disposal timelines are subject to the Consumer Protection Act, applicable rules, and the Commission’s case schedule; no case duration is guaranteed.',
      bn: 'গ্রহণযোগ্যতা ও নিষ্পত্তির সময় ভোক্তা সুরক্ষা আইন, প্রযোজ্য বিধি এবং কমিশনের মামলার সময়সূচির উপর নির্ভর করে; কোনো নির্দিষ্ট নিষ্পত্তির সময় নিশ্চিত নয়।',
      hi: 'स्वीकार्यता और निस्तारण का समय उपभोक्ता संरक्षण अधिनियम, लागू नियमों और आयोग की कार्यसूची पर निर्भर करता है; किसी निश्चित अवधि की गारंटी नहीं है।'
    },
    search_keywords: {
      en: ['e-jagriti consumer complaint', 'e-daakhil online case', 'dcdrc filing wb'],
      bn: ['ই-জাগৃতি ক্রেতা আদালত', 'অনলাইন কনজিউমার ফোরাম', 'ক্রেতা সুরক্ষা মামলা'],
      hi: ['ई-जागृति उपभोक्ता फोरम', 'ई-दाखिल ऑनलाइन केस', 'उपभोक्ता अदालत शिकायत']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Register on https://e-jagriti.gov.in/ with Aadhaar and mobile OTP verification.',
        'Confirm the competent Consumer Commission using the consideration paid and applicable jurisdiction rules; seek legal advice if the forum or limitation period is unclear.',
        'Prepare the complaint with the relevant facts, parties, relief sought, and supporting documents; keep claims and compensation calculations evidence-based.',
        'Upload proof of purchase or service, payment records, relevant communications, and other supporting documents requested by the current e-Jagriti filing flow.',
        'Review the current fee shown by the official portal and applicable rules before payment; the portal’s assessed demand controls. Save the filing acknowledgement and monitor notices, hearings, and directions.'
      ],
      bn: [
        'আধার ও ওটিপি যাচাইকরণের মাধ্যমে e-jagriti.gov.in পোর্টালে নাগরিক অ্যাকাউন্ট খুলুন।',
        'প্রদত্ত বিবেচ্য মূল্যের ভিত্তিতে উপযুক্ত ভোক্তা কমিশন ও প্রযোজ্য এখতিয়ার-বিধি যাচাই করুন; ফোরাম বা তামাদির সময়সীমা অস্পষ্ট হলে আইনগত পরামর্শ নিন।',
        'প্রাসঙ্গিক ঘটনা, পক্ষসমূহ, চাওয়া প্রতিকার ও সহায়ক নথি দিয়ে অভিযোগ প্রস্তুত করুন; দাবি ও ক্ষতিপূরণের হিসাব প্রমাণনির্ভর রাখুন।',
        'ক্রয় বা পরিষেবার প্রমাণ, পেমেন্টের রেকর্ড, প্রাসঙ্গিক যোগাযোগ এবং বর্তমান e-Jagriti দাখিল প্রক্রিয়ায় চাওয়া অন্যান্য নথি আপলোড করুন।',
        'পেমেন্টের আগে সরকারি পোর্টালে দেখানো বর্তমান ফি ও প্রযোজ্য বিধি যাচাই করুন; পোর্টালে নির্ধারিত চাহিদাই চূড়ান্ত। দাখিলের স্বীকৃতি সংরক্ষণ করে নোটিশ, শুনানি ও নির্দেশ পর্যবেক্ষণ করুন।'
      ],
      hi: [
        'आधार एवं ओटीपी सत्यापन द्वारा e-jagriti.gov.in पोर्टल पर उपभोक्ता खाता पंजीकृत करें।',
        'अदा किए गए प्रतिफल और लागू अधिकारिता नियमों के आधार पर सक्षम उपभोक्ता आयोग की पुष्टि करें; मंच या परिसीमा अस्पष्ट हो तो कानूनी सलाह लें।',
        'संबंधित तथ्य, पक्षकार, मांगी गई राहत और सहायक दस्तावेजों सहित शिकायत तैयार करें; दावे और क्षतिपूर्ति की गणना साक्ष्य-आधारित रखें।',
        'खरीद या सेवा का प्रमाण, भुगतान रिकॉर्ड, संबंधित पत्राचार और वर्तमान e-Jagriti दाखिला प्रक्रिया में मांगे गए अन्य दस्तावेज अपलोड करें।',
        'भुगतान से पहले आधिकारिक पोर्टल पर दिखाई गई वर्तमान फीस और लागू नियम जांचें; पोर्टल द्वारा निर्धारित मांग प्रभावी होगी। दाखिले की पावती सुरक्षित रखें और नोटिस, सुनवाई तथा निर्देशों को ट्रैक करें।'
      ]
    },
    fees: [
      {
        id: 'fee-consumer-01-filing',
        kind: 'authority_calculated',
        label: {
          en: 'Consumer Commission filing fee',
          bn: 'ভোক্তা কমিশনের দাখিল ফি',
          hi: 'उपभोक्ता आयोग दाखिला शुल्क'
        },
        formula_description: {
          en: 'The applicable fee depends on the current rules, consideration paid, and the competent Commission. No unverified amount is stated here.',
          bn: 'প্রযোজ্য ফি বর্তমান বিধি, প্রদত্ত বিবেচ্য মূল্য এবং উপযুক্ত কমিশনের উপর নির্ভর করে। এখানে যাচাই-না-করা কোনো অঙ্ক বলা হচ্ছে না।',
          hi: 'लागू शुल्क वर्तमान नियमों, अदा किए गए प्रतिफल और सक्षम आयोग पर निर्भर है। यहां कोई अप्रमाणित राशि नहीं दी गई है।'
        },
        conditions: {
          en: 'Confirm the amount on the official e-Jagriti filing flow immediately before payment. The portal’s assessed demand and applicable rules control.',
          bn: 'পেমেন্টের ঠিক আগে সরকারি e-Jagriti দাখিল প্রক্রিয়ায় অঙ্কটি যাচাই করুন। পোর্টালের নির্ধারিত চাহিদা ও প্রযোজ্য বিধিই প্রাধান্য পাবে।',
          hi: 'भुगतान से ठीक पहले आधिकारिक e-Jagriti दाखिला प्रक्रिया पर राशि की पुष्टि करें। पोर्टल की निर्धारित मांग और लागू नियम प्रभावी होंगे।'
        },
        scope: 'national',
        evidence: {
          status: 'variable',
          primary_source_title: 'Consumer Protection Act, 2019 and applicable Consumer Commission Rules',
          primary_source_url: 'https://consumeraffairs.gov.in/pages/consumer-protection-acts',
          pinpoint: 'Consumer Protection Act, 2019, section 35(2); applicable Commission Rules and current e-Jagriti fee demand',
          checked_on: '2026-10-10',
          notes: {
            en: 'Confirm current rules and the live portal amount before filing.',
            bn: 'দাখিলের আগে বর্তমান বিধি ও লাইভ পোর্টালের অঙ্ক যাচাই করুন।',
            hi: 'दाखिले से पहले वर्तमान नियम और लाइव पोर्टल राशि जांचें।'
          }
        }
      }
    ],
    timeline_info: [
      {
        id: 'time-consumer-01-case-duration',
        kind: 'indicative_estimate',
        label: {
          en: 'Case processing time',
          bn: 'মামলা প্রক্রিয়াকরণের সময়',
          hi: 'मामले की प्रक्रिया का समय'
        },
        value_description: {
          en: 'No fixed completion estimate is provided; actual duration depends on the Commission, service, pleadings, evidence, and hearing schedule.',
          bn: 'নির্দিষ্ট নিষ্পত্তি-সময় বলা হচ্ছে না; প্রকৃত সময় কমিশন, নোটিশ জারি, বক্তব্য, প্রমাণ ও শুনানির সময়সূচির উপর নির্ভর করে।',
          hi: 'निश्चित निस्तारण अवधि नहीं दी जा रही; वास्तविक समय आयोग, तामील, पक्षकथन, साक्ष्य और सुनवाई कार्यक्रम पर निर्भर है।'
        },
        scope: 'national',
        evidence: {
          status: 'verified',
          primary_source_title: 'Consumer Protection Act, 2019',
          primary_source_url: 'https://www.indiacode.nic.in/handle/123456789/15256',
          pinpoint: 'Sections 36 and 38; statutory procedural targets do not guarantee final case duration',
          checked_on: '2026-10-10'
        }
      }
    ],
    required_documents: [
      {
        id: 'doc-consumer-01-1',
        name: { en: 'Tax Invoice / Proof of Purchase', bn: 'ট্যাক্স ইনভয়েস বা ক্রয়ের মূল বিল', hi: 'टैक्स इनवॉयस / खरीद की रसीद' },
        issuing_authority: { en: 'Seller / Service Provider', bn: 'বিক্রেতা সংস্থা', hi: 'विक्रेता / सेवा प्रदाता' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-02',
    title: {
      en: 'WBRERA Builder Delay, Interest & Refund (Form-M)',
      bn: 'আবাসন প্রমোটারের ফ্ল্যাট হস্তান্তরে দেরি ও রিফান্ড (Form-M)',
      hi: 'बिल्डर द्वारा फ्लैट देरी, ब्याज एवं रिफंड वाद (फॉर्म-M)'
    },
    relevant_act: 'Sec 18, Real Estate (Regulation & Dev) Act, 2016',
    summary: {
      en: 'Securing monthly delay interest (SBI MCLR + 2%) or complete refund with interest for stalled housing projects across West Bengal.',
      bn: 'নির্ধারিত সময়ে ফ্ল্যাট না দিলে প্রমোটারের কাছ থেকে সুদে-আসলে টাকা ফেরত বা মাসিক ক্ষতিপূরণ আদায়।',
      hi: 'तय समय पर पजेशन न मिलने पर बिल्डर से एसबीआई दर पर मासिक ब्याज या पूरा पैसा वापस पाना।'
    },
    authority_forum: {
      en: 'West Bengal Real Estate Regulatory Authority (WBRERA Bench)',
      bn: 'পশ্চিমবঙ্গ রেরা বেঞ্চ (WBRERA)',
      hi: 'पश्चिम बंगाल रेरा प्राधिकरण (WBRERA)'
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
      en: ['wbrera form m', 'builder delay refund', 'rera compensation flat'],
      bn: ['রেরা ফর্ম এম', 'ফ্ল্যাট হস্তান্তরে দেরি', 'প্রমোটার রিফান্ড রেরা'],
      hi: ['रेरा फॉर्म M', 'बिल्डर देरी रिफंड', 'फ्लैट पजेशन ब्याज']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Verify project RERA registration number and sanctioned possession completion date.',
        'File online complaint in Form-M on the WBRERA portal paying statutory ₹1,000 fee.',
        'Serve formal digital notice to developer detailing payment receipts and default days.',
        'WBRERA Bench orders refund with SBI MCLR+2% interest or monthly delay payout.'
      ],
      bn: [
        'প্রজেক্টের রেরা নম্বর এবং চুক্তিতে উল্লেখিত ফ্ল্যাট হস্তান্তরের শেষ তারিখ পরীক্ষা করুন।',
        '১,০০০ টাকা ফি দিয়ে রেরা পোর্টালে ফর্ম-এম (Form-M) অনলাইন অভিযোগ দাখিল করুন।',
        'সমস্ত পেমেন্ট রসিদ ও চুক্তিপত্রের প্রতিলিপিসহ প্রমোটারকে আইনি নোটিশ প্রেরণ করুন।',
        'রেরা বেঞ্চ শুনানি শেষে এসবিআই সুদের হারে টাকা ফেরত বা মাসিক ক্ষতিপূরণ মঞ্জুর করবে।'
      ],
      hi: [
        'प्रोजेक्ट का रेरा नंबर एवं अनुबंध में दर्ज पजेशन की अंतिम तिथि सत्यापित करें।',
        '₹1,000 शुल्क के साथ WBRERA पोर्टल पर ऑनलाइन फॉर्म-M शिकायत दर्ज करें।',
        'बिल्डर को समस्त भुगतान रसीदों के साथ विधिक शिकायत की प्रति तामील कराएं।',
        'रेरा बेंच द्वारा बिल्डर को एसबीआई ब्याज दर पर पूरा पैसा या मासिक ब्याज का आदेश होगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-02-1',
        name: { en: 'Registered Agreement for Sale & Bank Payment Receipts', bn: 'রেজিস্ট্রি বায়না চুক্তি ও পেমেন্ট রসিদ', hi: 'पंजीकृत बिक्री अनुबंध एवं भुगतान रसीदें' },
        issuing_authority: { en: 'Developer / Bank', bn: 'প্রমোটার / ব্যাঙ্ক', hi: 'बिल्डर / बैंक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-03',
    title: {
      en: 'Electricity Bills & Meter Disputes (WBSEDCL vs CESC)',
      bn: 'বিদ্যুৎ বিল প্রতারণা ও মিটার বিরোধ (WBSEDCL বনাম CESC)',
      hi: 'बिजली बिल एवं मीटर विवाद (WBSEDCL बनाम CESC)'
    },
    relevant_act: 'Sec 42(5), Electricity Act, 2003 & WBERC Regs',
    summary: {
      en: 'Divergent electricity utilities: WBSEDCL for all 22 administrative districts; CESC Limited for Kolkata and Howrah urban zones.',
      bn: 'বিদ্যুৎ বিরোধ নিষ্পত্তি: ২২টি জেলার জন্য ডব্লুবিএসইডিসিএল (WBSEDCL); কলকাতা ও হাওড়া শহরের জন্য সিইএসসি (CESC)।',
      hi: 'बिजली वितरण शिकायत: 22 जिलों हेतु WBSEDCL; कोलकाता एवं हावड़ा शहरी क्षेत्र हेतु CESC।'
    },
    authority_forum: {
      en: 'CGRF GRO (WBSEDCL in Districts / CESC in Kolkata)',
      bn: 'গ্রাহক অভিযোগ নিবারণ সেল (জেলায় WBSEDCL / কলকাতায় CESC)',
      hi: 'विद्युत उपभोक्ता शिकायत फोरम'
    },
    forum_type: 'Electricity_Ombudsman',
    is_complex: false,
    official_portal_url: 'https://wberc.gov.in/',
    statutory_timeframe: {
      en: '30 to 60 working days',
      bn: '৩০ থেকে ৬০ কার্যদিবস',
      hi: '30 से 60 कार्यदिवस'
    },
    search_keywords: {
      en: ['cesc faulty bill', 'wbsedcl high bill complaint', 'electricity ombudsman kolkata'],
      bn: ['ভুতুড়ে বিদ্যুৎ বিল', 'সিইএসসি বিল বিরোধ', 'বিদ্যুৎ ন্যায়পাল'],
      hi: ['बिजली बिल शिकायत', 'अत्यधिक बिजली बिल सुधार', 'विद्युत लोकपाल']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'WBSEDCL Customer Care Center / Regional GRO (22 Districts)',
          bn: 'ডব্লুবিএসইডিসিএল গ্রাহক সেবা কেন্দ্র / রিজিওনাল জিআরও',
          hi: 'डब्ल्यूबीएसईडीसीएल ग्राहक सेवा केंद्र / क्षेत्रीय जीआरओ'
        },
        portal_name: { en: 'WBSEDCL Consumer Portal', bn: 'ডব্লুবিএসইডিসিএল পোর্টাল', hi: 'डब्ल्यूबीएसईडीसीएल पोर्टल' },
        portal_url: 'https://wbsedcl.in/',
        steps: {
          en: [
            'Submit written objection to Station Manager at local WBSEDCL Customer Care Center (CCC).',
            'If uncorrected in 15 days, appeal before Regional Grievance Redressal Officer (GRO).',
            'Pay disputed amount under protest via GRIPS or WBSEDCL portal to prevent disconnection.',
            'Escalate to Electricity Ombudsman (WBERC) for independent third-party meter calibration.'
          ],
          bn: [
            'স্থানীয় ডব্লুবিএসইডিসিএল কাস্টমার কেয়ার সেন্টারের স্টেশন ম্যানেজারের কাছে লিখিত আপত্তি জানান।',
            '১৫ দিনে সুরাহা না হলে রিজিওনাল গ্রিভেন্স রিড্রেসাল অফিসারের (GRO) কাছে আপিল করুন।',
            'লাইন কাটা আটকাতে আপত্তিসহ সাময়িক বিলের অংশবিশেষ জমা দিন।',
            'কলকাতায় অবস্থিত বিদ্যুৎ ন্যায়পালের কাছে স্বাধীন ল্যাব টেস্ট ও বিল সংশোধনের নির্দেশ নিন।'
          ],
          hi: [
            'स्थानीय डब्ल्यूबीएसईडीसीएल ग्राहक सेवा केंद्र के स्टेशन मैनेजर को लिखित आपत्ति दर्ज कराएं।',
            '15 दिन में सुधार न होने पर क्षेत्रीय शिकायत निवारण अधिकारी (GRO) के समक्ष अपील करें।',
            'लाइन कटने से रोकने हेतु आपत्ति दर्ज कराकर आंशिक बिल जमा करें।',
            'विद्युत लोकपाल (WBERC) के समक्ष स्वतंत्र लैब से मीटर जांच एवं बिल सुधार का आदेश लें।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'CESC Limited Commercial Cell / Central GRO (Victoria House)',
          bn: 'সিইএসসি বাণিজ্যিক সেল / সেন্ট্রাল জিআরও (ভিক্টোরিয়া হাউস, কলকাতা)',
          hi: 'सीईएससी लिमिटेड वाणिज्यिक सेल / सेंट्रल जीआरओ'
        },
        portal_name: { en: 'CESC Official Grievance Portal', bn: 'সিইএসসি পোর্টাল', hi: 'सीईएससी पोर्टल' },
        portal_url: 'https://cesc.co.in/',
        steps: {
          en: [
            'Lodge billing dispute online via CESC portal or visit Regional Commercial Office.',
            'Appeal to Central Grievance Redressal Officer (CGRO) at Victoria House, Kolkata.',
            'CESC technical squad inspects digital meter and compares historical consumption data.',
            'If aggrieved, move Ombudsman under WBERC for refund of inflated bill amounts.'
          ],
          bn: [
            'সিইএসসি পোর্টালে অনলাইন বিলিং ডিসপিউট টিকিট করুন অথবা আঞ্চলিক অফিসে যান।',
            'কলকাতার ভিক্টোরিয়া হাউসে সেন্ট্রাল গ্রিভেন্স রিড্রেসাল অফিসারের (CGRO) কাছে আপিল করুন।',
            'সিইএসসি কারিগরি টিম মিটার পরিদর্শন করে পূর্ববর্তী ব্যবহারের সাথে তুলনা করবে।',
            'সমাধান না হলে ডব্লুবিইআরসি বিদ্যুৎ ন্যায়পালের কাছে অতিরিক্ত বিল সমন্বয়ের রায় নিন।'
          ],
          hi: [
            'सीईएससी पोर्टल पर ऑनलाइन बिल विवाद दर्ज करें अथवा क्षेत्रीय कार्यालय में आवेदन दें।',
            'विक्टोरिया हाउस (कोलकाता) स्थित मुख्य शिकायत निवारण अधिकारी के समक्ष अपील करें।',
            'सीईएससी की तकनीकी टीम मीटर की शुद्धता एवं पिछले महीनों की खपत की जांच करेगी।',
            'संतुष्ट न होने पर विद्युत लोकपाल में अपील कर अत्यधिक बिल को समायोजित कराएं।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Submit written objection to Station Manager / Local Customer Care Center.',
        'File statutory appeal before Regional Grievance Redressal Officer (GRO).',
        'Escalate unresolved dispute within 60 days to Electricity Ombudsman (Kolkata).',
        'Secure order for third-party independent meter testing and tariff re-calculation.'
      ],
      bn: [
        'স্থানীয় কাস্টমার কেয়ার সেন্টারের স্টেশন ম্যানেজারের কাছে লিখিত আপত্তি জানান।',
        'সমাধান না হলে রিজিওনাল গ্রিভেন্স রিড্রেসাল অফিসারের (GRO) কাছে আপিল করুন।',
        '৬০ দিনের মধ্যে কলকাতার বিদ্যুৎ ন্যায়পাল (Ombudsman) এজলাসে শুনানি প্রার্থনা করুন।',
        'স্বাধীন ল্যাবে মিটার টেস্ট করিয়ে অতিরিক্ত ভুতুড়ে বিল সম্পূর্ণ বাতিল ও সমন্বয় করান।'
      ],
      hi: [
        'स्थानीय विद्युत ग्राहक सेवा केंद्र के स्टेशन मैनेजर को लिखित आपत्ति दर्ज कराएं।',
        'निस्तारण न होने पर क्षेत्रीय शिकायत निवारण अधिकारी (GRO) के समक्ष अपील करें।',
        'विवाद हल न होने पर 60 दिनों में विद्युत लोकपाल (कोलकाता) के समक्ष अपील दाखिल करें।',
        'थर्ड पार्टी स्वतंत्र लैब से मीटर जांच कराकर गलत बिल को निरस्त एवं समायोजित कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-03-1',
        name: { en: 'Disputed Electricity Bill & Past 12 Months Payment Records', bn: 'বিতর্কিত বিল ও পূর্ববর্তী ১২ মাসের পেমেন্ট কপি', hi: 'विवादित बिल एवं पिछले 12 माह के भुगतान रिकॉर्ड' },
        issuing_authority: { en: 'CESC / WBSEDCL', bn: 'সিইএসসি / ডব্লুবিএসইডিসিএল', hi: 'सीईएससी / डब्ल्यूबीएसईडीसीएल' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-04',
    title: {
      en: 'Hospital Billing Fraud & Medical Negligence',
      bn: 'বেসরকারি নার্সিংহোমের অতিরিক্ত বিলিং ও গাফিলতি',
      hi: 'निजी अस्पतालों की मनमानी बिलिंग एवं चिकित्सकीय लापरवाही'
    },
    relevant_act: 'WB Clinical Establishments Act, 2017 & CPA, 2019',
    summary: {
      en: 'Challenging package inflation, dead body detention for bills, and medical malpractice across West Bengal private nursing homes.',
      bn: 'নার্সিংহোমের প্যাকেজের অতিরিক্ত বিলিং, মৃতদেহ আটকে রাখা ও ভুল চিকিৎসার ক্ষতিপূরণ আদায়।',
      hi: 'अस्पताल द्वारा पैकेज से ज्यादा बिल वसूलने, शव रोकने एवं गलत इलाज के विरुद्ध कानूनी हर्जाना।'
    },
    authority_forum: {
      en: 'West Bengal Clinical Establishments Regulatory Commission (WBCERC) / DCDRC',
      bn: 'ক্লিনিক্যাল এস্টাব্লিশমেন্ট কমিশন (WBCERC) / উপভোক্তা আদালত',
      hi: 'पश्चिम बंगाल नैदानिक प्रतिष्ठान नियामक आयोग (WBCERC)'
    },
    forum_type: 'WBCERC',
    is_complex: true,
    official_portal_url: 'https://wbcerc.gov.in/',
    statutory_timeframe: {
      en: '30 to 60 working days',
      bn: '৩০ থেকে ৬০ কার্যদিবস',
      hi: '30 থেকে 60 कार्यदिवस'
    },
    search_keywords: {
      en: ['wbcerc hospital complaint', 'nursing home overbilling kolkata', 'medical negligence refund'],
      bn: ['নার্সিংহোম অতিরিক্ত বিল', 'চিকিৎসা গাফিলতি কমিশন', 'মৃতদেহ আটকে রাখা'],
      hi: ['अस्पताल बिलिंग धांधली', 'चिकित्सा लापरवाही आयोग', 'शव रोकना शिकायत']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Demand itemized daily pharmacy sheets, doctor fee logs, and investigation vouchers.',
        'File immediate petition before WBCERC (Kolkata) against dead body hold or package inflation.',
        'Commission holds summary hearing and orders release of patient/body with interim deposit.',
        'File DCDRC consumer complaint claiming compensation for gross medical negligence.'
      ],
      bn: [
        'হাসপাতালের কাছ থেকে প্রতিদিনের ওষুধের বিল, ডাক্তার ভিজিট ও পরীক্ষা নিরীক্ষার তালিকা নিন।',
        'বিলের জন্য মৃতদেহ আটকে রাখলে বা বেশি বিল করলে WBCERC কমিশনে জরুরি অভিযোগ দিন।',
        'কমিশন দ্রুত শুনানি ডেকে অন্তর্বর্তী আদেশে মৃতদেহ অবমুক্ত ও অতিরিক্ত বিল মকুব করবে।',
        'ভুল চিকিৎসার জন্য জেলা উপভোক্তা কমিশনে চিকিৎসাজনিত ক্ষতিপূরণের মামলা দায়ের করুন।'
      ],
      hi: [
        'अस्पताल से दवाओं, जांचों एवं डॉक्टरों की फीस का विस्तृत दैनिक बिल अनिवार्य रूप से लें।',
        'शव रोकने या पैकेज से अधिक बिलिंग पर WBCERC आयोग (कोलकाता) में तुरंत याचिका दें।',
        'आयोग द्वारा आपात सुनवाई कर रोगी/शव को अविलंब मुक्त कराने का आदेश दिया जाएगा।',
        'गलत इलाज एवं लापरवाही के विरुद्ध जिला उपभोक्ता आयोग में भारी हर्जाने का वाद करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-04-1',
        name: { en: 'Final Hospital Bill, Bed-Head Tickets & Discharge Summary', bn: 'হাসপাতালের চূড়ান্ত বিল ও ডিসচার্জ সামারি', hi: 'अंतिम अस्पताल बिल एवं डिस्चार्ज सारांश' },
        issuing_authority: { en: 'Private Clinical Establishment', bn: 'নার্সিংহোম কর্তৃপক্ষ', hi: 'निजी अस्पताल' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-05',
    title: {
      en: 'Apartment Owners Association Handover & Parking',
      bn: 'ফ্ল্যাট ওনার্স অ্যাসোসিয়েশন গঠন ও পার্কিং বিরোধ (KMC বনাম BMC/HMC/জেলা)',
      hi: 'अपार्टमेंट ओनर्स एसोसिएशन गठन एवं पार्किंग विवाद (केएमसी बनाम बीएमसी/एचएमसी)'
    },
    relevant_act: 'WB Apartment Ownership Act, 1972 r/w WBRERA',
    summary: {
      en: 'Forcing builder to register the flat owners association, transfer common funds, and stop illegal parking sales: KMC for Kolkata; BMC/HMC/Districts for regional zones.',
      bn: 'বিল্ডারের হাত থেকে মেইনটেন্যান্স ফান্ড, ছাদ ও কমন এরিয়া ফ্ল্যাট ওনার্স অ্যাসোসিয়েশনকে হস্তান্তরের নিয়ম (কলকাতা বনাম বিধাননগর/হাওড়া/জেলা)।',
      hi: 'बिल्डर से मेंटेनेंस फंड एवं कॉमन एरिया एसोसिएशन को हस्तांतरित कराना (कोलकाता बनाम अन्य नगर निगम)।'
    },
    authority_forum: {
      en: 'Competent Authority (Housing Dept) / WBRERA',
      bn: 'কম্পিটেন্ট অথরিটি (আবাসন দপ্তর) / রেরা',
      hi: 'सक्षम प्राधिकारी (आवास विभाग) / रेरा'
    },
    forum_type: 'Competent_Authority',
    is_complex: true,
    official_portal_url: 'https://wbhousing.gov.in/',
    statutory_timeframe: {
      en: '60 working days',
      bn: '৬০ কার্যদিবস',
      hi: '60 कार्यदिवস'
    },
    search_keywords: {
      en: ['apartment association wb', 'parking dispute builder', 'sinking fund transfer'],
      bn: ['ফ্ল্যাট ওনার্স অ্যাসোসিয়েশন', 'পার্কিং বিরোধ প্রমোটার', 'সিঙ্কিং ফান্ড ফেরত'],
      hi: ['अपार्टमेंट एसोसिएशन गठन', 'पार्किंग विवाद बिल्डर', 'मेंटेनेंस फंड ट्रांसफर']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'Competent Authority (District Housing Cell) / BMC / HMC',
          bn: 'জেলা আবাসন সেল / বিধাননগর পুরনিগম (BMC) / হাওড়া (HMC)',
          hi: 'जिला आवास सेल / नगर निगम (BMC/HMC)'
        },
        portal_name: { en: 'Bidhannagar / Howrah Portal', bn: 'বিধাননগর / হাওড়া পোর্টাল', hi: 'नगर निगम पोर्टल' },
        portal_url: 'https://www.bmcwbgov.in/',
        steps: {
          en: [
            'Convene general body meeting of allottees adopting statutory Form-A bye-laws.',
            'Submit registration application before Competent Authority (Housing Department, Salt Lake).',
            'Demand handover of sinking fund and common facility meters from developer.',
            'If promoter sold open parking slots, petition WBRERA and local Municipal Corporation (BMC/HMC).'
          ],
          bn: [
            'ফ্ল্যাট মালিকদের সাধারণ সভা ডেকে ফর্ম-এ অনুযায়ী বিধিবদ্ধ উপ-আইন অনুমোদন করুন।',
            'সল্টলেকের রাজ্য আবাসন দপ্তরের কম্পিটেন্ট অথরিটির কাছে রেজিস্ট্রেশন আবেদন দিন।',
            'সিঙ্কিং ফান্ডের জমা টাকা ও কমন মিটার হস্তান্তরের জন্য বিল্ডারকে আইনি চিঠি দিন।',
            'খোলা পার্কিং বেআইনি বিক্রি করলে রেরা এবং সংশ্লিষ্ট পুরনিগমে (BMC/HMC) নালিশ করুন।'
          ],
          hi: [
            'फ्लैट खरीदारों की आम बैठक बुलाकर वैधानिक फॉर्म-A उप-नियमों को स्वीकृत करें।',
            'सक्षम आवास प्राधिकारी (साल्ट लेक) के समक्ष एसोसिएशन पंजीकरण हेतु आवेदन करें।',
            'सिंकिंग फंड एवं कॉमन बिजली मीटर एसोसिएशन को सौंपने का नोटिस बिल्डर को भेजें।',
            'खुली पार्किंग बेचने पर रेरा एवं स्थानीय नगर निगम (BMC/HMC) में शिकायत दर्ज कराएं।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'KMC Assessment & Building Dept / Competent Authority (New Secretariat)',
          bn: 'কেএমসি অ্যাসেসমেন্ট ও বিল্ডিং বিভাগ / আবাসন দপ্তর (নিউ সেক্রেটারিয়েট)',
          hi: 'कोलकाता नगर निगम भवन विभाग / आवास विभाग'
        },
        portal_name: { en: 'KMC Official Portal', bn: 'কেএমসি পোর্টাল', hi: 'केएमसी पोर्टल' },
        portal_url: 'https://www.kmcgov.in/',
        steps: {
          en: [
            'Register Flat Owners Association with Competent Authority at New Secretariat Buildings, Kolkata.',
            'Apply to KMC Assessment Dept for mutation of building common facilities to association name.',
            'Submit certified KMC building plan showing open stilts cannot be sold as private units.',
            'WBRERA and KMC declare promoter garage sale deeds void, returning areas to society.'
          ],
          bn: [
            'কলকাতার নিউ সেক্রেটারিয়েট ভবনের আবাসন কম্পিটেন্ট অথরিটির কাছে সমিতি নথিভুক্ত করুন।',
            'কেএমসি অ্যাসেসমেন্ট বিভাগে আবেদন করে কমন এরিয়ার কর বিল সমিতির নামে ট্রান্সফার করান।',
            'কেএমসি বিল্ডিং প্ল্যান দেখিয়ে প্রমাণ করুন খোলা স্টিল্ট এলাকা আলাদা বিক্রি আইনত নিষিদ্ধ।',
            'রেরা ও পুরসভা বিল্ডারের গ্যারাজ বিক্রির দলিল বাতিল করে ছাদ ও পার্কিং সমিতিকে বুঝিয়ে দেবে।'
          ],
          hi: [
            'न्यू सेक्रेटेरिएट बिल्डिंग (कोलकाता) में सक्षम आवास प्राधिकारी से एसोसिएशन पंजीकृत कराएं।',
            'केएमसी कर विभाग में आवेदन कर कॉमन एरिया का टैक्स बिल एसोसिएशन के नाम कराएं।',
            'केएमसी स्वीकृत नक्शा प्रस्तुत कर साबित करें कि स्टिल्ट पार्किंग बेचना अवैध है।',
            'रेरा एवं केएमसी द्वारा बिल्डर की पार्किंग बिक्री रद्द कर कॉमन एरिया समिति को सौंपा जाएगा।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Convene general body meeting of flat buyers to adopt statutory Form-A bye-laws.',
        'Submit registration dossier before Competent Authority under Apartment Ownership Act.',
        'Issue legal demand notice to developer to hand over sinking fund and audited accounts.',
        'Move WBRERA Bench to cancel illegal third-party parking sale deeds executed by builder.'
      ],
      bn: [
        'ফ্ল্যাট মালিকদের সাধারণ সভা ডেকে ফর্ম-এ অনুযায়ী বিধিবদ্ধ উপ-আইন অনুমোদন করুন।',
        'অ্যাপার্টমেন্ট ওনারশিপ অ্যাক্ট মেনে আবাসন দপ্তরের কম্পিটেন্ট অথরিটির কাছে আবেদন দিন।',
        'সিঙ্কিং ফান্ডের টাকা ও হিসাবের খাতা হস্তান্তর করতে প্রমোটারকে আইনি নোটিশ পাঠান।',
        'বহিরাগতদের কাছে বেআইনিভাবে বিক্রি করা পার্কিং স্পেস বাতিল করতে রেরা বেঞ্চে মামলা করুন।'
      ],
      hi: [
        'फ्लैट खरीदारों की आम बैठक बुलाकर वैधानिक फॉर्म-A उप-नियमों को स्वीकृत करें।',
        'अपार्टमेंट ओनरशिप एक्ट के तहत सक्षम आवास प्राधिकारी के समक्ष पंजीकरण कराएं।',
        'सिंकिंग फंड एवं ऑडिट खातों को सौंपने हेतु बिल्डर को औपचारिक मांग पत्र भेजें।',
        'बिल्डर द्वारा बेची गई अवैध खुली पार्किंग को रद्द कराने हेतु रेरा बेंच में याचिका दें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-05-1',
        name: { en: 'Form-A Declaration Signed by Majority Flat Owners', bn: 'ফর্ম-এ ঘোষণাপত্র ও সদস্যদের তালিকা', hi: 'फॉर्म-A घोषणा पत्र एवं सदस्यों की हस्ताक्षरित सूची' },
        issuing_authority: { en: 'Apartment Owners Body', bn: 'ফ্ল্যাট মালিক সংগঠন', hi: 'अपार्टमेंट ओनर्स बॉडी' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-06',
    title: {
      en: 'WBRERA Recovery Warrant Execution via DM',
      bn: 'WBRERA রিকভারি সার্টিফিকেট জারি ও টাকা উদ্ধার',
      hi: 'WBRERA रिकवरी वारंट निष्पादन एवं डीएम द्वारा वसूली'
    },
    relevant_act: 'Sec 40(1) RERA 2016 r/w Bengal PDR Act, 1913',
    summary: {
      en: 'Recovering awarded RERA refund amounts as land revenue arrears: Kolkata Collector for KMC areas; District Magistrates (Barasat, Alipore, Howrah, etc.) for district projects.',
      bn: 'রেরা আদালতের ক্ষতিপূরণ ও রিফান্ডের আদেশ না মানলে জেলাশাসকের মাধ্যমে বিল্ডারের সম্পত্তি নিলাম করে টাকা আদায়।',
      hi: 'रेरा कोर्ट के आदेश का पालन न करने पर डीएम द्वारा बिल्डर के खाते व संपत्ति जब्त कर पैसा वसूलना।'
    },
    authority_forum: {
      en: 'Certificate Officer / District Magistrate (Collector)',
      bn: 'সার্টিফিকেট অফিসার / জেলাশাসক (DM)',
      hi: 'सर्टिफिकेट अधिकारी / जिला मजिस्ट्रेट (कलेक्टर)'
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
      en: ['rera recovery warrant', 'section 40 rera dm execution', 'bengal pdr act builder'],
      bn: ['রেরা রিকভারি সার্টিফিকেট', 'জেলাশাসক মারফত টাকা উদ্ধার', 'বিল্ডারের সম্পত্তি ক্রোক'],
      hi: ['रेरा रिकवरी वारंट', 'डीएम द्वारा वसूली', 'बंगाल पीडीआर एक्ट बिल्डर']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain certified Recovery Certificate under Section 40(1) from the WBRERA Authority.',
        'WBRERA transmits certificate directly to District Magistrate as public demand arrears.',
        'Certificate Officer issues demand notice under Section 7 of Bengal PDR Act, 1913.',
        'If unpaid in 30 days, freeze builder bank accounts and attach real estate inventory.'
      ],
      bn: [
        'রেরা কর্তৃপক্ষ থেকে ধারা ৪০(১) অনুযায়ী প্রত্যয়িত রিকভারি সার্টিফিকেট সংগ্রহ করুন।',
        'রেরা সরাসরি সংশ্লিষ্ট জেলাশাসকের (DM) কাছে সার্টিফিকেট রিকভারির নির্দেশ পাঠাবে।',
        'সার্টিফিকেট অফিসার বেঙ্গল পিডিআর আইনের ধারা ৭ অনুযায়ী বিল্ডারকে নোটিশ দেবেন।',
        'টাকা না দিলে বিল্ডারের ব্যাঙ্ক অ্যাকাউন্ট সিল ও অবিক্রীত ফ্ল্যাট নিলাম করে টাকা আদায় হবে।'
      ],
      hi: [
        'WBRERA प्राधिकरण से धारा 40(1) के तहत आधिकारिक रिकवरी सर्टिफिकेट प्राप्त करें।',
        'रेरा द्वारा सीधे जिला कलेक्टर को भू-राजस्व बकाए के रूप में वसूली का आदेश भेजा जाएगा।',
        'सर्टिफिकेट अधिकारी बंगाल पीडीआर एक्ट 1913 की धारा 7 में बिल्डर को नोटिस जारी करेंगे।',
        '30 दिन में भुगतान न होने पर बिल्डर के खाते फ्रीज कर संपत्तियों की नीलामी से वसूली होगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-06-1',
        name: { en: 'Certified WBRERA Section 40 Recovery Warrant Order', bn: 'রেরা ধারা ৪০ রিকভারি ওয়ারেন্টের সার্টিফাইড কপি', hi: 'रेरा धारा 40 रिकवरी वारंट आदेश प्रति' },
        issuing_authority: { en: 'WBRERA Registrar', bn: 'রেরা রেজিস্টার', hi: 'रेरा रजिस्ट्रार' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-07',
    title: {
      en: 'Unregistered Real Estate Projects / False Ads',
      bn: 'রেরা রেজিস্ট্রেশনহীন অবৈধ আবাসন প্রকল্প অভিযোগ',
      hi: 'रेरा पंजीकरण के बिना अवैध प्रोजेक्ट एवं भ्रामक विज्ञापन पर रोक'
    },
    relevant_act: 'Sec 3 & 59, Real Estate (Regulation & Dev) Act, 2016',
    summary: {
      en: 'Reporting promoters marketing unapproved or unregistered housing projects and imposing heavy statutory penalties.',
      bn: 'রেরা অনুমোদন ছাড়া বিজ্ঞাপন দেওয়া বা ফ্ল্যাট বিক্রি করা বেআইনি প্রজেক্ট বন্ধ ও জরিমানার আবেদন।',
      hi: 'बिना रेरा नंबर के प्रोजेक्ट का प्रचार करने या बुकिंग लेने वाले बिल्डरों पर भारी जुर्माने की कार्रवाई।'
    },
    authority_forum: {
      en: 'West Bengal RERA Authority',
      bn: 'পশ্চিমবঙ্গ রেরা কর্তৃপক্ষ',
      hi: 'पश्चिम बंगाल रेरा प्राधिकरण'
    },
    forum_type: 'WBRERA',
    is_complex: false,
    official_portal_url: 'https://rera.wb.gov.in/',
    statutory_timeframe: {
      en: '30 working days',
      bn: '৩০ কার্যদিবস',
      hi: '30 कार्यदिवस'
    },
    search_keywords: {
      en: ['unregistered rera project', 'section 59 rera penalty', 'fake builder advertisement'],
      bn: ['অননুমোদিত রেরা প্রজেক্ট', 'বিল্ডারের ভুয়ো বিজ্ঞাপন', 'রেরা জরিমানা'],
      hi: ['अवैध बिना रेरा प्रोजेक्ट', 'धारा 59 जुर्माना', 'फर्जी बिल्डर विज्ञापन']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Verify project details on the official WBRERA portal to confirm lack of registration.',
        'Preserve promotional hoardings, newspaper ads, or brochures lacking RERA numbers.',
        'Submit a formal complaint under Section 59 before the WBRERA Secretary.',
        'WBRERA issues show-cause notice, freezes sales, and levies fines up to 10% of project cost.'
      ],
      bn: [
        'রেরা পোর্টালে সার্চ করে নিশ্চিত হন যে প্রজেক্টটির কোনো বৈধ রেরা রেজিস্ট্রেশন নেই।',
        'রেরা নম্বরহীন খবরের কাগজের বিজ্ঞাপন, বুকিং ফর্ম বা লিফলেটের প্রমাণ সংরক্ষণ করুন।',
        'রেরা সচিবের কাছে ধারা ৫৯ অনুযায়ী অবৈধ প্রকল্পের বিরুদ্ধে শাস্তিমূলক অভিযোগ জানান।',
        'রেরা প্রজেক্টের বুকিং বন্ধের নির্দেশ দেবে এবং মোট খরচের ১০% পর্যন্ত জরিমানা চাপাবে।'
      ],
      hi: [
        'आधिकारिक पोर्टल पर जांचें कि प्रोजेक्ट का कोई वैध रेरा रजिस्ट्रेशन नंबर नहीं है।',
        'बिना रेरा नंबर वाले अखबार के विज्ञापनों, पैम्फलेट एवं सोशल मीडिया पोस्ट को सुरक्षित करें।',
        'रेरा सचिव के समक्ष धारा 59 के अंतर्गत दंडात्मक कार्रवाई हेतु औपचारिक शिकायत दें।',
        'रेरा तुरंत बुकिंग व विज्ञापन पर रोक लगाकर प्रोजेक्ट लागत का 10% तक जुर्माना लगाएगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-07-1',
        name: { en: 'Photocopy of Advertisement / Brochure without RERA No', bn: 'রেরা নম্বরহীন বিজ্ঞাপনের কপি বা ব্রোশার', hi: 'बिना रेरा नंबर वाले विज्ञापन या ब्रोशर की प्रति' },
        issuing_authority: { en: 'Promoter / Media Agency', bn: 'বিজ্ঞাপন প্রকাশনা', hi: 'बिल्डर / प्रचार एजेंसी' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-08',
    title: {
      en: 'Non-Issuance of Completion (CC) & Occupancy (OC)',
      bn: 'পুরসভা কর্তৃক কমপ্লিশন ও অকুপ্যান্সি সার্টিফিকেট বিরোধ',
      hi: 'भवन पूर्णता (CC) एवं अधिभोग प्रमाणपत्र (OC) न मिलने का विवाद'
    },
    relevant_act: 'Sec 11(4)(b) & 14 RERA r/w KMC / Municipal Acts',
    summary: {
      en: 'Compelling promoters to obtain sanctioned Completion Certificate (CC) and legal Occupancy Certificate (OC) from competent municipal bodies.',
      bn: 'ফ্ল্যাট দখল দেওয়ার পরেও পুরসভার কমপ্লিশন ও অকুপ্যান্সি সার্টিফিকেট না দিলে আইনি প্রতিকার।',
      hi: 'फ्लैट सौंपने के बाद भी नगर निगम से पूर्णता एवं अधिभोग प्रमाणपत्र (OC) न दिलाने पर कानूनी कार्रवाई।'
    },
    authority_forum: {
      en: 'District Consumer Commission / WBRERA',
      bn: 'জেলা ক্রেতা সুরক্ষা কমিশন / রেরা',
      hi: 'जिला उपभोक्ता आयोग / रेरा'
    },
    forum_type: 'WBRERA',
    is_complex: true,
    official_portal_url: 'https://rera.wb.gov.in/',
    statutory_timeframe: {
      en: '3 to 6 months',
      bn: '৩ থেকে ৬ মাস',
      hi: '3 से 6 माह'
    },
    search_keywords: {
      en: ['occupancy certificate oc delay', 'completion certificate cc rera', 'builder not giving oc'],
      bn: ['অকুপ্যান্সি সার্টিফিকেট', 'কমপ্লিশন সার্টিফিকেট পুরসভা', 'সিসি ও ওসি বিরোধ'],
      hi: ['अधिभोग प्रमाणपत्र ओसी', 'पूर्णता प्रमाणपत्र सीसी', 'बिल्डर ओसी नहीं दे रहा']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Verify from municipal borough building office whether builder applied for CC/OC.',
        'Serve a 30-day statutory notice to promoter citing mandatory duty under Section 11(4)(b).',
        'File a complaint before WBRERA or District Consumer Commission for gross service defect.',
        'Secure an order directing promoter to rectify deviations, pay fines, and hand over OC.'
      ],
      bn: [
        'পুরসভার বিল্ডিং বিভাগ থেকে খোঁজ নিন প্রমোটার আদৌ সিসি/ওসির আবেদন করেছে কি না।',
        'ধারা ১১(৪)(খ) অনুযায়ী পুর সার্টিফিকেট এনে দিতে প্রমোটারকে ৩০ দিনের আইনি নোটিশ দিন।',
        'রেরা বা ক্রেতা সুরক্ষা আদালতে সেবার চরম গাফিলতির অভিযোগে মামলা দায়ের করুন।',
        'আদালতের নির্দেশে প্রমোটার নকশার বিচ্যুতি সংশোধন করে পুরসভা থেকে ওসি এনে দিতে বাধ্য হবে।'
      ],
      hi: [
        'नगर निगम कार्यालय से जांच करें कि क्या बिल्डर ने सीसी/ओसी हेतु आवेदन किया है।',
        'धारा 11(4)(b) के तहत 30 दिनों में वैध ओसी सौंपने का कानूनी नोटिस बिल्डर को भेजें।',
        'रेरा अथवा उपभोक्ता अदालत में सेवा में गंभीर कमी का परिवाद दाखिल करें।',
        'अदालत के आदेश से बिल्डर अवैध निर्माण नियमित कराकर खरीदारों को वैध ओसी सौंपेगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-08-1',
        name: { en: 'Sanctioned Building Plan Copy & Possession Letter', bn: 'অনুমোদিত বিল্ডিং প্ল্যান ও ফ্ল্যাট দখলের চিঠি', hi: 'स्वीकृत भवन निर्माण नक्शा एवं पजेशन लेटर' },
        issuing_authority: { en: 'KMC / Municipality / Developer', bn: 'পৌরসভা / প্রমোটার', hi: 'नगर निगम / बिल्डर' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-09',
    title: {
      en: 'Defective Motor Vehicle & Dealer Fraud',
      bn: 'ত্রুটিযুক্ত নতুন গাড়ি ও ডিলার/কোম্পানির প্রতারণা',
      hi: 'दोषपूर्ण नया वाहन एवं डीलर/कंपनी द्वारा धोखाधड़ी'
    },
    relevant_act: 'Sec 35, Consumer Protection Act, 2019',
    summary: {
      en: 'Claiming brand-new vehicle replacement or 100% refund for manufacturing defects (lemon law principles).',
      bn: 'নতুন কেনা গাড়িতে বারবার যান্ত্রিক ত্রুটি দেখা দিলে পুরো টাকা ফেরত বা নতুন গাড়ি প্রদানের মামলা।',
      hi: 'नई गाड़ी में निर्माण संबंधी गंभीर खराबी होने पर पूरी राशि वापसी या नई कार पाने का वाद।'
    },
    authority_forum: {
      en: 'District Consumer Commission (e-Jagriti)',
      bn: 'জেলা ক্রেতা সুরক্ষা কমিশন (ই-জাগৃতি)',
      hi: 'जिला उपभोक्ता आयोग (ई-जागृति)'
    },
    forum_type: 'Consumer_DCDRC',
    is_complex: true,
    official_portal_url: 'https://e-jagriti.gov.in/',
    statutory_timeframe: {
      en: '3 to 6 months',
      bn: '৩ থেকে ৬ মাস',
      hi: '3 से 6 माह'
    },
    search_keywords: {
      en: ['lemon car replacement', 'defective vehicle consumer court', 'automobile warranty refund'],
      bn: ['ত্রুটিযুক্ত গাড়ি ফেরত', 'গাড়ির ডিলার প্রতারণা', 'কনজিউমার কোর্টে গাড়ির মামলা'],
      hi: ['खराब गाड़ी वापसी', 'ऑटोमोबाइल मैन्युफैक्चरिंग डिफेक्ट', 'उपभोक्ता फोरम वाहन']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Preserve all authorized job cards, service workshop slips, and breakdown towing logs.',
        'Issue formal legal notice to automobile manufacturer and authorized dealer.',
        'File complaint on e-Jagriti seeking vehicle replacement or full ex-showroom refund.',
        'Move for independent expert vehicle inspection by Government Engineering College/ARAI.'
      ],
      bn: [
        'সার্ভিস সেন্টারের সমস্ত জব কার্ড, মেরামত স্লিপ ও বারবার বিকল হওয়ার প্রমাণ সংরক্ষণ করুন।',
        'গাড়ি প্রস্তুতকারক মূল কোম্পানি ও স্থানীয় শোরুম ডিলারকে যৌথভাবে লিগ্যাল নোটিশ দিন।',
        'ই-জাগৃতি পোর্টালে পুরো টাকা ফেরত বা সম্পূর্ণ নতুন গাড়ি দেওয়ার দাবিতে মামলা করুন।',
        'সরকারি ইঞ্জিনিয়ারিং কলেজ বা এআরএআই (ARAI) বিশেষজ্ঞ দল দ্বারা মেকানিক্যাল টেস্ট করান।'
      ],
      hi: [
        'सर्विस सेंटर के सभी जॉब कार्ड, मरम्मत रसीदें एवं टोइंग पर्चियां सुरक्षित रखें।',
        'वाहन निर्माता कंपनी एवं स्थानीय अधिकृत डीलर को संयुक्त कानूनी नोटिस भेजें।',
        'ई-जागृति पर पूरी एक्स-शोरूम कीमत वापसी अथवा नया वाहन बदलने का वाद दायर करें।',
        'सरकारी इंजीनियरिंग कॉलेज अथवा एआरएआई विशेषज्ञों से मैकेनिकल जांच का आदेश कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-09-1',
        name: { en: 'All Workshop Job Cards & Breakdown Records', bn: 'ওয়ার্কশপের সমস্ত জব কার্ড ও মেরামতের স্লিপ', hi: 'वर्कशॉप जॉब कार्ड एवं ब्रेकडाउन रसीदें' },
        issuing_authority: { en: 'Authorized Service Center', bn: 'অনুমোদিত সার্ভিস সেন্টার', hi: 'अधिकृत सर्विस सेंटर' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-10',
    title: {
      en: 'Health / Mediclaim Insurance Claim Repudiation',
      bn: 'স্বাস্থ্য ও মেডিক্লেম বীমা দাবি অন্যায়ভাবে প্রত্যাখ্যান',
      hi: 'स्वास्थ्य एवं मेडिक्लेम बीमा दावे का अनुचित निरस्तीकरण'
    },
    relevant_act: 'Insurance Ombudsman Rules, 2017 & CPA, 2019',
    summary: {
      en: 'Challenging arbitrary repudiation of hospitalization claims before the Insurance Ombudsman with zero court fees.',
      bn: 'হাসপাতালে ভর্তির খরচ বীমা কোম্পানি অন্যায়ভাবে নাকচ করলে বিনা খরচে বীমা ন্যায়পালে প্রতিকার।',
      hi: 'अस्पताल में भर्ती का मेडिक्लेम बीमा कंपनी द्वारा खारिज करने पर लोकपाल में बिना शुल्क न्याय पाना।'
    },
    authority_forum: {
      en: 'Insurance Ombudsman (Kolkata Center) / DCDRC',
      bn: 'বীমা ন্যায়পাল (কলকাতা কেন্দ্র) / উপভোক্তা আদালত',
      hi: 'बीमा लोकपाल (कोलकाता) / उपभोक्ता आयोग'
    },
    forum_type: 'Insurance_Ombudsman',
    is_complex: false,
    official_portal_url: 'https://cioins.co.in/',
    statutory_timeframe: {
      en: '30 to 90 days (Zero court fee)',
      bn: '৩০ থেকে ৯০ দিন (বিনামূল্যে বিচার)',
      hi: '30 से 90 दिन (निःशुल्क)'
    },
    search_keywords: {
      en: ['insurance ombudsman kolkata', 'mediclaim rejection complaint', 'health insurance repudiation'],
      bn: ['মেডিক্লেম রিজেক্ট', 'বীমা ন্যায়পাল কলকাতা', 'স্বাস্থ্য বীমা প্রত্যাখ্যান'],
      hi: ['मेडिक्लेम अस्वीकृति', 'बीमा लोकपाल शिकायत', 'हेल्थ इंश्योरेंस रिजेक्ट']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Lodge written appeal with the insurer’s Internal Grievance Cell (GRO) demanding grounds.',
        'If rejected or unanswered in 30 days, register online complaint with Insurance Ombudsman (Kolkata).',
        'Attend physical or virtual hearing with medical bills, discharge summary, and policy wording.',
        'Ombudsman passes binding award within 90 days; insurer must pay within 30 days or face penalty.'
      ],
      bn: [
        'বীমা সংস্থার ইন্টারনাল গ্রিভেন্স সেলে লিখিত আপত্তি জানিয়ে রিজেকশনের কারণ তলব করুন।',
        '৩০ দিনে সুরাহা না হলে কলকাতার বীমা ন্যায়পালের (Insurance Ombudsman) পোর্টালে নালিশ করুন।',
        'ডিসচার্জ সামারি, চিকিৎসার বিল ও পলিসি শর্তাদি নিয়ে ন্যায়পালের শুনানিতে অংশ নিন।',
        'ন্যায়পাল ৯০ দিনে বাধ্যতামূলক ক্ষতিপূরণ মঞ্জুর করবে যা ৩০ দিনে মেটাতে কোম্পানি বাধ্য।'
      ],
      hi: [
        'बीमा कंपनी के आंतरिक शिकायत निवारण अधिकारी (GRO) को लिखित आपत्ति भेजें।',
        '30 दिनों में हल न होने पर बीमा लोकपाल (कोलकाता) में ऑनलाइन परिवाद दर्ज करें।',
        'डिस्चार्ज सारांश, अस्पताल बिल एवं पॉलिसी दस्तावेज के साथ सुनवाई में शामिल हों।',
        'लोकपाल 90 दिनों में बाध्यकारी फैसला देंगे; कंपनी को 30 दिनों में भुगतान करना होगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-10-1',
        name: { en: 'Hospital Discharge Summary & Formal Claim Repudiation Letter', bn: 'ডিসচার্জ সামারি ও বীমা বাতিল পত্র', hi: 'डिस्चार्ज सारांश एवं दावा अस्वीकृति पत्र' },
        issuing_authority: { en: 'Hospital / Insurance Company', bn: 'হাসপাতাল / বীমা সংস্থা', hi: 'अस्पताल / बीमा कंपनी' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-11',
    title: {
      en: 'E-Commerce Counterfeit Goods & Refund Refusal',
      bn: 'ই-কমার্স প্রতারণা, নকল পণ্য ও রিফান্ড অস্বীকার',
      hi: 'ई-कॉमर्स नकली सामान, गलत डिलीवरी एवं रिफंड से इनकार'
    },
    relevant_act: 'Consumer Protection (E-Commerce) Rules, 2020',
    summary: {
      en: 'Securing refunds and damages against online platforms (Amazon, Flipkart, etc.) for delivering fake items or refusing returns.',
      bn: 'অনলাইন শপিংয়ে নকল বা ভাঙা পণ্য ডেলিভারি দিলে এবং রিটার্ন নিতে অস্বীকার করলে টাকা উদ্ধার।',
      hi: 'ऑनलाइन शॉपिंग में नकली या टूटा सामान मिलने और कंपनी द्वारा वापसी न लेने पर हर्जाना पाना।'
    },
    authority_forum: {
      en: 'National Consumer Helpline (1915) / DCDRC',
      bn: 'জাতীয় উপভোক্তা হেল্পলাইন (১৯১৫) / ক্রেতা আদালত',
      hi: 'राष्ट्रीय उपभोक्ता हेल्पलाइन (1915) / उपभोक्ता फोरम'
    },
    forum_type: 'Consumer_DCDRC',
    is_complex: false,
    official_portal_url: 'https://consumerhelpline.gov.in/',
    statutory_timeframe: {
      en: '15 days (NCH) / 90 days (Court)',
      bn: '১৫ দিন (হেল্পলাইন) / ৯০ দিন (আদালত)',
      hi: '15 দিন (हेल्पलाइन) / 90 দিন (अदालत)'
    },
    search_keywords: {
      en: ['ecommerce refund complaint', 'fake product delivered online', 'consumer helpline 1915'],
      bn: ['ই-কমার্স প্রতারণা', 'অনলাইন কেনাকাটায় ঠকে যাওয়া', '১৯১৫ হেল্পলাইন'],
      hi: ['ऑनलाइन शॉपिंग फ्रॉड', 'नकली सामान डिलीवरी', 'उपभोक्ता हेल्पलाइन 1915']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Record continuous video proof of unboxing and capture screenshots of product labels.',
        'Lodge immediate return complaint on the e-commerce app and save chat transcripts.',
        'Register grievance on National Consumer Helpline (NCH Portal / Call 1915).',
        'If unresolved, file case on e-Jagriti claiming full refund plus compensation.'
      ],
      bn: [
        'প্যাকেট খোলার ভিডিও ও প্রোডাক্টের নকল ব্র্যান্ডিংয়ের স্পষ্ট ছবি প্রমাণ হিসেবে সংরক্ষণ করুন।',
        'শপিং অ্যাপে তাৎক্ষণিক রিটার্ন রিকোয়েস্ট দিন এবং কাস্টমার চ্যাটের স্ক্রিনশট রাখুন।',
        'জাতীয় উপভোক্তা হেল্পলাইনে (টোল-ফ্রি ১৯১৫) তাৎক্ষণিক অনলাইন নালিশ জানান।',
        'টাকা না পেলে ই-জাগৃতি আদালতে মামলা করে ক্ষতিপূরণসহ দ্বিগুণ টাকা উদ্ধার করুন।'
      ],
      hi: [
        'पैकेट खोलने का वीडियो बनाएं और नकली सामान के बारकोड व लेबल के फोटो लें।',
        'शॉपिंग ऐप पर तुरंत रिटर्न डालें और कस्टमर केयर चैट के स्क्रीनशॉट सुरक्षित रखें।',
        'राष्ट्रीय उपभोक्ता हेल्पलाइन (पोर्टल अथवा 1915 पर कॉल) पर शिकायत दर्ज करें।',
        'समाधान न होने पर ई-जागृति पर वाद दायर कर उत्पाद मूल्य व मानसिक हर्जाना वसूलें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-11-1',
        name: { en: 'Digital Invoice & Unboxing Video / Photographs', bn: 'ডিজিটাল ইনভয়েস ও আনবক্সিং ভিডিও প্রমাণ', hi: 'डिजिटल इनवॉयस एवं अनबॉक्सिंग वीडियो' },
        issuing_authority: { en: 'E-Commerce Marketplace', bn: 'ই-কমার্স প্ল্যাটফর্ম', hi: 'ई-कॉमर्स प्लेटफॉर्म' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-12',
    title: {
      en: 'Unauthorized Bank Debits & Digital Lending Scams',
      bn: 'ব্যাঙ্ক কর্তৃক অননুমোদিত টাকা কাটা ও ন্যায়পাল নালিশ',
      hi: 'बैंक द्वारा अनाधिकृत कटौती एवं डिजिटल लोन धोखाधड़ी'
    },
    relevant_act: 'RBI Integrated Ombudsman Scheme, 2021',
    summary: {
      en: 'Zero liability protection for unauthorized electronic transactions and harassment by illegal lending apps.',
      bn: 'ব্যাঙ্ক থেকে অন্যায়ভাবে টাকা কেটে নিলে বা লোন অ্যাপের ব্ল্যাকমেইলিংয়ের বিরুদ্ধে রিজার্ভ ব্যাঙ্ক ন্যায়পালে নালিশ।',
      hi: 'बिना ओटीपी खाते से कटे पैसे की पूरी वापसी एवं लोन ऐप के उत्पीड़न के विरुद्ध आरबीआई शिकायत।'
    },
    authority_forum: {
      en: 'RBI Banking Ombudsman (CMS Portal)',
      bn: 'আরবিআই ব্যাঙ্কিং ন্যায়পাল (CMS Portal)',
      hi: 'आरबीआई बैंकिंग लोकपाल (CMS पोर्टल)'
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
      en: ['rbi banking ombudsman cms', 'unauthorized debit bank refund', 'zero liability rbi circular'],
      bn: ['ব্যাঙ্ক থেকে টাকা চুরি', 'আরবিআই ন্যায়পাল', 'অননুমোদিত ডেবিট ফেরত'],
      hi: ['बैंक अनाधिकृत कटौती', 'आरबीआई लोकपाल शिकायत', 'खाते से पैसा गायब']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Report unauthorized electronic transaction to bank within 72 hours for zero customer liability.',
        'Obtain police cyber crime acknowledgment slip from https://cybercrime.gov.in (1930).',
        'If bank fails to reverse debit within 30 days, file complaint on RBI CMS portal.',
        'Banking Ombudsman passes award commanding bank to credit stolen principal plus interest.'
      ],
      bn: [
        'জিরো লায়াবিলিটি পেতে ৭২ ঘণ্টার মধ্যে ব্যাঙ্ককে লিখিত ও ইমেলে জালিয়াতির কথা জানান।',
        'সাইবার হেল্পলাইন ১৯৩০-এ ফোন করে পুলিশি অভিযোগের প্রমাণপত্র সংগ্রহ করুন।',
        '৩০ দিনে ব্যাঙ্ক টাকা ফেরত না দিলে আরবিআই-এর সিএমএস (CMS) পোর্টালে অভিযোগ দিন।',
        'ব্যাঙ্কিং ন্যায়পাল ব্যাংককে পুরো টাকা সুদসহ গ্রাহকের অ্যাকাউন্টে ফেরতের নির্দেশ দেবে।'
      ],
      hi: [
        'शून्य देनदारी का लाभ पाने हेतु 72 घंटे में बैंक को लिखित रूप से सूचित करें।',
        'साइबर हेल्पलाइन 1930 पर शिकायत कर राष्ट्रीय पावती पर्ची प्राप्त करें।',
        'बैंक द्वारा 30 दिन में पैसा वापस न करने पर RBI CMS पोर्टल पर शिकायत दर्ज करें।',
        'बैंकिंग लोकपाल बैंक को काटी गई पूरी मूल राशि ब्याज सहित लौटाने का आदेश देगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-12-1',
        name: { en: 'Bank Passbook / Statement & Cyber Complaint Acknowledgment', bn: 'ব্যাঙ্ক স্টেটমেন্ট ও সাইবার নালিশের রসিদ', hi: 'बैंक खाता विवरण एवं साइबर क्राइम पावती रसीद' },
        issuing_authority: { en: 'Bank / National Cyber Crime Portal', bn: 'ব্যাঙ্ক / পুলিশ', hi: 'बैंक / साइबर पुलिस' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-13',
    title: {
      en: 'Telecom / Fiber Broadband Service Outage & Billing',
      bn: 'টেলিকম ও ফাইবার ব্রডব্যান্ড পরিষেবা গাফিলতি',
      hi: 'टेलीकॉम एवं ब्रॉडबैंड इंटरनेट सेवा में खराबी व गलत बिलिंग'
    },
    relevant_act: 'Sec 35 CPA, 2019 r/w TRAI QoS Regulations',
    summary: {
      en: 'Suing telecom/broadband operators (Jio, Airtel, etc.) for prolonged internet downtime and refusing billing credits.',
      bn: 'ব্রডব্যান্ড ইন্টারনেট টানা বন্ধ রেখে পুরো মাসের বিল আদায়কারী সংস্থার বিরুদ্ধে ক্ষতিপূরণ দাবি।',
      hi: 'इंटरनेट बंद रहने पर भी पूरा बिल वसूलने वाली कंपनियों से हर्जाना एवं बिल माफी पाना।'
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
      en: '60 working days',
      bn: '৬০ কার্যদিবস',
      hi: '60 कार्यदिवस'
    },
    search_keywords: {
      en: ['broadband outage refund', 'trai internet downtime credit', 'telecom consumer case'],
      bn: ['ইন্টারনেট বন্ধ ক্ষতিপূরণ', 'ব্রডব্যান্ড গাফিলতি', 'ট্রাই নির্দেশিকা ব্রডব্যান্ড'],
      hi: ['ब्रॉडबैंड सेवा खराबी', 'इंटरनेट बंद हर्जाना', 'टेलीकॉम उपभोक्ता फोरम']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Document daily ticket IDs, customer support emails, and speed test logs showing zero bandwidth.',
        'Invoke TRAI Quality of Service (QoS) rules demanding pro-rata rental credit for downtime.',
        'Escalate to the Appellate Authority of the telecom service provider.',
        'File complaint on e-Jagriti claiming compensation for work-from-home professional disruption.'
      ],
      bn: [
        'ইন্টারনেট বন্ধ থাকার টিকিট আইডি, কাস্টমার কেয়ার ইমেল ও স্পিড টেস্টের রিপোর্ট রাখুন।',
        'ট্রাই (TRAI) নিয়ম অনুযায়ী পরিষেবা না পাওয়া দিনের সম্পূর্ণ বিল মকুবের লিখিত দাবি জানান।',
        'টেলিকম কোম্পানির অ্যাপেলেট অথরিটির কাছে আনুষ্ঠানিক অভিযোগ পেশ করুন।',
        'ওয়ার্ক-ফ্রম-হোমে পেশাগত ক্ষতির জন্য জেলা ক্রেতা সুরক্ষা আদালতে ক্ষতিপূরণের মামলা করুন।'
      ],
      hi: [
        'नेट बंद रहने के टिकट नंबर, कंप्लेंट ईमेल एवं स्पीड टेस्ट के स्क्रीनशॉट रखें।',
        'ट्राई (TRAI) नियमों का हवाला देकर जितने दिन नेट बंद रहा उतने दिन का किराया घटाने को कहें।',
        'टेलीकॉम ऑपरेटर के अपीलीय अधिकारी (Appellate Authority) को शिकायत भेजें।',
        'वर्क-फ्रॉम-होम बाधित होने पर ई-जागृति पर वाद दायर कर हर्जाना प्राप्त करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-13-1',
        name: { en: 'Broadband Subscription Bill & Unresolved Service Ticket Logs', bn: 'ব্রডব্যান্ড বিল ও অভিযোগ টিকিট বিবরণী', hi: 'ब्रॉडबैंड बिल एवं लंबित शिकायत टिकट रिकॉर्ड' },
        issuing_authority: { en: 'Telecom Service Provider', bn: 'ইন্টারনেট সরবরাহকারী সংস্থা', hi: 'टेलीकॉम ऑपरेटर' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-14',
    title: {
      en: 'Coaching Institute / College Advance Fee Refund',
      bn: 'কোচিং ইনস্টিটিউট ও বেসরকারি শিক্ষাপ্রতিষ্ঠানের ফি ফেরত',
      hi: 'कोचिंग संस्थान एवं निजी कॉलेज से अग्रिम फीस वापसी'
    },
    relevant_act: 'CCPA Guidelines 2024 for Coaching Centers & CPA',
    summary: {
      en: 'Recovering unutilized tuition and hostel advance fees when a student leaves a coaching institute mid-term.',
      bn: 'কোর্স চলাকালীন কোচিং বা কলেজ ত্যাগ করলে অব্যবহৃত অগ্রিম ফির টাকা ফেরত আদায়।',
      hi: 'कोचिंग या कॉलेज बीच में छोड़ने पर बची हुई अवधि की अग्रिम फीस वापस पाने का अधिकार।'
    },
    authority_forum: {
      en: 'District Consumer Commission (DCDRC)',
      bn: 'জেলা ক্রেতা সুরক্ষা কমিশন (DCDRC)',
      hi: 'जिला उपभोक्ता आयोग'
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
      en: ['coaching fee refund ccpa', 'allen aakash fee refund', 'college advance fee return'],
      bn: ['কোচিং ফি ফেরত', 'কলেজ ভর্তি ফি রিফান্ড', 'সিসিএপিএ নির্দেশিকা ২০২৪'],
      hi: ['कोचिंग फीस रिफंड', 'सीसीपीए कोचिंग नियम 2024', 'कॉलेज फीस वापसी']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Submit written course discontinuation letter requesting pro-rata fee refund within 10 days.',
        'Cite CCPA 2024 Guidelines declaring "Non-Refundable Fee" clauses illegal and unfair.',
        'Issue legal demand notice to institute management giving 15-day compliance window.',
        'File consumer case on e-Jagriti; commissions order pro-rata refund plus mental agony relief.'
      ],
      bn: [
        'কোর্স ত্যাগের কারণ জানিয়ে অবশিষ্ট ফি ১০ দিনের মধ্যে ফেরত চেয়ে লিখিত আবেদন দিন।',
        'সিসিএপিএ (CCPA) ২০২৪ নিয়ম উল্লেখ করুন যেখানে "ফি অফেরতযোগ্য" লেখা সম্পূর্ণ বেআইনি।',
        'ইনস্টিটিউট কর্তৃপক্ষকে ১৫ দিনের সময় দিয়ে আইনজীবীর মাধ্যমে লিগ্যাল নোটিশ পাঠান।',
        'ই-জাগৃতি আদালতে মামলা করে অবশিষ্ট ফি ও মানসিক হয়রানির ক্ষতিপূরণ আদায় করুন।'
      ],
      hi: [
        'पाठ्यक्रम छोड़ने का औपचारिक पत्र देकर 10 दिन में आनुपातिक फीस वापसी की मांग करें।',
        'सीसीपीए 2024 दिशानिर्देशों का हवाला दें जिसके तहत "नॉन-रिफंडेबल" नियम अवैध है।',
        'संस्थान प्रबंधन को 15 दिनों में फीस लौटाने का विधिक नोटिस प्रेषित करें।',
        'ई-जागृति पर वाद दायर कर बची हुई फीस, ब्याज एवं मानसिक प्रताड़ना का हर्जाना लें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-14-1',
        name: { en: 'Admission Fee Receipts & Written Withdrawal Application', bn: 'ভর্তি ফির মূল রসিদ ও কোর্স প্রত্যাহারের চিঠি', hi: 'दाखिला फीस रसीदें एवं नाम वापसी आवेदन प्रति' },
        issuing_authority: { en: 'Coaching Institute / College', bn: 'কোচিং কর্তৃপক্ষ', hi: 'कोचिंग संस्थान / कॉलेज' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-15',
    title: {
      en: 'Airline Flight Delay, Cancellation & Baggage Loss',
      bn: 'বিমান ফ্লাইট বাতিল, লাগেজ হারানো ও ক্ষতিপূরণ',
      hi: 'फ्लाइट देरी, रद्दीकरण एवं खोए सामान का कानूनी मुआवजा'
    },
    relevant_act: 'DGCA Civil Aviation Requirements (CAR) Series M',
    summary: {
      en: 'Securing mandatory compensation up to ₹20,000 for delayed flights and per-kg claims for damaged/lost baggage.',
      bn: 'বিমান দেরিতে ছাড়লে, টিকিট বাতিল করলে বা লাগেজ হারালে ডিজিসিএ নিয়ম অনুযায়ী ক্ষতিপূরণ আদায়।',
      hi: 'उड़ान में देरी, टिकट रद्दीकरण या सामान खोने पर डीजीसीए नियमों के तहत मुआवजा पाना।'
    },
    authority_forum: {
      en: 'AirSewa Portal / District Consumer Commission',
      bn: 'এয়ারসেবা পোর্টাল / জেলা ক্রেতা আদালত',
      hi: 'एयरसेवा पोर्टल / जिला उपभोक्ता आयोग'
    },
    forum_type: 'Consumer_DCDRC',
    is_complex: false,
    official_portal_url: 'https://airsewa.gov.in/',
    statutory_timeframe: {
      en: '15 days (AirSewa) / 90 days (Court)',
      bn: '১৫ দিন (এয়ারসেবা) / ৯০ দিন (আদালত)',
      hi: '15 দিন (एयरसेवा) / 90 दिन (उपभोक्ता अदालत)'
    },
    search_keywords: {
      en: ['dgca flight delay compensation', 'lost baggage claim airline', 'airsewa grievance'],
      bn: ['ফ্লাইট বাতিল ক্ষতিপূরণ', 'বিমান লাগেজ হারানো', 'এয়ারসেবা নালিশ'],
      hi: ['फ्लाइट लेट मुआवजा', 'खोया सामान एयरलाइन', 'एयरसेवा शिकायत']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain written Property Irregularity Report (PIR) at airport counter for lost/delayed luggage.',
        'Invoke DGCA CAR Section 3 demanding statutory compensation for delays exceeding 4 hours.',
        'Lodge formal grievance on Ministry of Civil Aviation AirSewa portal attaching boarding passes.',
        'If denied, file consumer complaint on e-Jagriti claiming full luggage replacement and damages.'
      ],
      bn: [
        'লাগেজ না এলে এয়ারপোর্ট কাউন্টার থেকে প্রপার্টি ইরেগুলারিটি রিপোর্ট (PIR) সংগ্রহ করুন।',
        'ডিজিসিএ সিএআর নিয়ম উল্লেখ করে ৪ ঘণ্টার বেশি দেরির বিধিবদ্ধ ক্ষতিপূরণ দাবি করুন।',
        'বোর্ডিং পাসসহ অসামরিক বিমান পরিবহন মন্ত্রকের এয়ারসেবা পোর্টালে অভিযোগ দিন।',
        'টাকা না দিলে ক্রেতা সুরক্ষা আদালতে মামলা করে হারানো জিনিসপত্রের সম্পূর্ণ মূল্য উদ্ধার করুন।'
      ],
      hi: [
        'सामान न मिलने पर एयरपोर्ट काउंटर से प्रॉपर्टी इर्रेग्युलैरिटी रिपोर्ट (PIR) लें।',
        'डीजीसीए नियमों के तहत 4 घंटे से अधिक देरी पर वैधानिक मुआवजे की मांग करें।',
        'नागरिक उड्डयन मंत्रालय के एयरसेवा (AirSewa) पोर्टल पर बोर्डिंग पास सहित शिकायत दें।',
        'समाधान न होने पर उपभोक्ता अदालत में खोए सामान के मूल्य व हर्जाने का वाद दायर करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-15-1',
        name: { en: 'Boarding Pass, Luggage Tag & Property Irregularity Report (PIR)', bn: 'বোর্ডিং পাস, লাগেজ ট্যাগ ও পিআইআর রিপোর্ট', hi: 'बोर्डिंग पास, बैगेज टैग एवं पीआईआर रसीद' },
        issuing_authority: { en: 'Airline Airport Ground Staff', bn: 'বিমান সংস্থা', hi: 'एयरलाइन ग्राउंड स्टाफ' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-16',
    title: {
      en: 'Builder Delay in Handing Over Common Facilities',
      bn: 'ক্লাবহাউস, সুইমিং পুল ও পার্কিং হস্তান্তরে প্রমোটারের গড়িমসি',
      hi: 'क्लबहाउस, स्वीमिंग पूल एवं साझा सुविधाओं में बिल्डर की देरी'
    },
    relevant_act: 'Sec 14 & 18, Real Estate (Regulation & Dev) Act, 2016',
    summary: {
      en: 'Enforcing completion and handover of promised amenities (clubhouse, pool, power backup, gym) where flats are occupied.',
      bn: 'ফ্ল্যাটের দখল পেলেও প্রতিশ্রুত ক্লাবহাউস, সুইমিং পুল বা লিফট চালু না করলে বিল্ডারের বিরুদ্ধে ব্যবস্থা।',
      hi: 'फ्लैट पजेशन के बाद भी क्लबहाउस, लिफ्ट या जनरेटर चालू न करने पर बिल्डर पर कानूनी कार्रवाई।'
    },
    authority_forum: {
      en: 'West Bengal RERA Bench (WBRERA)',
      bn: 'পশ্চিমবঙ্গ রেরা বেঞ্চ (WBRERA)',
      hi: 'पश्चिम बंगाल रेरा बेंच (WBRERA)'
    },
    forum_type: 'WBRERA',
    is_complex: true,
    official_portal_url: 'https://rera.wb.gov.in/',
    statutory_timeframe: {
      en: '60 working days',
      bn: '৬০ কার্যদিবস',
      hi: '60 कार्यदिवस'
    },
    search_keywords: {
      en: ['clubhouse delay rera', 'amenities delay builder', 'section 14 rera common areas'],
      bn: ['ক্লাবহাউস হস্তান্তর দেরি', 'সুইমিং পুল দেয়নি বিল্ডার', 'রেরা সাধারণ সুবিধা'],
      hi: ['क्लबहाउस देरी रेरा', 'स्वीमिंग पूल विवाद', 'साझा सुविधाएं बिल्डर']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Collate original marketing brochures and registered agreement listing promised facilities.',
        'Issue joint legal notice by flat owners demanding operational handover within 30 days.',
        'File formal Form-M complaint before WBRERA under Section 31 of the Act.',
        'Secure order imposing daily delay penalty and appointing advocate commissioner to inspect.'
      ],
      bn: [
        'ব্রোশার ও রেজিস্ট্রি বায়না চুক্তি থেকে প্রতিশ্রুত সমস্ত সুবিধার তালিকা তৈরি করুন।',
        '৩০ দিনের মধ্যে সমস্ত পরিষেবা চালুর দাবি জানিয়ে যৌথভাবে আইনি নোটিশ পাঠান।',
        'রেরা আইনের ধারা ৩১ অনুযায়ী ফর্ম-এম (Form-M) অনলাইন অভিযোগ দায়ের করুন।',
        'বিল্ডারের ওপর জরিমানা আরোপ ও কোর্ট কমিশনার দ্বারা কাজের অগ্রগতি তদন্ত করান।'
      ],
      hi: [
        'ब्रोशर एवं पंजीकृत बिक्री अनुबंध से स्वीकृत साझा सुविधाओं की सूची तैयार करें।',
        '30 दिन में सुविधाएं चालू करने हेतु सभी खरीदारों की ओर से संयुक्त कानूनी नोटिस दें।',
        'धारा 31 के तहत WBRERA पोर्टल पर ऑनलाइन फॉर्म-M शिकायत दर्ज करें।',
        'बिल्डर पर दैनिक जुर्माना लगवाने एवं कोर्ट कमिश्नर से निर्माण जांच का आदेश प्राप्त करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-16-1',
        name: { en: 'Promoter Brochure & Agreement Specifying Amenities', bn: 'প্রমোটারের ব্রোশার ও সুবিধার শর্তযুক্ত চুক্তিপত্র', hi: 'स्वीकृत सुविधाओं वाला बिल्डर ब्रोशर एवं अनुबंध' },
        issuing_authority: { en: 'Developer', bn: 'প্রমোটার', hi: 'बिल्डर' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-17',
    title: {
      en: 'Unilateral Increase in Super Built-Up Area Costs',
      bn: 'সুপার বিল্ট-আপ এরিয়ার ভুয়ো বৃদ্ধি ও অতিরিক্ত টাকা দাবি',
      hi: 'सुपर बिल्ट-अप एरिया की फर्जी वृद्धि एवं अतिरिक्त राशि की मांग'
    },
    relevant_act: 'Sec 11 r/w Carpet Area Rules, RERA, 2016',
    summary: {
      en: 'Restraining promoters from unilaterally inflating super built-up areas and demanding extra payment at possession.',
      bn: 'ফ্ল্যাট হস্তান্তরের সময় হঠাৎ সুপার বিল্ট-আপ এরিয়া বাড়িয়ে লক্ষাধিক টাকা অতিরিক্ত দাবি প্রতিহত করা।',
      hi: 'पजेशन के समय अचानक सुपर एरिया बढ़ाकर अवैध रूप से लाखों रुपये मांगने पर कानूनी रोक।'
    },
    authority_forum: {
      en: 'WBRERA Bench / NCDRC',
      bn: 'রেরা বেঞ্চ / জাতীয় উপভোক্তা কমিশন',
      hi: 'रेरा बेंच / राष्ट्रीय उपभोक्ता आयोग'
    },
    forum_type: 'WBRERA',
    is_complex: true,
    official_portal_url: 'https://rera.wb.gov.in/',
    statutory_timeframe: {
      en: '60 to 90 working days',
      bn: '৬০ থেকে ৯০ কার্যদিবস',
      hi: '60 से 90 कार्यदिवस'
    },
    search_keywords: {
      en: ['carpet area cheating', 'super built up extortion rera', 'unilateral area increase'],
      bn: ['সুপার বিল্ট আপ প্রতারণা', 'কার্পেট এরিয়া বিরোধ', 'অতিরিক্ত টাকা দাবি ফ্ল্যাট'],
      hi: ['सुपर एरिया विवाद', 'कार्पेट एरिया रेरा', 'अतिरिक्त मांग अवैध बिल्डर']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Hire licensed architect to measure actual RERA usable carpet area.',
        'Issue formal objection refusing escalated charges lacking two-thirds allottee consent.',
        'Lodge online complaint on WBRERA portal citing violation of Section 14(2).',
        'Obtain interim restraint order preventing promoter from canceling flat allotment.'
      ],
      bn: [
        'অনুমোদিত আর্কিটেক্ট দিয়ে ফ্ল্যাটের বাস্তব কার্পেট এরিয়ার পরিমাপ করিয়ে রিপোর্ট নিন।',
        'দুই-তৃতীয়াংশ মালিকের সম্মতি ছাড়া বেআইনি বর্ধিত টাকা দিতে অস্বীকার করে চিঠি দিন।',
        'রেরা আইনের ধারা ১৪(২) লঙ্ঘনের কারণ দেখিয়ে রেরা পোর্টালে অভিযোগ দাখিল করুন।',
        'টাকা না দিলে ফ্ল্যাট বুকিং বাতিলের হুমকির বিরুদ্ধে রেরা থেকে স্থগিতাদেশ নিন।'
      ],
      hi: [
        'पंजीकृत आर्किटेक्ट से वास्तविक रेरा कार्पेट एरिया का भौतिक सत्यापन कराएं।',
        'बिना दो-तिहाई सहमति के बढ़ाए गए किसी भी अतिरिक्त शुल्क को देने से इनकार करें।',
        'धारा 14(2) के उल्लंघन के तहत WBRERA पोर्टल पर ऑनलाइन शिकायत दर्ज करें।',
        'पैसे न देने पर फ्लैट का आवंटन रद्द करने की धमकी पर रेरा से अंतरिम रोक लें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-17-1',
        name: { en: 'Architect Carpet Area Measurement Report', bn: 'আর্কিটেক্টের কার্পেট এরিয়া পরিমাপ রিপোর্ট', hi: 'आर्किटेक्ट द्वारा कार्पेट एरिया सत्यापन रिपोर्ट' },
        issuing_authority: { en: 'Licensed Chartered Architect', bn: 'লাইসেন্সপ্রাপ্ত আর্কিটেক্ট', hi: 'अनुज्ञप्त आर्किटेक्ट' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-18',
    title: {
      en: 'Structural Cracks & 5-Year Defect Liability',
      bn: 'নির্মাণ ত্রুটি, ফাটল ও ৫ বছরের ওয়ারেন্টি মেরামত দাবি',
      hi: 'निर्माण में दरारें, सीलन एवं 5 वर्षीय वारंटी मरम्मत अधिकार'
    },
    relevant_act: 'Sec 14(3), Real Estate (Regulation & Dev) Act, 2016',
    summary: {
      en: 'Mandating developers to rectify structural defects, water seepage, or poor plumbing within 30 days without charges.',
      bn: 'হস্তান্তরের ৫ বছরের মধ্যে ফ্ল্যাটে ফাটল, জল চুঁইয়ে পড়া বা খারাপ প্লাস্টারের নিখরচায় মেরামতের আইনি গ্যারান্টি।',
      hi: 'पजेशन के 5 साल के भीतर भवन में दरार, सीलन या खराब निर्माण को बिल्डर के खर्चे पर ठीक कराना।'
    },
    authority_forum: {
      en: 'WBRERA Adjudicating Officer',
      bn: 'রেরা বিচারক আধিকারিক (Adjudicating Officer)',
      hi: 'रेरा न्यायनिर्णायक अधिकारी'
    },
    forum_type: 'WBRERA',
    is_complex: false,
    official_portal_url: 'https://rera.wb.gov.in/',
    statutory_timeframe: {
      en: 'Repair within 30 days; 5-year coverage',
      bn: '৩০ দিনে মেরামত; ৫ বছরের ওয়ারেন্টি',
      hi: '30 दिन में मरम्मत; 5 वर्ष की गारंटी'
    },
    search_keywords: {
      en: ['rera 5 year warranty', 'structural defect section 14 3', 'water seepage flat builder'],
      bn: ['রেরা ৫ বছরের ওয়ারেন্টি', 'ফ্ল্যাটে ফাটল মেরামত', 'ধারা ১৪(৩) রেরা'],
      hi: ['रेरा 5 साल वारंटी', 'संरचनात्मक खराबी मरम्मत', 'धारा 14(3) सीलन']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Document structural cracks, dampness, and plumbing leaks with date-stamped photographs.',
        'Serve written intimation to developer invoking statutory 5-year defect liability under Section 14(3).',
        'If builder fails to begin repairs in 30 days, file application before WBRERA Adjudicating Officer.',
        'Obtain order directing structural rectification by developer or reimbursement of third-party bills.'
      ],
      bn: [
        'দেওয়ালের ফাটল, ছাদের ড্যাম ও প্লাস্টার খসার তারিখসহ সচিত্র প্রমাণ নথিভুক্ত করুন।',
        'ধারা ১৪(৩) অনুযায়ী ৫ বছরের বিধিবদ্ধ গ্যারান্টি উল্লেখ করে বিল্ডারকে নোটিশ দিন।',
        '৩০ দিনের মধ্যে মেরামত শুরু না করলে রেরা বিচারক আধিকারিকের কাছে নালিশ জানান।',
        'বিল্ডারের খরচে মেরামত অথবা অন্য মিস্ত্রি দিয়ে সারিয়ে বিলের টাকা ফেরতের আদেশ নিন।'
      ],
      hi: [
        'दीवारों की दरार, सीलन एवं पाइप लीकेज की तारीख सहित तस्वीरें व वीडियो सुरक्षित करें।',
        'धारा 14(3) के तहत 5 साल की गारंटी का हवाला देकर बिल्डर को औपचारिक मरम्मत नोटिस दें।',
        '30 दिन में काम शुरू न होने पर रेरा एडजुडिकेटिंग ऑफिसर के समक्ष याचिका दाखिल करें।',
        'बिल्डर के खर्चे पर मरम्मत अथवा अन्य ठेकेदार से कराकर पूरा खर्च वसूलने का आदेश लें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-18-1',
        name: { en: 'Photographic Proof of Defects & Written Notice to Builder', bn: 'ত্রুটির সচিত্র প্রমাণ ও বিল্ডারকে দেওয়া নোটিশ', hi: 'दरारों के फोटो एवं बिल्डर को प्रेषित मरम्मत नोटिस' },
        issuing_authority: { en: 'Allottee / India Post', bn: 'ফ্ল্যাট মালিক', hi: 'फ्लैट खरीदार' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-19',
    title: {
      en: 'Forfeiture of Booking Token on Home Loan Rejection',
      bn: 'হোম লোন বাতিল হলে প্রমোটার দ্বারা বুকিংয়ের টাকা বাজেয়াপ্ত',
      hi: 'होम लोन खारिज होने पर बिल्डर द्वारा बयाना राशि जब्ती का विरोध'
    },
    relevant_act: 'CPA, 2019 (Unfair Trade Practices) & RERA Directives',
    summary: {
      en: 'Recovering full earnest money deposits retained by promoters after a bank rejects the homebuyer loan application.',
      bn: 'ব্যাঙ্ক ঋণ নামঞ্জুর হলে বিল্ডার কর্তৃক বুকিংয়ের ১০%–২০% টাকা কেটে নেওয়ার অন্যায্য শর্ত বাতিল ও রিফান্ড।',
      hi: 'बैंक लोन रिजेक्ट होने पर बिल्डर द्वारा काटी गई टोकन राशि ब्याज सहित वापस पाना।'
    },
    authority_forum: {
      en: 'District Consumer Commission (DCDRC) / WBRERA',
      bn: 'জেলা ক্রেতা সুরক্ষা কমিশন / রেরা',
      hi: 'जिला उपभोक्ता आयोग / रेरा'
    },
    forum_type: 'Consumer_DCDRC',
    is_complex: false,
    official_portal_url: 'https://e-jagriti.gov.in/',
    statutory_timeframe: {
      en: '30 to 90 days',
      bn: '৩০ থেকে ৯০ দিন',
      hi: '30 से 90 दिन'
    },
    search_keywords: {
      en: ['earnest money refund loan rejected', 'builder token forfeiture', 'unfair flat booking clause'],
      bn: ['হোম লোন বাতিল রিফান্ড', 'বুকিং মানি বাজেয়াপ্ত', 'অগ্রিম টাকা ফেরত ফ্ল্যাট'],
      hi: ['होम लोन रिजेक्ट टोकन वापसी', 'बयाना जब्ती अवैध', 'फ्लैट बुकिंग रिफंड']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain formal Home Loan Rejection Letter from the lending bank specifying ineligibility grounds.',
        'Issue cancellation letter to promoter requesting refund minus minimal admin charges (≤ ₹25,000).',
        'If builder forfeits 10%–20% of total cost, file consumer complaint on https://e-jagriti.gov.in/.',
        'Secure award directing full refund with 9% annual interest for unfair contractual forfeiture.'
      ],
      bn: [
        'ঋণ প্রদানকারী ব্যাঙ্ক থেকে হোম লোন নামঞ্জুর হওয়ার আনুষ্ঠানিক রিজেকশন লেটার সংগ্রহ করুন।',
        'নামমাত্র প্রশাসনিক ফি (সর্বোচ্চ ২৫,০০০ টাকা) বাদে বাকি টাকা চেয়ে বিল্ডারকে চিঠি দিন।',
        'বিল্ডার টাকা কেটে রাখলে e-jagriti.gov.in-এ উপভোক্তা বিষয়ক আদালতে মামলা করুন।',
        'অন্যায্য শর্ত বাতিল করিয়ে ৯% সুদসহ পুরো বুকিংয়ের টাকা ফেরতের ডিক্রি লাভ করুন।'
      ],
      hi: [
        'बैंक से आधिकारिक लोन अस्वीकृति पत्र (Loan Rejection Letter) प्राप्त करें।',
        'अधिकतम ₹25,000 की सामान्य कटौती कर बाकी राशि लौटाने का पत्र बिल्डर को भेजें।',
        'बिल्डर द्वारा राशि जब्त करने पर e-jagriti.gov.in पर उपभोक्ता परिवाद दाखिल करें।',
        'अनुचित अनुबंध निरस्त कराकर 9% वार्षिक ब्याज सहित पूरी बयाना राशि वापस पाएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-19-1',
        name: { en: 'Bank Loan Sanction Rejection Letter', bn: 'ব্যাঙ্কের লোন নামঞ্জুর পত্র', hi: 'बैंक लोन अस्वीकृति पत्र' },
        issuing_authority: { en: 'Commercial Lending Bank / NBFC', bn: 'ঋণদাতা ব্যাঙ্ক', hi: 'ऋणदाता बैंक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-20',
    title: {
      en: 'Delay in Forming Housing Co-operative Society',
      bn: 'ফ্ল্যাট ওনার্স অ্যাসোসিয়েশন গঠনে প্রমোটারের অসহযোগিতা',
      hi: 'हाउसिंग सोसाइटी गठन में बिल्डर के टालमटोल पर कानूनी कार्रवाई'
    },
    relevant_act: 'Sec 11(4)(e), RERA r/w WB Apartment Ownership Act',
    summary: {
      en: 'Compelling developers to register the apartment owners association and hand over maintenance corpus within statutory period.',
      bn: '৫১% ফ্ল্যাট বুকিংয়ের ৩ মাসের মধ্যে ওনার্স সমিতি গঠন ও সিঙ্কিং ফান্ড বুঝিয়ে দিতে বিল্ডারকে বাধ্য করা।',
      hi: 'कानूनी समय सीमा में फ्लैट मालिकों की अधिकृत सोसाइटी बनाकर मेंटेनेंस हैंडओवर कराना।'
    },
    authority_forum: {
      en: 'Competent Authority (Housing Dept) / WBRERA',
      bn: 'কম্পিটেন্ট অথরিটি (আবাসন দপ্তর) / রেরা',
      hi: 'सक्षम प्राधिकारी (आवास विभाग) / रेरा'
    },
    forum_type: 'WBRERA',
    is_complex: true,
    official_portal_url: 'https://rera.wb.gov.in/',
    statutory_timeframe: {
      en: 'Mandatory within 3 months of 51% booking',
      bn: '৫১% বুকিংয়ের ৩ মাসের মধ্যে বাধ্যতামূলক',
      hi: '51% बुकिंग के 3 माह में अनिवार्य'
    },
    search_keywords: {
      en: ['handover maintenance society', 'section 11 4 e rera', 'delay forming rwa builder'],
      bn: ['সোসাইটি গঠনে দেরি', 'মেইনটেন্যান্স হস্তান্তর', 'রেরা সমিতি গঠন'],
      hi: ['सोसाइटी हैंडओवर देरी', 'आरडब्ल्यूए गठन बिल्डर', 'धारा 11(4)(e) रेरा']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Convene general body meeting of allottees to pass resolution constituting ad-hoc association.',
        'Submit Form-1 before Competent Authority under WB Apartment Ownership Act for registration.',
        'Serve 15-day requisition notice on builder to transfer unspent sinking fund and audited accounts.',
        'Move WBRERA under Section 31 to impose daily non-compliance penalties until physical handover.'
      ],
      bn: [
        'ফ্ল্যাট মালিকদের সাধারণ সভা ডেকে অ্যাড-হক ওনার্স অ্যাসোসিয়েশন গঠনের প্রস্তাব পাস করুন।',
        'অ্যাপার্টমেন্ট ওনারশিপ অ্যাক্ট মেনে রেজিস্ট্রেশনের জন্য আবাসন দপ্তরে ফর্ম-১ আবেদন জমা দিন।',
        'সিঙ্কিং ফান্ডের গচ্ছিত টাকা ও অডিট খাতা বুঝিয়ে দিতে বিল্ডারকে ১৫ দিনের চরমপত্র দিন।',
        'রেরা বেঞ্চে মামলা করে হ্যান্ডওভার না করা পর্যন্ত প্রমোটারের ওপর দৈনিক জরিমানা ধার্য করান।'
      ],
      hi: [
        'खरीदारों की बैठक बुलाकर एसोसिएशन गठन का आम प्रस्ताव सर्वसम्मति से पारित करें।',
        'अपार्टमेंट ओनरशिप एक्ट के तहत सक्षम प्राधिकारी को फॉर्म-1 में पंजीकरण हेतु भेजें।',
        'जमा सिंकिंग फंड एवं ऑडिट बहीखाता सौंपने का 15 दिवसीय अल्टीमेटम बिल्डर को दें।',
        'रेरा में धारा 31 के तहत वाद कर हैंडओवर होने तक बिल्डर पर दैनिक जुर्माना लगवाएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-20-1',
        name: { en: 'Allottee Resolution & Form-1 Application', bn: 'মালিকদের রেজোলিউশন ও ফর্ম-১ আবেদনপত্র', hi: 'खरीदारों का प्रस्ताव एवं फॉर्म-1 आवेदन प्रति' },
        issuing_authority: { en: 'Apartment Owners Body', bn: 'ফ্ল্যাট মালিক সংগঠন', hi: 'अपार्टमेंट ओनर्स बॉडी' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-21',
    title: {
      en: 'Twin Allotment Fraud: Same Flat Sold to Multiple Buyers',
      bn: 'একই ফ্ল্যাট একাধিক ব্যক্তির কাছে বিক্রি প্রতারণা',
      hi: 'एक ही फ्लैट को कई लोगों को बेचने की धोखाधड़ी (ट्विन अलॉटमेंट)'
    },
    relevant_act: 'Sec 18 RERA r/w Sec 316 & 318 BNS, 2023',
    summary: {
      en: 'Emergency freezing of flat transfers, refund with compensation, and criminal prosecution for duplicate flat sales.',
      bn: 'প্রতারণা করে একটি ফ্ল্যাট দুজনের কাছে রেজিস্ট্রি বা বিক্রি করলে তাৎক্ষণিক ফ্ল্যাট ফ্রিজ ও ফৌজদারি বিচার।',
      hi: 'एक ही फ्लैट दो ग्राहकों को बेचने पर तत्काल फ्लैट सील, पूरा पैसा ब्याज सहित वापसी एवं आपराधिक केस।'
    },
    authority_forum: {
      en: 'WBRERA / Police EOW / Civil Court',
      bn: 'রেরা / অর্থনৈতিক অপরাধ শাখা / দেওয়ানি আদালত',
      hi: 'रेरा / ईओडब्ल्यू / सिविल न्यायालय'
    },
    forum_type: 'WBRERA',
    is_complex: true,
    official_portal_url: 'https://rera.wb.gov.in/',
    statutory_timeframe: {
      en: 'Immediate criminal action; 60 days WBRERA',
      bn: 'অবিলম্বে ফৌজদারি ব্যবস্থা; ৬০ দিনে রেরা',
      hi: 'त्वरित पुलिस कार्रवाई; 60 दिन में रेरा'
    },
    search_keywords: {
      en: ['twin allotment scam', 'double sale of flat', 'builder cheating 318 bns'],
      bn: ['একই ফ্ল্যাট দুবার বিক্রি', 'বিল্ডার প্রতারণা', 'টুইন অ্যালটমেন্ট রেরা'],
      hi: ['एक फ्लैट दो बार बिक्री', 'डबल अलॉटमेंट धोखाधड़ी', 'बिल्डर 420 केस']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Extract certified registered deeds and index search copies from the Sub-Registrar (ADSR).',
        'Lodge criminal FIR under Section 318(4) BNS for cheating at local police station or EOW.',
        'File urgent petition before WBRERA Bench praying for immediate stay on third-party registry.',
        'Secure award directing full refund with compound interest plus priority alternative flat allotment.'
      ],
      bn: [
        'সাব-রেজিস্ট্রি অফিস থেকে ডুপ্লিকেট দলিলের সার্টিফাইড কপি ও ইনডেক্স সার্চ রিপোর্ট তুলুন।',
        'প্রতারণার অভিযোগে থানায় বা ইওডব্লিউ-তে ধারা ৩১৮(৪) বিএনএস অনুযায়ী এফআইআর করুন।',
        'অন্য কারও নামে দলিল বা দখল আটকাতে রেরা বেঞ্চে জরুরি স্থগিতাদেশের আবেদন দিন।',
        'চক্রবৃদ্ধি সুদে সম্পূর্ণ টাকা ফেরত অথবা সমমানের অন্য ফ্ল্যাট হস্তান্তরের আদেশ পান।'
      ],
      hi: [
        'रजिस्ट्री कार्यालय से दोनों विलेखों की प्रमाणित प्रतियां एवं इंडेक्स सर्च निकालें।',
        'धोखाधड़ी के लिए बीएनएस की धारा 318(4) में थाने अथवा ईओडब्ल्यू में प्राथमिकी दर्ज कराएं।',
        'तीसरे पक्ष को पजेशन या रजिस्ट्री रोकने हेतु WBRERA बेंच से तुरंत स्थगनादेश लें।',
        'चक्रवृद्धि ब्याज सहित संपूर्ण राशि की वापसी या अन्य फ्लैट देने का कड़ा आदेश प्राप्त करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-21-1',
        name: { en: 'Certified Index-II Search proving Double Allotment', bn: 'ডবল রেজিস্ট্রেশনের ইনডেক্স-২ সার্চ কপি', hi: 'दोहरी रजिस्ट्री सिद्ध करने वाली इंडेक्स-2 नकल' },
        issuing_authority: { en: 'Sub-Registrar Office (ADSR)', bn: 'সাব-রেজিস্ট্রার অফিস', hi: 'उप-पंजीयक कार्यालय' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-22',
    title: {
      en: 'Health Insurance Rejection for Pre-Existing Diseases',
      bn: 'আগের রোগ গোপনের মিথ্যা অজুহাতে মেডিক্লেম রিজেক্ট',
      hi: 'पुरानी बीमारी छिपाने के झूठे बहाने मेडिक्लेम निरस्त करना'
    },
    relevant_act: 'IRDAI Health Insurance Regulations, 2020 & CPA',
    summary: {
      en: 'Challenging wrongful health claim denials where policy has passed the statutory 8-year moratorium period.',
      bn: 'টানা ৮ বছর পলিসি চলার পর কোনো দাবি নাকচ করা যায় না—এই নিয়মে বাতিল মেডিক্লেম আদায়।',
      hi: 'लगातार 8 साल प्रीमियम भरने के बाद किसी भी बीमारी का बहाना बनाकर क्लेम रिजेक्ट करने पर रोक।'
    },
    authority_forum: {
      en: 'Insurance Ombudsman (Kolkata) / DCDRC',
      bn: 'বীমা ন্যায়পাল (কলকাতা) / ক্রেতা আদালত',
      hi: 'बीमा लोकपाल / उपभोक्ता आयोग'
    },
    forum_type: 'Insurance_Ombudsman',
    is_complex: false,
    official_portal_url: 'https://cioins.co.in/',
    statutory_timeframe: {
      en: '30 to 90 days',
      bn: '৩০ থেকে ৯০ দিন',
      hi: '30 से 90 दिन'
    },
    search_keywords: {
      en: ['8 year moratorium health insurance', 'ped rejection ombudsman', 'pre existing disease dispute'],
      bn: ['আগের রোগ গোপন রিজেক্ট', '৮ বছরের মোরাটোরিয়াম বীমা', 'মেডিক্লেম ন্যায়পাল'],
      hi: ['पुरानी बीमारी क्लेम रिजेक्ट', '8 साल मोराटोरियम बीमा', 'मेडिक्लेम लोकपाल']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Lodge written grievance with insurer’s Grievance Cell (GRO) demanding itemized repudiation grounds.',
        'Secure treating doctor certificate confirming hospitalized ailment was acute and unrelated.',
        'Cite IRDAI 8-year Moratorium Clause prohibiting repudiation after 8 continuous premium years.',
        'Register online complaint with Insurance Ombudsman (Kolkata); award issued within 3 months.'
      ],
      bn: [
        'বীমা কোম্পানির গ্রিভেন্স সেলে লিখিত আপত্তি জানিয়ে রিজেকশনের বিস্তারিত কারণ তলব করুন।',
        'ডাক্তারের শংসাপত্র নিন যে চিকিৎসাধীন রোগটি আকস্মিক ছিল এবং পুরনো রোগের সাথে সম্পর্কহীন।',
        'আইআরডিএআই-এর ৮ বছরের মোরাটোরিয়াম নিয়ম দেখান যার পর কোনো অজুহাতে দাবি বাতিল বেআইনি।',
        'কলকাতার বীমা ন্যায়পালের কাছে অনলাইনে অভিযোগ দিন; ৩ মাসের মধ্যে টাকা মেটানোর রায় হবে।'
      ],
      hi: [
        'बीमा कंपनी के शिकायत निवारण अधिकारी से क्लेम रिजेक्ट करने के विस्तृत कारण मांगें।',
        'डॉक्टर से प्रमाणपत्र लें कि वर्तमान भर्ती का पुरानी बीमारी से कोई प्रत्यक्ष संबंध नहीं था।',
        'IRDAI के 8-वर्षीय मोराटोरियम नियम का हवाला दें जिसके बाद क्लेम अस्वीकृत नहीं हो सकता।',
        'बीमा लोकपाल (कोलकाता) में ऑनलाइन परिवाद दें; 3 माह में पूरी राशि का भुगतान होगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-22-1',
        name: { en: 'Continuous 8-Year Policy Renewal Certificates & Doctor Notes', bn: 'টানা ৮ বছরের পলিসি রিনিউয়াল ও ডাক্তারের নোট', hi: 'लगातार 8 वर्षों के पॉलिसी नवीनीकरण रसीद व मेडिकल नोट' },
        issuing_authority: { en: 'Insurance Company / Hospital', bn: 'বীমা সংস্থা / হাসপাতাল', hi: 'बीमा कंपनी / अस्पताल' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-23',
    title: {
      en: 'Term Life Insurance Denial on Alleged Suicide / Exclusion',
      bn: 'টার্ম লাইফ ইন্স্যুরেন্সের মৃত্যু দাবি অন্যায়ভাবে বাতিল',
      hi: 'टर्म इंश्योरेंस मृत्यु दावा (डेथ क्लेम) के अनुचित निरस्तीकरण का विरोध'
    },
    relevant_act: 'Sec 45, Insurance Act, 1938 (Incontestability Clause)',
    summary: {
      en: 'Incontestable policy rule: insurer cannot repudiate life claims on any ground after 3 continuous years of premiums.',
      bn: 'পলিসির বয়স ৩ বছর পেরিয়ে গেলে মিথ্যা তথ্যের অজুহাতেও মৃত্যু দাবি বাতিল করা বেআইনি।',
      hi: 'पॉलिसी के 3 साल पूरे होने के बाद बीमा कंपनी किसी भी आधार पर डेथ क्लेम खारिज नहीं कर सकती।'
    },
    authority_forum: {
      en: 'Insurance Ombudsman / State Consumer Commission (SCDRC)',
      bn: 'বীমা ন্যায়পাল / রাজ্য ক্রেতা সুরক্ষা কমিশন',
      hi: 'बीमा लोकपाल / राज्य उपभोक्ता आयोग'
    },
    forum_type: 'Insurance_Ombudsman',
    is_complex: true,
    official_portal_url: 'https://cioins.co.in/',
    statutory_timeframe: {
      en: '60 to 90 working days',
      bn: '৬০ থেকে ৯০ কার্যদিবস',
      hi: '60 থেকে 90 कार्यदिवस'
    },
    search_keywords: {
      en: ['section 45 insurance act', 'incontestability clause life insurance', 'term claim repudiation'],
      bn: ['ধারা ৪৫ বীমা আইন', 'টার্ম ইন্স্যুরেন্স রিজেক্ট', 'মৃত্যু দাবি আদায়'],
      hi: ['धारा 45 बीमा अधिनियम', 'डेथ क्लेम रिजेक्ट', 'टर्म इंश्योरेंस लोकपाल']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Review policy commencement date and verify premiums were paid continuously for 3 years.',
        'Serve legal notice citing Section 45 Insurance Act (prohibiting claim rejection after 3 years).',
        'File formal complaint before State Consumer Commission (SCDRC) or Insurance Ombudsman.',
        'Secure recovery order directing payment of complete sum assured with 9% interest from death date.'
      ],
      bn: [
        'পলিসির তারিখ খতিয়ে দেখে নিশ্চিত হন যে প্রিমিয়াম টানা ৩ বছর চালু ছিল।',
        'বীমা আইনের ধারা ৪৫ (ইনকনটেস্টেবিলিটি ক্লজ) উল্লেখ করে কোম্পানিকে কড়া লিগ্যাল নোটিশ দিন।',
        'রাজ্য উপভোক্তা কমিশন বা বীমা ন্যায়পালের কাছে ডেথ ক্লেইম আদায়ের মামলা দায়ের করুন।',
        'মৃত্যুর তারিখ থেকে ৯% সুদসহ সম্পূর্ণ বিমাকৃত অর্থ (Sum Assured) পরিশোধের আদেশ নিন।'
      ],
      hi: [
        'पॉलिसी शुरू होने की तारीख से जांचें कि क्या लगातार 3 साल तक प्रीमियम भरा गया था।',
        'बीमा अधिनियम की धारा 45 का हवाला देकर 3 साल बाद क्लेम अस्वीकार न करने का नोटिस दें।',
        'राज्य उपभोक्ता आयोग अथवा बीमा लोकपाल के समक्ष औपचारिक परिवाद दाखिल करें।',
        'मृत्यु की तिथि से 9% ब्याज सहित पूरी बीमा राशि (Sum Assured) का भुगतान प्राप्त करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-23-1',
        name: { en: 'Policy Schedule proving 3+ Years Continuity & Death Certificate', bn: '৩ বছরের পলিসি শিডিউল ও মৃত্যু শংসাপত্র', hi: '3+ वर्ष पुरानी पॉलिसी शिड्यूल एवं मृत्यु प्रमाणपत्र' },
        issuing_authority: { en: 'Insurer / Municipal Registrar', bn: 'বীমা সংস্থা / পুরসভা', hi: 'बीमा कंपनी / नगर निगम' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-24',
    title: {
      en: 'Electric Vehicle (EV) Battery Fire, Explosion & Range Defect',
      bn: 'ইলেকট্রিক স্কুটার ও ব্যাটারি বিস্ফোরণ ক্ষতিপূরণ',
      hi: 'इलेक्ट्रिक वाहन (EV) बैटरी आग, विस्फोट एवं माइलेज धोखा हर्जाना'
    },
    relevant_act: 'Product Liability (Sec 82–87, Consumer Protection Act, 2019)',
    summary: {
      en: 'Suing EV manufacturers and battery importers for replacement, vehicle refund, and personal injury damages for thermal fires.',
      bn: 'ইভি স্কুটারের ব্যাটারি বিস্ফোরণ বা পুড়ে যাওয়া এবং প্রতিশ্রুত মাইলেজের অর্ধেক দেওয়ার বিরুদ্ধে ক্ষতিপূরণ মামলা।',
      hi: 'ईवी में आग लगने, बैटरी फटने या झूठी रेंज देने पर वाहन बदलने एवं क्षतिपूर्ति का वाद।'
    },
    authority_forum: {
      en: 'District Consumer Commission (e-Jagriti)',
      bn: 'জেলা ক্রেতা সুরক্ষা আদালত (ই-জাগৃতি)',
      hi: 'जिला उपभोक्ता आयोग (ई-जागृति)'
    },
    forum_type: 'Consumer_DCDRC',
    is_complex: true,
    official_portal_url: 'https://e-jagriti.gov.in/',
    statutory_timeframe: {
      en: '3 to 6 months',
      bn: '৩ থেকে ৬ মাস',
      hi: '3 से 6 माह'
    },
    search_keywords: {
      en: ['ev fire compensation', 'electric scooter battery explosion', 'product liability cpa 2019'],
      bn: ['ইভি স্কুটার আগুন', 'ব্যাটারি বিস্ফোরণ ক্ষতিপূরণ', 'প্রোডাক্ট লায়াবিলিটি ইভি'],
      hi: ['ईवी आग मुआवजा', 'इलेक्ट्रिक स्कूटर बैटरी विस्फोट', 'प्रोडक्ट लायबिलिटी केस']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Secure fire service incident report, battery inspection memo, and police General Diary (GD).',
        'Issue formal statutory legal notice under Section 83 CPA to manufacturer and dealership.',
        'File product liability complaint on e-Jagriti seeking replacement or refund plus damages.',
        'Move for independent laboratory test of battery management system (BMS) via ARAI agency.'
      ],
      bn: [
        'দমকল বাহিনীর রিপোর্ট, পুলিশের জিডি এবং পোড়া ব্যাটারির ছবি প্রমাণ হিসেবে সংরক্ষণ করুন।',
        'ক্রেতা সুরক্ষা আইনের ধারা ৮৩ অনুযায়ী প্রস্তুতকারক ও ডিলার উভয়কে লিগ্যাল নোটিশ পাঠান।',
        'ই-জাগৃতি পোর্টালে প্রোডাক্ট লায়াবিলিটি মামলা করে গাড়ির পুরো দাম ও ক্ষতিপূরণ দাবি করুন।',
        'এআরএআই (ARAI) বিশেষজ্ঞ দল দিয়ে ব্যাটারির যান্ত্রিক ত্রুটি পরীক্ষা করিয়ে রায় নিন।'
      ],
      hi: [
        'दमकल विभाग की रिपोर्ट, पुलिस जीडी एवं जली हुई बैटरी के तकनीकी साक्ष्य एकत्र करें।',
        'उपभोक्ता संरक्षण अधिनियम की धारा 83 में निर्माता एवं डीलर को वैधानिक नोटिस दें।',
        'ई-जागृति पर प्रोडक्ट लायबिलिटी परिवाद दायर कर पूरा रिफंड एवं भारी हर्जाना मांगें।',
        'एआरएआई (ARAI) प्रयोगशाला से बैटरी मैनेजमेंट सिस्टम की जांच कराकर दोष सिद्ध करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-24-1',
        name: { en: 'Fire Brigade Incident Report & Purchase Tax Invoice', bn: 'দমকলের অগ্নিকাণ্ড রিপোর্ট ও ট্যাক্স ইনভয়েস', hi: 'दमकल रिपोर्ट एवं वाहन खरीद टैक्स इनवॉयस' },
        issuing_authority: { en: 'West Bengal Fire & Emergency Services', bn: 'দমকল দপ্তর', hi: 'अग्निशमन विभाग' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-consumer-25',
    title: {
      en: 'Dark Patterns, Drip Pricing & Stealth Cancellation Fees',
      bn: 'ই-কমার্স অ্যাপে গোপন ফি ও ডার্ক প্যাটার্ন প্রতারণা',
      hi: 'ई-कॉमर्स एवं ऐप पर छिपे हुए शुल्क (ड्रिप प्राइसिंग) व डार्क पैटर्न धोखा'
    },
    relevant_act: 'CCPA Guidelines for Prevention of Dark Patterns, 2023',
    summary: {
      en: 'Class-action complaints against booking portals and apps for forced pre-ticked add-ons, drip pricing, and fake timers.',
      bn: 'টিকিট বুকিং অ্যাপে জোর করে অতিরিক্ত চার্জ যোগ করা ও কৃত্রিম সময়সীমার ভয় দেখিয়ে টাকা কাটার বিরুদ্ধে ব্যবস্থা।',
      hi: 'फ्लाइट या शॉपिंग ऐप द्वारा बिना पूछे इंश्योरेंस जोड़ने या अंतिम समय में शुल्क बढ़ाने पर रोक।'
    },
    authority_forum: {
      en: 'Central Consumer Protection Authority (CCPA) / DCDRC',
      bn: 'কেন্দ্রীয় ক্রেতা সুরক্ষা কর্তৃপক্ষ (CCPA) / ক্রেতা আদালত',
      hi: 'केंद्रीय उपभोक्ता संरक्षण प्राधिकरण (CCPA)'
    },
    forum_type: 'Consumer_DCDRC',
    is_complex: false,
    official_portal_url: 'https://consumerhelpline.gov.in/',
    statutory_timeframe: {
      en: '15 to 30 days',
      bn: '১৫ থেকে ৩০ দিন',
      hi: '15 से 30 দিন'
    },
    search_keywords: {
      en: ['dark patterns complaint', 'drip pricing airline', 'ccpa dark patterns 2023'],
      bn: ['ডার্ক প্যাটার্ন প্রতারণা', 'গোপন টিকিটের চার্জ', 'সিসিএপিএ অভিযোগ'],
      hi: ['डार्क पैटर्न शिकायत', 'ड्रिप प्राइसिंग एयरलाइन', 'छिपे हुए चार्ज शिकायत']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Capture screen recordings displaying how ancillary charges were pre-ticked without consent.',
        'Register complaint on National Consumer Helpline portal (https://consumerhelpline.gov.in/) or 1915.',
        'Escalate to CCPA for initiating investigation into systemic unfair trade practices.',
        'File petition before District Consumer Commission for refund of forced add-ons plus damages.'
      ],
      bn: [
        'সম্মতি ছাড়া কীভাবে বিমা বা সিটের বাড়তি টাকা যোগ করা হয়েছে তার স্ক্রিন রেকর্ডিং রাখুন।',
        'জাতীয় উপভোক্তা হেল্পলাইনে (১৯১৫) ডার্ক প্যাটার্ন প্রতারণার বিবরণ দিয়ে অভিযোগ জানান।',
        'ব্যবসা প্রতিষ্ঠানের অনৈতিক কার্যকলাপের বিরুদ্ধে তদন্তের জন্য সিসিএপিএ-তে নালিশ পাঠান।',
        'ক্রেতা আদালতে মামলা করে জোর করে কেটে নেওয়া সমস্ত অতিরিক্ত টাকা ফেরত ও জরিমানা করান।'
      ],
      hi: [
        'स्क्रीन रिकॉर्डिंग से सिद्ध करें कि कैसे सीट या बीमा शुल्क बिना सहमति खुद टिक हो गया।',
        'राष्ट्रीय उपभोक्ता हेल्पलाइन (1915 अथवा पोर्टल) पर डार्क पैटर्न का विवरण दर्ज करें।',
        'केंद्रीय उपभोक्ता संरक्षण प्राधिकरण (CCPA) को कंपनी की जांच हेतु औपचारिक ईमेल भेजें।',
        'उपभोक्ता फोरम में वाद दायर कर जबरन वसूले गए सभी अतिरिक्त शुल्कों की वापसी कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-consumer-25-1',
        name: { en: 'Screen Recording / Billing Proof showing Hidden Add-ons', bn: 'গোপন চার্জের স্ক্রিনশট ও চূড়ান্ত বিলের কপি', hi: 'छिपे शुल्कों के स्क्रीनशॉट एवं अंतिम बिल' },
        issuing_authority: { en: 'Complainant / App Platform', bn: 'অভিযোগকারী', hi: 'शिकायतकर्ता' },
        is_mandatory: true
      }
    ]
  }
];
