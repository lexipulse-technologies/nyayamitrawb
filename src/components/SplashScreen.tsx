import React, { useState, useEffect, useRef } from 'react';
import { Scale, ArrowRight } from 'lucide-react';
import { Capacitor } from '@capacitor/core';

interface SplashScreenProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'bn' | 'hi';
}

const SPLASH_CONTENT = {
  en: {
    welcome: 'Welcome to NyayaMitra',
    tagline: 'Your Rights, Our Duty',
    subtitle: 'Free Civil Legal Navigator for 23 Districts of West Bengal',
    cultural: "Bengal's Soil, Bengal's Law, For Bengal's People",
  },
  bn: {
    welcome: 'ন্যায়মিত্রে স্বাগতম',
    tagline: 'আপনার অধিকার, আমাদের দায়িত্ব',
    subtitle: 'পশ্চিমবঙ্গের ২৩টি জেলার জন্য নিঃশুল্ক দেওয়ানি আইনি পথপ্রদর্শক',
    cultural: "বাংলার মাটি, বাংলার আইন, বাংলার মানুষের জন্য",
  },
  hi: {
    welcome: 'न्यायमित्र में आपका स्वागत है',
    tagline: 'आपके अधिकार, हमारा कर्तव्य',
    subtitle: 'पश्चिम बंगाल के 23 जिलों के लिए निःशुल्क नागरिक कानूनी मार्गदर्शिका',
    cultural: "बंगाल की मिट्टी, बंगाल का कानून, बंगाल के लोगों के लिए",
  },
};

/**
 * Generates a license-free legal-themed musical motif using Web Audio API.
 * Zero bytes, zero latency, works offline, no network request.
 * A solemn 4-note phrase: F3 - A3 - C4 - F4 (F major, justice/solemnity)
 * Each note: 400ms, gentle attack, warm decay.
 */
function playLegalMotif(): void {
  if (typeof window === 'undefined') return;
  try {
    const AudioContextCtor = (window as any).AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextCtor) return;

    const ctx = new AudioContextCtor();
    const now = ctx.currentTime;

    // Master gain - gentle volume
    const masterGain = ctx.createGain();
    masterGain.gain.value = 0.12;
    masterGain.connect(ctx.destination);

    // Legal motif notes (F major chord arpeggio: F3, A3, C4, F4)
    // Frequencies: F3=174.61, A3=220.00, C4=261.63, F4=349.23
    const notes = [
      { freq: 174.61, delay: 0.00, duration: 0.55 },   // F3 - root
      { freq: 220.00, delay: 0.18, duration: 0.55 },   // A3 - major 3rd
      { freq: 261.63, delay: 0.36, duration: 0.55 },   // C4 - perfect 5th
      { freq: 349.23, delay: 0.54, duration: 0.70 },   // F4 - octave (held slightly longer)
    ];

    notes.forEach(({ freq, delay, duration }) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine'; // Pure, warm tone
      osc.frequency.value = freq;
      
      // Gentle attack (30ms), sustain, warm exponential decay
      const startTime = now + delay;
      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(0.6, startTime + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
      
      osc.connect(gain).connect(masterGain);
      osc.start(startTime);
      osc.stop(startTime + duration + 0.05);
    });
  } catch {
    // Silent fail - never block splash on audio issues
  }
}

const BTN_CLASS = 'relative z-20 w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:via-amber-400 hover:to-amber-500 text-white font-bold text-sm transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] animate-fade-in-up delay-500 transform-gpu';

const BTN_SHADOW = 'shadow-[0_0_40px_rgba(245,158,11,0.6),0_10px_30px_-5px_rgba(245,158,11,0.5)]';

const BTN_STYLE = { transform: 'translateZ(30px)' };

export const SplashScreen: React.FC<SplashScreenProps> = ({ isOpen, onClose, lang }) => {
  const [visible, setVisible] = useState(false);
  const content = SPLASH_CONTENT[lang] || SPLASH_CONTENT.en;

  useEffect(() => {
    if (!isOpen) return;

    if (typeof window !== 'undefined' && sessionStorage.getItem('nyayamitra_splash_dismissed')) {
      onClose();
      return;
    }

    // Play music on ALL platforms (web + native)
    playLegalMotif();

    if (Capacitor.isNativePlatform()) {
      // On native, Capacitor SplashScreen plugin handles the native splash display
      // We must call onClose() to let React app continue rendering main content
      onClose();
      return;
    }

    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => onClose(), 300);
    }, 5000);

    return () => clearTimeout(timer);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[99] flex items-center justify-center perspective-[1000px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="splash-title"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#051226] via-[#0a1e34] to-[#0f2b48]" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(15,23,42,0.9)_0%,_rgba(10,30,52,0.8)_40%,_rgba(15,23,42,1)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,_rgba(245,158,11,0.15)_0%,_transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_40%_40%_at_30%_20%,_rgba(245,158,11,0.25)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_35%_35%_at_70%_80%,_rgba(59,130,246,0.2)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_30%_30%_at_80%_30%,_rgba(16,185,129,0.15)_0%,_transparent_50%)]" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/6 left-1/8 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl animate-float-slow transform-gpu" style={{animationDelay: '0s', animationDuration: '12s'}} />
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 rounded-full bg-blue-500/8 blur-3xl animate-float-slow transform-gpu" style={{animationDelay: '2s', animationDuration: '15s'}} />
        <div className="absolute top-1/3 left-1/3 w-48 h-48 rounded-full bg-amber-400/15 blur-2xl animate-float-slow transform-gpu" style={{animationDelay: '1s', animationDuration: '10s'}} />
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-cyan-500/12 blur-2xl animate-float-slow transform-gpu" style={{animationDelay: '3s', animationDuration: '13s'}} />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full bg-amber-500/20 blur-xl animate-pulse-slow transform-gpu" style={{animationDelay: '0.5s', animationDuration: '8s'}} />
        <div className="absolute top-2/3 right-1/3 w-36 h-36 rounded-full bg-emerald-500/15 blur-xl animate-pulse-slow transform-gpu" style={{animationDelay: '1.5s', animationDuration: '9s'}} />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-amber-500/20 via-transparent to-blue-500/20 animate-pulse-slow" style={{animationDuration: '6s'}} />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/15 to-transparent animate-pulse-slow" style={{animationDuration: '7s'}} />
      </div>

      <div
        className={`relative z-10 w-full max-w-lg mx-auto px-4 transform-gpu transition-all duration-300 ease-out ${
          visible ? 'opacity-100 scale-100 rotateX-0 rotateY-0' : 'opacity-0 scale-90 rotateX-6 rotateY-4'
        }`}
      >
        <div className="relative transform-gpu" style={{transformStyle: 'preserve-3d'}}>
          <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/20 via-blue-500/15 to-cyan-500/20 rounded-4xl blur-3xl animate-pulse-glow pointer-events-none" style={{transform: 'translateZ(-80px)'}} />
          <div className="absolute -inset-2 bg-gradient-to-br from-amber-500/10 via-blue-500/8 to-cyan-500/10 rounded-3xl blur-2xl pointer-events-none" style={{transform: 'translateZ(-40px)'}} />

          <div className="relative bg-gradient-to-br from-slate-950/90 via-slate-900/95 to-slate-950/90 backdrop-blur-2xl border border-amber-500/20 rounded-3xl p-8 sm:p-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8),0_0_80px_-20px_rgba(245,158,11,0.3),0_0_160px_-40px_rgba(59,130,246,0.15)] overflow-hidden transform-gpu" style={{transform: 'translateZ(0)'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-blue-500/5 rounded-3xl pointer-events-none" style={{transform: 'translateZ(-1px)'}} />
            <div className="absolute inset-1 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-3xl pointer-events-none" style={{transform: 'translateZ(-2px)'}} />
            <div className="absolute inset-0 rounded-3xl border border-amber-500/30 animate-spin-slow pointer-events-none" style={{transform: 'translateZ(-2px)'}} />
            <div className="absolute inset-1 rounded-3xl border border-blue-500/10 pointer-events-none" style={{transform: 'translateZ(-3px)'}} />

            <div className="relative z-20 text-center mb-6 transform-gpu" style={{transform: 'translateZ(20px)'}}>
              <div className="w-22 h-22 mx-auto rounded-xl bg-gradient-to-br from-amber-600 via-amber-500 to-amber-600 flex items-center justify-center shadow-[0_0_40px_rgba(245,158,11,0.8),0_0_80px_rgba(245,158,11,0.4),0_0_120px_rgba(245,158,11,0.2)] animate-pulse-glow transform-gpu" style={{transform: 'translateZ(30px)'}}>
                <Scale className="w-11 h-11 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]" />
              </div>
              <h1 id="splash-title" className="mt-5 font-black text-3xl sm:text-4xl tracking-tight bg-gradient-to-r from-white via-amber-200 via-amber-100 to-yellow-200 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(245,158,11,0.6)] animate-fade-in-up transform-gpu" style={{transform: 'translateZ(25px)'}}>
                {content.welcome}
              </h1>
              <p className="mt-2 text-sm font-medium text-amber-200/90 animate-fade-in-up delay-100 transform-gpu" style={{transform: 'translateZ(20px)'}}>
                {content.tagline}
              </p>
            </div>

            <p className="relative z-20 text-center text-sm text-slate-200/70 italic my-6 max-w-md mx-auto animate-fade-in-up delay-200 transform-gpu" style={{transform: 'translateZ(15px)'}}>
              "{content.cultural}"
            </p>

            <p className="relative z-20 text-center text-sm text-slate-200/60 mb-8 max-w-md mx-auto animate-fade-in-up delay-300 transform-gpu" style={{transform: 'translateZ(15px)'}}>
              {content.subtitle}
            </p>

            <div className="relative z-20 flex flex-wrap justify-center gap-2 mb-8 animate-fade-in-up delay-400 transform-gpu" style={{transform: 'translateZ(15px)'}}>
              <span className="px-3 py-1.5 bg-gradient-to-r from-amber-500/20 to-amber-400/20 border border-amber-500/40 rounded-full text-[11px] font-semibold text-amber-200 shadow-[0_0_15px_rgba(245,158,11,0.3)]">BCI Rule 36</span>
              <span className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/40 rounded-full text-[10px] font-semibold text-blue-200 shadow-[0_0_15px_rgba(59,130,246,0.3)]">300+ Workflows</span>
              <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-500/40 rounded-full text-[10px] font-semibold text-cyan-200 shadow-[0_0_15px_rgba(16,185,129,0.3)]">23 Districts</span>
            </div>

            <button
              onClick={onClose}
              className={BTN_CLASS + ' ' + BTN_SHADOW}
              style={BTN_STYLE}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              <span>Explore NyayaMitra</span>
            </button>

            <label className="relative z-20 flex items-center justify-center gap-2 mt-5 cursor-pointer animate-fade-in-up delay-600 transform-gpu" style={{transform: 'translateZ(15px)'}}>
              <input
                type="checkbox"
                className="w-4 h-4 accent-amber-500"
                onChange={(e) => e.target.checked && sessionStorage.setItem('nyayamitra_splash_dismissed', 'true')}
              />
              <span className="text-[10px] text-slate-300">Don't show again</span>
            </label>

            <p className="relative z-20 mt-4 text-center text-[9px] text-slate-400 animate-fade-in-up delay-700 transform-gpu" style={{transform: 'translateZ(10px)'}}>
              Crafted for Bengal by LEXIPULSE TECHNOLOGIES
            </p>
          </div>

          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white/60 hover:text-white transition-colors duration-200"
            aria-label="Skip"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;