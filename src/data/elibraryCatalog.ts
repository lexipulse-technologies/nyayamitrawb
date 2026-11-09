/**
 * NyayaMitra E-Library Pro — Comprehensive TypeScript Catalog
 *
 * Maps all 88 PDF statutes to the E-Library Pro tree hierarchy.
 * Generated from E-LIBRARY-PRO/STATUTES/ directory structure (verified 1:1
 * against public/statutes/ on disk).
 *
 * Total: 88 validated PDFs
 * Structure: STATUTES → Central_Acts, West_Bengal_Acts, Regulations_Rules
 *
 * Source: E-LIBRARY-PRO/STATUTES/ (India Code bare acts)
 */

import type { Language } from '../types/legal';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface ELibraryPDF {
  id: string;
  fileName: string;
  displayName: Record<Language, string>;
  relativePath: string;
  publicUrl: string;
  category: ELibraryCategory;
  subCategory: string;
  sizeKB: number;
  actYear?: number;
  keywords: Record<Language, string[]>;
}

export type ELibraryCategory =
  | 'central_acts'
  | 'west_bengal_acts'
  | 'regulations_rules'
  | 'judicial_precedents';

export type CentralActsSubCategory =
  | 'criminal_law_2023'
  | 'civil_procedure'
  | 'property_law'
  | 'family_law'
  | 'commercial_law'
  | 'consumer_protection';

export type WestBengalActsSubCategory =
  | 'land_reforms'
  | 'tenancy'
  | 'municipal'
  | 'special_acts';

export type RegulationsRulesSubCategory =
  | 'cpc_orders'
  | 'rbi_guidelines'
  | 'irdai_regulations'
  | 'trai_regulations'
  | 'sebi_regulations'
  | 'ccpa_guidelines';

export type JudicialPrecedentsSubCategory =
  | 'supreme_court'
  | 'high_courts'
  | 'tribunals';

export type ELibrarySubCategory =
  | CentralActsSubCategory
  | WestBengalActsSubCategory
  | RegulationsRulesSubCategory
  | JudicialPrecedentsSubCategory;

export interface ELibraryTreeNode {
  id: string;
  label: Record<Language, string>;
  icon?: string;
  children?: ELibraryTreeNode[];
  pdfs?: ELibraryPDF[];
  category: ELibraryCategory;
  subCategory?: ELibrarySubCategory;
  path?: string;
}

export interface ELibraryCatalogData {
  version: string;
  generatedAt: string;
  totalPDFs: number;
  totalSizeKB: number;
  categories: ELibraryTreeNode[];
  pdfs: ELibraryPDF[];
  subCategoryMap: Record<ELibrarySubCategory, { label: Record<Language, string>; icon: string }>;
  categoryMap: Record<ELibraryCategory, { label: Record<Language, string>; icon: string }>;
}

// ============================================================================
// CONSTANT MAPPINGS
// ============================================================================

const CATEGORY_LABELS: Record<ELibraryCategory, Record<Language, string>> = {
  central_acts: {
    en: 'Central Acts',
    bn: 'কেন্দ্রীয় আইন',
    hi: 'केंद्रीय अधिनियम'
  },
  west_bengal_acts: {
    en: 'West Bengal Acts',
    bn: 'পশ্চিমবঙ্গ আইন',
    hi: 'पश्चिम बंगाल अधिनियम'
  },
  regulations_rules: {
    en: 'Regulations & Rules',
    bn: 'বিধি ও বিনিয়ম',
    hi: 'विनियम और नियम'
  },
  judicial_precedents: {
    en: 'Judicial Precedents',
    bn: 'ন্যায়িক নজির',
    hi: 'न्यायिक नजीर'
  }
};

const CENTRAL_ACTS_SUBCATEGORY_LABELS: Record<CentralActsSubCategory, Record<Language, string>> = {
  criminal_law_2023: {
    en: 'Criminal Law (2023)',
    bn: 'ফৌজদারি আইন (২০২৩)',
    hi: 'आपराधिक कानून (2023)'
  },
  civil_procedure: {
    en: 'Civil Procedure',
    bn: 'দেওয়ানি কার্যবিধি',
    hi: 'सिविल प्रक्रिया'
  },
  property_law: {
    en: 'Property Law',
    bn: 'সম্পত্তি আইন',
    hi: 'संपत्ति कानून'
  },
  family_law: {
    en: 'Family Law',
    bn: 'পারিবারিক আইন',
    hi: 'पारिवारिक कानून'
  },
  commercial_law: {
    en: 'Commercial Law',
    bn: 'বাণিজ্যিক আইন',
    hi: 'वाणिज्यिक कानून'
  },
  consumer_protection: {
    en: 'Consumer Protection',
    bn: 'উপভোক্তা সুরক্ষা',
    hi: 'उपभोक्ता संरक्षण'
  }
};

const WB_ACTS_SUBCATEGORY_LABELS: Record<WestBengalActsSubCategory, Record<Language, string>> = {
  land_reforms: {
    en: 'Land Reforms',
    bn: 'ভূমি সংস্কার',
    hi: 'भूमि सुधार'
  },
  tenancy: {
    en: 'Tenancy',
    bn: 'প্রজাস্বত্ব ও ভাড়াটিয়া',
    hi: 'किरायेदारी'
  },
  municipal: {
    en: 'Municipal',
    bn: 'পৌর আইন',
    hi: 'नगरपालिका'
  },
  special_acts: {
    en: 'Special Acts',
    bn: 'বিশেষ আইন',
    hi: 'विशेष अधिनियम'
  }
};

const REGULATIONS_SUBCATEGORY_LABELS: Record<RegulationsRulesSubCategory, Record<Language, string>> = {
  cpc_orders: {
    en: 'CPC Orders',
    bn: 'সিপিসি আদেশ',
    hi: 'सीपीसी आदेश'
  },
  rbi_guidelines: {
    en: 'RBI Guidelines',
    bn: 'আরবিআই নির্দেশিকা',
    hi: 'आरबीआई दिशानिर्देश'
  },
  irdai_regulations: {
    en: 'IRDAI Regulations',
    bn: 'আইআরডিএআই বিনিয়ম',
    hi: 'आईआरडीएआई विनियम'
  },
  trai_regulations: {
    en: 'TRAI Regulations',
    bn: 'ট্রাই বিনিয়ম',
    hi: 'ट्राई विनियम'
  },
  sebi_regulations: {
    en: 'SEBI Regulations',
    bn: 'সেবি বিনিয়ম',
    hi: 'सेबी विनियम'
  },
  ccpa_guidelines: {
    en: 'CCPA Guidelines',
    bn: 'সিসিপিএ নির্দেশিকা',
    hi: 'सीसीपीए दिशानिर्देश'
  }
};

const JUDICIAL_SUBCATEGORY_LABELS: Record<JudicialPrecedentsSubCategory, Record<Language, string>> = {
  supreme_court: {
    en: 'Supreme Court',
    bn: 'সুপ্রিম কোর্ট',
    hi: 'सुप्रीम कोर्ट'
  },
  high_courts: {
    en: 'High Courts',
    bn: 'হাই কোর্ট',
    hi: 'हाई कोर्ट'
  },
  tribunals: {
    en: 'Tribunals',
    bn: 'ট্রাইব্যুনাল',
    hi: 'ट्रिब्यूनल'
  }
};

const CATEGORY_ICONS: Record<ELibraryCategory, string> = {
  central_acts: 'Scale',
  west_bengal_acts: 'Landmark',
  regulations_rules: 'FileText',
  judicial_precedents: 'Gavel'
};

const SUBCATEGORY_ICONS: Record<string, string> = {
  criminal_law_2023: 'Shield',
  civil_procedure: 'FileText',
  property_law: 'Home',
  family_law: 'Users',
  commercial_law: 'Briefcase',
  consumer_protection: 'ShieldAlert',
  land_reforms: 'MapPin',
  tenancy: 'Key',
  municipal: 'Building',
  special_acts: 'Star',
  cpc_orders: 'ListOrdered',
  rbi_guidelines: 'Banknote',
  irdai_regulations: 'Shield',
  trai_regulations: 'Signal',
  sebi_regulations: 'TrendingUp',
  ccpa_guidelines: 'ShieldCheck',
  supreme_court: 'Gavel',
  high_courts: 'Scale',
  tribunals: 'Building2'
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function createPDF(
  id: string,
  fileName: string,
  displayName: Record<Language, string>,
  relativePath: string,
  category: ELibraryCategory,
  subCategory: string,
  sizeKB: number,
  actYear?: number,
  keywords: Record<Language, string[]> = { en: [], bn: [], hi: [] }
): ELibraryPDF {
  return {
    id,
    fileName,
    displayName,
    relativePath,
    publicUrl: `/statutes/${relativePath}`,
    category,
    subCategory,
    sizeKB,
    actYear,
    keywords
  };
}

// ============================================================================
// COMPREHENSIVE PDF CATALOG — 88 UNIQUE VALIDATED PDFs (no duplicates)
// ============================================================================

export const ELIBRARY_PDFS: ELibraryPDF[] = [
  // ========================================================================
  // CENTRAL ACTS — CRIMINAL LAW 2023 (3 PDFs)
  // ========================================================================
  createPDF(
    'bns-2023',
    'BNS_2023.pdf',
    { en: 'Bharatiya Nyaya Sanhita, 2023', bn: 'ভারতীয় ন্যায় সংহিতা, ২০২৩', hi: 'भारतीय न्याय संहिता, 2023' },
    'Central_Acts/Criminal_Law_2023/BNS_2023.pdf',
    'central_acts',
    'criminal_law_2023',
    1089,
    2023,
    { en: ['BNS', 'Criminal Law', 'IPC Replacement'], bn: ['বিএনএস', 'ফৌজদারি আইন'], hi: ['बीएनएस', 'आपराधिक कानून'] }
  ),
  createPDF(
    'bnss-2023',
    'BNSS_2023.pdf',
    { en: 'Bharatiya Nagarik Suraksha Sanhita, 2023', bn: 'ভারতীয় নাগরিক সুরক্ষা সংহিতা, ২০২৩', hi: 'भारतीय नागरिक सुरक्षा संहिता, 2023' },
    'Central_Acts/Criminal_Law_2023/BNSS_2023.pdf',
    'central_acts',
    'criminal_law_2023',
    2805,
    2023,
    { en: ['BNSS', 'CrPC Replacement', 'Criminal Procedure'], bn: ['বিএনএসএস', 'ফৌজদারি কার্যবিধি'], hi: ['बीएनएसएस', 'आपराधिक प्रक्रिया'] }
  ),
  createPDF(
    'bsa-2023',
    'BSA_2023.pdf',
    { en: 'Bharatiya Sakshya Adhiniyam, 2023', bn: 'ভারতীয় সাক্ষ্য আইন, ২০২৩', hi: 'भारतीय साक्ष्य अधिनियम, 2023' },
    'Central_Acts/Criminal_Law_2023/BSA_2023.pdf',
    'central_acts',
    'criminal_law_2023',
    628,
    2023,
    { en: ['BSA', 'Evidence Act', 'Evidence Law'], bn: ['বিএসএ', 'সাক্ষ্য আইন'], hi: ['बीएसए', 'साक्ष्य अधिनियम'] }
  ),

  // ========================================================================
  // CENTRAL ACTS — CIVIL PROCEDURE (7 PDFs)
  // ========================================================================
  createPDF(
    'cpc-1908',
    'CPC_1908.pdf',
    { en: 'Code of Civil Procedure, 1908', bn: 'দেওয়ানি কার্যবিধি, ১৯০৮', hi: 'सिविल प्रक्रिया संहिता, 1908' },
    'Central_Acts/Civil_Procedure/CPC_1908.pdf',
    'central_acts',
    'civil_procedure',
    4426,
    1908,
    { en: ['CPC', 'Civil Procedure', 'Civil Court'], bn: ['সিপিসি', 'দেওয়ানি কার্যবিধি'], hi: ['सीपीसी', 'सिविल प्रक्रिया'] }
  ),
  createPDF(
    'limitation-act-1963',
    'Limitation_Act_1963.pdf',
    { en: 'Limitation Act, 1963', bn: 'সময়সীমা আইন, ১৯৬৩', hi: 'परिसीमा अधिनियम, 1963' },
    'Central_Acts/Civil_Procedure/Limitation_Act_1963.pdf',
    'central_acts',
    'civil_procedure',
    414,
    1963,
    { en: ['Limitation', 'Time Limits', 'Prescription'], bn: ['সময়সীমা', 'তামাদি'], hi: ['परिसीमा', 'समयसीमा'] }
  ),
  createPDF(
    'registration-act-1908',
    'Registration_Act_1908.pdf',
    { en: 'Registration Act, 1908', bn: 'নিবন্ধন আইন, ১৯০৮', hi: 'पंजीकरण अधिनियम, 1908' },
    'Central_Acts/Civil_Procedure/Registration_Act_1908.pdf',
    'central_acts',
    'civil_procedure',
    871,
    1908,
    { en: ['Registration', 'Deed Registration', 'Property Registration'], bn: ['নিবন্ধন', 'দলিল নিবন্ধন'], hi: ['पंजीकरण', 'दस्तावेज़ पंजीकरण'] }
  ),
  createPDF(
    'evidence-act-1872',
    'The_Evidence_Act_1872.pdf',
    { en: 'The Evidence Act, 1872', bn: 'সাক্ষ্য আইন, ১৮৭২', hi: 'साक्ष्य अधिनियम, 1872' },
    'Central_Acts/Civil_Procedure/The_Evidence_Act_1872.pdf',
    'central_acts',
    'civil_procedure',
    491,
    1872,
    { en: ['Evidence', 'Evidence Law', 'Indian Evidence Act'], bn: ['সাক্ষ্য', 'সাক্ষ্য আইন'], hi: ['साक्ष्य', 'साक्ष्य अधिनियम'] }
  ),
  createPDF(
    'legal-services-authorities-act-1987',
    'The_Legal_Services_Authorities_Act_1987.pdf',
    { en: 'The Legal Services Authorities Act, 1987', bn: 'আইনি সেবা কর্তৃপক্ষ আইন, ১৯৮৭', hi: 'विधिक सेवा प्राधिकरण अधिनियम, 1987' },
    'Central_Acts/Civil_Procedure/The_Legal_Services_Authorities_Act_1987.pdf',
    'central_acts',
    'civil_procedure',
    418,
    1987,
    { en: ['Legal Aid', 'Legal Services', 'Free Legal Aid'], bn: ['আইনি সাহায্য', 'আইনি সেবা'], hi: ['कानूनी सहायता', 'विधिक सेवा'] }
  ),
  createPDF(
    'partition-act-1893',
    'The_Partition_Act_1893.pdf',
    { en: 'The Partition Act, 1893', bn: 'বিভাজন আইন, ১৮৯৩', hi: 'विभाजन अधिनियम, 1893' },
    'Central_Acts/Civil_Procedure/The_Partition_Act_1893.pdf',
    'central_acts',
    'civil_procedure',
    393,
    1893,
    { en: ['Partition', 'Property Partition', 'Joint Property'], bn: ['বিভাজন', 'সম্পত্তি বিভাজন'], hi: ['विभाजन', 'संपत्ति विभाजन'] }
  ),
  createPDF(
    'specific-relief-act-1963',
    'The_Specific_Relief_Act_1963.pdf',
    { en: 'The Specific Relief Act, 1963', bn: 'বিশিষ্ট প্রতিকার আইন, ১৯৬৩', hi: 'विशिष्ट अनुतोष अधिनियम, 1963' },
    'Central_Acts/Civil_Procedure/The_Specific_Relief_Act_1963.pdf',
    'central_acts',
    'civil_procedure',
    339,
    1963,
    { en: ['Specific Relief', 'Injunction', 'Specific Performance'], bn: ['বিশিষ্ট প্রতিকার', 'নিষেধাজ্ঞা'], hi: ['विशिष्ट अनुतोष', 'अज्ञेशन'] }
  ),

  // ========================================================================
  // CENTRAL ACTS — COMMERCIAL LAW (16 PDFs)
  // ========================================================================
  createPDF(
    'contract-act-1872',
    'Contract_Act_1872.pdf',
    { en: 'Indian Contract Act, 1872', bn: 'ভারতীয় চুক্তি আইন, ১৮৭২', hi: 'भारतीय अनुबंध अधिनियम, 1872' },
    'Central_Acts/Commercial_Law/Contract_Act_1872.pdf',
    'central_acts',
    'commercial_law',
    696,
    1872,
    { en: ['Contract', 'Contract Law', 'Agreement'], bn: ['চুক্তি', 'চুক্তি আইন'], hi: ['अनुबंध', 'अनुबंध कानून'] }
  ),
  createPDF(
    'major-port-authorities-act-2021',
    'Major_Port_Authorities_Act_2021.pdf',
    { en: 'Major Port Authorities Act, 2021', bn: 'প্রধান বন্দর কর্তৃপক্ষ আইন, ২০২১', hi: 'प्रमुख बंदरगाह प्राधिकरण अधिनियम, 2021' },
    'Central_Acts/Commercial_Law/Major_Port_Authorities_Act_2021.pdf',
    'central_acts',
    'commercial_law',
    514,
    2021,
    { en: ['Major Port', 'Port Authority', 'Shipping'], bn: ['প্রধান বন্দর', 'বন্দর কর্তৃপক্ষ'], hi: ['प्रमुख बंदरगाह', 'बंदरगाह प्राधिकरण'] }
  ),
  createPDF(
    'ni-act-1881',
    'NI_Act_1881.pdf',
    { en: 'Negotiable Instruments Act, 1881', bn: 'দলিল আইন, ১৮৮১', hi: 'परक्राम्य लिखत अधिनियम, 1881' },
    'Central_Acts/Commercial_Law/NI_Act_1881.pdf',
    'central_acts',
    'commercial_law',
    458,
    1881,
    { en: ['Negotiable Instruments', 'Cheque', 'Cheque Bounce'], bn: ['চেক', 'চেক বাউন্স'], hi: ['परक्राम्य लिखत', 'चेक बाउंस'] }
  ),
  createPDF(
    'admiralty-act-2017',
    'The_Admiralty_Jurisdiction_and_Settlement_of_Maritime_Claims_Act_2017.pdf',
    { en: 'Admiralty (Jurisdiction and Settlement of Maritime Claims) Act, 2017', bn: 'অ্যাডমিরালটি (এক্তিয়ার ও সামুদ্রিক দাবি নিষ্পত্তি) আইন, ২০১৭', hi: 'एडमिरल्टी (क्षेत्राधिकार और समुद्री दावों का निपटान) अधिनियम, 2017' },
    'Central_Acts/Commercial_Law/The_Admiralty_Jurisdiction_and_Settlement_of_Maritime_Claims_Act_2017.pdf',
    'central_acts',
    'commercial_law',
    418,
    2017,
    { en: ['Admiralty', 'Maritime Claims', 'Shipping'], bn: ['অ্যাডমিরালটি', 'সামুদ্রিক দাবি'], hi: ['एडमिरल्टी', 'समुद्री दावे'] }
  ),
  createPDF(
    'arbitration-act-1996',
    'The_Arbitration_and_Conciliation_Act_1996.pdf',
    { en: 'Arbitration and Conciliation Act, 1996', bn: 'শালিষি ও মধ্যস্থতা আইন, ১৯৯৬', hi: 'पंचाट और सुलह अधिनियम, 1996' },
    'Central_Acts/Commercial_Law/The_Arbitration_and_Conciliation_Act_1996.pdf',
    'central_acts',
    'commercial_law',
    426,
    1996,
    { en: ['Arbitration', 'Conciliation', 'ADR'], bn: ['শালিষি', 'মধ্যস্থতা'], hi: ['पंचाट', 'सुलह'] }
  ),
  createPDF(
    'banking-regulation-act-1949',
    'The_Banking_Regulation_Act_1949.pdf',
    { en: 'Banking Regulation Act, 1949', bn: 'ব্যাংকিং নিয়ন্ত্রণ আইন, ১৯৪৯', hi: 'बैंकिंग विनियमन अधिनियम, 1949' },
    'Central_Acts/Commercial_Law/The_Banking_Regulation_Act_1949.pdf',
    'central_acts',
    'commercial_law',
    615,
    1949,
    { en: ['Banking', 'Banking Regulation', 'RBI'], bn: ['ব্যাংকিং', 'ব্যাংক নিয়ন্ত্রণ'], hi: ['बैंकिंग', 'बैंक विनियमन'] }
  ),
  createPDF(
    'commercial-courts-act-2015',
    'The_Commercial_Courts_Act_2015.pdf',
    { en: 'Commercial Courts Act, 2015', bn: 'বাণিজ্যিক আদালত আইন, ২০১৫', hi: 'वाणिज्यिक न्यायालय अधिनियम, 2015' },
    'Central_Acts/Commercial_Law/The_Commercial_Courts_Act_2015.pdf',
    'central_acts',
    'commercial_law',
    432,
    2015,
    { en: ['Commercial Court', 'Commercial Dispute', 'Commercial Law'], bn: ['বাণিজ্যিক আদালত', 'বাণিজ্যিক বিরোধ'], hi: ['वाणिज्यिक न्यायालय', 'वाणिज्यिक विवाद'] }
  ),
  createPDF(
    'companies-act-2013',
    'The_Companies_Act_2013.pdf',
    { en: 'Companies Act, 2013', bn: 'কোম্পানি আইন, ২০১৩', hi: 'कंपनी अधिनियम, 2013' },
    'Central_Acts/Commercial_Law/The_Companies_Act_2013.pdf',
    'central_acts',
    'commercial_law',
    5262,
    2013,
    { en: ['Company Law', 'Corporate Law', 'Company'], bn: ['কোম্পানি আইন', 'কর্পোরেট আইন'], hi: ['कंपनी कानून', 'कॉर्पोरेट कानून'] }
  ),
  createPDF(
    'copyright-act-1957',
    'The_Copyright_Act_1957.pdf',
    { en: 'Copyright Act, 1957', bn: 'স্বত্বাধিকার আইন, ১৯৫৭', hi: 'कॉपीराइट अधिनियम, 1957' },
    'Central_Acts/Commercial_Law/The_Copyright_Act_1957.pdf',
    'central_acts',
    'commercial_law',
    601,
    1957,
    { en: ['Copyright', 'Intellectual Property', 'IP'], bn: ['স্বত্বাধিকার', 'বৌদ্ধিক সম্পত্তি'], hi: ['कॉपीराइट', 'बौद्धिक संपदा'] }
  ),
  createPDF(
    'cicra-2005',
    'The_Credit_Information_Companies_Regulation_Act_2005.pdf',
    { en: 'Credit Information Companies (Regulation) Act, 2005', bn: 'ঋণ তথ্য সংস্থা (নিয়ন্ত্রণ) আইন, ২০০৫', hi: 'ऋण सूचना कंपनी (विनियमन) अधिनियम, 2005' },
    'Central_Acts/Commercial_Law/The_Credit_Information_Companies_Regulation_Act_2005.pdf',
    'central_acts',
    'commercial_law',
    707,
    2005,
    { en: ['Credit Bureau', 'CIBIL', 'Credit Score'], bn: ['সিবিল', 'ঋণ স্কোর'], hi: ['सिबिल', 'क्रेडिट स्कोर'] }
  ),
  createPDF(
    'partnership-act-1932',
    'The_Indian_Partnership_Act_1932.pdf',
    { en: 'Indian Partnership Act, 1932', bn: 'ভারতীয় অংশীদারি আইন, ১৯৩২', hi: 'भारतीय साझेदारी अधिनियम, 1932' },
    'Central_Acts/Commercial_Law/The_Indian_Partnership_Act_1932.pdf',
    'central_acts',
    'commercial_law',
    533,
    1932,
    { en: ['Partnership', 'Partnership Firm', 'Partnership Deed'], bn: ['অংশীদারি', 'অংশীদারি ফার্ম'], hi: ['साझेदारी', 'साझेदारी फर्म'] }
  ),
  createPDF(
    'ibc-2016',
    'The_Insolvency_and_Bankruptcy_Code_2016.pdf',
    { en: 'Insolvency and Bankruptcy Code, 2016', bn: 'দেউলিয়া ও দেউলিয়াপন বিধি, ২০১৬', hi: 'सॉल्वेंसी और दिवालियापन संहिता, 2016' },
    'Central_Acts/Commercial_Law/The_Insolvency_and_Bankruptcy_Code_2016.pdf',
    'central_acts',
    'commercial_law',
    1719,
    2016,
    { en: ['IBC', 'Insolvency', 'Bankruptcy', 'NCLT'], bn: ['আইবিসি', 'দেউলিয়াপন'], hi: ['आईबीसी', 'दिवालियापन'] }
  ),
  createPDF(
    'msmed-act-2006',
    'The_Micro_Small_and_Medium_Enterprises_Development_Act_2006.pdf',
    { en: 'Micro, Small and Medium Enterprises Development Act, 2006', bn: 'ক্ষুদ্র ও মধ্যম উদ্যোগ উন্নয়ন আইন, ২০০৬', hi: 'सूक्ष्म, लघु और मध्यम उद्यम विकास अधिनियम, 2006' },
    'Central_Acts/Commercial_Law/The_Micro_Small_and_Medium_Enterprises_Development_Act_2006.pdf',
    'central_acts',
    'commercial_law',
    242,
    2006,
    { en: ['MSME', 'MSME Act', 'Small Business'], bn: ['এমএসএমই', 'ক্ষুদ্র উদ্যোগ'], hi: ['एमएसएमई', 'लघु उद्योग'] }
  ),
  createPDF(
    'pss-act-2007',
    'The_Payment_and_Settlement_Systems_Act_2007.pdf',
    { en: 'Payment and Settlement Systems Act, 2007', bn: 'পরিশোধ ও নিষ্পত্তি ব্যবস্থা আইন, ২০০৭', hi: 'भुगतान और निपटान प्रणाली अधिनियम, 2007' },
    'Central_Acts/Commercial_Law/The_Payment_and_Settlement_Systems_Act_2007.pdf',
    'central_acts',
    'commercial_law',
    308,
    2007,
    { en: ['Payment System', 'Settlement', 'UPI'], bn: ['পরিশোধ ব্যবস্থা', 'নিষ্পত্তি'], hi: ['भुगतान प्रणाली', 'निपटान'] }
  ),
  createPDF(
    'sarfaesi-act-2002',
    'The_Securitisation_and_Reconstruction_of_Financial_Assets_and_Enforcement_of_Security_Interest_Act_2002.pdf',
    { en: 'Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002', bn: 'আর্থিক সম্পদ পুনর্গঠন ও জামানত স্বার্থ প্রয়োগ আইন, ২০০২', hi: 'वित्तीय परिसंपत्ति पुनर्निर्माण और प्रतिभूति अधिकार प्रवर्तन अधिनियम, 2002' },
    'Central_Acts/Commercial_Law/The_Securitisation_and_Reconstruction_of_Financial_Assets_and_Enforcement_of_Security_Interest_Act_2002.pdf',
    'central_acts',
    'commercial_law',
    516,
    2002,
    { en: ['SARFAESI', 'Securitisation', 'Asset Reconstruction'], bn: ['সারফেসি', 'সম্পদ পুনর্গঠন'], hi: ['सारफेसी', 'प्रतिभूतिकरण'] }
  ),
  createPDF(
    'usurious-loans-act-1918',
    'The_Usurious_Loans_Act_1918.pdf',
    { en: 'Usurious Loans Act, 1918', bn: 'অত্যধিক সুদে ঋণ আইন, ১৯১৮', hi: 'अत्यधिक ब्याज ऋण अधिनियम, 1918' },
    'Central_Acts/Commercial_Law/The_Usurious_Loans_Act_1918.pdf',
    'central_acts',
    'commercial_law',
    208,
    1918,
    { en: ['Usury', 'Interest Rate', 'Money Lending'], bn: ['সুদখোরি', 'ঋণ'], hi: ['सूदखोरी', 'ब्याज'] }
  ),

  // ========================================================================
  // CENTRAL ACTS — CONSUMER PROTECTION (10 PDFs)
  // ========================================================================
  createPDF(
    'cpa-2019',
    'CPA_2019.pdf',
    { en: 'Consumer Protection Act, 2019', bn: 'উপভোক্তা সুরক্ষা আইন, ২০১৯', hi: 'उपभोक्ता संरक्षण अधिनियम, 2019' },
    'Central_Acts/Consumer_Protection/CPA_2019.pdf',
    'central_acts',
    'consumer_protection',
    613,
    2019,
    { en: ['Consumer Protection', 'Consumer Rights', 'CCPA'], bn: ['উপভোক্তা সুরক্ষা', 'উপভোক্তার অধিকার'], hi: ['उपभोक्ता संरक्षण', 'उपभोक्ता अधिकार'] }
  ),
  createPDF(
    'insurance-act-1938',
    'Insurance_Act_1938.pdf',
    { en: 'Insurance Act, 1938', bn: 'বীমা আইন, ১৯৩৮', hi: 'बीमा अधिनियम, 1938' },
    'Central_Acts/Consumer_Protection/Insurance_Act_1938.pdf',
    'central_acts',
    'consumer_protection',
    1125,
    1938,
    { en: ['Insurance', 'Insurance Law', 'IRDAI'], bn: ['বীমা', 'বীমা আইন'], hi: ['बीमा', 'बीमा कानून'] }
  ),
  createPDF(
    'carriage-by-road-act-2007',
    'The_Carriage_by_Road_Act_2007.pdf',
    { en: 'Carriage by Road Act, 2007', bn: 'সড়কপথে পরিবহন আইন, ২০০৭', hi: 'सड़क माल ढुलाई अधिनियम, 2007' },
    'Central_Acts/Consumer_Protection/The_Carriage_by_Road_Act_2007.pdf',
    'central_acts',
    'consumer_protection',
    296,
    2007,
    { en: ['Carriage', 'Road Transport', 'Logistics'], bn: ['পরিবহন', 'সড়ক পরিবহন'], hi: ['कैरिज', 'सड़क परिवहन'] }
  ),
  createPDF(
    'competition-act-2002',
    'The_Competition_Act_2002.pdf',
    { en: 'Competition Act, 2002', bn: 'প্রতিযোগিতা আইন, ২০০২', hi: 'प्रतिस्पर्धा अधिनियम, 2002' },
    'Central_Acts/Consumer_Protection/The_Competition_Act_2002.pdf',
    'central_acts',
    'consumer_protection',
    624,
    2002,
    { en: ['Competition Law', 'CCI', 'Antitrust'], bn: ['প্রতিযোগিতা আইন', 'সিসিআই'], hi: ['प्रतिस्पर्धा कानून', 'सीसीआई'] }
  ),
  createPDF(
    'electricity-act-2003',
    'The_Electricity_Act_2003.pdf',
    { en: 'Electricity Act, 2003', bn: 'বিদ্যুৎ আইন, ২০০৩', hi: 'विद्युत अधिनियम, 2003' },
    'Central_Acts/Consumer_Protection/The_Electricity_Act_2003.pdf',
    'central_acts',
    'consumer_protection',
    1113,
    2003,
    { en: ['Electricity', 'Power Sector', 'Electricity Regulatory'], bn: ['বিদ্যুৎ', 'বিদ্যুৎ খাত'], hi: ['बिजली', 'विद्युत क्षेत्र'] }
  ),
  createPDF(
    'it-act-2000',
    'The_Information_Technology_Act_2000.pdf',
    { en: 'Information Technology Act, 2000', bn: 'তথ্য প্রযুক্তি আইন, ২০০০', hi: 'सूचना प्रौद्योगिकी अधिनियम, 2000' },
    'Central_Acts/Consumer_Protection/The_Information_Technology_Act_2000.pdf',
    'central_acts',
    'consumer_protection',
    819,
    2000,
    { en: ['IT Act', 'Cyber Law', 'Digital'], bn: ['আইটি আইন', 'সাইবার আইন'], hi: ['आईटी अधिनियम', 'साइबर कानून'] }
  ),
  createPDF(
    'irdai-act-1999',
    'The_Insurance_Regulatory_and_Development_Authority_Act_1999.pdf',
    { en: 'Insurance Regulatory and Development Authority Act, 1999', bn: 'বীমা নিয়ন্ত্রণ ও উন্নয়ন কর্তৃপক্ষ আইন, ১৯৯৯', hi: 'बीमा विनियमन और विकास प्राधिकरण अधिनियम, 1999' },
    'Central_Acts/Consumer_Protection/The_Insurance_Regulatory_and_Development_Authority_Act_1999.pdf',
    'central_acts',
    'consumer_protection',
    508,
    1999,
    { en: ['IRDAI', 'Insurance Regulation', 'Insurance Authority'], bn: ['আইআরডিএআই', 'বীমা নিয়ন্ত্রণ'], hi: ['आईआरडीएआई', 'बीमा विनियमन'] }
  ),
  createPDF(
    'legal-metrology-act-2009',
    'The_Legal_Metrology_Act_2009.pdf',
    { en: 'Legal Metrology Act, 2009', bn: 'বিধিবদ্ধ মাপজোখ আইন, ২০০৯', hi: 'वैधानिक मापन अधिनियम, 2009' },
    'Central_Acts/Consumer_Protection/The_Legal_Metrology_Act_2009.pdf',
    'central_acts',
    'consumer_protection',
    396,
    2009,
    { en: ['Legal Metrology', 'Weights Measures', 'Packaging'], bn: ['মাপজোখ', 'মোড়কজাতকরণ'], hi: ['मापन', 'पैकेजिंग'] }
  ),
  createPDF(
    'rera-2016',
    'The_Real_Estate_Regulation_and_Development_Act_2016.pdf',
    { en: 'Real Estate (Regulation and Development) Act, 2016', bn: 'রিয়েল এস্টেট (নিয়ন্ত্রণ ও উন্নয়ন) আইন, ২০১৬', hi: 'रियल एस्टेट (विनियमन और विकास) अधिनियम, 2016' },
    'Central_Acts/Consumer_Protection/The_Real_Estate_Regulation_and_Development_Act_2016.pdf',
    'central_acts',
    'consumer_protection',
    549,
    2016,
    { en: ['RERA', 'Real Estate', 'Property'], bn: ['রেরা', 'রিয়েল এস্টেট'], hi: ['रेरा', 'रियल एस्टेट'] }
  ),
  createPDF(
    'seeds-act-1966',
    'The_Seeds_Act_1966.pdf',
    { en: 'Seeds Act, 1966', bn: 'বীজ আইন, ১৯৬৬', hi: 'बीज अधिनियम, 1966' },
    'Central_Acts/Consumer_Protection/The_Seeds_Act_1966.pdf',
    'central_acts',
    'consumer_protection',
    283,
    1966,
    { en: ['Seeds', 'Agriculture', 'Seed Quality'], bn: ['বীজ', 'কৃষি'], hi: ['बीज', 'कृषि'] }
  ),

  // ========================================================================
  // CENTRAL ACTS — FAMILY LAW (21 PDFs)
  // ========================================================================
  createPDF(
    'divorce-act-1869',
    'Indian_Divorce_Act_1869.pdf',
    { en: 'Divorce Act, 1869', bn: 'তালাক আইন, ১৮৬৯', hi: 'तलाक अधिनियम, 1869' },
    'Central_Acts/Family_Law/Indian_Divorce_Act_1869.pdf',
    'central_acts',
    'family_law',
    382,
    1869,
    { en: ['Divorce', 'Christian Divorce', 'Matrimonial Law'], bn: ['তালাক', 'খ্রিস্টান তালাক'], hi: ['तलाक', 'ईसाई तलाक'] }
  ),
  createPDF(
    'art-act-2021',
    'The_Assisted_Reproductive_Technology_Regulation_Act_2021.pdf',
    { en: 'Assisted Reproductive Technology (Regulation) Act, 2021', bn: 'সহায়ক প্রজনন প্রযুক্তি (নিয়ন্ত্রণ) আইন, ২০২১', hi: 'सहायक प्रजनन तकनीक (विनियमन) अधिनियम, 2021' },
    'Central_Acts/Family_Law/The_Assisted_Reproductive_Technology_Regulation_Act_2021.pdf',
    'central_acts',
    'family_law',
    405,
    2021,
    { en: ['ART', 'IVF', 'Assisted Reproduction'], bn: ['এআরটি', 'আইভিএফ'], hi: ['एआरटी', 'आईवीएफ'] }
  ),
  createPDF(
    'dmma-1939',
    'The_Dissolution_of_Muslim_Marriages_Act_1939.pdf',
    { en: 'Dissolution of Muslim Marriages Act, 1939', bn: 'মুসলিম বিবাহ বিচ্ছেদ আইন, ১৯৩৯', hi: 'मुस्लिम विवाह विघटन अधिनियम, 1939' },
    'Central_Acts/Family_Law/The_Dissolution_of_Muslim_Marriages_Act_1939.pdf',
    'central_acts',
    'family_law',
    263,
    1939,
    { en: ['Muslim Divorce', 'Khula', 'Muslim Marriage'], bn: ['মুসলিম তালাক', 'খুলা'], hi: ['मुस्लिम तलाक', 'खुला'] }
  ),
  createPDF(
    'family-courts-act-1984',
    'The_Family_Courts_Act_1984.pdf',
    { en: 'Family Courts Act, 1984', bn: 'পারিবারিক আদালত আইন, ১৯৮৪', hi: 'परिवार न्यायालय अधिनियम, 1984' },
    'Central_Acts/Family_Law/The_Family_Courts_Act_1984.pdf',
    'central_acts',
    'family_law',
    308,
    1984,
    { en: ['Family Court', 'Family Law', 'Matrimonial Court'], bn: ['পারিবারিক আদালত', 'পারিবারিক আইন'], hi: ['फैमिली कोर्ट', 'पारिवारिक अदालत'] }
  ),
  createPDF(
    'gwa-1890',
    'The_Guardians_and_Wards_Act_1890.pdf',
    { en: 'Guardians and Wards Act, 1890', bn: 'অভিভাবক ও পোষ্য আইন, ১৮৯০', hi: 'अभिभावक और पोष्य अधिनियम, 1890' },
    'Central_Acts/Family_Law/The_Guardians_and_Wards_Act_1890.pdf',
    'central_acts',
    'family_law',
    301,
    1890,
    { en: ['Guardian', 'Ward', 'Minor'], bn: ['অভিভাবক', 'নাবালক'], hi: ['अभिभावक', 'नाबालिग'] }
  ),
  createPDF(
    'hama-1956',
    'The_Hindu_Adoptions_and_Maintenance_Act_1956.pdf',
    { en: 'Hindu Adoptions and Maintenance Act, 1956', bn: 'হিন্দু দত্তক গ্রহণ ও ভরণপোষণ আইন, ১৯৫৬', hi: 'हिंदू दत्तक ग्रहण और भरण-पोषण अधिनियम, 1956' },
    'Central_Acts/Family_Law/The_Hindu_Adoptions_and_Maintenance_Act_1956.pdf',
    'central_acts',
    'family_law',
    278,
    1956,
    { en: ['Hindu Adoption', 'Maintenance', 'Hindu Law'], bn: ['হিন্দু দত্তক', 'ভরণপোষণ'], hi: ['हिंदू दत्तक', 'भरण-पोषण'] }
  ),
  createPDF(
    'hma-1955',
    'The_Hindu_Marriage_Act_1955.pdf',
    { en: 'Hindu Marriage Act, 1955', bn: 'হিন্দু বিবাহ আইন, ১৯৫৫', hi: 'हिंदू विवाह अधिनियम, 1955' },
    'Central_Acts/Family_Law/The_Hindu_Marriage_Act_1955.pdf',
    'central_acts',
    'family_law',
    354,
    1955,
    { en: ['Hindu Marriage', 'Hindu Law', 'Marriage'], bn: ['হিন্দু বিবাহ', 'হিন্দু আইন'], hi: ['हिंदू विवाह', 'हिंदू कानून'] }
  ),
  createPDF(
    'hmga-1956',
    'The_Hindu_Minority_and_Guardianship_Act_1956.pdf',
    { en: 'Hindu Minority and Guardianship Act, 1956', bn: 'হিন্দু নাবালক ও অভিভাবকত্ব আইন, ১৯৫৬', hi: 'हिंदू नाबालिग और संरक्षकता अधिनियम, 1956' },
    'Central_Acts/Family_Law/The_Hindu_Minority_and_Guardianship_Act_1956.pdf',
    'central_acts',
    'family_law',
    274,
    1956,
    { en: ['Hindu Minority', 'Guardianship', 'Hindu Law'], bn: ['হিন্দু নাবালক', 'অভিভাবকত্ব'], hi: ['हिंदू नाबालिग', 'संरक्षकता'] }
  ),
  createPDF(
    'hsa-1956',
    'The_Hindu_Succession_Act_1956.pdf',
    { en: 'Hindu Succession Act, 1956', bn: 'হিন্দু উত্তরাধিকার আইন, ১৯৫৬', hi: 'हिंदू उत्तराधिकार अधिनियम, 1956' },
    'Central_Acts/Family_Law/The_Hindu_Succession_Act_1956.pdf',
    'central_acts',
    'family_law',
    336,
    1956,
    { en: ['Hindu Succession', 'Inheritance', 'Hindu Law'], bn: ['হিন্দু উত্তরাধিকার', 'ওয়ারিশ'], hi: ['हिंदू उत्तराधिकार', 'विरासत'] }
  ),
  createPDF(
    'isa-1925',
    'The_Indian_Succession_Act_1925.pdf',
    { en: 'Indian Succession Act, 1925', bn: 'ভারতীয় উত্তরাধিকার আইন, ১৯২৫', hi: 'भारतीय उत्तराधिकार अधिनियम, 1925' },
    'Central_Acts/Family_Law/The_Indian_Succession_Act_1925.pdf',
    'central_acts',
    'family_law',
    1604,
    1925,
    { en: ['Succession', 'Will', 'Inheritance'], bn: ['উত্তরাধিকার', 'উইল'], hi: ['उत्तराधिकार', 'वसीयत'] }
  ),
  createPDF(
    'jj-act-2015',
    'The_Juvenile_Justice_Care_and_Protection_of_Children_Act_2015.pdf',
    { en: 'Juvenile Justice (Care and Protection of Children) Act, 2015', bn: 'বাল্য ন্যায়বিচার (শিশু যত্ন ও সুরক্ষা) আইন, ২০১৫', hi: 'किशोर न्याय (बाल देखभाल और संरक्षण) अधिनियम, 2015' },
    'Central_Acts/Family_Law/The_Juvenile_Justice_Care_and_Protection_of_Children_Act_2015.pdf',
    'central_acts',
    'family_law',
    654,
    2015,
    { en: ['Juvenile Justice', 'Child Protection', 'Child Rights'], bn: ['বাল্য ন্যায়বিচার', 'শিশু সুরক্ষা'], hi: ['किशोर न्याय', 'बाल संरक्षण'] }
  ),
  createPDF(
    'mwpsca-2007',
    'The_Maintenance_and_Welfare_of_Parents_and_Senior_Citizens_Act_2007.pdf',
    { en: 'Maintenance and Welfare of Parents and Senior Citizens Act, 2007', bn: 'পিতামাতা ও প্রবীণ নাগরিক ভরণপোষণ আইন, ২০০৭', hi: 'माता-पिता और वरिष्ठ नागरिक भरण-पोषण अधिनियम, 2007' },
    'Central_Acts/Family_Law/The_Maintenance_and_Welfare_of_Parents_and_Senior_Citizens_Act_2007.pdf',
    'central_acts',
    'family_law',
    270,
    2007,
    { en: ['Senior Citizens', 'Maintenance', 'Parents Welfare'], bn: ['প্রবীণ নাগরিক', 'ভরণপোষণ'], hi: ['वरिष्ठ नागरिक', 'भरण-पोषण'] }
  ),
  createPDF(
    'mtp-act-1971',
    'The_Medical_Termination_of_Pregnancy_Act_1971.pdf',
    { en: 'Medical Termination of Pregnancy Act, 1971', bn: 'গর্ভপাত আইন, ১৯৭১', hi: 'गर्भपात अधिनियम, 1971' },
    'Central_Acts/Family_Law/The_Medical_Termination_of_Pregnancy_Act_1971.pdf',
    'central_acts',
    'family_law',
    279,
    1971,
    { en: ['MTP', 'Abortion', 'Reproductive Rights'], bn: ['এমটিপি', 'গর্ভপাত'], hi: ['एमटीपी', 'गर्भपात'] }
  ),
  createPDF(
    'mwprda-1986',
    'The_Muslim_Women_Protection_of_Rights_on_Divorce_Act_1986.pdf',
    { en: 'Muslim Women (Protection of Rights on Divorce) Act, 1986', bn: 'মুসলিম মহিলা (তালাকের অধিকার সুরক্ষা) আইন, ১৯৮৬', hi: 'मुस्लिम महिला (तलाक पर अधिकार संरक्षण) अधिनियम, 1986' },
    'Central_Acts/Family_Law/The_Muslim_Women_Protection_of_Rights_on_Divorce_Act_1986.pdf',
    'central_acts',
    'family_law',
    366,
    1986,
    { en: ['Muslim Women', 'Divorce Rights', 'Muslim Law'], bn: ['মুসলিম মহিলা', 'তালাকের অধিকার'], hi: ['मुस्लिम महिला', 'तलाक के अधिकार'] }
  ),
  createPDF(
    'national-trust-act-1999',
    'The_National_Trust_Act_1999.pdf',
    { en: 'National Trust for Welfare of Persons with Autism, Cerebral Palsy, Mental Retardation and Multiple Disabilities Act, 1999', bn: 'জাতীয় ট্রাস্ট আইন, ১৯৯৯', hi: 'राष्ट्रीय ट्रस्ट अधिनियम, 1999' },
    'Central_Acts/Family_Law/The_National_Trust_Act_1999.pdf',
    'central_acts',
    'family_law',
    335,
    1999,
    { en: ['National Trust', 'Disability', 'Autism'], bn: ['জাতীয় ট্রাস্ট', 'প্রতিবন্ধকতা'], hi: ['राष्ट्रीय ट्रस्ट', 'दिव्यांगता'] }
  ),
  createPDF(
    'pmda-1936',
    'The_Parsi_Marriage_and_Divorce_Act_1936.pdf',
    { en: 'Parsi Marriage and Divorce Act, 1936', bn: 'পার্সি বিবাহ ও তালাক আইন, ১৯৩৬', hi: 'पारसी विवाह और तलाक अधिनियम, 1936' },
    'Central_Acts/Family_Law/The_Parsi_Marriage_and_Divorce_Act_1936.pdf',
    'central_acts',
    'family_law',
    465,
    1936,
    { en: ['Parsi Marriage', 'Parsi Divorce', 'Parsi Law'], bn: ['পার্সি বিবাহ', 'পার্সি তালাক'], hi: ['पारसी विवाह', 'पारसी तलाक'] }
  ),
  createPDF(
    'passports-act-1967',
    'The_Passports_Act_1967.pdf',
    { en: 'Passports Act, 1967', bn: 'পাসপোর্ট আইন, ১৯৬৭', hi: 'पासपोर्ट अधिनियम, 1967' },
    'Central_Acts/Family_Law/The_Passports_Act_1967.pdf',
    'central_acts',
    'family_law',
    262,
    1967,
    { en: ['Passport', 'Travel Document', 'Immigration'], bn: ['পাসপোর্ট', 'ভ্রমণ নথি'], hi: ['पासपोर्ट', 'यात्रा दस्तावेज़'] }
  ),
  createPDF(
    'pcma-2006',
    'The_Prohibition_of_Child_Marriage_Act_2006.pdf',
    { en: 'Prohibition of Child Marriage Act, 2006', bn: 'বাল্যবিবাহ নিরোধ আইন, ২০০৬', hi: 'बाल विवाह निषेध अधिनियम, 2006' },
    'Central_Acts/Family_Law/The_Prohibition_of_Child_Marriage_Act_2006.pdf',
    'central_acts',
    'family_law',
    267,
    2006,
    { en: ['Child Marriage', 'Child Rights', 'Marriage Age'], bn: ['বাল্যবিবাহ', 'শিশু অধিকার'], hi: ['बाल विवाह', 'बाल अधिकार'] }
  ),
  createPDF(
    'pwdva-2005',
    'The_Protection_of_Women_from_Domestic_Violence_Act_2005.pdf',
    { en: 'Protection of Women from Domestic Violence Act, 2005', bn: 'গার্হস্থ্য হিংসা থেকে মহিলা সুরক্ষা আইন, ২০০৫', hi: 'घरेलू हिंसा से महिला संरक्षण अधिनियम, 2005' },
    'Central_Acts/Family_Law/The_Protection_of_Women_from_Domestic_Violence_Act_2005.pdf',
    'central_acts',
    'family_law',
    288,
    2005,
    { en: ['Domestic Violence', 'Women Protection', 'DV Act'], bn: ['গার্হস্থ্য হিংসা', 'মহিলা সুরক্ষা'], hi: ['घरेलू हिंसा', 'महिला संरक्षण'] }
  ),
  createPDF(
    'rpwd-act-2016',
    'The_Rights_of_Persons_with_Disabilities_Act_2016.pdf',
    { en: 'Rights of Persons with Disabilities Act, 2016', bn: 'প্রতিবন্ধী ব্যক্তির অধিকার আইন, ২০১৬', hi: 'दिव्यांग व्यक्तियों के अधिकार अधिनियम, 2016' },
    'Central_Acts/Family_Law/The_Rights_of_Persons_with_Disabilities_Act_2016.pdf',
    'central_acts',
    'family_law',
    495,
    2016,
    { en: ['Disability Rights', 'PwD', 'Accessibility'], bn: ['প্রতিবন্ধী অধিকার', 'পিডব্লিউডি'], hi: ['दिव्यांग अधिकार', 'दिव्यांगजन'] }
  ),
  createPDF(
    'surrogacy-act-2021',
    'The_Surrogacy_Regulation_Act_2021.pdf',
    { en: 'Surrogacy (Regulation) Act, 2021', bn: 'সারোগেসি (নিয়ন্ত্রণ) আইন, ২০২১', hi: 'सरोगेसी (विनियमन) अधिनियम, 2021' },
    'Central_Acts/Family_Law/The_Surrogacy_Regulation_Act_2021.pdf',
    'central_acts',
    'family_law',
    425,
    2021,
    { en: ['Surrogacy', 'ART', 'Assisted Reproduction'], bn: ['সারোগেসি', 'এআরটি'], hi: ['सरोगेसी', 'एआरटी'] }
  ),

  // ========================================================================
  // CENTRAL ACTS — PROPERTY LAW (13 PDFs)
  // ========================================================================
  createPDF(
    'epa-1986',
    'The_Environment_Protection_Act_1986.pdf',
    { en: 'Environment (Protection) Act, 1986', bn: 'পরিবেশ (সুরক্ষা) আইন, ১৯৮৬', hi: 'पर्यावरण (संरक्षण) अधिनियम, 1986' },
    'Central_Acts/Property_Law/The_Environment_Protection_Act_1986.pdf',
    'central_acts',
    'property_law',
    234,
    1986,
    { en: ['Environment', 'Pollution Control', 'Environmental Law'], bn: ['পরিবেশ', 'দূষণ নিয়ন্ত্রণ'], hi: ['पर्यावरण', 'प्रदूषण नियंत्रण'] }
  ),
  createPDF(
    'easements-act-1882',
    'The_Indian_Easements_Act_1882.pdf',
    { en: 'Indian Easements Act, 1882', bn: 'ভারতীয় ভোগাধিকার আইন, ১৮৮২', hi: 'भारतीय भोगाधिकार अधिनियम, 1882' },
    'Central_Acts/Property_Law/The_Indian_Easements_Act_1882.pdf',
    'central_acts',
    'property_law',
    284,
    1882,
    { en: ['Easement', 'Right of Way', 'Property Rights'], bn: ['ভোগাধিকার', 'পথাধিকার'], hi: ['भोगाधिकार', 'रास्ते का अधिकार'] }
  ),
  createPDF(
    'stamp-act-1899',
    'The_Indian_Stamp_Act_1899.pdf',
    { en: 'Indian Stamp Act, 1899', bn: 'ভারতীয় স্ট্যাম্প আইন, ১৮৯৯', hi: 'भारतीय स्टाम्प अधिनियम, 1899' },
    'Central_Acts/Property_Law/The_Indian_Stamp_Act_1899.pdf',
    'central_acts',
    'property_law',
    3099,
    1899,
    { en: ['Stamp Duty', 'Stamp Act', 'Stamp Paper'], bn: ['স্ট্যাম্প ডিউটি', 'স্ট্যাম্প আইন'], hi: ['स्टांप शुल्क', 'स्टाम्प अधिनियम'] }
  ),
  createPDF(
    'trusts-act-1882',
    'The_Indian_Trusts_Act_1882.pdf',
    { en: 'Indian Trusts Act, 1882', bn: 'ভারতীয় ট্রাস্ট আইন, ১৮৮২', hi: 'भारतीय ट्रस्ट अधिनियम, 1882' },
    'Central_Acts/Property_Law/The_Indian_Trusts_Act_1882.pdf',
    'central_acts',
    'property_law',
    397,
    1882,
    { en: ['Trust', 'Trust Law', 'Trust Deed'], bn: ['ট্রাস্ট', 'ট্রাস্ট আইন'], hi: ['ट्रस्ट', 'ट्रस्ट अधिनियम'] }
  ),
  createPDF(
    'mmdr-act-1957',
    'The_Mines_and_Minerals_Development_and_Regulation_Act_1957.pdf',
    { en: 'Mines and Minerals (Development and Regulation) Act, 1957', bn: 'খনি ও খনিজ (উন্নয়ন ও নিয়ন্ত্রণ) আইন, ১৯৫৭', hi: 'खान और खनिज (विकास और विनियमन) अधिनियम, 1957' },
    'Central_Acts/Property_Law/The_Mines_and_Minerals_Development_and_Regulation_Act_1957.pdf',
    'central_acts',
    'property_law',
    792,
    1957,
    { en: ['Mines', 'Minerals', 'Mining Law'], bn: ['খনি', 'খনিজ'], hi: ['खान', 'खनिज'] }
  ),
  createPDF(
    'ngt-act-2010',
    'The_National_Green_Tribunal_Act_2010.pdf',
    { en: 'National Green Tribunal Act, 2010', bn: 'জাতীয় সবুজ ট্রাইব্যুনাল আইন, ২০১০', hi: 'राष्ट्रीय हरित अधिकरण अधिनियम, 2010' },
    'Central_Acts/Property_Law/The_National_Green_Tribunal_Act_2010.pdf',
    'central_acts',
    'property_law',
    461,
    2010,
    { en: ['Green Tribunal', 'Environment Court', 'NGT'], bn: ['সবুজ ট্রাইব্যুনাল', 'পরিবেশ আদালত'], hi: ['हरित अधिकरण', 'पर्यावरण अदालत'] }
  ),
  createPDF(
    'nh-act-1956',
    'The_National_Highways_Act_1956.pdf',
    { en: 'National Highways Act, 1956', bn: 'জাতীয় মহাসড়ক আইন, ১৯৫৬', hi: 'राष्ट्रीय राजमार्ग अधिनियम, 1956' },
    'Central_Acts/Property_Law/The_National_Highways_Act_1956.pdf',
    'central_acts',
    'property_law',
    415,
    1956,
    { en: ['Highway', 'National Highway', 'Land Acquisition'], bn: ['মহাসড়ক', 'জাতীয় মহাসড়ক'], hi: ['हाईवे', 'राष्ट्रीय राजमार्ग'] }
  ),
  createPDF(
    'benami-act-1988',
    'The_Prohibition_of_Benami_Property_Transactions_Act_1988.pdf',
    { en: 'Prohibition of Benami Property Transactions Act, 1988', bn: 'বেনামি সম্পত্তি লেনদেন নিষিদ্ধকরণ আইন, ১৯৮৮', hi: 'बेनामी संपत्ति लेनदेन निषेध अधिनियम, 1988' },
    'Central_Acts/Property_Law/The_Prohibition_of_Benami_Property_Transactions_Act_1988.pdf',
    'central_acts',
    'property_law',
    588,
    1988,
    { en: ['Benami', 'Benami Property', 'Benami Transactions'], bn: ['বেনামি', 'বেনামি সম্পত্তি'], hi: ['बेनामी', 'बेनामी संपत्ति'] }
  ),
  createPDF(
    'ppe-act-1971',
    'The_Public_Premises_Eviction_of_Unauthorised_Occupants_Act_1971.pdf',
    { en: 'Public Premises (Eviction of Unauthorised Occupants) Act, 1971', bn: 'সরকারি সম্পত্তি (অননুমোদিত অধিবাসী উচ্ছেদ) আইন, ১৯৭১', hi: 'सार्वजनिक परिसर (अनधिकृत कब्जेदारों का बेदखली) अधिनियम, 1971' },
    'Central_Acts/Property_Law/The_Public_Premises_Eviction_of_Unauthorised_Occupants_Act_1971.pdf',
    'central_acts',
    'property_law',
    337,
    1971,
    { en: ['Public Premises', 'Eviction', 'Unauthorized Occupation'], bn: ['সরকারি সম্পত্তি', 'উচ্ছেদ'], hi: ['सार्वजनिक परिसर', 'बेदखली'] }
  ),
  createPDF(
    'larr-act-2013',
    'The_Right_to_Fair_Compensation_and_Transparency_in_Land_Acquisition_Rehabilitation_and_Resettlement_Act_2013.pdf',
    { en: 'Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act, 2013', bn: 'ভূমি অধিগ্রহণে ন্যায্য ক্ষতিপূরণ ও স্বচ্ছতা আইন, ২০১৩', hi: 'भूमि अर्जन में उचित प्रतिकर और पारदर्शिता अधिकार अधिनियम, 2013' },
    'Central_Acts/Property_Law/The_Right_to_Fair_Compensation_and_Transparency_in_Land_Acquisition_Rehabilitation_and_Resettlement_Act_2013.pdf',
    'central_acts',
    'property_law',
    750,
    2013,
    { en: ['Land Acquisition', 'Fair Compensation', 'Rehabilitation'], bn: ['ভূমি অধিগ্রহণ', 'ক্ষতিপূরণ'], hi: ['भूमि अर्जन', 'प्रतिकर'] }
  ),
  createPDF(
    'fra-2006',
    'The_Scheduled_Tribes_and_Other_Traditional_Forest_Dwellers_Recognition_of_Forest_Rights_Act_2006.pdf',
    { en: 'Scheduled Tribes and Other Traditional Forest Dwellers (Recognition of Forest Rights) Act, 2006', bn: 'উপজাতি ও ঐতিহ্যবাহী বনবাসী (বন অধিকার স্বীকৃতি) আইন, ২০০৬', hi: 'अनुसूचित जनजाति और वनवासी (वन अधिकार मान्यता) अधिनियम, 2006' },
    'Central_Acts/Property_Law/The_Scheduled_Tribes_and_Other_Traditional_Forest_Dwellers_Recognition_of_Forest_Rights_Act_2006.pdf',
    'central_acts',
    'property_law',
    260,
    2006,
    { en: ['Forest Rights', 'Tribal Rights', 'FRA'], bn: ['বন অধিকার', 'উপজাতি অধিকার'], hi: ['वन अधिकार', 'आदिवासी अधिकार'] }
  ),
  createPDF(
    'tp-act-1882',
    'TP_Act_1882.pdf',
    { en: 'Transfer of Property Act, 1882', bn: 'সম্পত্তি হস্তান্তর আইন, ১৮৮২', hi: 'संपत्ति हस्तांतरण अधिनियम, 1882' },
    'Central_Acts/Property_Law/TP_Act_1882.pdf',
    'central_acts',
    'property_law',
    675,
    1882,
    { en: ['Transfer of Property', 'Property Law', 'Sale Deed'], bn: ['সম্পত্তি হস্তান্তর', 'সম্পত্তি আইন'], hi: ['संपत्ति हस्तांतरण', 'संपत्ति कानून'] }
  ),
  createPDF(
    'waqf-act-1995',
    'Waqf_Act_1995.pdf',
    { en: 'Waqf Act, 1995 (as amended by Unified Waqf Management Act, 2025)', bn: 'ওয়াকফ আইন, ১৯৯৫ (২০২৫ সংশোধিত)', hi: 'वक्फ अधिनियम, 1995 (2025 में संशोधित)' },
    'Central_Acts/Property_Law/Waqf_Act_1995.pdf',
    'central_acts',
    'property_law',
    1118,
    1995,
    { en: ['Waqf', 'Waqf Property', 'Waqf Board'], bn: ['ওয়াকফ', 'ওয়াকফ সম্পত্তি'], hi: ['वक्फ', 'वक्फ संपत्ति'] }
  ),

  // ========================================================================
  // WEST BENGAL ACTS — LAND REFORMS (5 PDFs)
  // ========================================================================
  createPDF(
    'wblr-act-1955',
    'WBLR_Act_1955.pdf',
    { en: 'West Bengal Land Reforms Act, 1955', bn: 'পশ্চিমবঙ্গ ভূমি সংস্কার আইন, ১৯৫৫', hi: 'पश्चिम बंगाल भूमि सुधार अधिनियम, 1955' },
    'West_Bengal_Acts/Land_Reforms/WBLR_Act_1955.pdf',
    'west_bengal_acts',
    'land_reforms',
    5355,
    1955,
    { en: ['WBLR', 'Land Reforms', 'Khatian', 'Bargadar'], bn: ['ডব্লিউবিএলআর', 'ভূমি সংস্কার'], hi: ['डब्ल्यूबीएलआर', 'भूमि सुधार'] }
  ),
  createPDF(
    'wb-bhudan-act-1962',
    'The_West_Bengal_Bhudan_Yagna_Act_1962.pdf',
    { en: 'West Bengal Bhudan Yagna Act, 1962', bn: 'পশ্চিমবঙ্গ ভূদান যজ্ঞ আইন, ১৯৬২', hi: 'पश्चिम बंगाल भूदान यज्ञ अधिनियम, 1962' },
    'West_Bengal_Acts/Land_Reforms/The_West_Bengal_Bhudan_Yagna_Act_1962.pdf',
    'west_bengal_acts',
    'land_reforms',
    1019,
    1962,
    { en: ['Bhudan', 'Land Donation', 'Vinoba Bhave'], bn: ['ভূদান', 'জমি দান'], hi: ['भूदान', 'भूमि दान'] }
  ),
  createPDF(
    'wb-trees-act-2006',
    'The_West_Bengal_Trees_Protection_and_Conservation_in_Non_Forest_Areas_Act_2006.pdf',
    { en: 'West Bengal Trees (Protection and Conservation in Non-Forest Areas) Act, 2006', bn: 'পশ্চিমবঙ্গ বৃক্ষ (অরণ্যেতর অঞ্চলে সুরক্ষা ও সংরক্ষণ) আইন, ২০০৬', hi: 'पश्चिम बंगाल वृक्ष (गैर-वन क्षेत्र में संरक्षण) अधिनियम, 2006' },
    'West_Bengal_Acts/Land_Reforms/The_West_Bengal_Trees_Protection_and_Conservation_in_Non_Forest_Areas_Act_2006.pdf',
    'west_bengal_acts',
    'land_reforms',
    215,
    2006,
    { en: ['Trees Protection', 'Trees Conservation', 'Non-Forest'], bn: ['বৃক্ষ সুরক্ষা', 'বৃক্ষ সংরক্ষণ'], hi: ['वृक्ष संरक्षण', 'वृक्ष सुरक्षा'] }
  ),
  createPDF(
    'wb-ground-water-act-2005',
    'WB_Ground_Water_Act_2005.pdf',
    { en: 'West Bengal Ground Water Resources (Management, Control and Regulation) Act, 2005', bn: 'পশ্চিমবঙ্গ ভূগর্ভস্থ জলসম্পদ আইন, ২০০৫', hi: 'पश्चिम बंगाल भूजल संसाधन अधिनियम, 2005' },
    'West_Bengal_Acts/Land_Reforms/WB_Ground_Water_Act_2005.pdf',
    'west_bengal_acts',
    'land_reforms',
    2747,
    2005,
    { en: ['Ground Water', 'Water Resources', 'Tubewell'], bn: ['ভূগর্ভস্থ জল', 'জলসম্পদ'], hi: ['भूजल', 'जल संसाधन'] }
  ),
  createPDF(
    'wb-inland-fisheries-act-1984',
    'WB_Inland_Fisheries_Act_1984.pdf',
    { en: 'West Bengal Inland Fisheries Act, 1984', bn: 'পশ্চিমবঙ্গ অভ্যন্তরীণ মৎস্যচাষ আইন, ১৯৮৪', hi: 'पश्चिम बंगाल अंतर्देशीय मत्स्य अधिनियम, 1984' },
    'West_Bengal_Acts/Land_Reforms/WB_Inland_Fisheries_Act_1984.pdf',
    'west_bengal_acts',
    'land_reforms',
    3186,
    1984,
    { en: ['Inland Fisheries', 'Fisheries', 'Fish Farming'], bn: ['মৎস্যচাষ', 'মৎস্য'], hi: ['मत्स्य', 'मछली पालन'] }
  ),

  // ========================================================================
  // WEST BENGAL ACTS — TENANCY (3 PDFs)
  // ========================================================================
  createPDF(
    'wbpt-act-1997',
    'WBPT_Act_1997.pdf',
    { en: 'West Bengal Premises Tenancy Act, 1997', bn: 'পশ্চিমবঙ্গ প্রাঙ্গণ ভাড়াটিয়া আইন, ১৯৯৭', hi: 'पश्चिम बंगाल परिसर किरायेदारी अधिनियम, 1997' },
    'West_Bengal_Acts/Tenancy/WBPT_Act_1997.pdf',
    'west_bengal_acts',
    'tenancy',
    6608,
    1997,
    { en: ['WBPT', 'Tenancy', 'Rent Control', 'Eviction'], bn: ['ডব্লিউবিপিটি', 'ভাড়া নিয়ন্ত্রণ'], hi: ['डब्ल्यूबीपीटी', 'किराया नियंत्रण'] }
  ),
  createPDF(
    'wb-thika-act-2001',
    'The_West_Bengal_Thika_Tenancy_Acquisition_and_Regulation_Act_2001.pdf',
    { en: 'West Bengal Thika Tenancy (Acquisition and Regulation) Act, 2001', bn: 'পশ্চিমবঙ্গ ঠিকা প্রজাস্বত্ব (অধিগ্রহণ ও নিয়ন্ত্রণ) আইন, ২০০১', hi: 'पश्चिम बंगाल ठिका किरायेदारी (अधिग्रहण और विनियमन) अधिनियम, 2001' },
    'West_Bengal_Acts/Tenancy/The_West_Bengal_Thika_Tenancy_Acquisition_and_Regulation_Act_2001.pdf',
    'west_bengal_acts',
    'tenancy',
    4265,
    2001,
    { en: ['Thika Tenancy', 'Thika', 'Tenancy'], bn: ['ঠিকা প্রজাস্বত্ব', 'ঠিকা'], hi: ['ठिका किरायेदारी', 'ठिका'] }
  ),
  createPDF(
    'wb-slum-act-1972',
    'The_West_Bengal_Slum_Areas_Improvement_and_Clearance_Act_1972.pdf',
    { en: 'West Bengal Slum Areas (Improvement and Clearance) Act, 1972', bn: 'পশ্চিমবঙ্গ বস্তি এলাকা (উন্নয়ন ও উচ্ছেদ) আইন, ১৯৭২', hi: 'पश्चिम बंगाल झुग्गी क्षेत्र (सुधार और निराकरण) अधिनियम, 1972' },
    'West_Bengal_Acts/Tenancy/The_West_Bengal_Slum_Areas_Improvement_and_Clearance_Act_1972.pdf',
    'west_bengal_acts',
    'tenancy',
    278,
    1972,
    { en: ['Slum', 'Slum Clearance', 'Slum Improvement'], bn: ['বস্তি', 'বস্তি উচ্ছেদ'], hi: ['झुग्गी', 'झुग्गी निराकरण'] }
  ),

  // ========================================================================
  // WEST BENGAL ACTS — MUNICIPAL (2 PDFs)
  // ========================================================================
  createPDF(
    'kmc-act-1980',
    'KMC_Act_1980.pdf',
    { en: 'Kolkata Municipal Corporation Act, 1980', bn: 'কলকাতা পৌরসংস্থা আইন, ১৯৮০', hi: 'कोलकाता नगर निगम अधिनियम, 1980' },
    'West_Bengal_Acts/Municipal/KMC_Act_1980.pdf',
    'west_bengal_acts',
    'municipal',
    2747,
    1980,
    { en: ['KMC', 'Kolkata Municipal', 'Mutation', 'Property Tax'], bn: ['কেএমসি', 'কলকাতা পৌরসংস্থা'], hi: ['केएमसी', 'कोलकाता नगर निगम'] }
  ),
  createPDF(
    'wb-municipal-act-1993',
    'The_West_Bengal_Municipal_Act_1993.pdf',
    { en: 'West Bengal Municipal Act, 1993', bn: 'পশ্চিমবঙ্গ পৌর আইন, ১৯৯৩', hi: 'पश्चिम बंगाल नगरपालिका अधिनियम, 1993' },
    'West_Bengal_Acts/Municipal/The_West_Bengal_Municipal_Act_1993.pdf',
    'west_bengal_acts',
    'municipal',
    2349,
    1993,
    { en: ['WB Municipal', 'Municipal', 'WB Municipality'], bn: ['পশ্চিমবঙ্গ পৌর', 'পৌরসভা'], hi: ['पश्चिम बंगाल नगरपालिका', 'नगरपालिका'] }
  ),

  // ========================================================================
  // WEST BENGAL ACTS — SPECIAL ACTS (4 PDFs)
  // ========================================================================
  createPDF(
    'wb-apartment-ownership-act-1972',
    'WB_Apartment_Ownership_Act_1972.pdf',
    { en: 'West Bengal Apartment Ownership Act, 1972', bn: 'পশ্চিমবঙ্গ অ্যাপার্টমেন্ট মালিকানা আইন, ১৯৭২', hi: 'पश्चिम बंगाल अपार्टमेंट स्वामित्व अधिनियम, 1972' },
    'West_Bengal_Acts/Special_Acts/WB_Apartment_Ownership_Act_1972.pdf',
    'west_bengal_acts',
    'special_acts',
    466,
    1972,
    { en: ['Apartment Ownership', 'Flat', 'Housing Society'], bn: ['অ্যাপার্টমেন্ট মালিকানা', 'ফ্ল্যাট'], hi: ['अपार्टमेंट स्वामित्व', 'फ्लैट'] }
  ),
  createPDF(
    'wb-clinical-establishments-act-2017',
    'The_West_Bengal_Clinical_Establishments_Act_2017.pdf',
    { en: 'West Bengal Clinical Establishments Act, 2017', bn: 'পশ্চিমবঙ্গ ক্লিনিক্যাল প্রতিষ্ঠান আইন, ২০১৭', hi: 'पश्चिम बंगाल क्लिनिकल स्थापना अधिनियम, 2017' },
    'West_Bengal_Acts/Special_Acts/The_West_Bengal_Clinical_Establishments_Act_2017.pdf',
    'west_bengal_acts',
    'special_acts',
    3111,
    2017,
    { en: ['Clinical Establishment', 'Hospital', 'Healthcare'], bn: ['ক্লিনিক্যাল প্রতিষ্ঠান', 'হাসপাতাল'], hi: ['क्लिनिकल स्थापना', 'अस्पताल'] }
  ),
  createPDF(
    'wb-heritage-commission-act-2001',
    'The_West_Bengal_Heritage_Commission_Act_2001.pdf',
    { en: 'West Bengal Heritage Commission Act, 2001', bn: 'পশ্চিমবঙ্গ ঐতিহ্য কমিশন আইন, ২০০১', hi: 'पश्चिम बंगाल विरासत आयोग अधिनियम, 2001' },
    'West_Bengal_Acts/Special_Acts/The_West_Bengal_Heritage_Commission_Act_2001.pdf',
    'west_bengal_acts',
    'special_acts',
    2346,
    2001,
    { en: ['Heritage', 'Heritage Commission', 'WB Heritage'], bn: ['ঐতিহ্য', 'ঐতিহ্য কমিশন'], hi: ['विरासत', 'विरासत आयोग'] }
  ),
  createPDF(
    'wb-depositors-act-2013',
    'The_West_Bengal_Protection_of_Interest_of_Depositors_in_Financial_Establishments_Act.pdf',
    { en: 'West Bengal Protection of Interest of Depositors in Financial Establishments Act, 2013', bn: 'পশ্চিমবঙ্গ আর্থিক প্রতিষ্ঠানে জমাকারী স্বার্থ সুরক্ষা আইন, ২০১৩', hi: 'पश्चिम बंगाल वित्तीय संस्थानों में जमाकर्ता हित संरक्षण अधिनियम, 2013' },
    'West_Bengal_Acts/Special_Acts/The_West_Bengal_Protection_of_Interest_of_Depositors_in_Financial_Establishments_Act.pdf',
    'west_bengal_acts',
    'special_acts',
    211,
    2013,
    { en: ['Depositors', 'Financial Establishments', 'Chit Fund'], bn: ['জমাকারী', 'আর্থিক প্রতিষ্ঠান'], hi: ['जमाकर्ता', 'वित्तीय संस्थान'] }
  ),

  // ========================================================================
  // REGULATIONS & RULES — IRDAI (3 PDFs)
  // ========================================================================
  createPDF(
    'irdai-health-insurance-2020',
    'IRDAI_Health_Insurance_Regulations_2020.pdf',
    { en: 'IRDAI (Health Insurance) Regulations, 2020', bn: 'আইআরডিএআই (স্বাস্থ্য বীমা) বিনিয়ম, ২০২০', hi: 'आईआरडीएआई (स्वास्थ्य बीमा) विनियम, 2020' },
    'Regulations_Rules/IRDAI_Regulations/IRDAI_Health_Insurance_Regulations_2020.pdf',
    'regulations_rules',
    'irdai_regulations',
    314,
    2020,
    { en: ['IRDAI', 'Health Insurance', 'Insurance Regulations'], bn: ['আইআরডিএআই', 'স্বাস্থ্য বীমা'], hi: ['आईआरडीएआई', 'स्वास्थ्य बीमा'] }
  ),
  createPDF(
    'irdai-insurance-agents-2016',
    'IRDAI_Insurance_Agents_Regulations_2016.pdf',
    { en: 'IRDAI (Registration of Insurance Agents) Regulations, 2016', bn: 'আইআরডিএআই (বীমা এজেন্ট নিবন্ধন) বিনিয়ম, ২০১৬', hi: 'आईआरडीएआई (बीमा एजेंट पंजीकरण) विनियम, 2016' },
    'Regulations_Rules/IRDAI_Regulations/IRDAI_Insurance_Agents_Regulations_2016.pdf',
    'regulations_rules',
    'irdai_regulations',
    2749,
    2016,
    { en: ['IRDAI', 'Insurance Agents', 'Insurance Regulations'], bn: ['আইআরডিএআই', 'বীমা এজেন্ট'], hi: ['आईआरडीएआई', 'बीमा एजेंट'] }
  ),
  createPDF(
    'insurance-ombudsman-rules-2017',
    'The_Insurance_Ombudsman_Rules_2017.pdf',
    { en: 'Insurance Ombudsman Rules, 2017', bn: 'বীমা লোকপাল বিধি, ২০১৭', hi: 'बीमा लोकपाल नियम, 2017' },
    'Regulations_Rules/IRDAI_Regulations/The_Insurance_Ombudsman_Rules_2017.pdf',
    'regulations_rules',
    'irdai_regulations',
    355,
    2017,
    { en: ['Insurance Ombudsman', 'Ombudsman', 'Insurance Complaint'], bn: ['বীমা লোকপাল', 'অভিযোগ'], hi: ['बीमा लोकपाल', 'बीमा शिकायत'] }
  ),

  // ========================================================================
  // REGULATIONS & RULES — TRAI (1 PDF)
  // ========================================================================
  createPDF(
    'trai-qos-regulations',
    'TRAI_Quality_of_Service_Regulations.pdf',
    { en: 'TRAI Quality of Service Regulations', bn: 'ট্রাই পরিষেবার মান বিনিয়ম', hi: 'ट्राई सेवा गुणवत्ता विनियम' },
    'Regulations_Rules/TRAI_Regulations/TRAI_Quality_of_Service_Regulations.pdf',
    'regulations_rules',
    'trai_regulations',
    672,
    2019,
    { en: ['TRAI', 'QoS', 'Quality of Service'], bn: ['ট্রাই', 'পরিষেবার মান'], hi: ['ट्राई', 'सेवा गुणवत्ता'] }
  )

  // NOTE: Judicial_Precedents — No PDFs in the downloaded set yet (folder reserved).
];

// ============================================================================
// COMPUTED DATA
// ============================================================================

export const TOTAL_PDFS = ELIBRARY_PDFS.length;
export const TOTAL_SIZE_KB = ELIBRARY_PDFS.reduce((sum, pdf) => sum + pdf.sizeKB, 0);

// ============================================================================
// TREE STRUCTURE GENERATION
// ============================================================================

function buildCategoryNode(
  category: ELibraryCategory,
  subCategories: ELibrarySubCategory[],
  pdfs: ELibraryPDF[]
): ELibraryTreeNode {
  const categoryPDFs = pdfs.filter(p => p.category === category);
  const node: ELibraryTreeNode = {
    id: category,
    label: CATEGORY_LABELS[category],
    icon: CATEGORY_ICONS[category],
    category,
    pdfs: categoryPDFs
  };

  if (subCategories.length > 0) {
    node.children = subCategories.map(subCat => {
      const subCatPDFs = pdfs.filter(p => p.subCategory === subCat);
      let labelMap: Record<Language, string>;
      let icon = SUBCATEGORY_ICONS[subCat] || 'FileText';

      if (subCat in CENTRAL_ACTS_SUBCATEGORY_LABELS) {
        labelMap = CENTRAL_ACTS_SUBCATEGORY_LABELS[subCat as CentralActsSubCategory];
      } else if (subCat in WB_ACTS_SUBCATEGORY_LABELS) {
        labelMap = WB_ACTS_SUBCATEGORY_LABELS[subCat as WestBengalActsSubCategory];
      } else if (subCat in REGULATIONS_SUBCATEGORY_LABELS) {
        labelMap = REGULATIONS_SUBCATEGORY_LABELS[subCat as RegulationsRulesSubCategory];
      } else if (subCat in JUDICIAL_SUBCATEGORY_LABELS) {
        labelMap = JUDICIAL_SUBCATEGORY_LABELS[subCat as JudicialPrecedentsSubCategory];
      } else {
        labelMap = { en: subCat, bn: subCat, hi: subCat };
      }

      const subNode: ELibraryTreeNode = {
        id: subCat,
        label: labelMap,
        icon,
        category,
        subCategory: subCat,
        path: `${category}/${subCat}`,
        pdfs: subCatPDFs
      };

      return subNode;
    });
  }

  return node;
}

const CENTRAL_SUBCATEGORIES: CentralActsSubCategory[] = [
  'criminal_law_2023',
  'civil_procedure',
  'property_law',
  'family_law',
  'commercial_law',
  'consumer_protection'
];

const WB_SUBCATEGORIES: WestBengalActsSubCategory[] = [
  'land_reforms',
  'tenancy',
  'municipal',
  'special_acts'
];

const REGULATIONS_SUBCATEGORIES: RegulationsRulesSubCategory[] = [
  'cpc_orders',
  'rbi_guidelines',
  'irdai_regulations',
  'trai_regulations',
  'sebi_regulations',
  'ccpa_guidelines'
];

const JUDICIAL_SUBCATEGORIES: JudicialPrecedentsSubCategory[] = [
  'supreme_court',
  'high_courts',
  'tribunals'
];

// ============================================================================
// CATALOG DATA EXPORT
// ============================================================================

export const ELIBRARY_CATALOG_DATA: ELibraryCatalogData = {
  version: '2.0.0',
  generatedAt: '2026-11-08',
  totalPDFs: TOTAL_PDFS,
  totalSizeKB: TOTAL_SIZE_KB,
  categories: [
    buildCategoryNode('central_acts', CENTRAL_SUBCATEGORIES, ELIBRARY_PDFS),
    buildCategoryNode('west_bengal_acts', WB_SUBCATEGORIES, ELIBRARY_PDFS),
    buildCategoryNode('regulations_rules', REGULATIONS_SUBCATEGORIES, ELIBRARY_PDFS),
    buildCategoryNode('judicial_precedents', JUDICIAL_SUBCATEGORIES, ELIBRARY_PDFS)
  ],
  pdfs: ELIBRARY_PDFS,
  subCategoryMap: {
    ...CENTRAL_ACTS_SUBCATEGORY_LABELS,
    ...WB_ACTS_SUBCATEGORY_LABELS,
    ...REGULATIONS_SUBCATEGORY_LABELS,
    ...JUDICIAL_SUBCATEGORY_LABELS
  } as Record<ELibrarySubCategory, { label: Record<Language, string>; icon: string }>,
  categoryMap: CATEGORY_LABELS
};

export default ELIBRARY_CATALOG_DATA;
