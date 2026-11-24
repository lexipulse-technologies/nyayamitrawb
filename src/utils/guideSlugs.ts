/**
 * Deterministic SEO Slug & Route Resolver for all 6 Categories + 300 Workflows.
 * Pure TypeScript (zero DOM/React dependencies) so both client SPA and build-time SSG share identical URLs.
 */

import type { CivilCategory, CivilSubCategory } from '../types/legal';

export const CATEGORY_SLUG_MAP: Record<string, string> = {
  'cat-land-mutation': 'land-records-mutation-west-bengal',
  'cat-tenancy-disputes': 'tenancy-premises-disputes-west-bengal',
  'cat-consumer-rights': 'consumer-rights-wbrera-west-bengal',
  'cat-partition-succession': 'partition-succession-probate-west-bengal',
  'cat-money-recovery': 'money-recovery-cheque-bounce-india',
  'cat-family-maintenance': 'family-maintenance-divorce-india'
};

const SLUG_TO_CATEGORY_ID: Record<string, string> = Object.fromEntries(
  Object.entries(CATEGORY_SLUG_MAP).map(([id, slug]) => [slug, id])
);

export function slugifyText(input: string, maxLen = 68): string {
  const cleaned = input
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  if (cleaned.length <= maxLen) return cleaned;
  const cut = cleaned.slice(0, maxLen);
  const lastDash = cut.lastIndexOf('-');
  return lastDash > 20 ? cut.slice(0, lastDash) : cut;
}

export function getCategorySlug(categoryId: string): string {
  return CATEGORY_SLUG_MAP[categoryId] || slugifyText(categoryId);
}

export function getWorkflowSlug(sub: Pick<CivilSubCategory, 'id' | 'title'>): string {
  const titleSlug = slugifyText(sub.title?.en || sub.id, 62);
  return titleSlug ? `${sub.id}-${titleSlug}` : sub.id;
}

export function getCategoryGuidePath(categoryId: string): string {
  return `/guides/${getCategorySlug(categoryId)}`;
}

export function getWorkflowGuidePath(sub: Pick<CivilSubCategory, 'id' | 'title'>): string {
  return `/guides/${getWorkflowSlug(sub)}`;
}

export interface ResolvedGuideRoute {
  kind: 'category' | 'workflow';
  category: CivilCategory;
  subcategory: CivilSubCategory;
  canonicalPath: string;
}

/**
 * Resolves a pathname like /guides/<slug> to its exact CivilCategory & CivilSubCategory.
 */
export function resolveGuidePath(
  pathname: string,
  categories: CivilCategory[]
): ResolvedGuideRoute | null {
  const clean = pathname.replace(/\/+$/, '');
  if (!clean.startsWith('/guides/')) return null;

  const slug = clean.slice('/guides/'.length).replace(/\.html$/, '');
  if (!slug) return null;

  // 1. Check Category Hub slugs
  const catId = SLUG_TO_CATEGORY_ID[slug];
  if (catId) {
    const foundCat = categories.find(c => c.id === catId);
    if (foundCat && foundCat.subcategories.length > 0) {
      return {
        kind: 'category',
        category: foundCat,
        subcategory: foundCat.subcategories[0],
        canonicalPath: getCategoryGuidePath(foundCat.id)
      };
    }
  }

  // 2. Check Workflow slugs (match exact slug or sub-<cat>-<num> prefix)
  for (const cat of categories) {
    for (const sub of cat.subcategories) {
      if (getWorkflowSlug(sub) === slug || slug.startsWith(`${sub.id}-`) || slug === sub.id) {
        return {
          kind: 'workflow',
          category: cat,
          subcategory: sub,
          canonicalPath: getWorkflowGuidePath(sub)
        };
      }
    }
  }

  return null;
}
