export type Language = 'bn' | 'hi' | 'en';

export type ForumType =
  | 'BL_LRO'
  | 'Civil_Court'
  | 'Rent_Controller'
  | 'Consumer_DCDRC'
  | 'WBRERA'
  | 'WBCERC'
  | 'Electricity_Ombudsman'
  | 'Magistrate_Court'
  | 'SDO_Tribunal'
  | 'Family_Court'
  | 'DLSA'
  | 'Cyber_Cell'
  | 'Thika_Controller'
  | 'Insurance_Ombudsman'
  | 'MSME_Council'
  | 'Labour_Court'
  | 'NCLT'
  | 'High_Court'
  | 'Commercial_Court'
  | 'DRT'
  | 'DRAT'
  | 'Waqf_Tribunal'
  | 'NGT'
  | 'Lok_Adalat'
  | 'Competent_Authority'
  | 'Municipal_Corporation'
  | 'KMC';

export type TerritoryTrack = 'Universal' | 'Dual_Path';

export interface TerritorialPath {
  authority: Record<Language, string>;
  portal_name?: Record<Language, string>;
  portal_url?: string;
  statutory_timeframe?: Record<Language, string>;
  steps: Record<Language, string[]>;
}

export interface DualPathRoadmap {
  rural_district: TerritorialPath;
  kolkata_urban: TerritorialPath;
}

export interface RequiredDoc {
  id: string;
  name: Record<Language, string>;
  issuing_authority: Record<Language, string>;
  is_mandatory?: boolean;
}

export interface CivilSubCategory {
  id: string;
  title: Record<Language, string>;
  relevant_act: string;
  summary: Record<Language, string>;
  authority_forum: Record<Language, string>;
  forum_type?: ForumType;
  is_complex: boolean;
  official_portal_url?: string;
  statutory_timeframe?: Record<Language, string>;
  search_keywords?: Record<Language, string[]>;
  roadmap_steps: Record<Language, string[]>;
  required_documents: RequiredDoc[];

  // Territorial dual-path extension
  territory_track?: TerritoryTrack;
  dual_path?: DualPathRoadmap;
}

export interface CivilCategory {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  subcategories: CivilSubCategory[];
}

export interface Advisor {
  id: string;
  name: string;
  type: 'DLSA' | 'Advocate' | 'LegalAidClinic';
  barRegistrationNo?: string;
  district: string;
  court: string;
  phone: string;
  email: string;
  isFreeAid: boolean;
  isActive: boolean;
}

export interface CaseIntakeSubmission {
  id: string;
  citizenName: string;
  phone: string;
  district: string;
  subcategoryTitle: string;
  briefSummary: string;
  isBPL: boolean;
  preferredAidType: 'DLSA' | 'ADVOCATE';
  consentGiven: boolean;
  timestamp: string;
}

/**
 * NYAYAMITRA PRO (₹99) TRANSACTION RECORD CONTRACT
 * Maps directly to Supabase public.pro_transactions table
 */
export interface ProTransactionRecord {
  id: string;             // 1. Reference Ticket ID (NM-DOC-XXXXXX)
  citizenName: string;    // 2. Citizen Name
  phone: string;          // 3. Contact Phone
  district: string;       // 4. District in West Bengal
  disputeTopic: string;   // 5. Dispute Topic
  submissionTime: string; // 6. Submission Time
  utrNumber: string;      // 7. Verified UTR
  amount?: number;        // Paid Amount (₹99.00)
}