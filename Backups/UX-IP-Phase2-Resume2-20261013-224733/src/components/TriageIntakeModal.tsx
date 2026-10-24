import React, { useState } from 'react';
import {
  X,
  Send,
  CheckCircle2,
  Phone,
  Building2,
  AlertCircle,
  Printer,
  Loader2,
  Lock,
  Scale,
  ShieldCheck,
  Award
} from 'lucide-react';
import type { CivilSubCategory, Language, Advisor, CaseIntakeSubmission } from '../types/legal';
import { WEST_BENGAL_DISTRICTS, saveIntakeSubmission, findMatchingAdvisors } from '../utils/triageEngine';

const INTAKE_TEXT = {
  headerTitle: {
    bn: 'আইনি সহায়তা ও আইনজীবী রেফারেল সংযোগ',
    hi: 'विधिक सहायता एवं अधिवक्ता संपर्क',
    en: 'Legal Assistance & Counsel Referral'
  },
  aidTrackLabel: {
    bn: 'পরামর্শের ধরন নির্বাচন করুন (BCI Rule 36 Compliant Option) *',
    hi: 'परामर्श का प्रकार चुनें *',
    en: 'Choose Counsel Preference (BCI Rule 36 Option) *'
  },
  aidTrackDLSA: {
    bn: 'ট্র্যাক এ: সরকারি লিগ্যাল এইড (DLSA - সম্পূর্ণ বিনামূল্যে)',
    hi: 'ट्रैक ए: सरकारी कानूनी सहायता (DLSA - निःशुल्क)',
    en: 'Track A: Government Legal Aid (DLSA - Free)'
  },
  aidTrackAdvocate: {
    bn: 'ট্র্যাক বি: তালিকাভুক্ত বিজ্ঞ প্যানেল আইনজীবী (স্বাধীন প্র্যাকটিস)',
    hi: 'ट्रैक बी: सूचीबद्ध स्वतंत्र पैनल अधिवक्ता',
    en: 'Track B: Empanelled Independent Advocates'
  },
  bciNoticeBanner: {
    bn: 'বিসিআই রুল ৩৬ বিধিবদ্ধ সতর্কবার্তা: ন্যায়মিত্র কোনো ল’ফার্ম নয় এবং কোনো প্রকার ওকালতনামা বা রেফারেল কমিশন গ্রহণ করে না। নাগরিকদের নিজস্ব আগ্রহ ও অনুরোধে তালিকাভুক্ত আইনজীবীদের বার কাউন্সিল নিবন্ধন ও যোগাযোগের বিবরণ একটি গণ-ডিরেক্টরি হিসেবে প্রদর্শিত হচ্ছে।',
    hi: 'बार काउंसिल नियम 36 वैधानिक सूचना: न्यायमित्र कोई लॉ फर्म नहीं है और कोई रेफरल कमीशन नहीं लेता। नागरिक के स्वेच्छा अनुरोध पर अधिवक्ताओं का बार काउंसिल पंजीकरण व संपर्क विवरण जन-हित डायरेक्टरी के रूप में प्रस्तुत है।',
    en: 'BCI Rule 36 Statutory Notice: NyayaMitra is not a law firm and accepts 0% referral fees/commission. Advocate details and Bar Council registration numbers are displayed solely as a neutral public directory upon voluntary citizen request.'
  },
  nameLabel: { bn: 'নাগরিকের পূর্ণ নাম *', hi: 'नागरिक का पूरा नाम *', en: 'Citizen Full Name *' },
  namePlaceholder: { bn: 'যেমন: সুনীল মণ্ডল', hi: 'जैसे: सुनील मंडल', en: 'e.g. Sunil Mondal' },
  phoneLabel: { bn: 'মোবাইল / হোয়াটসঅ্যাপ নম্বর *', hi: 'मोबाइल नंबर *', en: 'Mobile / WhatsApp Number *' },
  districtLabel: { bn: 'পশ্চিমবঙ্গের জেলা *', hi: 'पश्चिम बंगाल का जिला *', en: 'District in West Bengal *' },
  summaryLabel: { bn: 'মামলা বা বিরোধের সংক্ষিপ্ত বিবরণ (ঐচ্ছিক)', hi: 'विवाद का संक्षिप्त विवरण (वैकल्पिक)', en: 'Dispute Brief Summary (Optional)' },
  summaryPlaceholder: {
    bn: 'জমির দাগ নম্বর, নোটিশের তারিখ বা সমস্যার বিবরণ লিখুন...',
    hi: 'दाग नंबर, नोटिस की तारीख या समस्या का विवरण लिखें...',
    en: 'Mention plot/dag number, notice date, or brief context...'
  },
  bplTitle: {
    bn: 'আমি বিনামূল্যে সরকারি আইনি সহায়তা (DLSA) পাওয়ার যোগ্য',
    hi: 'मैं मुफ्त सरकारी कानूनी सहायता (DLSA) का पात्र हूँ',
    en: 'I Qualify for Free DLSA Legal Aid (Income < ₹3 Lakhs)'
  },
  bplDesc: {
    bn: 'পশ্চিমবঙ্গ রাজ্য আইনি সেবা কর্তৃপক্ষের অধীনে পারিবারিক বাৎসরিক আয় ₹৩ লাখের নিচে অথবা মহিলা, তপশিলি ও বিপিএল কার্ডধারীদের সরকার বিনামূল্যে আইনজীবী দেয়।',
    hi: 'वार्षिक पारिवारिक आय ₹3 लाख से कम होने, बीपीএল, महिला या एससी/एसटी होने पर सरकार मुफ्त अधिवक्ता प्रदान करती है।',
    en: 'Under NALSA / WBLS Authority, families earning < ₹3 Lakhs/year, women, and BPL cardholders receive 100% free legal aid.'
  },
  dpdpConsentTitle: {
    bn: 'ডিজিটাল ব্যক্তিগত ডেটা সুরক্ষা আইন (DPDP Act, 2023) বাধ্যতামূলক সম্মতি *',
    hi: 'डिजिटल पर्सनल डेटा प्रोटेक्शन एक्ट (DPDP Act, 2023) अनिवार्य सहमति *',
    en: 'Mandatory DPDP Act, 2023 Data Processing Consent *'
  },
  dpdpConsentText: {
    bn: 'আমি স্বেচ্ছায় রেফারেল স্লিপ ও আইনজীবী যোগাযোগের জন্য তথ্য দিচ্ছি। নিরাপত্তা, অপব্যবহার প্রতিরোধ ও অডিটের জন্য সার্ভার যাচাইযোগ্য IPv4 দিলে তা অনির্দিষ্টকাল সংরক্ষণ, অনুমোদিত অ্যাডমিন প্যানেল/CSV এবং নির্ধারিত রেফারেল ইমেলে (namaste@nyayamitrawb.in ও খান্তানউইর আহমেদ খান) দেখানোর বিষয়ে সম্মতি দিচ্ছি। IPv4 ব্যক্তিগত তথ্য। IPv4 না পাওয়া গেলেও অনুরোধ জমা হবে।',
    hi: 'मैं रेफरल स्लिप और वकील संपर्क हेतु विवरण देता/देती हूँ। सुरक्षा, दुरुपयोग रोकथाम और ऑडिट के लिए सर्वर से सत्यापित IPv4 मिलने पर उसे अनिश्चितकाल तक रखना तथा अधिकृत एडमिन पैनल/CSV और निर्दिष्ट रेफरल ईमेल (namaste@nyayamitrawb.in और अधिवक्ता तनवीर अहमद खान) में दिखाना स्वीकार करता/करती हूँ। IPv4 व्यक्तिगत डेटा है। IPv4 उपलब्ध न होने पर भी अनुरोध जमा होगा।',
    en: 'I voluntarily provide details to generate a referral slip and facilitate counsel contact. I consent to collection of a verifiable IPv4 when available from the server, indefinite retention for security, abuse prevention and audit, and disclosure in the authorized admin panel/CSV and designated referral emails (namaste@nyayamitrawb.in and Advocate Tanweer Ahmed Khan). IPv4 is personal data. My referral may still be submitted when a verifiable IPv4 is unavailable.'
  },
  consentRequiredMsg: {
    bn: 'অনুগ্রহ করে ফর্ম জমা দেওয়ার পূর্বে ডেটা সুরক্ষার সম্মতি বাক্সে টিক দিন।',
    hi: 'कृपया फॉर्म जमा करने से पूर्व डेटा सुरक्षा सहमति बॉक्स पर टिक करें।',
    en: 'Please check the mandatory DPDP consent box to proceed.'
  },
  submitBtn: { bn: 'রেফারেন্স স্লিপ তৈরি করুন ও আইনজীবী তালিকা দেখুন', hi: 'रेफरल टोकन बनाएं और संपर्क देखें', en: 'Generate Referral Slip & View Counsel' },
  submitting: { bn: 'নিরাপদে জমা হচ্ছে...', hi: 'सुरक्षित रूप से जमा हो रहा है...', en: 'Submitting securely...' },
  submitErrorFallback: { bn: 'রেফারেল জমা দেওয়া যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।', hi: 'रेफरल जमा नहीं हुआ। कृपया फिर प्रयास करें।', en: 'Unable to submit the referral. Please try again.' },
  successTitle: { bn: 'রেফারেল স্লিপ সফলভাবে তৈরি হয়েছে!', hi: 'रेफरल टोकन सफलतापूर्वक तैयार हुआ!', en: 'Referral Ticket Generated Successfully!' },
  refCodeLabel: { bn: 'রেফারেন্স আইডি:', hi: 'রেফারল আইডি:', en: 'Reference ID:' },
  cloudSavedBadge: { bn: 'Supabase ক্লাউড ডাটাবেসে সুরক্ষিতভাবে সংরক্ষিত', hi: 'Supabase क्लाउड डेटाबेस में सुरक्षित', en: 'Stored Securely in Supabase Cloud' },
  ipv4Status: { bn: 'আপনার IPv4 নিরাপত্তা অডিটে রেকর্ড হয়েছে; ঠিকানাটি রেফারেল স্লিপে দেখানো হয় না।', hi: 'आपका IPv4 सुरक्षा ऑडिट हेतु दर्ज है; पता रेफरल स्लिप में नहीं दिखाया जाता।', en: 'Your IPv4 status was recorded for the security audit; the address is not shown on this referral slip.' },
  ipv4UnavailableStatus: { bn: 'এই সংযোগে যাচাইযোগ্য IPv4 পাওয়া যায়নি; রেফারেল জমা হয়েছে।', hi: 'इस कनेक्शन पर सत्यापित IPv4 उपलब्ध नहीं था; रेफरल जमा हो गया।', en: 'No verifiable IPv4 was available on this connection; your referral was still submitted.' },
  ipv4MockStatus: { bn: 'ডেভ টেস্ট: নমুনা IPv4 ব্যবহৃত হয়েছে, বাস্তব IP নয়।', hi: 'डेव टेस्ट: नमूना IPv4 उपयोग हुआ, वास्तविक IP नहीं।', en: 'Development test: a sample IPv4 was used; it is not your real IP.' },
  trackADLSALabel: { bn: 'সুপারিশকৃত সরকারি লিগ্যাল এইড সেল (DLSA):', hi: 'अनुशंसित सरकारी कानूनी सहायता सेल:', en: 'Recommended Government DLSA Legal Aid Cell:' },
  trackBAdvLabel: { bn: 'তালিকাভুক্ত বিজ্ঞ প্যানেল আইনজীবী (Track B):', hi: 'सूचीबद्ध स्वतंत्र पैनल अधिवक्ता (Track B):', en: 'Empanelled Independent Panel Advocates (Track B):' },
  helplineNotice: {
    bn: 'সরাসরি পরামর্শের জন্য রেফারেন্স স্লিপ নিয়ে সংশ্লিষ্ট সেল বা বিজ্ঞ আইনজীবীর চেম্বারে যোগাযোগ করুন। সরকারি আইনি সহায়তার টোল-ফ্রি হেল্পলাইন: ১৫১০০।',
    hi: 'प्रत्यक्ष परामर्श हेतु इस टोकन के साथ संबंधित कार्यालय अथवा अधिवक्ता से संपर्क करें। राष्ट्रीय विधिक हेल्पलाइन: 15100।',
    en: 'Carry this reference slip to your counsel consultation. National DLSA Free Legal Helpline: 15100.'
  },
  printBtn: { bn: 'রেফারেল স্লিপ প্রিন্ট করুন', hi: 'रेफरल प्रिंट करें', en: 'Print Referral Slip' },
  closeBtn: { bn: 'বন্ধ করুন', hi: 'बंद करें', en: 'Close' }
};

interface Props {
  subcategory: CivilSubCategory;
  lang: Language;
  onClose: () => void;
}

export const TriageIntakeModal: React.FC<Props> = ({ subcategory, lang, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState(WEST_BENGAL_DISTRICTS[11]); // Default: Kolkata
  const [briefSummary, setBriefSummary] = useState('');
  const [isBPL, setIsBPL] = useState(false);
  const [preferredAidType, setPreferredAidType] = useState<'DLSA' | 'ADVOCATE'>('ADVOCATE'); // Default Track B
  const [consentGiven, setConsentGiven] = useState(false); // DPDP Consent (defaults to unchecked)

  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submittedCase, setSubmittedCase] = useState<CaseIntakeSubmission | null>(null);
  const [matchedAdvisors, setMatchedAdvisors] = useState<Advisor[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !consentGiven) return;

    setIsLoading(true);
    setSubmitError('');

    try {
      const record = await saveIntakeSubmission({
        citizenName: name,
        phone,
        district,
        subcategoryTitle: subcategory.title[lang],
        briefSummary,
        isBPL,
        preferredAidType,
        consentGiven
      });

      const matches = findMatchingAdvisors(district, isBPL, preferredAidType);
      setMatchedAdvisors(matches);
      setSubmittedCase(record);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : INTAKE_TEXT.submitErrorFallback[lang]);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-[#0f2b48] text-white z-10 rounded-t-2xl">
          <div>
            <h3 className="font-bold text-sm sm:text-base flex items-center gap-2">
              <Building2 className="w-4 h-4 text-amber-400" />
              {INTAKE_TEXT.headerTitle[lang]}
            </h3>
            <p className="text-[11px] text-slate-300 mt-0.5">{subcategory.title[lang]}</p>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-6">
          {!submittedCase ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* MILESTONE 2: BCI RULE 36 TRACK SELECTOR */}
              <div className="space-y-2 p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <label className="block text-xs font-bold text-slate-800">
                  {INTAKE_TEXT.aidTrackLabel[lang]}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPreferredAidType('ADVOCATE')}
                    className={`p-2.5 rounded-lg border text-left text-xs transition flex items-start gap-2 ${
                      preferredAidType === 'ADVOCATE'
                        ? 'bg-blue-50 border-blue-600 text-blue-950 font-bold ring-1 ring-blue-600 shadow-xs'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Award className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>{INTAKE_TEXT.aidTrackAdvocate[lang]}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPreferredAidType('DLSA')}
                    className={`p-2.5 rounded-lg border text-left text-xs transition flex items-start gap-2 ${
                      preferredAidType === 'DLSA'
                        ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold ring-1 ring-emerald-600 shadow-xs'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Scale className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>{INTAKE_TEXT.aidTrackDLSA[lang]}</span>
                  </button>
                </div>

                {/* Statutory BCI Rule 36 Banner */}
                {preferredAidType === 'ADVOCATE' && (
                  <div className="p-2.5 bg-amber-50/80 rounded-lg border border-amber-200 text-[10.5px] text-amber-950 leading-relaxed flex items-start gap-2 mt-2">
                    <ShieldCheck className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                    <p>{INTAKE_TEXT.bciNoticeBanner[lang]}</p>
                  </div>
                )}
              </div>

              {/* Citizen Personal Details */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {INTAKE_TEXT.nameLabel[lang]}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder={INTAKE_TEXT.namePlaceholder[lang]}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0f2b48]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {INTAKE_TEXT.phoneLabel[lang]}
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="98XXXXXXXX"
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0f2b48]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {INTAKE_TEXT.districtLabel[lang]}
                  </label>
                  <select
                    value={district}
                    onChange={e => setDistrict(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2b48]"
                  >
                    {WEST_BENGAL_DISTRICTS.map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {INTAKE_TEXT.summaryLabel[lang]}
                </label>
                <textarea
                  rows={2}
                  value={briefSummary}
                  onChange={e => setBriefSummary(e.target.value)}
                  placeholder={INTAKE_TEXT.summaryPlaceholder[lang]}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0f2b48]"
                />
              </div>

              {submitError && (
                <div role="alert" className="rounded-lg border border-red-200 bg-red-50 p-3 text-xs text-red-800">
                  {submitError}
                </div>
              )}

              {/* BPL Qualification Checkbox */}
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-start gap-2.5">
                <input
                  type="checkbox"
                  id="bpl-check"
                  checked={isBPL}
                  onChange={e => setIsBPL(e.target.checked)}
                  className="mt-0.5 rounded text-emerald-600 focus:ring-emerald-500"
                />
                <label htmlFor="bpl-check" className="text-xs text-emerald-950 cursor-pointer">
                  <span className="font-bold">{INTAKE_TEXT.bplTitle[lang]}</span>
                  <p className="text-[11px] text-emerald-800 mt-0.5">{INTAKE_TEXT.bplDesc[lang]}</p>
                </label>
              </div>

              {/* MILESTONE 3: MANDATORY DPDP ACT 2023 CONSENT GATE */}
              <div className={`p-3.5 rounded-xl border transition-all ${
                consentGiven ? 'bg-emerald-50/70 border-emerald-400' : 'bg-amber-50/90 border-amber-300'
              }`}>
                <div className="flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    id="dpdp-consent"
                    required
                    checked={consentGiven}
                    onChange={e => setConsentGiven(e.target.checked)}
                    className="mt-1 rounded text-emerald-600 focus:ring-emerald-500 h-4 w-4 flex-shrink-0 cursor-pointer"
                  />
                  <label htmlFor="dpdp-consent" className="text-xs text-slate-900 cursor-pointer select-none">
                    <span className="font-bold flex items-center gap-1.5 text-slate-900">
                      <Lock className="w-3.5 h-3.5 text-emerald-700" />
                      {INTAKE_TEXT.dpdpConsentTitle[lang]}
                    </span>
                    <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                      {INTAKE_TEXT.dpdpConsentText[lang]}
                    </p>
                  </label>
                </div>
              </div>

              {!consentGiven && (
                <p className="text-[11px] text-amber-800 font-medium flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                  {INTAKE_TEXT.consentRequiredMsg[lang]}
                </p>
              )}

              {/* Submit Button (Locked if consent is not granted) */}
              <button
                type="submit"
                disabled={isLoading || !consentGiven}
                className="w-full py-2.5 px-4 bg-[#0f2b48] hover:bg-[#1a3d60] disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow transition"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
                    <span>{INTAKE_TEXT.submitting[lang]}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-amber-400" />
                    <span>{INTAKE_TEXT.submitBtn[lang]}</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            /* SUCCESS TICKET & ROUTING RESULTS */
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-center space-y-1">
                <CheckCircle2 className="w-9 h-9 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                  {INTAKE_TEXT.successTitle[lang]}
                </h4>
                <div className="flex items-center justify-center gap-2 pt-1">
                  <span className="text-xs text-slate-600">{INTAKE_TEXT.refCodeLabel[lang]}</span>
                  <span className="font-mono font-bold text-lg text-emerald-900 bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 rounded">
                    {submittedCase.id}
                  </span>
                </div>
                <div className="pt-1">
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    {INTAKE_TEXT.cloudSavedBadge[lang]}
                  </span>
                </div>
                {submittedCase.ipCaptureStatus && (
                  <p className="pt-2 text-[10px] text-slate-600">
                    {submittedCase.ipCaptureStatus === 'mocked'
                      ? INTAKE_TEXT.ipv4MockStatus[lang]
                      : submittedCase.ipCaptureStatus === 'captured'
                        ? INTAKE_TEXT.ipv4Status[lang]
                        : INTAKE_TEXT.ipv4UnavailableStatus[lang]}
                  </p>
                )}
              </div>

              {/* Matched Counsel Directory */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  {preferredAidType === 'ADVOCATE' && !isBPL
                    ? INTAKE_TEXT.trackBAdvLabel[lang]
                    : INTAKE_TEXT.trackADLSALabel[lang]}
                </h5>
                <div className="space-y-2">
                  {matchedAdvisors.map(adv => (
                    <div key={adv.id} className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1.5 shadow-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 text-sm">{adv.name}</span>
                        {adv.isFreeAid ? (
                          <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                            DLSA Free Aid
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold text-[10px]">
                            Empanelled Advocate
                          </span>
                        )}
                      </div>

                      {/* Statutory Bar Registration Display */}
                      {adv.barRegistrationNo && (
                        <div className="inline-flex items-center gap-1 font-mono text-[10px] bg-slate-200/70 text-slate-700 px-2 py-0.5 rounded">
                          <Award className="w-3 h-3 text-blue-600" />
                          <span>Bar Reg: {adv.barRegistrationNo}</span>
                        </div>
                      )}

                      <div className="text-slate-600 flex items-center gap-1.5 pt-0.5">
                        <Building2 className="w-3.5 h-3.5 text-slate-400" />
                        {adv.court} ({adv.district})
                      </div>
                      <div className="text-emerald-700 font-semibold flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5" />
                        {adv.phone}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-[11px] text-amber-900 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                <span>{INTAKE_TEXT.helplineNotice[lang]}</span>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={handlePrint}
                  className="flex-1 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  {INTAKE_TEXT.printBtn[lang]}
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 py-2 px-3 bg-[#0f2b48] hover:bg-[#1a3d60] text-white rounded-lg text-xs font-semibold"
                >
                  {INTAKE_TEXT.closeBtn[lang]}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
