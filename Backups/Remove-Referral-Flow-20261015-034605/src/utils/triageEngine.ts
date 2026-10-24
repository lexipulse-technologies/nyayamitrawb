import type { Advisor, CaseIntakeSubmission, ProTransactionRecord, Language } from '../types/legal';
import { CIVIL_CATEGORIES } from '../data/civilLegalData';
import { supabase } from '../lib/supabaseClient';

export const WEST_BENGAL_DISTRICTS = [
  'Alipurduar', 'Bankura', 'Birbhum', 'Cooch Behar', 'Dakshin Dinajpur',
  'Darjeeling', 'Hooghly', 'Howrah', 'Jalpaiguri', 'Jhargram',
  'Kalimpong', 'Kolkata', 'Malda', 'Murshidabad', 'Nadia',
  'North 24 Parganas', 'Paschim Bardhaman', 'Paschim Medinipur',
  'Purba Bardhaman', 'Purba Medinipur', 'Purulia', 'South 24 Parganas',
  'Uttar Dinajpur'
];

export const INITIAL_ADVISORS: Advisor[] = [
  {
    id: 'adv-wb-001',
    name: 'District Legal Services Authority (DLSA) Kolkata',
    type: 'DLSA',
    district: 'Kolkata',
    court: 'City Civil Court, Kolkata',
    phone: '033-2248-1234 (Toll-Free 15100)',
    email: 'dlsa.kolkata@wb.gov.in',
    isFreeAid: true,
    isActive: true
  },
  {
    id: 'adv-wb-002',
    name: 'District Legal Services Authority (DLSA) North 24 Parganas',
    type: 'DLSA',
    district: 'North 24 Parganas',
    court: 'Barasat District Court, North 24 Parganas',
    phone: '033-2584-5678 (Toll-Free 15100)',
    email: 'dlsa.north24p@wb.gov.in',
    isFreeAid: true,
    isActive: true
  },
  {
    id: 'adv-wb-003',
    name: 'Advocate Tanweer Ahmed Khan',
    type: 'Advocate',
    barRegistrationNo: 'WB/1863/2010',
    district: 'Kolkata',
    court: 'City Civil Court & High Court at Calcutta',
    phone: '+91 9804785564',
    email: 'adv.tanweerakhan@nyayamitra.wb',
    isFreeAid: false,
    isActive: true
  }
];

const ADVISOR_STORAGE_KEY = 'nyayamitra_advisors_v4';
const INTAKE_STORAGE_KEY = 'nyayamitra_intake_data';
const PRO_STORAGE_KEY = 'nyayamitra_pro_transactions_data';
const CLOUD_URL_KEY = 'nyayamitra_cloud_sync_url';

export function getCloudSyncUrl(): string {
  const fromStorage = localStorage.getItem(CLOUD_URL_KEY);
  if (fromStorage && fromStorage.trim()) return fromStorage.trim();
  return (import.meta as any).env?.VITE_CLOUD_API_URL || '';
}

export function setCloudSyncUrl(url: string): void {
  localStorage.setItem(CLOUD_URL_KEY, url.trim());
}

export function getAdvisors(): Advisor[] {
  const data = localStorage.getItem(ADVISOR_STORAGE_KEY);
  if (!data) {
    localStorage.setItem(ADVISOR_STORAGE_KEY, JSON.stringify(INITIAL_ADVISORS));
    return INITIAL_ADVISORS;
  }
  try {
    return JSON.parse(data);
  } catch {
    return INITIAL_ADVISORS;
  }
}

export function saveAdvisors(advisors: Advisor[]): void {
  localStorage.setItem(ADVISOR_STORAGE_KEY, JSON.stringify(advisors));
}

export function toggleAdvisorStatus(id: string): Advisor[] {
  const advisors = getAdvisors().map(adv =>
    adv.id === id ? { ...adv, isActive: !adv.isActive } : adv
  );
  saveAdvisors(advisors);
  return advisors;
}

export function addAdvisor(newAdv: Omit<Advisor, 'id'>): Advisor[] {
  const current = getAdvisors();
  const id = `adv-wb-${Date.now()}`;
  const updated = [...current, { ...newAdv, id }];
  saveAdvisors(updated);
  return updated;
}

export function getIntakeSubmissions(): CaseIntakeSubmission[] {
  const data = localStorage.getItem(INTAKE_STORAGE_KEY);
  if (!data) return [];
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function saveIntakeSubmission(
  submission: Omit<CaseIntakeSubmission, 'id' | 'timestamp'>
): Promise<CaseIntakeSubmission> {
  if (import.meta.env.DEV) {
    const response = await fetch('/api/submit-intake', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(submission)
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || !result.item) throw new Error(result.error || 'Local intake mock failed.');
    return result.item as CaseIntakeSubmission;
  }

  if (!supabase) throw new Error('Secure cloud intake is unavailable. Please try again later.');
  const response = await fetch('/api/submit-intake', {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(submission)
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok || !result.item) throw new Error(result.error || 'Unable to securely submit the referral. Please try again.');

  const item = result.item as CaseIntakeSubmission;
  const cachedList = getIntakeSubmissions().filter(existing => existing.id !== item.id);
  cachedList.unshift(item);
  localStorage.setItem(INTAKE_STORAGE_KEY, JSON.stringify(cachedList));
  return item;
}

export async function deleteIntakeSubmission(id: string): Promise<boolean> {
  const cleanId = id.trim().toUpperCase();

  const currentList = getIntakeSubmissions();
  const updatedList = currentList.filter(item => item.id.toUpperCase() !== cleanId);
  localStorage.setItem(INTAKE_STORAGE_KEY, JSON.stringify(updatedList));

  if (supabase) {
    try {
      const { error: rpcError } = await supabase.rpc('delete_intake_authenticated', {
        ticket_id: cleanId,
        admin_user: 'Abi786',
        admin_pass: 'Baabuujii@5623'
      });

      if (rpcError) {
        await supabase.from('case_intakes').delete().eq('id', cleanId);
      }
    } catch (err: any) {
      console.warn('[Remote Delete Exception]:', err.message);
    }
  }

  return true;
}

export async function lookupTicketRemotely(ticketId: string): Promise<CaseIntakeSubmission | null> {
  const cleanId = ticketId.trim().toUpperCase();
  if (!supabase) return null;

  try {
    const { data, error } = await supabase.rpc('get_submission_by_id', { lookup_id: cleanId });
    if (!error && Array.isArray(data) && data.length > 0) {
      const d = data[0];
      return {
        id: d.id,
        citizenName: d.citizen_name,
        phone: d.phone,
        district: d.district,
        subcategoryTitle: d.subcategory_title,
        briefSummary: d.brief_summary || '',
        isBPL: Boolean(d.is_bpl),
        preferredAidType: (d.preferred_aid_type as 'DLSA' | 'ADVOCATE') || 'DLSA',
        consentGiven: Boolean(d.consent_given),
        timestamp: d.timestamp
      };
    }
  } catch {}

  try {
    const { data, error } = await supabase
      .from('case_intakes')
      .select('*')
      .eq('id', cleanId)
      .maybeSingle();

    if (!error && data) {
      return {
        id: data.id,
        citizenName: data.citizen_name,
        phone: data.phone,
        district: data.district,
        subcategoryTitle: data.subcategory_title,
        briefSummary: data.brief_summary || '',
        isBPL: Boolean(data.is_bpl),
        preferredAidType: (data.preferred_aid_type as 'DLSA' | 'ADVOCATE') || 'DLSA',
        consentGiven: Boolean(data.consent_given),
        timestamp: data.timestamp
      };
    }
  } catch {}

  return null;
}

export async function syncFromCloud(adminUser?: string, adminPass?: string): Promise<CaseIntakeSubmission[]> {
  const localList = getIntakeSubmissions();
  if (!supabase) return localList;

  if (adminUser && adminPass) {
    try {
      const { data, error } = await supabase.rpc('get_all_intakes_authenticated', {
        admin_user: adminUser,
        admin_pass: adminPass
      });

      if (!error && Array.isArray(data)) {
        const formattedRemote: CaseIntakeSubmission[] = data.map((d: any) => ({
          id: d.id,
          citizenName: d.citizen_name,
          phone: d.phone,
          district: d.district,
          subcategoryTitle: d.subcategory_title,
          briefSummary: d.brief_summary || '',
          isBPL: Boolean(d.is_bpl),
          preferredAidType: (d.preferred_aid_type as 'DLSA' | 'ADVOCATE') || 'DLSA',
          consentGiven: Boolean(d.consent_given),
          timestamp: d.timestamp
        }));

        const mergedMap = new Map<string, CaseIntakeSubmission>();
        localList.forEach(item => mergedMap.set(item.id, item));
        formattedRemote.forEach(item => mergedMap.set(item.id, item));

        const merged = Array.from(mergedMap.values());
        localStorage.setItem(INTAKE_STORAGE_KEY, JSON.stringify(merged));
        return merged;
      }
    } catch {}
  }

  return localList;
}

export function findSubmissionById(id: string): CaseIntakeSubmission | undefined {
  const cleanId = id.trim().toUpperCase();
  return getIntakeSubmissions().find(sub => sub.id.toUpperCase() === cleanId);
}

export function findMatchingAdvisors(
  district: string,
  isBPL: boolean,
  preferredAidType: 'DLSA' | 'ADVOCATE' = 'DLSA'
): Advisor[] {
  const all = getAdvisors().filter(a => a.isActive);

  if (preferredAidType === 'ADVOCATE' && !isBPL) {
    const advocatesInDistrict = all.filter(
      a => a.type === 'Advocate' && a.district.toLowerCase() === district.toLowerCase()
    );
    if (advocatesInDistrict.length > 0) return advocatesInDistrict;
    return all.filter(a => a.type === 'Advocate');
  }

  const districtDLSA = all.filter(
    a => a.type === 'DLSA' && a.district.toLowerCase() === district.toLowerCase()
  );
  if (districtDLSA.length > 0) return districtDLSA;
  return all.filter(a => a.type === 'DLSA');
}

export function searchLegalTopics(query: string, lang: Language) {
  if (!query.trim()) return [];
  const q = query.toLowerCase().trim();
  const tokens = q.split(/\s+/).filter(t => t.length > 1);

  const scoredMatches: {
    categoryId: string;
    subcategory: typeof CIVIL_CATEGORIES[0]['subcategories'][0];
    score: number;
  }[] = [];

  CIVIL_CATEGORIES.forEach(cat => {
    cat.subcategories.forEach(sub => {
      let score = 0;
      const title = (sub.title[lang] || sub.title.en || '').toLowerCase();
      const summary = (sub.summary[lang] || sub.summary.en || '').toLowerCase();
      const act = (sub.relevant_act || '').toLowerCase();
      const keywords = (sub.search_keywords?.[lang] || sub.search_keywords?.en || []).map(k => k.toLowerCase());

      if (title.includes(q)) score += 30;
      if (keywords.some(k => k.includes(q))) score += 20;
      if (act.includes(q)) score += 15;
      if (summary.includes(q)) score += 10;

      tokens.forEach(token => {
        if (title.includes(token)) score += 8;
        if (keywords.some(k => k.includes(token))) score += 6;
        if (summary.includes(token)) score += 3;
        if (act.includes(token)) score += 4;
      });

      if (score > 0) {
        scoredMatches.push({ categoryId: cat.id, subcategory: sub, score });
      }
    });
  });

  scoredMatches.sort((a, b) => b.score - a.score);
  return scoredMatches.slice(0, 15).map(m => ({
    categoryId: m.categoryId,
    subcategory: m.subcategory
  }));
}

function sanitizeForCsv(val: string): string {
  if (!val) return '""';
  let clean = val.replace(/"/g, '""');
  if (/^[=\+\-@\t\r]/.test(clean)) {
    clean = `'${clean}`;
  }
  return `"${clean}"`;
}

export function exportSubmissionsToCSV(): void {
  const list = getIntakeSubmissions();
  if (list.length === 0) return;

  const headers = ['Reference ID', 'Citizen Name', 'Phone', 'District', 'Topic', 'DLSA Aid Status', 'Counsel Track', 'DPDP Consent', 'Timestamp', 'Summary'];
  const rows = list.map(item => [
    sanitizeForCsv(item.id),
    sanitizeForCsv(item.citizenName),
    sanitizeForCsv(item.phone),
    sanitizeForCsv(item.district),
    sanitizeForCsv(item.subcategoryTitle),
    sanitizeForCsv(item.isBPL ? 'Qualified (BPL)' : 'General'),
    sanitizeForCsv(item.preferredAidType),
    sanitizeForCsv(item.consentGiven ? 'Granted' : 'Missing'),
    sanitizeForCsv(item.timestamp),
    sanitizeForCsv(item.briefSummary || '')
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `nyayamitra_audit_export_${Date.now()}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// ============================================================================
// PRO MODE TRANSACTIONS DATA ENGINE (₹99 PURCHASES)
// ============================================================================

export function getProTransactions(): ProTransactionRecord[] {
  const data = localStorage.getItem(PRO_STORAGE_KEY);
  if (!data) return [];
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function saveProTransaction(
  record: ProTransactionRecord
): Promise<ProTransactionRecord> {
  const list = getProTransactions();

  // 1. Dual-Store: Save locally for instant offline receipt
  const existingIdx = list.findIndex(item => item.id === record.id);
  if (existingIdx >= 0) {
    list[existingIdx] = record;
  } else {
    list.unshift(record);
  }
  localStorage.setItem(PRO_STORAGE_KEY, JSON.stringify(list));

  // 2. Save remotely to Supabase Cloud public.pro_transactions table
  if (supabase) {
    try {
      const { error } = await supabase.from('pro_transactions').insert([
        {
          id: record.id,
          citizen_name: record.citizenName,
          phone: record.phone,
          district: record.district,
          dispute_topic: record.disputeTopic,
          utr_number: record.utrNumber,
          amount: record.amount || 99.00,
          submission_time: record.submissionTime
        }
      ]);

      if (error) {
        console.warn('[Supabase Pro Insert Notice]:', error.message);
      } else {
        console.log('[Supabase Pro Insert Success]: Recorded', record.id);
      }
    } catch (err: any) {
      console.warn('[Supabase Pro Insert Network Exception]:', err.message);
    }
  }

  return record;
}

export async function deleteProTransaction(id: string): Promise<boolean> {
  const cleanId = id.trim().toUpperCase();

  // 1. Remove from local storage
  const list = getProTransactions().filter(item => item.id.toUpperCase() !== cleanId);
  localStorage.setItem(PRO_STORAGE_KEY, JSON.stringify(list));

  // 2. Remove remotely from Supabase Cloud via authenticated RPC
  if (supabase) {
    try {
      const { error } = await supabase.rpc('delete_pro_transaction_authenticated', {
        ticket_id: cleanId,
        admin_user: 'Abi786',
        admin_pass: 'Baabuujii@5623'
      });

      if (error) {
        await supabase.from('pro_transactions').delete().eq('id', cleanId);
      }
    } catch (err: any) {
      console.warn('[Supabase Pro Delete Exception]:', err.message);
    }
  }

  return true;
}

export async function syncProTransactionsFromCloud(
  adminUser?: string,
  adminPass?: string
): Promise<ProTransactionRecord[]> {
  const localList = getProTransactions();
  if (!supabase) return localList;

  if (adminUser && adminPass) {
    try {
      const { data, error } = await supabase.rpc('get_all_pro_transactions_authenticated', {
        admin_user: adminUser,
        admin_pass: adminPass
      });

      if (!error && Array.isArray(data)) {
        const formatted: ProTransactionRecord[] = data.map((d: any) => ({
          id: d.id,
          citizenName: d.citizen_name,
          phone: d.phone,
          district: d.district,
          disputeTopic: d.dispute_topic,
          submissionTime: d.submission_time,
          utrNumber: d.utr_number,
          amount: Number(d.amount) || 99.00
        }));

        const mergedMap = new Map<string, ProTransactionRecord>();
        localList.forEach(item => mergedMap.set(item.id, item));
        formatted.forEach(item => mergedMap.set(item.id, item));

        const merged = Array.from(mergedMap.values());
        localStorage.setItem(PRO_STORAGE_KEY, JSON.stringify(merged));
        return merged;
      }
    } catch (err: any) {
      console.warn('[Supabase Pro Sync Exception]:', err.message);
    }
  }

  return localList;
}

export function exportProTransactionsToCSV(): void {
  const list = getProTransactions();
  if (list.length === 0) return;

  const headers = [
    'Reference Ticket ID',
    'Citizen Name',
    'Contact Phone',
    'District in West Bengal',
    'Dispute Topic',
    'Submission Time',
    'Verified UTR',
    'Amount (INR)'
  ];

  const rows = list.map(item => [
    sanitizeForCsv(item.id),
    sanitizeForCsv(item.citizenName),
    sanitizeForCsv(item.phone),
    sanitizeForCsv(item.district),
    sanitizeForCsv(item.disputeTopic),
    sanitizeForCsv(item.submissionTime),
    sanitizeForCsv(item.utrNumber),
    sanitizeForCsv(String(item.amount || 99))
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `nyayamitra_pro_transactions_audit_${Date.now()}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
