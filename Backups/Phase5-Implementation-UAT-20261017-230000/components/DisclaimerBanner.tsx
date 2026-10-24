import React from 'react';
import { ShieldCheck, PhoneCall, Scale, Lock, AlertCircle } from 'lucide-react';
import type { Language } from '../types/legal';

export const DisclaimerBanner: React.FC<{ lang: Language }> = ({ lang }) => {
  const disclaimerText = {
    bn: "আইনি তথ্যের উন্মুক্ত পোর্টাল: ন্যায়মিত্র একটি অ-বাণিজ্যিক নাগরিক সহায়ক প্ল্যাটফর্ম, কোনো ল' ফার্ম বা সরকারি দপ্তর নয়। বিসিআই রুল ৩৬ (BCI Rule 36) অনুযায়ী কোনো প্রকার ওকালতনামা বা রেফারেল ফি নেওয়া হয় না এবং ডিজিটাল ব্যক্তিগত ডেটা সুরক্ষা আইন (DPDP Act, 2023) মেনে নাগরিক তথ্য সম্পূর্ণ সুরক্ষিত রাখা হয়। মামলা মোকদ্দমায় বিজ্ঞ প্যানেল আইনজীবী বা সরকারি DLSA-এর পরামর্শ নিন।",
    hi: "विधिक सूचना गाइड: न्यायमित्र एक गैर-व्यावसायिक नागरिक सहायता मंच है, कोई लॉ फर्म या सरकारी संस्था नहीं। बार काउंसिल नियम 36 के तहत कोई विज्ञापन या कमीशन नहीं लिया जाता एवं DPDP एक्ट 2023 के तहत नागरिक डेटा पूर्णतः सुरक्षित है। विधिक मामलों में अधिवक्ता या DLSA से परामर्श लें।",
    en: "Citizen Information Guide: NyayaMitra is an open-access navigator, not a law firm or government department. In compliance with BCI Rule 36, zero referral fees are charged. Citizen details are processed securely under the DPDP Act, 2023. Consult empaneled counsel or DLSA for formal court representation."
  };

  const helplineLabels = {
    bn: {
      dlsa: 'বিনামূল্যে আইনি সহায়তা (DLSA)',
      cyber: 'সাইবার হেল্পলাইন',
      land: 'বাংলারভূমি টোল-ফ্রি'
    },
    hi: {
      dlsa: 'मुफ्त कानूनी सहायता (DLSA)',
      cyber: 'साइबर हेल्पलाइन',
      land: 'बांगलारभूमि टोल-फ्री'
    },
    en: {
      dlsa: 'Free Statutory Aid (DLSA)',
      cyber: 'Cyber Fraud Helpline',
      land: 'Banglarbhumi Toll-Free'
    }
  };

  return (
    <div className="w-full bg-[#071422] text-white border-b border-[#142d47] select-none text-[11px]">
      {/* Top Tricolor Accent Line */}
      <div className="h-0.5 bg-gradient-to-r from-amber-500 via-white to-emerald-600 opacity-90" />

      {/* LINE 1: Emergency & Government Helplines Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-1.5 flex flex-wrap items-center justify-between gap-2">
        
        {/* Direct Helplines */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-3 text-slate-300">
          <span className="inline-flex items-center gap-1 font-semibold text-amber-300 text-[11px]">
            <Scale className="w-3.5 h-3.5 text-amber-400" />
            WB Legal Helplines:
          </span>

          <div className="flex items-center gap-1 bg-slate-900/90 border border-slate-700/70 px-2 py-0.5 rounded text-[10.5px]">
            <span className="text-slate-400 hidden md:inline">{helplineLabels[lang].dlsa}:</span>
            <a href="tel:15100" className="font-mono font-bold text-amber-300 hover:underline">
              15100 (DLSA Free Aid)
            </a>
          </div>

          <div className="flex items-center gap-1 bg-slate-900/90 border border-slate-700/70 px-2 py-0.5 rounded text-[10.5px]">
            <AlertCircle className="w-3 h-3 text-rose-400 shrink-0" />
            <span className="text-slate-400 hidden md:inline">{helplineLabels[lang].cyber}:</span>
            <a href="tel:1930" className="font-mono font-bold text-rose-300 hover:underline">
              1930 (Cyber Fraud)
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-1 text-slate-400 text-[10.5px]">
            <PhoneCall className="w-3 h-3 text-emerald-400 shrink-0" />
            <span>Banglarbhumi:</span>
            <strong className="font-mono text-emerald-300 font-bold">1800-345-5555</strong>
          </div>
        </div>

        {/* Right: Security & Regulatory Badge */}
        <div className="flex items-center gap-1 text-[9.5px] text-emerald-300 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-500/30 whitespace-nowrap">
          <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
          <span>DPDP Act 2023 &amp; BCI Rule 36 Verified</span>
        </div>
      </div>

      {/* LINE 2: Permanent Statutory Compliance Notice (Always Visible) */}
      <aside aria-label="Statutory Regulatory Notice" className="bg-[#0b1d30] border-t border-[#183654] px-3 sm:px-4 py-2 text-[10.5px] text-slate-300">
        <div className="max-w-7xl mx-auto flex items-start gap-2 leading-relaxed">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="flex-1">{disclaimerText[lang]}</p>
        </div>
      </aside>
    </div>
  );
};