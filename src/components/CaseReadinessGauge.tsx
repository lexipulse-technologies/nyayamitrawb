import React from 'react';
import { ShieldCheck, CheckCircle2, AlertTriangle, FileText } from 'lucide-react';
import type { Language } from '../types/legal';

interface Props {
  totalDocs: number;
  markedDocs: number;
  lang: Language;
}

const GAUGE_TEXT = {
  title: {
    bn: 'মামলা প্রস্তুতির অগ্রগতি সূচক (Readiness Score)',
    hi: 'केस तैयारी प्रगति स्कोर (Readiness Score)',
    en: 'Case Readiness Score (Court Preparedness)'
  },
  statusLow: {
    bn: 'অসম্পূর্ণ: মূল নথিপত্র সংগ্রহ বাকি রয়েছে',
    hi: 'अपूर्ण: मुख्य दस्तावेज एकत्रित करना शेष है',
    en: 'Incomplete: Critical Documents Pending'
  },
  statusMid: {
    bn: 'চলমান: প্রয়োজনীয় নথির অধিকাংশ প্রস্তুত',
    hi: 'प्रगति पर: अधिकांश आवश्यक दस्तावेज तैयार',
    en: 'In Progress: Substantive Documents Prepared'
  },
  statusReady: {
    bn: '১০০% প্রস্তুত: আদালতে বা কাউন্টারে জমা দেওয়ার উপযুক্ত',
    hi: '100% तैयार: अदालत या काउंटर पर जमा करने हेतु तैयार',
    en: '100% Case Ready for Submission or Hearing'
  },
  readyBadge: {
    bn: 'প্রস্তুত',
    hi: 'तैयार',
    en: 'Ready'
  }
};

export const CaseReadinessGauge: React.FC<Props> = ({ totalDocs, markedDocs, lang }) => {
  const percent = totalDocs > 0 ? Math.round((markedDocs / totalDocs) * 100) : 0;

  // Circular gauge math (radius = 36, circumference = ~226.2)
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * percent) / 100;

  // Determine status color and text based on completion score
  let statusColor = 'text-rose-600 stroke-rose-500';
  let statusBadgeBg = 'bg-rose-50 text-rose-700 border-rose-200';
  let statusMessage = GAUGE_TEXT.statusLow[lang];

  if (percent >= 80) {
    statusColor = 'text-emerald-600 stroke-emerald-500';
    statusBadgeBg = 'bg-emerald-50 text-emerald-800 border-emerald-300';
    statusMessage = GAUGE_TEXT.statusReady[lang];
  } else if (percent >= 40) {
    statusColor = 'text-amber-600 stroke-amber-500';
    statusBadgeBg = 'bg-amber-50 text-amber-800 border-amber-300';
    statusMessage = GAUGE_TEXT.statusMid[lang];
  }

  return (
    <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-slate-50 via-white to-slate-50 border border-slate-200 shadow-xs space-y-3 select-none">
      
      {/* Streamlined Header (Print Docket removed as per Requirement #2) */}
      <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div className="flex items-center gap-1.5 min-w-0">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <h4 className="font-bold text-xs sm:text-[13px] text-slate-900 truncate">
            {GAUGE_TEXT.title[lang]}
          </h4>
        </div>
        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
          {percent}% Verified
        </span>
      </div>

      {/* Speedometer Gauge Display */}
      <div className="flex items-center gap-3.5">
        
        {/* SVG Circular Meter */}
        <div className="relative w-18 h-18 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 88 88">
            {/* Background Track */}
            <circle
              cx="44"
              cy="44"
              r={radius}
              className="stroke-slate-200"
              strokeWidth="7"
              fill="transparent"
            />
            {/* Dynamic Progress Stroke */}
            <circle
              cx="44"
              cy="44"
              r={radius}
              className={`${statusColor} transition-all duration-500 ease-out`}
              strokeWidth="7"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
            />
          </svg>
          
          {/* Centered Percentage Value */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="font-mono font-black text-sm sm:text-base text-slate-900 leading-none">
              {percent}%
            </span>
            <span className="text-[9px] font-bold text-slate-400 uppercase mt-0.5">
              Score
            </span>
          </div>
        </div>

        {/* Readiness Telemetry Details */}
        <div className="flex-1 min-w-0 space-y-1.5">
          <div className="flex items-center justify-between gap-1 text-[11px]">
            <span className="text-slate-500 font-medium">Verified Documents:</span>
            <span className="font-mono font-bold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
              {markedDocs} / {totalDocs} {GAUGE_TEXT.readyBadge[lang]}
            </span>
          </div>

          {/* Status Message Badge */}
          <div className={`p-1.5 px-2 rounded-lg border text-[10.5px] font-semibold leading-tight flex items-start gap-1.5 ${statusBadgeBg}`}>
            {percent >= 80 ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
            ) : percent >= 40 ? (
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
            ) : (
              <FileText className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
            )}
            <p className="line-clamp-2">{statusMessage}</p>
          </div>
        </div>
      </div>
    </div>
  );
};