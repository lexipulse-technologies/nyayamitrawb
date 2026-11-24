import React, { useState, useEffect } from 'react';
import { Volume2, Play, Pause, Square, VolumeX } from 'lucide-react';
import type { CivilSubCategory, Language } from '../types/legal';
import {
  isAudioGuideSupported,
  playAudioRoadmap,
  pauseAudio,
  resumeAudio,
  stopAudio
} from '../utils/speechEngine';
import { trackTtsPlay } from '../utils/analytics';

const AUDIO_TEXT = {
  header: {
    bn: 'আইনি অডিও গাইড (AI Audio Guide)',
    hi: 'विधिक ऑडियो गाइड (AI Audio Guide)',
    en: 'Civil Legal Audio Guide (AI Narrator)'
  },
  subtitle: {
    bn: 'পদ্ধতিগত ধাপসমূহ অডিওতে শুনতে প্লে বাটনে চাপুন',
    hi: 'चरणबद्ध प्रक्रिया सुनने हेतु प्ले बटन दबाएं',
    en: 'Listen to step-by-step procedural directions aloud'
  },
  play: { bn: 'শুনুন (Play)', hi: 'सुनें (Play)', en: 'Play Audio' },
  pause: { bn: 'পজ (Pause)', hi: 'पॉज़ (Pause)', en: 'Pause' },
  resume: { bn: 'চালান (Resume)', hi: 'जारी रखें', en: 'Resume' },
  stop: { bn: 'থামান (Stop)', hi: 'रोकें (Stop)', en: 'Stop' },
  playingStatus: { bn: 'অডিও চলছে...', hi: 'ऑडियो चल रहा है...', en: 'Narrating Roadmap Steps...' },
  pausedStatus: { bn: 'অডিও স্থগিত রাখা হয়েছে', hi: 'ऑडियो रोका गया है', en: 'Audio Paused' },
  notSupported: {
    bn: 'আপনার ডিভাইসে অডিও স্পিচ সমর্থিত নয়। Google Chrome বা Microsoft Edge ব্যবহার করুন।',
    hi: 'आपका ब्राउज़र ऑडियो स्पीच का समर्थन नहीं करता।',
    en: 'Audio speech narration not supported on this browser. Please use Chrome or Edge.'
  }
};

interface Props {
  subcategory: CivilSubCategory;
  lang: Language;
  activeTrack?: 'rural_district' | 'kolkata_urban';
}

export const AudioRoadmapPlayer: React.FC<Props> = ({ subcategory, lang, activeTrack }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hasSupport, setHasSupport] = useState(true);

  // Stop and reset audio whenever the topic, language, or active territorial track changes
  useEffect(() => {
    setHasSupport(isAudioGuideSupported());
    stopAudio();
    setIsPlaying(false);
    setIsPaused(false);
  }, [subcategory?.id, lang, activeTrack]);

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  const handlePlay = () => {
    if (isPaused) {
      resumeAudio();
      setIsPaused(false);
      setIsPlaying(true);
      return;
    }

    // Determine whether to narrate Dual-Path specific steps or fallback to standard steps
    const isDual = subcategory?.territory_track === 'Dual_Path' && Boolean(subcategory?.dual_path) && Boolean(activeTrack);
    const dualData = isDual && subcategory.dual_path && activeTrack ? subcategory.dual_path[activeTrack] : null;

    const titleText = subcategory?.title?.[lang] || subcategory?.title?.en || '';
    const summaryText = subcategory?.summary?.[lang] || subcategory?.summary?.en || '';
    
    const forumText = dualData
      ? (dualData.authority[lang] || dualData.authority.en || '')
      : (subcategory?.authority_forum?.[lang] || subcategory?.authority_forum?.en || '');

    const timeframeText = dualData?.statutory_timeframe?.[lang]
      || dualData?.statutory_timeframe?.en
      || subcategory?.statutory_timeframe?.[lang]
      || subcategory?.statutory_timeframe?.en
      || '';

    const stepsArray = dualData
      ? (dualData.steps[lang] || dualData.steps.en || [])
      : (subcategory?.roadmap_steps?.[lang] || subcategory?.roadmap_steps?.en || []);

    const stepsList = stepsArray.join(lang === 'en' ? '. ' : '। ');

    // Pure language scripts without foreign abbreviations
    let spokenScript = '';
    if (lang === 'bn') {
      spokenScript = `${titleText}। ${summaryText}। সংশ্লিষ্ট সরকারি কর্তৃপক্ষ বা আদালত: ${forumText}। আনুমানিক নিষ্পত্তির সময়সীমা: ${timeframeText}। আইনি পদক্ষেপ ও ধারাবাহিক করণীয় ধাপসমূহ: ${stepsList}।`;
    } else if (lang === 'hi') {
      spokenScript = `${titleText}। ${summaryText}। संबंधित अदालत या प्राधिकरण: ${forumText}। अनुमानित समय सीमा: ${timeframeText}। आवश्यक चरणबद्ध कदम: ${stepsList}।`;
    } else {
      const actText = subcategory?.relevant_act || '';
      spokenScript = `${titleText}. Governed under ${actText}. ${summaryText}. Concerned authority or forum: ${forumText}. Estimated statutory timeframe: ${timeframeText}. Step-by-step procedural roadmap: ${stepsList}.`;
    }

    playAudioRoadmap(
      spokenScript,
      lang,
      () => {
        trackTtsPlay(subcategory?.id || '', lang);
        setIsPlaying(true);
        setIsPaused(false);
      },
      () => {
        setIsPlaying(false);
        setIsPaused(false);
      },
      () => {
        setIsPlaying(false);
        setIsPaused(false);
      }
    );
  };

  const handlePause = () => {
    pauseAudio();
    setIsPaused(true);
  };

  const handleStop = () => {
    stopAudio();
    setIsPlaying(false);
    setIsPaused(false);
  };

  if (!hasSupport) {
    return (
      <div className="p-2.5 bg-slate-100 rounded-xl text-[11px] text-slate-500 flex items-center gap-2 border border-slate-200">
        <VolumeX className="w-4 h-4 text-slate-400 shrink-0" />
        <span>{AUDIO_TEXT.notSupported[lang]}</span>
      </div>
    );
  }

  return (
    <div className="p-3 sm:p-3.5 bg-gradient-to-r from-emerald-50 via-slate-50 to-blue-50 border border-emerald-200 rounded-xl flex flex-wrap items-center justify-between gap-3 shadow-xs">
      <div className="flex items-center gap-2.5 min-w-0">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
          isPlaying && !isPaused ? 'bg-emerald-600 text-white animate-pulse' : 'bg-white border border-emerald-300 text-emerald-800'
        }`}>
          <Volume2 className="w-4 h-4" />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xs text-slate-900 truncate">
              {AUDIO_TEXT.header[lang]}
            </span>
            {isPlaying && (
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                isPaused ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
              }`}>
                {isPaused ? AUDIO_TEXT.pausedStatus[lang] : AUDIO_TEXT.playingStatus[lang]}
              </span>
            )}
          </div>
          <p className="text-[11px] text-slate-600 mt-0.5 truncate">
            {AUDIO_TEXT.subtitle[lang]}
          </p>
        </div>
      </div>

      {/* Playback Controls */}
      <div className="flex items-center gap-1.5 shrink-0">
        {!isPlaying || isPaused ? (
          <button
            type="button"
            onClick={handlePlay}
            className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-xs transition"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>{isPaused ? AUDIO_TEXT.resume[lang] : AUDIO_TEXT.play[lang]}</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={handlePause}
            className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-xs transition"
          >
            <Pause className="w-3.5 h-3.5 fill-white" />
            <span>{AUDIO_TEXT.pause[lang]}</span>
          </button>
        )}

        {isPlaying && (
          <button
            type="button"
            onClick={handleStop}
            className="px-2.5 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg text-xs font-bold flex items-center gap-1 transition"
            title="Stop Audio"
          >
            <Square className="w-3.5 h-3.5 fill-slate-700" />
            <span className="hidden sm:inline">{AUDIO_TEXT.stop[lang]}</span>
          </button>
        )}
      </div>
    </div>
  );
};
