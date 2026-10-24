import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  FileText,
  Lock,
  RefreshCw,
  Mail,
  Scale,
  Building,
  CheckCircle2,
  AlertCircle,
  CreditCard,
  PackageCheck
} from 'lucide-react';
import type { Language } from '../types/legal';

export type PolicyTab = 'terms' | 'privacy' | 'refund' | 'contact' | 'pricing';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: PolicyTab;
  lang: Language;
}

const POLICY_TEXT = {
  modalHeader: {
    en: 'NyayaMitra Statutory Compliance & Legal Governance',
    bn: 'ন্যায়মিত্র বিধিবদ্ধ নীতি ও আইনি পরিচালনা বিধি',
    hi: 'न्यायमित्र वैधानिक अनुपालन एवं कानूनी नीति'
  },
  modalSub: {
    en: 'Managed by LEXIPULSE TECHNOLOGIES • Advocates Act, DPDP Act & Razorpay Merchant Compliant',
    bn: 'লেক্সিপালস টেকনোলজিস দ্বারা পরিচালিত • অ্যাডভোকেটস অ্যাক্ট, ডিপিডিপি আইন ও রেজরপে মার্চেন্ট সম্মত',
    hi: 'लेक्सीपल्स टेक्नोलॉजीज द्वारा प्रबंधित • अधिवक्ता अधिनियम, DPDP कानून एवं रेज़रपे मर्चेंट सम्मत'
  },
  tabs: {
    terms: { en: 'Terms of Service', bn: 'ব্যবহারের শর্তাবলী', hi: 'सेवा की शर्तें' },
    privacy: { en: 'Privacy Policy', bn: 'গোপনীয়তা নীতি', hi: 'गोपनीयता नीति' },
    refund: { en: 'Refund Policy', bn: 'রিফান্ড নীতি', hi: 'रिफंड नीति' },
    pricing: { en: 'Pricing & Delivery', bn: 'মূল্যতালিকা ও ডেলিভারি', hi: 'मूल्य एवं डिलीवरी' },
    contact: { en: 'Contact & Grievance', bn: 'যোগাযোগ ও অভিযোগ', hi: 'संपर्क एवं शिकायत' }
  }
};

export const LegalPolicyModal: React.FC<Props> = ({
  isOpen,
  onClose,
  initialTab = 'terms',
  lang
}) => {
  const [activeTab, setActiveTab] = useState<PolicyTab>(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[90vh]">
        
        {/* HEADER */}
        <div className="bg-[#0f2b48] text-white p-4 sm:p-5 flex items-center justify-between border-b border-[#1b3e63] shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="font-extrabold text-sm sm:text-base truncate">
                {POLICY_TEXT.modalHeader[lang]}
              </h3>
              <p className="text-[11px] text-slate-300 truncate mt-0.5">
                {POLICY_TEXT.modalSub[lang]}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition cursor-pointer"
            title="Close Compliance Dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* TAB NAVIGATION PILLS */}
        <div className="bg-slate-100 p-2 border-b border-slate-200 flex flex-wrap gap-1.5 shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('terms')}
            className={`px-3 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1.5 transition cursor-pointer ${
              activeTab === 'terms'
                ? 'bg-[#0f2b48] text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{POLICY_TEXT.tabs.terms[lang]}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('privacy')}
            className={`px-3 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1.5 transition cursor-pointer ${
              activeTab === 'privacy'
                ? 'bg-[#0f2b48] text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>{POLICY_TEXT.tabs.privacy[lang]}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('refund')}
            className={`px-3 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1.5 transition cursor-pointer ${
              activeTab === 'refund'
                ? 'bg-[#0f2b48] text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-200'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{POLICY_TEXT.tabs.refund[lang]}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('pricing')}
            className={`px-3 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1.5 transition cursor-pointer ${
              activeTab === 'pricing'
                ? 'bg-[#0f2b48] text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-200'
            }`}
          >
            <CreditCard className="w-3.5 h-3.5" />
            <span>{POLICY_TEXT.tabs.pricing[lang]}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('contact')}
            className={`px-3 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1.5 transition cursor-pointer ${
              activeTab === 'contact'
                ? 'bg-[#0f2b48] text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{POLICY_TEXT.tabs.contact[lang]}</span>
          </button>
        </div>

        {/* POLICY CONTENT BODY */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4 text-xs text-slate-700 leading-relaxed">
          
          {/* TAB 1: TERMS AND CONDITIONS */}
          {activeTab === 'terms' && (
            <div className="space-y-3.5">
              <div className="border-b pb-2">
                <h4 className="font-extrabold text-sm text-slate-900">
                  Terms of Service &amp; Legal Safe-Harbor Declarations
                </h4>
                <p className="text-[11px] text-slate-500">
                  Operated by LEXIPULSE TECHNOLOGIES • Governing Territory: West Bengal, India
                </p>
              </div>

              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl space-y-1">
                <span className="font-bold text-amber-950 flex items-center gap-1.5 text-[11px]">
                  <Scale className="w-3.5 h-3.5 text-amber-700" />
                  Statutory Non-Lawyer &amp; Advocates Act 1961 Disclaimer (Sections 29 &amp; 33)
                </span>
                <p className="text-[10.5px] text-amber-900 leading-relaxed">
                  NyayaMitra (https://nyayamitrawb.in) is an open-access legal literacy and self-service technological software utility designed, deployed, and administered by <strong>LEXIPULSE TECHNOLOGIES</strong>. NyayaMitra is not a law firm, does not engage in the practice of law, and does not provide legal representation. Use of this platform does not create an advocate-client relationship.
                </p>
              </div>

              <div className="space-y-2">
                <h5 className="font-bold text-slate-900 text-xs">1. Self-Service Technological Drafting Utility</h5>
                <p>
                  The "NyayaMitra Pro" document drafter generates standardized legal templates based solely on the facts input directly by the citizen. Under Indian law, any citizen has the constitutional and statutory right to act in person (<em>pro se</em>) to issue demand notices, file RTI applications, or address administrative grievances. All documents generated are self-compiled drafts. Citizens seeking formal representation before courts of law must consult a licensed advocate or the District Legal Services Authority (DLSA).
                </p>

                <h5 className="font-bold text-slate-900 text-xs">2. Bar Council of India (BCI) Rule 36 Compliance</h5>
                <p>
                  In strict compliance with Chapter II, Section IV, Rule 36 of the Bar Council of India Rules, LEXIPULSE TECHNOLOGIES accepts 0% referral commissions, referral fees, or brokerage. Details of empanelled advocates and legal aid clinics are provided as a free public service directory upon voluntary citizen request.
                </p>

                <h5 className="font-bold text-slate-900 text-xs">3. Accuracy of Procedural Workflows</h5>
                <p>
                  While LEXIPULSE TECHNOLOGIES makes every reasonable effort to ensure procedural steps, government portal links, and court hierarchies reflect current laws (including the Bharatiya Nagarik Suraksha Sanhita 2023, West Bengal Premises Tenancy Act 1997, and West Bengal Land Reforms Act 1955), administrative rules and filing fees are subject to government gazette revisions. Users are advised to verify timeframes with court registries.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <div className="space-y-3.5">
              <div className="border-b pb-2">
                <h4 className="font-extrabold text-sm text-slate-900">
                  Privacy Policy &amp; DPDP Act, 2023 Governance
                </h4>
                <p className="text-[11px] text-slate-500">
                  Compliant with the Digital Personal Data Protection Act, 2023 (DPDP) &amp; IT Rules, 2021
                </p>
              </div>

              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1">
                <span className="font-bold text-emerald-950 flex items-center gap-1.5 text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                  Zero-Server-Storage Privacy Guarantee (Client-Side Compilation)
                </span>
                <p className="text-[10.5px] text-emerald-900 leading-relaxed">
                  When you use the ₹99 Notice Drafter, your dispute particulars (party names, residential addresses, cheque numbers, and plot details) are processed <strong>100% inside your device's browser memory (RAM)</strong> via jsPDF. This data is <strong>never transmitted to, stored on, or harvested by LEXIPULSE TECHNOLOGIES backend servers</strong>.
                </p>
              </div>

              <div className="space-y-2">
                <h5 className="font-bold text-slate-900 text-xs">1. Section 6 Affirmative Consent</h5>
                <p>
                  For free citizen triage referrals, data is processed solely after the citizen explicitly grants consent via the mandatory DPDP consent gate. This information is encrypted in transit using SSL/TLS 1.3 encryption and stored in an immutable, append-only PostgreSQL database protected by Supabase Row-Level Security (RLS).
                </p>

                <h5 className="font-bold text-slate-900 text-xs">2. Payment Data Security (Razorpay)</h5>
                <p>
                  All online payments are processed through Razorpay Software Private Limited, which is compliant with Payment Card Industry Data Security Standards (PCI-DSS Level 1). LEXIPULSE TECHNOLOGIES never stores or captures your credit card numbers, CVVs, or UPI MPINs.
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: REFUND & CANCELLATION POLICY */}
          {activeTab === 'refund' && (
            <div className="space-y-3.5">
              <div className="border-b pb-2">
                <h4 className="font-extrabold text-sm text-slate-900">
                  Refund &amp; Cancellation Policy (Razorpay Payment Gateway)
                </h4>
                <p className="text-[11px] text-slate-500">
                  Governed by the Consumer Protection Act, 2019 &amp; RBI Payment Aggregator Norms
                </p>
              </div>

              <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl space-y-1">
                <span className="font-bold text-blue-950 flex items-center gap-1.5 text-[11px]">
                  <RefreshCw className="w-3.5 h-3.5 text-blue-700" />
                  Instant Digital Resolution Guarantee (Razorpay Live Rail)
                </span>
                <p className="text-[10.5px] text-blue-900 leading-relaxed">
                  Payments of ₹99 are processed securely through Razorpay directly to the merchant account of <strong>LEXIPULSE TECHNOLOGIES</strong>.
                </p>
              </div>

              <div className="space-y-2">
                <h5 className="font-bold text-slate-900 text-xs">1. Digital Download Deliverable</h5>
                <p>
                  Because the ₹99 Notice Drafter delivers instant, downloadable digital software assets (Vector PDF and Word Document), transactions are considered completed once the cryptographic payment signature is verified and files are compiled.
                </p>

                <h5 className="font-bold text-slate-900 text-xs">2. Technical Failure &amp; Automated Refund Protocol</h5>
                <p>
                  If ₹99 is debited from your bank account or UPI app, but a network interruption, browser crash, or device power cut prevents the document from generating, you are protected by our automated resolution policy:
                </p>
                <ul className="list-disc pl-4 space-y-1 text-[11px] text-slate-600">
                  <li>
                    Email <strong>namaste@nyayamitrawb.in</strong> with your Razorpay Payment ID (e.g. <code>pay_XXXXXXXXXX</code>) or Reference Ticket ID.
                  </li>
                  <li>
                    Upon confirmation against our live Razorpay dashboard, our accounts desk will email your completed document package within 6 hours, or issue a full ₹99 automated refund through Razorpay to your originating payment method within 5–7 banking days.
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 4: PRICING & DIGITAL DELIVERY POLICY (RAZORPAY COMPLIANCE MANDATE) */}
          {activeTab === 'pricing' && (
            <div className="space-y-3.5">
              <div className="border-b pb-2">
                <h4 className="font-extrabold text-sm text-slate-900">
                  Pricing, Product Scope &amp; Instant Digital Delivery Policy
                </h4>
                <p className="text-[11px] text-slate-500">
                  Merchant Disclosure for Razorpay Standard Checkout • LEXIPULSE TECHNOLOGIES
                </p>
              </div>

              <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-emerald-950 text-xs">NyayaMitra Pro Statutory Notice Drafter</span>
                  <span className="font-mono font-black text-sm text-emerald-900 bg-emerald-100 px-2.5 py-0.5 rounded border border-emerald-300">
                    ₹99.00 INR (All Inclusive)
                  </span>
                </div>
                <p className="text-[11px] text-emerald-800 leading-relaxed">
                  Single flat fee per legal draft compiler session. Includes instant browser-side vector PDF generation, customizable Microsoft Word document (.doc), statutory safe-harbor compliance stamping, and India Post registered post delivery protocol instructions. Zero hidden gateway fees.
                </p>
              </div>

              <div className="space-y-2">
                <h5 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                  <PackageCheck className="w-3.5 h-3.5 text-blue-600" />
                  Digital Shipping &amp; Delivery Terms (Zero Shipping Days)
                </h5>
                <p>
                  <strong>Delivery Method:</strong> Instant client-side download. All software tools, vector PDF notices, and editable Word documents are compiled directly in browser RAM upon verification of the Razorpay payment token. Delivery occurs immediately with <strong>zero delivery delay (0 business days)</strong>.
                </p>
                <p>
                  <strong>Physical Goods Exclusion:</strong> NyayaMitra does not ship physical paper goods or stationery to residential addresses. Citizens print the downloaded vector PDF copies on their own printers or at local cyber kiosks for postal dispatch.
                </p>
                <p>
                  <strong>Transactional Receipt:</strong> An electronic confirmation receipt containing the Razorpay Payment ID, Reference ID, and transaction timestamp is generated on-screen and archived in the user's browser session.
                </p>
              </div>
            </div>
          )}

          {/* TAB 5: CONTACT & GRIEVANCE REDRESSAL */}
          {activeTab === 'contact' && (
            <div className="space-y-3.5">
              <div className="border-b pb-2">
                <h4 className="font-extrabold text-sm text-slate-900">
                  Administrative Contact &amp; Statutory Grievance Redressal
                </h4>
                <p className="text-[11px] text-slate-500">
                  Under Information Technology Rules, 2021 &amp; DPDP Act, 2023
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <span className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-emerald-600" />
                    Platform Administrator Details
                  </span>
                  <div className="text-[11px] space-y-0.5 text-slate-600">
                    <p><strong>Operating Entity:</strong> LEXIPULSE TECHNOLOGIES</p>
                    <p><strong>Platform:</strong> NyayaMitra (https://nyayamitrawb.in)</p>
                    <p><strong>Territorial Office:</strong> Kolkata, West Bengal, India</p>
                    <p><strong>Official Support Email:</strong> namaste@nyayamitrawb.in</p>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <span className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    Grievance Redressal Officer
                  </span>
                  <div className="text-[11px] space-y-0.5 text-slate-600">
                    <p><strong>Officer:</strong> Grievance Officer, LEXIPULSE TECHNOLOGIES</p>
                    <p><strong>Contact Email:</strong> namaste@nyayamitrawb.in</p>
                    <p><strong>Resolution Window:</strong> 48 to 72 Banking Hours</p>
                    <p><strong>Subject Line Tag:</strong> [Grievance - NyayaMitra Compliance]</p>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-xl text-[10.5px] text-amber-900 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p>
                  For free government statutory legal aid, citizens may also directly contact the National Legal Services Authority toll-free helpline at <strong>15100</strong> or visit their nearest District Legal Services Authority (DLSA) office located in all 23 district court complexes of West Bengal.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* MODAL FOOTER */}
        <div className="bg-slate-50 p-3.5 border-t border-slate-200 flex items-center justify-between shrink-0">
          <span className="text-[10px] text-slate-400 font-mono">
            LEXIPULSE TECHNOLOGIES &bull; Kolkata, WB &bull; Razorpay Live Active
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-[#0f2b48] hover:bg-[#1a3d60] text-white rounded-lg text-xs font-bold transition shadow-xs cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};