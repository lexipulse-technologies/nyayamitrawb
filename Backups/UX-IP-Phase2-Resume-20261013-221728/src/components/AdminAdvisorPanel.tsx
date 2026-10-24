import React, { useState, useEffect } from 'react';
import {
  Users,
  FileText,
  Plus,
  ShieldCheck,
  Power,
  Search,
  Download,
  RefreshCw,
  Database,
  Check,
  Link,
  Award,
  Trash2,
  AlertTriangle,
  Loader2,
  Clock,
  Globe,
  Zap,
  CreditCard,
  CheckCircle,
  XCircle,
  KeyRound
} from 'lucide-react';
import type { Advisor, CaseIntakeSubmission, ProTransactionRecord, Language } from '../types/legal';
import {
  WEST_BENGAL_DISTRICTS,
  getAdvisors,
  toggleAdvisorStatus,
  addAdvisor,
  getIntakeSubmissions,
  syncFromCloud,
  getCloudSyncUrl,
  setCloudSyncUrl,
  exportSubmissionsToCSV,
  fetchIntakeIpv4,
  deleteIntakeSubmission,
  getProTransactions,
  syncProTransactionsFromCloud,
  deleteProTransaction,
  exportProTransactionsToCSV
} from '../utils/triageEngine';
import { getLastAdminLogin, type AdminLoginRecord } from '../utils/authUtils';

const ADMIN_TEXT = {
  title: { bn: 'অ্যাডমিন কন্ট্রোল রুম (CMO West Bengal Inspired)', hi: 'प्रशासनिक कंट्रोल रूम', en: 'NyayaMitra Administrative Panel' },
  subtitle: { bn: 'প্যানেল আইনজীবী তালিকা, ফ্রি এইড আবেদন ও প্রো ট্রানজ্যাকশন পর্যবেক্ষণ', hi: 'अधिवक्ता प्रबंधन, मुफ्त कानूनी आवेदन एवं प्रो ट्रांजैक्शन निगरानी', en: 'Manage panel advisors, review citizen intakes, and monitor verified Pro transactions' },
  tabAdvisors: { bn: 'প্যানেল আইনজীবী ডিরেক্টরি', hi: 'अधिवक्ता डायरेक्टरी', en: 'Advisors Directory' },
  tabIntakes: { bn: 'ইউজার রিকোয়েস্ট সাবমিশন', hi: 'यूज़र रिक्वेस्ट सबमिशन', en: 'Free Citizen Intakes' },
  tabPro: { bn: 'প্রো ট্রানজ্যাকশন (₹৯৯)', hi: 'प्रो ट्रांजैक्शन (₹99)', en: 'Pro Transactions (₹99)' },
  addAdvisorBtn: { bn: 'নতুন আইনজীবী যুক্ত করুন', hi: 'नए अधिवक्ता जोड़ें', en: 'Add New Panel Advisor' },
  syncCloudBtn: { bn: 'ক্লাউড থেকে রিফ্রেশ করুন', hi: 'ক্লাউড সে রিফ্রেশ करें', en: 'Sync Cloud Data' },
  exportCsvBtn: { bn: 'এক্সেল/CSV ডাউনলোড', hi: 'एक्सेल/CSV डाउनलोड', en: 'Export to CSV' },
  cloudSettingsBtn: { bn: 'ক্লাউড ডাটাবেস লিংক', hi: 'क्लाउड डेटाबेस लिंक', en: 'Cloud DB Settings' },
  
  lastLoginHeading: { bn: 'লাস্ট অ্যাডমিন লগইন টাইমস্ট্যাম্প:', hi: 'अंतिम एडमिन लॉगिन समय:', en: 'Last Admin Login Time Stamp:' },
  lastIpHeading: { bn: 'লাস্ট লগইন আইপি (IPv4):', hi: 'अंतिम लॉगिन आईपी (IPv4):', en: 'IP last login:' },
  securityAuditLabel: { bn: 'নিরাপত্তা পর্যবেক্ষণ সক্রিয় (Anti-Tamper)', hi: 'सुरक्षा निगरानी सक्रिय (Anti-Tamper)', en: 'Security Audit Active (Anti-Tamper)' },

  thRefId: { bn: 'Reference Ticket ID', hi: 'Reference Ticket ID', en: 'Reference Ticket ID' },
  thCitizen: { bn: 'Citizen Name', hi: 'Citizen Name', en: 'Citizen Name' },
  thPhone: { bn: 'Contact Phone', hi: 'Contact Phone', en: 'Contact Phone' },
  thDistrict: { bn: 'District in West Bengal', hi: 'District in West Bengal', en: 'District in West Bengal' },
  thTopic: { bn: 'Dispute Topic', hi: 'Dispute Topic', en: 'Dispute Topic' },
  thTime: { bn: 'Submission Time', hi: 'Submission Time', en: 'Submission Time' },
  thIpv4: { bn: 'আইপি (IPv4)', hi: 'IPv4 पता', en: 'Client IPv4 (sensitive)' },
  ipv4AccessLabel: { bn: 'IP অডিট অ্যাক্সেস টোকেন', hi: 'IP ऑडिट एक्सेस टोकन', en: 'IP audit access token' },
  loadIpv4: { bn: 'আইপি লোড করুন', hi: 'IP लोड करें', en: 'Load IP audit data' },
  ipPrivacyNote: { bn: 'IPv4 সংবেদনশীল ব্যক্তিগত তথ্য; শুধু অনুমোদিত ব্যবহারে দেখুন/রপ্তানি করুন।', hi: 'IPv4 संवेदनशील व्यक्तिगत डेटा है; केवल अधिकृत उपयोग हेतु देखें/निर्यात करें।', en: 'IPv4 is sensitive personal data. View/export only for authorized intake administration.' },
  thUtr: { bn: 'Razorpay Payment ID / UTR', hi: 'Razorpay Payment ID / UTR', en: 'Razorpay Payment ID / UTR' },
  thAction: { bn: 'Action', hi: 'Action', en: 'Action' },
  deleteBtn: { bn: 'মুছুন', hi: 'हटाएं', en: 'Delete' },

  thName: { bn: 'নাম ও বার কাউন্সিল নং', hi: 'नाम व बार काउंसिल नंबर', en: 'Name & Bar Reg No' },
  thType: { bn: 'ধরন', hi: 'प्रकार', en: 'Type' },
  thCourtDistrict: { bn: 'জেলা ও আদালত', hi: 'जिला व अदालत', en: 'District & Court' },
  thContact: { bn: 'যোগাযোগ', hi: 'संपर्क', en: 'Contact' },
  thFreeAid: { bn: 'বিনামূল্যে এইড', hi: 'मुफ्त सहायता', en: 'Free Aid' },
  thStatus: { bn: 'স্ট্যাটাস', hi: 'स्थिति', en: 'Status' },
  active: { bn: 'সক্রিয়', hi: 'सक्रिय', en: 'Active' },
  inactive: { bn: 'নিষ্ক্রিয়', hi: 'निष्क्रिय', en: 'Inactive' },
  yesDLSA: { bn: 'হ্যাঁ (DLSA)', hi: 'हाँ (DLSA)', en: 'Yes (DLSA)' },
  noPrivate: { bn: 'না (Track B)', hi: 'नहीं (Track B)', en: 'No (Track B)' },

  noIntakesMsg: {
    bn: 'এখনও পর্যন্ত কোনো ফ্রি এইড রিকোয়েস্ট জমা পড়েনি।',
    hi: 'अभी तक कोई मुफ्त सहायता अनुरोध दर्ज नहीं हुआ है।',
    en: 'No free legal aid intake submissions recorded yet.'
  },
  noProMsg: {
    bn: 'এখনও পর্যন্ত কোনো ₹৯৯ প্রো ট্রানজ্যাকশন জমা পড়েনি। ক্লাউড ডাটাবেস থেকে রিফ্রেশ করতে উপরের বাটনে চাপুন।',
    hi: 'अभी तक कोई ₹99 प्रो ट्रांजैक्शन दर्ज नहीं हुआ है।',
    en: 'No ₹99 Pro transactions recorded yet. Click "Sync Cloud Data" above to fetch records from Supabase.'
  }
};

export const AdminAdvisorPanel: React.FC<{ lang?: Language }> = ({ lang = 'bn' }) => {
  const [tab, setTab] = useState<'pro' | 'intakes' | 'advisors'>('pro');
  const [advisors, setAdvisors] = useState<Advisor[]>([]);
  const [intakes, setIntakes] = useState<CaseIntakeSubmission[]>([]);
  const [intakeIpv4, setIntakeIpv4] = useState<Record<string, { ipv4: string | null; status: 'captured' | 'unavailable'; capturedAt: string | null }>>({});
  const [ipAdminToken, setIpAdminToken] = useState(() => sessionStorage.getItem('nyayamitra_ip_admin_token') || '');
  const [ipLookupMessage, setIpLookupMessage] = useState('');
  const [isLoadingIpv4, setIsLoadingIpv4] = useState(false);
  const [proTransactions, setProTransactions] = useState<ProTransactionRecord[]>([]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showCloudModal, setShowCloudModal] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

  const [intakeSearchTerm, setIntakeSearchTerm] = useState('');
  const [proSearchTerm, setProSearchTerm] = useState('');
  const [cloudUrlInput, setCloudUrlInput] = useState('');
  const [saveMessage, setSaveMessage] = useState(false);

  const [auditRecord, setAuditRecord] = useState<AdminLoginRecord | null>(null);

  const [deleteTarget, setDeleteTarget] = useState<CaseIntakeSubmission | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const [deleteProTarget, setDeleteProTarget] = useState<ProTransactionRecord | null>(null);
  const [isDeletingPro, setIsDeletingPro] = useState(false);

  // Add Advisor Form State
  const [name, setName] = useState('');
  const [barRegistrationNo, setBarRegistrationNo] = useState('');
  const [type, setType] = useState<'Advocate' | 'DLSA' | 'LegalAidClinic'>('Advocate');
  const [district, setDistrict] = useState(WEST_BENGAL_DISTRICTS[11]);
  const [court, setCourt] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isFreeAid, setIsFreeAid] = useState(false);

  const loadData = async () => {
    setAdvisors(getAdvisors());
    setIntakes(getIntakeSubmissions());
    setIntakeIpv4({});
    setProTransactions(getProTransactions());
    setCloudUrlInput(getCloudSyncUrl());

    try {
      const audit = await getLastAdminLogin();
      setAuditRecord(audit);
    } catch {}

    handleSyncAll();
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSyncAll = async () => {
    setIsSyncing(true);
    setIntakeIpv4({});
    try {
      const [syncedIntakes, syncedPro] = await Promise.all([
        syncFromCloud('Abi786', 'Baabuujii@5623'),
        syncProTransactionsFromCloud('Abi786', 'Baabuujii@5623')
      ]);
      setIntakes(syncedIntakes);
      setProTransactions(syncedPro);
    } finally {
      setIsSyncing(false);
    }
  };

  const handleToggle = (id: string) => {
    const updated = toggleAdvisorStatus(id);
    setAdvisors(updated);
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const updated = addAdvisor({
      name,
      barRegistrationNo: barRegistrationNo.trim() || undefined,
      type,
      district,
      court: court || `${district} District Court`,
      phone,
      email: email || `${phone}@nyayamitra.wb`,
      isFreeAid,
      isActive: true
    });

    setAdvisors(updated);
    setShowAddModal(false);
    setName('');
    setBarRegistrationNo('');
    setPhone('');
    setCourt('');
    setEmail('');
  };

  const handleConfirmDeleteIntake = async () => {
    if (!deleteTarget) return;
    setIsDeleting(true);
    try {
      await deleteIntakeSubmission(deleteTarget.id);
      setIntakes(prev => prev.filter(item => item.id !== deleteTarget.id));
      setIntakeIpv4(prev => {
        const next = { ...prev };
        delete next[deleteTarget.id];
        return next;
      });
      setDeleteTarget(null);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleConfirmDeletePro = async () => {
    if (!deleteProTarget) return;
    setIsDeletingPro(true);
    try {
      await deleteProTransaction(deleteProTarget.id);
      setProTransactions(prev => prev.filter(item => item.id !== deleteProTarget.id));
      setDeleteProTarget(null);
    } finally {
      setIsDeletingPro(false);
    }
  };

  const handleLoadIpv4 = async () => {
    if (!ipAdminToken.trim()) {
      setIpLookupMessage('Enter the separate IPv4 audit access token.');
      return;
    }
    setIsLoadingIpv4(true);
    setIpLookupMessage('');
    try {
      sessionStorage.setItem('nyayamitra_ip_admin_token', ipAdminToken.trim());
      const records = await fetchIntakeIpv4(intakes.map(item => item.id), ipAdminToken);
      setIntakeIpv4(records);
      setIpLookupMessage(`Loaded IPv4 status for ${Object.keys(records).length} ticket(s).`);
    } catch (error) {
      sessionStorage.removeItem('nyayamitra_ip_admin_token');
      setIntakeIpv4({});
      setIpLookupMessage(error instanceof Error ? error.message : 'Unable to load IPv4 audit data.');
    } finally {
      setIsLoadingIpv4(false);
    }
  };

  const handleExportIntakes = () => {
    if (intakes.length > 0 && intakes.some(item => !Object.prototype.hasOwnProperty.call(intakeIpv4, item.id))) {
      setIpLookupMessage('Load authorized IPv4 data before exporting.');
      return;
    }
    exportSubmissionsToCSV(intakeIpv4);
  };

  const filteredIntakes = intakes.filter(item =>
    item.id.toLowerCase().includes(intakeSearchTerm.toLowerCase()) ||
    item.citizenName.toLowerCase().includes(intakeSearchTerm.toLowerCase()) ||
    item.district.toLowerCase().includes(intakeSearchTerm.toLowerCase())
  );

  const filteredProTransactions = proTransactions.filter(item =>
    item.id.toLowerCase().includes(proSearchTerm.toLowerCase()) ||
    item.citizenName.toLowerCase().includes(proSearchTerm.toLowerCase()) ||
    item.district.toLowerCase().includes(proSearchTerm.toLowerCase()) ||
    item.utrNumber.toLowerCase().includes(proSearchTerm.toLowerCase()) ||
    item.disputeTopic.toLowerCase().includes(proSearchTerm.toLowerCase())
  );

  const totalProRevenue = proTransactions.length * 99;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm space-y-4">
      
      {/* Top Header Block */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            {ADMIN_TEXT.title[lang]}
          </h2>
          <p className="text-xs text-slate-500">{ADMIN_TEXT.subtitle[lang]}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setShowCloudModal(true)}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300 transition cursor-pointer"
          >
            <Database className="w-3.5 h-3.5 text-blue-600" />
            {ADMIN_TEXT.cloudSettingsBtn[lang]}
          </button>

          {/* 3 TABS: Pro Transactions • Free Intakes • Advisors */}
          <div className="flex bg-slate-100 p-1 rounded-xl gap-1">
            <button
              onClick={() => setTab('pro')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
                tab === 'pro'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-sm'
                  : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Zap className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
              <span>{ADMIN_TEXT.tabPro[lang]} ({proTransactions.length})</span>
            </button>

            <button
              onClick={() => setTab('intakes')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer ${
                tab === 'intakes'
                  ? 'bg-[#0f2b48] text-white shadow-sm'
                  : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{ADMIN_TEXT.tabIntakes[lang]} ({intakes.length})</span>
            </button>

            <button
              onClick={() => setTab('advisors')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer ${
                tab === 'advisors'
                  ? 'bg-[#0f2b48] text-white shadow-sm'
                  : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>{ADMIN_TEXT.tabAdvisors[lang]} ({advisors.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Top Security Telemetry Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 bg-slate-900 text-white rounded-xl p-3 px-4 border border-slate-800 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="uppercase tracking-wider text-[11px] font-mono text-slate-200">
            {ADMIN_TEXT.securityAuditLabel[lang]}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs">
          <div className="flex items-center gap-1.5 bg-slate-800/90 border border-slate-700 px-3 py-1.5 rounded-lg">
            <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="text-slate-400 text-[11px] font-medium">{ADMIN_TEXT.lastLoginHeading[lang]}</span>
            <strong className="font-mono text-amber-300 font-bold text-[11px]">
              {auditRecord?.timestamp || 'Resolving...'}
            </strong>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-800/90 border border-slate-700 px-3 py-1.5 rounded-lg">
            <Globe className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="text-slate-400 text-[11px] font-medium">{ADMIN_TEXT.lastIpHeading[lang]}</span>
            <strong className="font-mono text-emerald-300 font-bold text-[11px]">
              {auditRecord?.ipAddress || 'Resolving...'}
            </strong>
          </div>
        </div>
      </div>

      {/* TAB 1: PRO TRANSACTIONS (SETTLEMENT RAIL DISPLAY: RAZORPAY) */}
      {tab === 'pro' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-xl space-y-1">
              <span className="text-[10.5px] font-bold text-amber-900 uppercase tracking-wider">
                Total Verified Orders (₹99)
              </span>
              <div className="text-xl font-mono font-black text-amber-950">
                {proTransactions.length} Verified
              </div>
            </div>

            <div className="p-3.5 bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 rounded-xl space-y-1">
              <span className="text-[10.5px] font-bold text-emerald-900 uppercase tracking-wider">
                Total Settled Revenue
              </span>
              <div className="text-xl font-mono font-black text-emerald-950">
                ₹{totalProRevenue.toLocaleString('en-IN')}.00 INR
              </div>
            </div>

            {/* SETTLEMENT RAIL UPDATED TO RAZORPAY */}
            <div className="p-3.5 bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl space-y-1">
              <span className="text-[10.5px] font-bold text-blue-900 uppercase tracking-wider">
                Settlement Rail
              </span>
              <div className="text-xs font-semibold text-blue-950 mt-1 flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-blue-700" />
                <span className="font-bold text-blue-950">RazorPay</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2">
              <button
                onClick={handleSyncAll}
                disabled={isSyncing}
                className="px-3 py-1.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm transition disabled:bg-slate-400 cursor-pointer"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
                <span>{ADMIN_TEXT.syncCloudBtn[lang]}</span>
              </button>

              <button
                onClick={exportProTransactionsToCSV}
                className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm transition cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{ADMIN_TEXT.exportCsvBtn[lang]}</span>
              </button>
            </div>

            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
              <input
                type="text"
                value={proSearchTerm}
                onChange={e => setProSearchTerm(e.target.value)}
                placeholder="Search Ticket / Razorpay ID / Name / District..."
                className="pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#0f2b48] bg-white w-64"
              />
            </div>
          </div>

          {filteredProTransactions.length === 0 ? (
            <div className="p-10 text-center text-slate-500 text-xs border border-dashed border-slate-200 rounded-xl">
              <p>{ADMIN_TEXT.noProMsg[lang]}</p>
            </div>
          ) : (
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold">
                    <th className="p-3">{ADMIN_TEXT.thRefId[lang]}</th>
                    <th className="p-3">{ADMIN_TEXT.thCitizen[lang]}</th>
                    <th className="p-3">{ADMIN_TEXT.thPhone[lang]}</th>
                    <th className="p-3">{ADMIN_TEXT.thDistrict[lang]}</th>
                    <th className="p-3">{ADMIN_TEXT.thTopic[lang]}</th>
                    <th className="p-3">{ADMIN_TEXT.thTime[lang]}</th>
                    <th className="p-3">{ADMIN_TEXT.thUtr[lang]}</th>
                    <th className="p-3 text-right">{ADMIN_TEXT.thAction[lang]}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredProTransactions.map(item => (
                    <tr key={item.id} className="hover:bg-amber-50/40 transition">
                      <td className="p-3 font-mono font-bold text-amber-950">
                        <span className="bg-amber-100 border border-amber-300 px-2 py-0.5 rounded text-[11px]">
                          {item.id}
                        </span>
                      </td>
                      <td className="p-3 font-bold text-slate-900">{item.citizenName}</td>
                      <td className="p-3 font-mono text-slate-700">{item.phone}</td>
                      <td className="p-3 font-medium text-slate-700">{item.district}</td>
                      <td className="p-3 text-slate-800 max-w-xs truncate" title={item.disputeTopic}>
                        {item.disputeTopic}
                      </td>
                      <td className="p-3 text-slate-500 text-[11px] whitespace-nowrap">
                        {item.submissionTime}
                      </td>
                      <td className="p-3 font-mono font-bold text-emerald-800">
                        <span className="bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-[11px]">
                          {item.utrNumber}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <button
                          type="button"
                          onClick={() => setDeleteProTarget(item)}
                          className="px-2.5 py-1 rounded-md text-[11px] font-bold inline-flex items-center gap-1 bg-red-50 text-red-700 hover:bg-red-100 border border-red-200 transition cursor-pointer"
                          title="Delete from Supabase Cloud"
                        >
                          <Trash2 className="w-3.5 h-3.5 text-red-600" />
                          <span>{ADMIN_TEXT.deleteBtn[lang]}</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: FREE CITIZEN INTAKES */}
      {tab === 'intakes' && (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2">
              <button
                onClick={handleSyncAll}
                disabled={isSyncing}
                className="px-3 py-1.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-sm transition disabled:bg-slate-400 cursor-pointer"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
                {ADMIN_TEXT.syncCloudBtn[lang]}
              </button>

              <button
                onClick={handleExportIntakes}
                className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-sm transition cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                {ADMIN_TEXT.exportCsvBtn[lang]}
              </button>
              <button
                onClick={() => {
                  sessionStorage.removeItem('nyayamitra_ip_admin_token');
                  setIpAdminToken('');
                  setIntakeIpv4({});
                  setIpLookupMessage('IPv4 data hidden and session token cleared.');
                }}
                className="px-3 py-1.5 bg-slate-700 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-sm transition cursor-pointer"
                title={ADMIN_TEXT.ipPrivacyNote[lang]}
              >
                <Lock className="w-3.5 h-3.5" />
                Hide IP
              </button>
            </div>

            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
              <input
                type="text"
                value={intakeSearchTerm}
                onChange={e => setIntakeSearchTerm(e.target.value)}
                placeholder="Search ticket ID / Citizen / District..."
                className="pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#0f2b48] bg-white w-64"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-end gap-2 rounded-xl border border-amber-200 bg-amber-50/70 p-3">
            <label className="flex min-w-[240px] flex-1 flex-col gap-1 text-[11px] font-semibold text-slate-700">
              <span className="flex items-center gap-1"><KeyRound className="h-3.5 w-3.5" />{ADMIN_TEXT.ipv4AccessLabel[lang]}</span>
              <input
                type="password"
                autoComplete="off"
                value={ipAdminToken}
                onChange={event => setIpAdminToken(event.target.value)}
                className="rounded-md border border-amber-300 bg-white px-2.5 py-2 font-mono text-xs"
                placeholder="Server-configured token"
              />
            </label>
            <button
              type="button"
              onClick={handleLoadIpv4}
              disabled={isLoadingIpv4 || intakes.length === 0}
              className="rounded-lg bg-amber-600 px-3 py-2 text-xs font-bold text-white hover:bg-amber-700 disabled:opacity-50"
            >
              {isLoadingIpv4 ? 'Loading…' : ADMIN_TEXT.loadIpv4[lang]}
            </button>
            <p className="w-full text-[10px] text-amber-950">{ADMIN_TEXT.ipPrivacyNote[lang]} {ipLookupMessage}</p>
          </div>

          {filteredIntakes.length === 0 ? (
            <div className="p-10 text-center text-slate-500 text-xs border border-dashed border-slate-200 rounded-xl">
              <p>{ADMIN_TEXT.noIntakesMsg[lang]}</p>
            </div>
          ) : (
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold">
                    <th className="p-3">{ADMIN_TEXT.thRefId[lang]}</th>
                    <th className="p-3">{ADMIN_TEXT.thCitizen[lang]}</th>
                    <th className="p-3">{ADMIN_TEXT.thPhone[lang]}</th>
                    <th className="p-3">{ADMIN_TEXT.thDistrict[lang]}</th>
                    <th className="p-3">{ADMIN_TEXT.thTopic[lang]}</th>
                    <th className="p-3">Counsel Track</th>
                    <th className="p-3">DPDP Consent</th>
                    <th className="p-3">{ADMIN_TEXT.thTime[lang]}</th>
                    <th className="p-3">{ADMIN_TEXT.thIpv4[lang]}</th>
                    <th className="p-3 text-right">{ADMIN_TEXT.thAction[lang]}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredIntakes.map(item => (
                    <tr key={item.id} className="hover:bg-slate-50/80 transition">
                      <td className="p-3 font-mono font-bold text-emerald-800">{item.id}</td>
                      <td className="p-3 font-medium text-slate-900">{item.citizenName}</td>
                      <td className="p-3 font-mono text-slate-700">{item.phone}</td>
                      <td className="p-3 text-slate-600">{item.district}</td>
                      <td className="p-3 text-slate-800 max-w-xs truncate" title={item.subcategoryTitle}>
                        {item.subcategoryTitle}
                      </td>
                      <td className="p-3">
                        {item.preferredAidType === 'ADVOCATE' ? (
                          <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold text-[10px]">
                            Track B (Advocate)
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                            Track A (DLSA)
                          </span>
                        )}
                      </td>
                      <td className="p-3">
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700">
                          <Check className="w-3 h-3 text-emerald-600" /> Granted
                        </span>
                      </td>
                      <td className="p-3 text-slate-400 text-[11px] whitespace-nowrap">{item.timestamp}</td>
                      <td className="p-3 font-mono text-[11px] text-slate-700 whitespace-nowrap">
                        {intakeIpv4[item.id]
                          ? (intakeIpv4[item.id].ipv4 || 'Unavailable')
                          : 'No IP record'}
                      </td>
                      <td className="p-3 text-right">
                        <button
                          type="button"
                          onClick={() => setDeleteTarget(item)}
                          className="px-2.5 py-1 rounded-md text-[11px] font-bold inline-flex items-center gap-1 bg-red-50 text-red-700 hover:bg-red-100 border border-red-200 transition cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5 text-red-600" />
                          <span>{ADMIN_TEXT.deleteBtn[lang]}</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: ADVISORS DIRECTORY */}
      {tab === 'advisors' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600">
              {ADMIN_TEXT.tabAdvisors[lang]}
            </h3>
            <button
              onClick={() => setShowAddModal(true)}
              className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 shadow-sm transition cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              {ADMIN_TEXT.addAdvisorBtn[lang]}
            </button>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold">
                  <th className="p-3">{ADMIN_TEXT.thName[lang]}</th>
                  <th className="p-3">{ADMIN_TEXT.thType[lang]}</th>
                  <th className="p-3">{ADMIN_TEXT.thCourtDistrict[lang]}</th>
                  <th className="p-3">{ADMIN_TEXT.thContact[lang]}</th>
                  <th className="p-3">{ADMIN_TEXT.thFreeAid[lang]}</th>
                  <th className="p-3 text-right">{ADMIN_TEXT.thStatus[lang]}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {advisors.map(adv => (
                  <tr key={adv.id} className="hover:bg-slate-50/80 transition">
                    <td className="p-3">
                      <div className="font-semibold text-slate-900">{adv.name}</div>
                      {adv.barRegistrationNo && (
                        <div className="text-[10.5px] font-mono font-bold text-slate-800 flex items-center gap-1.5 mt-1 bg-slate-100/90 px-2 py-0.5 rounded border border-slate-200 w-fit">
                          <Award className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>Bar Reg: <strong className="font-extrabold text-blue-950">{adv.barRegistrationNo}</strong></span>
                        </div>
                      )}
                    </td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded bg-slate-100 font-medium text-slate-700">
                        {adv.type}
                      </span>
                    </td>
                    <td className="p-3 text-slate-600">{adv.court} ({adv.district})</td>
                    <td className="p-3 text-slate-700 font-mono">{adv.phone}</td>
                    <td className="p-3">
                      {adv.isFreeAid ? (
                        <span className="text-emerald-700 font-bold">{ADMIN_TEXT.yesDLSA[lang]}</span>
                      ) : (
                        <span className="text-blue-700 font-medium">{ADMIN_TEXT.noPrivate[lang]}</span>
                      )}
                    </td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => handleToggle(adv.id)}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-bold inline-flex items-center gap-1 transition cursor-pointer ${
                          adv.isActive
                            ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                            : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                        }`}
                      >
                        <Power className="w-3 pupil" />
                        {adv.isActive ? ADMIN_TEXT.active[lang] : ADMIN_TEXT.inactive[lang]}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Confirmation Modal: Delete Free Intake Record */}
      {deleteTarget && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-5 space-y-4 border border-slate-200 shadow-2xl">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 border border-red-200 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 text-sm">Confirm Record Deletion</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">This record will be permanently deleted from both this control room and Supabase Cloud.</p>
              </div>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-500">Ticket ID:</span>
                <span className="font-mono font-bold text-slate-800">{deleteTarget.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Citizen Name:</span>
                <span className="font-bold text-slate-800">{deleteTarget.citizenName}</span>
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <button
                type="button"
                disabled={isDeleting}
                onClick={() => setDeleteTarget(null)}
                className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isDeleting}
                onClick={handleConfirmDeleteIntake}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                {isDeleting ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Trash2 className="w-3.5 h-3.5" />}
                <span>Yes, Delete</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal: Delete Pro Transaction Record */}
      {deleteProTarget && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-5 space-y-4 border border-slate-200 shadow-2xl">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 border border-red-200 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 text-sm">Delete Pro Transaction Record?</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  This transaction ticket will be permanently deleted from both this control room and the Supabase Cloud database.
                </p>
              </div>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-500">Reference ID:</span>
                <span className="font-mono font-bold text-amber-950">{deleteProTarget.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Citizen:</span>
                <span className="font-bold text-slate-800">{deleteProTarget.citizenName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Razorpay ID:</span>
                <span className="font-mono font-bold text-emerald-800">{deleteProTarget.utrNumber}</span>
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <button
                type="button"
                disabled={isDeletingPro}
                onClick={() => setDeleteProTarget(null)}
                className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isDeletingPro}
                onClick={handleConfirmDeletePro}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                {isDeletingPro ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Trash2 className="w-3.5 h-3.5" />}
                <span>Yes, Delete</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Add Advisor */}
      {showAddModal && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-5 space-y-4 border border-slate-200 shadow-xl">
            <h3 className="font-bold text-slate-900 text-sm">Add New Panel Advisor (BCI Rule 36)</h3>
            <form onSubmit={handleAddSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Full Name *</label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="e.g. Adv. Amitava Ghosh"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Bar Council Registration No</label>
                <input
                  type="text"
                  value={barRegistrationNo}
                  onChange={e => setBarRegistrationNo(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg font-mono"
                  placeholder="e.g. WB/1234/2015"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Type</label>
                  <select
                    value={type}
                    onChange={e => setType(e.target.value as any)}
                    className="w-full px-3 py-2 border rounded-lg bg-white"
                  >
                    <option value="Advocate">Advocate (Track B)</option>
                    <option value="DLSA">DLSA (Track A)</option>
                    <option value="LegalAidClinic">Legal Aid Clinic</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">District</label>
                  <select
                    value={district}
                    onChange={e => setDistrict(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg bg-white"
                  >
                    {WEST_BENGAL_DISTRICTS.map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Court Name</label>
                <input
                  type="text"
                  value={court}
                  onChange={e => setCourt(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="e.g. City Civil Court / Alipore District Court"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Phone Number *</label>
                <input
                  required
                  type="text"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg font-mono"
                  placeholder="+91 98000 00000"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-3 py-2 bg-slate-100 text-slate-700 rounded-lg font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-700 text-white rounded-lg font-semibold hover:bg-emerald-800 cursor-pointer"
                >
                  Save Advisor
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Cloud Database Sync Link */}
      {showCloudModal && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-5 space-y-4 border border-slate-200 shadow-xl">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Database className="w-4 h-4 text-blue-600" />
                Centralized Cloud Database Sync Settings
              </h3>
              <button
                onClick={() => setShowCloudModal(false)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Your application is actively synchronized with <strong>Supabase Cloud PostgreSQL</strong> (Project ID: <code>mwborzyxcgykrjuyqfel</code>) handling both free legal aid intakes and ₹99 Pro transactions. You can also configure an optional backup webhook endpoint below.
            </p>

            <form onSubmit={e => {
              e.preventDefault();
              setCloudSyncUrl(cloudUrlInput);
              setSaveMessage(true);
              setTimeout(() => {
                setSaveMessage(false);
                setShowCloudModal(false);
                handleSyncAll();
              }, 1200);
            }} className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Optional Webhook URL:</label>
                <div className="relative">
                  <Link className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="url"
                    value={cloudUrlInput}
                    onChange={e => setCloudUrlInput(e.target.value)}
                    placeholder="https://script.google.com/macros/s/.../exec"
                    className="w-full pl-9 pr-3 py-2 border rounded-lg font-mono text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>
              </div>

              {saveMessage && (
                <div className="p-2.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs font-semibold flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  Settings saved and synchronized successfully!
                </div>
              )}

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowCloudModal(false)}
                  className="px-3 py-2 bg-slate-100 text-slate-700 rounded-lg font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 cursor-pointer"
                >
                  Save Configuration
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
