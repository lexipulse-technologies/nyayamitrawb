import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';
import type { Language } from '../types/legal';

const COUNTER_LABEL = {
  en: 'Unique Visitors Count',
  bn: 'অনন্য পরিদর্শক সংখ্যা',
  hi: 'विशिष्ट आगंतुक संख्या'
};

export const VisitorCounter: React.FC<{ lang: Language }> = ({ lang }) => {
  const [visitorCount, setVisitorCount] = useState<number>(() => {
    try {
      const cached = localStorage.getItem('nyayamitra_visitor_cache');
      return cached ? parseInt(cached, 10) : 1420;
    } catch {
      return 1420;
    }
  });

  useEffect(() => {
    let isMounted = true;

    async function fetchUniqueCount() {
      try {
        // Cache-busting: Timestamp query + no-store headers prevent browser caching
        const res = await fetch(`/api/counter?_t=${Date.now()}`, {
          cache: 'no-store',
          headers: {
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache'
          }
        });

        if (res.ok) {
          const data = await res.json();
          if (data?.uniqueVisitors && isMounted) {
            setVisitorCount(data.uniqueVisitors);
            try {
              localStorage.setItem('nyayamitra_visitor_cache', data.uniqueVisitors.toString());
            } catch {}
          }
        }
      } catch (err) {
        console.warn('[Visitor Counter Notice]: Using cached count:', err);
      }
    }

    fetchUniqueCount();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0a1e33] via-[#0f2b48] to-[#123961] text-white py-1 px-2.5 sm:px-3 rounded-lg border border-[#1e4d7b] shadow-xs select-none hover:border-amber-400/40 transition-all">
      {/* Compact Gradient Icon with Pulsing Live Dot */}
      <div className="relative flex items-center justify-center shrink-0">
        <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-amber-500 to-emerald-500 flex items-center justify-center shadow-2xs">
          <Users className="w-3 h-3 text-slate-950 font-bold" />
        </div>
        <span className="absolute -top-0.5 -right-0.5 flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
        </span>
      </div>

      {/* Label and Live English Count */}
      <div className="flex items-center gap-1.5 leading-none">
        <span className="text-[10.5px] font-medium text-slate-300">
          {COUNTER_LABEL[lang]}:
        </span>
        <strong className="font-mono font-black text-xs text-amber-300 tracking-wider">
          {visitorCount.toLocaleString('en-IN')}
        </strong>
      </div>
    </div>
  );
};