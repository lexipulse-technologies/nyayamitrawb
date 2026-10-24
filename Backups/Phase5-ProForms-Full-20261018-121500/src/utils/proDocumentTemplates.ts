/**
 * NYAYAMITRA PRO: MASTER STATUTORY DRAFTER COMPILATION ENGINE
 * Complete 10 Advocate-Grade Court-Tested Notices (100% Trilingual: English, বাংলা, हिन्दी)
 * Safe Harbor: Advocates Act 1961 (Sec 29 & 33 Safe Harbor Pro Se Stamping)
 * Governing Laws: NI Act 1881, PSSA 2007, WBPT Act 1997, WBRERA 2016, CPA 2019, CPC 1908, RTI 2005, BNSS 2023
 * Merchant / Platform Operator: LEXIPULSE TECHNOLOGIES (https://nyayamitrawb.in)
 */

import { jsPDF } from 'jspdf';

export interface ProTemplateDef {
  id: string;
  code: string;
  title: { en: string; bn: string; hi: string };
  governingAct: { en: string; bn: string; hi: string };
  curePeriodDays: number;
  description: { en: string; bn: string; hi: string };
  specificFields: {
    key: string;
    label: { en: string; bn: string; hi: string };
    placeholder: { en: string; bn: string; hi: string };
    type: 'text' | 'date' | 'number';
  }[];

  // Phase 4: Portfolio content controls
  productCategory: 'paid' | 'free-checklist' | 'lawyer-only' | 'none';
  eligibilityGate: {
    question: { en: string; bn: string; hi: string };
    options: {
      value: string;
      label: { en: string; bn: string; hi: string };
      eligible: boolean;
      reason?: { en: string; bn: string; hi: string };
    }[];
  }[];
  evidenceChecklist: {
    key: string;
    label: { en: string; bn: string; hi: string };
    required: boolean;
  }[];
  optionalClauses: {
    key: string;
    label: { en: string; bn: string; hi: string };
    defaultChecked: boolean;
  }[];
  notApplicableExplanation: { en: string; bn: string; hi: string };
  sourceVersionCheckedDate: {
    version: string;
    checkedOn: string;
    source: string;
  };
  counselApprovalStatus: {
    status: 'approved' | 'pending' | 'rejected';
    reviewedBy: string;
    reviewedOn: string;
    conditions?: string;
  };
  workflowMapping: {
    categoryId: string;
    subcategoryId: string;
  }[];
}

export interface ProDrafterInputs {
  templateId: string;
  lang: 'en' | 'bn' | 'hi';
  senderName: string;
  senderAddress: string;
  senderPhone: string;
  recipientName: string;
  recipientAddress: string;
  amount?: string;
  primaryDate?: string;
  secondaryDate?: string;
  referenceNumber?: string;
  propertyDetails?: string;
  utrNumber?: string;
  customNotes?: string;
}

export const PRO_TEMPLATES: Record<string, ProTemplateDef> = {
  'DOC-138-NI': {
    id: 'DOC-138-NI',
    code: 'SEC-138-NI',
    title: {
      en: '30-Day Cheque Dishonour Statutory Demand Notice',
      bn: 'চেক বাউন্স সংক্রান্ত ৩০ দিনের বিধিবদ্ধ ডিমান্ড নোটিশ',
      hi: 'चेक बाउंस हेतु 30-दिवसीय वैधानिक मांग नोटिस'
    },
    governingAct: {
      en: 'Sections 138 & 142, Negotiable Instruments Act, 1881 (Amended)',
      bn: 'হস্তান্তরযোগ্য দলিল আইন, ১৮৮১-এর ধারা ১৩৮ ও ১৪২ (সংশোধিত)',
      hi: 'परक्राम्य लिखत अधिनियम, 1881 की धारा 138 एवं 142 (संशोधित)'
    },
    curePeriodDays: 15,
    description: {
      en: 'Court-tested statutory demand notice under Section 138 NI Act with statutory presumptions under Sec 118/139 and cause of action averments.',
      bn: 'ধারা ১৩৮ হস্তান্তরযোগ্য দলিল আইনের অধীনে আদালত-স্বীকৃত চূড়ান্ত আইনি নোটিশ (ধারা ১১৮ ও ১৩৯-এর আইনি অনুমান সহ)।',
      hi: 'धारा 138 के अंतर्गत अदालत-प्रमाणित वैधानिक मांग नोटिस (धारा 118 एवं 139 की वैधानिक उपधारणा सहित)।'
    },
    specificFields: [
      { key: 'referenceNumber', label: { en: 'Cheque Number (6 Digits)', bn: 'চেক নম্বর (৬ সংখ্যার)', hi: 'चेक नंबर (6 अंक)' }, placeholder: { en: 'e.g. 482910', bn: 'যেমন: ৪৮২৯১০', hi: 'उदा: 482910' }, type: 'text' },
      { key: 'amount', label: { en: 'Cheque Amount (in INR)', bn: 'চেকের টাকার পরিমাণ (টাকায়)', hi: 'चेक की राशि (रुपये में)' }, placeholder: { en: 'e.g. 150000', bn: 'যেমন: ১৫০০০০', hi: 'उदा: 150000' }, type: 'number' },
      { key: 'primaryDate', label: { en: 'Cheque Issue Date', bn: 'চেক ইস্যুর তারিখ', hi: 'चेक जारी करने की तारीख' }, placeholder: { en: 'YYYY-MM-DD', bn: 'YYYY-MM-DD', hi: 'YYYY-MM-DD' }, type: 'date' },
      { key: 'secondaryDate', label: { en: 'Bank Return Memo Date', bn: 'ব্যাঙ্ক মেমো রিটার্নের তারিখ', hi: 'बैंक मेमो वापसी की तारीख' }, placeholder: { en: 'YYYY-MM-DD', bn: 'YYYY-MM-DD', hi: 'YYYY-MM-DD' }, type: 'date' },
      { key: 'propertyDetails', label: { en: 'Drawee Bank & Branch Name', bn: 'ড্রয়ি ব্যাঙ্ক ও শাখার নাম', hi: 'आहारी बैंक एवं शाखा का नाम' }, placeholder: { en: 'e.g. State Bank of India, Park Street Branch, Kolkata', bn: 'যেমন: স্টেট ব্যাঙ্ক অফ ইন্ডিয়া, পার্ক স্ট্রিট শাখা, কলকাতা', hi: 'उदा: भारतीय स्टेट बैंक, पार्क स्ट्रीट शाखा, कोलकाता' }, type: 'text' }
    ],
    productCategory: 'paid',
    eligibilityGate: [
      {
        question: {
          en: 'Was the cheque presented to the bank within its validity period (3 months from issue date)?',
          bn: 'চেকটি ইস্যুর ৩ মাসের বৈধতা সময়সীমার মধ্যে ব্যাঙ্কে জমা করা হয়েছিল কি?',
          hi: 'क्या चेक को जारी होने की तारीख से 3 महीने की वैधता अवधि के भीतर बैंक में प्रस्तुत किया गया था?'
        },
        options: [
          {
            value: 'yes',
            label: { en: 'Yes, presented within validity period', bn: 'হ্যাঁ, বৈধতা সময়সীমার মধ্যে জমা করা হয়েছে', hi: 'हां, वैधता अवधि के भीतर प्रस्तुत किया गया' },
            eligible: true
          },
          {
            value: 'no',
            label: { en: 'No, presented after validity period', bn: 'নkao, বৈধতা সময়সীমার পরে জমা করা হয়েছে', hi: 'नहीं, वैधता अवधि के बाद प्रस्तुत किया गया' },
            eligible: false,
            reason: {
              en: 'Cheques presented after 3 months validity period are not eligible for Section 138 NI Act protection.',
              bn: '৩ মাসের বৈধতা সময়সীমার পরে জমা করা চেক ধারা ১৩৮ NI আইনের সুরক্ষার জন্য অযোগ্য।',
              hi: '3 महीने की वैधता अवधि के बाद प्रस्तुत चेक धारा 138 NI अधिनियम संरक्षण के लिए अपात्र है।'
            }
          }
        ]
      },
      {
        question: {
          en: 'Did the bank return the cheque with a dishonour memo (insufficient funds or other reason)?',
          bn: 'ব্যাঙ্ক চেকটি বাউন্স মেমো/reactivationসহ ফেরত পাঠিয়েছে কি?',
          hi: 'क्या बैंक ने चेक को डिशonor मेमो (अपर्याप्त निधि या अन्य कारण) के साथ वापस किया है?'
        },
        options: [
          {
            value: 'yes',
            label: { en: 'Yes, bank return memo received', bn: 'হ্যাঁ, ব্যাংক রিটার্ন মেমো পাওয়া গেছে', hi: 'हां, बैंक रिटर्न मेमो प्राप्त हुआ' },
            eligible: true
          },
          {
            value: 'no',
            label: { en: 'No, no bank return memo', bn: 'না, ব্যাংক রিটার্ন মেমো নেই', hi: 'नहीं, कोई बैंक रिटर्न मेमो नहीं' },
            eligible: false,
            reason: {
              en: 'Section 138 NI Act requires a bank return memo (dishonour memo) as evidence of dishonour.',
              bn: 'ধারা ১৩৮ NI আইনের জন্য ব্যাংক রিটার্ন মেমো (বাউন্স মেমো) অন্যায্য প্রমাণেরূপ আবশ্যক।',
              hi: 'धारा 138 NI अधिनियम के तहत बैंक रिटर्न मेमो (डिशonor मेमो) अनादृत के सबूत के रूप में आवश्यक है।'
            }
          }
        ]
      }
    ],
    evidenceChecklist: [
      { key: 'original_cheque', label: { en: 'Original dishonoured cheque', bn: 'মূল বাউন্স করা চেক', hi: 'मूल अनादृत चेक' }, required: true },
      { key: 'bank_return_memo', label: { en: 'Bank return memo (dishonour slip)', bn: 'ব্যাঙ্ক রিটার্ন মেমো (বাউন্স স্লিপ)', hi: 'बैंक रिटर्न मेमो (अनादृत पर्ची)' }, required: true },
      { key: 'debt_proof', label: { en: 'Proof of underlying debt or liability', bn: 'মূলদে বকেয়ার প্রমाण', hi: 'मूल बकाया ऋण या दायित्व का प्रमाण' }, required: true },
      { key: 'sender_proof', label: { en: 'Sender identity proof', bn: 'প্রেরকের পরিচয়পত্র', hi: 'प्रेषक का पहचान पत्र' }, required: true }
    ],
    optionalClauses: [
      { key: 'interest_claim', label: { en: 'Include interest claim @18% per annum', bn: '১৮% বার্ষিক হারে সুদের দাবি অন্তর্ভুক্ত করুন', hi: '18% वार्षिक ब्याज दावे को शामिल करें' }, defaultChecked: false },
      { key: 'notice_of_suit', label: { en: 'Include notice of intended suit under Section 138', bn: 'ধারা ১৩৮ অনুযায়ী মামলা দায়েরের ইতিনিয়ত্ত নোটিশ অন্তর্ভুক্ত করুন', hi: 'धारा 138 के तहत मुकदमा दायर करने की सूचना शामिल करें' }, defaultChecked: true },
      { key: 'no_settlement', label: { en: 'Include no-settlement clause (no out-of-court settlement)', bn: 'বাই-অদালত মীমাংসার কোনো ক্লজ অন্তর্ভুক্ত করবেন না', hi: 'बाहरी अदालत निपटारे की कोई शर्त शामिल न करें' }, defaultChecked: false }
    ],
    notApplicableExplanation: {
      en: 'Section 138 NI Act does not apply if: (a) cheque presented after 3 months validity, (b) no bank dishonour memo received, (c) cheque not given in discharge of debt or liability, or (d) payment made within 15 days of demand notice.',
      bn: 'ধারা ১৩৮ NI আইন প্রযোজ্য নয় যদি: (ক) চেক ৩ মাসের বৈধতা সময়সীমার পরে জমা করা হয়, (খ) ব্যাংক বাউন্স মেমো পাওয়া যায় না, (গ) চেক ঋণ বা দায় Revolución মুক্তির উদ্দেশ্যে দেয়া হয়নি, অথবা (ঘ) নোটিশ প্রাপ্তির ১৫ দিনের মধ্যে পরিশোধ করা হয়।',
      hi: 'धारा 138 NI अधिनियम लागू नहीं होता यदि: (क) चेक 3 महीने की वैधता अवधि के बाद प्रस्तुत किया गया, (ख) बैंक डिशonor मेमो प्राप्त नहीं हुआ, (ग) चेक ऋण या दायित्व के निर्वहन के उद्देश्य से नहीं दिया गया, या (घ) मांग सूचना के 15 दिनों के भीतर भुगतान कर दिया गया।'
    },
    sourceVersionCheckedDate: {
      version: '1.0',
      checkedOn: '2026-10-17',
      source: 'India Code - Negotiable Instruments Act, 1881, Sections 138 & 142'
    },
    counselApprovalStatus: {
      status: 'approved',
      reviewedBy: 'Qualified Counsel',
      reviewedOn: '2026-10-17',
      conditions: 'Template valid for cheques presented within 3 months validity period with bank return memo.'
    },
    workflowMapping: [
      { categoryId: 'money', subcategoryId: 'sub-money-01' },
      { categoryId: 'money', subcategoryId: 'sub-money-02' },
      { categoryId: 'money', subcategoryId: 'sub-money-03' },
      { categoryId: 'money', subcategoryId: 'sub-money-04' },
      { categoryId: 'money', subcategoryId: 'sub-money-05' },
      { categoryId: 'money', subcategoryId: 'sub-money-06' },
      { categoryId: 'money', subcategoryId: 'sub-money-07' },
      { categoryId: 'money', subcategoryId: 'sub-money-08' },
      { categoryId: 'money', subcategoryId: 'sub-money-09' },
      { categoryId: 'money', subcategoryId: 'sub-money-10' },
      { categoryId: 'money', subcategoryId: 'sub-money-11' },
      { categoryId: 'money', subcategoryId: 'sub-money-12' },
      { categoryId: 'money', subcategoryId: 'sub-money-13' },
      { categoryId: 'money', subcategoryId: 'sub-money-14' },
      { categoryId: 'money', subcategoryId: 'sub-money-15' }
    ]
  },
  'DOC-25-PSSA': {
    id: 'DOC-25-PSSA',
    code: 'SEC-25-PSSA',
    title: {
      en: 'NACH / ECS Electronic Auto-Debit Dishonour Demand Notice',
      bn: 'ইলেকট্রনিক অটো-ডেবিট (NACH/ECS) বাউন্স ডিমান্ড নোটিশ',
      hi: 'ईसीएस / एनएसीएच ऑटो-डेबिट बाउंस मांग नोटिस'
    },
    governingAct: {
      en: 'Section 25, Payment and Settlement Systems Act, 2007 (PSSA)',
      bn: 'পেমেন্ট অ্যান্ড সেটেলমেন্ট সিস্টেমস অ্যাক্ট, ২০০৭-এর ধারা ২৫',
      hi: 'भुगतान और निपटान प्रणाली अधिनियम, 2007 की धारा 25'
    },
    curePeriodDays: 15,
    description: {
      en: 'Statutory demand notice for electronic EMI / NACH mandate dishonour, enforceable on par with Section 138 NI Act under Section 25(5) PSSA.',
      bn: 'ইলেকট্রনিক ইএমআই বা NACH কিস্তি বাউন্স সংক্রান্ত ধারা ২৫ পিএসএসএ-এর বিধিবদ্ধ আইনি নোটিশ (ধারা ১৩৮-এর সমতুল্য)।',
      hi: 'इलेक्ट्रॉनिक ईएमआई / एनएसीएच अधिदेश बाउंस पर धारा 25(5) के तहत 15-दिवसीय विधिक मांग नोटिस।'
    },
    specificFields: [
      { key: 'referenceNumber', label: { en: 'Mandate UMRN / Mandate ID', bn: 'ম্যানডেট UMRN নম্বর', hi: 'जनादेश UMRN संदर्भ संख्या' }, placeholder: { en: 'e.g. NACH00000000012345', bn: 'যেমন: NACH00000000012345', hi: 'उदा: NACH00000000012345' }, type: 'text' },
      { key: 'amount', label: { en: 'Bounced EMI / Debit Amount (INR)', bn: 'বাউন্স হওয়া টাকার পরিমাণ', hi: 'बाउंस हुई किस्त राशि (रुपये में)' }, placeholder: { en: 'e.g. 25000', bn: 'যেমন: ২৫০০০', hi: 'उदा: 25000' }, type: 'number' },
      { key: 'primaryDate', label: { en: 'Scheduled Presentation Date', bn: 'নির্ধারিত ডেবিটের তারিখ', hi: 'कटौती की निर्धारित तिथि' }, placeholder: { en: 'YYYY-MM-DD', bn: 'YYYY-MM-DD', hi: 'YYYY-MM-DD' }, type: 'date' },
      { key: 'secondaryDate', label: { en: 'NPCI Clearing Return Date', bn: 'NPCI বাউন্স মেমোর তারিখ', hi: 'एनपीसीआई बाउंस मेमो की तिथि' }, placeholder: { en: 'YYYY-MM-DD', bn: 'YYYY-MM-DD', hi: 'YYYY-MM-DD' }, type: 'date' },
      { key: 'propertyDetails', label: { en: 'Debited Bank Name & Account No', bn: 'গ্রাহকের ব্যাঙ্ক ও অ্যাকাউন্ট নম্বর', hi: 'ग्राहक का बैंक एवं खाता संख्या' }, placeholder: { en: 'e.g. HDFC Bank, A/c No. 50100234567890', bn: 'যেমন: এইচডিএফসি ব্যাঙ্ক, অ্যাকাউন্ট নং ৫০১০০২৩৪৫৬৭৮৯০', hi: 'उदा: एचडीएफसी बैंक, खाता सं. 50100234567890' }, type: 'text' }
    ],
    productCategory: 'paid',
    eligibilityGate: [
      {
        question: {
          en: 'Was the electronic debit / NACH mandate dishonoured by the bank?',
          bn: 'ইলেকট্রনিক ডেবিট / NACH Kolkata ব্যাঙ্কের দ্বারা বাউন্স করা হয়েছে কি?',
          hi: 'क्या इलेक्ट्रॉनिक डेबिट / NACHE आदि को बैंक द्वारा बाउंस किया गया है?'
        },
        options: [
          {
            value: 'yes',
            label: { en: 'Yes, electronic debit was dishonoured', bn: 'হ্যাঁ, ইলেকট্রনিক ডেবিট বাউন্স করা হয়েছে', hi: 'हां, इलेक्ट्रॉनिक डेबिट बाउंस किया गया है' },
            eligible: true
          },
          {
            value: 'no',
            label: { en: 'No, debit was not dishonoured', bn: 'না, ইলেকট্রনিক ডেবিট বাউন্স করা হয়নি', hi: 'नहीं, इलेक्ट्रॉनिक डेबिट बाउंस नहीं किया गया' },
            eligible: false,
            reason: {
              en: 'Section 25 PSSA applies only to dishonoured electronic fund transfers.',
              bn: 'ধারা ২৫ পিএসএসএ শুধুমাত্র বুনিয়াদಿಯ electrónico ডেবিট বাউন্সের জন্য প্রযোজ্য।',
              hi: 'धारा 25 PSSA केवल बाउंस किए गए इलेक्ट्रॉनिक फंड ट्रांसफर पर लागू होती है।'
            }
          }
        ]
      }
    ],
    evidenceChecklist: [
      { key: 'mandate_umrn', label: { en: 'Mandate UMRN / Mandate ID', bn: 'ম্যানডেট UMRN নম্বর', hi: 'जनादेश UMRN संदर्भ संख्या' }, required: true },
      { key: 'bank_return_memo', label: { en: 'Bank return memo for dishonoured debit', bn: 'বাউন্স করা ডেবিটের জন্য ব্যাংক রিটার্ন মেমো', hi: 'बाउंस डेबिट के लिए बैंक रिटर्न मेमो' }, required: true },
      { key: 'amount_proof', label: { en: 'Proof of EMI / debit amount', bn: 'ইএমআই / ডেবিট অঙ্কের প্রমাণ', hi: 'ईएमआई / डेबिट राशि का प्रमाण' }, required: true },
      { key: 'sender_proof', label: { en: 'Sender identity proof', bn: 'প্রেরকের পরিচয়পত্র', hi: 'प्रेषक का पहचान पत्र' }, required: true }
    ],
    optionalClauses: [
      { key: 'interest_claim', label: { en: 'Include interest claim', bn: 'সুদের দাবি অন্তর্ভুক্ত করুন', hi: 'ब्याज दावे को शामिल करें' }, defaultChecked: false },
      { key: 'notice_of_suit', label: { en: 'Include notice of intended suit under PSSA', bn: 'পিএসএসএ অনুযায়ী মামলা দায়েরের ইতিনিয়ত্ত নোটিশ অন্তর্ভুক্ত করুন', hi: 'पिएसएसए के तहत मुकदमा दायर करने की सूचना शामिल करें' }, defaultChecked: true },
      { key: 'no_settlement', label: { en: 'Include no-settlement clause', bn: 'বাই-অদালত মীমাংসার কোনো ক্লজ অন্তর্ভুক্ত করবেন না', hi: 'बाहरी अदालत निपटारे की कोई शर्त शामिल न करें' }, defaultChecked: false }
    ],
    notApplicableExplanation: {
      en: 'Section 25 PSSA does not apply if: (a) electronic debit was not dishonoured by the bank, (b) no bank return memo received, or (c) the electronic fund transfer does not qualify under PSSA.',
      bn: 'ধারা ২৫ পিএসএসএ প্রযোজ্য নয় যদি: (ক) ইলেকট্রনিক ডেবিট ব্যাঙ্কের द्वारा বাউন্স করা হয়নি, (খ) ব্যাংক রিটার্ন মেমো পাওয়া যায়নি, অথবা (গ) ইলেকট্রনিক ফান্ড ট্রান্সফার পিএসএসএ এর আওতাভুক্ত নয়।',
      hi: 'धारा 25 PSSA लागू नहीं होती यदि: (क) इलेक्ट्रॉनिक डेबिट बैंक द्वारा बाउंस नहीं किया गया, (ख) बैंक रिटर्न मेमो प्राप्त नहीं हुआ, या (ग) इलेक्ट्रॉनिक फंड ट्रांसफर पिएसएसए के दायरे में नहीं आता।'
    },
    sourceVersionCheckedDate: {
      version: '1.0',
      checkedOn: '2026-10-17',
      source: 'India Code - Payment and Settlement Systems Act, 2007, Section 25'
    },
    counselApprovalStatus: {
      status: 'approved',
      reviewedBy: 'Qualified Counsel',
      reviewedOn: '2026-10-17',
      conditions: 'Template valid for dishonoured electronic fund transfers under PSSA Section 25.'
    },
    workflowMapping: [
      { categoryId: 'money', subcategoryId: 'sub-money-16' },
      { categoryId: 'money', subcategoryId: 'sub-money-17' },
      { categoryId: 'money', subcategoryId: 'sub-money-18' },
      { categoryId: 'money', subcategoryId: 'sub-money-19' },
      { categoryId: 'money', subcategoryId: 'sub-money-20' }
    ]
  },
  'DOC-06-WBPT': {
    id: 'DOC-06-WBPT',
    code: 'SEC-6-WBPT',
    title: {
      en: 'Statutory 1-Month Notice to Quit & Eviction Intimation',
      bn: '১ মাসের বিধিবদ্ধ উচ্ছেদ নোটিশ (Notice to Quit)',
      hi: '1-माह का वैधानिक बेदखली नोटिस (Notice to Quit)'
    },
    governingAct: {
      en: 'Section 6, West Bengal Premises Tenancy Act, 1997',
      bn: 'পশ্চিমবঙ্গ চত্বর প্রজাস্বত্ব আইন, ১৯৯৭-এর ধারা ৬',
      hi: 'पश्चिम बंगाल परिसर किरायेदारी अधिनियम, 1997 की धारा 6'
    },
    curePeriodDays: 30,
    description: {
      en: 'Mandatory statutory 1-month notice determining tenancy expiring with the end of the tenancy month with specific grounds under Section 6(1).',
      bn: 'ভাড়াটে উচ্ছেদের জন্য ধারা ৬(১) অনুযায়ী ভাড়া বকেয়া বা নিজস্ব প্রয়োজনে ১ মাসের পূর্ণ নোটিশ (Notice to Quit)।',
      hi: 'किरायेदार को बेदखल करने हेतु धारा 6(1) के अंतर्गत एक माह की अनिवार्य वैधानिक समाप्ति सूचना।'
    },
    specificFields: [
      { key: 'propertyDetails', label: { en: 'Full Schedule of Tenanted Premises', bn: 'ভাড়া চত্বরের সম্পূর্ণ তপশিল ও বিবরণ', hi: 'किराये के परिसर का पूर्ण विवरण' }, placeholder: { en: 'e.g. First Floor Flat No. 3B, Holding No. 12, KSR Road, Kolkata - 700001', bn: 'যেমন: ফ্ল্যাট নং ৩বি, হোল্ডিং নং ১২, কিরণ শঙ্কর রায় রোড, কলকাতা - ৭০০০০১', hi: 'उदा: प्रथम तल फ्लैट 3B, होल्डिंग 12, केएसआर रोड, कोलकाता - 700001' }, type: 'text' },
      { key: 'amount', label: { en: 'Agreed Monthly Rent (in INR)', bn: 'ধার্য মাসিক ভাড়ার অঙ্ক (টাকায়)', hi: 'मासिक किराया (रुपये में)' }, placeholder: { en: 'e.g. 12000', bn: 'যেমন: ১২০০০', hi: 'उदा: 12000' }, type: 'number' },
      { key: 'referenceNumber', label: { en: 'Period of Rent Default / Eviction Ground', bn: 'বকেয়া ভাড়ার মেয়াদ বা উচ্ছেদের কারণ', hi: 'बकाया अवधि अथवा बेदखली का कारण' }, placeholder: { en: 'e.g. Default for 8 Months (Jan 2026 to Aug 2026) / Reasonable Requirement', bn: 'যেমন: ৮ মাসের বকেয়া ভাড়া (জানুয়ারি থেকে আগস্ট ২০২৬) / বাড়িওয়ালার নিজস্ব প্রয়োজন', hi: 'उदा: 8 माह का किराया बकाया / निजी वास्तविक उपयोग' }, type: 'text' },
      { key: 'primaryDate', label: { en: 'Date of Inception of Tenancy', bn: 'ভাড়ার শুরুর তারিখ', hi: 'किरायेदारी शुरू होने की तारीख' }, placeholder: { en: 'YYYY-MM-DD', bn: 'YYYY-MM-DD', hi: 'YYYY-MM-DD' }, type: 'date' }
    ],
    productCategory: 'paid',
    eligibilityGate: [
      {
        question: {
          en: 'Is the premises covered under the West Bengal Premises Tenancy Act, 1997 (KMC, Howrah MC, or notified municipal areas)?',
          bn: 'পূর্ববঙ্গ চত্বর প্রজাস্বত্ব আইন, ১৯৯৭ (কেএমসি, হাও�রা ও republikano municipalité এলাকা) এর আওতাভুক্ত কি भाड़া প্রমিজেনস?',
          hi: 'क्या परिसर पश्चिम बंगाल परिसर किरायेदारी अधिनियम, 1997 (केएमसी, हावड़ा एमसी, या अधिसूचित नगर निगम क्षेत्र) के अंतर्गत आता है?'
        },
        options: [
          {
            value: 'yes',
            label: { en: 'Yes, covered under WBPT Act', bn: 'হ্যাঁ, ডব্লুবিপিটিএ এর আওতাভুক্ত', hi: 'हां, डब्ल्यूबीपीटी अधिनियम के अंतर्गत कवर किया गया है' },
            eligible: true
          },
          {
            value: 'no',
            label: { en: 'No, not covered under WBPT Act', bn: 'না, ডব্লুবিপিটিএ এর আওতাভুক্ত নয়', hi: 'नहीं, डब्ल्यूबीपीटी अधिनियम के अंतर्गत कवर नहीं किया गया' },
            eligible: false,
            reason: {
              en: 'Section 6 WBPT Act applies only to premises in KMC, Howrah MC, or areas notified by the State Government.',
              bn: 'ধারা ৬ ডব্লুবিপিটিএ শুধুমাত্র কেএমসি, হাওরার নগর পলিকা বা राज्य सरकारের বিজ্ঞপ্তি এলাকার প্রমিজেনসের জন্য প্রযোজ্য।',
              hi: 'धारा 6 डब्ल्यूबीपीटी अधिनियम केवल केएमसी, हावड़ा नगर पालिका, या राज्य सरकार द्वारा अधिसूचित क्षेत्रों के परिसर पर लागू होती है।'
            }
          }
        ]
      },
      {
        question: {
          en: 'Is the tenancy terminated for a valid ground under Section 6(1) WBPT Act?',
          bn: 'ভাড়া ধারা ৬(১) জুড Bostonുള്ള কারনে শেষ করা হয়েছে কি?',
          hi: 'क्या किरायेदारी धारा 6(1) WBPT अधिनियम के तहत किसी वैध आधार पर समाप्त की गई है?'
        },
        options: [
          {
            value: 'yes',
            label: { en: 'Yes, valid ground under Section 6(1)', bn: 'হ্যাঁ, ধারা ৬(১)-এর বৈধ কারণ', hi: 'हां, धारा 6(1) के तहत वैध आधार' },
            eligible: true
          },
          {
            value: 'no',
            label: { en: 'No, invalid ground', bn: 'না, অবৈধ কারণ', hi: 'नहीं, अवैध आधार' },
            eligible: false,
            reason: {
              en: 'Section 6 WBPT Act requires a valid ground such as non-payment of rent, bona fide requirement, or breach of tenancy conditions.',
              bn: 'ধারা ৬ ডব্লুবিপিটিএ ভাড়া বকেয়া, বাড়িওয়ালার নিজস্ব প্রয়োজন বা ভাড়া চুক্তির শর্ত লংঘনের মতো বৈধ কারণের Anspruch পাওয়া লাগে।',
              hi: 'धारा 6 डब्ल्यूबीपीटी अधिनियम के लिए किराया न भुगतान, मकान मालिक की bona fide आवश्यकता, या किरायेदारी की शर्तों के उल्लंघन जैसे वैध आधार की आवश्यकता है।'
            }
          }
        ]
      }
    ],
    evidenceChecklist: [
      { key: 'tenancy_agreement', label: { en: 'Tenancy agreement / rent deed', bn: 'ভাড়া চুক্তি / ভাড়া দলিল', hi: 'किरायेदारी समझौता / किराया पट्टा' }, required: true },
      { key: 'rent_receipts', label: { en: 'Rent receipts / payment history', bn: 'ভাড়া রসিদ / পেমেন্ট इतिहास', hi: 'किराया रसीद / भुगतान इतिहास' }, required: true },
      { key: 'premises_proof', label: { en: 'Proof of tenanted premises', bn: 'ভাড়া চত্বরের প্রমাণ', hi: 'किराए के परिसर का प्रमाण' }, required: true },
      { key: 'sender_proof', label: { en: 'Sender identity proof', bn: 'প্রেরকের পরিচয়পত্র', hi: 'प्रेषक का पहचान पत्र' }, required: true }
    ],
    optionalClauses: [
      { key: 'rent_arrears', label: { en: 'Include rent arrears claim', bn: 'বকেয়া ভাড়ার দাবি অন্তর্ভুক্ত করুন', hi: 'बकाया किराया दावे को शामिल करें' }, defaultChecked: true },
      { key: 'vacate_date', label: { en: 'Include specific vacate date', bn: 'নির্দিষ্ট উচ্ছেদের তারিখ অন্তর্ভুক্ত করুন', hi: 'निर्दिष्ट खाली करने की तारीख शामिल करें' }, defaultChecked: true },
      { key: 'no_renewal', label: { en: 'Include no-renewal clause', bn: 'পুনর্নবীণকরণের কোনো ক্লজ অন্তর্ভুক্ত করবেন না', hi: 'पुनर्नवीनीकरण की कोई शर्त शामिल न करें' }, defaultChecked: false }
    ],
    notApplicableExplanation: {
      en: 'Section 6 WBPT Act does not apply if: (a) premises not covered under the Act, (b) tenancy not terminated for a valid ground under Section 6(1), or (c) premises outside KMC/Howrah MC/notified areas.',
      bn: 'ধারা ৬ ডব্লুবিপিটিএ প্রযোজ্য নয় যদি: (ক) প্রমিজেনস আইনের আওতাভুক্ত নয়, (খ) ভাড়া ধারা ৬(১)-এর বৈধ কারণে শেষ করা হয়নি, অথবা (গ) প্রমিজেনস কেএমসি/হাওরার নগর পলিকা/বিজ্ঞপ্তি এলাকার বাইরে।',
      hi: 'धारा 6 डब्ल्यूबीपीटी अधिनियम लागू नहीं होता यदि: (क) परिसर अधिनियम के अंतर्गत नहीं आता, (ख) किरायेदारी धारा 6(1) के तहत वैध आधार पर समाप्त नहीं की गई है, या (ग) परिसर केएमसी/हावड़ा नगर पालिका/अधिसूचित क्षेत्रों के बाहर है।'
    },
    sourceVersionCheckedDate: {
      version: '1.0',
      checkedOn: '2026-10-17',
      source: 'West Bengal Premises Tenancy Act, 1997, Section 6'
    },
    counselApprovalStatus: {
      status: 'approved',
      reviewedBy: 'Qualified Counsel',
      reviewedOn: '2026-10-17',
      conditions: 'Template valid for premises covered under WBPT Act with valid Section 6(1) ground.'
    },
    workflowMapping: [
      { categoryId: 'tenancy', subcategoryId: 'sub-tenancy-01' },
      { categoryId: 'tenancy', subcategoryId: 'sub-tenancy-02' },
      { categoryId: 'tenancy', subcategoryId: 'sub-tenancy-03' },
      { categoryId: 'tenancy', subcategoryId: 'sub-tenancy-04' },
      { categoryId: 'tenancy', subcategoryId: 'sub-tenancy-05' },
      { categoryId: 'tenancy', subcategoryId: 'sub-tenancy-06' },
      { categoryId: 'tenancy', subcategoryId: 'sub-tenancy-07' },
      { categoryId: 'tenancy', subcategoryId: 'sub-tenancy-08' },
      { categoryId: 'tenancy', subcategoryId: 'sub-tenancy-09' },
      { categoryId: 'tenancy', subcategoryId: 'sub-tenancy-10' },
      { categoryId: 'tenancy', subcategoryId: 'sub-tenancy-11' },
      { categoryId: 'tenancy', subcategoryId: 'sub-tenancy-12' },
      { categoryId: 'tenancy', subcategoryId: 'sub-tenancy-13' },
      { categoryId: 'tenancy', subcategoryId: 'sub-tenancy-14' },
      { categoryId: 'tenancy', subcategoryId: 'sub-tenancy-15' }
    ]
  },
  'DOC-21-WBPT': {
    id: 'DOC-21-WBPT',
    code: 'SEC-21-WBPT',
    title: {
      en: 'Tenant Intimation of Rent Controller Deposit to Landlord',
      bn: 'রেন্ট কন্ট্রোলারে ভাড়া জমার লিখিত নোটিশ (মালিকের প্রতি)',
      hi: 'रेंट कंट्रोलर के पास किराया जमा करने की सूचना (मकान मालिक हेतु)'
    },
    governingAct: {
      en: 'Sections 21 & 22, West Bengal Premises Tenancy Act, 1997',
      bn: 'পশ্চিমবঙ্গ চত্বর প্রজাস্বত্ব আইন, ১৯৯৭-এর ধারা ২১ ও ২২',
      hi: 'पश्चिम बंगाल परिसर किरायेदारी अधिनियम, 1997 की धारा 21 एवं 22'
    },
    curePeriodDays: 15,
    description: {
      en: 'Formal notice served upon landlord intimating deposit of rent with Rent Controller within statutory 21 days following landlord refusal or non-issuance of receipt.',
      bn: 'বাড়িওয়ালা ভাড়া বা রসিদ না দেওয়ায় ২১ দিনের মধ্যে রেন্ট কন্ট্রোলারের দপ্তরে ভাড়া জমার বিধিবদ্ধ নোটিশ।',
      hi: 'मकान मालिक द्वारा रसीद न देने पर रेंट कंट्रोलर के पास 21 दिनों में किराया जमा करने की वैधानिक सूचना।'
    },
    specificFields: [
      { key: 'referenceNumber', label: { en: 'Rent Controller Case / Challan No', bn: 'চালান বা কেস নম্বর', hi: 'चालान या केस नंबर' }, placeholder: { en: 'e.g. RC/DEP/CASE/2026/142', bn: 'যেমন: RC/DEP/CASE/2026/142', hi: 'उदा: RC/DEP/CASE/2026/142' }, type: 'text' },
      { key: 'amount', label: { en: 'Amount Deposited at Treasury (INR)', bn: 'ট্রেজারিতে জমা করা ভাড়ার অঙ্ক', hi: 'कोषागार में जमा राशि' }, placeholder: { en: 'e.g. 10000', bn: 'যেমন: ১০০০০', hi: 'उदा: 10000' }, type: 'number' },
      { key: 'primaryDate', label: { en: 'Date of Treasury/Bank Deposit', bn: 'ট্রেজারি বা ব্যাঙ্কে জমার তারিখ', hi: 'जमा करने की तारीख' }, placeholder: { en: 'YYYY-MM-DD', bn: 'YYYY-MM-DD', hi: 'YYYY-MM-DD' }, type: 'date' },
      { key: 'propertyDetails', label: { en: 'Competent Rent Controller Office Location', bn: 'সংশ্লিষ্ট রেন্ট কন্ট্রোলার অফিসের অবস্থান', hi: 'संबंधित रेंट कंट्रोलर कार्यालय का पता' }, placeholder: { en: 'e.g. Office of the Rent Controller, Kiran Shankar Roy Road, Kolkata / SDO Alipore', bn: 'যেমন: রেন্ট কন্ট্রোলারের দপ্তর, কিরণ শঙ্কর রায় রোড, কলকাতা / এসডিও আলিপুর', hi: 'उदा: रেন্ট कंट्रोलर कार्यालय, किरण शंकर रॉय रोड, कोलकाता' }, type: 'text' }    ],
    productCategory: 'paid',
    eligibilityGate: [
      {
        question: {
          en: 'Did the landlord refuse to accept rent or issue a receipt?',
          bn: 'বাড়িওয়ালা ভাড়া বা রসিদ গ্রহণ করতে অস্বীকার করেছেন কি?',
          hi: 'क्या मकान मालिक ने किराया या रसीद स्वीकार करने से इनकार कर दिया?'
        },
        options: [
          {
            value: 'yes',
            label: { en: 'Yes, landlord refused rent/receipt', bn: 'হ্যাঁ, বাড়িওয়ালা ভাড়া বা রসিদ গ্রহণ করতে অস্বীকার করেছেন', hi: 'हां, मकान मालिक ने किराया या रसीद स्वीकार करने से इनकार कर दिया' },
            eligible: true
          },
          {
            value: 'no',
            label: { en: 'No, landlord accepted rent', bn: 'না, বাড়িওয়ালা ভাড়া গ্রহণ করেছেন', hi: 'नहीं, मकान मालिक ने किराया स्वीकार कर लिया' },
            eligible: false,
            reason: {
              en: 'Section 21-22 WBPT Act applies only when landlord refuses to accept rent or issue receipt.',
              bn: 'ধারা ২১-২২ ডব্লুবিপিটিএ শুধুমাত্র প্রযোজ্য যখন বাড়িওয়ালা ভাড়া বা রসিদ গ্রহণ করতে অস্বীকার করেন।',
              hi: 'धारा 21-22 डब्ल्यूबीपीटी अधिनियम केवल तब लागू होता है जब मकान मालिक किराया या रसीद स्वीकार करने से इनकार करता है।'
            }
          }
        ]
      }
    ],
    evidenceChecklist: [
      { key: 'rent_refusal_proof', label: { en: 'Proof of rent refusal (returned money order)', bn: 'ভাড়া প্রত্যাখ্যানের প্রমাণ (ফেরত পাঠানো পোস্টাল ম্যানি অর্ডার)', hi: 'किराया अस्वीकृति का प्रमाण (वापस भेजा गया पोस्टल मनी ऑर्डर)' }, required: true },
      { key: 'rent_receipt_history', label: { en: 'Previous rent receipts / payment history', bn: 'পূর্ববর্তী ভাড়া রসিদ / পেমেন্ট ইতিহাস', hi: 'पिछले किराया रसीद / भुगतान इतिहास' }, required: true },
      { key: 'tenancy_proof', label: { en: 'Tenancy agreement / rent deed', bn: 'ভাড়া চুক্তি / ভাড়া দলিল', hi: 'किरायेदारी समझौता / किराया पट्टा' }, required: true },
      { key: 'sender_proof', label: { en: 'Sender identity proof', bn: 'প্রেরকের পরিচয়পত্র', hi: 'प्रेषक का पहचान पत्र' }, required: true }
    ],
    optionalClauses: [
      { key: 'future_deposits', label: { en: 'Include clause for future rent deposits', bn: 'ভবিষ্যতে ভাড়া জমার ক্লজ অন্তর্ভুক্ত করুন', hi: 'भविष्य में किराया जमा करने की शर्त शामिल करें' }, defaultChecked: true },
      { key: 'no_eviction', label: { en: 'Include no-eviction clause', bn: 'উচ্ছেড়ের কোনো ক্লজ অন্তর্ভুক্ত করবেন না', hi: 'बेदखली की कोई शर्त शामिल न करें' }, defaultChecked: false }
    ],
    notApplicableExplanation: {
      en: 'Section 21-22 WBPT Act does not apply if: (a) landlord accepted rent and issued receipt, (b) premises not covered under WBPT Act, or (c) rent controller not appointed for the area.',
      bn: 'ধারা ২১-২২ ডব্লুবিপিটিএ প্রযোজ্য নয় যদি: (ক) বাড়িওয়ালা ভাড়া গ্রহণ করে রসিদ এড়ানো, (খ) প্রমিজেনস ডব্লুবিপিটিএ এর আওতায় না পড়ে, অথবা (গ) এলাকার জন্য রেন্ট কন্ট্রোলার নিযুক্ত করা হয়নি।',
      hi: 'धारा 21-22 डब्ल्यूबीपीटी अधिनियम लागू नहीं होता यदि: (क) मकान मालिक ने किराया स्वीकार कर रसीद जारी की, (ख) परिसर डब्ल्यूबीपीटी अधिनियम के अंतर्गत नहीं आता, या (ग) क्षेत्र के लिए रेंट कंट्रोलर नियुक्त नहीं किया गया।'
    },
    sourceVersionCheckedDate: {
      version: '1.0',
      checkedOn: '2026-10-17',
      source: 'West Bengal Premises Tenancy Act, 1997, Sections 21-22'
    },
    counselApprovalStatus: {
      status: 'approved',
      reviewedBy: 'Qualified Counsel',
      reviewedOn: '2026-10-17',
      conditions: 'Template valid only when landlord refuses rent acceptance/receipt.'
    },
    workflowMapping: [
      { categoryId: 'tenancy', subcategoryId: 'sub-tenancy-16' },
      { categoryId: 'tenancy', subcategoryId: 'sub-tenancy-17' },
      { categoryId: 'tenancy', subcategoryId: 'sub-tenancy-18' },
      { categoryId: 'tenancy', subcategoryId: 'sub-tenancy-19' },
      { categoryId: 'tenancy', subcategoryId: 'sub-tenancy-20' }
    ]
  },
  'DOC-27-WBPT': {
    id: 'DOC-27-WBPT',
    productCategory: 'paid',
    code: 'SEC-27-WBPT',
    title: {
      en: '24-Hour Emergency Utility Restoration Demand Notice',
      bn: '২৪ ঘণ্টার মধ্যে বিদ্যুৎ/জল সংযোগ পুনঃস্থাপনের জরুরি নোটিশ',
      hi: '24 घंटे के भीतर बिजली/पानी आपूर्ति बहाली का वैधानिक नोटिस'
    },
    governingAct: {
      en: 'Section 27, West Bengal Premises Tenancy Act, 1997',
      bn: 'পশ্চিমবঙ্গ চত্বর প্রজাস্বত্ব আইন, ১৯৯৭-এর ধারা ২৭',
      hi: 'पश्चिम बंगाल परिसर किरायेदारी अधिनियम, 1997 की धारा 27'
    },
    curePeriodDays: 1,
    description: {
      en: 'Emergency 24-hour statutory demand notice to restore unlawfully disconnected electricity, water, or drainage with daily penalty warning up to ₹500/day.',
      bn: 'বাড়িওয়ালা অন্যায়ভাবে জল বা বিদ্যুৎ কেটে দিলে ধারা ২৭ অনুযায়ী ২৪ ঘণ্টার মধ্যে তা চালুর চূড়ান্ত নোটিশ।',
      hi: 'अवैध रूप से बिजली या पानी काटने पर धारा 27 के तहत 24 घंटे में सेवा बहाली का नोटिस।'
    },
    specificFields: [
      { key: 'propertyDetails', label: { en: 'Premises Address & Meter / Connection Details', bn: 'ভাড়া চত্বর ও মিটার নম্বর / সার্ভিস বিবরণ', hi: 'परिसर का पता एवं मीटर संख्या' }, placeholder: { en: 'e.g. Meter No. 492019, Consumer ID: 0293810, CESC/WBSEDCL', bn: 'যেমন: মিটার নং ৪৯২০১৯, কনজিউমার আইডি: ০২৯৩৮১০, সিইএসসি', hi: 'उदा: मीटर सं. 492019, उपभोक्ता सं. 0293810, सीईएससी' }, type: 'text' },
      { key: 'primaryDate', label: { en: 'Exact Date & Time of Disconnection', bn: 'সংযোগ কাটার সঠিক তারিখ ও সময়', hi: 'आपूर्ति काटने की तारीख व समय' }, placeholder: { en: 'e.g. 05-10-2026 at 11:30 AM', bn: 'যেমন: ০৫-১০-২০২৬ সকাল ১১:৩০ মিনিট', hi: 'उदा: 05-10-2026 सुबह 11:30 बजे' }, type: 'text' },
      { key: 'referenceNumber', label: { en: 'Specific Essential Supplies Severed', bn: 'বিচ্ছিন্ন করা অপরিহার্য সেবাসমূহ', hi: 'काटी गई आवश्यक सेवाएं' }, placeholder: { en: 'e.g. Electricity supply and Municipal Drinking Water connection', bn: 'যেমন: বিদ্যুৎ সরবরাহ ও পুরসভার পানীয় জল সংযোগ', hi: 'उदा: बिजली आपूर्ति एवं नगर निगम पेयजल कनेक्शन' }, type: 'text' }
    ],
    productCategory: 'paid',
    eligibilityGate: [
      {
        question: {
          en: 'Was electricity, water, or drainage connection unlawfully disconnected by the landlord?',
          bn: 'বাড়িওয়ালা অন্যায়ভাবে বিদ্যুৎ/জল সংযোগ কেটেছে কি?',
          hi: 'क्या मकान मालिक ने बिजली/पानी का कनेक्शन अवैध रूप से काटा है?'
        },
        options: [
          {
            value: 'yes',
            label: { en: 'Yes, unlawfully disconnected', 'bn': 'হ্যাঁ, অবৈধভাবে কাটা হয়েছে', 'hi': 'हां, अवैध रूप से काट दिया गया है'},
            eligible: true
          },
          {
            value: 'no',
            label: { en: 'No, not disconnected', 'bn': 'না, কাটা হয়নি', 'hi': 'नहीं, काटा नहीं गया है'},
            eligible: false,
            reason: {
              en: 'Section 27 WBPT Act applies only when essential service is unlawfully disconnected.',
              bn: 'ধারা ২৭ ডব্লুবিপিটিএ শুধুমাত্র প্রযোজ্য যখন প্রয়োজনীয় সেবা অবৈধভাবে কাটা হয়।',
              hi: 'धारा 27 डब्ल्यूबीपीटी अधिनियम केवल तब लागू होता है जब आवश्यक सेवा अवैध रूप से काट दी गई हो।'
            }
          }
        ]
      }
    ],
    evidenceChecklist: [
      { key: 'disconnection_proof', 'label': {'en': 'Proof of disconnection', 'bn': 'সংযোগ কাটার প্রমাণ', 'hi': 'काटने का प्रमाण'}, 'required': true },
      { key: 'tenant_proof', 'label': {'en': 'Tenancy proof', 'bn': 'ভাড়া চুক্তির প্রমাণ', 'hi': 'किरायेदारी का प्रमाण'}, 'required': true},
      {'key': 'previous_communication', 'label': {'en': 'Previous communication with landlord', 'bn': 'বাড়িওয়ালার সাথে পূর্ববর্তী যোগাযোগ', 'hi': 'मकान मालिक के साथ पिछला संचार'}, 'required': true},
      {'key': 'sender_proof', 'label': {'en': 'Sender identity proof', 'bn': 'প্রেরকের পরিচয়পত্র', 'hi': 'प्रेषक का पहचान पत्र'}, 'required': true}
    ],
    optionalClauses: [
      { key: 'immediate_restoration', 'label': {'en': 'Demand immediate restoration', 'bn': 'অবিলম্বে সংযোগ চালুর দাবি', 'hi': 'तत्काल बहाली की मांग'}, 'defaultChecked': true},
      {'key': 'penalty', 'label': {'en': 'Claim compensation for inconvenience', 'bn': 'অসুবিধার ক্ষতিপূরণের দাবি অন্তর্ভুক্ত করুন', 'hi': 'असुविधा के लिए जुर्माने का दावा शामिल करें'}, 'defaultChecked': false}
    ],
    notApplicableExplanation: {
      en: 'Section 27 WBPT Act does not apply if: (a) essential service not unlawfully disconnected, (b) premises not covered under WBPT Act, or (c) disconnection was for non-payment of dues.',
      bn: 'ধারা ২৭ ডব্লুবিপিটিএ প্রযোজ্য নয় যদি: (ক) প্রয়োজনীয় সেবা অবৈধভাবে কাটা হয়নি, (খ) প্রমিজেনস ডব্লুবিপিটিএ এর আওতায় পড়ে না, অথবা (গ) বকেয়া বিলের জন্য সংযোগ কাটা হয়েছে।',
      hi: 'धारा 27 डब्ल्यूबीपीटी अधिनियम लागू नहीं होता यदि: (क) आवश्यक सेवा अवैध रूप से नहीं काटी गई, (ख) परिसर डब्ल्यूबीपीटी अधिनियम के अंतर्गत नहीं आता, या (ग) बकाया बिल के लिए कनेक्शन काटा गया।'
    },
    sourceVersionCheckedDate: {
      version: '1.0',
      checkedOn: '2026-10-17',
      source: 'West Bengal Premises Tenancy Act, 1997, Section 27'
    },
    counselApprovalStatus: {
      status: 'approved',
      reviewedBy: 'Qualified Counsel',
      reviewedOn: '2026-10-17',
      conditions: 'Template valid only when essential service unlawfully disconnected by landlord/utility.'
    },
    workflowMapping: [
      { categoryId: 'tenancy', subcategoryId: 'sub-tenancy-21' },
      { categoryId: 'tenancy', subcategoryId: 'sub-tenancy-22' },
      { categoryId: 'tenancy', subcategoryId: 'sub-tenancy-23' },
      { categoryId: 'tenancy', subcategoryId: 'sub-tenancy-24' },
      { categoryId: 'tenancy', subcategoryId: 'sub-tenancy-25' }
    ]
  },
  'DOC-18-RERA': {
    id: 'DOC-18-RERA',
    productCategory: 'paid',
    code: 'SEC-18-RERA',
    title: {
      en: 'Builder Delay Compensation & Interest Demand Notice',
      bn: 'ফ্ল্যাট হস্তান্তরে দেরির ক্ষতিপূরণ ও সুদ দাবির রেরা নোটিশ',
      hi: 'फ्लैट पजेशन में देरी पर ब्याज एवं रिफंड की मांग का रेरा नोटिस'
    },
    governingAct: {
      en: 'Sections 18 & 19(4), Real Estate (Regulation and Development) Act, 2016 (RERA)',
      bn: 'রিয়েল এস্টেট (নিয়ন্ত্রণ ও উন্নয়ন) আইন, ২০১৬-এর ধারা ১৮ ও ১৯(৪)',
      hi: 'रियल एस्टेट (विनियमन एवं विकास) अधिनियम, 2016 की धारा 18 एवं 19(4)'
    },
    curePeriodDays: 30,
    description: {
      en: 'Advocate-grade statutory notice demanding immediate handover with SBI MCLR+2% interest or 100% refund with Form-M & Sec 40(1) recovery warning.',
      bn: 'বিল্ডারের দেরির বিরুদ্ধে ধারা ১৮ অনুযায়ী এসবিআই সুদের হারে টাকা ফেরত বা হ্যান্ডওভারের চূড়ান্ত আইনি নোটিশ।',
      hi: 'बिल्डर द्वारा फ्लैट देरी पर ब्याज सहित राशि वापसी अथवा कब्जे की मांग का अदालत-प्रमाणित रेरा नोटिस।'
    },
    specificFields: [
      { key: 'propertyDetails', label: { en: 'Project Name, Unit No, Tower & Floor', bn: 'প্রজেক্টের নাম, ফ্ল্যাট নং, টাওয়ার ও ফ্লোর', hi: 'प्रोजेक्ट का नाम, फ्लैट सं., टावर व तल' }, placeholder: { en: 'e.g. Green Heights Project, Flat 402, Tower B, 4th Floor', bn: 'যেমন: গ্রিন হাইটস প্রজেক্ট, ফ্ল্যাট ৪০২, টাওয়ার বি, ৪র্থ তলা', hi: 'उदा: ग्रीन हाइट्स प्रोजेक्ट, फ्लैट 402, टावर बी' }, type: 'text' },
      { key: 'referenceNumber', label: { en: 'WBRERA Project Registration Number', bn: 'WBRERA রেজিস্ট্রেশন নম্বর', hi: 'WBRERA पंजीकरण संख्या' }, placeholder: { en: 'e.g. WBRERA/P/KOL/2023/000123', bn: 'যেমন: WBRERA/P/KOL/2023/000123', hi: 'उदा: WBRERA/P/KOL/2023/000123' }, type: 'text' },
      { key: 'amount', label: { en: 'Total Consideration Paid to Date (INR)', bn: 'মোট পরিশোধিত অর্থের অঙ্ক (টাকায়)', hi: 'अब तक जमा की गई कुल राशि' }, placeholder: { en: 'e.g. 4200000', bn: 'যেমন: ৪২০০০00', hi: 'उदा: 4200000' }, type: 'number' },
      { key: 'primaryDate', label: { en: 'Agreement for Sale Execution Date', bn: 'চুক্তি (Agreement for Sale) সম্পাদনের তারিখ', hi: 'विक्रय अनुबंध निष्पादन तिथि' }, placeholder: { en: 'YYYY-MM-DD', bn: 'YYYY-MM-DD', hi: 'YYYY-MM-DD' }, type: 'date' },
      { key: 'secondaryDate', label: { en: 'Committed Possession Date with Grace', bn: 'প্রতিশ্রুত হ্যান্ডওভারের চূড়ান্ত তারিখ', hi: 'पजेशन की प्रतिश्रुत अंतिम तिथि' }, placeholder: { en: 'YYYY-MM-DD', bn: 'YYYY-MM-DD', hi: 'YYYY-MM-DD' }, type: 'date' }
    ]
  },
  'DOC-35-CPA': {
    id: 'DOC-35-CPA',
    productCategory: 'paid',
    code: 'SEC-35-CPA',
    title: {
      en: 'Consumer Pre-Litigation Statutory Legal Notice',
      bn: 'ক্রেতা সুরক্ষা প্রাক-মামলা বিধিবদ্ধ আইনি নোটিশ',
      hi: 'उपभोक्ता फोरम पूर्व-वाद वैधानिक कानूनी नोटिस'
    },
    governingAct: {
      en: 'Section 35 read with Sec 2(7), 2(11) & 2(47), Consumer Protection Act, 2019',
      bn: 'ক্রেতা সুরক্ষা আইন, ২০১৯-এর ধারা ৩৫ সহ ধারা ২(৭), ২(১১) ও ২(৪৭)',
      hi: 'उपभोक्ता संरक्षण अधिनियम, 2019 की धारा 35 सपठित धारा 2(7), 2(11) व 2(47)'
    },
    curePeriodDays: 15,
    description: {
      en: 'Statutory 15-day pre-litigation consumer demand notice establishing deficiency in service and unfair trade practice prior to filing on e-Jagriti.',
      bn: 'ই-জাগৃতি পোর্টালে জেলা ক্রেতা আদালতে মামলা করার পূর্বে ১৫ দিনের চূড়ান্ত আইনি ক্ষতিপূরণ নোটিশ।',
      hi: 'ई-जागृति पर केस दाखिल करने से पूर्व सेवा में कमी एवं क्षतिपूर्ति हेतु 15-दिवसीय विधिक मांग नोटिस।'
    },
    specificFields: [
      { key: 'referenceNumber', label: { en: 'Invoice / Booking / Policy / Order Number', bn: 'ইনভয়েস / পলিসি / অর্ডার নম্বর', hi: 'बिल / इनवॉइस / पॉलिसी / ऑर्डर नंबर' }, placeholder: { en: 'e.g. INV-2026-WB-98421', bn: 'যেমন: INV-2026-WB-98421', hi: 'उदा: INV-2026-WB-98421' }, type: 'text' },
      { key: 'amount', label: { en: 'Total Refund & Damages Claimed (INR)', bn: 'দাবিকৃত মোট মূল্য ও ক্ষতিপূরণ (টাকায়)', hi: 'दावाकृत कुल राशि व क्षतिपूर्ति' }, placeholder: { en: 'e.g. 75000', bn: 'যেমন: ৭৫০০০', hi: 'उदा: 75000' }, type: 'number' },
      { key: 'primaryDate', label: { en: 'Transaction / Purchase / Service Date', bn: 'ক্রয় বা সেবা চুক্তির তারিখ', hi: 'खरीद / सेवा संविदा की तारीख' }, placeholder: { en: 'YYYY-MM-DD', bn: 'YYYY-MM-DD', hi: 'YYYY-MM-DD' }, type: 'date' },
      { key: 'propertyDetails', label: { en: 'Product Description & Specific Deficiency', bn: 'পণ্য বা সেবার বিবরণ ও সুনির্দিষ্ট ত্রুটি', hi: 'दोषपूर्ण उत्पाद / सेवा में विशिष्ट कमी' }, placeholder: { en: 'e.g. Defective Smartphone / Wrongful Mediclaim Repudiation / Hospital Negligence', bn: 'যেমন: ত্রুটিযুক্ত পণ্য / অন্যায়ভাবে মেডিকেলেম বাতিল / চিকিৎসায় গাফিলতি', hi: 'उदा: दोषपूर्ण उपकरण / अनुचित मेडिक्लेम निरस्तीकरण' }, type: 'text' }
    ],
    productCategory: 'paid',
    eligibilityGate: [
      {
        question: {
          en: 'Is this a consumer dispute involving goods or services purchased for consideration?',
          bn: 'কি এটি ক্রেতার জন্য ক্রয়কৃত পণ্য বা সেবার সাথে সম্পর্কিত ক্রেতা বিরোধ?',
          hi: 'क्या यह किसी उपभोक्ता द्वारा क्रय किए गए माल या सेवाओं से संबंधित उपभोक्ता विवाद है?'
        },
        options: [
          {
            value: 'yes',
            label: { en: 'Yes, consumer dispute', 'bn': 'হ্যাঁ, ক্রেতা বিরোধ', 'hi': 'हां, उपभोक्ता विवाद'},
            eligible: true
          },
          {
            value: 'no',
            label: { en: 'No, not a consumer dispute', 'bn': 'না, ক্রেতা বিরোধ নয়', 'hi': 'नहीं, उपभोक्ता विवाद नहीं है'},
            eligible: false,
            reason: {
              en: 'Consumer Protection Act applies only to goods/services purchased for consideration.',
              bn: 'ক্রেতা সুরক্ষা আইন শুধুমাত্র মূল্যে ক্রয়কৃত পণ্য/সেবার জন্য প্রযোজ্য।',
              hi: 'उपभोक्ता संरक्षण अधिनियम केवल मूल्य पर क्रय किए गए माल/सेवाओं पर लागू होता है।'
            }
          }
        ]
      }
    ],
    evidenceChecklist: [
      { key: 'invoice_proof', 'label': {'en': 'Invoice/bill copy', 'bn': 'ইনভয়েস/বিলের প্রতি', 'hi': 'बिल/रसीद की प्रति'}, 'required': true},
      { key: 'payment_proof', 'label': {'en': 'Payment proof', 'bn': 'পেমেন্ট প্রমাণ', 'hi': 'भुगतान का प्रमाण'}, 'required': true},
      {'key': 'deficiency_proof', 'label': {'en': 'Proof of deficiency in service', 'bn': 'সেবা ত্রুটির প্রমাণ', 'hi': 'सेवा में कमी का प्रमाण'}, 'required': true},
      {'key': 'sender_proof', 'label': {'en': 'Sender identity proof', 'bn': 'প্রেরকের পরিচয়পত্র', 'hi': 'प्रेषक का पहचान पत्र'}, 'required': true}
    ],
    optionalClauses: [
      { key: 'refund_claim', 'label': {'en': 'Include refund claim', 'bn': 'ফেরতের দাবি অন্তর্ভুক্ত করুন', 'hi': 'वापसी दावे को शामिल करें'}, 'defaultChecked': true},
      {'key': 'compensation_claim', 'label': {'en': 'Include compensation claim', 'bn': 'ক্ষতিপূরণের দাবি অন্তর্ভুক্ত করুন', 'hi': 'क्षतिपूर्ति दावे को शामिल करें'}, 'defaultChecked': true},
      {'key': 'litigation_costs', 'label': {'en': 'Include litigation costs claim', 'bn': 'মামলার খরচের দাবি অন্তর্ভুক্ত করুন', 'hi': 'मुकदमेबाजी लागत दावे को शामिल करें'}, 'defaultChecked': false}
    ],
    notApplicableExplanation: {
      en: 'Consumer Protection Act Section 35 does not require a mandatory pre-litigation notice. This is a voluntary demand notice before filing on e-Jagriti. Pecuniary jurisdiction: District Commission (up to ₹50 lakh), State Commission (₹50 lakh-₹2 crore), National Commission (above ₹2 crore).',
      bn: 'ক্রেতা সুরক্ষা আইন ধারা ৩৫ পূর্ব-মামলা নোটিশের বাধ্যতা আরোপ করে না। এটি ই-জাগৃতিতে মামলা দাখিলের পূর্বে একটি স্বেচ্ছায়ী দাবি নোটিশ। মূল্যশ্রেণী: জেলা কমিশন (₹50 লাখ পর্যন্ত), রাষ্ট্র কমিশন, জাতীয় কমিশন।',
      hi: 'उपभोक्ता संरक्षण अधिनियम धारा 35 पूर्व-मुकदमा नोटिस की बाध्यता नहीं डालती। यह ई-जागृति पर मामला दायर करने से पहले एक स्वैच्छिक मांग नोटिस है। मौद्रिक अधिकार क्षेत्र: जिला आयोग (₹50 लाख तक), राज्य आयोग (₹50 लाख-₹2 करोड़), राष्ट्रीय आयोग (₹2 करोड़ से ऊपर)।'
    },
    sourceVersionCheckedDate: {
      version: '1.0',
      checkedOn: '2026-10-17',
      source: 'Consumer Protection Act, 2019, Section 35; Consumer Protection (Jurisdiction) Rules, 2021'
    },
    counselApprovalStatus: {
      status: 'approved',
      reviewedBy: 'Qualified Counsel',
      reviewedOn: '2026-10-17',
      conditions: 'Template valid only for consumer disputes involving goods/services purchased for consideration.'
    },
    workflowMapping: [
      { categoryId: 'consumer', subcategoryId: 'sub-consumer-21' },
      { categoryId: 'consumer', 'subcategoryId': 'sub-consumer-22' },
      { categoryId: 'consumer', subcategoryId: 'sub-consumer-23' },
      { categoryId: 'consumer', subcategoryId: 'sub-consumer-24' },
      { categoryId: 'consumer', subcategoryId: 'sub-consumer-25' }
    ]
  },
  'DOC-PARTITION': {
    id: 'DOC-PARTITION',
    productCategory: 'lawyer-only',
    code: 'ORDER-20-CPC',
    title: {
      en: 'Demand Notice for Amicable Partition by Metes & Bounds',
      bn: 'আপস-বাটোয়ারা ও সীমানা নির্ধারণের আইনি নোটিশ (শরিকদের প্রতি)',
      hi: 'पारस्परिक संपत्ति बंटवारे एवं सीमांकन हेतु वैधानिक नोटिस'
    },
    governingAct: {
      en: 'Order XX Rule 18 & Order XXVI CPC, 1908 & Hindu/Indian Succession Act',
      bn: 'দেওয়ানি কার্যবিধির অর্ডার ২০ রুল ১৮ ও উত্তরাধিকার আইন (বিনীতা শর্মা রায় সহ)',
      hi: 'सिविल प्रक्रिया संहिता का आदेश 20 नियम 18 एवं उत्तराधिकार अधिनियम'
    },
    curePeriodDays: 15,
    description: {
      en: 'Formal co-sharer notice with genealogical pedigree, property schedule, daughter coparcenary equality, demanding demarcated partition deed within 15 days.',
      bn: 'বংশতালিকা ও সম্পত্তির দাগ-খতিয়ান তপশিল সহ শরিকদের আপস বণ্টনের মাধ্যমে রেজিস্টার্ড দলিলের চূড়ান্ত নোটিশ।',
      hi: 'पारिवारिक वंशावली, अनुसूची एवं बेटियों के समान समांशी अधिकार सहित 15-दिवसीय विधिक बंटवारा मांग नोटिस।'
    },
    specificFields: [
      { key: 'propertyDetails', label: { en: 'Ancestral Property Schedule (Mouza, JL, Khatian, Plot)', bn: 'পৈতৃক সম্পত্তির সম্পূর্ণ তপশিল (মৌজা, জেএল, খতিয়ান, দাগ)', hi: 'पैतृक संपत्ति का विवरण (मौजा, जेएल, खतियान, दाग)' }, placeholder: { en: 'e.g. Mouza Barasat, JL 45, PS Barasat, LR Khatian 892, LR Plot 1044, Area 12 Decimals', bn: 'যেমন: মৌজা বারাসাত, জেএল ৪৫, খতিয়ান ৮৯২, দাগ ১০৪৪, মোট ১২ শতক', hi: 'उदा: मौजा बारासात, जेएल 45, खतियान 892, दाग 1044' }, type: 'text' },
      { key: 'referenceNumber', label: { en: 'Genealogical Pedigree & Your Undivided Share', bn: 'উত্তরাধিকার বংশতালিকা ও আপনার আইনসঙ্গত অংশ', hi: 'पारिवारिक वंशावली एवं आपका अविभाजित हिस्सा' }, placeholder: { en: 'e.g. Son/Daughter of Late Ram Mondal, Claiming 1/3rd Undivided Coparcenary Share', bn: 'যেমন: স্বর্গীয় রাম মণ্ডলের সন্তান হিসেবে আইনসম্মত ১/৩ অবিভক্ত অংশ', hi: 'उदा: स्व. राम मंडल के वारिस के रूप में 1/3 हिस्सा' }, type: 'text' },
      { key: 'primaryDate', label: { en: 'Deceased Original Owner Demise Date', bn: 'মূল পূর্বপুরুষের মৃত্যুর তারিখ', hi: 'मूल पूर्वज की मृत्यु तिथि' }, placeholder: { en: 'YYYY-MM-DD', bn: 'YYYY-MM-DD', hi: 'YYYY-MM-DD' }, type: 'date' }
    ]
  },
  'DOC-06-RTI': {
    id: 'DOC-06-RTI',
    productCategory: 'paid',
    code: 'SEC-6-RTI',
    title: {
      en: 'RTI Application (Form A) for Land Records / Mutation Delay',
      bn: 'জমির রেকর্ড ও মিউটেশনে দেরির বিরুদ্ধে আরটিআই আবেদন (ফর্ম এ)',
      hi: 'भूमि नामांतरण में देरी पर आरटीआई आवेदन (प्रपत्र ए)'
    },
    governingAct: {
      en: 'Section 6(1), Right to Information Act, 2005 & WB RTI Rules',
      bn: 'তথ্য জানার অধিকার আইন, ২০০৫-এর ধারা ৬(১) ও পশ্চিমবঙ্গ আরটিআই বিধি',
      hi: 'सूचना का अधिकार अधिनियम, 2005 की ধারা 6(1) एवं प. बंगाल आरटीआई नियम'
    },
    curePeriodDays: 30,
    description: {
      en: 'Statutory Form A application compelling SPIO / BL&LRO to provide file movement note-sheets and reasons for non-disposal within Citizens Charter 30 days.',
      bn: 'বিএলএলআরও অফিসে জমি মিউটেশন আটকে থাকলে সিটিজেন চার্টার লঙ্ঘনের বিরুদ্ধে কারণ দর্শানো ও সার্টিফায়েড কপির আবেদন।',
      hi: 'बीएलएलআরও कार्यालय में जमीन म्यूटेशन 30 दिनों से अधिक लंबित रहने पर विहित प्रपत्र ए में आरटीआई आवेदन।'
    },
    specificFields: [
      { key: 'referenceNumber', label: { en: 'Banglarbhumi Mutation Application / Case No', bn: 'বাংলারভূমি মিউটেশন আবেদন / কেস নম্বর', hi: 'बांगलারभूमि म्यूटेशन आवेदन / केस संख्या' }, placeholder: { en: 'e.g. MUT/2026/04/10492 or Case No. 89/2026', bn: 'যেমন: MUT/2026/04/10492 বা কেস নং ৮৯/২০২৬', hi: 'उदा: MUT/2026/04/10492' }, type: 'text' },
      { key: 'propertyDetails', label: { en: 'Concerned BL&LRO Office, Block & District', bn: 'সংশ্লিষ্ট বিএলএলআরও অফিস, ব্লক ও জেলা', hi: 'संबंधित बीएलएलআরও कार्यालय, ब्लॉक व जिला' }, placeholder: { en: 'e.g. Office of the BL&LRO Rajarhat, North 24 Parganas', bn: 'যেমন: বিএলএলআরও রাজারহাট, উত্তর ২৪ পরগনা', hi: 'उदा: बीएलएलআরও कार्यालय राजारहाट, उत्तर 24 परगना' }, type: 'text' },
      { key: 'primaryDate', label: { en: 'Online Application Filing Date', bn: 'অনলাইনে আবেদন দাখিলের তারিখ', hi: 'ऑनलाइन आवेदन जमा करने की तिथि' }, placeholder: { en: 'YYYY-MM-DD', bn: 'YYYY-MM-DD', hi: 'YYYY-MM-DD' }, type: 'date' }
    ]
  },
  'DOC-144-BNSS': {
    id: 'DOC-144-BNSS',
    productCategory: 'paid',
    code: 'SEC-144-BNSS',
    title: {
      en: 'Statutory Spousal & Parental Maintenance Demand Notice',
      bn: 'স্ত্রী ও পিতামাতার বিধিবদ্ধ খোরপোশ দাবির চূড়ান্ত নোটিশ',
      hi: 'पत्नी अथवा वृद्ध माता-पिता हेतु वैधानिक गुजारा भत्ता मांग नोटिस'
    },
    governingAct: {
      en: 'Section 144, Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)',
      bn: 'ভারতীয় নাগরিক সুরক্ষা সংহিতা, ২০২৩-এর ধারা ১৪৪ (পূর্বতন ১২৫ ধারা CrPC)',
      hi: 'भारतीय नागरिक सुरक्षा संहिता, 2023 की धारा 144 (पूर्व धारा 125 दंड प्रक्रिया)'
    },
    curePeriodDays: 15,
    description: {
      en: 'Statutory pre-litigation maintenance notice with Rajnesh v. Neha asset affidavit mandate, 60-day interim disposal requisition & Sec 144(3) attachment warning.',
      bn: 'আদালতে খোরপোশ মামলা করার পূর্বে স্বামী বা উপার্জনকারী সন্তানের প্রতি সুপ্রিম কোর্টের নির্দেশানুযায়ী চূড়ান্ত আইনি নোটিশ।',
      hi: 'न्यायालय में भरण-पोषण वाद दायर करने से पूर्व सर्वोच्च न्यायालय के दिशा-निर्देशों सहित अंतिम वैधानिक मांग नोटिस।'
    },
    specificFields: [
      { key: 'amount', label: { en: 'Monthly Subsistence / Maintenance Claimed (INR)', bn: 'দাবিকৃত মাসিক খোরপোশের অঙ্ক (টাকায়)', hi: 'दावाकृत मासिक गुजारा भत्ता राशि' }, placeholder: { en: 'e.g. 18000', bn: 'যেমন: ১৮০০০', hi: 'उदा: 18000' }, type: 'number' },
      { key: 'referenceNumber', label: { en: 'Relationship, Neglect & Respondent Income', bn: 'পারিবারিক সম্পর্ক ও প্রতিপক্ষের আনুমানিক আয়', hi: 'पारिवारिक संबंध एवं विपक्षी की अनुमानित आय' }, placeholder: { en: 'e.g. Legally Wedded Wife with Minor Child; Husband earning approx ₹85,000/month in IT Sector', bn: 'যেমন: বিবাহিতা স্ত্রী ও নাবালক সন্তান; স্বামী তথ্যপ্রযুক্তি সংস্থায় মাসিক ₹৮৫,০০০/- উপার্জনকারী', hi: 'उदा: धर्मपत्नी व नाबालिग संतान; पति की आय लगभग ₹85,000 प्रति माह' }, type: 'text' },
      { key: 'primaryDate', label: { en: 'Date of Marriage / Desertion Date', bn: 'বিবাহের তারিখ অথবা পরিত্যাগের তারিখ', hi: 'विवाह की तिथि अथवा परित्याग की तिथि' }, placeholder: { en: 'YYYY-MM-DD', bn: 'YYYY-MM-DD', hi: 'YYYY-MM-DD' }, type: 'date' }
    ]
  }
};

export function validateUpiUtrEntropy(utr: string): { valid: boolean; error?: string } {
  const clean = utr.trim().replace(/\s+/g, '');
  if (!/^[0-9]{12}$/.test(clean)) return { valid: false, error: 'UPI UTR must be exactly 12 numeric digits.' };
  if (/^(\d)\1{11}$/.test(clean)) return { valid: false, error: 'Invalid UTR: Repeating sequence detected.' };
  if ('01234567890123456789'.includes(clean) || '98765432109876543210'.includes(clean)) return { valid: false, error: 'Invalid UTR: Sequential numbers are not legitimate transaction IDs.' };
  const uniqueDigits = new Set(clean.split('')).size;
  if (uniqueDigits < 4) return { valid: false, error: 'Invalid UTR: Failed entropy check.' };
  return { valid: true };
}

export function getWorkflowTemplateMapping(subcategoryId?: string, categoryId?: string, subCategoryObj?: any): string {
  const id = (subcategoryId || '').toLowerCase();
  const catId = (categoryId || '').toLowerCase();
  const act = (subCategoryObj?.relevant_act || '').toLowerCase();
  const titleEn = (subCategoryObj?.title?.en || '').toLowerCase();
  const titleBn = (subCategoryObj?.title?.bn || '').toLowerCase();

  if (act.includes('138') || act.includes('negotiable') || titleEn.includes('cheque') || titleBn.includes('চেক')) return 'DOC-138-NI';
  if (act.includes('pssa') || act.includes('settlement') || titleEn.includes('nach') || titleEn.includes('ecs') || titleEn.includes('auto-debit')) return 'DOC-25-PSSA';
  if (act.includes('rera') || titleEn.includes('builder') || titleEn.includes('flat') || titleEn.includes('possession') || titleBn.includes('বিল্ডার') || titleBn.includes('ফ্ল্যাট')) return 'DOC-18-RERA';
  if (act.includes('consumer') || act.includes('cpa') || titleEn.includes('consumer') || titleEn.includes('defective') || titleBn.includes('ক্রেতা')) return 'DOC-35-CPA';
  if (act.includes('premises tenancy') || act.includes('wbpt') || titleEn.includes('eviction') || titleEn.includes('tenant') || titleBn.includes('উচ্ছেদ') || titleBn.includes('ভাড়াটে')) {
    if (titleEn.includes('utility') || titleEn.includes('water') || titleEn.includes('electric') || act.includes('27')) return 'DOC-27-WBPT';
    if (titleEn.includes('deposit') || act.includes('21') || act.includes('rent controller')) return 'DOC-21-WBPT';
    return 'DOC-06-WBPT';
  }
  if (act.includes('partition') || act.includes('succession') || titleEn.includes('partition') || titleBn.includes('বাটোয়ারা') || titleBn.includes('উত্তরাধিকার')) return 'DOC-PARTITION';
  if (act.includes('bnss') || act.includes('144') || act.includes('125') || titleEn.includes('maintenance') || titleBn.includes('খোরপোশ')) return 'DOC-144-BNSS';
  if (act.includes('wblr') || act.includes('mutation') || act.includes('porcha') || act.includes('bllro') || titleEn.includes('mutation') || titleBn.includes('মিউটেশন')) return 'DOC-06-RTI';

  if (catId.includes('money') || id.includes('money')) return 'DOC-138-NI';
  if (catId.includes('tenancy') || id.includes('tenancy')) return 'DOC-06-WBPT';
  if (catId.includes('consumer') || id.includes('consumer')) return 'DOC-18-RERA';
  if (catId.includes('partition') || id.includes('partition')) return 'DOC-PARTITION';
  if (catId.includes('land') || id.includes('land')) return 'DOC-06-RTI';
  if (catId.includes('family') || id.includes('family')) return 'DOC-144-BNSS';

  return 'DOC-138-NI';
}

export function getTemplateById(templateId: string): ProTemplateDef {
  return PRO_TEMPLATES[templateId] || PRO_TEMPLATES['DOC-138-NI'];
}

export function calculateDeadlineDate(startDateStr?: string, days = 15): string {
  if (!startDateStr) {
    const d = new Date();
    d.setDate(d.getDate() + days);
    return d.toISOString().split('T')[0];
  }
  try {
    const d = new Date(startDateStr);
    d.setDate(d.getDate() + days);
    return d.toISOString().split('T')[0];
  } catch {
    return 'Within 15 days of receipt';
  }
}

/**
 * MASTER COMPILATION ENGINE: ALL 10 IN-DEPTH ADVOCATE-GRADE STATUTORY NOTICES
 */
export function generateNoticeText(inputs: ProDrafterInputs): string {
  const t = PRO_TEMPLATES[inputs.templateId] || PRO_TEMPLATES['DOC-138-NI'];
  const today = new Date().toLocaleDateString(inputs.lang === 'bn' ? 'bn-IN' : inputs.lang === 'hi' ? 'hi-IN' : 'en-IN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  // 1. CHEQUE BOUNCE
  if (inputs.templateId === 'DOC-138-NI') {
    if (inputs.lang === 'bn') {
      return `রেজিস্টার্ড ডাকযোগে প্রাপ্তিস্বীকারপত্র (A/D) সহ প্রেরিত / স্পিড পোস্ট

তারিখ: ${today}

প্রতি,
${inputs.recipientName}
ঠিকানা: ${inputs.recipientAddress}

প্রেরক:
${inputs.senderName}
ঠিকানা: ${inputs.senderAddress}
যোগাযোগ ফোন: ${inputs.senderPhone}

বিষয়: হস্তান্তরযোগ্য দলিল আইন, ১৮৮১ (সংশোধিত)-এর ধারা ১৩৮ ও ১৪২ অনুযায়ী ${inputs.amount ? `₹${inputs.amount}/- টাকার ` : ''}চেক বাউন্স সংক্রান্ত বিধিবদ্ধ আইনি ডিমান্ড নোটিশ।

মহোদয়/মহোদয়া,
আমি, ${inputs.senderName}, আপনার অবগতির জন্য এই মর্মে চূড়ান্ত বিধিবদ্ধ আইনি নোটিশ জারি করছি:

১. আপনি আপনার আইনসম্মতভাবে আদায়যোগ্য দেনা ও দায় (Legally Enforceable Debt & Subsisting Liability) সম্পূর্ণভাবে পরিশোধের উদ্দেশ্যে আমার অনুকূলে নিম্নবর্ণিত চেকটি হস্তান্তর ও জারি করেছিলেন:
   • চেক নম্বর: ${inputs.referenceNumber || '[চেক নং]'}
   • চেক ইস্যুর তারিখ: ${inputs.primaryDate || '[তারিখ]'}
   • অঙ্ক: ₹${inputs.amount || '[টাকা]'}/-
   • ড্রয়ি ব্যাংক ও শাখা: ${inputs.propertyDetails || 'আপনার পরিচালিত ব্যাংক অ্যাকাউন্ট ও শাখা'}

২. হস্তান্তরযোগ্য দলিল আইনের ধারা ১১৮ এবং ১৩৯-এর বিধানমতে, উক্ত চেকটি সম্পূর্ণ বৈধ প্রতিদানের ভিত্তিতে এবং আইনসঙ্গত দায়মুক্তির উদ্দেশ্যেই আমাকে প্রদান করা হয়েছিল মর্মে আদালতে চূড়ান্ত আইনি অনুমান বলবৎ রয়েছে।

৩. উক্ত চেকটি যথানিয়মে বৈধতার মেয়াদকালের মধ্যে নগদায়নের উদ্দেশ্যে আমার ব্যাংক অ্যাকাউন্টে জমা দিলে, সংশ্লিষ্ট ড্রয়ি ব্যাংক কর্তৃক মেমো তারিখ: ${inputs.secondaryDate || today} মারফত "অপর্যাপ্ত তহবিল (Funds Insufficient) / Exceeds Arrangement" কারণে অমর্যাদাপূর্ণ (বাউন্স) হয়ে ফেরত আসে।

৪. উক্ত ব্যাংক মেমোর মাধ্যমে চেক প্রত্যাখ্যাত হওয়ার সংবাদ প্রাপ্তির পর ধারা ১৩৮(খ) অনুযায়ী নির্ধারিত ৩০ দিনের বিধিবদ্ধ সময়সীমার মধ্যেই অত্র নোটিশ আপনাকে জারি করা হলো।

৫. অতএব, এই নোটিশ প্রাপ্তির পরবর্তী ১৫ (পনেরো) দিনের মধ্যে উক্ত সমুদয় চেকের অর্থ ₹${inputs.amount || ''}/- আমাকে সম্পূর্ণ পরিশোধ করার চূড়ান্ত নির্দেশ দেওয়া হচ্ছে।

৬. সাবধান থাকবেন যে, যদি উক্ত ১৫ দিনের সংবিধিবদ্ধ মেয়াদান্তে আপনি টাকা পরিশোধে ব্যর্থ হন, তবে ধারা ১৪২(১)(খ) অনুযায়ী উপযুক্ত আদালতে আপনার বিরুদ্ধে হস্তান্তরযোগ্য দলিল আইনের ধারা ১৩৮-এর অধীনে ফৌজদারি মামলা দায়ের করা হবে। এর ফলে আপনার অনধিক ২ বছরের কারাদণ্ড এবং চেকের মূল্যের দ্বিগুণ পর্যন্ত জরিমানা কার্যকর হবে, যার সাথে দেওয়ানি কার্যবিধির অর্ডার ৩৭ অনুযায়ী ১৮% চক্রবৃদ্ধি সুদ সহ অর্থ আদায়ের দেওয়ানি মামলাও রজু করা হবে।

বিনীত,
_______________________
(${inputs.senderName})
স্বহস্তে প্রস্তুত ও প্রেরিত (ইন পার্সন)`;
    }

    if (inputs.lang === 'hi') {
      return `पंजीकृत डाक द्वारा पावती सहित (RPAD / Speed Post)

तारीख: ${today}

सेवा में,
${inputs.recipientName}
पता: ${inputs.recipientAddress}

प्रेषक:
${inputs.senderName}
पता: ${inputs.senderAddress}
फोन: ${inputs.senderPhone}

विषय: परक्राम्य लिखत अधिनियम, 1881 की धारा 138 एवं 142 के अंतर्गत चेक संख्या ${inputs.referenceNumber || ''} राशि ₹${inputs.amount || ''}/- अनादृत होने पर 15-दिवसीय वैधानिक मांग नोटिस।

महोदय/महोदया,
मैं, ${inputs.senderName}, इस औपचारिक वैधानिक मांग नोटिस के माध्यम से आपको निम्नानुसार सूचित करता/करती हूँ:

1. यह कि अपने विधिक रूप से प्रवर्तनीय ऋण एवं दायित्व (Legally Enforceable Debt) के उन्मोचन हेतु आपने मेरे पक्ष में चेक संख्या: ${inputs.referenceNumber || '[चेक सं.]'}, दिनांक: ${inputs.primaryDate || '[तारीख]'}, राशि: ₹${inputs.amount || '[राशि]'}/- आहारी बैंक ${inputs.propertyDetails || 'बैंक खाता'} पर जारी किया था।
2. परक्राम्य लिखत अधिनियम की धारा 118 एवं 139 के सांविधिक प्रावधानों के तहत उक्त चेक पूर्ण प्रतिफल एवं वैध ऋण के शोधन हेतु दिया गया था, जिसकी कानूनी उपधारणा आपके विरुद्ध लागू है।
3. जब उक्त चेक को वैध अवधि के भीतर मेरे बैंक खाते के माध्यम से प्रस्तुत किया गया, तो संबंधित बैंक द्वारा वापसी मेमो दिनांक ${inputs.secondaryDate || today} के माध्यम से "अपर्याप्त निधि (Funds Insufficient)" के कारण चेक अनादृत (बाउंस) कर लौटा दिया गया।
4. इस नोटिस की प्राप्ति के 15 दिनों के भीतर उक्त चेक राशि ₹${inputs.amount || ''}/- का पूर्ण भुगतान करने का आपको निर्देश दिया जाता है।
5. यदि आप उक्त 15 दिनों की विधिक अवधि के भीतर भुगतान करने में विफल रहते हैं, तो आपके विरुद्ध सक्षम न्यायिक दंडाधिकारी के न्यायालय में धारा 138 के तहत आपराधिक परिवाद दायर किया जाएगा, जिसमें 2 वर्ष तक का कारावास एवं चेक राशि के दोगुने तक का जुर्माना देय होगा।

भवदीय/भवदीया,
_______________________
(${inputs.senderName})
प्रेषक (स्वयं)`;
    }

    return `BY REGISTERED POST WITH ACKNOWLEDGEMENT DUE (RPAD) / SPEED POST

Date: ${today}

TO:
${inputs.recipientName}
Address: ${inputs.recipientAddress}

FROM:
${inputs.senderName}
Address: ${inputs.senderAddress}
Phone: ${inputs.senderPhone}

SUBJECT: STATUTORY LEGAL DEMAND NOTICE UNDER SECTIONS 138 & 142 OF THE NEGOTIABLE INSTRUMENTS ACT, 1881 (AS AMENDED) FOR DISHONOUR OF CHEQUE BEARING NO. ${inputs.referenceNumber || '[CHEQUE NO]'} FOR INR ${inputs.amount || '[AMOUNT]'}/-.

Sir / Madam,

Under instructions and on my own behalf, I, ${inputs.senderName}, hereby serve upon you this formal Statutory Demand Notice under Section 138 of the Negotiable Instruments Act, 1881:

1. That in partial/full discharge of your legally enforceable debt and existing liability towards me, you drew and issued in my favour Cheque Number: ${inputs.referenceNumber || '[Cheque No]'}, Date of Issue: ${inputs.primaryDate || '[Date]'}, Amount: INR ${inputs.amount || '[Amount]'}/-, Drawn on: ${inputs.propertyDetails || 'Your Bank Account & Branch'}.

2. That under the mandatory statutory presumptions enshrined under Sections 118 and 139 of the Negotiable Instruments Act, 1881, the said cheque was issued for valid consideration and in discharge of a legally enforceable debt.

3. That relying upon your representation, I presented the aforesaid cheque through my banker within its statutory period of validity. However, the cheque was returned unpaid and dishonoured by the drawee bank vide Bank Return Memo dated ${inputs.secondaryDate || today} with the categorical endorsement "Funds Insufficient" / "Exceeds Arrangement".

4. That I received the dishonour memo on ${inputs.secondaryDate || today}. Consequently, this statutory notice is issued within the mandatory period of 30 days as prescribed under Section 138(b) of the Act.

5. I hereby call upon you to pay the entire cheque amount of INR ${inputs.amount || '[Amount]'}/- within a period of 15 (fifteen) days from the date of receipt of this statutory notice.

6. Take notice that if you fail to liquidate the aforesaid amount within 15 days, I shall initiate criminal proceedings against you under Section 138 & Section 142(1)(b) of the Negotiable Instruments Act before the competent Court of Judicial Magistrate / Metropolitan Magistrate, holding you liable for imprisonment up to two years and fine up to twice the cheque amount, alongside civil summary suit under Order XXXVII CPC with 18% compound interest and costs.

Yours faithfully,
_______________________
(${inputs.senderName})
Sender in Person`;
  }

  // 2. NACH / ECS
  if (inputs.templateId === 'DOC-25-PSSA') {
    if (inputs.lang === 'bn') {
      return `রেজিস্টার্ড ডাকযোগে প্রাপ্তিস্বীকারপত্র (A/D) সহ প্রেরিত

তারিখ: ${today}

প্রতি: ${inputs.recipientName}
ঠিকানা: ${inputs.recipientAddress}

প্রেরক: ${inputs.senderName}
ঠিকানা: ${inputs.senderAddress}
ফোন: ${inputs.senderPhone}

বিষয়: পেমেন্ট অ্যান্ড সেটেলমেন্ট সিস্টেমস অ্যাক্ট, ২০০৭-এর ধারা ২৫ অনুযায়ী ইলেকট্রনিক অটো-ডেবিট (NACH/ECS) বাউন্স সংক্রান্ত ১৫ দিনের বিধিবদ্ধ আইনি নোটিশ।

মহোদয়/মহোদয়া,
১. আপনি আপনার আইনসম্মত আর্থিক দেনা ও চুক্তিভিত্তিক কিস্তি পরিশোধের উদ্দেশ্যে ম্যান্ডেট UMRN নম্বর: ${inputs.referenceNumber || '[UMRN No]'}, নির্ধারিত তারিখ: ${inputs.primaryDate || '[তারিখ]'}, অঙ্ক: ₹${inputs.amount || '[টাকা]'}/-, ব্যাংক: ${inputs.propertyDetails || 'ব্যাংক অ্যাকাউন্ট'} সম্পাদন করেছিলেন।
২. উক্ত ইলেকট্রনিক ম্যান্ডেটটি নির্ধারিত ক্লিয়ারিং সাইকেলে উপস্থাপিত হলে, NPCI ক্লিয়ারিং মেমো তারিখ: ${inputs.secondaryDate || today} মারফত "অপর্যাপ্ত ব্যালেন্স" কারণে অমর্যাদাপূর্ণ হয়ে প্রত্যাখ্যাত হয়।
৩. পেমেন্ট অ্যান্ড সেটেলমেন্ট সিস্টেমস অ্যাক্ট, ২০০৭-এর ধারা ২৫(৫) অনুসারে, এই ধরনের ইলেকট্রনিক ম্যান্ডেট অমর্যাদা হস্তান্তরযোগ্য দলিল আইনের ধারা ১৩৮-এর সমতুল্য ফৌজদারি অপরাধ।
৪. নোটিশ প্রাপ্তির ১৫ দিনের মধ্যে উক্ত বকেয়া অর্থ ₹${inputs.amount || ''}/- পরিশোধ করুন, অন্যথায় ধারা ২৫ PSSA অনুযায়ী ২ বছরের কারাদণ্ড ও দ্বিগুণ জরিমানার মামলা দায়ের করা হবে।

বিনীত,
_______________________
(${inputs.senderName})`;
    }

    if (inputs.lang === 'hi') {
      return `पंजीकृत डाक द्वारा पावती सहित (RPAD)

तारीख: ${today}
सेवा में: ${inputs.recipientName}
प्रेषक: ${inputs.senderName}

विषय: भुगतान और निपटान प्रणाली अधिनियम, 2007 की धारा 25 के अंतर्गत ईसीएस/एनएसीएच बाउंस मांग नोटिस।

1. आपने अपने ऋण भुगतान हेतु इलेक्ट्रॉनिक अधिदेश (UMRN: ${inputs.referenceNumber || '[UMRN सं.]'}, निर्धारित तिथि: ${inputs.primaryDate || '[तारीख]'}, राशि: ₹${inputs.amount || '[राशि]'}/-) अधिकृत किया था।
2. उक्त अधिदेश एनपीसीआई समाशोधन में अपर्याप्त धनराशि के कारण दिनांक ${inputs.secondaryDate || today} को विफल हो गया।
3. धारा 25(5) के तहत यह धारा 138 एनआई एक्ट के समकक्ष दंडनीय अपराध है।
4. अतः 15 दिनों के भीतर राशि ₹${inputs.amount || ''}/- का भुगतान करें, अन्यथा 2 वर्ष के कारावास हेतु सक्षम न्यायालय में आपराधिक वाद संस्थित किया जाएगा।

भवदीय,
_______________________
(${inputs.senderName})`;
    }

    return `BY REGISTERED POST WITH ACKNOWLEDGEMENT DUE (RPAD) / SPEED POST

Date: ${today}

TO: ${inputs.recipientName}
Address: ${inputs.recipientAddress}

FROM: ${inputs.senderName}
Address: ${inputs.senderAddress}
Phone: ${inputs.senderPhone}

SUBJECT: STATUTORY LEGAL NOTICE UNDER SECTION 25 OF THE PAYMENT AND SETTLEMENT SYSTEMS ACT, 2007 (PSSA) FOR DISHONOUR OF ELECTRONIC MANDATE UMRN: ${inputs.referenceNumber || '[UMRN]'}.

1. That in discharge of your legally enforceable debt, you executed NACH mandate UMRN: ${inputs.referenceNumber || '[UMRN No]'}, scheduled presentation date: ${inputs.primaryDate || '[Date]'}, amount: INR ${inputs.amount || '[Amount]'}/-, drawn on ${inputs.propertyDetails || 'your bank account'}.
2. That upon presentation, the mandate was returned dishonoured vide clearing memo dated ${inputs.secondaryDate || today} with endorsement "Account Balance Insufficient".
3. That under Section 25(5) of the PSSA, 2007, Chapter XVII of the Negotiable Instruments Act applies mutatis mutandis, making this an offense punishable on par with Section 138 NI Act.
4. I call upon you to pay the sum of INR ${inputs.amount || '[Amount]'}/- within 15 (fifteen) days from receipt hereof, failing which criminal proceedings will be instituted.

Yours faithfully,
_______________________
(${inputs.senderName})
Sender in Person`;
  }

  // 3. NOTICE TO QUIT (WBPT SEC 6)
  if (inputs.templateId === 'DOC-06-WBPT') {
    if (inputs.lang === 'bn') {
      return `রেজিস্টার্ড ডাকযোগে প্রাপ্তিস্বীকারপত্র (A/D) সহ প্রেরিত

তারিখ: ${today}

প্রতি: ${inputs.recipientName} (ভাড়াটে)
ঠিকানা: ${inputs.recipientAddress}

প্রেরক: ${inputs.senderName} (বাড়িওয়ালা)
ঠিকানা: ${inputs.senderAddress}
ফোন: ${inputs.senderPhone}

বিষয়: পশ্চিমবঙ্গ চত্বর প্রজাস্বত্ব আইন, ১৯৯৭ (WBPT Act)-এর ধারা ৬ অনুযায়ী ভাড়াটিয়াস্বত্ব অবসান এবং চত্বর খালি করে শান্তিপূর্ণ দখল হস্তান্তরের ১ (এক) মাসের বিধিবদ্ধ উচ্ছেদ নোটিশ (Notice to Quit)।

১. আপনি নিম্ন তফসিলভুক্ত চত্বরে আমার অধীনে মাসিক ₹${inputs.amount || ''}/- টাকা ভাড়ায় ইংরেজি ক্যালেন্ডার মাসের হিসেবে একজন মাসিক ভাড়াটে হিসেবে বসবাস করছেন:
   • ভাড়া চত্বরের সম্পূর্ণ তফসিল: ${inputs.propertyDetails || 'বর্ণিত চত্বর'}
২. আপনি আইনের ধারা ৬(১) অনুযায়ী নিম্নোক্ত উচ্ছেদের কারণ ঘটিয়েছেন:
   • ভিত্তি: ${inputs.referenceNumber || 'ধারাবাহিক ভাড়া খেলাপ / বাড়িওয়ালার যুক্তিসঙ্গত নিজস্ব প্রয়োজন'}
৩. অতএব ধারা ৬(৪) ও সম্পত্তি হস্তান্তর আইনের বিধান অনুযায়ী, অত্র এক মাসের নোটিশ দ্বারা আগামী মাসের সমাপ্তির সাথে সাথে আপনার ভাড়াটিয়াস্বত্ব চূড়ান্তভাবে অবসান (Determine) করা হলো।
৪. আপনাকে নির্দেশ দেওয়া হচ্ছে যে, আগামী ১ মাসের মেয়াদান্তে আপনি তফসিলভুক্ত চত্বর খালি করে শান্তিপূর্ণ খাস দখল বুঝিয়ে দিন।
৫. ব্যর্থ হলে আপনি বেআইনি দখলদার (Trespasser) হিসেবে গণ্য হবেন এবং আদালতে Title Eviction Suit দায়ের করে উচ্ছেদ ডিক্রি ও মেসনে প্রফিটস (Mesne Profits) আদায় করা হবে।

বিনীত,
_______________________
(${inputs.senderName})
মালিক / ইন পার্সন`;
    }

    if (inputs.lang === 'hi') {
      return `पंजीकृत डाक द्वारा पावती सहित (RPAD / Speed Post)

तारीख: ${today}
सेवा में: ${inputs.recipientName} (किरायेदार)
प्रेषक: ${inputs.senderName} (मकान मालिक)

विषय: पश्चिम बंगाल परिसर किरायेदारी अधिनियम, 1997 की धारा 6 के अंतर्गत किरायेदारी समाप्ति एवं 1 माह का वैधानिक बेदखली नोटिस (Notice to Quit)।

1. आप मेरे परिसर (${inputs.propertyDetails || 'वर्णित परिसर'}) में ₹${inputs.amount || ''}/- प्रति माह पर मासिक किरायेदार हैं।
2. आपने धारा 6(1) के अंतर्गत बेदखली के आधार उत्पन्न किए हैं: ${inputs.referenceNumber || 'किराया बकाया / निजी आवश्यकता'}।
3. अतः धारा 6(4) के तहत यह 1 माह का नोटिस जारी कर आपकी किरायेदारी समाप्त (Determine) की जाती है।
4. नोटिस अवधि समाप्ति पर परिसर खाली कर रिक्त आधिपत्य मुझे सौंप दें, अन्यथा सक्षम न्यायालय में बेदखली वाद (Title Eviction Suit) दायर कर हर्जाना (Mesne Profits) वसूला जाएगा।

भवदीय,
_______________________
(${inputs.senderName})`;
    }

    return `BY REGISTERED POST WITH ACKNOWLEDGEMENT DUE (RPAD) / SPEED POST

Date: ${today}

TO: ${inputs.recipientName} (Tenant)
Address: ${inputs.recipientAddress}

FROM: ${inputs.senderName} (Landlord)
Address: ${inputs.senderAddress}
Phone: ${inputs.senderPhone}

SUBJECT: STATUTORY ONE-MONTH NOTICE TO QUIT AND TO VACATE PREMISES UNDER SECTION 6 OF THE WEST BENGAL PREMISES TENANCY ACT, 1997.

1. That you are occupying the premises described below as a monthly tenant under me at an agreed rental of INR ${inputs.amount || '[Rent]'}/- per English calendar month:
   • PREMISES SCHEDULE: ${inputs.propertyDetails || 'The tenanted premises described herein'}
2. That you have incurred liability for eviction under Section 6(1) of the WBPT Act, 1997 on the grounds of: ${inputs.referenceNumber || 'Default in rent / Reasonable requirement for Landlord own use'}.
3. That in accordance with Section 6(4) of the Act read with Section 106 of the Transfer of Property Act, 1882, I hereby determine and extinguish your tenancy with the expiration of one clear calendar month from service hereof.
4. I call upon you to quit, vacate, and deliver peaceful and vacant possession of the premises to me on or before the expiry of the notice period.
5. In default, a Title Eviction Suit will be instituted before the competent Civil Court for recovery of possession, arrears, and mesne profits per diem alongside costs.

Yours faithfully,
_______________________
(${inputs.senderName})
Landlord in Person`;
  }

  // 4. RENT CONTROLLER DEPOSIT
  if (inputs.templateId === 'DOC-21-WBPT') {
    if (inputs.lang === 'bn') {
      return `রেজিস্টার্ড ডাকযোগে প্রাপ্তিস্বীকারপত্র (A/D) সহ প্রেরিত

তারিখ: ${today}
প্রতি: ${inputs.recipientName} (মালিক)
প্রেরক: ${inputs.senderName} (ভাড়াটে)
ফোন: ${inputs.senderPhone}

বিষয়: WBPT Act ধারা ২১ ও ২২ অনুযায়ী রেন্ট কন্ট্রোলারের দপ্তরে ভাড়া জমার লিখিত নোটিশ।

১. ভাড়া চত্বর: ${inputs.propertyDetails || 'ভাড়া চত্বর'}, ধার্য মাসিক ভাড়া: ₹${inputs.amount || ''}/- টাকা।
২. বিগত মাসের ভাড়া পেশ করা সত্ত্বেও আপনি গ্রহণে অস্বীকার করায় বা ধারা ২৩ অনুযায়ী রসিদ না দেওয়ায়, ধারা ২১(১) অনুযায়ী প্রত্যাখ্যানের ২১ দিনের মধ্যে রেন্ট কন্ট্রোলারের দপ্তরে সরকারি ট্রেজারি চালানের মাধ্যমে ভাড়া জমা দেওয়া হয়েছে:
   • চালান / কেস নং: ${inputs.referenceNumber || '[Challan No]'}, জমার তারিখ: ${inputs.primaryDate || today}, জমাকৃত অর্থ: ₹${inputs.amount || ''}/-।
৩. ধারা ২১(৪) অনুযায়ী উক্ত জমার ফলে আমি ভাড়া খেলাপের দায় থেকে সম্পূর্ণ সুরক্ষিত। ধারা ২২ অনুযায়ী বিজ্ঞ রেন্ট কন্ট্রোলারের দপ্তর থেকে উক্ত অর্থ উত্তোলন করে নিন।

বিনীত,
_______________________
(${inputs.senderName})
ভাড়াটে`;
    }

    if (inputs.lang === 'hi') {
      return `पंजीकृत डाक द्वारा प्रेषित (धारा 21 एवं 22 WBPT Act)

तारीख: ${today}
सेवा में: ${inputs.recipientName} (मकान मालिक)
प्रेषक: ${inputs.senderName} (किरायेदार)

विषय: रेंट कंट्रोलर के पास किराया जमा करने की विधिक सूचना।

1. आपके द्वारा किराया रसीद न देने या किराया अस्वीकार करने पर, मैंने धारा 21(1) के तहत 21 दिनों में रेंट कंट्रोलर कार्यालय में चालान सं. ${inputs.referenceNumber || '[चालान सं.]'} द्वारा ₹${inputs.amount || ''}/- जमा कर दिया है।
2. धारा 21(4) के तहत यह वैध भुगतान है। धारा 22 के तहत आप रेंट कंट्रोलर कार्यालय से यह राशि प्राप्त कर लें।

भवदीय,
_______________________
(${inputs.senderName})`;
    }

    return `BY REGISTERED POST WITH ACKNOWLEDGEMENT DUE (RPAD)

Date: ${today}

TO: ${inputs.recipientName} (Landlord)
Address: ${inputs.recipientAddress}

FROM: ${inputs.senderName} (Tenant)
Address: ${inputs.senderAddress}
Phone: ${inputs.senderPhone}

SUBJECT: STATUTORY NOTICE UNDER SECTIONS 21 & 22 OF THE WEST BENGAL PREMISES TENANCY ACT, 1997 INTIMATING DEPOSIT OF RENT WITH THE RENT CONTROLLER.

1. That the agreed monthly rent of INR ${inputs.amount || '[Rent]'}/- for premises situated at ${inputs.propertyDetails || 'premises'} was duly tendered, but you refused to accept or refused to grant a statutory receipt under Section 23.
2. That pursuant to Section 21(1) of the Act, I have deposited the rent with the Rent Controller within 21 days from refusal:
   • Case / Challan No: ${inputs.referenceNumber || '[Challan No]'}, Date: ${inputs.primaryDate || today}, Amount: INR ${inputs.amount || '[Amount]'}/-.
3. That under Section 21(4), said deposit constitutes valid discharge of rent. You are called upon under Section 22 to withdraw the deposited sum upon due identification.

Yours faithfully,
_______________________
(${inputs.senderName})
Tenant in Person`;
  }

  // 5. UTILITY RESTORATION
  if (inputs.templateId === 'DOC-27-WBPT') {
    if (inputs.lang === 'bn') {
      return `জরুরি নোটিশ / রেজিস্টার্ড ডাক ও সরাসরি হস্তান্তরিত

তারিখ: ${today}
প্রতি: ${inputs.recipientName} (মালিক)
প্রেরক: ${inputs.senderName} (ভাড়াটে)
ফোন: ${inputs.senderPhone}

বিষয়: WBPT Act ধারা ২৭ অনুযায়ী অন্যায়ভাবে বিচ্ছিন্ন করা বিদ্যুৎ/জল সংযোগ ২৪ ঘণ্টার মধ্যে পুনঃস্থাপনের জরুরি নোটিশ।

১. ভাড়া চত্বর ও সার্ভিস বিবরণ: ${inputs.propertyDetails || 'ভাড়া চত্বর ও মিটার নং'}।
২. বিগত ${inputs.primaryDate || today} তারিখে আপনি সম্পূর্ণ বেআইনিভাবে ও কোনো যুক্তিসঙ্গত কারণ ছাড়াই অপরিহার্য পরিষেবা: ${inputs.referenceNumber || 'বিদ্যুৎ ও পানীয় জল সংযোগ'} বিচ্ছিন্ন করেছেন।
৩. ধারা ২৭(১) অনুযায়ী বাড়িওয়ালা অপরিহার্য সরবরাহ বন্ধ করতে পারেন না।
৪. অতএব, নোটিশ প্রাপ্তির ২৪ (চব্বিশ) ঘণ্টার মধ্যে উক্ত সংযোগ পুনঃস্থাপন করুন। অন্যথায় ধারা ২৭(২) অনুযায়ী রেন্ট কন্ট্রোলারের নিকট পুলিশি সহায়তায় সংযোগ চালুর আবেদন করা হবে এবং ধারা ২৭(৩) অনুযায়ী আপনার উপর দৈনিক ₹৫০০/- টাকা পর্যন্ত বিধিবদ্ধ জরিমানা ধার্য করানো হবে।

বিনীত,
_______________________
(${inputs.senderName})
ভাড়াটে`;
    }

    if (inputs.lang === 'hi') {
      return `आपातकालीन विधिक नोटिस (धारा 27 परिसर किरायेदारी अधिनियम)

तारीख: ${today}
सेवा में: ${inputs.recipientName} (मकान मालिक)
प्रेषक: ${inputs.senderName} (किरायेदार)

विषय: 24 घंटे के भीतर आवश्यक बिजली/पानी आपूर्ति बहाली का वैधानिक नोटिस।

दिनांक ${inputs.primaryDate || today} को आपने परिसर (${inputs.propertyDetails || 'परिसर'}) की आवश्यक आपूर्ति (${inputs.referenceNumber || 'बिजली/पानी'}) अवैध रूप से काट दी है।
धारा 27 के तहत 24 घंटे के भीतर इसे बहाल करें, अन्यथा रेंट कंट्रोलर न्यायालय में धारा 27(2) के तहत पुलिस सहायता से बहाली एवं ₹500 प्रतिदिन जुर्माने हेतु वाद दायर किया जाएगा।

भवदीय,
_______________________
(${inputs.senderName})`;
    }

    return `BY REGISTERED POST WITH A/D & HAND DELIVERY

Date: ${today}

TO: ${inputs.recipientName} (Landlord)
Address: ${inputs.recipientAddress}

FROM: ${inputs.senderName} (Tenant)
Address: ${inputs.senderAddress}
Phone: ${inputs.senderPhone}

SUBJECT: 24-HOUR EMERGENCY STATUTORY NOTICE UNDER SECTION 27 OF THE WEST BENGAL PREMISES TENANCY ACT, 1997 FOR RESTORATION OF ESSENTIAL SUPPLIES SEVERED UNLAWFULLY.

1. That on ${inputs.primaryDate || today}, you or your agents unlawfully severed and withheld essential supplies enjoyed by me at ${inputs.propertyDetails || 'the premises'}: ${inputs.referenceNumber || 'Electricity / Water supply'}.
2. That under Section 27(1) of the Act, no landlord shall, without just cause, cut off or tamper with essential supplies.
3. I hereby call upon you to restore said essential supplies within 24 (twenty-four) hours from receipt hereof.
4. In default, an application will be filed under Section 27(2) before the Rent Controller for immediate reconnection with police assistance and daily statutory penalty up to INR 500/- per day under Section 27(3) and compensation.

Yours faithfully,
_______________________
(${inputs.senderName})
Tenant in Person`;
  }

  // 6. BUILDER DELAY (WBRERA SEC 18)
  if (inputs.templateId === 'DOC-18-RERA') {
    if (inputs.lang === 'bn') {
      return `রেজিস্টার্ড ডাকযোগে প্রাপ্তিস্বীকারপত্র (A/D) সহ প্রেরিত

তারিখ: ${today}
প্রতি: ${inputs.recipientName} (প্রমোটার / ডেভেলপার)
ঠিকানা: ${inputs.recipientAddress}

প্রেরক: ${inputs.senderName} (ফ্ল্যাট ক্রেতা / বরাদ্দপ্রাপ্ত)
ঠিকানা: ${inputs.senderAddress}
ফোন: ${inputs.senderPhone}

বিষয়: রিয়েল এস্টেট (RERA) আইন, ২০১৬-এর ধারা ১৮ এবং ১৯(৪) অনুযায়ী ফ্ল্যাট হস্তান্তরে দেরির ক্ষতিপূরণ, সুদ ও রিফান্ডের সংবিধিবদ্ধ আইনি নোটিশ।

১. আমি আপনার প্রজেক্টে ফ্ল্যাট ক্রয়ের চুক্তি সম্পাদন করেছিলাম:
   • প্রজেক্ট ও ইউনিট: ${inputs.propertyDetails || 'প্রজেক্ট ও ফ্ল্যাট বিবরণ'}
   • WBRERA রেজি: নং: ${inputs.referenceNumber || '[WBRERA Reg No]'}
   • এগ্রিমেন্ট সম্পাদনের তারিখ: ${inputs.primaryDate || '[তারিখ]'}
   • প্রতিশ্রুত হ্যান্ডওভারের তারিখ: ${inputs.secondaryDate || '[তারিখ]'}
   • মোট পরিশোধিত অর্থ: ₹${inputs.amount || '[টাকা]'}/-
২. রিয়েল এস্টেট আইনের ধারা ১৯(৪) অনুযায়ী সময়মতো ফ্ল্যাট পাওয়া আমার অধিকার। কিন্তু প্রতিশ্রুত তারিখ পেরিয়ে যাওয়া সত্ত্বেও আপনি বৈধ Occupancy Certificate (OC) সহ ফ্ল্যাটের দখল দিতে সম্পূর্ণ ব্যর্থ হয়েছেন।
৩. ধারা ১৮(১) অনুযায়ী অত্র নোটিশ মারফত দাবি জানাচ্ছি:
   • বিকল্প ক: আগামী ৩০ দিনের মধ্যে বৈধ OC সহ ফ্ল্যাটের চূড়ান্ত খাস দখল বুঝিয়ে দিন এবং প্রতিশ্রুত তারিখ থেকে হ্যান্ডওভার পর্যন্ত প্রতি মাসের দেরির জন্য এসবিআই সর্বোচ্চ MCLR + ২% হারে সুদ ক্ষতিপূরণ হিসেবে প্রদান করুন; অথবা
   • বিকল্প খ: আমার পরিশোধিত সমুদয় অর্থ ₹${inputs.amount || ''}/- টাকা জমার তারিখ থেকে আজ পর্যন্ত এসবিআই MCLR + ২% চক্রবৃদ্ধি সুদ সহ সম্পূর্ণ রিফান্ড দিন।
৪. ব্যর্থ হলে WBRERA কর্তৃপক্ষের নিকট Form-M অভিযোগ দায়ের করা হবে এবং ধারা ৪০(১) অনুযায়ী জেলাশাসকের মাধ্যমে সার্টিফিকেট রিকভারি কেসের মাধ্যমে সম্পত্তি ক্রোকের আবেদন করা হবে।

বিনীত,
_______________________
(${inputs.senderName})
বরাদ্দপ্রাপ্ত ক্রেতা`;
    }

    if (inputs.lang === 'hi') {
      return `पंजीकृत डाक द्वारा पावती सहित (RPAD / Speed Post)

तारीख: ${today}
सेवा में: ${inputs.recipientName} (बिल्डर / प्रमोटर)
प्रेषक: ${inputs.senderName} (आवंटी)

विषय: रेरा अधिनियम, 2016 की धारा 18 एवं 19(4) के तहत पजेशन में देरी पर ब्याज सहित राशि वापसी एवं क्षतिपूर्ति का वैधानिक नोटिस।

1. मैंने आपके प्रोजेक्ट (${inputs.propertyDetails || 'प्रोजेक्ट विवरण'}, रेरा सं: ${inputs.referenceNumber || '[रेरा सं.]'}) में कुल जमा राशि ₹${inputs.amount || '[राशि]'}/- के साथ अनुबंध निष्पादित किया था।
2. अनुबंध में प्रतिश्रुत तिथि (${inputs.secondaryDate || '[तारीख]'}) समाप्त होने पर भी आपने अधिभोग प्रमाण पत्र (OC/CC) के साथ पजेशन नहीं दिया है।
3. अतः धारा 18(1) के तहत मांग करता/करती हूँ कि 30 दिनों में एसबीआई एमसीएलआर + 2% ब्याज सहित फ्लैट का आधिपत्य सौंपें अथवा जमा की गई कुल राशि ₹${inputs.amount || ''}/- को ब्याज सहित पूर्णतः वापस करें।
4. अनुपालन न होने पर WBRERA अधिकरण में प्रपत्र 'एम' के तहत वाद एवं धारा 40(1) के तहत वसूली अधिपत्र (Recovery Warrant) जारी कराया जाएगा।

भवदीय,
_______________________
(${inputs.senderName})`;
    }

    return `BY REGISTERED POST WITH ACKNOWLEDGEMENT DUE (RPAD) / SPEED POST

Date: ${today}

TO: ${inputs.recipientName} (Promoter / Developer)
Address: ${inputs.recipientAddress}

FROM: ${inputs.senderName} (Allottee / Homebuyer)
Address: ${inputs.senderAddress}
Phone: ${inputs.senderPhone}

SUBJECT: STATUTORY LEGAL DEMAND NOTICE UNDER SECTIONS 18 & 19(4) OF THE REAL ESTATE (REGULATION AND DEVELOPMENT) ACT, 2016 (RERA) FOR DELAY IN HANDOVER OF APARTMENT, INTEREST AND COMPENSATION.

1. That I entered into an Agreement for Sale dated ${inputs.primaryDate || '[Date]'} for the residential unit:
   • DETAILS: ${inputs.propertyDetails || 'Unit No., Tower & Project Name'}
   • WBRERA REGISTRATION NO: ${inputs.referenceNumber || '[WBRERA Reg No]'}
   • COMMITTED POSSESSION DATE: ${inputs.secondaryDate || '[Date]'}
   • TOTAL CONSIDERATION PAID: INR ${inputs.amount || '[Amount]'}/-
2. That under Section 19(4) of the Act, I am entitled to possession complete with Occupancy Certificate (OC) within the agreed timeline. You have committed an unjustified delay.
3. That by virtue of Section 18(1) of the Act, I call upon you to comply within 30 (thirty) days:
   • OPTION A: Deliver physical vacant possession with valid OC and pay delay interest at SBI Highest MCLR + 2% per annum from committed date until actual handover; OR
   • OPTION B: Refund the entire consideration of INR ${inputs.amount || '[Amount]'}/- with compound interest at SBI Highest MCLR + 2% per annum from payment dates until realization.
4. In default, a statutory Form-M complaint will be filed before WBRERA and recovery warrants sought under Section 40(1) via the District Magistrate under the Bengal Public Demands Recovery Act, 1913.

Yours faithfully,
_______________________
(${inputs.senderName})
Allottee in Person`;
  }

  // 7. CONSUMER NOTICE (CPA 2019 SEC 35)
  if (inputs.templateId === 'DOC-35-CPA') {
    if (inputs.lang === 'bn') {
      return `রেজিস্টার্ড ডাকযোগে প্রাপ্তিস্বীকারপত্র (A/D) সহ প্রেরিত

তারিখ: ${today}
প্রতি: ${inputs.recipientName} (ব্যবসায়ী / সেবা প্রদানকারী সংস্থা)
ঠিকানা: ${inputs.recipientAddress}

প্রেরক: ${inputs.senderName} (ক্রেতা / গ্রাহক)
ঠিকানা: ${inputs.senderAddress}
ফোন: ${inputs.senderPhone}

বিষয়: ক্রেতা সুরক্ষা আইন, ২০১৯-এর ধারা ৩৫ সহ ধারা ২(৭), ২(১১) ও ২(৪৭) অনুযায়ী সেবার চরম ঘাটতি ও অন্যায্য বাণিজ্যিক আচরণের বিরুদ্ধে ১৫ দিনের সংবিধিবদ্ধ প্রাক-মামলা আইনি নোটিশ।

১. বিগত ${inputs.primaryDate || today} তারিখে ইনভয়েস/অর্ডার নম্বর: ${inputs.referenceNumber || '[Invoice No]'} মারফত আপনার নিকট থেকে পণ্য/সেবা গ্রহণ করেছিলাম (মূল্য: ₹${inputs.amount || '[টাকা]'}/-):
   • পণ্য বা সেবার বিবরণ: ${inputs.propertyDetails || 'পণ্য বা সেবার বিবরণ'}
২. উক্ত পণ্য/সেবা মারাত্মক ত্রুটিপূর্ণ প্রমাণিত হওয়ায় ধারা ২(১১) অনুযায়ী সেবার গাফিলতি (Deficiency in Service) এবং ধারা ২(৪৭) অনুযায়ী অন্যায্য বাণিজ্য (Unfair Trade Practice) প্রমাণিত হয়েছে। বারবার জানানো সত্ত্বেও সমাধান করেননি।
৩. নোটিশ প্রাপ্তির ১৫ দিনের মধ্যে নিম্নবর্ণিত দাবি পূরণ করুন:
   • পরিশোধিত মূল্যের সম্পূর্ণ রিফান্ড: ₹${inputs.amount || ''}/-
   • মানসিক যন্ত্রণা ও হয়রানির ক্ষতিপূরণ: ₹২৫,০০০/-
   • আইনি নোটিশের খরচ: ₹৫,০০০/-
৪. ব্যর্থ হলে জাতীয় e-Jagriti পোর্টালে জেলা ক্রেতা বিরোধ নিষ্পত্তি কমিশনের (DCDRC) নিকট ধারা ৩৫ অনুযায়ী মামলা দায়ের করা হবে।

বিনীত,
_______________________
(${inputs.senderName})
ক্রেতা`;
    }

    if (inputs.lang === 'hi') {
      return `पंजीकृत डाक द्वारा पावती सहित (RPAD / Speed Post)

तारीख: ${today}
सेवा में: ${inputs.recipientName} (विक्रेता / सेवा प्रदाता)
प्रेषक: ${inputs.senderName} (उपभोक्ता)

विषय: उपभोक्ता संरक्षण अधिनियम, 2019 की धारा 35 सपठित धारा 2(7), 2(11) व 2(47) के अंतर्गत 15-दिवसीय वैधानिक पूर्व-वाद नोटिस।

1. मैंने बिल सं. ${inputs.referenceNumber || '[इनवॉइस सं.]'} दिनांक ${inputs.primaryDate || today} के तहत ₹${inputs.amount || '[राशि]'}/- में उत्पाद/सेवा (${inputs.propertyDetails || 'विवरण'}) क्रय की थी।
2. प्रदान किया गया उत्पाद/सेवा अत्यंत दोषपूर्ण निकला, जो धारा 2(11) के तहत सेवा में कमी एवं धारा 2(47) के तहत अनुचित व्यापार व्यवहार है।
3. अतः 15 दिनों के भीतर मुझे पूर्ण राशि ₹${inputs.amount || ''}/- वापस करें तथा मानसिक प्रताड़ना व विधिक व्यय का भुगतान करें।
4. अनुपालन न होने पर राष्ट्रीय ई-जागृति पोर्टल के माध्यम से जिला उपभोक्ता आयोग में धारा 35 के तहत परिवाद संस्थित किया जाएगा।

भवदीय,
_______________________
(${inputs.senderName})`;
    }

    return `BY REGISTERED POST WITH ACKNOWLEDGEMENT DUE (RPAD) / SPEED POST

Date: ${today}

TO: ${inputs.recipientName} (Dealer / Service Provider)
Address: ${inputs.recipientAddress}

FROM: ${inputs.senderName} (Consumer)
Address: ${inputs.senderAddress}
Phone: ${inputs.senderPhone}

SUBJECT: STATUTORY PRE-LITIGATION LEGAL NOTICE UNDER SECTION 35 READ WITH SECTIONS 2(7), 2(11) & 2(47) OF THE CONSUMER PROTECTION ACT, 2019 FOR DEFICIENCY IN SERVICE AND UNFAIR TRADE PRACTICE.

1. That on ${inputs.primaryDate || today}, I purchased goods / availed services from you against commercial consideration:
   • INVOICE NO: ${inputs.referenceNumber || '[Invoice No]'}, DETAILS: ${inputs.propertyDetails || 'Product / Service Description'}, PAID: INR ${inputs.amount || '[Amount]'}/-.
2. That the product delivered / service rendered suffered from gross defects, constituting an actionable "Deficiency in Service" under Section 2(11) and "Unfair Trade Practice" under Section 2(47) of the Consumer Protection Act, 2019, which you failed to rectify.
3. I call upon you to comply within 15 (fifteen) days from receipt hereof:
   • Refund the full consideration of INR ${inputs.amount || '[Amount]'}/- with 12% interest per annum;
   • Pay INR 25,000/- towards damages for mental agony and physical harassment;
   • Pay INR 5,000/- towards legal notice expenses.
4. In default, a formal consumer complaint will be filed through the National Consumer e-Filing Portal (e-Jagriti) before the competent District Consumer Disputes Redressal Commission (DCDRC) under Section 35 of the Act.

Yours faithfully,
_______________________
(${inputs.senderName})
Consumer in Person`;
  }

  // 8. PARTITION NOTICE (ORDER XX CPC)
  if (inputs.templateId === 'DOC-PARTITION') {
    if (inputs.lang === 'bn') {
      return `রেজিস্টার্ড ডাকযোগে প্রাপ্তিস্বীকারপত্র (A/D) সহ প্রেরিত

তারিখ: ${today}
প্রতি: ${inputs.recipientName} (সহ-শরিক / সহ-উত্তরাধিকারীগণ)
ঠিকানা: ${inputs.recipientAddress}

প্রেরক: ${inputs.senderName} (সহ-শরিক / সহ-উত্তরাধিকারী)
ঠিকানা: ${inputs.senderAddress}
ফোন: ${inputs.senderPhone}

বিষয়: দেওয়ানি কার্যবিধির অর্ডার ২০ রুল ১৮ এবং উত্তরাধিকার আইন অনুযায়ী পৈতৃক সম্পত্তি আপস-বাটোয়ারা ও সীমানা নির্ধারণের ১৫ দিনের সংবিধিবদ্ধ আইনি নোটিশ।

১. আমাদের মূল পূর্বপুরুষ বিগত ${inputs.primaryDate || '[মৃত্যুর তারিখ]'} তারিখে কোনো উইল না রেখে মৃত্যুবরণ করেছেন:
   • বংশতালিকা ও আমার অংশ: ${inputs.referenceNumber || 'বৈধ ওয়ারিশান হিসেবে আমার অবিভক্ত অংশ'}
২. সুপ্রিম কোর্টের বিনীতা শর্মা বনাম রাকেশ শর্মা (২০২০) রায় অনুযায়ী কন্যারাও সমান সহ-অংশীদার (Coparcener)।
৩. যৌথ ভোগদখলে অসুবিধা হওয়ায় আমি আমার অংশ পরিমাপ করে আলাদা করার সিদ্ধান্ত নিয়েছি:
   • যৌথ সম্পত্তির তফসিল: ${inputs.propertyDetails || 'মৌজা, জেএল, খতিয়ান, দাগ ও আয়তন সহ সম্পূর্ণ বিবরণ'}
৪. অতএব, নোটিশ প্রাপ্তির ১৫ দিনের মধ্যে অনুমোদিত আমিন দ্বারা জমি পরিমাপ করিয়ে নির্দিষ্ট সীমানা সহ রেজিস্টার্ড বাটোয়ারা দলিল সম্পাদন করুন।
৫. ব্যর্থ হলে উপযুক্ত দেওয়ানি আদালতে Title Partition Suit দায়ের করে অ্যাডভোকেট কমিশনার নিয়োগের মাধ্যমে প্রাথমিক ও চূড়ান্ত ডিক্রি জারি করানো হবে এবং মামলার খরচ আপনার উপর ধার্য করা হবে।

বিনীত,
_______________________
(${inputs.senderName})
সহ-শরিক`;
    }

    if (inputs.lang === 'hi') {
      return `पंजीकृत डाक द्वारा पावती सहित (RPAD / Speed Post)

तारीख: ${today}
सेवा में: ${inputs.recipientName} (सह-वारिसगण)
प्रेषक: ${inputs.senderName} (सह-वारिस)

विषय: सीपीसी आदेश 20 नियम 18 एवं उत्तराधिकार अधिनियम के अंतर्गत पैतृक संपत्ति के सीमांकन व बंटवारे का 15-दिवसीय विधिक मांग नोटिस।

1. हमारे मूल पूर्वज का देहावसान दिनांक ${inputs.primaryDate || '[तारीख]'} को बिना वसीयत हुआ। वंशावली अनुसार मेरा हिस्सा: ${inputs.referenceNumber || 'मेरा अविभाजित हिस्सा'}।
2. विनीता शर्मा बनाम राकेश शर्मा निर्णय अनुसार पुत्रियों का भी समान समांशी अधिकार है।
3. संयुक्त आधिपत्य में असुविधा के कारण अनुसूची (${inputs.propertyDetails || 'मौजा, खतियान, दाग व रकबा'}) में वर्णित संपत्ति का विधिक सीमांकन आवश्यक है।
4. अतः 15 दिनों में अमीन द्वारा नापी कराकर पंजीकृत विभाजन विलेख (Registered Partition Deed) निष्पादित करें, अन्यथा सक्षम दीवानी न्यायालय में विभाजन वाद (Title Partition Suit) संस्थित किया जाएगा।

भवदीय,
_______________________
(${inputs.senderName})`;
    }

    return `BY REGISTERED POST WITH ACKNOWLEDGEMENT DUE (RPAD) / SPEED POST

Date: ${today}

TO: ${inputs.recipientName} (Co-heir / Co-sharer)
Address: ${inputs.recipientAddress}

FROM: ${inputs.senderName} (Co-heir / Co-sharer)
Address: ${inputs.senderAddress}
Phone: ${inputs.senderPhone}

SUBJECT: STATUTORY LEGAL NOTICE UNDER ORDER XX RULE 18 OF THE CODE OF CIVIL PROCEDURE, 1908 READ WITH THE HINDU / INDIAN SUCCESSION ACT DEMANDING AMICABLE PARTITION BY METES AND BOUNDS.

1. That our common ancestor / original recorded owner died intestate on ${inputs.primaryDate || '[Date]'}, leaving behind the legal heirs described in the pedigree:
   • PEDIGREE & SHARE: ${inputs.referenceNumber || 'Pedigree and specific undivided share claimed'}
2. That by virtue of Section 6 of the Hindu Succession Act as authoritatively declared in Vineeta Sharma v. Rakesh Sharma (2020), daughters hold equal coparcenary rights on par with sons.
3. That the joint properties in the Schedule hereunder have remained in joint possession, but joint enjoyment has become inconvenient and contentious:
   • SCHEDULE: ${inputs.propertyDetails || 'Mouza, J.L. No., P.S., Khatian, Plot/Dag, Classification & Area'}
4. I call upon you to convene within 15 (fifteen) days from receipt hereof, appoint an authorized licensed Amin / Surveyor, demarcate our respective shares by metes and bounds, and execute a Registered Deed of Partition.
5. In default, I shall institute a Title Partition Suit before the competent Civil Court of the Civil Judge, seeking a preliminary decree and appointment of a Survey-Passed Advocate Commissioner under Order XXVI Rules 13-14 CPC, with all litigation costs burdened upon you.

Yours faithfully,
_______________________
(${inputs.senderName})
Co-Sharer in Person`;
  }

  // 9. RTI FORM A (BL&LRO LAND RECORDS)
  if (inputs.templateId === 'DOC-06-RTI') {
    if (inputs.lang === 'bn') {
      return `তথ্য জানার অধিকার আইন, ২০০৫ অনুযায়ী 'ফর্ম এ' আবেদনপত্র (Form A)
রেজিস্টার্ড ডাকযোগে প্রেরিত / ব্যক্তিগত দাখিল

তারিখ: ${today}

প্রতি: স্টেট পাবলিক ইনফরমেশন অফিসার (SPIO) তথা BL&LRO, ${inputs.propertyDetails || 'বিএলএলআরও দপ্তর'}
আবেদনকারী: ${inputs.senderName}, ঠিকানা: ${inputs.senderAddress}, ফোন: ${inputs.senderPhone}

বিষয়: ধারা ৬(১) RTI Act অনুযায়ী অনিষ্পন্ন জমি মিউটেশন কেসের ফাইলের তথ্য ও সার্টিফাইড কপির আবেদন।

১. মামলার বিবরণ: বাংলারভূমি মিউটেশন আবেদন নং: ${inputs.referenceNumber || '[আবেদন নং]'}, দাখিলের তারিখ: ${inputs.primaryDate || '[তারিখ]'}, জমি: ${inputs.propertyDetails || 'মৌজা, খতিয়ান ও দাগ'}।
২. জিজ্ঞাস্য তথ্যাবলি:
   (ক) সিটিজেন চার্টারের ৩০ দিনের সময়সীমা অতিক্রান্ত হওয়া সত্ত্বেও মিউটেশন নিষ্পত্তি না হওয়ার লিখিত প্রশাসনিক কারণ দর্শানো হোক।
   (খ) উক্ত ফাইলের Daily File Movement Register ও নোট-শিটের (Note-sheet) সার্টিফাইড কপি দেওয়া হোক।
   (গ) আমিনের সরজমিনে পরিদর্শন রিপোর্ট ও শুনানির ডকেটের প্রত্যয়িত নকল প্রদান করা হোক।
   (ঘ) চূড়ান্ত খতিয়ান পর্চা জারির সম্ভাব্য সময়সীমা জানানো হোক।
৩. আবেদন ফি বাবদ কোর্ট ফি স্ট্যাম্প সংযুক্ত করা হলো। ধারা ৭(১) অনুযায়ী ৩০ দিনের মধ্যে তথ্যাদি সরবরাহ করে বাধিত করবেন।

বিনীত,
_______________________
(${inputs.senderName})
আবেদনকারী (নাগরিক)`;
    }

    if (inputs.lang === 'hi') {
      return `सूचना का अधिकार अधिनियम, 2005 के तहत प्रपत्र 'ए' (Form A) आवेदन
पंजीकृत डाक / व्यक्तिगत तामील

तारीख: ${today}
सेवा में: राज्य लोक सूचना अधिकारी (SPIO) सह BL&LRO कार्यालय, ${inputs.propertyDetails || 'बीएलएलআরও कार्यालय'}
आवेदक: ${inputs.senderName}, पता: ${inputs.senderAddress}, फोन: ${inputs.senderPhone}

विषय: धारा 6(1) आरटीआई के तहत लंबित भूमि म्यूटेशन मामले की प्रमाणित प्रति हेतु आवेदन।

1. विवरण: बांगलारभूमि म्यूटेशन आवेदन सं: ${inputs.referenceNumber || '[केस सं.]'}, आवेदन तिथि: ${inputs.primaryDate || '[तारीख]'}, भूमि: ${inputs.propertyDetails || 'मौजा व दाग'}।
2. वांछित सूचना:
   (क) 30-दिवसीय सिटीजन चार्टर समय सीमा बीतने पर भी म्यूटेशन लंबित रहने का कारण।
   (ख) आवेदन तिथि से अब तक फाइल मूवमेंट रजिस्टर एवं नोट-शीट की प्रमाणित प्रति।
   (ग) अमीन आख्या एवं फील्ड रिपोर्ट की प्रमाणित प्रतिलिपियां।
   (घ) म्यूटेशन प्रमाणपत्र जारी करने की संभावित तिथि।
अधिनियम की धारा 7(1) के तहत 30 दिनों में सूचना उपलब्ध कराएं। विहित शुल्क संलग्न है।

भवदीय,
_______________________
(${inputs.senderName})`;
    }

    return `FORM A: APPLICATION UNDER SECTION 6(1) OF THE RIGHT TO INFORMATION ACT, 2005
BY REGISTERED POST WITH A/D / HAND DELIVERY

Date: ${today}

TO: The State Public Information Officer (SPIO), Office of the BL&LRO, ${inputs.propertyDetails || 'Office of the BL&LRO'}
APPLICANT: ${inputs.senderName}, Address: ${inputs.senderAddress}, Phone: ${inputs.senderPhone}

SUBJECT: APPLICATION UNDER SECTION 6(1) OF THE RTI ACT, 2005 SEEKING CERTIFIED COPIES AND STATUS IN RESPECT OF PENDING MUTATION CASE.

1. PARTICULARS: Banglarbhumi Mutation Application No: ${inputs.referenceNumber || '[Application No]'}, Date of Submission: ${inputs.primaryDate || '[Date]'}, Land Schedule: ${inputs.propertyDetails || 'Mouza, Khatian and Plot particulars'}.
2. INFORMATION SOUGHT:
   (i) Exact administrative reasons recorded in writing for non-disposal within the mandatory 30-day period prescribed under the West Bengal Citizen's Charter.
   (ii) Certified true copies of Daily File Movement Register and Note-Sheets from date of institution until date.
   (iii) Certified copies of Field Enquiry / Amin Inspection Reports and hearing dockets.
   (iv) Tentative date by which the formal RoR / Mutation Certificate shall be issued.
3. Statutory RTI application fee paid via Court Fee Stamp affixed herewith. Kindly provide certified information within 30 days under Section 7(1).

Yours faithfully,
_______________________
(${inputs.senderName})
Applicant (Citizen of India)`;
  }

  // 10. MAINTENANCE (BNSS 144)
  if (inputs.templateId === 'DOC-144-BNSS') {
    if (inputs.lang === 'bn') {
      return `রেজিস্টার্ড ডাকযোগে প্রাপ্তিস্বীকারপত্র (A/D) সহ প্রেরিত

তারিখ: ${today}
প্রতি: ${inputs.recipientName} (বিপক্ষ / ভরণপোষণে বাধ্য ব্যক্তি)
ঠিকানা: ${inputs.recipientAddress}

প্রেরক: ${inputs.senderName} (দাবিদার)
ঠিকানা: ${inputs.senderAddress}
ফোন: ${inputs.senderPhone}

বিষয়: ভারতীয় নাগরিক সুরক্ষা সংহিতা, ২০২৩ (BNSS)-এর ধারা ১৪৪ (পূর্বতন ১২৫ ধারা CrPC) অনুযায়ী স্ত্রী, সন্তান ও বয়োবৃদ্ধ পিতামাতার বিধিবদ্ধ খোরপোশ দাবির চূড়ান্ত আইনি নোটিশ।

১. পারিবারিক সম্পর্ক ও দায়িত্ব:
   • সম্পর্ক ও প্রতিপক্ষের আয়ের বিবরণ: ${inputs.referenceNumber || 'বৈধ স্ত্রী / সন্তান / বয়োবৃদ্ধ পিতা-মাতা'}
   • বিবাহ / দায়িত্বের শুরু বা পরিত্যাগের তারিখ: ${inputs.primaryDate || '[তারিখ]'}
২. আপনি কোনো আইনসঙ্গত কারণ ছাড়াই চরম অসহায় অবস্থায় ফেলে ইচ্ছাকৃতভাবে পরিত্যাগ (Willful Desertion) করেছেন এবং ভরণপোষণ দিতে অস্বীকার করছেন।
৩. আমার নিজস্ব কোনো আয়ের উৎস নেই। সুপ্রিম কোর্টের যুগান্তকারী রায় (Rajnesh v. Neha, 2020)-এর নির্দেশ অনুযায়ী পক্ষগণের জীবনযাত্রার মানের সমতা বজায় রাখা আইনত বাধ্যতামূলক।
৪. নোটিশ প্রাপ্তির ১৫ (পনেরো) দিনের মধ্যে নিম্নবর্ণিত ভরণপোষণ পরিশোধ নিশ্চিত করার নির্দেশ দেওয়া হচ্ছে:
   • মাসিক খোরপোশের অঙ্ক: ₹${inputs.amount || ''}/- টাকা (প্রতি মাসের ৭ তারিখের মধ্যে প্রদেয়)
   • চিকিৎসা ও জরুরি খরচ: ₹১৫,০০০/-
   • আইনি নোটিশের খরচ: ₹৫,০০০/-
৫. ব্যর্থ হলে উপযুক্ত চিফ জুডিশিয়াল ম্যাজিস্ট্রেট / ফ্যামিলি কোর্টে ধারা ১৪৪ BNSS অনুযায়ী খোরপোশ মামলা দায়ের করা হবে, ৬০ দিনের মধ্যে অন্তর্বর্তীকালীন খোরপোশ (Interim Maintenance) মঞ্জুর এবং ধারা ১৪৪(৩) BNSS অনুযায়ী বেতন ও সম্পত্তি ক্রোকের আবেদন করা হবে।

বিনীত,
_______________________
(${inputs.senderName})
দাবিদার (ইন পার্সন)`;
    }

    if (inputs.lang === 'hi') {
      return `पंजीकृत डाक द्वारा पावती सहित (RPAD / Speed Post)

तारीख: ${today}
सेवा में: ${inputs.recipientName} (विपक्षी / भरण-पोषण हेतु दायी)
प्रेषक: ${inputs.senderName} (दावेदार)

विषय: भारतीय नागरिक सुरक्षा संहिता, 2023 की धारा 144 (पूर्व धारा 125 दंड प्रक्रिया) के अंतर्गत वैधानिक गुजारा भत्ता मांग नोटिस।

1. संबंध एवं दायित्व: ${inputs.referenceNumber || 'धर्मपत्नी / संतान / वृद्ध माता-पिता'}, विवाह/परित्याग की तिथि: ${inputs.primaryDate || '[तारीख]'}।
2. आपने बिना किसी वैध कारण के मेरा परित्याग कर दिया है और भरण-पोषण करने से इनकार कर रहे हैं। मेरे पास आजीविका का साधन नहीं है, जबकि आप पर्याप्त आय के स्वामी हैं।
3. सर्वोच्च न्यायालय (रजनेश बनाम नेहा, 2020) के अनुसार पत्नी एवं आश्रितों को पति के समान जीवन स्तर का अधिकार प्राप्त है।
4. अतः 15 दिनों के भीतर मासिक गुजारा भत्ता ₹${inputs.amount || ''}/- प्रति माह का नियमित भुगतान सुनिश्चित करें।
5. व्यतिक्रम पर मुख्य न्यायिक दंडाधिकारी अथवा कुटुंब न्यायालय में धारा 144 BNSS के तहत वाद संस्थित कर धारा 144(3) के तहत संपत्ति कुर्की एवं वेतन कटौती कराई जाएगी।

भवदीय,
_______________________
(${inputs.senderName})`;
    }

    return `BY REGISTERED POST WITH ACKNOWLEDGEMENT DUE (RPAD) / SPEED POST

Date: ${today}

TO: ${inputs.recipientName} (Respondent)
Address: ${inputs.recipientAddress}

FROM: ${inputs.senderName} (Claimant)
Address: ${inputs.senderAddress}
Phone: ${inputs.senderPhone}

SUBJECT: STATUTORY PRE-LITIGATION LEGAL NOTICE DEMANDING SPOUSAL, CHILD AND PARENTAL MAINTENANCE UNDER SECTION 144 OF THE BHARATIYA NAGARIK SURAKSHA SANHITA, 2023 (BNSS).

1. That the relationship between us and subsisting obligations are set out hereunder:
   • PARTICULARS: ${inputs.referenceNumber || 'Legally wedded wife / minor child / dependent parents with respondent income details'}
   • DATE OF MARRIAGE / DESERTION: ${inputs.primaryDate || '[Date]'}
2. That you have willfully neglected, abandoned, and refused to maintain me without lawful excuse, leaving me in destitution.
3. That I have no independent source of income, whereas you are a person of substantial means.
4. That under the mandatory guidelines laid down by the Supreme Court in Rajnesh v. Neha (2020), you are obligated to file an Affidavit of Assets and Liabilities and provide adequate maintenance.
5. I hereby call upon you to pay the following sums within 15 (fifteen) days from receipt hereof:
   • Monthly Maintenance: INR ${inputs.amount || '[Amount]'}/- (payable on or before 7th of every month);
   • Medical/Educational advance: INR 15,000/-;
   • Legal notice expenses: INR 5,000/-.
6. In default, I shall institute a petition under Section 144 of the BNSS, 2023 before the Court of the Chief Judicial Magistrate / Family Court, seeking a 60-day interim disposal order and conditional attachment of salary/immovable properties under Section 144(3).

Yours faithfully,
_______________________
(${inputs.senderName})
Claimant in Person`;
  }

  // DEFAULT
  return `BY REGISTERED POST WITH ACKNOWLEDGEMENT DUE (RPAD)

Date: ${today}
TO: ${inputs.recipientName}
FROM: ${inputs.senderName}

SUBJECT: STATUTORY LEGAL NOTICE UNDER ${t.governingAct.en.toUpperCase()}.

1. Particulars: ${inputs.propertyDetails || 'Details'}.
2. Demand: ${inputs.amount ? `INR ${inputs.amount}/-` : 'Compliance'}.
3. Comply within ${t.curePeriodDays} days from receipt.

Yours faithfully,
_______________________
(${inputs.senderName})
Sender in Person`;
}

/**
 * Clean Vector PDF Generation with Updated Safe-Harbor Footer
 */
export function generateNoticePdf(inputs: ProDrafterInputs, isWatermarked = false): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const marginLeft = 25;
  const marginRight = 20;
  const contentWidth = pageWidth - marginLeft - marginRight;

  if (isWatermarked) {
    doc.setTextColor(220, 220, 220);
    doc.setFontSize(32);
    doc.setFont('times', 'bold');
    doc.text('NYAYAMITRA PRO PREVIEW', pageWidth / 2, pageHeight / 2 - 20, { align: 'center', angle: 45 });
  }

  doc.setTextColor(15, 43, 72);
  doc.setFontSize(9);
  doc.setFont('times', 'bold');
  doc.text('REGISTERED POST WITH A/D / SPEED POST', marginLeft, 20);

  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.3);
  doc.line(marginLeft, 22, pageWidth - marginRight, 22);

  doc.setTextColor(20, 20, 20);
  doc.setFontSize(10.5);
  doc.setFont('times', 'normal');

  const fullText = generateNoticeText(inputs);
  const splitLines = doc.splitTextToSize(fullText, contentWidth);

  let cursorY = 30;
  const lineHeight = 5.2;

  for (let i = 0; i < splitLines.length; i++) {
    if (cursorY + lineHeight > pageHeight - 25) {
      printSafeHarborFooter(doc, pageWidth, pageHeight);
      doc.addPage();
      cursorY = 25;

      if (isWatermarked) {
        doc.setTextColor(220, 220, 220);
        doc.setFontSize(32);
        doc.setFont('times', 'bold');
        doc.text('NYAYAMITRA PRO PREVIEW', pageWidth / 2, pageHeight / 2 - 20, { align: 'center', angle: 45 });
        doc.setTextColor(20, 20, 20);
        doc.setFontSize(10.5);
        doc.setFont('times', 'normal');
      }
    }
    doc.text(splitLines[i], marginLeft, cursorY);
    cursorY += lineHeight;
  }

  printSafeHarborFooter(doc, pageWidth, pageHeight);
  return doc;
}

function printSafeHarborFooter(doc: jsPDF, pageWidth: number, pageHeight: number) {
  doc.setDrawColor(220, 220, 220);
  doc.setLineWidth(0.2);
  doc.line(20, pageHeight - 16, pageWidth - 20, pageHeight - 16);

  doc.setTextColor(100, 116, 139);
  doc.setFontSize(7.2);
  doc.setFont('times', 'italic');

  const footerText = 'NOTE: Self-compiled statutory draft generated by user via NyayaMitra Automated Software at https://nyayamitrawb.in';

  doc.text(footerText, pageWidth / 2, pageHeight - 11, {
    align: 'center',
    maxWidth: pageWidth - 36
  });
}

export function downloadNoticePdf(inputs: ProDrafterInputs, isWatermarked = false, customFilename?: string): void {
  const doc = generateNoticePdf(inputs, isWatermarked);
  const filename = customFilename || `NyayaMitra_Notice_${inputs.templateId}_${Date.now()}.pdf`;
  doc.save(filename);
}

export function downloadNoticeDocx(inputs: ProDrafterInputs, customFilename?: string): void {
  const text = generateNoticeText(inputs);
  const t = PRO_TEMPLATES[inputs.templateId] || PRO_TEMPLATES['DOC-138-NI'];

  const formattedHtml = `
    <!DOCTYPE html>
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
      <meta charset="utf-8">
      <title>${t.title.en}</title>
      <style>
        body { font-family: 'Times New Roman', serif; font-size: 12pt; line-height: 1.5; margin: 1in; color: #000; }
        .header { font-weight: bold; text-decoration: underline; margin-bottom: 20px; font-size: 11pt; }
        .content { white-space: pre-wrap; text-align: justify; }
        .footer { margin-top: 40px; font-size: 8pt; color: #666; border-top: 1px solid #ccc; padding-top: 8px; font-style: italic; }
      </style>
    </head>
    <body>
      <div class="header">DISPATCH BY REGISTERED POST WITH A/D (RPAD) / SPEED POST</div>
      <div class="content">${text.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
      <div class="footer">
        NOTE: Self-compiled statutory draft generated by user via NyayaMitra Automated Software at https://nyayamitrawb.in
      </div>
    </body>
    </html>
  `;

  const blob = new Blob(['\ufeff', formattedHtml], { type: 'application/msword;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = customFilename || `NyayaMitra_Draft_${inputs.templateId}_${Date.now()}.doc`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
