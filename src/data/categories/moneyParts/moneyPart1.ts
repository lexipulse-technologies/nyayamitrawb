import type { CivilSubCategory } from '../../../types/legal';

export const moneyPart1: CivilSubCategory[] = [
  {
    id: 'sub-money-01',
    productCategory: 'paid',
    title: {
      en: 'Cheque Dishonour Criminal Complaint (Bankshall vs District Courts)',
      bn: 'চেক বাউন্স ফৌজদারি নালিশ মামলা (ব্যাঙ্কশাল বনাম জেলা আদালত)',
      hi: 'चेक अनादर आपराधिक परिवाद (बैंकशाल कोर्ट बनाम जिला अदालत)'
    },
    relevant_act: 'Sec 138 & 142, Negotiable Instruments Act, 1881',
    summary: {
      en: 'Prosecuting cheque drawer for dishonour due to insufficient funds: Metropolitan Magistrate (Bankshall Court) for Kolkata; Chief Judicial Magistrate (CJM/JMFC) for districts.',
      bn: 'অ্যাকাউন্টে টাকা না থাকায় চেক বাউন্স হলে ৩০ দিনের মধ্যে নোটিশ পাঠিয়ে দ্বিগুণ অর্থ জরিমানা ও কারাদণ্ডের মামলা (কলকাতা বনাম জেলা আদালত)।',
      hi: 'खाते में अपर्याप्त राशि पर चेक बाउंस: कोलकाता में बैंकशाल मेट्रोपॉलिटन कोर्ट; जिलों में सीजेएम/न्यायिक मजिस्ट्रेट कोर्ट।'
    },
    authority_forum: {
      en: 'Bankshall Court (Kolkata) / CJM Court (Districts)',
      bn: 'ব্যাঙ্কশাল কোর্ট (কলকাতা) / সিজেএম আদালত (জেলা)',
      hi: 'बैंकशाल कोर्ट (कोलकाता) / सीजेएम कोर्ट (जिले)'
    },
    forum_type: 'Magistrate_Court',
    is_complex: false,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '30 days notice; 15 days cure; 30 days filing window',
      bn: '৩০ দিনে নোটিশ; ১৫ দিন অপেক্ষা; ৩০ দিনে মামলা',
      hi: '30 दिन में नोटिस; 15 दिन प्रतीक्षा; 30 दिन में वाद'
    },
    search_keywords: {
      en: ['cheque bounce section 138', 'bankshall court cheque complaint', 'cjm court cheque 138'],
      bn: ['চেক বাউন্স মামলা', 'ব্যাঙ্কশাল কোর্ট চেক', 'ধারা ১৩৮ এনআই অ্যাক্ট'],
      hi: ['चेक बाउंस केस', 'बैंकशाल कोर्ट चेक', 'धारा 138 एनआई एक्ट']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'Court of Chief Judicial Magistrate (CJM) / JMFC in District Courts',
          bn: 'জেলা আদালতের মুখ্য বিচার বিভাগীয় ম্যাজিস্ট্রেট (CJM / JMFC)',
          hi: 'जिला न्यायालय में मुख्य न्यायिक दंडाधिकारी (CJM) / जेएमएफसी'
        },
        portal_name: { en: 'District eCourts Services', bn: 'জেলা ই-কোর্ট পোর্টাল', hi: 'जिला ई-कोर्ट्स' },
        portal_url: 'https://districts.ecourts.gov.in/',
        steps: {
          en: [
            'Obtain Cheque Return Memo from district bank branch stating "Funds Insufficient".',
            'Serve statutory demand notice under Section 138(b) via registered post within 30 days.',
            'Wait 15 days for drawer to make payment; cause of action arises on 16th day.',
            'File criminal complaint before Chief Judicial Magistrate (CJM) in District Court (Alipore, Barasat, etc.).'
          ],
          bn: [
            'জেলা ব্যাঙ্ক শাখা থেকে "তহবিল অপ্রতুল" লেখা চেক রিটার্ন মেমো সংগ্রহ করুন।',
            'মেমো পাওয়ার ৩০ দিনের মধ্যে আইনজীবীর মাধ্যমে রেজিস্ট্রি ডাকে আইনি ডিমান্ড নোটিশ পাঠান।',
            'টাকা পরিশোধের জন্য প্রদত্ত ১৫ দিনের বিধিবদ্ধ সময়সীমা শেষ হওয়া পর্যন্ত অপেক্ষা করুন।',
            'টাকা না পেলে পরবর্তী ৩০ দিনের মধ্যে আলিপুর, বারাসাত বা সংশ্লিষ্ট জেলা আদালতে সিজেএমের কাছে মামলা করুন।'
          ],
          hi: [
            'जिला बैंक शाखा से "अपर्याप्त राशि" दर्ज चेक वापसी मेमो प्राप्त करें।',
            'मेमो मिलने के 30 दिनों के भीतर पंजीकृत डाक से धारा 138(b) का वैधानिक मांग पत्र भेजें।',
            'भुगतान हेतु 15 दिनों की वैधानिक अवधि बीतने की प्रतीक्षा करें; 16वें दिन वाद का कारण बनेगा।',
            'भुगतान न होने पर अगले 30 दिनों के भीतर जिला अदालत (अलीपुर, बारासात आदि) में सीजेएम के समक्ष परिवाद दें।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'Court of Chief Metropolitan Magistrate (CMM), Bankshall Court, Kolkata',
          bn: 'মুখ্য মেট্রোপলিটান ম্যাজিস্ট্রেট আদালত (CMM), ব্যাঙ্কশাল কোর্ট, কলকাতা',
          hi: 'मुख्य महानगर दंडाधिकारी न्यायालय (CMM), बैंकशाल कोर्ट, कोलकाता'
        },
        portal_name: { en: 'Calcutta CMM Bankshall Court Portal', bn: 'ব্যাঙ্কশাল কোর্ট পোর্টাল', hi: 'बैंकशाल कोर्ट कोलकाता' },
        portal_url: 'https://calcuttahighcourt.gov.in/',
        steps: {
          en: [
            'Collect bank return memo from Kolkata bank branch confirming dishonour.',
            'Serve statutory 30-day legal notice under Section 138 NI Act to drawer address in Kolkata.',
            'Wait 15 days; if unpaid, draft criminal complaint under Section 142 NI Act.',
            'File complaint before Chief Metropolitan Magistrate (CMM) at Bankshall Court (2 & 3 Bankshall St).'
          ],
          bn: [
            'কলকাতার ব্যাঙ্ক শাখা থেকে চেক প্রত্যাখ্যানের মেমো সংগ্রহ করুন।',
            'কলকাতার ঠিকানায় ৩০ দিনের মধ্যে আইনজীবীর মাধ্যমে রেজিস্ট্রি ডাকে ডিমান্ড নোটিশ পাঠান।',
            '১৫ দিনে টাকা না মেটালে ধারা ১৪২ এনআই অ্যাক্ট মেনে ফৌজদারি নালিশি আরজি প্রস্তুত করুন।',
            'কলকাতার ব্যাঙ্কশাল কোর্টের চিফ মেট্রোপলিটান ম্যাজিস্ট্রেটের (CMM) এজলাসে মামলা দায়ের করুন।'
          ],
          hi: [
            'कोलकाता स्थित बैंक शाखा से चेक बाउंस का आधिकारिक मेमो प्राप्त करें।',
            'कोलकाता पते पर 30 दिनों के भीतर धारा 138 का वैधानिक मांग नोटिस पंजीकृत डाक से भेजें।',
            '15 दिन में भुगतान न होने पर धारा 142 के तहत आपराधिक परिवाद तैयार करें।',
            'बैंकशाल स्ट्रीट स्थित मुख्य महानगर दंडाधिकारी (CMM) न्यायालय में वाद दाखिल करें।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Collect Cheque Return Memo from your bank specifying "Funds Insufficient".',
        'Serve statutory demand notice under Section 138(b) via registered post within 30 days.',
        'Wait 15 days for drawer to make payment; cause of action arises on 16th day.',
        'File criminal complaint under Section 142 before Judicial Magistrate within 30 days.'
      ],
      bn: [
        'ব্যাঙ্ক থেকে "তহবিল অপ্রতুল" (Funds Insufficient) লেখা চেক রিটার্ন মেমো সংগ্রহ করুন।',
        'মেমো পাওয়ার ৩০ দিনের মধ্যে আইনজীবীর মাধ্যমে রেজিস্ট্রি ডাকে আইনি ডিমান্ড নোটিশ পাঠান।',
        'টাকা পরিশোধের জন্য প্রদত্ত ১৫ দিনের বিধিবদ্ধ সময়সীমা শেষ হওয়া পর্যন্ত অপেক্ষা করুন।',
        'টাকা না পেলে পরবর্তী ৩০ দিনের মধ্যে ম্যাজিস্ট্রেটের আদালতে ফৌজদারি নালিশি মামলা দায়ের করুন।'
      ],
      hi: [
        'बैंक से "खाते में अपर्याप्त राशि" दर्ज चेक वापसी मेमो (Return Memo) प्राप्त करें।',
        'मेमो मिलने के 30 दिनों के भीतर पंजीकृत डाक से धारा 138(b) का वैधानिक मांग पत्र भेजें।',
        'भुगतान हेतु 15 दिनों की वैधानिक अवधि बीतने की प्रतीक्षा करें; 16वें दिन वाद का कारण बनेगा।',
        'भुगतान न होने पर अगले 30 दिनों के भीतर न्यायिक मजिस्ट्रेट के समक्ष परिवाद दाखिल करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-01-1',
        name: { en: 'Original Dishonoured Cheque & Bank Return Memo', bn: 'মূল বাউন্স চেক ও ব্যাঙ্কের রিটার্ন মেমো', hi: 'मूल बाउंस चेक एवं बैंक वापसी मेमो' },
        issuing_authority: { en: 'Drawee Commercial Bank', bn: 'বাণিজ্যিক ব্যাঙ্ক', hi: 'संबंधित बैंक' },
        is_mandatory: true
      },
      {
        id: 'doc-money-01-2',
        name: { en: 'Statutory 138 Legal Notice with Postal AD Receipt', bn: 'ধারা ১৩৮ ডিমান্ড নোটিশ ও পোস্টাল এডি কার্ড', hi: 'धारा 138 मांग नोटिस एवं डाक पावती रसीद' },
        issuing_authority: { en: 'Advocate on Record / India Post', bn: 'বিজ্ঞ আইনজীবী / ডাক বিভাগ', hi: 'अधिवक्ता / डाक विभाग' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-02',
    productCategory: 'free-checklist',
    title: {
      en: 'Cyber UPI / Net-Banking Fraud Account Freezing',
      bn: 'সাইবার আর্থিক প্রতারণা ও অ্যাকাউন্ট ডি-ফ্রিজিং',
      hi: 'साइबर यूपीआई / नेट-बैंकिंग धोखाधड़ी खाता फ्रीजिंग एवं रिलीज'
    },
    relevant_act: 'Sec 503, BNSS, 2023 & Information Tech Act',
    summary: {
      en: 'Golden hour freezing of scammer accounts via 1930 and magistrate petitions to unfreeze innocent citizen accounts.',
      bn: '১৯৩০ নম্বরে ফোন করে সাইবার প্রতারকের অ্যাকাউন্ট ব্লক করা এবং নির্দোষ ব্যবসায়ীর অ্যাকাউন্ট অবমুক্তির আবেদন।',
      hi: 'साइबर हेल्पलाइन 1930 द्वारा ठगों के खाते फ्रीज कराना एवं निर्दोष व्यापारियों के खाते अदालत से चालू कराना।'
    },
    authority_forum: {
      en: 'Cyber Crime Police Station (1930) / CJM Court',
      bn: 'সাইবার ক্রাইম থানা (১৯৩০) / সিজেএম আদালত',
      hi: 'साइबर पुलिस स्टेशन (1930) / सीजेएम कोर्ट'
    },
    forum_type: 'Cyber_Cell',
    is_complex: false,
    official_portal_url: 'https://cybercrime.gov.in/',
    statutory_timeframe: {
      en: 'Golden Hour (2 to 24 hours for freezing); 30 days for release',
      bn: 'গোল্ডেন আওয়ার (২ থেকে ২৪ ঘণ্টা); অবমুক্তিতে ৩০ দিন',
      hi: 'गोल्डन ऑवर (2 से 24 घंटे में फ्रीज); 30 दिन में रिलीज'
    },
    search_keywords: {
      en: ['1930 cyber fraud helpline', 'section 503 bnss account release', 'upi fraud money refund'],
      bn: ['সাইবার জালিয়াতি ১৯৩০', 'ব্যাঙ্ক অ্যাকাউন্ট ফ্রিজ', 'অনলাইন প্রতারণা টাকা ফেরত'],
      hi: ['साइबर फ्रॉड हेल्पलाइन 1930', 'धारा 503 खाता रिलीज', 'यूपीआई फ्रॉड रिफंड']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Call National Cyber Helpline 1930 immediately to trigger backend bank beneficiary freeze.',
        'Lodge formal complaint on https://cybercrime.gov.in and secure acknowledgment number.',
        'Obtain police investigation verification report identifying layer-1/layer-2 accounts.',
        'File petition under Section 503 BNSS before Magistrate to release unencumbered funds.'
      ],
      bn: [
        'টাকা কাটার সাথে সাথে ১৯৩০ নম্বরে কল করে প্রতারকের ব্যাঙ্ক অ্যাকাউন্টে টাকা হোল্ড করান।',
        'cybercrime.gov.in পোর্টালে অভিযোগ দায়ের করে জাতীয় রেফারেন্স একনলেজমেন্ট নিন।',
        'সাইবার থানার তদন্তকারী অফিসারের কাছ থেকে লেয়ার ট্রানজ্যাকশন রিপোর্ট সংগ্রহ করুন।',
        'সিজেএম আদালতে ধারা ৫০৩ বিএনএসএস পিটিশন দাখিল করে নিজের বৈধ অ্যাকাউন্ট আনফ্রিজ করান।'
      ],
      hi: [
        'धोखाधड़ी होते ही 1930 पर कॉल करें ताकि ठग के बैंक खाते में राशि तुरंत रोकी जा सके।',
        'cybercrime.gov.in पर ऑनलाइन प्राथमिकी दर्ज कर पावती संख्या प्राप्त करें।',
        'साइबर पुलिस से बैंक लेन-देन की जांच रिपोर्ट एवं सत्यापन प्रमाणपत्र प्राप्त करें।',
        'सीजेएम अदालत में धारा 503 बीएनएसएस के तहत बैंक खाता अनफ्रीज करने का आवेदन दें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-02-1',
        name: { en: 'Bank Account Statement & Cyber Crime FIR Slip', bn: 'ব্যাঙ্ক স্টেটমেন্ট ও সাইবার ক্রাইম এফআইআর স্লিপ', hi: 'बैंक खाता विवरण एवं साइबर क्राइम प्राथमिकी पावती' },
        issuing_authority: { en: 'Bank / National Cyber Crime Portal', bn: 'ব্যাঙ্ক / সাইবার পুলিশ', hi: 'बैंक / साइबर पुलिस' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-03',
    productCategory: 'free-checklist',
    title: {
      en: 'Order XXXVII Fast-Track Summary Debt Suit',
      bn: 'ফাস্ট-ট্র্যাক সামারি মানি রিকভারি দেওয়ানি মামলা',
      hi: 'आदेश 37 सीपीसी त्वरित समरी ऋण वसूली दीवानी वाद'
    },
    relevant_act: 'Order XXXVII Rules 1, 2 & 3, CPC, 1908',
    summary: {
      en: 'Fast-track recovery of liquidated commercial debts: City Civil Court / High Court for Kolkata; Designated Commercial Court (Rajarhat/Alipore) for districts.',
      bn: 'লিখিত চুক্তি বা চালানের ভিত্তিতে দ্রুত বকেয়া টাকা আদায় (কলকাতা সিটি সিভিল কোর্ট বনাম রাজারহাট বাণিজ্যিক আদালত)।',
      hi: 'लिखित अनुबंध या बिल के आधार पर त्वरित धन वसूली (कोलकाता सिटी सिविल कोर्ट बनाम राजारहाट वाणिज्यिक न्यायालय)।'
    },
    authority_forum: {
      en: 'City Civil Court (Kolkata) / Commercial Court Rajarhat (Districts)',
      bn: 'সিটি সিভিল কোর্ট (কলকাতা) / বাণিজ্যিক আদালত রাজারহাট (জেলা)',
      hi: 'सिटी सिविल कोर्ट (कोलकाता) / वाणिज्यिक न्यायालय राजारहाट (जिले)'
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
      en: ['order 37 cpc summary suit', 'fast track money recovery', 'commercial court rajarhat'],
      bn: ['সামারি স্যুট টাকা আদায়', 'অর্ডার ৩৭ সিপিসি', 'বাণিজ্যিক আদালত রাজারহাট'],
      hi: ['आदेश 37 समरी सूट', 'त्वरित धन वसूली वाद', 'राजारहाट वाणिज्यिक अदालत']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'Designated Commercial Court at Rajarhat / District Civil Courts',
          bn: 'নির্দিষ্ট বাণিজ্যিক আদালত, রাজারহাট / জেলা দেওয়ানি আদালত',
          hi: 'नामित वाणिज्यिक न्यायालय, राजारहाट / जिला न्यायालय'
        },
        portal_name: { en: 'District eCourts Services', bn: 'জেলা ই-কোর্ট পোর্টাল', hi: 'जिला ई-कोर्ट्स' },
        portal_url: 'https://districts.ecourts.gov.in/',
        steps: {
          en: [
            'Collate written contract, bills of exchange, or acknowledged GST invoices in district.',
            'File Summary Suit under Order XXXVII CPC before Designated Commercial Court at Rajarhat / Alipore.',
            'Court serves Form 4 summons; defendant must enter appearance within 10 days.',
            'If leave to defend is refused, judge immediately decrees full amount with interest.'
          ],
          bn: [
            'স্বাক্ষরিত চুক্তিপত্র, প্রমিশরি নোট বা জিএসটি ইনভয়েসের প্রামাণ্য নথিপত্র প্রস্তুত করুন।',
            'রাজারহাট বা আলিপুর বাণিজ্যিক আদালতে অর্ডার ৩৭ সিপিসি অনুযায়ী সামারি স্যুট দায়ের করুন।',
            'আদালত সমন জারি করবে; বিবাদীকে নোটিশের ১০ দিনের মধ্যে আদালতে হাজিরা দিতে হবে।',
            'বিবাদী সন্তোষজনক জবাব না দিলে বিচারক সরাসরি ডিক্রি জারি করে টাকা আদায় করাবেন।'
          ],
          hi: [
            'लिखित अनुबंध, प्रतिज्ञा पत्र अथवा हस्ताक्षरित बिलों का संकलन करें।',
            'राजारहाट/अलीपुर वाणिज्यिक न्यायालय में आदेश 37 सीपीसी के तहत समरी सूट दाखिल करें।',
            'अदालत द्वारा विशेष समन जारी होगा; प्रतिवादी को 10 दिन में उपस्थित होकर जवाब देना होगा।',
            'प्रतिवादी को बचाव की अनुमति न मिलने पर न्यायाधीश तुरंत ब्याज सहित पूरी राशि की डिक्री देंगे।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'City Civil Court at Calcutta / High Court Commercial Division',
          bn: 'সিটি সিভিল কোর্ট কলকাতা / হাইকোর্ট কমার্শিয়াল ডিভিশন',
          hi: 'सिटी सिविल कोर्ट कोलकाता / कलकत्ता हाईकोर्ट वाणिज्यिक शाखा'
        },
        portal_name: { en: 'Calcutta City Civil Court Portal', bn: 'কলকাতা সিটি সিভিল কোর্ট', hi: 'कलकत्ता हाईकोर्ट' },
        portal_url: 'https://calcuttahighcourt.gov.in/',
        steps: {
          en: [
            'Compile accepted commercial invoices and delivery challans originating within Kolkata.',
            'File Order XXXVII Summary Suit before City Civil Court or High Court Commercial Division.',
            'Court issues special summary summons; defendant must deposit security to contest.',
            'Court enters final money decree and issues execution precept against bank accounts.'
          ],
          bn: [
            'কলকাতার মধ্যে সম্পাদিত বাণিজ্যিক ইনভয়েস ও চালানের সমস্ত হিসাব প্রস্তুত করুন।',
            'সিটি সিভিল কোর্ট বা হাইকোর্টের বাণিজ্যিক বেঞ্চে অর্ডার ৩৭ সামারি মামলা ফাইল করুন।',
            'আদালত বিশেষ সমন পাঠাবে; বিবাদীকে মামলা লড়তে হলে সমপরিমাণ জামানত জমা দিতে হবে।',
            'আদালত চূড়ান্ত ডিক্রি জারি করে বিবাদীর ব্যাঙ্ক অ্যাকাউন্ট ক্রোকের নির্দেশ দেবে।'
          ],
          hi: [
            'कोलकाता में निष्पादित वाणिज्यिक बिलों एवं पावती रसीदों को संकलित करें।',
            'सिटी सिविल कोर्ट या हाईकोर्ट की वाणिज्यिक शाखा में आदेश 37 समरी वाद करें।',
            'अदालत विशेष समन जारी करेगी; प्रतिवादी को बचाव हेतु सुरक्षा राशि जमा करनी होगी।',
            'अदालत अंतिम धन डिक्री पारित कर बैंक खातों की कुर्की का आदेश जारी करेगी।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Collate written contract, bills of exchange, promissory notes, or acknowledged invoices.',
        'File Summary Suit under Order XXXVII CPC in jurisdictional Commercial/Civil Court.',
        'Court serves Form 4 summons; defendant must enter appearance within 10 days.',
        'If defendant fails to secure leave to defend, judge immediately decrees full amount with interest.'
      ],
      bn: [
        'স্বাক্ষরিত চুক্তিপত্র, প্রমিশরি নোট বা জিএসটি ইনভয়েসের প্রামাণ্য নথিপত্র প্রস্তুত করুন।',
        'বাণিজ্যিক আদালত বা সিভিল জজের এজলাসে অর্ডার ৩৭ সিপিসি অনুযায়ী সামারি স্যুট দায়ের করুন।',
        'আদালত সমন জারি করবে; বিবাদীকে নোটিশের ১০ দিনের মধ্যে আদালতে হাজিরা দিতে হবে।',
        'বিবাদী আত্মপক্ষ সমর্থনের গ্রহণযোগ্য যুক্তি না দিলে আদালত সরাসরি ডিক্রি জারি করে টাকা আদায় করাবে।'
      ],
      hi: [
        'लिखित अनुबंध, प्रतिज्ञा पत्र अथवा हस्ताक्षरित बिलों का संकलन करें।',
        'सक्षम वाणिज्यिक अथवा दीवानी न्यायालय में आदेश 37 सीपीसी के तहत समरी सूट दाखिल करें।',
        'अदालत द्वारा विशेष समन जारी होगा; प्रतिवादी को 10 दिन में उपस्थित होकर जवाब देना होगा।',
        'प्रतिवादी को बचाव की अनुमति न मिलने पर न्यायाधीश तुरंत ब्याज सहित पूरी राशि की डिक्री देंगे।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-03-1',
        name: { en: 'Liquidated Debt Agreement / Acknowledged Invoices', bn: 'স্বীকৃত দেনার চুক্তিপত্র ও জিএসটি ইনভয়েস', hi: 'स्वीकृत ऋण अनुबंध / हस्ताक्षरित जीएसटी बिल' },
        issuing_authority: { en: 'Parties to Contract', bn: 'চুক্তিকারী পক্ষসমূহ', hi: 'अनुबंध के पक्षकार' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-04',
    productCategory: 'free-checklist',
    title: {
      en: 'Protection Against Unlicensed Private Moneylenders',
      bn: 'লাইসেন্সহীন বেআইনি মহাজন ও অতিরিক্ত সুদের শোষণ (SDO বনাম কলকাতা)',
      hi: 'अवैध साहूकारों एवं अत्यधिक ब्याज शोषण के विरुद्ध सुरक्षा (एसडीओ बनाम कोलकाता)'
    },
    relevant_act: 'Bengal Money-Lenders Act, 1940 & BNS, 2023',
    summary: {
      en: 'Protection against predatory moneylenders: SDO & District Magistrate for districts; Kolkata Collectorate & Lalbazar Anti-Rowdy Section for Kolkata.',
      bn: 'লাইসেন্সহীন মহাজনের চড়া সুদের জুলুম ও ব্ল্যাকমেইল প্রতিরোধ (জেলায় এসডিও বনাম কলকাতায় লালবাজার অ্যান্টি-রাউডি সেল)।',
      hi: 'अवैध सूदखोरों के उत्पीड़न से मुक्ति (जिलों में एसडीओ बनाम कोलकाता में लालबाजार एंटी-राउडी सेल)।'
    },
    authority_forum: {
      en: 'SDO (Districts) / Kolkata Collectorate & Lalbazar',
      bn: 'মহকুমা শাসক (জেলা) / কলকাতা কালেক্টরেট ও লালবাজার',
      hi: 'एसडीओ (जिले) / कोलकाता कलेक्ट्रेट एवं लालबाजार'
    },
    forum_type: 'SDO_Tribunal',
    is_complex: false,
    official_portal_url: 'https://kolkatapolice.gov.in/',
    statutory_timeframe: {
      en: 'Immediate administrative / police injunction',
      bn: 'তাৎক্ষণিক প্রশাসনিক বা পুলিশি হস্তক্ষেপ',
      hi: 'त्वरित प्रशासनिक एवं पुलिस सुरक्षा'
    },
    search_keywords: {
      en: ['bengal money lenders act 1940', 'illegal moneylender harassment', 'lalbazar anti rowdy moneylender'],
      bn: ['বেআইনি মহাজনের জুলুম', 'বেঙ্গল মানি লেন্ডার্স অ্যাক্ট', 'লালবাজার মহাজন নালিশ'],
      hi: ['अवैध साहूकारी कानून', 'सूदखोरी से मुक्ति', 'लालबाजार साहूकार शिकायत']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'Sub-Divisional Officer (SDO) / District Magistrate & Local Police',
          bn: 'মহকুমা শাসক (SDO) / জেলাশাসক ও স্থানীয় থানা',
          hi: 'अनुमंडल दंडाधिकारी (SDO) / जिला मजिस्ट्रेट एवं थाना'
        },
        steps: {
          en: [
            'Verify whether moneylender holds active license from District Magistrate under Bengal Money-Lenders Act.',
            'Submit petition before SDO citing extortionate compounding interest and intimidation.',
            'SDO directs local police station to halt recovery agent harassment and register FIR under Section 308 BNS.',
            'Civil Court invokes Section 33 to scale down interest to statutory non-usurious ceilings.'
          ],
          bn: [
            'খোঁজ নিন মহাজনের কাছে জেলাশাসক কর্তৃক প্রদত্ত বৈধ মানি লেন্ডিং লাইসেন্স আছে কি না।',
            'অতিরিক্ত সুদ ও হুমকির বিবরণ দিয়ে মহকুমা শাসকের (SDO) কাছে দরখাস্ত জমা দিন।',
            'এসডিও স্থানীয় থানাকে নির্দেশ দিয়ে গুন্ডাবাহিনীর হেনস্থা বন্ধ করাবেন এবং ধারা ৩০৮ বিএনএসে মামলা করবেন।',
            'দেওয়ানি আদালত বেঙ্গল মানি লেন্ডার্স আইনের ধারা ৩৩ প্রয়োগ করে সমস্ত অতিরিক্ত সুদ বাতিল করবে।'
          ],
          hi: [
            'सत्यापित करें कि क्या साहूकार के पास जिला मजिस्ट्रेट द्वारा जारी वैध साहूकारी लाइसेंस है।',
            'अत्यधिक ब्याज एवं धमकियों का विवरण देकर एसडीओ के समक्ष औपचारिक आवेदन दें।',
            'एसडीओ पुलिस को वसूली एजेंटों का उत्पीड़न तुरंत रोकने एवं धारा 308 बीएनएस में केस का आदेश देंगे।',
            'दीवानी अदालत धारा 33 का प्रयोग कर अत्यधिक ब्याज को पूरी तरह निरस्त करेगी।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'Kolkata Collectorate & Kolkata Police (Anti-Rowdy Section, Lalbazar)',
          bn: 'কলকাতা কালেক্টরেট ও কলকাতা পুলিশ (অ্যান্টি-রাউডি শাখা, লালবাজার)',
          hi: 'कोलकाता कलेक्ट्रेट एवं कोलकाता पुलिस (लालबाजार)'
        },
        steps: {
          en: [
            'Verify moneylending registration with Collector of Stamp Revenue / Kolkata Collectorate.',
            'Lodge complaint at local police station and escalate to Anti-Rowdy Section, Lalbazar.',
            'Lalbazar detective department initiates action against unregistered lending syndicates.',
            'Chief Metropolitan Magistrate (Bankshall) orders seizure of blank signed cheques held by lender.'
          ],
          bn: [
            'কলকাতা কালেক্টরেট অফিসে খোঁজ নিয়ে নিশ্চিত হন মহাজন আদৌ নিবন্ধিত কি না।',
            'স্থানীয় থানায় এবং লালবাজারের অ্যান্টি-রাউডি শাখায় তোলাবাজির লিখিত অভিযোগ করুন।',
            'লালবাজার গোয়েন্দা বিভাগ বেআইনি মহাজনী সিন্ডিকেটের বিরুদ্ধে তাৎক্ষণিক অভিযান চালাবে।',
            'ব্যাঙ্কশাল কোর্টের ম্যাজিস্ট্রেট মহাজনের কাছে আটকে রাখা ব্ল্যাঙ্ক চেক বাজেয়াপ্তের নির্দেশ দেবে।'
          ],
          hi: [
            'कोलकाता कलेक्ट्रेट से सत्यापित करें कि क्या साहूकार का कोई वैध पंजीकरण है।',
            'स्थानीय थाने में शिकायत देकर लालबाजार स्थित एंटी-राउडी सेक्शन को मामला प्रेषित करें।',
            'लालबाजार जासूसी शाखा द्वारा अवैध साहूकारी गिरोह के विरुद्ध सख्त कार्रवाई होगी।',
            'बैंकशाल कोर्ट के मजिस्ट्रेट साहूकार के पास रखे खाली हस्ताक्षरित चेक जब्त करने का आदेश देंगे।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Verify whether lender holds an active Moneylending License from the District Magistrate.',
        'Demand inspection of statutory accounts register under Bengal Money-Lenders Act.',
        'If harassed by recovery agents, lodge criminal complaint for extortion under Section 308 BNS.',
        'In civil suits, plead Section 33 to reopen accounts and reduce interest to statutory caps.'
      ],
      bn: [
        'খোঁজ নিন মহাজনের কাছে জেলাশাসক কর্তৃক প্রদত্ত বৈধ মানি লেন্ডিং লাইসেন্স আছে কি না।',
        'আইন অনুযায়ী মহাজনি খাতার সরকারি অডিট ও হিসাবের বিবরণী আদালতে তলব করুন।',
        'গুন্ডা পাঠিয়ে হুমকি দিলে থানায় ধারা ৩০৮ বিএনএস অনুযায়ী তোলাবাজির ফৌজদারি মামলা করুন।',
        'দেওয়ানি আদালতে ধারা ৩৩ তুলে ধরে সুদের হিসাব নতুন করে করিয়ে অতিরিক্ত সুদ সম্পূর্ণ মকুব করান।'
      ],
      hi: [
        'सत्यापित करें कि क्या साहूकार के पास जिला मजिस्ट्रेट द्वारा जारी वैध साहूकारी लाइसेंस है।',
        'बंगाल साहूकारी अधिनियम के तहत आधिकारिक बहीखाता प्रस्तुत करने की मांग करें।',
        'वसूली के लिए गुंडों द्वारा धमकाने पर बीएनएस की धारा 308 (रंगदारी) में प्राथमिकी दर्ज कराएं।',
        'अदालत में धारा 33 का सहारा लेकर खातों की पुनः जांच कराएं और ब्याज को वैधानिक सीमा पर लाएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-04-1',
        name: { en: 'Moneylender Diary Passbook / Promissory Receipts', bn: 'মহাজনের হিসাব ডায়েরি বা সুদের রসিদ', hi: 'साहूकार की डायरी पर्ची / ब्याज भुगतान रसीद' },
        issuing_authority: { en: 'Moneylender / Complainant', bn: 'বেসরকারি মহাজন', hi: 'साहूकार / शिकायतकर्ता' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-05',
    productCategory: 'free-checklist',
    title: {
      en: 'Pre-Institution Commercial Mediation via DLSA',
      bn: 'ডিএলএসএ মারফত বাণিজ্যিক প্রাক-মামলা সালিশি',
      hi: 'विधिक सेवा प्राधिकरण (DLSA) द्वारा मुकदमा-पूर्व वाणिज्यिक मध्यस्थता'
    },
    relevant_act: 'Sec 12A, Commercial Courts Act, 2015',
    summary: {
      en: 'Mandatory pre-litigation mediation through DLSA before filing commercial suits: City Civil Mediation for Kolkata; District DLSA for districts.',
      bn: 'বাণিজ্যিক পাওনা মামলা করার আগে ডিএলএসএ-র মাধ্যমে বাধ্যতামূলক আপস-মীমাংসার প্রক্রিয়া (কলকাতা বনাম জেলা)।',
      hi: 'वाणिज्यिक मुकदमे से पूर्व जिला विधिक सेवा प्राधिकरण में अनिवार्य मध्यस्थता की कानूनी प्रक्रिया।'
    },
    authority_forum: {
      en: 'DLSA Mediation Cell (District / City Civil Kolkata)',
      bn: 'ডিএলএসএ মধ্যস্থতা সেল (জেলা / সিটি সিভিল কলকাতা)',
      hi: 'जिला विधिक सेवा प्राधिकरण (DLSA)'
    },
    forum_type: 'DLSA',
    is_complex: false,
    official_portal_url: 'https://wbja.nic.in/',
    statutory_timeframe: {
      en: '3 months (+ 2 months extension)',
      bn: '৩ মাস (প্রয়োজনে আরও ২ মাস বৃদ্ধি)',
      hi: '3 माह (2 माह अतिरिक्त विस्तार योग्य)'
    },
    search_keywords: {
      en: ['section 12a commercial courts', 'pre institution mediation dlsa', 'commercial suit settlement'],
      bn: ['বাণিজ্যিক মধ্যস্থতা ডিএলএসএ', 'ধারা ১২এ কমার্শিয়াল কোর্ট', 'প্রাক মামলা মীমাংসা'],
      hi: ['वाणिज्यिक मध्यस्थता धारा 12A', 'मुकदमा पूर्व समझौता', 'डीएलएसए वाणिज्यिक मध्यस्थता']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'District Legal Services Authority (DLSA) in District Courts',
          bn: 'জেলা আইনি সেবা কর্তৃপক্ষ (DLSA মধ্যস্থতা কেন্দ্র)',
          hi: 'जिला विधिक सेवा प्राधिकरण (DLSA)'
        },
        portal_name: { en: 'District eCourts DLSA Portal', bn: 'ডিএলএসএ পোর্টাল', hi: 'जिला विधिक सेवा' },
        portal_url: 'https://districts.ecourts.gov.in/',
        steps: {
          en: [
            'Submit Form-1 application before Member Secretary, District DLSA.',
            'DLSA issues mediation notice to opposite party giving 10 days to appear.',
            'Attend conciliation sessions in District Court mediation room.',
            'If party defaults, DLSA issues Non-Starter Report enabling filing at Rajarhat Commercial Court.'
          ],
          bn: [
            'জেলা ডিএলএসএ সচিবের কাছে ধারা ১২এ অনুযায়ী ফর্ম-১ মধ্যস্থতা আবেদন পেশ করুন।',
            'ডিএলএসএ বিবাদীকে নোটিশ পাঠিয়ে ১০ দিনের মধ্যে হাজিরার নির্দেশ দেবে।',
            'জেলা আদালতের মধ্যস্থতা কক্ষে উপস্থিত হয়ে আপস আলোচনায় অংশ নিন।',
            'বিবাদী উপস্থিত না হলে ডিএলএসএ নন-স্টার্টার রিপোর্ট দেবে যার ভিত্তিতে রাজারহাটে মামলা হবে।'
          ],
          hi: [
            'जिला विधिक सेवा प्राधिकरण के सचिव के समक्ष फॉर्म-1 में मध्यस्थता आवेदन दें।',
            'प्राधिकरण द्वारा विपक्षी दल को 10 दिनों में उपस्थित होने का नोटिस जारी होगा।',
            'जिला अदालत के मध्यस्थता कक्ष में सुलह बैठक में भाग लें।',
            'विपक्षी के न आने पर प्राधिकरण नॉन-स्टार्टर रिपोर्ट देगा जिसके बाद वाणिज्यिक अदालत में केस होगा।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'City Civil Court Mediation Centre / High Court Mediation Cell',
          bn: 'সিটি সিভিল কোর্ট মধ্যস্থতা কেন্দ্র / হাইকোর্ট মিডিয়েশন সেল',
          hi: 'सिटी सिविल कोर्ट मध्यस्थता केंद्र / हाईकोर्ट मीडिएशन'
        },
        portal_name: { en: 'Calcutta High Court Mediation Portal', bn: 'কলকাতা হাইকোর্ট মিডিয়েশন', hi: 'कलकत्ता हाईकोर्ट' },
        portal_url: 'https://calcuttahighcourt.gov.in/',
        steps: {
          en: [
            'File Section 12A pre-institution mediation at City Civil Court Mediation Centre.',
            'Judicial mediators conduct confidential caucus sessions between business heads.',
            'If settled, executed settlement operates as a binding court decree under Section 12A(4).',
            'If mediation fails, obtain Non-Starter Certificate to file suit at City Civil / High Court.'
          ],
          bn: [
            'সিটি সিভিল কোর্ট মধ্যস্থতা কেন্দ্রে ধারা ১২এ অনুযায়ী প্রাক-মামলা আবেদন জমা দিন।',
            'প্রশিক্ষিত মধ্যস্থতাকারীদের উপস্থিতিতে দুই ব্যবসায়িক পক্ষের মধ্যে আলোচনা হবে।',
            'আপস হলে ধারা ১২এ(৪) অনুযায়ী সম্পাদিত চুক্তিটি আদালতের চূড়ান্ত ডিক্রি হিসেবে কার্যকর হবে।',
            'ব্যর্থ হলে নন-স্টার্টার সার্টিফিকেট নিয়ে সিটি সিভিল কোর্ট বা হাইকোর্টে মামলা দায়ের করুন।'
          ],
          hi: [
            'सिटी सिविल कोर्ट मध्यस्थता केंद्र में धारा 12A के तहत मुकदमा-पूर्व आवेदन दाखिल करें।',
            'न्यायिक मध्यस्थों की उपस्थिति में व्यापारिक पक्षों के बीच गोपनीय बातचीत होगी।',
            'सहमति बनने पर धारा 12A(4) के तहत समझौता अदालती डिक्री के समान बाध्यकारी होगा।',
            'मध्यस्थता विफल होने पर नॉन-स्टार्टर प्रमाणपत्र लेकर सिटी सिविल कोर्ट में वाद करें।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Submit Form-1 application for pre-institution mediation before Member Secretary, DLSA.',
        'DLSA issues mediation notice to opposite party giving 10 days to appear.',
        'Attend joint conciliation sessions; if resolved, formal Settlement Agreement is executed.',
        'If party fails to appear, DLSA issues Non-Starter Report enabling direct court filing.'
      ],
      bn: [
        'ডিএলএসএ সচিবের কাছে ধারা ১২এ অনুযায়ী ফর্ম-১ মধ্যস্থতা আবেদন পেশ করুন।',
        'ডিএলএসএ বিবাদীকে নোটিশ পাঠিয়ে ১০ দিনের মধ্যে হাজিরার নির্দেশ দেবে।',
        'উভয় পক্ষ উপস্থিত হয়ে আপস রফায় পৌঁছালে আইনি সেটেলমেন্ট চুক্তি সম্পাদন করুন।',
        'বিবাদী উপস্থিত না হলে ডিএলএসএ নন-স্টার্টার রিপোর্ট জারি করবে যার ভিত্তিতে আদালতে মামলা হবে।'
      ],
      hi: [
        'जिला विधिक सेवा प्राधिकरण के सचिव के समक्ष फॉर्म-1 में मध्यस्थता आवेदन जमा करें।',
        'प्राधिकरण द्वारा विपक्षी दल को 10 दिनों में उपस्थित होने का औपचारिक नोटिस जारी होगा।',
        'संयुक्त मध्यस्थता बैठक में भाग लें; सहमति बनने पर बाध्यकारी समझौता ज्ञापन निष्पादित करें।',
        'विपक्षी के न आने पर प्राधिकरण नॉन-स्टार्टर रिपोर्ट देगा जिसके बाद सीधे अदालत में केस होगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-05-1',
        name: { en: 'Commercial Invoices & Statement of Truth Plaint Copy', bn: 'বাণিজ্যিক ইনভয়েস ও দাবির সত্যতা হলফনামা', hi: 'वाणिज्यिक इनवॉयस एवं सत्यता शपथ पत्र' },
        issuing_authority: { en: 'Applicant / DLSA', bn: 'আবেদনকারী / ডিএলএসএ', hi: 'आवेदक / विधिक सेवा प्राधिकरण' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-06',
    productCategory: 'lawyer-only',
    title: {
      en: 'Interim Compensation Deposit of 20% in Cheque Trials',
      bn: 'চেক বাউন্স মামলায় ২০% অন্তর্বর্তী ক্ষতিপূরণ আদায়',
      hi: 'चेक बाउंस मुकदमे में 20% अंतरिम मुआवजा आदेश'
    },
    relevant_act: 'Sec 143A, Negotiable Instruments Act, 1881',
    summary: {
      en: 'Securing an order directing the accused cheque drawer to deposit up to 20% of the cheque amount during trial.',
      bn: 'চেক বাউন্স মামলা শুরুতেই আসামিকে চেকের ২০% টাকা অন্তর্বর্তী ক্ষতিপূরণ হিসেবে জমা দেওয়ার আদালতের নির্দেশ।',
      hi: 'मुकदमा शुरू होते ही आरोपी से चेक राशि का 20% अंतरिम मुआवजा अदालत में जमा कराने का आदेश।'
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
      en: 'Deposit within 60 days (+ 30 days extension)',
      bn: 'আদেশের ৬০ দিনের মধ্যে জমা (+ ৩০ দিন বৃদ্ধি)',
      hi: 'आदेश के 60 दिन में जमा (+ 30 दिन विस्तार)'
    },
    search_keywords: {
      en: ['section 143a ni act', '20 percent interim compensation cheque', 'interim relief 138'],
      bn: ['২০ শতাংশ অন্তর্বর্তী ক্ষতিপূরণ', 'ধারা ১৪৩এ এনআই অ্যাক্ট', 'চেক বাউন্স অন্তর্বর্তী টাকা'],
      hi: ['धारा 143A चेक मुआवजा', '20% अंतरिम राहत चेक बाउंस', 'चेक ट्रायल अंतरिम जमा']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'Chief Judicial Magistrate (CJM) at District Headquarters',
          bn: 'জেলা সদরে প্রধান দন্ডনায়ক (CJM) আদালত',
          hi: 'जिला मुख्यालय पर मुख्य न्यायिक दंडाधिकारी (CJM) न्यायालय'
        },
        portal_name: { en: 'District eCourts Portal', bn: 'জেলা ই-কোর্ট পোর্টাল', hi: 'जिला ई-कोर्ट्स' },
        portal_url: 'https://districts.ecourts.gov.in/',
        steps: {
          en: [
            'After accused enters plea of not guilty under Section 251 CrPC/BNSS, file Section 143A application.',
            'Demonstrate prima facie legally enforceable debt through invoices and bank return memos.',
            'Magistrate orders accused to deposit up to 20% of cheque value within 60 days.',
            'If accused defaults, recover sum as land revenue fine under Section 421 CrPC/Sec 460 BNSS.'
          ],
          bn: [
            'আসামি দোষ অস্বীকার করলে ধারা ১৪৩এ অনুযায়ী চেকের ২০% টাকা অন্তর্বর্তী ক্ষতিপূরণের আবেদন করুন।',
            'বিল, চালান ও ব্যাঙ্ক মেমো দেখিয়ে প্রমাণ করুন চেকটির বিপরীতে বৈধ দেনা বিদ্যমান।',
            'ম্যাজিস্ট্রেট আসামিকে ৬০ দিনের মধ্যে চেকের মূল্যের ২০% ক্ষতিপূরণ জমা দেওয়ার নির্দেশ দেবেন।',
            'আসামি টাকা না দিলে আদালত ফৌজদারি জরিমানা হিসেবে আসামির সম্পত্তি ক্রোক করে টাকা আদায় করবে।'
          ],
          hi: [
            'आरोपी द्वारा अपराध अस्वीकार करने के बाद धारा 143A के तहत 20% अंतरिम मुआवजे का आवेदन दें।',
            'बिलों एवं बैंक मेमो द्वारा साबित करें कि चेक वैध कर्ज चुकाने के लिए ही दिया गया था।',
            'मजिस्ट्रेट आरोपी को 60 दिनों के भीतर चेक राशि का 20% जमा करने का आदेश देंगे।',
            'आरोपी के विफल रहने पर अदालत भू-राजस्व जुर्माने की भांति उसकी संपत्ति कुर्क कर वसूली करेगी।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'Chief Metropolitan Magistrate (CMM) at Bankshall Court, Calcutta',
          bn: 'কলকাতা বাঁকশাল কোর্টে প্রধান মহানগর দন্ডনায়ক (CMM) আদালত',
          hi: 'कलकत्ता बैंकशाल कोर्ट में मुख्य महानगर दंडाधिकारी (CMM) न्यायालय'
        },
        portal_name: { en: 'City Civil Court eServices', bn: 'সিটি সিভিল কোর্ট ই-সেবা', hi: 'सिटी सिविल कोर्ट' },
        portal_url: 'https://districts.ecourts.gov.in/',
        steps: {
          en: [
            'After accused enters plea of not guilty under Section 251 CrPC/BNSS, file Section 143A application.',
            'Demonstrate prima facie legally enforceable debt through invoices and bank return memos.',
            'Magistrate orders accused to deposit up to 20% of cheque value within 60 days.',
            'If accused defaults, recover sum as land revenue fine under Section 421 CrPC/Sec 460 BNSS.'
          ],
          bn: [
            'আসামি দোষ অস্বীকার করলে ধারা ১৪৩এ অনুযায়ী চেকের ২০% টাকা অন্তর্বর্তী ক্ষতিপূরণের আবেদন করুন।',
            'বিল, চালান ও ব্যাঙ্ক মেমো দেখিয়ে প্রমাণ করুন চেকটির বিপরীতে বৈধ দেনা বিদ্যমান।',
            'ম্যাজিস্ট্রেট আসামিকে ৬০ দিনের মধ্যে চেকের মূল্যের ২০% ক্ষতিপূরণ জমা দেওয়ার নির্দেশ দেবেন।',
            'আসামি টাকা না দিলে আদালত ফৌজদারি জরিমানা হিসেবে আসামির সম্পত্তি ক্রোক করে টাকা আদায় করবে।'
          ],
          hi: [
            'आरोपी द्वारा अपराध अस्वीकार करने के बाद धारा 143A के तहत 20% अंतरिम मुआवजे का आवेदन दें।',
            'बिलों एवं बैंक मेमो द्वारा साबित करें कि चेक वैध कर्ज चुकाने के लिए ही दिया गया था।',
            'मजिस्ट्रेट आरोपी को 60 दिनों के भीतर चेक राशि का 20% जमा करने का आदेश देंगे।',
            'आरोपी के विफल रहने पर अदालत भू-राजस्व जुर्माने की भांति उसकी संपत्ति कुर्क कर वसूली करेगी।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'After accused enters plea of not guilty under Section 251 CrPC/BNSS, file Section 143A application.',
        'Demonstrate prima facie legally enforceable debt through invoices and bank return memos.',
        'Magistrate orders accused to deposit up to 20% of cheque value within 60 days.',
        'If accused defaults, recover sum as land revenue fine under Section 421 CrPC/Sec 460 BNSS.'
      ],
      bn: [
        'আসামি দোষ অস্বীকার করলে ধারা ১৪৩এ অনুযায়ী চেকের ২০% টাকা অন্তর্বর্তী ক্ষতিপূরণের আবেদন করুন।',
        'বিল, চালান ও ব্যাঙ্ক মেমো দেখিয়ে প্রমাণ করুন চেকটির বিপরীতে বৈধ দেনা বিদ্যমান।',
        'ম্যাজিস্ট্রেট আসামিকে ৬০ দিনের মধ্যে চেকের মূল্যের ২০% ক্ষতিপূরণ জমা দেওয়ার নির্দেশ দেবেন।',
        'আসামি টাকা না দিলে আদালত ফৌজদারি জরিমানা হিসেবে আসামির সম্পত্তি ক্রোক করে টাকা আদায় করবে।'
      ],
      hi: [
        'आरोपी द्वारा अपराध अस्वीकार करने के बाद धारा 143A के तहत 20% अंतरिम मुआवजे का आवेदन दें।',
        'बिलों एवं बैंक मेमो द्वारा साबित करें कि चेक वैध कर्ज चुकाने के लिए ही दिया गया था।',
        'मजिस्ट्रेट आरोपी को 60 दिनों के भीतर चेक राशि का 20% जमा करने का आदेश देंगे।',
        'आरोपी के विफल रहने पर अदालत भू-राजस्व जुर्माने की भांति उसकी संपत्ति कुर्क कर वसूली करेगी।'
      ]
    },
    fees: [
      {
        id: 'fee-money-06-interim',
        kind: 'authority_calculated',
        label: {
          en: 'Section 143A Interim Compensation Application Fee',
          bn: 'ধারা ১৪৩এ অন্তর্বর্তী ক্ষতিপূরণ আবেদন ফি',
          hi: 'धारा 143A अंतरिम मुआवजा आवेदन शुल्क'
        },
        formula_description: {
          en: 'Nominal court fee under Criminal Procedure Code for interim application; varies by district. Confirm current rate at Magistrate Court before filing.',
          bn: 'আপারাধিক প্রক্রিয়া কোড অনুযায়ী নোপরি কোর্ট ফি; জেলা অনুযায়ী ভিন্ন। দাখিলের আগে ম্যাজিস্ট্রেট কোর্টে বর্তমান ফি যাচাই করুন।',
          hi: 'दंड प्रक्रिया संहिता अनुसार मामूली कोर्ट शुल्क; जिले अनुसार भिन्न। दाखिले से पहले मजिस्ट्रेट कोर्ट में वर्तमान शुल्क जांचें।'
        },
        conditions: {
          en: 'Application fee for interim compensation; separate from main trial costs.',
          bn: 'অন্তর্বর্তী ক্ষতিপূরণ আবেদনের ফি; মূল বিচারের খরচ আলাদা।',
          hi: 'अंतरिम मुआवजा आवेदन का शुल्क; मुख्य सुनवाई का खर्च अलग।'
        },
        scope: 'national',
        evidence: {
          status: 'verified',
          primary_source_title: 'Negotiable Instruments Act, 1881 Sec 143A & CrPC/BNSS',
          primary_source_url: 'https://www.indiacode.nic.in/',
          pinpoint: 'NI Act 1881 Sec 143A (20% max interim); CrPC Sec 421/BNSS Sec 460 (recovery as fine)',
          checked_on: '2026-10-15'
        }
      }
    ],
    timeline_info: [
      {
        id: 'time-money-06-interim-duration',
        kind: 'indicative_estimate',
        label: {
          en: 'Interim compensation deposit timeline',
          bn: 'অন্তর্বর্তী ক্ষতিপূরণ জমার সময়সীমা',
          hi: 'अंतरिम मुआवजा जमा की समयसीमा'
        },
        value_description: {
          en: 'Statutory 60-day deposit window from order date (+ 30 days extension on sufficient cause); defaults recovered as fine.',
          bn: 'আদেশের ৬০ দিনের মেয়াদ (+ ৩০ দিন বৃদ্ধি যথেষ্ট কারণে); টাকা না দিলে জরিমানা হিসেবে আদায়।',
          hi: 'आदेश से ६० दिन की वैधानिक अवधि (+ ३० दिन विस्तार पर्याप्त कारण पर); विफलता पर जुर्माना।'
        },
        scope: 'national',
        evidence: {
          status: 'verified',
          primary_source_title: 'Negotiable Instruments Act, 1881 Sec 143A(2)',
          primary_source_url: 'https://www.indiacode.nic.in/',
          pinpoint: 'Sec 143A(2) - 60 days (+ 30 extension); default as fine under CrPC 421',
          checked_on: '2026-10-15'
        }
      }
    ],
    required_documents: [
      {
        id: 'doc-money-06-1',
        name: { en: 'Section 143A Interim Compensation Petition & Order Sheet', bn: 'ধারা ১৪৩এ অন্তর্বর্তী ক্ষতিপূরণ আবেদন ও আদেশ কপি', hi: 'धारा 143A अंतरिम मुआवजा आवेदन एवं आदेश प्रति' },
        issuing_authority: { en: 'Magistrate Court', bn: 'ম্যাজিস্ট্রেট আদালত', hi: 'मजिस्ट्रेट न्यायालय' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-07',
    productCategory: 'paid',
    title: {
      en: 'Stop Payment & Account Closed Cheque Liability',
      bn: '"স্টপ পেমেন্ট" ও "অ্যাকাউন্ট ক্লোজড" চেক বাউন্স',
      hi: '"स्टॉप पेमेंट" एवं "खाता बंद" चेक बाउंस पर कानूनी देनदारी'
    },
    relevant_act: 'Sec 138 & 139, Negotiable Instruments Act, 1881',
    summary: {
      en: 'Holding drawers criminally liable even when cheques return with "Account Closed" or "Payment Stopped by Drawer".',
      bn: 'চেক দিয়ে চালাকি করে পেমেন্ট স্টপ বা ব্যাঙ্ক অ্যাকাউন্ট বন্ধ করলেও ফৌজদারি অপরাধ হিসেবে সমদণ্ডে বিচার।',
      hi: 'चेक देकर जानबूझकर बैंक में स्टॉप पेमेंट लगाने या खाता बंद करने पर भी धारा 138 का पूर्ण मुकदमा।'
    },
    authority_forum: {
      en: 'Magistrate Court',
      bn: 'ম্যাজিস্ট্রেট আদালত',
      hi: 'न्यायिक दंडाधिकारी न्यायालय'
    },
    forum_type: 'Magistrate_Court',
    is_complex: false,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '30 days statutory timeline',
      bn: '৩০ দিনের বিধিবদ্ধ সময়সীমা',
      hi: '30 दिन की वैधानिक सीमा'
    },
    search_keywords: {
      en: ['stop payment cheque bounce', 'account closed 138 ni act', 'payment stopped by drawer'],
      bn: ['স্টপ পেমেন্ট চেক বাউন্স', 'অ্যাকাউন্ট ক্লোজড চেক', 'পেমেন্ট বন্ধ করার প্রতারণা'],
      hi: ['स्टॉप पेमेंट चेक केस', 'खाता बंद चेक बाउंस', 'भुगतान रोका गया चेक']
    },
territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'Chief Judicial Magistrate (CJM) at District Headquarters',
          bn: 'জেলা সদরে প্রধান দন্ডনায়ক (CJM) আদালত',
          hi: 'जिला मुख्यालय पर मुख्य न्यायिक दंडाधिकारी (CJM) न्यायालय'
        },
        portal_name: { en: 'District eCourts Portal', bn: 'জেলা ই-কোর্ট পোর্টাল', hi: 'जिला ई-कोर्ट्स' },
        portal_url: 'https://districts.ecourts.gov.in/',
        steps: {
          en: [
            'Obtain Bank Memo showing reason "Payment Stopped by Drawer" or "Account Closed".',
            'Serve statutory demand notice citing Supreme Court rulings confirming Section 138 applicability.',
            'Drawer must establish existence of genuine pre-existing dispute to escape liability.',
            'Magistrate proceeds with trial; statutory presumption of liability under Section 139 applies.'
          ],
          bn: [
            'ব্যাঙ্ক মেমো সংগ্রহ করুন যেখানে লিখা আছে "Payment Stopped by Drawer" বা "Account Closed"।',
            'সুপ്രീম কোর্টের রুলিং যারা ধারা ১৩৮ প্রযোজ্য বলে বলে, সেটা উদ্ধৃত করে লিগ্যাল নোটিশ পাঠান।',
            'আসামিকে প্রমাণ করতে হবে সত্যিকার কোনো পূর্ববর্তী বিরোধ আছে, না হলে সাজা নিশ্চিত।',
            'ম্যাজিস্ট্রেট মামলা চালু করবেন; ধারা ১৩৯ অনুযায়ী দায়ের আইনি অনুমান করবেন।'
          ],
          hi: [
            'बैंक मेमो लें जिसमें "Payment Stopped by Drawer" या "Account Closed" लिखा हो।',
            'सुप्रीम कोर्ट के फैसले उद्धृत कर धारा 138 लागू होने का विधिक नोटिस भेजें।',
            'आरोपी को सिद्ध करना होगा कि कोई असली पूर्व विवाद था, अन्यथा सजा तय।',
            'मजिस्ट्रेट सुनवाई जारी रखेंगे; धारा 139 के तहत दायित्व का वैधानिक अनुमान लगेगा।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'Chief Metropolitan Magistrate (CMM) at Bankshall Court, Calcutta',
          bn: 'কলকাতা বাঁকশাল কোর্টে প্রধান মহানগর দন্ডনায়ক (CMM) আদালত',
          hi: 'कलकत्ता बैंकशाल कोर्ट में मुख्य महानगर दंडाधिकारी (CMM) न्यायालय'
        },
        portal_name: { en: 'City Civil Court eServices', bn: 'সিটি সিভিল কোর্ট ই-সেবা', hi: 'सिटी सिविल कोर्ट' },
        portal_url: 'https://districts.ecourts.gov.in/',
        steps: {
          en: [
            'Obtain Bank Memo showing reason "Payment Stopped by Drawer" or "Account Closed".',
            'Serve statutory demand notice citing Supreme Court rulings confirming Section 138 applicability.',
            'Drawer must establish existence of genuine pre-existing dispute to escape liability.',
            'Magistrate proceeds with trial; statutory presumption of liability under Section 139 applies.'
          ],
          bn: [
            'ব্যাঙ্ক মেমো সংগ্রহ করুন যেখানে লিখা আছে "Payment Stopped by Drawer" বা "Account Closed"।',
            'সুপ്രീম কোর্টের রুলিং যারা ধারা ১৩৮ প্রযোজ্য বলে বলে, সেটা উদ্ধৃত করে লিগ্যাল নোটিশ পাঠান।',
            'আসামিকে প্রমাণ করতে হবে সত্যিকার কোনো পূর্ববর্তী বিরোধ আছে, না হলে সাজা নিশ্চিত।',
            'ম্যাজিস্ট্রেট মামলা চালু করবেন; ধারা ১৩৯ অনুযায়ী দায়ের আইনি অনুমান করবেন।'
          ],
          hi: [
            'बैंक मेमो लें जिसमें "Payment Stopped by Drawer" या "Account Closed" लिखा हो।',
            'सुप्रीम कोर्ट के फैसले उद्धृत कर धारा 138 लागू होने का विधिक नोटिस भेजें।',
            'आरोपी को सिद्ध करना होगा कि कोई असली पूर्व विवाद था, अन्यथा सजा तय।',
            'मजिस्ट्रेट सुनवाई जारी रखेंगे; धारा 139 के तहत दायित्व का वैधानिक अनुमान लगेगा।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Obtain Bank Memo showing reason "Payment Stopped by Drawer" or "Account Closed".',
        'Serve statutory demand notice citing Supreme Court rulings confirming Section 138 applicability.',
        'Drawer must establish existence of genuine pre-existing dispute to escape liability.',
        'Magistrate proceeds with trial; statutory presumption of liability under Section 139 applies.'
      ],
      bn: [
        'ব্যাঙ্ক মেমো সংগ্রহ করুন যেখানে লিখা আছে "Payment Stopped by Drawer" বা "Account Closed"।',
        'সুপ്രീম কোর্টের রুলিং যারা ধারা ১৩৮ প্রযোজ্য বলে বলে, সেটা উদ্ধৃত করে লিগ্যাল নোটিশ পাঠান।',
        'আসামিকে প্রমাণ করতে হবে সত্যিকার কোনো পূর্ববর্তী বিরোধ আছে, না হলে সাজা নিশ্চিত।',
        'ম্যাজিস্ট্রেট মামলা চালু করবেন; ধারা ১৩৯ অনুযায়ী দায়ের আইনি অনুমান করবেন।'
      ],
      hi: [
        'बैंक मेमो लें जिसमें "Payment Stopped by Drawer" या "Account Closed" लिखा हो।',
        'सुप्रीम कोर्ट के फैसले उद्धृत कर धारा 138 लागू होने का विधिक नोटिस भेजें।',
        'आरोपी को सिद्ध करना होगा कि कोई असली पूर्व विवाद था, अन्यथा सजा तय।',
        'मजिस्ट्रेट सुनवाई जारी रखेंगे; धारा 139 के तहत दायित्व का वैधानिक अनुमान लगेगा।'
      ]
    },
    fees: [
      {
        id: 'fee-money-07-stop',
        kind: 'authority_calculated',
        label: {
          en: 'Section 138 Cheque Bounce Complaint Filing Fee',
          bn: 'ধারা ১৩৮ চেক বাউন্স মামলার দাখিল ফি',
          hi: 'धारा 138 चेक बाउंस परिवाद दाखिला शुल्क'
        },
        formula_description: {
          en: 'Nominal court fee under Criminal Procedure Code for cheque bounce complaint; varies by district. Confirm current rate at Magistrate Court before filing.',
          bn: 'আপারাধিক প্রক্রিয়া কোড অনুযায়ী নোপরি কোর্ট ফি; জেলা অনুযায়ী ভিন্ন। দাখিলের আগে ম্যাজিস্ট্রেট কোর্টে বর্তমান ফি যাচাই করুন।',
          hi: 'दंड प्रक्रिया संहिता अनुसार मामूली कोर्ट शुल्क; जिले अनुसार भिन्न। दाखिले से पहले मजिस्ट्रेट कोर्ट में वर्तमान शुल्क जांचें।'
        },
        conditions: {
          en: 'Complaint filing fee for Section 138 trial; separate from interim compensation application fees.',
          bn: 'ধারা ১৩৮ মামলার ফি; অন্তর্বর্তী ক্ষতিপূরণ আবেদনের ফি আলাদা।',
          hi: 'धारा 138 मुकदमे का शुल्क; अंतरिम मुआवजा आवेदन का शुल्क अलग।'
        },
        scope: 'national',
        evidence: {
          status: 'verified',
          primary_source_title: 'Negotiable Instruments Act, 1881 Sec 138 & CrPC/BNSS',
          primary_source_url: 'https://www.indiacode.nic.in/',
          pinpoint: 'NI Act 1881 Sec 138; CrPC Sec 200/BNSS Sec 223 (complaint filing); Dashrathbhai ruling on jurisdiction',
          checked_on: '2026-10-15'
        }
      }
    ],
    timeline_info: [
      {
        id: 'time-money-07-stop-duration',
        kind: 'indicative_estimate',
        label: {
          en: 'Cheque bounce trial duration',
          bn: 'চেক বাউন্স মামলার সময়',
          hi: 'चेक बाउंस मुकदमे की अवधि'
        },
        value_description: {
          en: 'Statutory 30-day notice + 30-day filing window; trial typically 1-2 years depending on court backlog and defense complexity.',
          bn: '৩০ দিন নোটিশ + ৩০ দিন মামলার সময়সীমা; বিচার সাধারণত ১-২ বছরে সম্পন্ন হয় কোর্ট ব্যাকলগ ও প্রতিরক্ষার জটিলতার ওপর নির্ভর করে।',
          hi: '३० दिन का नोटिस + ३० दिन की परिवाद अवधि; सुनवाई आमतौर पर १-२ वर्ष में पूरी होती है कोर्ट बैकलॉग और बचाव की जटिलता पर निर्भर।'
        },
        scope: 'national',
        evidence: {
          status: 'verified',
          primary_source_title: 'Negotiable Instruments Act, 1881 Sec 138 & Supreme Court Dashrathbhai Trikambhai',
          primary_source_url: 'https://www.indiacode.nic.in/',
          pinpoint: 'NI Act Sec 138 (30+30 day timelines); Dashrathbhai v. State (jurisdiction); trial duration per NALSA data 2024',
          checked_on: '2026-10-15'
        }
      }
    ],
    required_documents: [
      {
        id: 'doc-money-07-1',
        name: { en: 'Return Memo with Reason "Payment Stopped" or "Account Closed"', bn: '"স্টপ পেমেন্ট" উল্লেখিত ব্যাঙ্ক রিটার্ন মেমো', hi: '"स्टॉप पेमेंट" अथवा "अकाउंट क्लोज्ड" बैंक वापसी मेमो' },
        issuing_authority: { en: 'Commercial Bank', bn: 'বাণিজ্যিক ব্যাঙ্ক', hi: 'बैंक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-08',
    productCategory: 'free-checklist',
    title: {
      en: 'MSME Delayed Payment Recovery & Compound Interest',
      bn: 'ক্ষুদ্র ও মাঝারি শিল্পের (MSME) বকেয়া পাওনা আদায়',
      hi: 'सूक्ष्म एवं लघु उद्योग (MSME) बकाया भुगतान एवं चक्रवृद्धि ब्याज वसूली'
    },
    relevant_act: 'Sec 18 & 19, MSMED Act, 2006',
    summary: {
      en: 'Mandatory 45-day payment limit for buyers; claims accrue monthly compound interest at three times the RBI bank rate.',
      bn: 'এমএসএমই ভেন্ডরদের ৪৫ দিনের মধ্যে বিল মেটানো বাধ্যতামূলক; অনাদায়ে আরবিআই সুদের ৩ গুণ হারে সুদ আদায়।',
      hi: 'एमएसएमई विक्रेताओं का बिल 45 दिन में चुकाना अनिवार्य; न चुकाने पर आरबीआई दर से तीन गुना चक्रवृद्धि ब्याज।'
    },
    authority_forum: {
      en: 'West Bengal Micro & Small Enterprises Facilitation Council (MSEFC)',
      bn: 'পশ্চিমবঙ্গ ক্ষুদ্র শিল্প সমাধান কাউন্সিল (MSEFC)',
      hi: 'पश्चिम बंगाल एमएसएमई सुविधा परिषद (MSEFC)'
    },
    forum_type: 'MSME_Council',
    is_complex: false,
    official_portal_url: 'https://samadhaan.msme.gov.in/',
    statutory_timeframe: {
      en: '90 days statutory disposal',
      bn: '৯০ দিনের বিধিবদ্ধ নিষ্পত্তি',
      hi: '90 दिन में वैधानिक निस्तारण'
    },
    search_keywords: {
      en: ['msme samadhaan portal', 'msmed act section 18', '3x rbi interest delayed payment'],
      bn: ['এমএসএমই সমাধান', 'ক্ষুদ্র শিল্প বকেয়া বিল', 'এমএসএমই ৩ গুণ সুদ'],
      hi: ['एमएसएमई समाधान पोर्टल', 'धारा 18 एमएसएमई', 'तीन गुना ब्याज एमएसएमई']
    },
territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'District Micro & Small Enterprises Facilitation Council (MSEFC) at District Industries Centre',
          bn: 'জেলা ক্ষুদ্র শিল্প সমাধান কাউন্সিল (MSEFC), জেলা শিল্প কেন্দ্র',
          hi: 'जिला एमएसएमई सुविधा परिषद (MSEFC), जिला उद्योग केंद्र'
        },
        portal_name: { en: 'MSME Samadhaan Portal', bn: 'এমএসএমই সমাধান পোর্টাল', hi: 'एमएसएमई समाधान पोर्टल' },
        portal_url: 'https://samadhaan.msme.gov.in/',
        steps: {
          en: [
            'Verify enterprise holds valid Udyam Registration Certificate prior to supply date.',
            'File online case on MSME Samadhaan portal selecting the District MSEFC jurisdiction.',
            'District Council issues conciliation notice; if unsettled, matter auto-converts to arbitration.',
            'District Council passes arbitral award for principal plus monthly compound interest at 3x RBI rate.'
          ],
          bn: [
            'পণ্য সরবরাহের তারিখের পূর্বে বৈধ উদ্যম (Udyam) রেজিস্ট্রেশন সার্টিফিকেট রয়েছে কি না নিশ্চিত করুন।',
            'এমএসএমই সমাধান পোর্টালে জেলার MSEFC অতএব করিয়ে চালান ও রসিদ আপলোড করে কেস ফাইল করুন।',
            'জেলার কাউন্সিল বিবাদীকে ডকে আপসের সুযোগ দেবে; সমাধান না হলে সরাসরি আর্বিট্রেশন শুরু হবে।',
            'জেলার কাউন্সিল আরবিআই সুদের ৩ গুণ হারে চক্রবৃদ্ধি সুদসহ ডিক্রি সমতুল্য রোয়েদাদ পাস করবে।'
          ],
          hi: [
            'पुष्टि करें कि माल आपूर्ति की तारीख से पहले आपके पास वैध उद्यम पंजीकरण प्रमाणपत्र था।',
            'एमएसएमई समाधान पोर्टल पर जिले के MSEFC का चयन कर इनवॉयस एवं डिलीवरी रसीद अपलोड करें।',
            'जिला परिषद पहले सुलह का प्रयास करेगी; विफल होने पर मामला स्वतः मध्यस्थता में बदल जाएगा।',
            'जिला परिषद आरबीआई दर के 3 गुना चक्रवृद्धि ब्याज सहित वसूली का अंतिम पंचाट पारित करेगी।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'West Bengal Micro & Small Enterprises Facilitation Council (MSEFC) at Directorate of MSME, Kolkata',
          bn: 'পশ্চিমবঙ্গ ক্ষুদ্র শিল্প সমাধান কাউন্সিল (MSEFC), এমএসএমই ডিরেক্টরেট, কলকাতা',
          hi: 'पश्चिम बंगाल एमएसएमई सुविधा परिषद (MSEFC), एमएसएमई निदेशालय, कोलकाता'
        },
        portal_name: { en: 'MSME Samadhaan Portal', bn: 'এমএসএমই সমাধান পোর্টাল', hi: 'एमएसएमई समाधान पोर्टल' },
        portal_url: 'https://samadhaan.msme.gov.in/',
        steps: {
          en: [
            'Verify enterprise holds valid Udyam Registration Certificate prior to supply date.',
            'File online case on MSME Samadhaan portal selecting the Kolkata MSEFC jurisdiction.',
            'Kolkata Council issues conciliation notice; if unsettled, matter auto-converts to arbitration.',
            'Kolkata Council passes arbitral award for principal plus monthly compound interest at 3x RBI rate.'
          ],
          bn: [
            'পণ্য সরবরাহের তারিখের পূর্বে বৈধ উদ্যম (Udyam) রেজিস্ট্রেশন সার্টিফিকেট রয়েছে কি না নিশ্চিত করুন।',
            'এমএসএমই সমাধান পোর্টালে কলকাতার MSEFC অতএব করিয়ে চালান ও রসিদ আপলোড করে কেস ফাইল করুন।',
            'কলকাতার কাউন্সিল বিবাদীকে ডকে আপসের সুযোগ দেবে; সমাধান না হলে সরাসরি আর্বিট্রেশন শুরু হবে।',
            'কলকাতার কাউন্সিল আরবিআই সুদের ৩ গুণ হারে চক্রবৃদ্ধি সুদসহ ডিক্রি সমতুল্য রোয়েদাদ পাস করবে।'
          ],
          hi: [
            'पुष्टि करें कि माल आपूर्ति की तारीख से पहले आपके पास वैध उद्यम पंजीकरण प्रमाणपत्र था।',
            'एमएसएमई समाधान पोर्टल पर कोलकाता MSEFC का चयन कर इनवॉयस एवं डिलीवरी रसीद अपलोड करें।',
            'कोलकाता परिषद पहले सुलह का प्रयास करेगी; विफल होने पर मामला स्वतः मध्यस्थता में बदल जाएगा।',
            'कोलकाता परिषद आरबीआई दर के 3 गुना चक्रवृद्धि ब्याज सहित वसूली का अंतिम पंचाट पारित करेगी।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Verify enterprise holds valid Udyam Registration Certificate prior to supply date.',
        'File online case on MSME Samadhaan portal (https://samadhaan.msme.gov.in/).',
        'Council issues conciliation notice; if unsettled, matter auto-converts to arbitration.',
        'Council passes arbitral award for principal plus monthly compound interest at 3x RBI rate.'
      ],
      bn: [
        'পণ্য সরবরাহের তারিখের পূর্বে বৈধ উদ্যম (Udyam) রেজিস্ট্রেশন সার্টিফিকেট রয়েছে কি না নিশ্চিত করুন।',
        'কেন্দ্রীয় সরকারের এমএসএমই সমাধান পোর্টালে চালান ও রসিদ আপলোড করে কেস ফাইল করুন।',
        'কাউন্সিল বিবাদীকে ডকে আপসের সুযোগ দেবে; সমাধান না হলে সরাসরি আর্বিট্রেশন শুরু হবে।',
        'কাউন্সিল আরবিআই সুদের ৩ গুণ হারে চক্রবৃদ্ধি সুদসহ ডিক্রি সমতুল্য রোয়েদাদ পাস করবে।'
      ],
      hi: [
        'पुष्टि करें कि माल आपूर्ति की तारीख से पहले आपके पास वैध उद्यम पंजीकरण प्रमाणपत्र था।',
        'एमएसएमई समाधान पोर्टल पर इनवॉयस एवं डिलीवरी रसीद अपलोड कर ऑनलाइन वाद करें।',
        'परिषद पहले सुलह का प्रयास करेगी; विफल होने पर मामला स्वतः मध्यस्थता में बदल जाएगा।',
        'परिषद आरबीआई दर के 3 गुना चक्रवृद्धि ब्याज सहित वसूली का अंतिम पंचाट पारित करेगी।'
      ]
    },
    fees: [
      {
        id: 'fee-money-08-msme',
        kind: 'authority_calculated',
        label: {
          en: 'MSME Facilitation Council Filing Fee',
          bn: 'এমএসএমই সমাধান কাউন্সিল দাখিল ফি',
          hi: 'एमएसएमई सुविधा परिषद दाखिला शुल्क'
        },
        formula_description: {
          en: 'Nominal fee as per MSMED Act 2006 rules; no fee for micro enterprises. Confirm current rate on Samadhaan portal before filing.',
          bn: 'এমএসএমইডি আইন ২০০৬ বিধি অনুযায়ী নোপরি ফি; সূক্ষ্ম উদ্যোগের জন্য ফি মওকূফ। দাখিলের আগে সমাধান পোর্টালে বর্তমান হার যাচাই করুন।',
          hi: 'एमएसएमईडी अधिनियम 2006 नियमों के अनुसार मामूली शुल्क; सूक्ष्म उद्यमों के लिए शुल्क मुक्त। दाखिले से पहले समाधान पोर्टल पर वर्तमान दर जांचें।'
        },
        conditions: {
          en: 'Fee varies by enterprise category (micro/small/medium) and claimed amount. Portal-assessed fee controls.',
          bn: 'ফি উদ্যোগের ক্যাটেগরি (সূক্ষ্ম/ক্ষুদ্র/মাঝারি) ও দাবি করা টাকার ওপর ভিন্ন হয়। পোর্টাল নির্ধারিত ফিই চূড়ান্ত।',
          hi: 'शुल्क उद्यम की श्रेणी (सूक्ष्म/लघु/मध्यम) और दावा राशि पर निर्भर करता है। पोर्टल द्वारा निर्धारित शुल्क प्रभावी होगा।'
        },
        scope: 'state_wb',
        evidence: {
          status: 'verified',
          primary_source_title: 'MSMED Act, 2006 Sec 18-19 & West Bengal MSME Rules',
          primary_source_url: 'https://samadhaan.msme.gov.in/',
          pinpoint: 'MSMED Act 2006 Sec 18(3); WB MSME Facilitation Council Rules 2017',
          checked_on: '2026-10-15'
        }
      }
    ],
    timeline_info: [
      {
        id: 'time-money-08-msme-duration',
        kind: 'indicative_estimate',
        label: {
          en: 'MSME Samadhaan processing time',
          bn: 'এমএসএমই সমাধান প্রক্রিয়াকরণের সময়',
          hi: 'एमएसएमई समाधान प्रक्रिया की अवधि'
        },
        value_description: {
          en: 'Statutory 90-day disposal mandate under MSMED Act Sec 18(3); actual duration depends on council backlog and arbitration complexity.',
          bn: 'এমএসএমইডি আইনের ধারা ১৮(৩) অনুযায়ী ৯০ দিনের বাধ্যতামূলক নিষ্পত্তি; প্রকৃত সময় কাউন্সিলের ব্যাকলগ ও আর্বিট্রেশনের জটিলতার ওপর নির্ভর।',
          hi: 'एमएसएमईडी अधिनियम की धारा 18(3) के तहत ९० दिन की वैधानिक निपटान अवधि; वास्तविक अवधि परिषद के बैकलॉग और मध्यस्थता की जटिलता पर निर्भर।'
        },
        scope: 'state_wb',
        evidence: {
          status: 'verified',
          primary_source_title: 'MSMED Act, 2006 Sec 18(3)',
          primary_source_url: 'https://msme.gov.in/',
          pinpoint: 'Section 18(3) - 90 days disposal; compound interest at 3x RBI bank rate',
          checked_on: '2026-10-15'
        }
      }
    ],
    required_documents: [
      {
        id: 'doc-money-08-1',
        name: { en: 'Udyam Registration Certificate & Accepted Invoices with Delivery Proof', bn: 'উদ্যম রেজিস্ট্রেশন সনদ ও পণ্য সরবরাহের চালানের কপি', hi: 'उद्यम पंजीकरण प्रमाणपत्र एवं माल डिलीवरी रसीदें' },
        issuing_authority: { en: 'Ministry of MSME / Buyer', bn: 'এমএসএমই মন্ত্রক / ক্রেতা', hi: 'एमएसएमई मंत्रालय / खरीदार' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-09',
    productCategory: 'free-checklist',
    title: {
      en: 'Unpaid Wages, Gratuity & Retrenchment Dues',
      bn: 'বকেয়া বেতন, গ্র্যাচুইটি ও ছাঁটাইয়ের ক্ষতিপূরণ আদায়',
      hi: 'बकाया वेतन, ग्रेच्युटी एवं छंटनी मुआवजे की कानूनी वसूली'
    },
    relevant_act: 'Payment of Gratuity Act, 1972 / Payment of Wages Act',
    summary: {
      en: 'Recovering withheld gratuity, uncredited provident fund, notice pay, and severance dues from defaulting employers.',
      bn: 'চাকরি ছাড়ার পর কোম্পানি গ্র্যাচুইটি, প্রভিডেন্ট ফান্ড বা বকেয়া বেতন আটকে রাখলে সরকারি শ্রম আদালতে মামলা।',
      hi: 'नौकरी छोड़ने या निकाले जाने पर कंपनी द्वारा रोकी गई ग्रेच्युटी, पीएफ एवं बकाया वेतन की वसूली।'
    },
    authority_forum: {
      en: 'Controlling Authority under Payment of Gratuity Act / Labour Court',
      bn: 'গ্র্যাচুইটি নিয়ন্ত্রক আধিকারিক / শ্রম আদালত',
      hi: 'ग्रेच्युटी नियंत्रक प्राधिकारी / श्रम न्यायालय'
    },
    forum_type: 'Labour_Court',
    is_complex: false,
    official_portal_url: 'https://wblc.gov.in/',
    statutory_timeframe: {
      en: '30 to 60 working days',
      bn: '৩০ থেকে ৬০ কার্যদিবস',
      hi: '30 से 60 कार्यदिवस'
    },
    search_keywords: {
      en: ['unpaid gratuity form i', 'controlling authority gratuity wb', 'unpaid salary labour court'],
      bn: ['গ্র্যাচুইটি আদায়', 'বকেয়া বেতন শ্রম আদালত', 'ছাঁটাই ক্ষতিপূরণ'],
      hi: ['ग्रेच्युटी वसूली फॉर्म I', 'बकाया वेतन श्रम अदालत', 'छंटनी मुआवजा']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'Controlling Authority, Labour Department at District Labour Office / Labour Court',
          bn: 'জেলা শ্রম কার্যালয়ে শ্রম দপ্তরের নিয়ন্ত্রক আধিকারিক / শ্রম আদালত',
          hi: 'जिला श्रम कार्यालय में श्रम विभाग के नियंत्रक प्राधिकारी / श्रम न्यायालय'
        },
        portal_name: { en: 'West Bengal Labour Department Portal', bn: 'পশ্চিমবঙ্গ শ্রম দপ্তর পোর্টাল', hi: 'पश्चिम बंगाल श्रम विभाग' },
        portal_url: 'https://wblc.gov.in/',
        steps: {
          en: [
            'Submit Form-I application to employer claiming gratuity within 30 days of retirement/exit.',
            'If employer defaults for 30 days, file Form-N petition before Controlling Authority at District Labour Office.',
            'Controlling Authority conducts inquiry, determines dues, and directs payment with 10% interest.',
            'Upon default, District Collector issues recovery certificate to seize company bank accounts.'
          ],
          bn: [
            'চাকরি ছাড়ার ৩০ দিনের মধ্যে গ্র্যাচুইটি মেটানোর জন্য সংস্থাকে ফর্ম-আই (Form-I) আবেদন দিন।',
            'সংস্থা ৩০ দিনে টাকা না দিলে জেলা শ্রম অফিসের নিয়ন্ত্রক আধিকারিকের এজলাসে ফর্ম-এন (Form-N) দাখিল করুন।',
            'শ্রম আধিকারিক শুনানি ডেকে ১০% চক্রবৃদ্ধি সুদসহ সম্পূর্ণ গ্র্যাচুইটি মেটানোর আদেশ দেবেন।',
            'সংস্থা টাকা না দিলে জেলাশাসকের মাধ্যমে রিকভারি সার্টিফিকেট জারি করে কোম্পানির অ্যাকাউন্ট ক্রোক হবে।'
          ],
          hi: [
            'नौकरी छोड़ने के 30 दिनों के भीतर कंपनी को फॉर्म-I में ग्रेच्युटी भुगतान का आवेदन दें।',
            '30 दिन में भुगतान न होने पर जिला श्रम कार्यालय के नियंत्रक प्राधिकारी के पास फॉर्म-N याचिका दें।',
            'अधिकारी द्वारा जांच कर 10% वार्षिक ब्याज सहित बकाया ग्रेच्युटी भुगतान का आदेश होगा।',
            'भुगतान न होने पर जिला कलेक्टर कंपनी के खाते कुर्क कर भू-राजस्व की भांति वसूली कराएंगे।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'Controlling Authority, Labour Department at Kolkata Labour Office / Labour Court, Kolkata',
          bn: 'কলকাতা শ্রম অফিসে শ্রম দপ্তরের নিয়ন্ত্রক আধিকারিক / শ্রম আদালত, কলকাতা',
          hi: 'कोलकाता श्रम कार्यालय में श्रम विभाग के नियंत्रक प्राधिकारी / श्रम न्यायालय, कोलकाता'
        },
        portal_name: { en: 'West Bengal Labour Department Portal', bn: 'পশ্চিমবঙ্গ শ্রম দপ্তর পোর্টাল', hi: 'पश्चिम बंगाल श्रम विभाग' },
        portal_url: 'https://wblc.gov.in/',
        steps: {
          en: [
            'Submit Form-I application to employer claiming gratuity within 30 days of retirement/exit.',
            'If employer defaults for 30 days, file Form-N petition before Controlling Authority at Kolkata Labour Office.',
            'Controlling Authority conducts inquiry, determines dues, and directs payment with 10% interest.',
            'Upon default, Kolkata Collector issues recovery certificate to seize company bank accounts.'
          ],
          bn: [
            'চাকরি ছাড়ার ৩০ দিনের মধ্যে গ্র্যাচুইটি মেটানোর জন্য সংস্থাকে ফর্ম-আই (Form-I) আবেদন দিন।',
            'সংস্থা ৩০ দিনে টাকা না দিলে কলকাতা শ্রম অফিসের নিয়ন্ত্রক আধিকারিকের এজলাসে ফর্ম-এন (Form-N) দাখিল করুন।',
            'শ্রম আধিকারিক শুনানি ডকে ১০% চক্রবৃদ্ধি সুদসহ সম্পূর্ণ গ্র্যাচুইটি মেটানোর আদেশ দেবেন।',
            'সংস্থা টাকা না দিলে কলকাতা কোলেক্টরের মাধ্যমে রিকভারি সার্টিফিকেট জারি করে কোম্পানির অ্যাকাউন্ট ক্রোক হবে।'
          ],
          hi: [
            'नौकरी छोड़ने के 30 दिनों के भीतर कंपनी को फॉर्म-I में ग्रेच्युटी भुगतान का आवेदन दें।',
            '30 दिन में भुगतान न होने पर कोलकाता श्रम कार्यालय के नियंत्रक प्राधिकारी के पास फॉर्म-N याचिका दें।',
            'अधिकारी द्वारा जांच कर 10% वार्षिक ब्याज सहित बकाया ग्रेच्युटी भुगतान का आदेश होगा।',
            'भुगतान न होने पर कोलकाता कलेक्टर कंपनी के खाते कुर्क कर भू-राजस्व की भांति वसूली कराएंगे।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Submit Form-I application to employer claiming gratuity within 30 days of retirement/exit.',
        'If employer defaults for 30 days, file Form-N petition before Controlling Authority (Labour Dept).',
        'Controlling Authority conducts inquiry, determines dues, and directs payment with 10% interest.',
        'Upon default, Collector issues recovery certificate to seize company bank accounts.'
      ],
      bn: [
        'চাকরি ছাড়ার ৩০ দিনের মধ্যে গ্র্যাচুইটি মেটানোর জন্য সংস্থাকে ফর্ম-আই (Form-I) আবেদন দিন।',
        'সংস্থা ৩০ দিনে টাকা না দিলে শ্রম দপ্তরের নিয়ন্ত্রক আধিকারিকের এজলাসে ফর্ম-এন (Form-N) দাখিল করুন।',
        'শ্রম আধিকারিক শুনানি ডকে ১০% চক্রবৃদ্ধি সুদসহ সম্পূর্ণ গ্র্যাচুইটি মেটানোর আদেশ দেবেন।',
        'সংস্থা টাকা না দিলে জেলাশাসকের মাধ্যমে রিকভারি সার্টিফিকেট জারি করে কোম্পানির অ্যাকাউন্ট ক্রোক হবে।'
      ],
      hi: [
        'नौकरी छोड़ने के 30 दिनों के भीतर कंपनी को फॉर्म-I में ग्रेच्युटी भुगतान का आवेदन दें।',
        '30 दिन में भुगतान न होने पर श्रम विभाग के नियंत्रक प्राधिकारी के पास फॉर्म-N याचिका दें।',
        'अधिकारी द्वारा जांच कर 10% वार्षिक ब्याज सहित बकाया ग्रेच्युटी भुगतान का आदेश होगा।',
        'भुगतान न होने पर जिला कलेक्टर कंपनी के खाते कुर्क कर भू-राजस्व की भांति वसूली कराएंगे।'
      ]
    },
    fees: [
      {
        id: 'fee-money-09-gratuity',
        kind: 'authority_calculated',
        label: {
          en: 'Gratuity Application Filing Fee',
          bn: 'গ্র্যাচুইটি আবেদন দাখিল ফি',
          hi: 'ग्रेच्युटी आवेदन दाखिला शुल्क'
        },
        formula_description: {
          en: 'Nominal court fee under Payment of Gratuity Act, 1972; varies by claimed amount. Confirm current rate at Labour Office before filing.',
          bn: 'পেমেন্ট অফ গ্র্যাচুইটি আইন ১৯৭২ অনুযায়ী নোপরি কোর্ট ফি; দাবি করা টাকার ওপর ভিন্ন হয়। দাখিলের আগে শ্রম অফিসে বর্তমান হার যাচাই করুন।',
          hi: 'ग्रेच्युटी भुगतान अधिनियम 1972 के अनुसार मामूली कोर्ट शुल्क; दावा राशि के अनुसार भिन्न होता है। दाखिले से पहले श्रम कार्यालय में वर्तमान दर जांचें।'
        },
        conditions: {
          en: 'Fee assessed on the value of gratuity claimed; statutory ceilings apply under Sec 4(3).',
          bn: 'ফি দাবি করা গ্র্যাচুইটির মূল্যের ওপর নির্ধারিত; ধারা ৪(৩) অনুযায়ী আইনি সীমা প্রযোজ্য।',
          hi: 'शुल्क दावा की गई ग्रेच्युटी के मूल्य पर निर्धारित; धारा 4(3) के अनुसार वैधानिक सीमाएं लागू।'
        },
        scope: 'national',
        evidence: {
          status: 'verified',
          primary_source_title: 'Payment of Gratuity Act, 1972 & WB Labour Rules',
          primary_source_url: 'https://wblc.gov.in/',
          pinpoint: 'Payment of Gratuity Act 1972 Sec 7-8; court fee on gratuity claim value',
          checked_on: '2026-10-15'
        }
      }
    ],
    timeline_info: [
      {
        id: 'time-money-09-gratuity-duration',
        kind: 'indicative_estimate',
        label: {
          en: 'Gratuity claim processing time',
          bn: 'গ্র্যাচুইটি দাবি প্রক্রিয়াকরণের সময়',
          hi: 'ग्रेच्युटी दावे की प्रक्रिया की अवधि'
        },
        value_description: {
          en: 'Statutory 30-60 working days for Controlling Authority inquiry; recovery certificate execution adds 3-6 months.',
          bn: 'নিয়ন্ত্রক আধিকারিকের তদন্তের জন্য ৩০-৬০ কার্যদিবস; রিকভারি সার্টিফিকেট এক্সিকিউশনে ৩-৬ মাস যুক্ত।',
          hi: 'नियंत्रक प्राधिकारी की जांच के लिए ३०-६० कार्यदिवस; रिकवरी सर्टिफिकेट निष्पादन में ३-६ माह अतिरिक्त।'
        },
        scope: 'national',
        evidence: {
          status: 'verified',
          primary_source_title: 'Payment of Gratuity Act, 1972 Sec 7-8',
          primary_source_url: 'https://wblc.gov.in/',
          pinpoint: 'Sec 7 (30 days for employer response); Sec 8 (recovery certificate); WB Labour Court data 2024',
          checked_on: '2026-10-15'
        }
      }
    ],
    required_documents: [
      {
        id: 'doc-money-09-1',
        name: { en: 'Appointment Letter, Service Certificate & Form-I Requisition Copy', bn: 'নিয়োগপত্র, সার্ভিস রেকর্ড ও ফর্ম-আই আবেদনের কপি', hi: 'नियुक्ति पत्र, सेवा प्रमाणपत्र एवं फॉर्म-I मांग प्रति' },
        issuing_authority: { en: 'Employer / Complainant', bn: 'নিয়োগকারী সংস্থা', hi: 'नियोक्ता कंपनी' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-10',
    productCategory: 'free-checklist',
    title: {
      en: 'Investor Refund in Ponzi / Non-Banking Scams',
      bn: 'ভুয়ো অর্থলগ্নি সংস্থা (চিটফান্ড) থেকে টাকা ফেরত',
      hi: 'पोंजी स्कीम / चिटफंड घोटालों में डूबे पैसे की कानूनी वापसी'
    },
    relevant_act: 'WB Protection of Interest of Depositors (In Financial Establishments) Act',
    summary: {
      en: 'Submitting claims before Justice Designated Courts and Competent Authorities to liquidate scam company assets.',
      bn: 'বেআইনি অর্থলগ্নি সংস্থার সম্পত্তি নিলাম করে প্রতারিত ক্ষুদ্র আমানতকারীদের টাকা ফেরত পাওয়ার প্রক্রিয়া।',
      hi: 'चिटफंड कंपनियों की संपत्तियां नीलाम कर निवेशकों का पैसा वापस दिलाने की अदालती प्रक्रिया।'
    },
    authority_forum: {
      en: 'Designated Special Court / Competent Authority (Finance Dept)',
      bn: 'বিশেষ অর্থলগ্নি আদালত / কম্পিটেন্ট অথরিটি (অর্থ দপ্তর)',
      hi: 'विशेष चिटफंड न्यायालय / सक्षम प्राधिकारी (वित्त विभाग)'
    },
    forum_type: 'Competent_Authority',
    is_complex: true,
    official_portal_url: 'https://finance.wb.gov.in/',
    statutory_timeframe: {
      en: 'Judicial liquidation timeline',
      bn: 'সম্পত্তি নিলামের বিচারিক সময়সীমা',
      hi: 'न्यायिक नीलामी प्रक्रिया'
    },
    search_keywords: {
      en: ['chit fund refund wb', 'wbpid act claim', 'ponzi scheme investor refund'],
      bn: ['চিটফান্ড টাকা ফেরত', 'অর্থলগ্নি প্রতারণা', 'আমানতকারী সুরক্ষা আইন'],
      hi: ['चिटफंड रिफंड बंगाल', 'पोंजी स्कीम पैसा वापसी', 'निवेशक संरक्षण कानून']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Collect original bond certificates, deposit receipts, and agent passbooks.',
        'Submit claim petition before Competent Authority appointed under the State Depositors Act.',
        'Special Court ratifies attachment of company real estate, hotel resorts, and luxury vehicles.',
        'Assets auctioned via public tender; pro-rata refunds distributed directly into verified accounts.'
      ],
      bn: [
        'অর্থলগ্নি সংস্থার দেওয়া আসল সার্টিফিকেট, বন্ড পেপার ও জমার রসিদ একত্রিত করুন।',
        'রাজ্য আমানতকারী সুরক্ষা আইনের আওতায় কম্পিটেন্ট অথরিটির কাছে ক্ষতিপূরণের ক্লেইম জমা দিন।',
        'বিশেষ আদালত কোম্পানির জমিজমা, রিসর্ট ও ব্যাঙ্ক অ্যাকাউন্ট বাজেয়াপ্তির চূড়ান্ত সিলমোহর দেবে।',
        'সরকারি নিলামের মাধ্যমে সম্পত্তি বিক্রি করে আমানতকারীদের ব্যাঙ্ক অ্যাকাউন্টে সরাসরি টাকা বণ্টন হবে।'
      ],
      hi: [
        'चिटफंड कंपनी द्वारा जारी मूल बॉन्ड प्रमाणपत्र, पासबुक एवं जमा रसीदें संकलित करें।',
        'राज्य जमाकर्ता संरक्षण अधिनियम के तहत सक्षम प्राधिकारी के पास दावा पत्र जमा करें।',
        'विशेष अदालत द्वारा कंपनी की भूमि, होटल एवं वाहनों की कुर्की को अंतिम रूप दिया जाएगा।',
        'सरकारी नीलामी द्वारा संपत्तियां बेचकर सभी निवेशकों के बैंक खातों में पैसा भेजा जाएगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-10-1',
        name: { en: 'Original Investment Bond / Certificate & Bank KYC Details', bn: 'বিনিয়োগের মূল বন্ড সার্টিফিকেট ও ব্যাঙ্ক অ্যাকাউন্ট বিবরণী', hi: 'मूल निवेश बॉन्ड / प्रमाणपत्र एवं बैंक खाता विवरण' },
        issuing_authority: { en: 'Non-Banking Entity / Investor', bn: 'অর্থলগ্নি সংস্থা / আমানতকারী', hi: 'चिटफंड कंपनी / निवेशक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-11',
    productCategory: 'lawyer-only',
    title: {
      en: 'Execution of Money Decree via Bank Garnishee Order',
      bn: 'ব্যাঙ্ক অ্যাকাউন্ট অ্যাটাচ করে টাকার ডিক্রি জারি',
      hi: 'बैंक खाता कुर्क कराकर दीवानी धन डिक्री का निष्पादन (गार्निशी आदेश)'
    },
    relevant_act: 'Order XXI Rules 46 & 46A–46I, CPC, 1908',
    summary: {
      en: 'Directing banks to freeze judgment debtor accounts and directly transfer decreed funds to the court.',
      bn: 'টাকার মামলায় জেতার পর দেনাদার টাকা না দিলে তার ব্যাঙ্ক অ্যাকাউন্ট ফ্রিজ করে সরাসরি ডিক্রির টাকা আদায়।',
      hi: 'अदालत से मुकदमा जीतने के बाद देनदार के बैंक खाते से सीधे डिक्री की राशि अदालत में मंगाना।'
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
      en: '3 to 6 months',
      bn: '৩ থেকে ৬ মাস',
      hi: '3 से 6 माह'
    },
    search_keywords: {
      en: ['garnishee order bank cpc', 'order 21 rule 46a execution', 'attach bank account money decree'],
      bn: ['ব্যাঙ্ক অ্যাকাউন্ট ক্রোক ডিক্রি', 'গ্যার্নিশি অর্ডার সিপিসি', 'টাকা আদায় এক্সিকিউশন'],
      hi: ['गार्निशी आदेश बैंक', 'आदेश 21 नियम 46A', 'बैंक खाता जब्ती वसूली']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'File Execution Petition under Order XXI Rule 11 CPC with certified money decree.',
        'Identify judgment debtor bank branches and account numbers through discovery inquiries.',
        'Move application under Order XXI Rule 46A CPC for issuance of a Garnishee Notice.',
        'Court orders bank manager to debit funds from debtor balance and transmit draft to court.'
      ],
      bn: [
        'আদালতের টাকার ডিক্রির সার্টিফাইড কপিসহ অর্ডার ২১ রুল ১১ সিপিসি অনুযায়ী এক্সিকিউশন মামলা করুন।',
        'খোঁজ নিয়ে দেনাদারের নির্দিষ্ট ব্যাঙ্ক ব্রাঞ্চ ও সক্রিয় সেভিংস/কারেন্ট অ্যাকাউন্ট নম্বর চিহ্নিত করুন।',
        'অর্ডার ২১ রুল ৪৬এ সিপিসি অনুযায়ী ব্যাঙ্ক ম্যানেজারের নামে গ্যার্নিশি নোটিশ জারির আবেদন দিন।',
        'আদালত ব্যাঙ্ককে নির্দেশ দেবে দেনাদারের ব্যালেন্স কেটে সরাসরি আদালতের নামে ডিমান্ড ড্রাফট জমা করতে।'
      ],
      hi: [
        'प्रमाणित धन डिक्री के साथ आदेश 21 नियम 11 सीपीसी में निष्पादन याचिका दाखिल करें।',
        'देनदार के बैंक खाते, शाखा एवं बैंक बैलेंस का सटीक विवरण पता करें।',
        'आदेश 21 नियम 46A के तहत बैंक प्रबंधक के नाम गार्निशी नोटिस जारी कराने का आवेदन दें।',
        'अदालत बैंक को आदेश देगी कि देनदार के खाते से राशि काटकर कोर्ट के नाम ड्राफ्ट भेजे।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-11-1',
        name: { en: 'Certified Copy of Final Money Judgment & Decree', bn: 'টাকার মামলার চূড়ান্ত রায় ও ডিক্রির সার্টিফাইড কপি', hi: 'अंतिम दीवानी निर्णय एवं धन डिक्री की प्रमाणित प्रति' },
        issuing_authority: { en: 'Civil Court Record Room', bn: 'দেওয়ানি আদালত রেকর্ড রুম', hi: 'सिविल कोर्ट अभिलेखागार' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-12',
    productCategory: 'free-checklist',
    title: {
      en: 'Recovery of Advance Token Money for Failed Deals',
      bn: 'বাতিল চুক্তির অগ্রিম বায়নার টাকা ও টোকেন ফেরত',
      hi: 'रद्द सौदे की बयाना (टोकन) राशि ब्याज सहित वापसी का वाद'
    },
    relevant_act: 'Sec 64 & 65, Indian Contract Act, 1872',
    summary: {
      en: 'Recovering token money with interest when seller fails to show clear title or calls off deal unilaterally.',
      bn: 'জমির ত্রুটিপূর্ণ কাগজের জন্য চুক্তি বাতিল হলে বা বিক্রেতা বেঁকে বসলে অগ্রিম বায়নার টাকা ফেরতের মামলা।',
      hi: 'जमीन का मालिकाना हक साफ न होने या विक्रेता द्वारा मुकरने पर अग्रिम बयाना राशि वापस पाना।'
    },
    authority_forum: {
      en: 'Civil Court / Commercial Court',
      bn: 'দেওয়ানি আদালত / বাণিজ্যিক আদালত',
      hi: 'सिविल न्यायालय / वाणिज्यिक न्यायालय'
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
      en: ['refund token money land deal', 'section 65 contract act', 'advance recovery failed deal'],
      bn: ['বায়নার টাকা ফেরত মামলা', 'টোকেন মানি রিফান্ড', 'চুক্তিভঙ্গ ক্ষতিপূরণ'],
      hi: ['बयाना वापसी मुकदमा', 'धारा 65 अनुबंध कानून', 'टोकन मनी रिफंड']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Compile bank payment receipts, token money vouchers, and draft sale agreements.',
        'Serve statutory demand notice citing Section 65 Contract Act (obligation to restore advantage).',
        'File Summary Suit under Order XXXVII CPC or ordinary Money Suit claiming 12% interest.',
        'Obtain decree directing seller to refund full token money plus legal costs.'
      ],
      bn: [
        'টোকেন মানির ব্যাঙ্ক ট্রানজ্যাকশন, রসিদ ও প্রাথমিক চুক্তিপত্রের সমস্ত প্রমাণ গুছিয়ে নিন।',
        'চুক্তি আইনের ধারা ৬৫ উল্লেখ করে সুবিধা ফেরত দেওয়ার দাবিতে বিক্রেতাকে লিগ্যাল নোটিশ দিন।',
        'অর্ডার ৩৭ সিপিসি অনুযায়ী দ্রুত বিচারের সামারি স্যুট অথবা ১২% সুদে সাধারণ মানি স্যুট করুন।',
        'আদালত বিক্রেতাকে সম্পূর্ণ অগ্রিম টাকা সুদ ও মামলার খরচসহ ফেরত দেওয়ার ডিক্রি প্রদান করবে।'
      ],
      hi: [
        'टोकन मनी की बैंक रसीदें, चेक प्रतियां एवं बयाना अनुबंध पत्र एकत्र करें।',
        'अनुबंध अधिनियम की धारा 65 का हवाला देकर बयाना लौटाने का औपचारिक मांग पत्र भेजें।',
        'आदेश 37 सीपीसी में समरी वाद अथवा 12% ब्याज सहित सामान्य धन वसूली वाद करें।',
        'अदालत से पूरी बयाना राशि, ब्याज एवं मुकदमे के खर्च की वसूली की डिक्री प्राप्त करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-12-1',
        name: { en: 'Signed Token Advance Receipt & Legal Cancellation Notice', bn: 'অগ্রিম বায়নার রসিদ ও চুক্তি বাতিলের নোটিশ', hi: 'हस्ताक्षरित टोकन रसीद एवं विधिक निरस्तीकरण नोटिस' },
        issuing_authority: { en: 'Vendor / Advocate', bn: 'বিক্রেতা / আইনজীবী', hi: 'विक्रेता / अधिवक्ता' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-13',
    productCategory: 'paid',
    title: {
      en: 'Promissory Note (Handnote / Dasto-khat) Debt Suit',
      bn: 'হ্যান্ডনোট ও প্রমিশরি নোটে ধার দেওয়া টাকা আদায়',
      hi: 'प्रॉमिसरी नोट (हैंडनोट/दस्तखत) पर दिए गए कर्ज की कानूनी वसूली'
    },
    relevant_act: 'Sec 4 & 79 NI Act r/w Order XXXVII CPC',
    summary: {
      en: 'Suing on validly stamped promissory notes; statutory presumption under Section 118 applies to shift burden of proof.',
      bn: 'রেভিনিউ স্ট্যাম্পে দস্তখত করা হ্যান্ডনোটে ধার দেওয়া টাকা আদায়ের সামারি দেওয়ানি মামলা।',
      hi: 'रेवेन्यू स्टांप पर दस्तखतशुदा प्रॉमिसरी नोट के आधार पर दिए गए कर्ज की अदालत से सीधी वसूली।'
    },
    authority_forum: {
      en: 'Civil Court (Summary Procedure)',
      bn: 'দেওয়ানি আদালত (সংক্ষিপ্ত বিচার প্রক্রিয়া)',
      hi: 'सिविल न्यायालय (संक्षिप्त प्रक्रिया)'
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
      en: ['promissory note recovery suit', 'handnote dasto khat money', 'section 4 ni act'],
      bn: ['হ্যান্ডনোট টাকা আদায়', 'দস্তখত প্রমিশরি নোট', 'ধার দেওয়া টাকা ফেরত'],
      hi: ['प्रॉमिसरी नोट वाद', 'हैंडनोट कर्ज वसूली', 'दस्तखती रसीद मुकदमा']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Verify promissory note bears requisite revenue stamps and signature across stamps.',
        'Confirm claim is within 3 years of execution date under Article 35 Limitation Act.',
        'Serve statutory advocate notice demanding repayment within 15 days.',
        'File Summary Suit under Order XXXVII CPC; Section 118 presumption mandates recovery.'
      ],
      bn: [
        'যাচাই করুন প্রমিশরি নোটে পর্যাপ্ত রেভিনিউ স্ট্যাম্প মারা আছে এবং স্ট্যাম্পের ওপর স্বাক্ষর রয়েছে।',
        'তামাদি আইনের অনুচ্ছেদ ৩৫ মেনে নিশ্চিত হন যে হ্যান্ডনোটের বয়স ৩ বছরের কম রয়েছে।',
        '১৫ দিনের মধ্যে ঋণ পরিশোধের চূড়ান্ত আলটিমেটাম দিয়ে আইনজীবীর মাধ্যমে নোটিশ পাঠান।',
        'অর্ডার ৩৭ সিপিসি অনুযায়ী মামলা করুন; ধারা ১১৮-র আইনি অনুমানে বিচারক সরাসরি ডিক্রি দেবেন।'
      ],
      hi: [
        'जांचें कि प्रॉमिसरी नोट पर उचित राजस्व (रेवेन्यू) टिकट लगा है और उस पर हस्ताक्षर हैं।',
        'मियाद अधिनियम के अनुसार सुनिश्चित करें कि हैंडनोट लिखे जाने के 3 साल के भीतर दावा हो।',
        '15 दिन में ऋण चुकाने का अंतिम विधिक नोटिस अधिवक्ता द्वारा ऋणी को प्रेषित करें।',
        'आदेश 37 सीपीसी में समरी वाद करें; धारा 118 के कानूनी अनुमान से अदालत सीधे डिक्री देगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-13-1',
        name: { en: 'Original Stamped Promissory Note (Handnote)', bn: 'রেভিনিউ স্ট্যাম্পযুক্ত মূল প্রমিশরি নোট', hi: 'मूल स्टांपित प्रॉमिसरी नोट (हैंडनोट)' },
        issuing_authority: { en: 'Borrower', bn: 'ঋণগ্রহীতা', hi: 'कर्जदार' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-14',
    productCategory: 'paid',
    title: {
      en: 'Extortion by Digital Loan Apps & Recovery Agents',
      bn: 'ডিজিটাল লোন অ্যাপস ও রিকভারি এজেন্ট ব্ল্যাকমেলিং',
      hi: 'डिजिटल लोन ऐप द्वारा ब्लैकमेलिंग एवं वसूली एजेंटों का उत्पीड़न'
    },
    relevant_act: 'RBI Digital Lending Guidelines 2022 & BNS, 2023',
    summary: {
      en: 'Police action and cyber blocking against predatory loan apps accessing contacts, photo morphing, and extortion.',
      bn: 'চীনা বা ভুয়ো লোন অ্যাপের ছবি বিকৃত করা, আত্মীয়দের ফোন করে হুমকি দেওয়া ও ব্ল্যাকমেইল প্রতিরোধ।',
      hi: 'लोन ऐप द्वारा फोटो एडिट कर बदनाम करने, फोन हैक करने एवं वसूली एजेंटों की गुंडागर्दी पर रोक।'
    },
    authority_forum: {
      en: 'Cyber Police Station (1930) / RBI Sachet Portal',
      bn: 'সাইবার পুলিশ থানা (১৯৩০) / আরবিআই সচেত পোর্টাল',
      hi: 'साइबर पुलिस स्टेशन (1930) / आरबीआई सचेत पोर्टल'
    },
    forum_type: 'Cyber_Cell',
    is_complex: false,
    official_portal_url: 'https://sachet.rbi.org.in/',
    statutory_timeframe: {
      en: 'Immediate emergency FIR & server takedown',
      bn: 'অবিলম্বে জরুরি এফআইআর ও অ্যাপ ব্লক',
      hi: 'तत्काल आपातकालीन प्राथमिकी एवं ऐप बैन'
    },
    search_keywords: {
      en: ['loan app harassment complaint', 'morphed photo recovery agent', 'rbi sachet illegal lending'],
      bn: ['লোন অ্যাপ প্রতারণা', 'ছবি বিকৃত করে ব্ল্যাকমেল', 'আরবিআই সচেত'],
      hi: ['लोन ऐप ब्लैकमेल', 'फोटो मॉर्फिंग वसूली', 'आरबीआई सचेत शिकायत']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Preserve screenshots of threatening WhatsApp chats, morphed photos, and extortion calls.',
        'File immediate complaint on Cyber Crime Portal (1930) under Sections 308 & 351 BNS.',
        'Report illegal app on RBI Sachet portal (https://sachet.rbi.org.in/) for server takedown.',
        'Cyber Police directs Google Play/Apple Store to remove app and freezes mule accounts.'
      ],
      bn: [
        'হুমকি মেসেজ, বিকৃত ছবির স্ক্রিনশট এবং যে নম্বরগুলো থেকে ফোন আসছে তার কল রেকর্ড রাখুন।',
        'সাইবার পোর্টালে (১৯৩০) ধারা ৩০৮ ও ৩৫১ বিএনএস (তোলাবাজি ও ভীতি প্রদর্শন) অনুযায়ী এফআইআর করুন।',
        'আরবিআই-এর সচেত (Sachet) পোর্টালে অননুমোদিত অ্যাপের বিরুদ্ধে অভিযোগ দায়ের করুন।',
        'সাইবার পুলিশ প্লে-স্টোর থেকে অ্যাপ ব্লক করাবে এবং বিকাশ বা ব্যাঙ্ক অ্যাকাউন্ট ফ্রিজ করবে।'
      ],
      hi: [
        'धमकी भरे व्हाट्सएप संदेश, एडिट की गई अश्लील फोटो एवं कॉल रिकॉर्डिंग के साक्ष्य जुटाएं।',
        'साइबर हेल्पलाइन 1930 पर रंगदारी एवं ब्लैकमेलिंग की बीएनएस धाराओं में तुरंत रिपोर्ट करें।',
        'अवैध ऐप की जांच हेतु आरबीआई के सचेत (Sachet) पोर्टल पर विवरण दर्ज कराएं।',
        'साइबर पुलिस द्वारा ऐप को प्ले-स्टोर से हटवाया जाएगा एवं ठगों के बैंक खाते सील होंगे।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-14-1',
        name: { en: 'Screenshots of Threat Messages & App Transaction History', bn: 'হুমকির চ্যাট স্ক্রিনশট ও অ্যাপের লেনদেন প্রমাণ', hi: 'धमकी भरे संदेशों के स्क्रीनशॉट एवं ऐप लेन-देन विवरण' },
        issuing_authority: { en: 'Complainant / Mobile Device', bn: 'অভিযোগকারী', hi: 'शिकायतकर्ता' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-15',
    productCategory: 'paid',
    title: {
      en: 'Demand Notice for Corporate Debt under IBC',
      bn: 'কোম্পানির বকেয়া টাকা আদায়ে আইবিসি নোটিস (Form 3 & 4)',
      hi: 'कंपनियों से बकाया वसूली हेतु आईबीसी (IBC) धारा 8 मांग नोटिस'
    },
    relevant_act: 'Sec 8 & 9, Insolvency & Bankruptcy Code, 2016',
    summary: {
      en: 'Serving statutory 10-day demand notice before initiating corporate insolvency against corporate debtors (min ₹1 Crore).',
      bn: 'কোম্পানি মাল নিয়ে টাকা না দিলে ১০ দিনের আইবিসি নোটিস পাঠিয়ে এনসিএলটি-তে দেউলিয়া করার প্রক্রিয়া।',
      hi: 'प्राइवेट लिमिटेड कंपनियों द्वारा माल का पैसा न देने पर 10 दिन का नोटिस देकर दिवालिया कोर्ट (NCLT) ले जाना।'
    },
    authority_forum: {
      en: 'National Company Law Tribunal (NCLT, Kolkata Bench)',
      bn: 'জাতীয় কোম্পানি আইন ট্রাইব্যুনাল (NCLT কলকাতা)',
      hi: 'राष्ट्रीय कंपनी विधि अधिकरण (NCLT कोलकाता)'
    },
    forum_type: 'NCLT',
    is_complex: true,
    official_portal_url: 'https://nclt.gov.in/',
    statutory_timeframe: {
      en: '10 days statutory notice window',
      bn: '১০ দিনের বিধিবদ্ধ নোটিশের মেয়াদ',
      hi: '10 दिन का वैधानिक नोटिस'
    },
    search_keywords: {
      en: ['section 8 demand notice ibc', 'corporate debtor default nclt', 'operational creditor form 3'],
      bn: ['আইবিসি ধারা ৮ নোটিশ', 'এনসিএলটি কলকাতা মামলা', 'কোম্পানির দেনা আদায়'],
      hi: ['आईबीसी धारा 8 नोटिस', 'एनसीएलटी कोलकाता केस', 'कंपनी दिवालिया प्रक्रिया']
    },
territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'National Company Law Tribunal (NCLT) Bench having jurisdiction over debtor company registered office',
          bn: 'ঋণী কোম্পানির নিবন্ধিত অফিসাধীন NCLT বেঞ্চ (কলকাতা বেঞ্চ হয় সাধারণত)',
          hi: 'ऋणी कंपनी के पंजीकृत कार्यालय के क्षेत्राधिकार वाला NCLT बेंच (आमतौर पर कोलकाता बेंच)'
        },
        portal_name: { en: 'NCLT E-Filing Portal', bn: 'এনসিএলটি ই-ফাইলিং পোর্টাল', hi: 'NCLT ई-फाइलिंग' },
        portal_url: 'https://nclt.gov.in/',
        steps: {
          en: [
            'Verify operational debt exceeds statutory ₹1 Crore default threshold.',
            'Serve statutory 10-day Demand Notice in Form-3 or Form-4 with invoices attached.',
            'Wait 10 days; if debtor fails to prove genuine pre-existing dispute, cause arises.',
            'File Section 9 Insolvency Petition before jurisdictional NCLT Bench to appoint IRP.'
          ],
          bn: [
            'নিশ্চিত করুন বকেয়া পাওনা আইনের ন্যূনতম ১ কোটি টাকার সীমা অতিক্রম করেছে।',
            'ইনভয়েস ও চালানের প্রতিলিপিসহ ফর্ম-৩ বা ফর্ম-৪ অনুযায়ী ১০ দিনের আইবিসি নোটিশ পাঠান।',
            '১০ দিন অপেক্ষা করুন; কোম্পানি কোনো পূর্ববর্তী বিরোধের প্রমাণ না দিলে দেউলিয়া মামলা নিশ্চিত।',
            'সম্যনামস্থ NCLT বেঞ্চে ধারা ৯ অনুযায়ী মামলা করে অন্তর্বর্তী আইআরপি বসানোর আবেদন করুন।'
          ],
          hi: [
            'जांचें कि कंपनी पर बकाया राशि कानूनी सीमा (न्यूनतम ₹1 करोड़) से अधिक है।',
            'इनवॉयस संलग्न कर फॉर्म-3 अथवा फॉर्म-4 में 10 दिनों का वैधानिक मांग नोटिस भेजें।',
            '10 दिन में यदि कंपनी पूर्व विवाद साबित न कर सके, तो दिवालिया वाद का अधिकार बनेगा।',
            'संबंधित NCLT बेंच में धारा 9 के तहत कंपनी के खिलाफ कॉरपोरेट दिवालिया वाद दाखिल करें।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'National Company Law Tribunal (NCLT, Kolkata Bench) - Principal Bench for West Bengal',
          bn: 'জাতীয় কোম্পানি আইন ট্রাইব্যুনাল (NCLT কলকাতা বেঞ্চ) - পশ্চিমবঙ্গের মূল বেঞ্চ',
          hi: 'राष्ट्रीय कंपनी विधि अधिकरण (NCLT कोलकाता बेंच) - पश्चिम बंगाल का मुख्य बेंच'
        },
        portal_name: { en: 'NCLT Kolkata E-Filing Portal', bn: 'এনসিএলটি কলকাতা ই-ফাইলিং', hi: 'NCLT कोलकाता ई-फाइलिंग' },
        portal_url: 'https://nclt.gov.in/',
        steps: {
          en: [
            'Verify operational debt exceeds statutory ₹1 Crore default threshold.',
            'Serve statutory 10-day Demand Notice in Form-3 or Form-4 with invoices attached.',
            'Wait 10 days; if debtor fails to prove genuine pre-existing dispute, cause arises.',
            'File Section 9 Insolvency Petition before NCLT Kolkata Bench to appoint IRP.'
          ],
          bn: [
            'নিশ্চিত করুন বকেয়া পাওনা আইনের ন্যূনতম ১ কোটি টাকার সীমা অতিক্রম করেছে।',
            'ইনভয়েস ও চালানের প্রতিলিপিসহ ফর্ম-৩ বা ফর্ম-৪ অনুযায়ী ১০ দিনের আইবিসি নোটিশ পাঠান।',
            '১০ দিন অপেক্ষা করুন; কোম্পানি কোনো পূর্ববর্তী বিরোধের প্রমাণ না দিলে দেউলিয়া মামলা নিশ্চিত।',
            'কলকাতার NCLT বেঞ্চে ধারা ৯ অনুযায়ী মামলা করে অন্তর্বর্তী আইআরপি বসানোর আবেদন করুন।'
          ],
          hi: [
            'जांचें कि कंपनी पर बकाया राशि कानूनी सीमा (न्यूनतम ₹1 करोड़) से अधिक है।',
            'इनवॉयस संलग्न कर फॉर्म-3 अथवा फॉर्म-4 में 10 दिनों का वैधानिक मांग नोटिस भेजें।',
            '10 दिन में यदि कंपनी पूर्व विवाद साबित न कर सके, तो दिवालिया वाद का अधिकार बनेगा।',
            'NCLT कोलकाता बेंच में धारा 9 के तहत कंपनी के खिलाफ कॉरपोरेट दिवालिया वाद दाखिल करें।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Verify operational debt exceeds statutory ₹1 Crore default threshold.',
        'Serve statutory 10-day Demand Notice in Form-3 or Form-4 with invoices attached.',
        'Wait 10 days; if debtor fails to prove genuine pre-existing dispute, cause arises.',
        'File Section 9 Insolvency Petition before NCLT Kolkata Bench to appoint IRP.'
      ],
      bn: [
        'নিশ্চিত করুন বকেয়া পাওনা আইনের ন্যূনতম ১ কোটি টাকার সীমা অতিক্রম করেছে।',
        'ইনভয়েস ও চালানের প্রতিলিপিসহ ফর্ম-৩ বা ফর্ম-৪ অনুযায়ী ১০ দিনের আইবিসি নোটিশ পাঠান।',
        '১০ দিন অপেক্ষা করুন; কোম্পানি কোনো পূর্ববর্তী বিরোধের প্রমাণ না দিলে দেউলিয়া মামলা নিশ্চিত।',
        'কলকাতার এনসিএলটি বেঞ্চে ধারা ৯ অনুযায়ী মামলা করে অন্তর্বর্তী আইআরপি বসানোর আবেদন করুন।'
      ],
      hi: [
        'जांचें कि कंपनी पर बकाया राशि कानूनी सीमा (न्यूनतम ₹1 करोड़) से अधिक है।',
        'इनवॉयस संलग्न कर फॉर्म-3 अथवा फॉर्म-4 में 10 दिनों का वैधानिक मांग नोटिस भेजें।',
        '10 दिन में यदि कंपनी पूर्व विवाद साबित न कर सके, तो दिवालिया वाद का अधिकार बनेगा।',
        'NCLT कोलकाता बेंच में धारा 9 के तहत कंपनी के खिलाफ कॉरपोरेट दिवालिया वाद दाखिल करें।'
      ]
    },
    fees: [
      {
        id: 'fee-money-15-ibc',
        kind: 'authority_calculated',
        label: {
          en: 'NCLT Section 9 Insolvency Petition Filing Fee',
          bn: 'NCLT ধারা ৯ দেউলিয়া মামলার দাখিল ফি',
          hi: 'NCLT धारा 9 दिवालिया याचिका दाखिला शुल्क'
        },
        formula_description: {
          en: 'NCLT Regulations 2016 filing fee based on claimed debt amount; minimum ₹5,000 for operational creditors. Confirm current fee on NCLT portal before filing.',
          bn: 'NCLT বিধি ২০১৬ অনুযায়ী দাবি করা টাকার ওপর ফি; অপারেশনাল ক্রেডিটরের জন্য ন্যূনতম ৫,০০০ টাকা। দাখিলের আগে NCLT পোর্টালে বর্তমান ফি যাচাই করুন।',
          hi: 'NCLT विनियम 2016 अनुसार दावा राशि पर शुल्क; ऑपरेशनल लेनदारों के लिए न्यूनतम ₹5,000। दाखिले से पहले NCLT पोर्टल पर वर्तमान शुल्क जांचें।'
        },
        conditions: {
          en: 'Fee scales with claimed amount; operational creditor minimum applies; IRP deposit separate.',
          bn: 'ফি দাবি করা টাকার সাথে স্কেল করে; অপারেশনাল ক্রেডিটর ন্যূনতম প্রযোজ্য; আইআরপি ডিপোজিট আলাদা।',
          hi: 'शुल्क दावा राशि के साथ स्केल करता है; ऑपरेशनल लेनदार न्यूनतम लागू; IRP डिपॉजिट अलग।'
        },
        scope: 'national',
        evidence: {
          status: 'verified',
          primary_source_title: 'Insolvency & Bankruptcy Code, 2016 Sec 9 & NCLT Regulations 2016',
          primary_source_url: 'https://nclt.gov.in/',
          pinpoint: 'IBC 2016 Sec 9; NCLT (Fees) Regulations 2016 Schedule; min ₹5,000 for operational creditors',
          checked_on: '2026-10-15'
        }
      }
    ],
    timeline_info: [
      {
        id: 'time-money-15-ibc-duration',
        kind: 'indicative_estimate',
        label: {
          en: 'NCLT Section 9 petition processing time',
          bn: 'NCLT ধারা ৯ মামলার প্রক্রিয়াকরণের সময়',
          hi: 'NCLT धारा 9 याचिका प्रक्रिया की अवधि'
        },
        value_description: {
          en: 'Statutory 14-day admission timeline after filing; IRP appointment within 30 days; CIRP resolution 180 days (+ 90 extension).',
          bn: 'দাখিলের ১৪ দিনের মধ্যে গ্রহণযোগ্যতা; আইআরপি নিয়োগ ৩০ দিনে; সমাধান প্রক্রিয়া ১৮০ দিন (+ ৯০ দিন বৃদ্ধি)।',
          hi: 'दाखिले के १४ दिन में स्वीकार्यता; IRP नियुक्ति ३० दिन में; समाधान प्रक्रिया १८० दिन (+ ९० दिन विस्तार)।'
        },
        scope: 'national',
        evidence: {
          status: 'verified',
          primary_source_title: 'Insolvency & Bankruptcy Code, 2016 Sec 7, 12, 16, 33',
          primary_source_url: 'https://nclt.gov.in/',
          pinpoint: 'Sec 7 (14-day admission); Sec 12 (180+90 day CIRP); Sec 16 (IRP appointment); NCLT data 2024',
          checked_on: '2026-10-15'
        }
      }
    ],
    required_documents: [
      {
        id: 'doc-money-15-1',
        name: { en: 'Form-3 Demand Notice & Bank Certificate of Unpaid Invoices', bn: 'ফর্ম-৩ ডিমান্ড নোটিশ ও বকেয়া চালানের ব্যাঙ্ক সনদ', hi: 'फॉर्म-3 मांग नोटिस एवं अवैतनिक इनवॉयस का बैंक प्रमाणपत्र' },
        issuing_authority: { en: 'Operational Creditor / Banker', bn: 'পাওনাদার / ব্যাঙ্ক', hi: 'लेनदार / बैंक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-16',
    productCategory: 'free-checklist',
    title: {
      en: 'Recovery of Commercial Security Deposits from Mall Owners',
      bn: 'শপিং মল বা দোকানের মোটা সিকিউরিটি ডিপোজিট ফেরত মামলা',
      hi: 'शॉपिंग मॉल या व्यावसायिक परिसर से सुरक्षा जमा (सिक्योरिटी) वापसी'
    },
    relevant_act: 'Sec 73 & 74, Contract Act r/w Order XXXVII CPC',
    summary: {
      en: 'Recovering multi-lakh rental security deposits withheld by commercial landlords after vacant premises handover.',
      bn: 'দোকান খালি করে দেওয়ার পরও শপিং মল কর্তৃপক্ষ লক্ষাধিক টাকার জামানত আটকে রাখলে সুদে-আসলে উদ্ধার।',
      hi: 'दुकान खाली करने के बाद भी मॉल प्रबंधन द्वारा हड़पी गई लाखों की सिक्योरिटी राशि ब्याज सहित वसूलना।'
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
      en: '6 months to 1 year',
      bn: '৬ মাস থেকে ১ বছর',
      hi: '6 माह से 1 वर्ष'
    },
    search_keywords: {
      en: ['mall security deposit refund', 'commercial landlord withholding deposit', 'order 37 deposit recovery'],
      bn: ['মল ডিপোজিট ফেরত', 'দোকানের জামানত আটক', 'বাণিজ্যিক ডিপোজিট মামলা'],
      hi: ['मॉल सिक्योरिटी रिफंड', 'दुकान अमानत वापसी', 'वाणिज्यिक जमा वसूली']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Collate lease agreement, key handover receipt, and formal exit inspection report.',
        'Serve statutory demand notice giving 15 days to refund deposit with 18% commercial interest.',
        'File Pre-Institution Mediation petition under Section 12A Commercial Courts Act via DLSA.',
        'If mediation fails, institute Order XXXVII CPC Summary Suit and attach mall rental receivables.'
      ],
      bn: [
        'লিজ চুক্তি, চাবি হস্তান্তরের স্বাক্ষরিত চালান ও যৌথ নো-ডিউজ পরিদর্শন রিপোর্ট একত্র করুন।',
        '১৮% বাণিজ্যিক সুদসহ ১৫ দিনের মধ্যে টাকা ফেরতের দাবিতে আইনজীবীর চিঠি দিন।',
        'বাণিজ্যিক আদালত আইনের ধারা ১২এ মেনে ডিএলএসএ-তে প্রাক-মামলা মধ্যস্থতা শুরু করুন।',
        'মীমাংসা না হলে অর্ডার ৩৭ সিপিসি সামারি স্যুট করে মলের অন্যান্য ভাড়া ক্রোক করান।'
      ],
      hi: [
        'लीज एग्रीमेंट, चाबी सौंपने की रसीद एवं दोनों पक्षों की संयुक्त इंस्पेक्शन रिपोर्ट एकत्र करें।',
        '18% ब्याज सहित 15 दिन में सिक्योरिटी लौटाने का विधिक मांग पत्र मॉल प्रबंधन को भेजें।',
        'धारा 12A के तहत जिला विधिक सेवा प्राधिकरण में अनिवार्य मध्यस्थता की कार्यवाही करें।',
        'विफल रहने पर आदेश 37 सीपीसी में समरी वाद कर मॉल के अन्य किरायों पर कुर्की कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-16-1',
        name: { en: 'Commercial Lease Agreement & Key Handover Acknowledgment', bn: 'বাণিজ্যিক লিজ চুক্তি ও চাবি হস্তান্তরের রসিদ', hi: 'वाणिज्यिक लीज अनुबंध एवं चाबी सुपुर्दगी पावती' },
        issuing_authority: { en: 'Mall Developer / Lessee', bn: 'মল কর্তৃপক্ষ', hi: 'मॉल प्रबंधन' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-17',
    productCategory: 'paid',
    title: {
      en: 'NACH & Electronic ECS Mandate Dishonour Prosecution',
      bn: 'ই-ম্যান্ডেট ও অটো-ডেবিট বাউন্স ফৌজদারি নালিশ',
      hi: 'एनएसीएच (NACH) एवं ईसीएस ऑटो-डेबिट बाउंस पर आपराधिक वाद'
    },
    relevant_act: 'Sec 25, Payment & Settlement Systems Act, 2007 (PSSA)',
    summary: {
      en: 'Prosecuting electronic loan mandate returns due to insufficient funds with identical penalties to Section 138.',
      bn: 'ব্যাঙ্ক অ্যাকাউন্টে টাকা না থাকায় ইএমআই-এর অটো-ডেবিট বাউন্স হলে ফৌজদারি আদালতে মামলা ও শাস্তি।',
      hi: 'बैंक से ऑटो-डेबिट ईएमआई बाउंस होने पर चेक बाउंस के समान 2 वर्ष की जेल व दोगुने जुर्माने का वाद।'
    },
    authority_forum: {
      en: 'Court of Judicial / Metropolitan Magistrate',
      bn: 'জুডিশিয়াল / মেট্রোপলিটান ম্যাজিস্ট্রেট আদালত',
      hi: 'न्यायिक दंडाधिकारी न्यायालय'
    },
    forum_type: 'Magistrate_Court',
    is_complex: false,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '30 days notice; 30 days filing window',
      bn: '৩০ দিনে নোটিশ; ৩০ দিনে মামলা',
      hi: '30 দিন মেं नोटिस; 30 দিন মেं परिवाद'
    },
    search_keywords: {
      en: ['section 25 pssa nach bounce', 'ecs dishonour criminal case', 'electronic mandate failure penalty'],
      bn: ['ইসিএস বাউন্স মামলা', 'ধারা ২৫ পিএসএসএ', 'অটো ডেবিট বাউন্স'],
      hi: ['एनएसीएच बाउंस केस', 'धारा 25 पीएसएसए', 'ईसीएस फेल जुर्माना']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'Chief Judicial Magistrate (CJM) at District Headquarters',
          bn: 'জেলা সদরে প্রধান দন্ডনায়ক (CJM) আদালত',
          hi: 'जिला मुख्यालय पर मुख्य न्यायिक दंडाधिकारी (CJM) न्यायालय'
        },
        portal_name: { en: 'District eCourts Portal', bn: 'জেলা ই-কোর্ট পোর্টাল', hi: 'जिला ई-कोर्ट्स' },
        portal_url: 'https://districts.ecourts.gov.in/',
        steps: {
          en: [
            'Retrieve statutory electronic return memo from clearing house citing "Insufficient Funds".',
            'Serve statutory demand notice within 30 days of receiving memo, demanding payment in 15 days.',
            'If unpaid, file criminal complaint under Section 25 PSSA before Magistrate within 30 days.',
            'Magistrate issues summons; conviction entails imprisonment up to 2 years or double fine.'
          ],
          bn: [
            'ক্লিয়ারিং হাউস থেকে "তহবিল অপ্রতুল" লেখা ইলেকট্রনিক রিটার্ন মেমো সংগ্রহ করুন।',
            'মেমো প্রাপ্তির ৩০ দিনের মধ্যে ১৫ দিনের সময় দিয়ে রেজিস্ট্রি ডাকে লিগ্যাল নোটিশ পাঠান।',
            'টাকা না পেলে পরবর্তী ৩০ দিনের মধ্যে ধারা ২৫ পিএসএসএ অনুযায়ী ফৌজদারি মামলা করুন।',
            'ম্যাজিস্ট্রেট সমন জারি করবেন; বিচারে ২ বছর পর্যন্ত জেল বা দ্বিগুণ জরিমানার সাজা হয়।'
          ],
          hi: [
            'क्लीयरिंग हाउस से "अपर्याप्त राशि" दर्ज आधिकारिक इलेक्ट्रॉनिक रिटर्न मेमो प्राप्त करें।',
            'मेमो मिलने के 30 दिनों के भीतर 15 दिन में भुगतान हेतु विधिक नोटिस प्रेषित करें।',
            'भुगतान न होने पर अगले 30 दिनों में धारा 25 PSSA के तहत अदालत में आपराधिक परिवाद दें।',
            'मजिस्ट्रेट द्वारा समन होगा; अपराध सिद्ध होने पर 2 साल की जेल या चेक समान दोगुना जुर्माना होगा।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'Chief Metropolitan Magistrate (CMM) at Bankshall Court, Calcutta',
          bn: 'কলকাতা বাঁকশাল কোর্টে প্রধান মহানগর দন্ডনায়ক (CMM) আদালত',
          hi: 'कलकत्ता बैंकशाल कोर्ट में मुख्य महानगर दंडाधिकारी (CMM) न्यायालय'
        },
        portal_name: { en: 'City Civil Court eServices', bn: 'সিটি সিভিল কোর্ট ই-সেবা', hi: 'सिटी सिविल कोर्ट' },
        portal_url: 'https://districts.ecourts.gov.in/',
        steps: {
          en: [
            'Retrieve statutory electronic return memo from clearing house citing "Insufficient Funds".',
            'Serve statutory demand notice within 30 days of receiving memo, demanding payment in 15 days.',
            'If unpaid, file criminal complaint under Section 25 PSSA before Magistrate within 30 days.',
            'Magistrate issues summons; conviction entails imprisonment up to 2 years or double fine.'
          ],
          bn: [
            'ক্লিয়ারিং হাউস থেকে "তহবিল অপ্রতুল" লেখা ইলেকট্রনিক রিটার্ন মেমো সংগ্রহ করুন।',
            'মেমো প্রাপ্তির ৩০ দিনের মধ্যে ১৫ দিনের সময় দিয়ে রেজিস্ট্রি ডাকে লিগ্যাল নোটিশ পাঠান।',
            'টাকা না পেলে পরবর্তী ৩০ দিনের মধ্যে ধারা ২৫ পিএসএসএ অনুযায়ী ফৌজদারি মামলা করুন।',
            'ম্যাজিস্ট্রেট সমন জারি করবেন; বিচারে ২ বছর পর্যন্ত জেল বা দ্বিগুণ জরিমানার সাজা হয়।'
          ],
          hi: [
            'क्लीयरिंग हाउस से "अपर्याप्त राशि" दर्ज आधिकारिक इलेक्ट्रॉनिक रिटर्न मेमो प्राप्त करें।',
            'मेमो मिलने के 30 दिनों के भीतर 15 दिन में भुगतान हेतु विधिक नोटिस प्रेषित करें।',
            'भुगतान न होने पर अगले 30 दिनों में धारा 25 PSSA के तहत अदालत में आपराधिक परिवाद दें।',
            'मजिस्ट्रेट द्वारा समन होगा; अपराध सिद्ध होने पर 2 साल की जेल या चेक समान दोगुना जुर्माना होगा।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Retrieve statutory electronic return memo from clearing house citing "Insufficient Funds".',
        'Serve statutory demand notice within 30 days of receiving memo, demanding payment in 15 days.',
        'If unpaid, file criminal complaint under Section 25 PSSA before Magistrate within 30 days.',
        'Magistrate issues summons; conviction entails imprisonment up to 2 years or double fine.'
      ],
      bn: [
        'ক্লিয়ারিং হাউস থেকে "তহবিল অপ্রতুল" লেখা ইলেকট্রনিক রিটার্ন মেমো সংগ্রহ করুন।',
        'মেমো প্রাপ্তির ৩০ দিনের মধ্যে ১৫ দিনের সময় দিয়ে রেজিস্ট্রি ডাকে লিগ্যাল নোটিশ পাঠান।',
        'টাকা না পেলে পরবর্তী ৩০ দিনের মধ্যে ধারা ২৫ পিএসএসএ অনুযায়ী ফৌজদারি মামলা করুন।',
        'ম্যাজিস্ট্রেট সমন জারি করবেন; বিচারে ২ বছর পর্যন্ত জেল বা দ্বিগুণ জরিমানার সাজা হয়।'
      ],
      hi: [
        'क्लीयरिंग हाउस से "अपर्याप्त राशि" दर्ज आधिकारिक इलेक्ट्रॉनिक रिटर्न मेमो प्राप्त करें।',
        'मेमो मिलने के 30 दिनों के भीतर 15 दिन में भुगतान हेतु विधिक नोटिस प्रेषित करें।',
        'भुगतान न होने पर अगले 30 दिनों में धारा 25 PSSA के तहत अदालत में आपराधिक परिवाद दें।',
        'मजिस्ट्रेट द्वारा समन होगा; अपराध सिद्ध होने पर 2 साल की जेल या चेक समान दोगुना जुर्माना होगा।'
      ]
    },
    fees: [
      {
        id: 'fee-money-17-nach',
        kind: 'authority_calculated',
        label: {
          en: 'Section 25 PSSA NACH/ECS Bounce Complaint Filing Fee',
          bn: 'ধারা ২৫ পিএসএসএ NACH/ECS বাউন্স মামলার দাখিল ফি',
          hi: 'धारा 25 PSSA NACH/ECS बाउंस परिवाद दाखिला शुल्क'
        },
        formula_description: {
          en: 'Nominal court fee under Criminal Procedure Code for electronic mandate bounce complaint; varies by district. Confirm current rate at Magistrate Court before filing.',
          bn: 'আপারাধিক প্রক্রিয়া কোড অনুযায়ী নোপরি কোর্ট ফি; জেলা অনুযায়ী ভিন্ন। দাখিলের আগে ম্যাজিস্ট্রেট কোর্টে বর্তমান ফি যাচাই করুন।',
          hi: 'दंड प्रक्रिया संहिता अनुसार मामूली कोर्ट शुल्क; जिले अनुसार भिन्न। दाखिले से पहले मजिस्ट्रेट कोर्ट में वर्तमान शुल्क जांचें।'
        },
        conditions: {
          en: 'Complaint filing fee for Section 25 PSSA trial; identical penalty structure to Section 138 NI Act.',
          bn: 'ধারা ২৫ পিএসএসএ মামলার ফি; ধারা ১৩৮ এনআই অ্যাক্টের সাথে সমান শাস্তি কাঠামো।',
          hi: 'धारा 25 PSSA मुकदमे का शुल्क; धारा 138 एनआई एक्ट के समान दंड संरचना।'
        },
        scope: 'national',
        evidence: {
          status: 'verified',
          primary_source_title: 'Payment & Settlement Systems Act, 2007 Sec 25 & CrPC/BNSS',
          primary_source_url: 'https://www.indiacode.nic.in/',
          pinpoint: 'PSSA 2007 Sec 25 (imprisonment up to 2 years or double fine); CrPC Sec 200/BNSS Sec 223',
          checked_on: '2026-10-15'
        }
      }
    ],
    timeline_info: [
      {
        id: 'time-money-17-nach-duration',
        kind: 'indicative_estimate',
        label: {
          en: 'NACH/ECS bounce trial duration',
          bn: 'NACH/ECS বাউন্স মামলার সময়',
          hi: 'NACH/ECS बाउंस मुकदमे की अवधि'
        },
        value_description: {
          en: 'Statutory 30-day notice + 30-day filing window; trial typically 1-2 years depending on court backlog.',
          bn: '৩০ দিন নোটিশ + ৩০ দিন মামলার সময়সীমা; বিচার সাধারণত ১-২ বছরে সম্পন্ন হয় কোর্ট ব্যাকলগের ওপর নির্ভর করে।',
          hi: '३० दिन का नोटिस + ३० दिन की परिवाद अवधि; सुनवाई आमतौर पर १-२ वर्ष में पूरी होती है कोर्ट बैकलॉग पर निर्भर।'
        },
        scope: 'national',
        evidence: {
          status: 'verified',
          primary_source_title: 'Payment & Settlement Systems Act, 2007 Sec 25; Supreme Court Dashrathbhai Trikambhai',
          primary_source_url: 'https://www.indiacode.nic.in/',
          pinpoint: 'PSSA 2007 Sec 25; NI Act Sec 138 parallel; Dashrathbhai v. State (jurisdiction)',
          checked_on: '2026-10-15'
        }
      }
    ],
    required_documents: [
      {
        id: 'doc-money-17-1',
        name: { en: 'NPCI Electronic Return Memo & Statutory Legal Notice', bn: 'এনপিসিআই রিটার্ন মেমো ও আইনি নোটিশ কপি', hi: 'एनपीसीआई इलेक्ट्रॉनिक रिटर्न मेमो एवं वैधानिक नोटिस प्रति' },
        issuing_authority: { en: 'National Payments Corporation (NPCI) / Bank', bn: 'ব্যাঙ্ক / এনপিসিআই', hi: 'बैंक / एनपीसीआई' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-18',
    productCategory: 'free-checklist',
    title: {
      en: 'Recovery of Lost Funds in Phishing & SIM Swap Scams',
      bn: 'সিম সোয়াপ ও ওটিপি জালিয়াতিতে ব্যাংকের বিরুদ্ধে ক্ষতিপূরণ',
      hi: 'सिम स्वैप एवं फिशिंग फ्रॉड में टेलीकॉम व बैंक से मुआवजा वसूली'
    },
    relevant_act: 'Sec 43A, Information Technology Act, 2000 r/w RBI Circulars',
    summary: {
      en: 'Holding telecom and banking institutions liable for funds drained through unauthorized SIM duplication.',
      bn: 'গ্রাহকের অনুমতি ছাড়া ভুয়ো নথিতে সিম ক্লোন করে টাকা হাতিয়ে নিলে টেলিকম ও ব্যাঙ্কের থেকে ক্ষতিপূরণ আদায়।',
      hi: 'फर्जी सिम जारी कर ओटीपी उड़ाने पर टेलीकॉम कंपनी व बैंक की लापरवाही साबित कर पूरा हर्जाना पाना।'
    },
    authority_forum: {
      en: 'State IT Secretary (Adjudicating Officer) / Banking Ombudsman',
      bn: 'রাজ্য আইটি সচিব (বিচারক আধিকারিক) / ব্যাঙ্কিং ন্যায়পাল',
      hi: 'राज्य आईटी सचिव (न्यायनिर्णायक अधिकारी) / लोकपाल'
    },
    forum_type: 'Cyber_Cell',
    is_complex: true,
    official_portal_url: 'https://cybercrime.gov.in/',
    statutory_timeframe: {
      en: '30 to 60 working days',
      bn: '৩০ থেকে ৬০ কার্যদিবস',
      hi: '30 থেকে 60 कार्यदिवस'
    },
    search_keywords: {
      en: ['sim swap fraud compensation', 'section 43a it act bank liability', 'phishing money refund'],
      bn: ['সিম সোয়াপ ক্ষতিপূরণ', 'ওটিপি জালিয়াতি টাকা ফেরত', 'আইটি অ্যাক্ট ধারা ৪৩এ'],
      hi: ['सिम स्वैप फ्रॉड हर्जाना', 'ओटीपी चोरी मुआवजा', 'आईटी एक्ट 43A बैंक देनदारी']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Lodge emergency cyber complaint on 1930 and freeze beneficiary bank account.',
        'Obtain written confirmation from telecom proving unauthorized SIM re-issuance without biometric KYC.',
        'File complaint before State IT Secretary (Adjudicating Officer under Sec 46 IT Act).',
        'Secure award directing full restoration of drained funds plus compensation for data breach.'
      ],
      bn: [
        'তাৎক্ষণিক ১৯৩০ নম্বরে ফোন করে প্রতারকের ব্যাঙ্ক অ্যাকাউন্টে টাকা হোল্ড করান।',
        'টেলিকম কোম্পানির কাছ থেকে প্রমাণ সংগ্রহ করুন যে বায়োমেট্রিক ছাড়াই ডুপ্লিকেট সিম ইস্যু হয়েছে।',
        'তথ্যপ্রযুক্তি আইনের ধারা ৪৬ অনুযায়ী রাজ্য আইটি সচিবের কাছে আনুষ্ঠানিক মামলা করুন।',
        'টেলিকম ও ব্যাঙ্কের চরম গাফিলতির দায়ে সম্পূর্ণ খোয়া যাওয়া অর্থ সুদসহ ফেরতের রায় নিন।'
      ],
      hi: [
        'हेल्पलाइन 1930 पर कॉल कर साइबर फ्रॉड दर्ज कराएं एवं लाभार्थी खाता फ्रीज कराएं।',
        'टेलीकॉम कंपनी से लिखित लें कि बिना बायोमेट्रिक सत्यापन के फर्जी सिम दोबारा जारी हुई।',
        'आईटी एक्ट की धारा 46 के तहत राज्य के आईटी सचिव (Adjudicating Officer) के पास वाद दें।',
        'लापरवाही के लिए बैंक व टेलीकॉम कंपनी से पूरी चोरी गई राशि ब्याज सहित लौटाने का आदेश लें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-18-1',
        name: { en: 'Telecom CDR Log of Unauthorized SIM Swap & Cyber Complaint', bn: 'টেলিকম সিম অদলবদল রিপোর্ট ও সাইবার ডায়েরি', hi: 'टेलीकॉम सीडीआर/सिम स्वैप रिपोर्ट एवं साइबर शिकायत' },
        issuing_authority: { en: 'Telecom Service Provider / Cyber Police', bn: 'মোবাইল সংস্থা / পুলিশ', hi: 'टेलीकॉम ऑपरेटर / साइबर पुलिस' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-19',
    productCategory: 'free-checklist',
    title: {
      en: 'Pre-Packaged Insolvency for Stressed MSME Vendors',
      bn: 'ক্ষুদ্র ও মাঝারি শিল্পের বকেয়া আদায়ে প্রি-প্যাক ইনসলভেন্সি',
      hi: 'संकटग्रस्त एमएसएमई (MSME) हेतु प्री-पैकेज्ड दिवालिया समाधान (PPIRP)'
    },
    relevant_act: 'Chapter III-A, Insolvency & Bankruptcy Code, 2016',
    summary: {
      en: 'Restructuring stressed MSME corporate entities and recovering vendor dues while keeping existing management intact.',
      bn: 'ব্যবসা সচল রেখেই ক্ষুদ্র ও মাঝারি সংস্থার বকেয়া ঋণ পুনর্গঠন ও দেনা নিষ্পত্তির আধুনিক দেউলিয়া প্রক্রিয়া।',
      hi: 'कंपनी का प्रबंधन हाथ में रखते हुए ही एमएसएमई कर्ज का पुनर्गठन एवं लेनदारों के बकाए का निपटारा।'
    },
    authority_forum: {
      en: 'National Company Law Tribunal (NCLT, Kolkata Bench)',
      bn: 'জাতীয় কোম্পানি আইন ট্রাইব্যুনাল (NCLT কলকাতা)',
      hi: 'राष्ट्रीय कंपनी विधि अधिकरण (NCLT कोलकाता)'
    },
    forum_type: 'NCLT',
    is_complex: true,
    official_portal_url: 'https://nclt.gov.in/',
    statutory_timeframe: {
      en: 'Mandatory disposal within 120 days',
      bn: '১২০ দিনের মধ্যে বাধ্যতামূলক নিষ্পত্তি',
      hi: '120 দিন মেं अनिवार्य निस्तारण'
    },
    search_keywords: {
      en: ['pre-packaged insolvency msme', 'ppirp chapter iiia ibc', 'msme debt restructuring nclt'],
      bn: ['প্রি প্যাক ইনসলভেন্সি', 'এমএসএমই দেউলিয়া সমাধান', 'এনসিএলটি ঋণ পুনর্গঠন'],
      hi: ['प्री-पैकेज्ड दिवालिया प्रक्रिया', 'एमएसएमई ऋण पुनर्गठन', 'एनसीएलटी पीपीआईआरपी']
    },
territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'National Company Law Tribunal (NCLT) Bench having jurisdiction over debtor company registered office',
          bn: 'ঋণী কোম্পানির নিবন্ধিত অফিসাধীন NCLT বেঞ্চ (কলকাতা বেঞ্চ হয় সাধারণত)',
          hi: 'ऋणी कंपनी के पंजीकृत कार्यालय के क्षेत्राधिकार वाला NCLT बेंच (आमतौर पर कोलकाता बेंच)'
        },
        portal_name: { en: 'NCLT E-Filing Portal', bn: 'এনসিএলটি ই-ফাইলিং পোর্টাল', hi: 'NCLT ई-फाइलिंग' },
        portal_url: 'https://nclt.gov.in/',
        steps: {
          en: [
            'Pass special board resolution and secure 66% financial creditor approval for PPIRP scheme.',
            'Prepare base resolution plan with registered insolvency professional keeping business operating.',
            'File Form-1 before jurisdictional NCLT Bench for admission and immediate debt moratorium.',
            'NCLT approves plan within 30 days, binding all creditors and wiping out legacy unserviced debt.'
          ],
          bn: [
            'বোর্ডের বিশেষ প্রস্তাব এবং ৬৬% ঋণদাতা ব্যাঙ্কের সম্মতি নিয়ে প্রি-প্যাক স্কিম অনুমোদন করান।',
            'নিবন্ধিত ইনসলভেন্সি পেশাদার সহযোগে কারখানা সচল রেখে রেজোলিউশন প্ল্যান তৈরি করুন।',
            'সম্যনামস্থ NCLT বেঞ্চে ফর্ম-১ আবেদন জমা দিয়ে মামলার স্থায়িত্বকালে ঋণ স্থগিতাদেশ (Moratorium) নিন।',
            'NCLT ৩০ দিনে প্ল্যান অনুমোদন করবে, যা সমস্ত পাওনাদারদের ওপর আইনত বাধ্যতামূলক হবে।'
          ],
          hi: [
            'कंपनी बोर्ड का विशेष प्रस्ताव एवं 66% वित्तीय लेनदारों की लिखित सहमति प्राप्त करें।',
            'पंजीकृत इंसॉल्वेंसी प्रोफेशनल की देखरेख में व्यापार चालू रखते हुए बेस रेजोल्यूशन प्लान बनाएं।',
            'संबंधित NCLT बेंच में फॉर्म-1 याचिका देकर तत्काल ऋण स्थगन (Moratorium) लें।',
            'अधिकरण द्वारा 30 दिनों में प्लान स्वीकृत कर सभी पुराने बकायों का कानूनी समाधान किया जाएगा।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'National Company Law Tribunal (NCLT, Kolkata Bench) - Principal Bench for West Bengal',
          bn: 'জাতীয় কোম্পানি আইন ট্রাইব্যুনাল (NCLT কলকাতা বেঞ্চ) - পশ্চিমবঙ্গের মূল বেঞ্চ',
          hi: 'राष्ट्रीय कंपनी विधि अधिकरण (NCLT कोलकाता बेंच) - पश्चिम बंगाल का मुख्य बेंच'
        },
        portal_name: { en: 'NCLT Kolkata E-Filing Portal', bn: 'এনসিএলটি কলকাতা ই-ফাইলিং', hi: 'NCLT कोलकाता ई-फाइलिंग' },
        portal_url: 'https://nclt.gov.in/',
        steps: {
          en: [
            'Pass special board resolution and secure 66% financial creditor approval for PPIRP scheme.',
            'Prepare base resolution plan with registered insolvency professional keeping business operating.',
            'File Form-1 before NCLT Kolkata Bench for admission and immediate debt moratorium.',
            'NCLT approves plan within 30 days, binding all creditors and wiping out legacy unserviced debt.'
          ],
          bn: [
            'বোর্ডের বিশেষ প্রস্তাব এবং ৬৬% ঋণদাতা ব্যাঙ্কের সম্মতি নিয়ে প্রি-প্যাক স্কিম অনুমোদন করান।',
            'নিবন্ধিত ইনসলভেন্সি পেশাদার সহযোগে কারখানা সচল রেখে রেজোলিউশন প্ল্যান তৈরি করুন।',
            'কলকাতার NCLT বেঞ্চে ফর্ম-১ আবেদন জমা দিয়ে মামলার স্থায়িত্বকালে ঋণ স্থগিতাদেশ (Moratorium) নিন।',
            'NCLT ৩০ দিনে প্ল্যান অনুমোদন করবে, যা সমস্ত পাওনাদারদের ওপর আইনত বাধ্যতামূলক হবে।'
          ],
          hi: [
            'कंपनी बोर्ड का विशेष प्रस्ताव एवं 66% वित्तीय लेनदारों की लिखित सहमति प्राप्त करें।',
            'पंजीकृत इंसॉल्वेंसी प्रोफेशनल की देखरेख में व्यापार चालू रखते हुए बेस रेजोल्यूशन प्लान बनाएं।',
            'NCLT कोलकाता बेंच में फॉर्म-1 याचिका देकर तत्काल ऋण स्थगन (Moratorium) लें।',
            'अधिकरण द्वारा 30 दिनों में प्लान स्वीकृत कर सभी पुराने बकायों का कानूनी समाधान किया जाएगा।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Pass special board resolution and secure 66% financial creditor approval for PPIRP scheme.',
        'Prepare base resolution plan with registered insolvency professional keeping business operating.',
        'File Form-1 before NCLT Kolkata Bench for admission and immediate debt moratorium.',
        'NCLT approves plan within 30 days, binding all creditors and wiping out legacy unserviced debt.'
      ],
      bn: [
        'বোর্ডের বিশেষ প্রস্তাব এবং ৬৬% ঋণদাতা ব্যাঙ্কের সম্মতি নিয়ে প্রি-প্যাক স্কিম অনুমোদন করান।',
        'নিবন্ধিত ইনসলভেন্সি পেশাদার সহযোগে কারখানা সচল রেখে রেজোলিউশন প্ল্যান তৈরি করুন।',
        'কলকাতার এনসিএলটি বেঞ্চে ফর্ম-১ আবেদন জমা দিয়ে মামলার স্থায়িত্বকালে ঋণ স্থগিতাদেশ (Moratorium) নিন।',
        'এনসিএলটি ৩০ দিনে প্ল্যান অনুমোদন করবে, যা সমস্ত পাওনাদারদের ওপর আইনত বাধ্যতামূলক হবে।'
      ],
      hi: [
        'कंपनी बोर्ड का विशेष प्रस्ताव एवं 66% वित्तीय लेनदारों की लिखित सहमति प्राप्त करें।',
        'पंजीकृत इंसॉल्वेंसी प्रोफेशनल की देखरेख में व्यापार चालू रखते हुए बेस रेजोल्यूशन प्लान बनाएं।',
        'NCLT कोलकाता बेंच में फॉर्म-1 याचिका देकर तत्काल ऋण स्थगन (Moratorium) लें।',
        'अधिकरण द्वारा 30 दिनों में प्लान स्वीकृत कर सभी पुराने बकायों का कानूनी समाधान किया जाएगा।'
      ]
    },
    fees: [
      {
        id: 'fee-money-19-ppirp',
        kind: 'authority_calculated',
        label: {
          en: 'NCLT Pre-Packaged Insolvency Filing Fee',
          bn: 'NCLT প্রি-প্যাকেজড ইনসলভেন্সি দাখিল ফি',
          hi: 'NCLT प्री-पैकेज्ड दिवालिया दाखिला शुल्क'
        },
        formula_description: {
          en: 'NCLT Regulations 2016 filing fee based on corporate debtor turnover; minimum ₹25,000. Confirm current fee on NCLT portal before filing.',
          bn: 'NCLT বিধি ২০১৬ অনুযায়ী কর্পোরেট দেনাদারের টার্নওভারের ওপর ফি; ন্যূনতম ২৫,০০০ টাকা। দাখিলের আগে NCLT পোর্টালে বর্তমান ফি যাচাই করুন।',
          hi: 'NCLT विनियम 2016 अनुसार कॉरपोरेट देनदार के टर्नओवर पर शुल्क; न्यूनतम ₹25,000। दाखिले से पहले NCLT पोर्टल पर वर्तमान शुल्क जांचें।'
        },
        conditions: {
          en: 'Fee based on corporate debtor turnover; IRP deposit and resolution professional fees separate.',
          bn: 'ফি কর্পোরেট দেনাদারের টার্নওভারের ওপর; আইআরপি ডিপোজিট ও রেজোলিউশন প্রফেশনাল ফি আলাদা।',
          hi: 'शुल्क कॉरपोरेट देनदार के टर्नओवर पर; IRP डिपॉजिट और रेजोल्यूशन प्रोफेशनल फीस अलग।'
        },
        scope: 'national',
        evidence: {
          status: 'verified',
          primary_source_title: 'Insolvency & Bankruptcy Code, 2016 Chapter III-A & NCLT Regulations 2016',
          primary_source_url: 'https://nclt.gov.in/',
          pinpoint: 'IBC 2016 Sec 54A-54K (PPIRP); NCLT (Fees) Regulations 2016 Schedule',
          checked_on: '2026-10-15'
        }
      }
    ],
    timeline_info: [
      {
        id: 'time-money-19-ppirp-duration',
        kind: 'indicative_estimate',
        label: {
          en: 'PPIRP processing time',
          bn: 'প্রি-প্যাক ইনসলভেন্সি প্রক্রিয়াকরণের সময়',
          hi: 'प्री-पैकेज्ड दिवालिया प्रक्रिया की अवधि'
        },
        value_description: {
          en: 'Mandatory disposal within 120 days of admission; 30-day approval window post-filing; moratorium commences immediately.',
          bn: 'প্রবেশের ১২০ দিনের মধ্যে বাধ্যতামূলক নিষ্পত্তি; ফাইল করার ৩০ দিনে অনুমোদন; মোরাটোরিয়াম তাৎক্ষণিক শুরু।',
          hi: 'प्रवेश के १२० दिन में अनिवार्य निपटान; दाखिले के ३० दिन में अनुमोदन; मोराटोरियम तत्काल शुरू।'
        },
        scope: 'national',
        evidence: {
          status: 'verified',
          primary_source_title: 'Insolvency & Bankruptcy Code, 2016 Chapter III-A Sec 54A-54K',
          primary_source_url: 'https://nclt.gov.in/',
          pinpoint: 'Sec 54B (120 days mandatory); Sec 54E (30-day approval); Sec 54D (moratorium)',
          checked_on: '2026-10-15'
        }
      }
    ],
    required_documents: [
      {
        id: 'doc-money-19-1',
        name: { en: '66% Creditor Consent Resolution & Base Resolution Plan', bn: '৬৬% ঋণদাতার সম্মতি প্রস্তাব ও রেজোলিউশন প্ল্যান', hi: '66% लेनदारों की सहमति का प्रस्ताव एवं रेजोल्यूशन प्लान' },
        issuing_authority: { en: 'Committee of Creditors / Insolvency Professional', bn: 'ব্যাঙ্ক কমিটি', hi: 'लेनदारों की समिति' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-20',
    productCategory: 'lawyer-only',
    title: {
      en: 'Execution of Foreign Court Money Decrees in India',
      bn: 'বিদেশের আদালতের টাকার ডিক্রি ভারতে জারি ও কার্যকরীকরণ',
      hi: 'विदेशी अदालत की धन डिक्री का भारत में निष्पादन एवं संपत्ति जब्ती'
    },
    relevant_act: 'Sec 44A & 13, Code of Civil Procedure, 1908',
    summary: {
      en: 'Executing monetary judgments from reciprocating territories (UK, UAE, Singapore) against debtor properties in India.',
      bn: 'দুবাই, লন্ডন বা সিঙ্গাপুরের আদালতের রায়ের ভিত্তিতে ভারতে থাকা দেনাদারের স্থাবর সম্পত্তি ক্রোক ও নিলাম।',
      hi: 'विदेश (दुबई, यूके, सिंगापुर आदि) की अदालत से जीते मुकदमे के आधार पर भारत में संपत्ति कुर्क कराना।'
    },
    authority_forum: {
      en: 'District Court (Jurisdiction over debtor assets)',
      bn: 'জেলা জজ আদালত (দেনাদারের সম্পত্তির এক্তিয়ার)',
      hi: 'जिला जज न्यायालय (संपत्ति क्षेत्राधिकार)'
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
      en: ['foreign money decree execution india', 'section 44a cpc reciprocating territory', 'uae court decree execution kolkata'],
      bn: ['বিদেশি আদালতের ডিক্রি', 'ধারা ৪৪এ সিপিসি', 'বিদেশের টাকার ডিক্রি ভারতে জারি'],
      hi: ['विदेशी डिक्री निष्पादन भारत', 'धारा 44A सीपीसी', 'विदेशी कोर्ट फैसला जब्ती']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain certified copy of foreign decree and non-satisfaction certificate from foreign court.',
        'Verify foreign country is notified as a "reciprocating territory" under Section 44A CPC.',
        'File Execution Petition under Order XXI CPC directly before District Judge where debtor holds assets.',
        'Obtain orders for attachment and public auction of Indian immovable assets without fresh trial.'
      ],
      bn: [
        'বিদেশি আদালতের সিলমোহরযুক্ত মূল ডিক্রি ও টাকা না মেলার সার্টিফিকেট সংগ্রহ করুন।',
        'নিশ্চিত হন দেশটি ভারতের কেন্দ্রীয় সরকার কর্তৃক ঘোষিত "পারস্পরিক রাষ্ট্র" (Reciprocating Territory)।',
        'ভারতে দেনাদারের জমি বা ব্যাঙ্ক যে জেলায়, সেখানকার জেলা জজ আদালতে অর্ডার ২১ অনুযায়ী পিটিশন দিন।',
        'নতুন কোনো বিচার ছাড়াই আদালত সরাসরি দেনাদারের ভারতীয় সম্পত্তি ক্রোক ও নিলামের নির্দেশ দেবে।'
      ],
      hi: [
        'विदेशी अदालत से डिक्री की प्रमाणित प्रति एवं राशि अप्राप्त होने का आधिकारिक प्रमाणपत्र लें।',
        'जांचें कि संबंधित देश धारा 44A के तहत भारत का अधिसूचित "पारस्परिक क्षेत्र" है।',
        'भारत में देनदार की संपत्ति वाले जिले के जिला जज के समक्ष आदेश 21 में निष्पादन वाद करें।',
        'बिना नए सिरे से मुकदमा चलाए अदालत देनदार की भारतीय संपत्ति कुर्क कर नीलामी का आदेश देगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-20-1',
        name: { en: 'Certified Foreign Judgment & Certificate of Non-Satisfaction', bn: 'বিদেশি আদালতের প্রত্যয়িত রায় ও সার্টিফিকেট', hi: 'विदेशी निर्णय की प्रमाणित प्रति एवं गैर-तुष्टि प्रमाणपत्र' },
        issuing_authority: { en: 'Foreign Superior Court Registrar', bn: 'বিদেশি আদালত রেজিস্ট্রি', hi: 'विदेशी उच्च न्यायालय' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-21',
    productCategory: 'lawyer-only',
    title: {
      en: 'Attachment of Salary for Money Decree Execution',
      bn: 'আদালতের মাধ্যমে দেনাদারের মাসিক বেতন ক্রোক করে টাকা আদায়',
      hi: 'देनदार के मासिक वेतन की अदालती कुर्की द्वारा ऋण वसूली'
    },
    relevant_act: 'Sec 60(1)(i) & Order XXI Rule 48, CPC, 1908',
    summary: {
      en: 'Recovering decreed debts by attaching a portion of the judgment debtor monthly salary directly via their employer.',
      bn: 'টাকার মামলায় জেতার পর দেনাদারের অফিস বা কর্মস্থল থেকে প্রতি মাসের বেতনের এক-তৃতীয়াংশ কেটে টাকা আদায়।',
      hi: 'अदालती डिक्री के बाद देनदार की कंपनी या सरकारी विभाग से वेतन का हिस्सा सीधे कोर्ट में जमा कराना।'
    },
    authority_forum: {
      en: 'Civil Executing Court',
      bn: 'দেওয়ানি এক্সিকিউটিং আদালত',
      hi: 'सिविल निष्पादन न्यायालय'
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
      en: ['salary attachment money decree', 'order 21 rule 48 cpc', 'section 60 cpc salary exemption'],
      bn: ['বেতন ক্রোক ডিক্রি', 'অর্ডার ২১ রুল ৪৮', 'কর্মস্থল থেকে দেনা আদায়'],
      hi: ['वेतन कुर्की डिक्री', 'आदेश 21 नियम 48', 'सैलरी अटैचमेंट सीपीसी']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'File execution petition detailing debtor employer address and net monthly salary.',
        'Pray for attachment order under Order XXI Rule 48 CPC up to non-exempt limit (one-third salary).',
        'Court serves a formal Salary Garnishee precept directly on employer disbursing officer.',
        'Employer automatically deducts installment every month and deposits directly into court treasury.'
      ],
      bn: [
        'এক্সিকিউশন পিটিশনে দেনাদারের অফিসের ঠিকানা, পদবি ও মাসিক নিট বেতনের বিবরণ দাখিল করুন।',
        'অর্ডার ২১ রুল ৪৮ সিপিসি অনুযায়ী বেতনের আইনসম্মত এক-তৃতীয়াংশ ক্রোকের আবেদন দিন।',
        'আদালত দেনাদারের নিয়োগকর্তা বা ডিডিও (DDO)-র ওপর সরাসরি বেতন কাটার সরকারি হুকুম জারি করবে।',
        'কোম্পানি বা সরকারি দপ্তর প্রতি মাসে বেতন থেকে কিস্তির টাকা কেটে আদালতের কোষাগারে জমা করবে।'
      ],
      hi: [
        'निष्पादन याचिका में देनदार के नियोक्ता का पता एवं मासिक शुद्ध वेतन का विवरण दें।',
        'आदेश 21 नियम 48 के तहत वेतन के गैर-छूट प्राप्त हिस्से (एक-तिहाई) की कुर्की मांगें।',
        'अदालत सीधे नियोक्ता के वेतन वितरण अधिकारी (DDO) को वेतन कटौती का आदेश भेजेगी।',
        'कंपनी हर महीने वेतन से तय राशि काटकर सीधे अदालत के खाते में जमा कराने हेतु बाध्य होगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-21-1',
        name: { en: 'Salary Slip / Employment Proof & Certified Money Decree', bn: 'দেনাদারের পে-স্লিপ বা কর্মস্থলের প্রমাণ ও ডিক্রি', hi: 'देनदार की सैलरी स्लिप एवं प्रमाणित दीवानी डिक्री' },
        issuing_authority: { en: 'Employer / Civil Court', bn: 'নিয়োগকারী সংস্থা / আদালত', hi: 'नियोक्ता / सिविल कोर्ट' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-22',
    productCategory: 'free-checklist',
    title: {
      en: 'Detention of Wilful Debt Defaulters in Civil Prison',
      bn: 'ইচ্ছাকৃতভাবে পাওনা টাকা না দিলে দেওয়ানি জেলে আটক',
      hi: 'सामर्थ्य होते हुए भी जानबूझकर कर्ज न चुकाने पर सिविल जेल में निरुद्ध करना'
    },
    relevant_act: 'Sec 51 r/w Order XXI Rules 37–40, CPC, 1908',
    summary: {
      en: 'Committing recalcitrant debtors who possess the financial capability but deliberately refuse to satisfy decrees to civil jail.',
      bn: 'টাকা দেওয়ার সামর্থ্য থাকা সত্ত্বেও আদালতের রায় অমান্যকারী দেনাদারকে সর্বোচ্চ ৩ মাসের জন্য দেওয়ানি জেলে আটক।',
      hi: 'पैसा होने पर भी अदालत की डिक्री का भुगतान न करने वाले जिद्दी देनदार को 3 माह हेतु सिविल जेल भेजना।'
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
      en: '60 to 90 working days',
      bn: '৬০ থেকে ৯০ কার্যদিবস',
      hi: '60 से 90 कार्यदिवस'
    },
    search_keywords: {
      en: ['civil prison for debt default', 'order 21 rule 37 cpc', 'section 51 arrest execution'],
      bn: ['টাকা না দিলে দেওয়ানি জেল', 'দেনাদারের গ্রেফতারি পরোয়ানা', 'অর্ডার ২১ রুল ৩৭'],
      hi: ['कर्ज न चुकाने पर सिविल जेल', 'आदेश 21 नियम 37', 'धारा 51 गिरफ्तारी वारंट']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'File application under Order XXI Rule 37 CPC supported by affidavit showing debtor has means to pay.',
        'Court issues show-cause notice directing judgment debtor to appear and explain why they should not be jailed.',
        'If debtor absconds or refuses compliance, court issues warrant of civil arrest.',
        'Upon inquiry, if wilful evasion is established, judge commits debtor to civil prison up to 90 days.'
      ],
      bn: [
        'দেনাদারের টাকা দেওয়ার আর্থিক সঙ্গতি রয়েছে প্রমাণে হলফনামাসহ অর্ডার ২১ রুল ৩৭-এ আবেদন দিন।',
        'আদালত দেনাদারকে শো-কজ নোটিশ পাঠিয়ে কেন জেলে পাঠানো হবে না তার জবাব চাইবে।',
        'দেনাদার হাজির না হলে বা টাকা না দিলে বিচারক তার নামে দেওয়ানি গ্রেপ্তারি পরোয়ানা জারি করবেন।',
        'আদালতে পেশ করার পর ইচ্ছাকৃত অবহেলা প্রমাণিত হলে বিচারক দেনাদারকে সর্বোচ্চ ৯০ দিনের জেলে পাঠাবেন।'
      ],
      hi: [
        'आदेश 21 नियम 37 में शपथ पत्र दें कि देनदार के पास भुगतान की पूरी वित्तीय क्षमता है।',
        'अदालत कारण बताओ नोटिस देकर पूछेगी कि उसे सिविल जेल क्यों न भेजा जाए।',
        'टालमटोल करने पर अदालत देनदार की गिरफ्तारी का गैर-जमानती सिविल वारंट जारी करेगी।',
        'जानबूझकर भुगतान न करने की पुष्टि होने पर न्यायाधीश उसे 90 दिन तक सिविल जेल भेजेंगे।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-22-1',
        name: { en: 'Affidavit of Debtor Financial Means & Certified Unsatisfied Decree', bn: 'দেনাদারের আর্থিক সঙ্গতির হলফনামা ও বকেয়া ডিক্রি', hi: 'देनदार की वित्तीय क्षमता का शपथ पत्र एवं डिक्री' },
        issuing_authority: { en: 'Decree Holder / Notary Public', bn: 'ডিক্রি প্রাপক', hi: 'डिक्री धारक / नोटरी' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-23',
    productCategory: 'free-checklist',
    title: {
      en: 'Unpaid Dues of Civil, Electrical & Construction Contractors',
      bn: 'পূর্ত ও গৃহনির্মাণ ঠিকাদারের বকেয়া বিল আদায়ের মামলা',
      hi: 'भवन एवं विद्युत ठेकेदारों के बकाया बिलों की कानूनी वसूली'
    },
    relevant_act: 'Indian Contract Act, 1872 & MSMED Act, 2006',
    summary: {
      en: 'Securing recovery of running bills, extra variation orders, and defect retention funds withheld by developers or state agencies.',
      bn: 'বাড়ি বা রাস্তা তৈরির পর ঠিকাদারের রানিং বিল বা সিকিউরিটি ডিপোজিট আটকে রাখলে সুদে-আসলে টাকা আদায়।',
      hi: 'निर्माण कार्य पूरा होने के बाद भी रोके गए रनिंग बिल एवं रिटेंशन मनी की ब्याज सहित वसूली।'
    },
    authority_forum: {
      en: 'Commercial Court / West Bengal MSME Council',
      bn: 'বাণিজ্যিক আদালত / এমএসএমই কাউন্সিল',
      hi: 'वाणिज्यिक न्यायालय / एमएसएमई परिषद'
    },
    forum_type: 'Commercial_Court',
    is_complex: true,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '90 days (MSME) / 1 year (Commercial Court)',
      bn: '৯০ দিন (MSME) / ১ বছর (বাণিজ্যিক আদালত)',
      hi: '90 दिन (MSME) / 1 वर्ष (अदालत)'
    },
    search_keywords: {
      en: ['contractor unpaid bill recovery', 'retention money refund builder', 'running account bill dispute'],
      bn: ['ঠিকাদারের বকেয়া বিল', 'কনস্ট্রাকশন বিল বিরোধ', 'রিটেনশন মানি ফেরত'],
      hi: ['ठेकेदार बकाया बिल वसूली', 'कंस्ट्रक्शन बिल विवाद', 'रिटेंशन राशि वापसी']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Compile verified work orders, site measurement sheets signed by site engineers, and approved RA bills.',
        'Issue 15-day statutory demand letter demanding payment and release of defect liability guarantees.',
        'If registered under Udyam, file reference on MSME Samadhaan portal claiming 3x RBI interest.',
        'If not MSME, institute Commercial Suit praying for summary judgment under Order XIII-A CPC.'
      ],
      bn: [
        'সাইট ইঞ্জিনিয়ারের সই করা মেজারমেন্ট বুক (MB), অনুমোদিত রানিং বিল ও কাজের আদেশ একত্র করুন।',
        '১৫ দিনের সময় দিয়ে বকেয়া বিল ও রিটেনশন মানি ছাড়ার আনুষ্ঠানিক লিগ্যাল নোটিশ পাঠান।',
        'উদ্যম সার্টিফিকেট থাকলে এমএসএমই সমাধান পোর্টালে আরবিআই-এর ৩ গুণ সুদে কেস করুন।',
        'এমএসএমই না হলে বাণিজ্যিক আদালতে অর্ডার ১৩-এ সিপিসি অনুযায়ী সামারি জাজমেন্ট চেয়ে মামলা করুন।'
      ],
      hi: [
        'स्वीकृत वर्क ऑर्डर, साइट इंजीनियर द्वारा हस्ताक्षरित माप पुस्तिका (MB) एवं बिल एकत्र करें।',
        '15 दिन में बकाया भुगतान एवं रिटेंशन गारंटी रिलीज करने का औपचारिक मांग पत्र भेजें।',
        'उद्यम पंजीकृत होने पर एमएसएमई समाधान पर 3 गुना ब्याज सहित वाद दर्ज कराएं।',
        'अन्यथा वाणिज्यिक न्यायालय में आदेश 13-A सीपीसी के तहत त्वरित फैसले का वाद दायर करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-23-1',
        name: { en: 'Signed Work Order, Measurement Book (MB) & Final Running Bills', bn: 'কাজের অর্ডার, মেজারমেন্ট বুক ও চূড়ান্ত রানিং বিল', hi: 'वर्क ऑर्डर, माप पुस्तिका (MB) एवं स्वीकृत रनिंग बिल' },
        issuing_authority: { en: 'Contractor / Project Developer', bn: 'ঠিকাদার / ডেভেলপার', hi: 'ठेकेदार / बिल्डर' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-24',
    productCategory: 'free-checklist',
    title: {
      en: 'Recovery of Unpaid Consultant & Freelance Professional Fees',
      bn: 'কনসালট্যান্ট ও ফ্রিল্যান্সারদের বকেয়া পারিশ্রমিক আদায়',
      hi: 'कंसल्टेंट, डॉक्टर एवं फ्रीलांसरों की बकाया प्रोफेशनल फीस वसूली'
    },
    relevant_act: 'Order XXXVII, CPC, 1908 r/w Indian Contract Act',
    summary: {
      en: 'Fast-track recovery of unpaid design, advisory, or software development professional fees based on invoices.',
      bn: 'আইটি, আর্কিটেক্ট বা কনসালট্যান্টদের কাজ করিয়ে নিয়ে টাকা না দিলে দ্রুত আইনি ডিক্রির মাধ্যমে পারিশ্রমিক আদায়।',
      hi: 'सॉफ्टवेयर, डिजाइन या कंसल्टेंसी का काम कराने के बाद फीस हड़पने वाली कंपनियों से त्वरित वसूली।'
    },
    authority_forum: {
      en: 'Civil Summary Court / Small Causes Court',
      bn: 'দেওয়ানি সামারি আদালত / স্মল কজেস কোর্ট',
      hi: 'सिविल समरी कोर्ट / स्माल कॉजेज कोर्ट'
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
      en: ['freelancer unpaid invoice lawsuit', 'consultancy fees recovery order 37', 'software developer payment default'],
      bn: ['ফ্রিল্যান্সার বকেয়া ফি', 'কনসালটেন্সি ফি আদায়', 'আইটি বিল বকেয়া'],
      hi: ['फ्रीलांसर फीस वसूली', 'कंसल्टेंट बकाया बिल वाद', 'प्रोफेशनल फीस मुकदमा']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Organize signed work contracts, written email acceptance of deliverables, and GST invoices.',
        'Serve final legal demand notice giving 15 days to clear unpaid professional consultancy invoices.',
        'File Order XXXVII CPC Summary Suit; defendant must apply for leave to defend in 10 days.',
        'If leave to defend is refused or not filed, judge immediately enters judgment for the debt.'
      ],
      bn: [
        'চুক্তিপত্র, কাজ ডেলিভারির ক্লায়েন্ট ইমেল স্বীকৃতি ও জিএসটি ইনভয়েসগুলো গুছিয়ে নিন।',
        'বকেয়া বিল মেটানোর জন্য ১৫ দিনের সময় দিয়ে আইনজীবীর মাধ্যমে কড়া লিগ্যাল নোটিশ দিন।',
        'অর্ডার ৩৭ সিপিসি অনুযায়ী সামারি মামলা করুন; বিবাদীকে ১০ দিনে হাজির হয়ে জবাব চাইতে হবে।',
        'বিবাদী আদালতের সন্তোষজনক জবাব দিতে না পারলে বিচারক সরাসরি ডিক্রি দিয়ে পুরো টাকা আদায় করবেন।'
      ],
      hi: [
        'हस्ताक्षरित अनुबंध, काम की ईमेल स्वीकृति एवं भेजे गए जीएसटी बिलों को तैयार रखें।',
        '15 दिनों में बकाया कंसल्टेंसी फीस चुकाने का औपचारिक विधिक मांग पत्र भेजें।',
        'आदेश 37 सीपीसी में समरी वाद दायर करें; प्रतिवादी को 10 दिन में लीव टू डिफेंड लेना होगा।',
        'बचाव की अनुमति न मिलने पर अदालत तुरंत ब्याज सहित पूरी फीस चुकाने की डिक्री देगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-money-24-1',
        name: { en: 'Service Scope Agreement, Email Deliverable Acceptance & GST Invoices', bn: 'কাজের চুক্তিপত্র, ইমেল সম্মতি ও জিএসটি ইনভয়েস', hi: 'सेवा अनुबंध, काम स्वीकृति का ईमेल एवं जीएसटी बिल' },
        issuing_authority: { en: 'Professional / Client', bn: 'পেশাদার / ক্লায়েন্ট', hi: 'कंसल्टेंट / कंपनी' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-money-25',
    productCategory: 'lawyer-only',
    title: {
      en: 'Urgent Appeal Against SARFAESI Bank Property Auction',
      bn: 'ডিআরটি ট্রাইব্যুনালে সারফাসি নিলামের বিরুদ্ধে স্থগিতাদেশ',
      hi: 'बैंक द्वारा घर की नीलामी (SARFAESI Auction) पर डीआरटी से आपात रोक'
    },
    relevant_act: 'Sec 17, SARFAESI Act, 2002',
    summary: {
      en: 'Securing an emergency stay from DRT against bank e-auctions of family homes where banks undervalued the property.',
      bn: 'ঋণখেলাপের অজুহাতে ব্যাঙ্কের বাড়ি নিলাম নোটিশের বিরুদ্ধে ডিআরটি ট্রাইব্যুনাল থেকে জরুরি স্থগিতাদেশ লাভ।',
      hi: 'बैंक द्वारा कम दाम में घर नीलाम करने के नोटिस के विरुद्ध 45 दिनों में डीआरटी से नीलामी रुकवाना।'
    },
    authority_forum: {
      en: 'Debts Recovery Tribunal (DRT, Kolkata)',
      bn: 'ঋণ পুনরুদ্ধার ট্রাইব্যুনাল (DRT কলকাতা)',
      hi: 'ऋण वसूली अधिकरण (DRT कोलकाता)'
    },
    forum_type: 'DRT',
    is_complex: true,
    official_portal_url: 'https://drt.etribunals.gov.in/',
    statutory_timeframe: {
      en: 'Mandatory filing within 45 days of auction notice',
      bn: 'নিলাম নোটিশের ৪৫ দিনের মধ্যে বাধ্যতামূলক মামলা',
      hi: 'नीलामी नोटिस के 45 दिन के भीतर अनिवार्य'
    },
    search_keywords: {
      en: ['stay sarfaesi auction drt kolkata', 'section 17 sarfaesi application', 'bank auction undervaluation challenge'],
      bn: ['সারফাসি নিলাম স্থগিত', 'ডিআরটি কলকাতা মামলা', 'ব্যাঙ্ক নিলাম চ্যালেঞ্জ'],
      hi: ['सरफेसी नीलामी रोक', 'डीआरटी कोलकाता याचिका', 'बैंक नीलामी स्थगनादेश']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'Debts Recovery Tribunal (DRT) having jurisdiction over secured property location',
          bn: 'জামানতসম্পত্তির অবস্থানাধীন ডিআরটি ট্রাইব্যুনাল (কলকাতা DRT সাধারণত)',
          hi: 'जमानत संपत्ति के स्थान क्षेत्राधिकार वाला DRT (आमतौर पर DRT कोलकाता)'
        },
        portal_name: { en: 'DRT E-Filing Portal', bn: 'ডিআরটি ই-ফাইলিং পোর্টাল', hi: 'DRT ई-फाइलिंग' },
        portal_url: 'https://drt.etribunals.gov.in/',
        steps: {
          en: [
            'Receive bank Section 13(4) physical possession or e-auction notice published in newspapers.',
            'Hire approved valuer to prepare independent valuation showing bank set a deflated reserve price.',
            'File Securitisation Application (SA) under Section 17 before jurisdictional DRT within 45 days.',
            'Obtain ad-interim stay on auction bids subject to depositing token percentage (10%–20%) with bank.'
          ],
          bn: [
            'সংবাদপত্রে প্রকাশিত ব্যাঙ্কের ধারা ১৩(৪) নিলাম নোটিশের সার্টিফাইড কপি সংগ্রহ করুন।',
            'সরকারি ভ্যালুয়ার দিয়ে মূল্যায়ন করিয়ে প্রমাণ করুন ব্যাঙ্ক জলের দরে নিলামের দাম ধার্য করেছে।',
            '৪৫ দিনের মধ্যে সম্যনামস্থ ডিআরটি ট্রাইব্যুনালে ধারা ১৭ অনুযায়ী সিকিউরিটাইজেশন কেস (SA) করুন।',
            'ঋণের ১০%–২০% টাকা ব্যাঙ্কে জমা দেওয়ার শর্তে বাড়ি বিক্রির নিলামে জরুরি স্থগিতাদেশ পান।'
          ],
          hi: [
            'बैंक द्वारा धारा 13(4) में जारी ई-नीलामी अथवा भौतिक कब्जे के नोटिस की प्रति लें।',
            'प्रमाणित वैल्यूअर से मूल्यांकन कराएं कि बैंक ने घर की रिजर्व प्राइस बहुत कम रखी है।',
            '45 दिन के भीतर संबंधित DRT ट्राइब्यूनल में धारा 17 के तहत सिक्यूटाइजेशन आवेदन (SA) दाखिल करें।',
            'बकाए का 10% से 20% जमा करने की शर्त पर नीलामी की बोली पर अदालत से तुरंत रोक लें।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'Debts Recovery Tribunal (DRT, Kolkata) - Principal DRT for West Bengal',
          bn: 'ঋণ পুনরুদ্ধার ট্রাইব্যুনাল (DRT কলকাতা) - পশ্চিমবঙ্গের মূল ডিআরটি',
          hi: 'ऋण वसूली अधिकरण (DRT कोलकाता) - पश्चिम बंगाल का मुख्य DRT'
        },
        portal_name: { en: 'DRT Kolkata E-Filing Portal', bn: 'ডিআরটি কলকাতা ই-ফাইলিং', hi: 'DRT कोलकाता ई-फाइलिंग' },
        portal_url: 'https://drt.etribunals.gov.in/',
        steps: {
          en: [
            'Receive bank Section 13(4) physical possession or e-auction notice published in newspapers.',
            'Hire approved valuer to prepare independent valuation showing bank set a deflated reserve price.',
            'File Securitisation Application (SA) under Section 17 before DRT Kolkata within 45 days.',
            'Obtain ad-interim stay on auction bids subject to depositing token percentage (10%–20%) with bank.'
          ],
          bn: [
            'সংবাদপত্রে প্রকাশিত ব্যাঙ্কের ধারা ১৩(৪) নিলাম নোটিশের সার্টিফাইড কপি সংগ্রহ করুন।',
            'সরকারি ভ্যালুয়ার দিয়ে মূল্যায়ন করিয়ে প্রমাণ করুন ব্যাঙ্ক জলের দরে নিলামের দাম ধার্য করেছে।',
            '৪৫ দিনের মধ্যে কলকাতার ডিআরটি ট্রাইব্যুনালে ধারা ১৭ অনুযায়ী সিকিউরিটাইজেশন কেস (SA) করুন।',
            'ঋণের ১০%–২০% টাকা ব্যাঙ্কে জমা দেওয়ার শর্তে বাড়ি বিক্রির নিলামে জরুরি স্থগিতাদেশ পান।'
          ],
          hi: [
            'बैंक द्वारा धारा 13(4) में जारी ई-नीलामी अथवा भौतिक कब्जे के नोटिस की प्रति लें।',
            'प्रमाणित वैल्यूअर से मूल्यांकन कराएं कि बैंक ने घर की रिजर्व प्राइस बहुत कम रखी है।',
            '45 दिन के भीतर DRT कोलकाता में धारा 17 के तहत सिक्यूटाइजेशन आवेदन (SA) दाखिल करें।',
            'बकाए का 10% से 20% जमा करने की शर्त पर नीलामी की बोली पर अदालत से तुरंत रोक लें।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Receive bank Section 13(4) physical possession or e-auction notice published in newspapers.',
        'Hire approved valuer to prepare independent valuation showing bank set a deflated reserve price.',
        'File Securitisation Application (SA) under Section 17 before DRT Kolkata within 45 days.',
        'Obtain ad-interim stay on auction bids subject to depositing token percentage (10%–20%) with bank.'
      ],
      bn: [
        'সংবাদপত্রে প্রকাশিত ব্যাঙ্কের ধারা ১৩(৪) নিলাম নোটিশের সার্টিফাইড কপি সংগ্রহ করুন।',
        'সরকারি ভ্যালুয়ার দিয়ে মূল্যায়ন করিয়ে প্রমাণ করুন ব্যাঙ্ক জলের দরে নিলামের দাম ধার্য করেছে।',
        '৪৫ দিনের মধ্যে কলকাতার ডিআরটি ট্রাইব্যুনালে ধারা ১৭ অনুযায়ী সিকিউরিটাইজেশন কেস (SA) করুন।',
        'ঋণের ১০%–২০% টাকা ব্যাঙ্কে জমা দেওয়ার শर्तে বাড়ি বিক্রির নিলামে জরুরি স্থগিতাদেশ পান।'
      ],
      hi: [
        'बैंक द्वारा धारा 13(4) में जारी ई-नीलामी अथवा भौतिक कब्जे के नोटिस की प्रति लें।',
        'प्रमाणित वैल्यूअर से मूल्यांकन कराएं कि बैंक ने घर की रिजर्व प्राइस बहुत कम रखी है।',
        '45 दिन के भीतर DRT कोलकाता में धारा 17 के तहत सिक्यूटाइजेशन आवेदन (SA) दाखिल करें।',
        'बकाए का 10% से 20% जमा करने की शर्त पर नीलामी की बोली पर अदालत से तुरंत रोक लें।'
      ]
    },
    fees: [
      {
        id: 'fee-money-25-sarfaesi',
        kind: 'authority_calculated',
        label: {
          en: 'DRT Section 17 SARFAESI Application Filing Fee',
          bn: 'DRT ধারা ১৭ সারফাসি আবেদনের দাখিল ফি',
          hi: 'DRT धारा 17 SARFAESI आवेदन दाखिला शुल्क'
        },
        formula_description: {
          en: 'DRT Regulations filing fee based on secured debt amount; minimum ₹1,000 for individual borrowers. Confirm current fee on DRT portal before filing.',
          bn: 'DRT বিধি অনুযায়ী জামানতযুক্ত ঋণের ওপর ফি; ব্যক্তিগত ঋণগ্রহীতার জন্য ন্যূনতম ১,০০০ টাকা। দাখিলের আগে DRT পোর্টালে বর্তমান ফি যাচাই করুন।',
          hi: 'DRT विनियम अनुसार जमानतयुक्त ऋण पर शुल्क; व्यक्तिगत ऋणी के लिए न्यूनतम ₹1,000। दाखिले से पहले DRT पोर्टल पर वर्तमान शुल्क जांचें।'
        },
        conditions: {
          en: 'Fee scales with secured debt amount; bank valuation report and approved valuer certificate required.',
          bn: 'ফি জামানতযুক্ত ঋণের পরিমাণের সাথে স্কেল করে; ব্যাঙ্ক ভ্যালুয়েশন রিপোর্ট ও অনুমোদিত ভ্যালুয়ারের সার্টিফিকেট প্রয়োজন।',
          hi: 'शुल्क जमानतयुक्त ऋण की राशि के साथ स्केल करता है; बैंक वैल्यूएशन रिपोर्ट और अनुमोदित वैल्यूअर सर्टिफिकेट आवश्यक।'
        },
        scope: 'national',
        evidence: {
          status: 'verified',
          primary_source_title: 'SARFAESI Act, 2002 Sec 17 & DRT Regulations',
          primary_source_url: 'https://drt.etribunals.gov.in/',
          pinpoint: 'SARFAESI 2002 Sec 17(1) 45-day filing; DRT (Procedure) Regulations fee schedule',
          checked_on: '2026-10-15'
        }
      }
    ],
    timeline_info: [
      {
        id: 'time-money-25-sarfaesi-duration',
        kind: 'indicative_estimate',
        label: {
          en: 'DRT SARFAESI stay application processing time',
          bn: 'DRT সারফাসি স্থগিতাদেশ প্রক্রিয়াকরণের সময়',
          hi: 'DRT SARFAESI स्थगन आवेदन प्रक्रिया की अवधि'
        },
        value_description: {
          en: 'Urgent ad-interim stay within 24-48 hours of filing; final hearing within 30-60 days; token deposit (10-20%) required for stay.',
          bn: 'দাখিলের ২৪-৪৮ ঘণ্টার মধ্যে জরুরি অন্তর্বর্তী স্থগিতাদেশ; চূড়ান্ত শুনানি ৩০-৬০ দিনে; টোকেন জমা (১০-২০%) স্থগিতাদের শর্ত।',
          hi: 'दाखिले के २४-४८ घंटे में आपात अंतरिम रोक; अंतिम सुनवाई ३०-६० दिन में; टोकन जमा (१०-२०%) रोक हेतु आवश्यक।'
        },
        scope: 'national',
        evidence: {
          status: 'verified',
          primary_source_title: 'SARFAESI Act, 2002 Sec 17 & DRT Practice Directions',
          primary_source_url: 'https://drt.etribunals.gov.in/',
          pinpoint: 'Sec 17(1) 45-day filing deadline; DRT interim stay practice; token deposit 10-20%',
          checked_on: '2026-10-15'
        }
      }
    ],
    required_documents: [
      {
        id: 'doc-money-25-1',
        name: { en: 'Bank Section 13(4) Auction Sale Notice & Approved Valuation Report', bn: 'ব্যাঙ্কের ধারা ১৩(৪) নিলাম নোটিশ ও ভ্যালুয়েশন রিপোর্ট', hi: 'बैंक धारा 13(4) नीलामी नोटिस एवं मूल्यांकन रिपोर्ट' },
        issuing_authority: { en: 'Authorized Bank Officer / Approved Valuer', bn: 'ব্যাঙ্ক অফিসার / ভ্যালুয়ার', hi: 'बैंक प्राधिकृत अधिकारी / वैल्यूअर' },
        is_mandatory: true
      }
    ]
  }
];