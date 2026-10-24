import type { CivilSubCategory } from '../../../types/legal';

export const familyPart1: CivilSubCategory[] = [
  {
    id: 'sub-family-01',
    productCategory: 'lawyer-only',
    title: {
      en: 'Monthly Maintenance for Wife & Children (Sec 144 BNSS)',
      bn: 'স্ত্রী ও সন্তানের মাসিক ভরণপোষণ (Sec 144 BNSS)',
      hi: 'पत्नी एवं बच्चों हेतु मासिक भरण-पोषण (धारा 144 BNSS)'
    },
    relevant_act: 'Sec 144, Bharatiya Nagarik Suraksha Sanhita, 2023',
    summary: {
      en: 'Securing mandatory monthly maintenance for neglected wives, minor children, and parents with 60-day interim disposal.',
      bn: 'স্বামী ভরণপোষণ না দিলে স্ত্রী ও নাবালক সন্তানের বেঁচে থাকার খরচের জন্য আদালতে মাসিক খোরপোশের মামলা।',
      hi: 'पति द्वारा भरण-पोषण न करने पर पत्नी एवं बच्चों के जीवन-यापन हेतु 60 दिनों में अंतरिम गुजारा भत्ता पाना।'
    },
    authority_forum: {
      en: 'Family Court / Judicial Magistrate Court',
      bn: 'পারিবারিক আদালত / জুডিশিয়াল ম্যাজিস্ট্রেট আদালত',
      hi: 'पारिवारिक न्यायालय / न्यायिक दंडाधिकारी न्यायालय'
    },
    forum_type: 'Family_Court',
    is_complex: false,
    statutory_timeframe: {
      en: 'Interim order within 60 days',
      bn: '৬০ দিনের মধ্যে অন্তর্বর্তী আদেশ',
      hi: '60 दिन में अंतरिम आदेश'
    },
    search_keywords: {
      en: ['section 144 bnss maintenance', 'wife maintenance case', 'child support interim order'],
      bn: ['মাসিক খোরপোশ মামলা', 'স্ত্রী ও সন্তানের ভরণপোষণ', 'ধারা ১৪৪ বিএনএসএস'],
      hi: ['मासिक गुजारा भत्ता', 'धारा 144 बीएनएसएस', 'पत्नी भरण पोषण केस']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'Family Court / Judicial Magistrate Court at District Headquarters',
          bn: 'জেলা সদরে পারিবারিক আদালত / জুডিশিয়াল ম্যাজিস্ট্রেট আদালত',
          hi: 'जिला मुख्यालय पर पारिवारिक न्यायालय / न्यायिक दंडाधिकारी न्यायालय'
        },
        portal_name: { en: 'District eCourts Portal', bn: 'জেলা ই-কোর্ট পোর্টাল', hi: 'जिला ई-कोर्ट्स' },
        portal_url: 'https://districts.ecourts.gov.in/',
        steps: {
          en: [
            'File Maintenance Application under Section 144 BNSS before jurisdictional Family Court.',
            'File mandatory Affidavit of Assets & Liabilities per Supreme Court Rajnesh v. Neha format.',
            'Secure interim maintenance order within 60 days of summons service for daily sustenance.',
            'Magistrate passes final monthly maintenance order; non-payment attracts distress arrest warrants.'
          ],
          bn: [
            'এক্তিয়ারভুক্ত পারিবারিক আদালতে ধারা ১৪৪ বিএনএসএস অনুযায়ী খোরপোশের আবেদন দাখিল করুন।',
            'সুপ্রিম কোর্টের নির্দেশ মেনে স্বামী ও স্ত্রী উভয়ের সম্পত্তির বিস্তারিত হলফনামা আদালতে দিন।',
            'দৈনন্দিন বেঁচে থাকার খরচের জন্য সমন জারির ৬০ দিনের মধ্যে অন্তর্বর্তী খোরপোশের আদেশ নিন।',
            'চূড়ান্ত মাসিক খোরপোশের ডিক্রি পান; টাকা না দিলে আদালত সরাসরি গ্রেপ্তারি পরোয়ানা জারি করবে।'
          ],
          hi: [
            'सक्षम पारिवारिक न्यायालय में धारा 144 बीएनएसएस के तहत भरण-पोषण की याचिका दाखिल करें।',
            'सुप्रीम कोर्ट के निर्देशानुसार दोनों पक्षों की आय एवं परिसंपत्तियों का शपथ पत्र प्रस्तुत करें।',
            'समन तामिला के 60 दिनों के भीतर दैनिक भरण-पोषण हेतु अंतरिम गुजारा भत्ता का आदेश लें।',
            'अदालत अंतिम मासिक भरण-पोषण तय करेगी; न चुकाने पर पति की गिरफ्तारी वारंट जारी होगा।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'Family Court at Calcutta / Chief Metropolitan Magistrate Court, Bankshall',
          bn: 'কলকাতা পারিবারিক আদালত / মুখ্য মহানগর দন্ডনায়ক আদালত, ব্যাঙ্কশাল',
          hi: 'कलकत्ता पारिवारिक न्यायालय / मुख्य महानगर दंडाधिकारी न्यायालय, बैंकशाल'
        },
        portal_name: { en: 'Calcutta Family Court Portal', bn: 'কলকাতা পারিবারিক আদালত পোর্টাল', hi: 'कलकत्ता फैमिली कोर्ट' },
        portal_url: 'https://ecourts.gov.in/',
        steps: {
          en: [
            'File Maintenance Application under Section 144 BNSS before Family Court, Calcutta.',
            'File mandatory Affidavit of Assets & Liabilities per Supreme Court Rajnesh v. Neha format.',
            'Secure interim maintenance order within 60 days of summons service for daily sustenance.',
            'Magistrate passes final monthly maintenance order; non-payment attracts distress arrest warrants.'
          ],
          bn: [
            'কলকাতা পারিবারিক আদালতে ধারা ১৪৪ বিএনএসএস অনুযায়ী খোরপোশের আবেদন দাখিল করুন।',
            'সুপ্রিম কোর্টের নির্দেশ মেনে স্বামী ও স্ত্রী উভয়ের সম্পত্তির বিস্তারিত হলফনামা আদালতে দিন।',
            'দৈনন্দিন বেঁচে থাকার খরচের জন্য সমন জারির ৬০ দিনের মধ্যে অন্তর্বর্তী খোরপোশের আদেশ নিন।',
            'চূড়ান্ত মাসিক খোরপোশের ডিক্রি পান; টাকা না দিলে আদালত সরাসরি গ্রেপ্তারি পরোয়ানা জারি করবে।'
          ],
          hi: [
            'कलकत्ता पारिवारिक न्यायालय में धारा 144 बीएनएसएस के तहत भरण-पोषण की याचिका दाखिल करें।',
            'सुप्रीम कोर्ट के निर्देशानुसार दोनों पक्षों की आय एवं परिसंपत्तियों का शपथ पत्र प्रस्तुत करें।',
            'समन तामिला के 60 दिनों के भीतर दैनिक भरण-पोषण हेतु अंतरिम गुजारा भत्ता का आदेश लें।',
            'अदालत अंतिम मासिक भरण-पोषण तय करेगी; न चुकाने पर पति की गिरफ्तारी वारंट जारी होगा।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'File Maintenance Application under Section 144 BNSS before jurisdictional Family Court.',
        'File mandatory Affidavit of Assets & Liabilities per Supreme Court Rajnesh v. Neha format.',
        'Secure interim maintenance order within 60 days of summons service for daily sustenance.',
        'Magistrate passes final monthly maintenance order; non-payment attracts distress arrest warrants.'
      ],
      bn: [
        'এক্তিয়ারভুক্ত পারিবারিক আদালতে ধারা ১৪৪ বিএনএসএস অনুযায়ী খোরপোশের আবেদন দাখিল করুন।',
        'সুপ্রিম কোর্টের নির্দেশ মেনে স্বামী ও স্ত্রী উভয়ের সম্পত্তির বিস্তারিত হলফনামা আদালতে দিন।',
        'দৈনন্দিন বেঁচে থাকার খরচের জন্য সমন জারির ৬০ দিনের মধ্যে অন্তর্বর্তী খোরপোশের আদেশ নিন।',
        'চূড়ান্ত মাসিক খোরপোশের ডিক্রি পান; টাকা না দিলে আদালত সরাসরি গ্রেপ্তারি পরোয়ানা জারি করবে।'
      ],
      hi: [
        'सक्षम पारिवारिक न्यायालय में धारा 144 बीएनएसएस के तहत भरण-पोषण की याचिका दाखिल करें।',
        'सुप्रीम कोर्ट के निर्देशानुसार दोनों पक्षों की आय एवं परिसंपत्तियों का शपथ पत्र प्रस्तुत करें।',
        'समन तामिला के 60 दिनों के भीतर दैनिक भरण-पोषण हेतु अंतरिम गुजारा भत्ता का आदेश लें।',
        'अदालत अंतिम मासिक भरण-पोषण तय करेगी; न चुकाने पर पति की गिरफ्तारी वारंट जारी होगा।'
      ]
    },
    fees: [
      {
        id: 'fee-family-01-maintenance',
        kind: 'authority_calculated',
        label: {
          en: 'Section 144 BNSS Maintenance Application Filing Fee',
          bn: 'ধারা ১৪৪ বিএনএসএস খোরপোশ আবেদন দাখিল ফি',
          hi: 'धारा 144 बीएनएसएस भरण-पोषण आवेदन दाखिला शुल्क'
        },
        formula_description: {
          en: 'Nominal court fee under BNSS/CrPC for maintenance application; varies by district. Confirm current rate at Family Court before filing.',
          bn: 'বিএনএসএস/সিআরপিসি অনুযায়ী খোরপোশ আবেদনের নোপরি কোর্ট ফি; জেলা অনুযায়ী ভিন্ন। দাখিলের আগে পারিবারিক আদালতে বর্তমান ফি যাচাই করুন।',
          hi: 'बीएनएसएस/सीआरपीसी अनुसार भरण-पोषण आवेदन का मामूली कोर्ट शुल्क; जिले अनुसार भिन्न। दाखिले से पहले पारिवारिक न्यायालय में वर्तमान शुल्क जांचें।'
        },
        conditions: {
          en: 'Application filing fee for maintenance under Sec 144 BNSS; separate from lawyer fees.',
          bn: 'ধারা ১৪৪ বিএনএসএস অনুযায়ী খোরপোশ আবেদনের ফি; আইনজীবীর ফি আলাদা।',
          hi: 'धारा 144 बीएनएसएस के तहत भरण-पोषण आवेदन का शुल्क; वकील का शुल्क अलग।'
        },
        scope: 'national',
        evidence: {
          status: 'verified',
          primary_source_title: 'Bharatiya Nagarik Suraksha Sanhita, 2023 Sec 144 & Court Fees Act',
          primary_source_url: 'https://indiacode.gov.in/',
          pinpoint: 'BNSS 2023 Sec 144; CrPC Sec 125 parallel; Supreme Court Rajnesh v. Neha (2020) affidavit format',
          checked_on: '2026-10-15'
        }
      }
    ],
    timeline_info: [
      {
        id: 'time-family-01-maintenance-duration',
        kind: 'indicative_estimate',
        label: {
          en: 'Maintenance application processing time',
          bn: 'খোরপোশ আবেদন প্রক্রিয়াকরণের সময়',
          hi: 'भरण-पोषण आवेदन प्रक्रिया की अवधि'
        },
        value_description: {
          en: 'Statutory 60-day interim order mandate; final disposal typically 6-12 months depending on court backlog.',
          bn: 'আইনি ৬০ দিনের অন্তর্বর্তী আদেশ বাধ্যতামূলক; চূড়ান্ত নিষ্পত্তি সাধারণত ৬-১২ মাসে কোর্ট ব্যাকলগের ওপর নির্ভর করে।',
          hi: 'वैधानिक ६० दिन का अंतरिम आदेश अनिवार्य; अंतिम निस्तारण आमतौर पर ६-१२ माह में कोर्ट बैकलॉग पर निर्भर।'
        },
        scope: 'national',
        evidence: {
          status: 'verified',
          primary_source_title: 'BNSS 2023 Sec 144 & Supreme Court Rajnesh v. Neha',
          primary_source_url: 'https://indiacode.gov.in/',
          pinpoint: 'BNSS Sec 144(2) 60-day interim; Rajnesh v. Neha (2020) 9 SCC 741; Family Court disposal data 2024',
          checked_on: '2026-10-15'
        }
      }
    ],
    required_documents: [
      {
        id: 'doc-family-01-1',
        name: { en: 'Marriage Certificate & Child Birth Certificate', bn: 'বিবাহের প্রমাণপত্র ও সন্তানের জন্ম সনদ', hi: 'विवाह साक्ष्य एवं बच्चे का जन्म प्रमाणपत्र' },
        issuing_authority: { en: 'Marriage Registrar / Municipality', bn: 'বিবাহ নিবন্ধক / পুরসভা', hi: 'विवाह पंजीयक / नगर पालिका' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-02',
    productCategory: 'lawyer-only',
    title: {
      en: 'Senior Citizen Maintenance & Abusive Child Eviction',
      bn: 'প্রবীণ পিতা-মাতার ভরণপোষণ ও সন্তান উচ্ছেদ (SDO বনাম কলকাতা কালেক্টর)',
      hi: 'वरिष्ठ नागरिकों का भरण-पोषण एवं प्रताड़ित करने वाले बच्चों की बेदखली'
    },
    relevant_act: 'Sec 5 & 23, Senior Citizens Act, 2007',
    summary: {
      en: 'Summary administrative relief: monthly maintenance up to ₹10,000 and eviction of abusive adult children within 60 days.',
      bn: 'অসহায় বৃদ্ধ পিতা-মাতার জন্য সন্তানের কাছ থেকে মাসিক খরচের টাকা আদায় এবং বাড়ি থেকে উশৃঙ্খল সন্তান উচ্ছেদ।',
      hi: 'माता-पिता की सेवा न करने या प्रताड़ित करने पर एसडीएम ट्रिब्यूनल से मासिक खर्च दिलाना व घर से बेदखल करना।'
    },
    authority_forum: {
      en: 'SDO Maintenance Tribunal (Districts) / Collector (Kolkata)',
      bn: 'মহকুমা শাসক (SDO) ট্রাইব্যুনাল / কলকাতা কালেক্টর ট্রাইব্যুনাল',
      hi: 'एसडीओ भरण-पोषण अधिकरण / कोलकाता कलेक्टर अधिकरण'
    },
    forum_type: 'SDO_Tribunal',
    is_complex: false,
    statutory_timeframe: {
      en: '60 to 90 working days',
      bn: '৬০ থেকে ৯০ কার্যদিবস',
      hi: '60 से 90 कार्यदिवस'
    },
    search_keywords: {
      en: ['senior citizen maintenance sdo', 'evict abusive son parents home', 'section 23 senior citizens act'],
      bn: ['প্রবীণ পিতা-মাতা সুরক্ষা', 'কুলাঙ্গার সন্তান উচ্ছেদ', 'এসডিও ট্রাইব্যুনাল খোরপোশ'],
      hi: ['वरिष्ठ नागरिक भरण पोषण', 'बेटे को घर से बेदखल करना', 'धारा 23 बुजुर्ग कानून']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'Sub-Divisional Officer (SDO) Maintenance Tribunal',
          bn: 'মহকুমা শাসক (SDO) ভরণপোষণ ট্রাইব্যুনাল',
          hi: 'अनुमंडल दंडाधिकारी (SDO) भरण-पोषण अधिकरण'
        },
        steps: {
          en: [
            'Submit petition under Section 5 before SDO Maintenance Tribunal citing neglect and abuse.',
            'SDO issues summons to adult children within 15 days for conciliation hearing.',
            'Tribunal orders monthly maintenance payments directly into senior citizen bank account.',
            'If child harasses parent, SDO issues eviction order executed by local police.'
          ],
          bn: [
            'অবহেলার বিবরণ দিয়ে মহকুমা শাসকের (SDO) মেইনটেন্যান্স ট্রাইব্যুনালে ধারা ৫ আবেদন দিন।',
            'এসডিও ১৫ দিনের মধ্যে ছেলে বা আইনসম্মত ওয়ারিশদের তলব করে শুনানির নোটিশ পাঠাবেন।',
            'ট্রাইব্যুনাল প্রতি মাসে প্রবীণ পিতা-মাতার ব্যাঙ্ক অ্যাকাউন্টে সরাসরি টাকা জমার নির্দেশ দেবে।',
            'শারীরিক মানসিক নির্যাতন করলে এসডিও পুলিশকে দিয়ে অভিযুক্ত সন্তানকে বাড়ি থেকে বের করে দেবে।'
          ],
          hi: [
            'उपेक्षा एवं दुर्व्यवहार के विरुद्ध एसडीओ भरण-पोषण अधिकरण के समक्ष धारा 5 में आवेदन दें।',
            'एसडीओ द्वारा 15 दिनों के भीतर संतानों को तलब कर सुलह एवं सुनवाई की जाएगी।',
            'अधिकरण माता-पिता के बैंक खाते में मासिक भरण-पोषण जमा कराने का आदेश देगा।',
            'घर में प्रताड़ित करने पर एसडीओ पुलिस बल द्वारा अनाचारी बेटे-बहू को बेदखल करने का आदेश देंगे।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'Kolkata District Maintenance Tribunal (Kolkata Collectorate at Bankshall St)',
          bn: 'কলকাতা জেলা ভরণপোষণ ট্রাইব্যুনাল (কালেক্টরেট, ব্যাঙ্কশাল স্ট্রিট)',
          hi: 'कोलकाता जिला भरण-पोषण अधिकरण (कलेक्टर कार्यालय)'
        },
        steps: {
          en: [
            'Submit Section 5 petition before District Magistrate / Collector at Bankshall St office.',
            'Collector holds hearing and evaluates maintenance needs against property rental/value.',
            'Tribunal passes order for monthly allowance or cancellation of fraudulent gift deed.',
            'Execution wing at Collectorate enforces eviction if children abuse parents after gift transfer.'
          ],
          bn: [
            'ব্যাঙ্কশাল স্ট্রিটের কালেক্টরেট অফিসে জেলাশাসকের কাছে ধারা ৫ অনুযায়ী পিটিশন জমা দিন।',
            'কালেক্টর বাড়ি বা ফ্ল্যাটের ভাড়ার আয়ের ভিত্তিতে সঠিক খোরপোশ নির্ধারণের শুনানি করবেন।',
            'আদালতের নির্দেশে সম্পত্তি ফিরিয়ে নেওয়ার বা দানপত্র বাতিলের আদেশ কার্যকর হবে।',
            'কলকাতা কালেক্টরেট থেকে পুলিশ ফোর্স পাঠিয়ে জোর করে বাড়ি দখলকারী সন্তানকে উচ্ছেদ করা হবে।'
          ],
          hi: [
            'बैंकशाल स्ट्रीट स्थित कोलकाता कलेक्टर कार्यालय में धारा 5 के तहत याचिका दाखिल करें।',
            'कलेक्टर द्वारा मकान/फ्लैट की आय एवं संपत्ति मूल्य के आधार पर गुजारा भत्ता तय होगा।',
            'ट्रिब्यूनल सेवा न करने पर संपत्ति दान को रद्द करने का आदेश देगा।',
            'कोलकाता कलेक्ट्रेट से पुलिस बल द्वारा अवैध कब्जा जमाए बेटे-बहू को बेदखल कराया जाएगा।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Submit petition under Section 5 before SDO Maintenance Tribunal citing neglect and abuse.',
        'SDO issues summons to adult children/heirs within 15 days for conciliation hearing.',
        'Tribunal orders monthly maintenance payments directly into senior citizen bank account.',
        'If son/in-laws physically harass, SDO issues administrative eviction order executed by police.'
      ],
      bn: [
        'অবহেলার বিবরণ দিয়ে মহকুমা শাসকের (SDO) মেইনটেন্যান্স ট্রাইব্যুনালে ধারা ৫ আবেদন দিন।',
        'এসডিও ১৫ দিনের মধ্যে ছেলে বা আইনসম্মত ওয়ারিশদের তলব করে শুনানির নোটিশ পাঠাবেন।',
        'ট্রাইব্যুনাল প্রতি মাসে প্রবীণ পিতা-মাতার ব্যাঙ্ক অ্যাকাউন্টে সরাসরি টাকা জমার নির্দেশ দেবে।',
        'শারীরিক মানসিক নির্যাতন করলে এসডিও পুলিশকে দিয়ে অভিযুক্ত সন্তানকে বাড়ি থেকে বের করে দেবে।'
      ],
      hi: [
        'उपेक्षा एवं दुर्व्यवहार के विरुद्ध एसडीओ भरण-पोषण अधिकरण के समक्ष धारा 5 में आवेदन दें।',
        'एसडीओ द्वारा 15 दिनों के भीतर संतानों को तलब कर सुलह एवं सुनवाई की जाएगी।',
        'अधिकरण माता-पिता के बैंक खाते में मासिक भरण-पोषण जमा कराने का आदेश देगा।',
        'घर में प्रताड़ित करने पर एसडीओ पुलिस बल द्वारा अनाचारी बेटे-बहू को बेदखल करने का आदेश देंगे।'
      ]
    },
    fees: [
      {
        id: 'fee-family-02-senior',
        kind: 'authority_calculated',
        label: {
          en: 'Senior Citizens Act Sec 5 Maintenance Petition Filing Fee',
          bn: 'বৃদ্ধ অধিনায়ক ধারা ৫ খোরপোশ আবেদন ফি',
          hi: 'वरिष्ठ नागरिक अधिनियम धारा 5 भरण-पोषण आवेदन शुल्क'
        },
        formula_description: {
          en: 'Nominal court fee under Senior Citizens Act 2007; no fee for senior citizens. Confirm current rate at SDO/Collector office before filing.',
          bn: 'বৃদ্ধ নাগরিক আইন ২০০৭ অনুযায়ী নোপরি কোর্ট ফি; প্রবীণদের জন্য ফি মওকূফ। দাখিলের আগে এসডিও/কালেক্টর অফিসে ফি যাচাই করুন।',
          hi: 'वरिष्ठ नागरिक अधिनियम 2007 के अनुसार मामूली कोर्ट शुल्क; वरिष्ठ नागरिकों के लिए शुल्क मुक्त। दाखिले से पहले एसडीओ/कलेक्टर कार्यालय में शुल्क जांचें।'
        },
        conditions: {
          en: 'Fee waived for senior citizens; administrative tribunal process.',
          bn: 'প্রবীণ নাগরিকদের জন্য ফি মওকূফ; প্রশাসনিক ট্রাইব্যুনাল প্রক্রিয়া।',
          hi: 'वरिष्ठ नागरिकों के लिए शुल्क मुक्त; प्रशासनिक अधिकरण प्रक्रिया।'
        },
        scope: 'national',
        evidence: {
          status: 'verified',
          primary_source_title: 'Senior Citizens Act, 2007 Sec 5 & 23',
          primary_source_url: 'https://indiacode.gov.in/',
          pinpoint: 'Sec 5 (maintenance application); Sec 23 (eviction); Sec 9 (no fee for senior citizens)',
          checked_on: '2026-10-15'
        }
      }
    ],
    timeline_info: [
      {
        id: 'time-family-02-senior-duration',
        kind: 'indicative_estimate',
        label: {
          en: 'Senior citizen maintenance & eviction processing time',
          bn: 'প্রবীণ নাগরিক খোরপোশ ও উচ্ছেদ প্রক্রিয়ার সময়',
          hi: 'वरिष्ठ नागरिक भरण-पोषण एवं बेदखली प्रक्रिया की अवधि'
        },
        value_description: {
          en: 'Statutory 60-90 working days for SDO/Collector Tribunal order; police execution of eviction adds 15-30 days.',
          bn: 'এসডিও/কালেক্টর ট্রাইব্যুনালের আদেশের জন্য ৬০-৯০ কার্যদিবস; পুলিশি উচ্ছেদে ১৫-৩০ দিন যুক্ত।',
          hi: 'एसडीओ/कलेक्टर अधिकरण के आदेश के लिए ६०-९० कार्यदिवस; पुलिस द्वारा बेदखली में १५-३० दिन अतिरिक्त।'
        },
        scope: 'national',
        evidence: {
          status: 'verified',
          primary_source_title: 'Senior Citizens Act, 2007 Sec 5, 9, 23',
          primary_source_url: 'https://indiacode.gov.in/',
          pinpoint: 'Sec 5 (60-90 day disposal); Sec 9 (no fee); Sec 23 (eviction); tribunal disposal data 2024',
          checked_on: '2026-10-15'
        }
      }
    ],
    required_documents: [
      {
        id: 'doc-family-02-1',
        name: { en: 'Age Proof (60+) & Self-Acquired House Title Deed / Porcha', bn: 'বয়সের প্রমাণপত্র ও বাড়ির দলিল বা পর্চা', hi: 'आयु प्रमाणपत्र (60+) एवं निजी मकान का विलेख/पर्चा' },
        issuing_authority: { en: 'Election Commission / BL&LRO', bn: 'নির্বাচন কমিশন / ভূমি দপ্তর', hi: 'निर्वाचन आयोग / राजस्व विभाग' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-03',
    productCategory: 'lawyer-only',
    title: {
      en: 'Domestic Violence Protection & Shared Residence',
      bn: 'পারিবারিক হিংসা প্রতিরোধ ও শ্বশুরবাড়িতে থাকার অধিকার',
      hi: 'घरेलू हिंसा से महिला संरक्षण एवं साझा घर में रहने का अधिकार'
    },
    relevant_act: 'Sec 12, 18, 19 & 20, PWDVA, 2005',
    summary: {
      en: 'Magistrate protection orders against domestic abuse, shared household residence rights, and interim monetary relief.',
      bn: 'শ্বশুরবাড়িতে শারীরিক বা মানসিক অত্যাচার প্রতিরোধ, ঘর থেকে বের করে দেওয়া আটকানো ও ক্ষতিপূরণ মামলা।',
      hi: 'ससुराल में मारपीट या प्रताड़ना के विरुद्ध कानूनी संरक्षण, घर में रहने का अधिकार एवं आर्थिक राहत पाना।'
    },
    authority_forum: {
      en: 'Court of Judicial Magistrate / Protection Officer',
      bn: 'জুডিশিয়াল ম্যাজিস্ট্রেট আদালত / প্রোটেকশন অফিসার',
      hi: 'न्यायिक दंडाधिकारी न्यायालय / संरक्षण अधिकारी'
    },
    forum_type: 'Magistrate_Court',
    is_complex: false,
    official_portal_url: 'https://ecourts.gov.in/',
    statutory_timeframe: {
      en: 'Hearing within 3 days; disposal within 60 days',
      bn: '৩ দিনে প্রথম শুনানি; ৬০ দিনে নিষ্পত্তি',
      hi: '3 दिन में प्रथम सुनवाई; 60 दिन में निस्तारण'
    },
    search_keywords: {
      en: ['domestic violence section 12', 'shared household residence order', 'pwdva protection officer'],
      bn: ['পারিবারিক হিংসা মামলা', 'শ্বশুরবাড়িতে থাকার অধিকার', 'ডিভি অ্যাক্ট খোরপোশ'],
      hi: ['घरेलू हिंसा संरक्षण', 'साझा घर में निवास आदेश', 'डीवी एक्ट गुजारा भत्ता']
    },
    territory_track: 'Universal',
    fees: [
      {
        id: 'fee-family-03-dv',
        kind: 'authority_calculated',
        label: {
          en: 'PWDVA Section 12 Application Filing Fee',
          bn: 'ডিভি অ্যাক্ট ধারা ১২ আবেদন দাখিল ফি',
          hi: 'डीवी एक्ट धारा 12 आवेदन दाखिला शुल्क'
        },
        formula_description: {
          en: 'No court fee for PWDVA protection orders under Sec 12; only nominal process fee. Confirm current rate at Magistrate Court before filing.',
          bn: 'পিডি ভি এ আইনের ধারা ১২ অনুযায়ী প্রোটেকশন অর্ডারের জন্য কোর্ট ফি নেই; শুধু প্রসেস ফি। দাখিলের আগে ম্যাজিস্ট্রেট কোর্টে ফি যাচাই করুন।',
          hi: 'डीवी एक्ट की धारा 12 के तहत प्रोटेक्शन ऑर्डर के लिए कोर्ट फीस नहीं; केवल प्रक्रिया शुल्क। दाखिले से पहले मजिस्ट्रेट कोर्ट में शुल्क जांचें।'
        },
        conditions: {
          en: 'PWDVA Sec 12 explicitly waives court fees for women applicants; process fee varies by district.',
          bn: 'পিডি ভি এ আইনের ধারা ১২ স্ত্রীদের জন্য কোর্ট ফি মওকূফ করে; প্রসেস ফি জেলা অনুযায়ী।',
          hi: 'डीवी एक्ट की धारा 12 महिलाओं के लिए कोर्ट फीस माफ करती है; प्रक्रिया शुल्क जिले अनुसार।'
        },
        scope: 'national',
        evidence: {
          status: 'verified',
          primary_source_title: 'Protection of Women from Domestic Violence Act, 2005 Sec 12',
          primary_source_url: 'https://indiacode.gov.in/',
          pinpoint: 'PWDVA 2005 Sec 12(2) (no court fee); CrPC Sec 125 parallel for monetary relief',
          checked_on: '2026-10-15'
        }
      }
    ],
    timeline_info: [
      {
        id: 'time-family-03-dv-duration',
        kind: 'indicative_estimate',
        label: {
          en: 'Domestic violence protection order processing time',
          bn: 'পারিবারিক হিংসা প্রোটেকশন অর্ডার প্রক্রিয়ার সময়',
          hi: 'घरेलू हिंसा संरक्षण आदेश प्रक्रिया की अवधि'
        },
        value_description: {
          en: 'Statutory 3-day first hearing; interim Residence Order (Sec 19) within 60 days; final disposal typically 3-6 months.',
          bn: 'আইনি ৩ দিনে প্রথম শুনানি; অন্তর্বর্তী রেসিডেন্স অর্ডার (ধারা ১৯) ৬০ দিনে; চূড়ান্ত নিষ্পত্তি সাধারণত ৩-৬ মাসে।',
          hi: 'वैधानिक ३ दिन में प्रथम सुनवाई; अंतरिम निवास आदेश (धारा 19) ६० दिन में; अंतिम निस्तारण आमतौर पर ३-६ माह।'
        },
        scope: 'national',
        evidence: {
          status: 'verified',
          primary_source_title: 'Protection of Women from Domestic Violence Act, 2005 Sec 12, 18, 19, 20',
          primary_source_url: 'https://indiacode.gov.in/',
          pinpoint: 'PWDVA Sec 12 (3-day hearing); Sec 19 (residence order); Sec 20 (monetary relief); disposal data 2024',
          checked_on: '2026-10-15'
        }
      }
    ],
    roadmap_steps: {
      en: [
        'Approach District Protection Officer to prepare Domestic Incident Report (DIR).',
        'File Application under Section 12 PWDVA before Judicial Magistrate praying for urgent orders.',
        'Obtain interim Residence Order (Sec 19) barring husband/in-laws from dispossessing woman.',
        'Magistrate directs Protection Officer and police to break locks and restore woman entry if locked out.'
      ],
      bn: [
        'জেলা প্রোটেকশন অফিসারের কাছে গিয়ে ডোমেস্টিক ইনসিডেন্ট রিপোর্ট (DIR) প্রস্তুত করান।',
        'ম্যাজিস্ট্রেট আদালতে ধারা ১২ অনুযায়ী পারিবারিক হিংসা মামলা করে জরুরি আদেশের আবেদন দিন।',
        'ধারা ১৯ অনুযায়ী রেসিডেন্স অর্ডার নিন যাতে শ্বশুরবাড়ি থেকে কোনোভাবেই বের করে দেওয়া না যায়।',
        'ম্যাজিস্ট্রেট নির্দেশ দেবেন পুলিশ ও প্রোটেকশন অফিসারকে গিয়ে তালা ভেঙে বধূকে ঘরে ঢুকিয়ে দিতে।'
      ],
      hi: [
        'जिला संरक्षण अधिकारी से मिलकर घरेलू घटना रिपोर्ट (DIR) विधिवत तैयार कराएं।',
        'न्यायिक मजिस्ट्रेट के समक्ष धारा 12 डीवी एक्ट में सुरक्षा एवं भरण-पोषण की याचिका दें।',
        'धारा 19 के तहत साझा घर में सुरक्षित रहने का निवास आदेश (Residence Order) प्राप्त करें।',
        'मजिस्ट्रेट पुलिस बल को मौके पर भेजकर ताला तुड़वाकर महिला का शांतिपूर्ण प्रवेश कराएंगे।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-03-1',
        name: { en: 'Domestic Incident Report (DIR) / Medical Injury Slips', bn: 'ডোমেস্টিক ইনসিডেন্ট রিপোর্ট (DIR) ও ডাক্তারি চিকিৎসার প্রেসক্রিপশন', hi: 'घरेलू घटना रिपोर्ट (DIR) एवं चोट की मेडिकल पर्चियां' },
        issuing_authority: { en: 'Protection Officer / Government Hospital', bn: 'প্রোটেকশন অফিসার / হাসপাতাল', hi: 'संरक्षण अधिकारी / अस्पताल' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-04',
    productCategory: 'lawyer-only',
    title: {
      en: 'Mutual Consent Divorce & Settlement (Sec 13B)',
      bn: 'পারস্পরিক সম্মতিতে বিবাহবিচ্ছেদ ও নিষ্পত্তি (Sec 13B)',
      hi: 'पारस्परिक सहमति से विवाह विच्छेद (तलाक) एवं समझौता (धारा 13B)'
    },
    relevant_act: 'Sec 13B, Hindu Marriage Act, 1955',
    summary: {
      en: 'Dignified consensual divorce through joint petition settling permanent alimony, child custody, and stridhan.',
      bn: 'উভয়ের সম্মতিতে শান্তিপূর্ণ বিবাহবিচ্ছেদ; এককালীন খোরপোশ, সন্তানের দায়িত্ব ও স্ত্রীধন হস্তান্তরের আইনি প্রক্রিয়া।',
      hi: 'पति-पत्नी की रजामंदी से सौहार्दपूर्ण तलाक; स्थायी गुजारा भत्ता, स्त्रीधन एवं बच्चों की जिम्मेदारी का अंतिम निपटारा।'
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
      en: '6 months (waivable on cooling-off application)',
      bn: '৬ মাস (আবেদনের ভিত্তিতে মকুবযোগ্য)',
      hi: '6 माह (शीतलन अवधि छूट योग्य)'
    },
    search_keywords: {
      en: ['mutual divorce 13b hma', 'waive 6 months cooling off period', 'mutual divorce alimony settlement'],
      bn: ['পারস্পরিক সম্মতিতে ডিভোর্স', 'ধারা ১৩বি বিবাহবিচ্ছেদ', 'আপস বিবাহবিচ্ছেদ'],
      hi: ['आपसी सहमति से तलाक', 'धारा 13B हिंदू विवाह', 'आपसी रजामंदी तलाक']
    },
    territory_track: 'Universal',
    fees: [
      {
        id: 'fee-family-04-mutual',
        kind: 'authority_calculated',
        label: {
          en: 'Section 13B HMA Mutual Consent Divorce Filing Fee',
          bn: 'ধারা ১৩বি এইচএমএ আপস বিবাহবিচ্ছেদ দাখিল ফি',
          hi: 'धारा 13B एचएमए आपसी सहमति तलाक दाखिला शुल्क'
        },
        formula_description: {
          en: 'Family Court filing fee for joint petition under HMA Sec 13B; varies by district. Confirm current rate at Family Court registry before filing.',
          bn: 'পারিবারিক আদালতে যৌথ পিটিশনের ফি; জেলা অনুযায়ী ভিন্ন। দাখিলের আগে পারিবারিক আদালত রেজিস্ট্রিতে ফি যাচাই করুন।',
          hi: 'पारिवारिक न्यायालय में संयुक्त याचिका का शुल्क; जिले अनुसार भिन्न। दाखिले से पहले पारिवारिक न्यायालय रजिस्ट्री में शुल्क जांचें।'
        },
        conditions: {
          en: 'Joint petition filing fee; separate from lawyer fees and stamp duty on MoU.',
          bn: 'যৌথ পিটিশনের ফি; আইনজীবীর ফি ও এমওউ-র স্ট্যাম্প ডিউটি আলাদা।',
          hi: 'संयुक्त याचिका का शुल्क; वकील का शुल्क और MoU का स्टांप शुल्क अलग।'
        },
        scope: 'state_wb',
        evidence: {
          status: 'verified',
          primary_source_title: 'Hindu Marriage Act, 1955 Sec 13B & WB Court Fees Act 1970',
          primary_source_url: 'https://wbjudicial.gov.in/',
          pinpoint: 'HMA Sec 13B(1); WB Court Fees Act 1970 Schedule I (Family Court fees); Amardeep Singh v. Harveen Kaur (2017) cooling-off waiver',
          checked_on: '2026-10-15'
        }
      }
    ],
    timeline_info: [
      {
        id: 'time-family-04-mutual-duration',
        kind: 'indicative_estimate',
        label: {
          en: 'Mutual consent divorce processing time',
          bn: 'আপস বিবাহবিচ্ছেদ প্রক্রিয়াকরণের সময়',
          hi: 'आपसी सहमति तलाक प्रक्रिया की अवधि'
        },
        value_description: {
          en: 'Statutory 6-month cooling-off (waivable per Amardeep Singh); with waiver 30-60 days; without waiver 6-8 months.',
          bn: 'আইনি ৬ মাস কুলিং-অফ (আমারদীপ সিংহ রুলিং অনুযায়ী মকুবযোগ্য); মকুব পেলে ৩০-৬০ দিন; মকুব ছাড়া ৬-৮ মাস।',
          hi: 'वैधानिक ६ माह कूलिंग-ऑफ (अमरदीप सिंह फैसले के तहत माफी योग्य); माफी पर ३०-६० दिन; बिना माफी ६-८ माह।'
        },
        scope: 'state_wb',
        evidence: {
          status: 'verified',
          primary_source_title: 'Hindu Marriage Act, 1955 Sec 13B & Amardeep Singh v. Harveen Kaur (2017)',
          primary_source_url: 'https://indiacode.gov.in/',
          pinpoint: 'HMA Sec 13B(2) (6 months); Amardeep Singh (2017) 8 SCC 746 (waiver); Family Court WB data 2024',
          checked_on: '2026-10-15'
        }
      }
    ],
    roadmap_steps: {
      en: [
        'Draft joint Memorandum of Understanding (MoU) settling permanent alimony and custody.',
        'File Joint Petition for First Motion under Section 13B(1) HMA before Family Court.',
        'Move waiver application under Amardeep Singh ruling to dispense with the 6-month cooling-off wait.',
        'Appear for Second Motion hearing; judge signs decree dissolving marital ties permanently.'
      ],
      bn: [
        'খোরপোশের এককালীন টাকা, বাচ্চার হেফাজত ও গয়না ফেরত লিখে যৌথ সমঝোতাপত্র (MoU) করুন।',
        'পারিবারিক আদালতে ধারা ১৩বি(১) অনুযায়ী প্রথম মোশনের যৌথ পিটিশন দাখিল করুন।',
        'সুপ্রিম কোর্টের নির্দেশ দেখিয়ে ৬ মাসের কুলিং-অফ সময় মকুবের আবেদন পেশ করুন।',
        'দ্বিতীয় মোশনে উভয় পক্ষ হাজিরা দিলে বিচারক স্থায়ী বিবাহবিচ্ছেদের ডিক্রি মঞ্জুর করবেন।'
      ],
      hi: [
        'स्थायी गुजारा भत्ता, बच्चे की कस्टडी एवं स्त्रीधन वापसी का लिखित समझौता (MoU) तैयार करें।',
        'पारिवारिक न्यायालय में धारा 13B(1) के तहत प्रथम प्रस्ताव (First Motion) की संयुक्त अर्जी दें।',
        'सुप्रीम कोर्ट के अमरदीप सिंह फैसले के तहत 6 माह की प्रतीक्षा अवधि माफ करने का आवेदन दें।',
        'द्वितीय प्रस्ताव पर उपस्थित होकर अंतिम बयान दर्ज कराएं; अदालत तलाक की अंतिम डिक्री देगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-04-1',
        name: { en: 'Marriage Certificate & Bilateral Settlement Memorandum (MoU)', bn: 'ম্যারেজ সার্টিফিকেট ও দ্বিপাক্ষিক আপস চুক্তিপত্র (MoU)', hi: 'विवाह प्रमाणपत्र एवं द्विपक्षीय समझौता ज्ञापन (MoU)' },
        issuing_authority: { en: 'Marriage Registrar / Parties', bn: 'বিবাহ নিবন্ধক / পক্ষগণ', hi: 'विवाह पंजीयक / पक्षकार' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-05',
    productCategory: 'lawyer-only',
    title: {
      en: 'Child Custody & Interim Visitation Rights',
      bn: 'নাবালক সন্তানের হেফাজত ও পিতা-মাতার সাক্ষাতের অধিকার',
      hi: 'नाबालिग बच्चे की अभिरक्षा (कस्टडी) एवं मिलने का अधिकार (विजिटेशन)'
    },
    relevant_act: 'Guardians and Wards Act, 1890',
    summary: {
      en: 'Adjudicating physical custody and weekend visitation based primarily on the best interests and welfare of the child.',
      bn: 'পারিবারিক কলহে নাবালক সন্তানের থাকা-খাওয়া ও অভিভাবকত্ব নির্ধারণ এবং অপর পক্ষের সপ্তাহে দেখা করার অধিকার।',
      hi: 'तलाक या अलगाव की स्थिति में बच्चे के सर्वोत्तम कल्याण के आधार पर कस्टडी एवं मिलने का अदालती अधिकार।'
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
      en: '3 to 6 months (Interim visitation in 15 days)',
      bn: '৩ থেকে ৬ মাস (১৫ দিনে অন্তর্বর্তী সাক্ষাতের আদেশ)',
      hi: '3 से 6 माह (15 दिन में अंतरिम मिलने का आदेश)'
    },
    search_keywords: {
      en: ['child custody petition gwa', 'weekend visitation rights child', 'welfare of child paramount custody'],
      bn: ['সন্তানের হেফাজত মামলা', 'সন্তানের সাথে দেখা করার অধিকার', 'গার্ডিয়ানস অ্যান্ড ওয়ার্ডস অ্যাক্ট'],
      hi: ['बच्चे की कस्टडी वाद', 'विजिटेशन राइट्स पिता', 'अभिभावकत्व एवं प्रतिपाल्य कानून']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'File Custody Petition under Section 7 & 25 Guardians and Wards Act before Family Court.',
        'Move urgent interim application under Section 12 for weekend physical visitation and video calls.',
        'Judge interacts privately with minor child in judicial chamber to assess emotional bonding.',
        'Court passes final custody decree, awarding shared parenting or structured visitation schedule.'
      ],
      bn: [
        'গার্ডিয়ানস অ্যান্ড ওয়ার্ডস অ্যাক্টের ধারা ৭ ও ২৫ অনুযায়ী পারিবারিক আদালতে হেফাজত মামলা করুন।',
        'শনিবার-রবিবার দেখা করা ও ভিডিও কলের অনুমতি চেয়ে ধারা ১২-তে জরুরি আবেদন দিন।',
        'বিচারক নিজের চেম্বারে বাচ্চার সাথে একা কথা বলে তার মানসিক অনুভূতি ও পছন্দের মূল্যায়ন করবেন।',
        'সন্তানের উজ্জ্বল ভবিষ্যৎ ও মঙ্গলের দিকটি প্রাধান্য দিয়ে আদালত চূড়ান্ত হেফাজত ও সাক্ষাতের রুটিন ঠিক করবে।'
      ],
      hi: [
        'अभिभावक एवं प्रतिपाल्य अधिनियम की धारा 7 व 25 में पारिवारिक न्यायालय में कस्टडी वाद करें।',
        'सप्ताहांत में मिलने एवं वीडियो कॉल हेतु धारा 12 में आपात अंतरिम याचिका दाखिल करें।',
        'न्यायाधीश अपने कक्ष में बच्चे से अकेले बातचीत कर उसकी भावना एवं लगाव का आकलन करेंगे।',
        'बच्चे के सर्वांगीण विकास को ध्यान में रखकर अदालत कस्टडी एवं मिलने की समय-सारिणी तय करेगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-05-1',
        name: { en: 'Child Municipal Birth Certificate & School Progress Records', bn: 'সন্তানের জন্ম সনদ ও স্কুলের প্রোগ্রেস রিপোর্ট', hi: 'बच्चे का जन्म प्रमाणपत्र एवं स्कूल का प्रगति पत्र' },
        issuing_authority: { en: 'Municipality / School Headmaster', bn: 'পুরসভা / স্কুল প্রধান শিক্ষক', hi: 'नगर पालिका / विद्यालय' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-06',
    productCategory: 'lawyer-only',
    title: {
      en: 'Contested Divorce on Mental Cruelty & Desertion',
      bn: 'মানসিক নিষ্ঠুরতা ও পরিত্যাগের ভিত্তিতে বিবাহবিচ্ছেদ',
      hi: 'मानसिक क्रूरता एवं परित्याग (छोड़ देने) के आधार पर एकतरफा तलाक'
    },
    relevant_act: 'Sec 13(1)(i-a) & (i-b), Hindu Marriage Act, 1955',
    summary: {
      en: 'Filing contested divorce proving unbearable mental agony, false police cases, or uninterrupted 2-year desertion.',
      bn: 'অসহনীয় মানসিক নির্যাতন, মিথ্যা মামলা দেওয়া বা টানা ২ বছর ঘর ছেড়ে চলে যাওয়ার কারণে একতরফা বিবাহবিচ্ছেদ মামলা।',
      hi: 'लगातार मानसिक प्रताड़ना, झूठे मुकदमों या 2 वर्ष से अधिक समय तक त्याग दिए जाने पर तलाक का वाद।'
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
      en: '1 to 3 years',
      bn: '১ থেকে ৩ বছর',
      hi: '1 से 3 वर्ष'
    },
    search_keywords: {
      en: ['contested divorce cruelty', 'desertion 2 years hma', 'section 13 1 i a divorce'],
      bn: ['মানসিক নিষ্ঠুরতা ডিভোর্স', 'বিবাহবিচ্ছেদ মামলা', 'পরিত্যাগের ভিত্তিতে ডিভোর্স'],
      hi: ['क्रूरता के आधार पर तलाक', 'परित्याग तलाक वाद', 'धारा 13 हिंदू विवाह कानून']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Document instances of cruelty: audio/video proof, medical injury slips, or police complaints.',
        'File Divorce Petition under Section 13(1) before jurisdictional Family Court.',
        'Court refers parties to mandatory mediation under Section 9 Family Courts Act to explore reconciliation.',
        'If mediation fails, trial proceeds; court examines witnesses and passes dissolution decree.'
      ],
      bn: [
        'নিষ্ঠুরতার প্রমাণ জোগাড় করুন: কল রেকর্ড, চ্যাট, প্রেসক্রিপশন বা মিথ্যা মামলার কাগজপত্র।',
        'এক্তিয়ারভুক্ত পারিবারিক আদালতে ধারা ১৩(১) অনুযায়ী বিবাহবিচ্ছেদের পিটিশন দাখিল করুন।',
        'পারিবারিক আদালত আইনের ধারা ৯ মেনে আপসের সুযোগ খুঁজতে মধ্যস্থতা কেন্দ্রে (Mediation) পাঠানো হবে।',
        'মীমাংসা না হলে সাক্ষ্যগ্রহণ পর্ব শুরু হবে এবং নিষ্ঠুরতা প্রমাণিত হলে আদালত বিবাহবিচ্ছেদের ডিক্রি দেবে।'
      ],
      hi: [
        'क्रूरता के ठोस प्रमाण जुटाएं: चैट, कॉल रिकॉर्डिंग, अस्पताल पर्चियां या झूठे मुकदमों की प्रतियां।',
        'पारिवारिक न्यायालय के समक्ष धारा 13(1) के तहत तलाक की विस्तृत याचिका दाखिल करें।',
        'धारा 9 के तहत अदालत दोनों पक्षों को अनिवार्य सुलह हेतु मध्यस्थता केंद्र भेजेगी।',
        'मध्यस्थता विफल होने पर गवाही प्रक्रिया चलेगी और क्रूरता सिद्ध होने पर विवाह विच्छेद की डिक्री होगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-06-1',
        name: { en: 'Marriage Photographs / Card & Documented Evidence of Cruelty', bn: 'বিয়ের ছবি বা কার্ড ও অত্যাচারের তথ্যপ্রমাণ', hi: 'विवाह का फोटो / कार्ड एवं क्रूरता के दस्तावेजी साक्ष्य' },
        issuing_authority: { en: 'Petitioner', bn: 'বাদী', hi: 'याचिकाकर्ता' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-07',
    productCategory: 'free-checklist',
    title: {
      en: 'Restitution of Conjugal Rights (RCR - Sec 9 HMA)',
      bn: 'দাম্পত্য অধিকার পুনরুদ্ধার (RCR) ও সংসার ফেরত',
      hi: 'दांपत्य अधिकारों की पुनर्स्थापना (RCR) एवं पत्नी/पति को वापस बुलाना'
    },
    relevant_act: 'Sec 9, Hindu Marriage Act, 1955',
    summary: {
      en: 'Petitioning court to direct a spouse who withdrew from society without reasonable excuse to return to cohabitation.',
      bn: 'কোনো সঙ্গত কারণ ছাড়া স্ত্রী বা স্বামী বাপের বাড়ি চলে গিয়ে সংসার না করলে আদালতে ফিরিয়ে আনার আইনি মামলা।',
      hi: 'बिना उचित कारण अलग रह रहे जीवनसाथी को घर वापस बुलाने एवं वैवाहिक जीवन पुनः शुरू करने का अदालती वाद।'
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
      en: ['section 9 hma rcr', 'restitution of conjugal rights petition', 'bring wife back legal notice'],
      bn: ['দাম্পত্য অধিকার পুনরুদ্ধার', 'সংসার ফেরানোর মামলা', 'আরসিআর ধারা ৯'],
      hi: ['दांपत्य अधिकार बहाली', 'धारा 9 हिंदू विवाह', 'आरसीआर याचिका']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Serve formal legal notice expressing affection and requesting spouse return home within 15 days.',
        'File Petition under Section 9 HMA before Family Court establishing lack of reasonable excuse.',
        'Court conducts counseling and conciliation sessions to remove misunderstandings.',
        'If spouse fails to prove justifiable excuse, court passes decree for restitution of conjugal rights.'
      ],
      bn: [
        'সংসার করার আগ্রহ জানিয়ে এবং ১৫ দিনের মধ্যে বাড়ি ফিরে আসার অনুরোধ করে উকিল নোটিশ পাঠান।',
        'পারিবারিক আদালতে ধারা ৯ অনুযায়ী দাম্পত্য অধিকার পুনরুদ্ধারের আরজি দাখিল করুন।',
        'আদালতের কাউন্সেলর উভয় পক্ষকে ডেকে ভুল বোঝাবুঝি দূর করার জন্য সমঝোতা বৈঠক করাবেন।',
        'অন্য পক্ষ আলাদা থাকার কোনো বৈধ কারণ দেখাতে না পারলে আদালত সংসার করার ডিক্রি মঞ্জুর করবে।'
      ],
      hi: [
        'अधिवक्ता के माध्यम से 15 दिन में घर वापस आकर वैवाहिक जीवन शुरू करने का विधिक नोटिस भेजें।',
        'पारिवारिक न्यायालय में धारा 9 के तहत दांपत्य अधिकारों की बहाली की याचिका दें।',
        'अदालत के काउंसलर दोनों पक्षों की काउंसलिंग कर गिले-शिकवे दूर कराने का प्रयास करेंगे।',
        'अलग रहने का कोई ठोस कारण न साबित होने पर अदालत दांपत्य जीवन पुनः शुरू करने की डिक्री देगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-07-1',
        name: { en: 'Marriage Certificate & Statutory RCR Requisition Notice', bn: 'বিবাহের শংসাপত্র ও সংসার ফেরতের নোটিশ কপি', hi: 'विवाह प्रमाणपत्र एवं वापसी मांग का विधिक नोटिस' },
        issuing_authority: { en: 'Marriage Registrar / Advocate', bn: 'বিবাহ নিবন্ধক / আইনজীবী', hi: 'विवाह पंजीयक / अधिवक्ता' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-08',
    productCategory: 'lawyer-only',
    title: {
      en: 'Interim Maintenance Pendente Lite & Legal Costs',
      bn: 'মামলা চলাকালীন অন্তর্বর্তী খোরপোশ ও খরচের দাবি',
      hi: 'मुकदमा चलने के दौरान अंतरिम गुजारा भत्ता एवं अदालती खर्च (धारा 24)'
    },
    relevant_act: 'Sec 24, Hindu Marriage Act (Rajnesh v. Neha)',
    summary: {
      en: 'Securing immediate litigation expenses and monthly living allowance during pendency of matrimonial litigation.',
      bn: 'বিবাহ সংক্রান্ত মামলা চলাকালীন আইনজীবী ফি ও দৈনন্দিন খরচ চালানোর জন্য অন্তর্বর্তী খরচের আদালতের আদেশ।',
      hi: 'तलाक या अन्य मुकदमे के दौरान वकील की फीस एवं मासिक खर्च चलाने हेतु तुरंत अंतरिम गुजारा भत्ता पाना।'
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
      en: ['section 24 hma interim maintenance', 'litigation expenses matrimonial case', 'pendente lite maintenance order'],
      bn: ['অন্তর্বর্তী খোরপোশ ধারা ২৪', 'মামলা চালানোর খরচ দাবি', 'পেনডেন্টে লাইট খোরপোশ'],
      hi: ['धारा 24 अंतरिम गुजारा भत्ता', 'मुकदमा खर्च मांग', 'पेंडेंटे लाइट मेंटेनेंस']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'File application under Section 24 HMA in active divorce or RCR proceedings.',
        'Submit statutory Disclosure of Assets & Income Affidavit per Supreme Court mandate.',
        'Demonstrate applicant lacks independent income to maintain themselves and litigate.',
        'Judge orders respondent to pay lump-sum legal costs and monthly maintenance within 60 days.'
      ],
      bn: [
        'চলমান ডিভোর্স বা আরসিআর মামলায় হিন্দু বিবাহ আইনের ধারা ২৪ অনুযায়ী অন্তর্বর্তী খরচের আবেদন করুন।',
        'সুপ্রিম কোর্টের নির্দেশ মেনে নিজের ও স্বামীর আয়ের বিস্তারিত অ্যাসেট ডিক্লারেশন দিন।',
        'আদালতে প্রমাণ করুন বাদীর মামলা চালানোর বা গ্রাসাচ্ছাদনের নিজস্ব কোনো স্বাধীন রোজগার নেই।',
        'বিচারক অপর পক্ষকে এককালীন মামলার খরচ এবং প্রতি মাসের নির্দিষ্ট অন্তর্বর্তী খোরপোশ মেটানোর আদেশ দেবেন।'
      ],
      hi: [
        'चल रहे तलाक या आरसीआर केस में धारा 24 एचएमए के तहत अंतरिम खर्चे का आवेदन दें।',
        'सुप्रीम कोर्ट के निर्देशानुसार दोनों पक्षों की आय एवं परिसंपत्तियों का शपथ पत्र प्रस्तुत करें।',
        'साबित करें कि याचिकाकर्ता के पास मुकदमा लड़ने और जीवन-यापन का कोई स्वतंत्र साधन नहीं है।',
        'न्यायाधीश 60 दिन में विपक्षी को एकमुश्त कानूनी खर्च एवं मासिक भरण-पोषण चुकाने का आदेश देंगे।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-08-1',
        name: { en: 'Affidavit of Assets & Liabilities with Bank Statements', bn: 'সম্পত্তি ও আয়ের হলফনামা এবং ব্যাঙ্ক বিবরণী', hi: 'आय एवं संपत्ति का विस्तृत शपथ पत्र व बैंक स्टेटमेंट' },
        issuing_authority: { en: 'Applicant / Bank', bn: 'বাদী / ব্যাঙ্ক', hi: 'याचिकाकर्ता / बैंक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-09',
    productCategory: 'paid',
    title: {
      en: 'Special Marriage Act, 1954 Registration & Notice',
      bn: 'স্পেশাল ম্যারেজ অ্যাক্টে বিয়ে ও সামাজিক বাধা সুরক্ষা',
      hi: 'विशेष विवाह अधिनियम (कोर्ट मैरिज) पंजीकरण एवं सामाजिक सुरक्षा'
    },
    relevant_act: 'Sec 4, 5, 15 & 16, Special Marriage Act, 1954',
    summary: {
      en: 'Civil marriage registration for consenting adults across different religions without religious conversion.',
      bn: 'ধর্ম পরিবর্তন না করে ভিন্ন ধর্মের প্রাপ্তবয়স্ক যুগলের আইনি রেজিস্ট্রি বিয়ে ও সামাজিক বাধার বিরুদ্ধে সুরক্ষা।',
      hi: 'धर्म बदले बिना विभिन्न धर्मों के बालिग जोड़ों का कानूनी विवाह पंजीकरण एवं परिजनों के विरोध से सुरक्षा।'
    },
    authority_forum: {
      en: 'Office of the District Marriage Officer',
      bn: 'জেলা বিবাহ নিবন্ধকের কার্যালয়',
      hi: 'जिला विवाह अधिकारी कार्यालय'
    },
    forum_type: 'Competent_Authority',
    official_portal_url: 'https://wbregistration.gov.in/',
    statutory_timeframe: {
      en: '30 days statutory notice window',
      bn: '৩০ দিনের বিধিবদ্ধ নোটিশের মেয়াদ',
      hi: '30 दिन की वैधानिक नोटिस अवधि'
    },
    search_keywords: {
      en: ['special marriage act registration', 'court marriage process wb', '30 days notice marriage officer'],
      bn: ['কোর্ট ম্যারেজ স্পেশাল ম্যারেজ অ্যাক্ট', 'রেজিস্ট্রি বিয়ে নিয়মাবলী', 'বিবাহ নিবন্ধক নোটিশ'],
      hi: ['स्पेशल मैरिज कोर्ट मैरिज', 'कोर्ट मैरिज प्रक्रिया', 'विवाह अधिकारी 30 दिन नोटिस']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Submit joint Notice of Intended Marriage (Form-II) before District Marriage Officer.',
        'Notice published at office for 30 days inviting statutory legal objections (e.g. unsound mind).',
        'Upon expiry of 30 days without valid objection, couple appears with 3 witnesses.',
        'Marriage solemnized and signed; Marriage Officer issues permanent Special Marriage Certificate.'
      ],
      bn: [
        'জেলা বিবাহ নিবন্ধকের কাছে বিয়ে করার ইচ্ছা জানিয়ে ফর্ম-২ নোটিশ যৌথভাবে জমা দিন।',
        'অফিসের নোটিশ বোর্ডে ৩০ দিনের জন্য বিজ্ঞপ্তি ঝুলবে যাতে কোনো আইনি বাধা আছে কি না দেখা যায়।',
        '৩০ দিন পার হলে কোনো আপত্তি না থাকলে ৩ জন সাক্ষীকে সঙ্গে নিয়ে দম্পতি হাজির হবেন।',
        'স্বাক্ষর পর্ব শেষে বিবাহ নিবন্ধক স্থায়ী ও সর্বজনীনভাবে বৈধ স্পেশাল ম্যারেজ সার্টিফিকেট প্রদান করবেন।'
      ],
      hi: [
        'जिला विवाह अधिकारी के समक्ष फॉर्म-II में विवाह की सूचना का संयुक्त नोटिस जमा करें।',
        'विवाह कार्यालय के नोटिस बोर्ड पर 30 दिनों तक वैधानिक आपत्तियां आमंत्रित की जाएंगी।',
        '30 दिन बीतने पर कोई वैध आपत्ति न होने पर 3 गवाहों सहित विवाह अधिकारी के समक्ष पेश हों।',
        'हस्ताक्षर संपन्न होने पर विवाह अधिकारी स्थायी विशेष विवाह प्रमाणपत्र जारी करेंगे।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-09-1',
        name: { en: 'Age Proof (Bride 18+, Groom 21+) & 30-Day Residence Proof', bn: 'বয়সের প্রমাণপত্র ও ৩০ দিন বসবাসের প্রমাণ', hi: 'आयु प्रमाणपत्र (दुल्हन 18+, दूल्हा 21+) व 30 दिन का निवास प्रमाण' },
        issuing_authority: { en: 'Election Commission / Municipality', bn: 'নির্বাচন কমিশন / পুরসভা', hi: 'निर्वाचन आयोग / नगर पालिका' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-10',
    productCategory: 'lawyer-only',
    title: {
      en: 'Muslim Divorced Women Maintenance & Dower (Mahr)',
      bn: 'মুসলিম তালাকপ্রাপ্ত মহিলার দেনমোহর ও খোরপোশ',
      hi: 'मुस्लिम तलाकशुदा महिला का भरण-पोषण एवं मेहर (Mahr) वसूली'
    },
    relevant_act: 'Muslim Women (Protection of Rights on Divorce) Act, 1986',
    summary: {
      en: 'Securing lifetime fair provision, return of unpaid dower (Mahr), and maintenance beyond the Iddat period under Danial Latifi.',
      bn: 'সুপ্রিম কোর্টের দানিয়াল লতিফি রায় মেনে ইদ্দতকালের পরেও আজীবন সম্মানজনক জীবনযাত্রার এককালীন বা মাসিক খোরপোশ।',
      hi: 'दानियाल लतीफी फैसले के तहत इद्दत अवधि के बाद भी आजीवन भरण-पोषण एवं बकाया मेहर की पूरी वसूली।'
    },
    authority_forum: {
      en: 'Court of Judicial Magistrate / Family Court',
      bn: 'জুডিশিয়াল ম্যাজিস্ট্রেট আদালত / পারিবারিক আদালত',
      hi: 'न्यायिक दंडाधिकारी न्यायालय / फैमिली कोर्ट'
    },
    forum_type: 'Family_Court',
    is_complex: false,
    official_portal_url: 'https://ecourts.gov.in/',
    statutory_timeframe: {
      en: '60 working days',
      bn: '৬০ কার্যদিবস',
      hi: '60 कार्यदिवस'
    },
    search_keywords: {
      en: ['muslim women divorce act 1986', 'danial latifi supreme court', 'mahr recovery maintenance'],
      bn: ['মুসলিম তালাকপ্রাপ্তা খোরপোশ', 'দেনমোহর আদায়', 'দানিয়াল লতিফি রায়'],
      hi: ['मुस्लिम महिला तलाक भरण पोषण', 'मेहर वसूली वाद', 'दानियाल लतीफी फैसला']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'File an application under Section 3 of the 1986 Act before the Judicial Magistrate.',
        'Claim unpaid prompt/deferred dower (Mahr), return of wedding gifts, and maintenance.',
        'Cite Danial Latifi (SC) confirming liability to make reasonable provision for woman lifetime.',
        'Magistrate orders former husband to pay full dower and lump-sum lifetime fair provision in 30 days.'
      ],
      bn: [
        'ম্যাজিস্ট্রেট আদালতে ১৯৮৬ সালের মুসলিম নারী সুরক্ষা আইনের ধারা ৩ অনুযায়ী আবেদন দাখিল করুন।',
        'বকেয়া দেনমোহর (Mahr), বিয়ের সময় পাওয়া সমস্ত উপহার সামগ্রী ও খোরপোশের টাকা দাবি করুন।',
        'সুপ্রিম কোর্টের দানিয়াল লতিফি নজির তুলে ধরে আজীবন বেঁচে থাকার ন্যায্য ব্যবস্থার নির্দেশ চান।',
        'ম্যাজিস্ট্রেট ৩০ দিনের মধ্যে সমস্ত দেনমোহর এবং এককালীন আজীবন খরচের টাকা পরিশোধের আদেশ দেবেন।'
      ],
      hi: [
        'न्यायिक मजिस्ट्रेट के समक्ष 1986 अधिनियम की धारा 3 के तहत औपचारिक याचिका दें।',
        'अदालत से बकाया मेहर, शादी में मिले सामान एवं आजीवन जीवन-यापन के खर्च की मांग करें।',
        'दानियाल लतीफी फैसले का हवाला देकर साबित करें कि पति आजीवन भरण-पोषण हेतु उत्तरदायी है।',
        'मजिस्ट्रेट पूर्व पति को 30 दिनों में पूरा मेहर एवं एकमुश्त आजीवन गुजारा भत्ता देने का आदेश देंगे।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-10-1',
        name: { en: 'Nikahnama (Marriage Contract) Stating Agreed Mahr Amount', bn: 'দেনমোহরের অঙ্ক উল্লেখিত মূল নিকাহনামা', hi: 'मेहर राशि दर्ज मूल निकाहनामा' },
        issuing_authority: { en: 'Registered Muslim Marriage Registrar (Kazi)', bn: 'মুসলিম বিবাহ কাজী', hi: 'काजी कार्यालय' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-11',
    productCategory: 'lawyer-only',
    title: {
      en: 'Distress Warrants & Civil Jail for Unpaid Maintenance',
      bn: 'খোরপোশের বকেয়া টাকা আদায়ে ওয়ারেন্ট ও জেল হেফাজত',
      hi: 'गुजारा भत्ता बकाया होने पर गिरफ्तारी वारंट एवं सिविल जेल'
    },
    relevant_act: 'Sec 144(3), BNSS, 2023',
    summary: {
      en: 'Enforcing execution warrants and committing defaulting husbands to jail for up to 1 month for every unpaid month.',
      bn: 'আদালতের আদেশের পরও স্বামী খোরপোশের টাকা না দিলে সম্পত্তি ক্রোক, গ্রেফতারি পরোয়ানা ও ১ মাসের জেল হেফাজত।',
      hi: 'अदालत के आदेश के बाद भी भरण-पोषण न देने पर पति की संपत्ति कुर्क कराना एवं हर महीने के बकाए पर 1 माह जेल।'
    },
    authority_forum: {
      en: 'Family Court / Judicial Magistrate Court',
      bn: 'পারিবারিক আদালত / জুডিশিয়াল ম্যাজিস্ট্রেট আদালত',
      hi: 'पारिवारिक न्यायालय / न्यायिक मजिस्ट्रेट'
    },
    forum_type: 'Family_Court',
    is_complex: false,
    official_portal_url: 'https://ecourts.gov.in/',
    statutory_timeframe: {
      en: 'Enforceable within 1 year of default',
      bn: 'বকেয়া হওয়ার ১ বছরের মধ্যে কার্যকরযোগ্য',
      hi: 'बकाया होने के 1 वर्ष के भीतर लागू'
    },
    search_keywords: {
      en: ['distress warrant maintenance', 'jail for not paying maintenance', 'section 144 3 bnss execution'],
      bn: ['খোরপোশ বকেয়া ওয়ারেন্ট', 'টাকা না দিলে স্বামীর জেল', 'ধারা ১৪৪(৩) এক্সিকিউশন'],
      hi: ['गुजारा भत्ता वसूली वारंट', 'भरण पोषण न देने पर जेल', 'धारा 144(3) बीएनएसएस']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Prepare itemized calculation sheet listing accumulated arrears and defaulted court dates.',
        'File an Execution Petition under Section 144(3) BNSS praying for issuance of distress warrant.',
        'Court issues non-bailable Distress Warrant (DW) to police to arrest husband or attach assets.',
        'If husband refuses to liquidate dues, judge commits him to prison for up to 1 month per default.'
      ],
      bn: [
        'প্রতি মাসের হিসাব ও বকেয়া টাকার বিস্তারিত বিবরণী তৈরি করে আদালতে দাখিল করুন।',
        'ধারা ১৪৪(৩) বিএনএসএস অনুযায়ী ডিস্ট্রেস ওয়ারেন্ট জারির জন্য এক্সিকিউশন পিটিশন করুন।',
        'আদালত পুলিশকে জামিন-অযোগ্য গ্রেফতারি পরোয়ানা বা স্বামীর সম্পত্তি ক্রোকের নির্দেশ দেবে।',
        'টাকা দিতে অস্বীকার করলে বিচারক প্রতি মাসের বকেয়ার জন্য স্বামীকে ১ মাস পর্যন্ত জেলে আটক রাখবেন।'
      ],
      hi: [
        'माहवार बकाया राशि एवं चूक की तारीखों का विस्तृत विवरण पत्र तैयार करें।',
        'धारा 144(3) बीएनएसएस के तहत वसूली वारंट जारी कराने हेतु निष्पादन याचिका दें।',
        'अदालत पुलिस को गैर-जमानती गिरफ्तारी वारंट या संपत्ति कुर्की का वारंट जारी करेगी।',
        'बकाया न चुकाने पर अदालत पति को प्रत्येक माह के बकाए हेतु 1 माह तक सिविल जेल में बंद करेगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-11-1',
        name: { en: 'Certified Copy of Maintenance Order & Arrears Calculation Sheet', bn: 'খোরপোশের মূল আদেশ ও বকেয়া টাকার হিসাবপত্র', hi: 'मूल भरण-पोषण आदेश एवं बकाया राशि का गणना पत्र' },
        issuing_authority: { en: 'Family Court / Magistrate Court', bn: 'পারিবারিক আদালত', hi: 'पारिवारिक न्यायालय' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-12',
    productCategory: 'free-checklist',
    title: {
      en: 'Stridhan Jewelry Seizure & Recovery Petition',
      bn: 'স্ত্রীধন ও বিয়ের গয়নাগাটি জোরপূর্বক আটকে রাখলে উদ্ধার',
      hi: 'स्त्रीधन, सोने के गहने एवं शादी का सामान वापस पाने की याचिका'
    },
    relevant_act: 'Sec 19(8) PWDVA r/w Sec 316 BNS (Breach of Trust)',
    summary: {
      en: 'Directing police search and seizure of in-laws house to recover gold ornaments and bridal gifts belonging to woman.',
      bn: 'শ্বশুরবাড়ি থেকে তাড়িয়ে দিয়ে সোনার গয়না আটকে রাখলে ম্যাজিস্ট্রেটের নির্দেশে সার্চ ওয়ারেন্টে স্ত্রীধন উদ্ধার।',
      hi: 'ससुराल वालों द्वारा हड़पे गए सोने के जेवर, नकदी व सामान को सर्च वारंट द्वारा पुलिस की मदद से वापस लेना।'
    },
    authority_forum: {
      en: 'Judicial Magistrate Court / Family Court',
      bn: 'জুডিশিয়াল ম্যাজিস্ট্রেট আদালত / পারিবারিক আদালত',
      hi: 'न्यायिक दंडाधिकारी न्यायालय / फैमिली कोर्ट'
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
      en: ['stridhan recovery petition', 'section 19 8 pwdva stridhan', 'police search warrant jewelry in laws'],
      bn: ['স্ত্রীধন উদ্ধার মামলা', 'বিয়ের গয়না ফেরত', 'ধারা ১৯(৮) ডিভি অ্যাক্ট'],
      hi: ['स्त्रीधन वापसी याचिका', 'ससुराल से जेवर बरामदगी', 'धारा 19(8) घरेलू हिंसा']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Prepare itemized inventory of jewelry, cash, and electronic gifts handed over during marriage.',
        'File an urgent application under Section 19(8) PWDVA praying for restitution of stridhan.',
        'Submit wedding photographs, video logs, and jeweler invoices establishing ownership.',
        'Magistrate directs Protection Officer and police to execute search and return seized gold.'
      ],
      bn: [
        'বিয়ের সময় দেওয়া সমস্ত গয়না, নগদ টাকা ও আসবাবপত্রের একটি বিশদ তালিকা বানান।',
        'পারিবারিক হিংসা আইনের ধারা ১৯(৮) অনুযায়ী স্ত্রীধন ফেরতের জরুরি আবেদন পেশ করুন।',
        'বিয়ের ছবি, ভিডিও ও স্বর্ণকারের রসিদ আদালতে জমা দিয়ে নিজের মালিকানা প্রমাণ করুন।',
        'ম্যাজিস্ট্রেট প্রোটেকশন অফিসার ও পুলিশকে শ্বশুরবাড়িতে তল্লাশি চালিয়ে গয়না উদ্ধারের নির্দেশ দেবেন।'
      ],
      hi: [
        'विवाह में दिए गए सभी जेवरात, नकदी एवं उपहारों की विस्तृत सूची तैयार करें।',
        'घरेलू हिंसा अधिनियम की धारा 19(8) में स्त्रीधन वापसी का आपात आवेदन दाखिल करें।',
        'विवाह के फोटो, वीडियो एवं आभूषणों के पक्के बिल संलग्न कर अपना स्वामित्व सिद्ध करें।',
        'मजिस्ट्रेट पुलिस एवं संरक्षण अधिकारी को ससुराल में तलाशी लेकर जेवर बरामदगी का आदेश देंगे।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-12-1',
        name: { en: 'Jewelry Purchase Invoices & Photographs of Bride Wearing Stridhan', bn: 'গয়না কেনার বিল ও গয়না পরা অবস্থায় কনের ছবি', hi: 'गहने खरीद के बिल एवं जेवर पहने हुए दुल्हन के फोटो' },
        issuing_authority: { en: 'Jeweler / Complainant', bn: 'স্বর্ণকার / বাদী', hi: 'जौहरी / याचिकाकर्ता' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-13',
    productCategory: 'lawyer-only',
    title: {
      en: 'Maintenance for Major Unmarried Daughters (College Fees)',
      bn: 'প্রাপ্তবয়স্ক অবিবাহিত কন্যার পড়াশোনা ও বিয়ের খরচ',
      hi: 'वयस्क अविवाहित बेटियों की कॉलेज पढ़ाई एवं शादी के खर्च की मांग'
    },
    relevant_act: 'Sec 20(3), Hindu Adoptions & Maintenance Act, 1956',
    summary: {
      en: 'Enforcing liability of wealthy fathers to pay university education and marriage expenses for daughters even after age 18.',
      bn: 'মেয়ে ১৮ বছর পার হলেও বিয়ে না হওয়া পর্যন্ত ধনী পিতার কাছ থেকে উচ্চশিক্ষার খরচ ও বিয়ের ব্যয় আদায়।',
      hi: '18 वर्ष की आयु के बाद भी अविवाहित बेटी की कॉलेज फीस एवं विवाह खर्च पिता से दिलाने का कानूनी अधिकार।'
    },
    authority_forum: {
      en: 'Family Court / Civil Court',
      bn: 'পারিবারিক আদালত / দেওয়ানি আদালত',
      hi: 'पारिवारिक न्यायालय / सिविल कोर्ट'
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
      en: ['major unmarried daughter maintenance', 'section 20 3 hama daughter college fees', 'father paying marriage expenses daughter'],
      bn: ['অবিবাহিত কন্যার খোরপোশ', 'কলেজের ফি বাবার থেকে আদায়', 'ধারা ২০(৩) হামা'],
      hi: ['अविवाहित वयस्क बेटी गुजारा भत्ता', 'धारा 20(3) हामा कॉलेज फीस', 'पिता से शादी का खर्च']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'File suit under Section 20(3) of HAMA before Family Court establishing inability to maintain self.',
        'Submit college admission fee structure, semester costs, and professional degree invoices.',
        'Produce father income proofs: ITRs, business company holdings, and bank statements.',
        'Court orders father to deposit college fees directly and sets aside corpus for marriage.'
      ],
      bn: [
        'হামা আইনের ধারা ২০(৩) অনুযায়ী পারিবারিক আদালতে মামলা করে স্বাবলম্বী না হওয়ার প্রমাণ দিন।',
        'বিশ্ববিদ্যালয় বা কলেজের সেমিস্টার ফি, বইপত্র ও হোস্টেলের খরচের বিবরণ আদালতে দিন।',
        'পিতার সচ্ছলতা ও ব্যবসার প্রমাণস্বরূপ আইটি রিটার্ন বা ব্যাঙ্ক স্টেটমেন্ট দাখিল করুন।',
        'আদালত পিতাকে সরাসরি কলেজের ফি দেওয়ার নির্দেশ দেবে এবং বিয়ের জন্য আলাদা তহবিল বরাদ্দ করাবে।'
      ],
      hi: [
        'हामा कानून की धारा 20(3) के तहत पारिवारिक न्यायालय में आत्मनिर्भर न होने का वाद करें।',
        'कॉलेज फीस, सेमेस्टर खर्च एवं हॉस्टल का अधिकृत ब्योरा अदालत में प्रस्तुत करें।',
        'पिता की वित्तीय हैसियत साबित करने हेतु उनके आईटीआर, व्यापार एवं बैंक खाते पेश करें।',
        'अदालत पिता को सीधे कॉलेज फीस भरने का आदेश देगी एवं शादी हेतु अलग फंड तय करेगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-13-1',
        name: { en: 'University Fee Structure & Daughter Unmarried Affidavit', bn: 'বিশ্ববিদ্যালয়ের ফি কাঠামো ও অবিবাহিত থাকার হলফনামা', hi: 'कॉलेज फीस संरचना एवं अविवाहित होने का शपथ पत्र' },
        issuing_authority: { en: 'University Authority / Notary Public', bn: 'বিশ্ববিদ্যালয় / নোটারি', hi: 'विश्वविद्यालय / नोटरी' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-14',
    productCategory: 'free-checklist',
    title: {
      en: 'Paternity Disputes & Forensic DNA Testing Petitions',
      bn: 'পিতৃত্ব নির্ধারণ ও আদালতের মাধ্যমে ডিএনএ (DNA) টেস্ট',
      hi: 'पितृत्व विवाद एवं अदालत द्वारा फॉरेंसिक डीएनए (DNA) टेस्ट'
    },
    relevant_act: 'Sec 114, Bharatiya Sakshya Adhiniyam, 2023 r/w Supreme Court Norms',
    summary: {
      en: 'Strict standards for judicial DNA testing orders: husband must prove strong prima facie non-access to rebut legitimacy presumption.',
      bn: 'স্বামীর পিতৃপরিচয় অস্বীকারের বিরুদ্ধে শিশুর ভবিষ্যৎ সুরক্ষায় আদালতের মাধ্যমে ডিএনএ পরীক্ষার আইনি পদ্ধতি।',
      hi: 'अदालत से डीएनए टेस्ट का आदेश; पति को पत्नी से पूर्ण शारीरिक दूरी (Non-access) का पुख्ता सबूत देना होगा।'
    },
    authority_forum: {
      en: 'Family Court / High Court at Calcutta',
      bn: 'পারিবারিক আদালত / কলকাতা হাইকোর্ট',
      hi: 'पारिवारिक न्यायालय / कलकत्ता उच्च न्यायालय'
    },
    forum_type: 'Family_Court',
    is_complex: true,
    official_portal_url: 'https://calcuttahighcourt.gov.in/',
    statutory_timeframe: {
      en: '3 to 6 months (CFSL laboratory timeline)',
      bn: '৩ থেকে ৬ মাস (সিএফএসএল ল্যাব রিপোর্ট)',
      hi: '3 से 6 माह (फॉरेंसिक लैब रिपोर्ट)'
    },
    search_keywords: {
      en: ['dna test paternity dispute', 'section 114 bsa presumption legitimacy', 'aparna ajinkya firodia dna ruling'],
      bn: ['ডিএনএ টেস্ট আদালত', 'পিতৃত্ব অস্বীকার মামলা', 'ধারা ১১৪ সাক্ষ্য আইন'],
      hi: ['डीएनए टेस्ट पितृत्व विवाद', 'धारा 114 बीएसए वैधता', 'डीएनए जांच कोर्ट आदेश']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Party denying paternity must establish prima facie evidence of physical non-access during conception.',
        'File an interim application praying for scientific DNA test under Section 114 BSA.',
        'Family Court balances child welfare; tests are never ordered as a fishing or roving inquiry.',
        'Blood samples drawn under court custody and tested at Government CFSL lab for definitive report.'
      ],
      bn: [
        'পিতৃত্ব অস্বীকারকারীকে প্রমাণ করতে হবে গর্ভধারণের সময় স্ত্রীর সাথে কোনো শারীরিক সম্পর্ক ছিল না।',
        'ভারতীয় সাক্ষ্য আইনের ধারা ১১৪ অনুযায়ী বৈজ্ঞানিক ডিএনএ টেস্টের জন্য আদালতে আবেদন করুন।',
        'আদালত শিশুর মানসিক স্বার্থ খতিয়ে দেখে সিদ্ধান্ত নেবে; নিছক সন্দেহের বশে পরীক্ষা মঞ্জুর হয় না।',
        'আদালতের নজরদারিতে রক্তের নমুনা নিয়ে সরকারি ল্যাবরেটরিতে (CFSL) পাঠিয়ে চূড়ান্ত রিপোর্ট নেওয়া হবে।'
      ],
      hi: [
        'पितृत्व नकारने वाले पति को साबित करना होगा कि गर्भधारण के दौरान उसका पत्नी से कोई संपर्क नहीं था।',
        'बीएसए 2023 की धारा 114 के तहत वैज्ञानिक डीएनए जांच हेतु अंतरिम अर्जी दाखिल करें।',
        'अदालत बच्चे के मानसिक हित को प्राथमिकता देगी; मात्र शंका के आधार पर टेस्ट नहीं दिया जाता।',
        'अदालत की निगरानी में रक्त नमूने लेकर केंद्रीय फॉरेंसिक लैब (CFSL) से अंतिम रिपोर्ट मंगाई जाएगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-14-1',
        name: { en: 'Affidavit Proving Non-Access During Conception Period', bn: 'গর্ভধারণকালে দূরত্বে থাকার প্রামাণ্য হলফনামা', hi: 'गर्भधारण अवधि में अनुपस्थिति सिद्ध करने का शपथ पत्र' },
        issuing_authority: { en: 'Family Court / Employer Records', bn: 'আদালত / কর্মস্থল', hi: 'अदालत / नियोक्ता' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-15',
    productCategory: 'paid',
    title: {
      en: 'High Court Police Protection for Runaway Couples',
      bn: 'প্রেম করে বিয়ে করা দম্পতিদের হাইকোর্ট থেকে সুরক্ষা',
      hi: 'प्रेम विवाह करने वाले बालिग जोड़ों को हाईकोर्ट से पुलिस सुरक्षा'
    },
    relevant_act: 'Article 226, Constitution of India (Lata Singh SC)',
    summary: {
      en: 'Immediate 24-hour police escort and safehouse directions against honor killing threats from parents or vigilantes.',
      bn: 'পরিবারের অমতে ভালোবেসে বিয়ে করা প্রাপ্তবয়স্ক ছেলে-মেয়েদের অনার কিলিং বা হুমকি থেকে হাইকোর্ট নিরাপত্তা।',
      hi: 'परिजनों की धमकियों एवं ऑनर किलिंग के खतरे से बचने हेतु बालिग विवाहित जोड़ों को हाईकोर्ट से पुलिस सुरक्षा।'
    },
    authority_forum: {
      en: 'High Court at Calcutta (Appellate Side)',
      bn: 'কলকাতা হাইকোর্ট (অ্যাপেলেট সাইড)',
      hi: 'कलकत्ता उच्च न्यायालय (अपीलीय शाखा)'
    },
    forum_type: 'High_Court',
    is_complex: false,
    official_portal_url: 'https://calcuttahighcourt.gov.in/',
    statutory_timeframe: {
      en: 'Emergency (Hearing within 24 to 48 hours)',
      bn: 'জরুরি (২৪ থেকে ৪৮ ঘণ্টার মধ্যে)',
      hi: 'अति आवश्यक (24 से 48 घंटे में)'
    },
    search_keywords: {
      en: ['runaway couple police protection', 'lata singh supreme court', 'intercaste marriage protection writ'],
      bn: ['প্রেমের বিয়েতে পুলিশ সুরক্ষা', 'হাইকোর্ট প্রোটেকশন রিট', 'লতা সিং রায়'],
      hi: ['प्रेम विवाह पुलिस सुरक्षा', 'हाईकोर्ट सुरक्षा याचिका', 'लता सिंह फैसला']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Verify age proof establishing bride is 18+ and groom is 21+ with registered marriage proof.',
        'File emergency Writ Petition (Art 226) before High Court Bench citing life threats.',
        'Court interacts with couple to confirm free consent and absence of coercion or abduction.',
        'High Court directs Superintendent of Police (SP) to provide 24/7 protection.'
      ],
      bn: [
        'মেয়ের বয়স ১৮+ ও ছেলের বয়স ২১+ হওয়ার প্রামাণ্য নথি ও রেজিস্ট্রি বিয়ের সার্টিফিকেট একত্র করুন।',
        'জীবনের ঝুঁকির বিবরণ দিয়ে কলকাতা হাইকোর্টে অনুচ্ছেদ ২২৬ অনুযায়ী জরুরি রিট পিটিশন করুন।',
        'বিচারক যুগলের সাথে সরাসরি কথা বলে স্বেচ্ছায় বিয়ে হয়েছে কি না তা নিশ্চিত করবেন।',
        'হাইকোর্ট অবিলম্বে সংশ্লিষ্ট পুলিশ সুপারকে (SP) নির্দেশ দিয়ে ২৪ ঘণ্টার নিরাপত্তা নিশ্চিত করবে।'
      ],
      hi: [
        'लड़की की उम्र 18+ एवं लड़के की 21+ होने के दस्तावेज व शादी का वैध प्रमाणपत्र साथ रखें।',
        'जान के खतरे का हवाला देकर कलकत्ता हाईकोर्ट में अनुच्छेद 226 के तहत आपात रिट याचिका करें।',
        'न्यायाधीश जोड़े से बातचीत कर सुनिश्चित करेंगे कि विवाह बिना किसी दबाव के अपनी मर्जी से हुआ है।',
        'उच्च न्यायालय तुरंत संबंधित जिले के पुलिस अधीक्षक को 24 घंटे सुरक्षा उपलब्ध कराने का आदेश देगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-15-1',
        name: { en: 'Government Age Proofs of Couple & Marriage Registration Certificate', bn: 'বয়সের সরকারি পরিচয়পত্র ও ম্যারেজ সার্টিফিকেট', hi: 'दोनों के आयु प्रमाणपत्र एवं विवाह पंजीकरण प्रमाणपत्र' },
        issuing_authority: { en: 'Election Commission / Marriage Registrar', bn: 'নির্বাচন কমিশন / বিবাহ নিবন্ধক', hi: 'निर्वाचन आयोग / विवाह पंजीयक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-16',
    productCategory: 'free-checklist',
    title: {
      en: 'Annulment of Marriage on Fraud, Impotency & Concealment',
      bn: 'প্রতারণা, অক্ষমতা ও গোপন রোগের কারণে বিয়ে বাতিল (Sec 12 HMA)',
      hi: 'धोखाधड़ी, नपुंसकता या बीमारी छिपाने के आधार पर विवाह शून्यता'
    },
    relevant_act: 'Sec 12, Hindu Marriage Act, 1955',
    summary: {
      en: 'Nullifying marriages within 1 year where consent was procured by concealing prior marriage, unsoundness of mind, or impotency.',
      bn: 'আগের বিয়ে, শারীরিক অক্ষমতা বা গুরুতর রোগ গোপন করে বিয়ে করলে এক বছরের মধ্যে বিয়ে বাতিল করার নিয়ম।',
      hi: 'पहली शादी, गंभीर मानसिक रोग या नपुंसकता छिपाकर की गई शादी को 1 वर्ष के भीतर अदालत से रद्द कराना।'
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
      en: 'Mandatory filing within 1 year of discovering fraud',
      bn: 'প্রতারণা জানার ১ বছরের মধ্যে বাধ্যতামূলক মামলা',
      hi: 'धोखाधड़ी की जानकारी के 1 वर्ष में अनिवार्य'
    },
    search_keywords: {
      en: ['annulment of marriage section 12', 'voidable marriage fraud concealment', 'nullity of marriage impotency'],
      bn: ['বিয়ে বাতিল মামলা', 'প্রতারণামূলক বিবাহ ধারা ১২', 'নপুংসকতা বিয়ে বাতিল'],
      hi: ['विवाह शून्यता याचिका', 'धारा 12 अमान्य शादी', 'धोखाधड़ी विवाह निरस्तीकरण']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Collate medical records, prior marriage certificates, or psychiatric diagnoses establishing fraud.',
        'File petition for Annulment of Voidable Marriage under Section 12 HMA within 1 year.',
        'Prove that petitioner did not voluntarily cohabit after discovering the fraud.',
        'Family Court passes Decree of Nullity, declaring marriage void as if it never occurred.'
      ],
      bn: [
        'পূর্ববর্তী বিয়ের প্রমাণ, চিকিৎসাজনিত অপারগতা বা মানসিক রোগের প্রামাণ্য রিপোর্ট জোগাড় করুন।',
        'প্রতারণা জানার এক বছরের মধ্যে ধারা ১২ এইচএমএ অনুযায়ী পারিবারিক আদালতে মামলা দায়ের করুন।',
        'আদালতে প্রমাণ করুন প্রতারণা জানার পর স্বেচ্ছায় কোনো শারীরিক সম্পর্ক স্থাপন করা হয়নি।',
        'পারিবারিক আদালত ডিক্রি অব নালিটি পাস করে বিয়েটিকে সম্পূর্ণ অস্তিত্বহীন ও বাতিল ঘোষণা করবে।'
      ],
      hi: [
        'पूर्व विवाह प्रमाणपत्र, चिकित्सकीय जांच रिपोर्ट या मानसिक रोग के मेडिकल साक्ष्य जुटाएं।',
        'धोखाधड़ी सामने आने के 1 साल के भीतर धारा 12 में विवाह निरस्तीकरण की याचिका दें।',
        'अदालत में साबित करें कि सच्चाई जानने के बाद कोई शारीरिक संबंध नहीं बनाए गए।',
        'फैमिली कोर्ट डिक्री ऑफ नलिटी देकर शादी को प्रारंभ से ही अमान्य व शून्य घोषित करेगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-16-1',
        name: { en: 'Medical Diagnostics / Prior Marriage Records Proving Fraud', bn: 'প্রতারণা প্রমাণের মেডিকেল রিপোর্ট বা পূর্ববর্তী বিয়ের নথি', hi: 'धोखाधड़ी साबित करने वाली मेडिकल रिपोर्ट या पूर्व विवाह दस्तावेज' },
        issuing_authority: { en: 'Medical Board / Marriage Registrar', bn: 'মেডিকেল বোর্ড / বিবাহ নিবন্ধক', hi: 'चिकित्सा बोर्ड / विवाह पंजीयक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-17',
    productCategory: 'lawyer-only',
    title: {
      en: 'Nullity of Void Marriages (Bigamy & Sapinda Relations)',
      bn: 'অসিদ্ধ বিবাহ বাতিল ও আইনগত অবৈধ ঘোষণা (Sec 11 HMA)',
      hi: 'शून्य विवाह (द्विविवाह एवं सपिंड संबंध) को अमान्य घोषित कराना'
    },
    relevant_act: 'Sec 11 & Sec 5(i), (iv), (v), Hindu Marriage Act, 1955',
    summary: {
      en: 'Declaring marriages null and void ab initio where a living spouse was concealed (bigamy) or parties were within prohibited sapinda degrees.',
      bn: 'প্রথম স্ত্রী বা স্বামী জীবিত থাকা সত্ত্বেও দ্বিতীয় বিয়ে করলে কিংবা নিষিদ্ধ রক্তের সম্পর্কে বিয়ে হলে তা আইনত অবৈধ ঘোষণা।',
      hi: 'पहली पत्नी/पति के जीवित रहते दूसरी शादी करने या सपिंड रिश्ते में विवाह को कानूनन शून्य घोषित कराना।'
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
      en: '6 months to 1.5 years',
      bn: '৬ মাস থেকে ১.৫ বছর',
      hi: '6 माह से 1.5 वर्ष'
    },
    search_keywords: {
      en: ['void marriage section 11 hma', 'bigamy declaration nullity', 'sapinda marriage invalid'],
      bn: ['অসিদ্ধ বিয়ে ধারা ১১', 'দ্বিবিবাহ বাতিল মামলা', 'সপিণ্ড সম্পর্ক বিয়ে'],
      hi: ['शून्य विवाह धारा 11', 'द्विविवाह अमान्य वाद', 'सपिंड विवाह निरस्तीकरण']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Collect subsistence proof of spouse previous living partner (registered marriage certificate and voter ID).',
        'File Petition for Declaration of Nullity under Section 11 of the Hindu Marriage Act.',
        'Prove that the marriage violated Section 5(i) (spouse living) or Section 5(v) (sapinda lineage).',
        'Court passes Decree of Nullity confirming the marriage was legally non-existent from inception.'
      ],
      bn: [
        'বিবাদীর পূর্ববর্তী স্বামী বা স্ত্রী জীবিত থাকার প্রমাণপত্র (রেজিস্ট্রি সার্টিফিকেট ও ভোটার তালিকা) সংগ্রহ করুন।',
        'হিন্দু বিবাহ আইনের ধারা ১১ অনুযায়ী বিবাহটি সম্পূর্ণ অবৈধ ঘোষণার মামলা দায়ের করুন।',
        'আদালতে প্রমাণ করুন বিবাহটি ধারা ৫(১) (দ্বিবিবাহ) বা ধারা ৫(৫) (নিষিদ্ধ সপিণ্ড রক্ত) লঙ্ঘন করেছে।',
        'আদালত ডিক্রি অব নালিটি জারি করে বিয়েটিকে শুরু থেকেই আইনত অস্তিত্বহীন ঘোষণা করবে।'
      ],
      hi: [
        'प्रतिवादी के पूर्व पति/पत्नी के जीवित होने के ठोस दस्तावेज (विवाह प्रमाणपत्र व वोटर कार्ड) जुटाएं।',
        'हिंदू विवाह अधिनियम की धारा 11 के तहत विवाह को शून्य घोषित करने की याचिका दाखिल करें।',
        'अदालत में सिद्ध करें कि विवाह धारा 5(i) (द्विविवाह) या धारा 5(v) (सपिंड संबंध) का खुला उल्लंघन है।',
        'अदालत विवाह को प्रारंभ से ही पूर्णतः अमान्य घोषित करने वाली डिक्री जारी करेगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-17-1',
        name: { en: 'Proof of Prior Subsisting Marriage of Spouse', bn: 'স্বামীর বা স্ত্রীর পূর্ববর্তী বিয়ের প্রামাণ্য নথি', hi: 'प्रतिवादी के पूर्व जीवित विवाह के आधिकारिक साक्ष्य' },
        issuing_authority: { en: 'Marriage Registrar / Municipal Corporation', bn: 'বিবাহ নিবন্ধক / পুরসভা', hi: 'विवाह पंजीयक / नगर निगम' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-18',
    productCategory: 'lawyer-only',
    title: {
      en: 'Injunction Against Forced Child Marriage',
      bn: 'নাবালিকা মেয়ের বাল্যবিবাহ প্রতিরোধে ম্যাজিস্ট্রেটের স্থগিতাদেশ',
      hi: 'नाबालिग बच्ची का जबरन बाल विवाह रोकने हेतु अदালती रोक (इंजंक्शन)'
    },
    relevant_act: 'Sec 13, Prohibition of Child Marriage Act, 2006 (PCMA)',
    summary: {
      en: 'Emergency injunctions and police protection stopping child marriage ceremonies upon petition by citizen or NGO.',
      bn: '১৮ বছরের কম বয়সী মেয়েকে জোর করে বিয়ে দেওয়ার চেষ্টা হলে ম্যাজিস্ট্রেটের হস্তক্ষেপে বিয়ে বন্ধ ও নিরাপত্তা।',
      hi: 'नाबालिग बच्चों की जबरन शादी कराने पर अदालत द्वारा समारोह पर तत्काल रोक एवं पुलिस सुरक्षा।'
    },
    authority_forum: {
      en: 'Judicial Magistrate Court / Child Welfare Committee (CWC)',
      bn: 'জুডিশিয়াল ম্যাজিস্ট্রেট আদালত / শিশু কল্যাণ সমিতি (CWC)',
      hi: 'न्यायिक दंडाधिकारी न्यायालय / बाल कल्याण समिति'
    },
    forum_type: 'Magistrate_Court',
    is_complex: false,
    official_portal_url: 'https://wbja.nic.in/',
    statutory_timeframe: {
      en: 'Emergency (Immediate within 12 hours)',
      bn: 'জরুরি (১২ ঘণ্টার মধ্যে কার্যকর)',
      hi: 'अति आवश्यक (12 घंटे के भीतर रोक)'
    },
    search_keywords: {
      en: ['stop child marriage injunction', 'section 13 pcma childline 1098', 'minor girl forced marriage rescue'],
      bn: ['বাল্যবিবাহ বন্ধের আদেশ', 'চাইল্ডলাইন ১০৯৮', 'নাবালিকার বিয়ে রদ'],
      hi: ['बाल विवाह रोक आदेश', 'चाइल्डलाइन 1098', 'धारा 13 बाल विवाह निषेध']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Minor, relative, or NGO lodges urgent petition before Judicial Magistrate or Childline (1098).',
        'Produce birth certificate or school admission register proving girl is under 18 or boy under 21.',
        'Magistrate issues ex-parte Injunction Order under Section 13 PCMA prohibiting ceremony.',
        'Local police and Child Welfare Officers halt ceremony and place child under safe foster care.'
      ],
      bn: [
        'নাবালিকা নিজে বা কোনো সমাজকর্মী জুডিশিয়াল ম্যাজিস্ট্রেট বা চাইল্ডলাইনে (১০৯৮) যোগাযোগ করুন।',
        'স্কুল রেকর্ড বা বার্থ সার্টিফিকেট দাখিল করে প্রমাণ করুন পাত্রী ১৮ বা পাত্র ২১ বছরের কম।',
        'ম্যাজিস্ট্রেট বাল্যবিবাহ আইনের ধারা ১৩ অনুযায়ী বিবাহ অনুষ্ঠান আয়োজনের ওপর নিষেধাজ্ঞা জারি করবেন।',
        'পুলিশ ও চাইল্ড ওয়েলফেয়ার অফিসাররা বিয়ে বন্ধ করে শিশুকে সুরক্ষিত হোমে আশ্রয় দেবে।'
      ],
      hi: [
        'नाबालिग स्वयं अथवा कोई भी नागरिक मजिस्ट्रेट अथवा चाइल्डलाइन 1098 पर तत्काल सूचना दे।',
        'स्कूल अंकपत्र या जन्म प्रमाणपत्र पेश कर साबित करें कि लड़की 18 वर्ष से कम आयु की है।',
        'मजिस्ट्रेट धारा 13 पीसीएमए के तहत विवाह समारोह पर तुरंत रोक का एकपक्षीय आदेश देंगे।',
        'पुलिस एवं बाल कल्याण अधिकारी विवाह रुकवाकर बच्चे को सुरक्षित संरक्षण में लेंगे।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-18-1',
        name: { en: 'School Headmaster Age Certificate / Municipal Birth Certificate', bn: 'স্কুলের প্রধান শিক্ষকের বয়সের সার্টিফিকেট বা জন্ম সনদ', hi: 'स्कूल प्रधानाध्यापक द्वारा आयु प्रमाणपत्र या जन्म प्रमाणपत्र' },
        issuing_authority: { en: 'School Authority / Registrar of Births', bn: 'বিদ্যালয় / পুরসভা', hi: 'विद्यालय / नगर पालिका' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-19',
    productCategory: 'free-checklist',
    title: {
      en: 'High Court Quashing of Malicious 498A Dowry FIRs',
      bn: 'শ্বশুর-শাশুড়ির বিরুদ্ধে মিথ্যা পণ বধূ নির্যাতন মামলা বাতিল',
      hi: 'ससुराल वालों पर दर्ज झूठे दहेज उत्पीड़न (498A) केस को हाईकोर्ट से रद्द कराना'
    },
    relevant_act: 'Sec 528 BNSS r/w Arnesh Kumar & Preeti Gupta (SC)',
    summary: {
      en: 'Quashing criminal dowry cruelty FIRs where married sisters-in-law or elderly in-laws living in separate cities were falsely implicated.',
      bn: 'আলাদা বাড়িতে থাকা ননদ বা বৃদ্ধ শ্বশুর-শাশুড়ির নামে হয়রানিমূলক ৪৯৮এ ও পণ বধূ নির্যাতন মামলা হাইকোর্টে বাতিল।',
      hi: 'दूर रहने वाली ननद या वृद्ध सास-ससुर पर दुर्भावना से दर्ज कराई गई 498A एफआईआर को उच्च न्यायालय से रद्द कराना।'
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
      en: ['quash 498a high court', 'section 528 bnss 498a quashing', 'arnesh kumar guidelines dowry'],
      bn: ['মিথ্যা ৪৯৮এ বাতিল', 'বধূ নির্যাতন মামলা খারিজ হাইকোর্ট', 'অর্ণেশ কুমার নির্দেশিকা'],
      hi: ['498A एफआईआर रद्द', 'धारा 528 बीएनएसएस दहेज केस', 'अर्णेश कुमार फैसला']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Collect residence records (leases, utility bills, out-of-state jobs) proving separate living.',
        'File Criminal Miscellaneous Quashing Petition under Section 528 BNSS before High Court.',
        'Highlight vague, omnibus allegations without specific dates, times, or overt physical acts.',
        'High Court stays arrest, exempts personal trial appearance, and quashes criminal proceedings.'
      ],
      bn: [
        'ভাড়া চুক্তি বা চাকরির নথি দিয়ে প্রমাণ করুন শ্বশুর-শাশুড়ি বা ননদ আলাদা শহরে বা পৃথক ঠিকানায় থাকেন।',
        'কলকাতা হাইকোর্টে ধারা ৫২৮ বিএনএসএস অনুযায়ী মিথ্যা এফআইআর খারিজের মামলা দায়ের করুন।',
        'আদালতে দেখান নির্দিষ্ট কোনো তারিখ বা ঘটনা ছাড়াই ঢালাওভাবে পরিবারের সবাইকে জড়ানো হয়েছে।',
        'হাইকোর্ট গ্রেপ্তারি স্থগিত করবে, সশরীরে হাজিরা মকুব করবে এবং অবশেষে ফৌজদারি মামলাটি বাতিল করবে।'
      ],
      hi: [
        'अलग रहने का रेंट एग्रीमेंट या नौकरी का रिकॉर्ड जुटाएं जिससे अलग निवास प्रमाणित हो।',
        'उच्च न्यायालय में धारा 528 बीएनएसएस के तहत एफआईआर रद्द करने की याचिका दाखिल करें।',
        'सिद्ध करें कि बिना तारीख या विशिष्ट घटना के पूरे परिवार पर सामान्य आरोप लगाए गए हैं।',
        'उच्च न्यायालय गिरफ्तारी पर रोक लगाकर मुकदमे की कार्यवाही को पूर्णतः निरस्त करेगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-19-1',
        name: { en: 'Certified Copy of Police FIR & Outstation Separate Residence Proof', bn: 'থানার এফআইআর কপি ও পৃথক ঠিকানায় থাকার প্রমাণপত্র', hi: 'प्राथमिकी (FIR) की प्रमाणित प्रति एवं अलग पते का निवास प्रमाण' },
        issuing_authority: { en: 'Police Station / Employer / Landlord', bn: 'থানা / কর্মস্থল / বাড়িওয়ালা', hi: 'थाना / नियोक्ता' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-20',
    productCategory: 'lawyer-only',
    title: {
      en: 'Protection of Shared Household Rights for Daughters-in-Law',
      bn: 'শ্বশুরবাড়ির যৌথ সংসারে থাকার আইনি অধিকার প্রতিষ্ঠা',
      hi: 'बहू का ससुराल के साझा घर में रहने का अधिकार (रेजिडेंस राइट्स)'
    },
    relevant_act: 'Sec 17 & 19, PWDVA r/w Satish Chander Ahuja (SC)',
    summary: {
      en: 'Restraining in-laws from throwing out a married woman even if the house is owned exclusively by the father-in-law.',
      bn: 'বাড়ি শ্বশুরের নামে হলেও সুপ্রিম কোর্টের রায়ে যৌথ সংসারে বধূর থাকার অধিকার এবং ঘর থেকে বের করা প্রতিরোধ।',
      hi: 'भले ही घर ससुर के नाम हो, सतीश आहूजा फैसले के तहत बहू को ससुराल से बाहर निकालने पर पूर्ण अदালती रोक।'
    },
    authority_forum: {
      en: 'Judicial Magistrate Court / Family Court',
      bn: 'জুডিশিয়াল ম্যাজিস্ট্রেট আদালত / পারিবারিক আদালত',
      hi: 'न्यायिक दंडाधिकारी न्यायालय / फैमिली कोर्ट'
    },
    forum_type: 'Magistrate_Court',
    is_complex: false,
    official_portal_url: 'https://ecourts.gov.in/',
    statutory_timeframe: {
      en: 'Hearing within 3 days; order in 15 days',
      bn: '৩ দিনে শুনানি; ১৫ দিনে আদেশ',
      hi: '3 दिन में सुनवाई; 15 दिन में आदेश'
    },
    search_keywords: {
      en: ['satish chander ahuja shared household', 'daughter in law residence rights', 'father in law property daughter in law stay'],
      bn: ['শ্বশুরবাড়িতে থাকার অধিকার', 'সতীশ আহুজা রায়', 'বধূকে বাড়ি থেকে বের করা'],
      hi: ['साझा घर में बहू का हक', 'सतीश आहूजा फैसला', 'ससुराल से बेदखली पर रोक']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Document physical lock-outs, threats of dispossession, or attempts to remove personal belongings.',
        'File urgent petition under Section 12 PWDVA before Judicial Magistrate.',
        'Move interim application under Section 19(1) for a mandatory Residence Order protecting stay.',
        'Magistrate directs Protection Officer and police to break locks and restore woman entry if locked out.'
      ],
      bn: [
        'ঘরে তালা দেওয়া, হুমকি বা গৃহহীন করার চেষ্টার সমস্ত অডিও-ভিডিও প্রমাণ প্রস্তুত রাখুন।',
        'পারিবারিক হিংসা আইনের ধারা ১২ অনুযায়ী জুডিশিয়াল ম্যাজিস্ট্রেটের কাছে জরুরি পিটিশন করুন।',
        'ধারা ১৯(১) অনুযায়ী অন্তর্বর্তী রেসিডেন্স অর্ডারের আবেদন জানান যাতে ঘর থেকে বের না করা যায়।',
        'ম্যাজিস্ট্রেট নির্দেশ দেবেন পুলিশ ও প্রোটেকশন অফিসারকে গিয়ে তালা ভেঙে বধূকে ঘরে ঢুকিয়ে দিতে।'
      ],
      hi: [
        'घर से निकालने की धमकी, ताला जड़ने अथवा सामान बाहर फेंकने के साक्ष्य तैयार रखें।',
        'न्यायिक मजिस्ट्रेट के समक्ष धारा 12 डीवी एक्ट में सुरक्षा एवं भरण-पोषण की याचिका दें।',
        'धारा 19 के तहत साझा घर में सुरक्षित रहने का निवास आदेश (Residence Order) प्राप्त करें।',
        'मजिस्ट्रेट पुलिस बल को मौके पर भेजकर ताला तुड़वाकर महिला का शांतिपूर्ण प्रवेश कराएंगे।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-20-1',
        name: { en: 'Marriage Card, Photographs & Police Domestic Incident Report (DIR)', bn: 'বিয়ের ছবি ও পুলিশ প্রোটেকশন অফিসারের রিপোর্ট', hi: 'शादी का कार्ड, ससुराल के पते का प्रमाण एवं पुलिस डीआईआर' },
        issuing_authority: { en: 'Protection Officer / Complainant', bn: 'প্রোটেকশন অফিসার / অভিযোগকারী', hi: 'संरक्षण अधिकारी / वादी' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-21',
    productCategory: 'lawyer-only',
    title: {
      en: 'Mandatory Income & Asset Disclosure Affidavits in Alimony',
      bn: 'খোরপোশ মামলায় স্বামী-স্ত্রীর সম্পত্তির হলফনামা দাখিলের নিয়ম',
      hi: 'गुजारा भत्ता मुकदमों में आय एवं संपत्ति का अनिवार्य प्रकटीकरण (राजनेश बनाम नेहा)'
    },
    relevant_act: 'Sec 24, Hindu Marriage Act (Rajnesh v. Neha SC)',
    summary: {
      en: 'Compelling spouses to disclose 3-year ITRs, bank accounts, and credit card statements to unmask hidden wealth for alimony.',
      bn: 'স্বামী নিজের ব্যবসা বা বিপুল আয় গোপন করলে সুপ্রিম কোর্টের নির্দেশে ৩ বছরের ব্যাংক ও ট্যাক্স নথি তলব।',
      hi: 'पति द्वारा आमदनी छिपाने पर सुप्रीम कोर्ट के फार्मूले से 3 साल के बैंक खाते व आईटीआर निकलवाकर गुजारा तय कराना।'
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
      en: ['rajnesh v neha affidavit format', 'income disclosure maintenance supreme court', 'unmask hidden husband income'],
      bn: ['রাজনেশ বনাম নেহা হলফনামা', 'স্বামীর আয় গোপন খোরপোশ', 'সম্পত্তির হলফনামা ফর্ম'],
      hi: ['राजनेश बनाम नेहा शपथ पत्र', 'पति की छिपी आय उजागर', 'आय प्रकटीकरण प्रारूप']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'File application under Section 24 HMA in active divorce or RCR proceedings.',
        'Submit statutory Disclosure of Assets & Income Affidavit per Supreme Court mandate.',
        'Demonstrate applicant lacks independent income to maintain themselves and litigate.',
        'Judge orders respondent to pay lump-sum legal costs and monthly maintenance within 60 days.'
      ],
      bn: [
        'চলমান ডিভোর্স বা আরসিআর মামলায় হিন্দু বিবাহ আইনের ধারা ২৪ অনুযায়ী অন্তর্বর্তী খরচের আবেদন করুন।',
        'সুপ্রিম কোর্টের নির্দেশ মেনে নিজের ও স্বামীর আয়ের বিস্তারিত অ্যাসেট ডিক্লারেশন দিন।',
        'আদালতে প্রমাণ করুন বাদীর মামলা চালানোর বা গ্রাসাচ্ছাদনের নিজস্ব কোনো স্বাধীন রোজগার নেই।',
        'বিচারক অপর পক্ষকে এককালীন মামলার খরচ এবং প্রতি মাসের নির্দিষ্ট অন্তর্বর্তী খোরপোশ মেটানোর আদেশ দেবেন।'
      ],
      hi: [
        'चल रहे तलाक या आरसीआर केस में धारा 24 एचएमए के तहत अंतरिम खर्चे का आवेदन दें।',
        'सुप्रीम कोर्ट के निर्देशानुसार दोनों पक्षों की आय एवं परिसंपत्तियों का शपथ पत्र प्रस्तुत करें।',
        'साबित करें कि याचिकाकर्ता के पास मुकदमा लड़ने और जीवन-यापन का कोई स्वतंत्र साधन नहीं है।',
        'न्यायाधीश 60 दिन में विपक्षी को एकमुश्त कानूनी खर्च एवं मासिक भरण-पोषण चुकाने का आदेश देंगे।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-21-1',
        name: { en: 'Affidavit of Assets & Liabilities with Bank Statements', bn: 'সম্পত্তি ও আয়ের হলফনামা এবং ব্যাঙ্ক বিবরণী', hi: 'आय एवं संपत्ति का विस्तृत शपथ पत्र व बैंक स्टेटमेंट' },
        issuing_authority: { en: 'Applicant / Bank', bn: 'বাদী / ব্যাঙ্ক', hi: 'याचिकाकर्ता / बैंक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-22',
    productCategory: 'lawyer-only',
    title: {
      en: 'International Child Custody Battles & NRI Parent Disputes',
      bn: 'প্রবাসী এনআরআই মা-বাবার মধ্যে সন্তানকে দেশে ফিরিয়ে আনার লড়াই',
      hi: 'अनिवासी भारतीय (NRI) माता-पिता के मध्य बच्चे की अंतरराष्ट्रीय कस्टडी विवाद'
    },
    relevant_act: 'Guardians and Wards Act, 1890 r/w Nithya Anand Raghavan (SC)',
    summary: {
      en: 'The principle of the child welfare supersedes foreign court custody orders when an NRI parent relocates a child to India.',
      bn: 'বিদেশের আদালতের রায় থাকলেও ভারতীয় হাইকোর্ট শিশুর মানসিক সুস্থতা ও ভবিষ্যৎ বিবেচনা করে নিজের দেশে হেফাজত রাখে।',
      hi: 'विदेशी कोर्ट का आदेश होने पर भी भारतीय अदालत बच्चे के सर्वोत्तम हित को देखकर भारत में कस्टडी तय करेगी।'
    },
    authority_forum: {
      en: 'High Court at Calcutta (Writ of Habeas Corpus) / Family Court',
      bn: 'কলকাতা হাইকোর্ট (হেবিয়াস কর্পাস রিট) / পারিবারিক আদালত',
      hi: 'कलकत्ता उच्च न्यायालय (बंदी प्रत्यक्षीकरण) / फैमिली कोर्ट'
    },
    forum_type: 'High_Court',
    is_complex: true,
    official_portal_url: 'https://calcuttahighcourt.gov.in/',
    statutory_timeframe: {
      en: '1 to 3 months',
      bn: '১ থেকে ৩ মাস',
      hi: '1 से 3 माह'
    },
    search_keywords: {
      en: ['nri child custody india', 'habeas corpus minor child high court', 'nithya anand raghavan supreme court'],
      bn: ['এনআরআই বাচ্চার হেফাজত', 'বিদেশের আদালত ডিভোর্স বাচ্চা', 'হেবিয়াস কর্পাস হাইকোর্ট'],
      hi: ['एनआरआई बच्चा कस्टडी', 'बंदी प्रत्यक्षीकरण बच्चा हाईकोर्ट', 'विदेशी कस्टडी फैसला भारत']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Foreign parent files Writ of Habeas Corpus under Article 226 before High Court at Calcutta.',
        'High Court prioritizes primary legal doctrine of "welfare of the child" over foreign court decrees.',
        'Judge interacts privately with minor child in judicial chamber to ascertain schooling stability.',
        'High Court decides whether to order repatriation or retain Indian custody with digital visitations.'
      ],
      bn: [
        'প্রবাসী পিতা বা মাতা কলকাতা হাইকোর্টে অনুচ্ছেদ ২২৬ অনুযায়ী হেবিয়াস কর্পাস রিট দায়ের করেন।',
        'হাইকোর্ট বিদেশের রায় অন্ধভাবে না মেনে শিশুর কল্যাণ ও মানসিক নিরাপত্তাকেই মূল ভিত্তি করবে।',
        'বিচারক নিজের চেম্বারে বাচ্চার সাথে কথা বলে তার ভাষা, স্কুলের পরিবেশ ও স্বাচ্ছন্দ্য পরীক্ষা করবেন।',
        'হাইকোর্ট বাচ্চার মঙ্গলের স্বার্থে ভারতে মায়ের কাছে থাকার অনুমতি দিয়ে অনলাইনে পিতার সাক্ষাতের রুটিন দেবে।'
      ],
      hi: [
        'विदेशी अभिभावक द्वारा कलकत्ता हाईकोर्ट में अनुच्छेद 226 के तहत बंदी प्रत्यक्षीकरण याचिका दाखिल की जाती है।',
        'उच्च न्यायालय विदेशी अदालत के आदेश के ऊपर "बच्चे के कल्याण" को सर्वोच्च प्राथमिकता देगा।',
        'न्यायाधीश अपने चैंबर में बच्चे से बात कर उसकी पढ़ाई एवं भावनात्मक जुड़ाव का आकलन करेंगे।',
        'उच्च न्यायालय बच्चे को भारत में रहने की अनुमति दे सकता है और दूसरे अभिभावक को ऑनलाइन मिलने की व्यवस्था करेगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-22-1',
        name: { en: 'Foreign Court Custody Order & Child Overseas Passport', bn: 'বিদেশের আদালতের হেফাজতের রায় ও শিশুর পাসপোর্ট', hi: 'विदेशी न्यायालय कस्टडी आदेश एवं बच्चे का पासपोर्ट' },
        issuing_authority: { en: 'Foreign Family Court / Consular Office', bn: 'বিদেশি আদালত / দূতাবাস', hi: 'विदेशी न्यायालय / दूतावास' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-23',
    productCategory: 'free-checklist',
    title: {
      en: 'Multi-Faith Civil Matrimonial Dissolution & Rights',
      bn: 'ভিন্ন ধর্মীয় দম্পতির বিবাহবিচ্ছেদ ও খোরপোশের ধর্মনিরপেক্ষ বিধান',
      hi: 'अंतरधार्मिक विवाह विच्छेद (तलाक) एवं धर्मनिरपेक्ष गुजारा भत्ता'
    },
    relevant_act: 'Sec 27 & 36–38, Special Marriage Act, 1954 (SMA)',
    summary: {
      en: 'Application of secular civil family procedures in cases of inter-faith marriage dissolution, custody, and matrimonial maintenance.',
      bn: 'ভিন্ন ধর্মের যুগলের বৈবাহিক বিচ্ছেদ ও সম্পত্তিতে ব্যক্তিগত ধর্মীয় অনুশাসনের বদলে ধর্মনিরপেক্ষ নাগরিক আইন প্রয়োগ।',
      hi: 'अलग-अलग धर्मों के जीवनसाथी में विवाद होने पर धार्मिक नियमों के स्थान पर धर्मनिरपेक्ष सिविल कानूनों का अनुप्रयोग।'
    },
    authority_forum: {
      en: 'Family Court / District Judge',
      bn: 'পারিবারিক আদালত / জেলা জজ',
      hi: 'पारिवारिक न्यायालय / जिला जज'
    },
    forum_type: 'Family_Court',
    is_complex: true,
    official_portal_url: 'https://ecourts.gov.in/',
    statutory_timeframe: {
      en: '6 months to 1 year',
      bn: '৬ মাস থেকে ১ বছর',
      hi: '6 माह से 1 वर्ष'
    },
    search_keywords: {
      en: ['special marriage act divorce', 'secular matrimonial maintenance', 'interfaith divorce rights'],
      bn: ['স্পেশাল ম্যারেজ ডিভোর্স', 'ধর্মনিরপেক্ষ খোরপোশ', 'ভিন্ন ধর্মে বিয়ে বিচ্ছেদ'],
      hi: ['स्पेशल मैरिज तलाक', 'समान नागरिक अधिकार', 'अंतरधार्मिक तलाक नियम']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Produce Special Marriage Certificate proving marriage was registered under secular civil framework.',
        'Exclude personal religious laws; all ancillary matrimonial claims must strictly follow civil statutes.',
        'File petition for divorce or judicial separation under Section 27 of Special Marriage Act.',
        'Family Court applies secular principles to divide assets and calculate maintenance equally.'
      ],
      bn: [
        'স্পেশাল ম্যারেজ সার্টিফিকেট পেশ করে প্রমাণ করুন বিয়েটি ধর্মনিরপেক্ষ সিভিল আইনের অধীনে সম্পন্ন।',
        'ব্যক্তিগত ধর্মীয় অনুশাসন বাদ দিয়ে ভারতীয় সিভিল আইনের বিধান মেনে মামলার আর্জি জানান।',
        'স্পেশাল ম্যারেজ অ্যাক্টের ধারা ২৭ অনুযায়ী বিবাহবিচ্ছেদ বা জুডিশিয়াল সেপারেশনের মামলা করুন।',
        'পারিবারিক আদালত ধর্মীয় ভেদাভেদের বাইরে গিয়ে লিঙ্গসমতা ও নাগরিক অধিকারের ভিত্তিতে খোরপোশ দেবে।'
      ],
      hi: [
        'विवाह अधिकारी द्वारा जारी स्पेशल मैरिज रजिस्ट्रेशन प्रमाणपत्र प्रस्तुत करें।',
        'धार्मिक पर्सनल लॉ को छोड़कर सभी मामलों में धर्मनिरपेक्ष वैधानिक कानूनों को लागू कराएं।',
        'स्पेशल मैरिज एक्ट की धारा 27 में तलाक अथवा न्यायिक पृथक्करण (Judicial Separation) का वाद दें।',
        'पारिवारिक न्यायालय समानता के सिद्धांतों पर संपत्ति का बंटवारा एवं महिला हेतु उचित गुजारा भत्ता तय करेगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-23-1',
        name: { en: 'Civil Marriage Registration Certificate under SMA', bn: 'স্পেশাল ম্যারেজ রেজিস্ট্রেশন সার্টিফিকেট', hi: 'विशेष विवाह अधिनियम पंजीकरण प्रमाणपत्र' },
        issuing_authority: { en: 'District Marriage Officer', bn: 'বিবাহ নিবন্ধক', hi: 'विवाह पंजीयक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-24',
    productCategory: 'lawyer-only',
    title: {
      en: 'Legal Parentage & Custody Rights in Commercial Surrogacy',
      bn: 'সারোগেসি পদ্ধতিতে জন্ম নেওয়া সন্তানের আইনি অভিভাবকত্ব',
      hi: 'सरोगेसी (किराये की कोख) से जन्मे बच्चे के कानूनी माता-पिता अधिकार'
    },
    relevant_act: 'Surrogacy (Regulation) Act, 2021 & ART Act, 2021',
    summary: {
      en: 'Obtaining statutory parentage and custody certificates establishing commissioning parents as the sole legal guardians.',
      bn: 'সারোগেসি আইনে গর্ভধারিণী নয়, ইচ্ছুক পিতা-মাতাই সন্তানের একমাত্র বৈধ অভিভাবক—এই মর্মে আদালতের নির্দেশ।',
      hi: 'सरोगेसी कानून 2021 के तहत बच्चे को जन्म देने वाली महिला के बजाय दंपति को एकमात्र कानूनी माता-पिता घोषित कराना।'
    },
    authority_forum: {
      en: 'District Medical Board / Judicial Magistrate Court',
      bn: 'জেলা মেডিক্যাল বোর্ড / জুডিশিয়াল ম্যাজিস্ট্রেট আদালত',
      hi: 'जिला मेडिकल बोर्ड / न्यायिक मजिस्ट्रेट न्यायालय'
    },
    forum_type: 'Magistrate_Court',
    is_complex: true,
    official_portal_url: 'https://wbhousing.gov.in/',
    statutory_timeframe: {
      en: 'Parentage order within 15 days of birth',
      bn: 'সন্তান জন্মের ১৫ দিনের মধ্যে অভিভাবকত্ব আদেশ',
      hi: 'जन्म के 15 दिनों में पितृत्व/मातृत्व आदेश'
    },
    search_keywords: {
      en: ['surrogacy regulation act 2021', 'legal parentage order magistrate', 'surrogate child custody rights'],
      bn: ['সারোগেসি সন্তান অভিভাবকত্ব', 'সারোগেসি রেগুলেশন অ্যাক্ট', 'সারোগেট মা অধিকার'],
      hi: ['सरोगेसी कानून 2021', 'सरोगेसी बच्चा माता-पिता अधिकार', 'सरोगेट मां अधिकार रोक']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain Eligibility Certificate from District Medical Board confirming medical need for surrogacy.',
        'Execute statutory surrogacy agreement and secure mandatory 3-year health insurance for surrogate.',
        'Upon delivery, clinic immediately registers birth listing commissioning parents as father/mother.',
        'Apply to Magistrate Court for parentage order barring surrogate from claiming parental custody.'
      ],
      bn: [
        'জেলা মেডিক্যাল বোর্ড থেকে সারোগেসির অপরিহার্যতা সংক্রান্ত যোগ্যতার শংসাপত্র সংগ্রহ করুন।',
        'গর্ভধারিণী নারীর ৩ বছরের স্বাস্থ্যবীমাসহ সরকারি নিয়ম মেনে সারোগেসি চুক্তি সম্পাদন করুন।',
        'হাসপাতাল প্রসবের পর বার্থ সার্টিফিকেটে ইচ্ছুক দম্পতির নাম পিতা ও মাতা হিসেবে নথিভুক্ত করবে।',
        'ম্যাজিস্ট্রেট আদালত থেকে আইনি প্যারেন্টেজ অর্ডার নিন যাতে সারোগেট মা বাচ্চার কোনো দাবি করতে না পারে।'
      ],
      hi: [
        'जिला मेडिकल बोर्ड से चिकित्सकीय आवश्यकता का आधिकारिक पात्रता प्रमाणपत्र (Eligibility Certificate) लें।',
        'सरोगेट महिला के लिए 3 वर्ष का स्वास्थ्य बीमा कराकर वैधानिक सरोगेसी अनुबंध करें।',
        'प्रसव के बाद अस्पताल जन्म प्रमाणपत्र में दंपति को ही माता-पिता के रूप में दर्ज करेगा।',
        'मजिस्ट्रेट से विधिक पितृत्व आदेश लें ताकि सरोगेट मां भविष्य में बच्चे पर कोई दावा न कर सके।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-24-1',
        name: { en: 'District Medical Board Surrogacy Certificate & ART Agreement', bn: 'মেডিক্যাল বোর্ড সারোগেসি সার্টিফিকেট ও এআরটি চুক্তি', hi: 'जिला मेडिकल बोर्ड सरोगेसी प्रमाणपत्र एवं एआरटी अनुबंध' },
        issuing_authority: { en: 'District Health Administration / Registered ART Clinic', bn: 'স্বাস্থ্য দপ্তর / অনুমোদিত ক্লিনিক', hi: 'स्वास्थ्य विभाग / अधिकृत क्लिनिक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-family-25',
    productCategory: 'free-checklist',
    title: {
      en: 'Inter-Country Adoption & CARA Clearance Protocols',
      bn: 'প্রবাসী দম্পতির ভারতীয় শিশু দত্তক গ্রহণ ও কারা (CARA) ক্লিয়ারেন্স',
      hi: 'अंतरराष्ट्रीय दत्तक ग्रहण (इंटर-कंट्री एडॉप्शन) एवं कारा (CARA) अनापत्ति'
    },
    relevant_act: 'Juvenile Justice (Care & Protection) Act, 2015 & Adoption Regulations',
    summary: {
      en: 'Completing overseas legal adoption of orphaned or surrendered children through the centralized CARA portal.',
      bn: 'কেন্দ্রীয় দত্তক গ্রহণ সংস্থা (CARA)-র মাধ্যমে অনাথ বা সমর্পিত শিশুকে আইনসম্মতভাবে দত্তক নেওয়া ও পাসপোর্ট লাভ।',
      hi: 'केंद्रीय दत्तक ग्रहण प्राधिकरण (CARA) के माध्यम से बच्चे को कानूनी रूप से गोद लेना एवं पासपोर्ट/वीजा प्राप्त करना।'
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
      en: ['cara adoption process india', 'inter country adoption nri', 'dm adoption order jj act'],
      bn: ['কারা শিশু দত্তক', 'এনআরআই বাচ্চা দত্তক নেওয়া', 'জেলাশাসক দত্তক আদেশ'],
      hi: ['कारा बच्चा गोद लेना', 'एनआरआई विदेशी एडॉप्शन', 'जिला मजिस्ट्रेट एडॉप्शन आदेश']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Register online on centralized CARA portal (CARINGS) and submit Home Study Report (HSR).',
        'Match with eligible legally free child and execute physical child acceptance dossier within 30 days.',
        'Specialized Adoption Agency (SAA) files formal adoption petition before District Magistrate (DM).',
        'DM issues final non-appealable Adoption Order; CARA issues mandatory NOC for child passport.'
      ],
      bn: [
        'কারা (CARA) পোর্টালে নিবন্ধন করে অনুমোদিত এজেন্সির মাধ্যমে হোম স্টাডি রিপোর্ট (HSR) জমা দিন।',
        'আইনত মুক্ত শিশুর সাথে ম্যাচিং হলে ৩০ দিনের মধ্যে দত্তক গ্রহণের প্রামাণ্য নথিপত্রে সম্মতি দিন।',
        'স্পেশালাইজড অ্যাডপশন এজেন্সি জেলাশাসকের (DM) কাছে আনুষ্ঠানিক দত্তক পিটিশন দাখিল করবে।',
        'জেলাশাসক চূড়ান্ত দত্তক আদেশ জারি করবেন এবং কারা (CARA) বাচ্চার পাসপোর্ট তৈরির এনওসি দেবে।'
      ],
      hi: [
        'कारा (CARA) पोर्टल पर पंजीकरण कराकर अपने गृह अध्ययन रिपोर्ट (HSR) को अपलोड करें।',
        'बच्चे के मिलान के बाद 30 दिनों के भीतर बच्चे को स्वीकार करने का विधिक दस्तावेज भरें।',
        'अधिकृत संस्था द्वारा जिला मजिस्ट्रेट (कलेक्टर) के समक्ष अंतिम एडॉप्शन अर्जी दाखिल होगी।',
        'जिला मजिस्ट्रेट द्वारा गोदनामा आदेश जारी होगा एवं कारा बच्चे का पासपोर्ट बनवाने हेतु एनओसी देगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-family-25-1',
        name: { en: 'CARA Registration Dossier & District Magistrate Final Adoption Order', bn: 'কারা রেজিস্ট্রেশন নথি ও জেলাশাসকের দত্তক আদেশ', hi: 'कारा पंजीकरण दस्तावेज एवं जिला मजिस्ट्रेट का अंतिम एडॉप्शन आदेश' },
        issuing_authority: { en: 'Central Adoption Resource Authority / DM Office', bn: 'কারা / জেলাশাসক কার্যালয়', hi: 'कारा / जिला मजिस्ट्रेट कार्यालय' },
        is_mandatory: true
      }
    ]
  }
];