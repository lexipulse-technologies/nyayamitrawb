/**
 * NYAYAMITRA GA4 (G-R2SM6KN55T) SPA ANALYTICS ENGINE
 * Tracks virtual page views across SPA routes & 300 civil workflows,
 * engagement events, and ₹99 / ₹499 service conversion funnels.
 */

import { Capacitor } from '@capacitor/core';
import type { Language } from '../types/legal';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export type ServiceCheckoutType = 'notice_draft_99' | 'advocate_connect_499';

function getPlatformTag(): 'android_app' | 'web' {
  try {
    return Capacitor.isNativePlatform() ? 'android_app' : 'web';
  } catch {
    return 'web';
  }
}

function sendGtagEvent(eventName: string, params: Record<string, any> = {}): void {
  if (typeof window === 'undefined') return;
  try {
    const payload = {
      ...params,
      platform: getPlatformTag()
    };
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, payload);
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push(['event', eventName, payload]);
    }
  } catch {
    /* analytics must never interrupt UX */
  }
}

export function trackPageView(path: string, title: string, lang: Language): void {
  if (typeof window === 'undefined') return;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  sendGtagEvent('page_view', {
    page_path: cleanPath,
    page_title: title,
    page_location: `https://nyayamitrawb.in${cleanPath}`,
    language: lang
  });
}

export function trackWorkflowSelect(params: {
  categoryId: string;
  topicId: string;
  topicTitle: string;
  lang: Language;
  source: 'category_grid' | 'workflow_pill' | 'search_result' | 'command_palette';
}): void {
  sendGtagEvent('select_workflow', {
    category_id: params.categoryId,
    topic_id: params.topicId,
    topic_title: params.topicTitle,
    language: params.lang,
    navigation_source: params.source
  });
}

export function trackSearch(searchTerm: string, resultsCount: number, lang: Language): void {
  const trimmed = searchTerm.trim();
  if (trimmed.length < 2) return;
  sendGtagEvent('search', {
    search_term: trimmed.slice(0, 100),
    results_count: resultsCount,
    language: lang
  });
}

export function trackLanguageSwitch(lang: Language): void {
  sendGtagEvent('language_switch', { language: lang });
}

export function trackTrackSwitch(track: 'rural_district' | 'kolkata_urban', topicId?: string): void {
  sendGtagEvent('territory_track_switch', {
    territory_track: track,
    topic_id: topicId || ''
  });
}

export function trackPortalClick(portalId: string, portalName: string, portalUrl: string): void {
  sendGtagEvent('portal_click', {
    portal_id: portalId,
    portal_name: portalName,
    outbound_url: portalUrl
  });
}

export function trackTtsPlay(topicId: string, lang: Language): void {
  sendGtagEvent('tts_play', {
    topic_id: topicId,
    language: lang
  });
}

export function trackElibraryOpenAct(actId: string, actName: string, folder: string): void {
  sendGtagEvent('elibrary_open_act', {
    act_id: actId,
    act_name: actName.slice(0, 100),
    act_folder: folder
  });
}

export function trackApkDownload(version: string, downloadUrl: string): void {
  sendGtagEvent('apk_download_click', {
    app_version: version,
    download_url: downloadUrl
  });
}

export function trackBeginCheckout(
  serviceType: ServiceCheckoutType,
  value: 99 | 499,
  topicTitle?: string
): void {
  sendGtagEvent('begin_checkout', {
    currency: 'INR',
    value,
    items: [
      {
        item_id: serviceType,
        item_name:
          serviceType === 'notice_draft_99'
            ? 'Pro Statutory Notice Drafting'
            : 'Advocate Connect 60-Min Consultation',
        item_category: topicTitle || 'Civil Legal Service',
        price: value,
        quantity: 1
      }
    ]
  });
}

export function trackPurchase(
  transactionId: string,
  serviceType: ServiceCheckoutType,
  value: 99 | 499,
  topicTitle?: string
): void {
  sendGtagEvent('purchase', {
    transaction_id: transactionId,
    currency: 'INR',
    value,
    items: [
      {
        item_id: serviceType,
        item_name:
          serviceType === 'notice_draft_99'
            ? 'Pro Statutory Notice Drafting'
            : 'Advocate Connect 60-Min Consultation',
        item_category: topicTitle || 'Civil Legal Service',
        price: value,
        quantity: 1
      }
    ]
  });
}
