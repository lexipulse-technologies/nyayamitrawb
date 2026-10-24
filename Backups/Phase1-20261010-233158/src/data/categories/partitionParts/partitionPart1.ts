import type { CivilSubCategory } from '../../../types/legal';

export const partitionPart1: CivilSubCategory[] = [
  {
    id: 'sub-partition-01',
    title: {
      en: 'Ancestral Property Partition Suit',
      bn: 'পৈতৃক ও যৌথ সম্পত্তি বাটোয়ারা দেওয়ানি মামলা',
      hi: 'पैतृक एवं संयुक्त संपत्ति बंटवारे का दीवानी वाद'
    },
    relevant_act: 'Order XX Rule 18 & Order XXVI, CPC, 1908',
    summary: {
      en: 'Filing a civil partition suit to legally divide undivided ancestral land and obtain an independent share.',
      bn: 'শরিকরা আপসে ভাগ করে না দিলে আদালতের মাধ্যমে পৈতৃক যৌথ সম্পত্তি ভাগ করে পৃথক খতিয়ান লাভের মামলা।',
      hi: 'सह-हिस्सेदारों द्वारा आपसी सहमति न बनने पर अदालत द्वारा पैतृक संपत्ति का कानूनी बंटवारा कराना।'
    },
    authority_forum: {
      en: 'Civil Court (Senior / Junior Division) / City Civil Court',
      bn: 'দেওয়ানি আদালত (সিনিয়র / জুনিয়র ডিভিশন) / সিটি সিভিল কোর্ট',
      hi: 'सिविल न्यायालय (सीनियर/जूनियर डिवीजन) / सिटी सिविल कोर्ट'
    },
    forum_type: 'Civil_Court',
    is_complex: true,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '1 to 3 years (Decree stages)',
      bn: '১ থেকে ৩ বছর (প্রাথমিক ও চূড়ান্ত ডিক্রি)',
      hi: '1 से 3 वर्ष (प्रारंभिक एवं अंतिम डिक्री)'
    },
    search_keywords: {
      en: ['ancestral property partition', 'partition suit cpc', 'co-sharer land division'],
      bn: ['সম্পত্তি বাটোয়ারা মামলা', 'পৈতৃক জমি ভাগ', 'শরিকি জমি বিরোধ'],
      hi: ['पैतृक संपत्ति बंटवारा', 'बंटवारा वाद सीपीसी', 'जमीन हिस्सा कानूनी वाद']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Trace complete genealogy (Warishan tree) from common ancestor and collect chain deeds.',
        'Serve statutory legal notice for partition through an advocate demanding amicable division.',
        'File Partition Suit under Order XX Rule 18 CPC praying for preliminary decree of shares.',
        'Apply for appointment of Partition Commissioner under Order XXVI to carve out physical Takhtas.'
      ],
      bn: [
        'মূল পূর্বপুরুষ থেকে সম্পূর্ণ বংশতালিকা (ওয়ারিশান) ও সম্পত্তির সমস্ত পিঠ দলিল সংগ্রহ করুন।',
        'শরিকদের কাছে আপসে সম্পত্তি ভাগের প্রস্তাব দিয়ে রেজিস্ট্রি ডাকে লিগ্যাল নোটিশ পাঠান।',
        'অর্ডার ২০ রুল ১৮ সিপিসি অনুযায়ী দেওয়ানি আদালতে প্রাথমিক ডিক্রি (শেয়ার ঘোষণা) চেয়ে মামলা করুন।',
        'অর্ডার ২৬ অনুযায়ী কোর্ট কমিশনার নিয়োগ করিয়ে বাস্তবে মাপজোখ করে পৃথক তখতাবণ্টন করান।'
      ],
      hi: [
        'मूल पूर्वज से पूरी वंशावली तैयार करें एवं संपत्ति के सभी पुराने विलेख व पर्चे एकत्र करें।',
        'सह-खातेदारों को आपसी सहमति से बंटवारा करने हेतु अधिवक्ता द्वारा विधिक नोटिस भेजें।',
        'सिविल जज के समक्ष आदेश 20 नियम 18 सीपीसी में हिस्सेदारी निर्धारण का प्रारंभिक वाद करें।',
        'आदेश 26 के तहत कोर्ट कमिश्नर नियुक्त कराकर मौके पर अलग-अलग तख्ता (हिस्सा) बनवाएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-01-1',
        name: { en: 'Genealogical Tree (Warishan Certificate) & Chain Deeds', bn: 'ওয়ারিশান বংশতালিকা ও পিঠ দলিলসমূহ', hi: 'पारिवारिक वंशावली प्रमाणपत्र एवं पुराने विलेख' },
        issuing_authority: { en: 'Panchayat / Municipality / ADSR', bn: 'পঞ্চায়েত / পুরসভা / সাব-রেজিস্ট্রার', hi: 'पंचायत / नगर पालिका / उप-पंजीयक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-02',
    title: {
      en: 'Voluntary Probate (Post-2025 Sec 213 ISA Omission)',
      bn: 'উইলের স্বেচ্ছাসেবী প্রোবেট (হাইকোর্ট বনাম জেলা জজ)',
      hi: 'वसीयत का स्वैच्छिक प्रोबेट (हाईकोर्ट बनाम जिला अदालत)'
    },
    relevant_act: 'Indian Succession Act, 1925 (Post-2025 Sec 213 Omission)',
    summary: {
      en: 'Probate of a Will is no longer mandatory in Kolkata municipal limits following Parliament Section 213 omission, but voluntary probate can be initiated: High Court Original Side for Kolkata; District Judge for other districts.',
      bn: 'কলকাতায় উইলের বাধ্যতামূলক প্রোবেট বিলোপ হলেও স্বচ্ছ স্বত্বের জন্য স্বেচ্ছাসেবী প্রোবেট (কলকাতা হাইকোর্ট বনাম জেলা জজ আদালত)।',
      hi: 'कोलकाता में प्रोबेट अनिवार्य नहीं है, किंतु बैंक एवं म्यूटेशन हेतु स्वैच्छिक प्रोबेट (कलकत्ता हाईकोर्ट बनाम जिला जज न्यायालय)।'
    },
    authority_forum: {
      en: 'Calcutta High Court (Kolkata) / District Judge (Districts)',
      bn: 'কলকাতা হাইকোর্ট (কলকাতা) / জেলা জজ আদালত (জেলা)',
      hi: 'कलकत्ता उच्च न्यायालय (कोलकाता) / जिला जज (जिले)'
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
      en: ['section 213 omission isa', 'probate will kolkata', 'voluntary probate high court'],
      bn: ['উইল প্রোবেট কলকাতা', 'ধারা ২১৩ বিলোপ', 'ইচ্ছাপত্র প্রমাণ'],
      hi: ['वसीयत प्रोबेट कोलकाता', 'धारा 213 संशोधन', 'स्वैच्छिक प्रोबेट वाद']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'Court of District Judge / District Delegate (22 Districts)',
          bn: 'জেলা জজ আদালত / জেলা ডেলিগেট (২২টি জেলা)',
          hi: 'जिला जज न्यायालय / जिला डेलीगेट'
        },
        portal_name: { en: 'District eCourts Portal', bn: 'জেলা ই-কোর্ট পোর্টাল', hi: 'जिला ई-कोर्ट्स' },
        portal_url: 'https://districts.ecourts.gov.in/',
        steps: {
          en: [
            'Locate original Will and obtain death certificate of testator from local registrar.',
            'File Probate Petition before District Judge supported by affidavits of attesting witnesses.',
            'Court issues general citations in local district newspapers and special summons to legal heirs.',
            'Upon recording witness testimony and in absence of caveats, District Judge issues Probate.'
          ],
          bn: [
            'মূল উইল এবং পুরসভা বা পঞ্চায়েতের মৃত্যু সনদ সংগ্রহ করুন।',
            'সাক্ষীদের হলফনামাসহ সংশ্লিষ্ট জেলা জজ আদালতে প্রোবেটের আবেদন দাখিল করুন।',
            'আদালত জেলার সংবাদপত্রে সাধারণ বিজ্ঞপ্তি ও ওয়ারিশদের নোটিশ পাঠাবে।',
            'সাক্ষ্যগ্রহণ শেষে কোনো আপত্তি না থাকলে জেলা জজ অফিশিয়াল সিলযুক্ত প্রোবেট দেবেন।'
          ],
          hi: [
            'मूल वसीयत एवं स्थानीय रजिस्ट्रार से मृत्यु प्रमाणपत्र प्राप्त करें।',
            'गवाहों के शपथ पत्र सहित जिला जज के समक्ष प्रोबेट याचिका दाखिल करें।',
            'अदालत स्थानीय समाचार पत्रों में सार्वजनिक नोटिस एवं सभी वारिसों को समन जारी करेगी।',
            'गवाहों की गवाही उपरांत कोई आपत्ति न आने पर जिला जज द्वारा प्रोबेट प्रमाणपत्र जारी होगा।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'High Court at Calcutta (Testamentary & Intestate Jurisdiction - Original Side)',
          bn: 'কলকাতা হাইকোর্ট (উইল ও টেস্টামেন্টারি বেঞ্চ - অরিজিনাল সাইড)',
          hi: 'कलकत्ता उच्च न्यायालय (मूल दीवानी एवं वसीयत शाखा)'
        },
        portal_name: { en: 'Calcutta High Court Original Side', bn: 'কলকাতা হাইকোর্ট অরিজিনাল সাইড', hi: 'कलकत्ता हाईकोर्ट' },
        portal_url: 'https://calcuttahighcourt.gov.in/',
        steps: {
          en: [
            'File Probate Application before Master / Registrar of Original Side of High Court at Calcutta.',
            'Submit registered Will with supporting affidavits from at least one surviving attesting witness.',
            'High Court issues citations published in English and Bengali state-level newspapers.',
            'High Court passes formal Letters of Probate under the Seal of the High Court.'
          ],
          bn: [
            'কলকাতা হাইকোর্টের অরিজিনাল সাইডের মাস্টার বা রেজিস্ট্রারের কাছে প্রোবেট আবেদন করুন।',
            'মূল রেজিস্ট্রি উইল ও কমপক্ষে একজন সনাক্তকারী সাক্ষীর হলফনামা পেশ করুন।',
            'হাইকোর্ট থেকে ইংরেজি ও বাংলা দৈনিক সংবাদপত্রে আনুষ্ঠানিক সাইটেশন প্রকাশ করা হবে।',
            'হাইকোর্ট বিচারিক সিলমোহরযুক্ত অফিশিয়াল লেটার্স অব প্রোবেট মঞ্জুর করবে।'
          ],
          hi: [
            'कलकत्ता हाईकोर्ट की मूल शाखा के रजिस्ट्रार के समक्ष प्रोबेट आवेदन प्रस्तुत करें।',
            'मूल वसीयत एवं जीवित गवाहों के आधिकारिक शपथ पत्र संलग्न करें।',
            'उच्च न्यायालय द्वारा राज्य स्तरीय समाचार पत्रों में सार्वजनिक विज्ञप्ति प्रकाशित होगी।',
            'उच्च न्यायालय की आधिकारिक मुहर युक्त वैधानिक प्रोबेट प्रमाणपत्र जारी किया जाएगा।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Locate original registered or unregistered Will along with testator death certificate.',
        'File Probate Petition before District Judge or High Court supported by attesting witness affidavits.',
        'Court issues general citations in newspapers and special citations to all legal heirs.',
        'Upon recording witness evidence and lack of caveat, court grants Letters of Probate under official seal.'
      ],
      bn: [
        'টেস্টেটরের মৃত্যু সনদসহ মূল উইলের কপি ও সনাক্তকারী সাক্ষীদের খুঁজে বের করুন।',
        'জেলা জজ বা হাইকোর্টে সাক্ষীদের হলফনামাসহ উইলের প্রোবেট পিটিশন দাখিল করুন।',
        'আদালত সংবাদপত্রে সাধারণ নোটিশ এবং নিকটাত্মীয়দের কাছে স্পেশাল সাইটেশন পাঠাবে।',
        'সাক্ষ্য গ্রহণ শেষে কোনো আপত্তি (কেভিয়েট) না থাকলে আদালত অফিশিয়াল সিলযুক্ত প্রোবেট মঞ্জুর করবে।'
      ],
      hi: [
        'मृत्यु प्रमाणपत्र के साथ मूल वसीयत एवं उसके गवाहों के शपथ पत्र एकत्र करें।',
        'जिला जज या हाईकोर्ट में गवाहों के साक्ष्य सहित प्रोबेट याचिका दाखिल करें।',
        'अदालत द्वारा समाचार पत्रों में सार्वजनिक नोटिस एवं सभी वारिसों को समन जारी होगा।',
        'गवाहों की गवाही पूरी होने पर कोई आपत्ति न आने पर सीलबंद प्रोबेट प्रमाणपत्र जारी होगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-02-1',
        name: { en: 'Original Last Will & Testament with Death Certificate', bn: 'মূল উইল ও টেস্টেটরের মৃত্যু সনদ', hi: 'मूल अंतिम वसीयत एवं मृत्यु प्रमाणपत्र' },
        issuing_authority: { en: 'Testator / Birth & Death Registrar', bn: 'উইলদাতা / পুরসভা', hi: 'वसीयतकर्ता / रजिस्ट्रार' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-03',
    title: {
      en: 'Succession Certificate for Bank Accounts & Shares',
      bn: 'ব্যাঙ্ক ব্যালেন্স ও শেয়ারের জন্য সাকসেশন সার্টিফিকেট',
      hi: 'बैंक खातों, एफडी एवं शेयरों हेतु उत्तराधिकार प्रमाणपत्र (Succession Certificate)'
    },
    relevant_act: 'Sec 372, Indian Succession Act, 1925',
    summary: {
      en: 'Obtaining a court succession certificate to release movable debts, securities, mutual funds, and bank deposits of deceased.',
      bn: 'মৃত ব্যক্তির ব্যাঙ্ক অ্যাকাউন্ট, শেয়ার ও ফিক্সড ডিপোজিটের টাকা তুলতে দেওয়ানি আদালত থেকে সাকসেশন সার্টিফিকেট লাভ।',
      hi: 'मृतक के बैंक खाते, शेयर, म्यूचुअल फंड एवं एफडी की राशि निकालने हेतु अदालती उत्तराधिकार प्रमाणपत्र।'
    },
    authority_forum: {
      en: 'Civil Court (Senior Division / District Delegate)',
      bn: 'দেওয়ানি আদালত (সিনিয়র ডিভিশন / জেলা ডেলিগেট)',
      hi: 'सिविल न्यायालय (सीनियर डिवीजन / जिला डेलीगेट)'
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
      en: ['succession certificate bank', 'section 372 isa', 'movable property succession'],
      bn: ['সাকসেশন সার্টিফিকেট ব্যাঙ্ক', 'উত্তরাধিকার সনদ আদালত', 'শেয়ার মিউটেশন সাকসেশন'],
      hi: ['उत्तराधिकार प्रमाणपत्र बैंक', 'धारा 372 भारतीय उत्तराधिकार', 'बैंक खाता उत्तराधिकार']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Collect schedule of debts and securities: bank account numbers, FD balances, and Demat statements.',
        'File petition under Section 372 ISA before Civil Judge (Senior Division) with family tree.',
        'Court publishes statutory notification in local newspapers inviting objections within 45 days.',
        'Pay requisite ad-valorem judicial court fee stamps and receive authenticated Succession Certificate.'
      ],
      bn: [
        'ব্যাঙ্ক অ্যাকাউন্টের ব্যালেন্স, এফডি রসিদ ও ডিম্যাট অ্যাকাউন্টের স্টেটমেন্ট তালিকা প্রস্তুত করুন।',
        'সম্পূর্ণ বংশলতিকাসহ সিনিয়র ডিভিশন আদালতে ধারা ৩৭২ অনুযায়ী সাকসেশন পিটিশন করুন।',
        'আদালত সংবাদপত্রে ৪৫ দিনের সময় দিয়ে গণবিজ্ঞপ্তি প্রকাশ করে কোনো আপত্তি আছে কি না দেখবে।',
        'মূল্যের ওপর নির্ধারিত জুডিশিয়াল স্ট্যাম্প ফি জমা দিয়ে সাকসেশন সার্টিফিকেট গ্রহণ করুন।'
      ],
      hi: [
        'बैंक खातों, एफडी एवं डीमैट शेयरों का खाता संख्या व बकाया राशि का ब्योरा जुटाएं।',
        'सिविल जज के समक्ष वंशावली सहित धारा 372 में उत्तराधिकार प्रमाणपत्र याचिका दें।',
        'अदालत द्वारा 45 दिनों के लिए स्थानीय समाचार पत्रों में सार्वजनिक सूचना प्रकाशित होगी।',
        'निर्धारित अदालती स्टांप शुल्क जमा कर सीलबंद उत्तराधिकार प्रमाणपत्र प्राप्त करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-03-1',
        name: { en: 'Bank Account Balance Certificates & Share Statements', bn: 'ব্যাঙ্ক ব্যালেন্স সার্টিফিকেট ও শেয়ার স্টেটমেন্ট', hi: 'बैंक बैलेंस प्रमाणपत्र एवं शेयर होल्डिंग स्टेटमेंट' },
        issuing_authority: { en: 'Commercial Banks / Depositories (CDSL/NSDL)', bn: 'ব্যাঙ্ক / ডিপোজিটরি', hi: 'बैंक / डिपॉजिटरी' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-04',
    title: {
      en: 'Letters of Administration for Intestate Estates',
      bn: 'উইলবিহীন স্থাবর সম্পত্তির লেটার্স অব অ্যাডমিনিস্ট্রেশন (হাইকোর্ট বনাম জেলা আদালত)',
      hi: 'बिना वसीयत छोड़ी गई संपत्ति हेतु लेटर्स ऑफ एडमिनिस्ट्रेशन'
    },
    relevant_act: 'Sec 278, Indian Succession Act, 1925',
    summary: {
      en: 'Securing court administration rights over immovable properties when a person dies without a Will: High Court Original Side for Kolkata; District Judge for districts.',
      bn: 'কোনো উইল না করে মারা গেলে স্থাবর সম্পত্তি পরিচালনা ও বণ্টনের জন্য আদালতের লেটার্স অব অ্যাডমিনিস্ট্রেশন লাভ।',
      hi: 'बिना वसीयत मरे व्यक्ति की जमीन-जायदाद के प्रबंधन एवं नाम कराने हेतु अदालती प्रबंध पत्र पाना।'
    },
    authority_forum: {
      en: 'Calcutta High Court (Kolkata) / District Judge (Districts)',
      bn: 'কলকাতা হাইকোর্ট (কলকাতা) / জেলা জজ আদালত (জেলা)',
      hi: 'कलकत्ता उच्च न्यायालय (कोलकाता) / जिला जज न्यायालय'
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
      en: ['letters of administration intestate', 'section 278 isa', 'estate administration high court'],
      bn: ['লেটার্স অব অ্যাডমিনিস্ট্রেশন', 'উইল ছাড়া সম্পত্তি', 'স্থাবর সম্পত্তি পরিচালনা'],
      hi: ['लेटर्स ऑफ एडमिनिस्ट्रेशन', 'बिना वसीयत संपत्ति प्रबंध', 'धारा 278']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'Court of District & Sessions Judge (District Headquarters)',
          bn: 'জেলা ও দায়রা জজ আদালত (জেলা সদর)',
          hi: 'जिला एवं सत्र न्यायाधीश न्यायालय'
        },
        portal_name: { en: 'District eCourts Services', bn: 'জেলা ই-কোর্ট পোর্টাল', hi: 'जिला ई-कोर्ट्स' },
        portal_url: 'https://districts.ecourts.gov.in/',
        steps: {
          en: [
            'Prepare schedule of all immovable lands/houses situated within the district.',
            'File Section 278 petition before District Judge asserting deceased died intestate.',
            'District Judge issues special citations to all legal heirs and publishes in district dailies.',
            'Execute Administration Bond with sureties; receive Letters of Administration under seal.'
          ],
          bn: [
            'জেলায় অবস্থিত সমস্ত জমি ও বাড়ির তফসিল বিবরণী তৈরি করুন।',
            'উইলবিহীনভাবে মৃত্যু হয়েছে জানিয়ে জেলা জজ আদালতে ধারা ২৭৮ অনুযায়ী মামলা করুন।',
            'জেলা জজ সমস্ত ওয়ারিশদের নোটিশ পাঠাবেন এবং স্থানীয় পত্রিকায় সরকারি বিজ্ঞপ্তি দেবেন।',
            'আদালতে জামানত বন্ড দাখিল করে অফিশিয়াল সিলযুক্ত লেটার্স অব অ্যাডমিনিস্ট্রেশন গ্রহণ করুন।'
          ],
          hi: [
            'जिले में स्थित समस्त अचल संपत्तियों की आधिकारिक अनुसूची बनाएं।',
            'बिना वसीयत मृत्यु का शपथ पत्र देकर धारा 278 में जिला जज के समक्ष याचिका दें।',
            'जिला जज सभी वारिसों को समन जारी करेंगे एवं जिला समाचार पत्रों में विज्ञप्ति देंगे।',
            'जमानत बॉन्ड भरकर न्यायालय की सील युक्त प्रबंध पत्र प्राप्त करें।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'High Court at Calcutta (Original Civil Jurisdiction)',
          bn: 'কলকাতা হাইকোর্ট (অরিজিনাল সিভিল বেঞ্চ)',
          hi: 'कलकत्ता उच्च न्यायालय (मूल दीवानी शाखा)'
        },
        portal_name: { en: 'Calcutta High Court Original Side', bn: 'কলকাতা হাইকোর্ট অরিজিনাল সাইড', hi: 'कलकत्ता हाईकोर्ट' },
        portal_url: 'https://calcuttahighcourt.gov.in/',
        steps: {
          en: [
            'Prepare multi-property asset schedule situated in Kolkata municipal limits.',
            'File petition under Section 278 ISA before Original Side of High Court at Calcutta.',
            'Court issues citations published in English and Bengali state-level newspapers.',
            'High Court executes Administration Bond and issues Letters of Administration under court seal.'
          ],
          bn: [
            'কলকাতা পুর এলাকার সমস্ত ফ্ল্যাট ও স্থাবর সম্পত্তির তফসিল তালিকা প্রস্তুত করুন।',
            'কলকাতা হাইকোর্টের অরিজিনাল সাইডে ধারা ২৭৮ অনুযায়ী লেটার্স অব অ্যাডমিনিস্ট্রেশন ফাইল করুন।',
            'হাইকোর্ট থেকে রাজ্যস্তরের ইংরেজি ও বাংলা পত্রিকায় সরকারি সাইটেশন প্রকাশ করা হবে।',
            'হাইকোর্ট বন্ড অনুমোদন শেষে বিচারিক সিলমোহরযুক্ত চূড়ান্ত লেটার্স অব অ্যাডমিনিস্ট্রেশন দেবে।'
          ],
          hi: [
            'कोलकाता नगर निगम क्षेत्र में स्थित संपत्तियों का विस्तृत ब्योरा तैयार करें।',
            'कलकत्ता हाईकोर्ट की मूल शाखा में धारा 278 के तहत याचिका दाखिल करें।',
            'उच्च न्यायालय राज्य स्तरीय समाचार पत्रों में सार्वजनिक नोटिस प्रकाशित कराएगा।',
            'हाईकोर्ट द्वारा बॉन्ड स्वीकृत कर न्यायिक सील युक्त प्रबंध पत्र जारी किया जाएगा।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Prepare comprehensive schedule of all immovable real estate and movable assets left by deceased.',
        'File petition under Section 278 ISA before District Judge or High Court asserting intestacy.',
        'Court issues citations to all natural heirs and publishes notices in English and Bengali newspapers.',
        'Execute Administration Bond with sureties; court issues Letters of Administration under seal.'
      ],
      bn: [
        'মৃত ব্যক্তির রেখে যাওয়া সমস্ত জমিজমা, বাড়ি ও অন্যান্য সম্পত্তির তফসিল তালিকা প্রস্তুত করুন।',
        'উইলবিহীনভাবে মৃত্যু হয়েছে জানিয়ে ধারা ২৭৮ অনুযায়ী জেলা জজ বা হাইকোর্টে আবেদন করুন।',
        'আদালত সমস্ত ওয়ারিশদের নোটিশ পাঠাবে এবং সংবাদপত্রে সরকারি সাইটেশন জারি করবে।',
        'আদালতে অ্যাডমিনিস্ট্রেশন বন্ড দাখিল করে অফিশিয়াল সিলযুক্ত লেটার্স অব অ্যাডমিনিস্ট্রেশন গ্রহণ করুন।'
      ],
      hi: [
        'मृतक द्वारा छोड़ी गई समस्त अचल एवं चल संपत्तियों की विस्तृत अनुसूची तैयार करें।',
        'बिना वसीयत मृत्यु का शपथ पत्र देकर धारा 278 में जिला जज या हाईकोर्ट में याचिका दें।',
        'अदालत सभी वैध वारिसों को समन जारी करेगी एवं समाचार पत्रों में सार्वजनिक विज्ञप्ति देगी।',
        'जमानतदारों सहित एडमिनिस्ट्रेशन बॉन्ड भरकर न्यायालय की सील युक्त प्रबंध पत्र प्राप्त करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-04-1',
        name: { en: 'Death Certificate & Schedule of Immovable Properties', bn: 'মৃত্যু সনদ ও স্থাবর সম্পত্তির তফসিল বিবরণী', hi: 'मृत्यु प्रमाणपत्र एवं अचल संपत्ति अनुसूची' },
        issuing_authority: { en: 'Registrar of Births & Deaths / Applicant', bn: 'পুরসভা / আবেদনকারী', hi: 'नगर पालिका / आवेदक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-05',
    title: {
      en: 'Warishan Certificate vs Court Succession Certificate',
      bn: 'ওয়ারিশান শংসাপত্র বনাম আদালতের সাকসেশন সার্টিফিকেট (Panchayat/KMC বনাম Court)',
      hi: 'वारिसान प्रमाणपत्र बनाम अदालती उत्तराधिकार प्रमाणपत्र'
    },
    relevant_act: 'Legal Heirship Rules & Indian Succession Act',
    summary: {
      en: 'Divergent municipal/panchayat heirship: Panchayat/Municipality Warishan is for land mutation; KMC Councillor certificate is for municipal records; Court Certificate is mandatory for contested bank assets.',
      bn: 'পঞ্চায়েত বা পুরসভার ওয়ারিশান কেবল জমি মিউটেশনের জন্য; কেএমসি সার্টিফিকেট পুরকরের জন্য; কিন্তু ব্যাঙ্কের টাকা ও শেয়ারের জন্য আদালতের সাকসেশন আবশ্যক।',
      hi: 'पंचायत/निगम वारिसान केवल जमीन म्यूटेशन हेतु है; बैंक खातों एवं विवादित जमा हेतु अदालती प्रमाणपत्र अनिवार्य है।'
    },
    authority_forum: {
      en: 'Municipality / Panchayat / KMC / Civil Court',
      bn: 'পৌরসভা / গ্রাম পঞ্চায়েত / কেএমসি / দেওয়ানি আদালত',
      hi: 'नगर पालिका / ग्राम पंचायत / केएमसी / सिविल कोर्ट'
    },
    forum_type: 'Civil_Court',
    is_complex: false,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '15 days (ULB/Panchayat) / 4 months (Court)',
      bn: '১৫ দিন (পৌরসভা/পঞ্চায়েত) / ৪ মাস (আদালত)',
      hi: '15 दिन (पंचायत) / 4 माह (अदालत)'
    },
    search_keywords: {
      en: ['warishan vs succession certificate', 'legal heir certificate wb', 'kmc warishan certificate'],
      bn: ['ওয়ারিশান বনাম সাকসেশন', 'ওয়ারিশ সার্টিফিকেটের ক্ষমতা', 'কেএমসি ওয়ারিশান'],
      hi: ['वारिसान बनाम उत्तराधिकार प्रमाणपत्र', 'लीगल हेयर सर्टिफिकेट', 'केएमसी वारिसान']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'Gram Panchayat Pradhan / Municipality Chairman / BL&LRO',
          bn: 'গ্রাম পঞ্চায়েত প্রধান / পৌর প্রধান / বিএলঅ্যান্ডএলআরও',
          hi: 'ग्राम पंचायत प्रधान / नगर पालिका अध्यक्ष / बीएल एंड एलआरओ'
        },
        portal_name: { en: 'Banglarbhumi Warishan Section', bn: 'বাংলারভূমি ওয়ারিশান সেল', hi: 'बांगलारभूमि' },
        portal_url: 'https://banglarbhumi.gov.in/',
        steps: {
          en: [
            'Apply to Gram Panchayat Pradhan or Municipality Chairman for official Warishan Certificate.',
            'Produce family tree affidavit, death certificate, and voter card proofs of all children.',
            'Use verified Warishan Certificate to apply for land mutation on Banglarbhumi.',
            'If bank rejects Warishan for releasing deposits, file Section 372 ISA petition before Civil Judge.'
          ],
          bn: [
            'গ্রাম পঞ্চায়েত প্রধান বা পুর প্রধানের কাছে অফিশিয়াল ওয়ারিশান সার্টিফিকেটের আবেদন করুন।',
            'মৃত্যু সনদ, পারিবারিক বংশলতিকা এবং সমস্ত সন্তানদের ভোটার কার্ডের কপি জমা দিন।',
            'অনুমোদিত ওয়ারিশান সার্টিফিকেট দিয়ে বাংলারভূমি পোর্টালে জমির মিউটেশন আবেদন করুন।',
            'ব্যাঙ্ক বা পোস্ট অফিস টাকা দিতে অস্বীকার করলে দেওয়ানি আদালতে ধারা ৩৭২ অনুযায়ী মামলা করুন।'
          ],
          hi: [
            'ग्राम पंचायत प्रधान अथवा नगर पालिका अध्यक्ष से आधिकारिक वारिसान प्रमाणपत्र लें।',
            'मृत्यु प्रमाणपत्र, वंशावली एवं सभी संतानों के पहचान पत्र प्रस्तुत करें।',
            'सत्यापित वारिसान से बांगलारभूमि पोर्टल पर जमीन म्यूटेशन कराएं।',
            'बैंक द्वारा वारिसान अस्वीकार करने पर सिविल जज के समक्ष धारा 372 में वाद करें।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'KMC Borough Office (Ward Councillor) / City Civil Court',
          bn: 'কেএমসি বোরো অফিস (ওয়ার্ড কাউন্সিলর) / সিটি সিভিল কোর্ট',
          hi: 'केएमसी बोरो कार्यालय (पार्षद) / सिटी सिविल कोर्ट'
        },
        portal_name: { en: 'KMC Official Portal', bn: 'কেএমসি পোর্টাল', hi: 'केएमसी पोर्टल' },
        portal_url: 'https://www.kmcgov.in/',
        steps: {
          en: [
            'Obtain Legal Heir / Family Certificate attested by local KMC Ward Councillor.',
            'Submit heirship documents to KMC Assessment Dept to update municipal property records.',
            'If bank requires formal judicial succession for shares/deposits, move City Civil Court.',
            'City Civil Court issues official Succession Certificate under Section 372 ISA.'
          ],
          bn: [
            'স্থানীয় কেএমসি ওয়ার্ড কাউন্সিলরের কাছ থেকে সত্যায়িত পারিবারিক উত্তরাধিকার সনদ নিন।',
            'উত্তরাধিকার সনদ কেএমসি অ্যাসেসমেন্ট বিভাগে জমা দিয়ে পুর করের নাম সংশোধন করান।',
            'ব্যাঙ্ক শেয়ার বা মোটা ফিক্সড ডিপোজিটের জন্য আদালতের আদেশ চাইলে সিটি সিভিল কোর্টে যান।',
            'সিটি সিভিল কোর্ট ধারা ৩৭২ অনুযায়ী বিচারিক সাকসেশন সার্টিফিকেট প্রদান করবে।'
          ],
          hi: [
            'स्थानीय केएमसी वार्ड पार्षद द्वारा सत्यापित पारिवारिक वारिसान प्रमाणपत्र लें।',
            'केएमसी कर विभाग में जमा कर नगर निगम संपत्ति अभिलेखों में नाम दर्ज कराएं।',
            'बैंक जमा या शेयरों हेतु कानूनी वारिसान अनिवार्य होने पर सिटी सिविल कोर्ट जाएं।',
            'सिटी सिविल कोर्ट द्वारा धारा 372 के तहत आधिकारिक उत्तराधिकार प्रमाणपत्र जारी होगा।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Assess requirement: apply for local Warishan Certificate for mutating family land in Banglarbhumi.',
        'Obtain verification signatures from ward councillor or Gram Panchayat Pradhan with family tree.',
        'If bank or mutual fund rejects Warishan due to lack of nomination, initiate court proceedings.',
        'File Section 372 ISA petition before Civil Judge to obtain conclusive judicial Succession Certificate.'
      ],
      bn: [
        'প্রয়োজন যাচাই করুন: জমির মিউটেশনের জন্য পুরসভা বা পঞ্চায়েত থেকে ওয়ারিশান সার্টিফিকেট নিন।',
        'কাউন্সিলর বা পঞ্চায়েত প্রধানের সই ও বংশতালিকা সহযোগে ওয়ারিশান সনদ সংগ্রহ করুন।',
        'নমিনি না থাকার কারণে ব্যাঙ্ক বা মিউচুয়াল ফান্ড ওয়ারিশান প্রত্যাখ্যান করলে আদালতে যান।',
        'দেওয়ানি আদালতে ধারা ৩৭২ অনুযায়ী মামলা করে আদালতের চূড়ান্ত সাকসেশন সার্টিফিকেট গ্রহণ করুন।'
      ],
      hi: [
        'आवश्यकता जांचें: बांगलारभूमि में जमीन म्यूटेशन हेतु स्थानीय पंचायत/निगम का वारिसान बनवाएं।',
        'वार्ड पार्षद या ग्राम प्रधान के सत्यापन हस्ताक्षर सहित वारिसान प्रमाणपत्र लें।',
        'नॉमिनी न होने पर बैंक द्वारा वारिसान अस्वीकार करने पर अदालत का रुख करें।',
        'सिविल जज के समक्ष धारा 372 में वाद कर कानूनी रूप से बाध्यकारी उत्तराधिकार प्रमाणपत्र लें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-05-1',
        name: { en: 'Panchayat / Municipal / KMC Warishan Certificate', bn: 'পঞ্চায়েত, পুরসভা বা KMC ওয়ারিশান সনদ', hi: 'पंचायत / नगर पालिका / केएमसी वारिसान प्रमाणपत्र' },
        issuing_authority: { en: 'Gram Panchayat Pradhan / KMC Councillor', bn: 'পঞ্চায়েত প্রধান / কেএমসি কাউন্সিলর', hi: 'ग्राम प्रधान / केएमसी पार्षद' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-06',
    title: {
      en: 'Injunction against Co-sharer Selling Joint Land',
      bn: 'বাটোয়ারা মামলা চলাকালীন জমি বিক্রি আটকাতে নিষেধাজ্ঞা',
      hi: 'बंटवारा वाद के दौरान संयुक्त जमीन बेचने पर स्थगनादेश (इंजंक्शन)'
    },
    relevant_act: 'Order XXXIX Rules 1 & 2 r/w Sec 151 CPC',
    summary: {
      en: 'Securing an emergency injunction restraining aggressive co-sharers from selling or altering joint ancestral land during trial.',
      bn: 'বাটোয়ারা মামলা বিচারাধীন থাকা অবস্থায় অন্য শরিক যাতে বহিরাগতের কাছে জমি বিক্রি বা নির্মাণ না করতে পারে তার স্থগিতাদেশ।',
      hi: 'बंटवारे का मुकदमा चलने तक किसी भी हिस्सेदार द्वारा जमीन बेचने या निर्माण करने पर अदालती रोक।'
    },
    authority_forum: {
      en: 'Civil Court (Partition Trial Court) / City Civil Court',
      bn: 'দেওয়ানি আদালত (বাটোয়ারা বিচারক আদালত) / সিটি সিভিল কোর্ট',
      hi: 'सिविल विचारण न्यायालय / सिटी सिविल कोर्ट'
    },
    forum_type: 'Civil_Court',
    is_complex: false,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: 'Urgent (7 to 15 days for ad-interim stay)',
      bn: 'জরুরি (৭ থেকে ১৫ দিনে অন্তর্বর্তী স্থগিতাদেশ)',
      hi: 'अति आवश्यक (7 से 15 दिन में अंतरिम रोक)'
    },
    search_keywords: {
      en: ['stop co-sharer selling land', 'order 39 rules 1 2 partition', 'status quo ancestral land'],
      bn: ['শরিকি জমি বিক্রি বন্ধ', 'বাটোয়ারা ইনজাংশন', 'অর্ডার ৩৯ রুল ১ ২ সিপিসি'],
      hi: ['सह-हिस्सेदार जमीन बिक्री रोक', 'आदेश 39 नियम 1 2', 'पैतृक जमीन स्थगनादेश']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'File an urgent Interim Injunction Application under Order XXXIX Rules 1 & 2 CPC in partition suit.',
        'Demonstrate prima facie title, balance of convenience, and irreparable loss if land is alienated.',
        'Obtain ex-parte ad-interim Status Quo order restraining co-sharers from selling or developing.',
        'Serve certified copy of injunction directly on local Sub-Registrar (ADSR) to block registry deeds.'
      ],
      bn: [
        'বাটোয়ারা মামলার সাথে অর্ডার ৩৯ রুল ১ ও ২ সিপিসি অনুযায়ী জরুরি নিষেধাজ্ঞার আবেদন দিন।',
        'আদালতে প্রমাণ করুন জমি বিক্রি বা নির্মাণ হয়ে গেলে অপূরণীয় ক্ষতি (Irreparable Loss) হবে।',
        'আদালত থেকে জমি হস্তান্তর ও গাছ কাটার ওপর অন্তর্বর্তী স্থিতাবস্থা (Status Quo) আদেশ নিন।',
        'আদেশের সার্টিফাইড কপি স্থানীয় সাব-রেজিস্ট্রার অফিসে জমা দিয়ে রেজিস্ট্রি লক করিয়ে রাখুন।'
      ],
      hi: [
        'बंटवारा वाद में आदेश 39 नियम 1 व 2 सीपीसी के तहत आपातकालीन अंतरिम स्थगन याचिका दें।',
        'सिद्ध करें कि जमीन बिकने या निर्माण होने पर वादी को अपूरणीय क्षति (Irreparable Loss) होगी।',
        'अदालत से बिक्री एवं निर्माण पर रोक का एकपक्षीय अंतरिम यथास्थिति (Status Quo) आदेश लें।',
        'आदेश की प्रमाणित प्रति उप-पंजीयक कार्यालय में देकर रजिस्ट्री ब्लॉक कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-06-1',
        name: { en: 'Plaint Copy & Injunction Petition under Order XXXIX', bn: 'মূল মামলার আরজি ও ইনজাংশন পিটিশন কপি', hi: 'मूल वाद पत्र एवं स्थगन आवेदन प्रति' },
        issuing_authority: { en: 'Civil Court Bench', bn: 'দেওয়ানি আদালত', hi: 'सिविल कोर्ट' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-07',
    title: {
      en: 'Partition Commissioner & Final Takhta Division',
      bn: 'পার্টিশন কমিশনার নিয়োগ ও চূড়ান্ত তখতাবণ্টন ডিক্রি',
      hi: 'बंटवारा कमिश्नर (अमीन) नियुक्ति एवं अंतिम तख्ताबंदी डিক্রি'
    },
    relevant_act: 'Order XXVI Rules 13 & 14 r/w Order XX CPC',
    summary: {
      en: 'Appointing a civil court engineer commissioner to physically measure and carve out independent lots (Takhtas) on the ground.',
      bn: 'প্রাথমিক ডিক্রির পর কোর্ট কমিশনার দ্বারা জমিতে ফিতে ফেলে সীমানা নির্ধারণ ও চূড়ান্ত তখতাবণ্টন ডিক্রি লাভ।',
      hi: 'प्रारंभिक डिक्री के बाद कोर्ट अमीन द्वारा खेत पर जाकर नापी करना एवं अलग-अलग भौतिक तख्ते बनाना।'
    },
    authority_forum: {
      en: 'Civil Court (Partition Trial Court)',
      bn: 'দেওয়ানি আদালত (বাটোয়ারা বিচারক আদালত)',
      hi: 'सिविल विचारण न्यायालय'
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
      en: ['partition commissioner', 'final decree partition takhta', 'order 26 rule 13 cpc'],
      bn: ['পার্টিশন কমিশনার', 'তখতাবণ্টন ডিক্রি', 'চূড়ান্ত বাটোয়ারা'],
      hi: ['बंटवारा कमिश्नर', 'अंतिम तख्ताबंदी डिक्री', 'कोर्ट अमीन नापी']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Apply for appointment of Partition Commissioner under Order XXVI Rule 13 after preliminary decree.',
        'Deposit commissioner costs and attend on-site physical survey with surveying chains/instruments.',
        'Commissioner prepares field map, carves separate lots (Takhtas), and submits written report.',
        'Court invites objections; upon approval, judge signs the Final Partition Decree on non-judicial stamp.'
      ],
      bn: [
        'প্রাথমিক ডিক্রির পর অর্ডার ২৬ রুল ১৩ সিপিসি অনুযায়ী কোর্ট কমিশনার নিয়োগের দরখাস্ত দিন।',
        'কমিশনার ফি ট্রেজারিতে জমা দিয়ে মাঠে আমিনের উপস্থিতিতে ফিতে ফেলে জমি পরিমাপ করান।',
        'কমিশনার প্রতিটি শরিকের জন্য আলাদা তখতার নকশা তৈরি করে আদালতে বিস্তারিত রিপোর্ট দেবেন।',
        'আপত্তি শুনানি শেষে বিচারক স্ট্যাম্প পেপারে চূড়ান্ত বাটোয়ারা ডিক্রি (Final Decree) সই করবেন।'
      ],
      hi: [
        'प्रारंभिक डिक्री के बाद आदेश 26 नियम 13 सीपीसी में कोर्ट कमिश्नर नियुक्ति की अर्जी दें।',
        'कमिश्नर फीस जमा कर जमीन पर अमीन की मौजूदगी में भौतिक नापी संपन्न कराएं।',
        'कमिश्नर सभी हिस्सेदारों के अलग-अलग तख्तों का नक्शा बनाकर अदालत में रिपोर्ट दाखिल करेंगे।',
        'आपत्तियों की सुनवाई उपरांत न्यायाधीश स्टांप पेपर पर अंतिम बंटवारा डिक्री जारी करेंगे।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-07-1',
        name: { en: 'Certified Copy of Preliminary Decree of Shares', bn: 'অংশের প্রাথমিক ডিক্রির সার্টিফাইড কপি', hi: 'प्रारंभिक हिस्सेदारी डिक्री की प्रमाणित प्रति' },
        issuing_authority: { en: 'Civil Court Sheristadar', bn: 'দেওয়ানি আদালত সেরেস্তা', hi: 'सिविल कोर्ट रिकॉर्ड रूम' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-08',
    title: {
      en: 'Hindu Daughter’s Coparcenary Share in Joint Estate',
      bn: 'হিন্দু পৈতৃক সম্পত্তিতে কন্যার সম-অংশীদারিত্ব',
      hi: 'हिंदू पैतृक संपत्ति में बेटियों का बेटों के समान सह-दायिकी (Coparcenary) अधिकार'
    },
    relevant_act: 'Sec 6, Hindu Succession Act, 1956 (Vineeta Sharma SC)',
    summary: {
      en: 'Supreme Court landmark ruling: daughters possess equal coparcenary rights by birth in ancestral property irrespective of father’s death date.',
      bn: 'সুপ্রিম কোর্টের বিনীতা শর্মা রায়: পিতা বেঁচে থাকুন বা না থাকুন, পৈতৃক সম্পত্তিতে কন্যাদের ছেলেদের সমান জন্মগত অধিকার।',
      hi: 'सुप्रीम कोर्ट के विनीता शर्मा फैसले के तहत पिता की मृत्यु कभी भी हुई हो, बेटियों का जन्म से बेटों के बराबर अधिकार।'
    },
    authority_forum: {
      en: 'Civil Court (Senior / Junior Division) / City Civil Court',
      bn: 'দেওয়ানি আদালত (সিনিয়র / জুনিয়র ডিভিশন)',
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
      en: ['daughter equal share ancestral property', 'vineeta sharma judgment', 'section 6 hindu succession'],
      bn: ['মেয়েদের পৈতৃক অধিকার', 'বিনীতা শর্মা রায়', 'কন্যার সম-অংশ'],
      hi: ['बेटी का पैतृक संपत्ति में हक', 'विनीता शर्मा फैसला', 'धारा 6 हिंदू उत्तराधिकार']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Prove biological daughter relationship through birth certificate, school records, or voter card.',
        'Issue legal notice to brothers demanding equal coparcenary share citing *Vineeta Sharma (SC)*.',
        'File Partition Suit under Section 6 HSA; brothers cannot plead daughter married before 2005.',
        'Court passes preliminary decree awarding daughter an identical share to that of a son.'
      ],
      bn: [
        'জন্ম সনদ, মাধ্যমিকের অ্যাডমিট বা ভোটার কার্ডের মাধ্যমে কন্যা সন্তানের আইনি পরিচয় প্রমাণ করুন।',
        'বিনীতা শর্মা সুপ্রিম কোর্ট রায় উল্লেখ করে ভাইদের সমান ভাগের দাবিতে আইনজীবীর চিঠি দিন।',
        'দেওয়ানি আদালতে বাটোয়ারা মামলা করুন; ২০০৫ সালের আগে বিয়ে হয়েছে বলে ভাইয়েরা দাবি করতে পারবে না।',
        'আদালত পুত্র ও কন্যার মধ্যে সমান অংশ ঘোষণা করে প্রাথমিক বাটোয়ারা ডিক্রি প্রদান করবে।'
      ],
      hi: [
        'जन्म प्रमाणपत्र, स्कूल अंकपत्र या वोटर कार्ड से मृतक की बेटी होने का विधिक प्रमाण दें।',
        'सुप्रीम कोर्ट के विनीता शर्मा फैसले का हवाला देकर भाइयों को समान हिस्से का नोटिस भेजें।',
        'सिविल जज के समक्ष धारा 6 में बंटवारा वाद करें; 2005 से पहले विवाह का बहाना मान्य नहीं होगा।',
        'अदालत बेटी को बेटे के बिल्कुल बराबर हिस्सा आवंटित करते हुए प्रारंभिक डिक्री जारी करेगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-08-1',
        name: { en: 'Daughter Identity / School Proof of Paternity & Ancestral ROR', bn: 'পিতৃত্বের প্রমাণপত্র ও পৈতৃক জমির খতিয়ান', hi: 'पिता-पुत्री संबंध प्रमाणपत्र एवं पैतृक खतियान' },
        issuing_authority: { en: 'Education Board / Election Commission / BL&LRO', bn: 'শিক্ষা পর্ষদ / ভূমি দপ্তর', hi: 'शिक्षा बोर्ड / राजस्व विभाग' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-09',
    title: {
      en: 'Muslim Law of Inheritance, Hiba & Partition',
      bn: 'মুসলিম উত্তরাধিকার আইন, হেবা (দানপত্র) চ্যালেঞ্জ',
      hi: 'मुस्लिम उत्तराधिकार कानून, हिबा (मौखिक दान) एवं बंटवारा वाद'
    },
    relevant_act: 'Principles of Mohammedan Law r/w Specific Relief Act',
    summary: {
      en: 'Division of Muslim intestate estates among Quranic Sharers and Residuaries, and challenging fabricated oral Hiba gifts.',
      bn: 'মুসলিম শ্যারিয়া আইন মেনে সম্পত্তি বণ্টন এবং ভুয়ো মৌখিক হেবা (Hiba) দানপত্রের বিরুদ্ধে আদালতে মামলা।',
      hi: 'शरिया कानून के अनुसार कुरानिक अंशधारकों में बंटवारा एवं फर्जी मौखिक हिबा दान को रद्द कराना।'
    },
    authority_forum: {
      en: 'Civil Court (Junior / Senior Division)',
      bn: 'দেওয়ানি আদালত (জুনিয়র / সিনিয়র ডিভিশন)',
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
      en: ['muslim inheritance law', 'hiba challenge oral gift', 'shariat partition suit'],
      bn: ['মুসলিম বাটোয়ারা আইন', 'হেবা চ্যালেঞ্জ', 'শায়ারি বণ্টন'],
      hi: ['मुस्लिम संपत्ति बंटवारा', 'हिबा चुनौती', 'शरिया उत्तराधिकार वाद']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Calculate fixed Quranic shares (Sharers: widow 1/8th or 1/4th, daughters, mother 1/6th).',
        'If brothers claim oral Hiba (gift), demand strict proof of declaration, acceptance, and possession.',
        'File Partition Suit before Civil Judge praying for division strictly per Mohammedan law.',
        'Court strikes down unproved oral gifts and partitions estate among all Sharers and Residuaries.'
      ],
      bn: [
        'কোরানিক নির্ধারিত অংশ হিসাব করুন (বিধবা ১/৮ বা ১/৪, মাতা ১/৬, বাকি অবশিষ্ট অংশ পুত্র-কন্যার মধ্যে ২:১)।',
        'ভাইয়েরা মৌখিক হেবার দাবি তুললে দান ঘোষণা, গ্রহণ ও সশরীরে দখল হস্তান্তরের কড়া প্রমাণ চান।',
        'দেওয়ানি আদালতে মামলা করে শ্যারিয়া বিধান মেনে সমস্ত অংশীদারদের মধ্যে ভাগের আর্জি জানান।',
        'প্রমাণহীন মৌখিক হেবা বাতিল করে আদালত সমস্ত বৈধ ওয়ারিশদের মধ্যে সম্পত্তি ভাগ করে দেবে।'
      ],
      hi: [
        'कुरानिक हिस्सेदारी तय करें (पत्नी 1/8 या 1/4, मां 1/6, शेष बेटे व बेटी में 2:1 के अनुपात में)।',
        'यदि कोई भाई मौखिक हिबा का दावा करे, तो घोषणा, स्वीकृति एवं वास्तविक कब्जे के सबूत मांगें।',
        'मोहम्मडन कानून के तहत सिविल जज के समक्ष औपचारिक संपत्ति बंटवारा वाद दाखिल करें।',
        'अदालत अप्रमाणित मौखिक हिबा को खारिज कर सभी वैध वारिसों में जमीन का बंटवारा करेगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-09-1',
        name: { en: 'Certified Genealogical Tree & Disputed Oral Hiba Claim', bn: 'ওয়ারিশান তালিকা ও বিতর্কিত হেবার নথি', hi: 'वारिसान वंशावली एवं विवादित हिबा के दस्तावेज' },
        issuing_authority: { en: 'Local Panchayat / Kazi Office', bn: 'পঞ্চায়েত / কাজী অফিস', hi: 'ग्राम पंचायत / काजी' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-10',
    title: {
      en: 'Revocation of Registered Gift Deed by Senior Citizens',
      bn: 'প্রবীণ নাগরিকদের দেওয়া দানপত্র (Gift Deed) বাতিল',
      hi: 'वरिष्ठ नागरिकों द्वारा दी गई दान विलेख (गिफ्ट डीड) निरस्तीकरण'
    },
    relevant_act: 'Sec 23, Maintenance & Welfare of Parents Act, 2007',
    summary: {
      en: 'Summary cancellation of gift deeds where children fail to care for parents: SDO Maintenance Tribunal for districts; Kolkata Collectorate Tribunal for Kolkata.',
      bn: 'জমি বা ফ্ল্যাট লিখে নেওয়ার পর সন্তান খেতে-পরতে না দিলে মেইনটেন্যান্স ট্রাইব্যুনাল মারফত দানপত্র সরাসরি বাতিল।',
      hi: 'जमीन नाम कराने के बाद माता-पिता की देखभाल न करने पर अधिकरण से गिफ्ट डीड तुरंत रद्द कराना।'
    },
    authority_forum: {
      en: 'SDO Tribunal (Districts) / Kolkata Collector Tribunal',
      bn: 'মহকুমা শাসক (SDO) ট্রাইব্যুনাল (জেলা) / কলকাতা কালেক্টর ট্রাইব্যুনাল',
      hi: 'एसडीओ अधिकरण (जिले) / कोलकाता कलेक्टर अधिकरण'
    },
    forum_type: 'SDO_Tribunal',
    is_complex: false,
    official_portal_url: 'https://wbja.nic.in/',
    statutory_timeframe: {
      en: '60 to 90 working days',
      bn: '৬০ থেকে ৯০ কার্যদিবস',
      hi: '60 থেকে 90 कार्यदिवस'
    },
    search_keywords: {
      en: ['section 23 senior citizens act', 'cancel gift deed parents', 'sdo tribunal land cancellation'],
      bn: ['দানপত্র বাতিল প্রবীণ নাগরিক', 'ধারা ২৩ সিনিয়র সিটিজেন', 'এসডিও ট্রাইব্যুনাল গিফট ডিড'],
      hi: ['गिफ्ट डीड निरस्तीकरण', 'धारा 23 वरिष्ठ नागरिक', 'एसडीओ ट्रिब्यूनल दान विलेख']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'Sub-Divisional Officer (SDO) Maintenance Tribunal (22 Districts)',
          bn: 'মহকুমা শাসক (SDO) ভরণপোষণ ট্রাইব্যুনাল',
          hi: 'अनुमंडल दंडाधिकारी (SDO) भरण-पोषण अधिकरण'
        },
        steps: {
          en: [
            'Verify gift deed of district agricultural/homestead land had basic caregiving expectation.',
            'File petition under Section 23 before SDO Tribunal citing physical and financial neglect.',
            'SDO summons adult children and conducts summary inquiry within 30 days.',
            'SDO declares gift deed void; directs district Sub-Registrar and BL&LRO to cancel mutation.'
          ],
          bn: [
            'দানপত্র দলিলের শর্ত খতিয়ে দেখুন যেখানে ভবিষ্যৎ দেখভালের শর্তে সম্পত্তি হস্তান্তরিত হয়েছিল।',
            'অবহেলার প্রমাণসহ মহকুমা শাসকের (SDO) মেইনটেন্যান্স ট্রাইব্যুনালে ধারা ২৩ অনুযায়ী আবেদন দিন।',
            'এসডিও অবাধ্য সন্তানকে তলব করে ভরণপোষণ না দেওয়ার বিষয়ে সংক্ষিপ্ত বিচার করবেন।',
            'এসডিও দানপত্রটিকে আইনত বাতিল ঘোষণা করবেন এবং সাব-রেজিস্ট্রার ও বিএলঅ্যান্ডএলআরও-কে রেকর্ড বাতিলের নির্দেশ দেবেন।'
          ],
          hi: [
            'जांचें कि गिफ्ट डीड में माता-पिता की सेवा करने की बुनियादी शर्त शामिल थी।',
            'देखभाल न करने के साक्ष्यों के साथ एसडीओ भरण-पोषण ट्रिब्यूनल में धारा 23 में आवेदन दें।',
            'एसडीओ संतान को तलब कर भरण-पोषण न देने के संबंध में त्वरित सुनवाई करेंगे।',
            'एसडीओ गिफ्ट डीड को शून्य घोषित करेंगे एवं उप-पंजीयक व बीएल एंड एलआरओ को विलेख रद्द करने का आदेश देंगे।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'Kolkata District Maintenance Tribunal (Collectorate at Bankshall St)',
          bn: 'কলকাতা জেলা ভরণপোষণ ট্রাইব্যুনাল (কালেক্টরেট, ব্যাঙ্কশাল স্ট্রিট)',
          hi: 'कोलकाता जिला भरण-पोषण अधिकरण (कलेक्टर कार्यालय)'
        },
        steps: {
          en: [
            'Submit Section 23 petition before Kolkata Maintenance Tribunal at Collectorate Office.',
            'Attach registered gift deed of Kolkata flat/premises and medical bills proving neglect.',
            'Tribunal conducts hearing and passes order annulling gift deed executed under undue influence.',
            'Order transmitted directly to KMC Assessment Dept to restore Assessee Card in parent name.'
          ],
          bn: [
            'ব্যাঙ্কশাল স্ট্রিটের কলকাতা কালেক্টরেট অফিসে ধারা ২৩ অনুযায়ী প্রবীণ সুরক্ষা আবেদন করুন।',
            'কলকাতার ফ্ল্যাটের দানপত্র ও চিকিৎসার অবহেলার প্রমাণ ট্রাইব্যুনালে দাখিল করুন।',
            'ট্রাইব্যুনাল শুনানি নিয়ে প্রতারণামূলক প্রভাবের কারণে দানপত্রটি আইনত বাতিল করবে।',
            'আদেশের কপি কেএমসি অ্যাসেসমেন্ট বিভাগে পাঠিয়ে এসেসি কার্ড পিতামাতার নামে পুনর্বহাল করান।'
          ],
          hi: [
            'बैंकशाल स्ट्रीट स्थित कोलकाता कलेक्टर कार्यालय में धारा 23 के तहत याचिका दाखिल करें।',
            'कोलकाता फ्लैट के गिफ्ट डीड एवं इलाज की उपेक्षा के मेडिकल रिकॉर्ड संलग्न करें।',
            'अधिकरण सुनवाई कर बुजुर्गों की सहमति के अभाव में गिफ्ट डीड को अमान्य घोषित करेगा।',
            'आदेश की प्रति केएमसी कर विभाग को भेजकर संपत्ति पुनः माता-पिता के नाम दर्ज कराई जाएगी।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Verify gift deed was executed after commencement of the 2007 Act with conditional caregiving.',
        'File an application under Section 23 before the SDO Maintenance Tribunal citing neglect.',
        'SDO summons adult child and conducts summary hearing into physical and financial abandonment.',
        'SDO declares gift deed void as procured by fraud; directs Sub-Registrar to cancel deed entries.'
      ],
      bn: [
        'দানপত্র দলিলের শর্ত খতিয়ে দেখুন যেখানে ভবিষ্যৎ দেখভালের শর্তে সম্পত্তি হস্তান্তরিত হয়েছিল।',
        'অবহেলার প্রমাণসহ মহকুমা শাসকের (SDO) মেইনটেন্যান্স ট্রাইব্যুনালে ধারা ২৩ অনুযায়ী আবেদন দিন।',
        'এসডিও অবাধ্য সন্তানকে তলব করে ভরণপোষণ না দেওয়ার বিষয়ে সংক্ষিপ্ত বিচার করবেন।',
        'এসডিও দানপত্রটিকে আইনত বাতিল ঘোষণা করবেন এবং সাব-রেজিস্ট্রারকে রেকর্ড মুছে ফেলার নির্দেশ দেবেন।'
      ],
      hi: [
        'जांचें कि गिफ्ट डीड में माता-पिता की सेवा करने की बुनियादी शर्त शामिल थी।',
        'देखभाल न करने के साक्ष्यों के साथ एसडीओ भरण-पोषण ट्रिब्यूनल में धारा 23 में आवेदन दें।',
        'एसडीओ संतान को तलब कर भरण-पोषण न देने के संबंध में त्वरित सुनवाई करेंगे।',
        'एसडीओ गिफ्ट डीड को धोखाधड़ी मानकर शून्य घोषित करेंगे एवं उप-पंजीयक को विलेख रद्द करने का आदेश देंगे।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-10-1',
        name: { en: 'Registered Gift Deed Copy & Medical Neglect Proof', bn: 'রেজিস্ট্রি গিফট দলিলের কপি ও অবহেলার প্রমাণ', hi: 'पंजीकृत गिफ्ट डीड की प्रति एवं उपेक्षा के साक्ष्य' },
        issuing_authority: { en: 'Sub-Registrar (ADSR) / Government Hospital', bn: 'সাব-রেজিস্ট্রার / হাসপাতাল', hi: 'उप-पंजीयक / सरकारी अस्पताल' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-11',
    title: {
      en: 'Will Challenge for Forgery & Undue Influence',
      bn: 'জাল বা সন্দেহজনক উইল বাতিল করার দেওয়ানি মামলা',
      hi: 'फर्जी, जाली अथवा दबाव में लिखवाई गई वसीयत को चुनौती'
    },
    relevant_act: 'Sec 61 & 63, ISA, 1925 & Sec 68 Evidence Act',
    summary: {
      en: 'Challenging suspicious wills created by coercion, forged signatures of ailing elders, or without two independent witnesses.',
      bn: 'মৃত্যুপথযাত্রী ব্যক্তির অসুস্থতার সুযোগ নিয়ে গোপনে লিখিয়ে নেওয়া জাল উইল বাতিলের দেওয়ানি মামলা।',
      hi: 'बीमार बुजुर्ग की जाली वसीयत अथवा दो गवाहों के बिना गुपचुप तैयार कराई गई वसीयत को रद्द कराना।'
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
      en: ['challenge forged will', 'undue influence will section 61', 'suspicious circumstances will'],
      bn: ['জাল উইল মামলা', 'ইচ্ছাপত্র চ্যালেঞ্জ', 'সন্দেহজনক উইল বাতিল'],
      hi: ['फर्जी वसीयत चुनौती', 'जाली वसीयत मुकदमा', 'वसीयत निरस्तीकरण']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'File caveat in probate court immediately upon learning of suspicious will petition.',
        'Obtain hospital medical charts proving testator was unconscious or lacked mental capacity.',
        'Cross-examine propounder to expose that attesting witnesses never saw testator sign.',
        'Court dismisses probate petition, declaring will fabricated and restoring natural succession.'
      ],
      bn: [
        'সন্দেহজনক উইলের খবর পেলেই জেলা জজ আদালতে সঙ্গে সঙ্গে কেভিয়েট (Caveat) ফাইল করুন।',
        'হাসপাতালের রেকর্ড এনে প্রমাণ করুন উইল তৈরির তারিখে টেস্টেটর অচেতন বা মানসিক ভারসাম্যহীন ছিলেন।',
        'সনাক্তকারী সাক্ষীদের জেরা করে ফাঁস করুন যে তারা টেস্টেটরের সামনে উইলে সই করেননি।',
        'আদালত প্রোবেট নাকচ করে উইলটিকে জাল ঘোষণা করবে এবং সাধারণ উত্তরাধিকার পুনর্বহাল করবে।'
      ],
      hi: [
        'फर्जी वसीयत की सूचना मिलते ही जिला जज की अदालत में तुरंत कैविएट (Caveat) दाखिल करें।',
        'अस्पताल के मेडिकल रिकॉर्ड से सिद्ध करें कि वसीयत की तारीख पर बुजुर्ग अचेत या मानसिक रूप से अस्वस्थ थे।',
        'गवाहों से जिरह कर साबित करें कि उन्होंने वसीयतकर्ता को हस्ताक्षर करते नहीं देखा।',
        'अदालत प्रोबेट खारिज कर वसीयत को शून्य घोषित करेगी और स्वाभाविक वारिसों का अधिकार बहाल करेगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-11-1',
        name: { en: 'Hospital Medical Incompetence Records on Execution Date', bn: 'উইল তৈরির তারিখের চিকিৎসার রেকর্ড', hi: 'वसीयत तारीख का मेडिकल एवं मानसिक अस्वस्थता रिकॉर्ड' },
        issuing_authority: { en: 'Government Medical College / Hospital', bn: 'হাসপাতাল', hi: 'अस्पताल' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-12',
    title: {
      en: 'Mutual Family Settlement Deed (Aposh-Bontonnama)',
      bn: 'আপস-বণ্টননামা তৈরি ও রেজিস্ট্রি (BL&LRO বনাম KMC)',
      hi: 'पारस्परिक पारिवारिक समझौता विलेख (आपस-बंटननामा) एवं रजिस्ट्री'
    },
    relevant_act: 'Sec 17, Registration Act, 1908 & Transfer of Property Act',
    summary: {
      en: 'Registering an amicable partition deed: In districts, mutated via BL&LRO for separate Khatians; in Kolkata, mutated via KMC for independent Assessee Numbers.',
      bn: 'সমস্ত শরিক মিলে শান্তিপূর্ণভাবে জমি ভাগ করে রেজিস্ট্রি ও মিউটেশন (জেলায় বিএলঅ্যান্ডএলআরও বনাম কলকাতায় KMC Assessee কার্ড)।',
      hi: 'सभी हिस्सेदारों की आपसी सहमति से पारिवारिक बंटवारा विलेख तैयार कर रजिस्ट्री एवं अलग म्यूटेशन कराना।'
    },
    authority_forum: {
      en: 'Sub-Registrar (ADSR) & BL&LRO / KMC',
      bn: 'সাব-রেজিস্ট্রার অফিস (ADSR) ও বিএলঅ্যান্ডএলআরও / কেএমসি',
      hi: 'उप-पंजीयक कार्यालय एवं बीएल एंड एलआरओ / केएमसी'
    },
    forum_type: 'BL_LRO',
    is_complex: false,
    official_portal_url: 'https://wbregistration.gov.in/',
    statutory_timeframe: {
      en: '15 to 30 working days',
      bn: '১৫ থেকে ৩০ কার্যদিবস',
      hi: '15 থেকে 30 कार्यदिवस'
    },
    search_keywords: {
      en: ['aposh bontonnama', 'family settlement deed wb', 'kmc registered partition deed'],
      bn: ['আপস বণ্টননামা', 'পারিবারিক ভাগাভাগি দলিল', 'কেএমসি বণ্টননামা'],
      hi: ['आपसी बंटवारा विलेख', 'परिवार समझौता रजिस्ट्री', 'पारिवारिक विभाजन']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'Sub-Registrar (ADSR) & BL&LRO Survey Wing',
          bn: 'সাব-রেজিস্ট্রার (ADSR) ও বিএলঅ্যান্ডএলআরও সার্ভে শাখা',
          hi: 'उप-पंजीयक कार्यालय एवं बीएल एंड एलआरओ'
        },
        portal_name: { en: 'Banglarbhumi Portal', bn: 'বাংলারভূমি পোর্টাল', hi: 'बांगलारभूमि' },
        portal_url: 'https://banglarbhumi.gov.in/',
        steps: {
          en: [
            'Engage licensed revenue Amin to survey joint rural/district plots and prepare lot map (Takhtas).',
            'Draft Family Settlement Deed specifying clear Dag boundaries, road passages, and acreage.',
            'Execute and register deed before jurisdictional Sub-Registrar (ADSR).',
            'Submit registered deed to BL&LRO for separate Khatian generation and Batag plot creation.'
          ],
          bn: [
            'অভিজ্ঞ আমিন দিয়ে যৌথ জমি মেপে প্রতিটি শরিকের জন্য আলাদা তখতার নকশা তৈরি করান।',
            'চলাচলের রাস্তা ও দাগের পরিমাপ স্পষ্টভাবে লিখে বণ্টননামা দলিলের ড্রাফট তৈরি করুন।',
            'সাব-রেজিস্ট্রি অফিসে গিয়ে সমস্ত শরিক উপস্থিত হয়ে দলিলের আইনসম্মত রেজিস্ট্রি সম্পন্ন করুন।',
            'রেজিস্ট্রি দলিলের কপি বিএলঅ্যান্ডএলআরও-তে জমা দিয়ে প্রত্যেকের আলাদা বাটা দাগ ও খতিয়ান নিন।'
          ],
          hi: [
            'राजस्व अमीन से जमीन की नापी कराकर प्रत्येक वारिस के हिस्से का नक्शा (तख्ता) बनवाएं।',
            'रास्ते एवं प्लॉट सीमाओं का स्पष्ट उल्लेख कर पारिवारिक विभाजन विलेख तैयार करें।',
            'सभी सह-खातेदारों की उपस्थिति में उप-पंजीयक कार्यालय में विलेख का पंजीकरण कराएं।',
            'पंजीकृत विलेख को बीएल एंड एलआरओ में जमा कर सभी के नाम अलग-अलग बटाक नंबर दर्ज कराएं।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'Registrar of Assurances (ARA Kolkata) & KMC Assessment Dept',
          bn: 'রেজিস্ট্রার অব এসিওরেন্সেস (ARA কলকাতা) ও কেএমসি মূল্যায়ন বিভাগ',
          hi: 'पंजीयक (एआरए कोलकाता) एवं केएमसी कर विभाग'
        },
        portal_name: { en: 'KMC Assessment Portal', bn: 'কেএমসি অ্যাসেসমেন্ট পোর্টাল', hi: 'केएमसी कर पोर्टल' },
        portal_url: 'https://www.kmcgov.in/',
        steps: {
          en: [
            'Engage KMC licensed building surveyor to draft architectural floor-wise partition plan.',
            'Execute registered Family Settlement Deed at Additional Registrar of Assurances (ARA Kolkata).',
            'Submit registered partition deed to KMC Assessment & Collection Dept for separation of premises.',
            'KMC issues independent Assessee Numbers and separate municipal tax bills for each family branch.'
          ],
          bn: [
            'কেএমসি লাইসেন্সপ্রাপ্ত সার্ভেয়ার দিয়ে তলা ও ঘরের পরিমাপসহ বাটোয়ারার নকশা বানান।',
            'কলকাতার এআরএ (ARA) রেজিস্ট্রেশন অফিসে সমস্ত শরিক মিলে আপস-বণ্টননামা রেজিস্ট্রি করান।',
            'রেজিস্ট্রি দলিল কেএমসি অ্যাসেসমেন্ট বিভাগে জমা দিয়ে প্রিমাইসেস বিভাজনের আবেদন করুন।',
            'কেএমসি প্রতিটি শরিকের অংশের জন্য আলাদা এসেসি নম্বর ও পৃথক পুর কর বিল জারি করবে।'
          ],
          hi: [
            'केएमसी लाइसेंसशुदा सर्वेक्षक से मंजिलवार विभाजन का वास्तु नक्शा तैयार कराएं।',
            'कोलकाता एआरए (ARA) कार्यालय में पारिवारिक समझौता विलेख विधिवत पंजीकृत कराएं।',
            'पंजीकृत विलेख को केएमसी कर विभाग में जमा कर परिसर के विभाजन का आवेदन दें।',
            'केएमसी प्रत्येक परिवार के हिस्से हेतु अलग असेसी नंबर एवं स्वतंत्र गृहकर बिल जारी करेगा।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Engage licensed Amin to survey joint property and draw colored lot maps (Takhtas) for each heir.',
        'Draft formal Family Settlement Deed clearly defining individual Dag boundaries and road shares.',
        'Execute deed before jurisdictional Sub-Registrar (ADSR) with all co-sharers signing.',
        'Submit registered deed copy to BL&LRO for separate mutation and independent Khatian generation.'
      ],
      bn: [
        'অভিজ্ঞ আমিন দিয়ে জমি মেপে প্রতিটি শরিকের জন্য আলাদা রঙিন তখতার নকশা তৈরি করান।',
        'চলাচলের রাস্তা ও দাগের পরিমাপ স্পষ্টভাবে লিখে বণ্টননামা দলিলের ড্রাফট তৈরি করুন।',
        'সমস্ত শরিকের উপস্থিতিতে সাব-রেজিস্ট্রি অফিসে গিয়ে দলিলের আইনসম্মত রেজিস্ট্রি সম্পন্ন করুন।',
        'রেজিস্ট্রি দলিলের কপি বিএলঅ্যান্ডএলআরও অফিসে জমা দিয়ে প্রত্যেকের আলাদা খতিয়ান ও পর্চা বের করুন।'
      ],
      hi: [
        'सरकारी अमीन से जमीन की सटीक नापी कराकर प्रत्येक वारिस के हिस्से का रंगीन नक्शा बनवाएं।',
        'रास्ते एवं प्लॉट सीमाओं का स्पष्ट उल्लेख कर औपचारिक पारिवारिक विभाजन विलेख तैयार करें।',
        'सभी सह-खातेदारों की उपस्थिति में उप-पंजीयक कार्यालय में विलेख का विधिवत पंजीकरण कराएं।',
        'पंजीकृत विलेख को बीएल एंड एलआरओ में जमा कर सभी के नाम अलग-अलग खतियान दर्ज कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-12-1',
        name: { en: 'Surveyed Partition Map Signed by All Co-Sharers', bn: 'সমস্ত শরিকের সইযুক্ত পরিমাপ করা নকশা', hi: 'सभी हिस्सेदारों के हस्ताक्षर युक्त सर्वे नक्शा' },
        issuing_authority: { en: 'Licensed Surveyor / All Heirs', bn: 'অনুমোদিত সার্ভেয়ার', hi: 'लाइसेंसशुदा अमीन' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-13',
    title: {
      en: 'Shebaiti Rights & Debottar Temple Estate Dispute',
      bn: 'দেবোত্তর সম্পত্তি ও পারিবারিক মন্দিরের সেবাইতি অধিকার',
      hi: 'देवोत्तर संपत्ति एवं पारिवारिक मंदिर में सेबायिती (पूजा/प्रबंधन) अधिकार'
    },
    relevant_act: 'Sec 92 CPC & Religious Endowments Precedents',
    summary: {
      en: 'Resolving turns of worship (Pala), managing temple trust properties, and preventing illegal sale of idol lands.',
      bn: 'পারিবারিক মন্দিরের সেবা-পূজার পালা বণ্টন এবং দেবোত্তর জমি বেআইনি বিক্রি প্রতিরোধে দেওয়ানি মামলা।',
      hi: 'पारिवारिक मंदिर की पूजा पारी (पाला) का बंटवारा एवं देवोत्तर जमीन को अवैध रूप से बेचने पर रोक।'
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
      en: '1 to 3 years',
      bn: '১ থেকে ৩ বছর',
      hi: '1 से 3 वर्ष'
    },
    search_keywords: {
      en: ['debottar property dispute', 'shebaiti rights pala', 'section 92 cpc temple trust'],
      bn: ['দেবোত্তর সম্পত্তি মামলা', 'সেবাইতি অধিকার', 'পূজার পালা বিরোধ'],
      hi: ['देवोत्तर संपत्ति विवाद', 'सेबायिती अधिकार', 'धारा 92 सीपीसी मंदिर ट्रस्ट']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Extract original Arpannama / Debottar Dedication Deed establishing perpetual dedication to deity.',
        'If a Shebait sells idol land, move court under Section 92 CPC for removal of Shebait.',
        'Obtain injunction declaring temple property non-alienable and canceling third-party transfers.',
        'Court frames a formal Scheme of Administration regulating rotating turns of worship (Pala).'
      ],
      bn: [
        'মূল অর্পণনামা বা দেবোত্তর দলিল তুলে প্রমাণ করুন সম্পত্তিটি বিগ্রহের নামে চিরতরে উৎসর্গীকৃত।',
        'কোনো সেবাইত দেবোত্তর জমি বিক্রি করলে ধারা ৯২ সিপিসি অনুযায়ী তাকে অপসারণের মামলা করুন।',
        'আদালত থেকে দেবোত্তর জমি হস্তান্তর-অযোগ্য ঘোষণা করিয়ে সমস্ত রেজিস্ট্রি বাতিল করান।',
        'আদালত নতুন স্কিম অব অ্যাডমিনিস্ট্রেশন তৈরি করে শরিকদের মধ্যে পূজার পালার দিন ঠিক করে দেবে।'
      ],
      hi: [
        'मूल समर्पणनामा (अर्पणनामा) निकालें जिससे साबित हो कि संपत्ति भगवान के नाम समर्पित है।',
        'किसी सेबायित द्वारा देवोत्तर जमीन बेचने पर धारा 92 सीपीसी में उसे हटाने का वाद दायर करें।',
        'अदालत से देवोत्तर भूमि को अहस्तांतरणीय घोषित कराकर अवैध रजिस्ट्रियां रद्द कराएं।',
        'अदालत मंदिर संचालन की वैधानिक योजना बनाकर सभी वारिसों की पूजा पारी (पाला) तय करेगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-13-1',
        name: { en: 'Certified Copy of Historic Arpannama / Dedication Deed', bn: 'ঐতিহাসিক অর্পণনামা বা দেবোত্তর দলিলের কপি', hi: 'ऐतिहासिक अर्पणनामा / समर्पण विलेख प्रति' },
        issuing_authority: { en: 'ADSR Record Room', bn: 'সাব-রেজিস্ট্রি রেকর্ড রুম', hi: 'पंजीयन रिकॉर्ड रूम' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-14',
    title: {
      en: 'Inheritance Rights of Children from Void Marriages',
      bn: 'দ্বিতীয় বিবাহ বা অসিদ্ধ সম্পর্কের সন্তানদের উত্তরাধিকার',
      hi: 'अमान्य विवाह (दूसरी शादी) से उत्पन्न संतानों का पैतृक संपत्ति में अधिकार'
    },
    relevant_act: 'Sec 16(3), Hindu Marriage Act (Revanasiddappa SC)',
    summary: {
      en: 'Supreme Court bench ruling: children born of void or voidable marriages inherit parents full coparcenary share in ancestral property.',
      bn: 'সুপ্রিম কোর্টের রেভানাসিদ্দাপ্পা রায়: বিবাহ অসিদ্ধ হলেও সেই সম্পর্কের সন্তানরা পিতা-মাতার পৈতৃক সম্পত্তির সমান ভাগ পাবে।',
      hi: 'सुप्रीम कोर्ट के रेवणसिद्धप्पा फैसले के तहत अमान्य शादी से जन्मे बच्चे भी पिता की पैतृक संपत्ति में बराबर के हकदार हैं।'
    },
    authority_forum: {
      en: 'Civil Court (Partition Suit)',
      bn: 'দেওয়ানি আদালত (বাটোয়ারা বেঞ্চ)',
      hi: 'सिविल न्यायालय (बंटवारा वाद)'
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
      en: ['second wife child inheritance', 'revanasiddappa judgment', 'section 16 3 hma property'],
      bn: ['দ্বিতীয় স্ত্রীর সন্তানের অধিকার', 'রেভানাসিদ্দাপ্পা রায়', 'অসিদ্ধ বিবাহের সন্তান'],
      hi: ['दूसरी पत्नी के बच्चों का हक', 'रेवणसिद्धप्पा फैसला', 'अमान्य विवाह उत्तराधिकार']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Prove biological parentage through birth certificates, school admission forms, or Aadhaar cards.',
        'Cite Supreme Court *Revanasiddappa* ruling confirming children inherit parent’s ancestral share.',
        'File Civil Suit for Partition claiming equal division of father’s undivided coparcenary interest.',
        'Court passes decree allotting children of second marriage equal shares alongside marital children.'
      ],
      bn: [
        'জন্ম শংসাপত্র, স্কুলের রেকর্ড বা আধার কার্ডের মাধ্যমে পিতার সাথে রক্তের সম্পর্ক প্রমাণ করুন।',
        'সুপ্রিম কোর্টের রেভানাসিদ্দাপ্পা রায় উল্লেখ করে প্রমাণ করুন সন্তান কোনোভাবেই অবৈধ নয়।',
        'পিতার যৌথ পৈতৃক সম্পত্তির ভাগের ওপর দাবি জানিয়ে দেওয়ানি আদালতে বাটোয়ারা মামলা করুন।',
        'আদালত প্রথম ও দ্বিতীয় পক্ষের সমস্ত সন্তানদের মধ্যে সমান হারে অংশ ভাগ করে ডিক্রি জারি করবে।'
      ],
      hi: [
        'जन्म प्रमाणपत्र, स्कूल रिकॉर्ड या आधार कार्ड द्वारा पिता-संतान का जैविक संबंध सिद्ध करें।',
        'सुप्रीम कोर्ट के रेवणसिद्धप्पा फैसले का हवाला देकर पिता के पैतृक हिस्से में दावा करें।',
        'दीवानी अदालत में बंटवारा वाद दायर कर पिता के अविभाजित हिस्से में अपना समान हक मांगें।',
        'अदालत पहली एवं दूसरी शादी के सभी बच्चों को पिता की संपत्ति में बराबर का हिस्सा देगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-14-1',
        name: { en: 'Municipal Birth Certificate Naming Father & School Records', bn: 'পিতার নামযুক্ত জন্ম সনদ ও স্কুলের রেকর্ড', hi: 'पिता के नाम वाला जन्म प्रमाणपत्र व स्कूल रिकॉर्ड' },
        issuing_authority: { en: 'Municipality / School Headmaster', bn: 'পুরসভা / বিদ্যালয়', hi: 'नगर पालिका / स्कूल' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-15',
    title: {
      en: 'Nominee vs Legal Heir Dispute in Bank Deposits',
      bn: 'ব্যাঙ্ক ও ফ্ল্যাটে নমিনি বনাম আইনি উত্তরাধিকারীর বিরোধ',
      hi: 'बैंक खातों एवं फ्लैट में नॉमिनी बनाम वास्तविक वारिसों का विवाद'
    },
    relevant_act: 'Banking Regulation Act (Sarbati Devi Precedent)',
    summary: {
      en: 'Supreme Court rule: a Nominee is merely a temporary trustee holding funds for distribution to all lawful legal heirs.',
      bn: 'সুপ্রিম কোর্টের সর্বতী দেবী রায়: নমিনি কেবল ট্রাস্টি মাত্র, তিনি সম্পূর্ণ টাকার মালিক নন; সমস্ত উত্তরাধিকারী সমান ভাগ পাবে।',
      hi: 'सुप्रीम कोर्ट के सरबती देवी फैसले के अनुसार नॉमिनी केवल ट्रस्टी है, असली मालिक सभी कानूनी वारिस हैं।'
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
      en: '6 months to 1 year',
      bn: '৬ মাস থেকে ১ বছর',
      hi: '6 माह से 1 वर्ष'
    },
    search_keywords: {
      en: ['nominee vs legal heir', 'sarbati devi supreme court', 'nominee cannot keep all money'],
      bn: ['নমিনি বনাম উত্তরাধিকারী', 'সর্বতী দেবী রায়', 'নমিনি কি সম্পূর্ণ মালিক'],
      hi: ['नॉमिनी बनाम कानूनी वारिस', 'सरबती देवी फैसला', 'नॉमिनी संपत्ति अधिकार']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Serve immediate legal notice on the bank and Nominee asserting trust status under *Sarbati Devi*.',
        'File an injunction suit restraining the bank from disbursing entire funds exclusively to Nominee.',
        'File a petition for Succession Certificate (Sec 372 ISA) or partition suit for estate division.',
        'Court orders funds distributed proportionately among all Class-I heirs irrespective of nomination.'
      ],
      bn: [
        'সর্বতী দেবী রায় উল্লেখ করে ব্যাঙ্ক ও নমিনিকে আইনি নোটিশ দিন যে নমিনি একা টাকার মালিক নন।',
        'নমিনির কাছে সম্পূর্ণ টাকা হস্তান্তর আটকাতে দেওয়ানি আদালতে জরুরি ইনজাংশনের মামলা করুন।',
        'ধারা ৩৭২ অনুযায়ী সাকসেশন মামলা করে সমস্ত বৈধ ওয়ারিশদের প্রাপ্য অংশের হিসাব দাখিল করুন।',
        'আদালতের নির্দেশে ব্যাঙ্ক নমিনির বদলে সমস্ত ওয়ারিশদের অ্যাকাউন্টে অংশ অনুযায়ী টাকা প্রদান করবে।'
      ],
      hi: [
        'सरबती देवी फैसले का हवाला देकर बैंक एवं नॉमिनी को विधिक नोटिस दें कि नॉमिनी मात्र ट्रस्टी है।',
        'बैंक से पूरी राशि अकेले नॉमिनी को देने पर रोक लगाने हेतु अदालत से स्थगनादेश लें।',
        'धारा 372 के तहत उत्तराधिकार प्रमाणपत्र या संपत्ति बंटवारे का वाद दायर करें।',
        'अदालत के आदेश पर बैंक नॉमिनेशन की परवाह किए बिना सभी प्रथम श्रेणी वारिसों में पैसा बांटेगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-15-1',
        name: { en: 'Bank Account Passbook showing Nomination & Warishan Tree', bn: 'নমিনির বিবরণযুক্ত পাসবুক ও ওয়ারিশান তালিকা', hi: 'नॉमिनी दर्ज पासबुक विवरण एवं वारिसान वंशावली' },
        issuing_authority: { en: 'Bank / Municipality', bn: 'ব্যাঙ্ক / পুরসভা', hi: 'बैंक / नगर पालिका' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-16',
    title: {
      en: 'Christian Intestate & Testamentary Succession',
      bn: 'খ্রিস্টান উত্তরাধিকার আইন ও সম্পত্তি বণ্টন ব্যবস্থা',
      hi: 'ईसाई उत्तराधिकार कानून एवं संपत्ति विभाजन व्यवस्था'
    },
    relevant_act: 'Sec 31–49, Indian Succession Act, 1925',
    summary: {
      en: 'Division of Christian intestate estates: surviving spouse inherits one-third share, remaining two-thirds divided equally among children.',
      bn: 'খ্রিস্টান উত্তরাধিকার আইন: বিধবা স্ত্রী পাবেন সম্পত্তির এক-তৃতীয়াংশ এবং বাকি দুই-তৃতীয়াংশ সন্তানরা সমান ভাগে পাবে।',
      hi: 'ईसाई उत्तराधिकार में पत्नी को एक-तिहाई एवं शेष दो-तिहाई संपत्ति सभी संतानों में बराबर बंटती है।'
    },
    authority_forum: {
      en: 'Civil Court (Senior Division) / High Court',
      bn: 'দেওয়ানি আদালত / কলকাতা হাইকোর্ট',
      hi: 'सिविल न्यायालय / उच्च न्यायालय'
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
      en: ['christian inheritance law', 'section 33 indian succession act', 'christian widow share'],
      bn: ['খ্রিস্টান সম্পত্তি বণ্টন', 'খ্রিস্টান উত্তরাধিকার', 'ইন্ডিয়ান সাকসেশন ধারা ৩৩'],
      hi: ['ईसाई संपत्ति कानून', 'ईसाई उत्तराधिकार अधिनियम', 'ईसाई विधवा हिस्सा']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain certified death certificate of deceased and church baptismal family records.',
        'Prepare inventory of all movable and immovable estate properties situated in West Bengal.',
        'File Civil Suit for Partition or Letters of Administration under Section 278 ISA.',
        'Court confirms daughters and sons inherit equal shares under Section 37, drawing final decree.'
      ],
      bn: [
        'মৃত ব্যক্তির মৃত্যু সনদ এবং চার্চের বাপ্তিস্ম সনদের মাধ্যমে পারিবারিক সম্পর্ক প্রমাণ করুন।',
        'পশ্চিমবঙ্গে থাকা সমস্ত স্থাবর জমিজমা ও ব্যাঙ্ক জমার বিস্তারিত তালিকা তৈরি করুন।',
        'ধারা ২৭৮ অনুযায়ী দেওয়ানি আদালতে বাটোয়ারা অথবা লেটার্স অব অ্যাডমিনিস্ট্রেশনের মামলা করুন।',
        'আদালত ধারা ৩৭ অনুযায়ী পুত্র ও কন্যাদের মধ্যে সমান অংশ বণ্টন করে চূড়ান্ত ডিক্রি দেবে।'
      ],
      hi: [
        'मृत्यु प्रमाणपत्र एवं चर्च के बैपटिज्म रिकॉर्ड से पारिवारिक संबंध सिद्ध करें।',
        'पश्चिम बंगाल में स्थित समस्त अचल संपत्तियों एवं बैंक जमा की सूची बनाएं।',
        'धारा 278 के तहत दीवानी अदालत में बंटवारा अथवा लेटर्स ऑफ एडमिनिस्ट्रेशन दाखिल करें।',
        'अदालत धारा 37 के तहत बेटे और बेटियों को बराबर हिस्सा देते हुए अंतिम डिक्री जारी करेगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-16-1',
        name: { en: 'Church Baptismal / Family Marriage Register Certificate', bn: 'চার্চের পারিবারিক সার্টিফিকেট ও মৃত্যু সনদ', hi: 'चर्च बैपटिज्म प्रमाणपत्र एवं मृत्यु प्रमाणपत्र' },
        issuing_authority: { en: 'Church Authority / Municipality', bn: 'চার্চ কর্তৃপক্ষ / পুরসভা', hi: 'चर्च / नगर पालिका' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-17',
    title: {
      en: 'Parsi Intestate & Testamentary Succession Rights',
      bn: 'পারসি উত্তরাধিকার আইন ও বিশেষ উত্তরাধিকার বিধি',
      hi: 'पारसी उत्तराधिकार कानून एवं विशेष विभाजन नियम'
    },
    relevant_act: 'Sec 50–56, Indian Succession Act, 1925',
    summary: {
      en: 'Specific devolution rules for Parsi intestates ensuring equal co-sharing among surviving spouse, sons, and daughters.',
      bn: 'পারসি উত্তরাধিকার বিধিবদ্ধ নিয়ম অনুযায়ী বিধবা স্ত্রী, পুত্র ও কন্যাদের মধ্যে সম্পত্তির সমান বণ্টন।',
      hi: 'पारसी उत्तराधिकार कानून के तहत मृतक की पत्नी, पुत्र एवं पुत्री में समान संपत्ति विभाजन।'
    },
    authority_forum: {
      en: 'High Court at Calcutta (Original Civil Jurisdiction)',
      bn: 'কলকাতা হাইকোর্ট (অরিজিনাল সিভিল বেঞ্চ)',
      hi: 'कलकत्ता उच्च न्यायालय (मूल दीवानी क्षेत्राधिकार)'
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
      en: ['parsi succession act', 'section 51 parsi intestate', 'parsi high court kolkata'],
      bn: ['পারসি উত্তরাধিকার আইন', 'পারসি সম্পত্তি বণ্টন', 'কলকাতা হাইকোর্ট পারসি উইল'],
      hi: ['पारसी उत्तराधिकार कानून', 'पारसी संपत्ति बंटवारा', 'पारसी वसीयत']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Secure death certificate from KMC alongside Parsi Zoroastrian Anjuman enrollment certificate.',
        'File petition for Letters of Administration or Probate before High Court Original Side.',
        'Issue citations in English and vernacular newspapers notifying surviving Parsi heirs.',
        'Court partitions estate per Section 51, allotting equal shares to spouse, sons, and daughters.'
      ],
      bn: [
        'পুরসভা থেকে মৃত্যু সনদ এবং কলকাতা পারসি জোরোস্ট্রিয়ান আঞ্জুমান সদস্যতার সনদ সংগ্রহ করুন।',
        'কলকাতা হাইকোর্টের অরিজিনাল সাইডে প্রোবেট বা লেটার্স অব অ্যাডমিনিস্ট্রেশনের মামলা করুন।',
        'সংবাদপত্রে সাইটেশন প্রকাশ করে অন্যান্য পারসি আত্মীয়দের কাছে সরকারি নোটিশ পাঠান।',
        'আদালত ধারা ৫১ অনুযায়ী স্বামী/স্ত্রী, পুত্র ও কন্যার মধ্যে সমান ভাগে সম্পত্তি ভাগ করে দেবে।'
      ],
      hi: [
        'नगर निगम से मृत्यु प्रमाणपत्र एवं पारसी अंजुमन से सदस्यता प्रमाणपत्र प्राप्त करें।',
        'कलकत्ता हाईकोर्ट की मूल शाखा में प्रोबेट या लेटर्स ऑफ एडमिनिस्ट्रेशन की याचिका दें।',
        'समाचार पत्रों में नोटिस देकर सभी पारसी वारिसों को औपचारिक रूप से सूचित करें।',
        'अदालत धारा 51 के अनुसार पति/पत्नी, बेटे एवं बेटी में बराबर संपत्ति की डिक्री देगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-17-1',
        name: { en: 'Parsi Anjuman Enrollment Certificate & Death Certificate', bn: 'পারসি আঞ্জুমান শংসাপত্র ও মৃত্যু সনদ', hi: 'पारसी अंजुमन प्रमाणपत्र एवं मृत्यु प्रमाणपत्र' },
        issuing_authority: { en: 'Calcutta Parsi Zoroastrian Association', bn: 'পারসি সমিতি', hi: 'पारसी एसोसिएशन कोलकाता' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-18',
    title: {
      en: 'Living Will & Advance Medical Directive Enforcement',
      bn: 'লিভিং উইল ও জীবনের অন্তিম চিকিৎসা সংক্রান্ত নির্দেশিকা',
      hi: 'लिविंग विल (इच्छामृत्यु वसीयत) एवं अग्रिम चिकित्सा निर्देश'
    },
    relevant_act: 'Common Cause v. UOI (SC Constitutional Bench)',
    summary: {
      en: 'Creating, registering, and executing an Advance Medical Directive (Living Will) instructing withdrawal of life support in terminal illness.',
      bn: 'অসাড় বা নিরাময়হীন কোমায় গেলে লাইফ সাপোর্ট খুলে দেওয়ার জন্য রেজিস্ট্রি লিভিং উইল তৈরির পদ্ধতি।',
      hi: 'असाध्य बीमारी में वेंटिलेटर या लाइफ सपोर्ट हटाने हेतु सुप्रीम कोर्ट स्वीकृत लिविंग विल निष्पादन।'
    },
    authority_forum: {
      en: 'Judicial Magistrate First Class (JMFC) / Medical Board',
      bn: 'জুডিশিয়াল ম্যাজিস্ট্রেট প্রথম শ্রেণি / মেডিক্যাল বোর্ড',
      hi: 'न्यायिक दंडाधिकारी प्रथम श्रेणी / मेडिकल बोर्ड'
    },
    forum_type: 'Magistrate_Court',
    is_complex: false,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: 'Immediate execution during terminal medical emergencies',
      bn: 'জরুরি পরিস্থিতিতে তাৎক্ষণিক কার্যকরীকরণ',
      hi: 'आपातकालीन चिकित्सा में त्वरित अनुपालन'
    },
    search_keywords: {
      en: ['living will registration', 'advance medical directive india', 'passive euthanasia supreme court'],
      bn: ['লিভিং উইল', 'প্যাসিভ ইউথানেশিয়া', 'মেডিক্যাল ডিরেক্টিভ'],
      hi: ['लिविंग विल पंजीकरण', 'अग्रिम चिकित्सा निर्देश', 'सुप्रीम कोर्ट लिविंग विल']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Draft Living Will specifying medical instructions in presence of two independent witnesses.',
        'Execute directive before Judicial Magistrate First Class (JMFC) who countersigns document.',
        'JMFC records copy in digital repository and forwards copy to Chief Medical Officer (CMOH).',
        'In terminal coma, hospital Primary and Secondary Medical Boards inspect directive to execute.'
      ],
      bn: [
        'দুজন নিরপেক্ষ সাক্ষীর সামনে অন্তিম চিকিৎসার স্পষ্ট নির্দেশ লিখে লিভিং উইল প্রস্তুত করুন।',
        'প্রথম শ্রেণির জুডিশিয়াল ম্যাজিস্ট্রেটের (JMFC) এজলাসে গিয়ে উইলটি সই ও রেজিস্ট্রি করান।',
        'ম্যাজিস্ট্রেট রেকর্ডে কপি রাখবেন এবং জেলা মুখ্য স্বাস্থ্য আধিকারিককে (CMOH) কপি পাঠাবেন।',
        'হাসপাতালে কোমায় গেলে দুটি স্বাধীন মেডিক্যাল বোর্ড উইলের সত্যতা যাচাই করে সিদ্ধান্ত নেবে।'
      ],
      hi: [
        'दो स्वतंत्र गवाहों की उपस्थिति में स्पष्ट चिकित्सा निर्देशों वाली लिविंग विल तैयार करें।',
        'प्रथम श्रेणी न्यायिक मजिस्ट्रेट (JMFC) के समक्ष उपस्थित होकर दस्तावेज पर प्रतिहस्ताक्षर कराएं।',
        'मजिस्ट्रेट डिजिटल रिकॉर्ड में प्रति सुरक्षित रखेंगे एवं मुख्य चिकित्सा अधिकारी को भेजेंगे।',
        'कोमा की स्थिति में अस्पताल का प्राइमरी एवं सेकेंडरी मेडिकल बोर्ड विल देखकर निर्णय लेगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-18-1',
        name: { en: 'JMFC Authenticated Living Will Document', bn: 'জুডিশিয়াল ম্যাজিস্ট্রেট কর্তৃক প্রত্যয়িত লিভিং উইল', hi: 'मजिस्ट्रेट द्वारा प्रमाणित लिविंग विल विलेख' },
        issuing_authority: { en: 'Court of Judicial Magistrate First Class (JMFC)', bn: 'জুডিশিয়াল ম্যাজিস্ট্রেট আদালত', hi: 'न्यायिक मजिस्ट्रेट कोर्ट' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-19',
    title: {
      en: 'Substitution of Legal Heirs on Death of Co-Sharer in Partition',
      bn: 'বাটোয়ারা মামলায় অংশীদারের মৃত্যু ও ওয়ারিশান অন্তর্ভুক্তি',
      hi: 'बंटवारा वाद में हिस्सेदार की मृत्यु उपरांत वारिसों का प्रतिस्थापन (Substitution)'
    },
    relevant_act: 'Order XXII Rules 3 & 4, Code of Civil Procedure, 1908',
    summary: {
      en: 'Bringing surviving legal heirs on court record within 90 days when a co-sharer dies during a pending partition suit.',
      bn: 'বাটোয়ারা মামলা চলাকালীন কোনো শরিক মারা গেলে ৯০ দিনের মধ্যে তার ওয়ারিশদের মামলায় পক্ষভুক্ত করার নিয়ম।',
      hi: 'बंटवारा मुकदमा चलने के दौरान किसी हिस्सेदार की मृत्यु होने पर 90 दिन में उसके वारिसों को केस में जोड़ना।'
    },
    authority_forum: {
      en: 'Civil Court hearing the active Partition Suit',
      bn: 'বাটোয়ারা মামলার বিচারক আদালত',
      hi: 'सिविल विचारण न्यायालय'
    },
    forum_type: 'Civil_Court',
    is_complex: false,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: 'Mandatory within 90 days of death',
      bn: 'মৃত্যুর ৯০ দিনের মধ্যে বাধ্যতামূলক',
      hi: 'मृत्यु के 90 दिन के भीतर अनिवार्य'
    },
    search_keywords: {
      en: ['substitution legal heirs cpc', 'order 22 rule 4 partition', 'abatement of partition suit'],
      bn: ['ওয়ারিশান অন্তর্ভুক্তি মামলা', 'অর্ডার ২২ সিপিসি', 'মামলা বাতিল রোধ'],
      hi: ['वारिस प्रतिस्थापन सीपीसी', 'आदेश 22 नियम 4', 'मुकदमा एबेटमेंट रोक']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain certified death certificate of deceased co-sharer from municipal authority.',
        'Prepare amended genealogical family tree (Warishan) listing all surviving Class-I legal heirs.',
        'File application under Order XXII Rule 3 (plaintiff) or Rule 4 (defendant) CPC within 90 days.',
        'If delayed past 90 days, file Section 5 Limitation Act petition to set aside suit abatement.'
      ],
      bn: [
        'মৃত শরিকের পুরসভা বা পঞ্চায়েত কর্তৃক প্রদত্ত অফিশিয়াল মৃত্যু সনদ সংগ্রহ করুন।',
        'সমস্ত জীবিত প্রথম শ্রেণির ওয়ারিশদের তালিকা তৈরি করে সংশোধিত বংশলতিকা বানান।',
        'মৃত্যুর ৯০ দিনের মধ্যে অর্ডার ২২ রুল ৩ বা ৪ সিপিসি অনুযায়ী আদালতে আবেদন পেশ করুন।',
        '৯০ দিন পেরিয়ে গেলে তামাদি আইনের ধারা ৫ অনুযায়ী বিলম্ব মার্জনা ও মামলা পুনরুজ্জীবনের আবেদন দিন।'
      ],
      hi: [
        'नगरपालिका अथवा पंचायत से मृतक हिस्सेदार का मृत्यु प्रमाणपत्र प्राप्त करें।',
        'सभी जीवित प्रथम श्रेणी वारिसों की सूची बनाकर संशोधित वंशावली तैयार करें।',
        'मृत्यु के 90 दिनों के भीतर आदेश 22 नियम 3 अथवा 4 सीपीसी में प्रतिस्थापन आवेदन दें।',
        '90 दिन बीत जाने पर धारा 5 मियाद अधिनियम के तहत मुकदमा समाप्त (Abate) होने से बचाएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-19-1',
        name: { en: 'Death Certificate of Deceased Party & Legal Heir Affidavit', bn: 'মৃত্যু সনদ ও ওয়ারিশান হলফনামা', hi: 'मृत्यु प्रमाणपत्र एवं वैध वारिसान शपथ पत्र' },
        issuing_authority: { en: 'Registrar of Births & Deaths / Notary', bn: 'পুরসভা / নোটারি', hi: 'नगर पालिका / नोटरी' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-20',
    title: {
      en: 'Rights of Adopted Child in Ancestral vs Self-Acquired Property',
      bn: 'দত্তক সন্তানের পৈতৃক ও স্ব-অর্জিত সম্পত্তিতে অংশীদারিত্ব',
      hi: 'दत्तक (गोद लिए) बच्चे का पैतृक एवं स्वअर्जित संपत्ति में अधिकार'
    },
    relevant_act: 'Sec 12, Hindu Adoptions & Maintenance Act, 1956 (HAMA)',
    summary: {
      en: 'Legally adopted children hold identical coparcenary inheritance rights to biological children in adoptive ancestral estate.',
      bn: 'আইনসম্মতভাবে দত্তক নেওয়া সন্তান তার নতুন পরিবারের পৈতৃক সম্পত্তিতে আপন সন্তানের সমান অধিকার পায়।',
      hi: 'कानूनी रूप से गोद लिए बच्चे को नए परिवार की पैतृक संपत्ति में सगे बेटे-बेटी के बिल्कुल बराबर हक।'
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
      en: ['adopted child ancestral property', 'section 12 hama adoption share', 'adopted son daughter rights'],
      bn: ['দত্তক সন্তানের অধিকার', 'দত্তক জমি বাটোয়ারা', 'ধারা ১২ হামা অ্যাক্ট'],
      hi: ['गोद लिए बच्चे का संपत्ति अधिकार', 'धारा 12 हामा कानून', 'दत्तक संतान पैतृक हक']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Produce registered Deed of Adoption executed in compliance with Section 16 HAMA.',
        'If biological siblings exclude adopted child, serve statutory legal notice asserting rights.',
        'File Civil Suit for Partition claiming equal coparcenary share alongside biological children.',
        'Court passes preliminary decree confirming adopted child holds identical inheritance status.'
      ],
      bn: [
        'হামা আইনের ধারা ১৬ অনুযায়ী রেজিস্ট্রি করা দত্তক গ্রহণের মূল দলিল আদালতে পেশ করুন।',
        'অন্যান্য ভাই-বোন অংশ দিতে না চাইলে সমান অধিকার দাবি করে আইনজীবীর মাধ্যমে নোটিশ দিন।',
        'দেওয়ানি আদালতে বাটোয়ারা মামলা করে আপন সন্তানদের মতো সমান অংশের দাবি জানান।',
        'আদালত রায় দেবে যে দত্তক সন্তান আইনবলে আপন সন্তানের সমমর্যাদাসম্পন্ন উত্তরাধিকারী।'
      ],
      hi: [
        'धारा 16 हामा के अनुसार पंजीकृत गोदनामा (Adoption Deed) अदालत में प्रस्तुत करें।',
        'अन्य संतानों द्वारा हिस्सा न देने पर अधिवक्ता के माध्यम से विधिक मांग पत्र भेजें।',
        'सिविल जज के समक्ष सगे बच्चों के समान हिस्सेदारी हेतु बंटवारा वाद दाखिल करें।',
        'अदालत फैसला देगी कि गोद लिया बच्चा कानूनन सगे बच्चों के बराबर पैतृक हिस्सेदार है।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-20-1',
        name: { en: 'Registered Deed of Adoption', bn: 'রেজিস্ট্রি দত্তকপত্র দলিল', hi: 'पंजीकृत गोदनामा विलेख' },
        issuing_authority: { en: 'Sub-Registrar Office (ADSR)', bn: 'সাব-রেজিস্ট্রার অফিস', hi: 'उप-पंजीयक कार्यालय' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-21',
    title: {
      en: 'Inheritance Rights of Stepmother & Stepchildren',
      bn: 'সৎ মা ও সৎ সন্তানদের সম্পত্তির অধিকারের আইনি অবস্থান',
      hi: 'सौतेली मां एवं सौतेले बच्चों के संपत्ति अधिकार'
    },
    relevant_act: 'Hindu Succession Act, 1956 r/w General Succession',
    summary: {
      en: 'Stepchildren inherit exclusively from biological parents; stepmother inherits solely as widow of deceased father.',
      bn: 'সৎ সন্তানরা কেবল আপন পিতা-মাতার সম্পত্তি পায়; সৎ মায়ের সম্পত্তিতে সৎ সন্তানদের কোনো আইনি অধিকার নেই।',
      hi: 'सौतेले बच्चे केवल अपने जैविक माता-पिता की संपत्ति पाते हैं; सौतेली मां की निजी संपत्ति पर उनका हक नहीं होता।'
    },
    authority_forum: {
      en: 'Civil Court',
      bn: 'দেওয়ানি আদালত',
      hi: 'सिविल न्यायालय'
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
      en: ['stepmother inheritance rights', 'stepchildren property share', 'stepson ancestral property'],
      bn: ['সৎ মায়ের সম্পত্তি', 'সৎ সন্তানের অধিকার', 'সৎ ভাই বাটোয়ারা'],
      hi: ['सौतेली मां का हिस्सा', 'सौतेले बच्चों का अधिकार', 'सौतेला भाई बंटवारा']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Establish legal marital status of stepmother with deceased father through marriage records.',
        'Exclude stepchildren from claims over stepmother’s individual self-acquired property.',
        'If stepbrothers attempt total exclusion from father’s estate, file Partition Plaint.',
        'Court draws preliminary decree allotting shares strictly per statutory biological devolution.'
      ],
      bn: [
        'রেজিস্ট্রি ম্যারেজ সার্টিফিকেট দিয়ে পিতার সাথে সৎ মায়ের বৈধ বৈবাহিক সম্পর্ক প্রমাণ করুন।',
        'আইন অনুযায়ী সৎ মায়ের ব্যক্তিগত সম্পত্তিতে সৎ সন্তানদের দাবি বাতিল করুন।',
        'পিতার সম্পত্তিতে সৎ ভাইয়েরা বঞ্চিত করতে চাইলে আদালতে পূর্ণ বাটোয়ারা মামলা করুন।',
        'আদালত আইনসম্মতভাবে পিতার সম্পত্তি সকল জৈবিক সন্তান ও বিধবার মধ্যে বণ্টন করবে।'
      ],
      hi: [
        'विवाह प्रमाणपत्र द्वारा मृतक पिता के साथ सौतेली मां के वैध विवाह को सिद्ध करें।',
        'सौतेली मां की निजी कमाई की संपत्ति से सौतेले बच्चों के दावों को खारिज कराएं।',
        'पिता की संपत्ति से सौतेले भाई बेदखल करें तो अदालत में बंटवारा वाद दायर करें।',
        'अदालत कानून के अनुसार पिता की संपत्ति सभी सगे बच्चों एवं विधवा में बांटेगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-21-1',
        name: { en: 'Biological Paternity Records & Father Death Certificate', bn: 'জৈবিক পিতার প্রমাণ ও মৃত্যু সনদ', hi: 'जैविक पिता प्रमाणपत्र एवं मृत्यु प्रमाणपत्र' },
        issuing_authority: { en: 'Registrar of Births & Deaths', bn: 'পুরসভা', hi: 'नगर पालिका' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-22',
    title: {
      en: 'Setting Aside Gift Deeds Procured by Coercion or Fraud',
      bn: 'প্রতারণা ও ভয় দেখিয়ে লিখিয়ে নেওয়া হেবা বা দানপত্র বাতিল',
      hi: 'धोखे, दबाव या अनुचित प्रभाव से कराई गई गिफ्ट डीड रद्द कराना'
    },
    relevant_act: 'Sec 19 Contract Act r/w Sec 31, Specific Relief Act, 1963',
    summary: {
      en: 'Cancelling registered gift deeds (Danpatra/Hiba) executed by elderly or ailing parents under intimidation or deceit.',
      bn: 'বৃদ্ধ বা অসুস্থ ব্যক্তির দুর্বলতার সুযোগ নিয়ে চাপ সৃষ্টি করে লিখিয়ে নেওয়া দানপত্র বাতিলের মামলা।',
      hi: 'बीमार या असहाय बुजुर्ग से धोखे या डरा-धमकाकर कराई गई रजिस्ट्री को अदालत से शून्य घोषित कराना।'
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
      en: 'Within 3 years of discovering the fraud',
      bn: 'প্রতারণা জানার ৩ বছরের মধ্যে',
      hi: 'धोखाधड़ी की जानकारी के 3 वर्ष में'
    },
    search_keywords: {
      en: ['cancel fraudulent gift deed', 'coercion gift deed section 31', 'undue influence danpatra'],
      bn: ['দানপত্র বাতিল মামলা', 'প্রতারণামূলক গিফট ডিড', 'ভয় দেখিয়ে জমি দান'],
      hi: ['गिफ्ट डीड निरस्तीकरण वाद', 'दबाव में दान विलेख', 'धोखाधड़ी रजिस्ट्री रद्द']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Apply for certified copies of challenged gift deed from Sub-Registrar Office (ADSR).',
        'Collect hospital records proving donor suffered cognitive impairment or was bedridden.',
        'File Suit for Cancellation of Instrument under Section 31 SRA, praying deed be declared void.',
        'Secure interim injunction restraining recipient relative from selling or mortgaging land.'
      ],
      bn: [
        'সাব-রেজিস্ট্রি অফিস থেকে প্রতারণামূলক দানপত্র দলিলের সার্টিফাইড কপি সংগ্রহ করুন।',
        'হাসপাতালের প্রেসক্রিপশন দিয়ে প্রমাণ করুন দাতা মানসিক ভারসাম্যহীন বা শয্যাশায়ী ছিলেন।',
        'স্পেসিফিক রিলিফ অ্যাক্টের ধারা ৩১ অনুযায়ী দেওয়ানি আদালতে দলিল বাতিলের মামলা করুন।',
        'মামলা চলাকালীন জমি বিক্রি বা লোন নেওয়া আটকাতে আদালতের ইনজাংশন জারি করান।'
      ],
      hi: [
        'रजिस्ट्री कार्यालय से विवादित गिफ्ट डीड की प्रमाणित प्रति प्राप्त करें।',
        'अस्पताल के पर्चों से सिद्ध करें कि बुजुर्ग मानसिक रूप से असमर्थ या बिस्तर पर थे।',
        'विशिष्ट अनुतोष अधिनियम की धारा 31 में विलेख को अमान्य घोषित कराने का वाद करें।',
        'मुकदमे के दौरान जमीन को बेचने या गिरवी रखने से रोकने हेतु स्थगनादेश प्राप्त करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-22-1',
        name: { en: 'Medical Disability Records of Donor on Date of Execution', bn: 'দানের তারিখের চিকিৎসাজনিত অক্ষমতার প্রমাণ', hi: 'गिफ्ट की तारीख पर दाता की मेडिकल रिपोर्ट' },
        issuing_authority: { en: 'Government Hospital / Doctor', bn: 'হাসপাতাল', hi: 'अस्पताल' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-23',
    title: {
      en: 'Inheritance Rights in Inter-Faith Civil Marriages',
      bn: 'স্পেশাল ম্যারেজ অ্যাক্টে ভিন্ন ধর্মের বিবাহে সম্পত্তির অধিকার',
      hi: 'स्पेशल मैरिज एक्ट (अंतरधार्मिक विवाह) में पैतृक संपत्ति अधिकार'
    },
    relevant_act: 'Sec 21 & 21A, Special Marriage Act, 1954 (SMA) r/w ISA',
    summary: {
      en: 'Applying the secular Indian Succession Act to govern estate devolution for persons marrying under the Special Marriage Act.',
      bn: 'স্পেশাল ম্যারেজ অ্যাক্টে ভিন্ন ধর্মের বিয়ে হলে ধর্মীয় ব্যক্তিগত আইনের বদলে ভারতীয় উত্তরাধিকার আইন কার্যকর হয়।',
      hi: 'विशेष विवाह अधिनियम में विवाह करने पर धार्मिक कानूनों के बजाय धर्मनिरपेक्ष भारतीय उत्तराधिकार कानून लागू होना।'
    },
    authority_forum: {
      en: 'Civil Court / District Judge',
      bn: 'দেওয়ানি আদালত / জেলা জজ আদালত',
      hi: 'सिविल न्यायालय / जिला जज'
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
      en: ['special marriage act succession', 'section 21 sma inheritance', 'interfaith marriage property rights'],
      bn: ['স্পেশাল ম্যারেজ উত্তরাধিকার', 'ভিন্ন ধর্মে বিয়ে জমি অধিকার', 'ধারা ২১ এসএমএ'],
      hi: ['अंतरधार्मिक विवाह संपत्ति अधिकार', 'धारा 21 स्पेशल मैरिज एक्ट', 'धर्मनिरपेक्ष उत्तराधिकार']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Produce registered Special Marriage Certificate issued by District Marriage Officer.',
        'Verify Section 21 SMA applies: personal religious laws are superseded by Indian Succession Act.',
        'File petition for Letters of Administration or Partition under Indian Succession Act, 1925.',
        'Court partitions estate ensuring secular distribution among spouse and children.'
      ],
      bn: [
        'জেলা বিবাহ নিবন্ধক কর্তৃক প্রদত্ত স্পেশাল ম্যারেজ রেজিস্ট্রেশন সার্টিফিকেট পেশ করুন।',
        'নিশ্চিত করুন ধারা ২১ প্রযোজ্য: ধর্মীয় ব্যক্তিগত আইনের বদলে ইন্ডিয়ান সাকসেশন কার্যকর হবে।',
        'ইন্ডিয়ান সাকসেশন অ্যাক্ট ১৯২৫ অনুযায়ী আদালতে বণ্টন বা লেটার্স অব অ্যাডমিনিস্ট্রেশনের মামলা করুন।',
        'আদালত ধর্মীয় বাধার বাইরে গিয়ে ধর্মনিরপেক্ষ আইনে স্ত্রী ও সন্তানদের সমান অধিকার দেবে।'
      ],
      hi: [
        'विवाह अधिकारी द्वारा जारी स्पेशल मैरिज रजिस्ट्रेशन प्रमाणपत्र प्रस्तुत करें।',
        'जांचें कि धारा 21 के तहत धार्मिक पर्सनल लॉ समाप्त होकर भारतीय उत्तराधिकार कानून लागू होगा।',
        'भारतीय उत्तराधिकार अधिनियम 1925 के तहत अदालत में संपत्ति बंटवारे का वाद करें।',
        'अदालत धार्मिक भेदभाव को खारिज कर पति/पत्नी एवं बच्चों में धर्मनिरपेक्ष रूप से संपत्ति बांटेगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-23-1',
        name: { en: 'Special Marriage Registration Certificate', bn: 'স্পেশাল ম্যারেজ রেজিস্ট্রেশন সার্টিফিকেট', hi: 'विशेष विवाह अधिनियम पंजीकरण प्रमाणपत्र' },
        issuing_authority: { en: 'District Marriage Officer', bn: 'বিবাহ নিবন্ধক', hi: 'विवाह पंजीयक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-24',
    title: {
      en: 'Cancellation of Deceptively Obtained Relinquishment Deed',
      bn: 'হক-ত্যাগ বা রিলিংকুইশমেন্ট ডিড প্রতারণামূলক হলে বাতিল মামলা',
      hi: 'धोखे से कराए गए हक-त्याग विलेख (रिलिंक्विशमेंट डीड) का निरस्तीकरण'
    },
    relevant_act: 'Sec 31, Specific Relief Act, 1963 r/w Registration Act',
    summary: {
      en: 'Setting aside registered release deeds where female heirs were deceived into signing away inheritance without consideration.',
      bn: 'পেনশন বা অন্য দলিলের কথা বলে বোকা বানিয়ে বোনেদের সই করিয়ে নেওয়া হক-ত্যাগ দলিল বাতিলের মামলা।',
      hi: 'पेंशन या अन्य कागजात बताकर बहनों से धोखे से लिखवाई गई हक-त्याग डीड को अदालत से रद्द कराना।'
    },
    authority_forum: {
      en: 'Civil Court (Junior / Senior Division)',
      bn: 'দেওয়ানি আদালত (সিভিল জজ)',
      hi: 'सिविल न्यायालय (सीनियर/जूनियर डिवीजन)'
    },
    forum_type: 'Civil_Court',
    is_complex: true,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: 'Within 3 years of discovering the fraud',
      bn: 'প্রতারণা জানার ৩ বছরের মধ্যে',
      hi: 'धोखाधड़ी की जानकारी के 3 वर्ष में'
    },
    search_keywords: {
      en: ['cancel relinquishment deed', 'sister haq tyag fraud', 'relinquishment without consideration'],
      bn: ['হক ত্যাগ দলিল বাতিল', 'বোনের জমি ফাঁকি', 'রিলিংকুইশমেন্ট ডিড প্রতারণা'],
      hi: ['हक त्याग विलेख रद्द', 'रिलिंक्विशमेंट डीड धोखाधड़ी', 'बहनों का हक त्याग निरस्त']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain certified copy of registered Relinquishment Deed from ADSR registry archives.',
        'Prove deed lacked valid consideration and signature was obtained through misrepresentation.',
        'File Civil Suit for Declaration that Relinquishment Deed is null and void.',
        'Move for injunction restraining brothers from mutating land exclusively in Banglarbhumi or KMC.'
      ],
      bn: [
        'সাব-রেজিস্ট্রি অফিস থেকে রেজিস্ট্রি হক-ত্যাগ দলিলের সার্টিফাইড কপি সংগ্রহ করুন।',
        'আদালতে প্রমাণ করুন দলিলের কোনো আর্থিক মূল্য দেওয়া হয়নি এবং ভুল বুঝিয়ে সই নেওয়া হয়েছে।',
        'স্পেসিফিক রিলিফ অ্যাক্টের ধারা ৩১ অনুযায়ী দলিলটি বাতিল ঘোষণার দেওয়ানি মামলা করুন।',
        'বাংলারভূমি বা পুরসভায় ভাইদের নামে একতরফা মিউটেশন আটকাতে আদালতে জরুরি ইনজাংশন নিন।'
      ],
      hi: [
        'रजिस्ट्री कार्यालय से पंजीकृत हक-त्याग विलेख (Relinquishment Deed) की नकल लें।',
        'सिद्ध करें कि बिना किसी प्रतिफल (पैसा) के धोखे से दस्तखत कराए गए थे।',
        'विशिष्ट अनुतोष अधिनियम की धारा 31 में विलेख को शून्य घोषित कराने का वाद करें।',
        'बांगलारभूमि अथवा निगम में भाइयों द्वारा अपने नाम एकतरफा म्यूटेशन कराने पर रोक लगवाएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-24-1',
        name: { en: 'Certified Copy of Challenged Relinquishment Deed', bn: 'বিতর্কিত রিলিংকুইশমেন্ট দলিলের কপি', hi: 'विवादित हक-त्याग विलेख की प्रमाणित प्रति' },
        issuing_authority: { en: 'Sub-Registrar Office (ADSR)', bn: 'সাব-রেজিস্ট্রার অফিস', hi: 'उप-पंजीयक कार्यालय' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-partition-25',
    title: {
      en: 'Disinheriting Natural Heirs: Inofficious Will Claims',
      bn: 'স্বাভাবিক উত্তরাধিকারীদের বঞ্চিত করে তৈরি সন্দেহজনক উইল চ্যালেঞ্জ',
      hi: 'स्वाभाविक वारिसों को बेदखल कर बनाई गई संदेहास्पद वसीयत को चुनौती'
    },
    relevant_act: 'Sec 61, Indian Succession Act, 1925',
    summary: {
      en: 'Challenging unnatural wills that completely disinherit dependent legal heirs (wife, minor children) and gift entire estates to outside strangers.',
      bn: 'স্ত্রী ও নাবালক সন্তানদের সম্পূর্ণ বঞ্চিত করে কোনো বহিরাগতকে সম্পত্তি লিখে দেওয়া অস্বাভাবিক উইল বাতিল।',
      hi: 'पत्नी एवं बच्चों को दरकिनार कर किसी बाहरी अजनबी को पूरी संपत्ति देने वाली वसीयत को चुनौती देना।'
    },
    authority_forum: {
      en: 'Probate Court / District Judge / High Court',
      bn: 'প্রোবেট আদালত / জেলা জজ আদালত / হাইকোর্ট',
      hi: 'प्रोबेट न्यायालय / जिला जज / हाईकोर्ट'
    },
    forum_type: 'High_Court',
    is_complex: true,
    official_portal_url: 'https://calcuttahighcourt.gov.in/',
    statutory_timeframe: {
      en: 'Raised in probate caveat (Within 30 days of service)',
      bn: 'নোটিশের ৩০ দিনের মধ্যে কেভিয়েট দায়ের',
      hi: 'नोटिस के 30 दिन में कैविएट दाखिल'
    },
    search_keywords: {
      en: ['inofficious will challenge', 'disinheriting wife child will', 'unnatural disposition will'],
      bn: ['স্ত্রী সন্তান বঞ্চিত উইল', 'অস্বাভাবিক উইল চ্যালেঞ্জ', 'ইচ্ছাপত্র বাতিল'],
      hi: ['अस्वाभाविक वसीयत चुनौती', 'पत्नी-बच्चों को बेदखल वसीयत', 'संदेहास्पद प्रोबेट']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'File formal Caveat under Section 284 ISA in probate court upon learning of probate petition.',
        'Submit Affidavit in Support of Caveat raising unnatural disposition without explanation in Will.',
        'Challenge mental capacity of testator and examine propounder regarding suspicious beneficiary role.',
        'Court converts probate into Contentious Civil Suit, requiring strict proof of testamentary capacity.'
      ],
      bn: [
        'প্রোবেট মামলার নোটিশ পাওয়া মাত্রই ধারা ২৮৪ অনুযায়ী আদালতে কেভিয়েট দাখিল করুন।',
        'উইলে স্ত্রী-সন্তানকে কেন বঞ্চিত করা হলো তার কোনো যুক্তিসঙ্গত ব্যাখ্যা নেই বলে আপত্তি দিন।',
        'টেস্টেটরের মানসিক সুস্থতা চ্যালেঞ্জ করুন এবং বহিরাগত সুবিধাভোগীর ভূমিকা ফাঁস করুন।',
        'আদালত মামলাটিকে সাধারণ দেওয়ানি মামলায় রূপান্তর করে ইচ্ছাপত্রটির সত্যতা পরীক্ষা করবে।'
      ],
      hi: [
        'प्रोबेट याचिका की सूचना मिलते ही धारा 284 में अदालत में तुरंत कैविएट दाखिल करें।',
        'शपथ पत्र देकर आपत्ति जताएं कि बिना कारण आश्रित पत्नी व बच्चों को बेदखल किया गया है।',
        'वसीयतकर्ता की मानसिक क्षमता पर सवाल उठाएं और अजनबी लाभार्थी की भूमिका उजागर करें।',
        'अदालत प्रोबेट को नियमित दीवानी मुकदमे में बदलकर वसीयत के औचित्य की कड़ी जांच करेगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-partition-25-1',
        name: { en: 'Probate Citation & Affidavit in Support of Caveat', bn: 'প্রোবেট সাইটেশন ও কেভিয়েটের হলফনামা', hi: 'प्रोबेट समन एवं कैविएट समर्थन शपथ पत्र' },
        issuing_authority: { en: 'District Judge Court / High Court', bn: 'জেলা জজ আদালত / হাইকোর্ট', hi: 'जिला जज कोर्ट / हाईकोर्ट' },
        is_mandatory: true
      }
    ]
  }
];