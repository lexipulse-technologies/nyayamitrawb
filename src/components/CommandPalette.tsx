import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Search,
  BookOpen,
  Compass,
  ExternalLink,
  ArrowRight,
  X,
  Command,
  CornerDownLeft
} from 'lucide-react';
import { CIVIL_CATEGORIES } from '../data/civilLegalData';
import type { Language, CivilSubCategory } from '../types/legal';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onSelectWorkflow: (categoryId: string, subcategory: CivilSubCategory) => void;
}

const PALETTE_TEXT = {
  placeholder: {
    bn: '১২টি সরকারি পোর্টাল বা ৩০০টি আইনি বিষয় খুঁজুন (Ctrl+K)...',
    hi: '12 सरकारी पोर्टल या 300 कानूनी विषय खोजें (Ctrl+K)...',
    en: 'Search 12 government portals or 300 civil workflows (Ctrl+K)...'
  },
  sectionPortals: {
    bn: '১২টি যাচাইকৃত সরকারি ও বিচারিক পোর্টাল',
    hi: '12 आधिकारिक सरकारी एवं न्यायिक पोर्टल',
    en: '12 Verified Government & Judicial Gateways'
  },
  sectionCategories: {
    bn: 'দেওয়ানি বিরোধের ৬টি প্রধান ক্ষেত্র (ক্যাটাগরি নির্বাচন করুন)',
    hi: 'दीवानी विवाद के 6 मुख्य क्षेत्र (श्रेणी चुनें)',
    en: '6 Core Civil Legal Categories (Select to View 50 Workflows)'
  },
  sectionWorkflows: {
    bn: 'নির্বাচিত ক্যাটাগরির অন্তর্ভুক্ত ৫০টি কার্যপ্রণালী (Workflows)',
    hi: 'चयनित श्रेणी की 50 कानूनी प्रक्रियाएं (Workflows)',
    en: '50 Procedural Workflows for Selected Category'
  },
  searchResultsHeading: {
    bn: 'অনুসন্ধানের ফলাফল',
    hi: 'खोज परिणाम',
    en: 'Search Results'
  },
  noResults: {
    bn: 'কোনো ফলাফল মেলেনি',
    hi: 'कोई परिणाम नहीं मिला',
    en: 'No matching portals or legal topics found'
  },
  shortcutHint: {
    bn: 'নেভিগেট করতে ক্লিক করুন অথবা Esc চেপে বন্ধ করুন',
    hi: 'नेविगेट करने हेतु क्लिक करें या Esc दबाएं',
    en: 'Click any link to navigate • Press Esc to close'
  }
};

const ALL_12_PORTALS = [
  { id: 'p-kmc', name: 'Kolkata Municipal Corporation (KMC)', url: 'https://www.kmcgov.in/', scope: 'Kolkata Metro' },
  { id: 'p-banglarbhumi', name: 'Banglarbhumi (Govt of West Bengal)', url: 'https://banglarbhumi.gov.in/', scope: '22 Districts Land' },
  { id: 'p-wblrtt', name: 'WB Land Reforms & Tenancy Tribunal (WBLRTT)', url: 'https://wblrtt.wb.gov.in/', scope: 'Land Tribunal' },
  { id: 'p-wbpcb', name: 'WB Pollution Control Board (WBPCB)', url: 'https://www.wbpcb.gov.in/', scope: 'Environment' },
  { id: 'p-bmc', name: 'Bidhannagar Municipal Corporation (BMC)', url: 'https://www.bmcwbgov.in/', scope: 'Salt Lake' },
  { id: 'p-hmc', name: 'Howrah Municipal Corporation (HMC)', url: 'https://myhmc.in/', scope: 'Howrah City' },
  { id: 'p-highcourt', name: 'High Court at Calcutta', url: 'https://calcuttahighcourt.gov.in/', scope: 'State High Court' },
  { id: 'p-wbrera', name: 'West Bengal Real Estate Regulatory Authority (WBRERA)', url: 'https://rera.wb.gov.in/', scope: 'Real Estate' },
  { id: 'p-ejagriti', name: 'National Consumer e-Filing (e-Jagriti)', url: 'https://e-jagriti.gov.in/', scope: 'Consumer Court' },
  { id: 'p-ecourts', name: 'e-Courts Services (District Courts)', url: 'https://ecourts.gov.in/', scope: 'District Courts' },
  { id: 'p-cybercrime', name: 'National Cyber Crime Portal (1930)', url: 'https://cybercrime.gov.in/', scope: 'Cyber Fraud' },
  { id: 'p-swid', name: 'State Water Investigation Directorate (SWID)', url: 'https://wbwridd.gov.in/', scope: 'Groundwater' }
];

export const CommandPalette: React.FC<Props> = ({
  isOpen,
  onClose,
  lang,
  onSelectWorkflow
}) => {
  const [query, setQuery] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(CIVIL_CATEGORIES[0]?.id || 'cat-land-mutation');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
    }
  }, [isOpen]);

  // Active category object
  const activeCategory = useMemo(() => {
    return CIVIL_CATEGORIES.find(c => c.id === selectedCategoryId) || CIVIL_CATEGORIES[0];
  }, [selectedCategoryId]);

  // Portals filtered by query
  const filteredPortals = useMemo(() => {
    if (!query.trim()) return ALL_12_PORTALS;
    const q = query.toLowerCase().trim();
    return ALL_12_PORTALS.filter(p => p.name.toLowerCase().includes(q) || p.scope.toLowerCase().includes(q));
  }, [query]);

  // Workflows search across all 300 if query is typed
  const searchMatchedWorkflows = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    const results: { categoryId: string; subcategory: CivilSubCategory }[] = [];

    for (const cat of CIVIL_CATEGORIES) {
      for (const sub of cat.subcategories) {
        const title = (sub.title[lang] || sub.title.en || '').toLowerCase();
        const act = (sub.relevant_act || '').toLowerCase();
        const keywords = (sub.search_keywords?.[lang] || sub.search_keywords?.en || []).map(k => k.toLowerCase());

        if (title.includes(q) || act.includes(q) || keywords.some(k => k.includes(q))) {
          results.push({ categoryId: cat.id, subcategory: sub });
          if (results.length >= 15) break;
        }
      }
      if (results.length >= 15) break;
    }
    return results;
  }, [query, lang]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-start justify-center pt-8 sm:pt-14 p-3 sm:p-4 animate-in fade-in duration-150 select-none"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl bg-[#0a1e34] border-2 border-amber-400/50 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[88vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Header Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-slate-700/80 bg-[#071626]">
          <Search className="w-5 h-5 text-amber-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={PALETTE_TEXT.placeholder[lang]}
            className="w-full bg-transparent text-white placeholder-slate-400 text-xs sm:text-sm font-medium focus:outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-800 border border-slate-700 rounded shadow-xs mr-2">
              ESC
            </kbd>
          )}
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition"
            title="Close Palette"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-3 sm:p-4 space-y-5 text-xs">

          {/* MODE A: If User is Typing a Search Query */}
          {query.trim() ? (
            <div className="space-y-4">
              {/* Filtered Portals */}
              {filteredPortals.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5" />
                    <span>{PALETTE_TEXT.sectionPortals[lang]} ({filteredPortals.length})</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {filteredPortals.map(portal => (
                      <a
                        key={portal.id}
                        href={portal.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-sky-400 transition flex items-center justify-between gap-2 group"
                      >
                        <div className="min-w-0">
                          <div className="font-semibold text-white truncate text-xs group-hover:text-sky-300">
                            {portal.name}
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono truncate">{portal.url}</div>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-400 shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched Workflows */}
              {searchMatchedWorkflows.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{PALETTE_TEXT.searchResultsHeading[lang]} ({searchMatchedWorkflows.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {searchMatchedWorkflows.map(({ categoryId, subcategory }) => (
                      <div
                        key={subcategory.id}
                        onClick={() => {
                          onSelectWorkflow(categoryId, subcategory);
                          onClose();
                        }}
                        className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-emerald-950/50 border border-slate-700/80 hover:border-emerald-400 cursor-pointer transition flex items-center justify-between gap-3 group"
                      >
                        <div className="min-w-0">
                          <div className="font-semibold text-white group-hover:text-emerald-300 truncate text-xs">
                            {subcategory.title[lang] || subcategory.title.en}
                          </div>
                          <div className="text-[10px] text-slate-400 truncate">{subcategory.relevant_act}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {filteredPortals.length === 0 && searchMatchedWorkflows.length === 0 && (
                <div className="py-12 text-center text-slate-400 space-y-1.5">
                  <Search className="w-6 h-6 text-slate-500 mx-auto" />
                  <p className="text-xs font-semibold">{PALETTE_TEXT.noResults[lang]}</p>
                </div>
              )}
            </div>
          ) : (
            /* MODE B: Default Overview (12 Gateways + 6 Categories with Auto-Populated 50 Workflows) */
            <>
              {/* 1. All 12 Verified Government Gateways */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5" />
                    {PALETTE_TEXT.sectionPortals[lang]} (12)
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Direct Official Links</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {ALL_12_PORTALS.map(portal => (
                    <a
                      key={portal.id}
                      href={portal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-900/70 hover:bg-slate-800 border border-slate-700/70 hover:border-sky-400 transition flex items-center justify-between gap-2 group"
                    >
                      <div className="min-w-0">
                        <div className="font-semibold text-white text-[11px] truncate group-hover:text-sky-300">
                          {portal.name}
                        </div>
                        <span className="text-[9.5px] font-semibold text-slate-400 uppercase tracking-wider">
                          {portal.scope}
                        </span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-400 shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

              {/* 2. All 6 Core Categories (Interactive Selector Pills) */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  {PALETTE_TEXT.sectionCategories[lang]}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1.5">
                  {CIVIL_CATEGORIES.map(cat => {
                    const isSelected = cat.id === selectedCategoryId;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setSelectedCategoryId(cat.id)}
                        className={`p-2 rounded-xl border text-center transition flex flex-col items-center justify-center gap-1 ${
                          isSelected
                            ? 'bg-gradient-to-b from-amber-500 to-amber-600 text-slate-950 font-bold border-amber-300 shadow-md ring-2 ring-amber-400/40'
                            : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:border-amber-400/60 hover:text-white'
                        }`}
                      >
                        <span className="text-[10.5px] leading-tight line-clamp-2">
                          {cat.title[lang] || cat.title.en}
                        </span>
                        <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded-full ${
                          isSelected ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-amber-300'
                        }`}>
                          50 Topics
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Auto-Populated 50 Workflows for the Selected Category */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{PALETTE_TEXT.sectionWorkflows[lang]}:</span>
                    <strong className="text-white normal-case font-bold ml-1">
                      {activeCategory?.title[lang] || activeCategory?.title.en}
                    </strong>
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">50 Procedural Steps</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-64 overflow-y-auto pr-1">
                  {(activeCategory?.subcategories || []).map((sub, idx) => (
                    <div
                      key={sub.id}
                      onClick={() => {
                        onSelectWorkflow(activeCategory.id, sub);
                        onClose();
                      }}
                      className="p-2.5 rounded-xl bg-slate-900/60 hover:bg-emerald-950/40 border border-slate-800 hover:border-emerald-400 cursor-pointer transition flex items-center justify-between gap-2.5 group"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="w-5 h-5 rounded-md bg-slate-800 text-amber-300 font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <div className="min-w-0">
                          <div className="font-semibold text-white text-[11px] truncate group-hover:text-emerald-300">
                            {sub.title[lang] || sub.title.en}
                          </div>
                          <div className="text-[9.5px] text-slate-400 truncate">{sub.relevant_act}</div>
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer Shortcut Navigation Hints */}
        <div className="px-4 py-2.5 bg-[#071626] border-t border-slate-800 text-[10.5px] text-slate-400 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <Command className="w-3 h-3 text-slate-400" />
            <span>{PALETTE_TEXT.shortcutHint[lang]}</span>
          </span>
          <span className="font-mono text-amber-300 font-bold">NyayaMitra Universal Directory</span>
        </div>
      </div>
    </div>
  );
};