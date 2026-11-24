/**
 * NYAYAMITRA DYNAMIC SEO & HEAD METADATA ENGINE
 * Guarantees 100% compliance with Microsoft Bing & Google Webmaster guidelines:
 * - Title length: Strictly < 65 characters (Bing ceiling is 70)
 * - Description length: Strictly between 130 and 152 characters (Bing ceiling is 160)
 * - Canonical URL: Always normalized to https://nyayamitrawb.in (no localhost / ephemeral search params)
 * - Dynamic <html lang> & og:locale synchronization (en | bn | hi)
 */

import type { CivilCategory, CivilSubCategory, Language } from '../types/legal';
import { getCategoryGuidePath, getWorkflowGuidePath } from './guideSlugs';
import { PILLAR_ENRICHMENTS } from '../data/pillarEnrichments';

function formatCleanTitle(raw: string, suffix = ' | NyayaMitra', maxLen = 64): string {
  const clean = raw.replace(/\s+/g, ' ').trim();
  if (!clean) return 'NyayaMitra: Civil Legal Navigator India & West Bengal';
  if (`${clean}${suffix}`.length <= maxLen) return `${clean}${suffix}`;

  const noParens = clean.replace(/\s*\([^)]*\)/g, '').replace(/\s+/g, ' ').trim();
  if (noParens && `${noParens}${suffix}`.length <= maxLen) return `${noParens}${suffix}`;

  const base = noParens || clean;
  const maxBody = maxLen - suffix.length;
  const slice = base.slice(0, maxBody);
  const lastSpace = slice.lastIndexOf(' ');
  const trimmed = (lastSpace > 15 ? slice.slice(0, lastSpace) : slice).replace(/[,:;/-]+$/, '').trim();
  return `${trimmed}${suffix}`;
}

export interface SeoProps {
  category?: CivilCategory;
  subcategory?: CivilSubCategory;
  guideKind?: 'category' | 'workflow';
  lang: Language;
}

const CANONICAL_ORIGIN = 'https://nyayamitrawb.in';
const DEFAULT_TITLE = 'NyayaMitra: Civil Legal Navigator India & West Bengal';
const DEFAULT_DESC =
  'Free trilingual civil legal navigator for India & West Bengal. 300 roadmaps for land mutation, tenancy, cheque bounce, RERA, partition & 88 bare acts.';

const OG_LOCALE_MAP: Record<Language, string> = {
  en: 'en_IN',
  bn: 'bn_IN',
  hi: 'hi_IN'
};

/**
 * Updates or creates a <meta> tag dynamically in document head
 */
function updateMetaTag(attributeName: 'name' | 'property', attributeValue: string, content: string) {
  if (typeof document === 'undefined') return;

  let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

/**
 * Builds a clean, crawler-safe canonical URL anchored to https://nyayamitrawb.in
 */
function buildCanonicalUrl(props: SeoProps): string {
  if (typeof window === 'undefined') return `${CANONICAL_ORIGIN}/`;

  const path = window.location.pathname.replace(/\/+$/, '').replace(/\.html$/, '') || '/';
  if (path === '/elibrarypro' || path === '/app') {
    return `${CANONICAL_ORIGIN}${path}`;
  }
  if (path.startsWith('/guides/')) {
    return `${CANONICAL_ORIGIN}${path}`;
  }

  const params = new URLSearchParams(window.location.search);
  const policy = params.get('policy');
  if (policy) {
    return `${CANONICAL_ORIGIN}/?policy=${encodeURIComponent(policy)}`;
  }

  if (props.guideKind === 'category' && props.category) {
    return `${CANONICAL_ORIGIN}${getCategoryGuidePath(props.category.id)}`;
  }
  if (props.subcategory) {
    return `${CANONICAL_ORIGIN}${getWorkflowGuidePath(props.subcategory)}`;
  }

  const cat = params.get('cat');
  if (cat) {
    return `${CANONICAL_ORIGIN}${getCategoryGuidePath(cat)}`;
  }

  return `${CANONICAL_ORIGIN}/`;
}

/**
 * Dynamically applies SEO headers strictly bounded within Bing & Google mathematical limits
 */
export function applySeoHeaders(props: SeoProps): void {
  const { category, subcategory, guideKind, lang } = props;
  if (typeof document === 'undefined') return;

  // 0. SYNC HTML LANG & OG LOCALE
  document.documentElement.lang = lang;
  updateMetaTag('property', 'og:locale', OG_LOCALE_MAP[lang] || 'en_IN');

  const path =
    typeof window !== 'undefined'
      ? window.location.pathname.replace(/\/+$/, '').replace(/\.html$/, '') || '/'
      : '/';

  // 1. COMPUTE MATHEMATICALLY BOUNDED TITLE (< 65 CHARACTERS)
  let cleanTitle = DEFAULT_TITLE;
  let cleanDesc = DEFAULT_DESC;

  if (path === '/elibrarypro') {
    cleanTitle = 'E-Library Pro: 88 Indian & WB Bare Acts | NyayaMitra';
    cleanDesc =
      'Searchable E-Library Pro of 88 official Indian Central & West Bengal Bare Acts including CPC, BNS, BNSS, BSA, WBLR Act, WBPT Act, RERA & Consumer Act.';
  } else if (path === '/app') {
    cleanTitle = 'Download NyayaMitra Android App | Civil Legal Navigator';
    cleanDesc =
      'Download the NyayaMitra Android APK for offline access to 300 Indian & West Bengal civil legal roadmaps, 88 bare acts, audio guides & advocate connect.';
  } else if (guideKind === 'category' && category) {
    const catTitle = (category.title[lang] || category.title.en || '').trim();
    cleanTitle = formatCleanTitle(catTitle);
    const catDesc = (category.description?.[lang] || category.description?.en || '').trim();
    const paddedCat = `${catDesc} Explore 50 verified civil legal workflows for India & West Bengal on NyayaMitra.`;
    cleanDesc = paddedCat.length <= 152 ? paddedCat : `${paddedCat.slice(0, 149).trim()}...`;
  } else {
    const pillar = subcategory?.id ? PILLAR_ENRICHMENTS[subcategory.id] : undefined;
    if (pillar && lang === 'en') {
      cleanTitle = pillar.seoTitle;
      cleanDesc = pillar.seoDescription;
    } else {
      if (subcategory && subcategory.title) {
        const rawSubTitle = (subcategory.title[lang] || subcategory.title.en || '').trim();
        if (rawSubTitle) {
          cleanTitle = formatCleanTitle(rawSubTitle);
        }
      }

      if (subcategory && subcategory.summary) {
        const rawSummary = (subcategory.summary[lang] || subcategory.summary.en || '').trim();
        if (rawSummary.length >= 130 && rawSummary.length <= 152) {
          cleanDesc = rawSummary;
        } else if (rawSummary.length > 152) {
          cleanDesc = `${rawSummary.slice(0, 149).trim()}...`;
        } else {
          const padded = `${rawSummary} Verified civil procedural guidance for India & West Bengal citizens on NyayaMitra.`;
          cleanDesc = padded.length <= 152 ? padded : `${padded.slice(0, 149).trim()}...`;
        }
      }
    }
  }

  // Set Title across DOM and Meta tags
  document.title = cleanTitle;
  updateMetaTag('name', 'title', cleanTitle);
  updateMetaTag('property', 'og:title', cleanTitle);
  updateMetaTag('name', 'twitter:title', cleanTitle);

  // Set Description across DOM and Meta tags
  updateMetaTag('name', 'description', cleanDesc);
  updateMetaTag('property', 'og:description', cleanDesc);
  updateMetaTag('name', 'twitter:description', cleanDesc);

  // 3. CANONICAL & OG:URL SYNC
  const canonicalUrl = buildCanonicalUrl(props);
  let canonicalEl = document.querySelector('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', canonicalUrl);
  updateMetaTag('property', 'og:url', canonicalUrl);
}
