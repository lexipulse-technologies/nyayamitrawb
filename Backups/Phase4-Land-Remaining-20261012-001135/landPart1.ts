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
      en: 'A qualifying transfer of land held by a Scheduled Tribe raiyat may be restricted under WBLR Chapter IIA. Permitted transfer modes, prior Revenue Officer permission, exceptions, restoration grounds and forum must be checked against the exact land and transaction.',
      bn: 'তপশিলি উপজাতির রায়তের জমির নির্দিষ্ট হস্তান্তর WBLR Chapter IIA-তে সীমাবদ্ধ হতে পারে। অনুমোদিত হস্তান্তর-পদ্ধতি, Revenue Officer-এর পূর্বানুমতি, ব্যতিক্রম, পুনরুদ্ধারের কারণ ও ফোরাম সংশ্লিষ্ট জমি ও লেনদেন অনুযায়ী যাচাই করতে হবে।',
      hi: 'अनुसूचित जनजाति रैयत की भूमि का पात्र अंतरण WBLR Chapter IIA के तहत प्रतिबंधित हो सकता है। अनुमत अंतरण तरीके, Revenue Officer की पूर्व अनुमति, अपवाद, बहाली के आधार और मंच को संबंधित भूमि/लेनदेन के अनुसार जांचना आवश्यक है।'
    },
    authority_forum: {
      en: 'Revenue Officer having jurisdiction under WBLR Chapter IIA; appeal/revision authority as specified by the Act and rules',
      bn: 'WBLR Chapter IIA অনুযায়ী এখতিয়ারসম্পন্ন Revenue Officer; আইন ও বিধিতে নির্দিষ্ট আপিল/রিভিশন কর্তৃপক্ষ',
      hi: 'WBLR Chapter IIA के तहत अधिकारिता वाला Revenue Officer; अधिनियम/नियमों में निर्दिष्ट अपील/पुनरीक्षण प्राधिकारी'
    },
    forum_type: 'Competent_Authority',
    is_complex: true,
    official_portal_url: 'https://banglarbhumi.gov.in/',
    statutory_timeframe: {
      en: 'No general 60-working-day restoration period is stated here. The statutory route and time sensitivity depend on the transfer type, permission, possession and applicable WBLR provision; obtain prompt advice.',
      bn: 'এখানে পুনরুদ্ধারের জন্য সাধারণ ৬০ কার্যদিবসের সময়সীমা বলা হচ্ছে না। হস্তান্তরের ধরন, অনুমতি, দখল ও প্রযোজ্য WBLR বিধানের উপর প্রক্রিয়া ও জরুরিতা নির্ভর করে; দ্রুত পরামর্শ নিন।',
      hi: 'यहां बहाली के लिए सामान्य 60 कार्यदिवस अवधि नहीं बताई जा रही। वैधानिक मार्ग और तात्कालिकता अंतरण प्रकार, अनुमति, कब्जे और लागू WBLR प्रावधान पर निर्भर है; शीघ्र सलाह लें।'
    },
    search_keywords: {
      en: ['st land transfer', 'tribal land wb', 'chapter iia wblr'],
      bn: ['আদিবাসী জমি', 'তপশিলি জমি হস্তান্তর', 'এসটি ল্যান্ড'],
      hi: ['आदिवासी भूमि', 'एसटी जमीन अंतरण', 'जनजाति जमीन बहाली']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Confirm the transferor’s ST status on the relevant date, the raiyati character/record of the land, the transferee, transaction instrument and any statutory permission. Section 14C lists permitted transfer modes; it is not by itself the restoration provision.',
        'Obtain certified records and the registered transfer document; identify the potentially applicable provision, including sections 14C, 14D and 14E, any exception, and the Revenue Officer with jurisdiction. Seek advice promptly because section 14E contains a possession-based limitation bar.',
        'File an application or information before the competent Revenue Officer with the evidence and requested statutory relief. Participate in the inquiry and hearing; the transferee must receive the process required by law.',
        'The officer determines validity, annulment/restoration and possession under the Act. Use the applicable appeal/revision route if aggrieved; restoration or police assistance is not guaranteed merely by filing.'
      ],
      bn: [
        'প্রাসঙ্গিক তারিখে হস্তান্তরকারীর ST মর্যাদা, জমির রায়তি চরিত্র/রেকর্ড, গ্রহীতা, দলিল এবং বিধিবদ্ধ অনুমতি যাচাই করুন। ধারা ১৪সি অনুমোদিত হস্তান্তর-পদ্ধতি বলে; এটি নিজে পুনরুদ্ধার-বিধান নয়।',
        'প্রত্যয়িত রেকর্ড ও রেজিস্ট্রি দলিল সংগ্রহ করে ধারা ১৪সি, ১৪ডি ও ১৪ই-সহ সম্ভাব্য বিধান, ব্যতিক্রম এবং এখতিয়ারসম্পন্ন Revenue Officer শনাক্ত করুন। ধারা ১৪ই-র দখলভিত্তিক বাধা থাকায় দ্রুত পরামর্শ নিন।',
        'প্রমাণ ও চাওয়া বিধিবদ্ধ প্রতিকারসহ উপযুক্ত Revenue Officer-এর কাছে আবেদন/তথ্য জমা দিন এবং তদন্ত/শুনানিতে অংশ নিন; আইন অনুযায়ী গ্রহীতাকে প্রক্রিয়ার সুযোগ দিতে হবে।',
        'আইনের অধীনে হস্তান্তরের বৈধতা, বাতিল/পুনরুদ্ধার ও দখল কর্তৃপক্ষ নির্ধারণ করবেন। অসন্তুষ্ট হলে প্রযোজ্য আপিল/রিভিশন নিন; আবেদন করলেই পুনরুদ্ধার বা পুলিশি সহায়তা নিশ্চিত নয়।'
      ],
      hi: [
        'संबंधित तारीख पर हस्तांतरणकर्ता की ST स्थिति, भूमि का रैयती स्वरूप/रिकॉर्ड, हस्तांतरणग्राही, दस्तावेज और वैधानिक अनुमति जांचें। धारा 14C अनुमत अंतरण तरीके बताती है; यह स्वयं बहाली प्रावधान नहीं है।',
        'प्रमाणित रिकॉर्ड और पंजीकृत दस्तावेज लें; धारा 14C, 14D और 14E सहित संभावित प्रावधान, अपवाद और सक्षम Revenue Officer पहचानें। धारा 14E की कब्जा-आधारित रोक के कारण शीघ्र सलाह लें।',
        'साक्ष्य और मांगी गई वैधानिक राहत सहित सक्षम Revenue Officer के समक्ष आवेदन/सूचना दें और जांच/सुनवाई में भाग लें; कानूनानुसार हस्तांतरणग्राही को प्रक्रिया का अवसर मिलेगा।',
        'अंतरण की वैधता, निरस्तीकरण/बहाली और कब्जा अधिकारी अधिनियम के तहत तय करेगा। असंतुष्ट होने पर लागू अपील/पुनरीक्षण मार्ग अपनाएं; आवेदन से बहाली या पुलिस सहायता की गारंटी नहीं।'
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
      en: 'A patta settlement or later transfer may be challenged under WBLR section 49(2) only on statutory grounds and after notice/hearing. The provision does not promise automatic cancellation, State re-vesting, or re-allotment to another family.',
      bn: 'WBLR ধারা ৪৯(২)-এ নির্দিষ্ট বিধিবদ্ধ কারণ এবং নোটিশ/শুনানির পরেই পাট্টা-সেটেলমেন্ট বা পরবর্তী হস্তান্তর চ্যালেঞ্জ করা যায়। এতে স্বয়ংক্রিয় বাতিল, সরকারি খাসে ফেরত বা অন্য পরিবারকে পুনর্বণ্টনের নিশ্চয়তা নেই।',
      hi: 'WBLR धारा 49(2) के सीमित वैधानिक आधारों और नोटिस/सुनवाई के बाद ही पट्टा निपटान या बाद का अंतरण चुनौती दी जा सकती है। स्वतः निरस्तीकरण, सरकारी भूमि में वापसी या दूसरे परिवार को पुनः आवंटन की गारंटी नहीं है।'
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
      en: 'No general 60-working-day disposal period is established by section 49(2). An appeal against a section 49(2) order generally must be filed within 30 days; promptly obtain the order and confirm the current appellate authority and rules.',
      bn: 'ধারা ৪৯(২)-এ সাধারণ ৬০ কার্যদিবসের নিষ্পত্তি-সময় নেই। এই ধারার আদেশের বিরুদ্ধে সাধারণত ৩০ দিনের মধ্যে আপিল করতে হয়; দ্রুত আদেশ নিয়ে বর্তমান আপিল কর্তৃপক্ষ ও বিধি যাচাই করুন।',
      hi: 'धारा 49(2) में सामान्य 60 कार्यदिवस निस्तारण अवधि नहीं है। इस धारा के आदेश के विरुद्ध सामान्यतः 30 दिनों में अपील करनी होती है; आदेश लेकर वर्तमान अपीलीय प्राधिकारी और नियम जांचें।'
    },
    search_keywords: {
      en: ['patta land', 'patta cancellation', 'section 49 wblr'],
      bn: ['পাট্টা জমি', 'পাট্টা বাতিল', 'ভূমিহীন পাট্টা'],
      hi: ['पट्टा जमीन', 'पट्टा निरस्तीकरण', 'सरकारी जमीन पट्टा']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain the patta/settlement order, settlement file, current record and any transfer document. Identify whether the settlement was made by mistake or obtained through fraud, misrepresentation or coercion, or whether a later transfer contravened section 49(1A). Ineligibility alone is not a free-standing section 49(2) ground.',
        'Submit a documented application/information to the competent Revenue Officer. Request the relied-on recommendation/material and an opportunity to respond; section 49(2) requires inquiry and hearing of the settlee and, where relevant, transferee and person in actual occupation.',
        'Present certified records, dates, possession and transfer evidence at the inquiry. The Revenue Officer must independently assess a statutory ground and issue a reasoned written order.',
        'If aggrieved by the section 49(2) order, obtain urgent advice about the section 49(4) appeal, generally within 30 days, and any further remedy. Re-settlement, re-vesting and eligibility for another patta are separate decisions and are not automatic.'
      ],
      bn: [
        'পাট্টা/সেটেলমেন্ট আদেশ, মূল ফাইল, বর্তমান রেকর্ড ও হস্তান্তর দলিল সংগ্রহ করুন। মূল সেটেলমেন্ট ভুলে বা প্রতারণা/ভুল উপস্থাপন/জবরদস্তিতে হয়েছে, নাকি পরবর্তী হস্তান্তর ধারা ৪৯(১এ) ভেঙেছে তা নির্ধারণ করুন। শুধু অযোগ্যতা ধারা ৪৯(২)-এর স্বতন্ত্র কারণ নয়।',
        'উপযুক্ত Revenue Officer-এর কাছে নথিসহ আবেদন/তথ্য দিন। নির্ভর করা সুপারিশ/উপকরণ চান এবং জবাবের সুযোগ চান; ধারা ৪৯(২)-এ সেটেলি এবং প্রাসঙ্গিক হলে গ্রহীতা ও বাস্তব দখলদারকে শুনতে হয়।',
        'তদন্তে প্রত্যয়িত নথি, তারিখ, দখল ও হস্তান্তরের প্রমাণ দিন। Revenue Officer-কে বিধিবদ্ধ কারণ স্বাধীনভাবে যাচাই করে যুক্তিসহ লিখিত আদেশ দিতে হবে।',
        'ধারা ৪৯(২)-এর আদেশে অসন্তুষ্ট হলে ধারা ৪৯(৪)-এর আপিল, সাধারণত ৩০ দিনের মধ্যে, এবং পরবর্তী প্রতিকার নিয়ে দ্রুত পরামর্শ নিন। পুনঃসেটেলমেন্ট, সরকারি খাসে ফেরত বা অন্য পাট্টার যোগ্যতা পৃথক সিদ্ধান্ত; স্বয়ংক্রিয় নয়।'
      ],
      hi: [
        'पट्टा/निपटान आदेश, मूल फाइल, वर्तमान रिकॉर्ड और अंतरण दस्तावेज लें। पहचानें कि मूल निपटान गलती/धोखाधड़ी/गलतबयानी/जबरदस्ती से हुआ या बाद का अंतरण धारा 49(1A) के विरुद्ध है। केवल अपात्रता धारा 49(2) का स्वतंत्र आधार नहीं।',
        'सक्षम Revenue Officer को दस्तावेज सहित आवेदन/सूचना दें। निर्भर सिफारिश/सामग्री और जवाब का अवसर मांगें; धारा 49(2) में पट्टाधारी तथा जहां उचित हो अंतरणग्राही और वास्तविक कब्जाधारी को सुनना है।',
        'जांच में प्रमाणित रिकॉर्ड, तारीख, कब्जा और अंतरण साक्ष्य दें। Revenue Officer को वैधानिक आधार स्वतंत्र रूप से जांचकर कारणयुक्त लिखित आदेश देना है।',
        'आदेश से असंतुष्ट हों तो धारा 49(4) की अपील, सामान्यतः 30 दिनों में, और आगे के उपाय पर तुरंत सलाह लें। पुनःनिपटान, सरकारी खाते में वापसी और दूसरे पट्टे की पात्रता अलग निर्णय हैं; स्वतः नहीं।'
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
    relevant_act: 'Secs 10, 16, 21–22, Specific Relief Act, 1963; Article 54, Limitation Act, 1963; CPC',
    summary: {
      en: 'A purchaser may seek specific performance of an enforceable agreement to sell, subject to contract terms, readiness and willingness, limitation, statutory bars and equitable relief. A court does not guarantee a conveyance decree.',
      bn: 'বিক্রয়-চুক্তি বলবৎযোগ্য হলে ক্রেতা নির্দিষ্ট বাস্তবায়ন চাইতে পারেন; চুক্তির শর্ত, সদা-প্রস্তুতি, তামাদি, বিধিবদ্ধ বাধা ও ন্যায়সঙ্গত প্রতিকার প্রযোজ্য। দলিল সম্পাদনের ডিক্রি নিশ্চিত নয়।',
      hi: 'प्रवर्तनीय विक्रय अनुबंध होने पर क्रेता विशिष्ट पालन मांग सकता है; अनुबंध शर्तें, तत्परता/इच्छा, परिसीमा, वैधानिक रोक और न्यायसंगत राहत लागू हैं। विलेख निष्पादन की डिक्री सुनिश्चित नहीं।'
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
      en: 'Limitation Act Article 54 generally allows 3 years from the date fixed for performance, or, if no date is fixed, from when the plaintiff has notice that performance is refused. Case duration is not predictable.',
      bn: 'Limitation Act Article 54 অনুযায়ী সাধারণত সম্পাদনের নির্দিষ্ট তারিখ থেকে ৩ বছর; তারিখ নির্দিষ্ট না থাকলে অস্বীকৃতির খবর পাওয়ার সময় থেকে। মামলার নিষ্পত্তির সময় অনুমানযোগ্য নয়।',
      hi: 'Limitation Act Article 54 के अनुसार सामान्यतः पालन की नियत तारीख से 3 वर्ष; तारीख न हो तो वादी को इंकार की सूचना मिलने से। मुकदमे की अवधि निश्चित नहीं।'
    },
    search_keywords: {
      en: ['baina chukti', 'agreement to sell', 'specific performance land'],
      bn: ['বায়না চুক্তি', 'বায়না মামলা', 'জমি রেজিস্ট্রি অস্বীকার'],
      hi: ['बयाना एग्रीमेंट', 'विशिष्ट अनुतोष वाद', 'जमीन रजिस्ट्री इंकार']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Collect the complete signed agreement, payment trail, title/search material, possession and correspondence. Record the contractual completion date, extensions, tender/payment attempts and any refusal; obtain urgent advice to calculate Article 54 limitation.',
        'Have counsel assess enforceability, correct court by property location/value, all necessary parties, limitation and applicable relief under the current Specific Relief Act.',
        'Plead and prove continuous readiness and willingness, including financial ability and compliance with essential terms. Do not assume a pre-suit notice or immediate deposit into court is a universal statutory prerequisite; follow the contract and court directions.',
        'The court decides specific performance and any alternative/refund, possession or compensation relief properly claimed. If a decree is granted but not obeyed, apply for execution under CPC; execution steps and document registration follow the decree and applicable procedure.'
      ],
      bn: [
        'স্বাক্ষরিত সম্পূর্ণ চুক্তি, পেমেন্টের প্রমাণ, মালিকানা-অনুসন্ধান, দখল ও যোগাযোগ সংগ্রহ করুন। সম্পাদনের তারিখ, মেয়াদ-বৃদ্ধি, টাকা দেওয়ার চেষ্টা ও অস্বীকৃতি লিখে রাখুন; Article 54-এর তামাদি দ্রুত আইনজীবীর সঙ্গে হিসাব করুন।',
        'বর্তমান Specific Relief Act অনুযায়ী চুক্তির বলবৎযোগ্যতা, সম্পত্তির অবস্থান/মূল্য অনুযায়ী আদালত, প্রয়োজনীয় পক্ষ, তামাদি ও প্রতিকার আইনজীবী দিয়ে যাচাই করুন।',
        'চুক্তির অপরিহার্য শর্ত পূরণ এবং সর্বদা প্রস্তুতি/ইচ্ছা—আর্থিক সামর্থ্যসহ—প্রমাণ করুন। মামলা-পূর্ব নোটিশ বা অবিলম্বে আদালতে টাকা জমা সব ক্ষেত্রে বাধ্যতামূলক ধরে নেবেন না; চুক্তি ও আদালতের নির্দেশ মানুন।',
        'নির্দিষ্ট বাস্তবায়ন এবং যথাযথভাবে চাওয়া বিকল্প ফেরত/দখল/ক্ষতিপূরণ আদালত নির্ধারণ করবে। ডিক্রি হলে কিন্তু পালন না করলে CPC অনুযায়ী execution চান; দলিল-নিবন্ধন ডিক্রি ও প্রযোজ্য প্রক্রিয়া অনুযায়ী হয়।'
      ],
      hi: [
        'पूरा हस्ताक्षरित अनुबंध, भुगतान रिकॉर्ड, स्वामित्व-जांच, कब्जा और पत्राचार लें। पालन की नियत तारीख, विस्तार, भुगतान प्रयास और इंकार लिखें; Article 54 परिसीमा की तत्काल गणना कराएं।',
        'वर्तमान Specific Relief Act के तहत प्रवर्तनीयता, संपत्ति स्थान/मूल्य के अनुसार सक्षम अदालत, आवश्यक पक्ष, परिसीमा और राहत पर वकील से सलाह लें।',
        'अनुबंध की आवश्यक शर्तों और निरंतर तत्परता/इच्छा, वित्तीय क्षमता सहित, का प्रमाण तैयार करें। मुकदमा-पूर्व नोटिस या तुरंत अदालत में शेष रकम जमा करना हर मामले की अनिवार्य पूर्वशर्त न मानें; अनुबंध/अदालत निर्देश मानें।',
        'विशिष्ट पालन तथा उचित रूप से मांगी गई वैकल्पिक वापसी/कब्जा/क्षतिपूर्ति अदालत तय करेगी। डिक्री के पालन न होने पर CPC execution लें; दस्तावेज निष्पादन/पंजीकरण डिक्री और लागू प्रक्रिया से होगा।'
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
    relevant_act: 'Secs 64–74 and 77–80, RFCTLARR Act, 2013 (subject to section 105/State amendment and project-specific acquisition law)',
    summary: {
      en: 'A person interested who has not accepted the award may seek a section 64 reference on a statutory ground. Confirm which acquisition law applies, whether a reference was already made, and the correct authority and limitation trigger.',
      bn: 'পুরস্কার গ্রহণ করেননি এমন স্বার্থসংশ্লিষ্ট ব্যক্তি বিধিবদ্ধ কারণে ধারা ৬৪-র রেফারেন্স চাইতে পারেন। কোন অধিগ্রহণ আইন প্রযোজ্য, আগে রেফারেন্স হয়েছে কি না এবং সঠিক কর্তৃপক্ষ/তামাদির সূচনাবিন্দু যাচাই করুন।',
      hi: 'अवार्ड स्वीकार न करने वाला हितबद्ध व्यक्ति वैधानिक आधार पर धारा 64 संदर्भ मांग सकता है। लागू अधिग्रहण कानून, पहले संदर्भ हुआ है या नहीं, सक्षम प्राधिकारी और परिसीमा प्रारंभ की पुष्टि करें।'
    },
    authority_forum: {
      en: 'Land Acquisition, Rehabilitation and Resettlement Authority constituted for the area; application is presented to the Collector under section 64',
      bn: 'এলাকার জন্য গঠিত Land Acquisition, Rehabilitation and Resettlement Authority; ধারা ৬৪ অনুযায়ী Collector-এর কাছে আবেদন',
      hi: 'क्षेत्र के लिए गठित Land Acquisition, Rehabilitation and Resettlement Authority; धारा 64 के तहत Collector को आवेदन'
    },
    forum_type: 'Civil_Court',
    is_complex: true,
    official_portal_url: 'https://districts.ecourts.gov.in/',
    statutory_timeframe: {
      en: 'Section 64 generally provides 6 weeks from the Collector’s award if the person was present/represented at making it, otherwise 6 weeks from section 37 notice or 6 months from the award, whichever first expires; sufficient-cause extension may be available. Verify applicable amendments and notice service urgently. Case duration is not guaranteed.',
      bn: 'ধারা ৬৪ অনুযায়ী সাধারণত অ্যাওয়ার্ডের সময় উপস্থিত/প্রতিনিধিত্ব থাকলে Collector-এর অ্যাওয়ার্ড থেকে ৬ সপ্তাহ; অন্যথায় ধারা ৩৭ নোটিশ থেকে ৬ সপ্তাহ বা অ্যাওয়ার্ড থেকে ৬ মাস—যেটি আগে শেষ হয়। যথেষ্ট কারণ থাকলে বিলম্ব মকুব হতে পারে। প্রযোজ্য সংশোধন ও নোটিশ-জারি দ্রুত যাচাই করুন। মামলার সময় নিশ্চিত নয়।',
      hi: 'धारा 64 में सामान्यतः अवार्ड बनते समय उपस्थित/प्रतिनिधित्व होने पर Collector के अवार्ड से 6 सप्ताह; अन्यथा धारा 37 नोटिस से 6 सप्ताह या अवार्ड से 6 माह, जो पहले समाप्त हो। पर्याप्त कारण पर विलंब माफी संभव है। लागू संशोधन और नोटिस तामील तुरंत जांचें। मुकदमे की अवधि निश्चित नहीं।'
    },
    search_keywords: {
      en: ['land acquisition compensation', 'rfctlarr 2013', 'enhancement claim'],
      bn: ['জমি অধিগ্রহণ ক্ষতিপূরণ', 'অধিগ্রহণ মামলা', 'বাজার দর বৃদ্ধি'],
      hi: ['भूमि अधिग्रहण मुआवजा', 'मुआवजा वृद्धि', 'लार प्राधिकरण']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain the complete award, section 37 notice/service proof, measurement and valuation material, and payment/receipt records. Confirm the acquisition statute (RFCTLARR 2013, a saved 1894 proceeding, or a special Act) and whether compensation has been accepted; acceptance without protest can affect the reference right.',
        'If eligible, submit a written section 64 application to the Collector specifying each objection (measurement, amount, payee or apportionment) within the applicable trigger-based period. Request the section 64 sufficient-cause extension where legally available if late; do not rely on extension being granted.',
        'Provide supporting sale instances/valuation evidence, land classification/use, area, severance or damage and relevant statutory factors. The Collector transmits the reference and statement as required; the Authority conducts the statutory inquiry.',
        'The Authority determines compensation under the applicable Act and evidence. Solatium, additional amount and interest are governed by statutory provisions and dates; 100% solatium/12% interest or any enhancement is not a guaranteed outcome. Appeal routes and deadlines require separate urgent review.'
      ],
      bn: [
        'সম্পূর্ণ অ্যাওয়ার্ড, ধারা ৩৭ নোটিশ/জারির প্রমাণ, মাপ-জোক ও মূল্যায়নের নথি এবং পেমেন্ট/রসিদ নিন। কোন অধিগ্রহণ আইন প্রযোজ্য এবং ক্ষতিপূরণ গ্রহণ হয়েছে কি না যাচাই করুন; আপত্তি ছাড়া গ্রহণ রেফারেন্সের অধিকারকে প্রভাবিত করতে পারে।',
        'যোগ্য হলে প্রযোজ্য সূচনাবিন্দু থেকে সময়ের মধ্যে Collector-এর কাছে লিখিত ধারা ৬৪ আবেদন দিন এবং মাপ, অঙ্ক, প্রাপ্য ব্যক্তি বা বণ্টন বিষয়ে প্রতিটি আপত্তি বলুন। দেরি হলে আইনত সম্ভব হলে যথেষ্ট কারণ দেখিয়ে সময় বাড়ানোর আবেদন করুন; মঞ্জুরি নিশ্চিত নয়।',
        'বিক্রয়-তুলনা/মূল্যায়ন, জমির শ্রেণি/ব্যবহার, বিচ্ছেদজনিত ক্ষতি বা প্রাসঙ্গিক বিধিবদ্ধ বিষয়ের প্রমাণ দিন। Collector প্রয়োজনমতো রেফারেন্স/বিবৃতি পাঠাবেন; Authority বিধিবদ্ধ তদন্ত করবে।',
        'প্রযোজ্য আইন ও প্রমাণ অনুযায়ী Authority ক্ষতিপূরণ নির্ধারণ করবে। Solatium, অতিরিক্ত অঙ্ক ও সুদ আইন ও তারিখনির্ভর; ১০০% solatium/১২% সুদ বা বৃদ্ধি নিশ্চিত নয়। আপিলের পথ ও সময় আলাদাভাবে দ্রুত যাচাই করুন।'
      ],
      hi: [
        'पूरा अवार्ड, धारा 37 नोटिस/तामील प्रमाण, माप व मूल्यांकन सामग्री और भुगतान रिकॉर्ड लें। लागू अधिग्रहण कानून और मुआवजा स्वीकार हुआ है या नहीं जांचें; बिना आपत्ति स्वीकृति संदर्भ अधिकार को प्रभावित कर सकती है।',
        'पात्र हों तो लागू प्रारंभ तिथि से अवधि में Collector को लिखित धारा 64 आवेदन दें और माप, राशि, भुगतान पाने वाले या बंटवारे पर हर आपत्ति बताएं। देर हो तो जहां कानून अनुमति देता है पर्याप्त कारण सहित विलंब माफी मांगें; मंजूरी सुनिश्चित नहीं।',
        'बिक्री तुलनाएं/मूल्यांकन, भूमि वर्ग/उपयोग, विभाजन से नुकसान और लागू वैधानिक कारकों के प्रमाण दें। Collector आवश्यक बयान/संदर्भ भेजेगा; Authority वैधानिक जांच करेगी।',
        'Authority लागू अधिनियम और साक्ष्य के अनुसार मुआवजा तय करेगी। Solatium, अतिरिक्त रकम व ब्याज वैधानिक प्रावधान और तारीखों पर निर्भर हैं; 100% solatium/12% ब्याज या वृद्धि की गारंटी नहीं। अपील मार्ग और अवधि अलग से तुरंत जांचें।'
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
      en: 'A flat purchase may require updating underlying revenue records in districts and KMC’s municipal assessment register in Kolkata. These records have different legal functions and do not independently create or conclusively determine title to the flat/undivided share.',
      bn: 'ফ্ল্যাট কেনার পরে জেলায় অন্তর্নিহিত রাজস্ব-রেকর্ড এবং কলকাতায় KMC-র পৌর মূল্যায়ন রেজিস্টার হালনাগাদ লাগতে পারে। এদের আইনি কাজ আলাদা; এগুলি একা ফ্ল্যাট/অবিভক্ত অংশের স্বত্ব সৃষ্টি বা চূড়ান্ত নির্ধারণ করে না।',
      hi: 'फ्लैट खरीद के बाद जिलों में मूल राजस्व रिकॉर्ड और कोलकाता में KMC नगरपालिका मूल्यांकन रजिस्टर अपडेट करना पड़ सकता है। दोनों का कानूनी कार्य अलग है और ये अपने आप फ्लैट/अविभाजित हिस्से का स्वामित्व नहीं बनाते या अंतिम रूप से तय नहीं करते।'
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
      en: 'District revenue-record processing varies by service and local authority; Kolkata KMC publishes category-specific service timings for simple mutation and more complex apportionment/separation. Confirm the current local service standard.',
      bn: 'জেলা রাজস্ব-রেকর্ড প্রক্রিয়ার সময় পরিষেবা ও স্থানীয় কর্তৃপক্ষ অনুযায়ী বদলে যায়; কলকাতায় সাধারণ মিউটেশন ও জটিল অংশ-বণ্টন/পৃথকীকরণের জন্য KMC আলাদা পরিষেবা-সময় প্রকাশ করে। বর্তমান স্থানীয় পরিষেবা-মান যাচাই করুন।',
      hi: 'जिला राजस्व रिकॉर्ड प्रक्रिया समय सेवा और स्थानीय प्राधिकरण के अनुसार बदलता है; कोलकाता में KMC साधारण म्यूटेशन और जटिल विभाजन/पृथक्करण के अलग सेवा समय प्रकाशित करता है। वर्तमान स्थानीय सेवा मानक जांचें।'
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
            'Identify the competent revenue authority for the district, land record in which the underlying plot is recorded, and current mutation service. Confirm whether that authority accepts a flat-linked share application; do not assume a statewide online “UDS mode”.',
            'Prepare the registered flat conveyance, the deed/schedule stating the undivided land share, society/association or sanctioned plan records if requested, current land revenue record and property identifiers.',
            'Apply through the confirmed revenue-office channel, pay only the current assessed demand, and respond to notices or objections. A separate revenue entry may not be available or appropriate in every apartment scheme.',
            'Check the resulting revenue entry and any stated review/appeal route. Revenue mutation is a record update, not a separate title certificate or a substitute for the registered conveyance.'
          ],
          bn: [
            'জেলার উপযুক্ত রাজস্ব কর্তৃপক্ষ, অন্তর্নিহিত প্লটের রেকর্ড এবং বর্তমান মিউটেশন-সেবা নির্ধারণ করুন। ফ্ল্যাট-সংযুক্ত অংশের আবেদন তারা গ্রহণ করেন কি না যাচাই করুন; সর্বত্র অনলাইন “UDS mode” ধরে নেবেন না।',
            'রেজিস্ট্রি ফ্ল্যাট দলিল, অবিভক্ত জমির অংশের তফসিল, চাওয়া হলে সমিতি/অনুমোদিত নকশার নথি, বর্তমান ভূমি-রাজস্ব রেকর্ড ও সম্পত্তির পরিচিতি প্রস্তুত করুন।',
            'নিশ্চিত রাজস্ব-দপ্তর প্রক্রিয়ায় আবেদন করে কেবল বর্তমান নির্ধারিত চাহিদা দিন এবং নোটিশ/আপত্তিতে সাড়া দিন। প্রতিটি অ্যাপার্টমেন্ট প্রকল্পে পৃথক রাজস্ব এন্ট্রি প্রযোজ্য বা সম্ভব নাও হতে পারে।',
            'ফলিত রাজস্ব এন্ট্রি ও পর্যালোচনা/আপিলের পথ যাচাই করুন। রাজস্ব মিউটেশন রেকর্ড আপডেট; এটি পৃথক স্বত্ব-সনদ বা রেজিস্ট্রি দলিলের বিকল্প নয়।'
          ],
          hi: [
            'जिले के सक्षम राजस्व प्राधिकरण, अंतर्निहित प्लॉट रिकॉर्ड और वर्तमान म्यूटेशन सेवा की पहचान करें। पुष्टि करें कि वह फ्लैट-संबद्ध हिस्से का आवेदन स्वीकार करता है; राज्यव्यापी ऑनलाइन “UDS mode” न मानें।',
            'पंजीकृत फ्लैट विलेख, अविभाजित भूमि हिस्से की अनुसूची, मांगे जाने पर सोसाइटी/स्वीकृत योजना रिकॉर्ड, वर्तमान भूमि राजस्व रिकॉर्ड और संपत्ति विवरण तैयार करें।',
            'पुष्ट राजस्व कार्यालय प्रक्रिया से आवेदन दें, केवल वर्तमान निर्धारित मांग अदा करें और नोटिस/आपत्ति का जवाब दें। हर अपार्टमेंट योजना में अलग राजस्व प्रविष्टि उपलब्ध या उपयुक्त नहीं होती।',
            'परिणामी राजस्व प्रविष्टि और समीक्षा/अपील मार्ग जांचें। राजस्व म्यूटेशन रिकॉर्ड अपडेट है, अलग स्वामित्व प्रमाणपत्र या पंजीकृत conveyance का विकल्प नहीं।'
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
            'For premises within KMC, use current Form A-42 for entry of names under section 183 and the applicable separation/apportionment process. KMC’s published FAQ says a purchaser should contact KMC within 90 days of receiving the purchase deed; confirm current requirements and the event date.',
            'Obtain the Letter of Intimation from the relevant Assessment-Collection Unit, have it verified as instructed, clear any assessed municipal arrears, and obtain the No Outstanding Certificate required for mutation. Attach the registered deed and transaction-specific documents listed in Form A-42.',
            'Pay the published Rs 100 processing fee for mutation/separation/apportionment where applicable; amalgamation and other charges differ. Submit the complete Form A-42 file and retain the receipt; KMC’s current demand/rules control.',
            'Respond to KMC inspection or valuation queries and check the Assessment Register/Assessee details and notice issued. An Assessee entry is a municipal tax record, not a conveyance or final adjudication of title.'
          ],
          bn: [
            'KMC-র অধীন প্রাঙ্গণে ধারা ১৮৩ অনুযায়ী নাম নথিভুক্তি এবং প্রযোজ্য পৃথকীকরণ/অংশ-বণ্টনের বর্তমান Form A-42 নিন। KMC-র প্রকাশিত FAQ অনুযায়ী ক্রয়দলিল পাওয়ার ৯০ দিনের মধ্যে যোগাযোগ করতে হয়; বর্তমান শর্ত ও তারিখ যাচাই করুন।',
            'সংশ্লিষ্ট Assessment-Collection Unit থেকে Letter of Intimation নিন, নির্দেশ অনুযায়ী যাচাই করান, নির্ধারিত পৌরকর বকেয়া থাকলে মিটিয়ে মিউটেশনের জন্য প্রয়োজনীয় No Outstanding Certificate নিন। Form A-42-এ চাওয়া রেজিস্ট্রি দলিল ও লেনদেন-নির্দিষ্ট নথি দিন।',
            'প্রযোজ্য হলে মিউটেশন/পৃথকীকরণ/অংশ-বণ্টনের প্রকাশিত ১০০ টাকা প্রক্রিয়াকরণ ফি দিন; একত্রীকরণ ও অন্য চার্জ আলাদা। সম্পূর্ণ Form A-42 জমা দিয়ে রসিদ রাখুন; বর্তমান KMC চাহিদা/বিধি প্রাধান্য পাবে।',
            'KMC পরিদর্শন বা মূল্যায়ন-জিজ্ঞাসায় সাড়া দিয়ে Assessment Register/Assessee তথ্য ও নোটিশ যাচাই করুন। Assessee এন্ট্রি পৌরকর রেকর্ড, বিক্রয় দলিল বা স্বত্বের চূড়ান্ত বিচার নয়।'
          ],
          hi: [
            'KMC क्षेत्र के परिसर के लिए धारा 183 के तहत नाम दर्ज करने और लागू पृथक्करण/विभाजन हेतु वर्तमान Form A-42 लें। KMC FAQ के अनुसार खरीदार को खरीद विलेख मिलने के 90 दिनों में संपर्क करना चाहिए; वर्तमान शर्त और तारीख जांचें।',
            'संबंधित Assessment-Collection Unit से Letter of Intimation लें, निर्देशानुसार सत्यापित कराएं, निर्धारित नगरपालिका बकाया चुकाकर म्यूटेशन हेतु आवश्यक No Outstanding Certificate लें। Form A-42 में मांगे पंजीकृत विलेख और लेनदेन-विशिष्ट कागजात संलग्न करें।',
            'जहां लागू हो म्यूटेशन/पृथक्करण/विभाजन का प्रकाशित 100 रुपये प्रक्रिया शुल्क दें; समामेलन और अन्य शुल्क अलग हैं। पूरा Form A-42 जमा कर रसीद रखें; वर्तमान KMC मांग/नियम प्रभावी हैं।',
            'KMC निरीक्षण या मूल्यांकन प्रश्नों का जवाब दें और Assessment Register/Assessee विवरण तथा जारी नोटिस जांचें। Assessee प्रविष्टि नगरपालिका कर रिकॉर्ड है, conveyance या स्वामित्व का अंतिम न्यायनिर्णय नहीं।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Identify whether the property is in a district revenue jurisdiction or within KMC; select the corresponding record-update process.',
        'Prepare the registered flat conveyance, the stated undivided share, property/plot identifiers, current tax/revenue records and any authority-specific supporting document.',
        'For district revenue mutation, confirm the competent office’s current process and fee. For KMC, obtain the Letter of Intimation/No Outstanding Certificate and submit Form A-42 with the applicable processing fee.',
        'Verify the resulting revenue entry or municipal Assessee record and any review/appeal route. Neither record is a separate title decree or substitute for the registered conveyance.'
      ],
      bn: [
        'সম্পত্তি জেলা-রাজস্ব এখতিয়ারে নাকি KMC-র মধ্যে তা নির্ধারণ করে সংশ্লিষ্ট রেকর্ড-আপডেট প্রক্রিয়া বেছে নিন।',
        'রেজিস্ট্রি ফ্ল্যাট দলিল, উল্লিখিত অবিভক্ত অংশ, সম্পত্তি/প্লটের পরিচিতি, বর্তমান কর/রাজস্ব রেকর্ড ও কর্তৃপক্ষ-নির্দিষ্ট নথি প্রস্তুত করুন।',
        'জেলা রাজস্ব মিউটেশনে উপযুক্ত দপ্তরের বর্তমান প্রক্রিয়া/ফি যাচাই করুন। KMC-তে Letter of Intimation/No Outstanding Certificate নিয়ে প্রযোজ্য ফিসহ Form A-42 দিন।',
        'ফলিত রাজস্ব এন্ট্রি বা পৌর Assessee রেকর্ড এবং পর্যালোচনা/আপিল পথ যাচাই করুন। কোনোটিই পৃথক স্বত্ব-ডিক্রি বা রেজিস্ট্রি দলিলের বিকল্প নয়।'
      ],
      hi: [
        'पहचानें कि संपत्ति जिला राजस्व क्षेत्र में है या KMC में; उसी के अनुसार रिकॉर्ड अपडेट प्रक्रिया चुनें।',
        'पंजीकृत फ्लैट conveyance, दर्ज अविभाजित हिस्सा, संपत्ति/प्लॉट पहचान, वर्तमान कर/राजस्व रिकॉर्ड और प्राधिकरण-विशिष्ट दस्तावेज तैयार करें।',
        'जिला राजस्व म्यूटेशन हेतु सक्षम कार्यालय की वर्तमान प्रक्रिया/फीस जांचें। KMC के लिए Letter of Intimation/No Outstanding Certificate लेकर लागू शुल्क सहित Form A-42 दें।',
        'परिणामी राजस्व प्रविष्टि या नगरपालिका Assessee रिकॉर्ड और समीक्षा/अपील मार्ग जांचें। इनमें से कोई अलग स्वामित्व डिक्री या पंजीकृत conveyance का विकल्प नहीं।'
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
    relevant_act: 'Secs 27 and Article 65, Limitation Act, 1963; Ravinder Kaur Grewal v. Manjit Kaur, 2019 INSC 930; Specific Relief Act as applicable',
    summary: {
      en: 'A highly fact-specific claim that title to private immovable property has been perfected by adverse possession. Mere long occupation, utility bills or tax receipts do not establish hostile, exclusive possession or title.',
      bn: 'ব্যক্তিগত স্থাবর সম্পত্তিতে প্রতিকূল দখলে স্বত্ব অর্জনের অত্যন্ত তথ্যনির্ভর দাবি। দীর্ঘ বসবাস, বিদ্যুৎ বিল বা করের রসিদ একা বৈরী ও একচ্ছত্র দখল বা স্বত্ব প্রমাণ করে না।',
      hi: 'निजी अचल संपत्ति पर प्रतिकूल कब्जे से स्वत्व सिद्ध करने का अत्यंत तथ्य-विशिष्ट दावा। केवल लंबे कब्जे, बिजली बिल या कर रसीद से प्रतिकूल, विशिष्ट कब्जा या स्वत्व सिद्ध नहीं होता।'
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
      en: 'For a private-owner claim, Article 65 generally uses 12 years from when the defendant’s possession becomes adverse; claims against Government and special property regimes may have different periods. No trial-duration estimate is given.',
      bn: 'ব্যক্তিগত মালিকের বিরুদ্ধে Article 65-এ সাধারণত বিবাদীর দখল বৈরী হওয়ার সময় থেকে ১২ বছর ধরা হয়; সরকারের বিরুদ্ধে দাবি ও বিশেষ সম্পত্তি-ব্যবস্থায় সময় আলাদা হতে পারে। মামলার সময় অনুমান করা হচ্ছে না।',
      hi: 'निजी मालिक के विरुद्ध Article 65 में सामान्यतः प्रतिवादी का कब्जा प्रतिकूल होने से 12 वर्ष हैं; सरकार के विरुद्ध दावे और विशेष संपत्ति व्यवस्था में अवधि अलग हो सकती है। मुकदमे की अवधि का अनुमान नहीं।'
    },
    search_keywords: {
      en: ['adverse possession', 'limitation act 27', 'prescription title'],
      bn: ['প্রতিকূল দখল', 'অ্যাডভার্স পজিশন', '১২ বছর দখল'],
      hi: ['प्रतिकूल कब्जा', 'एडवर्स पजेशन', '12 साल कब्जा']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain the root title and full possession chronology. With counsel, identify the true owner, the precise date and manner possession allegedly became hostile, whether possession was open, continuous, exclusive and to the owner’s knowledge, and whether the property is private, co-owned, government or specially protected land.',
        'Collect evidence beyond occupation bills: boundary/possession records, contemporaneous objections, communications asserting hostile ownership, witnesses, maps and prior proceedings. A co-owner must meet the demanding ouster/repudiation test; permissive or family possession is not automatically adverse.',
        'Obtain urgent advice on limitation and the correct claim/defence. Ravinder Kaur Grewal recognises a suit by a person who has already perfected title, but does not make a 12-year occupation automatically sufficient. State or public land requires separate period and eligibility analysis.',
        'A civil court decides title, possession and any properly pleaded injunction/possession relief. A commissioner is discretionary and may assist with a local investigation but cannot prove title by itself; no declaration or recovery is guaranteed.'
      ],
      bn: [
        'মূল স্বত্ব ও দখলের সম্পূর্ণ সময়রেখা সংগ্রহ করুন। আইনজীবীর সঙ্গে প্রকৃত মালিক, দখল কখন/কীভাবে বৈরী হয়েছে, দখল প্রকাশ্য/নিরবচ্ছিন্ন/একচ্ছত্র ছিল কি না এবং মালিক জানতেন কি না নির্ধারণ করুন; জমি ব্যক্তিগত, সহ-মালিকানাধীন, সরকারি নাকি বিশেষ সুরক্ষিত তাও যাচাই করুন।',
        'শুধু বিল নয়—সীমানা/দখলের নথি, সমসাময়িক আপত্তি, বৈরী স্বত্ব দাবির যোগাযোগ, সাক্ষী, নকশা ও আগের মামলার প্রমাণ সংগ্রহ করুন। সহ-মালিকের ক্ষেত্রে ouster/স্বত্ব অস্বীকার কঠোরভাবে প্রমাণ করতে হয়; অনুমতিমূলক/পারিবারিক দখল নিজে থেকে বৈরী নয়।',
        'তামাদি ও সঠিক দাবি/প্রতিরক্ষার বিষয়ে দ্রুত পরামর্শ নিন। Ravinder Kaur Grewal ইতিমধ্যে স্বত্ব অর্জনকারীর মামলা স্বীকার করে; শুধু ১২ বছর দখল যথেষ্ট বলে না। সরকারি/জনসাধারণের জমিতে সময় ও যোগ্যতা আলাদাভাবে যাচাই করতে হবে।',
        'দেওয়ানি আদালত স্বত্ব, দখল ও সঠিকভাবে চাওয়া নিষেধাজ্ঞা/দখল-প্রতিকার নির্ধারণ করে। কমিশনার বিবেচনাধীন এবং স্থানীয় তদন্তে সহায়ক; তিনি নিজে স্বত্ব প্রমাণ করেন না। ডিক্রি বা দখল পুনরুদ্ধার নিশ্চিত নয়।'
      ],
      hi: [
        'मूल स्वामित्व और कब्जे की पूरी समयरेखा जुटाएं। वकील से वास्तविक मालिक, कब्जा कब/कैसे प्रतिकूल हुआ, वह खुला, निरंतर, विशिष्ट और मालिक की जानकारी में था या नहीं, तथा भूमि निजी, सह-स्वामित्व, सरकारी या विशेष संरक्षित है या नहीं, तय कराएं।',
        'बिल से आगे के साक्ष्य लें: सीमा/कब्जा रिकॉर्ड, समकालीन आपत्तियां, विरोधी स्वामित्व जताने वाला पत्राचार, गवाह, नक्शे और पूर्व मामले। सह-मालिक के विरुद्ध ouster/हक अस्वीकार करना कठोरता से सिद्ध करना पड़ता है; अनुमत/पारिवारिक कब्जा अपने आप प्रतिकूल नहीं।',
        'परिसीमा और सही दावा/बचाव पर तत्काल सलाह लें। Ravinder Kaur Grewal पहले से पूर्ण प्रतिकूल स्वत्वधारी को वाद की अनुमति देता है; केवल 12 वर्ष का कब्जा पर्याप्त नहीं। सरकारी/सार्वजनिक भूमि के लिए अलग अवधि और पात्रता जांचें।',
        'दीवानी अदालत स्वत्व, कब्जा और उचित रूप से मांगी निषेधाज्ञा/कब्जा राहत तय करती है। आयुक्त विवेकाधीन स्थानीय जांच कर सकता है, पर स्वयं स्वत्व सिद्ध नहीं करता; डिक्री/कब्जा वापसी की गारंटी नहीं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-16-1',
        name: { en: 'Case-specific possession and hostility evidence (e.g. records, correspondence, witnesses)', bn: 'মামলাভিত্তিক দখল ও বৈরী দখলের প্রমাণ (রেকর্ড/যোগাযোগ/সাক্ষী)', hi: 'मामले अनुसार कब्जा और प्रतिकूलता का साक्ष्य (रिकॉर्ड/पत्राचार/गवाह)' },
        issuing_authority: { en: 'Relevant record holders / parties / witnesses', bn: 'প্রাসঙ্গিক রেকর্ডধারী / পক্ষ / সাক্ষী', hi: 'संबंधित रिकॉर्ड धारक / पक्ष / गवाह' },
        is_mandatory: false
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
    relevant_act: 'Applicable vesting/eviction enactment for the parcel; Jagpal Singh v. State of Punjab, (2011) 11 SCC 396 (common-land principle; facts/statute differ)',
    summary: {
      en: 'For land recorded as a village/public common in rural districts, report suspected encroachment to the authority responsible for that parcel. Confirm its record, vesting and applicable West Bengal eviction procedure. Jagpal Singh protects genuine commons but does not create a local form or automatic eviction order.',
      bn: 'গ্রামীণ জেলায় গ্রাম/জনসাধারণের কমন জমি হিসেবে নথিভুক্ত জমিতে দখলের অভিযোগ সংশ্লিষ্ট দায়িত্বপ্রাপ্ত কর্তৃপক্ষকে জানান। রেকর্ড, ন্যস্ততা ও প্রযোজ্য পশ্চিমবঙ্গ উচ্ছেদ-পদ্ধতি যাচাই করুন। Jagpal Singh প্রকৃত কমন জমির সুরক্ষা সমর্থন করে, কিন্তু স্থানীয় ফর্ম বা স্বয়ংক্রিয় উচ্ছেদ-আদেশ তৈরি করে না।',
      hi: 'ग्रामीण जिले में ग्राम/सार्वजनिक कॉमन भूमि के रूप में दर्ज भूखंड पर कब्जे की सूचना जिम्मेदार प्राधिकरण को दें। रिकॉर्ड, vesting और लागू पश्चिम बंगाल बेदखली प्रक्रिया जांचें। Jagpal Singh वास्तविक कॉमन भूमि की रक्षा करता है, पर स्थानीय फॉर्म या स्वतः बेदखली आदेश नहीं बनाता।'
    },
    authority_forum: {
      en: 'Gram Panchayat/land-owning public authority and competent Revenue Officer/Collector under the applicable West Bengal procedure',
      bn: 'গ্রাম পঞ্চায়েত/জমির মালিক সরকারি কর্তৃপক্ষ এবং প্রযোজ্য পশ্চিমবঙ্গ প্রক্রিয়ার উপযুক্ত Revenue Officer/Collector',
      hi: 'ग्राम पंचायत/भूमि-स्वामी सार्वजनिक प्राधिकरण और लागू पश्चिम बंगाल प्रक्रिया के सक्षम Revenue Officer/Collector'
    },
    forum_type: 'BL_LRO',
    is_complex: false,
    official_portal_url: 'https://banglarbhumi.gov.in/',
    statutory_timeframe: {
      en: 'No fixed 30–60 working-day removal period is established. Procedure depends on land classification, vesting and applicable statute; the occupier must receive the legally required show-cause notice and hearing.',
      bn: '৩০–৬০ কার্যদিবসে উচ্ছেদের কোনো নির্দিষ্ট সময় নেই। জমির শ্রেণি, ন্যস্ততা ও প্রযোজ্য আইনের উপর প্রক্রিয়া নির্ভর করে; দখলদারকে আইন অনুযায়ী শোকজ ও শুনানির সুযোগ দিতে হয়।',
      hi: '30–60 कार्यदिवस में बेदखली की कोई निश्चित अवधि नहीं है। प्रक्रिया भूमि वर्गीकरण, vesting और लागू कानून पर निर्भर है; कब्जाधारी को आवश्यक show-cause नोटिस और सुनवाई देना जरूरी है।'
    },
    search_keywords: {
      en: ['gochar land', 'village common land', 'jagpal singh sc'],
      bn: ['গোচর জমি', 'পঞ্চায়েত জমি দখল', 'সাধারণ খাস জমি'],
      hi: ['चारागाह जमीन', 'ग्राम सभा जमीन', 'सरकारी जमीन कब्जा']
    },
    territory_track: 'Dual_Path',
    dual_path: {
      rural_district: {
        authority: {
          en: 'Gram Panchayat/vested public authority and competent Revenue Officer or Collector',
          bn: 'গ্রাম পঞ্চায়েত/ন্যস্ত সরকারি কর্তৃপক্ষ এবং উপযুক্ত Revenue Officer বা Collector',
          hi: 'ग्राम पंचायत/निहित सार्वजनिक प्राधिकरण और सक्षम Revenue Officer या Collector'
        },
        portal_name: { en: 'Banglarbhumi land-record verification', bn: 'বাংলারভূমি ভূমি-রেকর্ড যাচাই', hi: 'Banglarbhumi भूमि रिकॉर्ड जांच' },
        portal_url: 'https://banglarbhumi.gov.in/',
        timeline_info: [
          {
            id: 'time-land-17-rural-process',
            kind: 'service_standard',
            label: { en: 'Rural authority process time', bn: 'গ্রামীণ কর্তৃপক্ষের প্রক্রিয়ার সময়', hi: 'ग्रामीण प्राधिकरण प्रक्रिया समय' },
            value_description: {
              en: 'No fixed removal period is stated. Timing depends on land classification, vesting, notice and hearing under the applicable State procedure.',
              bn: 'উচ্ছেদের নির্দিষ্ট সময় বলা হচ্ছে না। জমির শ্রেণি, ন্যস্ততা, নোটিশ ও প্রযোজ্য রাজ্য-প্রক্রিয়ার শুনানির উপর সময় নির্ভর করে।',
              hi: 'बेदखली की निश्चित अवधि नहीं दी जा रही। समय भूमि वर्गीकरण, vesting, नोटिस और लागू राज्य प्रक्रिया की सुनवाई पर निर्भर है।'
            },
            scope: 'district',
            evidence: {
              status: 'variable',
              primary_source_title: 'Banglarbhumi - Government of West Bengal',
              primary_source_url: 'https://banglarbhumi.gov.in/',
              pinpoint: 'Confirm competent Gram Panchayat/revenue authority service and governing vesting/eviction rule for the parcel',
              checked_on: '2026-10-11'
            }
          }
        ],
        steps: {
          en: [
            'Verify the plot classification, recorded owner/vesting and community use from the current mouza map and Record of Rights.',
            'Complain to the Gram Panchayat/land-owning authority and competent revenue officer with dated evidence and exact plot details.',
            'Follow the applicable State notice and hearing process. The authority decides eviction or other relief; Jagpal Singh is relevant to genuine commons but is not a self-executing order.',
            'If no action follows, get counsel advice on the applicable State statute, appeal and public-law route; do not presume a PIL or automatic eviction.'
          ],
          bn: [
            'বর্তমান মৌজা ম্যাপ ও Record of Rights থেকে প্লটের শ্রেণি, রেকর্ডভুক্ত মালিক/ন্যস্ততা ও জনসাধারণের ব্যবহার যাচাই করুন।',
            'তারিখসহ প্রমাণ ও নির্দিষ্ট প্লটের তথ্য দিয়ে গ্রাম পঞ্চায়েত/জমির মালিক কর্তৃপক্ষ এবং উপযুক্ত রাজস্ব আধিকারিককে অভিযোগ দিন।',
            'প্রযোজ্য রাজ্য নোটিশ ও শুনানি প্রক্রিয়া অনুসরণ করুন। উচ্ছেদ/প্রতিকার কর্তৃপক্ষ নির্ধারণ করবে; Jagpal Singh প্রকৃত কমনের ক্ষেত্রে প্রাসঙ্গিক, স্বয়ংক্রিয় আদেশ নয়।',
            'ব্যবস্থা না হলে প্রযোজ্য রাজ্য আইন, আপিল ও জনআইনি পথ নিয়ে আইনজীবীর পরামর্শ নিন; PIL বা স্বয়ংক্রিয় উচ্ছেদ ধরে নেবেন না।'
          ],
          hi: [
            'वर्तमान मौजा नक्शा और Record of Rights से प्लॉट वर्गीकरण, रिकॉर्डेड स्वामी/vesting और सार्वजनिक उपयोग जांचें।',
            'तारीख सहित साक्ष्य और सटीक प्लॉट विवरण देकर ग्राम पंचायत/भूमि-स्वामी प्राधिकरण तथा सक्षम राजस्व अधिकारी को शिकायत दें।',
            'लागू राज्य नोटिस और सुनवाई प्रक्रिया अपनाएं। बेदखली/राहत प्राधिकरण तय करेगा; Jagpal Singh वास्तविक कॉमन भूमि के लिए प्रासंगिक है, स्वतः लागू आदेश नहीं।',
            'कार्रवाई न हो तो लागू राज्य कानून, अपील और public-law मार्ग पर वकील से सलाह लें; PIL या स्वतः बेदखली न मानें।'
          ]
        }
      },
      kolkata_urban: {
        authority: {
          en: 'KMC department/authority legally responsible for the specific municipal parcel; Kolkata Collector where State land is involved',
          bn: 'নির্দিষ্ট পৌর জমির জন্য আইনত দায়িত্বপ্রাপ্ত KMC দপ্তর/কর্তৃপক্ষ; রাজ্য জমি হলে কলকাতা Collector',
          hi: 'विशिष्ट नगरपालिका भूखंड का कानूनी रूप से जिम्मेदार KMC विभाग/प्राधिकरण; राज्य भूमि होने पर Kolkata Collector'
        },
        portal_name: { en: 'KMC official portal', bn: 'KMC সরকারি পোর্টাল', hi: 'KMC आधिकारिक पोर्टাল' },
        portal_url: 'https://www.kmcgov.in/',
        timeline_info: [
          {
            id: 'time-land-17-kolkata-process',
            kind: 'service_standard',
            label: { en: 'KMC/State authority process time', bn: 'KMC/রাজ্য কর্তৃপক্ষের প্রক্রিয়ার সময়', hi: 'KMC/राज्य प्राधिकरण प्रक्रिया समय' },
            value_description: {
              en: 'No fixed removal period is stated. Timing depends on whether the parcel is municipal or State land and the applicable notice/hearing process.',
              bn: 'উচ্ছেদের নির্দিষ্ট সময় বলা হচ্ছে না। জমি পৌর না রাজ্য-সম্পত্তি এবং প্রযোজ্য নোটিশ/শুনানি প্রক্রিয়ার উপর সময় নির্ভর করে।',
              hi: 'बेदखली की निश्चित अवधि नहीं दी जा रही। समय इस पर निर्भर है कि भूखंड नगरपालिका या राज्य भूमि है और कौन-सी नोटिस/सुनवाई प्रक्रिया लागू है।'
            },
            scope: 'kolkata',
            evidence: {
              status: 'variable',
              primary_source_title: 'Kolkata Municipal Corporation official portal',
              primary_source_url: 'https://www.kmcgov.in/',
              pinpoint: 'Confirm responsible KMC/State authority, parcel ownership and current enforcement procedure',
              checked_on: '2026-10-11'
            }
          }
        ],
        steps: {
          en: [
            'Confirm the land is municipal/public land and identify the KMC department or State authority responsible for that parcel; village Panchayat/common-land procedures do not apply merely because land is open.',
            'Submit a written, dated representation to the responsible authority with premises/ward/plot details, record extracts and lawful evidence of the alleged occupation.',
            'Request the authority to follow the applicable notice, hearing and municipal/State enforcement procedure; do not assume KMC Building Act or Jagpal Singh alone supplies the procedure.',
            'If the authority does not act, consult counsel about the competent statutory forum or public-law remedy, standing and evidence. No removal or response time is guaranteed.'
          ],
          bn: [
            'জমি পৌর/সরকারি কি না এবং নির্দিষ্ট প্লটের দায়িত্বপ্রাপ্ত KMC দপ্তর বা রাজ্য কর্তৃপক্ষ শনাক্ত করুন; খোলা জমি হলেই গ্রাম পঞ্চায়েতের কমন-জমি প্রক্রিয়া প্রযোজ্য নয়।',
            'প্রাঙ্গণ/ওয়ার্ড/প্লটের তথ্য, রেকর্ডের কপি ও আইনসম্মত প্রমাণসহ দায়িত্বপ্রাপ্ত কর্তৃপক্ষকে তারিখযুক্ত আবেদন দিন।',
            'প্রযোজ্য নোটিশ, শুনানি এবং পৌর/রাজ্য বলবৎকরণ পদ্ধতি অনুসরণের অনুরোধ করুন; শুধু KMC Building Act বা Jagpal Singh-কে প্রক্রিয়া ধরে নেবেন না।',
            'ব্যবস্থা না হলে উপযুক্ত বিধিবদ্ধ ফোরাম/জনআইনি প্রতিকার, locus ও প্রমাণ নিয়ে আইনজীবীর পরামর্শ নিন। অপসারণ বা সাড়া দেওয়ার সময় নিশ্চিত নয়।'
          ],
          hi: [
            'पुष्टि करें कि भूमि नगरपालिका/सार्वजनिक है और भूखंड का जिम्मेदार KMC विभाग या राज्य प्राधिकरण पहचानें; खुला भूखंड होने मात्र से ग्राम पंचायत कॉमन-भूमि प्रक्रिया लागू नहीं होती।',
            'परिसर/वार्ड/प्लॉट विवरण, रिकॉर्ड प्रति और वैध साक्ष्य सहित जिम्मेदार प्राधिकरण को दिनांकित आवेदन दें।',
            'लागू नोटिस, सुनवाई और नगरपालिका/राज्य प्रवर्तन प्रक्रिया अपनाने का अनुरोध करें; केवल KMC Building Act या Jagpal Singh को प्रक्रिया न मानें।',
            'कार्रवाई न हो तो सक्षम वैधानिक मंच/public-law उपाय, locus और साक्ष्य पर वकील से सलाह लें। हटाने या जवाब की अवधि की गारंटी नहीं।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Identify the location, current record classification, ownership/vesting and public or municipal authority responsible for the parcel.',
        'Preserve lawful, dated evidence and prepare the mouza/ward/plot details, record extracts and description of the alleged encroachment.',
        'Use the selected rural Revenue/Panchayat or Kolkata municipal/State authority route and follow its applicable notice and hearing process.',
        'If the authority does not act, obtain legal advice on the applicable West Bengal statute, appeal or public-law remedy; do not assume a PIL or automatic eviction.'
      ],
      bn: [
        'অবস্থান, বর্তমান রেকর্ড-শ্রেণি, মালিকানা/ন্যস্ততা এবং জমির জন্য দায়িত্বপ্রাপ্ত সরকারি বা পৌর কর্তৃপক্ষ শনাক্ত করুন।',
        'আইনসম্মত ও তারিখযুক্ত প্রমাণ সংরক্ষণ করে মৌজা/ওয়ার্ড/প্লটের তথ্য, রেকর্ডের কপি এবং কথিত দখলের বিবরণ প্রস্তুত করুন।',
        'নির্বাচিত গ্রামীণ রাজস্ব/পঞ্চায়েত বা কলকাতা পৌর/রাজ্য কর্তৃপক্ষের পথ নিন এবং প্রযোজ্য নোটিশ ও শুনানি প্রক্রিয়া অনুসরণ করুন।',
        'কর্তৃপক্ষ ব্যবস্থা না নিলে প্রযোজ্য পশ্চিমবঙ্গ আইন, আপিল বা জনআইনি প্রতিকার সম্পর্কে আইনজীবীর পরামর্শ নিন; PIL বা স্বয়ংক্রিয় উচ্ছেদ ধরে নেবেন না।'
      ],
      hi: [
        'स्थान, वर्तमान रिकॉर्ड वर्गीकरण, स्वामित्व/vesting और भूखंड के जिम्मेदार सार्वजनिक या नगरपालिका प्राधिकरण की पहचान करें।',
        'कानूनी और तारीख सहित साक्ष्य सुरक्षित रखकर मौजा/वार्ड/प्लॉट विवरण, रिकॉर्ड प्रति और कथित कब्जे का विवरण तैयार करें।',
        'चुने हुए ग्रामीण राजस्व/पंचायत या कोलकाता नगरपालिका/राज्य प्राधिकरण मार्ग का पालन करें और लागू नोटिस/सुनवाई प्रक्रिया अपनाएं।',
        'प्राधिकरण कार्रवाई न करे तो लागू पश्चिम बंगाल कानून, अपील या public-law उपाय पर वकील से सलाह लें; PIL या स्वतः बेदखली न मानें।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-17-1',
        name: { en: 'Current record/map identifying parcel classification and responsible authority', bn: 'জমির শ্রেণি ও দায়িত্বপ্রাপ্ত কর্তৃপক্ষ চিহ্নিত বর্তমান রেকর্ড/ম্যাপ', hi: 'भूमि वर्गीकरण और जिम्मेदार प्राधिकरण दर्शाने वाला वर्तमान रिकॉर्ड/नक्शा' },
        issuing_authority: { en: 'Competent revenue/municipal record office', bn: 'উপযুক্ত রাজস্ব/পৌর রেকর্ড দপ্তর', hi: 'सक्षम राजस्व/नगरपालिका रिकॉर्ड कार्यालय' },
        is_mandatory: false
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
    relevant_act: 'Secs 13, 15, 18, 33 and 35, Indian Easements Act, 1882; Specific Relief Act, 1963; Limitation Act as applicable',
    summary: {
      en: 'A claim to an easement (such as a way) may arise by grant, necessity, prescription or local custom. Prescription under section 15 has strict as-of-right, peaceable, open and uninterrupted use requirements: generally 20 years against private land and 30 years against Government. Light/air claims have additional limits; long use alone is not enough.',
      bn: 'পথের মতো easement অনুদান, প্রয়োজন, prescription বা স্থানীয় প্রথায় হতে পারে। ধারা ১৫-তে অধিকারবলে, শান্তিপূর্ণ, প্রকাশ্য ও নিরবচ্ছিন্ন ব্যবহারের কঠোর শর্ত আছে: সাধারণত ব্যক্তিগত জমির বিরুদ্ধে ২০ বছর, সরকারের বিরুদ্ধে ৩০ বছর। আলো-বাতাসের দাবিতে অতিরিক্ত সীমা আছে; দীর্ঘ ব্যবহার একা যথেষ্ট নয়।',
      hi: 'रास्ते जैसे easement अनुदान, आवश्यकता, prescription या स्थानीय प्रथा से हो सकते हैं। धारा 15 में अधिकारस्वरूप, शांतिपूर्ण, खुला और निर्बाध उपयोग आवश्यक है: सामान्यतः निजी भूमि के विरुद्ध 20 वर्ष और सरकार के विरुद्ध 30 वर्ष। रोशनी/हवा दावों पर अतिरिक्त सीमाएं हैं; लंबा उपयोग अकेले पर्याप्त नहीं।'
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
      en: 'The section 15 prescriptive period is generally 20 years for private land and 30 years where the servient property belongs to Government; customary/necessity easements follow different proof. No suit-duration estimate is stated.',
      bn: 'ধারা ১৫-তে prescription-এর সময় সাধারণত ব্যক্তিগত জমির জন্য ২০ বছর এবং servient জমি সরকারের হলে ৩০ বছর; প্রথাগত/প্রয়োজনীয় easement-এর প্রমাণ ভিন্ন। মামলার নিষ্পত্তি-সময় বলা হচ্ছে না।',
      hi: 'धारा 15 में prescriptive अवधि सामान्यतः निजी भूमि पर 20 वर्ष और सरकारी servient भूमि पर 30 वर्ष है; customary/necessity easement के प्रमाण अलग हैं। मुकदमे की अवधि नहीं बताई जा रही।'
    },
    search_keywords: {
      en: ['easement right of way', 'air and light easement', 'passage dispute'],
      bn: ['চলাচলের রাস্তা', 'এজমেন্ট অধিকার', 'আলো বাতাস বন্ধ'],
      hi: ['रास्ते का विवाद', 'ईजमेंट अधिकार', 'सुखाधिकार वाद']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Identify the precise right claimed (grant, necessity, prescription or custom), the dominant and servient parcels, and the route/extent. Obtain title deeds, sanctioned plans, maps, prior permissions and evidence of the legally relevant use period.',
        'For prescription, document open, peaceable, as-of-right and uninterrupted enjoyment, interruptions/objections, user purpose and whether the servient land is private or Government. A neighbour’s permission may defeat a prescriptive claim; light/air claims require separate statutory analysis.',
        'Send a factual written request/notice if appropriate, but do not treat notice as a statutory precondition unless counsel confirms. If obstructed or threatened, consult counsel on a declaration/injunction/compensation claim under the Easements Act and Specific Relief Act, limitation, valuation and court jurisdiction.',
        'Seek interim relief only if the legal test is met; the court decides whether to grant it. A commissioner/local investigation is discretionary and records physical facts, not the legal existence of an easement.'
      ],
      bn: [
        'কোন অধিকার দাবি করছেন (অনুদান, প্রয়োজন, prescription বা প্রথা), dominant/servient জমি এবং পথের অবস্থান/পরিধি নির্দিষ্ট করুন। দলিল, অনুমোদিত নকশা, ম্যাপ, আগের অনুমতি ও প্রাসঙ্গিক ব্যবহার-সময়ের প্রমাণ নিন।',
        'Prescription হলে প্রকাশ্য, শান্তিপূর্ণ, অধিকারবলে ও নিরবচ্ছিন্ন ব্যবহার, বাধা/আপত্তি, ব্যবহারের উদ্দেশ্য এবং servient জমি ব্যক্তিগত নাকি সরকারি তা প্রমাণ করুন। প্রতিবেশীর অনুমতি prescription দাবিকে বাধাগ্রস্ত করতে পারে; আলো-বাতাসের দাবিতে পৃথক বিধি যাচাই দরকার।',
        'প্রাসঙ্গিক হলে তথ্যভিত্তিক লিখিত অনুরোধ/নোটিশ দিন, তবে আইনজীবী নিশ্চিত না করলে একে বাধ্যতামূলক পূর্বশর্ত বলবেন না। বাধা বা হুমকি থাকলে Easements Act/Specific Relief Act-এ ঘোষণা, নিষেধাজ্ঞা/ক্ষতিপূরণ, তামাদি, মূল্যায়ন ও আদালত নিয়ে পরামর্শ নিন।',
        'আইনি মানদণ্ড পূরণ হলেই অন্তর্বর্তী প্রতিকার চান; মঞ্জুরি আদালত নির্ধারণ করে। কমিশনার/স্থানীয় তদন্ত বিবেচনাধীন এবং ভৌত তথ্য নথিবদ্ধ করে, easement-এর আইনি অস্তিত্ব নয়।'
      ],
      hi: [
        'बताएं कि दावा किस आधार का है (अनुदान, आवश्यकता, prescription या प्रथा), dominant/servient भूखंड और मार्ग की स्थिति/सीमा क्या है। विलेख, स्वीकृत योजना, नक्शे, पूर्व अनुमति और प्रासंगिक उपयोग अवधि के साक्ष्य लें।',
        'Prescription के लिए खुले, शांतिपूर्ण, अधिकारस्वरूप और निर्बाध उपयोग, रुकावट/आपत्ति, उपयोग का उद्देश्य और servient भूमि निजी या सरकारी है, यह सिद्ध करें। पड़ोसी की अनुमति prescriptive दावा रोक सकती है; रोशनी/हवा पर अलग वैधानिक सीमाएं हैं।',
        'उचित हो तो तथ्यात्मक लिखित अनुरोध/नोटिस दें; वकील की पुष्टि के बिना इसे वैधानिक पूर्वशर्त न कहें। बाधा/धमकी हो तो Easements Act/Specific Relief Act में घोषणा/निषेधाज्ञा/क्षतिपूर्ति, परिसीमा, मूल्यांकन और सक्षम अदालत पर सलाह लें।',
        'कानूनी कसौटी पूरी हो तभी अंतरिम राहत मांगें; अदालत तय करेगी। आयुक्त/स्थानीय जांच विवेकाधीन है और भौतिक तथ्य दर्ज करती है, easement का कानूनी अस्तित्व नहीं।'
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
      en: 'A registered instrument may be rectified under Specific Relief Act section 26 only where fraud or mutual mistake caused it not to express the parties’ real intention. A unilateral change to property identity or bargain is not a clerical correction; third-party rights and registration procedure matter.',
      bn: 'Specific Relief Act ধারা ২৬-এ রেজিস্ট্রি দলিল সংশোধন তখনই হতে পারে, যখন প্রতারণা বা পক্ষদের পারস্পরিক ভুলে দলিল তাদের প্রকৃত অভিপ্রায় প্রকাশ করেনি। একতরফা জমির পরিচয়/চুক্তি বদল করণিক সংশোধন নয়; তৃতীয় পক্ষের অধিকার ও নিবন্ধন-পদ্ধতি গুরুত্বপূর্ণ।',
      hi: 'Specific Relief Act धारा 26 के तहत पंजीकृत दस्तावेज तभी सुधर सकता है जब धोखाधड़ी या पक्षों की पारस्परिक भूल से वह वास्तविक साझा आशय व्यक्त न करे। संपत्ति की पहचान/सौदा एकतरफा बदलना लिपिकीय सुधार नहीं; तीसरे पक्ष के अधिकार और पंजीकरण प्रक्रिया महत्वपूर्ण हैं।'
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
      en: 'No general 15-day correction period applies. Limitation depends on the relief and facts; if a suit is needed, seek prompt advice. A registering office does not decide disputed mutual intent or title.',
      bn: 'সাধারণ ১৫ দিনের সংশোধন-সময়সীমা নেই। প্রতিকার ও তথ্য অনুযায়ী তামাদি নির্ভর করে; মামলা লাগলে দ্রুত পরামর্শ নিন। নিবন্ধন দপ্তর পারস্পরিক অভিপ্রায় বা স্বত্বের বিরোধ নির্ধারণ করে না।',
      hi: 'सामान्य 15-दिन सुधार अवधि नहीं है। परिसीमा राहत और तथ्यों पर निर्भर है; वाद आवश्यक हो तो शीघ्र सलाह लें। पंजीयन कार्यालय विवादित साझा आशय या स्वामित्व तय नहीं करता।'
    },
    search_keywords: {
      en: ['rectification deed', 'dag error in deed', 'section 26 sra'],
      bn: ['রেকটিফিকেশন দলিল', 'দলিল সংশোধন', 'দাগ নম্বর ভুল'],
      hi: ['रेक्टिफिकेशन डीड', 'विलेख सुधार', 'खसरा नंबर गलती']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Compare the registered instrument with negotiation, payment and execution evidence. Identify a specific fraud or mutual mistake and the parties’ concluded common intention; ensure the correction does not substitute a different parcel or bargain or prejudice a good-faith third party.',
        'If all necessary parties agree and the correction is legally registrable, obtain a properly drafted rectification instrument and confirm stamp duty, registration fee, presentation requirements and whether original parties/successors must execute with the jurisdictional Sub-Registrar.',
        'If consent is absent or the issue is disputed, seek counsel advice on a section 26 Specific Relief Act civil suit and specifically plead rectification. Relief depends on proof of the statutory requirements.',
        'After any registered rectification or decree, apply separately to the competent revenue/KMC authority to update its record with the corrected instrument/order. Record correction is distinct from rectifying the registered deed.'
      ],
      bn: [
        'রেজিস্ট্রি দলিলকে আলোচনা, পেমেন্ট ও সম্পাদনের প্রমাণের সঙ্গে মিলিয়ে দেখুন। নির্দিষ্ট প্রতারণা বা পারস্পরিক ভুল এবং পক্ষদের চূড়ান্ত অভিন্ন অভিপ্রায় শনাক্ত করুন; সংশোধনে ভিন্ন জমি/চুক্তি বসানো বা সৎ তৃতীয় পক্ষের অধিকার ক্ষতিগ্রস্ত করা যাবে না।',
        'সব প্রয়োজনীয় পক্ষ সম্মত এবং সংশোধন নিবন্ধনযোগ্য হলে সংশোধনী দলিল তৈরি করে স্ট্যাম্প ডিউটি, রেজিস্ট্রেশন ফি, দাখিলের নিয়ম এবং মূল পক্ষ/উত্তরাধিকারীদের স্বাক্ষর লাগবে কি না উপ-নিবন্ধকের কাছে যাচাই করুন।',
        'সম্মতি না থাকলে বা বিরোধ হলে ধারা ২৬ Specific Relief Act-এ দেওয়ানি মামলা ও সংশোধনের নির্দিষ্ট দাবি নিয়ে আইনজীবীর পরামর্শ নিন। বিধিবদ্ধ শর্ত প্রমাণ না হলে প্রতিকার নিশ্চিত নয়।',
        'নিবন্ধিত সংশোধন বা ডিক্রির পরে সংশোধিত নথি/আদেশ দিয়ে উপযুক্ত রাজস্ব/KMC কর্তৃপক্ষের কাছে রেকর্ড আপডেট আলাদাভাবে চান। রেকর্ড সংশোধন ও দলিল সংশোধন পৃথক।'
      ],
      hi: [
        'पंजीकृत दस्तावेज को बातचीत, भुगतान और निष्पादन साक्ष्य से मिलाएं। विशिष्ट धोखाधड़ी या पारस्परिक भूल और पक्षों का अंतिम साझा आशय पहचानें; सुधार से अलग भूखंड/सौदा न बदले और सद्भावी तीसरे पक्ष का अधिकार प्रभावित न हो।',
        'यदि सभी आवश्यक पक्ष सहमत हों और सुधार पंजीकरण योग्य हो तो rectification instrument बनाएं; स्टाम्प ड्यूटी, पंजीकरण शुल्क, प्रस्तुति नियम और मूल पक्ष/उत्तराधिकारियों के निष्पादन की पुष्टि सक्षम Sub-Registrar से करें।',
        'सहमति न हो या विवाद हो तो धारा 26 Specific Relief Act में दीवानी वाद और rectification को स्पष्ट रूप से plead करने पर वकील से सलाह लें। राहत वैधानिक शर्तों के प्रमाण पर निर्भर है।',
        'पंजीकृत सुधार या डिक्री के बाद सुधरे दस्तावेज/आदेश से सक्षम राजस्व/KMC प्राधिकरण में रिकॉर्ड अपडेट अलग से मांगें। रिकॉर्ड सुधार और पंजीकृत दस्तावेज सुधार अलग हैं।'
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
    relevant_act: 'Secs 201–208, Indian Contract Act, 1872; Specific Relief Act, 1963; Registration Act, 1908; Suraj Lamp & Industries v. State of Haryana, (2012) 1 SCC 656',
    summary: {
      en: 'A POA is an agency, not by itself a conveyance of title. Revocation, authority coupled with interest under Contract Act section 202, communication to the agent/third parties, and the validity of a sale deed are separate issues. A completed registered conveyance is not cancelled merely by publishing a revocation notice.',
      bn: 'POA হলো agency, নিজে স্বত্ব-হস্তান্তর দলিল নয়। বাতিল, Contract Act ধারা ২০২-এ স্বার্থযুক্ত agency, প্রতিনিধি/তৃতীয় পক্ষকে জানানো এবং বিক্রয় দলিলের বৈধতা পৃথক প্রশ্ন। বাতিল-নোটিশ প্রকাশ করলেই সম্পন্ন রেজিস্ট্রি বিক্রয় দলিল বাতিল হয় না।',
      hi: 'POA एजेंसी है, अपने आप स्वत्व अंतरण विलेख नहीं। निरस्तीकरण, Contract Act धारा 202 का हित-संयुक्त एजेंसी, एजेंट/तीसरे पक्ष को सूचना और बिक्री विलेख की वैधता अलग प्रश्न हैं। निरस्तीकरण नोटिस प्रकाशित करने से पूर्ण पंजीकृत बिक्री विलेख रद्द नहीं होता।'
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
      en: 'Limitation depends on whether relief is revocation, declaration or cancellation and when relevant facts became known; Article 59 may apply to cancellation. Preserve dates and obtain prompt advice. Criminal complaint periods/procedure are separate.',
      bn: 'প্রতিকার বাতিল, ঘোষণা নাকি দলিল-রদ এবং প্রাসঙ্গিক তথ্য জানার তারিখের উপর তামাদি নির্ভর করে; দলিল বাতিলে Article 59 প্রযোজ্য হতে পারে। তারিখ সংরক্ষণ করে দ্রুত পরামর্শ নিন। ফৌজদারি অভিযোগের সময়/পদ্ধতি পৃথক।',
      hi: 'परिसीमा इस पर निर्भर है कि राहत निरस्तीकरण, घोषणा या विलेख रद्द करना है और तथ्य कब ज्ञात हुए; रद्दीकरण पर Article 59 लागू हो सकता है। तारीखें सुरक्षित कर शीघ्र सलाह लें। आपराधिक शिकायत की प्रक्रिया/अवधि अलग है।'
    },
    search_keywords: {
      en: ['gpa land sale cancellation', 'suraj lamp', 'misused poa'],
      bn: ['পাওয়ার অব অ্যাটর্নি বাতিল', 'ভুয়ো আমমোক্তারনামা', 'জমি প্রতারণা'],
      hi: ['जीपीए बिक्री निरस्तीकरण', 'मुख्तारनामा दुरुपयोग', 'फर्जी पावर ऑफ अटॉर्नी']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Obtain the original POA, any agency/security or development agreement, registered conveyance, and the complete communication/registration chronology. Establish whether the POA was forged, expired, expressly/implicitly revoked with legally required notice, or coupled with an agent’s interest under section 202; do not assume the label “irrevocable” decides the issue.',
        'If authority has not ended and the principal seeks to revoke it, obtain legal advice on Contract Act sections 201–208, reasonable notice to the agent, communication to affected third parties and the appropriate registration/public-record step. This does not by itself undo a completed conveyance.',
        'If a conveyance has already been executed, obtain its certified copy and seek counsel advice on the correct declaration/cancellation/rectification, possession or injunction relief against necessary parties, limitation and court jurisdiction. A POA holder may execute a conveyance only within valid authority; GPA/Agreement-to-Sell alone does not transfer title.',
        'Report suspected forgery, cheating or breach to police/competent authority only on supported facts and the applicable current criminal provision. Civil relief and criminal investigation are separate; no deed cancellation or FIR outcome is guaranteed.'
      ],
      bn: [
        'মূল POA, agency/security বা development agreement, রেজিস্ট্রি conveyance এবং যোগাযোগ/নিবন্ধনের সময়রেখা সংগ্রহ করুন। POA জাল, মেয়াদোত্তীর্ণ, যথাযথ নোটিশসহ প্রত্যক্ষ/পরোক্ষভাবে বাতিল, নাকি ধারা ২০২-এ agent-এর স্বার্থযুক্ত ছিল তা যাচাই করুন; “irrevocable” লেখা একাই সিদ্ধান্ত নয়।',
        'ক্ষমতা এখনও শেষ না হলে এবং principal বাতিল করতে চাইলে Contract Act ধারা ২০১–২০৮, agent-কে যুক্তিসঙ্গত নোটিশ, প্রভাবিত তৃতীয় পক্ষকে জানানো এবং উপযুক্ত নিবন্ধন/পাবলিক-রেকর্ড পদ্ধতিতে আইনগত পরামর্শ নিন। এতে সম্পন্ন conveyance নিজে থেকে বাতিল হয় না।',
        'দলিল ইতিমধ্যে সম্পাদিত হলে প্রত্যয়িত কপি নিয়ে প্রয়োজনীয় পক্ষের বিরুদ্ধে ঘোষণা/বাতিল/সংশোধন, দখল বা নিষেধাজ্ঞা, তামাদি ও আদালত সম্পর্কে পরামর্শ নিন। বৈধ ক্ষমতার মধ্যে POA-ধারী conveyance করতে পারেন; GPA/Agreement-to-Sell একা স্বত্ব দেয় না।',
        'জালিয়াতি, প্রতারণা বা বিশ্বাসভঙ্গের সন্দেহ হলে সমর্থনযোগ্য তথ্য ও বর্তমান ফৌজদারি বিধান অনুযায়ী পুলিশ/উপযুক্ত কর্তৃপক্ষকে জানান। দেওয়ানি প্রতিকার ও ফৌজদারি তদন্ত পৃথক; দলিল বাতিল/FIR ফল নিশ্চিত নয়।'
      ],
      hi: [
        'मूल POA, एजेंसी/सुरक्षा या विकास समझौता, पंजीकृत conveyance और संपूर्ण सूचना/पंजीकरण समयरेखा लें। जांचें कि POA जाली, समाप्त, आवश्यक सूचना सहित स्पष्ट/निहित रूप से निरस्त, या धारा 202 के तहत agent के हित से जुड़ा था; “irrevocable” शब्द अकेले निर्णायक नहीं।',
        'यदि एजेंसी अभी समाप्त नहीं हुई और principal उसे निरस्त करना चाहता है तो Contract Act धारा 201–208, agent को उचित नोटिस, प्रभावित तीसरे पक्ष को सूचना और उचित पंजीकरण/सार्वजनिक रिकॉर्ड कदम पर कानूनी सलाह लें। इससे पूर्ण conveyance अपने आप रद्द नहीं होता।',
        'यदि conveyance हो चुका है तो प्रमाणित प्रति लेकर आवश्यक पक्षकारों के विरुद्ध उचित घोषणा/निरस्तीकरण/rectification, कब्जा/निषेधाज्ञा राहत, परिसीमा और अदालत पर सलाह लें। वैध अधिकार के भीतर POA धारक conveyance कर सकता है; GPA/Agreement-to-Sell अकेले स्वत्व नहीं देता।',
        'जालसाजी, धोखाधड़ी या अमानत में खयानत की आशंका हो तो समर्थित तथ्यों और लागू वर्तमान अपराध प्रावधान के अनुसार पुलिस/सक्षम प्राधिकरण को सूचित करें। दीवानी राहत और आपराधिक जांच अलग हैं; विलेख रद्द/FIR परिणाम की गारंटी नहीं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-20-1',
        name: { en: 'Original Power of Attorney and any revocation/notice evidence, if applicable', bn: 'মূল আমমোক্তারনামা ও প্রযোজ্য বাতিল/নোটিশের প্রমাণ', hi: 'मूल Power of Attorney और लागू निरस्तीकरण/सूचना प्रमाण' },
        issuing_authority: { en: 'Executing parties / Sub-Registrar / service records', bn: 'সম্পাদনকারী পক্ষ / সাব-রেজিস্ট্রার / নোটিশ-জারি রেকর্ড', hi: 'निष्पादक पक्ष / Sub-Registrar / तामील रिकॉर्ड' },
        is_mandatory: false
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
    relevant_act: 'Article 300A, Constitution of India; Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act, 2013 or applicable special acquisition law; Vidya Devi v. State of Himachal Pradesh, (2020) 2 SCC 569',
    summary: {
      en: 'Article 300A bars deprivation of property without authority of law. Where Government or a public body took private land without a lawful acquisition/transfer and compensation, relief depends on title, consent, use, records, limitation/laches and the applicable project statute; market-value payment is not automatic.',
      bn: 'অনুচ্ছেদ ৩০০এ অনুযায়ী আইনের কর্তৃত্ব ছাড়া সম্পত্তি থেকে বঞ্চিত করা যায় না। সরকার/পাবলিক সংস্থা আইনসম্মত অধিগ্রহণ/হস্তান্তর ও ক্ষতিপূরণ ছাড়া ব্যক্তিগত জমি নিলে প্রতিকার স্বত্ব, সম্মতি, ব্যবহার, রেকর্ড, তামাদি/laches ও প্রকল্প-আইনের উপর নির্ভর করে; বাজারমূল্য স্বয়ংক্রিয় নয়।',
      hi: 'अनुच्छेद 300A के तहत कानून के अधिकार के बिना संपत्ति से वंचित नहीं किया जा सकता। यदि सरकार/सार्वजनिक निकाय ने वैध अधिग्रहण/हस्तांतरण और मुआवजे बिना निजी भूमि ली हो, राहत स्वत्व, सहमति, उपयोग, रिकॉर्ड, परिसीमा/laches और परियोजना कानून पर निर्भर है; बाजार मूल्य स्वतः नहीं।'
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
      en: 'No fixed writ or compensation timetable is stated. Delay/laches may affect discretionary public-law relief even where Article 300A is engaged; act promptly and have counsel assess limitation, continuing possession/use and the applicable acquisition statute.',
      bn: 'রিট/ক্ষতিপূরণের নির্দিষ্ট সময়সীমা বলা হচ্ছে না। অনুচ্ছেদ ৩০০এ প্রযোজ্য হলেও বিলম্ব/laches বিবেচনাধীন জনআইনি প্রতিকারকে প্রভাবিত করতে পারে; দ্রুত পদক্ষেপ নিয়ে তামাদি, চলমান দখল/ব্যবহার ও অধিগ্রহণ আইন যাচাই করুন।',
      hi: 'रिट/मुआवजे की निश्चित अवधि नहीं है। अनुच्छेद 300A लागू होने पर भी विलंब/laches विवेकाधीन public-law राहत प्रभावित कर सकता है; शीघ्र कदम लेकर परिसीमा, जारी कब्जा/उपयोग और अधिग्रहण कानून जांचें।'
    },
    search_keywords: {
      en: ['vidya devi land', 'article 300a land taking', 'uncompensated road'],
      bn: ['বিনা ক্ষতিপূরণে জমি দখল', 'আর্টিকেল ৩০০এ', 'রাস্তার জমি ক্ষতিপূরণ'],
      hi: ['बिना मुआवजा कब्जा', 'अनुच्छेद 300A', 'सड़क निर्माण मुआवजा']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Collect root/link title deeds, current and historical ROR/maps, acquisition/vesting notifications and award/payment records, consent/transfer documents, and evidence of when possession/use began. Identify the public body and exact purpose; a revenue report alone is not conclusive proof that no acquisition occurred.',
        'Send a documented representation to the acquiring/public authority and Collector seeking the acquisition file, legal basis for possession, award/payment particulars and response. Preserve acknowledgement; verify whether a special statute or prior proceeding governs.',
        'Have counsel assess Article 300A, the RFCTLARR Act or saved/special acquisition law, compensation, limitation/laches, alternative remedy, valuation and necessary parties. Vidya Devi condemns forcible State dispossession without legal process but does not guarantee market-value relief in every case.',
        'If appropriate, seek a case-specific writ/other remedy before the competent court. The court determines relief on evidence and delay; a mandamus, acquisition notification or compensation amount is not predetermined.'
      ],
      bn: [
        'মূল/সংযোগকারী স্বত্বদলিল, বর্তমান/পুরনো ROR ও ম্যাপ, অধিগ্রহণ/ন্যস্ততার বিজ্ঞপ্তি ও অ্যাওয়ার্ড/পেমেন্ট রেকর্ড, সম্মতি/হস্তান্তর নথি এবং দখল/ব্যবহারের শুরুর প্রমাণ নিন। সরকারি সংস্থা ও কাজের উদ্দেশ্য শনাক্ত করুন; শুধু রাজস্ব রিপোর্ট অধিগ্রহণ না-হওয়ার চূড়ান্ত প্রমাণ নয়।',
        'অধিগ্রহণ/পাবলিক কর্তৃপক্ষ ও Collector-কে নথিসহ আবেদন দিয়ে অধিগ্রহণ ফাইল, দখলের আইনি ভিত্তি, অ্যাওয়ার্ড/পেমেন্ট তথ্য ও জবাব চান। স্বীকৃতি রাখুন; বিশেষ আইন বা আগের মামলা প্রযোজ্য কি না যাচাই করুন।',
        'অনুচ্ছেদ ৩০০এ, RFCTLARR বা সংরক্ষিত/বিশেষ অধিগ্রহণ আইন, ক্ষতিপূরণ, তামাদি/laches, বিকল্প প্রতিকার, মূল্যায়ন ও প্রয়োজনীয় পক্ষ আইনজীবী দিয়ে নির্ধারণ করুন। Vidya Devi আইনগত প্রক্রিয়া ছাড়া রাষ্ট্রের জবরদখল নিন্দা করে; প্রতিটি ক্ষেত্রে বাজারমূল্য নিশ্চিত করে না।',
        'উপযুক্ত হলে যোগ্য আদালতে মামলাভিত্তিক রিট/প্রতিকার চান। প্রমাণ ও বিলম্ব দেখে আদালত প্রতিকার দেবে; mandamus, অধিগ্রহণ বিজ্ঞপ্তি বা ক্ষতিপূরণের অঙ্ক পূর্বনির্ধারিত নয়।'
      ],
      hi: [
        'मूल/लिंकिंग स्वत्व विलेख, वर्तमान/पुराने ROR व नक्शे, अधिग्रहण/vesting अधिसूचना और अवार्ड/भुगतान रिकॉर्ड, सहमति/हस्तांतरण दस्तावेज तथा कब्जा/उपयोग शुरू होने का प्रमाण जुटाएं। सार्वजनिक निकाय और उद्देश्य पहचानें; अकेला राजस्व रिपोर्ट अधिग्रहण न होने का अंतिम प्रमाण नहीं।',
        'अधिग्रहण/सार्वजनिक प्राधिकरण और Collector को दस्तावेजी अभ्यावेदन देकर अधिग्रहण फाइल, कब्जे का कानूनी आधार, अवार्ड/भुगतान विवरण और जवाब मांगें। पावती रखें; विशेष कानून/पूर्व कार्यवाही जांचें।',
        'Article 300A, RFCTLARR या संरक्षित/विशेष अधिग्रहण कानून, मुआवजा, परिसीमा/laches, वैकल्पिक उपाय, मूल्यांकन और आवश्यक पक्षकारों पर वकील से सलाह लें। Vidya Devi बिना कानूनन प्रक्रिया राज्य कब्जे की निंदा करता है, पर हर मामले में बाजार मूल्य सुनिश्चित नहीं करता।',
        'उचित हो तो सक्षम अदालत में मामले-विशिष्ट writ/अन्य राहत मांगें। साक्ष्य और विलंब पर अदालत निर्णय करेगी; mandamus, अधिग्रहण अधिसूचना या मुआवजा राशि पहले से तय नहीं।'
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
    relevant_act: 'Secs 5 and 34, Specific Relief Act, 1963; Articles 64–65, Limitation Act, 1963; CPC',
    summary: {
      en: 'A title-based suit may seek recovery of possession and any properly pleaded consequential relief. If the claimant is out of possession, section 34 bars a bare declaration where further relief is available; court, valuation, limitation and possession facts require legal review.',
      bn: 'স্বত্বভিত্তিক মামলায় দখল পুনরুদ্ধার এবং যথাযথ আনুষঙ্গিক প্রতিকার চাওয়া যেতে পারে। দাবিদার দখলের বাইরে হলে এবং অতিরিক্ত প্রতিকার পাওয়া সম্ভব হলে ধারা ৩৪ অনুযায়ী শুধু ঘোষণা চাওয়া বাধাগ্রস্ত হতে পারে; আদালত, মূল্যায়ন, তামাদি ও দখলের তথ্য আইনজীবীকে যাচাই করতে হবে।',
      hi: 'स्वत्व-आधारित वाद में कब्जा वापसी और उचित परिणामी राहत मांगी जा सकती है। वादी कब्जे से बाहर हो और आगे की राहत उपलब्ध हो तो धारा 34 केवल घोषणा मांगने पर रोक लगाती है; अदालत, मूल्यांकन, परिसीमा और कब्जे के तथ्य कानूनी समीक्षा मांगते हैं।'
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
      en: 'Limitation depends on relief: Article 65 generally gives 12 years for possession based on title from when the defendant’s possession becomes adverse; Article 64 may govern recovery based on prior possession after dispossession. No case-duration estimate is guaranteed.',
      bn: 'প্রতিকারভেদে তামাদি আলাদা: Article 65-এ স্বত্বভিত্তিক দখল পুনরুদ্ধারে সাধারণত বিবাদীর দখল বৈরী হওয়ার সময় থেকে ১২ বছর; পূর্বদখল/উচ্ছেদভিত্তিক দাবিতে Article 64 প্রযোজ্য হতে পারে। মামলার নিষ্পত্তির সময় নিশ্চিত নয়।',
      hi: 'राहत के अनुसार परिसीमा अलग है: Article 65 में स्वत्व-आधारित कब्जा वाद सामान्यतः प्रतिवादी का कब्जा प्रतिकूल होने से 12 वर्ष; पूर्व कब्जे/बेदखली पर Article 64 लागू हो सकता है। मुकदमे की अवधि की गारंटी नहीं।'
    },
    search_keywords: {
      en: ['recovery of possession', 'title declaration suit', 'section 5 sra'],
      bn: ['স্বত্ব ঘোষণা মামলা', 'দখল পুনরুদ্ধার', 'খাস দখল'],
      hi: ['स्वामित्व घोषणा वाद', 'कब्जा बहाली', 'धारा 5 विशिष्ट अनुतोष']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Collect the root and link title instruments, current Record of Rights, prior revenue/tax records, plot map and encumbrance/search material. Identify all co-owners, heirs, occupiers and persons claiming an interest; records such as mutation are relevant but do not themselves prove title.',
        'Prepare the possession chronology and evidence of dispossession, current occupation and any competing title. A pre-suit demand notice is not a universal statutory prerequisite; limitation and any special notice requirement must be checked for the specific defendant/claim.',
        'Ask counsel to select the correct declaration, possession, injunction, cancellation and mesne-profits relief, territorial/pecuniary forum and valuation. A bare declaration may be insufficient if possession or other consequential relief is available; limitation may be Article 64 or 65 depending on the pleaded basis.',
        'After decree, apply for execution under CPC Order XXI. Warrant/process and police assistance depend on the decree and court order; neither eviction nor police deployment is automatic.'
      ],
      bn: [
        'মূল ও সংযোগকারী স্বত্বদলিল, বর্তমান Record of Rights, আগের রাজস্ব/কর নথি, প্লট ম্যাপ ও encumbrance/search তথ্য সংগ্রহ করুন। সহ-মালিক, উত্তরাধিকারী, দখলদার ও স্বার্থদাবিদার শনাক্ত করুন; মিউটেশন প্রাসঙ্গিক হলেও একা স্বত্ব প্রমাণ করে না।',
        'উচ্ছেদ, বর্তমান দখল ও প্রতিদ্বন্দ্বী স্বত্বের সময়রেখা/প্রমাণ প্রস্তুত করুন। মামলা-পূর্ব দাবি-নোটিশ সব ক্ষেত্রে বিধিবদ্ধ বাধ্যবাধকতা নয়; নির্দিষ্ট পক্ষ/দাবিতে তামাদি ও বিশেষ নোটিশ আছে কি না যাচাই করুন।',
        'ঘোষণা, দখল, নিষেধাজ্ঞা, দলিল বাতিল ও mesne profits-এর সঠিক প্রতিকার, স্থানীয়/আর্থিক এখতিয়ার ও মূল্যায়ন আইনজীবী দিয়ে নির্ধারণ করুন। দখল/আনুষঙ্গিক প্রতিকার পাওয়া সম্ভব হলে শুধু ঘোষণা যথেষ্ট নাও হতে পারে; Article 64/65 দাবির ভিত্তিতে আলাদা হতে পারে।',
        'ডিক্রির পরে CPC Order XXI অনুযায়ী execution আবেদন করুন। ওয়ারেন্ট/প্রক্রিয়া ও পুলিশি সহায়তা ডিক্রি/আদালতের আদেশনির্ভর; স্বয়ংক্রিয় নয়।'
      ],
      hi: [
        'मूल और लिंकिंग स्वत्व दस्तावेज, वर्तमान Record of Rights, पुराने राजस्व/कर रिकॉर्ड, प्लॉट नक्शा और encumbrance/search सामग्री जुटाएं। सह-मालिक, वारिस, कब्जाधारी और हित दावा करने वालों की पहचान करें; म्यूटेशन प्रासंगिक है पर स्वयं स्वत्व सिद्ध नहीं करता।',
        'बेदखली, वर्तमान कब्जे और प्रतिस्पर्धी दावे की समयरेखा/साक्ष्य तैयार करें। मुकदमे-पूर्व मांग नोटिस हर मामले में वैधानिक पूर्वशर्त नहीं; विशेष पक्ष/दावे पर परिसीमा और नोटिस जांचें।',
        'घोषणा, कब्जा, निषेधाज्ञा, विलेख निरस्तीकरण और mesne profits में उचित राहत, क्षेत्रीय/आर्थिक अधिकारिता और मूल्यांकन वकील से तय करें। कब्जा/परिणामी राहत उपलब्ध हो तो केवल घोषणा पर्याप्त न हो; Article 64/65 दावे के आधार पर लागू हो सकता है।',
        'डिक्री के बाद CPC Order XXI के तहत execution आवेदन दें। वारंट/प्रक्रिया और पुलिस सहायता डिक्री/अदालत आदेश पर निर्भर है; स्वतः नहीं।'
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
    relevant_act: 'Prohibition of Benami Property Transactions Act, 1988 (as amended), especially secs 2(9), 24–27 and 46',
    summary: {
      en: 'Respond to a notice under the Benami Property Transactions Act with transaction-specific evidence. The spouse/child exception is limited: the individual must have provided consideration from known sources; a relative’s name or “family property” label alone does not exempt a transaction.',
      bn: 'Benami Property Transactions Act-এর নোটিশে লেনদেন-নির্দিষ্ট প্রমাণসহ জবাব দিন। স্ত্রী/সন্তান ব্যতিক্রম সীমিত: ব্যক্তি নিজে পরিচিত উৎসের অর্থে মূল্য দিয়েছেন—এটি প্রমাণ করতে হয়; আত্মীয়ের নাম বা “পারিবারিক সম্পত্তি” বললেই ছাড় নয়।',
      hi: 'Benami Property Transactions Act के नोटिस का जवाब लेनदेन-विशिष्ट साक्ष्य के साथ दें। spouse/child अपवाद सीमित है: व्यक्ति ने ज्ञात स्रोतों से प्रतिफल दिया हो; केवल रिश्तेदार का नाम या “पारिवारिक संपत्ति” कहना छूट नहीं देता।'
    },
    authority_forum: {
      en: 'Initiating Officer / Adjudicating Authority / Appellate Tribunal as identified in the notice and proceeding',
      bn: 'নোটিশ ও কার্যক্রমে উল্লিখিত Initiating Officer / Adjudicating Authority / Appellate Tribunal',
      hi: 'नोटिस/कार्यवाही में निर्दिष्ट Initiating Officer / Adjudicating Authority / Appellate Tribunal'
    },
    forum_type: 'Competent_Authority',
    is_complex: true,
    official_portal_url: 'https://incometaxindia.gov.in/',
    statutory_timeframe: {
      en: 'Reply within the date/time specified in the notice. Under section 24(2A), the Initiating Officer may extend the reply period, but not beyond 3 months from the end of the month in which notice was issued. Appeal under section 46 is generally 45 days from receipt of the section 26(3) adjudication order.',
      bn: 'নোটিশে নির্দিষ্ট তারিখ/সময়ের মধ্যে জবাব দিন। ধারা ২৪(২এ)-এ Initiating Officer সময় বাড়াতে পারেন, তবে নোটিশ-জারির মাস শেষ হওয়ার পর ৩ মাসের বেশি নয়। ধারা ২৬(৩)-এর adjudication আদেশ পাওয়ার পর ধারা ৪৬-এ সাধারণত ৪৫ দিনের মধ্যে আপিল।',
      hi: 'नोटिस में दी तारीख/समय तक जवाब दें। धारा 24(2A) में Initiating Officer अवधि बढ़ा सकता है, लेकिन नोटिस जारी होने वाले महीने के अंत से 3 माह से अधिक नहीं। धारा 26(3) adjudication आदेश मिलने पर धारा 46 की अपील सामान्यतः 45 दिनों में।'
    },
    search_keywords: {
      en: ['benami land notice', 'pbpt act defense', 'spouse land benami'],
      bn: ['বেনামি সম্পত্তি', 'বেনামি নোটিশ চ্যালেঞ্জ', 'পারিবারিক জমি'],
      hi: ['बेनामी जमीन', 'बेनामी संपत्ति नोटिस', 'पारिवारिक जमीन बचाव']
    },
    territory_track: 'Universal',
    roadmap_steps: {
      en: [
        'Verify the issuing Initiating Officer, property description, recorded reasons, service date, deadline and whether the notice is under section 24(1), an attachment order, or a later adjudication notice. Preserve the entire notice and envelope/service proof.',
        'Take immediate advice from a lawyer experienced in benami proceedings. Reconcile the deed, beneficial ownership/control, source and banking trail of each payment, possession/use, tax and accounting records, and any declaration/return.',
        'If relying on section 2(9)(A)(iii), prove that the holder is the individual’s spouse or child and that consideration came from that individual’s known sources. Other statutory exceptions have separate elements; the authority decides whether the exception fits the facts.',
        'File the reply within the notice period (seek a written extension before expiry if justified), participate in adjudication and preserve appeal rights. A section 46 appeal generally lies within 45 days of receipt of the section 26(3) order; challenge attachment through the remedy applicable to the particular order. No release or stay is automatic.'
      ],
      bn: [
        'নোটিশদাতা Initiating Officer, সম্পত্তির বিবরণ, লিখিত কারণ, নোটিশ-জারির তারিখ, জবাবের শেষ তারিখ এবং এটি ধারা ২৪(১)-এর নোটিশ, attachment order নাকি পরবর্তী adjudication তা যাচাই করুন। সম্পূর্ণ নোটিশ ও জারি-প্রমাণ সংরক্ষণ করুন।',
        'বেনামি মামলার অভিজ্ঞ আইনজীবীর দ্রুত পরামর্শ নিন। দলিল, প্রকৃত সুবিধাভোগী/নিয়ন্ত্রণ, প্রতিটি পেমেন্টের উৎস ও ব্যাংক-রেকর্ড, দখল/ব্যবহার, কর/হিসাব ও ঘোষণা মিলিয়ে দেখুন।',
        'ধারা ২(৯)(A)(iii) নিলে প্রমাণ করুন ধারক ব্যক্তি’র স্ত্রী/সন্তান এবং মূল্য ব্যক্তি নিজে পরিচিত উৎস থেকে দিয়েছেন। অন্য ব্যতিক্রমের উপাদান আলাদা; কর্তৃপক্ষ তথ্যের ভিত্তিতে সিদ্ধান্ত নেবে।',
        'নোটিশের সময়ে জবাব দিন; যুক্তি থাকলে শেষ তারিখের আগে লিখিত সময়-বৃদ্ধি চান; adjudication-এ অংশ নিয়ে আপিলের অধিকার রাখুন। ধারা ২৬(৩)-এর আদেশ পাওয়ার পর ধারা ৪৬-এ সাধারণত ৪৫ দিনের আপিল; attachment-এর প্রতিকার নির্দিষ্ট আদেশ অনুযায়ী। মুক্তি/স্থগিতাদেশ স্বয়ংক্রিয় নয়।'
      ],
      hi: [
        'जारीकर्ता Initiating Officer, संपत्ति विवरण, दर्ज कारण, सेवा तिथि, जवाब समय और नोटिस धारा 24(1), attachment आदेश या बाद की adjudication सूचना है—जांचें। पूरा नोटिस और तामील प्रमाण रखें।',
        'Benami कार्यवाही के अनुभवी वकील से तत्काल सलाह लें। conveyance, लाभकारी स्वामित्व/नियंत्रण, प्रत्येक भुगतान का स्रोत/बैंक रिकॉर्ड, कब्जा/उपयोग, कर/लेखा और घोषणाओं का मिलान करें।',
        'धारा 2(9)(A)(iii) पर निर्भर हों तो साबित करें कि धारक व्यक्ति का spouse/child है और प्रतिफल उस व्यक्ति के ज्ञात स्रोतों से दिया गया। अन्य वैधानिक अपवादों के तत्व अलग हैं; प्राधिकरण तथ्य तय करेगा।',
        'नोटिस अवधि में जवाब दें; कारण हो तो समाप्ति से पहले लिखित विस्तार मांगें; adjudication में भाग लेकर अपील अधिकार सुरक्षित रखें। धारा 26(3) आदेश की प्राप्ति से धारा 46 अपील सामान्यतः 45 दिनों में; attachment चुनौती का उपाय आदेश-विशिष्ट है। मुक्ति/स्थगन स्वतः नहीं।'
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
    relevant_act: 'WBLR Act, 1955 (sections 50–51A/51B as applicable to record entries); applicable State survey/settlement rules; KMC Act, 1980 and municipal survey/alignment procedure',
    summary: {
      en: 'Resolve a cadastral/revenue record-map mismatch in districts through the competent land-record/survey authority; in Kolkata, distinguish a municipal premises/street-alignment map from cadastral title records. A map correction does not decide a disputed boundary or title by itself.',
      bn: 'জেলায় cadastral/রাজস্ব রেকর্ড-ম্যাপের অমিল উপযুক্ত ভূমি-রেকর্ড/জরিপ কর্তৃপক্ষের মাধ্যমে দেখুন; কলকাতায় পৌর premises/street-alignment ম্যাপকে cadastral স্বত্ব-রেকর্ড থেকে আলাদা করুন। ম্যাপ সংশোধন একা বিতর্কিত সীমানা/স্বত্ব নির্ধারণ করে না।',
      hi: 'जिलों में cadastral/राजस्व रिकॉर्ड-नक्शा विसंगति सक्षम भूमि रिकॉर्ड/सर्वे प्राधिकरण से जांचें; कोलकाता में नगरपालिका परिसर/स्ट्रीट-अलाइनमेंट नक्शे को cadastral स्वत्व रिकॉर्ड से अलग रखें। नक्शा सुधार अपने आप विवादित सीमा/स्वत्व तय नहीं करता।'
    },
    authority_forum: {
      en: 'Competent DL&LRO/BL&LRO survey or record authority for districts / KMC Survey & Valuation Department for municipal alignment or premises records',
      bn: 'জেলায় উপযুক্ত DL&LRO/BL&LRO জরিপ বা রেকর্ড কর্তৃপক্ষ / পৌর alignment বা premises রেকর্ডে KMC Survey & Valuation Department',
      hi: 'जिलों में सक्षम DL&LRO/BL&LRO सर्वे/रिकॉर्ड प्राधिकरण / नगरपालिका alignment या परिसर रिकॉर्ड के लिए KMC Survey & Valuation Department'
    },
    forum_type: 'BL_LRO',
    is_complex: false,
    official_portal_url: 'https://banglarbhumi.gov.in/',
    statutory_timeframe: {
      en: 'No single 45–90 working-day period is stated. Timing depends on whether the request concerns a record-entry correction, cadastral survey/settlement, or KMC municipal alignment; confirm the current service standard and any appeal deadline in the order.',
      bn: '৪৫–৯০ কার্যদিবসের একক সময়সীমা নেই। আবেদনটি রেকর্ড-এন্ট্রি সংশোধন, cadastral জরিপ/settlement, নাকি KMC পৌর alignment—তার উপর সময় নির্ভর করে; বর্তমান পরিষেবা-মান ও আদেশের আপিল-সময় যাচাই করুন।',
      hi: '45–90 कार्यदिवस की कोई एक अवधि नहीं है। समय रिकॉर्ड प्रविष्टि सुधार, cadastral सर्वे/settlement या KMC नगरपालिका alignment में से अनुरोध के प्रकार पर निर्भर है; वर्तमान सेवा मानक और आदेश की अपील अवधि जांचें।'
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
            'Identify whether the discrepancy is in the finally published ROR, cadastral sheet, on-ground survey, or digital display layer. Obtain the relevant certified records and map versions from the competent land-record office.',
            'Apply under the current record-correction or survey/settlement process applicable to that record and area; section 51A(4) has its own scope, hearing and appeal provisions. Do not rely on an unverified “Rule 48” as a universal map-rectification route.',
            'Provide plot/mouza/khatian details, registered instruments, prior certified maps and a clear description of the mismatch. Pay only the current charge assessed by the competent authority and retain the receipt.',
            'Attend any notified field measurement or hearing and obtain the written report/order. Survey method and equipment are determined by the authority; a correction may not resolve a title/boundary dispute requiring civil adjudication.'
          ],
          bn: [
            'অমিলটি চূড়ান্ত ROR, cadastral sheet, মাঠের জরিপ নাকি ডিজিটাল display layer-এ তা নির্ধারণ করুন। উপযুক্ত ভূমি-রেকর্ড দপ্তর থেকে প্রাসঙ্গিক প্রত্যয়িত রেকর্ড ও ম্যাপের সংস্করণ নিন।',
            'ওই রেকর্ড/এলাকার বর্তমান রেকর্ড-সংশোধন বা জরিপ/settlement প্রক্রিয়ায় আবেদন করুন; ধারা ৫১এ(৪)-এর নিজস্ব পরিসর, শুনানি ও আপিল আছে। যাচাই না-করা “Rule 48” সর্বজনীন পথ নয়।',
            'প্লট/মৌজা/খতিয়ান, রেজিস্ট্রি দলিল, আগের প্রত্যয়িত ম্যাপ ও অমিলের স্পষ্ট বিবরণ দিন। উপযুক্ত কর্তৃপক্ষের বর্তমান নির্ধারিত ফি দিন ও রসিদ রাখুন।',
            'নোটিশপ্রাপ্ত মাঠ-মাপ/শুনানিতে যান ও লিখিত প্রতিবেদন/আদেশ নিন। জরিপ-পদ্ধতি কর্তৃপক্ষ নির্ধারণ করে; স্বত্ব/সীমানা বিরোধে দেওয়ানি adjudication লাগতে পারে।'
          ],
          hi: [
            'पहचानें कि अंतर अंतिम ROR, cadastral नक्शे, स्थल सर्वे या डिजिटल display में है। सक्षम भूमि रिकॉर्ड कार्यालय से संबंधित प्रमाणित रिकॉर्ड और नक्शा संस्करण लें।',
            'उस रिकॉर्ड/क्षेत्र पर लागू वर्तमान रिकॉर्ड-सुधार या सर्वे/settlement प्रक्रिया में आवेदन दें; धारा 51A(4) का अपना दायरा, सुनवाई और अपील है। अप्रमाणित “Rule 48” को सार्वभौमिक मार्ग न मानें।',
            'प्लॉट/मौजा/खतियान, पंजीकृत दस्तावेज, पुराने प्रमाणित नक्शे और विसंगति का स्पष्ट विवरण दें। सक्षम प्राधिकरण का वर्तमान शुल्क देकर रसीद रखें।',
            'सूचित स्थल माप/सुनवाई में जाएं और लिखित रिपोर्ट/आदेश लें। सर्वे पद्धति प्राधिकरण तय करता है; स्वत्व/सीमा विवाद के लिए दीवानी निर्णय जरूरी हो सकता है।'
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
            'For a KMC street-line, road-width or municipal premises-map discrepancy, identify the correct KMC Survey & Valuation service and obtain its current form/checklist. This is not a cadastral title-map correction.',
            'Submit the premises/Assessee number, registered deed, sanctioned plan or prior KMC assessment/alignment maps, and a marked description of the mismatch. Confirm the current assessed fee and retain the acknowledgement.',
            'Respond to KMC document queries and attend any notified survey/inspection. Ask for the record/report and written decision; the department determines whether an alignment entry is corrected.',
            'If the discrepancy affects a claimed ownership boundary or remains contested, obtain legal advice on civil remedy and limitation. A KMC alignment record does not itself declare title or guarantee boundary relief.'
          ],
          bn: [
            'KMC street-line, রাস্তার প্রস্থ বা পৌর premises-map অমিল হলে সঠিক KMC Survey & Valuation পরিষেবা এবং বর্তমান ফর্ম/তালিকা যাচাই করুন। এটি cadastral স্বত্ব-ম্যাপ সংশোধন নয়।',
            'প্রাঙ্গণ/Assessee নম্বর, রেজিস্ট্রি দলিল, অনুমোদিত নকশা বা আগের KMC মূল্যায়ন/alignment ম্যাপ এবং চিহ্নিত অমিল দিন। বর্তমান নির্ধারিত ফি যাচাই করে স্বীকৃতি রাখুন।',
            'KMC নথি-জিজ্ঞাসায় সাড়া দিন ও নোটিশপ্রাপ্ত জরিপ/পরিদর্শনে যান। রেকর্ড/প্রতিবেদন ও লিখিত সিদ্ধান্ত চান; alignment এন্ট্রি সংশোধন হবে কি না দপ্তর নির্ধারণ করে।',
            'অমিলে মালিকানার সীমানা বদলালে বা বিরোধ থাকলে দেওয়ানি প্রতিকার ও তামাদি নিয়ে আইনজীবীর পরামর্শ নিন। KMC alignment record নিজে স্বত্ব ঘোষণা বা সীমানা-প্রতিকার নিশ্চিত করে না।'
          ],
          hi: [
            'KMC street-line, सड़क चौड़ाई या नगरपालिका परिसर नक्शे की विसंगति हो तो सही KMC Survey & Valuation सेवा और वर्तमान फॉर्म/चेकलिस्ट लें। यह cadastral स्वत्व नक्शा सुधार नहीं है।',
            'परिसर/Assessee नंबर, पंजीकृत विलेख, स्वीकृत योजना या पुराने KMC मूल्यांकन/alignment नक्शे और चिह्नित अंतर दें। वर्तमान निर्धारित शुल्क की पुष्टि कर पावती रखें।',
            'KMC दस्तावेज पूछताछ का जवाब दें और सूचित सर्वे/निरीक्षण में जाएं। रिकॉर्ड/रिपोर्ट और लिखित निर्णय मांगें; alignment प्रविष्टि बदलेगी या नहीं विभाग तय करेगा।',
            'अंतर से स्वामित्व सीमा प्रभावित हो या विवाद रहे तो दीवानी उपाय/परिसीमा पर वकील से सलाह लें। KMC alignment record अपने आप स्वत्व घोषित या सीमा राहत सुनिश्चित नहीं करता।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Identify whether the discrepancy is in a revenue entry, cadastral map, on-ground survey, or digital display, and confirm the responsible authority and current process.',
        'Obtain current/previous certified maps and ROR records, the registered instrument, and an annotated explanation of the mismatch; apply under the verified correction/survey procedure.',
        'Pay only the current official survey or copying charge assessed for the requested service; retain the receipt and application reference.',
        'Attend any notified inspection or hearing and obtain the written report/order. Use the stated appeal route if dissatisfied; a map entry does not itself finally adjudicate title.'
      ],
      bn: [
        'অমিলটি রাজস্ব এন্ট্রি, cadastral ম্যাপ, মাঠের জরিপ নাকি ডিজিটাল display-তে তা নির্ধারণ করে দায়িত্বপ্রাপ্ত কর্তৃপক্ষ ও বর্তমান প্রক্রিয়া যাচাই করুন।',
        'বর্তমান/পুরনো প্রত্যয়িত ম্যাপ ও ROR, রেজিস্ট্রি দলিল এবং অমিলের চিহ্নিত ব্যাখ্যা নিয়ে যাচাইকৃত সংশোধন/জরিপ পদ্ধতিতে আবেদন করুন।',
        'চাওয়া পরিষেবার জন্য কর্তৃপক্ষ নির্ধারিত বর্তমান জরিপ/কপি চার্জই দিন; রসিদ ও আবেদন নম্বর রাখুন।',
        'নোটিশপ্রাপ্ত পরিদর্শন/শুনানিতে যান ও লিখিত প্রতিবেদন/আদেশ নিন। অসন্তুষ্ট হলে উল্লিখিত আপিলপথ নিন; ম্যাপ এন্ট্রি একা চূড়ান্ত স্বত্ব-বিচার নয়।'
      ],
      hi: [
        'पहचानें कि अंतर राजस्व प्रविष्टि, cadastral नक्शे, स्थल सर्वे या डिजिटल display में है और जिम्मेदार प्राधिकरण/वर्तमान प्रक्रिया की पुष्टि करें।',
        'वर्तमान/पुराने प्रमाणित नक्शे और ROR, पंजीकृत दस्तावेज तथा विसंगति का चिह्नित विवरण लेकर सत्यापित सुधार/सर्वे प्रक्रिया में आवेदन दें।',
        'मांगी गई सेवा के लिए सक्षम प्राधिकरण द्वारा वर्तमान में निर्धारित सर्वे/कॉपी शुल्क ही दें; रसीद और आवेदन संदर्भ रखें।',
        'सूचित निरीक्षण/सुनवाई में जाएं और लिखित रिपोर्ट/आदेश लें। असंतुष्ट हों तो बताई अपील प्रक्रिया अपनाएं; नक्शा प्रविष्टि स्वयं अंतिम स्वत्व निर्णय नहीं।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-24-1',
        name: { en: 'Relevant certified cadastral sheet or KMC alignment/assessment map, if applicable', bn: 'প্রযোজ্য ক্ষেত্রে সংশ্লিষ্ট প্রত্যয়িত cadastral sheet বা KMC alignment/assessment ম্যাপ', hi: 'जहां लागू हो संबंधित प्रमाणित cadastral sheet या KMC alignment/assessment नक्शा' },
        issuing_authority: { en: 'Competent DL&LRO/BL&LRO or KMC Survey & Valuation', bn: 'উপযুক্ত DL&LRO/BL&LRO বা KMC Survey & Valuation', hi: 'सक्षम DL&LRO/BL&LRO या KMC Survey & Valuation' },
        is_mandatory: false
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
    relevant_act: 'WBLR Act, 1955, secs 4B–4D (permission, restoration and offence) / Kolkata Municipal Corporation Act, 1980, secs 400–401 and applicable appeal provisions',
    summary: {
      en: 'Report alleged construction/use violations to the authority responsible for the land and structure. Districts may involve WBLR land-use permission/restoration and separate building-plan authorities; Kolkata follows KMC notice, hearing and order procedures. Complaints do not guarantee a stop-work or demolition order.',
      bn: 'নির্মাণ/ব্যবহারের কথিত লঙ্ঘন জমি ও কাঠামোর দায়িত্বপ্রাপ্ত কর্তৃপক্ষকে জানান। জেলায় WBLR ভূমি-ব্যবহার অনুমতি/পুনরুদ্ধার এবং পৃথক ভবন-নকশা কর্তৃপক্ষ জড়িত হতে পারে; কলকাতায় KMC-র নোটিশ, শুনানি ও আদেশের প্রক্রিয়া চলে। অভিযোগে কাজ বন্ধ/ভাঙার আদেশ নিশ্চিত নয়।',
      hi: 'निर्माण/उपयोग उल्लंघन की शिकायत भूमि और ढांचे के जिम्मेदार प्राधिकरण को दें। जिलों में WBLR भूमि-उपयोग अनुमति/बहाली और अलग भवन-योजना प्राधिकरण शामिल हो सकते हैं; कोलकाता में KMC नोटिस, सुनवाई और आदेश प्रक्रिया लागू है। शिकायत से रोक/ध्वस्तीकरण आदेश की गारंटी नहीं।'
    },
    authority_forum: {
      en: 'Collector/Revenue Officer for WBLR land-use proceedings and competent building authority / KMC Special Officer (Building) for KMC Act proceedings',
      bn: 'WBLR ভূমি-ব্যবহার বিষয়ে Collector/Revenue Officer ও উপযুক্ত ভবন কর্তৃপক্ষ / KMC Act প্রক্রিয়ায় KMC Special Officer (Building)',
      hi: 'WBLR भूमि-उपयोग कार्यवाही हेतु Collector/Revenue Officer और सक्षम भवन प्राधिकरण / KMC Act कार्यवाही में KMC Special Officer (Building)'
    },
    forum_type: 'BL_LRO',
    is_complex: true,
    official_portal_url: 'https://banglarbhumi.gov.in/',
    statutory_timeframe: {
      en: 'No general 30–60 working-day demolition period applies. Timing depends on notice, hearing, land-use permission, structure and any appeal/stay proceedings.',
      bn: '৩০–৬০ কার্যদিবসে ভাঙার কোনো সাধারণ সময়সীমা নেই। সময় নোটিশ, শুনানি, ভূমি-ব্যবহার অনুমতি, কাঠামো ও আপিল/স্থগিতাদেশের প্রক্রিয়ার উপর নির্ভর করে।',
      hi: '30–60 कार्यदिवस की कोई सामान्य ध्वस्तीकरण अवधि नहीं। समय नोटिस, सुनवाई, भूमि-उपयोग अनुमति, संरचना और अपील/स्थगन कार्यवाही पर निर्भर है।'
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
            'Obtain the current Record of Rights and identify the land’s settled/prior-use character, any section 4C permission or order, and the authority competent over the plot. Building sanction and land-use permission are separate approvals.',
            'Send a documented complaint/information to the Collector or authorized officer with the plot details, records, dated photographs and description of the alleged unauthorized change. Section 4C(5) permits the Collector, when its public-interest requirements are met, to order restoration within a specified time.',
            'A direction restraining ongoing acts may be considered under section 4C(4). Section 4D creates an offence for specified unauthorized change/violation and prosecution requires a written complaint by the Collector or authorized officer; neither stop-work nor prosecution is automatic on complaint.',
            'Ask the authority to consider the correct statutory process and hearing. Section 4C(6) regularization is limited to specified small plots and excludes waterbodies, subject to public-interest decision, prescribed fee and time restrictions; do not assume regularization or demolition is available.'
          ],
          bn: [
            'বর্তমান Record of Rights নিয়ে জমির settled/পূর্ব ব্যবহার, ধারা ৪সি-র অনুমতি/আদেশ এবং প্লটের উপযুক্ত কর্তৃপক্ষ যাচাই করুন। ভবন অনুমোদন ও ভূমি-ব্যবহার অনুমতি পৃথক।',
            'প্লটের তথ্য, রেকর্ড, তারিখসহ ছবি ও কথিত অননুমোদিত পরিবর্তনের বিবরণ দিয়ে Collector/ক্ষমতাপ্রাপ্ত আধিকারিককে প্রমাণসহ অভিযোগ দিন। জনস্বার্থের শর্ত পূরণ হলে ধারা ৪সি(৫)-এ Collector নির্দিষ্ট সময়ে পূর্ব চরিত্র ফিরিয়ে দেওয়ার আদেশ বিবেচনা করতে পারেন।',
            'চলমান কাজ রোধে ধারা ৪সি(৪)-এর নির্দেশ বিবেচিত হতে পারে। ধারা ৪ডি-তে নির্দিষ্ট অবৈধ পরিবর্তন/আদেশভঙ্গ অপরাধ; Collector বা ক্ষমতাপ্রাপ্ত আধিকারিকের লিখিত অভিযোগে প্রসিকিউশন হয়। অভিযোগে কাজ বন্ধ বা মামলা স্বয়ংক্রিয় নয়।',
            'সঠিক বিধিবদ্ধ প্রক্রিয়া ও শুনানি বিবেচনার অনুরোধ করুন। ধারা ৪সি(৬)-এর নিয়মিতকরণ নির্দিষ্ট ছোট প্লট, জলাশয়-বর্জন, জনস্বার্থ, নির্ধারিত ফি ও সময়সীমার উপর নির্ভর করে; নিয়মিতকরণ বা ভাঙা নিশ্চিত নয়।'
          ],
          hi: [
            'वर्तमान Record of Rights लें और भूमि का settled/पूर्व उपयोग, धारा 4C अनुमति/आदेश तथा प्लॉट का सक्षम प्राधिकरण जांचें। भवन स्वीकृति और भूमि-उपयोग अनुमति अलग मंजूरियां हैं।',
            'प्लॉट विवरण, रिकॉर्ड, तारीख वाली तस्वीरें और कथित अनधिकृत बदलाव का विवरण देकर Collector/अधिकृत अधिकारी को साक्ष्य सहित शिकायत दें। सार्वजनिक हित की शर्त पूरी होने पर धारा 4C(5) में Collector निर्दिष्ट समय में मूल चरित्र बहाली का आदेश विचार सकता है।',
            'जारी कार्य रोकने हेतु धारा 4C(4) का आदेश विचारणीय है। धारा 4D में निर्दिष्ट अनधिकृत बदलाव/आदेश उल्लंघन अपराध है; अभियोजन Collector/अधिकृत अधिकारी की लिखित शिकायत पर होता है। शिकायत से रोक या अभियोजन स्वतः नहीं।',
            'सही वैधानिक प्रक्रिया और सुनवाई अपनाने का अनुरोध करें। धारा 4C(6) नियमितीकरण सीमित छोटे प्लॉट, जल निकाय अपवाद, सार्वजनिक हित, निर्धारित शुल्क व समय-शर्तों के अधीन है; नियमितीकरण/ध्वस्तीकरण निश्चित नहीं।'
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
            'Confirm the premises is within KMC and identify the allegedly unauthorized work, sanctioned plan/building permit status and responsible KMC Building Department/Borough office. Submit a dated complaint with premises number, location and lawful evidence.',
            'The competent KMC officer may issue notice under the applicable provisions, including sections 401/400, and provide the statutory opportunity to show cause/hearing. A stop-work direction or police deployment is not automatic on complaint.',
            'Respond to notice and attend the hearing with approved plans, ownership/authority records and any permission or regularization material. The Special Officer decides under the applicable section and facts; demolition is not a guaranteed result.',
            'If an order is made, obtain its certified copy and follow the appeal route and deadline applicable to that order (including the Municipal Building Tribunal where provided). Seek interim relief separately if legally justified.'
          ],
          bn: [
            'প্রাঙ্গণ KMC-র অধীনে কি না এবং কথিত কাজ, অনুমোদিত নকশা/ভবন অনুমতি ও দায়িত্বপ্রাপ্ত KMC Building/Borough দপ্তর যাচাই করুন। প্রাঙ্গণ নম্বর, অবস্থান ও আইনসম্মত প্রমাণসহ তারিখযুক্ত অভিযোগ দিন।',
            'উপযুক্ত KMC আধিকারিক প্রযোজ্য ধারা—যেমন ৪০১/৪০০—অনুযায়ী নোটিশ ও কারণ দর্শানো/শুনানির সুযোগ দিতে পারেন। অভিযোগ করলেই কাজ বন্ধ বা পুলিশ মোতায়েন স্বয়ংক্রিয় নয়।',
            'নোটিশের জবাব দিয়ে অনুমোদিত নকশা, মালিকানা/ক্ষমতার নথি ও অনুমতি/নিয়মিতকরণ সংক্রান্ত প্রমাণসহ শুনানিতে যান। প্রযোজ্য ধারা ও তথ্য অনুযায়ী Special Officer সিদ্ধান্ত নেন; ভাঙার ফল নিশ্চিত নয়।',
            'আদেশ হলে প্রত্যয়িত কপি নিয়ে সেই আদেশে প্রযোজ্য আপিল-পথ ও সময়সীমা মানুন (যেখানে বলা আছে Municipal Building Tribunal-সহ)। আইনসম্মত ভিত্তি থাকলে অন্তর্বর্তী প্রতিকার আলাদাভাবে চান।'
          ],
          hi: [
            'पुष्टि करें कि परिसर KMC क्षेत्र में है और कथित कार्य, स्वीकृत योजना/भवन अनुमति तथा जिम्मेदार KMC Building/Borough कार्यालय पहचानें। परिसर नंबर, स्थान और वैध साक्ष्य सहित दिनांकित शिकायत दें।',
            'सक्षम KMC अधिकारी लागू प्रावधान, जैसे धारा 401/400, के तहत नोटिस और कारण बताने/सुनवाई का अवसर दे सकता है। शिकायत से रोक आदेश या पुलिस तैनाती स्वतः नहीं होती।',
            'नोटिस का जवाब देकर स्वीकृत योजना, स्वामित्व/प्राधिकरण रिकॉर्ड और अनुमति/regularization सामग्री के साथ सुनवाई में जाएं। Special Officer लागू धारा और तथ्यों पर निर्णय करेगा; ध्वस्तीकरण निश्चित नहीं।',
            'आदेश मिलने पर प्रमाणित प्रति लेकर उस आदेश पर लागू अपील मार्ग और समयसीमा अपनाएं (जहां लागू हो Municipal Building Tribunal सहित)। कानूनी आधार हो तो अंतरिम राहत अलग से मांगें।'
          ]
        }
      }
    },
    roadmap_steps: {
      en: [
        'Identify the property location and responsible land/building authority; obtain the current land record and any building/land-use permission relevant to the reported work.',
        'Prepare dated photographs, plot/premises details, available sanctioned plans or records, and a factual written complaint to the competent authority.',
        'Follow the notice, response and hearing process under the law applicable to the selected rural or Kolkata route; the authority determines what order, if any, is warranted.',
        'Obtain the written decision and, if aggrieved, use the appeal/review route and deadline stated by the applicable law/order; outcomes depend on the evidence and statutory test.'
      ],
      bn: [
        'সম্পত্তির অবস্থান ও দায়িত্বপ্রাপ্ত ভূমি/ভবন কর্তৃপক্ষ শনাক্ত করে কথিত কাজের সঙ্গে সম্পর্কিত বর্তমান ভূমি-রেকর্ড ও ভবন/ব্যবহার-অনুমতি নিন।',
        'তারিখযুক্ত ছবি, প্লট/প্রাঙ্গণ তথ্য, উপলভ্য অনুমোদিত নকশা/রেকর্ড এবং তথ্যভিত্তিক লিখিত অভিযোগ উপযুক্ত কর্তৃপক্ষের কাছে প্রস্তুত করুন।',
        'নির্বাচিত গ্রামীণ বা কলকাতা পথে প্রযোজ্য আইনের নোটিশ, জবাব ও শুনানি প্রক্রিয়া অনুসরণ করুন; কী আদেশ হবে তা কর্তৃপক্ষ নির্ধারণ করে।',
        'লিখিত সিদ্ধান্ত নিয়ে অসন্তুষ্ট হলে প্রযোজ্য আইন/আদেশের আপিল বা পর্যালোচনা-পথ ও সময়সীমা মানুন; ফল প্রমাণ ও বিধিবদ্ধ মানদণ্ডের উপর নির্ভর করে।'
      ],
      hi: [
        'संपत्ति का स्थान और जिम्मेदार भूमि/भवन प्राधिकरण पहचानें; कथित कार्य से संबंधित वर्तमान भूमि रिकॉर्ड और भवन/उपयोग अनुमति लें।',
        'तारीख वाली तस्वीरें, प्लॉट/परिसर विवरण, उपलब्ध स्वीकृत योजना/रिकॉर्ड और तथ्यात्मक लिखित शिकायत सक्षम प्राधिकरण को दें।',
        'चुने हुए ग्रामीण या कोलकाता मार्ग पर लागू कानून की नोटिस, जवाब और सुनवाई प्रक्रिया अपनाएं; आदेश देना है या नहीं प्राधिकरण तय करेगा।',
        'लिखित निर्णय लें और असंतुष्ट हों तो लागू कानून/आदेश की अपील/समीक्षा प्रक्रिया व अवधि अपनाएं; परिणाम साक्ष्य और वैधानिक कसौटी पर निर्भर है।'
      ]
    },
    required_documents: [
      {
        id: 'doc-land-25-1',
        name: { en: 'Available dated site photographs and relevant land/building records (as applicable)', bn: 'উপলভ্য তারিখযুক্ত স্থানের ছবি ও প্রাসঙ্গিক ভূমি/ভবন-নথি (প্রযোজ্য ক্ষেত্রে)', hi: 'उपलब्ध तारीख वाली स्थल तस्वीरें और संबंधित भूमि/भवन रिकॉर्ड (जहां लागू)' },
        issuing_authority: { en: 'Complainant / relevant record-issuing authority', bn: 'অভিযোগকারী / সংশ্লিষ্ট রেকর্ডদাতা কর্তৃপক্ষ', hi: 'शिकायतकर्ता / संबंधित रिकॉर्ड जारीकर्ता प्राधिकरण' },
        is_mandatory: false
      }
    ]
  }
];
