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
      en: 'District and rural land mutations use the Banglarbhumi/revenue route; Kolkata properties use KMC Assessment-Collection for municipal assessment records. Mutation is not a title adjudication.',
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
      en: 'Processing time varies by authority, application completeness, notice/hearing requirements, and case facts. Check the relevant authority for current service timelines.',
      bn: 'কর্তৃপক্ষ, আবেদনের সম্পূর্ণতা, নোটিশ/শুনানির প্রয়োজন এবং মামলার তথ্য অনুযায়ী প্রক্রিয়াকরণের সময় পরিবর্তিত হয়। বর্তমান পরিষেবা-সময়সীমার জন্য সংশ্লিষ্ট কর্তৃপক্ষের সঙ্গে যাচাই করুন।',
      hi: 'प्राधिकरण, आवेदन की पूर्णता, नोटिस/सुनवाई की आवश्यकता और मामले के तथ्यों के अनुसार प्रक्रिया का समय बदलता है। वर्तमान सेवा समय-सीमा के लिए संबंधित प्राधिकरण से पुष्टि करें।'
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
        statutory_timeframe: {
          en: 'Processing time varies by district authority, application completeness, and whether notice or a hearing is required. Check the current service information.',
          bn: 'জেলা কর্তৃপক্ষ, আবেদনের সম্পূর্ণতা এবং নোটিশ বা শুনানির প্রয়োজন অনুযায়ী প্রক্রিয়াকরণের সময় পরিবর্তিত হয়। বর্তমান পরিষেবা-তথ্য যাচাই করুন।',
          hi: 'जिला प्राधिकरण, आवेदन की पूर्णता और नोटिस या सुनवाई की आवश्यकता के अनुसार प्रक्रिया का समय बदलता है। वर्तमान सेवा जानकारी जांचें।'
        },
        timeline_info: [
          {
            id: 'time-land-01-rural-processing',
            kind: 'service_standard',
            label: {
              en: 'Rural/district application processing time',
              bn: 'গ্রামীণ/জেলা আবেদন প্রক্রিয়াকরণের সময়',
              hi: 'ग्रामीण/जिला आवेदन प्रक्रिया का समय'
            },
            value_description: {
              en: 'No fixed duration is stated here. Check the current Banglarbhumi service information for the responsible district and application type.',
              bn: 'এখানে নির্দিষ্ট সময়সীমা বলা হচ্ছে না। সংশ্লিষ্ট জেলা ও আবেদনের ধরনের জন্য বর্তমান Banglarbhumi পরিষেবা-তথ্য যাচাই করুন।',
              hi: 'यहां कोई निश्चित अवधि नहीं दी जा रही। संबंधित जिले और आवेदन प्रकार के लिए वर्तमान Banglarbhumi सेवा जानकारी जांचें।'
            },
            scope: 'district',
            evidence: {
              status: 'variable',
              primary_source_title: 'Banglarbhumi - Government of West Bengal',
              primary_source_url: 'https://banglarbhumi.gov.in/',
              pinpoint: 'Current service information for the applicable revenue-record application',
              checked_on: '2026-10-10'
            }
          }
        ],
        steps: {
          en: [
            'Confirm the current revenue-record service, form, and competent BL&LRO office for the plot and district using the official Banglarbhumi instructions.',
            'Prepare the registered transfer instrument, current land-revenue receipt, plot and khatian identifiers, and any additional documents required for this application.',
            'Submit through the official service and pay only the current fee or demand shown by the competent authority or GRIPS; retain the acknowledgement and receipt.',
            'Respond to any notice, document objection, or hearing direction. After an order, check the updated Record of Rights and use the stated review or appeal route if necessary. Mutation does not itself decide title.'
          ],
          bn: [
            'প্লট ও জেলার জন্য বর্তমান রেকর্ড-সেবা, ফর্ম এবং উপযুক্ত BL&LRO দপ্তর সরকারি Banglarbhumi নির্দেশ থেকে যাচাই করুন।',
            'রেজিস্ট্রি হস্তান্তর দলিল, হালনাগাদ ভূমি-রাজস্ব রসিদ, প্লট ও খতিয়ানের পরিচিতি এবং এই আবেদনে চাওয়া অতিরিক্ত নথি প্রস্তুত করুন।',
            'সরকারি সেবার মাধ্যমে আবেদন জমা দিন এবং উপযুক্ত কর্তৃপক্ষ বা GRIPS-এ দেখানো বর্তমান ফি/চাহিদাই পরিশোধ করুন; স্বীকৃতি ও রসিদ রাখুন।',
            'নোটিশ, নথি-আপত্তি বা শুনানির নির্দেশে সাড়া দিন। আদেশের পরে সংশোধিত Record of Rights যাচাই করুন এবং প্রয়োজনে নির্দেশিত পর্যালোচনা/আপিলের পথ নিন। মিউটেশন নিজে থেকে মালিকানা নির্ধারণ করে না।'
          ],
          hi: [
            'भूखंड और जिले के लिए वर्तमान रिकॉर्ड सेवा, फॉर्म और सक्षम BL&LRO कार्यालय की आधिकारिक Banglarbhumi निर्देशों से पुष्टि करें।',
            'पंजीकृत हस्तांतरण दस्तावेज, अद्यतन भूमि-राजस्व रसीद, प्लॉट और खतियान पहचान तथा इस आवेदन के लिए मांगे गए अतिरिक्त दस्तावेज तैयार करें।',
            'आधिकारिक सेवा से आवेदन करें और सक्षम प्राधिकरण या GRIPS द्वारा दिखाई गई वर्तमान फीस/मांग ही अदा करें; पावती और रसीद सुरक्षित रखें।',
            'किसी नोटिस, दस्तावेज आपत्ति या सुनवाई निर्देश का जवाब दें। आदेश के बाद संशोधित Record of Rights जांचें और आवश्यक हो तो बताई गई समीक्षा/अपील प्रक्रिया अपनाएं। म्यूटेशन स्वयं स्वामित्व का निर्णय नहीं करता।'
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
        statutory_timeframe: {
          en: 'Processing time varies by KMC service, transaction category, and application facts. Confirm the current service timeline for the premises.',
          bn: 'KMC পরিষেবা, লেনদেনের শ্রেণি এবং আবেদনের তথ্য অনুযায়ী প্রক্রিয়াকরণের সময় পরিবর্তিত হয়। প্রাঙ্গণের জন্য বর্তমান পরিষেবা-সময়সীমা যাচাই করুন।',
          hi: 'KMC सेवा, लेनदेन श्रेणी और आवेदन के तथ्यों के अनुसार प्रक्रिया का समय बदलता है। परिसर के लिए वर्तमान सेवा समय-सीमा की पुष्टि करें।'
        },
        timeline_info: [
          {
            id: 'time-land-01-kmc-processing',
            kind: 'service_standard',
            label: {
              en: 'KMC application processing time',
              bn: 'KMC আবেদন প্রক্রিয়াকরণের সময়',
              hi: 'KMC आवेदन प्रक्रिया का समय'
            },
            value_description: {
              en: 'No fixed duration is stated here. Check the current KMC service information for the premises and transaction category.',
              bn: 'এখানে নির্দিষ্ট সময়সীমা বলা হচ্ছে না। প্রাঙ্গণ ও লেনদেনের শ্রেণির জন্য বর্তমান KMC পরিষেবা-তথ্য যাচাই করুন।',
              hi: 'यहां कोई निश्चित अवधि नहीं दी जा रही। परिसर और लेनदेन श्रेणी के लिए वर्तमान KMC सेवा जानकारी जांचें।'
            },
            scope: 'kolkata',
            evidence: {
              status: 'variable',
              primary_source_title: 'Kolkata Municipal Corporation - official portal',
              primary_source_url: 'https://www.kmcgov.in/',
              pinpoint: 'Current Assessment-Collection mutation service information for the applicable premises/transaction',
              checked_on: '2026-10-10'
            }
          }
        ],
        fees: [
          {
            id: 'fee-land-01-kmc-simple-mutation',
            kind: 'fixed',
            label: {
              en: 'KMC simple mutation processing fee',
              bn: 'KMC সাধারণ মিউটেশন প্রক্রিয়াকরণ ফি',
              hi: 'KMC साधारण म्यूटेशन प्रक्रिया शुल्क'
            },
            amount_inr: 100,
            conditions: {
              en: 'Published KMC guidance lists Rs 100 for mutation processing. Confirm the current demand and whether this transaction requires additional fees, NOC dues, separation, amalgamation, apportionment, or a certificate fee.',
              bn: 'KMC-র প্রকাশিত নির্দেশে মিউটেশন প্রক্রিয়াকরণ ফি ১০০ টাকা বলা হয়েছে। বর্তমান চাহিদা এবং এই লেনদেনে অতিরিক্ত ফি, NOC বকেয়া, পৃথকীকরণ, একত্রীকরণ, অংশ-বণ্টন বা সার্টিফিকেট ফি প্রযোজ্য কি না যাচাই করুন।',
              hi: 'KMC के प्रकाशित निर्देश में म्यूटेशन प्रक्रिया शुल्क 100 रुपये है। वर्तमान मांग तथा इस लेनदेन पर अतिरिक्त शुल्क, NOC बकाया, पृथक्करण, समामेलन, विभाजन या प्रमाणपत्र शुल्क लागू है या नहीं, इसकी पुष्टि करें।'
            },
            scope: 'kolkata',
            evidence: {
              status: 'verified',
              primary_source_title: 'Kolkata Municipal Corporation - How to Apply for Mutation',
              primary_source_url: 'https://www.kmcgov.in/KMCPortal/jsp/MutationLand.jsp',
              pinpoint: 'Published simple mutation application guidance; KMC Assessment FAQ and fee page should be checked for current transaction-specific demand',
              checked_on: '2026-10-10'
            }
          }
        ],
        steps: {
          en: [
            'Use the current KMC Assessment-Collection mutation service for the premises or Assessee number; verify the applicable form and checklist on the official KMC site.',
            'Prepare the registered transfer instrument, current property-tax records, identity or authority documents, and other items required for this transaction category.',
            'Submit the application, respond to any KMC document query or hearing/inspection notice, and retain the application reference and acknowledgements.',
            'Pay the current KMC demand shown for the property and transaction category. After a decision, verify the assessment record; municipal mutation is not a civil title adjudication.'
          ],
          bn: [
            'প্রাঙ্গণ বা Assessee নম্বরের জন্য বর্তমান KMC Assessment-Collection মিউটেশন সেবা ব্যবহার করুন; সরকারি KMC সাইটে প্রযোজ্য ফর্ম ও নথির তালিকা যাচাই করুন।',
            'রেজিস্ট্রি হস্তান্তর দলিল, বর্তমান পুরকর রেকর্ড, পরিচয়/ক্ষমতার নথি এবং এই লেনদেন-শ্রেণিতে চাওয়া অন্যান্য নথি প্রস্তুত করুন।',
            'আবেদন জমা দিন; KMC-র নথি-জিজ্ঞাসা বা শুনানি/পরিদর্শনের নোটিশ থাকলে সাড়া দিন এবং আবেদন নম্বর ও স্বীকৃতি সংরক্ষণ করুন।',
            'সম্পত্তি ও লেনদেন-শ্রেণির জন্য KMC-র বর্তমান চাহিদা পরিশোধ করুন। সিদ্ধান্তের পর অ্যাসেসমেন্ট রেকর্ড যাচাই করুন; পৌর মিউটেশন দেওয়ানি মালিকানা নির্ধারণ নয়।'
          ],
          hi: [
            'परिसर या Assessee नंबर के लिए वर्तमान KMC Assessment-Collection म्यूटेशन सेवा अपनाएं; आधिकारिक KMC साइट पर लागू फॉर्म और दस्तावेज सूची जांचें।',
            'पंजीकृत हस्तांतरण दस्तावेज, वर्तमान संपत्ति-कर रिकॉर्ड, पहचान/प्राधिकरण प्रमाण और इस लेनदेन श्रेणी के लिए मांगे गए अन्य दस्तावेज तैयार करें।',
            'आवेदन जमा करें; KMC की दस्तावेज संबंधी पूछताछ या सुनवाई/निरीक्षण नोटिस का जवाब दें और आवेदन संदर्भ एवं पावती सुरक्षित रखें।',
            'संपत्ति और लेनदेन श्रेणी के लिए KMC की वर्तमान मांग का भुगतान करें। निर्णय के बाद Assessment रिकॉर्ड जांचें; नगरपालिका म्यूटेशन दीवानी स्वामित्व का निर्णय नहीं है।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Identify the property jurisdiction and confirm the current application service, form, and checklist with the responsible authority.',
        'Prepare proof of transfer or succession, property and record identifiers, current tax or revenue receipts, and authority-specific supporting documents.',
        'Submit through the competent authority’s official channel, pay only the current assessed demand, and retain the acknowledgement and receipt.',
        'Respond to notices or hearing directions and verify the resulting municipal or revenue entry; mutation does not by itself determine civil title.'
      ],
      bn: [
        'সম্পত্তির এখতিয়ার নির্ধারণ করে দায়িত্বপ্রাপ্ত কর্তৃপক্ষের কাছে বর্তমান আবেদন-সেবা, ফর্ম ও নথির তালিকা যাচাই করুন।',
        'হস্তান্তর বা উত্তরাধিকারের প্রমাণ, সম্পত্তি ও রেকর্ডের পরিচিতি, বর্তমান কর বা রাজস্ব রসিদ এবং কর্তৃপক্ষ-নির্দিষ্ট সহায়ক নথি প্রস্তুত করুন।',
        'উপযুক্ত কর্তৃপক্ষের সরকারি মাধ্যমে আবেদন জমা দিন, কেবল বর্তমান নির্ধারিত চাহিদা পরিশোধ করুন এবং স্বীকৃতি ও রসিদ রাখুন।',
        'নোটিশ বা শুনানির নির্দেশে সাড়া দিন এবং সংশ্লিষ্ট পৌর বা রাজস্ব এন্ট্রি যাচাই করুন; রেকর্ড মিউটেশন নিজে থেকে দেওয়ানি মালিকানা নির্ধারণ করে না।'
      ],
      hi: [
        'संपत्ति का क्षेत्राधिकार पहचानें और जिम्मेदार प्राधिकरण से वर्तमान आवेदन सेवा, फॉर्म और चेकलिस्ट की पुष्टि करें।',
        'हस्तांतरण या उत्तराधिकार का प्रमाण, संपत्ति और रिकॉर्ड पहचान, वर्तमान कर या राजस्व रसीद और प्राधिकरण-विशिष्ट सहायक दस्तावेज तैयार करें।',
        'सक्षम प्राधिकरण के आधिकारिक माध्यम से आवेदन दें, केवल वर्तमान निर्धारित मांग का भुगतान करें और पावती तथा रसीद सुरक्षित रखें।',
        'नोटिस या सुनवाई निर्देश का जवाब दें और संबंधित नगरपालिका या राजस्व प्रविष्टि जांचें; रिकॉर्ड म्यूटेशन स्वयं दीवानी स्वामित्व का निर्णय नहीं करता।'
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
      en: 'Apply to update revenue or municipal assessment records after a recorded owner’s death: BL&LRO/revenue route for districts; KMC assessment route for Kolkata. The entry does not finally decide heirs’ title shares.',
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
      en: 'Processing time varies by authority, completeness of the succession documents, notice/hearing requirements, and any dispute among heirs. Confirm the current service information.',
      bn: 'কর্তৃপক্ষ, উত্তরাধিকার-নথির সম্পূর্ণতা, নোটিশ/শুনানির প্রয়োজন এবং উত্তরাধিকারীদের মধ্যে বিরোধ অনুযায়ী সময় পরিবর্তিত হয়। বর্তমান পরিষেবা-তথ্য যাচাই করুন।',
      hi: 'प्राधिकरण, उत्तराधिकार दस्तावेजों की पूर्णता, नोटिस/सुनवाई और वारिसों के बीच विवाद के अनुसार समय बदलता है। वर्तमान सेवा जानकारी की पुष्टि करें।'
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
        statutory_timeframe: {
          en: 'No fixed duration is stated here. Check current Banglarbhumi instructions for the district, land record and succession application.',
          bn: 'এখানে নির্দিষ্ট সময়সীমা বলা হচ্ছে না। জেলা, ভূমি-রেকর্ড ও উত্তরাধিকার আবেদনের জন্য বর্তমান Banglarbhumi নির্দেশ যাচাই করুন।',
          hi: 'यहां कोई निश्चित अवधि नहीं दी जा रही। जिले, भूमि रिकॉर्ड और उत्तराधिकार आवेदन के लिए वर्तमान Banglarbhumi निर्देश जांचें।'
        },
        steps: {
          en: [
            'Identify the recorded raiyat/owner, all potential heirs and the applicable personal law. Obtain the current succession/heirship evidence accepted for the relevant service; a local heirship certificate does not by itself finally adjudicate title or shares.',
            'Prepare the death certificate, current Record of Rights, plot/khatian particulars, succession/heirship papers, prior transfer records and any prescribed declaration requested by the competent office.',
            'Apply through the current Banglarbhumi or notified revenue-office process, pay only the current assessed demand, retain the acknowledgement, and answer notices or hearing directions. Disclose all known heirs and disputes.',
            'After the revenue order, verify the updated entry and ask the authority about its review/appeal route if needed. Mutation records revenue particulars; disputed inheritance or title shares may require separate legal proceedings.'
          ],
          bn: [
            'রেকর্ডভুক্ত রায়ত/মালিক, সম্ভাব্য সব উত্তরাধিকারী এবং প্রযোজ্য ব্যক্তিগত আইন শনাক্ত করুন। সংশ্লিষ্ট পরিষেবায় গ্রহণযোগ্য বর্তমান উত্তরাধিকার-প্রমাণ সংগ্রহ করুন; স্থানীয় উত্তরাধিকার সনদ নিজে থেকে মালিকানা বা অংশের চূড়ান্ত বিচার নয়।',
            'মৃত্যু সনদ, বর্তমান Record of Rights, প্লট/খতিয়ানের তথ্য, উত্তরাধিকার-প্রমাণ, পূর্ববর্তী হস্তান্তর-নথি এবং দপ্তরের চাওয়া ঘোষণাপত্র প্রস্তুত করুন।',
            'বর্তমান Banglarbhumi বা নির্ধারিত রাজস্ব-দপ্তর প্রক্রিয়ায় আবেদন করুন, কেবল কর্তৃপক্ষের বর্তমান চাহিদা পরিশোধ করুন, স্বীকৃতি রাখুন এবং নোটিশ/শুনানিতে সাড়া দিন। পরিচিত সব উত্তরাধিকারী ও বিরোধ প্রকাশ করুন।',
            'রাজস্ব আদেশের পরে সংশোধিত এন্ট্রি যাচাই করুন এবং প্রয়োজনে পর্যালোচনা/আপিলের পথ জিজ্ঞাসা করুন। মিউটেশন রাজস্ব-রেকর্ড; উত্তরাধিকার বা মালিকানার বিরোধে পৃথক আইনি মামলা লাগতে পারে।'
          ],
          hi: [
            'रिकॉर्डेड रैयत/मालिक, सभी संभावित वारिस और लागू व्यक्तिगत कानून की पहचान करें। संबंधित सेवा में स्वीकार्य वर्तमान उत्तराधिकार प्रमाण जुटाएं; स्थानीय वारिस प्रमाणपत्र स्वयं स्वामित्व या हिस्सों का अंतिम न्यायनिर्णय नहीं है।',
            'मृत्यु प्रमाणपत्र, वर्तमान Record of Rights, प्लॉट/खतियान विवरण, उत्तराधिकार प्रमाण, पूर्व हस्तांतरण दस्तावेज और सक्षम कार्यालय द्वारा मांगी गई घोषणा तैयार करें।',
            'वर्तमान Banglarbhumi या अधिसूचित राजस्व कार्यालय प्रक्रिया से आवेदन दें, केवल वर्तमान निर्धारित मांग का भुगतान करें, पावती रखें और नोटिस/सुनवाई का जवाब दें। ज्ञात सभी वारिस और विवाद बताएं।',
            'राजस्व आदेश के बाद संशोधित प्रविष्टि जांचें और जरूरत पर समीक्षा/अपील मार्ग पूछें। म्यूटेशन राजस्व रिकॉर्ड है; विवादित विरासत या स्वामित्व हिस्सों के लिए अलग कानूनी कार्यवाही आवश्यक हो सकती है।'
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
        statutory_timeframe: {
          en: 'KMC publishes service information for simple mutation and more complex separation, amalgamation or apportionment. Confirm the current category-specific process and any outstanding property-tax demand.',
          bn: 'সাধারণ মিউটেশন এবং জটিল পৃথকীকরণ, একত্রীকরণ বা অংশ-বণ্টনের জন্য KMC-র পরিষেবা-তথ্য আলাদা। বর্তমান শ্রেণিভিত্তিক প্রক্রিয়া ও সম্পত্তির বকেয়া কর যাচাই করুন।',
          hi: 'KMC साधारण म्यूटेशन और जटिल पृथक्करण, समामेलन या विभाजन के लिए अलग सेवा जानकारी देता है। वर्तमान श्रेणी-विशिष्ट प्रक्रिया और संपत्ति कर बकाया की पुष्टि करें।'
        },
        fees: [
          {
            id: 'fee-land-02-kmc-simple-mutation',
            kind: 'fixed',
            label: { en: 'KMC simple mutation processing fee', bn: 'KMC সাধারণ মিউটেশন প্রক্রিয়াকরণ ফি', hi: 'KMC साधारण म्यूटेशन प्रक्रिया शुल्क' },
            amount_inr: 100,
            conditions: {
              en: 'KMC publishes Rs 100 processing fee for mutation/separation/apportionment. Amalgamation, NOC/property-tax arrears, certificate fees and other categories can differ; confirm the live KMC demand.',
              bn: 'KMC-র প্রকাশিত তথ্যে মিউটেশন/পৃথকীকরণ/অংশ-বণ্টনের প্রক্রিয়াকরণ ফি ১০০ টাকা। একত্রীকরণ, NOC/পুরকর বকেয়া, সার্টিফিকেট ফি ও অন্যান্য শ্রেণির অঙ্ক আলাদা হতে পারে; লাইভ KMC চাহিদা যাচাই করুন।',
              hi: 'KMC की प्रकाशित जानकारी में म्यूटेशन/पृथक्करण/विभाजन प्रक्रिया शुल्क 100 रुपये है। समामेलन, NOC/संपत्ति कर बकाया, प्रमाणपत्र शुल्क और अन्य श्रेणियां अलग हो सकती हैं; लाइव KMC मांग जांचें।'
            },
            scope: 'kolkata',
            evidence: {
              status: 'verified',
              primary_source_title: 'Kolkata Municipal Corporation - mutation guidance and Assessment FAQ',
              primary_source_url: 'https://www.kmcgov.in/KMCPortal/jsp/MutationLand.jsp',
              pinpoint: 'Simple mutation processing fee; transaction category and current demand must be checked separately',
              checked_on: '2026-10-10'
            }
          }
        ],
        steps: {
          en: [
            'Check whether the premises falls within KMC and download the current Form A-42/required application; arrange the current No Outstanding Certificate or respond to the KMC Letter of Intimation/demand as directed.',
            'Submit death certificate, ownership/succession evidence, applicable affidavit or probate/administration document if legally required, current property-tax papers, and any site plan or other item required for the transaction type. Disclose all heirs.',
            'Pay the current transaction-specific processing fee and any lawful arrears/demand; keep receipts and application number. Respond to KMC document queries or hearing directions.',
            'Check the Assessment Register entry and any issued order/valuation notice. If heirs dispute title or shares, obtain legal advice; KMC assessment mutation records municipal tax liability and does not finally determine civil title.'
          ],
          bn: [
            'প্রাঙ্গণ KMC-র অধীনে কি না যাচাই করে বর্তমান Form A-42/প্রয়োজনীয় আবেদন নিন; নির্দেশ অনুযায়ী No Outstanding Certificate সংগ্রহ করুন অথবা KMC-র Letter of Intimation/চাহিদার জবাব দিন।',
            'মৃত্যু সনদ, মালিকানা/উত্তরাধিকার-প্রমাণ, আইনত প্রয়োজন হলে হলফনামা বা প্রবেট/প্রশাসনপত্র, বর্তমান পুরকর নথি এবং লেনদেন অনুযায়ী চাওয়া সাইট প্ল্যান/অন্যান্য নথি দিন। সব উত্তরাধিকারীর তথ্য প্রকাশ করুন।',
            'লেনদেন-নির্দিষ্ট বর্তমান ফি ও বৈধ বকেয়া/চাহিদা পরিশোধ করে রসিদ ও আবেদন নম্বর রাখুন। KMC-র নথি-জিজ্ঞাসা বা শুনানির নির্দেশে সাড়া দিন।',
            'Assessment Register-এর এন্ট্রি এবং আদেশ/মূল্যায়ন নোটিশ যাচাই করুন। উত্তরাধিকারী বা অংশ নিয়ে বিরোধ থাকলে আইনগত পরামর্শ নিন; KMC মিউটেশন পৌরকর দায় নথিভুক্ত করে, দেওয়ানি মালিকানার চূড়ান্ত বিচার নয়।'
          ],
          hi: [
            'जांचें कि परिसर KMC क्षेत्र में है या नहीं; वर्तमान Form A-42/आवेदन लें और निर्देशानुसार No Outstanding Certificate प्राप्त करें या KMC के Letter of Intimation/मांग का जवाब दें।',
            'मृत्यु प्रमाणपत्र, स्वामित्व/उत्तराधिकार प्रमाण, कानूनन आवश्यक होने पर शपथपत्र या प्रोबेट/प्रशासन दस्तावेज, वर्तमान संपत्ति-कर कागजात तथा लेनदेन के अनुसार मांगा गया साइट प्लान/अन्य दस्तावेज दें। सभी वारिस बताएं।',
            'वर्तमान लेनदेन-विशिष्ट प्रक्रिया शुल्क और वैध बकाया/मांग अदा कर रसीद व आवेदन संख्या रखें। KMC की दस्तावेज पूछताछ या सुनवाई निर्देश का जवाब दें।',
            'Assessment Register प्रविष्टि और किसी आदेश/मूल्यांकन नोटिस की जांच करें। वारिसों या हिस्सों में विवाद हो तो कानूनी सलाह लें; KMC म्यूटेशन नगरपालिका कर दायित्व दर्ज करता है, दीवानी स्वामित्व का अंतिम निर्णय नहीं।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Identify the property jurisdiction, recorded owner, all known heirs, applicable personal law, and the authority’s current succession-mutation checklist.',
        'Prepare death and ownership records, heirship/succession evidence accepted by the relevant authority, current tax or revenue records, and any transaction-specific supporting documents.',
        'Submit to the competent revenue or municipal authority, pay the current assessed demand, keep the receipt, and respond to any notice or hearing direction.',
        'Verify the resulting revenue or municipal entry. A mutation entry records administrative/tax particulars and does not finally adjudicate disputed inheritance or title shares.'
      ],
      bn: [
        'সম্পত্তির এখতিয়ার, রেকর্ডভুক্ত মালিক, পরিচিত সব উত্তরাধিকারী, প্রযোজ্য ব্যক্তিগত আইন এবং কর্তৃপক্ষের বর্তমান উত্তরাধিকার-মিউটেশন তালিকা যাচাই করুন।',
        'মৃত্যু ও মালিকানার নথি, সংশ্লিষ্ট কর্তৃপক্ষ-গ্রহণযোগ্য উত্তরাধিকার-প্রমাণ, বর্তমান কর/রাজস্ব রেকর্ড এবং লেনদেন-নির্দিষ্ট সহায়ক নথি প্রস্তুত করুন।',
        'উপযুক্ত রাজস্ব বা পৌর কর্তৃপক্ষের কাছে আবেদন করুন, বর্তমান নির্ধারিত চাহিদা পরিশোধ করে রসিদ রাখুন এবং নোটিশ/শুনানিতে সাড়া দিন।',
        'সংশোধিত রাজস্ব বা পৌর এন্ট্রি যাচাই করুন। মিউটেশন প্রশাসনিক/কর-তথ্য নথিভুক্ত করে; বিতর্কিত উত্তরাধিকার বা মালিকানার অংশের চূড়ান্ত বিচার নয়।'
      ],
      hi: [
        'संपत्ति का क्षेत्राधिकार, रिकॉर्डेड मालिक, सभी ज्ञात वारिस, लागू व्यक्तिगत कानून और प्राधिकरण की वर्तमान उत्तराधिकार-म्यूटेशन सूची जांचें।',
        'मृत्यु और स्वामित्व रिकॉर्ड, संबंधित प्राधिकरण द्वारा स्वीकार्य उत्तराधिकार प्रमाण, वर्तमान कर/राजस्व रिकॉर्ड और लेनदेन-विशिष्ट सहायक दस्तावेज तैयार करें।',
        'सक्षम राजस्व या नगरपालिका प्राधिकरण में आवेदन दें, वर्तमान निर्धारित मांग का भुगतान कर रसीद रखें और नोटिस/सुनवाई निर्देश का जवाब दें।',
        'परिणामी राजस्व या नगरपालिका प्रविष्टि जांचें। म्यूटेशन प्रशासनिक/कर विवरण दर्ज करता है, विवादित विरासत या स्वामित्व हिस्सों का अंतिम न्यायनिर्णय नहीं।'
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
      en: 'District land-use change may require WBLR section 4C permission; Kolkata building/planning permission is a separate route. Land conversion is not itself building-plan sanction.',
      bn: 'জেলায় ভূমি-ব্যবহার পরিবর্তনে WBLR ধারা ৪সি অনুমতি লাগতে পারে; কলকাতার ভবন/পরিকল্পনা অনুমোদন পৃথক প্রক্রিয়া। ভূমি-রূপান্তর নিজে ভবন-নকশার অনুমতি নয়।',
      hi: 'जिलों में भूमि-उपयोग परिवर्तन हेतु WBLR धारा 4C अनुमति आवश्यक हो सकती है; कोलकाता भवन/योजना अनुमति अलग प्रक्रिया है। भूमि रूपांतरण स्वयं भवन योजना स्वीकृति नहीं है।'
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
      en: 'No single duration applies. The current Silpasathi service standard lists 30 days for its land-use conversion service; confirm eligibility, application completeness, and the live service standard for the correct authority.',
      bn: 'একটি একক সময়সীমা সব ক্ষেত্রে প্রযোজ্য নয়। Silpasathi-র বর্তমান পরিষেবা-তথ্যে ভূমি-ব্যবহার রূপান্তরের জন্য ৩০ দিন বলা আছে; যোগ্যতা, আবেদনের সম্পূর্ণতা এবং সঠিক কর্তৃপক্ষের লাইভ পরিষেবা-মান যাচাই করুন।',
      hi: 'एक अवधि सभी मामलों पर लागू नहीं होती। वर्तमान Silpasathi सेवा मानक में भूमि-उपयोग परिवर्तन के लिए 30 दिन दिए गए हैं; पात्रता, आवेदन की पूर्णता और सही प्राधिकरण का लाइव सेवा मानक जांचें।'
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
        statutory_timeframe: {
          en: 'The statutory route requires an application and inquiry/hearing; no fixed completion period is stated here. For an eligible Silpasathi application, verify the current published 30-day service standard and its scope.',
          bn: 'বিধিবদ্ধ প্রক্রিয়ায় আবেদন, অনুসন্ধান/শুনানি লাগে; এখানে নির্দিষ্ট নিষ্পত্তি-সময় বলা হচ্ছে না। যোগ্য Silpasathi আবেদনের ক্ষেত্রে প্রকাশিত ৩০ দিনের বর্তমান পরিষেবা-মান ও তার প্রযোজ্যতা যাচাই করুন।',
          hi: 'वैधानिक प्रक्रिया में आवेदन और जांच/सुनवाई आवश्यक है; यहां निश्चित निस्तारण अवधि नहीं दी जा रही। पात्र Silpasathi आवेदन के लिए प्रकाशित वर्तमान 30-दिन सेवा मानक और उसका दायरा जांचें।'
        },
        timeline_info: [
          {
            id: 'time-land-03-silpasathi-service',
            kind: 'service_standard',
            label: {
              en: 'Silpasathi land-use conversion service standard',
              bn: 'Silpasathi ভূমি-ব্যবহার রূপান্তর পরিষেবা-মান',
              hi: 'Silpasathi भूमि-उपयोग परिवर्तन सेवा मानक'
            },
            value_description: {
              en: 'Silpasathi publishes a 30-day service timeline for its land-use conversion service. This is a service standard, not a guaranteed outcome or a statutory limitation period; confirm applicability and the live service page before applying.',
              bn: 'Silpasathi-র ভূমি-ব্যবহার রূপান্তর পরিষেবায় ৩০ দিনের পরিষেবা-সময় প্রকাশিত। এটি পরিষেবা-মান, নিশ্চিত ফল বা তামাদির সময়সীমা নয়; আবেদন করার আগে প্রযোজ্যতা ও লাইভ পরিষেবা-পৃষ্ঠা যাচাই করুন।',
              hi: 'Silpasathi भूमि-उपयोग परिवर्तन सेवा के लिए 30-दिन सेवा समय प्रकाशित करता है। यह सेवा मानक है, सुनिश्चित परिणाम या वैधानिक परिसीमा नहीं; आवेदन से पहले प्रयोज्यता और लाइव सेवा पृष्ठ की पुष्टि करें।'
            },
            scope: 'west_bengal',
            evidence: {
              status: 'verified',
              primary_source_title: 'Silpasathi - West Bengal Online Single Window Services',
              primary_source_url: 'https://silpasathi.wb.gov.in/pre-establishment-approvals',
              pinpoint: 'Conversion of Land Use service entry; 30 days; scope/eligibility depend on the service route',
              checked_on: '2026-10-10'
            }
          }
        ],
        fees: [
          {
            id: 'fee-land-03-rural-conversion',
            kind: 'authority_calculated',
            label: {
              en: 'Rural land-use conversion charge',
              bn: 'গ্রামীণ ভূমি-ব্যবহার রূপান্তর চার্জ',
              hi: 'ग्रामीण भूमि-उपयोग परिवर्तन शुल्क'
            },
            formula_description: {
              en: 'No general amount is stated. The applicable charge may depend on land classification, area, proposed use and the current notified schedule.',
              bn: 'কোনো সাধারণ অঙ্ক বলা হচ্ছে না। প্রযোজ্য চার্জ জমির শ্রেণি, এলাকা, প্রস্তাবিত ব্যবহার ও বর্তমান বিজ্ঞপ্তির তফসিলের উপর নির্ভর করতে পারে।',
              hi: 'कोई सामान्य राशि नहीं दी जा रही। लागू शुल्क भूमि वर्गीकरण, क्षेत्रफल, प्रस्तावित उपयोग और वर्तमान अधिसूचित अनुसूची पर निर्भर हो सकता है।'
            },
            conditions: {
              en: 'Use the competent authority’s current demand/calculation. The Silpasathi service standard does not establish the conversion fee.',
              bn: 'উপযুক্ত কর্তৃপক্ষের বর্তমান চাহিদা/হিসাব অনুসরণ করুন। Silpasathi পরিষেবা-মান ভূমি-রূপান্তরের ফি নির্ধারণ করে না।',
              hi: 'सक्षम प्राधिकरण की वर्तमान मांग/गणना मानें। Silpasathi सेवा भूमि रूपांतरण शुल्क निर्धारित नहीं करती।'
            },
            scope: 'district',
            evidence: {
              status: 'variable',
              primary_source_title: 'West Bengal Land & Land Reforms Department / Silpasathi service route',
              primary_source_url: 'https://silpasathi.wb.gov.in/pre-establishment-approvals',
              pinpoint: 'Applicable WBLR Act section 4C schedule/order and current official demand for the parcel and proposed use',
              checked_on: '2026-10-10'
            }
          }
        ],
        steps: {
          en: [
            'Check the current Section 4C service, competent Collector or delegated officer, and prescribed Form 1A/document checklist for the plot. Do not begin a use-changing activity before written permission where required.',
            'Prepare the current Record of Rights or mutation record, rent receipt, measured sketch/location, project report or pollution-control clearance where applicable, and waterbody-related Form 1B/compensatory-waterbody material if required.',
            'Submit to the authority shown for the land and application category. Pay only the current official demand; respond to inquiry, objections and hearing notices. Adjacent-owner NOC is not a universal requirement; affected persons may be heard under the applicable process.',
            'Proceed only after a written order and satisfy its conditions. Separately obtain building-plan, development-authority, wetland, environmental or business approvals that apply; conversion permission alone is not a building permit.'
          ],
          bn: [
            'প্লটের জন্য বর্তমান ধারা ৪সি পরিষেবা, উপযুক্ত Collector/ক্ষমতাপ্রাপ্ত আধিকারিক এবং নির্ধারিত Form 1A/নথির তালিকা যাচাই করুন। লিখিত অনুমতি প্রয়োজন হলে তা পাওয়ার আগে ব্যবহার-পরিবর্তনের কাজ শুরু করবেন না।',
            'বর্তমান Record of Rights/মিউটেশন রেকর্ড, খাজনা রসিদ, মাপসহ স্কেচ/অবস্থান, প্রযোজ্য হলে প্রকল্প প্রতিবেদন বা দূষণ-নিয়ন্ত্রণ ছাড়পত্র এবং জলাশয়ের ক্ষেত্রে প্রয়োজনীয় Form 1B/ক্ষতিপূরণমূলক জলাশয়ের নথি প্রস্তুত করুন।',
            'জমি ও আবেদনের শ্রেণি অনুযায়ী নির্দেশিত কর্তৃপক্ষের কাছে জমা দিন। কেবল বর্তমান সরকারি চাহিদা পরিশোধ করুন; অনুসন্ধান, আপত্তি ও শুনানির নোটিশে সাড়া দিন। সংলগ্ন-মালিকের NOC সর্বক্ষেত্রে বাধ্যতামূলক নয়; প্রযোজ্য প্রক্রিয়ায় প্রভাবিত ব্যক্তির শুনানি হতে পারে।',
            'লিখিত আদেশ এবং তার শর্ত পূরণের পরেই এগোন। প্রযোজ্য ভবন-নকশা, উন্নয়ন কর্তৃপক্ষ, জলাভূমি, পরিবেশ বা ব্যবসার অনুমতি আলাদাভাবে নিন; ভূমি-রূপান্তর নিজে ভবন নির্মাণের অনুমতি নয়।'
          ],
          hi: [
            'भूखंड के लिए वर्तमान धारा 4C सेवा, सक्षम Collector/प्रत्यायोजित अधिकारी और निर्धारित Form 1A/दस्तावेज सूची जांचें। जहां लिखित अनुमति जरूरी हो, उपयोग बदलने का काम पहले शुरू न करें।',
            'वर्तमान Record of Rights/म्यूटेशन रिकॉर्ड, लगान रसीद, माप सहित स्केच/स्थान, लागू होने पर परियोजना रिपोर्ट या प्रदूषण नियंत्रण मंजूरी और जल निकाय के मामले में आवश्यक Form 1B/प्रतिपूरक जल निकाय दस्तावेज तैयार करें।',
            'भूमि और आवेदन श्रेणी के अनुसार सक्षम प्राधिकरण को आवेदन दें। केवल वर्तमान आधिकारिक मांग का भुगतान करें; जांच, आपत्ति और सुनवाई नोटिस का जवाब दें। पड़ोसी की NOC हर मामले में अनिवार्य नहीं; लागू प्रक्रिया में प्रभावित व्यक्तियों को सुना जा सकता है।',
            'लिखित आदेश और उसकी शर्तें पूरी होने के बाद ही आगे बढ़ें। लागू भवन योजना, विकास प्राधिकरण, आर्द्रभूमि, पर्यावरण या व्यवसाय मंजूरियां अलग से लें; भूमि रूपांतरण अपने आप भवन अनुमति नहीं है।'
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
        statutory_timeframe: {
          en: 'No single time applies. Confirm the correct planning/building approval route, required application and current KMC service standard for the premises and proposed work.',
          bn: 'একটি একক সময়সীমা প্রযোজ্য নয়। প্রাঙ্গণ ও প্রস্তাবিত কাজের জন্য সঠিক পরিকল্পনা/ভবন অনুমোদন প্রক্রিয়া, আবেদন এবং বর্তমান KMC পরিষেবা-মান যাচাই করুন।',
          hi: 'एक अवधि सभी मामलों पर लागू नहीं होती। परिसर और प्रस्तावित कार्य के लिए सही योजना/भवन अनुमोदन मार्ग, आवेदन और वर्तमान KMC सेवा मानक की पुष्टि करें।'
        },
        fees: [
          {
            id: 'fee-land-03-kmc-building-sanction',
            kind: 'authority_calculated',
            label: {
              en: 'KMC building-plan scrutiny and sanction charges',
              bn: 'KMC ভবন-নকশা যাচাই ও অনুমোদন চার্জ',
              hi: 'KMC भवन योजना जांच और स्वीकृति शुल्क'
            },
            formula_description: {
              en: 'No single amount is stated. KMC assesses charges according to the application, proposed work and applicable current schedule.',
              bn: 'একটি নির্দিষ্ট অঙ্ক বলা হচ্ছে না। আবেদন, প্রস্তাবিত কাজ ও বর্তমান প্রযোজ্য তফসিল অনুযায়ী KMC চার্জ নির্ধারণ করে।',
              hi: 'एक निश्चित राशि नहीं दी जा रही। KMC आवेदन, प्रस्तावित कार्य और लागू वर्तमान अनुसूची के अनुसार शुल्क तय करता है।'
            },
            conditions: {
              en: 'This is separate from any land-conversion charge, stamp duty, registration fee or professional fee. Confirm the current KMC demand for the premises.',
              bn: 'এটি ভূমি-রূপান্তর চার্জ, স্ট্যাম্প ডিউটি, রেজিস্ট্রেশন ফি বা পেশাগত ফি থেকে আলাদা। প্রাঙ্গণের জন্য বর্তমান KMC চাহিদা যাচাই করুন।',
              hi: 'यह भूमि रूपांतरण शुल्क, स्टाम्प ड्यूटी, पंजीकरण या पेशेवर फीस से अलग है। परिसर के लिए वर्तमान KMC मांग की पुष्टि करें।'
            },
            scope: 'kolkata',
            evidence: {
              status: 'variable',
              primary_source_title: 'Kolkata Municipal Corporation - Building Department',
              primary_source_url: 'https://www.kmcgov.in/',
              pinpoint: 'Current building plan approval service and applicable fee schedule/demand',
              checked_on: '2026-10-10'
            }
          }
        ],
        steps: {
          en: [
            'Confirm that the premises is within KMC and identify the applicable building/planning permission route, land-use restrictions and current by-laws; land conversion and building sanction are distinct questions.',
            'Use a currently licensed/registered professional where required and prepare the plan, title/occupancy papers, premises details and other items on the current KMC checklist.',
            'Submit through the official KMC building service, pay the current transaction-specific assessed fees, and answer scrutiny or hearing queries.',
            'Start work only after receiving the written sanction and satisfying its conditions. KMC approval does not replace any separate WBLR, wetland, fire, environmental or other statutory permission that applies.'
          ],
          bn: [
            'প্রাঙ্গণ KMC-র অধীনে কি না এবং প্রযোজ্য ভবন/পরিকল্পনা অনুমতি, ভূমি-ব্যবহার সীমা ও বর্তমান বিধি যাচাই করুন; ভূমি-রূপান্তর ও ভবন অনুমোদন আলাদা বিষয়।',
            'প্রয়োজন হলে বর্তমানে লাইসেন্সপ্রাপ্ত/নিবন্ধিত পেশাজীবী নিন এবং বর্তমান KMC তালিকা অনুযায়ী নকশা, মালিকানা/দখল নথি ও প্রাঙ্গণের তথ্য প্রস্তুত করুন।',
            'সরকারি KMC ভবন-সেবায় জমা দিন, লেনদেন-নির্দিষ্ট বর্তমান নির্ধারিত ফি পরিশোধ করুন এবং যাচাই বা শুনানির প্রশ্নে উত্তর দিন।',
            'লিখিত অনুমোদন এবং তার শর্ত পূরণের পরেই কাজ শুরু করুন। প্রযোজ্য পৃথক WBLR, জলাভূমি, অগ্নি, পরিবেশ বা অন্য আইনগত অনুমতির বিকল্প KMC অনুমোদন নয়।'
          ],
          hi: [
            'जांचें कि परिसर KMC क्षेत्र में है या नहीं और लागू भवन/योजना अनुमति मार्ग, भूमि-उपयोग प्रतिबंध तथा वर्तमान उपनियम पहचानें; भूमि रूपांतरण और भवन स्वीकृति अलग विषय हैं।',
            'जहां आवश्यक हो वर्तमान लाइसेंसधारी/पंजीकृत पेशेवर लें और वर्तमान KMC चेकलिस्ट के अनुसार योजना, स्वामित्व/कब्जा कागजात और परिसर विवरण तैयार करें।',
            'आधिकारिक KMC भवन सेवा में जमा करें, लेनदेन-विशिष्ट वर्तमान निर्धारित शुल्क दें और जांच या सुनवाई प्रश्नों का जवाब दें।',
            'लिखित मंजूरी और उसकी शर्तें पूरी होने के बाद ही काम शुरू करें। लागू अलग WBLR, आर्द्रभूमि, अग्नि, पर्यावरण या अन्य वैधानिक अनुमति का स्थान KMC मंजूरी नहीं लेती।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Identify whether the request is rural land conversion under WBLR section 4C or KMC building/planning approval; verify the property jurisdiction and applicable authority.',
        'Prepare the current Record of Rights, rent/tax receipt, site sketch and any application-specific project, waterbody, environmental or planning documents.',
        'Submit the correct application and pay only the current official demand. Answer notices and hearing directions; do not assume adjacent-owner NOC is universally required.',
        'Proceed only on the written permission and comply with its conditions; obtain separate building or other approvals when required.'
      ],
      bn: [
        'আবেদনটি WBLR ধারা ৪সি-র গ্রামীণ ভূমি-রূপান্তর নাকি KMC ভবন/পরিকল্পনা অনুমোদন তা নির্ধারণ করে সম্পত্তির এখতিয়ার ও কর্তৃপক্ষ যাচাই করুন।',
        'বর্তমান Record of Rights, খাজনা/কর রসিদ, সাইট স্কেচ এবং আবেদনভেদে প্রকল্প, জলাশয়, পরিবেশ বা পরিকল্পনা-সংক্রান্ত নথি প্রস্তুত করুন।',
        'সঠিক আবেদন জমা দিয়ে কেবল বর্তমান সরকারি চাহিদা পরিশোধ করুন। নোটিশ ও শুনানিতে সাড়া দিন; সংলগ্ন-মালিকের NOC সর্বত্র বাধ্যতামূলক ধরে নেবেন না।',
        'লিখিত অনুমতি পেলে তার শর্ত মেনে এগোন; প্রয়োজন হলে পৃথক ভবন বা অন্যান্য অনুমতি নিন।'
      ],
      hi: [
        'पहचानें कि आवेदन WBLR धारा 4C के तहत ग्रामीण भूमि रूपांतरण है या KMC भवन/योजना अनुमति; संपत्ति क्षेत्राधिकार और सक्षम प्राधिकरण जांचें।',
        'वर्तमान Record of Rights, लगान/कर रसीद, साइट स्केच और आवेदन-विशिष्ट परियोजना, जल निकाय, पर्यावरण या योजना दस्तावेज तैयार करें।',
        'सही आवेदन जमा करें और केवल वर्तमान आधिकारिक मांग का भुगतान करें। नोटिस और सुनवाई निर्देशों का जवाब दें; पड़ोसी की NOC को सार्वभौमिक रूप से अनिवार्य न मानें।',
        'लिखित अनुमति मिलने पर उसकी शर्तों का पालन करें; आवश्यक होने पर अलग भवन या अन्य मंजूरियां लें।'
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
      en: 'No generally applicable fixed period is stated. Revenue survey availability, notice, record comparison and disputes can affect timing; civil-court relief follows the court timetable.',
      bn: 'সর্বক্ষেত্রে প্রযোজ্য কোনো নির্দিষ্ট সময় বলা হচ্ছে না। রাজস্ব জরিপের সুযোগ, নোটিশ, রেকর্ড তুলনা ও বিরোধে সময় বদলাতে পারে; দেওয়ানি প্রতিকার আদালতের সময়সূচি অনুযায়ী চলে।',
      hi: 'सभी मामलों पर लागू कोई निश्चित अवधि नहीं दी जा रही। राजस्व सर्वे उपलब्धता, नोटिस, रिकॉर्ड तुलना और विवाद समय को प्रभावित कर सकते हैं; दीवानी राहत अदालत की समय-सारणी पर निर्भर है।'
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
        statutory_timeframe: {
          en: 'Ask the competent BL&LRO about the current survey/measurement schedule, required notice and charges; no universal completion period is stated here.',
          bn: 'বর্তমান জরিপ/মাপের সময়সূচি, প্রয়োজনীয় নোটিশ ও ফি সম্পর্কে উপযুক্ত BL&LRO-র কাছে যাচাই করুন; এখানে সর্বজনীন নিষ্পত্তি-সময় বলা হচ্ছে না।',
          hi: 'वर्तमान सर्वे/माप कार्यक्रम, आवश्यक नोटिस और शुल्क के लिए सक्षम BL&LRO से पूछें; यहां कोई सार्वभौमिक पूर्णता अवधि नहीं दी जा रही।'
        },
        steps: {
          en: [
            'Confirm the responsible land-record office and whether it offers a formal demarcation service for this dispute. Identify the mouza, dag/khatian, deed boundaries and exact portion in question.',
            'Obtain the prescribed application and current document/fee list from the competent office; provide certified maps and records if required and pay only the current assessed charge.',
            'Ask how adjoining holders will be notified and retain the application receipt and notices. Attend the scheduled measurement with the original records and make any objection part of the record.',
            'Obtain the measurement report/order if issued. A revenue measurement may not decide disputed title or possession; where a binding civil determination is needed, consult an advocate about appropriate civil relief and any CPC commissioner application.'
          ],
          bn: [
            'দায়িত্বপ্রাপ্ত ভূমি-রেকর্ড দপ্তর এবং এই বিরোধে আনুষ্ঠানিক সীমানা-নির্ধারণ পরিষেবা আছে কি না যাচাই করুন। মৌজা, দাগ/খতিয়ান, দলিলের সীমানা ও বিতর্কিত অংশ নির্দিষ্ট করুন।',
            'উপযুক্ত দপ্তর থেকে নির্ধারিত আবেদন এবং বর্তমান নথি/ফি তালিকা নিন; প্রয়োজন হলে প্রত্যয়িত নকশা ও রেকর্ড দিন এবং কেবল বর্তমান নির্ধারিত ফি পরিশোধ করুন।',
            'সংলগ্ন মালিকদের কীভাবে নোটিশ দেওয়া হবে জেনে আবেদন-রসিদ ও নোটিশ রাখুন। নির্ধারিত মাপে মূল রেকর্ডসহ উপস্থিত থাকুন এবং আপত্তি থাকলে নথিভুক্ত করুন।',
            'জারি হলে মাপের প্রতিবেদন/আদেশ সংগ্রহ করুন। রাজস্ব জরিপ বিতর্কিত মালিকানা বা দখলের চূড়ান্ত বিচার নাও হতে পারে; বাধ্যতামূলক দেওয়ানি সিদ্ধান্তের জন্য উপযুক্ত প্রতিকার ও CPC কমিশনার আবেদনের বিষয়ে আইনজীবীর পরামর্শ নিন।'
          ],
          hi: [
            'जिम्मेदार भूमि रिकॉर्ड कार्यालय और इस विवाद के लिए औपचारिक सीमांकन सेवा उपलब्ध है या नहीं, इसकी पुष्टि करें। मौजा, दाग/खतियान, विलेख की सीमा और विवादित भाग चिन्हित करें।',
            'सक्षम कार्यालय से निर्धारित आवेदन और वर्तमान दस्तावेज/शुल्क सूची लें; आवश्यक हो तो प्रमाणित नक्शे और रिकॉर्ड दें तथा केवल वर्तमान निर्धारित शुल्क अदा करें।',
            'पूछें कि आसपास के धारकों को सूचना कैसे दी जाएगी और आवेदन रसीद/नोटिस रखें। तय माप के समय मूल रिकॉर्ड साथ लाएं और आपत्ति हो तो रिकॉर्ड में दर्ज कराएं।',
            'जारी होने पर माप रिपोर्ट/आदेश प्राप्त करें। राजस्व माप विवादित स्वामित्व या कब्जे का अंतिम निर्णय नहीं हो सकता; बाध्यकारी दीवानी निर्धारण हेतु उपयुक्त राहत और CPC आयुक्त आवेदन पर वकील से सलाह लें।'
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
        statutory_timeframe: {
          en: 'KMC survey/assessment service timing depends on the request and records. A boundary/title dispute requiring a civil suit follows court procedure and timetable.',
          bn: 'KMC জরিপ/মূল্যায়ন পরিষেবার সময় আবেদনের ধরন ও রেকর্ডের উপর নির্ভর করে। সীমানা/মালিকানা বিরোধে দেওয়ানি মামলা হলে আদালতের প্রক্রিয়া ও সময়সূচি প্রযোজ্য।',
          hi: 'KMC सर्वे/मूल्यांकन सेवा का समय अनुरोध और रिकॉर्ड पर निर्भर करता है। सीमा/स्वामित्व विवाद में दीवानी वाद होने पर अदालत की प्रक्रिया और समय-सारणी लागू होती है।'
        },
        steps: {
          en: [
            'For a KMC assessment/building-plan boundary or measurement record, check the responsible KMC department and current request process. Collect sanctioned plans, premises/Assessee details and title documents.',
            'If facts show encroachment or a genuine title/possession dispute, obtain advice on the competent civil court, territorial/pecuniary jurisdiction, limitation and appropriate relief; do not assume every survey disagreement requires an injunction suit.',
            'Where a suit is filed, an advocate may consider a commission application under CPC Order XXVI Rule 9 if local investigation is necessary to clarify a matter in dispute; appointment is for the court to decide.',
            'Preserve KMC survey material, photographs, plans and the court commissioner’s report/order. A survey or commissioner report is evidence; it does not guarantee a boundary finding or decide title by itself.'
          ],
          bn: [
            'KMC মূল্যায়ন/ভবন-নকশার সীমানা বা মাপের নথির জন্য দায়িত্বপ্রাপ্ত KMC দপ্তর ও বর্তমান আবেদন-পদ্ধতি যাচাই করুন। অনুমোদিত নকশা, প্রাঙ্গণ/Assessee তথ্য ও মালিকানা-নথি সংগ্রহ করুন।',
            'তথ্যে অনধিকার প্রবেশ বা প্রকৃত মালিকানা/দখল বিরোধ থাকলে উপযুক্ত দেওয়ানি আদালত, স্থানীয়/আর্থিক এখতিয়ার, তামাদি ও প্রতিকার সম্পর্কে আইনজীবীর পরামর্শ নিন; প্রত্যেক জরিপ-বিরোধে ইনজাংশন মামলা আবশ্যক ধরে নেবেন না।',
            'মামলা হলে বিরোধের বিষয় স্পষ্ট করতে স্থানীয় তদন্ত দরকার কি না দেখে আইনজীবী CPC Order XXVI Rule 9-এ কমিশন আবেদনের কথা বিবেচনা করতে পারেন; নিয়োগ আদালত নির্ধারণ করবে।',
            'KMC জরিপ-নথি, ছবি, নকশা এবং কমিশনারের প্রতিবেদন/আদেশ সংরক্ষণ করুন। জরিপ বা কমিশনার রিপোর্ট প্রমাণ; এতে সীমানার ফল নিশ্চিত হয় না বা নিজে থেকে মালিকানা নির্ধারিত হয় না।'
          ],
          hi: [
            'KMC मूल्यांकन/भवन योजना की सीमा या माप रिकॉर्ड के लिए जिम्मेदार KMC विभाग और वर्तमान आवेदन प्रक्रिया जांचें। स्वीकृत योजना, परिसर/Assessee विवरण और स्वामित्व दस्तावेज जुटाएं।',
            'यदि तथ्य अतिक्रमण या वास्तविक स्वामित्व/कब्जा विवाद दिखाते हैं तो सक्षम दीवानी न्यायालय, क्षेत्रीय/आर्थिक अधिकारिता, परिसीमा और उचित राहत पर वकील से सलाह लें; हर सर्वे मतभेद में निषेधाज्ञा वाद जरूरी न मानें।',
            'वाद दायर होने पर विवाद स्पष्ट करने हेतु स्थानीय जांच जरूरी है या नहीं देखकर वकील CPC Order XXVI Rule 9 के तहत आयुक्त आवेदन पर विचार कर सकता है; नियुक्ति अदालत तय करेगी।',
            'KMC सर्वे सामग्री, तस्वीरें, योजनाएं और आयुक्त रिपोर्ट/आदेश सुरक्षित रखें। सर्वे या आयुक्त रिपोर्ट साक्ष्य है; सीमा परिणाम की गारंटी या अपने आप स्वामित्व का निर्णय नहीं।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Identify whether the request is a rural revenue survey or a KMC assessment/building measurement and confirm the responsible authority.',
        'Prepare plot/premises identifiers, existing records and map, and obtain the current application and fee information from that authority.',
        'Submit the request, retain the receipt and attend any notified survey/hearing; record objections and preserve the report or order.',
        'If the dispute concerns ownership or possession, seek advice on the appropriate civil remedy. A survey result does not itself decide title, and a court commission is discretionary.'
      ],
      bn: [
        'আবেদনটি গ্রামীণ রাজস্ব জরিপ, নাকি KMC মূল্যায়ন/ভবন-মাপ তা নির্ধারণ করে দায়িত্বপ্রাপ্ত কর্তৃপক্ষ যাচাই করুন।',
        'প্লট/প্রাঙ্গণের পরিচিতি, বর্তমান রেকর্ড ও নকশা প্রস্তুত করে ওই কর্তৃপক্ষের কাছ থেকে বর্তমান আবেদন ও ফি-তথ্য নিন।',
        'আবেদন জমা দিয়ে রসিদ রাখুন এবং নোটিশ পেলে জরিপ/শুনানিতে যান; আপত্তি নথিভুক্ত করে প্রতিবেদন/আদেশ সংরক্ষণ করুন।',
        'বিরোধ মালিকানা বা দখল নিয়ে হলে উপযুক্ত দেওয়ানি প্রতিকারের পরামর্শ নিন। জরিপ নিজে থেকে মালিকানা নির্ধারণ করে না; আদালতের কমিশন বিবেচনাধীন।'
      ],
      hi: [
        'पहचानें कि अनुरोध ग्रामीण राजस्व सर्वे है या KMC मूल्यांकन/भवन माप, और जिम्मेदार प्राधिकरण की पुष्टि करें।',
        'प्लॉट/परिसर विवरण, मौजूदा रिकॉर्ड और नक्शा तैयार कर उस प्राधिकरण से वर्तमान आवेदन और शुल्क जानकारी लें।',
        'आवेदन देकर रसीद रखें और नोटिस मिलने पर सर्वे/सुनवाई में जाएं; आपत्ति दर्ज कर रिपोर्ट/आदेश सुरक्षित रखें।',
        'विवाद स्वामित्व या कब्जे का हो तो उचित दीवानी उपाय पर सलाह लें। सर्वे अपने आप स्वामित्व तय नहीं करता; न्यायालय आयुक्त नियुक्ति विवेकाधीन है।'
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
      en: 'Timing depends on evidence, notice, inquiry and the competent revenue forum. No universal processing period is stated; seek urgent legal advice if cultivation or possession is at immediate risk.',
      bn: 'প্রমাণ, নোটিশ, তদন্ত ও উপযুক্ত রাজস্ব ফোরামের উপর সময় নির্ভর করে। সর্বজনীন প্রক্রিয়াকরণ সময় বলা হচ্ছে না; চাষ বা দখল তাৎক্ষণিক ঝুঁকিতে থাকলে দ্রুত আইনগত পরামর্শ নিন।',
      hi: 'समय साक्ष्य, नोटिस, जांच और सक्षम राजस्व मंच पर निर्भर है। कोई सार्वभौमिक प्रक्रिया अवधि नहीं दी जा रही; खेती या कब्जे पर तत्काल जोखिम हो तो शीघ्र कानूनी सलाह लें।'
    },
    search_keywords: {
      en: ['bargadar', 'operation barga', 'sharecropper eviction'],
      bn: ['বর্গাদার', 'বর্গা উচ্ছেদ', 'অপারেশন বর্গা'],
      hi: ['बर्गादार', 'बटाईदार संरक्षण', 'भूमि बेदखली']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Confirm that the claimant meets the statutory definition of bargadar and identify the competent Revenue Officer. Obtain the current prescribed application from that authority; do not assume one form number applies to every case.',
        'Prepare evidence of cultivation and crop-sharing arrangements, plot and date details, witnesses, receipts or other available records. Submit the application and keep a stamped acknowledgement.',
        'Attend any notice, inquiry or hearing, respond to contrary evidence, and request the written order and record details.',
        'If recognition is refused or eviction is threatened, obtain urgent advice on the statutory remedy and protection route. Recording is not guaranteed; removal is subject to the statutory grounds and process.'
      ],
      bn: [
        'দাবিদার আইনে বর্গাদারের সংজ্ঞায় পড়েন কি না এবং উপযুক্ত Revenue Officer শনাক্ত করুন। কর্তৃপক্ষের কাছ থেকে বর্তমান নির্ধারিত আবেদন নিন; সব ক্ষেত্রে একই ফর্ম নম্বর ধরে নেবেন না।',
        'চাষ ও ফসল-ভাগের ব্যবস্থার প্রমাণ, দাগ ও তারিখ, সাক্ষী, রসিদ বা উপলভ্য রেকর্ড প্রস্তুত করুন। আবেদন জমা দিয়ে সিলযুক্ত স্বীকৃতি রাখুন।',
        'নোটিশ, তদন্ত বা শুনানিতে অংশ নিন, বিপরীত প্রমাণের জবাব দিন এবং লিখিত আদেশ ও রেকর্ডের বিবরণ চান।',
        'স্বীকৃতি প্রত্যাখ্যাত হলে বা উচ্ছেদের হুমকি থাকলে বিধিবদ্ধ প্রতিকার ও সুরক্ষা-পথে দ্রুত পরামর্শ নিন। রেকর্ডিং নিশ্চিত নয়; অপসারণ বিধিবদ্ধ কারণ ও প্রক্রিয়ার অধীন।'
      ],
      hi: [
        'पुष्टि करें कि दावेदार वैधानिक bargadar परिभाषा में आता है और सक्षम Revenue Officer कौन है। प्राधिकरण से वर्तमान निर्धारित आवेदन लें; हर मामले में एक ही फॉर्म नंबर न मानें।',
        'खेती और फसल हिस्सेदारी व्यवस्था के प्रमाण, प्लॉट/तारीख, गवाह, रसीद या उपलब्ध रिकॉर्ड तैयार करें। आवेदन देकर मुहर लगी पावती रखें।',
        'किसी नोटिस, जांच या सुनवाई में शामिल हों, विरोधी साक्ष्य का जवाब दें और लिखित आदेश तथा रिकॉर्ड विवरण मांगें।',
        'मान्यता अस्वीकृत हो या बेदखली का खतरा हो तो वैधानिक उपाय और सुरक्षा मार्ग पर तत्काल सलाह लें। रिकॉर्डिंग सुनिश्चित नहीं है; बेदखली वैधानिक आधार और प्रक्रिया के अधीन है।'
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
      en: 'Seek correction of an eligible record error: rural revenue-record correction and Kolkata KMC assessment objections follow different authorities and procedures. Neither route finally adjudicates disputed civil title.',
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
      en: 'Timing depends on the record type, competent office, and whether correction is clerical or disputed; confirm the current service standard and appeal deadline on the order.',
      bn: 'রেকর্ডের ধরন, উপযুক্ত দপ্তর এবং সংশোধন করণিক নাকি বিরোধপূর্ণ তার উপর সময় নির্ভর করে; বর্তমান পরিষেবা-মান ও আদেশে উল্লেখিত আপিলের সময়সীমা যাচাই করুন।',
      hi: 'समय रिकॉर्ड के प्रकार, सक्षम कार्यालय और सुधार लिपिकीय है या विवादित, इस पर निर्भर है; वर्तमान सेवा मानक और आदेश में दी गई अपील अवधि की पुष्टि करें।'
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
            'Obtain the current certified record and identify whether the claimed error concerns a revenue record, a registered instrument, or title; section 51A(4) applies only within its statutory correction scope.',
            'Submit the current prescribed request with the record entry, supporting registered documents and certified earlier records that show the alleged mistake. State the exact field and correction sought.',
            'Respond to notice or hearing directions and provide the original/certified records requested. Ask for a reasoned written order and correction status.',
            'If the issue involves disputed title rather than an eligible record error, or correction is refused, seek advice on the competent appeal/revision or civil remedy. A record correction does not itself create title.'
          ],
          bn: [
            'বর্তমান প্রত্যয়িত রেকর্ড সংগ্রহ করে ভুলটি রাজস্ব-রেকর্ড, রেজিস্ট্রি দলিল, নাকি মালিকানা-সংক্রান্ত তা নির্ধারণ করুন; ধারা ৫১এ(৪) কেবল তার বিধিবদ্ধ সংশোধন-পরিসরে প্রযোজ্য।',
            'বর্তমান নির্ধারিত আবেদন, রেকর্ড এন্ট্রি, সহায়ক রেজিস্ট্রি নথি এবং ভুল দেখায় এমন পুরনো প্রত্যয়িত রেকর্ড দিন। কোন ঘর কীভাবে সংশোধন চান তা স্পষ্ট লিখুন।',
            'নোটিশ বা শুনানিতে সাড়া দিয়ে চাওয়া মূল/প্রত্যয়িত নথি দিন। যুক্তিসহ লিখিত আদেশ ও সংশোধনের অবস্থা চান।',
            'বিষয়টি যোগ্য রেকর্ড-ভুলের বদলে মালিকানা-বিরোধ হলে বা সংশোধন প্রত্যাখ্যাত হলে উপযুক্ত আপিল/রিভিশন বা দেওয়ানি প্রতিকারের পরামর্শ নিন। রেকর্ড সংশোধন নিজে থেকে মালিকানা সৃষ্টি করে না।'
          ],
          hi: [
            'वर्तमान प्रमाणित रिकॉर्ड लें और पहचानें कि कथित त्रुटि राजस्व रिकॉर्ड, पंजीकृत दस्तावेज या स्वामित्व से जुड़ी है; धारा 51A(4) केवल अपनी वैधानिक सुधार सीमा में लागू है।',
            'वर्तमान निर्धारित आवेदन के साथ रिकॉर्ड प्रविष्टि, सहायक पंजीकृत दस्तावेज और गलती दिखाने वाले पुराने प्रमाणित रिकॉर्ड दें। मांगा गया सटीक सुधार बताएं।',
            'नोटिस या सुनवाई निर्देश का जवाब दें और मांगे गए मूल/प्रमाणित रिकॉर्ड दें। कारण सहित लिखित आदेश और सुधार स्थिति मांगें।',
            'यदि मामला पात्र रिकॉर्ड त्रुटि के बजाय स्वामित्व विवाद है या सुधार अस्वीकृत हो तो सक्षम अपील/पुनरीक्षण या दीवानी उपाय पर सलाह लें। रिकॉर्ड सुधार स्वयं स्वामित्व पैदा नहीं करता।'
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
        statutory_timeframe: {
          en: 'Deadlines and appeal routes depend on the specific KMC assessment notice/order. Check the current notice and rules.',
          bn: 'সময়সীমা ও আপিলের পথ নির্দিষ্ট KMC মূল্যায়ন নোটিশ/আদেশের উপর নির্ভর করে। বর্তমান নোটিশ ও বিধি যাচাই করুন।',
          hi: 'समयसीमा और अपील मार्ग विशेष KMC मूल्यांकन नोटिस/आदेश पर निर्भर है। वर्तमान नोटिस और नियम जांचें।'
        },
        steps: {
          en: [
            'Read the KMC assessment notice and identify the assessment entry, objection process, and deadline stated there. Distinguish an assessment error from a civil ownership dispute.',
            'Submit the prescribed objection with premises/Assessee numbers, relevant conveyance or succession papers, area evidence where relevant, tax bills, and the exact correction sought.',
            'File by the method and within the period in the current KMC notice/rules. Attend the hearing and retain the acknowledgement, evidence, and written order.',
            'Check the revised assessment record if an order is made. Use any appeal route and payment conditions stated in the order/statute; assessment does not finally adjudicate title.'
          ],
          bn: [
            'KMC মূল্যায়ন নোটিশ পড়ে এন্ট্রি, আপত্তির প্রক্রিয়া ও সময়সীমা শনাক্ত করুন। মূল্যায়ন-ভুলকে দেওয়ানি মালিকানা-বিরোধ থেকে আলাদা করুন।',
            'প্রাঙ্গণ/Assessee নম্বর, প্রাসঙ্গিক হস্তান্তর বা উত্তরাধিকার নথি, প্রয়োজনমতো ক্ষেত্রফলের প্রমাণ, কর বিল এবং চাওয়া সংশোধনসহ নির্ধারিত আপত্তি জমা দিন।',
            'বর্তমান KMC নোটিশ/বিধিতে বলা পদ্ধতি ও সময়ে দাখিল করুন। শুনানিতে যান এবং স্বীকৃতি, প্রমাণ ও লিখিত আদেশ রাখুন।',
            'আদেশ হলে সংশোধিত মূল্যায়ন যাচাই করুন। অসন্তুষ্ট হলে আদেশ/আইনে বলা আপিল ও জমার শর্ত মানুন; মূল্যায়ন প্রক্রিয়া চূড়ান্ত মালিকানা বিচার নয়।'
          ],
          hi: [
            'KMC मूल्यांकन नोटिस पढ़कर प्रविष्टि, आपत्ति प्रक्रिया और समयसीमा पहचानें। मूल्यांकन त्रुटि को दीवानी स्वामित्व विवाद से अलग रखें।',
            'परिसर/Assessee नंबर, संबंधित हस्तांतरण/उत्तराधिकार कागजात, आवश्यक होने पर क्षेत्रफल प्रमाण, कर बिल और मांगे गए सुधार सहित निर्धारित आपत्ति दें।',
            'वर्तमान KMC नोटिस/नियम में बताई विधि और अवधि में दाखिल करें। सुनवाई में जाएं और पावती, साक्ष्य व लिखित आदेश सुरक्षित रखें।',
            'आदेश होने पर संशोधित मूल्यांकन जांचें। असंतुष्ट होने पर बताई अपील और भुगतान शर्तें अपनाएं; मूल्यांकन स्वामित्व का अंतिम निर्णय नहीं।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Identify whether the issue is a rural revenue-record error, KMC assessment error, or disputed civil title; obtain the current form/notice from the competent authority.',
        'Prepare the existing entry, evidence of the alleged error, supporting deeds/records, and the precise correction requested.',
        'File through the correct rural revenue or Kolkata KMC route and follow its submission, notice, and hearing instructions.',
        'Obtain the written decision and verify any correction allowed. Use the authority’s stated appeal/revision route; correction does not itself decide civil title.'
      ],
      bn: [
        'বিষয়টি গ্রামীণ রাজস্ব-রেকর্ড ভুল, KMC মূল্যায়ন ভুল, নাকি দেওয়ানি মালিকানা-বিরোধ তা শনাক্ত করে উপযুক্ত কর্তৃপক্ষের বর্তমান ফর্ম/নোটিশ নিন।',
        'বর্তমান এন্ট্রি, ভুলের প্রমাণ, সহায়ক দলিল/রেকর্ড এবং চাওয়া নির্দিষ্ট সংশোধন প্রস্তুত করুন।',
        'সঠিক গ্রামীণ রাজস্ব বা কলকাতা KMC পথে আবেদন করে তার দাখিল, নোটিশ ও শুনানি নির্দেশ মেনে চলুন।',
        'লিখিত সিদ্ধান্ত নিয়ে অনুমোদিত সংশোধন যাচাই করুন। কর্তৃপক্ষের নির্দেশিত আপিল/রিভিশন নিন; সংশোধন নিজে থেকে দেওয়ানি মালিকানা নির্ধারণ করে না।'
      ],
      hi: [
        'पहचानें कि मामला ग्रामीण राजस्व रिकॉर्ड त्रुटि, KMC मूल्यांकन त्रुटि या विवादित दीवानी स्वामित्व का है; सक्षम प्राधिकरण का वर्तमान फॉर्म/नोटिस लें।',
        'मौजूदा प्रविष्टि, गलती का प्रमाण, सहायक विलेख/रिकॉर्ड और मांगा गया सटीक सुधार तैयार करें।',
        'सही ग्रामीण राजस्व या कोलकाता KMC मार्ग से आवेदन देकर जमा, नोटिस और सुनवाई निर्देश का पालन करें।',
        'लिखित निर्णय लें और स्वीकृत सुधार जांचें। प्राधिकरण द्वारा बताया अपील/पुनरीक्षण मार्ग अपनाएं; सुधार स्वयं स्वामित्व का निर्णय नहीं।'
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
      en: 'For premises that legally qualify as thika tenancy in Kolkata or Howrah, the Controller determines status; covered construction/alteration requires the permissions specified by law and separate municipal sanction.',
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
      en: 'Procedure and time depend on the application type, records and competent Thika Controller. Check the current form and service guidance; construction or alteration must not proceed without required permission.',
      bn: 'আবেদনের ধরন, নথি ও উপযুক্ত Thika Controller-এর উপর প্রক্রিয়া ও সময় নির্ভর করে। বর্তমান ফর্ম ও পরিষেবা-নির্দেশ যাচাই করুন; প্রয়োজনীয় অনুমতি ছাড়া নির্মাণ/পরিবর্তন করবেন না।',
      hi: 'प्रक्रिया और समय आवेदन प्रकार, रिकॉर्ड और सक्षम Thika Controller पर निर्भर है। वर्तमान फॉर्म/सेवा निर्देश जांचें; जरूरी अनुमति के बिना निर्माण/परिवर्तन न करें।'
    },
    search_keywords: {
      en: ['thika tenancy', 'thika controller kolkata', 'thika noc building'],
      bn: ['ঠিকা প্রজা', 'ঠিকা কন্ট্রোলার কলকাতা', 'ঠিকা এনওসি'],
      hi: ['ठिका किरायेदारी', 'ठिका नियंत्रक', 'ठिका एनओसी']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Confirm that the land/premises falls within the Thika Tenancy Act and identify whether the request concerns status determination, recording, transfer, or construction/alteration permission. Obtain the current form from the competent Thika Controller.',
        'Prepare available tenancy/occupation records, historical rent or revenue receipts, identity and succession/transfer documents, plot/premises details, and any plans required for the particular relief.',
        'Submit the appropriate application to the Controller, retain acknowledgement, and respond to notice, inquiry or hearing directions. The Controller decides eligibility and the legal effect of the evidence.',
        'Do not assume a tenant card or NOC will issue. If construction or alteration is proposed, obtain the Controller’s required written permission and the separate KMC/HMC building sanction and other approvals before work.'
      ],
      bn: [
        'জমি/প্রাঙ্গণ Thika Tenancy Act-এর আওতায় কি না এবং আবেদনটি মর্যাদা নির্ধারণ, রেকর্ডিং, হস্তান্তর, নাকি নির্মাণ/পরিবর্তন অনুমতির জন্য তা যাচাই করুন। উপযুক্ত Thika Controller-এর কাছ থেকে বর্তমান ফর্ম নিন।',
        'উপলভ্য ভাড়া/দখলের নথি, পুরনো ভাড়া বা রাজস্ব রসিদ, পরিচয় ও উত্তরাধিকার/হস্তান্তর নথি, প্লট/প্রাঙ্গণের তথ্য এবং নির্দিষ্ট প্রতিকারে চাওয়া নকশা প্রস্তুত করুন।',
        'উপযুক্ত আবেদন Controller-এর কাছে জমা দিয়ে স্বীকৃতি রাখুন এবং নোটিশ, তদন্ত বা শুনানিতে সাড়া দিন। প্রমাণের ভিত্তিতে যোগ্যতা ও আইনি ফল Controller নির্ধারণ করবেন।',
        'Tenant Card বা NOC নিশ্চিত ধরে নেবেন না। নির্মাণ/পরিবর্তন হলে কাজের আগে Controller-এর প্রয়োজনীয় লিখিত অনুমতি এবং পৃথক KMC/HMC ভবন অনুমোদন ও অন্যান্য অনুমতি নিন।'
      ],
      hi: [
        'पुष्टि करें कि भूमि/परिसर Thika Tenancy Act के अंतर्गत है और आवेदन दर्जा निर्धारण, रिकॉर्डिंग, हस्तांतरण या निर्माण/परिवर्तन अनुमति में से किसके लिए है। सक्षम Thika Controller से वर्तमान फॉर्म लें।',
        'उपलब्ध किरायेदारी/कब्जा रिकॉर्ड, पुराने किराया/राजस्व रसीद, पहचान और उत्तराधिकार/हस्तांतरण दस्तावेज, प्लॉट/परिसर विवरण तथा मांगी गई योजना तैयार करें।',
        'उचित आवेदन Controller के पास जमा कर पावती रखें और नोटिस, जांच या सुनवाई निर्देश का जवाब दें। साक्ष्य के आधार पर पात्रता और कानूनी प्रभाव Controller तय करेगा।',
        'Tenant Card या NOC जारी होना निश्चित न मानें। निर्माण/परिवर्तन से पहले Controller की आवश्यक लिखित अनुमति और अलग KMC/HMC भवन स्वीकृति तथा अन्य मंजूरियां लें।'
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
      en: 'A potentially time-sensitive section 8 purchase right may apply to specified bargadars, co-sharer raiyats or adjoining raiyats, subject to statutory eligibility, exceptions and trigger-specific deadlines.',
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
      en: 'Section 8 expressly gives a bargadar 3 months and an adjoining raiyat 4 months from transfer; a notified co-sharer has 3 months from service of the section 5(5) notice. The period for a non-notified co-sharer has been litigated and must not be assumed from this summary. Verify transfer/registration/notice facts and seek immediate advice. No trial-duration estimate is given.',
      bn: 'ধারা ৮-এ বর্গাদারের জন্য হস্তান্তর থেকে ৩ মাস এবং সংলগ্ন রায়তের জন্য ৪ মাস; নোটিশপ্রাপ্ত সহ-অংশীদার রায়তের জন্য ধারা ৫(৫)-এর নোটিশ জারি থেকে ৩ মাস বলা হয়েছে। নোটিশ না-পাওয়া সহ-অংশীদারের সময়সীমা নিয়ে মামলা হয়েছে; এই সারাংশ থেকে কোনো সময় ধরে নেবেন না। হস্তান্তর/রেজিস্ট্রি/নোটিশের তথ্য যাচাই করে দ্রুত পরামর্শ নিন। মামলার সময় অনুমান করা হচ্ছে না।',
      hi: 'धारा 8 में bargadar के लिए हस्तांतरण से 3 माह और सीमावर्ती रैयत के लिए 4 माह; नोटिस प्राप्त सह-हिस्सेदार के लिए धारा 5(5) नोटिस की तामील से 3 माह है। नोटिस न पाने वाले सह-हिस्सेदार की अवधि पर मुकदमे हुए हैं; इस सारांश से कोई अवधि न मानें। हस्तांतरण/पंजीकरण/नोटिस तथ्य जांचकर तुरंत सलाह लें। मुकदमे की अवधि का अनुमान नहीं।'
    },
    search_keywords: {
      en: ['pre-emption section 8', 'co-sharer land', 'contiguous tenant'],
      bn: ['অগ্রক্রয়াধিকার', 'প্রি-এম্পশন মামলা', 'সংলগ্ন প্রজা'],
      hi: ['अग्रक्रयाधिकार', 'प्री-एम्प्शन', 'पड़ोसी किसान अधिकार']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Immediately identify whether the claimant is a bargadar, co-sharer raiyat, or adjoining raiyat; verify the transfer, registration and section 5 notice dates, the statutory eligibility conditions, and any exception. Obtain advocate advice urgently.',
        'If eligible, prepare the section 8 application for the Munsif having territorial jurisdiction with the transfer instrument, relationship/adjoining-land evidence, land records and proof of the relevant trigger date.',
        'Section 8 requires deposit of the consideration money plus a further 10% of that amount with the application. This is a statutory deposit, not a penalty; confirm calculation, court deposit method and any further sums under section 9 with counsel/court.',
        'Serve and prosecute the application under section 9. The court determines eligibility, amount and transfer; filing does not guarantee that the purchase right will be allowed.'
      ],
      bn: [
        'দাবিদার বর্গাদার, সহ-অংশীদার রায়ত, নাকি সংলগ্ন রায়ত তা অবিলম্বে নির্ধারণ করুন; হস্তান্তর, রেজিস্ট্রি ও ধারা ৫ নোটিশের তারিখ, যোগ্যতার শর্ত ও ব্যতিক্রম যাচাই করে দ্রুত আইনজীবীর পরামর্শ নিন।',
        'যোগ্য হলে এখতিয়ারসম্পন্ন Munsif-এর কাছে ধারা ৮-এর আবেদন প্রস্তুত করুন; হস্তান্তর দলিল, সম্পর্ক/সংলগ্ন জমির প্রমাণ, ভূমি-রেকর্ড এবং প্রাসঙ্গিক সূচনাতারিখের প্রমাণ দিন।',
        'ধারা ৮ অনুযায়ী আবেদনসহ বিবেচ্য মূল্য এবং তার অতিরিক্ত ১০% জমা দিতে হয়। এটি বিধিবদ্ধ জমা, জরিমানা নয়; হিসাব, আদালতে জমার পদ্ধতি এবং ধারা ৯-এর সম্ভাব্য অতিরিক্ত অঙ্ক আইনজীবী/আদালতে যাচাই করুন।',
        'ধারা ৯ অনুযায়ী নোটিশ ও মামলা পরিচালনা করুন। যোগ্যতা, অঙ্ক ও হস্তান্তর আদালত নির্ধারণ করে; আবেদন করলেই অগ্রক্রয়াধিকার মঞ্জুর নিশ্চিত নয়।'
      ],
      hi: [
        'तुरंत पहचानें कि दावेदार bargadar, सह-हिस्सेदार रैयत या सीमावर्ती रैयत है; हस्तांतरण, पंजीकरण और धारा 5 नोटिस की तारीख, वैधानिक पात्रता तथा अपवाद जांचकर वकील से शीघ्र सलाह लें।',
        'पात्र होने पर क्षेत्राधिकार वाले Munsif के समक्ष धारा 8 आवेदन तैयार करें; हस्तांतरण दस्तावेज, संबंध/सीमावर्ती भूमि का प्रमाण, भूमि रिकॉर्ड और संबंधित प्रारंभ तिथि का प्रमाण दें।',
        'धारा 8 में आवेदन के साथ प्रतिफल राशि और उसका अतिरिक्त 10% जमा करना आवश्यक है। यह वैधानिक जमा है, जुर्माना नहीं; गणना, अदालत जमा विधि और धारा 9 की अतिरिक्त रकम वकील/अदालत से जांचें।',
        'धारा 9 के अनुसार नोटिस और आवेदन आगे बढ़ाएं। पात्रता, राशि और हस्तांतरण अदालत तय करेगी; आवेदन से खरीद अधिकार मंजूर होने की गारंटी नहीं।'
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
      en: 'Report suspected unlawful filling or conversion to the authority competent for the waterbody and location; restrictions differ by law, record classification and local jurisdiction. Court or tribunal relief is not automatic.',
      bn: 'নির্দিষ্ট জলাশয় ও অবস্থানের জন্য উপযুক্ত কর্তৃপক্ষকে সন্দেহভাজন বেআইনি ভরাট/রূপান্তরের অভিযোগ জানান; আইন, রেকর্ড-শ্রেণি ও স্থানীয় এখতিয়ার অনুযায়ী বিধিনিষেধ আলাদা। আদালত বা ট্রাইব্যুনালের প্রতিকার স্বয়ংক্রিয় নয়।',
      hi: 'विशिष्ट जल निकाय और स्थान के सक्षम प्राधिकरण को संदिग्ध अवैध भराई/परिवर्तन की सूचना दें; प्रतिबंध कानून, रिकॉर्ड वर्गीकरण और स्थानीय अधिकारिता पर निर्भर हैं। अदालत/ट्रिब्यूनल राहत स्वतः नहीं मिलती।'
    },
    authority_forum: {
      en: 'Competent revenue/waterbody authority for districts / KMC or competent State environmental authority for Kolkata',
      bn: 'বিএলঅ্যান্ডএলআরও (জেলা) / কেএমসি পরিবেশ সেল (কলকাতা)',
      hi: 'बीएल एंड एलआरओ (जिले) / केएमसी पर्यावरण शाखा (कोलकाता)'
    },
    forum_type: 'BL_LRO',
    is_complex: true,
    official_portal_url: 'https://banglarbhumi.gov.in/',
    statutory_timeframe: {
      en: 'Potentially urgent: there is no general 7–15 day response guarantee. If filling or construction is ongoing, document it safely and promptly contact the competent authority and an advocate about interim protection.',
      bn: 'জরুরি হতে পারে: ৭–১৫ দিনের কোনো সাধারণ সাড়া-নিশ্চয়তা নেই। ভরাট বা নির্মাণ চললে নিরাপদে প্রমাণ সংরক্ষণ করে দ্রুত উপযুক্ত কর্তৃপক্ষ ও আইনজীবীর সঙ্গে অন্তর্বর্তী সুরক্ষা নিয়ে কথা বলুন।',
      hi: 'मामला तत्काल हो सकता है: 7–15 दिन में कार्रवाई की कोई सामान्य गारंटी नहीं। भराई/निर्माण जारी हो तो सुरक्षित साक्ष्य रखें और सक्षम प्राधिकरण तथा वकील से अंतरिम संरक्षण पर शीघ्र सलाह लें।'
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
          en: 'Competent Collector/revenue authority and, where applicable, Fisheries or wetland/environment authority',
          bn: 'বিএলঅ্যান্ডএলআরও / জেলাশাসক / মৎস্য আধিকারিক',
          hi: 'बीएल एंड एलआरओ / जिला मजिस्ट्रेट / मत्स्य अधिकारी'
        },
        portal_name: { en: 'Banglarbhumi Portal', bn: 'বাংলারভূমি পোর্টাল', hi: 'बांगलारভূমি' },
        portal_url: 'https://banglarbhumi.gov.in/',
        steps: {
          en: [
            'Record the location, plot/mouza, waterbody classification and current condition with dated photographs/documents where safe. Do not trespass or confront persons on site.',
            'Send a dated written representation to the competent BL&LRO/Collector and applicable fisheries, wetland, environment or local authority; identify the suspected legal restriction and request inspection/action. Keep delivery proof and complaint numbers.',
            'Respond to any authority inquiry and provide land records, maps, photographs and witness details. A stop-work, prosecution or restoration decision is for the competent authority/court; it is not automatic on complaint.',
            'If work continues or authorities do not act, obtain urgent advocate advice about the proper administrative appeal, statutory forum or writ/NGT remedy and evidence needed for interim relief.'
          ],
          bn: [
            'নিরাপদ হলে তারিখসহ ছবি/নথিতে অবস্থান, প্লট/মৌজা, জলাশয়ের রেকর্ড-শ্রেণি ও বর্তমান অবস্থা নথিবদ্ধ করুন। অনধিকার প্রবেশ বা ঘটনাস্থলে সংঘাতে যাবেন না।',
            'উপযুক্ত BL&LRO/Collector এবং প্রযোজ্য মৎস্য, জলাভূমি, পরিবেশ বা স্থানীয় কর্তৃপক্ষকে তারিখসহ লিখিত আবেদন দিন; প্রযোজ্য আইনি বিধিনিষেধ উল্লেখ করে পরিদর্শন/ব্যবস্থা চান। প্রাপ্তির প্রমাণ ও অভিযোগ নম্বর রাখুন।',
            'কর্তৃপক্ষের তদন্তে সাড়া দিয়ে ভূমি-রেকর্ড, নকশা, ছবি ও সাক্ষীর তথ্য দিন। কাজ বন্ধ, মামলা বা পুনরুদ্ধারের সিদ্ধান্ত উপযুক্ত কর্তৃপক্ষ/আদালতের; অভিযোগ করলেই তা স্বয়ংক্রিয় নয়।',
            'কাজ চললে বা কর্তৃপক্ষ ব্যবস্থা না নিলে অন্তর্বর্তী প্রতিকারের জন্য সঠিক প্রশাসনিক আপিল, বিধিবদ্ধ ফোরাম বা রিট/NGT পথ ও প্রমাণ সম্পর্কে দ্রুত আইনজীবীর পরামর্শ নিন।'
          ],
          hi: [
            'सुरक्षित हो तो तारीख सहित फोटो/दस्तावेज में स्थान, प्लॉट/मौजा, जल निकाय रिकॉर्ड वर्गीकरण और वर्तमान स्थिति दर्ज करें। अतिक्रमण या मौके पर टकराव से बचें।',
            'सक्षम BL&LRO/Collector और लागू मत्स्य, आर्द्रभूमि, पर्यावरण या स्थानीय प्राधिकरण को दिनांकित शिकायत दें; संदिग्ध कानूनी प्रतिबंध बताकर निरीक्षण/कार्रवाई मांगें। प्राप्ति प्रमाण और शिकायत नंबर रखें।',
            'प्राधिकरण की जांच में भूमि रिकॉर्ड, नक्शे, तस्वीरें और गवाह विवरण दें। रोक आदेश, अभियोजन या पुनर्स्थापन सक्षम प्राधिकरण/अदालत तय करेगी; शिकायत से यह स्वतः नहीं होता।',
            'काम जारी रहे या कार्रवाई न हो तो अंतरिम राहत के लिए उचित प्रशासनिक अपील, वैधानिक मंच या writ/NGT उपाय और साक्ष्य पर तुरंत वकील से सलाह लें।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'KMC department responsible for the reported issue and competent State environmental/wetland authority; court/tribunal only where advised',
          bn: 'কেএমসি পরিবেশ ও জলাশয় সংরক্ষণ সেল / হাইকোর্ট',
          hi: 'केएमसी पर्यावरण एवं जल निकाय सेल / उच्च न्यायालय'
        },
        portal_name: { en: 'KMC Environment Cell', bn: 'কেএমসি পরিবেশ সেল', hi: 'केएमसी पर्यावरण विभाग' },
        portal_url: 'https://www.kmcgov.in/',
        steps: {
          en: [
            'Document the premises, ward/location, waterbody records and current activity from a safe lawful location. Save dated photos, official entries and complaint evidence.',
            'Submit a written complaint to the KMC department currently responsible for the issue and any competent State/wetland authority; contact police where there is an immediate safety or suspected offence concern. Retain acknowledgement and reference numbers.',
            'Provide records and respond to inspection/inquiry. FIR, stop-work, demolition or restoration measures depend on authority jurisdiction, evidence and applicable law; they are not guaranteed by filing a complaint.',
            'If there is continuing environmental harm or no effective response, consult an advocate about the competent statutory forum, High Court or NGT route, standing, evidence and interim-relief requirements.'
          ],
          bn: [
            'আইনসম্মত ও নিরাপদ স্থান থেকে প্রাঙ্গণ, ওয়ার্ড/অবস্থান, জলাশয়ের রেকর্ড এবং চলমান কাজ নথিবদ্ধ করুন। তারিখসহ ছবি, সরকারি এন্ট্রি ও অভিযোগের প্রমাণ রাখুন।',
            'বর্তমানে দায়িত্বপ্রাপ্ত KMC দপ্তর ও উপযুক্ত রাজ্য/জলাভূমি কর্তৃপক্ষকে লিখিত অভিযোগ দিন; তাৎক্ষণিক নিরাপত্তা বা অপরাধের আশঙ্কায় পুলিশকে জানান। স্বীকৃতি ও রেফারেন্স নম্বর রাখুন।',
            'নথি দিন ও পরিদর্শন/তদন্তে সাড়া দিন। FIR, কাজ বন্ধ, ভাঙা বা পুনরুদ্ধার কর্তৃপক্ষের এখতিয়ার, প্রমাণ ও প্রযোজ্য আইনের উপর নির্ভর করে; অভিযোগ করলেই নিশ্চিত নয়।',
            'পরিবেশগত ক্ষতি চললে বা কার্যকর সাড়া না এলে উপযুক্ত বিধিবদ্ধ ফোরাম, হাইকোর্ট বা NGT, locus, প্রমাণ ও অন্তর্বর্তী প্রতিকারের শর্ত নিয়ে আইনজীবীর পরামর্শ নিন।'
          ],
          hi: [
            'कानूनी और सुरक्षित स्थान से परिसर, वार्ड/स्थान, जल निकाय रिकॉर्ड और जारी गतिविधि दर्ज करें। तारीख वाली तस्वीरें, सरकारी प्रविष्टि और शिकायत साक्ष्य सुरक्षित रखें।',
            'वर्तमान में जिम्मेदार KMC विभाग और सक्षम राज्य/आर्द्रभूमि प्राधिकरण को लिखित शिकायत दें; तत्काल सुरक्षा या संदिग्ध अपराध हो तो पुलिस से संपर्क करें। पावती और संदर्भ नंबर रखें।',
            'रिकॉर्ड दें और निरीक्षण/जांच में जवाब दें। FIR, रोक, ध्वस्तीकरण या पुनर्स्थापन प्राधिकरण की अधिकारिता, साक्ष्य और लागू कानून पर निर्भर है; शिकायत से गारंटी नहीं।',
            'पर्यावरणीय नुकसान जारी हो या प्रभावी जवाब न मिले तो सक्षम वैधानिक मंच, High Court या NGT मार्ग, standing, साक्ष्य और अंतरिम राहत पर वकील से सलाह लें।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Identify the waterbody location and recorded land classification; safely preserve dated evidence of the reported activity.',
        'Notify the authority competent for the location and relevant wetland/fisheries/environment law; retain acknowledgement and complaint reference.',
        'Provide evidence and respond to inspection or hearing. Stop-work, prosecution or restoration depends on law, facts and an order by the competent authority/court.',
        'For ongoing harm or inaction, seek advocate advice on the correct urgent statutory or judicial remedy; no outcome or response period is guaranteed.'
      ],
      bn: [
        'জলাশয়ের অবস্থান ও রেকর্ডভুক্ত জমির শ্রেণি শনাক্ত করে চলমান কাজের তারিখসহ প্রমাণ নিরাপদে সংরক্ষণ করুন।',
        'অবস্থান ও প্রাসঙ্গিক জলাভূমি/মৎস্য/পরিবেশ আইনের উপযুক্ত কর্তৃপক্ষকে জানান; লিখিত স্বীকৃতি ও অভিযোগ নম্বর রাখুন।',
        'প্রমাণ দিন এবং পরিদর্শন/শুনানিতে সাড়া দিন। কাজ বন্ধ, মামলা বা পুনরুদ্ধার আইন, তথ্য এবং উপযুক্ত কর্তৃপক্ষ/আদালতের আদেশের উপর নির্ভর করে।',
        'ক্ষতি চললে বা ব্যবস্থা না হলে সঠিক জরুরি বিধিবদ্ধ/আদালতি প্রতিকার সম্পর্কে আইনজীবীর পরামর্শ নিন; ফল বা সাড়া দেওয়ার সময় নিশ্চিত নয়।'
      ],
      hi: [
        'जल निकाय का स्थान और रिकॉर्डेड भूमि वर्गीकरण पहचानें; बताई जा रही गतिविधि का तारीख सहित साक्ष्य सुरक्षित रूप से रखें।',
        'संपत्ति स्थान और लागू आर्द्रभूमि/मत्स्य/पर्यावरण कानून के सक्षम प्राधिकरण को सूचित करें; लिखित पावती और शिकायत संदर्भ रखें।',
        'साक्ष्य दें और निरीक्षण/सुनवाई में जवाब दें। रोक, अभियोजन या पुनर्स्थापन कानून, तथ्यों और सक्षम प्राधिकरण/अदालत के आदेश पर निर्भर है।',
        'नुकसान जारी हो या कार्रवाई न हो तो उचित तत्काल वैधानिक/न्यायिक उपाय पर वकील से सलाह लें; परिणाम या जवाब अवधि की गारंटी नहीं।'
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
    relevant_act: 'Sec 31, Specific Relief Act, 1963; Article 59, Limitation Act, 1963; Registration Act provisions as applicable',
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
      en: 'Limitation Act, 1963, Schedule Article 59 generally specifies 3 years from when facts entitling cancellation first become known for a cancellation suit. Classification of the instrument, knowledge, relief and exceptions are fact-sensitive; obtain prompt legal advice. No trial-duration estimate is given.',
      bn: 'Limitation Act, 1963-এর তফসিলের Article 59 অনুযায়ী দলিল বাতিলের মামলায় সাধারণত বাতিলের অধিকার সৃষ্টিকারী তথ্য প্রথম জানার সময় থেকে ৩ বছর। দলিলের শ্রেণি, জানার তারিখ, প্রতিকার ও ব্যতিক্রম তথ্যনির্ভর; দ্রুত আইনগত পরামর্শ নিন। মামলার সময় অনুমান করা হচ্ছে না।',
      hi: 'Limitation Act, 1963 की अनुसूची Article 59 में निरस्तीकरण के अधिकार देने वाले तथ्य पहली बार ज्ञात होने से सामान्यतः 3 वर्ष हैं। दस्तावेज का वर्गीकरण, जानकारी की तारीख, राहत और अपवाद तथ्य-विशिष्ट हैं; शीघ्र कानूनी सलाह लें। मुकदमे की अवधि का अनुमान नहीं।'
    },
    search_keywords: {
      en: ['deed cancellation', 'fraud deed', 'section 31 specific relief'],
      bn: ['দলিল বাতিল মামলা', 'ভুয়ো দলিল', 'জাল রেজিস্ট্রি'],
      hi: ['विलेख निरस्तीकरण', 'फर्जी रजिस्ट्री', 'दस्तावेज रद्द']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain the registered instrument and relevant registration records; preserve evidence of the alleged impersonation, forgery, fraud, execution, possession and the date the facts were discovered. A fingerprint/expert report is not automatically available or required in every case.',
        'Consult an advocate to identify the proper parties, court, limitation, valuation and relief. Section 31 of the Specific Relief Act may apply where its requirements are met; allegations can require separate civil/criminal analysis.',
        'If there is a concrete risk of further transfer or harm, discuss an interim injunction under CPC Order XXXIX with counsel. The applicant must establish the legal test; relief is for the court to decide.',
        'Follow pleadings, service, evidence and hearing directions. The court determines whether cancellation or other relief is justified; any decree must be acted upon through the legally applicable registration process. No cancellation or outcome is guaranteed.'
      ],
      bn: [
        'রেজিস্ট্রি দলিল ও প্রাসঙ্গিক নিবন্ধন রেকর্ড নিন; কথিত ছদ্মবেশ, জালিয়াতি, প্রতারণা, সম্পাদন, দখল এবং জানার তারিখের প্রমাণ সংরক্ষণ করুন। আঙুলের ছাপ/বিশেষজ্ঞ প্রতিবেদন সব মামলায় স্বয়ংক্রিয়ভাবে পাওয়া যায় বা আবশ্যক নয়।',
        'উপযুক্ত পক্ষ, আদালত, তামাদি, মূল্যায়ন ও প্রতিকার নির্ধারণে আইনজীবীর পরামর্শ নিন। শর্ত পূরণ হলে Specific Relief Act-এর ধারা ৩১ প্রযোজ্য হতে পারে; দেওয়ানি ও ফৌজদারি অভিযোগ আলাদা বিশ্লেষণ লাগতে পারে।',
        'পুনরায় হস্তান্তর বা ক্ষতির নির্দিষ্ট ঝুঁকি থাকলে CPC Order XXXIX-এ অন্তর্বর্তী নিষেধাজ্ঞা নিয়ে আইনজীবীর সঙ্গে কথা বলুন। আবেদনকারীকে আইনি মানদণ্ড পূরণ করতে হবে; প্রতিকার আদালত নির্ধারণ করে।',
        'প্লিডিং, নোটিশ, প্রমাণ ও শুনানির নির্দেশ মানুন। বাতিল বা অন্য প্রতিকার প্রাপ্য কি না আদালত নির্ধারণ করবে; ডিক্রি থাকলে প্রযোজ্য আইনগত নিবন্ধন-পদ্ধতি অনুসরণ করুন। বাতিল বা ফল নিশ্চিত নয়।'
      ],
      hi: [
        'पंजीकृत दस्तावेज और संबंधित पंजीकरण रिकॉर्ड लें; कथित प्रतिरूपण, जालसाजी, धोखाधड़ी, निष्पादन, कब्जा और जानकारी मिलने की तारीख का साक्ष्य सुरक्षित रखें। फिंगरप्रिंट/विशेषज्ञ रिपोर्ट हर मामले में स्वतः उपलब्ध या जरूरी नहीं।',
        'उचित पक्षकार, अदालत, परिसीमा, मूल्यांकन और राहत तय करने के लिए वकील से सलाह लें। शर्तें पूरी होने पर Specific Relief Act की धारा 31 लागू हो सकती है; दीवानी/आपराधिक आरोप अलग विश्लेषण मांग सकते हैं।',
        'आगे हस्तांतरण या नुकसान का ठोस जोखिम हो तो CPC Order XXXIX के तहत अंतरिम निषेधाज्ञा पर वकील से चर्चा करें। आवेदक को कानूनी कसौटी पूरी करनी होगी; राहत अदालत तय करेगी।',
        'वादपत्र, तामील, साक्ष्य और सुनवाई निर्देशों का पालन करें। निरस्तीकरण या अन्य राहत उचित है या नहीं अदालत तय करेगी; डिक्री के बाद लागू पंजीकरण प्रक्रिया अपनाएं। निरस्तीकरण या परिणाम की गारंटी नहीं।'
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
