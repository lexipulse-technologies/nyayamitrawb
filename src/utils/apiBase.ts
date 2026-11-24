import { Capacitor } from '@capacitor/core';

function resolveApiBase(): string {
  // Native Android Capacitor WebView must use absolute URL to live production API
  if (Capacitor.isNativePlatform()) {
    return (import.meta.env.VITE_API_BASE as string) || 'https://nyayamitrawb.in';
  }
  // Web (dev server or production): relative URL → same-origin
  // - Dev mode: hits Vite dev server middlewares (/api/create-order etc.)
  // - Production web: resolves to https://nyayamitrawb.in/api/create-order (same-origin, no CORS needed)
  return '';
}

export const API_BASE = resolveApiBase();

export function getApiUrl(path: string): string {
  return `${API_BASE}${path.startsWith('/') ? path : `/${path}`}`;
}