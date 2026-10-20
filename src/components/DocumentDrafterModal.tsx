import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  X,
  FileText,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Download,
  ShieldCheck,
  AlertCircle,
  Scale,
  Building2,
  Loader2,
  MapPin,
  Lock,
  CreditCard,
  Clock
} from 'lucide-react';
import type { Language } from '../types/legal';
import type { ProDrafterInputs } from '../utils/proDocumentTemplates';
import {
  PRO_TEMPLATES,
  generateNoticeText,
  downloadNoticePdf
} from '../utils/proDocumentTemplates';
import { WEST_BENGAL_DISTRICTS, saveProTransaction } from '../utils/triageEngine';

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  preselectedTemplateId?: string;
  prefilledTopicTitle?: string;
}

const MODAL_TEXT = {
  headerBadge: {
    en: 'NyayaMitra Pro — Statutory Notice Drafter',
    bn: 'ন্যায়মিত্র প্রো — বিধিবদ্ধ আইনি নোটিশ প্রস্তুতকারক',
    hi: 'न्यायमित्र प्रो — वैधानिक कानूनी नोटिस ड्राफ्टर'
  },
  stepIndicator: {
    en: (s: number) => `Step ${s} of 4`,
    bn: (s: number) => `ধাপ ${s} (মোট ৪টি)`,
    hi: (s: number) => `चरण ${s} (कुल 4)`
  },
  costBreakdownTitle: {
    en: 'Cost Breakdown & Transparent Pricing',
    bn: 'স্বচ্ছ মূল্যতালিকা ও বিলের বিবরণ',
    hi: 'पारदर्शी मूल्य निर्धारण एवं विवरण'
  },
  payButton: {
    en: 'Pay ₹99 via Razorpay Live (UPI / Card / NetBanking)',
    bn: 'রেজরপে লাইভ মারফত ₹৯৯ পরিশোধ করুন (UPI / Card)',
    hi: 'रेज़रपे लाइव द्वारा ₹99 का भुगतान करें (UPI / Card)'
  },
  processingOrder: {
    en: 'Connecting to Secure Razorpay Live Gateway...',
    bn: 'নিরাপদ রেজরপে লাইভ গেটওয়ের সাথে সংযোগ করা হচ্ছে...',
    hi: 'सुरक्षित रेज़रपे लाइव गेटवे से कनेक्ट किया जा रहा है...'
  }
};

export const DocumentDrafterModal: React.FC<Props> = ({
  isOpen,
  onClose,
  lang: siteLang,
  preselectedTemplateId = 'DOC-138-NI',
  prefilledTopicTitle
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [docLang, setDocLang] = useState<'en' | 'bn' | 'hi'>(siteLang);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(preselectedTemplateId);

  // Form Inputs
  const [senderName, setSenderName] = useState('');
  const [senderAddress, setSenderAddress] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [district, setDistrict] = useState<string>(WEST_BENGAL_DISTRICTS[11] || 'Kolkata');
  const [recipientName, setRecipientName] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [primaryDate, setPrimaryDate] = useState('');
  const [secondaryDate, setSecondaryDate] = useState('');
  const [referenceNumber, setReferenceNumber] = useState('');
  const [propertyDetails, setPropertyDetails] = useState('');

  // Validation States
  const [validationAlert, setValidationAlert] = useState<string>('');
  const [invalidFields, setInvalidFields] = useState<Record<string, boolean>>({});

  // 5-Minute Timer on Step 3
  const [timeLeft, setTimeLeft] = useState<number>(300); // 300 seconds = 5 minutes
  const [isTimedOut, setIsTimedOut] = useState<boolean>(false);
  const timerRef = useRef<any>(null);

  // Razorpay Gateway State
  const [referenceId, setReferenceId] = useState('');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentError, setPaymentError] = useState('');
  const [verifiedPaymentId, setVerifiedPaymentId] = useState('');

  // Paywall gating state
  const [showFullContent, setShowFullContent] = useState(false);

  // Reset helper
  const resetFormClean = () => {
    setSenderName('');
    setSenderAddress('');
    setSenderPhone('');
    setRecipientName('');
    setRecipientAddress('');
    setAmount('');
    setPrimaryDate('');
    setSecondaryDate('');
    setReferenceNumber('');
    setPropertyDetails('');
    setVerifiedPaymentId('');
    setPaymentError('');
    setValidationAlert('');
    setInvalidFields({});
    setTimeLeft(300);
  };

  // RESET ON OPEN
  useEffect(() => {
    if (isOpen) {
      const activeTpl = PRO_TEMPLATES[preselectedTemplateId] || PRO_TEMPLATES['DOC-138-NI'];
      const hasEligibilityGate = activeTpl.eligibilityGate && activeTpl.eligibilityGate.length > 0;
      setStep(hasEligibilityGate ? 0 : 1);
      setDocLang(siteLang);
      setIsProcessingPayment(false);
      setIsTimedOut(false);
      resetFormClean();

      if (preselectedTemplateId && PRO_TEMPLATES[preselectedTemplateId]) {
        setSelectedTemplateId(preselectedTemplateId);
      }
      const rand = Math.floor(100000 + Math.random() * 900000);
      setReferenceId(`NM-DOC-${rand}`);
    }
  }, [isOpen, preselectedTemplateId, siteLang]);

  // Load Razorpay Script
  useEffect(() => {
    if (!window.Razorpay) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // 5-MINUTE COUNTDOWN ON STEP 3 WITH WIPE-CLEAN TIMEOUT
  useEffect(() => {
    if (step === 3) {
      setTimeLeft(300);
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            handleStep3Timeout();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [step]);

  const handleStep3Timeout = () => {
    setIsTimedOut(true);
    resetFormClean();

    // Show on-screen error banner for 3 seconds, then close modal
    setTimeout(() => {
      setIsTimedOut(false);
      onClose();
    }, 3000);
  };

  const activeTemplate = useMemo(() => {
    return PRO_TEMPLATES[selectedTemplateId];
  }, [selectedTemplateId]);

  const isTemplateAvailable = useMemo(() => {
    return !!PRO_TEMPLATES[selectedTemplateId];
  }, [selectedTemplateId]);

  const currentInputs: ProDrafterInputs = useMemo(() => {
    return {
      templateId: selectedTemplateId,
      lang: docLang,
      senderName: senderName.trim(),
      senderAddress: senderAddress.trim(),
      senderPhone: senderPhone.trim(),
      recipientName: recipientName.trim(),
      recipientAddress: recipientAddress.trim(),
      amount: amount.trim(),
      primaryDate: primaryDate.trim(),
      secondaryDate: secondaryDate.trim(),
      referenceNumber: referenceNumber.trim(),
      propertyDetails: propertyDetails.trim(),
      utrNumber: verifiedPaymentId.trim()
    };
  }, [selectedTemplateId, docLang, senderName, senderAddress, senderPhone, recipientName, recipientAddress, amount, primaryDate, secondaryDate, referenceNumber, propertyDetails, verifiedPaymentId]);

  const fullText = useMemo(() => generateNoticeText(currentInputs), [currentInputs]);

  // Visible lines for paywall preview: first 2 lines after "Subject:" header
  const visibleLines = useMemo(() => {
    if (!fullText) return [];
    const lines = fullText.split('\n');
    const subjectLineIdx = lines.findIndex(line => /subject/i.test(line));
    const endIndex = subjectLineIdx >= 0 ? Math.min(subjectLineIdx + 3, lines.length) : lines.length;
    return lines.slice(0, endIndex);
  }, [fullText]);

  // MANDATORY VALIDATOR & AUTO-SCROLL TO FIRST EMPTY FIELD
  const handleProceedToStep2 = () => {
    const errors: Record<string, boolean> = {};

    // 1. Sender Fields
    if (!senderName.trim()) errors['senderName'] = true;
    if (!senderPhone.trim()) errors['senderPhone'] = true;
    if (!district.trim()) errors['district'] = true;
    if (!senderAddress.trim()) errors['senderAddress'] = true;

    // 2. Recipient Fields
    if (!recipientName.trim()) errors['recipientName'] = true;
    if (!recipientAddress.trim()) errors['recipientAddress'] = true;

    // 3. Template-Specific Particulars
    activeTemplate.specificFields.forEach((f) => {
      let val = '';
      if (f.key === 'amount') val = amount;
      else if (f.key === 'primaryDate') val = primaryDate;
      else if (f.key === 'secondaryDate') val = secondaryDate;
      else if (f.key === 'referenceNumber') val = referenceNumber;
      else if (f.key === 'propertyDetails') val = propertyDetails;

      if (!val || !val.trim()) {
        errors[f.key] = true;
      }
    });

    if (Object.keys(errors).length > 0) {
      setInvalidFields(errors);
      setValidationAlert('Please complete all required fields to proceed');

      // Find first invalid input and smooth scroll
      const firstErrorKey = Object.keys(errors)[0];
      setTimeout(() => {
        const el = document.getElementById(`field-${firstErrorKey}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.focus();
        }
      }, 50);
      return;
    }

    setInvalidFields({});
    setValidationAlert('');
    setStep(2);
  };

  // RAZORPAY STANDARD LIVE CHECKOUT
  const handleOpenRazorpayCheckout = async () => {
    setIsProcessingPayment(true);
    setPaymentError('');

    try {
      const orderRes = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          referenceId,
          disputeTopic: activeTemplate.title[docLang] || activeTemplate.title.en
        })
      });

      if (!orderRes.ok) {
        const errData = await orderRes.json();
        throw new Error(errData.error || 'Failed to initialize Razorpay order.');
      }

      const orderData = await orderRes.json();

      const options = {
        key: orderData.keyId || (import.meta as any).env?.VITE_RAZORPAY_KEY_ID || 'rzp_live_TkN8MUwR01Npxf',
        amount: orderData.amount,
        currency: orderData.currency || 'INR',
        name: 'LEXIPULSE TECHNOLOGIES',
        description: `NyayaMitra Pro — Statutory Notice (${referenceId})`,
        image: 'https://nyayamitrawb.in/assets/hero-banner.webp',
        order_id: orderData.orderId,
        prefill: {
          name: senderName || 'Citizen',
          contact: senderPhone || '9876543210',
          email: 'namaste@nyayamitrawb.in'
        },
        theme: {
          color: '#0f2b48'
        },
        handler: async function (response: any) {
          try {
            const verifyRes = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                referenceId,
                citizenName: senderName || 'Pro Drafter User',
                phone: senderPhone || 'Not provided',
                district,
                disputeTopic: activeTemplate.title[docLang] || activeTemplate.title.en
              })
            });

            const verifyData = await verifyRes.json();

            if (verifyData.verified) {
              setVerifiedPaymentId(response.razorpay_payment_id);
              setShowFullContent(true);

              saveProTransaction({
                id: referenceId,
                citizenName: senderName.trim() || 'Pro Drafter User',
                phone: senderPhone.trim() || 'Not provided',
                district,
                disputeTopic: activeTemplate.title[docLang] || activeTemplate.title.en,
                submissionTime: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
                utrNumber: response.razorpay_payment_id,
                amount: 99.00
              });

              if (timerRef.current) clearInterval(timerRef.current);
              setIsProcessingPayment(false);
              setStep(4);
            } else {
              setPaymentError('Payment verification failed: Invalid cryptographic signature.');
              setIsProcessingPayment(false);
            }
          } catch (err: any) {
            setPaymentError(`Verification error: ${err.message}`);
            setIsProcessingPayment(false);
          }
        },
        modal: {
          ondismiss: function () {
            setIsProcessingPayment(false);
          }
        }
      };

      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.on('payment.failed', function (resp: any) {
        setPaymentError(`Payment failed: ${resp.error?.description || 'Transaction declined by bank'}`);
        setIsProcessingPayment(false);
      });

      razorpayInstance.open();
    } catch (err: any) {
      setPaymentError(err.message || 'Payment initiation failed.');
      setIsProcessingPayment(false);
    }
  };

  const formattedMinutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const formattedSeconds = String(timeLeft % 60).padStart(2, '0');

  // STANDALONE TIMEOUT NOTIFICATION OVERLAY (Remains on screen for 3 seconds)
  if (isTimedOut) {
    return (
      <div className="fixed inset-0 z-[120] bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
        <div className="bg-white border-2 border-red-500 rounded-2xl shadow-2xl p-6 sm:p-8 max-w-md w-full text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-red-100 border border-red-300 flex items-center justify-center mx-auto text-red-600">
            <Clock className="w-8 h-8 animate-pulse" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-black text-slate-900">
              Sorry! Transaction Timed Out, Please try again!
            </h3>
            <p className="text-xs text-slate-500">
              Payment session expired after 5 minutes. Form has been reset for security.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[92vh]">
        
        {/* HEADER */}
        <div className="bg-[#0f2b48] text-white p-4 sm:p-5 flex items-center justify-between border-b border-[#1b3e63] shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-400 to-emerald-400 flex items-center justify-center text-slate-950 font-bold shadow-xs shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-sm sm:text-base truncate">
                  {MODAL_TEXT.headerBadge[siteLang]}
                </h3>
                <span className="bg-amber-400 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                  ₹99 Only
                </span>
              </div>
              <p className="text-[11px] text-slate-300 truncate mt-0.5">
                {prefilledTopicTitle ? `For: ${prefilledTopicTitle}` : activeTemplate.title[docLang]}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-amber-300 font-bold hidden sm:inline">
              {MODAL_TEXT.stepIndicator[siteLang](step)}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition cursor-pointer"
              title="Close Drafter"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PROGRESS BAR */}
        <div className="w-full bg-slate-100 h-1.5 shrink-0">
          <div
            className="bg-gradient-to-r from-amber-500 to-emerald-500 h-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        {/* BODY */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-5 text-xs text-slate-800">
          
          {/* STEP 1: FORM-FILL WITH STRICT MULTI-FIELD VALIDATION */}
          {step === 1 && (
            <div className="space-y-4">
              
              {/* Validation Flash Alert */}
              {validationAlert && (
                <div className="p-3 bg-red-50 border-2 border-red-500 text-red-800 rounded-xl font-bold flex items-center gap-2 text-xs animate-in shake duration-200">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{validationAlert}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Document Language / ড্রাফটের ভাষা:
                  </label>
                  <div className="flex gap-1.5 bg-white p-1 rounded-lg border border-slate-300">
                    <button
                      type="button"
                      onClick={() => setDocLang('bn')}
                      className={`flex-1 py-1.5 rounded-md font-bold text-xs transition cursor-pointer ${
                        docLang === 'bn' ? 'bg-emerald-700 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      বাংলা
                    </button>
                    <button
                      type="button"
                      onClick={() => setDocLang('hi')}
                      className={`flex-1 py-1.5 rounded-md font-bold text-xs transition cursor-pointer ${
                        docLang === 'hi' ? 'bg-emerald-700 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      हिन्दी
                    </button>
                    <button
                      type="button"
                      onClick={() => setDocLang('en')}
                      className={`flex-1 py-1.5 rounded-md font-bold text-xs transition cursor-pointer ${
                        docLang === 'en' ? 'bg-[#0f2b48] text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      English
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Statutory Notice Framework:
                  </label>
                  <select
                    value={selectedTemplateId}
                    onChange={(e) => setSelectedTemplateId(e.target.value)}
                    className="w-full px-3 py-2 text-xs font-semibold rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-[#0f2b48] focus:outline-none"
                  >
                    {Object.values(PRO_TEMPLATES).map((tpl) => (
                      <option key={tpl.id} value={tpl.id}>
                        {tpl.code}: {tpl.title[docLang] || tpl.title.en}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-between text-[11px]">
                <div className="space-y-0.5">
                  <span className="font-bold text-blue-950">Governing Law:</span>
                  <p className="text-blue-800">{activeTemplate.governingAct[docLang]}</p>
                </div>
                <span className="bg-blue-100 text-blue-900 border border-blue-300 px-2 py-0.5 rounded font-mono font-bold shrink-0">
                  {activeTemplate.curePeriodDays} Days Notice
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Sender Particulars */}
                <div className="space-y-2.5 p-3.5 bg-slate-50/80 border border-slate-200 rounded-xl">
                  <span className="font-extrabold text-[11px] text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                    Sender (Your Information) *
                  </span>

                  <div>
                    <label className="block text-[10.5px] font-semibold text-slate-700 mb-0.5">Full Name *</label>
                    <input
                      id="field-senderName"
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => {
                        setSenderName(e.target.value);
                        setInvalidFields((prev) => ({ ...prev, senderName: false }));
                      }}
                      placeholder="e.g. Sunil Kumar Mondal"
                      className={`w-full px-3 py-1.5 text-xs rounded-lg border focus:outline-none transition ${
                        invalidFields['senderName']
                          ? 'border-red-500 ring-2 ring-red-400/30 bg-red-50/20'
                          : 'border-slate-300 focus:ring-1 focus:ring-[#0f2b48]'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-[10.5px] font-semibold text-slate-700 mb-0.5">Contact Phone *</label>
                    <input
                      id="field-senderPhone"
                      type="tel"
                      required
                      value={senderPhone}
                      onChange={(e) => {
                        setSenderPhone(e.target.value);
                        setInvalidFields((prev) => ({ ...prev, senderPhone: false }));
                      }}
                      placeholder="e.g. +91 98300 XXXXX"
                      className={`w-full px-3 py-1.5 text-xs rounded-lg border focus:outline-none transition ${
                        invalidFields['senderPhone']
                          ? 'border-red-500 ring-2 ring-red-400/30 bg-red-50/20'
                          : 'border-slate-300 focus:ring-1 focus:ring-[#0f2b48]'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-[10.5px] font-semibold text-slate-700 mb-0.5 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-600" />
                      <span>District in West Bengal *</span>
                    </label>
                    <select
                      id="field-district"
                      value={district}
                      onChange={(e) => {
                        setDistrict(e.target.value);
                        setInvalidFields((prev) => ({ ...prev, district: false }));
                      }}
                      className={`w-full px-3 py-1.5 text-xs rounded-lg border bg-white focus:outline-none transition ${
                        invalidFields['district']
                          ? 'border-red-500 ring-2 ring-red-400/30 bg-red-50/20'
                          : 'border-slate-300 focus:ring-1 focus:ring-[#0f2b48]'
                      }`}
                    >
                      {WEST_BENGAL_DISTRICTS.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10.5px] font-semibold text-slate-700 mb-0.5">Postal Address with PIN *</label>
                    <input
                      id="field-senderAddress"
                      type="text"
                      required
                      value={senderAddress}
                      onChange={(e) => {
                        setSenderAddress(e.target.value);
                        setInvalidFields((prev) => ({ ...prev, senderAddress: false }));
                      }}
                      placeholder="e.g. 14/B Central Road, Barasat - 700124"
                      className={`w-full px-3 py-1.5 text-xs rounded-lg border focus:outline-none transition ${
                        invalidFields['senderAddress']
                          ? 'border-red-500 ring-2 ring-red-400/30 bg-red-50/20'
                          : 'border-slate-300 focus:ring-1 focus:ring-[#0f2b48]'
                      }`}
                    />
                  </div>
                </div>

                {/* Recipient Particulars */}
                <div className="space-y-2.5 p-3.5 bg-slate-50/80 border border-slate-200 rounded-xl">
                  <span className="font-extrabold text-[11px] text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-rose-600" />
                    Recipient (Opposite Party) *
                  </span>

                  <div>
                    <label className="block text-[10.5px] font-semibold text-slate-700 mb-0.5">Full Name *</label>
                    <input
                      id="field-recipientName"
                      type="text"
                      required
                      value={recipientName}
                      onChange={(e) => {
                        setRecipientName(e.target.value);
                        setInvalidFields((prev) => ({ ...prev, recipientName: false }));
                      }}
                      placeholder="e.g. Rajat Mukherjee / ABC Builder"
                      className={`w-full px-3 py-1.5 text-xs rounded-lg border focus:outline-none transition ${
                        invalidFields['recipientName']
                          ? 'border-red-500 ring-2 ring-red-400/30 bg-red-50/20'
                          : 'border-slate-300 focus:ring-1 focus:ring-[#0f2b48]'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-[10.5px] font-semibold text-slate-700 mb-0.5">Postal Address *</label>
                    <input
                      id="field-recipientAddress"
                      type="text"
                      required
                      value={recipientAddress}
                      onChange={(e) => {
                        setRecipientAddress(e.target.value);
                        setInvalidFields((prev) => ({ ...prev, recipientAddress: false }));
                      }}
                      placeholder="e.g. 52 KSR Road, Kolkata - 700001"
                      className={`w-full px-3 py-1.5 text-xs rounded-lg border focus:outline-none transition ${
                        invalidFields['recipientAddress']
                          ? 'border-red-500 ring-2 ring-red-400/30 bg-red-50/20'
                          : 'border-slate-300 focus:ring-1 focus:ring-[#0f2b48]'
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Template-Specific Particulars */}
              <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2.5">
                <span className="font-extrabold text-[11px] text-amber-950 uppercase tracking-wider">
                  Dispute Particulars for {activeTemplate.code} (All Mandatory) *
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeTemplate.specificFields.map((f) => {
                    const val =
                      f.key === 'amount'
                        ? amount
                        : f.key === 'primaryDate'
                        ? primaryDate
                        : f.key === 'secondaryDate'
                        ? secondaryDate
                        : f.key === 'referenceNumber'
                        ? referenceNumber
                        : propertyDetails;

                    const setter =
                      f.key === 'amount'
                        ? setAmount
                        : f.key === 'primaryDate'
                        ? setPrimaryDate
                        : f.key === 'secondaryDate'
                        ? setSecondaryDate
                        : f.key === 'referenceNumber'
                        ? setReferenceNumber
                        : setPropertyDetails;

                    return (
                      <div key={f.key}>
                        <label className="block text-[10.5px] font-semibold text-slate-700 mb-0.5">
                          {f.label[docLang]} *
                        </label>
                        <input
                          id={`field-${f.key}`}
                          type={f.type}
                          required
                          value={val}
                          onChange={(e) => {
                            setter(e.target.value);
                            setInvalidFields((prev) => ({ ...prev, [f.key]: false }));
                          }}
                          placeholder={f.placeholder[docLang]}
                          className={`w-full px-3 py-1.5 text-xs rounded-lg border bg-white focus:outline-none transition ${
                            invalidFields[f.key]
                              ? 'border-red-500 ring-2 ring-red-400/30 bg-red-50/20'
                              : 'border-slate-300 focus:ring-1 focus:ring-[#0f2b48]'
                          }`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: LIVE PREVIEW & BILL (Cure Deadline Box Completely Removed) */}
          {step === 2 && activeTemplate ? (
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-[#0a1e34] to-[#0f2b48] text-white rounded-xl space-y-2.5 shadow-sm border border-slate-700">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="font-bold text-xs text-amber-300">
                    {MODAL_TEXT.costBreakdownTitle[siteLang]}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-300">
                    ID: {referenceId}
                  </span>
                </div>

                <div className="space-y-1 text-slate-300 text-[11px]">
                  <div className="flex justify-between">
                    <span>Statutory Notice Compilation ({activeTemplate.code}):</span>
                    <span className="font-mono text-white">₹99.00</span>
                  </div>
                  <div className="flex justify-between text-emerald-300">
                    <span>Razorpay Live Checkout Rail:</span>
                    <span className="font-mono">₹0.00 (0% Platform Fee)</span>
                  </div>
                  <div className="flex justify-between font-extrabold text-sm text-white pt-1.5 border-t border-white/10">
                    <span>Total Amount Payable:</span>
                    <span className="font-mono text-amber-300">₹99.00 INR</span>
                  </div>
                </div>
              </div>

{/* Paywalled Document Preview */}
              <div className="border-2 border-dashed border-amber-300 rounded-xl p-4 bg-slate-50 relative overflow-hidden">
                {/* Show full unlocked content */}
                {showFullContent && (
                  <div className="relative font-mono text-[10px] sm:text-[11px] leading-relaxed whitespace-pre-wrap text-slate-800 max-h-72 overflow-y-auto p-2 bg-white/80 rounded border border-slate-200">
                    {fullText}
                  </div>
                )}

                {/* Blurred preview with paywall */}
                {!showFullContent && (
                  <div className="relative font-mono text-[10px] sm:text-[11px] leading-relaxed whitespace-pre-wrap text-slate-800 max-h-72 overflow-y-auto p-2 bg-white/80 rounded border border-slate-200 relative">
                    {/* Centered Extract Pro Form Badge */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                      <div className="flex flex-col items-center gap-2 bg-white/95 backdrop-blur-sm border-2 border-amber-300 rounded-xl px-6 py-4 shadow-xl transform transition-all hover:scale-105">
                        <Lock className="w-8 h-8 text-amber-600" />
                        <span className="text-[11px] sm:text-[12px] font-extrabold text-amber-700 uppercase tracking-wider whitespace-nowrap">
                          Extract Pro Form
                        </span>
                        <span className="text-[9px] text-slate-500 font-medium">
                          Pay ₹99 to unlock full statutory notice
                        </span>
                      </div>
                    </div>
                    {/* Show first 2 lines after Subject: header */}
                    <div className="flex items-center gap-1 mb-2 text-slate-800">
                      {visibleLines.map((line, idx) => (
                        <span key={idx} className="block text-[10px] text-slate-700">
                          {line}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="p-4 text-center text-slate-500">
              <h4 className="text-sm font-medium text-slate-900">
                Not Available
              </h4>
              <p className="text-[11px] text-slate-600 mt-1">
                Pro form not available for this category.
              </p>
            </div>
)}

          {/* STEP 3: PAYMENT COMPLETE */}
          {step === 3 && (
            <div className="space-y-5">
              <div className="p-6 bg-gradient-to-br from-[#0a1e34] via-[#0f2b48] to-[#123961] text-white rounded-2xl shadow-xl text-center space-y-4">
                
                {/* Payment Success */}
                <div className="p-8 bg-white border border-emerald-200 rounded-xl shadow-xl mx-auto max-w-sm">
                  <div className="flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-xl mb-2">Payment Successful</h4>
                  <div className="bg-white/50 p-3 rounded-lg border border-emerald-200 flex items-center justify-between text-xs text-slate-600 mb-4">
                    <span className="text-slate-500">Ticket ID:</span>
                    <span className="font-mono text-emerald-900 font-bold">{referenceId}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span className="text-slate-500">Amount:</span>
                    <span className="font-bold text-emerald-900">₹99.00 INR</span>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-800 text-white rounded-xl font-bold text-xs transition flex items-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    <ArrowRight className="w-3 h-3 text-white" />
                    <span>View Your Referral Slip</span>
                  </button>
</div>
              </div>
            </div>
          )}

          {/* STEP 4: DOWNLOADS (Word Format Completely Deprecated & Removed) */}
          {step === 4 && (
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-extrabold text-base text-slate-900">
                  🎉 Payment Confirmed &amp; Document Unlocked!
                </h4>
                <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-emerald-200 font-mono text-xs text-emerald-950 font-bold">
                  <span>Reference ID:</span>
                  <span className="text-emerald-700">{referenceId}</span>
                  <span className="text-slate-400">&bull;</span>
                  <span className="text-slate-600">Razorpay ID: {verifiedPaymentId}</span>
                </div>
                <p className="text-[11px] text-slate-600 max-w-md mx-auto">
                  Your legal notice draft has been compiled in browser memory. Stamped with payment verification under Advocates Act 1961.
                </p>
              </div>

              {/* SINGLE TAMPER-PROOF VECTOR PDF DOWNLOAD CARD */}
              <div className="p-5 bg-white border-2 border-emerald-500 rounded-2xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-800 font-bold text-sm">
                    <FileText className="w-5 h-5 text-emerald-600" />
                    <span>Print-Ready Vector PDF (Court Standard A4)</span>
                  </div>
                  <p className="text-[11px] text-slate-500 max-w-md leading-relaxed">
                    Tamper-evident document formatted with standard 25mm court filing margins. Ready for immediate dispatch via Registered Post with Acknowledgement Due (RPAD) or Speed Post.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => downloadNoticePdf(currentInputs, false, `${referenceId}_Notice.pdf`)}
                  className="w-full sm:w-auto px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-md cursor-pointer whitespace-nowrap active:scale-95"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Clean PDF</span>
                </button>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                <span className="font-extrabold text-[11px] text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  India Post Service Protocol (Section 27 General Clauses Act):
                </span>
                <ul className="list-disc pl-4 space-y-0.5 text-[10.5px] text-slate-600">
                  <li>Print two copies of the clean notice on standard white A4 paper.</li>
                  <li>Sign both copies in ink. Dispatch one copy via <strong>Registered Post with Acknowledgement Due (RPAD)</strong> or Speed Post.</li>
                  <li>Affix the postal receipt barcode to your retained second copy and track delivery confirmation online.</li>
                </ul>
              </div>
            </div>
          )}

        </div>

        {/* MODAL FOOTER BUTTONS */}
        <div className="bg-slate-50 p-3.5 sm:p-4 border-t border-slate-200 flex items-center justify-between shrink-0">
          <div>
            {step === 2 && (
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold text-xs flex items-center gap-1 transition cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Edit</span>
              </button>
            )}
            {step === 3 && (
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold text-xs flex items-center gap-1 transition cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Preview</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            {step === 1 && (
              <button
                type="button"
                onClick={handleProceedToStep2}
                className="px-4 py-2 bg-[#0f2b48] hover:bg-[#1a3d60] text-white rounded-xl font-bold text-xs transition flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <span>Continue to Live Preview</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}

            {step === 2 && (
              <button
                type="button"
                onClick={handleOpenRazorpayCheckout}
                className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold text-xs transition flex items-center gap-2 mx-auto cursor-pointer active:scale-95"
              >
                <span>Proceed to Razorpay Live Checkout</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}

            {step === 4 && (
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-[#0f2b48] hover:bg-[#1a3d60] text-white rounded-xl font-bold text-xs transition shadow-sm cursor-pointer"
              >
                Close Window
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};