/**
 * PHASE E: OFF-PAGE AUTHORITY PROFILE LINKS (sameAs scaffolding)
 *
 * Paste your VERIFIED profile URLs below as you create them (Google Business
 * Profile, Bing Places, legal directories, law college pages, professional
 * social profiles). Every URL you add is injected into the Schema.org
 * JSON-LD graph of all 306 static guide pages as `sameAs` references,
 * which strengthens entity association for Google & AI search engines.
 *
 * RULES:
 * - Full absolute URL starting with https://
 * - Only add profiles you control and that are publicly visible
 * - Leave the arrays EMPTY to keep schema output unchanged (safe no-op)
 */

export interface AuthorityProfile {
  /** Human-readable label, e.g. 'Google Business Profile' */
  label: string;
  /** Full https:// URL of the public profile */
  url: string;
}

/**
 * Profiles of the BUSINESS ENTITY (Lexipulse Technologies / NyayaMitra):
 * Google Business Profile, Bing Places, Justdial, Sulekha, business
 * directories, official social pages.
 */
export const ORGANIZATION_PROFILES: AuthorityProfile[] = [
  // Examples (uncomment and replace with your real URLs):
  // { label: 'Google Business Profile', url: 'https://g.page/r/YOUR_GBP_ID' },
  // { label: 'Bing Places', url: 'https://www.bing.com/maps?ssType=YourListing' },
];

/**
 * Profiles of the ADVOCATE (Adv. Tanweer Ahmed Khan, WB/1863/2010):
 * legal directory listings (Justia, LawRato, Vakilsearch, SoOLEGAL,
 * LawyersClubIndia), bar association pages, LinkedIn, university pages.
 */
export const ADVOCATE_PROFILES: AuthorityProfile[] = [
  // Examples (uncomment and replace with your real URLs):
  // { label: 'Justia Lawyer Directory', url: 'https://lawyers.justia.com/lawyer/...' },
  // { label: 'LawRato', url: 'https://lawrato.com/advocate-...' },
];

const VALID_URL_RE = /^https:\/\/[^\s'"<>]+$/i;

function toSameAsList(profiles: AuthorityProfile[]): string[] {
  const seen = new Set<string>();
  const urls: string[] = [];
  for (const p of profiles) {
    const u = String(p?.url || '').trim();
    if (u && VALID_URL_RE.test(u) && !seen.has(u)) {
      seen.add(u);
      urls.push(u);
    }
  }
  return urls;
}

/** sameAs URLs for the Organization (Lexipulse / NyayaMitra). [] when unset. */
export function getOrganizationSameAs(): string[] {
  return toSameAsList(ORGANIZATION_PROFILES);
}

/** sameAs URLs for the Advocate (Tanweer Ahmed Khan). [] when unset. */
export function getAdvocateSameAs(): string[] {
  return toSameAsList(ADVOCATE_PROFILES);
}
