/**
 * NYAYAMITRA BUILD-TIME STATIC GUIDE GENERATOR (SSG)
 * Post-build script run after `vite build`:
 * - Pre-renders 6 Category Hub pages + all 300 Civil Workflow pages under dist/guides/<slug>.html
 * - Pre-renders dist/elibrarypro.html (88 Bare Acts) & dist/app.html
 * - Regenerates public/sitemap.xml & dist/sitemap.xml with all 314 verified URLs
 * - Preserves Vite hashed JS/CSS bundle tags so React hydrates seamlessly into the exact topic!
 */

import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import esbuild from 'esbuild';

const ROOT_DIR = process.cwd();
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const GUIDES_DIR = path.join(DIST_DIR, 'guides');
const CACHE_DIR = path.join(ROOT_DIR, 'node_modules', '.cache');
const TEMP_ENTRY = path.join(CACHE_DIR, 'ssg-data-entry.ts');
const TEMP_BUNDLE = path.join(CACHE_DIR, 'ssg-data-bundle.mjs');

const ORIGIN = 'https://nyayamitrawb.in';
const LASTMOD = '2026-11-17';

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeXml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function boundTitle(raw, suffix = ' | NyayaMitra', maxLen = 64) {
  const clean = String(raw || '').replace(/\s+/g, ' ').trim();
  if (!clean) return `NyayaMitra: Civil Legal Navigator India & West Bengal`;
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

function boundDesc(raw, fallbackExtra = 'Verified civil legal roadmap for India & West Bengal.') {
  const clean = String(raw || '').replace(/\s+/g, ' ').trim();
  if (clean.length >= 120 && clean.length <= 155) return clean;
  if (clean.length > 155) return `${clean.slice(0, 152).trim()}...`;
  const combined = clean ? `${clean} ${fallbackExtra}` : fallbackExtra;
  return combined.length <= 155 ? combined : `${combined.slice(0, 152).trim()}...`;
}

async function loadDataViaEsbuild() {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
  fs.writeFileSync(
    TEMP_ENTRY,
    `export { CIVIL_CATEGORIES } from '../../src/data/civilLegalData';
     export { ELIBRARY_PDFS } from '../../src/data/elibraryCatalog';
     export { PILLAR_ENRICHMENTS } from '../../src/data/pillarEnrichments';
     export { getOrganizationSameAs, getAdvocateSameAs } from '../../src/data/authorityProfiles';
     export { getCategoryGuidePath, getWorkflowGuidePath, CATEGORY_SLUG_MAP } from '../../src/utils/guideSlugs';\n`,
    'utf8'
  );

  await esbuild.build({
    entryPoints: [TEMP_ENTRY],
    outfile: TEMP_BUNDLE,
    bundle: true,
    format: 'esm',
    platform: 'node',
    logLevel: 'silent'
  });

  const mod = await import(`${pathToFileURL(TEMP_BUNDLE).href}?t=${Date.now()}`);
  return mod;
}

function extractShellParts(distIndexHtml) {
  // Extract verification + GA4 + Clarity + Vite hashed asset tags from dist/index.html
  const headEnd = distIndexHtml.indexOf('</head>');
  const faviconIdx = distIndexHtml.indexOf('<!-- Safe URL-Encoded SVG Favicon -->');
  const titleIdx = distIndexHtml.indexOf('<title>');
  const rootEndScriptIdx = distIndexHtml.indexOf('<!-- PWA Service Worker:');

  if (headEnd === -1 || faviconIdx === -1 || titleIdx === -1 || rootEndScriptIdx === -1) {
    throw new Error('Could not parse dist/index.html shell markers for SSG generation.');
  }

  const preTitleHead = distIndexHtml.slice(0, titleIdx);
  const faviconToJsonLd = distIndexHtml.slice(
    faviconIdx,
    distIndexHtml.indexOf('<!-- Schema.org JSON-LD Structured Data Graph')
  );
  const viteAssetsStart = distIndexHtml.indexOf('<script type="module"');
  const viteHeadAssets = viteAssetsStart !== -1 ? distIndexHtml.slice(viteAssetsStart, headEnd) : '';
  const bodyClosingScripts = distIndexHtml.slice(rootEndScriptIdx);

  return { preTitleHead, faviconToJsonLd, viteHeadAssets, bodyClosingScripts };
}

function renderPage({
  shell,
  title,
  description,
  keywords,
  canonicalUrl,
  jsonLdGraph,
  rootHtml
}) {
  const safeTitle = escapeHtml(title);
  const safeDesc = escapeHtml(description);
  const safeKeywords = escapeHtml(keywords);
  const safeCanonical = escapeHtml(canonicalUrl);
  const jsonLd = JSON.stringify({ '@context': 'https://schema.org', '@graph': jsonLdGraph });

  return `${shell.preTitleHead}<title>${safeTitle}</title>
    <meta name="title" content="${safeTitle}" />
    <meta name="description" content="${safeDesc}" />
    <meta name="keywords" content="${safeKeywords}" />
    <meta name="author" content="LEXIPULSE TECHNOLOGIES" />
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <link rel="canonical" href="${safeCanonical}" />
    <link rel="alternate" type="text/plain" title="LLM Context Guide" href="https://nyayamitrawb.in/llms.txt" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${safeCanonical}" />
    <meta property="og:title" content="${safeTitle}" />
    <meta property="og:description" content="${safeDesc}" />
    <meta property="og:image" content="https://nyayamitrawb.in/assets/hero-banner.webp" />
    <meta property="og:locale" content="en_IN" />
    <meta property="og:site_name" content="NyayaMitra" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${safeTitle}" />
    <meta name="twitter:description" content="${safeDesc}" />
    <meta name="twitter:image" content="https://nyayamitrawb.in/assets/hero-banner.webp" />
    <meta name="geo.region" content="IN-WB" />
    <meta name="geo.placename" content="Kolkata, West Bengal, India" />
    ${shell.faviconToJsonLd}
    <script type="application/ld+json">${jsonLd}</script>
    ${shell.viteHeadAssets}
  </head>
  <body class="bg-slate-50 text-slate-900 font-sans antialiased selection:bg-amber-400 selection:text-slate-950">
    <div id="root">
      ${rootHtml}
    </div>
    ${shell.bodyClosingScripts}`;
}

async function main() {
  if (!fs.existsSync(path.join(DIST_DIR, 'index.html'))) {
    throw new Error('dist/index.html not found. Run vite build first.');
  }

  const distIndexHtml = fs.readFileSync(path.join(DIST_DIR, 'index.html'), 'utf8');
  const shell = extractShellParts(distIndexHtml);
  const {
    CIVIL_CATEGORIES,
    ELIBRARY_PDFS,
    PILLAR_ENRICHMENTS,
    getOrganizationSameAs,
    getAdvocateSameAs,
    getCategoryGuidePath,
    getWorkflowGuidePath
  } = await loadDataViaEsbuild();

  const orgSameAs = getOrganizationSameAs();
  const advSameAs = getAdvocateSameAs();

  fs.mkdirSync(GUIDES_DIR, { recursive: true });

  const sitemapEntries = [
    { loc: `${ORIGIN}/`, changefreq: 'daily', priority: '1.0', hreflang: true },
    { loc: `${ORIGIN}/elibrarypro`, changefreq: 'weekly', priority: '0.95', hreflang: true },
    { loc: `${ORIGIN}/app`, changefreq: 'weekly', priority: '0.85', hreflang: true }
  ];

  let generatedCount = 0;

  // 1. Generate 6 Category Hub Pages + 300 Workflow Pages
  for (const cat of CIVIL_CATEGORIES) {
    const catPath = getCategoryGuidePath(cat.id);
    const catCanonical = `${ORIGIN}${catPath}`;
    const catFile = path.join(DIST_DIR, `${catPath.slice(1)}.html`);
    const catTitleEn = cat.title.en;
    const catDescEn = cat.description.en;

    const hubLinksHtml = cat.subcategories
      .map((sub, idx) => {
        const wPath = getWorkflowGuidePath(sub);
        return `<li style="margin:6px 0;"><a href="${escapeHtml(wPath)}" style="color:#0f2b48;font-weight:600;">${idx + 1}. ${escapeHtml(sub.title.en)}</a> <span style="color:#64748b;">(${escapeHtml(sub.relevant_act)})</span></li>`;
      })
      .join('\n');

    const otherCatsNav = CIVIL_CATEGORIES.map(
      (c) =>
        `<a href="${escapeHtml(getCategoryGuidePath(c.id))}" style="color:#93c5fd;margin:0 8px;">${escapeHtml(c.title.en)}</a>`
    ).join(' ');

    const catGraph = [
      {
        '@type': 'CollectionPage',
        '@id': `${catCanonical}#collection`,
        url: catCanonical,
        name: `${catTitleEn} | NyayaMitra India & West Bengal`,
        description: catDescEn,
        inLanguage: ['en-IN', 'bn-IN', 'hi-IN']
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${catCanonical}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
          { '@type': 'ListItem', position: 2, name: catTitleEn, item: catCanonical }
        ]
      }
    ];

    const catRootHtml = `
      <header style="padding:20px 16px;background:#0a1e34;color:#fff;text-align:center;">
        <nav aria-label="Breadcrumb" style="font-size:12px;margin-bottom:8px;">
          <a href="/" style="color:#fcd34d;">NyayaMitra Home</a> &rsaquo; <span>${escapeHtml(catTitleEn)}</span>
        </nav>
        <h1 style="font-size:22px;font-weight:800;margin:0;">${escapeHtml(catTitleEn)}</h1>
        <p style="font-size:13px;color:#cbd5e1;max-width:800px;margin:8px auto 0;">${escapeHtml(catDescEn)}</p>
        <nav aria-label="All Civil Categories" style="margin-top:12px;font-size:12px;">${otherCatsNav}</nav>
      </header>
      <main style="max-width:960px;margin:20px auto;padding:0 16px;font-family:sans-serif;font-size:13px;color:#334155;">
        <h2 style="font-size:17px;color:#0f2b48;">${cat.subcategories.length} Verified Civil Legal Guides (${escapeHtml(cat.title.bn)} | ${escapeHtml(cat.title.hi)})</h2>
        <ol style="padding-left:20px;">${hubLinksHtml}</ol>
      </main>`;

    fs.writeFileSync(
      catFile,
      renderPage({
        shell,
        title: boundTitle(catTitleEn),
        description: boundDesc(catDescEn, '50 verified civil legal workflows for India & West Bengal.'),
        keywords: `${catTitleEn}, ${cat.title.bn}, ${cat.title.hi}, West Bengal civil legal guide, India civil law, NyayaMitra`,
        canonicalUrl: catCanonical,
        jsonLdGraph: catGraph,
        rootHtml: catRootHtml
      }),
      'utf8'
    );
    generatedCount++;

    sitemapEntries.push({
      loc: catCanonical,
      changefreq: 'weekly',
      priority: '0.95',
      hreflang: false
    });

    // Individual 50 workflows in this category
    for (let i = 0; i < cat.subcategories.length; i++) {
      const sub = cat.subcategories[i];
      const wPath = getWorkflowGuidePath(sub);
      const wCanonical = `${ORIGIN}${wPath}`;
      const wFile = path.join(DIST_DIR, `${wPath.slice(1)}.html`);

      const stepsEn = sub.dual_path
        ? [
            ...(sub.dual_path.rural_district?.steps?.en || []),
            ...(sub.dual_path.kolkata_urban?.steps?.en || [])
          ]
        : sub.roadmap_steps?.en || [];

      const forumEn = sub.dual_path
        ? `${sub.dual_path.rural_district?.authority?.en || ''} / ${sub.dual_path.kolkata_urban?.authority?.en || ''}`
        : sub.authority_forum?.en || 'Civil Court / Competent Authority';

      const timeframeEn = sub.dual_path
        ? sub.dual_path.rural_district?.statutory_timeframe?.en ||
          sub.statutory_timeframe?.en ||
          'As per statutory timeline'
        : sub.statutory_timeframe?.en || 'As per statutory timeline';

      const kws = [
        sub.title.en,
        sub.title.bn,
        sub.title.hi,
        sub.relevant_act,
        ...(sub.search_keywords?.en || []),
        ...(sub.search_keywords?.bn || []).slice(0, 4),
        ...(sub.search_keywords?.hi || []).slice(0, 4),
        'West Bengal civil law',
        'India legal roadmap',
        'NyayaMitra'
      ]
        .filter(Boolean)
        .join(', ');

      const relatedNeighbors = [
        cat.subcategories[i - 2],
        cat.subcategories[i - 1],
        cat.subcategories[i + 1],
        cat.subcategories[i + 2]
      ].filter(Boolean);

      const relatedHtml = relatedNeighbors
        .map(
          (r) =>
            `<li><a href="${escapeHtml(getWorkflowGuidePath(r))}" style="color:#0f2b48;">${escapeHtml(r.title.en)}</a></li>`
        )
        .join('');

      const stepsListHtml = (sub.dual_path
        ? `<h3>Rural &amp; 22 West Bengal Districts Procedure (${escapeHtml(sub.dual_path.rural_district?.authority?.en || '')})</h3>
           <ol>${(sub.dual_path.rural_district?.steps?.en || []).map((s) => `<li>${escapeHtml(s)}</li>`).join('')}</ol>
           <h3>Kolkata Urban &amp; Metro Procedure (${escapeHtml(sub.dual_path.kolkata_urban?.authority?.en || '')})</h3>
           <ol>${(sub.dual_path.kolkata_urban?.steps?.en || []).map((s) => `<li>${escapeHtml(s)}</li>`).join('')}</ol>`
        : `<h2>Step-by-Step Procedural Roadmap</h2>
           <ol>${(sub.roadmap_steps?.en || []).map((s) => `<li>${escapeHtml(s)}</li>`).join('')}</ol>`);

      const docsListHtml = (sub.required_documents || [])
        .map(
          (d) =>
            `<li><strong>${escapeHtml(d.name?.en || '')}</strong> — Issued by: ${escapeHtml(d.issuing_authority?.en || '')}</li>`
        )
        .join('');

      const reviewerId = `${ORIGIN}/#advocate-reviewer`;
      const enrMeta = PILLAR_ENRICHMENTS?.[sub.id];
      const workflowGraph = [
        {
          '@type': 'Person',
          '@id': reviewerId,
          name: 'Advocate Tanweer Ahmed Khan',
          jobTitle: 'Advocate (Bar Council ID: WB/1863/2010)',
          affiliation: {
            '@type': 'Organization',
            name: 'High Court at Calcutta & West Bengal District Courts'
          },
          ...(advSameAs.length ? { sameAs: advSameAs } : {})
        },
        {
          '@type': 'WebPage',
          '@id': `${wCanonical}#webpage`,
          url: wCanonical,
          name: sub.title.en,
          inLanguage: ['en-IN', 'bn-IN', 'hi-IN'],
          dateModified: LASTMOD,
          reviewedBy: { '@id': reviewerId },
          mainEntity: { '@id': `${wCanonical}#article` }
        },
        {
          '@type': 'Article',
          '@id': `${wCanonical}#article`,
          headline: sub.title.en,
          description: sub.summary.en,
          mainEntityOfPage: wCanonical,
          inLanguage: ['en-IN', 'bn-IN', 'hi-IN'],
          dateModified: LASTMOD,
          author: {
            '@type': 'Organization',
            name: 'LEXIPULSE TECHNOLOGIES',
            url: `${ORIGIN}/`,
            ...(orgSameAs.length ? { sameAs: orgSameAs } : {})
          },
          editor: { '@id': reviewerId },
          publisher: {
            '@type': 'Organization',
            name: 'LEXIPULSE TECHNOLOGIES',
            url: `${ORIGIN}/`,
            ...(orgSameAs.length ? { sameAs: orgSameAs } : {})
          },
          about: sub.relevant_act
        },
        {
          '@type': 'HowTo',
          '@id': `${wCanonical}#howto`,
          name: sub.title.en,
          description: sub.summary.en,
          step: stepsEn.slice(0, 10).map((text, idx) => ({
            '@type': 'HowToStep',
            position: idx + 1,
            name: `Step ${idx + 1}`,
            text
          }))
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${wCanonical}#breadcrumb`,
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
            { '@type': 'ListItem', position: 2, name: catTitleEn, item: catCanonical },
            { '@type': 'ListItem', position: 3, name: sub.title.en, item: wCanonical }
          ]
        },
        ...(enrMeta?.faqs?.length
          ? [
              {
                '@type': 'FAQPage',
                '@id': `${wCanonical}#faq`,
                mainEntity: enrMeta.faqs.map((f) => ({
                  '@type': 'Question',
                  name: f.question,
                  acceptedAnswer: { '@type': 'Answer', text: f.answer }
                }))
              }
            ]
          : [])
      ];

      const workflowRootHtml = `
        <header style="padding:20px 16px;background:#0a1e34;color:#fff;">
          <nav aria-label="Breadcrumb" style="max-width:960px;margin:0 auto 8px;font-size:12px;">
            <a href="/" style="color:#fcd34d;">NyayaMitra Home</a> &rsaquo;
            <a href="${escapeHtml(catPath)}" style="color:#93c5fd;">${escapeHtml(catTitleEn)}</a> &rsaquo;
            <span>${escapeHtml(sub.title.en)}</span>
          </nav>
          <div style="max-width:960px;margin:0 auto;">
            <h1 style="font-size:22px;font-weight:800;margin:0;">${escapeHtml(sub.title.en)}</h1>
            <p style="font-size:13px;color:#cbd5e1;margin:8px 0 0;">${escapeHtml(sub.summary.en)}</p>
            <p style="font-size:12px;color:#94a3b8;margin:6px 0 0;">
              <strong>Act:</strong> ${escapeHtml(sub.relevant_act)} &bull;
              <strong>Forum:</strong> ${escapeHtml(forumEn)} &bull;
              <strong>Timeline:</strong> ${escapeHtml(timeframeEn)}
            </p>
            <p style="font-size:11px;color:#6ee7b7;margin:6px 0 0;">
              Reviewed by Advocate Tanweer Ahmed Khan (Bar Council ID: WB/1863/2010) &bull; Last Verified: Nov 2026
            </p>
          </div>
        </header>
        <main style="max-width:960px;margin:20px auto;padding:0 16px;font-family:sans-serif;font-size:13px;color:#334155;line-height:1.6;">
          <section>
            <p><strong>বাংলা:</strong> ${escapeHtml(sub.title.bn)} — ${escapeHtml(sub.summary.bn)}</p>
            <p><strong>हिन्दी:</strong> ${escapeHtml(sub.title.hi)} — ${escapeHtml(sub.summary.hi)}</p>
          </section>
          <section>${stepsListHtml}</section>
          <section>
            <h2>Required Documents Checklist</h2>
            <ul>${docsListHtml}</ul>
          </section>
          ${sub.official_portal_url ? `<p>Official Portal: <a href="${escapeHtml(sub.official_portal_url)}" rel="noopener noreferrer">${escapeHtml(sub.official_portal_url)}</a></p>` : ''}
          ${(() => {
            const enr = PILLAR_ENRICHMENTS?.[sub.id];
            if (!enr) return '';
            const casesHtml = enr.landmarkCases
              .map(
                (c) =>
                  `<li><strong>${escapeHtml(c.citation)}</strong> (<em>${escapeHtml(c.court)}</em>): ${escapeHtml(c.holding)}</li>`
              )
              .join('');
            const feesHtml = enr.courtFeeAndLimitation
              .map(
                (r) =>
                  `<tr><td style="border:1px solid #cbd5e1;padding:6px 8px;">${escapeHtml(r.stage)}</td><td style="border:1px solid #cbd5e1;padding:6px 8px;">${escapeHtml(r.feeNote)}</td><td style="border:1px solid #cbd5e1;padding:6px 8px;">${escapeHtml(r.limitation)}</td></tr>`
              )
              .join('');
            const remHtml = enr.remediesAgainstRejection
              .map(
                (rem) =>
                  `<li><strong>${escapeHtml(rem.scenario)}</strong> &rarr; <em>${escapeHtml(rem.forum)}</em> (${escapeHtml(rem.provision)}, Time Limit: ${escapeHtml(rem.timeLimit)})</li>`
              )
              .join('');
            return `
              ${enr.executiveSummary ? `<section>
                <h2>Quick Answer (Reviewed by Advocate)</h2>
                <p style="background:#fef9c3;border:1px solid #fde68a;border-left:4px solid #f59e0b;padding:10px 14px;border-radius:8px;font-weight:600;color:#1e293b;">${escapeHtml(enr.executiveSummary)}</p>
              </section>` : ''}
              <section>
                <h2>Landmark Supreme Court &amp; High Court Citations</h2>
                <ul>${casesHtml}</ul>
              </section>
              <section>
                <h2>Statutory Court Fees &amp; Limitation Timelines (West Bengal &amp; India)</h2>
                <table style="width:100%;border-collapse:collapse;font-size:12px;">
                  <thead>
                    <tr style="background:#f1f5f9;">
                      <th style="border:1px solid #cbd5e1;padding:6px 8px;text-align:left;">Stage / Forum</th>
                      <th style="border:1px solid #cbd5e1;padding:6px 8px;text-align:left;">Prescribed Fee (WB Court-fees / Rules)</th>
                      <th style="border:1px solid #cbd5e1;padding:6px 8px;text-align:left;">Limitation / Statutory Window</th>
                    </tr>
                  </thead>
                  <tbody>${feesHtml}</tbody>
                </table>
              </section>
              <section>
                <h2>Remedies Against Rejection &amp; Statutory Appeals</h2>
                <ul>${remHtml}</ul>
              </section>
              ${enr.faqs?.length ? `<section>
                <h2>Frequently Asked Questions (FAQ)</h2>
                ${enr.faqs
                  .map(
                    (f) =>
                      `<details style="margin:8px 0;border:1px solid #cbd5e1;border-radius:8px;padding:8px 12px;background:#fff;"><summary style="font-weight:700;cursor:pointer;color:#0f2b48;">${escapeHtml(f.question)}</summary><p style="margin:8px 0 0;color:#334155;">${escapeHtml(f.answer)}</p></details>`
                  )
                  .join('\n')}
              </section>` : ''}`;
          })()}
          <section>
            <h2>Related ${escapeHtml(catTitleEn)} Guides</h2>
            <ul>
              <li><a href="${escapeHtml(catPath)}">All 50 ${escapeHtml(catTitleEn)} Workflows</a></li>
              ${relatedHtml}
            </ul>
          </section>
        </main>`;

      fs.writeFileSync(
        wFile,
        renderPage({
          shell,
          title: enrMeta ? enrMeta.seoTitle : boundTitle(sub.title.en),
          description: enrMeta
            ? enrMeta.seoDescription
            : boundDesc(sub.summary.en, `${sub.relevant_act} procedural guide for India & West Bengal.`),
          keywords: kws,
          canonicalUrl: wCanonical,
          jsonLdGraph: workflowGraph,
          rootHtml: workflowRootHtml
        }),
        'utf8'
      );
      generatedCount++;

      sitemapEntries.push({
        loc: wCanonical,
        changefreq: 'monthly',
        priority: '0.85',
        hreflang: false
      });
    }
  }

  // 2. Generate dist/elibrarypro.html (88 Bare Acts)
  const elibCanonical = `${ORIGIN}/elibrarypro`;
  const actsListHtml = ELIBRARY_PDFS.map(
    (p) => `<li><strong>${escapeHtml(p.displayName.en)}</strong> (${escapeHtml(p.topFolder)}) — ${escapeHtml(p.displayName.bn)} | ${escapeHtml(p.displayName.hi)}</li>`
  ).join('\n');

  fs.writeFileSync(
    path.join(DIST_DIR, 'elibrarypro.html'),
    renderPage({
      shell,
      title: 'E-Library Pro: 88 Indian & WB Bare Acts | NyayaMitra',
      description:
        'Searchable E-Library Pro of 88 official Indian Central & West Bengal Bare Acts including CPC, BNS, BNSS, BSA, WBLR Act, WBPT Act, RERA & Consumer Act.',
      keywords:
        'Indian Bare Acts PDF, West Bengal Bare Acts, CPC 1908, BNS 2023, BNSS 2023, BSA 2023, WBLR Act 1955, WBPT Act 1997, RERA 2016, Consumer Protection Act 2019, NyayaMitra E-Library Pro',
      canonicalUrl: elibCanonical,
      jsonLdGraph: [
        {
          '@type': 'CollectionPage',
          '@id': `${elibCanonical}#collection`,
          url: elibCanonical,
          name: 'NyayaMitra E-Library Pro — 88 Official Bare Acts',
          description: 'Searchable archive of 70 Central Acts, 14 West Bengal State Acts, and 4 Statutory Rules.',
          inLanguage: ['en-IN', 'bn-IN', 'hi-IN']
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${elibCanonical}#breadcrumb`,
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
            { '@type': 'ListItem', position: 2, name: 'E-Library Pro', item: elibCanonical }
          ]
        }
      ],
      rootHtml: `
        <header style="padding:20px 16px;background:#0a1e34;color:#fff;text-align:center;">
          <h1 style="font-size:22px;font-weight:800;margin:0;">E-Library Pro: ${ELIBRARY_PDFS.length} Indian &amp; West Bengal Bare Acts</h1>
          <p style="font-size:13px;color:#cbd5e1;margin:8px auto 0;">Official Central Statutes, West Bengal State Acts, and Statutory Rules in English, বাংলা &amp; हिन्दी.</p>
        </header>
        <main style="max-width:960px;margin:20px auto;padding:0 16px;font-family:sans-serif;font-size:13px;color:#334155;">
          <ol>${actsListHtml}</ol>
        </main>`
    }),
    'utf8'
  );

  // 3. Generate dist/app.html
  const appCanonical = `${ORIGIN}/app`;
  fs.writeFileSync(
    path.join(DIST_DIR, 'app.html'),
    renderPage({
      shell,
      title: 'Download NyayaMitra Android App | Civil Legal Navigator',
      description:
        'Download the NyayaMitra Android APK for offline access to 300 Indian & West Bengal civil legal roadmaps, 88 bare acts, audio guides & advocate connect.',
      keywords: 'NyayaMitra Android APK, civil legal app India, West Bengal legal app download, Lexipulse Technologies',
      canonicalUrl: appCanonical,
      jsonLdGraph: [
        {
          '@type': 'SoftwareApplication',
          '@id': `${appCanonical}#software`,
          name: 'NyayaMitra — Civil Legal Navigator',
          operatingSystem: 'Android 7.0+',
          applicationCategory: 'ReferenceApplication',
          url: appCanonical,
          downloadUrl: 'https://github.com/lexipulse-technologies/nyayamitrawb/releases/download/v1.0.0/NyayaMitra-v1.0.0.apk',
          softwareVersion: '1.0.0',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' }
        }
      ],
      rootHtml: `
        <header style="padding:20px 16px;background:#0a1e34;color:#fff;text-align:center;">
          <h1 style="font-size:22px;font-weight:800;margin:0;">Download NyayaMitra Android App (v1.0.0)</h1>
          <p style="font-size:13px;color:#cbd5e1;margin:8px auto 0;">Offline civil legal roadmaps across 23 West Bengal districts, 88 bare acts &amp; audio guides.</p>
        </header>
        <main style="max-width:720px;margin:24px auto;padding:0 16px;text-align:center;font-family:sans-serif;">
          <p><a href="https://github.com/lexipulse-technologies/nyayamitrawb/releases/download/v1.0.0/NyayaMitra-v1.0.0.apk">Download NyayaMitra-v1.0.0.apk</a></p>
          <p><a href="/">Return to NyayaMitra Home</a></p>
        </main>`
    }),
    'utf8'
  );

  // 4. Policy URLs in sitemap
  for (const policy of ['pricing', 'terms', 'privacy', 'refund', 'contact']) {
    sitemapEntries.push({
      loc: `${ORIGIN}/?policy=${policy}`,
      changefreq: 'monthly',
      priority: '0.7',
      hreflang: false
    });
  }

  // 5. Write complete sitemap.xml to both public/ and dist/
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapEntries
  .map((u) => {
    const escapedLoc = escapeXml(u.loc);
    const xhtmlLinks = u.hreflang
      ? `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${escapedLoc}"/>\n    <xhtml:link rel="alternate" hreflang="en" href="${escapedLoc}?lang=en"/>\n    <xhtml:link rel="alternate" hreflang="bn" href="${escapedLoc}?lang=bn"/>\n    <xhtml:link rel="alternate" hreflang="hi" href="${escapedLoc}?lang=hi"/>`
      : '';
    return `  <url>\n    <loc>${escapedLoc}</loc>\n    <lastmod>${LASTMOD}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>${xhtmlLinks}\n  </url>`;
  })
  .join('\n')}
</urlset>
`;

  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml, 'utf8');
  fs.writeFileSync(path.join(ROOT_DIR, 'public', 'sitemap.xml'), sitemapXml, 'utf8');

  // Cleanup temporary esbuild files
  try {
    fs.unlinkSync(TEMP_ENTRY);
    fs.unlinkSync(TEMP_BUNDLE);
  } catch {
    /* ignore */
  }

  console.log(`✅ SSG Complete: ${generatedCount} guide pages + elibrarypro.html + app.html`);
  console.log(`✅ Sitemap Updated: ${sitemapEntries.length} URLs in public/sitemap.xml & dist/sitemap.xml`);
}

main().catch((err) => {
  console.error('❌ SSG Generation failed:', err);
  process.exit(1);
});
