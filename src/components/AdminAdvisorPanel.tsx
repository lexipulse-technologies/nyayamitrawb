import React, { useState, useEffect } from 'react';
import {
  Users,
  Plus,
  ShieldCheck,
  Power,
  Search,
  Download,
  RefreshCw,
  Database,
  Link,
  Award,
  Trash2,
  AlertTriangle,
  Loader2,
  Clock,
  Globe,
  Zap,
  CreditCard,
  Check,
  Scale
} from 'lucide-react';
import type { Advisor, ProTransactionRecord, Language } from '../types/legal';
import {
  WEST_BENGAL_DISTRICTS,
  getAdvisors,
  toggleAdvisorStatus,
  addAdvisor,
  getCloudSyncUrl,
  setCloudSyncUrl,
  getProTransactions,
  syncProTransactionsFromCloud,
  deleteProTransaction,
  exportProTransactionsToCSV
} from '../utils/triageEngine';
import { getLastAdminLogin, type AdminLoginRecord } from '../utils/authUtils';

const ADMIN_TEXT = {
  title: { bn: 'অ্যাডমিন কন্ট্রোল রুম (CMO West Bengal Inspired)', hi: 'प्रशासनिक कंट्रोल रूम', en: 'NyayaMitra Administrative Panel' },
  subtitle: { bn: 'প্যানেল আইনজীবী তালিকা ও প্রো ট্রানজ্যাকশন পর্যবেক্ষণ', hi: 'अधिवक्ता प्रबंधन एवं प्रो ट्रांजैक्शन निगरानी', en: 'Manage the advisor directory and monitor verified Pro transactions' },
  tabAdvisors: { bn: 'প্যানেল আইনজীবী ডিরেক্টরি', hi: 'अधिवक्ता डायरेक्टरी', en: 'Advisors Directory' },
  tabAdvocateFees: { bn: 'অ্যাডভোকেট কানেক্ট ফি (₹৪৯৯)', hi: 'एडवोकेट कनेक्ट शुल्क (₹499)', en: 'Advocate Connect Fees (₹499)' },
  tabPro: { bn: 'প্রো ট্রানজ্যাকশন (₹৯৯)', hi: 'प्रो ट्रांजैक्शन (₹99)', en: 'Pro Transactions (₹99)' },
  addAdvisorBtn: { bn: 'নতুন আইনজীবী যুক্ত করুন', hi: 'नए अधिवक्ता जोड़ें', en: 'Add New Panel Advisor' },
  syncCloudBtn: { bn: 'ক্লাউড থেকে রিফ্রেশ করুন', hi: 'ক্লাউড সে রিফ্রেশ करें', en: 'Sync Cloud Data' },
  exportCsvBtn: { bn: 'এক্সেল/CSV ডাউনলোড', hi: 'एक्सेल/CSV डाउनलोड', en: 'Export to CSV' },
  cloudSettingsBtn: { bn: 'ক্লাউড ডাটাবেস লিংক', hi: 'क्लाउड डेटाबेस लिंक', en: 'Cloud DB Settings' },
  
  lastLoginHeading: { bn: 'লাস্ট অ্যাডমিন লগইন টাইমস্ট্যাম্প:', hi: 'अंतिम एडमिन लॉगिन समय:', en: 'Last Admin Login Time Stamp:' },
  lastIpHeading: { bn: 'লাস্ট লগইন আইপি (IPv4):', hi: 'अंतिम लॉगिन आईपी (IPv4):', en: 'IP last login:' },
  securityAuditLabel: { bn: 'নিরাপত্তা পর্যবেক্ষণ সক্রিয় (Anti-Tamper)', hi: 'सुरक्षा निगरानी सक्रिय (Anti-Tamper)', en: 'Security Audit Active (Anti-Tamper)' },

  thTime: { bn: 'Submission Time', hi: 'Submission Time', en: 'Submission Time' },
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

  noProMsg: {
    bn: 'এখনও পর্যন্ত কোনো ₹৯৯ প্রো ট্রানজ্যাকশন জমা পড়েনি। ক্লাউড ডাটাবেস থেকে রিফ্রেশ করতে উপরের বাটনে চাপুন।',
    hi: 'अभी तक कोई ₹99 प्रो ट्रांजैक्शन दर्ज नहीं हुआ है।',
    en: 'No ₹99 Pro transactions recorded yet. Click "Sync Cloud Data" above to fetch records from Supabase.'
  }
};

export const AdminAdvisorPanel: React.FC<{ lang?: Language }> = ({ lang = 'bn' }) => {
  const [tab, setTab] = useState<'pro' | 'advisors' | 'advocate'>('pro');
  const [advisors, setAdvisors] = useState<Advisor[]>([]);
  const [proTransactions, setProTransactions] = useState<ProTransactionRecord[]>([]);
  const [advocateFees, setAdvocateFees] = useState<any[]>([]);
  const [isLoadingAdvocate, setIsLoadingAdvocate] = useState(false);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showCloudModal, setShowCloudModal] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

  const [proSearchTerm, setProSearchTerm] = useState('');
  const [cloudUrlInput, setCloudUrlInput] = useState('');
  const [saveMessage, setSaveMessage] = useState(false);

  const [auditRecord, setAuditRecord] = useState<AdminLoginRecord | null>(null);

  const [deleteProTarget, setDeleteProTarget] = useState<ProTransactionRecord | null>(null);
  const [isDeletingPro, setIsDeletingPro] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  // Add Advisor Form State
  const [name, setName] = useState('');
  const [barRegistrationNo, setBarRegistrationNo] = useState('');
  const [type, setType] = useState<'Advocate' | 'DLSA' | 'LegalAidClinic'>('Advocate');
  const [district, setDistrict] = useState(WEST_BENGAL_DISTRICTS[11]);
  const [court, setCourt] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isFreeAid, setIsFreeAid] = useState(false);

  // Server-side session verification on mount
  useEffect(() => {
    const verifySession = async () => {
      try {
        const res = await fetch('/api/admin/verify', {
          credentials: 'include',
          cache: 'no-store'
        });
        const data = await res.json();
        if (data.authenticated) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch {
        setIsAuthenticated(false);
      }
    };
    verifySession();
  }, []);

const loadData = async () => {
    setAdvisors(getAdvisors());
    setProTransactions(getProTransactions());
    setCloudUrlInput(getCloudSyncUrl());

    try {
      const audit = await getLastAdminLogin();
      setAuditRecord(audit);
    } catch {}

    // Fetch advocate connect fees
    try {
      setIsLoadingAdvocate(true);
      const res = await fetch('/api/notify', {
        credentials: 'include',
        cache: 'no-store'
      });
      const data = await res.json();
      if (data.success && data.data) {
        setAdvocateFees(data.data);
      }
    } catch {}
    finally {
      setIsLoadingAdvocate(false);
    }

    handleSyncAll();
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSyncAll = async () => {
    setIsSyncing(true);
    try {
      const syncedPro = await syncProTransactionsFromCloud('Abi786', 'Baabuujii@5623');
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

  const filteredProTransactions = proTransactions.filter(item =>
    item.id.toLowerCase().includes(proSearchTerm.toLowerCase()) ||
    item.citizenName.toLowerCase().includes(proSearchTerm.toLowerCase()) ||
    item.district.toLowerCase().includes(proSearchTerm.toLowerCase()) ||
    item.utrNumber.toLowerCase().includes(proSearchTerm.toLowerCase()) ||
    item.disputeTopic.toLowerCase().includes(proSearchTerm.toLowerCase())
  );

  const totalProRevenue = proTransactions.length * 99;

  if (isAuthenticated === null) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center">
        <Loader2 className="w-8 h-8 animate-spin text-amber-500 mx-auto mb-4" />
        <p className="text-slate-500 text-sm">Verifying admin session...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center">
        <Lock className="w-12 h-12 text-slate-300 mx-auto mb-4" />
        <h3 className="font-bold text-slate-900 mb-2">Admin Access Required</h3>
        <p className="text-slate-500 text-sm mb-6">
          Please log in to access the Administrative Control Room.
        </p>
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('open-admin-login'))}
          className="px-6 py-2.5 bg-[#0f2b48] hover:bg-[#1a3d60] text-white rounded-lg font-semibold shadow-sm transition cursor-pointer"
        >
          Open Login
        </button>
      </div>
    );
  }

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

{/* Pro transactions and advisor directory */}
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
              onClick={() => setTab('advocate')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
                tab === 'advocate'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-sm'
                  : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              <span>{ADMIN_TEXT.tabAdvocateFees[lang]} ({advocateFees.length})</span>
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

      {/* Pro transactions */}
      {tab === 'pro' && (
        <div className="space-y-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                    <th className="p-3">Name</th>
                    <th className="p-3">Phone</th>
                    <th className="p-3">District</th>
                    <th className="p-3">Topic</th>
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

      {/* Advocate Connect Fees (₹499) */}
      {tab === 'advocate' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-xl space-y-1">
              <span className="text-[10.5px] font-bold text-amber-900 uppercase tracking-wider">
                Total Advocate Connect Orders
              </span>
              <div className="text-xl font-mono font-black text-amber-950">
                {advocateFees.length}
              </div>
            </div>

            <div className="p-3.5 bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 rounded-xl space-y-1">
              <span className="text-[10.5px] font-bold text-emerald-900 uppercase tracking-wider">
                Total Revenue (₹499 each)
              </span>
              <div className="text-xl font-mono font-black text-emerald-950">
                ₹{(advocateFees.length * 499).toLocaleString('en-IN')}.00 INR
              </div>
            </div>

            <div className="p-3.5 bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl space-y-1">
              <span className="text-[10.5px] font-bold text-blue-900 uppercase tracking-wider">
                Pending Advocate Contact
              </span>
              <div className="text-xl font-mono font-black text-blue-950">
                {advocateFees.filter(f => !f.notified_advocate).length}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
            <button
              onClick={() => {
                setIsLoadingAdvocate(true);
                fetch('/api/notify', { credentials: 'include', cache: 'no-store' })
                  .then(r => r.json())
                  .then(d => { if (d.success && d.data) setAdvocateFees(d.data); })
                  .finally(() => setIsLoadingAdvocate(false));
              }}
              disabled={isLoadingAdvocate}
              className="px-3 py-1.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm transition disabled:bg-slate-400 cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoadingAdvocate ? 'animate-spin' : ''}`} />
              <span>Refresh from Cloud</span>
            </button>

            <button
              onClick={() => {
                const csv = [
                  ['Citizen Name', 'Mobile', 'Email', 'Workflow', 'Comment', 'Payment ID', 'Order ID', 'Amount (₹)', 'Status', 'Notified Advocate', 'Created At'],
                  ...advocateFees.map(f => [
                    f.citizen_name,
                    f.citizen_mobile,
                    f.citizen_email,
                    f.workflow_title || '',
                    f.citizen_comment || '',
                    f.razorpay_payment_id,
                    f.razorpay_order_id || '',
                    f.amount,
                    f.status,
                    f.notified_advocate ? 'Yes' : 'No',
                    f.created_at
                  ])
                ].map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');
                const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = `advocate-connect-fees-${new Date().toISOString().slice(0,10)}.csv`;
                link.click();
              }}
              className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm transition cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
          </div>

          {advocateFees.length === 0 ? (
            <div className="p-10 text-center text-slate-500 text-xs border border-dashed border-slate-200 rounded-xl">
              <p>No ₹499 Advocate Connect payments recorded yet. Click "Refresh from Cloud" to fetch records from Supabase.</p>
            </div>
          ) : (
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold">
                    <th className="p-3">Citizen Name</th>
                    <th className="p-3">Mobile</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Workflow</th>
                    <th className="p-3">Comment</th>
                    <th className="p-3">Razorpay Payment ID</th>
                    <th className="p-3">Amount (₹)</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Notified</th>
                    <th className="p-3">Created At</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {advocateFees.map(item => (
                    <tr key={item.razorpay_payment_id} className="hover:bg-amber-50/40 transition">
                      <td className="p-3 font-bold text-slate-900">{item.citizen_name}</td>
                      <td className="p-3 font-mono text-slate-700">{item.citizen_mobile}</td>
                      <td className="p-3 text-slate-600">{item.citizen_email}</td>
                      <td className="p-3 text-slate-800 max-w-xs truncate" title={item.workflow_title || ''}>
                        {item.workflow_title || '—'}
                      </td>
                      <td className="p-3 text-slate-600 max-w-xs truncate" title={item.citizen_comment || ''}>
                        {item.citizen_comment || '—'}
                      </td>
                      <td className="p-3 font-mono font-bold text-emerald-800">
                        <span className="bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-[11px]">
                          {item.razorpay_payment_id}
                        </span>
                      </td>
                      <td className="p-3 font-bold text-amber-950">₹{item.amount}</td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded text-[10.5px] font-bold ${
                          item.status === 'paid_pending_advocate_contact'
                            ? 'bg-amber-50 text-amber-900 border border-amber-200'
                            : 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                        }`}>
                          {item.status.replace(/_/g, ' ')}
                        </span>
                      </td>
                      <td className="p-3 text-center">
                        <span className={`px-2 py-0.5 rounded text-[10.5px] font-bold ${
                          item.notified_advocate
                            ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                            : 'bg-red-50 text-red-900 border border-red-200'
                        }`}>
                          {item.notified_advocate ? 'Yes' : 'No'}
                        </span>
                      </td>
                      <td className="p-3 text-slate-500 text-[11px] whitespace-nowrap">
                        {item.created_at}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Advisors directory */}
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
                        <span className="text-emerald-700 font-bold">Yes</span>
                      ) : (
                        <span className="text-blue-700 font-medium">No</span>
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
                    <option value="Advocate">Advocate</option>
                    <option value="DLSA">DLSA</option>
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
      Your application is actively synchronized with <strong>Supabase Cloud PostgreSQL</strong> (Project ID: <code>mwborzyxcgykrjuyqfel</code>) for ₹99 Pro transactions. You can also configure an optional backup webhook endpoint below.
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
