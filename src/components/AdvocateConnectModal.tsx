import React, { useState } from 'react';
import {
  X,
  Scale,
  BadgeCheck,
  Landmark,
  ShieldAlert,
  Loader2,
  CheckCircle2,
  User,
  Phone,
  Mail,
  MessageSquare,
  CalendarCheck,
  ExternalLink
} from 'lucide-react';
import type { Language } from '../types/legal';
import { ADVOCATE_PROFILE } from '../data/advocateProfile';
import { ensureRazorpayLoaded } from './DocumentDrafterModal';

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  workflowId: string;
  workflowTitle: string;
}

const TEXT = {
  title: {
    en: 'Connect Legal Advocate',
    bn: 'আইনজীবীর সঙ্গে যুক্ত হন',
    hi: 'विधिक अधिवक्ता से जुड़ें'
  },
  subtitle: {
    en: 'Independent advocate — callback within 24 working hours',
    bn: 'স্বাধীন আইনজীবী — ২৪ কর্মঘণ্টার মধ্যে কলব্যাক',
    hi: 'स्वतंत्र अधिवक्ता — 24 कार्य घंटों में कॉलबैक'
  },
  formHeading: {
    en: 'Your Contact Details',
    bn: 'আপনার যোগাযোগের তথ্য',
    hi: 'आपकी संपर्क जानकारी'
  },
  nameLabel: {
    en: 'Full Name *',
    bn: 'পুরো নাম *',
    hi: 'पूरा नाम *'
  },
  mobileLabel: {
    en: '10-digit Mobile Number *',
    bn: '১০ সংখ্যার মোবাইল নম্বর *',
    hi: '10 अंकों का मोबाइल नंबर *'
  },
  emailLabel: {
    en: 'Email Address *',
    bn: 'ইমেল ঠিকানা *',
    hi: 'ईमेल पता *'
  },
  commentLabel: {
    en: 'Brief Description of Your Issue (Optional)',
    bn: 'আপনার সমস্যার সংক্ষিপ্ত বিবরণ (ঐচ্ছিক)',
    hi: 'आपकी समस्या का संक्षिप्त विवरण (वैकल्पिक)'
  },
  payButton: {
    en: (fee: number) => `Pay ₹${fee}/- and Connect Legal Counsel`,
    bn: (fee: number) => `₹${fee}/- পরিশোধ করুন ও আইনি পরামর্শদাতা থেকে যুক্ত হন`,
    hi: (fee: number) => `₹${fee}/- का भुगतान करें और कानूनी सलाहकार से जुड़ें`
  },
  processing: {
    en: 'Processing…',
    bn: 'প্রক্রিয়াধীন…',
    hi: 'प्रक्रिया में…'
  },
  disclaimerTitle: {
    en: 'Mandatory Statutory Disclaimer (BCI Rule 36)',
    bn: 'বাধ্যতামূলক বিধিবদ্ধ দাবিত্যাগ (BCI নিয়ম ৩৬)',
    hi: 'अनिवार्य वैधानिक अस्वीकरण (BCI नियम 36)'
  },
  successTitle: {
    en: 'Payment Successful!',
    bn: 'পেমেন্ট সফল হয়েছে!',
    hi: 'भुगतान सफल रहा!'
  },
  successMessage: {
    en: "Your payment of ₹499 has been successfully processed and your request has been sent to Advocate Tanweer Ahmed Khan's office. IMPORTANT: To confirm your consultation, please schedule your 60-minute session using the Calendly link below.",
    bn: "আপনার ₹499 পেমেন্ট সফলভাবে প্রক্রিয়া করা হয়েছে এবং আপনার অনুরোধ অ্যাডভোকেট তানবীর আহমেদ খানের অফিসে পাঠানো হয়েছে। গুরুত্বপূর্ণ: আপনার পরামর্শ নিশ্চিত করতে, নীচের ক্যালেন্ডলি লিঙ্ক ব্যবহার করে আপনার ৬০ মিনিটের সেশন নির্ধারণ করুন।",
    hi: "आपका ₹499 का भुगतान सफलतापूर्वक संसाधित किया गया है और आपका अनुरोध अधिवक्ता तनवीर अहमद खान के कार्यालय को भेज दिया गया है। महत्वपूर्ण: अपनी परामर्श की पुष्टि करने के लिए, कृपया नीचे दिए गए Calendly लिंक का उपयोग करके अपना 60-मिनट का सत्र शेड्यूल करें।"
  },
  scheduleHeading: {
    en: 'Schedule Your Lawyer Consultation',
    bn: 'আপনার আইনজীবীর পরামর্শের সময় নির্ধারণ করুন',
    hi: 'अपनी विधिक अधिवक्ता परामर्श का समय निर्धारित करें'
  },
  scheduleInstruction: {
    en: 'You must schedule your 60-minute lawyer consultation via the Calendly link below. Your consultation is confirmed only after scheduling.',
    bn: 'আপনাকে অবশ্যই নীচের ক্যালেন্ডলি লিঙ্কের মাধ্যমে আপনার ৬০ মিনিটের আইনজীবী পরামর্শের সময় নির্ধারণ করতে হবে। সময় নির্ধারণের পরেই আপনার পরামর্শ নিশ্চিত হবে।',
    hi: 'आपको नीचे दिए गए Calendly लिंक के माध्यम से अपनी 60-मिनट की विधिक अधिवक्ता परामर्श का समय निर्धारित करना होगा। समय निर्धारण के बाद ही आपकी परामर्श पुष्टि होगी।'
  },
  scheduleButton: {
    en: 'Schedule Consultation on Calendly',
    bn: 'ক্যালেন্ডলিতে পরামর্শের সময় নির্ধারণ করুন',
    hi: 'Calendly पर परामर्श का समय निर्धारित करें'
  },
  paymentIdLabel: {
    en: 'Razorpay Payment ID',
    bn: 'রেজরপে পেমেন্ট আইডি',
    hi: 'Razorpay भुगतान आईडी'
  },
  close: {
    en: 'Close',
    bn: 'বন্ধ করুন',
    hi: 'बंद करें'
  },
  verified: {
    en: 'Bar Council Verified',
    bn: 'বার কাউন্সিল যাচাইকৃত',
    hi: 'बार काउंसिल सत्यापित'
  },
  consultationFee: {
    en: 'Platform Facilitation Fee',
    bn: 'প্ল্যাটফর্ম সুবিধা ফি',
    hi: 'प्लेटफ़ॉर्म सुविधा शुल्क'
  }
};

const STATUTORY_DISCLAIMER = `NyayaMitra is a technology platform that facilitates your request to the independent advocate listed above. NyayaMitra is not a law firm, takes no referral commission from any advocate, and does not guarantee case outcomes. The advocate is solely responsible for all professional advice. Advocate-client relationship, if any, arises directly between you and the advocate.`;

const CALENDLY_URL = 'https://calendly.com/namaste-nyayamitrawb/60mins';

const MOBILE_REGEX = /^[6-9]\d{9}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const hasRealEnrollment =
  Boolean(ADVOCATE_PROFILE.barCouncilId) && !ADVOCATE_PROFILE.barCouncilId.includes('____');

export const AdvocateConnectModal: React.FC<Props> = ({
  isOpen,
  onClose,
  lang,
  workflowId,
  workflowTitle
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [citizenName, setCitizenName] = useState('');
  const [mobile, setMobile] = useState('');
  const [citizenEmail, setCitizenEmail] = useState('');
  const [comment, setComment] = useState('');
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState('');
  const [paymentId, setPaymentId] = useState('');
  const [photoFailed, setPhotoFailed] = useState(false);

  if (!isOpen) return null;

  const t = (key: keyof typeof TEXT): string => {
    const value = TEXT[key][lang];
    return typeof value === 'function' ? value(ADVOCATE_PROFILE.fee) : value;
  };

  const isFormValid =
    citizenName.trim().length > 0 &&
    MOBILE_REGEX.test(mobile.trim()) &&
    EMAIL_REGEX.test(citizenEmail.trim());

  const handlePay = async () => {
    setError('');
    setProcessing(true);
    try {
      await ensureRazorpayLoaded();
      const orderRes = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 49900, purpose: 'advocate_connect' })
      });
      if (!orderRes.ok) throw new Error('Order creation failed');
      const orderData = await orderRes.json();

      const rzp = new window.Razorpay({
        key: orderData.keyId,
        amount: 49900,
        currency: 'INR',
        name: 'NyayaMitra Advocate Connect',
        description: `Consultation request — ${ADVOCATE_PROFILE.name}`,
        order_id: orderData.orderId,
        prefill: { name: citizenName, contact: mobile, email: citizenEmail },
        theme: { color: '#0f2b48' },
        handler: async (response: any) => {
          const res = await fetch('/api/advocate-connect', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              ...response,
              citizenName,
              mobile,
              citizenEmail,
              comment,
              workflowId,
              workflowTitle
            })
          });
          if (res.ok) {
            setPaymentId(response.razorpay_payment_id);
            setStep('success');
            setProcessing(false);
          } else {
            setError('Payment received but notification failed. Our team will contact you.');
            setProcessing(false);
          }
        },
        modal: { ondismiss: () => setProcessing(false) }
      });
      rzp.open();
    } catch {
      setError('Could not start payment. Please retry.');
      setProcessing(false);
    }
  };

  const inputClass = (valid: boolean, touched: boolean) =>
    `w-full px-3 py-2 text-xs rounded-lg border focus:outline-none transition ${
      touched && !valid
        ? 'border-red-500 ring-2 ring-red-400/30 bg-red-50/30'
        : 'border-slate-300 focus:ring-1 focus:ring-[#0f2b48]'
    }`;

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[92vh]">

        {/* HEADER */}
        <div className="bg-[#0f2b48] text-white p-4 sm:p-5 flex items-center justify-between border-b border-[#1b3e63] shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-400 to-emerald-400 flex items-center justify-center text-slate-950 font-bold shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-extrabold text-sm sm:text-base truncate">{t('title')}</h3>
                <span className="bg-amber-400 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                  ₹{ADVOCATE_PROFILE.fee}
                </span>
              </div>
              <p className="text-[11px] text-slate-300 truncate mt-0.5">{t('subtitle')}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition cursor-pointer shrink-0"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* BODY */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-5 text-xs text-slate-800">

          {step === 'success' ? (
            <div className="p-5 sm:p-6 bg-emerald-50 border border-emerald-300 rounded-2xl text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="font-extrabold text-lg text-slate-900">{t('successTitle')}</h4>
              <p className="text-[11.5px] text-slate-600 max-w-md mx-auto leading-relaxed">
                {t('successMessage')}
              </p>

              {/* CALENDLY SCHEDULING — mandatory next step after successful payment */}
              <div className="relative overflow-hidden p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#0f2b48] to-[#1b3e63] border-2 border-amber-400 text-left space-y-3 shadow-lg">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-400 to-emerald-400 flex items-center justify-center shrink-0">
                    <CalendarCheck className="w-5 h-5 text-slate-950" />
                  </div>
                  <h5 className="font-extrabold text-sm text-white leading-tight">{t('scheduleHeading')}</h5>
                </div>
                <p className="text-[11px] text-amber-100 leading-relaxed font-medium">
                  {t('scheduleInstruction')}
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm transition shadow-lg active:scale-[0.99] cursor-pointer"
                >
                  <CalendarCheck className="w-4 h-4 shrink-0" />
                  <span>{t('scheduleButton')}</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
                <p className="text-[10px] text-slate-300 text-center break-all">
                  <span className="font-semibold">Calendly Link: </span>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-300 underline hover:text-amber-200 font-mono"
                  >
                    {CALENDLY_URL}
                  </a>
                </p>
              </div>

              <div className="bg-white rounded-xl border border-emerald-200 p-4 text-left space-y-2 max-w-md mx-auto">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Citizen Name:</span>
                  <span className="font-bold text-slate-900">{citizenName}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Mobile:</span>
                  <span className="font-mono text-slate-900">{mobile}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Email:</span>
                  <span className="text-slate-900">{citizenEmail}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Workflow:</span>
                  <span className="font-medium text-slate-900 truncate max-w-[200px]">{workflowTitle || '—'}</span>
                </div>
                <div className="flex justify-between text-xs border-t border-emerald-100 pt-2">
                  <span className="text-slate-500">{t('paymentIdLabel')}:</span>
                  <span className="font-mono font-bold text-emerald-950">{paymentId}</span>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 bg-[#0f2b48] hover:bg-[#1a3d60] text-white rounded-xl font-bold text-xs transition cursor-pointer shadow-sm"
                >
                  {t('close')}
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* SECTION 1: ADVOCATE BIO CARD */}
              <div className="p-4 sm:p-5 bg-gradient-to-br from-slate-50 to-white border-2 border-amber-300 rounded-2xl space-y-3">
                <div className="flex items-start gap-4 relative">
                  {photoFailed ? (
                    <div className="w-28 h-28 rounded-2xl bg-[#0f2b48] text-amber-300 flex items-center justify-center font-black text-2xl shrink-0 shadow-sm">
                      K
                    </div>
                  ) : (
                    <img
                      src={ADVOCATE_PROFILE.photoUrl}
                      alt={ADVOCATE_PROFILE.name}
                      onError={() => setPhotoFailed(true)}
                      className="w-28 h-28 rounded-2xl object-cover border-4 border-amber-400 shrink-0 shadow-[0_0_20px_rgba(245,158,11,0.8)] animate-pulse-glow"
                    />
                  )}
                  <div className="min-w-0 space-y-1.5">
                    <h4 className="font-black text-base text-slate-900">{ADVOCATE_PROFILE.name}</h4>
                    <div className="flex items-center gap-2 flex-wrap">
                      {hasRealEnrollment && (
                        <span className="inline-flex items-center gap-1 bg-emerald-100 border border-emerald-300 text-emerald-800 font-bold text-[10px] px-2 py-0.5 rounded-full">
                          <BadgeCheck className="w-3 h-3" />
                          {t('verified')}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 bg-[#0f2b48] text-amber-300 font-mono font-bold text-[10px] px-2 py-0.5 rounded-full">
                        {ADVOCATE_PROFILE.barCouncilId}
                      </span>
                    </div>
                  </div>
                  {/* Dual Logos: Advocate Logo (left) + Bar Council Logo (right) */}
                  <div className="absolute top-3 right-3 flex items-center gap-2">
                    <img
                      src="/assets/advocate_logo.jpg"
                      alt="Advocate Logo"
                      className="w-16 h-16 rounded-lg object-contain shadow-md opacity-95"
                    />
                    <img
                      src="/assets/barcouncilofindialogo.png"
                      alt="Bar Council of India"
                      className="w-20 h-20 object-contain opacity-95 drop-shadow-lg"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="font-extrabold text-[10px] text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Landmark className="w-3.5 h-3.5 text-emerald-600" />
                    Courts of Practice
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {ADVOCATE_PROFILE.courts.map((court) => (
                      <span key={court} className="bg-emerald-50 border border-emerald-200 text-emerald-900 font-semibold text-[10px] px-2 py-0.5 rounded-full">
                        {court}
                      </span>
                    ))}
                    <span className="bg-blue-50 border border-blue-200 text-blue-900 font-semibold text-[10px] px-2 py-0.5 rounded-full">
                      Supreme Court of India
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="font-extrabold text-[10px] text-slate-900 uppercase tracking-wider">
                    Specializations
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {ADVOCATE_PROFILE.specializations.map((spec) => (
                      <span key={spec} className="bg-blue-50 border border-blue-200 text-blue-900 font-semibold text-[10px] px-2 py-0.5 rounded-full">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="font-extrabold text-[10px] text-slate-900 uppercase tracking-wider">
                    Achievements
                  </span>
                  <ul className="list-disc pl-4 space-y-0.5 text-[10.5px] text-slate-600">
                    <li className="font-bold">5000+ District Court/Calcutta High Court/Supreme Court Appearances with hundreds of legal cases won till date</li>
                  </ul>
                </div>

                <div className="flex items-center justify-between gap-2 pt-1">
                  <div className="flex flex-wrap gap-1.5">
                    {ADVOCATE_PROFILE.languages.map((language) => (
                      <span key={language} className="bg-slate-100 border border-slate-200 text-slate-600 font-medium text-[10px] px-2 py-0.5 rounded-full">
                        {language}
                      </span>
                    ))}
                  </div>
                  <span className="bg-amber-100 border border-amber-300 text-amber-900 font-extrabold text-[10px] px-2.5 py-1 rounded-full whitespace-nowrap">
                    {t('consultationFee')}: ₹{ADVOCATE_PROFILE.fee}
                  </span>
                </div>
              </div>

              {/* SECTION 2: MANDATORY STATUTORY DISCLAIMER (Decision D3 — unaltered, unconditional) */}
              <div className="p-3.5 bg-red-50 border-2 border-red-300 rounded-xl space-y-1">
                <span className="font-extrabold text-[10.5px] text-red-900 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-red-600" />
                  {t('disclaimerTitle')}
                </span>
                <p className="text-[10.5px] text-red-950 leading-relaxed font-medium">
                  {STATUTORY_DISCLAIMER}
                </p>
              </div>

              {/* SECTION 3: CITIZEN CONTACT FORM */}
              <div className="p-4 bg-slate-50/80 border border-slate-200 rounded-xl space-y-3">
                <span className="font-extrabold text-[11px] text-slate-900 uppercase tracking-wider">
                  {t('formHeading')}
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10.5px] font-semibold text-slate-700 mb-0.5">
                      <User className="w-3 h-3 inline mr-1 text-emerald-600" />
                      {t('nameLabel')}
                    </label>
                    <input
                      type="text"
                      value={citizenName}
                      onChange={(e) => setCitizenName(e.target.value)}
                      placeholder="e.g. Sunil Kumar Mondal"
                      className={inputClass(citizenName.trim().length > 0, citizenName.length > 0)}
                    />
                  </div>

                  <div>
                    <label className="block text-[10.5px] font-semibold text-slate-700 mb-0.5">
                      <Phone className="w-3 h-3 inline mr-1 text-emerald-600" />
                      {t('mobileLabel')}
                    </label>
                    <input
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      placeholder="e.g. 9830012345"
                      className={inputClass(MOBILE_REGEX.test(mobile.trim()), mobile.length > 0)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10.5px] font-semibold text-slate-700 mb-0.5">
                    <Mail className="w-3 h-3 inline mr-1 text-emerald-600" />
                    {t('emailLabel')}
                  </label>
                  <input
                    type="email"
                    value={citizenEmail}
                    onChange={(e) => setCitizenEmail(e.target.value)}
                    placeholder="e.g. citizen@example.com"
                    className={inputClass(EMAIL_REGEX.test(citizenEmail.trim()), citizenEmail.length > 0)}
                  />
                </div>

                <div>
                  <label className="block text-[10.5px] font-semibold text-slate-700 mb-0.5">
                    <MessageSquare className="w-3 h-3 inline mr-1 text-emerald-600" />
                    {t('commentLabel')}
                  </label>
                  <textarea
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="e.g. Tenant not returning deposit despite repeated reminders…"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#0f2b48] transition"
                  />
                </div>
              </div>

              {error && (
                <div className="p-3 bg-red-50 border-2 border-red-500 text-red-800 rounded-xl font-bold flex items-center gap-2 text-xs">
                  <ShieldAlert className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* SECTION 4: PAY */}
              <button
                type="button"
                onClick={handlePay}
                disabled={!isFormValid || processing}
                className={`w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm shadow-lg transition active:scale-[0.99] ${
                  isFormValid && !processing
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.7)] animate-pulse-glow cursor-pointer'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                {processing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{t('processing')}</span>
                  </>
                ) : (
                  <>
                    <Scale className="w-4 h-4" />
                    <span>{t('payButton')}</span>
                  </>
                )}
              </button>
            </>
          )}

        </div>
      </div>
    </div>
  );
};
