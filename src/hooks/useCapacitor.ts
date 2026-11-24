import { useEffect, useState, useCallback } from 'react';
import { Capacitor } from '@capacitor/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { Preferences } from '@capacitor/preferences';
import { Network } from '@capacitor/network';
import { Share } from '@capacitor/share';
import { StatusBar, Style } from '@capacitor/status-bar';
import type { Language } from '../types/legal';

const LANG_KEY = 'nyayamitra_lang';

export function useNativeSplash() {
  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      SplashScreen.hide();
    }
  }, []);
}

export function useLanguagePersistence(initialLang: Language = 'en'): [Language, (lang: Language) => void] {
  const [lang, setLangState] = useState<Language>(initialLang);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadLang = async () => {
      if (Capacitor.isNativePlatform()) {
        try {
          const { value } = await Preferences.get({ key: LANG_KEY });
          if (value && (value === 'en' || value === 'bn' || value === 'hi')) {
            setLangState(value as Language);
          }
        } catch {
          /* ignore */
        }
      } else {
        const stored = localStorage.getItem(LANG_KEY);
        if (stored && (stored === 'en' || stored === 'bn' || stored === 'hi')) {
          setLangState(stored as Language);
        }
      }
      setLoaded(true);
    };
    loadLang();
  }, []);

  const setLang = useCallback(async (newLang: Language) => {
    setLangState(newLang);
    if (Capacitor.isNativePlatform()) {
      await Preferences.set({ key: LANG_KEY, value: newLang });
    } else {
      localStorage.setItem(LANG_KEY, newLang);
    }
  }, []);

  return [loaded ? lang : initialLang, setLang];
}

export function useNetworkStatus() {
  const [isOnline, setIsOnline] = useState(true);
  const [connectionType, setConnectionType] = useState<string>('unknown');

  useEffect(() => {
    const updateStatus = async () => {
      try {
        const status = await Network.getStatus();
        setIsOnline(status.connected);
        setConnectionType(status.connectionType);
      } catch {
        setIsOnline(navigator.onLine);
      }
    };

    updateStatus();

    if (Capacitor.isNativePlatform()) {
      const listener = Network.addListener('networkStatusChange', (status) => {
        setIsOnline(status.connected);
        setConnectionType(status.connectionType);
      });
      listener.then(l => {
        return () => l.remove();
      });
    } else {
      const handleOnline = () => setIsOnline(true);
      const handleOffline = () => setIsOnline(false);
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);
      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }
  }, []);

  return { isOnline, connectionType };
}

export function useShare() {
  const share = useCallback(async (options: { title?: string; text?: string; url?: string }) => {
    if (Capacitor.isNativePlatform()) {
      try {
        await Share.share(options);
        return true;
      } catch {
        return false;
      }
    } else if (navigator.share) {
      try {
        await navigator.share(options);
        return true;
      } catch {
        return false;
      }
    } else {
      if (options.url) {
        navigator.clipboard.writeText(options.url);
      }
      return false;
    }
  }, []);

  return { share };
}

export function useStatusBar() {
  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      StatusBar.setStyle({ style: Style.Dark });
      StatusBar.setBackgroundColor({ color: '#0a1e34' });
      StatusBar.setOverlaysWebView({ overlay: true });
    }
  }, []);
}

export function useKeyboardShortcut(callback: () => void, keys: string[] = ['ctrl+k', 'meta+k']) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = `${e.ctrlKey ? 'ctrl+' : ''}${e.metaKey ? 'meta+' : ''}${e.key.toLowerCase()}`;
      if (keys.includes(key)) {
        e.preventDefault();
        callback();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [callback, keys]);
}