import type { CivilSubCategory } from '../../../types/legal';

export const landPart1: CivilSubCategory[] = [
  {
    id: 'sub-land-01',
    title: {
      en: 'Land Mutation & Title Entry (Banglarbhumi vs KMC)',
      bn: 'অনলাইন জমি মিউটেশন (বাংলারভূমি বনাম KMC পুরসভা)',
      hi: 'ऑनलाइन भूमि नामांतरण (बांगलारभूमि बनाम कोलकाता नगर निगम)'
    },
    relevant_act: 'Sec 50 WBLR Act, 1955 (Districts) / Sec 183 KMC Act, 1980 (Kolkata)',
    summary: {
      en: 'District & rural land mutations are processed via Banglarbhumi (BL&LRO), whereas Kolkata properties are mutated via KMC Assessment-Collection Department for Assessee Numbers.',
      bn: 'দ্বৈত মিউটেশন পদ্ধতি: গ্রামীণ ও জেলায় বিএলঅ্যান্ডএলআরও মারফত খতিয়ান মিউটেশন; কলকাতা পুর এলাকায় কেএমসি কর অ্যাসেসি নম্বর প্রাপ্তি।',
      hi: 'द्विपक्षीय नामांतरण: जिलों में बीएल एंड एलआरओ द्वारा खतियान म्यूटेशन; कोलकाता क्षेत्र में केएमसी द्वारा कर असेसी नंबर आवंटन।'
    },
    authority_forum: {
      en: 'BL&LRO (Districts) / KMC Assessment Dept (Kolkata)',
      bn: 'বিএলঅ্যান্ডএলআরও (জেলা) / কেএমসি মূল্যায়ন দপ্তর (কলকাতা)',
      hi: 'बीएल एंड एलआरओ (जिले) / केएमसी कर विभाग (कोलकाता)'
    },
    forum_type: 'BL_LRO',
    is_complex: false,
    official_portal_url: 'https://banglarbhumi.gov.in/',
    statutory_timeframe: {
      en: '30 to 45 working days',
      bn: '৩০ থেকে ৪৫ কার্যদিবস',
      hi: '30 से 45 कार्यदिवस'
    },
    search_keywords: {
      en: ['land mutation', 'banglarbhumi', 'kmc mutation online', 'assessee number kolkata'],
      bn: ['জমি মিউটেশন', 'বাংলারভূমি', 'কেএমসি মিউটেশন', 'অ্যাসেসি নম্বর'],
      hi: ['जमीन म्यूटेशन', 'बांगलारभूमि', 'केएमसी दाखिल खारिज', 'कोलकाता नगर निगम म्यूटेशन']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'Block Land & Land Reforms Officer (BL&LRO) / Regional Corps (BMC/HMC)',
          bn: 'ব্লক ভূমি ও ভূমি সংস্কার আধিকারিক (BL&LRO) / পুরনিগম (BMC/HMC)',
          hi: 'प्रखंड भूमि एवं भूमि सुधार अधिकारी / नगर निगम (BMC/HMC)'
        },
        portal_name: { en: 'Banglarbhumi Portal', bn: 'বাংলারভূমি পোর্টাল', hi: 'बांगलारभूमि पोर्टल' },
        portal_url: 'https://banglarbhumi.gov.in/',
        steps: {
          en: [
            'Submit Form 13 online on Banglarbhumi portal with registered deed and Khajna receipt.',
            'Pay mutation fee online via the GRIPS treasury payment gateway.',
            'Attend hearing before Revenue Officer at BL&LRO with original deeds and chain papers.',
            'Download digitally signed Record of Rights (Khatian Porcha) from Banglarbhumi.'
          ],
          bn: [
            'বাংলারভূমি পোর্টালে ফর্ম ১৩ ও রেজিস্ট্রি দলিলের কপি অনলাইনে জমা দিন।',
            'GRIPS গেটওয়ে মারফত সরকারি মিউটেশন ফি পরিশোধ করুন।',
            'মূল দলিল ও খাজনা রশিদ নিয়ে বিএলঅ্যান্ডএলআরও শুনানিতে উপস্থিত থাকুন।',
            'অনুমোদিত ডিজিটাল খতিয়ান (পর্চা) পোর্টাল থেকে ডাউনলোড করুন।'
          ],
          hi: [
            'बांगलारभूमि पोर्टल पर फॉर्म 13 एवं पंजीकृत दस्तावेज ऑनलाइन जमा करें।',
            'GRIPS गेटवे के माध्यम से सरकारी म्यूटेशन शुल्क का भुगतान करें।',
            'मूल दस्तावेजों के साथ राजस्व अधिकारी की सुनवाई में उपस्थित हों।',
            'डिजिटल हस्ताक्षरित खतियान पर्चा ऑनलाइन डाउनलोड करें।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'Kolkata Municipal Corporation (Assessment & Collection Department)',
          bn: 'কলকাতা পৌরসংস্থা (মূল্যায়ন ও কর সংগ্রাহক বিভাগ - KMC)',
          hi: 'कोलकाता नगर निगम (मूल्यांकन एवं कर संग्रह विभाग)'
        },
        portal_name: { en: 'KMC Official Portal', bn: 'কেএমসি অফিশিয়াল পোর্টাল', hi: 'केएमसी आधिकारिक पोर्टल' },
        portal_url: 'https://www.kmcgov.in/',
        steps: {
          en: [
            'Apply online on KMC portal (Assessment-Collection) for mutation of Premises/Assessee No.',
            'Upload registered conveyance deed, prior property tax clearance receipt, and Form M-42.',
            'Chief Valuer/Assessor verifies ownership and inspects premises for tax re-valuation.',
            'Pay prescribed KMC mutation fee and download Certificate of Mutation & Assessee Card.'
          ],
          bn: [
            'কেএমসি পোর্টালে গিয়ে অ্যাসেসমেন্ট অ্যান্ড কালেকশন বিভাগে মিউটেশন আবেদন করুন।',
            'রেজিস্ট্রি বিক্রয় দলিল, পূর্ববর্তী পুর কর পরিশোধের রসিদ ও ফর্ম আপলোড করুন।',
            'কেএমসি পরিদর্শক সরেজমিনে ফ্ল্যাট/বাড়ি পরিদর্শন করে কর পুনর্মূল্যায়ন করবেন।',
            'অনলাইনে নির্ধারিত মিউটেশন ফি জমা দিয়ে অফিশিয়াল কেএমসি মিউটেশন সার্টিফিকেট ডাউনলোড করুন।'
          ],
          hi: [
            'केएमसी पोर्टल (Assessment-Collection) पर परिसर/असेसी नंबर म्यूटेशन हेतु आवेदन करें।',
            'पंजीकृत बिक्री विलेख, पूर्व संपत्ति कर चुकता रसीद एवं आवेदन फॉर्म अपलोड करें।',
            'केएमसी मुख्य मूल्यांकनकर्ता द्वारा स्थल निरीक्षण कर वार्षिक कर का पुनर्निर्धारण किया जाएगा।',
            'निर्धारित शुल्क भुगतान कर डिजिटल केएमसी म्यूटेशन प्रमाणपत्र एवं असेसी कार्ड प्राप्त करें।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Submit Form 13 online on Banglarbhumi with registered deed and Khajna receipt.',
        'Pay government mutation fees online via the GRIPS payment gateway.',
        'Attend physical hearing before Revenue Officer with original deeds.',
        'Download digitally signed Record of Rights (Khatian Porcha) online.'
      ],
      bn: [
        'বাংলারভূমি পোর্টালে ফর্ম ১৩ ও রেজিস্ট্রি দলিলের কপি অনলাইনে জমা দিন।',
        'GRIPS গেটওয়ে মারফত সরকারি মিউটেশন ফি পরিশোধ করুন।',
        'মূল দলিল ও খাজনা রশিদ নিয়ে রাজস্ব আধিকারিকের শুনানিতে উপস্থিত থাকুন।',
        'অনুমোদিত ডিজিটাল খতিয়ান (পর্চা) পোর্টাল থেকে ডাউনলোড করুন।'
      ],
      hi: [
        'बांगलारभूमि पोर्टल पर फॉर्म 13 एवं पंजीकृत दस्तावेज ऑनलाइन जमा करें।',
        'GRIPS गेटवे के माध्यम से सरकारी म्यूटेशन शुल्क का भुगतान करें।',
        'मूल दस्तावेजों के साथ राजस्व अधिकारी की सुनवाई में उपस्थित हों।',
        'डिजिटल हस्ताक्षरित खतियान पर्चा ऑनलाइन डाउनलोड करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-01-1',
        name: { en: 'Registered Sale Deed / Conveyance', bn: 'রেজিস্ট্রি বিক্রয় দলিল', hi: 'पंजीकृत बिक्री विलेख' },
        issuing_authority: { en: 'Sub-Registrar Office (ADSR)', bn: 'সাব-রেজিস্ট্রার অফিস (ADSR)', hi: 'उप-पंजीयक कार्यालय' },
        is_mandatory: true
      },
      {
        id: 'doc-land-01-2',
        name: { en: 'Up-to-date Khajna (Districts) or KMC Tax Receipt (Kolkata)', bn: 'হাল খাজনা দাখিলা (জেলা) বা KMC ট্যাক্স বিল (কলকাতা)', hi: 'अद्यतन लगान रसीद (जिले) अथवा केएमसी गृहकर बिल (कोलकाता)' },
        issuing_authority: { en: 'Revenue Inspector / KMC Treasury', bn: 'রাজস্ব পরিদর্শক / কেএমসি', hi: 'राजस्व निरीक्षक / नगर निगम' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-02',
    title: {
      en: 'Warishan Mutation & Inherited Share Entry',
      bn: 'ওয়ারিশান সূত্রে মিউটেশন ও অংশ বণ্টন',
      hi: 'वारिसान नामांतरण एवं पैतृक हिस्सा प्रविष्टि'
    },
    relevant_act: 'Sec 50 & 51A, WBLR Act (Districts) / Sec 183 KMC Act (Kolkata)',
    summary: {
      en: 'Mutate inherited ancestral land among surviving heirs: Gram Panchayat / BL&LRO for districts; KMC succession mutation for Kolkata metro.',
      bn: 'রেকর্ডভুক্ত মালিকের মৃত্যুর পর ওয়ারিশান সনদের ভিত্তিতে উত্তরাধিকারীদের নামে নামপত্তন (গ্রাম/জেলা বনাম কলকাতা পুরসভা)।',
      hi: 'मालिक की मृत्यु उपरांत वारिसान आधार पर नामांतरण (ग्रामीण/जिला बनाम कोलकाता नगर निगम)।'
    },
    authority_forum: {
      en: 'BL&LRO (Districts) / KMC Assessor-Collector (Kolkata)',
      bn: 'বিএলঅ্যান্ডএলআরও (জেলা) / কেএমসি এসেসর (কলকাতা)',
      hi: 'बीएल एंड एलआरओ (जिले) / केएमसी मूल्यांकनकर्ता (कोलकाता)'
    },
    forum_type: 'BL_LRO',
    is_complex: false,
    official_portal_url: 'https://banglarbhumi.gov.in/',
    statutory_timeframe: {
      en: '45 working days',
      bn: '৪৫ কার্যদিবস',
      hi: '45 कार्यदिवस'
    },
    search_keywords: {
      en: ['warishan mutation', 'legal heir land', 'kmc succession mutation'],
      bn: ['ওয়ারিশান মিউটেশন', 'উত্তরাধিকার জমি', 'কেএমসি উত্তরাধিকার'],
      hi: ['वारिसान म्यूटेशन', 'पैतृक जमीन', 'केएमसी उत्तराधिकार']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'BL&LRO & Gram Panchayat / Regional Municipality (BMC/HMC)',
          bn: 'বিএলঅ্যান্ডএলআরও ও গ্রাম পঞ্চায়েত / পৌরসভা (BMC/HMC)',
          hi: 'बीएल एंड एलआरओ एवं ग्राम पंचायत / नगर पालिका (BMC/HMC)'
        },
        portal_name: { en: 'Banglarbhumi Warishan Section', bn: 'বাংলারভূমি ওয়ারিশান বিভাগ', hi: 'बांगलारभूमि वारिसान' },
        portal_url: 'https://banglarbhumi.gov.in/',
        steps: {
          en: [
            'Obtain formal Warishan Certificate from local Panchayat Pradhan or Municipality Chairman.',
            'Submit online Warishan mutation application on Banglarbhumi uploading death certificate.',
            'Attend hearing at BL&LRO; Revenue Officer apportions ancestral Dag/Khatian shares.',
            'Download corrected Record of Rights (Porcha) reflecting legal heir proportionate shares.'
          ],
          bn: [
            'পঞ্চায়েত প্রধান বা পুর প্রধানের কাছ থেকে আইনি ওয়ারিশান সার্টিফিকেট সংগ্রহ করুন।',
            'বাংলারভূমি পোর্টালে অনলাইন ওয়ারিশান মিউটেশন আবেদন দাখিল করুন।',
            'শুনানিতে মৃত্যু সনদ, ওয়ারিশান তালিকা ও মূল দলিল উপস্থাপন করুন।',
            'সমস্ত ওয়ারিশের নামে অংশ অনুযায়ী সংশোধিত খতিয়ান ডাউনলোড করুন।'
          ],
          hi: [
            'ग्राम पंचायत प्रधान या नगर पालिका से वैध वारिसान प्रमाणपत्र प्राप्त करें।',
            'बांगलारभूमि पोर्टल पर ऑनलाइन वारिसान म्यूटेशन आवेदन दाखिल करें।',
            'सुनवाई में मृत्यु प्रमाणपत्र एवं वारिसों की वंशावली प्रस्तुत करें।',
            'सभी वारिसों के नाम अनुपातिक हिस्सेदारी का खतियान पर्चा प्राप्त करें।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'Kolkata Municipal Corporation (Assessment & Collection Dept)',
          bn: 'কলকাতা পৌরসং সংস্থা (মূল্যায়ন ও কর সংগ্রাহক বিভাগ - KMC)',
          hi: 'कोलकाता नगर निगम (कर विभाग)'
        },
        portal_name: { en: 'KMC Assessment Portal', bn: 'কেএমসি অ্যাসেসমেন্ট পোর্টাল', hi: 'केएमसी कर पोर्टल' },
        portal_url: 'https://www.kmcgov.in/',
        steps: {
          en: [
            'Submit KMC Succession Mutation Application with death certificate and legal heir affidavit.',
            'Attach legal heir affidavit, family tree chart, and up-to-date KMC property tax paid receipt.',
            'Attend hearing before KMC Assessor-Collector; tax liability recorded in surviving heirs names.',
            'KMC issues updated Mutation Endorsement & Assessee Card reflecting co-owners.'
          ],
          bn: [
            'মৃত্যু সনদ ও ওয়ারিশান হলফনামাসহ কেএমসি এসেসমেন্ট বিভাগে উত্তরাধিকার আবেদন জমা দিন।',
            'পারিবারিক বংশলতিকা এবং হালনাগাদ পুর কর পরিশোধের রসিদ সংযুক্ত করুন।',
            'কেএমসি এসেসরের শুনানিতে অংশ নিন; পুর কর জীবিত ওয়ারিশদের নামে ভাগ বা যৌথ করা হবে।',
            'কেএমসি থেকে সকল উত্তরাধিকারীর নামযুক্ত সংশোধিত এসেসি কার্ড ও মিউটেশন সার্টিফিকেট নিন।'
          ],
          hi: [
            'मृत्यु प्रमाणपत्र एवं वारिसान शपथ पत्र के साथ केएमसी कर विभाग में उत्तराधिकार आवेदन दें।',
            'पारिवारिक वंशावली एवं अद्यतन संपत्ति कर चुकता रसीद संलग्न करें।',
            'केएमसी अधिकारी के समक्ष सुनवाई में शामिल हों; कर देयता सभी वारिसों के नाम दर्ज होगी।',
            'केएमसी द्वारा सभी सह-मालिकों के नाम वाला संशोधित असेसी कार्ड जारी किया जाएगा।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Obtain formal Warishan Certificate from local Municipality or Panchayat.',
        'Submit online Warishan mutation application on Banglarbhumi.',
        'Present death certificate and legal heir consensus tree at hearing.',
        'Obtain mutated Khatian Porcha reflecting proportionate co-sharer shares.'
      ],
      bn: [
        'পৌরসভা বা গ্রাম পঞ্চায়েত থেকে আইনি ওয়ারিশান সার্টিফিকেট সংগ্রহ করুন।',
        'বাংলারভূমি পোর্টালে অনলাইন ওয়ারিশান মিউটেশন আবেদন দাখিল করুন।',
        'শুনানিতে মৃত্যু সনদ, ওয়ারিশান তালিকা ও মূল দলিল উপস্থাপন করুন।',
        'সমস্ত ওয়ারিশের নামে অংশ অনুযায়ী সংশোধিত খতিয়ান ডাউনলোড করুন।'
      ],
      hi: [
        'नगर पालिका या ग्राम पंचायत से वैध वारिसान प्रमाणपत्र प्राप्त करें।',
        'बांगलारभूमि पोर्टल पर ऑनलाइन वारिसान म्यूटेशन आवेदन दाखिल करें।',
        'सुनवाई में मृत्यु प्रमाणपत्र एवं वारिसों की वंशावली प्रस्तुत करें।',
        'सभी वारिसों के नाम अनुपातिक हिस्सेदारी का खतियान पर्चा प्राप्त करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-02-1',
        name: { en: 'Warishan Certificate / Family Tree Affidavit', bn: 'ওয়ারিশান শংসাপত্র বা পারিবারিক হলফনামা', hi: 'वारिसान प्रमाणपत्र / पारिवारिक शपथ पत्र' },
        issuing_authority: { en: 'Panchayat Pradhan / Municipality / Notary', bn: 'পঞ্চায়েত / পুরসভা / নোটারি', hi: 'पंचायत / नगर पालिका / नोटरी' },
        is_mandatory: true
      },
      {
        id: 'doc-land-02-2',
        name: { en: 'Death Certificate of Recorded Owner', bn: 'মৃত্যু শংসাপত্র', hi: 'मृत्यु प्रमाणपत्र' },
        issuing_authority: { en: 'Registrar of Births & Deaths', bn: 'জন্ম ও মৃত্যু নিবন্ধক', hi: 'जन्म एवं मृत्यु रजिस्ट्रार' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-03',
    title: {
      en: 'Land Conversion: Sali to Vastu / Land Use Sanction',
      bn: 'ভূমির শ্রেণি পরিবর্তন (শালি থেকে বাস্তু কনভার্সন বনাম KMC প্ল্যান)',
      hi: 'भूमि रूपांतरण: कृषि से आवासीय (कन्वर्जन बनाम केएमसी भवन अनुमति)'
    },
    relevant_act: 'Sec 4C WBLR Act (Districts) / KMC Building Rules (Kolkata)',
    summary: {
      en: 'In rural/districts, convert agricultural (Sali) land to homestead (Vastu) via DL&LRO; in Kolkata, obtain land use clearance & building sanction via KMC Building Department.',
      bn: 'জেলায় ডিএলঅ্যান্ডএলআরও মারফত ৪সি কনভার্সন সার্টিফিকেট; কলকাতায় কেএমসি বিল্ডিং দপ্তর থেকে জমির চরিত্র ও প্ল্যান পাস।',
      hi: 'जिलों में धारा 4C के तहत डीएल एंड एलआरओ से कन्वर्जन; कोलकाता में केएमसी भवन विभाग से लैंड यूज व नक्शा पास।'
    },
    authority_forum: {
      en: 'DL&LRO (Districts) / KMC Building Dept (Kolkata)',
      bn: 'ডিএলঅ্যান্ডএলআরও (জেলা) / কেএমসি বিল্ডিং দপ্তর (কলকাতা)',
      hi: 'डीएल एंड एलआरओ (जिले) / केएमसी भवन विभाग (कोलकाता)'
    },
    forum_type: 'BL_LRO',
    is_complex: true,
    official_portal_url: 'https://banglarbhumi.gov.in/',
    statutory_timeframe: {
      en: '60 to 90 working days',
      bn: '৬০ থেকে ৯০ কার্যদিবস',
      hi: '60 से 90 कार्यदिवस'
    },
    search_keywords: {
      en: ['sali to vastu', 'section 4c wblr', 'kmc building sanction plan'],
      bn: ['শালি থেকে বাস্তু', 'কনভার্সন ৪সি', 'কেএমসি বিল্ডিং প্ল্যান'],
      hi: ['शाली से वास्तु', 'धारा 4C कन्वर्जन', 'केएमसी नक्शा पास']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'District Land & Land Reforms Officer (DL&LRO / DM)',
          bn: 'জেলা ভূমি ও ভূমি সংস্কার আধিকারিক (DL&LRO)',
          hi: 'जिला भूमि एवं भूमि सुधार अधिकारी (DL&LRO)'
        },
        portal_name: { en: 'Banglarbhumi 4C Conversion Portal', bn: 'বাংলারভূমি ৪সি রূপান্তর পোর্টাল', hi: 'बांगलारभूमि धारा 4C पोर्टल' },
        portal_url: 'https://banglarbhumi.gov.in/',
        steps: {
          en: [
            'Submit Section 4C application on Banglarbhumi with site layout and adjacent plot NOC.',
            'Revenue Inspector conducts field inquiry confirming land is not active waterbody/wetland.',
            'Pay prescribed conversion fees via GRIPS treasury challan.',
            'DL&LRO issues formal Conversion Certificate changing classification to Vastu.'
          ],
          bn: [
            'বাংলারভূমি পোর্টালে ধারা ৪সি অনুযায়ী অনলাইন কনভার্সন আবেদন জমা দিন।',
            'সাইট প্ল্যান ও নকশা জমা দিলে রাজস্ব পরিদর্শক সরেজমিনে মাঠ তদন্ত করবেন।',
            'GRIPS চালানের মাধ্যমে রূপান্তর ফি জমা দিন।',
            'ডিএলঅ্যান্ডএলআরও বাস্তু শ্রেণি পরিবর্তনের সরকারি কনভার্সন সার্টিফিকেট জারি করবে।'
          ],
          hi: [
            'बांगलारभूमि पोर्टल पर धारा 4C के तहत भूमि रूपांतरण आवेदन ऑनलाइन जमा करें।',
            'राजस्व निरीक्षक द्वारा स्थल निरीक्षण कर पुष्टि होगी कि जमीन तालाब या दलदल नहीं है।',
            'GRIPS पोर्टल पर निर्धारित सरकारी रूपांतरण शुल्क का भुगतान करें।',
            'डीएल एंड एलआरओ द्वारा आवासीय (वास्तु) उपयोग का आधिकारिक प्रमाणपत्र जारी होगा।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'KMC Building Department & Land Use Planning Cell',
          bn: 'কেএমসি বিল্ডিং বিভাগ ও নগর পরিকল্পনা সেল',
          hi: 'कोलकाता नगर निगम भवन निर्माण विभाग'
        },
        portal_name: { en: 'KMC Building Sanction Portal', bn: 'কেএমসি বিল্ডিং প্ল্যান পোর্টাল', hi: 'केएमसी भवन अनुमति पोर्टल' },
        portal_url: 'https://www.kmcgov.in/',
        steps: {
          en: [
            'Verify land use zone under KMC Master Plan and Land Use Development Plan (LUDCP).',
            'Engage licensed KMC architect to draft architectural building plan complying with KMC rules.',
            'Pay development and municipal sanction fees at KMC Treasury counters.',
            'KMC Building Department issues formal Building Permit and sanctions construction.'
          ],
          bn: [
            'কেএমসি মাস্টার প্ল্যান ও নগর পরিকল্পনা অনুযায়ী জমির অনুমোদিত ব্যবহার যাচাই করুন।',
            'লাইসেন্সপ্রাপ্ত কেএমসি আর্কিটেক্ট দিয়ে পুর বিধি মেনে বিল্ডিং নকশা ড্রাফট করান।',
            'কেএমসি ট্রেজারিতে নির্ধারিত ডেভেলপমেন্ট ও প্ল্যান স্যাংকশন ফি জমা দিন।',
            'কেএমসি বিল্ডিং ডিপার্টমেন্ট থেকে আনুষ্ঠানিকভাবে বিল্ডিং পারমিট ও প্ল্যান পাস গ্রহণ করুন।'
          ],
          hi: [
            'केएमसी मास्टर प्लान एवं लैंड यूज नियमों के तहत भूखंड की स्वीकार्यता जांचें।',
            'लाइसेंसशुदा आर्किटेक्ट से केएमसी भवन उपनियमों के तहत नक्शा बनवाएं।',
            'केएमसी कोषागार में आवश्यक विकास एवं नक्शा स्वीकृति शुल्क जमा करें।',
            'केएमसी भवन विभाग द्वारा विधिवत बिल्डिंग परमिट एवं निर्माण स्वीकृति जारी की जाएगी।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Submit online Conversion Application (Section 4C) on Banglarbhumi.',
        'Upload site plan, Mouza map, up-to-date Khajna, and adjacent plot NOC.',
        'Revenue Inspector inspects field to confirm plot is not an active waterbody.',
        'Pay prescribed conversion fees on GRIPS and receive the Conversion Certificate.'
      ],
      bn: [
        'বাংলারভূমি পোর্টালে ধারা ৪সি অনুযায়ী অনলাইন কনভার্সন আবেদন জমা দিন।',
        'সাইট প্ল্যান, মৌজা ম্যাপ ও পার্শ্ববর্তী প্লটের অনাপত্তি নথি আপলোড করুন।',
        'রাজস্ব পরিদর্শক সরেজমিনে জমি পরীক্ষা করে প্রতিবেদন জমা দেবেন।',
        'GRIPS-এ নির্ধারিত রূপান্তর ফি জমা দিয়ে কনভার্সন সার্টিফিকেট গ্রহণ করুন।'
      ],
      hi: [
        'बांगलारभूमि पर धारा 4C के तहत भूमि रूपांतरण आवेदन ऑनलाइन जमा करें।',
        'साइट प्लान, मौजा नक्शा एवं आसपास के भूस्वामियों का विवरण अपलोड करें।',
        'राजस्व निरीक्षक द्वारा स्थल निरीक्षण कर रिपोर्ट प्रस्तुत की जाएगी।',
        'GRIPS पर शुल्क भुगतान कर अंतिम रूपांतरण प्रमाणपत्र डाउनलोड करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-03-1',
        name: { en: 'Site Plan & Adjoining Land Map', bn: 'সাইট প্ল্যান ও নকশা', hi: 'साइट प्लान एवं नक्शा' },
        issuing_authority: { en: 'Licensed Surveyor / KMC Architect', bn: 'লাইসেন্সপ্রাপ্ত সার্ভেয়ার', hi: 'अनुज्ञप्त सर्वेक्षक' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-04',
    title: {
      en: 'Boundary Dispute & Demarcation Amin',
      bn: 'সীমানা বিরোধ ও সরকারি আমিন দ্বারা জমি ডিমারকেশন',
      hi: 'सीमा विवाद एवं सरकारी अमीन द्वारा भूमि सीमांकन'
    },
    relevant_act: 'WBLR Manual (Districts) / KMC Survey & Valuation Wing (Kolkata)',
    summary: {
      en: 'Survey and boundary demarcation: In districts, petition the BL&LRO Demarcation Wing; in Kolkata, petition KMC Chief Valuer & Surveyor or City Civil Court commissioner.',
      bn: 'সীমানা বিরোধ নিষ্পত্তি: জেলায় বিএলঅ্যান্ডএলআরও আমিন; কলকাতায় কেএমসি সার্ভেয়ার বা সিটি সিভিল কোর্ট কমিশনার।',
      hi: 'सीमा विवाद: जिलों में बीएल एंड एलआरओ अमीन; कोलकाता में केएमसी सर्वेक्षक अथवा दीवानी कोर्ट कमिश्नर।'
    },
    authority_forum: {
      en: 'BL&LRO (Districts) / KMC Survey Dept (Kolkata)',
      bn: 'বিএলঅ্যান্ডএলআরও (জেলা) / কেএমসি সার্ভে শাখা (কলকাতা)',
      hi: 'बीएल एंड एलआरओ (जिले) / केएमसी सर्वेक्षक (कोलकाता)'
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
      en: ['amin demarcation', 'boundary dispute', 'kmc surveyor boundary'],
      bn: ['আমিন ডিমারকেশন', 'সীমানা বিরোধ', 'কেএমসি সার্ভেয়ার'],
      hi: ['अमीन सीमांकन', 'जमीन नापी', 'केएमसी सीमा विवाद']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'BL&LRO Demarcation Wing',
          bn: 'ব্লক ভূমি ও ভূমি সংস্কার আধিকারিক (ডিমারকেশন শাখা)',
          hi: 'बीएल एंड एलआरओ सीमांकन शाखा'
        },
        portal_name: { en: 'Banglarbhumi Portal', bn: 'বাংলারভূমি পোর্টাল', hi: 'बांगलारभूमि' },
        portal_url: 'https://banglarbhumi.gov.in/',
        steps: {
          en: [
            'Submit Demarcation Petition before BL&LRO with Mouza and Dag details.',
            'Pay government survey and Amin fees via GRIPS treasury portal.',
            'BL&LRO serves demarcation notices to all contiguous boundary owners.',
            'Revenue Amin surveys plot using Total Station/chains and fixes concrete pillars.'
          ],
          bn: [
            'মৌজা ও দাগ নম্বর উল্লেখ করে বিএলঅ্যান্ডএলআরও অফিসে আবেদন জমা দিন।',
            'GRIPS চালানের মাধ্যমে সরকারি আমিন ফি জমা করুন।',
            'সংলগ্ন প্লটের সমস্ত প্রতিবেশীকে সার্ভে নোটিশ পাঠাবে ভূমি দপ্তর।',
            'সরকারি আমিন মাঠে উপস্থিত হয়ে পরিমাপ শেষে সীমানা চিহ্নিত করবেন।'
          ],
          hi: [
            'मौजा एवं प्लॉट विवरण सहित बीएल एंड एलआरओ में सीमांकन आवेदन दें।',
            'GRIPS पोर्टल पर निर्धारित सरकारी अमीन शुल्क जमा करें।',
            'सीमा से जुड़े सभी पड़ोसियों को आधिकारिक उपस्थिति नोटिस भेजा जाएगा।',
            'राजस्व अमीन द्वारा स्थल पर पहुंचकर सीमा स्तंभ स्थापित किए जाएंगे।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'KMC Chief Valuer & Surveyor / City Civil Court',
          bn: 'কেএমসি প্রধান মূল্যায়নকারী ও সার্ভেয়ার / সিটি সিভিল কোর্ট',
          hi: 'केएमसी मुख्य मूल्यांकनकर्ता एवं सर्वेक्षक / नगर दीवानी अदालत'
        },
        portal_name: { en: 'KMC Survey & Valuation Portal', bn: 'কেএমসি সার্ভে সেল', hi: 'केएमसी सर्वे' },
        portal_url: 'https://www.kmcgov.in/',
        steps: {
          en: [
            'Apply to KMC Chief Valuer & Surveyor for boundary alignment inspection.',
            'If neighbor encroaches, file Injunction Suit before City Civil Court at Calcutta.',
            'Move application under Order XXVI Rule 9 CPC for court civil engineer commissioner.',
            'Court commissioner inspects premises based on sanctioned KMC building boundaries.'
          ],
          bn: [
            'কেএমসি চিফ ভ্যালুয়ার অ্যান্ড সার্ভেয়ারের কাছে সীমানা মাপার আবেদন দিন।',
            'প্রতিবেশী জমি দখল করলে সিটি সিভিল কোর্টে ইনজাংশন মামলা দায়ের করুন।',
            'অর্ডার ২৬ রুল ৯ সিপিসি অনুযায়ী কোর্ট সিভিল ইঞ্জিনিয়ার কমিশনার নিয়োগ করান।',
            'কোর্ট কমিশনার কেএমসি অনুমোদিত নকশা ও দলিল দেখে সঠিক সীমানা চিহ্নিত করবেন।'
          ],
          hi: [
            'केएमसी मुख्य सर्वेक्षक कार्यालय में सीमा निर्धारण हेतु आवेदन प्रस्तुत करें।',
            'पड़ोसी द्वारा अतिक्रमण पर कोलकाता सिटी सिविल कोर्ट में निषेधाज्ञा वाद करें।',
            'आदेश 26 नियम 9 सीपीसी के तहत कोर्ट सिविल इंजीनियर कमिश्नर नियुक्त कराएं।',
            'कमिश्नर केएमसी स्वीकृत भवन सीमा के आधार पर स्थल नापी कर रिपोर्ट अदालत को देंगे।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Submit a Demarcation Petition before BL&LRO with Mouza and Dag details.',
        'Pay government survey and Amin fees via the GRIPS treasury portal.',
        'BL&LRO serves demarcation notices to all contiguous boundary owners.',
        'Revenue Amin surveys plot using Total Station/chains and fixes boundary.'
      ],
      bn: [
        'মৌজা ও দাগ নম্বর উল্লেখ করে বিএলঅ্যান্ডএলআরও অফিসে আবেদন জমা দিন।',
        'GRIPS চালানের মাধ্যমে সরকারি আমিন ফি জমা করুন।',
        'সংলগ্ন প্লটের সমস্ত প্রতিবেশীকে সার্ভে নোটিশ পাঠাবে ভূমি দপ্তর।',
        'সরকারি আমিন মাঠে উপস্থিত হয়ে পরিমাপ শেষে সীমানা চিহ্নিত করবেন।'
      ],
      hi: [
        'मौजा एवं प्लॉट विवरण सहित बीएल एंड एलआरओ में सीमांकन आवेदन दें।',
        'GRIPS पोर्टल पर निर्धारित सरकारी अमीन शुल्क जमा करें।',
        'सीमा से जुड़े सभी पड़ोसियों को आधिकारिक उपस्थिति नोटिस भेजा जाएगा।',
        'राजस्व अमीन द्वारा स्थल पर पहुंचकर सीमा स्तंभ स्थापित किए जाएंगे।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-04-1',
        name: { en: 'Certified Mouza Map Sheet / KMC Alignment Plan', bn: 'মৌজা নকশার সার্টিফাইড কপি বা কেএমসি প্ল্যান', hi: 'प्रमाणित मौजा नक्शा / केएमसी अलाइनमेंट प्लान' },
        issuing_authority: { en: 'DL&LRO Survey Section / KMC', bn: 'ডিএলঅ্যান্ডএলআরও / কেএমসি', hi: 'डीएल एंड एलआरओ / केएमसी' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-05',
    title: {
      en: 'Bargadar Recording & Eviction Protection',
      bn: 'বর্গাদার রেকর্ডিং ও বেআইনি উচ্ছেদ প্রতিরোধ',
      hi: 'बर्गादार (बटाईदार) अभिलेखन एवं बेदखली संरक्षण'
    },
    relevant_act: 'Sec 15 to 21B, West Bengal Land Reforms Act, 1955',
    summary: {
      en: 'Applicable in rural & semi-urban agricultural zones: legal recording of sharecroppers (Operation Barga) and protection against arbitrary landlord eviction.',
      bn: 'গ্রামীণ ও প্রান্তিক কৃষিজমিতে বর্গাদারদের আইনগত নামপত্তন ও জমির মালিক কর্তৃক বেআইনি উচ্ছেদ প্রতিরোধ।',
      hi: 'ग्रामीण एवं अर्ध-शहरी कृषि भूमि पर बटाईदारों के अधिकारों की रक्षा एवं गैर-कानूनी बेदखली से सुरक्षा।'
    },
    authority_forum: {
      en: 'Revenue Officer / BL&LRO Tribunal',
      bn: 'রাজস্ব আধিকারিক / বিএলঅ্যান্ডএলআরও',
      hi: 'राजस्व अधिकारी / बीएल एंड एलआरओ'
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
      en: ['bargadar', 'operation barga', 'sharecropper eviction'],
      bn: ['বর্গাদার', 'বর্গা উচ্ছেদ', 'অপারেশন বর্গা'],
      hi: ['बर्गादार', 'बटाईदार संरक्षण', 'भूमि बेदखली']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Submit Form 14 before the Revenue Officer for recording under Operation Barga.',
        'Provide proof of continuous cultivation and crop share delivery receipts.',
        'Revenue Officer conducts local field inquiry with village Gram Panchayat.',
        'Obtain Bargadar Certificate; eviction barred except under Section 17.'
      ],
      bn: [
        'অপারেশন বর্গা রেকর্ডিংয়ের জন্য রাজস্ব আধিকারিকের কাছে আবেদন করুন।',
        'টানা চাষাবাদ ও ফসলের ভাগ প্রদানের সাক্ষী ও রশিদ দাখিল করুন।',
        'রাজস্ব আধিকারিক মাঠে এসে পঞ্চায়েতের উপস্থিতিতে শুনানি নেবেন।',
        'অনুমোদিত বর্গা শংসাপত্র পান; ধারা ১৭ ব্যতীত উচ্ছেদ সম্পূর্ণ বেআইনি।'
      ],
      hi: [
        'बर्गा रिकॉर्डिंग हेतु राजस्व अधिकारी के समक्ष आवेदन प्रस्तुत करें।',
        'लगातार जुताई एवं फसल हिस्सेदारी देने के प्रमाण प्रस्तुत करें।',
        'राजस्व अधिकारी द्वारा स्थानीय ग्राम पंचायत के समक्ष जांच की जाएगी।',
        'बर्गादार प्रमाणपत्र जारी होगा; बिना अदालती आदेश बेदखली प्रतिबंधित है।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-05-1',
        name: { en: 'Crop Delivery Receipt / Witness Statements', bn: 'ফসল হস্তান্তরের রসিদ / সাক্ষ্য', hi: 'फसल बंटवारा रसीद / साक्ष्य' },
        issuing_authority: { en: 'Landowner / Local Panchayat', bn: 'জমির মালিক / গ্রাম পঞ্চায়েত', hi: 'भूस्वामी / पंचायत' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-06',
    title: {
      en: 'Correction of Porcha / ROR Recording Errors',
      bn: 'খতিয়ান ও পর্চায় করণিক ভুল সংশোধন',
      hi: 'खतियान एवं पर्चा में लिपिकीय त्रुटि सुधार'
    },
    relevant_act: 'Sec 51A(4) WBLR Act (Districts) / Sec 186 KMC Act (Kolkata)',
    summary: {
      en: 'Rectifying clerical errors in Dag, share, or name: in districts, file before BL&LRO under Section 51A(4); in Kolkata, file before KMC Assessment Hearing Officer (AHO).',
      bn: 'খতিয়ান বা এসেসমেন্ট লেজারে ভুল সংশোধন: জেলায় বিএলঅ্যান্ডএলআরও ধারা ৫১এ(৪); কলকাতায় কেএমসি অ্যাসেসমেন্ট হিয়ারিং অফিসার।',
      hi: 'खतियान या नगर निगम लेजर में लिपिकीय भूल सुधार: जिलों में बीएल एंड एलआरओ धारा 51A(4); कोलकाता में केएमसी एएचओ।'
    },
    authority_forum: {
      en: 'Revenue Officer (Districts) / KMC AHO (Kolkata)',
      bn: 'রাজস্ব আধিকারিক (জেলা) / কেএমসি এএইচও (কলকাতা)',
      hi: 'राजस्व अधिकारी (जिले) / केएमसी एएचओ (कोलकाता)'
    },
    forum_type: 'BL_LRO',
    is_complex: false,
    official_portal_url: 'https://banglarbhumi.gov.in/',
    statutory_timeframe: {
      en: '45 working days',
      bn: '৪৫ কার্যদিবস',
      hi: '45 कार्यदिवस'
    },
    search_keywords: {
      en: ['porcha correction', '51a4 wblr', 'kmc assessee correction'],
      bn: ['পর্চা সংশোধন', 'খতিয়ান ভুল', 'কেএমসি রেকর্ড সংশোধন'],
      hi: ['पर्चा सुधार', 'खतियान त्रुटि', 'केएमसी रिकॉर्ड सुधार']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'Revenue Officer / BL&LRO Mis-Case Cell',
          bn: 'ব্লক ভূমি ও ভূমি সংস্কার আধিকারিক (মিস-কেস বিভাগ)',
          hi: 'बीएल एंड एलआरओ मिस-केस शाखा'
        },
        portal_name: { en: 'Banglarbhumi Portal', bn: 'বাংলারভূমি পোর্টাল', hi: 'बांगलারভূমি' },
        portal_url: 'https://banglarbhumi.gov.in/',
        steps: {
          en: [
            'Submit miscellaneous petition under Section 51A(4) before BL&LRO.',
            'Attach original parent deeds and certified legacy RS/LR Porchas.',
            'Revenue Officer examines volume register and conducts personal hearing.',
            'Corrected Record of Rights is generated and updated on Banglarbhumi.'
          ],
          bn: [
            'ধারা ৫১এ(৪) অনুযায়ী বিএলঅ্যান্ডএলআরও অফিসে মিস কেস আবেদন করুন।',
            'মূল দলিল ও পূর্ববর্তী আরএস/এলআর খতিয়ানের কপি জমা দিন।',
            'রাজস্ব আধিকারিক মূল ভলিউম খতিয়ে দেখে ব্যক্তিগত শুনানি নেবেন।',
            'সংশোধিত ডিজিটাল পর্চা প্রস্তুত করে অনলাইনে আপডেট করা হবে।'
          ],
          hi: [
            'धारा 51A(4) के अंतर्गत बीएल एंड एलआरओ के समक्ष आवेदन पत्र दें।',
            'मूल विलेख एवं पुराने आरएस/एलआर खतियान की प्रतियां संलग्न करें।',
            'राजस्व अधिकारी द्वारा रिकॉर्ड रूम से जांच कर सुनवाई की जाएगी।',
            'सुधरा हुआ अधिकार अभिलेख तैयार कर पोर्टल पर अपडेट किया जाएगा।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'KMC Assessment Hearing Officer (AHO) / Chief Assessor',
          bn: 'কেএমসি অ্যাসেসমেন্ট হিয়ারিং অফিসার (AHO)',
          hi: 'केएमसी मूल्यांकन सुनवाई अधिकारी (AHO)'
        },
        portal_name: { en: 'KMC Assessment Grievance Portal', bn: 'কেএমসি অ্যাসেসমেন্ট সেল', hi: 'केएमसी कर पोर्टल' },
        portal_url: 'https://www.kmcgov.in/',
        steps: {
          en: [
            'Submit written objection before KMC Assessment Hearing Officer (AHO).',
            'Attach registered deed, building completion plan, and tax invoice showing correct area.',
            'Attend scheduled AHO hearing at KMC headquarters (S.N. Banerjee Road) or borough office.',
            'AHO issues rectified Assessee Ledger and amends municipal billing register.'
          ],
          bn: [
            'কেএমসি অ্যাসেসমেন্ট হিয়ারিং অফিসারের (AHO) কাছে লিখিত ত্রুটি সংশোধনের আবেদন দিন।',
            'রেজিস্ট্রি দলিল, ফ্ল্যাটের সিসি প্ল্যান ও ভুল ঠিকানার বিলের কপি জমা দিন।',
            'কেএমসি সদর দপ্তর বা বোরো অফিসে এএইচও শুনানিতে সশরীরে উপস্থিত থাকুন।',
            'এএইচও শুনানির ভিত্তিতে এসেসি নম্বর ও কর খাতা সংশোধন করে পরিমার্জিত বিল দেবে।'
          ],
          hi: [
            'केएमसी मूल्यांकन सुनवाई अधिकारी (AHO) के समक्ष लिखित आपत्ति प्रस्तुत करें।',
            'पंजीकृत विलेख एवं सही क्षेत्रफल दर्शाने वाले दस्तावेज संलग्न करें।',
            'केएमसी मुख्यालय (एसएन बनर्जी रोड) या बोरो कार्यालय में एएचओ सुनवाई में शामिल हों।',
            'एएचओ द्वारा आदेश पारित कर नगर निगम कर लेजर में नाम/रकबा सुधारा जाएगा।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Submit miscellaneous petition under Section 51A(4) before the BL&LRO.',
        'Attach original parent deeds and certified legacy RS/LR Porchas.',
        'Revenue Officer examines volume register and conducts personal hearing.',
        'Corrected Record of Rights is generated and updated on Banglarbhumi.'
      ],
      bn: [
        'ধারা ৫১এ(৪) অনুযায়ী বিএলঅ্যান্ডএলআরও অফিসে মিস কেস আবেদন করুন।',
        'মূল দলিল ও পূর্ববর্তী আরএস/এলআর খতিয়ানের কপি জমা দিন।',
        'রাজস্ব আধিকারিক মূল ভলিউম খতিয়ে দেখে ব্যক্তিগত শুনানি নেবেন।',
        'সংশোধিত ডিজিটাল পর্চা প্রস্তুত করে অনলাইনে আপডেট করা হবে।'
      ],
      hi: [
        'धारा 51A(4) के अंतर्गत बीएल एंड एलआरओ के समक्ष आवेदन पत्र दें।',
        'मूल विलेख एवं पुराने आरएस/एलआर खतियान की प्रतियां संलग्न करें।',
        'राजस्व अधिकारी द्वारा रिकॉर्ड रूम से जांच कर सुनवाई की जाएगी।',
        'सुधरा हुआ अधिकार अभिलेख तैयार कर पोर्टल पर अपडेट किया जाएगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-06-1',
        name: { en: 'Certified Copy of Registered Title Deed', bn: 'রেজিস্ট্রি দলিলের সার্টিফাইড কপি', hi: 'पंजीकृत विलेख की प्रमाणित प्रति' },
        issuing_authority: { en: 'Sub-Registrar Office (ADSR)', bn: 'সাব-রেজিস্ট্রার অফিস', hi: 'उप-पंजीयक कार्यालय' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-07',
    title: {
      en: 'Thika Tenancy Recording & Building NOC',
      bn: 'ঠিকা প্রজা স্বত্ব রেকর্ডিং ও এনওসি (NOC) প্রাপ্তি',
      hi: 'ठिका प्रजा अधिकार अभिलेखन एवं अनापत्ति प्रमाणपत्र'
    },
    relevant_act: 'West Bengal Thika Tenancy (Acquisition & Reg) Act, 2001',
    summary: {
      en: 'Applicable in Kolkata and Howrah: recording Thika tenant rights and securing building construction NOC from Thika Controller.',
      bn: 'কলকাতা ও হাওড়ায় ঠিকা প্রজাস্বত্ব রেকর্ড এবং ভবন নির্মাণের সরকারি এনওসি লাভ।',
      hi: 'कोलकाता एवं हावड़ा में ठिका किरायेदारी दर्ज कराना एवं निर्माण हेतु एनओसी पाना।'
    },
    authority_forum: {
      en: 'Office of the Thika Controller (Kolkata / Howrah)',
      bn: 'ঠিকা কন্ট্রোলারের কার্যালয় (কলকাতা / হাওড়া)',
      hi: 'ठिका नियंत्रक कार्यालय (कोलकाता/हावड़ा)'
    },
    forum_type: 'Thika_Controller',
    is_complex: true,
    official_portal_url: 'https://kmcgov.in/',
    statutory_timeframe: {
      en: '60 to 90 working days',
      bn: '৬০ থেকে ৯০ কার্যদিবস',
      hi: '60 से 90 कार्यदिवस'
    },
    search_keywords: {
      en: ['thika tenancy', 'thika controller kolkata', 'thika noc building'],
      bn: ['ঠিকা প্রজা', 'ঠিকা কন্ট্রোলার কলকাতা', 'ঠিকা এনওসি'],
      hi: ['ठिका किरायेदारी', 'ठिका नियंत्रक', 'ठिका एनओसी']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Submit Form-A application before the Thika Controller with historical rent receipts.',
        'Revenue Officer issues notice to State and conducts spot physical inquiry.',
        'Thika Controller enters name in Thika Register and issues Tenant Card.',
        'Apply for Building Sanction NOC before KMC/HMC via Thika Controller.'
      ],
      bn: [
        'ভাড়া প্রাপ্তির রশিদসহ ঠিকা কন্ট্রোলারের নিকট ফর্ম-এ আবেদন দাখিল করুন।',
        'রাজস্ব আধিকারিক নোটিশ জারি করে সরেজমিনে তদন্ত চালাবেন।',
        'ঠিকা রেজিস্টারে নাম নথিভুক্ত করে ঠিকা প্রজা কার্ড জারি করা হবে।',
        'পৌরসভায় বাড়ি তৈরির প্ল্যান পাসের জন্য ঠিকা এনওসি গ্রহণ করুন।'
      ],
      hi: [
        'ऐतिहासिक लगान रसीदों के साथ ठिका नियंत्रक के समक्ष फॉर्म-ए जमा करें।',
        'अधिकारियों द्वारा स्थल निरीक्षण कर किरायेदारी की पुष्टि की जाएगी।',
        'ठिका रजिस्टर में नाम दर्ज कर आधिकारिक प्रमाणपत्र जारी होगा।',
        'मकान निर्माण की स्वीकृति हेतु नगरपालिका के लिए एनओसी प्राप्त करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-07-1',
        name: { en: 'Historical Thika Rent Receipts', bn: 'ঠিকা জমার রসিদ', hi: 'ठिका लगान रसीद' },
        issuing_authority: { en: 'Landlord / State Rent Collection', bn: 'জমিদার / সরকারি রেন্ট সেল', hi: 'भूस्वामी / सरकारी संग्रह' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-08',
    title: {
      en: 'Right of Pre-emption by Co-sharer / Contiguous Tenant',
      bn: 'সহ-অংশীদার বা সংলগ্ন প্রজাদের অগ্রক্রয়াধিকার',
      hi: 'सह-हिस्सेदार या सीमावर्ती किसान का अग्रक्रयाधिकार (प्री-एम्प्शन)'
    },
    relevant_act: 'Sec 8 & 9, West Bengal Land Reforms Act, 1955',
    summary: {
      en: 'Exercise legal right to buy adjacent agricultural land sold secretly to an outside stranger.',
      bn: 'বহিরাগত ক্রেতার কাছে গোপনে জমি বিক্রি করলে সংলগ্ন প্রজার অগ্রাধিকার ভিত্তিতে জমি ক্রয়ের মামলা।',
      hi: 'पड़ोसी या सह-हिस्सेदार द्वारा बाहरी व्यक्ति को बेची गई कृषि भूमि को वापस खरीदने का अधिकार।'
    },
    authority_forum: {
      en: 'Civil Court (Civil Judge Junior Division)',
      bn: 'দেওয়ানি আদালত (সিভিল জজ জুনিয়র ডিভিশন)',
      hi: 'सिविल न्यायालय (जूनियर डिवीजन)'
    },
    forum_type: 'Civil_Court',
    is_complex: true,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: 'Within 3 months of notice; 1 to 2 years trial',
      bn: 'নোটিশের ৩ মাসের মধ্যে; ১ থেকে ২ বছর',
      hi: 'नोटिस के 3 माह के भीतर; 1 से 2 वर्ष'
    },
    search_keywords: {
      en: ['pre-emption section 8', 'co-sharer land', 'contiguous tenant'],
      bn: ['অগ্রক্রয়াধিকার', 'প্রি-এম্পশন মামলা', 'সংলগ্ন প্রজা'],
      hi: ['अग्रक्रयाधिकार', 'प्री-एम्प्शन', 'पड़ोसी किसान अधिकार']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain certified copy of the disputed sale deed from the Registry Office.',
        'File Pre-emption Application under Section 8 WBLR Act before Civil Judge.',
        'Deposit consideration money plus statutory 10% penalty into civil court.',
        'Court passes order transferring title and directing execution of sale deed.'
      ],
      bn: [
        'সাব-রেজিস্ট্রি অফিস থেকে হস্তান্তরিত দলিলের সার্টিফাইড কপি তুলুন।',
        'সিভিল জজ আদালতে ধারা ৮ অনুযায়ী অগ্রক্রয়াধিকার মিস কেস দায়ের করুন।',
        'জমির মূল্যের সাথে অতিরিক্ত ১০% সরকারি পেনাল্টি অর্থ আদালতে জমা দিন।',
        'আদালত রায় দিয়ে বহিরাগতের বদলে আবেদনকারীকে জমির স্বত্ব প্রদান করবে।'
      ],
      hi: [
        'रजिस्ट्री कार्यालय से विवादित बिक्री विलेख की प्रमाणित प्रति निकालें।',
        'सिविल जज के समक्ष धारा 8 के तहत प्री-एम्प्शन याचिका दायर करें।',
        'भूमि मूल्य के साथ 10% अतिरिक्त वैधानिक राशि अदालत में जमा करें।',
        'अदालत बाहरी खरीदार का विलेख रद्द कर आवेदक के नाम डिक्री देगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-08-1',
        name: { en: 'Challenged Registered Deed Copy', bn: 'বিতর্কিত রেজিস্ট্রি দলিলের কপি', hi: 'विवादित बिक्री विलेख प्रति' },
        issuing_authority: { en: 'Sub-Registrar Office (ADSR)', bn: 'সাব-রেজিস্ট্রার অফিস', hi: 'उप-पंजीयक कार्यालय' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-09',
    title: {
      en: 'Illegal Waterbody/Pond Filling & Restoration',
      bn: 'পুকুর ও জলাশয় বেআইনি ভরাট প্রতিরোধ ও পুনর্বহাল',
      hi: 'अवैध तालाब भराई की रोकथाम एवं पुनर्बहाली'
    },
    relevant_act: 'Sec 17A Inland Fisheries Act / Sec 4C WBLR (Districts) & KMC Act (Kolkata)',
    summary: {
      en: 'Halting illegal landfilling of ponds: in districts, report to BL&LRO & Fisheries Officer; in Kolkata, report to KMC Environment Dept & Green Bench.',
      bn: 'পুকুর ভরাট বন্ধ: জেলায় বিএলঅ্যান্ডএলআরও ও মৎস্য দপ্তর; কলকাতায় কেএমসি পরিবেশ সেল ও গ্রিন বেঞ্চ।',
      hi: 'तालाब भराई रोक: जिलों में बीएल एंड एलआरओ व मत्स्य विभाग; कोलकाता में केएमसी पर्यावरण शाखा।'
    },
    authority_forum: {
      en: 'BL&LRO (Districts) / KMC Environment Cell (Kolkata)',
      bn: 'বিএলঅ্যান্ডএলআরও (জেলা) / কেএমসি পরিবেশ সেল (কলকাতা)',
      hi: 'बीएल एंड एलआरओ (जिले) / केएमसी पर्यावरण शाखा (कोलकाता)'
    },
    forum_type: 'BL_LRO',
    is_complex: true,
    official_portal_url: 'https://banglarbhumi.gov.in/',
    statutory_timeframe: {
      en: 'Urgent (7 to 15 days)',
      bn: 'জরুরি (৭ থেকে ১৫ দিন)',
      hi: 'अति आवश्यक (7 से 15 दिन)'
    },
    search_keywords: {
      en: ['pond filling wb', 'pukur bhorat', 'kmc waterbody cell'],
      bn: ['পুকুর ভরাট', 'জলাশয় রক্ষা', 'কেএমসি পুকুর ভরাট'],
      hi: ['तालाब भराई रोक', 'जल संरक्षण कानून', 'कोलकाता तालाब संरक्षण']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'BL&LRO / District Magistrate / Fisheries Officer',
          bn: 'বিএলঅ্যান্ডএলআরও / জেলাশাসক / মৎস্য আধিকারিক',
          hi: 'बीएल एंड एलआरओ / जिला मजिस्ट्रेट / मत्स्य अधिकारी'
        },
        portal_name: { en: 'Banglarbhumi Portal', bn: 'বাংলারভূমি পোর্টাল', hi: 'बांगलारভূমি' },
        portal_url: 'https://banglarbhumi.gov.in/',
        steps: {
          en: [
            'Submit written complaint to BL&LRO, Local Police, and Fisheries Officer.',
            'Authorities issue immediate Stop-Work Order under Section 17A Fisheries Act.',
            'District Magistrate directs criminal prosecution and issues restoration notice.',
            'If administration delays, move High Court Green Bench for excavation order.'
          ],
          bn: [
            'বিএলঅ্যান্ডএলআরও, থানা ও মৎস্য আধিকারিকের কাছে লিখিত অভিযোগ জানান।',
            'মৎস্য আইনের ধারা ১৭এ অনুযায়ী তাৎক্ষণিক কাজ বন্ধের নোটিশ জারি করা হবে।',
            'জেলাশাসক অভিযুক্তের খরচে পুকুর আগের অবস্থায় খননের নির্দেশ দেবেন।',
            'প্রশাসন নিষ্ক্রিয় থাকলে হাইকোর্টের গ্রিন বেঞ্চে জরুরি রিট পিটিশন করুন।'
          ],
          hi: [
            'बीएल एंड एलआरओ, थाना एवं मत्स्य विभाग को तुरंत लिखित शिकायत दें।',
            'मत्स्य अधिनियम की धारा 17A के तहत काम रोकने का आदेश जारी होगा।',
            'जिला मजिस्ट्रेट दोषी के खर्चे पर तालाब को पुनः खुदवाने का आदेश देंगे।',
            'कार्रवाई न होने पर उच्च न्यायालय से खुदाई एवं बहाली का आदेश प्राप्त करें।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'KMC Environment & Waterbody Cell / High Court at Calcutta',
          bn: 'কেএমসি পরিবেশ ও জলাশয় সংরক্ষণ সেল / হাইকোর্ট',
          hi: 'केएमसी पर्यावरण एवं जल निकाय सेल / उच्च न्यायालय'
        },
        portal_name: { en: 'KMC Environment Cell', bn: 'কেএমসি পরিবেশ সেল', hi: 'केएमसी पर्यावरण विभाग' },
        portal_url: 'https://www.kmcgov.in/',
        steps: {
          en: [
            'Lodge immediate complaint with KMC Environment & Waterbodies Cell and local police station.',
            'KMC Borough Executive Engineer inspects site and lodges FIR under KMC Building & Pond Rules.',
            'KMC issues demolition notice for unauthorized construction on filled waterbody.',
            'If police fails to act, file Public Interest Writ (Article 226) before High Court Green Bench.'
          ],
          bn: [
            'কেএমসি পরিবেশ সেল ও স্থানীয় থানায় পুকুর ভরাটের বিরুদ্ধে তাৎক্ষণিক অভিযোগ জানান।',
            'কেএমসি বোরো ইঞ্জিনিয়ার সরেজমিনে এসে কাজ বন্ধ করিয়ে থানায় এফআইআর করবেন।',
            'ভরাট করা পুকুরের ওপর অবৈধ নির্মাণের বিরুদ্ধে পুরসভা ভাঙার নোটিশ জারি করবে।',
            'প্রশাসন ব্যবস্থা না নিলে কলকাতা হাইকোর্টের গ্রিন বেঞ্চে সরাসরি রিট দায়ের করুন।'
          ],
          hi: [
            'केएमसी पर्यावरण शाखा एवं स्थानीय थाने में तत्काल लिखित शिकायत दर्ज कराएं।',
            'केएमसी इंजीनियर द्वारा स्थल निरीक्षण कर काम बंद कराया जाएगा एवं प्राथमिकी होगी।',
            'भरे गए तालाब पर हो रहे निर्माण के विरुद्ध नगर निगम ध्वस्तीकरण नोटिस जारी करेगा।',
            'कार्रवाई न होने पर कलकत्ता हाईकोर्ट की ग्रीन बेंच के समक्ष जनहित रिट याचिका करें।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Submit instant written complaint to BL&LRO, Local Police, and Fisheries Officer.',
        'Authorities issue immediate Stop-Work Order under Section 17A Fisheries Act.',
        'District Magistrate directs criminal prosecution and issues restoration notice.',
        'If administration delays, move High Court Green Bench for excavation order.'
      ],
      bn: [
        'বিএলঅ্যান্ডএলআরও, থানা ও মৎস্য আধিকারিকের কাছে লিখিত অভিযোগ জানান।',
        'মৎস্য আইনের ধারা ১৭এ অনুযায়ী তাৎক্ষণিক কাজ বন্ধের নোটিশ জারি করা হবে।',
        'জেলাশাসক অভিযুক্তের খরচে পুকুর আগের অবস্থায় খননের নির্দেশ দেবেন।',
        'প্রশাসন নিষ্ক্রিয় থাকলে হাইকোর্টের গ্রিন বেঞ্চে জরুরি রিট পিটিশন করুন।'
      ],
      hi: [
        'बीएल एंड एलआरओ, थाना एवं मत्स्य विभाग को तुरंत लिखित शिकायत दें।',
        'मत्स्य अधिनियम की धारा 17A के तहत काम रोकने का आदेश जारी होगा।',
        'जिला मजिस्ट्रेट दोषी के खर्चे पर तालाब को पुनः खुदवाने का आदेश देंगे।',
        'कार्रवाई न होने पर उच्च न्यायालय से खुदाई एवं बहाली का आदेश प्राप्त करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-09-1',
        name: { en: 'ROR showing Pukur (Waterbody) Status', bn: 'পুকুর চিহ্নিত খতিয়ান বা পর্চা', hi: 'तालाब दर्ज खतियान/पर्चा' },
        issuing_authority: { en: 'Banglarbhumi BL&LRO / KMC Record', bn: 'বাংলারভূমি / কেএমসি', hi: 'बांगलারভূমি / केएमसी' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-10',
    title: {
      en: 'Cancellation of Fraudulent Registered Sale Deed',
      bn: 'প্রতারণামূলক ভুয়ো রেজিস্ট্রি দলিল বাতিল মামলা',
      hi: 'फर्जी एवं धोखाधड़ी से पंजीकृत बिक्री विलेख निरस्तीकरण'
    },
    relevant_act: 'Sec 31, Specific Relief Act, 1963 & Sec 82 Registration Act',
    summary: {
      en: 'Civil suit to cancel registered land deeds obtained through impersonation, forgery, or fraud.',
      bn: 'ভুয়ো ব্যক্তি সাজিয়ে বা সই জাল করে তৈরি জমি বিক্রির দলিল বাতিলের দেওয়ানি মামলা।',
      hi: 'फर्जी व्यक्ति या जाली हस्ताक्षर द्वारा पंजीकृत जमीन रजिस्ट्री को रद्द कराने का वाद।'
    },
    authority_forum: {
      en: 'Civil Court (Senior / Junior Division) / City Civil Court',
      bn: 'দেওয়ানি আদালত (সিনিয়র / জুনিয়র ডিভিশন) / সিটি সিভিল কোর্ট',
      hi: 'सिविल न्यायालय (सीनियर/जूनियर डिवीजन)'
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
      en: ['deed cancellation', 'fraud deed', 'section 31 specific relief'],
      bn: ['দলিল বাতিল মামলা', 'ভুয়ো দলিল', 'জাল রেজিস্ট্রি'],
      hi: ['विलेख निरस्तीकरण', 'फर्जी रजिस्ट्री', 'दस्तावेज रद्द']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain certified deed copy and thumb-impression audit from Registry Office.',
        'File Civil Suit for Deed Cancellation under Section 31 Specific Relief Act.',
        'Move Order XXXIX CPC application to restrain third-party sale of the land.',
        'Court decrees cancellation and directs Sub-Registrar to endorse book records.'
      ],
      bn: [
        'সাব-রেজিস্ট্রি অফিস থেকে বিতর্কিত দলিলের সার্টিফাইড কপি সংগ্রহ করুন।',
        'স্পেসিফিক রিলিফ অ্যাক্টের ধারা ৩১ অনুযায়ী দেওয়ানি আদালতে মামলা করুন।',
        'জমি হস্তান্তর আটকাতে অর্ডার ৩৯ সিপিসি অনুযায়ী ইনজাংশন জারি করান।',
        'আদালতের ডিক্রির ভিত্তিতে রেজিস্ট্রি অফিস মূল রেকর্ড বুক থেকে দলিল বাতিল করবে।'
      ],
      hi: [
        'पंजीयन कार्यालय से विवादित रजिस्ट्री की प्रमाणित प्रति एवं फिंगरप्रिंट निकालें।',
        'विशिष्ट अनुतोष अधिनियम की धारा 31 के तहत दीवानी न्यायालय में वाद दायर करें।',
        'आदेश 39 सीपीसी के तहत आगे की बिक्री पर तुरंत स्थगनादेश प्राप्त करें।',
        'अदालती डिक्री के आधार पर रजिस्ट्रार कार्यालय अभिलेखों में विलेख रद्द करेगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-10-1',
        name: { en: 'Certified Copy of Fraudulent Deed', bn: 'ভুয়ো দলিলের সার্টিফাইড কপি', hi: 'फर्जी विलेख की प्रमाणित प्रति' },
        issuing_authority: { en: 'Sub-Registrar (ADSR)', bn: 'সাব-রেজিস্ট্রার অফিস', hi: 'उप-पंजीयक कार्यालय' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-11',
    title: {
      en: 'Tribal Land Transfer Restrictions (ST Land)',
      bn: 'তপশিলি উপজাতি (ST) জমির বেআইনি হস্তান্তর রদ',
      hi: 'अनुसूचित जनजाति (ST) भूमि के अवैध अंतरण पर रोक एवं बहाली'
    },
    relevant_act: 'Chapter IIA (Sec 14B–14H), WBLR Act, 1955',
    summary: {
      en: 'Restoration of tribal agricultural lands transferred illegally without District Magistrate permission.',
      bn: 'জেলাশাসকের অনুমতি ছাড়া তপশিলি উপজাতির জমি অ-উপজাতির কাছে বিক্রি বাতিল ও পুনর্বহাল।',
      hi: 'जिला कलेक्टर की पूर्व अनुमति के बिना एसटी भूमि की बिक्री को अवैध घोषित कर भूमि वापस दिलाना।'
    },
    authority_forum: {
      en: 'District Magistrate / Tribal Welfare Collector',
      bn: 'জেলাশাসক / অনগ্রসর কল্যাণ আধিকারিক',
      hi: 'जिला मजिस्ट्रेट / आदिवासी कल्याण अधिकारी'
    },
    forum_type: 'Competent_Authority',
    is_complex: true,
    official_portal_url: 'https://banglarbhumi.gov.in/',
    statutory_timeframe: {
      en: '60 working days',
      bn: '৬০ কার্যদিবস',
      hi: '60 कार्यदिवस'
    },
    search_keywords: {
      en: ['st land transfer', 'tribal land wb', 'chapter iia wblr'],
      bn: ['আদিবাসী জমি', 'তপশিলি জমি হস্তান্তর', 'এসটি ল্যান্ড'],
      hi: ['आदिवासी भूमि', 'एसटी जमीन अंतरण', 'जनजाति जमीन बहाली']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Submit petition under Section 14C WBLR Act before Revenue Officer / DM.',
        'Prove transfer lacked prior written statutory permission of District Magistrate.',
        'Revenue Officer conducts hearing and issues physical eviction orders.',
        'Land is re-entered in tribal owner’s name and handed over with police aid.'
      ],
      bn: [
        'ধারা ১৪সি অনুযায়ী জেলাশাসক বা রেভিনিউ অফিসারের কাছে দরখাস্ত জমা দিন।',
        'প্রমাণ করুন জমি বিক্রিতে জেলাশাসকের পূর্বানুমোদন নেওয়া হয়নি।',
        'রাজস্ব আধিকারিক শুনানি শেষে বেআইনি দখলকারীকে উচ্ছেদের আদেশ দেবেন।',
        'পুলিশের সহায়তায় আদিবাসী মালিককে জমির দখল ফিরিয়ে দেওয়া হবে।'
      ],
      hi: [
        'धारा 14C के तहत जिला मजिस्ट्रेट/राजस्व अधिकारी के पास आवेदन करें।',
        'साबित करें कि जमीन बिक्री में जिला कलेक्टर की लिखित अनुमति नहीं थी।',
        'राजस्व अधिकारी द्वारा सुनवाई कर अवैध खरीदार को बेदखल करने का आदेश होगा।',
        'पुलिस की मदद से आदिवासी भूस्वामी को जमीन का वास्तविक कब्जा वापस मिलेगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-11-1',
        name: { en: 'Scheduled Tribe (ST) Certificate', bn: 'তপশিলি উপজাতি শংসাপত্র', hi: 'अनुसूचित जनजाति प्रमाणपत्र' },
        issuing_authority: { en: 'Sub-Divisional Officer (SDO)', bn: 'মহকুমা শাসক (SDO)', hi: 'एसडीओ कार्यालय' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-12',
    title: {
      en: 'Distribution & Cancellation of Government Patta Land',
      bn: 'সরকারি পাট্টা জমি বণ্টন ও বেআইনি পাট্টা বাতিল',
      hi: 'सरकारी पट्टा भूमि आवंटन एवं अवैध पट्टा निरस्तीकरण'
    },
    relevant_act: 'Sec 49, West Bengal Land Reforms Act, 1955',
    summary: {
      en: 'Challenge illegal sale of government patta land or apply for cancellation of bogus pattas in rural districts.',
      bn: 'সরকারি পাট্টা জমি বেআইনি বিক্রি বাতিল এবং প্রকৃত ভূমিহীনদের পাট্টা পাওয়ার আইনি পথ।',
      hi: 'अपात्रों द्वारा धोखाधड़ी से प्राप्त पट्टा निरस्त कराना एवं पात्रों को जमीन दिलाना।'
    },
    authority_forum: {
      en: 'Sub-Divisional Land and Land Reforms Officer (SD&LRO)',
      bn: 'মহকুমা ভূমি ও ভূমি সংস্কার আধিকারিক (SD&LRO)',
      hi: 'अनुमंडल भूमि एवं भूमि सुधार अधिकारी'
    },
    forum_type: 'BL_LRO',
    is_complex: false,
    official_portal_url: 'https://banglarbhumi.gov.in/',
    statutory_timeframe: {
      en: '60 working days',
      bn: '৬০ কার্যদিবস',
      hi: '60 কার্যদিবস'
    },
    search_keywords: {
      en: ['patta land', 'patta cancellation', 'section 49 wblr'],
      bn: ['পাট্টা জমি', 'পাট্টা বাতিল', 'ভূমিহীন পাট্টা'],
      hi: ['पट्टा जमीन', 'पट्टा निरस्तीकरण', 'सरकारी जमीन पट्टा']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Submit application under Section 49(2) before the SD&LRO.',
        'Prove patta holder was not a landless farmer or sold the land unlawfully.',
        'SD&LRO holds field hearing and passes formal order annulling the patta.',
        'Land is re-vested in State Khas Khatian and re-allotted to eligible BPL families.'
      ],
      bn: [
        'এসডিঅ্যান্ডএলআরও অফিসে ধারা ৪৯(২) অনুযায়ী পাট্টা বাতিলের আবেদন করুন।',
        'প্রমাণ করুন যে পাট্টাধারী ভুয়ো নথিতে পাট্টা নিয়েছে বা জমি বিক্রি করেছে।',
        'মহকুমা ভূমি সংস্কার আধিকারিক শুনানি গ্রহণ করে পাট্টা বাতিলের আদেশ দেবেন।',
        'জমি সরকারি খাসে নিয়ে প্রকৃত ভূমিহীন পরিবারকে পুনরায় পাট্টা দেওয়া হবে।'
      ],
      hi: [
        'एसडी एंड एलआरओ के समक्ष धारा 49(2) के तहत शिकायत दर्ज करें।',
        'प्रमाण दें कि पट्टाधारक अपात्र था या उसने पट्टा भूमि अवैध रूप से बेची है।',
        'अधिकारी द्वारा जांच एवं सुनवाई कर पट्टा निरस्त करने का आदेश दिया जाएगा।',
        'भूमि सरकारी खाते में दर्ज कर नए पात्र भूमिहीन परिवारों को आवंटित होगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-12-1',
        name: { en: 'Certified Copy of Challenged Patta', bn: 'বিতর্কিত পাট্টার সার্টিফাইড কপি', hi: 'पट्टा प्रमाणपत्र की प्रमाणित प्रति' },
        issuing_authority: { en: 'BL&LRO / SD&LRO Records Room', bn: 'ভূমি রেকর্ড রুম', hi: 'भूमि रिकॉर्ड रूम' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-13',
    title: {
      en: 'Specific Performance of Land Sale Agreement (Baina)',
      bn: 'বায়না চুক্তিতে জমি হস্তান্তরে অস্বীকার ও মামলা',
      hi: 'बयाना समझौते के तहत जमीन रजिस्ट्री का वाद (विशिष्ट अनुतोष)'
    },
    relevant_act: 'Sec 10, 16 & 20, Specific Relief Act, 1963',
    summary: {
      en: 'Compel seller through civil court to execute registered sale deed after taking advance token money.',
      bn: 'বায়নার টাকা নেওয়ার পর জমির মালিক রেজিস্ট্রি করতে অস্বীকার করলে বাধ্য করার দেওয়ানি মামলা।',
      hi: 'बयाना लेकर रजिस्ट्री करने से मुकरने वाले भूस्वामी के विरुद्ध अदालती रजिस्ट्री का वाद।'
    },
    authority_forum: {
      en: 'Civil Court (Senior / Junior Division) / City Civil Court',
      bn: 'দেওয়ানি আদালত (সিভিল জজ) / সিটি সিভিল কোর্ট',
      hi: 'सिविल न्यायालय / वाणिज्यिक न्यायालय'
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
      en: ['baina chukti', 'agreement to sell', 'specific performance land'],
      bn: ['বায়না চুক্তি', 'বায়না মামলা', 'জমি রেজিস্ট্রি অস্বীকার'],
      hi: ['बयाना एग्रीमेंट', 'विशिष्ट अनुतोष वाद', 'जमीन रजिस्ट्री इंकार']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Serve statutory legal notice expressing readiness to pay balance consideration.',
        'File Civil Suit for Specific Performance under Section 10 of SRA within 3 years.',
        'Deposit the balance sale consideration into court to prove continuous readiness.',
        'Court passes decree; if seller refuses, court officer executes registered deed.'
      ],
      bn: [
        'বাকি টাকা দিতে প্রস্তুত জানিয়ে বিক্রেতাকে উকিল নোটিশ পাঠান।',
        'নির্দিষ্ট ৩ বছরের মধ্যে স্পেসিফিক রিলিফ অ্যাক্টের ধারা ১০ অনুযায়ী মামলা করুন।',
        'আদালতে বাকি টাকা জমা দিয়ে প্রমাণ করুন আপনি চুক্তি পালনে সদাপ্রস্তুত।',
        'আদালতের ডিক্রি কার্যকর করে কোর্ট অফিসার স্বয়ং দলিল রেজিস্ট্রি করে দেবেন।'
      ],
      hi: [
        'शेष राशि देकर रजिस्ट्री कराने हेतु भूस्वामी को विधिक नोटिस भेजें।',
        'विशिष्ट अनुतोष अधिनियम की धारा 10 के अंतर्गत दीवानी वाद दायर करें।',
        'शेष राशि अदालत में जमा कर अपनी वित्तीय तत्परता साबित करें।',
        'अदालत द्वारा विक्रेता के स्थान पर कोर्ट कमिश्नर नियुक्त कर रजिस्ट्री कराई जाएगी।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-13-1',
        name: { en: 'Registered Agreement to Sell (Baina Chukti)', bn: 'রেজিস্ট্রি বায়না চুক্তিপত্র', hi: 'पंजीकृत बयाना अनुबंध' },
        issuing_authority: { en: 'Sub-Registrar Office (ADSR)', bn: 'সাব-রেজিস্ট্রার অফিস', hi: 'उप-पंजीयक कार्यालय' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-14',
    title: {
      en: 'Land Acquisition Compensation Enhancement',
      bn: 'সরকারি জমি অধিগ্রহণের ক্ষতিপূরণ বৃদ্ধি ও রেফারেন্স',
      hi: 'सरकारी भूमि अधिग्रहण मुआवजे में वृद्धि एवं संदर्भ याचिका'
    },
    relevant_act: 'Sec 64, RFCTLARR Act, 2013',
    summary: {
      en: 'Challenge low compensation awarded for land acquired by government and seek market rate enhancement.',
      bn: 'সরকারি প্রকল্পে নেওয়া জমির নামমাত্র ক্ষতিপূরণের বিরুদ্ধে ক্ষতিপূরণ বৃদ্ধির মামলা।',
      hi: 'सरकारी अधिग्रहण में कम मुआवजा मिलने पर बाजार दर पर उच्च मुआवजा पाने का वाद।'
    },
    authority_forum: {
      en: 'LARR Authority / Designated Judicial Officer',
      bn: 'ভূমি অধিগ্রহণ ট্রাইব্যুনাল (LARR Authority)',
      hi: 'भूमि अधिग्रहण पुनर्वास प्राधिकरण (LARR)'
    },
    forum_type: 'Civil_Court',
    is_complex: true,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: 'Within 6 weeks of award notice; 6 months to 1 year',
      bn: 'নোটিশের ৬ সপ্তাহের মধ্যে; ৬ মাস থেকে ১ বছর',
      hi: 'अवार्ड के 6 सप्ताह में; 6 माह से 1 वर्ष'
    },
    search_keywords: {
      en: ['land acquisition compensation', 'rfctlarr 2013', 'enhancement claim'],
      bn: ['জমি অধিগ্রহণ ক্ষতিপূরণ', 'অধিগ্রহণ মামলা', 'বাজার দর বৃদ্ধি'],
      hi: ['भूमि अधिग्रहण मुआवजा', 'मुआवजा वृद्धि', 'लार प्राधिकरण']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Accept government compensation award strictly "Under Protest" in writing.',
        'Submit Section 64 Reference Petition before the Collector within 6 weeks.',
        'Collector forwards docket to the Land Acquisition Rehabilitation Authority (LARR).',
        'Judge determines revised market value with 100% Solatium and 12% annual interest.'
      ],
      bn: [
        'ক্ষতিপূরণের টাকা নেওয়ার সময় লিখিতভাবে "Under Protest" (আপত্তিসহ) নথিভুক্ত করুন।',
        '৬ সপ্তাহের মধ্যে জেলা কালেক্টরের কাছে ধারা ৬৪ অনুযায়ী রেফারেন্স আবেদন করুন।',
        'কালেক্টর ফাইলটি বিশেষ ভূমি অধিগ্রহণ ট্রাইব্যুনালে প্রেরণ করবেন।',
        'বিচারক বাজার মূল্য বিবেচনা করে ১০০% ক্ষতিপূরণ (Solatium) ও ১২% সুদ মঞ্জুর করবেন।'
      ],
      hi: [
        'मुआवजा राशि स्वीकार करते समय लिखित में "आपत्ति सहित" (Under Protest) दर्ज कराएं।',
        'अवार्ड के 6 सप्ताह के भीतर कलेक्टर के पास धारा 64 संदर्भ याचिका दाखिल करें।',
        'कलेक्टर द्वारा मामला विशेष भूमि अधिग्रहण प्राधिकरण को भेजा जाएगा।',
        'न्यायालय द्वारा 100% सोलेशियम एवं 12% ब्याज सहित बढ़ा हुआ मुआवजा दिया जाएगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-14-1',
        name: { en: 'Award Notice under Section 37', bn: 'ধারা ৩৭ নোটিশ ও অ্যাওয়ার্ড কপি', hi: 'अधिग्रहण अवार्ड नोटिस प्रति' },
        issuing_authority: { en: 'Land Acquisition Collector (DM Office)', bn: 'জেলা ভূমি অধিগ্রহণ সেল', hi: 'भूमि अधिग्रहण समाहर्ता' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-15',
    title: {
      en: 'Undivided Share (UDS) Mutation for Flats',
      bn: 'বহুতল ফ্ল্যাটের আনডিভাইডেড শেয়ার (UDS) মিউটেশন',
      hi: 'अपार्टमेंट फ्लैट के अविभाजित भूमि अंश (UDS) का नामांतरण'
    },
    relevant_act: 'Sec 50 WBLR Act (Districts) / Sec 183 KMC Act (Kolkata)',
    summary: {
      en: 'Mutating proportionate land share for apartments: In districts via Banglarbhumi UDS portal; in Kolkata via KMC Assessment Department for separate Assessee Card.',
      bn: 'বহুতল ফ্ল্যাটের আনডিভাইডেড ল্যান্ড শেয়ার মিউটেশন (জেলায় বাংলারভূমি বনাম কলকাতায় KMC Assessee কার্ড)।',
      hi: 'फ्लैट खरीदारों का जमीन में अनुपातिक हिस्सा म्यूटेशन (जिलों में बांगलारभूमि बनाम कोलकाता में केएमसी असेसी कार्ड)।'
    },
    authority_forum: {
      en: 'BL&LRO (Districts) / KMC Assessment Dept (Kolkata)',
      bn: 'বিএলঅ্যান্ডএলআরও (জেলা) / কেএমসি এসেসমেন্ট সেল (কলকাতা)',
      hi: 'बीएल एंड एलआरओ (जिले) / केएमसी कर विभाग (कोलकाता)'
    },
    forum_type: 'BL_LRO',
    is_complex: false,
    official_portal_url: 'https://banglarbhumi.gov.in/',
    statutory_timeframe: {
      en: '45 working days',
      bn: '৪৫ কার্যদিবস',
      hi: '45 कार्यदिवस'
    },
    search_keywords: {
      en: ['flat uds mutation', 'apartment mutation wb', 'kmc flat assessee card'],
      bn: ['ফ্ল্যাট মিউটেশন', 'আনডিভাইডেড শেয়ার', 'কেএমসি ফ্ল্যাট এসেসি'],
      hi: ['फ्लैट म्यूटेशन', 'यूडीएस भूमि', 'केएमसी फ्लैट म्यूटेशन']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'BL&LRO (Banglarbhumi UDS Section) / BMC / HMC',
          bn: 'বিএলঅ্যান্ডএলআরও (ইউডিএস শাখা) / বিধাননগর পুরনিগম (BMC) / হাওড়া (HMC)',
          hi: 'बीएल एंड एलआरओ (यूडीएस शाखा) / विधाननगर (BMC) / हावड़ा (HMC)'
        },
        portal_name: { en: 'Banglarbhumi UDS Flat Portal', bn: 'বাংলারভূমি ফ্ল্যাট পোর্টাল', hi: 'बांगलारभूमि यूडीएस' },
        portal_url: 'https://banglarbhumi.gov.in/',
        steps: {
          en: [
            'Submit online Flat Mutation application on Banglarbhumi selecting UDS mode.',
            'Upload registered flat conveyance deed mentioning exact square-foot UDS share.',
            'Pay mutation fee via GRIPS and upload sanctioned building completion plan.',
            'Download independent Khatian Porcha generated in flat owner’s name.'
          ],
          bn: [
            'বাংলারভূমি পোর্টালে ইউডিএস ক্যাটাগরি বেছে ফ্ল্যাট মিউটেশন আবেদন করুন।',
            'ফ্ল্যাটের রেজিস্ট্রি দলিল ও অনুমোদিত বিল্ডিং প্ল্যানের কপি আপলোড করুন।',
            'GRIPS-এ ফি জমা দিন এবং নির্ধারিত তারিখে শুনানিতে নথি প্রদর্শন করুন।',
            'ফ্ল্যাট মালিকের নামে স্বত্ব ঘোষিত স্বাধীন খতিয়ান পর্চা ডাউনলোড করুন।'
          ],
          hi: [
            'बांगलारभूमि पोर्टल पर यूडीएस श्रेणी का चयन कर फ्लैट म्यूटेशन आवेदन करें।',
            'पंजीकृत फ्लैट विलेख एवं अनुमोदित भवन योजना की प्रतियां अपलोड करें।',
            'GRIPS पोर्टल पर निर्धारित शुल्क भुगतान कर सुनवाई में शामिल हों।',
            'फ्लैट खरीदार के नाम से स्वतंत्र खतियान पर्चा ऑनलाइन डाउनलोड करें।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'Kolkata Municipal Corporation (Assessment & Collection Dept)',
          bn: 'কলকাতা পৌরসংস্থা (মূল্যায়ন ও কর সংগ্রাহক বিভাগ - KMC)',
          hi: 'कोलकाता नगर निगम (मूल्यांकन विभाग)'
        },
        portal_name: { en: 'KMC Flat Assessment Portal', bn: 'কেএমসি ফ্ল্যাট এসেসমেন্ট সেল', hi: 'केएमसी फ्लैट पोर्टल' },
        portal_url: 'https://www.kmcgov.in/',
        steps: {
          en: [
            'Apply online on KMC portal for allotment of separate Assessee Number for flat unit.',
            'Upload registered flat deed mentioning flat number, floor, and proportionate share.',
            'KMC inspector inspects building and calculates individual flat annual property tax valuation.',
            'Receive dedicated KMC Assessee Card and independent property tax billing status.'
          ],
          bn: [
            'কেএমসি পোর্টালে গিয়ে ফ্ল্যাটের জন্য পৃথক এসেসি নম্বরের অনলাইন আবেদন করুন।',
            'ফ্ল্যাট নম্বর, তলা ও সুপার বিল্ট-আপ এরিয়ার বিবরণসহ রেজিস্ট্রি দলিল আপলোড করুন।',
            'কেএমসি পরিদর্শক সরেজমিনে ফ্ল্যাট পরিদর্শন করে বার্ষিক কর মূল্যায়ন করবেন।',
            'ফ্ল্যাটের নামে স্বাধীন কেএমসি এসেসি কার্ড ও পৃথক পুর কর বিলের অনুমোদন পান।'
          ],
          hi: [
            'केएमसी पोर्टल पर व्यक्तिगत फ्लैट हेतु स्वतंत्र असेसी नंबर आवंटन का आवेदन करें।',
            'फ्लैट नंबर, मंजिल एवं कवर्ड एरिया दर्ज बिक्री विलेख की प्रति अपलोड करें।',
            'केएमसी निरीक्षक द्वारा फ्लैट का स्थल मुआयना कर वार्षिक कर तय किया जाएगा।',
            'फ्लैट के नाम से स्वतंत्र केएमसी असेसी कार्ड एवं टैक्स बिल जारी होगा।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Submit online Flat Mutation application on Banglarbhumi selecting UDS mode.',
        'Upload registered flat conveyance deed mentioning exact square-foot UDS share.',
        'Pay mutation fee via GRIPS and upload sanctioned building completion plan.',
        'Download independent Khatian Porcha generated in flat owner’s name.'
      ],
      bn: [
        'বাংলারভূমি পোর্টালে ইউডিএস ক্যাটাগরি বেছে ফ্ল্যাট মিউটেশন আবেদন করুন।',
        'ফ্ল্যাটের রেজিস্ট্রি দলিল ও অনুমোদিত বিল্ডিং প্ল্যানের কপি আপলোড করুন।',
        'GRIPS-এ ফি জমা দিন এবং নির্ধারিত তারিখে শুনানিতে নথি প্রদর্শন করুন।',
        'ফ্ল্যাট মালিকের নামে স্বত্ব ঘোষিত স্বাধীন খতিয়ান পর্চা ডাউনলোড করুন।'
      ],
      hi: [
        'बांगलारभूमि पोर्टल पर यूडीएस श्रेणी का चयन कर फ्लैट म्यूटेशन आवेदन करें।',
        'पंजीकृत फ्लैट विलेख एवं अनुमोदित भवन योजना की प्रतियां अपलोड करें।',
        'GRIPS पोर्टल पर निर्धारित शुल्क भुगतान कर सुनवाई में शामिल हों।',
        'फ्लैट खरीदार के नाम से स्वतंत्र खतियान पर्चा ऑनलाइन डाउनलोड करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-15-1',
        name: { en: 'Registered Flat Conveyance Deed', bn: 'রেজিস্ট্রি ফ্ল্যাট বিক্রয় দলিল', hi: 'पंजीकृत फ्लैट बिक्री विलेख' },
        issuing_authority: { en: 'Sub-Registrar (ADSR)', bn: 'সাব-রেজিস্ট্রার অফিস', hi: 'उप-पंजीयक कार्यालय' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-16',
    title: {
      en: 'Adverse Possession & Title by Prescription',
      bn: 'প্রতিকূল দখল ও দীর্ঘমেয়াদী স্বত্ব',
      hi: 'प्रतिकूल कब्जा एवं लंबे उपभोग द्वारा मालिकाना हक'
    },
    relevant_act: 'Sec 27, Limitation Act, 1963; Ravinder Kaur Grewal (SC)',
    summary: {
      en: 'Perfecting ownership over private land through 12+ years of continuous, open, and hostile possession.',
      bn: 'টানা ১২ বছরের বেশি সময় অবাধ ও প্রতিকূল দখলে থাকার ভিত্তিতে জমির পূর্ণ মালিকানা অর্জন।',
      hi: 'बिना रोक-टोक 12 वर्षों से अधिक समय तक लगातार कब्जे के आधार पर जमीन पर पूर्ण मालिकाना हक।'
    },
    authority_forum: {
      en: 'Civil Court (Senior Division) / City Civil Court Kolkata',
      bn: 'দেওয়ানি আদালত (সিনিয়র ডিভিশন) / সিটি সিভিল কোর্ট কলকাতা',
      hi: 'सिविल न्यायालय (सीनियर डिवीजन) / सिटी सिविल कोर्ट कोलकाता'
    },
    forum_type: 'Civil_Court',
    is_complex: true,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: '12 years possession; 1 to 3 years trial',
      bn: '১২ বছর দখল; ১ থেকে ৩ বছর মামলা',
      hi: '12 वर्ष कब्जा; 1 से 3 वर्ष वाद'
    },
    search_keywords: {
      en: ['adverse possession', 'limitation act 27', 'prescription title'],
      bn: ['প্রতিকূল দখল', 'অ্যাডভার্স পজিশন', '১২ বছর দখল'],
      hi: ['प्रतिकूल कब्जा', 'एडवर्स पजेशन', '12 साल कब्जा']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Compile 12+ years of continuous electricity, municipal tax, and voter proofs.',
        'Serve formal legal reply refuting paper owner demands upon threatened eviction.',
        'File Title Declaration Suit under Section 34 Specific Relief Act before Civil Judge.',
        'Pray for Advocate Commissioner under Order XXVI CPC to verify physical boundary.'
      ],
      bn: [
        'টানা ১২ বছরের বিদ্যুৎ বিল, ট্যাক্স রসিদ ও ভোটার তালিকার প্রমাণপত্র জোগাড় করুন।',
        'উচ্ছেদের হুমকি দিলে কাগজী মালিকের দাবির বিরুদ্ধে আইনি নোটিশ পাঠান।',
        'স্পেসিফিক রিলিফ অ্যাক্টের ধারা ৩৪ অনুযায়ী স্বত্ব ঘোষণার দেওয়ানি মামলা করুন।',
        'অর্ডার ২৬ সিপিসি অনুযায়ী কোর্ট কমিশনার দিয়ে সীমানা দখল যাচাই করান।'
      ],
      hi: [
        'लगातार 12 वर्षों के बिजली बिल, गृहकर रसीद एवं वोटर रिकॉर्ड संकलित करें।',
        'बेदखली की धमकी मिलने पर प्रतिकूल कब्जे का विधिक नोटिस प्रेषित करें।',
        'विशिष्ट अनुतोष अधिनियम की धारा 34 के तहत दीवानी न्यायालय में स्वत्व वाद दायर करें।',
        'आदेश 26 सीपीसी के तहत कोर्ट अमीन द्वारा स्थल पर भौतिक कब्जे का सत्यापन कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-16-1',
        name: { en: 'Continuous Utility & Tax Receipts (12+ Years)', bn: '১২ বছরের খাজনা ও বিদ্যুৎ বিল', hi: '12 वर्षों के बिजली व कर रसीद' },
        issuing_authority: { en: 'Municipality / KMC / CESC / WBSEDCL', bn: 'পৌরসভা / কেএমসি / বিদ্যুৎ দপ্তর', hi: 'नगर पालिका / विद्युत बोर्ड' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-17',
    title: {
      en: 'Encroachment on Common Village Land & Waterways',
      bn: 'গ্রাম পঞ্চায়েত ও গোচর জমি জবরদখল উচ্ছেদ',
      hi: 'ग्राम समाज एवं चारागाह (गोचर) भूमि से अवैध कब्जा हटाना'
    },
    relevant_act: 'WBLR Act r/w Jagpal Singh v. State of Punjab (SC)',
    summary: {
      en: 'Rural & district panchayat focus: evicting encroachers from village pastures, grazing commons, and crematorium lands.',
      bn: 'গ্রাম পঞ্চায়েতের সাধারণ গোচর, শ্মশান বা জলাভূমি জবরদখলকারীদের আইনি উচ্ছেদ।',
      hi: 'ग्राम सभा की चारागाह, कब्रिस्तान, श्मशान या पोखरे की जमीन से भू-माफिया का कब्जा हटाना।'
    },
    authority_forum: {
      en: 'BL&LRO / Block Development Officer (BDO) / High Court',
      bn: 'বিএলঅ্যান্ডএলআরও / বিডিও / হাইকোর্ট',
      hi: 'बीएल एंड एलआरओ / बीडीओ / उच्च न्यायालय'
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
      en: ['gochar land', 'village common land', 'jagpal singh sc'],
      bn: ['গোচর জমি', 'পঞ্চায়েত জমি দখল', 'সাধারণ খাস জমি'],
      hi: ['चारागाह जमीन', 'ग्राम सभा जमीन', 'सरकारी जमीन कब्जा']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Submit joint citizen complaint to BL&LRO with photographic proof of encroachment.',
        'Submit representation to DM citing Jagpal Singh Supreme Court directions.',
        'Revenue Officer issues statutory eviction notice under Public Land Eviction Act.',
        'If delayed, file Public Interest Litigation (PIL) before High Court at Calcutta.'
      ],
      bn: [
        'জবরদখলের সচিত্র প্রমাণসহ বিএলঅ্যান্ডএলআরও অফিসে গণঅভিযোগ জমা দিন।',
        'সুপ্রিম কোর্টের জাগপাল সিং রায় উল্লেখ করে জেলাশাসকের কাছে স্মারকলিপি দিন।',
        'সরকারি জমি উচ্ছেদ আইন অনুযায়ী রাজস্ব আধিকারিক উচ্ছেদ নোটিশ জারি করবেন।',
        'দেরি হলে কলকাতা হাইকোর্টে জনস্বার্থ মামলা (PIL) দায়ের করুন।'
      ],
      hi: [
        'अवैध कब्जे की फोटो सहित बीएल एंड एलआरओ को सामूहिक नागरिक शिकायत दें।',
        'सुप्रीम कोर्ट के जगपाल सिंह फैसले का हवाला देते हुए कलेक्टर को आवेदन दें।',
        'राजस्व अधिकारी द्वारा लोक भूमि बेदखली अधिनियम के तहत नोटिस जारी होगा।',
        'प्रशासनिक देरी होने पर उच्च न्यायालय में जनहित याचिका (PIL) दाखिल करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-17-1',
        name: { en: 'Mouza Map Showing Common Gochar Plot', bn: 'গোচর চিহ্নিত মৌজা ম্যাপ', hi: 'चारागाह दर्ज मौजा नक्शा' },
        issuing_authority: { en: 'DL&LRO Survey Department', bn: 'ভূমি রেকর্ড বিভাগ', hi: 'भूमि रिकॉर्ड विभाग' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-18',
    title: {
      en: 'Easementary Right of Way & Air/Light Protection',
      bn: 'চলাচলের পথ ও আলো-বাতাসের এজমেন্ট অধিকার',
      hi: 'रास्ते का सुखाधिकार (ईजमेंट) एवं खिड़की हवा-रोशनी संरक्षण'
    },
    relevant_act: 'Sec 15 & 18, Indian Easements Act, 1882 & Sec 38 SRA',
    summary: {
      en: 'Protect 20-year uninterrupted passage or window air/light from obstruction by neighbors in urban and rural areas.',
      bn: '২০ বছর ধরে ব্যবহৃত চলাচলের রাস্তা বা জানালার আলো-বাতাস প্রতিবেশীর নির্মাণ দ্বারা বন্ধের প্রতিকার।',
      hi: '20 वर्षों से उपयोग किए जा रहे रास्ते या खिड़की की हवा-रोशनी को पड़ोसी द्वारा रोकने पर कानूनी वाद।'
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
      en: '20 years user; 6 months to 1 year suit',
      bn: '২০ বছরের ব্যবহার; ৬ মাস থেকে ১ বছর',
      hi: '20 वर्ष का उपभोग; 6 माह से 1 वर्ष'
    },
    search_keywords: {
      en: ['easement right of way', 'air and light easement', 'passage dispute'],
      bn: ['চলাচলের রাস্তা', 'এজমেন্ট অধিকার', 'আলো বাতাস বন্ধ'],
      hi: ['रास्ते का विवाद', 'ईजमेंट अधिकार', 'सुखाधिकार वाद']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Serve statutory Cease and Desist Legal Notice to neighbor blocking the path.',
        'File Civil Suit for Declaration of Easementary Right under Order VII CPC.',
        'Move Order XXXIX CPC application to immediately halt construction on path.',
        'Secure local inspection by court commissioner to record passage width.'
      ],
      bn: [
        'পথ বন্ধকারী প্রতিবেশীকে অবিলম্বে কাজ বন্ধের আইনি নোটিশ পাঠান।',
        'অর্ডার ৭ সিপিসি অনুযায়ী দেওয়ানি আদালতে এজমেন্ট স্বত্ব ঘোষণার মামলা করুন।',
        'অর্ডার ৩৯ অনুযায়ী নির্মাণ কাজ অবিলম্বে বন্ধে অন্তর্বর্তী ইনজাংশন পান।',
        'কোর্ট কমিশনার নিয়োগ করিয়ে রাস্তার মাপ ও অবস্থা আদালতে নথিবদ্ধ করান।'
      ],
      hi: [
        'रास्ता रोकने वाले पड़ोसी को विधिक नोटिस भेजकर तुरंत निर्माण रोकने को कहें।',
        'दीवानी अदालत में आदेश 7 सीपीसी के तहत सुखाधिकार घोषणा का वाद दायर करें।',
        'आदेश 39 सीपीसी के तहत रास्ते पर हो रहे निर्माण पर तुरंत स्थगनादेश लें।',
        'कोर्ट कमिश्नर द्वारा मौके का मुआयना कराकर रास्ते की चौड़ाई प्रमाणित कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-18-1',
        name: { en: 'Site Layout Plan Proving Historic Passage', bn: 'পুরনো রাস্তার নকশা ও দলিল', hi: 'पुश्तैनी रास्ते का नक्शा व विलेख' },
        issuing_authority: { en: 'Licensed Surveyor / Municipality / KMC', bn: 'পৌরসভা / কেএমসি / সার্ভেয়ার', hi: 'नगर पालिका / अमीन' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-19',
    title: {
      en: 'Rectification of Clerical Errors in Registered Sale Deeds',
      bn: 'দলিলের করণিক ভুল সংশোধন ও রেকটিফিকেশন',
      hi: 'पंजीकृत बिक्री विलेख में लिपिकीय त्रुटि सुधार (रेक्टिफिकेशन)'
    },
    relevant_act: 'Sec 26, Specific Relief Act, 1963 & Registration Act',
    summary: {
      en: 'Correct accidental clerical errors in Dag, Khatian, or plot boundaries in registered deeds.',
      bn: 'রেজিস্ট্রি দলিলে দাগ নম্বর, খতিয়ান বা চৌহদ্দির করণিক ভুল সংশোধনের নিয়মাবলী।',
      hi: 'रजिस्ट्री विलेख में खाता, खसरा संख्या या चौहद्दी की टंकण भूल को विधिक रूप से सुधारना।'
    },
    authority_forum: {
      en: 'Sub-Registrar Office (ADSR) / Civil Court',
      bn: 'সাব-রেজিস্ট্রার অফিস (ADSR) / দেওয়ানি আদালত',
      hi: 'उप-पंजीयक कार्यालय / सिविल न्यायालय'
    },
    forum_type: 'Civil_Court',
    is_complex: false,
    official_portal_url: 'https://wbregistration.gov.in/',
    statutory_timeframe: {
      en: '15 days (mutual) / 6 months to 1 year (suit)',
      bn: '১৫ দিন (আপসে) / ৬ মাস থেকে ১ বছর (মামলা)',
      hi: '15 दिन (आपसी) / 6 माह से 1 वर्ष (अदालत)'
    },
    search_keywords: {
      en: ['rectification deed', 'dag error in deed', 'section 26 sra'],
      bn: ['রেকটিফিকেশন দলিল', 'দলিল সংশোধন', 'দাগ নম্বর ভুল'],
      hi: ['रेक्टिफिकेशन डीड', 'विलेख सुधार', 'खसरा नंबर गलती']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Draft bilateral Deed of Rectification (Amolnama) with original vendor.',
        'Pay nominal stamp duty and register at jurisdictional Sub-Registrar (ADSR).',
        'If vendor refuses, file Civil Suit under Section 26 Specific Relief Act.',
        'Submit rectified registered deed to BL&LRO to correct Banglarbhumi ROR.'
      ],
      bn: [
        'মূল বিক্রেতার সাথে আপসক্রমে ভ্রম সংশোধন দলিল (রেকটিফিকেশন) তৈরি করুন।',
        'সাব-রেজিস্ট্রি অফিসে নামমাত্র ফি জমা দিয়ে সংশোধন দলিল রেজিস্ট্রি করান।',
        'বিক্রেতা অসম্মত হলে স্পেসিফিক রিলিফ অ্যাক্টের ধারা ২৬ অনুযায়ী মামলা করুন।',
        'সংশোধিত দলিল বিএলঅ্যান্ডএলআরও-তে জমা দিয়ে পর্চায় দাগ সংশোধন করান।'
      ],
      hi: [
        'मूल विक्रेता के साथ मिलकर सुधार विलेख (रेक्टिफिकेशन डीड) तैयार करें।',
        'उप-पंजीयक कार्यालय में आवश्यक शुल्क देकर सुधार विलेख पंजीकृत कराएं।',
        'विक्रेता के असहयोग पर विशिष्ट अनुतोष अधिनियम की धारा 26 में वाद दायर करें।',
        'सुधरे हुए विलेख को बीएल एंड एलआरओ में जमा कर खतियान में सुधार कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-19-1',
        name: { en: 'Original Registered Deed with Error', bn: 'ভুল থাকা মূল রেজিস্ট্রি দলিল', hi: 'मूल त्रुटिपूर्ण पंजीकृत विलेख' },
        issuing_authority: { en: 'Sub-Registrar Office (ADSR)', bn: 'সাব-রেজিস্ট্রার অফিস', hi: 'उप-पंजीयक कार्यालय' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-20',
    title: {
      en: 'Cancellation of Misused Power of Attorney / GPA Land Sale',
      bn: 'ভুয়ো আমমোক্তারনামা দ্বারা জমি বিক্রি বাতিল',
      hi: 'पावर ऑफ अटॉर्नी (GPA) के दुरुपयोग से की गई रजिस्ट्री रद्द कराना'
    },
    relevant_act: 'Suraj Lamp (SC) r/w Powers of Attorney Act, 1882',
    summary: {
      en: 'Set aside registered land transfers executed by agents using revoked or forged power of attorney.',
      bn: 'বাতিল বা জাল পাওয়ার অব অ্যাটর্নি দেখিয়ে জমি বিক্রির রেজিস্ট্রি বাতিল করার মামলা।',
      hi: 'रद्द या फर्जी मुख्तारनामे के आधार पर बेची गई जमीन की रजिस्ट्री रद्द कराने का वाद।'
    },
    authority_forum: {
      en: 'Civil Court (Senior Division) / City Civil Court',
      bn: 'দেওয়ানি আদালত (সিনিয়র ডিভিশন) / সিটি সিভিল কোর্ট',
      hi: 'सिविल न्यायालय (सीनियर डिवीजन) / सिटी सिविल कोर्ट'
    },
    forum_type: 'Civil_Court',
    is_complex: true,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: 'Within 3 years of knowledge',
      bn: 'জানার ৩ বছরের মধ্যে',
      hi: 'जानकारी के 3 वर्ष के भीतर'
    },
    search_keywords: {
      en: ['gpa land sale cancellation', 'suraj lamp', 'misused poa'],
      bn: ['পাওয়ার অব অ্যাটর্নি বাতিল', 'ভুয়ো আমমোক্তারনামা', 'জমি প্রতারণা'],
      hi: ['जीपीए बिक्री निरस्तीकरण', 'मुख्तारनामा दुरुपयोग', 'फर्जी पावर ऑफ अटॉर्नी']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Publish formal public notice of POA revocation and register Deed of Revocation.',
        'Obtain certified copies of the fraudulent conveyance deed from ADSR.',
        'File Suit for Cancellation of Deed under Section 31 Specific Relief Act.',
        'Lodge criminal FIR under Section 316 BNS for criminal breach of trust.'
      ],
      bn: [
        'সংবাদপত্রে আমমোক্তারনামা বাতিলের নোটিশ দিন এবং সাব-রেজিস্ট্রারে বাতিলপত্র রেজিস্ট্রি করুন।',
        'সাব-রেজিস্ট্রি অফিস থেকে প্রতারণামূলক বিক্রয় দলিলের সার্টিফাইড কপি তুলুন।',
        'স্পেসিফিক রিলিফ অ্যাক্টের ধারা ৩১ অনুযায়ী দলিল বাতিলের দেওয়ানি মামলা করুন।',
        'বিশ্বাসভঙ্গ ও জালিয়াতির অভিযোগে থানায় ধারা ৩১৬ বিএনএস অনুযায়ী এফআইআর করুন।'
      ],
      hi: [
        'मुख्तारनामा निरस्तीकरण का सार्वजनिक नोटिस दें एवं निरस्तीकरण विलेख पंजीकृत कराएं।',
        'उप-पंजीयक कार्यालय से फर्जी बिक्री विलेख की प्रमाणित प्रति प्राप्त करें।',
        'विशिष्ट अनुतोष अधिनियम की धारा 31 के तहत विलेख निरस्तीकरण का वाद करें।',
        'अमानत में खयानत एवं धोखाधड़ी के लिए धारा 316 बीएनएस के तहत प्राथमिकी दर्ज कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-20-1',
        name: { en: 'Registered Deed of Revocation of GPA', bn: 'আমমোক্তারনামা বাতিলের রেজিস্ট্রি ডিড', hi: 'मुख्तारनामा निरस्तीकरण पंजीकृत विलेख' },
        issuing_authority: { en: 'Sub-Registrar (ADSR)', bn: 'সাব-রেজিস্ট্রার অফিস', hi: 'उप-पंजीयक कार्यालय' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-21',
    title: {
      en: 'De Facto Land Taking by Govt without Compensation',
      bn: 'জমি অধিগ্রহণ ছাড়া সরকারি দখল রদ',
      hi: 'बिना अधिग्रहण निजी भूमि पर सरकारी कब्जे के विरुद्ध मुआवजा वाद'
    },
    relevant_act: 'Art 300A, Constitution r/w Vidya Devi (SC)',
    summary: {
      en: 'Compel state agencies or municipal authorities to formally acquire and pay market compensation for land taken for public roads.',
      bn: 'অধিগ্রহণ ব্যতিরেকে রাস্তা বা নিকাশীর জন্য নেওয়া জমির ন্যায্য ক্ষতিপূরণ আদায়ের রিট।',
      hi: 'सड़क या नाली निर्माण हेतु बिना मुआवजा अधिगृहीत की गई जमीन का बाजार भाव पाने का वाद।'
    },
    authority_forum: {
      en: 'High Court at Calcutta (Writ Jurisdiction)',
      bn: 'কলকাতা হাইকোর্ট (রিট বেঞ্চ)',
      hi: 'कलकत्ता उच्च न्यायालय (रिट क्षेत्राधिकार)'
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
      en: ['vidya devi land', 'article 300a land taking', 'uncompensated road'],
      bn: ['বিনা ক্ষতিপূরণে জমি দখল', 'আর্টিকেল ৩০০এ', 'রাস্তার জমি ক্ষতিপূরণ'],
      hi: ['बिना मुआवजा कब्जा', 'अनुच्छेद 300A', 'सड़क निर्माण मुआवजा']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Collect historical Porchas proving uninterrupted private ownership of road plot.',
        'Submit representation to District Magistrate demanding formal notification/award.',
        'Obtain BL&LRO Land Status Report verifying land was never formally acquired.',
        'File Writ Petition (Mandamus) under Article 226 before High Court at Calcutta.'
      ],
      bn: [
        'রাস্তার প্লটে নিরবচ্ছিন্ন ব্যক্তিগত মালিকানা প্রমাণে মূল পর্চা ও দলিল সংগ্রহ করুন।',
        'বিধি অনুযায়ী ক্ষতিপূরণ প্রদান করতে জেলাশাসকের নিকট আনুষ্ঠানিক স্মারকলিপি দিন।',
        'বিএলঅ্যান্ডএলআরও থেকে রিপোর্ট তুলুন যে জমিটি কখনোই অধিগ্রহণ করা হয়নি।',
        'কলকাতা হাইকোর্টে সংবিধানের অনুচ্ছেদ ২২৬ অনুযায়ী ক্ষতিপূরণ আদায়ের রিট করুন।'
      ],
      hi: [
        'जमीन पर पुश्तैनी स्वामित्व सिद्ध करने वाले खतियान एवं रजिस्ट्री दस्तावेज जुटाएं।',
        'औपचारिक अधिग्रहण एवं मुआवजा जारी करने हेतु जिला कलेक्टर को अभ्यावेदन दें।',
        'बीएल एंड एलआरओ से रिपोर्ट प्राप्त करें कि जमीन कभी कानूनी रूप से अधिगृहीत नहीं हुई।',
        'अनुच्छेद 226 के तहत उच्च न्यायालय में उचित मुआवजे हेतु परमादेश (Mandamus) रिट करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-21-1',
        name: { en: 'BL&LRO / KMC Status Report on Road Land', bn: 'ভূমির শ্রেণি ও সরকারি অধিগ্রহণহীনতা রিপোর্ট', hi: 'जमीन की अद्यतन स्थिति रिपोर्ट' },
        issuing_authority: { en: 'BL&LRO Office / KMC Survey', bn: 'ভূমি দপ্তর / কেএমসি', hi: 'भूमि राजस्व विभाग / केएमसी' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-22',
    title: {
      en: 'Declaration of Title & Recovery of Possession',
      bn: 'স্বত্ব ঘোষণা ও দখল পুনরুদ্ধার দেওয়ানি মামলা',
      hi: 'स्वामित्व घोषणा एवं वास्तविक कब्जा बहाली का दीवानी वाद'
    },
    relevant_act: 'Sec 5 & 34, Specific Relief Act, 1963',
    summary: {
      en: 'Recover physical possession of land from unlawful occupants while securing a judicial title decree.',
      bn: 'বেআইনি দখলদারদের উচ্ছেদ করে জমির স্বত্ব ঘোষণা ও খাস দখল পুনরুদ্ধারের দেওয়ানি মামলা।',
      hi: 'अवैध कब्जाधारियों को बेदखल कर जमीन का मालिकाना हक एवं कब्जा वापस पाने का वाद।'
    },
    authority_forum: {
      en: 'Civil Court (Junior / Senior Division) / City Civil Court',
      bn: 'দেওয়ানি আদালত (সিভিল জজ) / সিটি সিভিল কোর্ট',
      hi: 'सिविल न्यायालय (सीनियर/जूनियर डिवीजन)'
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
      en: ['recovery of possession', 'title declaration suit', 'section 5 sra'],
      bn: ['স্বত্ব ঘোষণা মামলা', 'দখল পুনরুদ্ধার', 'খাস দখল'],
      hi: ['स्वामित्व घोषणा वाद', 'कब्जा बहाली', 'धारा 5 विशिष्ट अनुतोष']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Trace title through 30-year chain deeds, Khajna receipts, and mutation records.',
        'Serve statutory legal notice demanding peaceful handover of vacant possession.',
        'File Civil Suit for Declaration of Title, Recovery of Possession, and Mesne Profits.',
        'Execute final eviction decree with police assistance under Order XXI Rule 35 CPC.'
      ],
      bn: [
        '৩০ বছরের দলিল শৃঙ্খল, হাল খাজনা রশিদ ও মিউটেশন রেকর্ড একত্রিত করুন।',
        '১৫ দিনের মধ্যে শান্তিপূর্ণভাবে জমি খালি করে দখল বুঝিয়ে দিতে লিগ্যাল নোটিশ দিন।',
        'সিভিল জজ আদালতে স্বত্ব ঘোষণা, দখল পুনরুদ্ধার ও ক্ষতিপূরণের মামলা দায়ের করুন।',
        'অর্ডার ২১ রুল ৩৫ সিপিসি অনুযায়ী পুলিশি প্রহরায় উচ্ছেদ ডিক্রি জারি করান।'
      ],
      hi: [
        '30 वर्षों के पुराने विलेख, लगान रसीद एवं म्यूटेशन पर्चों से मालिकाना हक साबित करें।',
        '15 दिनों में अवैध कब्जा खाली करने हेतु अधिवक्ता के माध्यम से कानूनी नोटिस भेजें।',
        'सिविल जज के समक्ष स्वत्व घोषणा, कब्जा बहाली एवं हर्जाने का वाद दायर करें।',
        'आदेश 21 नियम 35 सीपीसी के तहत पुलिस बल की मदद से अदालती बेदखली कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-22-1',
        name: { en: '30-Year Chain Deed Documents', bn: '৩০ বছরের পিঠ দলিল ও খতিয়ান', hi: '30 वर्षों के शृंखलाबद्ध पुराने विलेख' },
        issuing_authority: { en: 'Sub-Registrar (ADSR)', bn: 'সাব-রেজিস্ট্রি রেকর্ড রুম', hi: 'उप-पंजीयक रिकॉर्ड रूम' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-23',
    title: {
      en: 'Benami Property Attachment & Citizen Defense',
      bn: 'বেনামি জমি হস্তান্তর ও বেআইনি নোটিশ চ্যালেঞ্জ',
      hi: 'बेनामी संपत्ति कुर्की नोटिस एवं विधिक बचाव'
    },
    relevant_act: 'Prohibition of Benami Property Transactions Act, 1988',
    summary: {
      en: 'Defend family or ancestral farmland purchased in name of spouse/child against arbitrary attachment.',
      bn: 'স্ত্রী বা সন্তানের নামে কেনা পারিবারিক সম্পত্তিকে বেনামি বলে বাজেয়াপ্ত করা নোটিশের আইনি প্রতিরোধ।',
      hi: 'पत्नी या संतान के नाम खरीदी गई जमीन को बेनामी बताकर कुर्क करने के विरुद्ध बचाव।'
    },
    authority_forum: {
      en: 'Initiating Officer (IT Dept) / Benami Tribunal',
      bn: 'আয়কর বেনামি প্রতিরোধ সেল / ট্রাইব্যুনাল',
      hi: 'बेनामी संपत्ति निषेध प्राधिकरण'
    },
    forum_type: 'Competent_Authority',
    is_complex: true,
    official_portal_url: 'https://incometaxindia.gov.in/',
    statutory_timeframe: {
      en: '90 days response window',
      bn: '৯০ কার্যদিবস',
      hi: '90 कार्यदिवস'
    },
    search_keywords: {
      en: ['benami land notice', 'pbpt act defense', 'spouse land benami'],
      bn: ['বেনামি সম্পত্তি', 'বেনামি নোটিশ চ্যালেঞ্জ', 'পারিবারিক জমি'],
      hi: ['बेनामी जमीन', 'बेनामी संपत्ति नोटिस', 'पारिवारिक जमीन बचाव']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Receive show-cause notice under Section 24(1) from the Initiating Officer.',
        'Prepare factual reply proving purchase funds originated from declared family income.',
        'Submit proof of Section 2(9)(A) statutory exemption (property held for spouse/child).',
        'File appeal before the Appellate Tribunal against unlawful provisional attachment.'
      ],
      bn: [
        'বেনামি প্রতিরোধ ইউনিট থেকে ধারা ২৪(১) নোটিশের সার্টিফাইড কপি সংগ্রহ করুন।',
        'পারিবারিক বৈধ আয় ও কৃষিজ আয় থেকে জমি কেনার ব্যাঙ্ক ট্রানজ্যাকশন প্রস্তুত করুন।',
        'ধারা ২(৯)(এ) অনুযায়ী স্ত্রী বা সন্তানের নামে কেনার আইনি ছাড়পত্র দাখিল করুন।',
        'বেআইনি ক্রোকের বিরুদ্ধে আপিল ট্রাইব্যুনালে আবেদন করে স্থগিতাদেশ নিন।'
      ],
      hi: [
        'आयकर विभाग के इनिशिएटिंग ऑफिसर से धारा 24(1) नोटिस प्राप्त कर जांचें।',
        'जमीन खरीद में वैध बैंक आय एवं कृषि बचत के उपयोग के वित्तीय प्रमाण दें।',
        'धारा 2(9)(A) के तहत पत्नी या संतान के नाम संपत्ति होने की विधिक छूट सिद्ध करें।',
        'कुर्की आदेश के विरुद्ध अपीलीय अधिकरण के समक्ष अपील कर स्थगनादेश प्राप्त करें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-23-1',
        name: { en: 'Bank Statements & Income Source Proof', bn: 'ব্যাঙ্ক স্টেটমেন্ট ও আয়ের প্রমাণপত্র', hi: 'बैंक खाता विवरण एवं वैध आय स्रोत' },
        issuing_authority: { en: 'Commercial Banks / Income Tax Dept', bn: 'ব্যাঙ্ক / আয়কর দপ্তর', hi: 'बैंक / आयकर विभाग' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-24',
    title: {
      en: 'Revenue Map Discrepancy & Bhu-Naksha Mismatch',
      bn: 'ভূমি নকশা ও ডিজিটাল ম্যাপের অসামঞ্জস্য সংশোধন',
      hi: 'भू-नक्शा एवं राजस्व डिजिटल मैप विसंगति सुधार'
    },
    relevant_act: 'WBLR Manual (Districts) / KMC Smart Survey & Alignment (Kolkata)',
    summary: {
      en: 'Resolve boundary mismatches: in districts via Banglarbhumi Bhu-Naksha survey; in Kolkata via KMC Chief Valuer & Surveyor Street Alignment records.',
      bn: 'নকশার ভুল সংশোধন: জেলায় বাংলারভূমি মৌজা ম্যাপ; কলকাতায় কেএমসি স্ট্রিট অ্যালাইনমেন্ট ও সার্ভে রেকর্ড।',
      hi: 'नक्शा सुधार: जिलों में बांगलारभूमि भू-नक्शा; कोलकाता में केएमसी अलाइनमेंट एवं स्मार्ट सर्वे।'
    },
    authority_forum: {
      en: 'BL&LRO Cartography (Districts) / KMC Survey Wing (Kolkata)',
      bn: 'বিএলঅ্যান্ডএলআরও নকশা শাখা / কেএমসি সার্ভে সেল',
      hi: 'बीएल एंड एलआरओ नक्शा शाखा / केएमसी सर्वे विभाग'
    },
    forum_type: 'BL_LRO',
    is_complex: false,
    official_portal_url: 'https://banglarbhumi.gov.in/',
    statutory_timeframe: {
      en: '45 to 90 working days',
      bn: '৪৫ থেকে ৯০ কার্যদিবস',
      hi: '45 से 90 कार्यदिवস'
    },
    search_keywords: {
      en: ['bhu naksha wb', 'mouza map error', 'kmc street alignment'],
      bn: ['ভু-নকশা', 'মৌজা ম্যাপ ভুল', 'কেএমসি ম্যাপ'],
      hi: ['भू नक्शा सुधार', 'मौजा नक्शा त्रुटि', 'केएमसी नक्शा सुधार']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'BL&LRO (Technical Cartography Wing) / DL&LRO',
          bn: 'ব্লক ভূমি ও ভূমি সংস্কার আধিকারিক (নকশা শাখা)',
          hi: 'बीएल एंड एलआरओ नक्शा विभाग'
        },
        portal_name: { en: 'Banglarbhumi Bhu-Naksha', bn: 'বাংলারভূমি ভূ-নকশা', hi: 'बांगलारभूमि भू-नक्शा' },
        portal_url: 'https://banglarbhumi.gov.in/',
        steps: {
          en: [
            'Apply for certified copy of Mouza cadastral sheet from DL&LRO repository.',
            'Submit petition for Map Rectification under Rule 48 before the BL&LRO.',
            'Deposit government survey fee via GRIPS treasury challan.',
            'Attend on-site survey conducted with Total Station Machine (TSM).'
          ],
          bn: [
            'ডিএলঅ্যান্ডএলআরও আর্কাইভ থেকে মূল মৌজা ম্যাপের সার্টিফাইড কপি তুলুন।',
            'ডব্লুবিএলআর ম্যানুয়াল রুল ৪৮ অনুযায়ী ম্যাপ সংশোধনের আবেদন দিন।',
            'GRIPS চালানের মাধ্যমে সরকারি জরিপ ফি ট্রেজারিতে জমা করুন।',
            'টোটাল স্টেশন মেশিন (TSM) সহযোগে সরকারি সমীক্ষকদের উপস্থিতিতে পরিমাপ করান।'
          ],
          hi: [
            'डीएल एंड एलआरओ कार्यालय से संबंधित मौजा नक्शा शीट की प्रमाणित प्रति लें।',
            'मैनुअल नियम 48 के तहत बीएल एंड एलआरओ में नक्शा सुधार हेतु आवेदन दें।',
            'GRIPS पोर्टल के माध्यम से सरकारी सर्वेक्षण शुल्क का भुगतान करें।',
            'अत्याधुनिक टोटल स्टेशन मशीन द्वारा मौके पर सरकारी अमीन से सीमांकन कराएं।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'KMC Survey & Valuation Department',
          bn: 'কেএমসি প্রধান মূল্যায়নকারী ও সার্ভেয়ার বিভাগ',
          hi: 'केएमसी मुख्य सर्वेक्षक एवं नगर योजना'
        },
        portal_name: { en: 'KMC Survey Department', bn: 'কেএমসি সার্ভে পোর্টাল', hi: 'केएमसी सर्वे विभाग' },
        portal_url: 'https://www.kmcgov.in/',
        steps: {
          en: [
            'Apply for certified Street Alignment & Road Width Certificate from KMC Survey Dept.',
            'Submit registered deed and historical municipal assessment maps to Chief Valuer.',
            'KMC surveyor inspects property boundary to verify road widening encroachments.',
            'Receive corrected municipal premises boundary alignment endorsement.'
          ],
          bn: [
            'কেএমসি সার্ভে বিভাগ থেকে স্ট্রিট অ্যালাইনমেন্ট ও রাস্তার চওড়ার সার্টিফিকেট নিন।',
            'রেজিস্ট্রি দলিল ও ঐতিহাসিক পুর নকশা জমা দিয়ে সীমানা যাচাইয়ের আবেদন করুন।',
            'কেএমসি সার্ভেয়ার সরেজমিনে পরিদর্শন করে রাস্তার সীমানা ও দাগ চিহ্নিত করবেন।',
            'সংশোধিত কেএমসি বাউন্ডারি অ্যালাইনমেন্ট সার্টিফিকেট গ্রহণ করুন।'
          ],
          hi: [
            'केएमसी सर्वे विभाग से प्रमाणित स्ट्रीट अलाइनमेंट व सड़क चौड़ाई प्रमाणपत्र लें।',
            'पंजीकृत विलेख एवं ऐतिहासिक नगर निगम मानचित्र मुख्य सर्वेक्षक को प्रस्तुत करें।',
            'केएमसी सर्वेक्षक स्थल पर आकर सड़क चौड़ीकरण एवं संपत्ति सीमाओं की जांच करेंगे।',
            'सुधरा हुआ नगर निगम परिसर सीमांकन प्रमाणपत्र प्राप्त करें।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Apply for certified copy of Mouza cadastral sheet from DL&LRO repository.',
        'Submit petition for Map Rectification under Rule 48 before the BL&LRO.',
        'Deposit government survey fee via GRIPS treasury challan.',
        'Attend on-site survey conducted with Total Station Machine (TSM).'
      ],
      bn: [
        'ডিএলঅ্যান্ডএলআরও আর্কাইভ থেকে মূল মৌজা ম্যাপের সার্টিফাইড কপি তুলুন।',
        'ডব্লুবিএলআর ম্যানুয়াল রুল ৪৮ অনুযায়ী ম্যাপ সংশোধনের আবেদন দিন।',
        'GRIPS চালানের মাধ্যমে সরকারি জরিপ ফি ট্রেজারিতে জমা করুন।',
        'টোটাল স্টেশন মেশিন (TSM) সহযোগে সরকারি সমীক্ষকদের উপস্থিতিতে পরিমাপ করান।'
      ],
      hi: [
        'डीएल एंड एलआरओ कार्यालय से संबंधित मौजा नक्शा शीट की प्रमाणित प्रति लें।',
        'मैनुअल नियम 48 के तहत बीएल एंड एलआरओ में नक्शा सुधार हेतु आवेदन दें।',
        'GRIPS पोर्टल के माध्यम से सरकारी सर्वेक्षण शुल्क का भुगतान करें।',
        'अत्याधुनिक टोटल स्टेशन मशीन द्वारा मौके पर सरकारी अमीन से सीमांकन कराएं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-24-1',
        name: { en: 'Certified Cadastral Mouza Sheet / KMC Alignment Plan', bn: 'সার্টিফাইড মৌজা ম্যাপ শীট বা কেএমসি প্ল্যান', hi: 'प्रमाणित मौजा नक्शा शीट या केएमसी अलाइनमेंट' },
        issuing_authority: { en: 'DL&LRO Survey Repository / KMC', bn: 'ভূমি রেকর্ড বিভাগ / কেএমসি', hi: 'जिला सर्वेक्षण विभाग' },
        is_mandatory: true
      }
    ]
  },
  {
    id: 'sub-land-25',
    title: {
      en: 'Unauthorized Construction Demolition (Sec 4D WBLR vs Sec 400 KMC)',
      bn: 'অনুমতিহীন নির্মাণ উচ্ছেদ (ধারা ৪ডি WBLR বনাম ধারা ৪০০ KMC)',
      hi: 'अवैध निर्माण तोड़फोड़ (धारा 4D WBLR बनाम धारा 400 KMC)'
    },
    relevant_act: 'Sec 4D WBLR Act (Districts) / Sec 400 KMC Act (Kolkata)',
    summary: {
      en: 'Demolition of illegal structures: in districts, DL&LRO acts under Sec 4D for building on unconverted land; in Kolkata, KMC Special Officer (Building) issues Section 400 demolition orders.',
      bn: 'অনুমোদনহীন নির্মাণ উচ্ছেদ: জেলায় কৃষি জমিতে কারখানা ভাঙতে ৪ডি নোটিশ; কলকাতায় কেএমসি ধারা ৪০০ ডিমোলিশন অর্ডার।',
      hi: 'अवैध निर्माण ध्वस्तीकरण: जिलों में बिना कन्वर्जन निर्माण पर धारा 4D; कोलकाता में केएमसी धारा 400 तोड़फोड़ आदेश।'
    },
    authority_forum: {
      en: 'DL&LRO (Districts) / KMC Building Tribunal (Kolkata)',
      bn: 'ডিএলঅ্যান্ডএলআরও (জেলা) / কেএমসি বিল্ডিং ট্রাইব্যুনাল (কলকাতা)',
      hi: 'डीएल एंड एलआरओ (जिले) / केएमसी भवन अधिकरण (कोलकाता)'
    },
    forum_type: 'BL_LRO',
    is_complex: true,
    official_portal_url: 'https://banglarbhumi.gov.in/',
    statutory_timeframe: {
      en: '30 to 60 working days',
      bn: '৩০ থেকে ৬০ কার্যদিবস',
      hi: '30 से 60 কার্যদিবস'
    },
    search_keywords: {
      en: ['unauthorized construction demolition', 'section 400 kmc demolition', 'section 4d wblr illegal sali'],
      bn: ['বেআইনি নির্মাণ ভাঙা', 'কেএমসি ধারা ৪০০ ডিমোলিশন', 'শালি জমিতে কারখানা'],
      hi: ['अवैध निर्माण ध्वस्तीकरण', 'धारा 400 केएमसी', 'धारा 4D अवैध निर्माण']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'District Land & Land Reforms Officer (DL&LRO / DM)',
          bn: 'জেলা ভূমি ও ভূমি সংস্কার আধিকারিক (DL&LRO)',
          hi: 'जिला भूमि एवं भूमि सुधार अधिकारी'
        },
        portal_name: { en: 'Banglarbhumi Portal', bn: 'বাংলারভূমি পোর্টাল', hi: 'बांगलारভূমি' },
        portal_url: 'https://banglarbhumi.gov.in/',
        steps: {
          en: [
            'Extract Banglarbhumi land record proving plot is unconverted agricultural (Sali) land.',
            'File official complaint before DL&LRO citing violation under Section 4D WBLR Act.',
            'Revenue Officer issues statutory Stop-Work Order and summons violator for hearing.',
            'DM orders physical demolition and restoration of agricultural classification.'
          ],
          bn: [
            'বাংলারভূমি থেকে খতিয়ান তুলে প্রমাণ করুন জমিটি এখনও অ-রূপান্তরিত শালি জমি।',
            'ডব্লুবিএলআর আইনের ধারা ৪ডি লঙ্ঘনের অভিযোগ তুলে ডিএলঅ্যান্ডএলআরও-তে নালিশ করুন।',
            'রাজস্ব আধিকারিক তাৎক্ষণিক কাজ বন্ধের নোটিশ দিয়ে শুনানির দিন ধার্য করবেন।',
            'শুনানি শেষে জেলাশাসক নির্মাণ গুঁড়িয়ে দিয়ে জমি পূর্বাবস্থায় ফেরানোর নির্দেশ দেবেন।'
          ],
          hi: [
            'बांगलारभूमि से प्रमाणित खतियान निकालें जिससे साबित हो कि जमीन कृषि (शाली) दर्ज है।',
            'धारा 4D के उल्लंघन के तहत डीएल एंड एलआरओ के समक्ष औपचारिक शिकायत दें।',
            'राजस्व अधिकारी द्वारा निर्माण तत्काल रोकने (Stop-Work) का आदेश जारी होगा।',
            'नियमित न कराने पर जिला मजिस्ट्रेट द्वारा अवैध निर्माण ध्वस्त कराने का आदेश होगा।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'KMC Special Officer (Building) / Municipal Building Tribunal (MBT)',
          bn: 'কেএমসি স্পেশাল অফিসার (বিল্ডিং) / মিউনিসিপ্যাল বিল্ডিং ট্রাইব্যুনাল (MBT)',
          hi: 'केएमसी विशेष अधिकारी (भवन) / नगर भवन अधिकरण'
        },
        portal_name: { en: 'KMC Building Vigilance Portal', bn: 'কেএমসি বিল্ডিং সেল', hi: 'केएमसी भवन विभाग' },
        portal_url: 'https://www.kmcgov.in/',
        steps: {
          en: [
            'Report unauthorized construction to KMC Borough Executive Engineer (Building).',
            'KMC serves Stop-Work Notice under Section 401 and posts police guard.',
            'Case heard by Special Officer (Building) under Section 400(1) for demolition order.',
            'Appeal lies within 30 days before Municipal Building Tribunal (MBT) at Kolkata.'
          ],
          bn: [
            'কেএমসি বোরো এক্সিকিউটিভ ইঞ্জিনিয়ারের (বিল্ডিং) কাছে বেআইনি নির্মাণের লিখিত নালিশ জানান।',
            'কেএমসি ধারা ৪০১ অনুযায়ী কাজ বন্ধের নোটিশ জারি করে পুলিশ প্রহরা বসাবে।',
            'কেএমসি স্পেশাল অফিসার ধারা ৪০০(১) অনুযায়ী শুনানি নিয়ে ভাঙার আদেশ দেবেন।',
            'আদেশের বিরুদ্ধে ৩০ দিনের মধ্যে কলকাতার মিউনিসিপ্যাল বিল্ডিং ট্রাইব্যুনালে (MBT) আপিল করা যায়।'
          ],
          hi: [
            'केएमसी बोरो अधिशासी अभियंता (भवन) को अवैध निर्माण की तुरंत शिकायत करें।',
            'केएमसी धारा 401 के तहत कार्य रोकने का नोटिस जारी कर पुलिस पहरा लगाएगा।',
            'विशेष अधिकारी (भवन) द्वारा धारा 400(1) में सुनवाई कर ध्वस्तीकरण आदेश पारित होगा।',
            'आदेश के विरुद्ध 30 दिन में नगर भवन अधिकरण (MBT, कोलकाता) में अपील की जा सकती है।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Extract Banglarbhumi land record proving plot is unconverted agricultural land.',
        'File official complaint before the DL&LRO citing violation under Section 4D.',
        'Revenue Officer issues statutory Stop-Work Order and summons the violator.',
        'DM orders demolition and restoration of agricultural classification if unregularized.'
      ],
      bn: [
        'বাংলারভূমি থেকে খতিয়ান তুলে প্রমাণ করুন জমিটি এখনও অ-রূপান্তরিত শালি জমি।',
        'ডব্লুবিএলআর আইনের ধারা ৪ডি লঙ্ঘনের অভিযোগ তুলে ডিএলঅ্যান্ডএলআরও-তে নালিশ করুন।',
        'রাজস্ব আধিকারিক তাৎক্ষণিক কাজ বন্ধের নোটিশ দিয়ে শুনানির দিন ধার্য করবেন।',
        'শুনানি শেষে জেলাশাসক নির্মাণ গুঁড়িয়ে দিয়ে জমি পূর্বাবস্থায় ফেরানোর নির্দেশ দেবেন।'
      ],
      hi: [
        'बांगलारभूमि से प्रमाणित खतियान निकालें जिससे साबित हो कि जमीन कृषि (शाली) दर्ज है।',
        'धारा 4D के उल्लंघन के तहत डीएल एंड एलआरओ के समक्ष औपचारिक शिकायत दें।',
        'राजस्व अधिकारी द्वारा निर्माण तत्काल रोकने (Stop-Work) का आदेश जारी होगा।',
        'नियमित न कराने पर जिला मजिस्ट्रेट द्वारा अवैध निर्माण ध्वस्त कराने का आदेश होगा।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-25-1',
        name: { en: 'Photographic Proof of Illegal Construction & Site Record', bn: 'বেআইনি নির্মাণের ছবি ও জমির রেকর্ড', hi: 'अवैध निर्माण के फोटो एवं संबंधित भूमि रिकॉर्ड' },
        issuing_authority: { en: 'Complainant / BL&LRO / KMC', bn: 'অভিযোগকারী / পুরসভা', hi: 'शिकायतकर्ता / नगर निगम' },
        is_mandatory: true
      }
    ]
  }
];