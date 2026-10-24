import type { CivilSubCategory } from '../../../types/legal';

export const tenancyPart1: CivilSubCategory[] = [
  {
    id: 'sub-tenancy-01',
    title: {
      en: 'Deposit of Rent with Rent Controller (Districts SDO vs Kolkata)',
      bn: 'রেন্ট কন্ট্রোলারের কাছে সরকারিভাবে ভাড়া জমা দেওয়া (জেলা SDO বনাম কলকাতা)',
      hi: 'रेंट कंट्रोलर के पास वैधानिक किराया जमा करना (जिला एसडीओ बनाम कोलकाता)'
    },
    relevant_act: 'Sec 21 & 22, West Bengal Premises Tenancy (WBPT) Act, 1997',
    summary: {
      en: 'Depositing rent legally within 21 days of postal money order refusal: in districts before the Sub-Divisional Officer (SDO); in Kolkata before the Rent Controller, Kolkata.',
      bn: 'বাড়িওয়ালা ভাড়া নিতে অস্বীকার করলে ২১ দিনের মধ্যে ডাক মানি অর্ডার প্রত্যাখ্যানের ভিত্তিতে সরকারি ট্রেজারি চালানে ভাড়া জমা।',
      hi: 'मकान मालिक द्वारा किराया न लेने पर 21 दिनों में डाक मनी ऑर्डर अस्वीकृति के बाद रेंट कंट्रोलर के पास किराया जमा करना।'
    },
    authority_forum: {
      en: 'SDO Rent Controller (Districts) / Rent Controller Kolkata',
      bn: 'মহকুমা শাসক (SDO) রেন্ট কন্ট্রোলার (জেলা) / রেন্ট কন্ট্রোলার কলকাতা',
      hi: 'अनुमंडल दंडाधिकारी (एसडीओ) रेंट कंट्रोलर / रेंट कंट्रोलर कोलकाता'
    },
    forum_type: 'Rent_Controller',
    is_complex: false,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: 'Within 21 days of postal money order refusal',
      bn: 'মানি অর্ডার প্রত্যাখ্যানের ২১ দিনের মধ্যে',
      hi: 'मनी ऑर्डर अस्वीकृति के 21 दिन के भीतर'
    },
    search_keywords: {
      en: ['deposit rent', 'rent controller kolkata', 'sdo rent controller', 'section 21 wbpt'],
      bn: ['ভাড়া জমা', 'রেন্ট কন্ট্রোলার কলকাতা', 'এসডিও রেন্ট কন্ট্রোলার', 'ধারা ২১'],
      hi: ['किराया जमा', 'रेंट कंट्रोलर चालान', 'एसडीओ किराया जमा', 'धारा 21']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'Office of the Sub-Divisional Officer (SDO) - District Rent Controller',
          bn: 'মহকুমা শাসকের কার্যালয় (SDO) - জেলা রেন্ট কন্ট্রোলার',
          hi: 'अनुमंडल दंडाधिकारी कार्यालय (SDO) - जिला रेंट कंट्रोलर'
        },
        portal_name: { en: 'District Administration Portal', bn: 'জেলা প্রশাসন পোর্টাল', hi: 'जिला प्रशासन पोर्टल' },
        portal_url: 'https://districts.ecourts.gov.in/',
        steps: {
          en: [
            'Send monthly rent to landlord via Postal Money Order (POM) with coupon acknowledging tenancy.',
            'Preserve postal refusal endorsement slip signed by postal delivery agent.',
            'File Section 21 application before Sub-Divisional Officer (SDO) acting as Rent Controller in 21 days.',
            'Deposit rent in local State Treasury via GRIPS challan and collect verified receipt foil.'
          ],
          bn: [
            'কুপনে মাসের নাম লিখে ডাকযোগে পোস্টাল মানি অর্ডারে (POM) বাড়িওয়ালাকে ভাড়া পাঠান।',
            'ডাকপিয়ন কর্তৃক ভাড়া প্রত্যাখ্যানের সইযুক্ত রসিদ বা স্লিপ প্রমাণ হিসেবে সংরক্ষণ করুন।',
            'প্রত্যাখ্যানের ২১ দিনের মধ্যে সংশ্লিষ্ট মহকুমা শাসকের (SDO) রেন্ট কন্ট্রোলার এজলাসে আবেদন করুন।',
            'GRIPS ট্রেজারি চালানের মাধ্যমে সরকারি অ্যাকাউন্টে ভাড়া জমা দিয়ে অফিশিয়াল জমা রসিদ নিন।'
          ],
          hi: [
            'माह का स्पष्ट उल्लेख करते हुए डाक मनी ऑर्डर (POM) द्वारा मकान मालिक को किराया भेजें।',
            'डाकिया द्वारा दर्ज की गई अस्वीकृति की मुहर व रसीद को सुरक्षित रखें।',
            'अस्वीकृति के 21 दिनों के भीतर अनुमंडल दंडाधिकारी (SDO) के समक्ष धारा 21 में आवेदन दें।',
            'GRIPS ट्रेजरी चालान द्वारा सरकारी खाते में किराया जमा कर वैधानिक रसीद प्राप्त करें।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'Office of the Rent Controller, Kolkata (2 & 3 Kiran Shankar Roy Road)',
          bn: 'রেন্ট কন্ট্রোলারের কার্যালয়, কলকাতা (২ ও ৩ কিরণ শঙ্কর রায় রোড)',
          hi: 'रेंट कंट्रोलर कार्यालय, कोलकाता (किरण शंकर राय रोड)'
        },
        portal_name: { en: 'Kolkata Rent Controller Registry', bn: 'কলকাতা রেন্ট কন্ট্রোলার রেজিস্ট্রি', hi: 'कोलकाता रेंट कंट्रोलर' },
        portal_url: 'https://kmcgov.in/',
        steps: {
          en: [
            'Send rent to landlord via registered POM with coupon mentioning Kolkata tenancy address.',
            'Obtain postal refusal memo from India Post delivery branch in Kolkata.',
            'File Section 21 Petition before Rent Controller, Kolkata (Kiran Shankar Roy Road) in 21 days.',
            'Deposit monthly rent on Treasury Challan at Reserve Bank / State Treasury counter.'
          ],
          bn: [
            'কলকাতার ভাড়ার বাড়ির ঠিকানা উল্লেখ করে কুপনসহ রেজিস্ট্রি মানি অর্ডারে ভাড়া পাঠান।',
            'কলকাতা ডাক বিভাগের ডেলিভারি শাখা থেকে প্রত্যাখ্যানের আনুষ্ঠানিক মেমো নিন।',
            '২১ দিনের মধ্যে কিরণ শঙ্কর রায় রোডের কলকাতা রেন্ট কন্ট্রোলারের এজলাসে ধারা ২১ পিটিশন করুন।',
            'ট্রেজারি চালানে সরকারি অ্যাকাউন্টে ভাড়া জমা দিয়ে অফিশিয়াল জমা রসিদ বইতে এন্ট্রি করান।'
          ],
          hi: [
            'कोलकाता परिसर का उल्लेख करते हुए कूपन सहित डाक मनी ऑर्डर द्वारा किराया प्रेषित करें।',
            'डाक विभाग से अस्वीकृति का आधिकारिक मेमो प्राप्त कर सुरक्षित रखें।',
            '21 दिनों में किरण शंकर राय रोड स्थित रेंट कंट्रोलर कोलकाता के समक्ष धारा 21 का वाद दें।',
            'ट्रेजरी चालान के माध्यम से सरकारी खाते में किराया जमा कर अधिकृत रसीद प्राप्त करें।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Send monthly rent via Postal Money Order (POM) with coupon acknowledging tenancy.',
        'Retain postman refusal endorsement or postal tracking slip as legal evidence.',
        'File application under Section 21 WBPT Act before Rent Controller within 21 days.',
        'Deposit monthly rent on Treasury Challan and obtain official verified receipt foil.'
      ],
      bn: [
        'কুপনে নির্দিষ্ট মাসের উল্লেখসহ ডাকযোগে পোস্টাল মানি অর্ডারে (POM) ভাড়া পাঠান।',
        'ডাকপিয়ন কর্তৃক ভাড়া প্রত্যাখ্যানের সইযুক্ত রসিদ প্রমাণ হিসেবে সংরক্ষণ করুন।',
        'প্রত্যাখ্যানের ২১ দিনের মধ্যে রেন্ট কন্ট্রোলারের কাছে ধারা ২১ অনুযায়ী আবেদন করুন।',
        'ট্রেজারি চালানে সরকারি অ্যাকাউন্টে ভাড়া জমা দিয়ে অফিশিয়াল জমা রসিদ সংগ্রহ করুন।'
      ],
      hi: [
        'माह का स्पष्ट उल्लेख करते हुए डाक मनी ऑर्डर (POM) द्वारा किराया भेजें।',
        'डाकिया द्वारा दर्ज की गई अस्वीकृति की मुहर व रसीद को सुरक्षित रखें।',
        'अस्वीकृति के 21 दिनों के भीतर रेंट कंट्रोलर के पास धारा 21 में आवेदन दें।',
        'ट्रेजरी चालान के माध्यम से सरकारी खाते में किराया जमा कर वैधानिक रसीद लें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-01-1',
        name: { en: 'Refused Postal Money Order (POM) Receipt', bn: 'প্রত্যাখ্যাত পোস্টাল মানি অর্ডার রসিদ', hi: 'अस्वीकृत डाक मनी ऑर्डर रसीद' },
        issuing_authority: { en: 'Department of Posts (India Post)', bn: 'ডাক বিভাগ', hi: 'डाक विभाग' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-02',
    title: {
      en: 'Tenancy Eviction Suit on Statutory Grounds',
      bn: 'বিধিবদ্ধ কারণে ভাড়াটে উচ্ছেদের দেওয়ানি মামলা',
      hi: 'वैधानिक आधारों पर किरायेदार बेदखली का दीवानी वाद'
    },
    relevant_act: 'Sec 6, West Bengal Premises Tenancy Act, 1997',
    summary: {
      en: 'Eviction suit on grounds of default, subletting, structural change, or personal necessity: District Courts for districts; Presidency Small Causes / City Civil Court for Kolkata.',
      bn: 'ভাড়া বকেয়া, অননুমোদিত উপ-ভাড়াটে বা নিজস্ব প্রয়োজনে ভাড়াটে উচ্ছেদের দেওয়ানি মামলা (জেলা আদালত বনাম প্রেসিডেন্সি স্মল কজেস কোর্ট কলকাতা)।',
      hi: 'किराया बकाया, अनधिकृत उप-किरायेदारी या निजी आवश्यकता पर किरायेदार बेदखली का वाद।'
    },
    authority_forum: {
      en: 'Civil Court (Districts) / Presidency Small Causes Court (Kolkata)',
      bn: 'দেওয়ানি আদালত (জেলা) / প্রেসিডেন্সি স্মল কজেস কোর্ট (কলকাতা)',
      hi: 'सिविल न्यायालय (जिले) / स्माल कॉजेज कोर्ट (कोलकाता)'
    },
    forum_type: 'Civil_Court',
    is_complex: true,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '1-month Notice to Quit; 1 to 3 years trial',
      bn: '১ মাসের উচ্ছেদ নোটিশ; ১ থেকে ৩ বছর মামলা',
      hi: '1 माह का बेदखली नोटिस; 1 से 3 वर्ष विचारण'
    },
    search_keywords: {
      en: ['tenant eviction suit', 'section 6 wbpt', 'small causes court kolkata eviction'],
      bn: ['ভাড়াটে উচ্ছেদ মামলা', 'ধারা ৬ ডব্লুবিপিটি', 'স্মল কজেস কোর্ট উচ্ছেদ'],
      hi: ['किरायेदार बेदखली', 'मकान खाली कराना', 'धारा 6 बेदखली नोटिस']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'Court of Civil Judge (Junior / Senior Division) in District Courts',
          bn: 'জেলা আদালতের সিভিল জজ আদালত (জুনিয়র / সিনিয়র ডিভিশন)',
          hi: 'जिला न्यायालय में सिविल जज (जूनियर/सीनियर डिवीजन)'
        },
        portal_name: { en: 'District eCourts Services', bn: 'জেলা ই-কোর্ট পোর্টাল', hi: 'जिला ई-कोर्ट्स' },
        portal_url: 'https://districts.ecourts.gov.in/',
        steps: {
          en: [
            'Serve statutory 1-month Notice to Quit under Section 6(4) via registered post with AD.',
            'Wait for expiry of 30-day statutory notice cure window.',
            'File Title Eviction Suit before jurisdictional Civil Judge in District Court (Alipore, Barasat, etc.).',
            'Prove statutory ground, obtain eviction decree, and execute with district police assistance.'
          ],
          bn: [
            'রেজিস্ট্রি ডাকে প্রাপ্তিস্বীকার পত্রসহ ধারা ৬(৪) অনুযায়ী ১ মাসের উচ্ছেদ নোটিশ পাঠান।',
            'বিধিবদ্ধ ৩০ দিনের নোটিশের মেয়াদ শেষ হওয়া পর্যন্ত অপেক্ষা করুন।',
            'আলিপুর, বারাসাত বা সংশ্লিষ্ট জেলা আদালতে সিভিল জজের কাছে টাইটেল উচ্ছেদ মামলা করুন।',
            'আইনি কারণ প্রমাণ করে উচ্ছেদ ডিক্রি পান এবং জেলা পুলিশের সহায়তায় দখল নিন।'
          ],
          hi: [
            'पंजीकृत डाक द्वारा धारा 6(4) के तहत 1 माह का वैधानिक बेदखली नोटिस भेजें।',
            'नोटिस की 30 दिवसीय वैधानिक समय-सीमा समाप्त होने की प्रतीक्षा करें।',
            'संबंधित जिला अदालत (अलीपुर, बारासात आदि) में सिविल जज के समक्ष निष्कासन वाद करें।',
            'वैधानिक आधार सिद्ध कर बेदखली डिक्री प्राप्त करें एवं पुलिस बल से कब्जा लें।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'Presidency Small Causes Court / City Civil Court at Calcutta',
          bn: 'প্রেসিডেন্সি স্মল কজেস কোর্ট / সিটি সিভিল কোর্ট কলকাতা',
          hi: 'प्रेसिडेंसी स्माल कॉजेज कोर्ट / नगर दीवानी अदालत कोलकाता'
        },
        portal_name: { en: 'Calcutta City Civil & Small Causes Portal', bn: 'সিটি সিভিল ও স্মল কজেস কোর্ট', hi: 'सिटी सिविल कोर्ट' },
        portal_url: 'https://calcuttahighcourt.gov.in/',
        steps: {
          en: [
            'Serve statutory 1-month Notice to Quit under Section 6(4) at Kolkata tenancy address.',
            'Wait for expiry of 30-day notice period without tenant vacating premises.',
            'File Ejectment Suit before Presidency Small Causes Court (up to pecuniary limit) or City Civil Court.',
            'Secure ejectment decree; execute through Small Causes Court Bailiff.'
          ],
          bn: [
            'কলকাতার ভাড়াবাড়ির ঠিকানায় ধারা ৬(৪) অনুযায়ী ১ মাসের আনুষ্ঠানিক উচ্ছেদ নোটিশ দিন।',
            '৩০ দিনের মেয়াদ শেষে ঘর খালি না হলে আইনি পদক্ষেপের প্রক্রিয়া শুরু করুন।',
            'প্রেসিডেন্সি স্মল কজেস কোর্ট বা সিটি সিভিল কোর্টে ইজেক্টমেন্ট মামলা দায়ের করুন।',
            'উচ্ছেদ ডিক্রি লাভ করে স্মল কজেস কোর্ট বেলিফের মাধ্যমে জোরপূর্বক দখল গ্রহণ করুন।'
          ],
          hi: [
            'कोलकाता परिसर के पते पर धारा 6(4) के तहत 1 माह का बेदखली मांग पत्र भेजें।',
            '30 दिन की मियाद बीतने के बाद भी परिसर खाली न होने पर वाद का आधार बनेगा।',
            'प्रेसिडेंसी स्माल कॉजेज कोर्ट अथवा सिटी सिविल कोर्ट कोलकाता में इजेक्टमेंट वाद दाखिल करें।',
            'अदालती डिक्री प्राप्त कर स्माल कॉजेज कोर्ट के बेलीफ द्वारा ताला तुड़वाकर कब्जा लें।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Serve statutory 1-month Notice to Quit under Section 6(4) via registered post with AD.',
        'Wait for expiry of the 30-day statutory notice cure window.',
        'File Title Eviction Suit before the Civil Judge or Presidency Small Causes Court.',
        'Prove statutory eviction ground, obtain eviction decree, and execute with police aid.'
      ],
      bn: [
        'রেজিস্ট্রি ডাকে প্রাপ্তিস্বীকার পত্রসহ ধারা ৬(৪) অনুযায়ী ১ মাসের উচ্ছেদ নোটিশ পাঠান।',
        'বিধিবদ্ধ ৩০ দিনের নোটিশের মেয়াদ শেষ হওয়া পর্যন্ত অপেক্ষা করুন।',
        'সিভিল জজ আদালত বা প্রেসিডেন্সি স্মল কজেস কোর্টে টাইটেল উচ্ছেদ মামলা দায়ের করুন।',
        'আইনি কারণ প্রমাণ করে উচ্ছেদ ডিক্রি পান এবং প্রয়োজনে পুলিশি সহায়তায় দখল নিন।'
      ],
      hi: [
        'पंजीकृत डाक द्वारा धारा 6(4) के तहत 1 माह का वैधानिक बेदखली नोटिस भेजें।',
        'नोटिस की 30 दिवसीय वैधानिक समय-सीमा समाप्त होने की प्रतीक्षा करें।',
        'सिविल जज अथवा स्माल कॉजेज कोर्ट में टाइटल बेदखली वाद दाखिल करें।',
        'वैधानिक आधार सिद्ध कर बेदखली डिक्री प्राप्त करें एवं पुलिस बल से कब्जा लें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-02-1',
        name: { en: 'Statutory 1-Month Notice to Quit with Postal AD Card', bn: '১ মাসের উচ্ছেদ নোটিশ ও পোস্টাল এডি কার্ড', hi: '1 माह का बेदखली नोटिस एवं डाक पावती' },
        issuing_authority: { en: 'Advocate on Record / India Post', bn: 'বিজ্ঞ আইনজীবী / ডাক বিভাগ', hi: 'अधिवक्ता / डाक विभाग' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-03',
    title: {
      en: 'Emergency Restoration of Cut-off Water/Power',
      bn: 'বিচ্ছিন্ন জল বা বিদ্যুৎ সংযোগের জরুরি পুনর্বহাল',
      hi: 'काटे गए पानी या बिजली कनेक्शन की आपातकालीन बहाली'
    },
    relevant_act: 'Sec 27, West Bengal Premises Tenancy Act, 1997',
    summary: {
      en: 'Emergency order directing landlord or utility to restore cut-off water or electricity within 24 hours: SDO in districts; Kolkata Rent Controller / CESC in Kolkata.',
      bn: 'বাড়িওয়ালা জোরপূর্বক জল বা বিদ্যুতের লাইন কেটে দিলে ২৪ ঘণ্টার মধ্যে সংযোগ চালুর জরুরি সরকারি আদেশ।',
      hi: 'मकान मालिक द्वारा जबरन पानी या बिजली काटने पर 24 घंटे में कनेक्शन बहाली का आदेश।'
    },
    authority_forum: {
      en: 'SDO Rent Controller (Districts) / Kolkata Rent Controller',
      bn: 'মহকুমা শাসক (SDO) রেন্ট কন্ট্রোলার (জেলা) / রেন্ট কন্ট্রোলার কলকাতা',
      hi: 'अनुमंडल दंडाधिकारी (एसडीओ) / रेंट कंट्रोलर कोलकाता'
    },
    forum_type: 'Rent_Controller',
    is_complex: false,
    statutory_timeframe: {
      en: 'Interim restoration order within 24 to 48 hours',
      bn: '২৪ থেকে ৪৮ ঘণ্টার মধ্যে অন্তর্বর্তী আদেশ',
      hi: '24 से 48 घंटे के भीतर बहाली आदेश'
    },
    search_keywords: {
      en: ['water cut tenancy', 'electricity disconnected tenant', 'section 27 wbpt emergency'],
      bn: ['জল বন্ধ ভাড়াটে', 'বিদ্যুৎ বিচ্ছিন্ন', 'রেন্ট কন্ট্রোলার ধারা ২৭'],
      hi: ['किरायेदार की बिजली काटना', 'पानी कनेक्शन बहाली', 'धारा 27 आपात आदेश']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'Sub-Divisional Officer (SDO) / WBSEDCL Station Manager',
          bn: 'মহকুমা শাসক (SDO) / ডব্লুবিএসইডিসিএল স্টেশন ম্যানেজার',
          hi: 'अनुमंडल दंडाधिकारी (SDO) / विद्युत स्टेशन प्रबंधक'
        },
        steps: {
          en: [
            'File emergency Section 27 petition before SDO Rent Controller with recent rent receipts.',
            'SDO issues show-cause notice to landlord returnable within 24 hours.',
            'If landlord fails to restore, SDO orders WBSEDCL/Panchayat to reconnect line under police escort.',
            'Landlord penalized with statutory fine up to double the restoration cost.'
          ],
          bn: [
            'ভাড়ার রসিদসহ মহকুমা শাসকের (SDO) রেন্ট কন্ট্রোলার এজলাসে ধারা ২৭ আবেদন করুন।',
            'এসডিও ২৪ ঘণ্টার মধ্যে বাড়িওয়ালাকে কারণ দর্শানোর জরুরি নোটিশ দেবেন।',
            'বাড়িওয়ালা লাইন না জুড়লে এসডিও পুলিশি পাহারায় বিদ্যুৎ বোর্ডকে সংযোগ চালুর নির্দেশ দেবেন।',
            'বাড়িওয়ালার ওপর সংযোগ খরচের দ্বিগুণ পর্যন্ত সরকারি জরিমানা চাপানো হবে।'
          ],
          hi: [
            'हालिया किराया रसीदों सहित एसडीओ रेंट कंट्रोलर के पास धारा 27 में आपात याचिका दें।',
            'एसडीओ 24 घंटे के भीतर मकान मालिक को कारण बताओ नोटिस जारी करेंगे।',
            'मकान मालिक के न मानने पर एसडीओ पुलिस बल के साथ बिजली बोर्ड को लाइन जोड़ने का आदेश देंगे।',
            'मकान मालिक पर कनेक्शन खर्च का दोगुना वैधानिक जुर्माना लगाया जाएगा।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'Rent Controller, Kolkata / CESC Special Grievance Cell',
          bn: 'রেন্ট কন্ট্রোলার কলকাতা / সিইএসসি স্পেশাল সেল',
          hi: 'रेंट कंट्रोलर कोलकाता / सीईएससी स्पेशल सेल'
        },
        steps: {
          en: [
            'File urgent Section 27 petition before Rent Controller Kolkata at Kiran Shankar Roy Road.',
            'Produce Rent Controller deposit challans and proof of sudden power/water disconnection.',
            'Rent Controller issues interim order within 24 hours directed to CESC / KMC Water Dept.',
            'CESC technical team reconnects power under order of the Rent Controller.'
          ],
          bn: [
            'কিরণ শঙ্কর রায় রোডের কলকাতা রেন্ট কন্ট্রোলারের কাছে ধারা ২৭ জরুরি আবেদন পেশ করুন।',
            'সরকারি ভাড়ার চালান ও হঠাৎ জল-বিদ্যুৎ সংযোগ কাটার প্রত্যক্ষ প্রমাণ প্রদর্শন করুন।',
            'রেন্ট কন্ট্রোলার ২৪ ঘণ্টার মধ্যে সিইএসসি ও কেএমসি জল বিভাগকে পুনঃসংযোগের আদেশ দেবেন।',
            'সিইএসসি-র কারিগরি দল আদালতের আদেশবলে অবিলম্বে বিদ্যুৎ মিটার ও লাইন পুনরায় চালু করবে।'
          ],
          hi: [
            'किरण शंकर राय रोड स्थित रेंट कंट्रोलर कोलकाता के समक्ष धारा 27 की आपात याचिका दें।',
            'रेंट कंट्रोलर के चालान एवं बिजली/पानी काटने के प्रत्यक्ष साक्ष्य प्रस्तुत करें।',
            'रेंट कंट्रोलर 24 घंटे में सीईएससी एवं केएमसी जल विभाग को बहाली का आदेश देंगे।',
            'सीईएससी की तकनीकी टीम रेंट कंट्रोलर के आदेश के तहत तुरंत बिजली बहाल करेगी।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'File an emergency petition under Section 27 WBPT Act before the Rent Controller.',
        'Produce recent rent receipts and proof that essential services were severed without court order.',
        'Rent Controller issues immediate ex-parte notice ordering restoration within 24 hours.',
        'If landlord defaults, Rent Controller authorizes utility to reconnect with police assistance.'
      ],
      bn: [
        'রেন্ট কন্ট্রোলারের কাছে ধারা ২৭ অনুযায়ী জরুরি পরিসেবা পুনর্বহালের আবেদন করুন।',
        'হাল ভাড়ার রসিদ এবং বিনা কারণে পরিসেবা বিচ্ছিন্ন করার চাক্ষুষ প্রমাণ পেশ করুন।',
        'রেন্ট কন্ট্রোলার ২৪ ঘণ্টার মধ্যে সংযোগ পুনরায় চালুর জরুরি আদেশ জারি করবেন।',
        'বাড়িওয়ালা অমান্য করলে পুলিশি সহায়তায় সিইএসসি বা পুরসভাকে সংযোগ জোড়ার নির্দেশ দেওয়া হয়।'
      ],
      hi: [
        'रेंट कंट्रोलर के समक्ष धारा 27 के तहत आवश्यक सेवा बहाली की आपात याचिका दें।',
        'हालिया किराया रसीद एवं कनेक्शन काटने के साक्ष्य प्रस्तुत करें।',
        'रेंट कंट्रोलर 24 घंटे के भीतर पानी-बिजली बहाल करने का आपात आदेश देंगे।',
        'मकान मालिक के न मानने पर पुलिस सहायता से कनेक्शन पुनः जोड़ दिया जाएगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-03-1',
        name: { en: 'Recent Rent Receipts / Challans', bn: 'সাম্প্রতিক ভাড়ার রসিদ বা সরকারি চালান', hi: 'हालिया किराया रसीद या सरकारी चालान' },
        issuing_authority: { en: 'Landlord / Rent Controller', bn: 'বাড়িওয়ালা / রেন্ট কন্ট্রোলার', hi: 'मकान मालिक / रेंट कंट्रोलर' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-04',
    title: {
      en: 'Fixation & Revision of Fair/Standard Rent',
      bn: 'ন্যায্য ও স্ট্যান্ডার্ড ভাড়া নির্ধারণ ও সংশোধন',
      hi: 'उचित एवं मानक किराये (फेयर रेंट) का वैधानिक निर्धारण'
    },
    relevant_act: 'Sec 17 & 18, West Bengal Premises Tenancy Act, 1997',
    summary: {
      en: 'Statutory determination or revision of fair rent: SDO Rent Controller in districts; Kolkata Rent Controller based on KMC valuation in Kolkata.',
      bn: 'সরকারিভাবে ন্যায্য ভাড়া নির্ধারণ: জেলায় এসডিও রেন্ট কন্ট্রোলার; কলকাতায় কেএমসি কর মূল্যায়নের ভিত্তিতে রেন্ট কন্ট্রোলার আদালত।',
      hi: 'मानक किराये का निर्धारण: जिलों में एसडीओ रेंट कंट्रोलर; कोलकाता में केएमसी मूल्यांकन पर रेंट कंट्रोलर।'
    },
    authority_forum: {
      en: 'Rent Controller Court (SDO / Kolkata)',
      bn: 'রেন্ট কন্ট্রোলার আদালত (SDO / কলকাতা)',
      hi: 'रेंट कंट्रोलर न्यायालय'
    },
    forum_type: 'Rent_Controller',
    is_complex: false,
    statutory_timeframe: {
      en: '3 to 6 months',
      bn: '৩ থেকে ৬ মাস',
      hi: '3 से 6 माह'
    },
    search_keywords: {
      en: ['fair rent fixation', 'section 17 wbpt', 'standard rent kolkata sdo'],
      bn: ['ন্যায্য ভাড়া নির্ধারণ', 'রেন্ট কন্ট্রোলার স্ট্যান্ডার্ড ভাড়া', 'বাড়িভাড়া বৃদ্ধি'],
      hi: ['उचित किराया निर्धारण', 'मानक किराया वाद', 'रेंट कंट्रोलर फेयर रेंट']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'Sub-Divisional Officer (SDO) Rent Controller',
          bn: 'মহকুমা শাসক (SDO) রেন্ট কন্ট্রোলার আদালত',
          hi: 'अनुमंडल दंडाधिकारी (SDO) रेंट कंट्रोलर'
        },
        steps: {
          en: [
            'File Section 17 fair rent application before SDO Rent Controller with tenancy agreement.',
            'SDO calls for building valuation report from Assistant Engineer (PWD Roads/Construction).',
            'Calculate standard rent based on market cost of construction plus land value percentage.',
            'SDO passes final order fixing fair rent binding on landlord and tenant.'
          ],
          bn: [
            'ভাড়া চুক্তিনথিসহ মহকুমা শাসকের (SDO) রেন্ট কন্ট্রোলার এজলাসে ধারা ১৭ আবেদন করুন।',
            'এসডিও পিডব্লুডি অ্যাসিস্ট্যান্ট ইঞ্জিনিয়ারের কাছ থেকে কাঠামোগত মূল্যায়ন রিপোর্ট নেবেন।',
            'নির্মাণ ব্যয় ও জমির বাজার মূল্যের শতাংশের ভিত্তিতে স্ট্যান্ডার্ড ভাড়া হিসাব করা হবে।',
            'এসডিও চূড়ান্ত আদেশ জারি করে ন্যায্য ভাড়া ধার্য করবেন যা উভয় পক্ষের জন্য বাধ্যতামূলক।'
          ],
          hi: [
            'किराया अनुबंध सहित एसडीओ रेंट कंट्रोलर के पास धारा 17 में फेयर रेंट आवेदन दें।',
            'एसडीओ पीडब्ल्यूडी इंजीनियर से भवन के निर्माण लागत की आधिकारिक रिपोर्ट मंगाएंगे।',
            'निर्माण लागत एवं भूमि मूल्य के वैधानिक प्रतिशत के आधार पर किराया तय होगा।',
            'एसडीओ मानक किराये का अंतिम बाध्यकारी आदेश पारित करेंगे।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'Office of the Rent Controller, Kolkata',
          bn: 'রেন্ট কন্ট্রোলারের কার্যালয়, কলকাতা',
          hi: 'रेंट कंट्रोलर कार्यालय, कोलकाता'
        },
        steps: {
          en: [
            'Submit Section 17 petition before Rent Controller Kolkata with KMC tax assessment bill.',
            'Rent Controller deputes building inspector to verify floor area, lift, and common amenities.',
            'Apply statutory formula linking KMC Annual Valuation to fair rental return.',
            'Rent Controller passes formal decree fixing standard monthly rent.'
          ],
          bn: [
            'কেএমসি পুর করের বিলসহ কলকাতা রেন্ট কন্ট্রোলারের কাছে ধারা ১৭ পিটিশন দাখিল করুন।',
            'রেন্ট কন্ট্রোলার পুর পরিদর্শক পাঠিয়ে ঘরের মাপ, লিফট ও সুযোগ-সুবিধা খতিয়ে দেখবেন।',
            'কেএমসি বার্ষিক মূল্যায়নের (Annual Valuation) সরকারি ফর্মুলা মেনে ভাড়া নির্ধারণ হবে।',
            'রেন্ট কন্ট্রোলার চূড়ান্ত ডিক্রি জারি করে মাসিক স্ট্যান্ডার্ড ভাড়া ধার্য করবেন।'
          ],
          hi: [
            'केएमसी टैक्स बिल के साथ रेंट कंट्रोलर कोलकाता के समक्ष धारा 17 याचिका दाखिल करें।',
            'रेंट कंट्रोलर निरीक्षक भेजकर फ्लैट के क्षेत्रफल एवं लिफ्ट आदि सुविधाओं की जांच कराएंगे।',
            'केएमसी वार्षिक मूल्यांकन के आधार पर वैधानिक फॉर्मूले से किराया तय किया जाएगा।',
            'रेंट कंट्रोलर मानक मासिक किराये का अंतिम आदेश पारित करेंगे।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'File an application under Section 17 before the Rent Controller for fair rent fixation.',
        'Submit certified copies of municipal property tax valuation and current rent receipts.',
        'Rent Controller appoints an inspector to survey premise area and amenities.',
        'Pass final reasoned order fixing statutory standard rent binding on both parties.'
      ],
      bn: [
        'ন্যায্য ভাড়া নির্ধারণের জন্য রেন্ট কন্ট্রোলারের কাছে ধারা ১৭ অনুযায়ী আবেদন করুন।',
        'পৌরসভার কর মূল্যায়ন বিবরণী এবং বর্তমান ভাড়ার রসিদ জমা দিন।',
        'রেন্ট কন্ট্রোলার ঘরের পরিমাপ ও সুযোগ-সুবিধা খতিয়ে দেখতে পরিদর্শক পাঠাবেন।',
        'উভয় পক্ষের শুনানি শেষে সরকারিভাবে স্ট্যান্ডার্ড ভাড়ার চূড়ান্ত আদেশ জারি করা হবে।'
      ],
      hi: [
        'उचित किराया निर्धारण हेतु रेंट कंट्रोलर के समक्ष धारा 17 में आवेदन दें।',
        'नगरपालिका संपत्ति कर मूल्यांकन एवं वर्तमान किराया रसीदें संलग्न करें।',
        'रेंट कंट्रोलर द्वारा परिसर के क्षेत्रफल एवं सुविधाओं की जांच हेतु निरीक्षक भेजा जाएगा।',
        'दोनों पक्षों को सुनकर मानक किराये का अंतिम बाध्यकारी आदेश पारित होगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-04-1',
        name: { en: 'Municipal / KMC Annual Tax Valuation Certificate', bn: 'পৌরসভা বা KMC বার্ষিক কর মূল্যায়ন সার্টিফিকেট', hi: 'नगरपालिका / केएमसी वार्षिक मूल्यांकन प्रमाणपत्र' },
        issuing_authority: { en: 'KMC / Municipality / Gram Panchayat', bn: 'কেএমসি / পৌরসভা', hi: 'नगर निगम / नगर पालिका' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-05',
    title: {
      en: 'Essential Structural Repairs & Rent Deduction',
      bn: 'বাড়ির জরুরি মেরামত ও ভাড়া থেকে খরচ সমন্বয়',
      hi: 'मकान की आवश्यक मरम्मत एवं किराये से खर्च की कटौती'
    },
    relevant_act: 'Sec 24 & 25, West Bengal Premises Tenancy Act, 1997',
    summary: {
      en: 'Tenant carrying out essential structural repairs (roof, plumbing, electricals) and deducting validated costs from monthly rent.',
      bn: 'বাড়িওয়ালা মেরামত না করলে ভাড়াটে নিজে মেরামত করিয়ে ভাড়া থেকে খরচ সমন্বয় করার নিয়ম।',
      hi: 'मकान मालिक द्वारा मरम्मत न कराने पर किरायेदार द्वारा मरम्मत कराकर किराये से समायोजित करना।'
    },
    authority_forum: {
      en: 'Rent Controller Court (SDO / Kolkata)',
      bn: 'রেন্ট কন্ট্রোলার আদালত (SDO / কলকাতা)',
      hi: 'रेंट कंट्रोलर न्यायालय'
    },
    forum_type: 'Rent_Controller',
    is_complex: false,
    statutory_timeframe: {
      en: '30 working days notice; capped at half yearly rent',
      bn: '৩০ দিনের নোটিশ; বার্ষিক ভাড়ার অর্ধেকের সীমা',
      hi: '30 दिन का नोटिस; वार्षिक किराये के आधे की सीमा'
    },
    search_keywords: {
      en: ['tenant repair deduction', 'section 24 wbpt', 'house maintenance rent cut'],
      bn: ['বাড়ি মেরামত ও ভাড়া কর্তন', 'রেন্ট কন্ট্রোলার মেরামত', 'ধারা ২৪'],
      hi: ['किरायेदार मरम्मत अधिकार', 'किराये से कटौती', 'धारा 24 डब्लूबीपीटी']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Serve a registered written notice under Section 24 requesting landlord to repair within 30 days.',
        'If landlord fails to act, prepare an itemized cost estimate by a licensed civil contractor.',
        'File an application under Section 25 before Rent Controller seeking permission to repair.',
        'Carry out repairs and deduct validated costs from monthly rent (up to statutory ceiling).'
      ],
      bn: [
        '৩০ দিনের মধ্যে মেরামতের অনুরোধ জানিয়ে বাড়িওয়ালাকে ধারা ২৪ অনুযায়ী রেজিস্ট্রি নোটিশ দিন।',
        'বাড়িওয়ালা মেরামত না করলে অনুমোদিত ঠিকাদার দিয়ে খরচের প্রাক্কলন তৈরি করুন।',
        'রেন্ট কন্ট্রোলারের কাছে ধারা ২৫ অনুযায়ী মেরামতের অনুমতি চেয়ে আবেদন করুন।',
        'আদেশের পর মেরামত সম্পন্ন করে বিধিবদ্ধ সীমা মেনে মাসিক ভাড়া থেকে বিলের টাকা কেটে নিন।'
      ],
      hi: [
        '30 दिनों में मरम्मत कराने हेतु मकान मालिक को धारा 24 में पंजीकृत नोटिस भेजें।',
        'मकान मालिक के न करने पर प्रमाणित ठेकेदार से मरम्मत खर्च का अनुमान तैयार कराएं।',
        'रेंट कंट्रोलर के समक्ष धारा 25 के तहत मरम्मत की अनुमति हेतु आवेदन दाखिल करें।',
        'अनुमति उपरांत मरम्मत कराकर बिल की राशि को मासिक किराये से समायोजित करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-05-1',
        name: { en: '30-Day Notice for Repairs with Postal Proof', bn: 'মেরামতের ৩০ দিনের নোটিশ ও পোস্টাল রসিদ', hi: 'मरम्मत हेतु 30 दिवसीय नोटिस व डाक रसीद' },
        issuing_authority: { en: 'India Post / Advocate', bn: 'ডাক বিভাগ / আইনজীবী', hi: 'डाक विभाग / अधिवक्ता' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-06',
    title: {
      en: 'Commercial vs Residential Exemption Ceilings',
      bn: 'বাণিজ্যিক বনাম আবাসিক ভাড়ার সীমা ও আইনগত ছাড়',
      hi: 'व्यावसायिक बनाम आवासीय किराये की छूट सीमाएं'
    },
    relevant_act: 'Sec 3(a) & 3(b), West Bengal Premises Tenancy Act, 1997',
    summary: {
      en: 'Divergent statutory rent ceilings: in Kolkata limits, residential > ₹6,500/mo and commercial > ₹10,000/mo fall under TP Act; in other districts, ceilings are ₹3,000/mo and ₹5,000/mo.',
      bn: 'ভাড়ার পরিমাণের ভিত্তিতে আইনগত ছাড়: কলকাতায় আবাসিক ₹৬,৫০০ ও বাণিজ্যিক ₹১০,০০০-এর বেশি; জেলায় আবাসিক ₹৩,০০০ ও বাণিজ্যিক ₹৫,০০০-এর বেশি হলে সাধারণ সম্পত্তি হস্তান্তর আইনে বিচার।',
      hi: 'रेंट एक्ट छूट सीमा: कोलकाता में ₹6,500 (आवासीय) व ₹10,000 (व्यावसायिक); अन्य जिलों में ₹3,000 व ₹5,000 से अधिक पर टीपी एक्ट लागू।'
    },
    authority_forum: {
      en: 'Civil Court (Transfer of Property Act Jurisdiction)',
      bn: 'দেওয়ানি আদালত (টিপি অ্যাক্ট এক্তিয়ার)',
      hi: 'सिविल न्यायालय (टीपी एक्ट क्षेत्राधिकार)'
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
      en: ['tenancy exemption ceiling', 'section 3 wbpt', 'kolkata rent limits vs districts'],
      bn: ['ভাড়ার সীমা ছাড়', 'ধারা ৩ ডব্লুবিপিটি', 'উচ্চ ভাড়ার আইনি নিয়ম'],
      hi: ['किरायेदारी छूट सीमा', 'धारा 3 रेंट एक्ट', 'टीपी एक्ट किरायेदारी']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'Court of Civil Judge (Senior Division) in Districts',
          bn: 'জেলা দেওয়ানি আদালত (সিনিয়র ডিভিশন)',
          hi: 'जिला सिविल न्यायालय (सीनियर डिवीजन)'
        },
        steps: {
          en: [
            'Verify monthly rent exceeds district threshold: Residential > ₹3,000/mo or Commercial > ₹5,000/mo.',
            'Confirm premises is exempt from WBPT Act rent controller protection.',
            'Serve 15-day Notice to Terminate Tenancy under Section 106 Transfer of Property Act.',
            'File civil ejectment suit in District Court; tenant cannot claim statutory rent control defense.'
          ],
          bn: [
            'ভাড়ার সীমা যাচাই করুন: জেলায় আবাসিক ₹৩,০০০ বা বাণিজ্যিক ₹৫,০০০-এর বেশি কি না।',
            'নিশ্চিত হন যে এই ভাড়াটি টেন্যান্সি অ্যাক্টের আওতাবহির্ভূত এবং টিপি অ্যাক্ট প্রযোজ্য।',
            'টিপি অ্যাক্টের ধারা ১০৬ অনুযায়ী ১৫ দিনের লিজ অবসানের রেজিস্ট্রি নোটিশ দিন।',
            'জেলা আদালতে সাধারণ উচ্ছেদ মামলা করুন; ভাড়াটে কোনো রেন্ট কন্ট্রোলারের সুরক্ষা পাবে না।'
          ],
          hi: [
            'किराया सीमा जांचें: जिलों में आवासीय ₹3,000 अथवा व्यावसायिक ₹5,000 से अधिक होना।',
            'पुष्टि करें कि परिसर रेंट कंट्रोल एक्ट से बाहर होकर सामान्य टीपी एक्ट के तहत आता है।',
            'धारा 106 टीपी एक्ट के तहत 15 दिन का लीज समाप्ति नोटिस डाक से भेजें।',
            'जिला कोर्ट में सीधे बेदखली वाद करें; किरायेदार रेंट एक्ट का बचाव नहीं ले सकेगा।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'City Civil Court at Calcutta / High Court Original Side',
          bn: 'সিটি সিভিল কোর্ট কলকাতা / হাইকোর্ট অরিজিনাল সাইড',
          hi: 'सिटी सिविल कोर्ट कोलकाता / हाईकोर्ट मूल शाखा'
        },
        steps: {
          en: [
            'Verify monthly rent exceeds Kolkata threshold: Residential > ₹6,500/mo or Commercial > ₹10,000/mo.',
            'Confirm tenancy falls under Transfer of Property Act rather than WBPT Act.',
            'Serve statutory 15-day termination notice under Section 106 TP Act.',
            'File suit for ejectment and mesne profits before City Civil Court or High Court Original Side.'
          ],
          bn: [
            'ভাড়ার সীমা যাচাই করুন: কলকাতায় আবাসিক ₹৬,৫০০ বা বাণিজ্যিক ₹১০,০০০-এর বেশি কি না।',
            'নিশ্চিত হন যে সম্পত্তিটি ডব্লুবিপিটি অ্যাক্ট থেকে অব্যাহতিপ্রাপ্ত এবং টিপি অ্যাক্ট প্রযোজ্য।',
            'টিপি অ্যাক্টের ধারা ১০৬ অনুযায়ী ১৫ দিনের লিজ বাতিলের আনুষ্ঠানিক নোটিশ পাঠান।',
            'সিটি সিভিল কোর্ট বা হাইকোর্টের অরিজিনাল সাইডে সরাসরি উচ্ছেদ ও মেসনে প্রফিটের মামলা করুন।'
          ],
          hi: [
            'कोलकाता सीमा जांचें: आवासीय ₹6,500 अथवा व्यावसायिक ₹10,000 से अधिक मासिक किराया।',
            'सुनिश्चित करें कि किरायेदारी रेंट एक्ट से मुक्त होकर टीपी एक्ट के अधीन है।',
            'धारा 106 टीपी एक्ट के तहत 15 दिनों का लीज समाप्ति नोटिस जारी करें।',
            'सिटी सिविल कोर्ट या हाईकोर्ट की मूल शाखा में सीधे बेदखली एवं हर्जाने का वाद दायर करें।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Verify rent threshold: Kolkata municipal limits vs other district thresholds.',
        'If above ceiling, confirm tenancy is exempt from WBPT Act and governed by Transfer of Property Act.',
        'Landlord serves 15-day Notice to Terminate Tenancy under Section 106 TP Act.',
        'File suit for ejectment and mesne profits before the Civil Court directly.'
      ],
      bn: [
        'ভাড়ার সীমা যাচাই করুন: কলকাতা পুর এলাকা বনাম অন্যান্য জেলার বিধিবদ্ধ ভাড়ার ফারাক।',
        'সীমা অতিক্রম করলে নিশ্চিত হন যে এটি টেন্যান্সি অ্যাক্টের বদলে সম্পত্তি হস্তান্তর আইনে শাসিত।',
        'টিপি অ্যাক্টের ধারা ১০৬ অনুযায়ী ১৫ দিনের লিজ বাতিলের নোটিশ জারি করুন।',
        'দেওয়ানি আদালতে সরাসরি সাধারণ উচ্ছেদ ও ক্ষতিপূরণের মামলা দায়ের করুন।'
      ],
      hi: [
        'किराया सीमा जांचें: कोलकाता नगर निगम सीमा बनाम अन्य जिलों की वैधानिक सीमाएं।',
        'सीमा से अधिक होने पर किरायेदारी रेंट एक्ट से बाहर होकर टीपी एक्ट के तहत आएगी।',
        'टीपी एक्ट की धारा 106 के तहत 15 दिनों का लीज समाप्ति नोटिस जारी करें।',
        'सिविल न्यायालय में सीधे बेदखली एवं हर्जाने (मेस्ने प्रॉफिट्स) का वाद दायर करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-06-1',
        name: { en: 'Lease Agreement proving Monthly Rent Ceiling', bn: 'ভাড়া চুক্তিপত্র বা ভাড়ার প্রত্যয়িত রসিদ', hi: 'किराया अनुबंध विलेख' },
        issuing_authority: { en: 'Notary Public / Sub-Registrar', bn: 'নোটারি / সাব-রেজিস্ট্রার', hi: 'नोटरी / उप-पंजीयक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-07',
    title: {
      en: 'Sub-letting without Landlord Consent Eviction',
      bn: 'বাড়িওয়ালার অনুমতিহীন উপ-ভাড়াটে উচ্ছেদ',
      hi: 'बिना अनुमति उप-किरायेदार (सब-टेनेंट) रखने पर बेदखली'
    },
    relevant_act: 'Sec 6(1)(a) & Sec 26, WBPT Act, 1997',
    summary: {
      en: 'Evicting chief tenants who sublet the rented premises to third parties without prior written landlord consent.',
      bn: 'বাড়িওয়ালার লিখিত অনুমতি ছাড়া অন্য কাউকে উপ-ভাড়াটে বসালে মূল ভাড়াটে উচ্ছেদের মামলা।',
      hi: 'मकान मालिक की पूर्व लिखित सहमति के बिना तीसरे व्यक्ति को उप-किरायेदार रखने पर निष्कासन।'
    },
    authority_forum: {
      en: 'Civil Court (Districts) / Presidency Small Causes Court (Kolkata)',
      bn: 'দেওয়ানি আদালত (জেলা) / প্রেসিডেন্সি স্মল কজেস কোর্ট (কলকাতা)',
      hi: 'सिविल न्यायालय / स्माल कॉजेज कोर्ट'
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
      en: ['subletting eviction', 'section 6 1 a wbpt', 'illegal subtenant'],
      bn: ['উপ-ভাড়াটে উচ্ছেদ', 'অনুমতিহীন সাবলেট', 'ভাড়াটে বনাম উপভাড়াটে'],
      hi: ['सबलेटिंग बेदखली', 'अवैध उप-किरायेदार', 'धारा 6(1)(a)']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Collect evidence of unauthorized third-party commercial or residential occupancy.',
        'Verify that no statutory notice of subletting under Section 26 was served by tenant.',
        'Serve a 1-month Notice to Quit under Section 6(1)(a) citing illegal subletting.',
        'File an eviction suit impleading both chief tenant and sub-tenant to obtain vacant possession.'
      ],
      bn: [
        'অননুমোদিত তৃতীয় পক্ষের বসবাস বা ব্যবসা পরিচালনার প্রত্যক্ষ প্রমাণ ও ছবি সংগ্রহ করুন।',
        'যাচাই করুন ভাড়াটে ধারা ২৬ অনুযায়ী কোনো আইনি সাবলেটিং নোটিশ দিয়েছিল কি না।',
        'বেআইনি উপ-ভাড়াটের কারণ দেখিয়ে ধারা ৬(১)(ক) অনুযায়ী ১ মাসের উচ্ছেদ নোটিশ পাঠান।',
        'মূল ভাড়াটে ও উপ-ভাড়াটে উভয়কে পক্ষভুক্ত করে আদালতে উচ্ছেদের মামলা দায়ের করুন।'
      ],
      hi: [
        'तीसरे पक्ष के अनधिकृत कब्जे एवं व्यावसायिक उपयोग के ठोस साक्ष्य जुटाएं।',
        'जांचें कि किरायेदार ने धारा 26 के तहत सबलेटिंग की कोई विधिक सूचना दी थी या नहीं।',
        'अवैध सबलेटिंग के आधार पर धारा 6(1)(a) के तहत 1 माह का बेदखली नोटिस भेजें।',
        'मूल किरायेदार व उप-किरायेदार दोनों को प्रतिवादी बनाकर खाली कब्जे की डिक्री लें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-07-1',
        name: { en: 'Photographic Proof of Third-Party Occupancy', bn: 'তৃতীয় পক্ষের দখলের সচিত্র প্রমাণ', hi: 'अन्य व्यक्ति के कब्जे के फोटो व बिल' },
        issuing_authority: { en: 'Complainant / Private Investigator', bn: 'অভিযোগকারী', hi: 'शिकायतकर्ता' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-08',
    title: {
      en: 'Succession of Tenancy Rights & 5-Year Expiry',
      bn: 'ভাড়াটে মৃত্যুর পর ৫ বছরের উত্তরাধিকার মেয়াদ',
      hi: 'किरायेदार की मृत्यु उपरांत 5 वर्षीय उत्तराधिकार समाप्ति'
    },
    relevant_act: 'Sec 2(g), West Bengal Premises Tenancy Act, 1997',
    summary: {
      en: 'Statutory 5-year cap on succession of residential tenancy rights by financially independent surviving heirs.',
      bn: 'ভাড়াটের মৃত্যুর পর স্বাবলম্বী উত্তরাধিকারীদের ক্ষেত্রে সর্বোচ্চ ৫ বছরের জন্য ভাড়াটে থাকার আইনি মেয়াদ।',
      hi: 'मूल किरायेदार के निधन के बाद आत्मनिर्भर वारिसों के किरायेदारी अधिकार की 5 वर्षीय वैधानिक सीमा।'
    },
    authority_forum: {
      en: 'Civil Court (Junior Division) / Presidency Small Causes Court',
      bn: 'দেওয়ানি আদালত (জুনিয়র ডিভিশন) / প্রেসিডেন্সি স্মল কজেস কোর্ট',
      hi: 'सिविल न्यायालय (जूनियर डिवीजन)'
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
      en: ['succession tenancy 5 years', 'section 2g wbpt', 'tenant heir eviction'],
      bn: ['ভাড়াটের উত্তরাধিকার', '৫ বছরের মেয়াদ শেষ', 'ধারা ২(জি)'],
      hi: ['किरायेदार वारिस 5 वर्ष', 'धारा 2(g) रेंट एक्ट', 'किरायेदारी उत्तराधिकार']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Calculate exact 5-year timeline from death of original recorded tenant.',
        'Verify surviving heirs do not qualify as fully dependent (e.g. they own alternate homes).',
        'Serve Notice to Quit upon expiry of statutory 5-year period under Section 2(g).',
        'File eviction suit on grounds that tenancy rights have legally extinguished by operation of law.'
      ],
      bn: [
        'মূল ভাড়াটের মৃত্যুর তারিখ থেকে ৫ বছরের বিধিবদ্ধ সময়সীমা হিসাব করুন।',
        'প্রমাণ করুন যে বসবাসকারী ওয়ারিশরা নির্ভরশীল ছিলেন না এবং নিজস্ব বাড়ি রয়েছে।',
        'ধারা ২(জি) অনুযায়ী ৫ বছর উত্তীর্ণ হওয়ার পর ঘর খালি করার লিগ্যাল নোটিশ দিন।',
        'আইনবলে ভাড়া স্বত্ব বিলুপ্ত হয়েছে দাবি করে আদালতে দখল পুনরুদ্ধারের মামলা করুন।'
      ],
      hi: [
        'मूल किरायेदार के मृत्यु प्रमाणपत्र से 5 वर्ष की वैधानिक अवधि की गणना करें।',
        'साबित करें कि वारिस मृतक पर आश्रित नहीं थे और उनका अन्यत्र अपना आवास है।',
        'धारा 2(g) के तहत 5 वर्ष की मियाद पूरी होने पर मकान खाली करने का नोटिस दें।',
        'अदालत में वाद दायर कर कानूनन किरायेदारी समाप्त होने के आधार पर बेदखली कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-08-1',
        name: { en: 'Death Certificate of Original Tenant', bn: 'মূল ভাড়াটের মৃত্যু শংসাপত্র', hi: 'मूल किरायेदार का मृत्यु प्रमाणपत्र' },
        issuing_authority: { en: 'KMC / Municipality / Panchayat', bn: 'পৌরসভা / কেএমসি / পঞ্চায়েত', hi: 'नगर पालिका / केएमसी / पंचायत' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-09',
    title: {
      en: 'Immediate Recovery for Senior Citizens & Armed Forces',
      bn: 'প্রবীণ নাগরিক ও প্রতিরক্ষা কর্মীদের দ্রুত বাড়ি ফেরত',
      hi: 'वरिष्ठ नागरिकों एवं सैन्य कर्मियों हेतु त्वरित मकान वापसी'
    },
    relevant_act: 'Sec 10, West Bengal Premises Tenancy Act, 1997',
    summary: {
      en: 'Fast-track summary eviction procedures for senior citizens (65+), defense personnel, or widows needing their home.',
      bn: '৬৫ ঊর্ধ্ব প্রবীণ নাগরিক, সেনাকর্মী বা বিধবা বাড়িওয়ালাদের নিজস্ব বসবাসের জন্য দ্রুত বাড়ি ফেরত।',
      hi: 'वरिष्ठ नागरिकों, सैनिकों एवं विधवाओं को स्वयं के रहने हेतु संक्षिप्त प्रक्रिया द्वारा त्वरित कब्जा दिलाना।'
    },
    authority_forum: {
      en: 'Rent Controller (SDO in Districts / Kolkata Bench)',
      bn: 'রেন্ট কন্ট্রোলার (জেলায় SDO / কলকাতা বেঞ্চ)',
      hi: 'रेंट कंट्रोलर (जिलों में एसडीओ / कोलकाता)'
    },
    forum_type: 'Rent_Controller',
    is_complex: false,
    statutory_timeframe: {
      en: '6 months (Summary Procedure)',
      bn: '৬ মাস (সংক্ষিপ্ত বিচার প্রক্রিয়া)',
      hi: '6 माह (संक्षिप्त प्रक्रिया)'
    },
    search_keywords: {
      en: ['senior citizen eviction wbpt', 'section 10 wbpt', 'armed forces landlord recovery'],
      bn: ['প্রবীণ নাগরিক বাড়ি ফেরত', 'ধারা ১০ ডব্লুবিপিটি', 'সেনাকর্মী বাড়িওয়ালা'],
      hi: ['वरिष्ठ नागरिक बेदखली', 'धारा 10 त्वरित कब्जा', 'सैनिक मकान वापसी']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Verify applicant eligibility: Senior citizen (age 65+), Armed Forces retiree, or widow.',
        'File summary application under Section 10 before Rent Controller with age/pension proof.',
        'Tenant must obtain special leave to contest within 30 days by showing genuine grounds.',
        'If leave is refused or disproved, Rent Controller orders immediate summary eviction within 60 days.'
      ],
      bn: [
        'যোগ্যতা নিশ্চিত করুন: বাড়িওয়ালার বয়স ৬৫ ঊর্ধ্ব, প্রতিরক্ষা কর্মী বা বিধবা হতে হবে।',
        'বয়স বা পেনশনের প্রমাণসহ রেন্ট কন্ট্রোলারের কাছে ধারা ১০ অনুযায়ী সামারি কেস করুন।',
        'ভাড়াটে ৩০ দিনের মধ্যে বিশেষ অনুমতি না পেলে সরাসরি উচ্ছেদের আদেশ হবে।',
        'শুনানি শেষে রেন্ট কন্ট্রোলার ৬০ দিনের মধ্যে দ্রুত ঘর খালি করার নির্বাহী নির্দেশ দেবেন।'
      ],
      hi: [
        'पात्रता जांचें: मकान मालिक 65 वर्ष से अधिक, सैन्य सेवानिवृत्त या विधवा हो।',
        'पेंशन/आयु प्रमाण पत्र सहित रेंट कंट्रोलर के समक्ष धारा 10 में संक्षिप्त वाद करें।',
        'किरायेदार को 30 दिनों में बचाव हेतु विशेष अनुमति (Leave to Defend) लेनी होगी।',
        'अनुमति न मिलने पर रेंट कंट्रोलर 60 दिनों के भीतर त्वरित निष्कासन का आदेश देंगे।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-09-1',
        name: { en: 'Age Proof (65+) / Military Discharge Certificate', bn: 'বয়সের প্রমাণপত্র বা সেনা অবসর শংসাপত্র', hi: 'आयु प्रमाण पत्र (65+) / सैन्य डिस्चार्ज प्रमाण' },
        issuing_authority: { en: 'Election Commission / Ministry of Defence', bn: 'নির্বাচন কমিশন / প্রতিরক্ষা মন্ত্রক', hi: 'निर्वाचन आयोग / रक्षा मंत्रालय' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-10',
    title: {
      en: 'Unlawful Dispossession / Lock-out of Tenant',
      bn: 'ভাড়াটে উচ্ছেদে জোরপূর্বক তালা ভাঙা ও প্রতিকার',
      hi: 'किरायेदार का जबरन ताला तोड़ना या निष्कासन एवं कानूनी पुनर्बहाली'
    },
    relevant_act: 'Sec 6, Specific Relief Act, 1963 & Sec 163 BNSS',
    summary: {
      en: 'Immediate civil and magistrate remedies for tenants forcibly locked out or evicted without due process of law.',
      bn: 'আইনি প্রক্রিয়া না মেনে জোরপূর্বক ভাড়াটের ঘরে তালা দিলে বা বের করে দিলে তাৎক্ষণিক দখল পুনরুদ্ধারের মামলা।',
      hi: 'बिना कानूनी प्रक्रिया किरायेदार का सामान फेंकने या ताला जड़ने पर त्वरित कब्जा बहाली का वाद।'
    },
    authority_forum: {
      en: 'Civil Court / Executive Magistrate / City Civil Court',
      bn: 'দেওয়ানি আদালত / এগজিকিউটিভ ম্যাজিস্ট্রেট',
      hi: 'सिविल न्यायालय / कार्यपालक दंडाधिकारी'
    },
    forum_type: 'Civil_Court',
    is_complex: false,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: 'Within 6 months of lockout; Urgent interim in 7 days',
      bn: 'তালা দেওয়ার ৬ মাসের মধ্যে; অন্তর্বর্তী আদেশ ৭ দিনে',
      hi: 'तालाबंदी के 6 माह में; 7 दिन में अंतरिम आदेश'
    },
    search_keywords: {
      en: ['unlawful dispossession', 'section 6 specific relief', 'landlord locked room'],
      bn: ['ভাড়াটের ঘরে তালা', 'জোরপূর্বক উচ্ছেদ', 'দখল পুনরুদ্ধার ধারা ৬'],
      hi: ['किरायेदार को जबरन निकालना', 'ताला तोड़ना हर्जाना', 'धारा 6 कब्जा वापसी']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Call Police Helpline (112) immediately and record General Diary (GD) of illegal lock-out.',
        'File emergency petition under Section 163 BNSS before Executive Magistrate to record possession.',
        'Institute Summary Suit under Section 6 Specific Relief Act within 6 months of dispossession.',
        'Court restores physical possession irrespective of title disputes between parties.'
      ],
      bn: [
        'তাৎক্ষণিক ১১২ নম্বরে পুলিশে ফোন করুন এবং বেআইনি তালা লাগানোর ঘটনায় থানায় জিডি করুন।',
        'এগজিকিউটিভ ম্যাজিস্ট্রেটের কাছে ধারা ১৬৩ বিএনএসএস পিটিশন দাখিল করে তাৎক্ষণিক তদন্ত করান।',
        'উচ্ছেদের ৬ মাসের মধ্যে স্পেসিফিক রিলিফ অ্যাক্টের ধারা ৬ অনুযায়ী দখল পুনরুদ্ধারের মামলা করুন।',
        'মালিকানার প্রশ্ন বিবেচনা না করেই আদালত পুলিশ দিয়ে ভাড়াটের ঘরে তালা খুলে প্রবেশ করাবে।'
      ],
      hi: [
        'तुरंत 112 डायल करें और थाने में अवैध बेदखली व ताला जड़ने की जीडी दर्ज कराएं।',
        'कार्यपालक दंडाधिकारी के पास धारा 163 बीएनएसएस में त्वरित स्थल जांच का वाद दें।',
        'बेदखली के 6 माह के भीतर विशिष्ट अनुतोष अधिनियम की धारा 6 में संक्षिप्त वाद करें।',
        'स्वामित्व विवाद में जाए बिना अदालत पुलिस बल द्वारा किरायेदार को पुनः कब्जा दिलाएगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-10-1',
        name: { en: 'Police General Diary (GD) on Lockout', bn: 'তালা ভাঙা বা লাগানোর পুলিশ জিডি কপি', hi: 'तालाबंदी की पुलिस जीडी प्रति' },
        issuing_authority: { en: 'Local Police Station', bn: 'স্থানীয় থানা', hi: 'स्थानीय थाना' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-11',
    title: {
      en: 'Execution of Eviction Decree & Police Assistance',
      bn: 'উচ্ছেদ ডিক্রি জারি ও পুলিশি সহায়তায় দখল গ্রহণ',
      hi: 'बेदखली डिक्री का निष्पादन एवं पुलिस बल द्वारा वास्तविक कब्जा'
    },
    relevant_act: 'Order XXI Rules 35 & 36 r/w Sec 151 CPC',
    summary: {
      en: 'Executing a final court eviction decree through a court bailiff and armed police deployment.',
      bn: 'আদালতের উচ্ছেদ ডিক্রির পর ভাড়াটে ঘর না ছাড়লে কোর্ট বেলিফ ও পুলিশের সাহায্যে জোরপূর্বক দখল।',
      hi: 'अदालत से मिली बेदखली डिक्री को कोर्ट बेलीफ एवं सशस्त्र पुलिस बल की मदद से क्रियान्वित कराना।'
    },
    authority_forum: {
      en: 'Civil Executing Court (District Courts / Small Causes Court)',
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
      en: ['execution eviction decree', 'order 21 rule 35 cpc', 'police help eviction'],
      bn: ['উচ্ছেদ ডিক্রি কার্যকর', 'পুলিশি সহায়তায় উচ্ছেদ', 'কোর্ট বেলিফ দখল'],
      hi: ['डिक्री निष्पादन', 'आदेश 21 नियम 35', 'पुलिस बल बेदखली']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'File Execution Petition under Order XXI Rule 11 CPC along with certified eviction decree.',
        'Court issues Writ of Delivery of Possession (Warrant of Possession) to Civil Court Bailiff.',
        'If tenant physically resists, file application under Section 151 CPC for police deployment.',
        'Executing court issues police assistance order; bailiff breaks locks and hands over vacant keys.'
      ],
      bn: [
        'সার্টিফাইড ডিক্রিসহ অর্ডার ২১ রুল ১১ সিপিসি অনুযায়ী এক্সিকিউশন পিটিশন দাখিল করুন।',
        'আদালত দখল হস্তান্তরের জন্য কোর্ট বেলিফের নামে পরোয়ানা জারি করবে।',
        'ভাড়াটে বাধা দিলে ধারা ১৫১ সিপিসি অনুযায়ী পুলিশি সুরক্ষার আবেদন জমা দিন।',
        'আদালত পুলিশকে নির্দেশ দিলে বেলিফ বলপূর্বক তালা ভেঙে বাড়িওয়ালার হাতে চাবি তুলে দেবে।'
      ],
      hi: [
        'प्रमाणित बेदखली डिक्री के साथ आदेश 21 नियम 11 सीपीसी में निष्पादन याचिका दें।',
        'न्यायालय द्वारा कोर्ट बेलीफ के नाम कब्जा हस्तांतरण वारंट जारी किया जाएगा।',
        'किरायेदार द्वारा बल प्रयोग करने पर धारा 151 सीपीसी में पुलिस सुरक्षा की मांग करें।',
        'अदालत के आदेश पर पुलिस बल की मौजूदगी में बेलीफ ताला तोड़कर खाली कब्जा सौंपेगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-11-1',
        name: { en: 'Certified Copy of Final Eviction Decree', bn: 'চূড়ান্ত উচ্ছেদ ডিক্রির সার্টিফাইড কপি', hi: 'अंतिम बेदखली डिक्री की प्रमाणित प्रति' },
        issuing_authority: { en: 'Civil Court Record Department', bn: 'দেওয়ানি আদালত রেকর্ড রুম', hi: 'सिविल कोर्ट रिकॉर्ड रूम' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-12',
    title: {
      en: 'Refund of Security Deposit / Advance Rent',
      bn: 'সিকিউরিটি ডিপোজিট ও অগ্রিম ভাড়ার টাকা ফেরত মামলা',
      hi: 'सुरक्षा जमा (सिक्योरिटी डिपॉजिट) एवं अग्रिम किराये की वापसी का वाद'
    },
    relevant_act: 'Sec 5 & 7, West Bengal Premises Tenancy Act, 1997',
    summary: {
      en: 'Recovering unadjusted security deposits withheld by landlords: SDO in districts; Kolkata Rent Controller / Small Causes in Kolkata.',
      bn: 'ঘর খালি করার পরেও বাড়িওয়ালা সিকিউরিটি ডিপোজিটের টাকা আটকে রাখলে সুদে-আসলে ফেরত আদায়ের মামলা।',
      hi: 'मकान खाली करने के बाद मकान मालिक द्वारा हड़पी गई सिक्योरिटी राशि ब्याज सहित वापस पाना।'
    },
    authority_forum: {
      en: 'Rent Controller / Presidency Small Causes Court',
      bn: 'রেন্ট কন্ট্রোলার / প্রেসিডেন্সি স্মল কজেস কোর্ট',
      hi: 'रेंट कंट्रोलर / स्माल कॉजेज कोर्ट'
    },
    forum_type: 'Rent_Controller',
    is_complex: false,
    statutory_timeframe: {
      en: '3 to 6 months',
      bn: '৩ থেকে ৬ মাস',
      hi: '3 থেকে 6 माह'
    },
    search_keywords: {
      en: ['refund security deposit', 'landlord not returning deposit', 'section 5 wbpt'],
      bn: ['সিকিউরিটি ডিপোজিট ফেরত', 'অগ্রিম টাকা ফেরত', 'রেন্ট কন্ট্রোলার জরিমানা'],
      hi: ['सिक्योरिटी डिपॉजिट वापसी', 'अग्रिम किराया वापसी', 'रेंट एक्ट हर्जाना']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Document peaceful key handover via registered delivery or signed receipt voucher.',
        'Serve formal legal notice demanding return of deposit within 15 days with interest.',
        'File application under Section 5 WBPT Act before Rent Controller for penal refund.',
        'Rent Controller summons landlord, imposes penalties, and issues recovery certificate.'
      ],
      bn: [
        'স্বাক্ষরিত চালান বা রেজিস্ট্রি চিঠির মাধ্যমে চাবি হস্তান্তরের প্রমাণ সুরক্ষিত রাখুন।',
        '১৫ দিনের মধ্যে সুদসহ ডিপোজিটের টাকা ফেরত চেয়ে আইনজীবীর মাধ্যমে লিগ্যাল নোটিশ দিন।',
        'টাকা না দিলে রেন্ট কন্ট্রোলারের কাছে ধারা ৫ অনুযায়ী দণ্ডমূলক ব্যবস্থা ও ফেরতের মামলা করুন।',
        'রেন্ট কন্ট্রোলার বাড়িওয়ালাকে তলব করে টাকা ফেরত দিতে বাধ্য করবেন ও জরিমানা জারি করবেন।'
      ],
      hi: [
        'हस्ताक्षरित पावती या डाक द्वारा चाबी सौंपने का पुख्ता प्रमाण अपने पास रखें।',
        'अधिवक्ता के माध्यम से 15 दिनों में ब्याज सहित सिक्योरिटी लौटाने का विधिक नोटिस दें।',
        'रेंट कंट्रोलर के पास धारा 5 के तहत राशि वापसी एवं जुर्माने का वाद दाखिल करें।',
        'रेंट कंट्रोलर मकान मालिक को तलब कर हर्जाने सहित पूरी राशि लौटाने का आदेश देंगे।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-12-1',
        name: { en: 'Security Deposit Payment Receipt / Bank Statement', bn: 'সিকিউরিটি জমার রসিদ বা ব্যাঙ্ক স্টেটমেন্ট', hi: 'सिक्योरिटी भुगतान रसीद / बैंक स्टेटमेंट' },
        issuing_authority: { en: 'Landlord / Commercial Bank', bn: 'বাড়িওয়ালা / ব্যাঙ্ক', hi: 'मकान मालिक / बैंक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-13',
    title: {
      en: 'Eviction of Licensee upon Revocation of License',
      bn: 'লিভ অ্যান্ড লাইসেন্স চুক্তি বাতিল ও লাইসেন্সি উচ্ছেদ',
      hi: 'लीव एंड लाइसेंस समाप्ति उपरांत लाइसेंसी की बेदखली'
    },
    relevant_act: 'Sec 60, Indian Easements Act, 1882',
    summary: {
      en: 'Ejecting licensees from premises after revocation or expiry of Leave and License agreement in urban/district areas.',
      bn: 'লিভ অ্যান্ড লাইসেন্স চুক্তির মেয়াদ শেষে লাইসেন্সি ঘর খালি না করলে দেওয়ানি উচ্ছেদের মামলা।',
      hi: 'लाइसेंस अनुबंध खत्म होने पर भी कब्जा न छोड़ने वाले व्यक्ति को बेदखल कराने की प्रक्रिया।'
    },
    authority_forum: {
      en: 'Civil Court (Junior / Senior Division) / City Civil Court',
      bn: 'দেওয়ানি আদালত (সিভিল জজ) / সিটি সিভিল কোর্ট',
      hi: 'सिविल न्यायालय (सीनियर/जूनियर डिवीजन)'
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
      en: ['licensee eviction', 'leave and license revoke', 'section 60 easements'],
      bn: ['লাইসেন্স বাতিল উচ্ছেদ', 'লিভ অ্যান্ড লাইসেন্স', 'অনুমতিহীন দখলকারী'],
      hi: ['लाइसेंसी बेदखली', 'लीव एंड लाइसेंस समाप्ति', 'अनाधिकृत दखल']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Verify license terms and confirm agreement creates no legal tenancy rights.',
        'Serve formal Notice of Revocation of License giving 15 days to vacate premises.',
        'File Civil Suit for Mandatory Injunction directing licensee to quit and vacate.',
        'Secure decree for physical handover; claim occupational damages for overstay period.'
      ],
      bn: [
        'চুক্তিপত্র যাচাই করে নিশ্চিত হন যে এটি নিছক লাইসেন্স এবং কোনো ভাড়া স্বত্ব সৃষ্টি করেনি।',
        'লাইসেন্স বাতিল করে ১৫ দিনের মধ্যে ঘর ছাড়ার লিখিত নোটিশ জারি করুন।',
        'ঘর খালি করার নির্দেশ চেয়ে দেওয়ানি আদালতে ম্যান্ডেটরি ইনজাংশনের মামলা করুন।',
        'আদালতের ডিক্রি নিয়ে লাইসেন্সিকে উচ্ছেদ করুন এবং অবৈধ অবস্থানের ক্ষতিপূরণ আদায় করুন।'
      ],
      hi: [
        'अनुबंध जांचें कि यह केवल लाइसेंस था और इसमें किरायेदारी अधिकार नहीं दिए गए थे।',
        'लाइसेंस निरस्त कर 15 दिनों में परिसर खाली करने का औपचारिक नोटिस भेजें।',
        'दीवानी अदालत में आदेशात्मक निषेधाज्ञा (Mandatory Injunction) का वाद दायर करें।',
        'खाली कब्जे की डिक्री प्राप्त करें एवं अतिरिक्त ठहराव की अवधि का हर्जाना वसूलें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-13-1',
        name: { en: 'Leave and License Agreement', bn: 'লিভ অ্যান্ড লাইসেন্স চুক্তিপত্র', hi: 'लीव एंड लाइसेंस अनुबंध विलेख' },
        issuing_authority: { en: 'Notary Public / Sub-Registrar', bn: 'নোটারি / সাব-রেজিস্ট্রার', hi: 'नोटरी / उप-पंजीयक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-14',
    title: {
      en: 'Dangerous Insecure Building Notice & Rehabilitation',
      bn: 'বিপজ্জনক বাড়ি নোটিশ ও ভাড়াটেদের পুনর্বাসন',
      hi: 'खतरनाक/जर्जर भवन नोटिस एवं किरायेदारों का पुनर्वास'
    },
    relevant_act: 'Sec 411, KMC Act, 1980 (Kolkata) / WB Municipal Act (Districts)',
    summary: {
      en: 'Municipal notice to demolish dilapidated building: In Kolkata via Section 411 KMC Act & Municipal Building Tribunal; in districts via Municipal Board / SDO.',
      bn: 'পৌরসভা বিপজ্জনক বাড়ির নোটিশ দিলে উচ্ছেদ প্রতিরোধ ও নতুন ভবনে পুনর্বাসনের আইনি নিশ্চয়তা (কেএমসি বনাম জেলা পুরসভা)।',
      hi: 'नगरपालिका द्वारा जर्जर मकान गिराने का नोटिस मिलने पर किरायेदारों के पुनर्वास एवं पुनरागमन अधिकार की रक्षा।'
    },
    authority_forum: {
      en: 'KMC Building Tribunal (Kolkata) / Municipal Board (Districts)',
      bn: 'পৌর বিল্ডিং ট্রাইব্যুনাল (কলকাতা) / পৌর বোর্ড (জেলা)',
      hi: 'नगरपालिका भवन अधिकरण / उच्च न्यायालय'
    },
    forum_type: 'High_Court',
    is_complex: true,
    official_portal_url: 'https://kmcgov.in/',
    statutory_timeframe: {
      en: 'Urgent (15 to 30 days)',
      bn: 'জরুরি (১৫ থেকে ৩০ দিন)',
      hi: 'अति आवश्यक (15 से 30 दिन)'
    },
    search_keywords: {
      en: ['dangerous building notice', 'section 411 kmc', 'tenant rehabilitation kolkata'],
      bn: ['বিপজ্জনক বাড়ি নোটিশ', 'কেএমসি ধারা ৪১১', 'ভাড়াটে পুনর্বাসন'],
      hi: ['जर्जर मकान नोटिस', 'केएमसी धारा 411', 'किरायेदार पुनर्वास']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'District Municipality / Sub-Divisional Magistrate (SDM)',
          bn: 'জেলা পুরসভা / মহকুমা ম্যাজিস্ট্রেট (SDM)',
          hi: 'जिला नगर पालिका / अनुमंडल दंडाधिकारी'
        },
        steps: {
          en: [
            'Inspect municipal dangerous building notice issued under West Bengal Municipal Act.',
            'Engage chartered engineer to verify whether building can be secured by structural retrofitting.',
            'Execute written rehabilitation settlement before Municipal Chairman ensuring commercial/living space.',
            'If landlord attempts eviction without rehabilitation, move Civil Judge for stay.'
          ],
          bn: [
            'পশ্চিমবঙ্গ পৌরসভা আইনের অধীনে জারি করা বিপজ্জনক নোটিশটি পরীক্ষা করুন।',
            'চার্টার্ড ইঞ্জিনিয়ার দিয়ে পরীক্ষা করান যে বাড়িটি সংস্কার করে বাঁচানো সম্ভব কি না।',
            'নতুন নির্মাণে সমপরিমাণ জায়গা বরাদ্দের লিখিত চুক্তি পুরপ্রধানের উপস্থিতিতে সম্পাদন করুন।',
            'বাড়িওয়ালা পুনর্বাসন ছাড়া জোর করে ভাঙতে চাইলে দেওয়ানি আদালতে স্থগিতাদেশ নিন।'
          ],
          hi: [
            'पश्चिम बंगाल नगर पालिका अधिनियम के तहत जारी जर्जर भवन नोटिस की जांच करें।',
            'स्ट्रक्चरल इंजीनियर से जांच कराएं कि क्या मरम्मत कर इमारत को सुरक्षित किया जा सकता है।',
            'नगर पालिका अध्यक्ष के समक्ष नए भवन में पुनर्वास का लिखित समझौता करें।',
            'पुनर्वास के बिना जबरन गिराने के प्रयास पर सिविल जज से स्थगनादेश लें।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'Municipal Building Tribunal (MBT) / KMC Building Department',
          bn: 'মিউনিসিপ্যাল বিল্ডিং ট্রাইব্যুনাল (MBT) / কেএমসি বিল্ডিং বিভাগ',
          hi: 'नगर भवन अधिकरण (MBT) / केएमसी'
        },
        steps: {
          en: [
            'Receive Section 411 notice from KMC Borough Executive Engineer (Building).',
            'Execute tripartite agreement ensuring registered tenancy rehabilitation under KMC rules.',
            'If notice is used by promoter to fraudulently oust tenants, file appeal before Municipal Building Tribunal.',
            'Move High Court under Article 226 securing conditional municipal sanction protecting re-entry.'
          ],
          bn: [
            'কেএমসি বোরো বিল্ডিং ইঞ্জিনিয়ারের কাছ থেকে ধারা ৪১১ বিপজ্জনক নোটিশ সংগ্রহ করুন।',
            'কেএমসি বিধিমোতাবেক নতুন বহুতলে সমপরিমাণ ঘরের ত্রিপাক্ষিক পুনর্বাসন চুক্তি সম্পাদন করুন।',
            'প্রমোটার ছলচাতুরি করলে কলকাতার মিউনিসিপ্যাল বিল্ডিং ট্রাইব্যুনালে (MBT) আপিল দায়ের করুন।',
            'কলকাতা হাইকোর্টে অনুচ্ছেদ ২২৬ অনুযায়ী রিট করে পুনর্বাসনের শর্তযুক্ত স্যাংকশনের আদেশ নিন।'
          ],
          hi: [
            'केएमसी बोरो इंजीनियर से धारा 411 जर्जर भवन नोटिस की प्रति लें।',
            'केएमसी नियमों के तहत नए फ्लैट में समान जगह का लिखित त्रिपक्षीय पुनर्वास अनुबंध करें।',
            'बिल्डर द्वारा छलपूर्वक बेदखल करने पर नगर भवन अधिकरण (MBT, कोलकाता) में अपील करें।',
            'कलकत्ता हाईकोर्ट से अनुच्छेद 226 में पुनर्वास की शर्त के बिना ध्वस्तीकरण पर रोक लें।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Inspect municipal Section 411 notice to determine whether building requires repair or demolition.',
        'Execute tri-partite Development Agreement ensuring guaranteed re-allotment of equivalent space.',
        'If landlord uses demolition to extinguish tenancies, file appeal before Building Tribunal.',
        'Move High Court under Article 226 securing conditional municipal sanction protecting re-entry.'
      ],
      bn: [
        'পৌরসভার ধারা ৪১১ নোটিশ খতিয়ে দেখুন বাড়িটি মেরামতযোগ্য নাকি ভেঙে ফেলার নির্দেশ দেওয়া হয়েছে।',
        'নতুন ভবনে সমপরিমাণ জায়গা বরাদ্দের লিখিত ত্রিপাক্ষিক চুক্তি সম্পাদন করুন।',
        'বাড়িওয়ালা পুনর্বাসন ফাঁকি দিতে চাইলে মিউনিসিপ্যাল বিল্ডিং ট্রাইব্যুনালে আপিল করুন।',
        'কলকাতা হাইকোর্টে রিট পিটিশন করে পুনর্বাসনের নিশ্চয়তা ছাড়া ধ্বংস অভিযান স্থগিত করান।'
      ],
      hi: [
        'धारा 411 नोटिस की जांच करें कि भवन मरम्मत योग्य है अथवा उसे ध्वस्त करना आवश्यक है।',
        'नए बनने वाले भवन में समान क्षेत्रफल का लिखित त्रिपक्षीय पुनर्वास अनुबंध निष्पादित करें।',
        'मकान मालिक द्वारा धोखे से बेदखल करने के प्रयास पर बिल्डिंग ट्रिब्यूनल में अपील करें।',
        'उच्च न्यायालय में अनुच्छेद 226 के तहत याचिका कर पुनर्वास के बिना ध्वस्तीकरण पर रोक लें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-14-1',
        name: { en: 'Municipal Section 411 Dangerous Notice', bn: 'পৌরসভার ধারা ৪১১ বিপজ্জনক নোটিশ', hi: 'नगरपालिका धारा 411 जर्जर भवन नोटिस' },
        issuing_authority: { en: 'Kolkata Municipal Corporation (KMC) / Municipality', bn: 'কলকাতা পুরসভা / পৌরসভা', hi: 'कोलकाता नगर निगम / नगर पालिका' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-15',
    title: {
      en: 'Thika Tenant vs Bharatia (Sub-tenant) Dispute',
      bn: 'ঠিকা প্রজা ও ভারতীয়া (উপ-ভাড়াটে) বিরোধ নিষ্পত্তি',
      hi: 'ठिका किरायेदार एवं भारतिया (उप-किरायेदार) विवाद समाधान'
    },
    relevant_act: 'Sec 7 & 8, West Bengal Thika Tenancy Act, 2001',
    summary: {
      en: 'Kolkata & Howrah thika bustees: resolving eviction, fair rent, and structural repairs between Thika tenants and their Bharatias.',
      bn: 'কলকাতা ও হাওড়ার ঠিকা বস্তিতে ঠিকা প্রজা ও ভারতীয়াদের মধ্যে ভাড়া ও উচ্ছেদ বিরোধের সমাধান।',
      hi: 'कोलकाता एवं हावड़ा की ठिका बस्तियों में मुख्य ठिका किरायेदार एवं भारतिया के मध्य विवाद निवारण।'
    },
    authority_forum: {
      en: 'Office of the Thika Controller (Kolkata / Howrah)',
      bn: 'ঠিকা কন্ট্রোলারের কার্যালয় (কলকাতা / হাওড়া)',
      hi: 'ठिका नियंत्रक कार्यालय'
    },
    forum_type: 'Thika_Controller',
    is_complex: true,
    official_portal_url: 'https://kmcgov.in/',
    statutory_timeframe: {
      en: '3 to 6 months',
      bn: '৩ থেকে ৬ মাস',
      hi: '3 से 6 माह'
    },
    search_keywords: {
      en: ['thika vs bharatia', 'bharatia eviction', 'thika controller dispute'],
      bn: ['ভারতীয়া বিরোধ', 'ঠিকা প্রজা বনাম ভারতীয়া', 'ঠিকা কন্ট্রোলার মামলা'],
      hi: ['ठिका बनाम भारतिया', 'भारतिया बेदखली', 'ठिका अधिकरण']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Establish status: Thika tenant holds land rights from State; Bharatia holds structure tenancy.',
        'Bharatia deposits rent with Thika Controller under Section 7 if Thika tenant refuses acceptance.',
        'File application before Thika Controller for resolution of fair rent or essential repairs.',
        'Thika Controller conducts hearing and issues binding order enforceable as a civil decree.'
      ],
      bn: [
        'আইনি অবস্থান নিশ্চিত করুন: ঠিকা প্রজা জমির অধিকারী এবং ভারতীয়া কাঠামোর ভাড়াটে।',
        'ঠিকা প্রজা ভাড়া না নিলে ভারতীয়া ধারা ৭ অনুযায়ী ঠিকা কন্ট্রোলারের কাছে ভাড়া জমা দিন।',
        'ন্যায্য ভাড়া বা জরুরি মেরামতের দাবিতে ঠিকা কন্ট্রোলারের এজলাসে আনুষ্ঠানিক আবেদন করুন।',
        'ঠিকা কন্ট্রোলার উভয় পক্ষের শুনানি শেষে বাধ্যতামূলক নির্বাহী আদেশ জারি করবেন।'
      ],
      hi: [
        'स्थिति स्पष्ट करें: ठिका किरायेदार जमीन का धारक है एवं भारतिया उस पर बने ढांचे का किरायेदार।',
        'ठिका मालिक द्वारा किराया न लेने पर भारतिया धारा 7 में ठिका नियंत्रक के पास किराया जमा करे।',
        'उचित किराया अथवा ढांचे की मरम्मत को लेकर ठिका नियंत्रक के समक्ष वाद दायर करें।',
        'ठिका नियंत्रक दोनों पक्षों की सुनवाई कर सिविल डिक्री समान बाध्यकारी आदेश पारित करेंगे।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-15-1',
        name: { en: 'Historical Bharatia Rent Receipts', bn: 'ভারতীয়া ভাড়ার ঐতিহাসিক রসিদ', hi: 'भारतिया लगान/किराया रसीदें' },
        issuing_authority: { en: 'Thika Tenant / Rent Collector', bn: 'ঠিকা প্রজা', hi: 'ठिका किरायेदार' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-16',
    title: {
      en: 'Model Tenancy Act & Digital Agreement Protocols',
      bn: 'মডেল টেন্যান্সি অ্যাক্ট ও ডিজিটাল ভাড়া চুক্তি',
      hi: 'मॉडल किरायेदारी अधिनियम एवं डिजिटल रेंट एग्रीमेंट'
    },
    relevant_act: 'Model Tenancy Act Framework r/w Registration Act, 1908',
    summary: {
      en: 'Mandatory digital submission of rental contracts to the statutory Rent Authority to ensure court enforceability.',
      bn: 'আদালতে বৈধতা নিশ্চিত করতে সরকারি রেন্ট অথরিটির পোর্টালে ডিজিটাল ভাড়া চুক্তিপত্র নিবন্ধনের নিয়ম।',
      hi: 'किरायेदारी अनुबंध को वैधानिक मान्यता दिलाने हेतु रेंट अथॉरिटी पोर्टल पर डिजिटल पंजीकरण कराना।'
    },
    authority_forum: {
      en: 'Rent Authority / Civil Court',
      bn: 'রেন্ট অথরিটি / দেওয়ানি আদালত',
      hi: 'रेंट अथॉरिटी / सिविल न्यायालय'
    },
    forum_type: 'Rent_Controller',
    is_complex: false,
    statutory_timeframe: {
      en: 'Mandatory registration within 60 days of execution',
      bn: 'চুক্তির ৬০ দিনের মধ্যে বাধ্যতামূলক নিবন্ধন',
      hi: 'अनुबंध के 60 दिन के भीतर अनिवार्य पंजीकरण'
    },
    search_keywords: {
      en: ['model tenancy act', 'digital rent agreement', 'rent authority registration'],
      bn: ['মডেল টেন্যান্সি অ্যাক্ট', 'ডিজিটাল রেন্ট এগ্রিমেন্ট', 'ভাড়া চুক্তি রেজিস্ট্রেশন'],
      hi: ['मॉडल किरायेदारी कानून', 'डिजिटल रेंट एग्रीमेंट', 'रेंट अथॉरिटी रजिस्ट्रेशन']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Draft a formal tenancy contract in statutory format specifying rent, deposit, and tenure.',
        'Pay required stamp duty and execute agreement before a Notary or Sub-Registrar.',
        'Submit digital copy to Rent Authority portal within 60 days to generate unique ID.',
        'Retain statutory registration receipt; courts reject eviction claims on unregistered agreements.'
      ],
      bn: [
        'ভাড়ার পরিমাণ, অগ্রিম জমা ও মেয়াদ উল্লেখ করে বিধিবদ্ধ ফরম্যাটে চুক্তিপত্র ড্রাফট করুন।',
        'সরকারি স্ট্যাম্প ডিউটি দিয়ে নোটারি বা সাব-রেজিস্ট্রার অফিসে চুক্তি সম্পাদন করুন।',
        '৬০ দিনের মধ্যে রেন্ট অথরিটি পোর্টালে ডিজিটাল কপি জমা দিয়ে ইউনিক টেন্যান্সি আইডি নিন।',
        'রেজিস্ট্রেশন স্লিপ সংরক্ষণ করুন; অনিবন্ধিত চুক্তির ওপর আদালত কোনো উচ্ছেদ মামলা গ্রহণ করবে না।'
      ],
      hi: [
        'किराया, अग्रिम एवं अवधि का स्पष्ट उल्लेख कर वैधानिक प्रारूप में अनुबंध तैयार करें।',
        'उचित स्टांप शुल्क देकर नोटरी अथवा उप-पंजीयक के समक्ष अनुबंध निष्पादित करें।',
        '60 दिनों के भीतर रेंट अथॉरिटी पोर्टल पर अपलोड कर यूनिक टेनेंसी रजिस्ट्रेशन नंबर लें।',
        'पंजीकरण पर्ची सुरक्षित रखें; अपंजीकृत अनुबंध पर अदालतें बेदखली वाद स्वीकार नहीं करेंगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-16-1',
        name: { en: 'Executed Tenancy Agreement on Stamp Paper', bn: 'স্ট্যাম্প পেপারে সম্পাদিত মূল ভাড়া চুক্তি', hi: 'स्टांप पेपर पर निष्पादित मूल किराया अनुबंध' },
        issuing_authority: { en: 'Sub-Registrar (ADSR) / Notary Public', bn: 'সাব-রেজিস্ট্রার / নোটারি', hi: 'उप-पंजीयक / नोटरी' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-17',
    title: {
      en: 'Arbitrary & Unilateral Rent Escalation',
      bn: 'বাড়িওয়ালার খেয়ালখুশিমতো মাত্রাতিরিক্ত ভাড়া বৃদ্ধি প্রতিরোধ',
      hi: 'मकान मालिक द्वारा मनमाने एवं एकतरफा किराया वृद्धि का विरोध'
    },
    relevant_act: 'Sec 17, West Bengal Premises Tenancy Act, 1997',
    summary: {
      en: 'Challenging sudden 20% to 50% rent hikes and restricting increases to statutory formulas: SDO in districts; Kolkata Rent Controller in Kolkata.',
      bn: 'বাড়িওয়ালার একতরফা ২০% থেকে ৫০% ভাড়া বৃদ্ধির নোটিশ প্রতিহত করে সরকারি হারে ভাড়া রাখার নিয়ম।',
      hi: 'मकान मालिक द्वारा अचानक 20% से 50% किराया बढ़ाने के विरुद्ध वैधानिक रोक एवं शिकायत।'
    },
    authority_forum: {
      en: 'Rent Controller Court (SDO / Kolkata)',
      bn: 'রেন্ট কন্ট্রোলার আদালত (SDO / কলকাতা)',
      hi: 'रेंट कंट्रोलर न्यायालय'
    },
    forum_type: 'Rent_Controller',
    is_complex: false,
    statutory_timeframe: {
      en: '3 to 6 months',
      bn: '৩ থেকে ৬ মাস',
      hi: '3 से 6 माह'
    },
    search_keywords: {
      en: ['unilateral rent hike', 'arbitrary rent increase wb', 'section 17 wbpt'],
      bn: ['ভাড়া বৃদ্ধি প্রতিরোধ', 'বেআইনি ভাড়া বৃদ্ধি', 'রেন্ট কন্ট্রোলার ভাড়া'],
      hi: ['किराया वृद्धि विवाद', 'मनमाना किराया विरोध', 'धारा 17 रेंट एक्ट']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Send written reply to escalation letter, tendering rent at existing statutory rate.',
        'If landlord refuses payment, tender rent via Postal Money Order (POM) with coupon memo.',
        'If POM is returned refused, file petition under Section 21 to deposit rent with Rent Controller.',
        'Apply under Section 17 to formally fix standard rent and restrain arbitrary escalation.'
      ],
      bn: [
        'বাড়িওয়ালার অযৌক্তিক বৃদ্ধির চিঠির জবাবে সরকারি হারে বর্তমান ভাড়া বহাল রাখার চিঠি দিন।',
        'বাড়িওয়ালা ভাড়া না নিলে কুপনে বিবরণ লিখে পোস্টাল মানি অর্ডারে (POM) ভাড়া পাঠান।',
        'মানি অর্ডার প্রত্যাখ্যাত হলে ধারা ২১ অনুযায়ী রেন্ট কন্ট্রোলারে সরকারিভাবে ভাড়া জমা দিন।',
        'ধারা ১৭ অনুযায়ী ন্যায্য ভাড়া নির্ধারণের মামলা করে বেআইনি ভাড়া বৃদ্ধির নোটিশ খারিজ করান।'
      ],
      hi: [
        'किराया वृद्धि पत्र का औपचारिक जवाब देकर वर्तमान दर पर ही किराया स्वीकार करने को कहें।',
        'मकान मालिक के मना करने पर डाक मनी ऑर्डर (POM) द्वारा कूपन में विवरण लिखकर किराया भेजें।',
        'मनी ऑर्डर वापस आने पर धारा 21 के तहत रेंट कंट्रोलर के पास किराया जमा करना शुरू करें।',
        'धारा 17 में फेयर रेंट का वाद दायर कर मनमानी किराया वृद्धि के नोटिस को निरस्त कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-17-1',
        name: { en: 'Landlord Rent Escalation Demand Notice', bn: 'বাড়িওয়ালার ভাড়া বৃদ্ধির নোটিশ চিঠি', hi: 'मकान मालिक का किराया वृद्धि मांग पत्र' },
        issuing_authority: { en: 'Landlord', bn: 'বাড়িওয়ালা', hi: 'मकान मालिक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-18',
    title: {
      en: 'Commercial Co-Working & Office Lock-in Disputes',
      bn: 'বাণিজ্যিক কো-ওয়ার্কিং অফিস ও লক-ইন পিরিয়ড বিরোধ',
      hi: 'को-वर्किंग एवं वाणिज्यिक कार्यालय लॉक-इन अवधि विवाद'
    },
    relevant_act: 'Sec 73 & 74, Indian Contract Act, 1872',
    summary: {
      en: 'Defending businesses against unlawful forfeiture of deposits when commercial leases end during slowdowns.',
      bn: 'ব্যবসা মন্দায় অফিস আগে ছাড়লে সিকিউরিটি ডিপোজিট বাজেয়াপ্ত করার বিরুদ্ধে আইনি প্রতিকার।',
      hi: 'मंदी के कारण लीज जल्दी समाप्त करने पर जमा राशि जब्त करने के विरुद्ध कानूनी राहत।'
    },
    authority_forum: {
      en: 'Commercial Court / Arbitral Tribunal',
      bn: 'বাণিজ্যিক আদালত / সালিশি ট্রাইব্যুনাল',
      hi: 'वाणिज्यिक न्यायालय / मध्यस्थता अधिकरण'
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
      en: ['coworking lock-in dispute', 'commercial lease deposit refund', 'section 74 contract act'],
      bn: ['কো-ওয়ার্কিং অফিস বিরোধ', 'লক ইন পিরিয়ড', 'অফিস ডিপোজিট ফেরত'],
      hi: ['को-वर्किंग लॉक इन विवाद', 'वाणिज्यिक लीज रिफंड', 'जमा राशि जब्ती विरोध']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Review lease to determine whether lock-in clause acts as an unenforceable punitive penalty.',
        'Serve formal termination notice citing fundamental frustration or economic force majeure.',
        'File Pre-Institution Mediation petition under Section 12A Commercial Courts Act via DLSA.',
        'If mediation fails, institute Commercial Summary Suit praying for release of unadjusted deposit.'
      ],
      bn: [
        'চুক্তিপত্র যাচাই করে প্রমাণ করুন লক-ইন ক্লজটি প্রকৃত ক্ষতির চেয়ে অতিরিক্ত শাস্তিমূলক জরিমানা।',
        'ব্যবসার বাধ্যবাধকতা ও অর্থনৈতিক অচলাবস্থার কারণ দেখিয়ে চুক্তি অবসানের আইনি নোটিশ দিন।',
        'বাণিজ্যিক আদালত আইনের ধারা ১২এ অনুযায়ী ডিএলএসএ মারফত বাধ্যতামূলক মধ্যস্থতা শুরু করুন।',
        'মধ্যস্থতা ব্যর্থ হলে বাণিজ্যিক আদালতে মামলা করে আটকে রাখা সিকিউরিটি ডিপোজিট উদ্ধার করুন।'
      ],
      hi: [
        'अनुबंध जांचें कि क्या लॉक-इन क्लॉज वास्तविक नुकसान के स्थान पर अनुचित दंडात्मक शर्त है।',
        'आर्थिक संकट एवं असाध्यता का हवाला देते हुए औपचारिक लीज समाप्ति नोटिस भेजें।',
        'वाणिज्यिक न्यायालय अधिनियम की धारा 12A के तहत विधिक सेवा प्राधिकरण में मध्यस्थता करें।',
        'मध्यस्थता विफल होने पर वाणिज्यिक वाद दायर कर फंसी हुई सिक्योरिटी राशि ब्याज सहित वसूलें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-18-1',
        name: { en: 'Commercial Master Service Agreement / Lease', bn: 'বাণিজ্যিক অফিস লিজ চুক্তিপত্র', hi: 'वाणिज्यिक लीज / सेवा अनुबंध' },
        issuing_authority: { en: 'Co-Working Provider / Sub-Registrar', bn: 'কো-ওয়ার্কিং সংস্থা', hi: 'को-वर्किंग प्रदाता' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-19',
    title: {
      en: 'Damages & Mesne Profits for Overstaying Tenant',
      bn: 'মেয়াদ শেষ হওয়ার পর জোরপূর্বক বসবাস ও ক্ষতিপূরণ',
      hi: 'अवधि समाप्त होने के बाद अवैध कब्जे पर हर्जाना (मेस्ने प्रॉफिट्स)'
    },
    relevant_act: 'Order XX Rule 12 CPC r/w Sec 108, TP Act',
    summary: {
      en: 'Suing overstaying tenants for market-rate double rent damages for every month of illegal holding over.',
      bn: 'চুক্তির মেয়াদ ফুরিয়ে গেলেও ঘর না ছেড়ে জোর করে থাকলে ডবল ভাড়ার হারে ক্ষতিপূরণ আদায়ের মামলা।',
      hi: 'लीज खत्म होने के बाद भी जबरन डटे रहने वाले किरायेदार से बाजार दर पर दोगुना हर्जाना वसूलना।'
    },
    authority_forum: {
      en: 'Civil Court / Presidency Small Causes Court',
      bn: 'দেওয়ানি আদালত / স্মল কজেস কোর্ট',
      hi: 'सिविल न्यायालय / स्माल कॉजेज कोर्ट'
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
      en: ['mesne profits overstay', 'damages overstaying tenant', 'order 20 rule 12 cpc'],
      bn: ['মেসনে প্রফিট', 'মেয়াদোত্তীর্ণ ভাড়াটে', 'জোরপূর্বক দখল ক্ষতিপূরণ'],
      hi: ['मेस्ने प्रॉफिट्स किरायेदार', 'अवैध कब्जा हर्जाना', 'दोगुना किराया वसूली']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Serve statutory Notice to Quit under Section 106 TP Act terminating tenancy upon lease expiry.',
        'Explicitly notify tenant in writing that continued stay will accrue damages at double market rate.',
        'File Eviction Suit combined with application for mesne profits under Order XX Rule 12 CPC.',
        'Obtain money decree for accrued damages and execute by attaching tenant bank accounts.'
      ],
      bn: [
        'টিপি অ্যাক্টের ধারা ১০৬ অনুযায়ী মেয়াদান্তে বাড়ি ছাড়ার উচ্ছেদ নোটিশ রেজিস্ট্রি ডাকে পাঠান।',
        'নোটিশে স্পষ্টভাবে জানিয়ে দিন মেয়াদ ফুরোলে দৈনিক বা মাসিক বাজার মূল্যের ডবল ক্ষতিপূরণ ধার্য হবে।',
        'অর্ডার ২০ রুল ১২ সিপিসি অনুযায়ী উচ্ছেদের সাথে মেসনে প্রফিট বা ক্ষতিপূরণ নির্ধারণের মামলা করুন।',
        'আদালতের মাধ্যমে ক্ষতিপূরণের ডিক্রি পেয়ে ভাড়াটের ব্যাঙ্ক অ্যাকাউন্ট ক্রোক করে টাকা আদায় করুন।'
      ],
      hi: [
        'टीपी एक्ट की धारा 106 के तहत अवधि समाप्ति पर मकान खाली करने का नोटिस भेजें।',
        'नोटिस में चेतावनी दें कि अतिरिक्त ठहराव पर बाजार दर से दोगुना हर्जाना देना होगा।',
        'आदेश 20 नियम 12 सीपीसी के तहत बेदखली के साथ हर्जाने के न्यायिक निर्धारण का वाद करें।',
        'अदालती डिक्री प्राप्त कर पूर्व किरायेदार के बैंक खाते कुर्क कराकर हर्जाना वसूलें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-19-1',
        name: { en: 'Expired Lease & Section 106 Quit Notice', bn: 'মেয়াদোত্তীর্ণ লিজ ও ধারা ১০৬ নোটিশের কপি', hi: 'समाप्त लीज विलेख एवं धारा 106 नोटिस प्रति' },
        issuing_authority: { en: 'Advocate / India Post', bn: 'বিজ্ঞ আইনজীবী / ডাক বিভাগ', hi: 'अधिवक्ता / डाक विभाग' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-20',
    title: {
      en: 'Landlord Intrusions & Tenant Privacy Violations',
      bn: 'ভাড়াটের গোপনীয়তা ভঙ্গ ও বিনা নোটিশে বাড়িওয়ালার প্রবেশ',
      hi: 'किरायेदार की निजता का हनन एवं बिना पूर्व सूचना मकान मालिक का प्रवेश'
    },
    relevant_act: 'Sec 108(c), TP Act (Quiet Enjoyment) r/w Sec 329, BNS',
    summary: {
      en: 'Restraining landlords from entering rental premises without 24-hour advance written notice except in verified emergencies.',
      bn: 'জরুরি পরিস্থিতি ছাড়া বিনা নোটিশে ভাড়াটের ঘরে বাড়িওয়ালার অনধিকার প্রবেশ ও সিসিটিভি নজরদারির প্রতিকার।',
      hi: 'बिना 24 घंटे की पूर्व सूचना किरायेदार के निजी परिसर में जबरन घुसने वाले मकान मालिक पर अदालती रोक।'
    },
    authority_forum: {
      en: 'Civil Court (Injunction) / Local Police Station',
      bn: 'দেওয়ানি আদালত / স্থানীয় থানা',
      hi: 'सिविल न्यायालय / स्थानीय पुलिस स्टेशन'
    },
    forum_type: 'Civil_Court',
    is_complex: false,
    statutory_timeframe: {
      en: 'Immediate (Police); 7 days (Civil Injunction)',
      bn: 'অবিলম্বে (থানা); ৭ দিন (ইনজাংশন)',
      hi: 'त्वरित (पुलिस); 7 दिन (स्थगनादेश)'
    },
    search_keywords: {
      en: ['tenant privacy intrusion', 'landlord entering without notice', 'quiet enjoyment tp act'],
      bn: ['গোপনীয়তা লঙ্ঘন ভাড়াটে', 'বাড়িওয়ালার অনধিকার প্রবেশ', 'কোয়াইট এনজয়মেন্ট'],
      hi: ['किरायेदार निजता हनन', 'बिना सूचना मकान मालिक प्रवेश', 'शांतिपूर्ण उपभोग अधिकार']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Maintain written log and video recordings documenting unauthorized intrusions and harassment.',
        'Issue legal notice asserting statutory covenant of "quiet enjoyment" under Section 108(c) TP Act.',
        'Lodge police complaint under Section 329 BNS for criminal trespass if intrusion is repeated.',
        'File suit for permanent injunction restraining landlord from entering without 24-hour written notice.'
      ],
      bn: [
        'অনধিকার প্রবেশ ও হয়রানির সমস্ত সিসিটিভি ফুটেজ, ভিডিও ও ঘটনার তারিখ ডায়েরিতে নথিবদ্ধ করুন।',
        'টিপি অ্যাক্টের ধারা ১০৮(গ) অনুযায়ী অবাধে বসবাসের আইনি অধিকার জানিয়ে বাড়িওয়ালাকে নোটিশ দিন।',
        'বাড়িওয়ালা জোরপূর্বক ঘরে ঢুকলে থানায় ধারা ৩২৯ বিএনএস অনুযায়ী অনধিকার প্রবেশের অভিযোগ করুন।',
        'দেওয়ানি আদালতে মামলা করে ২৪ ঘণ্টার আগাম লিখিত নোটিশ ছাড়া প্রবেশে স্থায়ী নিষেধাজ্ঞা পান।'
      ],
      hi: [
        'अनाधिकृत प्रवेश एवं उत्पीड़न के वीडियो साक्ष्य एवं तिथिवार विवरण सुरक्षित रखें।',
        'टीपी एक्ट की धारा 108(c) के तहत शांतिपूर्ण उपभोग के अधिकार का विधिक नोटिस भेजें।',
        'बार-बार जबरन घुसने पर बीएनएस की धारा 329 में आपराधिक अतिचार (Trespass) की शिकायत दें।',
        'दीवानी अदालत से 24 घंटे की पूर्व लिखित सूचना के बिना प्रवेश पर स्थायी निषेधाज्ञा लें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-20-1',
        name: { en: 'Photographic / Video / CCTV Footage of Intrusion', bn: 'অনধিকার প্রবেশের সিসিটিভি বা ভিডিও প্রমাণ', hi: 'अनाधिकृत प्रवेश के सीसीटीवी / वीडियो फुटेज' },
        issuing_authority: { en: 'Tenant / Complainant', bn: 'অভিযোগকারী', hi: 'शिकायतकर्ता' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-21',
    title: {
      en: 'Recovery of Costs for Property Damage Caused by Tenant',
      bn: 'ভাড়াটে দ্বারা সম্পত্তির ক্ষতিসাধন ও ক্ষতিপূরণ আদায়',
      hi: 'किरायेदार द्वारा संपत्ति क्षति पर हर्जाना वसूली'
    },
    relevant_act: 'Sec 108(m) & (o), Transfer of Property Act, 1882',
    summary: {
      en: 'Deducting repair costs from security deposits and suing for damages where tenants cause structural harm.',
      bn: 'ভাড়াটে ঘরের দেওয়াল, মেঝের ক্ষতি করলে সিকিউরিটি ডিপোজিট কেটে ক্ষতিপূরণ আদায়ের মামলা।',
      hi: 'किरायेदार द्वारा मकान को तोड़े-फोड़े जाने पर मरम्मत खर्च की वसूली एवं कानूनी कार्रवाई।'
    },
    authority_forum: {
      en: 'Civil Court (Small Causes Division)',
      bn: 'দেওয়ানি আদালত (স্মল কজেস বেঞ্চ)',
      hi: 'सिविल न्यायालय (स्माल कॉजेज डिवीजन)'
    },
    forum_type: 'Civil_Court',
    is_complex: false,
    statutory_timeframe: {
      en: '3 to 6 months',
      bn: '৩ থেকে ৬ মাস',
      hi: '3 से 6 माह'
    },
    search_keywords: {
      en: ['tenant property damage', 'deduct repair deposit', 'section 108m tp act'],
      bn: ['ভাড়াটে দ্বারা ক্ষতিসাধন', 'বাড়ি ভাঙচুর ক্ষতিপূরণ', 'ডিপোজিট কর্তন'],
      hi: ['किरायेदार संपत्ति नुकसान', 'मकान क्षति हर्जाना', 'मरम्मत खर्च वसूली']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Conduct exit inspection with tenant; prepare signed inventory of structural and fixture damages.',
        'Engage licensed civil engineer to prepare an itemized assessment and repair cost bill.',
        'Serve demand notice deducting assessed cost from deposit and demanding payment of balance.',
        'File Money Suit in Small Causes Court to recover balance damages exceeding the deposit.'
      ],
      bn: [
        'ভাড়াটের উপস্থিতিতে ঘর পর্যবেক্ষণ করে ক্ষয়ক্ষতির স্বাক্ষরিত তালিকা ও ভিডিও প্রস্তুত করুন।',
        'লাইসেন্সপ্রাপ্ত সিভিল ইঞ্জিনিয়ার দ্বারা মেরামতের খরচের আনুষ্ঠানিক এস্টিমেট ও ট্যাক্স ইনভয়েস করান।',
        'সিকিউরিটি ডিপোজিট থেকে সেই টাকা কেটে নিয়ে বাকি ক্ষতিপূরণ চেয়ে আইনি নোটিশ পাঠান।',
        'ডিপোজিটের অতিরিক্ত ক্ষতিপূরণ আদায়ের জন্য স্মল কজেস কোর্টে মানি স্যুট দায়ের করুন।'
      ],
      hi: [
        'किरायेदार के साथ स्थल निरीक्षण कर टूटी-फूटी संरचना एवं फिटिंग्स की हस्ताक्षरित सूची बनाएं।',
        'पंजीकृत सिविल इंजीनियर से मरम्मत लागत का विस्तृत तकनीकी आकलन एवं बिल बनवाएं।',
        'सिक्योरिटी से राशि काटकर शेष नुकसान की भरपाई हेतु किरायेदार को विधिक मांग पत्र दें।',
        'सिक्योरिटी से अधिक हुए नुकसान की वसूली हेतु स्माल कॉजेज कोर्ट में वसूली वाद करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-21-1',
        name: { en: 'Chartered Engineer Damage Valuation Report', bn: 'ইঞ্জিনিয়ার কর্তৃক ক্ষতির মূল্যায়ন রিপোর্ট', hi: 'सिविल इंजीनियर की तकनीकी क्षति रिपोर्ट' },
        issuing_authority: { en: 'Licensed Civil Engineer / Valuer', bn: 'অনুমোদিত ইঞ্জিনিয়ার', hi: 'अनुज्ञप्त मूल्यांकनकर्ता' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-22',
    title: {
      en: 'Eviction for Landlord\'s Bonafide Personal Use',
      bn: 'বাড়িওয়ালার নিজস্ব বসবাসের জরুরি প্রয়োজনে উচ্ছেদ',
      hi: 'मकान मालिक के वास्तविक व्यक्तिगत उपयोग हेतु बेदखली'
    },
    relevant_act: 'Sec 6(1)(d), West Bengal Premises Tenancy Act, 1997',
    summary: {
      en: 'Evicting tenants when landlords genuinely require the premises: District Civil Courts for districts; Presidency Small Causes for Kolkata.',
      bn: 'বাড়িওয়ালার নিজের বা পরিবারের থাকার মতো বিকল্প ঘর না থাকলে ভাড়াবাড়ি খালি করানোর মামলা।',
      hi: 'मकान मालिक द्वारा अपने या परिवार के स्वयं रहने की अनिवार्य आवश्यकता सिद्ध कर मकान खाली कराना।'
    },
    authority_forum: {
      en: 'Civil Court (Districts) / Presidency Small Causes (Kolkata)',
      bn: 'দেওয়ানি আদালত (জেলা) / প্রেসিডেন্সি স্মল কজেস কোর্ট (কলকাতা)',
      hi: 'सिविल न्यायालय / स्माल कॉजेज कोर्ट'
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
      en: ['bonafide requirement eviction', 'section 6 1 d wbpt', 'landlord personal use'],
      bn: ['নিজস্ব প্রয়োজনে উচ্ছেদ', 'ধারা ৬(১)(ঘ)', 'বাড়িওয়ালার আবাসন সংকট'],
      hi: ['निजी आवश्यकता बेदखली', 'धारा 6(1)(d)', 'स्वयं के उपयोग हेतु मकान']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Serve 1-month Notice to Quit under Section 6(1)(d) citing genuine personal necessity.',
        'File Title Eviction Suit before jurisdictional Civil Judge upon notice expiry.',
        'Produce municipal tax returns proving landlord owns no other vacant home in town.',
        'Obtain eviction decree and apply for execution under Order XXI Rule 35 CPC.'
      ],
      bn: [
        'বিকল্প বাসস্থানের অভাব দেখিয়ে ধারা ৬(১)(ঘ) অনুযায়ী ১ মাসের উচ্ছেদ নোটিশ পাঠান।',
        'নোটিশের মেয়াদ শেষে উপযুক্ত সিভিল জজ আদালতে টাইটেল উচ্ছেদ মামলা দায়ের করুন।',
        'পৌরসভা বা কর নথি দিয়ে প্রমাণ করুন একই শহরে বাড়িওয়ালার বসবাসের যোগ্য অন্য ফ্ল্যাট নেই।',
        'উচ্ছেদ ডিক্রি লাভ করে অর্ডার ২১ রুল ৩৫ অনুযায়ী আদালতের মাধ্যমে দখল গ্রহণ করুন।'
      ],
      hi: [
        'निजी आवश्यकता का हवाला देते हुए धारा 6(1)(d) में 1 माह का बेदखली नोटिस भेजें।',
        'मियाद बीतने पर सक्षम सिविल जज के समक्ष टाइटल निष्कासन वाद दायर करें।',
        'कर रिकॉर्ड से सिद्ध करें कि संबंधित नगर में मकान मालिक के पास अन्य कोई खाली मकान नहीं है।',
        'डिक्री प्राप्त कर आदेश 21 नियम 35 सीपीसी के तहत अदालती निष्पादन कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-22-1',
        name: { en: 'Affidavit of No Other Alternative Accommodation', bn: 'বিকল্প বাসস্থানহীনতার হলফনামা ও ট্যাক্স নথি', hi: 'अन्यत्र आवास न होने का शपथ पत्र' },
        issuing_authority: { en: 'Notary Public / Municipality', bn: 'নোটারি পাবলিক', hi: 'नोटरी / नगर पालिका' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-23',
    title: {
      en: 'Commercial Lease Force Majeure & Rent Abatement',
      bn: 'করোনা বা প্রাকৃতিক দুর্যোগে বাণিজ্যিক ভাড়ায় ছাড় দাবি',
      hi: 'आपदा एवं लॉकडाउन के दौरान व्यावसायिक किराये में छूट/निलंबन'
    },
    relevant_act: 'Sec 56, Contract Act r/w Ramanand v. Dr. Girry Rathore',
    summary: {
      en: 'Resolving rent waiver or deferral claims raised by retail/restaurant tenants during disaster-related shutdowns.',
      bn: 'লকডাউন বা প্রাকৃতিক দুর্যোগে দোকান বা শোরুম বন্ধ থাকলে ভাড়া মকুব বা কমানোর আইনি পথ।',
      hi: 'सरकारी पाबंदियों या आपदा में मॉल व दुकानें बंद रहने पर किराये में छूट या निलंबन का विधिक अधिकार।'
    },
    authority_forum: {
      en: 'Commercial Civil Court',
      bn: 'বাণিজ্যিক দেওয়ানি আদালত',
      hi: 'वाणिज्यिक सिविल न्यायालय'
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
      en: ['force majeure rent waiver', 'commercial lease covid', 'ramanand judgment rent'],
      bn: ['ভাড়া মকুব ফোর্স মেজার', 'বাণিজ্যিক ভাড়ায় ছাড়', 'লকডাউন ভাড়া বিরোধ'],
      hi: ['किराया छूट फोर्स मेज्योर', 'आपदा किराया स्थगन', 'रामानंद फैसला']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Examine commercial lease contract to determine whether Force Majeure covers government closures.',
        'If clause is absent, invoke common law principles (*Ramanand* precedent) for rent postponement.',
        'Initiate commercial conciliation before DLSA mediation to negotiate mutually agreed discount.',
        'If landlord threatens lockout, move Commercial Court under Section 9 Arbitration Act for stay.'
      ],
      bn: [
        'চুক্তিপত্র খতিয়ে দেখুন ফোর্স মেজার ধারায় মহামারী বা সরকারি নিষেধাজ্ঞার উল্লেখ আছে কি না।',
        'ধারা না থাকলে সুপ্রিম কোর্টের রামানন্দ নজির দেখিয়ে অস্থায়ী ভাড়া স্থগিতের আবেদন দিন।',
        'ডিএলএসএ মারফত উভয় পক্ষের সম্মতিভিত্তিক কিস্তি বা ভাড়া হ্রাসের আপস রফা করুন।',
        'বাড়িওয়ালা জোরপূর্বক তালা লাগাতে চাইলে বাণিজ্যিক আদালতে গিয়ে অন্তর্বর্তী স্থগিতাদেশ নিন।'
      ],
      hi: [
        'लीज अनुबंध जांचें कि क्या फोर्स मेज्योर में सरकारी पाबंदी व आपदा का स्पष्ट उल्लेख है।',
        'उल्लेख न होने पर उच्च न्यायालय के रामानन्द फैसले के तहत किराये के स्थगन की मांग करें।',
        'विधिक सेवा प्राधिकरण में मध्यस्थता कर दोनों पक्षों की सहमति से रियायती दर तय कराएं।',
        'तालाबंदी की धमकी पर वाणिज्यिक न्यायालय में मध्यस्थता अधिनियम की धारा 9 में स्थगनादेश लें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-23-1',
        name: { en: 'Government Disaster Shutdown / Closure Orders', bn: 'সরকারি কাজ বন্ধের প্রজ্ঞাপন বা দুর্যোগের আদেশ', hi: 'सरकारी तालाबंदी/आपदा निषेधाज्ञा आदेश' },
        issuing_authority: { en: 'Disaster Management Authority / State Govt', bn: 'দুর্যোগ মোকাবিলা দপ্তর', hi: 'आपदा प्रबंधन विभाग' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-24',
    title: {
      en: 'Unauthorized Commercial Use in Residential Tenancy',
      bn: 'আবাসিক ফ্ল্যাটে বাণিজ্যিক কারখানা বা গোডাউন চালানো প্রতিরোধ',
      hi: 'आवासीय फ्लैट में अवैध व्यावसायिक कारखाना/गोदाम चलाने पर बेদখলি'
    },
    relevant_act: 'Sec 6(1)(h), WBPT Act, 1997 r/w Municipal Bye-laws',
    summary: {
      en: 'Evicting tenants operating commercial manufacturing, warehousing, or catering out of residential tenancies: District Municipalities vs KMC Building Dept.',
      bn: 'থাকার ঘরে কারখানা, গুদাম বা বাণিজ্যিক ক্যাটারিং চালিয়ে প্রতিবেশীদের উপদ্রবকারী ভাড়াটে উচ্ছেদ।',
      hi: 'रहने के मकान में बिना अनुमति कारखाना या गोदाम बनाकर उपद्रव करने वाले किरायेदार की बेदखली।'
    },
    authority_forum: {
      en: 'Civil Court / Municipal Building Department / KMC',
      bn: 'দেওয়ানি আদালত / পৌর বিল্ডিং দপ্তর / কেএমসি',
      hi: 'सिविल न्यायालय / नगर निगम'
    },
    forum_type: 'Civil_Court',
    is_complex: false,
    statutory_timeframe: {
      en: '6 months to 1 year',
      bn: '৬ মাস থেকে ১ বছর',
      hi: '6 माह से 1 वर्ष'
    },
    search_keywords: {
      en: ['commercial use residential flat', 'section 6 1 h wbpt', 'illegal godown tenant'],
      bn: ['আবাসিকে বাণিজ্যিক ব্যবহার', 'ফ্ল্যাটে গোডাউন', 'ভাড়াটে উচ্ছেদ ধারা ৬(১)(এইচ)'],
      hi: ['आवासीय में व्यावसायिक उपयोग', 'अवैध गोदाम बेदखली', 'धारा 6(1)(h)']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Collect evidence of commercial misuse: commercial delivery logs, noise, and machinery photos.',
        'Lodge complaint with municipal licensing department for running unlicensed trade in residential zone.',
        'Serve a 30-day Notice to Quit under Section 6(1)(h) WBPT Act for unauthorized change of user.',
        'File Title Eviction Suit and obtain interim injunction restraining commercial usage during trial.'
      ],
      bn: [
        'বাণিজ্যিক অপব্যবহারের প্রমাণ: মালপত্র ওঠানামার ছবি, শব্দের মাত্রা ও যন্ত্রপাতির ফুটেজ নিন।',
        'আবাসিক এলাকায় লাইসেন্সহীন ব্যবসা চালানোর বিরুদ্ধে পৌরসভায় লিখিত অভিযোগ করুন।',
        'ব্যবহারের ধরন পরিবর্তনের অভিযোগে ধারা ৬(১)(জ) অনুযায়ী ৩০ দিনের উচ্ছেদ নোটিশ পাঠান।',
        'আদালতে উচ্ছেদ মামলা দায়ের করে শুনানিকালীন বাণিজ্যিক কার্যকলাপ বন্ধের ইনজাংশন নিন।'
      ],
      hi: [
        'व्यावसायिक दुरुपयोग के साक्ष्य: भारी माल ढुलाई, मशीनों के शोर एवं फोटो-वीडियो संकलित करें।',
        'आवासीय क्षेत्र में बिना ट्रेड लाइसेंस व्यवसाय चलाने पर नगर निगम में शिकायत करें।',
        'उपयोग परिवर्तन के आधार पर धारा 6(1)(h) में 30 दिनों का निष्कासन नोटिस प्रेषित करें।',
        'टाइटल वाद दायर कर मुकदमे के दौरान तुरंत व्यावसायिक काम रोकने का स्थगनादेश प्राप्त करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-24-1',
        name: { en: 'Municipal Inspection Notice / Trade License Rejection', bn: 'পৌরসভার নোটিশ বা ট্রেড লাইসেন্সহীনতার প্রমাণ', hi: 'नगर निगम निरीक्षण रिपोर्ट / ट्रेड लाइसेंस अस्वीकृति' },
        issuing_authority: { en: 'KMC / Municipal Licensing Department', bn: 'পৌরসভা লাইসেন্স বিভাগ', hi: 'नगर निगम अनुज्ञप्ति शाखा' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-tenancy-25',
    title: {
      en: 'Slum Tenant Rehabilitation & Demolition Rights',
      bn: 'বস্তি পুনর্বাসন ও প্রমোটার দ্বারা উচ্ছেদ প্রতিরোধ',
      hi: 'बस्ती किरायेदार पुनर्वास एवं बिल्डर द्वारा अवैध बेदखली से सुरक्षा'
    },
    relevant_act: 'West Bengal Slum Areas (Improvement & Clearance) Act, 1972',
    summary: {
      en: 'Protecting registered bustee dwellers against eviction by promoters without sanctioned rehabilitation flats: KMC Slum Cell vs District Municipalities.',
      bn: 'বস্তি উন্নয়ন ও সংস্কার আইনে বিকল্প পাকা ফ্ল্যাট বা ক্ষতিপূরণ ছাড়া বস্তিবাসীদের উচ্ছেদ প্রতিরোধ।',
      hi: 'बस्ती सुधार अधिनियम के तहत पक्का आवास अथवा उचित पुनर्वास मिले बिना झुग्गी खाली कराने पर रोक।'
    },
    authority_forum: {
      en: 'Thika Controller / KMC Slum Clearance Cell / High Court',
      bn: 'ঠিকা কন্ট্রোলার / কেএমসি বস্তি সেল / হাইকোর্ট',
      hi: 'ठिका नियंत्रक / केएमसी बस्ती सेल / उच्च न्यायालय'
    },
    forum_type: 'Thika_Controller',
    is_complex: true,
    official_portal_url: 'https://kmcgov.in/',
    statutory_timeframe: {
      en: '60 to 90 working days',
      bn: '৬০ থেকে ৯০ কার্যদিবস',
      hi: '60 से 90 कार्यदिवস'
    },
    search_keywords: {
      en: ['slum tenant rights', 'bustee rehabilitation wb', 'thika slum demolition'],
      bn: ['বস্তি উচ্ছেদ প্রতিরোধ', 'বস্তি পুনর্বাসন ফ্ল্যাট', 'ঠিকা বস্তি'],
      hi: ['बस्ती पुनर्वास अधिकार', 'झुग्गी बेदखली रोक', 'ठिका बस्ती योजना']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Compile proof of slum tenancy: municipal bustee census survey tokens and power bills.',
        'File objection before Thika Controller against private builder attempting eviction without scheme.',
        'Verify builder executed approved Rehabilitation Agreement offering transit rent and replacement flat.',
        'If demolition is attempted by force, file emergency Writ Petition under Article 226 before High Court.'
      ],
      bn: [
        'বস্তি প্রজাস্বত্বের প্রমাণ: পুরসভার বস্তি ট্যাক্স রসিদ, শুমারি টোকেন ও বিদ্যুৎ বিল জোগাড় করুন।',
        'অনুমোদিত স্কিম ছাড়া প্রমোটারের উচ্ছেদের বিরুদ্ধে ঠিকা কন্ট্রোলারের কাছে আপত্তি জানান।',
        'বাড়ি তৈরির সময়কালীন ট্রানজিট ভাড়া ও নতুন ফ্ল্যাট হস্তান্তরের ত্রিপাক্ষিক চুক্তি নিশ্চিত করুন।',
        'বলপ্রয়োগ করে বস্তি ভাঙার চেষ্টা হলে কলকাতা হাইকোর্টে অনুচ্ছেদ ২২৬ অনুযায়ী রিট করুন।'
      ],
      hi: [
        'बस्ती में निवास के साक्ष्य: नगरपालिका बस्ती सर्वे रसीद, वोटर आईडी एवं बिजली बिल एकत्र करें।',
        'बिना स्वीकृत पुनर्वास योजना बिल्डर द्वारा खाली कराने पर ठिका नियंत्रक में आपत्ति दें।',
        'निर्माण अवधि का अस्थाई किराया एवं नए फ्लैट आवंटन का वैध अनुबंध निष्पादित कराएं।',
        'जबरन झुग्गी गिराने का प्रयास होने पर उच्च न्यायालय से अनुच्छेद 226 में रोक आदेश लें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-tenancy-25-1',
        name: { en: 'Bustee Census Token / Municipal Identity Card', bn: 'বস্তি শুমারি টোকেন বা পুর পরিচয়পত্র', hi: 'बस्ती सर्वे पर्ची / नगरपालिका पहचान पत्र' },
        issuing_authority: { en: 'Kolkata Municipal Corporation (KMC) / Municipality', bn: 'কলকাতা পুরসভা / পুরসভা', hi: 'कोलकाता नगर निगम' },
        is_mandatory: true
      }
    ]
  }
];