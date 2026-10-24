import React, { useState, useEffect } from 'react';
import { WifiOff, Wifi, CheckCircle2, ShieldCheck } from 'lucide-react';
import type { Language } from '../types/legal';

interface Props {
  lang: Language;
}

const OFFLINE_TEXT = {
  offlineTitle: {
    bn: 'অফলাইন মোড সক্রিয় (Offline Mode Active)',
    hi: 'ऑफ़लाइन मोड सक्रिय (Offline Mode Active)',
    en: 'Offline Mode Active'
  },
  offlineDesc: {
    bn: 'ইন্টারনেট সংযোগ নেই, তবে পশ্চিমবঙ্গের ৩০০টি দেওয়ানি আইনি রোডম্যাপ ও কাগজপত্রের চেকলিস্ট সম্পূর্ণ সচল রয়েছে।',
    hi: 'इंटरनेट कनेक्शन नहीं है, लेकिन पश्चिम बंगाल के 300 कानूनी रोडमैप और चेकलिस्ट पूर्णतः उपलब्ध हैं।',
    en: 'You are offline, but all 300 civil legal roadmaps and document checklists remain 100% accessible.'
  },
  onlineTitle: {
    bn: 'সংযোগ পুনর্স্থাপিত হয়েছে (Back Online)',
    hi: 'कनेक्शन बहाल हो गया (Back Online)',
    en: 'Connection Restored'
  },
  onlineDesc: {
    bn: 'ইন্টারনেট সংযোগ আবার সচল হয়েছে। লাইভ ডেটা সিঙ্ক করা হচ্ছে।',
    hi: 'इंटरनेट कनेक्शन फिर से सक्रिय है। लाइव डेटा सिंक हो रहा है।',
    en: 'You are back online. Live database sync is active.'
  }
};

export const OfflineBanner: React.FC<Props> = ({ lang }) => {
  const [isOnline, setIsOnline] = useState<boolean>(() => {
    return typeof navigator !== 'undefined' ? navigator.onLine : true;
  });
  const [showRestoredNotice, setShowRestoredNotice] = useState<boolean>(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowRestoredNotice(true);
      const timer = setTimeout(() => {
        setShowRestoredNotice(false);
      }, 4000);
      return () => clearTimeout(timer);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowRestoredNotice(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // When back online, show brief success badge
  if (showRestoredNotice) {
    return (
      <aside aria-label="Connection Restored Notice" className="bg-emerald-700 text-white px-3 py-1.5 text-xs border-b border-emerald-600 animate-in fade-in slide-in-from-top duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Wifi className="w-4 h-4 text-emerald-200 shrink-0" />
            <span className="font-bold">{OFFLINE_TEXT.onlineTitle[lang]}:</span>
            <span className="text-emerald-100 hidden sm:inline">{OFFLINE_TEXT.onlineDesc[lang]}</span>
          </div>
          <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-800 px-2 py-0.5 rounded font-mono">
            <CheckCircle2 className="w-3 h-3 text-emerald-300" />
            Live Sync
          </span>
        </div>
      </aside>
    );
  }

  // If connected, render nothing
  if (isOnline) {
    return null;
  }

  // If disconnected, render the persistent offline assurance bar
  return (
    <aside aria-label="Offline Mode Active Banner" className="bg-[#1a2c3f] text-amber-300 px-3 py-2 text-xs border-b border-amber-500/40 shadow-md animate-in fade-in slide-in-from-top duration-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2.5">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-6 h-6 rounded-md bg-amber-500/20 border border-amber-400/40 flex items-center justify-center shrink-0">
            <WifiOff className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <div className="min-w-0">
            <span className="font-extrabold text-amber-200 mr-1.5">
              {OFFLINE_TEXT.offlineTitle[lang]}:
            </span>
            <span className="text-slate-200 text-[11px] leading-tight">
              {OFFLINE_TEXT.offlineDesc[lang]}
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-1 shrink-0 text-[10px] font-bold bg-amber-400/10 text-amber-300 px-2.5 py-1 rounded-full border border-amber-400/30">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>300 Roadmaps Cached Locally</span>
        </div>
      </div>
    </aside>
  );
};