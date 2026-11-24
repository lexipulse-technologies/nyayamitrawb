import type { Language } from '../types/legal';
import { getApiUrl } from './apiBase';

const LOCALE_MAP: Record<Language, string> = {
  bn: 'bn-IN',
  hi: 'hi-IN',
  en: 'en-IN'
};

// Global speech recognition and audio playback handles
let currentAudio: HTMLAudioElement | null = null;
let activeRecognition: any = null;
let silenceTimeoutId: any = null;
let maxListeningTimeoutId: any = null;

export function isVoiceSearchSupported(): boolean {
  if (typeof window === 'undefined') return false;
  return Boolean((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition);
}

export function isAudioGuideSupported(): boolean {
  return true; // 100% supported via HTML5 Audio
}

/**
 * VOICE SEARCH (Speech-to-Text)
 * Features real-time streaming (interim results) and a natural 1.8-second pause buffer
 */
export function startVoiceRecognition(
  lang: Language,
  onResult: (transcript: string) => void,
  onError: (error: string) => void,
  onEnd: () => void
): any {
  if (!isVoiceSearchSupported()) {
    onError('Voice input is not supported in this browser. Please use Chrome, Edge, or Safari.');
    onEnd();
    return null;
  }

  // Clear any active instances and timers
  stopActiveVoiceRecognition();

  try {
    const SpeechRecognitionConstructor =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    const recognition = new SpeechRecognitionConstructor();
    recognition.lang = LOCALE_MAP[lang] || 'bn-IN';
    
    // Continuous mode prevents aggressive 1-second browser cutoffs
    recognition.continuous = true;
    // Interim results display text in real time as the citizen speaks
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    let accumulatedTranscript = '';
    let speechDetected = false;

    // Safety timeout: Maximum 15 seconds per voice search query
    maxListeningTimeoutId = setTimeout(() => {
      stopActiveVoiceRecognition();
    }, 15000);

    recognition.onresult = (event: any) => {
      speechDetected = true;
      let interim = '';

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const text = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          accumulatedTranscript += ' ' + text;
        } else {
          interim += text;
        }
      }

      const currentText = (accumulatedTranscript + ' ' + interim).trim();
      if (currentText) {
        onResult(currentText);
      }

      // Reset the silence debounce timer: finalize after 1.8 seconds of silence following speech
      if (silenceTimeoutId) clearTimeout(silenceTimeoutId);
      silenceTimeoutId = setTimeout(() => {
        stopActiveVoiceRecognition();
      }, 1800);
    };

    recognition.onerror = (event: any) => {
      // Disregard harmless silence timeouts if text was already captured
      if (event.error === 'no-speech') {
        if (!speechDetected) {
          console.warn('[Speech Engine]: No speech detected within window.');
        }
        return;
      }

      let errorMsg = 'Voice recognition error.';
      if (event.error === 'not-allowed') {
        errorMsg = 'Microphone access is blocked. Please click the lock or settings icon in your browser address bar and enable Microphone access.';
      } else if (event.error === 'audio-capture') {
        errorMsg = 'No microphone was found or your microphone is in use by another app.';
      } else if (event.error === 'network') {
        errorMsg = 'Network connection notice during voice processing.';
      }

      onError(errorMsg);
    };

    recognition.onend = () => {
      clearAllTimers();
      activeRecognition = null;
      onEnd();
    };

    activeRecognition = recognition;
    recognition.start();
    return recognition;
  } catch (err: any) {
    clearAllTimers();
    onError(err.message || 'Failed to initialize microphone hardware.');
    onEnd();
    return null;
  }
}

export function stopActiveVoiceRecognition(): void {
  clearAllTimers();
  if (activeRecognition) {
    try {
      activeRecognition.stop();
    } catch {}
    activeRecognition = null;
  }
}

function clearAllTimers(): void {
  if (silenceTimeoutId) {
    clearTimeout(silenceTimeoutId);
    silenceTimeoutId = null;
  }
  if (maxListeningTimeoutId) {
    clearTimeout(maxListeningTimeoutId);
    maxListeningTimeoutId = null;
  }
}

/**
 * UNIFIED NATIVE AUDIO STREAM DISPATCHER (TTS)
 */
export function playAudioRoadmap(
  scriptText: string,
  lang: Language,
  onStart: () => void,
  onEnd: () => void,
  onError: () => void
): void {
  stopAudio();

  try {
    const cleanText = scriptText.slice(0, 1000);
    const ttsUrl = getApiUrl(`/api/tts?lang=${encodeURIComponent(lang)}&text=${encodeURIComponent(cleanText)}`);

    currentAudio = new Audio();
    currentAudio.src = ttsUrl;

    currentAudio.onplay = () => {
      onStart();
    };

    currentAudio.onended = () => {
      stopAudio();
      onEnd();
    };

    currentAudio.onerror = (e) => {
      console.warn('Audio stream playback notice:', e);
      onError();
      onEnd();
    };

    currentAudio.play().catch(err => {
      console.warn('Autoplay audio notice:', err);
      onError();
      onEnd();
    });
  } catch (err) {
    console.error('Audio initialization exception:', err);
    onError();
    onEnd();
  }
}

export function pauseAudio(): void {
  if (currentAudio && !currentAudio.paused) {
    currentAudio.pause();
  }
}

export function resumeAudio(): void {
  if (currentAudio && currentAudio.paused) {
    currentAudio.play().catch(() => {});
  }
}

export function stopAudio(): void {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio.src = '';
    currentAudio = null;
  }
}