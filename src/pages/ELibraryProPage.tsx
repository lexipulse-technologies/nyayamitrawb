/**
 * NyayaMitra E-Library Pro — Standalone Page Body (/elibrarypro)
 *
 * Rendered by App.tsx inside the SAME header/footer as the main landing page,
 * so header images/text and footer text are identical by construction.
 *
 * Features:
 *  - Researched trilingual description (civil legal awareness mission)
 *  - Library Map (tree diagram mirroring STATUTES on-disk structure)
 *  - Folder tree browse with FULL PDF file naming convention
 *  - Trilingual search across acts + keywords
 *  - Secure reader: double-click opens; desktop uses the browser-native PDF
 *    viewer (<iframe> with #toolbar=0), mobile falls back to lazily-loaded
 *    PDF.js canvas rendering (browsers like Chrome/UC/DuckDuckGo on Android
 *    cannot inline PDFs natively). Download / copy / paste / context menu
 *    are disabled at the application layer.
 */

import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import {
  Search,
  X,
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  FileText,
  Folder,
  FolderOpen,
  BookOpen,
  ShieldCheck,
  Scale,
  Loader2,
  AlertTriangle,
  ZoomIn,
  ZoomOut,
  ChevronUp,
  Library,
  Landmark,
  Gavel,
  ScrollText,
  Home,
  BookOpenText,
  Lock
} from 'lucide-react';
import { ELIBRARY_PDFS } from '../data/elibraryCatalog';
import type { ELibraryPDF } from '../data/elibraryCatalog';
import type { Language } from '../types/legal';
import { trackElibraryOpenAct } from '../utils/analytics';

interface ELibraryProPageProps {
  lang: Language;
  onBackToMain: () => void;
}


// ============================================================================
// TRILINGUAL UI TEXT
// ============================================================================

export const ELIBRARY_HERO_UI = {
  title: { en: 'E-LIBRARY PRO', bn: 'ই-লাইব্রেরি প্রো', hi: 'ई-लाइब्रेरी प्रो' },
  tagline: {
    en: 'Genuine Digital Statute Library for Civil Legal Awareness',
    bn: 'দেওয়ানি আইনি সচেতনতার জন্য প্রামাণিক ডিজিটাল আইন গ্রন্থাগার',
    hi: 'नागरिक कानूनी जागरूकता हेतु प्रामाणिक डिजिटल विधि पुस्तकालय'
  },
  subtitle: {
    en: '88 Official Central & West Bengal Bare Acts sourced from India Code — Secure Read-Only Viewer',
    bn: 'ইন্ডিয়া কোড থেকে সংগৃহীত ৮৮টি অফিসিয়াল কেন্দ্রীয় ও পশ্চিমবঙ্গ আইন — সুরক্ষিত রিডার',
    hi: 'इंडिया कोड से प्राप्त 88 आधिकारिक केंद्रीय व पश्चिम बंगाल अधिनियम — सुरक्षित रीडर'
  },
  backToMain: {
    en: 'Back to Main Page',
    bn: 'মূল পাতায় ফিরুন',
    hi: 'मुख्य पृष्ठ पर लौटें'
  },
  badges: {
    acts: { en: '88 Official Bare Acts', bn: '৮৮টি অফিসিয়াল আইন', hi: '88 आधिकारिक अधिनियम' },
    source: { en: 'Sourced from India Code', bn: 'ইন্ডিয়া কোড থেকে সংগৃহীত', hi: 'इंडिया कोड से प्राप्त' },
    genuine: { en: '100% Genuine & Verified', bn: 'সম্পূর্ণ প্রামাণিক ও যাচাইকৃত', hi: 'पूर्णतः प्रामाणिक और सत्यापित' },
    secure: { en: 'Secure Read-Only Viewer', bn: 'সুরক্ষিত শুধুমাত্র-পাঠযোগ্য রিডার', hi: 'सुरक्षित केवल-पठनीय रीडर' },
    trilingual: { en: 'English / বাংলা / हिन्दी', bn: 'English / বাংলা / हिन्दी', hi: 'English / বাংলা / हिन्दी' }
  }
};

const UI_TEXT = {
  ...ELIBRARY_HERO_UI,
  p1: {
    en: 'NyayaMitra presents E-Library Pro — a genuine, curated digital library of 88 official bare acts, rules and regulations that shape everyday civil life in West Bengal and across India. From the new criminal codes (BNS, BNSS & BSA 2023) and the Code of Civil Procedure, 1908, to West Bengal\u2019s land reforms, tenancy, municipal and family laws, every document here is the authentic text sourced from India Code — the official portal of the Legislative Department, Ministry of Law & Justice, Government of India.',
    bn: 'ন্যায়মিত্র উপস্থাপন করছে ই-লাইব্রেরি প্রো — পশ্চিমবঙ্গ ও সমগ্র ভারতের দৈনন্দিন দেওয়ানি জীবনকে রূপ দেওয়া ৮৮টি অফিসিয়াল খাঁটি আইন, বিধি ও বিনিয়মের এক প্রামাণিক, যত্নে নির্বাচিত ডিজিটাল গ্রন্থাগার। নতুন ফৌজদারি সংহিতা (বিএনএস, বিএনএসএস ও বিএসএ ২০২৩) এবং দেওয়ানি কার্যবিধি, ১৯০৮ থেকে শুরু করে পশ্চিমবঙ্গের ভূমি সংস্কার, প্রজাস্বত্ব, পৌর ও পারিবারিক আইন পর্যন্ত — এখানের প্রতিটি নথি ভারত সরকারের আইন মন্ত্রকের আইন বিভাগের অফিসিয়াল পোর্টাল ইন্ডিয়া কোড থেকে সংগৃহীত প্রামাণিক পাঠ।',
    hi: 'न्यायमित्र प्रस्तुत करता है ई-लाइब्रेरी प्रो — पश्चिम बंगाल और सम्पूर्ण भारत में दैनिक नागरिक जीवन को आकार देने वाले 88 आधिकारिक मूल अधिनियमों, नियमों और विनियमों का एक प्रामाणिक, सावधानीपूर्वक चुना हुआ डिजिटल पुस्तकालय। नए आपराधिक संहिताओं (बीएनएस, बीएनएसएस और बीएसए 2023) तथा सिविल प्रक्रिया संहिता, 1908 से लेकर पश्चिम बंगाल के भूमि सुधार, किरायेदारी, नगरपालिका और पारिवारिक कानूनों तक — यहाँ का प्रत्येक दस्तावेज़ भारत सरकार के विधि मंत्रालय के विधायी विभाग के आधिकारिक पोर्टल इंडिया कोड से प्राप्त प्रामाणिक पाठ है।'
  },
  p2: {
    en: 'Built for citizens, students, litigants and young advocates, the library turns dense legal texts into an organised, searchable knowledge base mapped to NyayaMitra\u2019s 300 civil workflows across six categories. Know the exact section, the exact act and the exact words of the law that protect your rights — before a dispute ever begins, and confidently while one is underway.',
    bn: 'নাগরিক, ছাত্রছাত্রী, মামলাজীবী ও তরুণ আইনজীবীদের জন্য তৈরি, এই গ্রন্থাগার ঘন আইনি পাঠকে সুসংগঠিত, অনুসন্ধানযোগ্য জ্ঞানভান্ডারে রূপ দেয় — ন্যায়মিত্রের ছয়টি বিভাগে বিস্তৃত ৩০০টি দেওয়ানি ওয়ার্কফ্লোর সঙ্গে সমন্বিত। আপনার অধিকার রক্ষাকারী সঠিক ধারা, সঠিক আইন ও আইনের সঠিক শব্দগুলো জানুন — বিরোধ শুরু হওয়ার আগেই, এবং চলাকালীনও আত্মবিশ্বাসের সঙ্গে।',
    hi: 'नागरिकों, छात्रों, वादियों और युवा अधिवक्ताओं के लिए निर्मित, यह पुस्तकालय सघन कानूनी पाठों को एक सुसंगठित, खोजयोग्य ज्ञान-आधार में बदलता है — न्यायमित्र के छह श्रेणियों में फैले 300 नागरिक वर्कफ़्लो से संबद्ध। अपने अधिकारों की रक्षा करने वाली सही धारा, सही अधिनियम और कानून के सही शब्द जानिए — विवाद शुरू होने से पहले ही, और चलते समय भी पूरे आत्मविश्वास के साथ।'
  },
  p3: {
    en: 'Every document opens in a secure, read-only viewer: downloading, copying and pasting are disabled to honour copyright and preserve the integrity of the official texts.',
    bn: 'প্রতিটি নথি একটি সুরক্ষিত, শুধুমাত্র-পাঠযোগ্য রিডারে খোলে: কপিরাইট সম্মান ও অফিসিয়াল পাঠের অখণ্ডতা রক্ষার জন্য ডাউনলোড, কপি ও পেস্ট নিষ্ক্রিয়।',
    hi: 'प्रत्येक दस्तावेज़ एक सुरक्षित, केवल-पठनीय रीडर में खुलता है: कॉपीराइट का सम्मान और आधिकारिक पाठ की अखंडता बनाए रखने के लिए डाउनलोड, कॉपी और पेस्ट अक्षम हैं।'
  },
  badges: {
    acts: { en: '88 Official Bare Acts', bn: '৮৮টি অফিসিয়াল আইন', hi: '88 आधिकारिक अधिनियम' },
    source: { en: 'Sourced from India Code', bn: 'ইন্ডিয়া কোড থেকে সংগৃহীত', hi: 'इंडिया कोड से प्राप्त' },
    genuine: { en: '100% Genuine & Verified', bn: 'সম্পূর্ণ প্রামাণিক ও যাচাইকৃত', hi: 'पूर्णतः प्रामाणिक और सत्यापित' },
    secure: { en: 'Secure Read-Only Viewer', bn: 'সুরক্ষিত শুধুমাত্র-পাঠযোগ্য রিডার', hi: 'सुरक्षित केवल-पठनीय रीडर' },
    trilingual: { en: 'English / বাংলা / हिन्दी', bn: 'English / বাংলা / हिन्दी', hi: 'English / बांग्ला / हिन्दी' }
  },
  mapTitle: { en: 'Library Map — STATUTES Structure', bn: 'গ্রন্থাগার মানচিত্র — স্ট্যাটিউটস কাঠামো', hi: 'पुस्तकालय मानचित्र — स्टैच्यूट्स संरचना' },
  mapHint: {
    en: 'Tap any category below the map to browse its folders and files.',
    bn: 'মানচিত্রের নিচের যেকোনো বিভাগে ট্যাপ করে ফোল্ডার ও ফাইল দেখুন।',
    hi: 'नक्शे के नीचे किसी भी श्रेणी पर टैप करें और फ़ोल्डर व फ़ाइलें देखें।'
  },
  browseTitle: { en: 'Browse the Library', bn: 'গ্রন্থাগার ব্রাউজ করুন', hi: 'पुस्तकालय ब्राउज़ करें' },
  searchPlaceholder: {
    en: 'Search 88 acts — e.g. tenancy, partition, cheque, mutation...',
    bn: '৮৮টি আইন খুঁজুন — যেমন প্রজাস্বত্ব, বিভাজন, চেক...',
    hi: '88 अधिनियम खोजें — जैसे किरायेदारी, विभाजन, चेक...'
  },
  allFiles: { en: 'All Documents', bn: 'সমস্ত নথি', hi: 'सभी दस्तावेज़' },
  filesIn: { en: 'Files', bn: 'ফাইল', hi: 'फ़ाइलें' },
  resultsFor: { en: 'Results for', bn: 'এর ফলাফল', hi: 'के परिणाम' },
  noResults: { en: 'No documents matched your search.', bn: 'আপনার অনুসন্ধানে কোনো নথি মেলেনি।', hi: 'आपकी खोज से कोई दस्तावेज़ मेल नहीं खाया।' },
  doubleClickHint: {
    en: 'Double-click a document to open the secure reader',
    bn: 'সুরক্ষিত রিডার খুলতে নথিতে ডাবল-ক্লিক করুন',
    hi: 'सुरक्षित रीडर खोलने के लिए दस्तावेज़ पर डबल-क्लिक करें'
  },
  readBtn: { en: 'Read', bn: 'পড়ুন', hi: 'पढ़ें' },
  readerClose: { en: 'Close Reader', bn: 'রিডার বন্ধ করুন', hi: 'रीडर बंद करें' },
  backToLibrary: { en: 'Back to Library', bn: 'গ্রন্থাগারে ফিরে যান', hi: 'पुस्तकालय पर वापस जाएं' },
  backToMain: { en: 'Back to Main Page', bn: 'মূল পাতায় ফিরে যান', hi: 'मुख्य पृष्ठ पर वापस जाएं' },
  readerProtected: {
    en: '🔒 Secure Viewer — download, copy & paste disabled for copyright protection',
    bn: '🔒 সুরক্ষিত রিডার — কপিরাইট রক্ষার্থে ডাউনলোড, কপি ও পেস্ট নিষিদ্ধ',
    hi: '🔒 सुरक्षित रीडर — कॉपीराइट सुरक्षा हेतु डाउनलोड, कॉपी व पेस्ट अक्षम'
  },
  pageOf: { en: 'Page', bn: 'পৃষ্ঠা', hi: 'पृष्ठ' },
  loadingDoc: { en: 'Loading document...', bn: 'নথি লোড হচ্ছে...', hi: 'दस्तावेज़ लोड हो रहा है...' },
  loadError: {
    en: 'This document could not be displayed. Please check your connection and try again.',
    bn: 'এই নথিটি প্রদর্শন করা যায়নি। সংযোগ পরীক্ষা করে আবার চেষ্টা করুন।',
    hi: 'यह दस्तावेज़ प्रदर्शित नहीं हो सका। कृपया कनेक्शन जाँचें और पुनः प्रयास करें।'
  },
  forthcoming: { en: 'Forthcoming', bn: 'শীঘ্রই আসছে', hi: 'शीघ्र आ रहा है' }
} as const;

// ============================================================================
// FOLDER TREE — mirrors the on-disk STATUTES structure exactly
// ============================================================================

interface FolderNode {
  id: string;
  diskName: string;
  path: string;
  label: Record<Language, string>;
  children: FolderNode[];
  pdfs: ELibraryPDF[];
}

const FRIENDLY_FOLDER_LABELS: Record<string, Record<Language, string>> = {
  Central_Acts: { en: 'Central Acts', bn: 'কেন্দ্রীয় আইন', hi: 'केंद्रीय अधिनियम' },
  Criminal_Law_2023: { en: 'Criminal Law 2023 — BNS, BNSS, BSA', bn: 'ফৌজদারি আইন ২০২৩ — বিএনএস, বিএনএসএস, বিএসএ', hi: 'आपराधिक कानून 2023 — बीएनएस, बीएनएसएस, बीएसए' },
  Civil_Procedure: { en: 'Civil Procedure — CPC, Limitation, SRA, Registration', bn: 'দেওয়ানি কার্যবিধি — সিপিসি, সময়সীমা, প্রতিকার, নিবন্ধন', hi: 'सिविल प्रक्रिया — सीपीसी, परिसीमा, अनुतोष, पंजीकरण' },
  Property_Law: { en: 'Property Law — TP Act, Easements, Stamp, Trusts', bn: 'সম্পত্তি আইন — টিপি অ্যাক্ট, ভোগাধিকার, স্ট্যাম্প, ট্রাস্ট', hi: 'संपत्ति कानून — टीपी एक्ट, भोगाधिकार, स्टाम्प, ट्रस्ट' },
  Family_Law: { en: 'Family Law — HMA, HSA, ISA, GWA, PWDVA', bn: 'পারিবারিক আইন — এইচএমএ, এইচএসএ, আইএসএ, জিডব্লিউএ', hi: 'पारिवारिक कानून — एचएमए, एचएसए, आईएसए, जीडब्ल्यूए' },
  Commercial_Law: { en: 'Commercial Law — Contract, NI Act, IBC, SARFAESI', bn: 'বাণিজ্যিক আইন — চুক্তি, এনআই অ্যাক্ট, আইবিসি, সারফেসি', hi: 'वाणिज्यिक कानून — अनुबंध, एनआई एक्ट, आईबीसी, सारफेसी' },
  Consumer_Protection: { en: 'Consumer Protection — CPA 2019, RERA, IT Act', bn: 'উপভোক্তা সুরক্ষা — সিপিএ ২০১৯, রেরা, আইটি অ্যাক্ট', hi: 'उपभोक्ता संरक्षण — सीपीए 2019, रेरा, आईटी एक्ट' },
  West_Bengal_Acts: { en: 'West Bengal Acts', bn: 'পশ্চিমবঙ্গ আইন', hi: 'पश्चिम बंगाल अधिनियम' },
  Land_Reforms: { en: 'Land Reforms — WBLR, Bhudan, Trees, Ground Water', bn: 'ভূমি সংস্কার — ডব্লিউবিএলআর, ভূদান, বৃক্ষ, ভূগর্ভস্থ জল', hi: 'भूमि सुधार — डब्ल्यूबीएलआर, भूदान, वृक्ष, भूजल' },
  Tenancy: { en: 'Tenancy — WBPT 1997, Thika 2001, Slum', bn: 'প্রজাস্বত্ব — ডব্লিউবিপিটি ১৯৯৭, ঠিকা ২০০১, বস্তি', hi: 'किरायेदारी — डब्ल्यूबीपीटी 1997, ठिका 2001, झुग्गी' },
  Municipal: { en: 'Municipal — KMC Act, WB Municipal', bn: 'পৌর — কেএমসি অ্যাক্ট, ডব্লিউবি পৌর', hi: 'नगरपालिका — केएमसी एक्ट, डब्ल्यूबी नगरपालिका' },
  Special_Acts: { en: 'Special Acts — Apartment Ownership, Clinical Est.', bn: 'বিশেষ আইন — অ্যাপার্টমেন্ট মালিকানা, ক্লিনিক্যাল প্রতিষ্ঠান', hi: 'विशेष अधिनियम — अपार्टमेंट स्वामित्व, क्लिनिकल स्थापना' },
  Regulations_Rules: { en: 'Regulations & Rules', bn: 'বিধি ও বিনিয়ম', hi: 'विनियम और नियम' },
  IRDAI_Regulations: { en: 'IRDAI Regulations', bn: 'আইআরডিএআই বিনিয়ম', hi: 'आईआरडीएआई विनियम' },
  TRAI_Regulations: { en: 'TRAI Regulations', bn: 'ট্রাই বিনিয়ম', hi: 'ट्राई विनियम' }
};

function fallbackLabel(diskName: string): Record<Language, string> {
  return { en: diskName, bn: diskName, hi: diskName };
}

function buildFolderTree(pdfs: ELibraryPDF[]): FolderNode {
  const root: FolderNode = {
    id: 'STATUTES',
    diskName: 'STATUTES',
    path: '',
    label: { en: 'STATUTES', bn: 'স্ট্যাটিউটস', hi: 'स्टैच्यूट्स' },
    children: [],
    pdfs: []
  };

  const catOrder = ['Central_Acts', 'West_Bengal_Acts', 'Regulations_Rules', 'Judicial_Precedents'];
  const catMap = new Map<string, FolderNode>();

  for (const cat of catOrder) {
    const node: FolderNode = {
      id: cat,
      diskName: cat,
      path: cat,
      label: FRIENDLY_FOLDER_LABELS[cat] || fallbackLabel(cat),
      children: [],
      pdfs: []
    };
    catMap.set(cat, node);
    root.children.push(node);
  }

  for (const pdf of pdfs) {
    const parts = pdf.relativePath.split('/');
    if (parts.length < 2) continue;
    const catNode = catMap.get(parts[0]);
    if (!catNode) continue;

    if (parts.length === 2) {
      catNode.pdfs.push(pdf);
      continue;
    }

    const subDisk = parts[1];
    let subNode = catNode.children.find(c => c.diskName === subDisk);
    if (!subNode) {
      subNode = {
        id: `${catNode.id}__${subDisk}`,
        diskName: subDisk,
        path: `${parts[0]}/${subDisk}`,
        label: FRIENDLY_FOLDER_LABELS[subDisk] || fallbackLabel(subDisk),
        children: [],
        pdfs: []
      };
      catNode.children.push(subNode);
    }
    subNode.pdfs.push(pdf);
  }

  return root;
}

function countPdfs(node: FolderNode): number {
  return node.pdfs.length + node.children.reduce((sum, c) => sum + countPdfs(c), 0);
}

// ============================================================================
// PDF.js — bundled lazy loader (canvas rendering for ALL devices).
// Rendering pages to <canvas> means the PDF bytes are fetched via XHR and
// painted as pixels: there is NO navigation to the PDF URL, hence no browser
// download prompt in any browser (Chrome, Edge, Firefox, Safari, UC, DuckDuckGo),
// desktop or mobile. Canvas output is also inherently copy/selection-proof.
// ============================================================================

let pdfjsPromise: Promise<any> | null = null;

async function loadPdfJs(): Promise<any> {
  // pdf.js v4 relies on Promise.withResolvers, absent on some older WebViews
  const P = Promise as unknown as { withResolvers?: () => unknown };
  if (typeof P.withResolvers !== 'function') {
    (Promise as any).withResolvers = function () {
      let resolve: (v?: unknown) => void = () => undefined;
      let reject: (e?: unknown) => void = () => undefined;
      const promise = new Promise((res, rej) => {
        resolve = res as (v?: unknown) => void;
        reject = rej as (e?: unknown) => void;
      });
      return { promise, resolve, reject };
    };
  }

  if (!pdfjsPromise) {
    pdfjsPromise = Promise.all([
      import('pdfjs-dist'),
      import('pdfjs-dist/build/pdf.worker.min.mjs?url')
    ]).then(([lib, worker]) => {
      lib.GlobalWorkerOptions.workerSrc = (worker as { default: string }).default;
      return lib;
    });
  }
  return pdfjsPromise;
}

// ============================================================================
// MOBILE PDF.js CANVAS RENDERER
// ============================================================================

interface PdfJsCanvasProps {
  url: string;
  lang: Language;
  pageNum: number;
  scale: number;
  onDocLoaded: (numPages: number) => void;
  onDocError: () => void;
}

function PdfJsCanvas({ url, lang, pageNum, scale, onDocLoaded, onDocError }: PdfJsCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pdfDocRef = useRef<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const renderTaskRef = useRef<any>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(false);
    pdfDocRef.current = null;

    loadPdfJs()
      .then(lib => lib.getDocument(url, { disableAutoFetch: false }).promise)
      .then(doc => {
        if (cancelled) return;
        pdfDocRef.current = doc;
        setLoading(false);
        onDocLoaded(doc.numPages);
      })
      .catch(() => {
        if (cancelled) return;
        setLoading(false);
        setError(true);
        onDocError();
      });

    return () => {
      cancelled = true;
    };
  }, [url, onDocLoaded, onDocError]);

  useEffect(() => {
    const render = async () => {
      const doc = pdfDocRef.current;
      const canvas = canvasRef.current;
      if (!doc || !canvas || loading || error) return;
      try {
        if (renderTaskRef.current) {
          try { renderTaskRef.current.cancel(); } catch { /* noop */ }
        }
        const page = await doc.getPage(Math.max(1, Math.min(pageNum, doc.numPages)));
        const viewport = page.getViewport({ scale });
        const context = canvas.getContext('2d');
        if (!context) return;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.floor(viewport.width * dpr);
        canvas.height = Math.floor(viewport.height * dpr);
        canvas.style.width = `${Math.floor(viewport.width)}px`;
        canvas.style.height = `${Math.floor(viewport.height)}px`;
        renderTaskRef.current = page.render({
          canvasContext: context,
          viewport,
          transform: dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : undefined
        });
        await renderTaskRef.current.promise;
      } catch {
        /* render cancelled or failed — keep last page visible */
      }
    };
    render();
  }, [pageNum, scale, loading, error]);

  return (
    <div className="h-full w-full overflow-auto bg-slate-200 flex flex-col items-center py-3 select-none">
      {loading && (
        <div className="flex flex-col items-center justify-center gap-2 py-20 text-slate-500">
          <Loader2 className="w-7 h-7 animate-spin text-emerald-700" />
          <span className="text-xs font-semibold">{UI_TEXT.loadingDoc[lang]}</span>
        </div>
      )}
      {error && !loading && (
        <div className="m-6 p-4 rounded-xl bg-red-50 border-2 border-red-300 text-red-800 text-xs font-bold flex items-start gap-2 max-w-md">
          <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{UI_TEXT.loadError[lang]}</span>
        </div>
      )}
      <canvas ref={canvasRef} className="max-w-full shadow-lg bg-white" />
    </div>
  );
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

const ELibraryProPage: React.FC<ELibraryProPageProps> = ({ lang, onBackToMain }) => {
  const t = UI_TEXT;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFolderPath, setSelectedFolderPath] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ Central_Acts: true });
  const [readerPdf, setReaderPdf] = useState<ELibraryPDF | null>(null);
  const [readerPage, setReaderPage] = useState(1);
  const [readerTotal, setReaderTotal] = useState(0);
  const [readerScale, setReaderScale] = useState(1.2);
  const [readerLoadError, setReaderLoadError] = useState(false);

  const tree = useMemo(() => buildFolderTree(ELIBRARY_PDFS), []);

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return null;
    return ELIBRARY_PDFS.filter(pdf =>
      pdf.fileName.toLowerCase().includes(q) ||
      pdf.displayName[lang].toLowerCase().includes(q) ||
      pdf.displayName.en.toLowerCase().includes(q) ||
      pdf.keywords[lang].some(k => k.toLowerCase().includes(q)) ||
      pdf.keywords.en.some(k => k.toLowerCase().includes(q))
    );
  }, [searchQuery, lang]);

  const visiblePdfs = useMemo(() => {
    if (searchResults) return searchResults;
    if (!selectedFolderPath) return ELIBRARY_PDFS;
    return ELIBRARY_PDFS.filter(p => p.relativePath.startsWith(`${selectedFolderPath}/`));
  }, [searchResults, selectedFolderPath]);

  const openReader = useCallback((pdf: ELibraryPDF) => {
    // Canvas-only secure viewer: uniform behaviour in every browser,
    // zero download affordance (bytes fetched via XHR, rendered as pixels).
    setReaderPage(1);
    setReaderTotal(0);
    setReaderScale(1.2);
    setReaderLoadError(false);
    setReaderPdf(pdf);
    trackElibraryOpenAct(pdf.id, pdf.displayName.en, pdf.topFolder);
  }, []);

  const closeReader = useCallback(() => setReaderPdf(null), []);

  const handleDocLoaded = useCallback((numPages: number) => setReaderTotal(numPages), []);
  const handleDocError = useCallback(() => setReaderLoadError(true), []);

  // ---- Security guards while the reader is open ----------------------------
  useEffect(() => {
    if (!readerPdf) return;
    const onCtx = (e: MouseEvent) => e.preventDefault();
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if ((e.ctrlKey || e.metaKey) && ['c', 'x', 's', 'p', 'u'].includes(k)) {
        e.preventDefault();
      }
      if (k === 'escape') closeReader();
    };
    const onClip = (e: ClipboardEvent) => e.preventDefault();
    const onDrag = (e: DragEvent) => e.preventDefault();

    document.addEventListener('contextmenu', onCtx);
    document.addEventListener('keydown', onKey);
    document.addEventListener('copy', onClip);
    document.addEventListener('cut', onClip);
    document.addEventListener('paste', onClip);
    document.addEventListener('dragstart', onDrag);

    return () => {
      document.removeEventListener('contextmenu', onCtx);
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('copy', onClip);
      document.removeEventListener('cut', onClip);
      document.removeEventListener('paste', onClip);
      document.removeEventListener('dragstart', onDrag);
    };
  }, [readerPdf, closeReader]);

  // ---- SEO title for the standalone route ----------------------------------
  useEffect(() => {
    const prev = document.title;
    document.title = 'E-Library Pro | NyayaMitra — Genuine Digital Statute Library';
    return () => { document.title = prev; };
  }, []);

  const selectedFolder = useMemo(() => {
    if (!selectedFolderPath) return null;
    const parts = selectedFolderPath.split('/');
    let node: FolderNode | undefined = tree.children.find(c => c.diskName === parts[0]);
    for (let i = 1; i < parts.length && node; i++) {
      node = node.children.find(c => c.diskName === parts[i]);
    }
    return node || null;
  }, [selectedFolderPath, tree]);

  const toggleExpand = (id: string) =>
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  const renderFolderNode = (node: FolderNode, depth: number): React.ReactNode => {
    const isExpanded = Boolean(expanded[node.id]);
    const total = countPdfs(node);
    const isSelected = selectedFolderPath === node.path;
    const hasChildren = node.children.length > 0;

    return (
      <div key={node.id}>
        <div
          role="button"
          tabIndex={0}
          onClick={() => {
            if (hasChildren) toggleExpand(node.id);
            if (node.pdfs.length > 0) setSelectedFolderPath(node.path);
            else if (total > 0) setSelectedFolderPath(node.children[0]?.path || null);
            else setSelectedFolderPath(null);
          }}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); (e.currentTarget as HTMLElement).click(); } }}
          className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg cursor-pointer transition text-left ${
            isSelected ? 'bg-[#0f2b48] text-white shadow-sm' : 'hover:bg-slate-100 text-slate-700'
          }`}
          style={{ paddingLeft: `${depth * 14 + 8}px` }}
        >
          {hasChildren ? (
            isExpanded ? <ChevronDown className="w-3.5 h-3.5 shrink-0 opacity-60" /> : <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-60" />
          ) : (
            <span className="w-3.5 shrink-0" />
          )}
          {isSelected ? <FolderOpen className="w-4 h-4 text-amber-400 shrink-0" /> : <Folder className="w-4 h-4 text-amber-500 shrink-0" />}
          <span className="font-mono text-[11px] font-bold truncate">{node.diskName}/</span>
          <span className={`ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ${
            total === 0 ? 'bg-slate-200 text-slate-500' : isSelected ? 'bg-amber-400 text-slate-950' : 'bg-emerald-100 text-emerald-800'
          }`}>
            {total === 0 ? t.forthcoming[lang] : total}
          </span>
        </div>
        {isExpanded && hasChildren && node.children.map(child => renderFolderNode(child, depth + 1))}
      </div>
    );
  };

  // ============================================================================
  // RENDER
  // ============================================================================

  return (
    <div className="space-y-7">
      {/* ================= OVERVIEW / MISSION (Displayed cleanly below shared Hero Banner) ================= */}
      <section className="rounded-2xl border border-[#f59e0b]/70 bg-white/95 text-slate-800 p-4 sm:p-6 shadow-sm">
        <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
          <p>{t.p1[lang]}</p>
          <p>{t.p2[lang]}</p>
          <p className="text-[#0f2b48] font-semibold">{t.p3[lang]}</p>
        </div>
      </section>

      {/* ================= LIBRARY MAP (TREE DIAGRAM) ================= */}
      <section className="rounded-2xl border border-slate-200 bg-white/95 p-4 sm:p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-1">
          <ScrollText className="w-4 h-4 text-emerald-700" />
          <h3 className="text-sm sm:text-base font-extrabold text-[#0f2b48]">{t.mapTitle[lang]}</h3>
        </div>
        <p className="text-[11px] text-slate-500 mb-3">{t.mapHint[lang]}</p>
        <pre className="overflow-x-auto rounded-xl bg-[#071626] text-[10.5px] sm:text-xs leading-relaxed p-4 font-mono text-slate-200 border border-slate-700 select-none">
{`STATUTES
├── `}<span className="text-amber-300 font-bold">Central_Acts/</span>{`                `}<span className="text-emerald-400">(70)</span>{`
│   ├── Criminal_Law_2023/      `}<span className="text-emerald-400">(3)</span>{`   BNS, BNSS, BSA 2023
│   ├── Civil_Procedure/        `}<span className="text-emerald-400">(7)</span>{`   CPC, Limitation, SRA, Registration
│   ├── Property_Law/           `}<span className="text-emerald-400">(13)</span>{`  TP Act, Easements, Stamp, Trusts
│   ├── Family_Law/             `}<span className="text-emerald-400">(21)</span>{`  HMA, HSA, ISA, GWA, PWDVA
│   ├── Commercial_Law/         `}<span className="text-emerald-400">(16)</span>{`  Contract, NI Act, IBC, SARFAESI
│   └── Consumer_Protection/    `}<span className="text-emerald-400">(10)</span>{`  CPA 2019, RERA, IT Act
├── `}<span className="text-amber-300 font-bold">West_Bengal_Acts/</span>{`            `}<span className="text-emerald-400">(14)</span>{`
│   ├── Land_Reforms/           `}<span className="text-emerald-400">(5)</span>{`   WBLR Act, Bhudan, Trees, Ground Water
│   ├── Tenancy/                `}<span className="text-emerald-400">(3)</span>{`   WBPT 1997, Thika 2001, Slum
│   ├── Municipal/              `}<span className="text-emerald-400">(2)</span>{`   KMC Act, WB Municipal
│   └── Special_Acts/           `}<span className="text-emerald-400">(4)</span>{`   Apartment Ownership, Clinical Est.
├── `}<span className="text-amber-300 font-bold">Regulations_Rules/</span>{`            `}<span className="text-emerald-400">(4)</span>{`
│   ├── IRDAI_Regulations/      `}<span className="text-emerald-400">(3)</span>{`   Health Insurance, Agents, Ombudsman
│   └── TRAI_Regulations/       `}<span className="text-emerald-400">(1)</span>{`   Quality of Service
└── `}<span className="text-amber-300 font-bold">Judicial_Precedents/</span>{`           `}<span className="text-slate-400">(0 — forthcoming)</span>{`
    └── Supreme_Court / High_Courts / Tribunals`}
        </pre>
      </section>

      {/* ================= BROWSE: SEARCH + TREE + FILES ================= */}
      <section className="rounded-2xl border border-slate-200 bg-white/95 p-4 sm:p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-4 h-4 text-emerald-700" />
          <h3 className="text-sm sm:text-base font-extrabold text-[#0f2b48]">{t.browseTitle[lang]}</h3>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder[lang]}
            className="w-full pl-9 pr-9 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600/40 focus:border-emerald-600 transition"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Folder tree */}
          <aside className="lg:col-span-1 rounded-xl border border-slate-200 bg-slate-50/80 p-2 max-h-[420px] overflow-y-auto">
            {tree.children.map(node => renderFolderNode(node, 0))}
          </aside>

          {/* Files */}
          <div className="lg:col-span-2">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
              <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                {searchResults
                  ? `${t.resultsFor[lang]} "${searchQuery.trim()}" — ${searchResults.length} ${t.filesIn[lang]}`
                  : selectedFolder
                    ? `${selectedFolder.diskName}/ — ${selectedFolder.pdfs.length} ${t.filesIn[lang]}`
                    : t.allFiles[lang]}
              </h4>
              <span className="text-[10.5px] font-semibold text-slate-500 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                {t.doubleClickHint[lang]}
              </span>
            </div>

            {visiblePdfs.length === 0 ? (
              <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-xs text-slate-500 font-semibold">
                {searchResults ? t.noResults[lang] : t.forthcoming[lang]}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[420px] overflow-y-auto pr-1">
                {visiblePdfs.map(pdf => (
                  <article
                    key={pdf.id}
                    onDoubleClick={() => openReader(pdf)}
                    className="group relative flex items-start gap-3 p-3 rounded-xl border border-slate-200 bg-white hover:border-emerald-400 hover:shadow-md transition cursor-pointer select-none"
                    tabIndex={0}
                    onKeyDown={e => { if (e.key === 'Enter') openReader(pdf); }}
                  >
                    <div className="w-10 h-12 shrink-0 rounded-lg bg-gradient-to-br from-[#0f2b48] to-[#1b3e63] flex items-center justify-center border border-slate-700">
                      <FileText className="w-5 h-5 text-amber-300" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h5 className="font-mono font-bold text-[11.5px] text-slate-900 truncate group-hover:text-emerald-800 transition" title={pdf.fileName}>
                        {pdf.fileName}
                      </h5>
                      <p className="text-[11px] text-slate-600 leading-snug mt-0.5 line-clamp-2">{pdf.displayName[lang]}</p>
                      <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                        {pdf.actYear && (
                          <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 text-[9px] font-extrabold">{pdf.actYear}</span>
                        )}
                        <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 text-[9px] font-bold">{pdf.sizeKB} KB</span>
                        <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[9px] font-bold border border-emerald-200 flex items-center gap-1">
                          <Lock className="w-2.5 h-2.5" />View-Only
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => openReader(pdf)}
                      className="shrink-0 self-center px-2.5 py-1.5 rounded-lg bg-[#0f2b48] text-amber-300 text-[10px] font-extrabold hover:bg-[#1b3e63] transition"
                    >
                      {t.readBtn[lang]}
                    </button>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= SECURE READER OVERLAY ================= */}
      {readerPdf && (
        <div
          className="fixed inset-0 z-[120] bg-slate-950/95 backdrop-blur-sm flex flex-col"
          role="dialog"
          aria-modal="true"
          onContextMenu={e => e.preventDefault()}
        >
          {/* Reader header */}
          <div className="shrink-0 bg-[#0a1e34] border-b border-white/10 px-3 sm:px-5 py-2.5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-400 to-emerald-400 flex items-center justify-center shrink-0">
                <Scale className="w-4 h-4 text-slate-950" />
              </div>
              <div className="min-w-0">
                <p className="font-mono font-extrabold text-[11px] sm:text-xs text-white truncate" title={readerPdf.fileName}>
                  {readerPdf.fileName}
                </p>
                <p className="text-[9.5px] sm:text-[10.5px] text-slate-300 truncate">{t.readerProtected[lang]}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={closeReader}
              className="shrink-0 p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition"
              aria-label={t.readerClose[lang]}
              title={t.readerClose[lang]}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Reader body — canvas-rendered, view-only */}
          <div className="flex-1 min-h-0">
            <PdfJsCanvas
              key={readerPdf.id}
              url={readerPdf.publicUrl}
              lang={lang}
              pageNum={readerPage}
              scale={readerScale}
              onDocLoaded={handleDocLoaded}
              onDocError={handleDocError}
            />
          </div>

          {/* Sticky bottom bar — Back to Library + page navigation */}
          <div className="shrink-0 bg-[#0a1e34] border-t border-white/10 px-3 sm:px-5 py-2 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={closeReader}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400/15 to-emerald-400/15 border border-amber-400/50 hover:border-amber-300 hover:from-amber-400/25 hover:to-emerald-400/25 text-white transition-all shrink-0 cursor-pointer group"
              title={t.backToLibrary[lang]}
              aria-label={t.backToLibrary[lang]}
            >
              <span className="w-6 h-6 rounded-lg bg-gradient-to-tr from-amber-400 to-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <ArrowLeft className="w-3.5 h-3.5 text-slate-950" />
              </span>
              <span className="text-[11px] sm:text-xs font-extrabold tracking-wide whitespace-nowrap">{t.backToLibrary[lang]}</span>
            </button>

            {readerTotal > 0 && !readerLoadError && (
              <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                <button
                  type="button"
                  onClick={() => setReaderPage(p => Math.max(1, p - 1))}
                  disabled={readerPage <= 1}
                  className="p-2 rounded-full text-slate-200 disabled:opacity-30 hover:bg-white/10 transition"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-[11px] font-bold text-slate-100 whitespace-nowrap">
                  {t.pageOf[lang]} {readerPage} / {readerTotal}
                </span>
                <button
                  type="button"
                  onClick={() => setReaderPage(p => Math.min(readerTotal, p + 1))}
                  disabled={readerPage >= readerTotal}
                  className="p-2 rounded-full text-slate-200 disabled:opacity-30 hover:bg-white/10 transition"
                  aria-label="Next page"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <span className="w-px h-4 bg-white/20 shrink-0" />
                <button
                  type="button"
                  onClick={() => setReaderScale(s => Math.max(0.6, +(s - 0.2).toFixed(2)))}
                  className="p-2 rounded-full text-slate-200 hover:bg-white/10 transition"
                  aria-label="Zoom out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setReaderScale(s => Math.min(3, +(s + 0.2).toFixed(2)))}
                  className="p-2 rounded-full text-slate-200 hover:bg-white/10 transition"
                  aria-label="Zoom in"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export { ELibraryProPage };
export default ELibraryProPage;
