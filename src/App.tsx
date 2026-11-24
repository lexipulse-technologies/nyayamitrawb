import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { CIVIL_CATEGORIES, TOTAL_WORKFLOW_COUNT } from './data/civilLegalData';
import { ADVOCATE_PROFILE } from './data/advocateProfile';
import { PILLAR_ENRICHMENTS } from './data/pillarEnrichments';
import type { Language, CivilCategory, CivilSubCategory } from './types/legal';
import { DisclaimerBanner } from './components/DisclaimerBanner';
import { OfflineBanner } from './components/OfflineBanner';
import { AdminAdvisorPanel } from './components/AdminAdvisorPanel';
import { AdminLoginModal } from './components/AdminLoginModal';
import { AudioRoadmapPlayer } from './components/AudioRoadmapPlayer';

import { CommandPalette } from './components/CommandPalette';
import { CaseReadinessGauge } from './components/CaseReadinessGauge';
import { DocumentDrafterModal } from './components/DocumentDrafterModal';
import { SplashScreen } from './components/SplashScreen';
import { LegalPolicyModal } from './components/LegalPolicyModal';
import type { PolicyTab } from './components/LegalPolicyModal';
import { AdvocateConnectModal } from './components/AdvocateConnectModal';
import { ELibraryProPage, ELIBRARY_HERO_UI } from './pages/ELibraryProPage';
import { AppDownloadPage } from './pages/AppDownloadPage';
import { getWorkflowTemplateMapping, getTemplateById } from './utils/proDocumentTemplates';
import { searchLegalTopics } from './utils/triageEngine';
import { isAdminSessionActive, clearAdminSession } from './utils/authUtils';
import { startVoiceRecognition, stopActiveVoiceRecognition, isVoiceSearchSupported } from './utils/speechEngine';
import { applySeoHeaders } from './utils/seoEngine';
import {
  getCategoryGuidePath,
  getWorkflowGuidePath,
  resolveGuidePath
} from './utils/guideSlugs';
import {
  trackPageView,
  trackWorkflowSelect,
  trackSearch,
  trackLanguageSwitch,
  trackTrackSwitch,
  trackPortalClick
} from './utils/analytics';
import { Capacitor } from '@capacitor/core';
import { App as CapacitorApp } from '@capacitor/app';
import {
  useNativeSplash,
  useLanguagePersistence,
  useNetworkStatus,
  useShare,
  useStatusBar,
  useKeyboardShortcut
} from './hooks/useCapacitor';
import {
  Scale,
  CheckCircle2,
  Circle,
  ExternalLink,
  ShieldCheck,
  ArrowRight,
  Search,
  BookOpen,
  Clock,
  FileCheck,
  Building,
  Sparkles,
  X,
  Lock,
  Globe,
  Mail,
  Mic,
  MicOff,
  MapPin,
  Compass,
  Check,
  Command,
  Zap,
  Download,
  LogOut,
  Library,
  Landmark,
  Gavel,
  BookOpenText,
  Home,
  Smartphone
} from 'lucide-react';

const HIGH_VALUE_PORTALS = [
  {
    id: 'portal-kmc',
    name: { en: 'Kolkata Municipal Corporation (KMC)', bn: 'কলকাতা পৌরসংস্থা (KMC)', hi: 'कोलकाता नगर निगम (KMC)' },
    url: 'https://www.kmcgov.in/',
    scope: { en: 'Kolkata Metro', bn: 'কলকাতা মেট্রো', hi: 'कोलकाता मेट्रो' },
    desc: {
      en: 'Online municipal mutation, building sanctions, dangerous building notices & property tax assessment.',
      bn: 'অনলাইন পৌর মিউটেশন, বিল্ডিং প্ল্যান অনুমোদন, বিপজ্জনক বাড়ি নোটিশ ও সম্পত্তি কর অ্যাসেসমেন্ট।',
      hi: 'ऑनलाइन म्यूटेशन, भवन निर्माण स्वीकृति, जर्जर मकान नोटिस एवं संपत्ति कर निर्धारण।'
    },
    badgeColor: 'bg-blue-100 text-blue-900 border-blue-300'
  },
  {
    id: 'portal-banglarbhumi',
    name: { en: 'Banglarbhumi (Govt. of West Bengal)', bn: 'বাংলারভূমি (পশ্চিমবঙ্গ সরকার)', hi: 'बांगलারভূমি (पश्चिम बंगाल सरकार)' },
    url: 'https://banglarbhumi.gov.in/',
    scope: { en: '22 Districts & Rural', bn: '২২টি জেলা ও গ্রামীণ', hi: '22 जिले एवं ग्रामीण' },
    desc: {
      en: 'Rural & district land mutation (Sec 50), digital Porcha download, Sec 4C Sali-to-Vastu conversion & Khajna.',
      bn: 'জেলা ও গ্রামীণ জমি মিউটেশন (ধারা ৫০), ডিজিটাল খতিয়ান পর্চা, শালি থেকে বাস্তু কনভার্সন ও খাজনা দাখিলা।',
      hi: 'ग्रामीण व जिला भूमि नामांतरण (ধারা 50), डिजिटल पर्चा, धारा 4C रूपांतरण एवं ऑनलाइन लगान।'
    },
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300'
  },
  {
    id: 'portal-wblrtt',
    name: { en: 'WB Land Reforms & Tenancy Tribunal', bn: 'ভূমি সংস্কার ও প্রজাস্বত্ব ট্রাইব্যুনাল (WBLRTT)', hi: 'भूमि सुधार एवं किरायेदारी अधिकरण (WBLRTT)' },
    url: 'https://wblrtt.wb.gov.in/',
    scope: { en: 'State Land Tribunal', bn: 'রাজ্য জমি ট্রাইব্যুনাল', hi: 'राज्य भूमि अधिकरण' },
    desc: {
      en: 'Statutory appellate tribunal for challenging BL&LRO/SDO mutation, bargadar, thika tenancy & ceiling orders.',
      bn: 'বিএলএলআরও, এসডিও ও রেন্ট কন্ট্রোলারের আদেশের বিরুদ্ধে বিধিবদ্ধ রাজ্য আপিল ট্রাইব্যুনাল।',
      hi: 'बीएलएलআরও, एसडीओ एवं रेंट कंट्रोलर के आदेशों के विरुद्ध सांविधिक राज्य अपीलीय अधिकरण।'
    },
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300'
  },
  {
    id: 'portal-wbpcb',
    name: { en: 'WB Pollution Control Board (WBPCB)', bn: 'পশ্চিমবঙ্গ দূষণ নিয়ন্ত্রণ পর্ষদ (WBPCB)', hi: 'प. बंगाल प्रदूषण नियंत्रण बोर्ड (WBPCB)' },
    url: 'https://www.wbpcb.gov.in/',
    scope: { en: 'Environmental WB', bn: 'পরিবেশ নিয়ন্ত্রণ', hi: 'पर्यावरण नियंत्रण' },
    desc: {
      en: 'Consent to Establish (CTE) & Operate (CTO) for builders, citizen noise pollution & industrial effluent relief.',
      bn: 'আবাসন ও কারখানার দূষণ ছাড়পত্র (CTE/CTO), শব্দদূষণ অভিযোগ ও পরিবেশগত বিধিবদ্ধ অনুমতি।',
      hi: 'आवासीय एवं औद्योगिक अनापत्ति (CTE/CTO), ध्वनि प्रदूषण शिकायत एवं पर्यावरण संबंधी अनुमतियां।'
    },
    badgeColor: 'bg-teal-100 text-teal-900 border-teal-300'
  },
  {
    id: 'portal-bmc',
    name: { en: 'Bidhannagar Municipal Corporation (BMC)', bn: 'বিধাননগর পৌরনিগম (BMC)', hi: 'विधाननगर नगर निगम (BMC)' },
    url: 'https://www.bmcwbgov.in/',
    scope: { en: 'Salt Lake & Rajarhat', bn: 'সল্টলেক ও রাজারহাট', hi: 'साल्ट लेक एवं राजारहाट' },
    desc: {
      en: 'Civic services, municipal property tax, trade license & building approvals for Salt Lake and Rajarhat-Gopalpur.',
      bn: 'সল্টলেক ও রাজারহাট-গোপালপুর এলাকার পৌর কর, ট্রেড লাইসেন্স ও বিল্ডিং প্ল্যান পরিষেবা।',
      hi: 'साल्ट लेक एवं राजारहाট क्षेत्र हेतु नागरिक सेवाएं, संपत्ति कर, ट्रेड लाइसेंस व भवन नक्शा।'
    },
    badgeColor: 'bg-cyan-100 text-cyan-900 border-cyan-300'
  },
  {
    id: 'portal-hmc',
    name: { en: 'Howrah Municipal Corporation (HMC)', bn: 'হাওড়া পৌরনিগম (HMC)', hi: 'हावड़ा नगर निगम (HMC)' },
    url: 'https://myhmc.in/',
    scope: { en: 'Howrah City', bn: 'হাওড়া শহর', hi: 'हावड़ा शहर' },
    desc: {
      en: 'Urban municipal assessment, property tax payment, building sanction plans & civic trade licensing.',
      bn: 'হাওড়া পৌর এলাকার কর মূল্যায়ন, প্রোপার্টি ট্যাক্স, বিল্ডিং প্ল্যান অনুমোদন ও ট্রেড লাইসেন্স।',
      hi: 'हावड़ा शहरी क्षेत्र हेतु संपत्ति कर भुगतान, भवन नक्शा स्वीकृति एवं व्यापार लाइसेंस।'
    },
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-300'
  },
  {
    id: 'portal-highcourt',
    name: { en: 'High Court at Calcutta', bn: 'কলকাতা হাইকোর্ট', hi: 'कलकत्ता उच्च न्यायालय' },
    url: 'https://calcuttahighcourt.gov.in/',
    scope: { en: 'State Jurisdiction', bn: 'রাজ্য এক্তিয়ার', hi: 'राज्य क्षेत्राधिकार' },
    desc: {
      en: 'Original Civil Side commercial suits, Article 226 Constitutional writ petitions & District Appellate appeals.',
      bn: 'অরিজিনাল সিভিল বেঞ্চ, সংবিধানের অনুচ্ছেদ ২২৬ রিট পিটিশন ও জেলা আদালতের রায় সংক্রান্ত আপিল।',
      hi: 'मूल दीवानी वाणिज्यिक वाद, अनुच्छेद 226 रिट याचिकाएं एवं जिला अदालतों की अपीलीय शाखा।'
    },
    badgeColor: 'bg-indigo-100 text-indigo-900 border-indigo-300'
  },
  {
    id: 'portal-wbrera',
    name: { en: 'West Bengal Real Estate Regulatory Authority (WBRERA)', bn: 'পশ্চিমবঙ্গ রেরা কর্তৃপক্ষ (WBRERA)', hi: 'पश्चिम बंगाल रेरा प्राधिकरण (WBRERA)' },
    url: 'https://rera.wb.gov.in/',
    scope: { en: 'Real Estate WB', bn: 'আবাসন ও ফ্ল্যাট', hi: 'रियल एस्टेट' },
    desc: {
      en: 'Form-M builder delay compensation, SBI MCLR+2% interest, project RERA verification & Sec 40 DM recovery.',
      bn: 'ফ্ল্যাট হস্তান্তরে দেরির ক্ষতিপূরণ (ফর্ম-এম), এসবিআই হারে সুদ, রেরা প্রজেক্ট সার্চ ও রিকভারি ওয়ারেন্ট।',
      hi: 'फ्लैट पजेशन में देरी पर ब्याज व रिफंड (ফর্ম-M), प्रोजेक्ट पंजीकरण जांच एवं रिकवरी वारंट।'
    },
    badgeColor: 'bg-orange-100 text-orange-900 border-orange-300'
  },
  {
    id: 'portal-ejagriti',
    name: { en: 'National Consumer e-Filing (e-Jagriti)', bn: 'জাতীয় ক্রেতা সুরক্ষা ই-ফাইলিং (ই-জাগৃতি)', hi: 'राष्ट्रीय उपभोक्ता ई-दाखिल (ई-जागृति)' },
    url: 'https://e-jagriti.gov.in/',
    scope: { en: 'Consumer Courts', bn: 'ক্রেতা আদালত', hi: 'उपभोक्ता फोरम' },
    desc: {
      en: 'Online e-filing of consumer claims against defective goods, hospital negligence & deficient services.',
      bn: 'ত্রুটিযুক্ত পণ্য, চিকিৎসা গাফিলতি ও সেবার ত্রুটির বিরুদ্ধে জেলা ক্রেতা আদালতে অনলাইন মামলা।',
      hi: 'दोषपूर्ण उत्पाद, अस्पताल लापरवाही एवं सेवा में कमी पर जिला उपभोक्ता आयोग में ऑनलाइन केस।'
    },
    badgeColor: 'bg-purple-100 text-purple-900 border-purple-300'
  },
  {
    id: 'portal-ecourts',
    name: { en: 'e-Courts Services (WB District Courts)', bn: 'ই-কোর্ট সার্ভিসেস (জেলা আদালতসমূহ)', hi: 'ई-कोर्ट्स सेवाएं (जिला अदालतें)' },
    url: 'https://ecourts.gov.in/',
    scope: { en: 'District Courts', bn: 'জেলা আদালত', hi: 'जिला न्यायालय' },
    desc: {
      en: 'Daily cause lists, case status, orders & summons tracking for Alipore, Barasat, Howrah & all district courts.',
      bn: 'আলিপুর, বারাসাত, হাওড়া সহ পশ্চিমবঙ্গের সমস্ত জেলা আদালতের মামলার স্ট্যাটাস, রায় ও কজ লিস্ট।',
      hi: 'अलीपुर, बारासात, हावड़ा सहित सभी जिला अदालतों के केस स्टेटस, आदेश एवं वाद सूची ट्रैकिंग।'
    },
    badgeColor: 'bg-sky-100 text-sky-900 border-sky-300'
  },
  {
    id: 'portal-cybercrime',
    name: { en: 'National Cyber Crime Portal (1930)', bn: 'জাতীয় সাইবার ক্রাইম পোর্টাল (১৯৩০)', hi: 'राष्ट्रीय साइबर अपराध पोर्टल (1930)' },
    url: 'https://cybercrime.gov.in/',
    scope: { en: 'Cyber Fraud', bn: 'সাইবার সুরক্ষা', hi: 'সাইबर सुरक्षा' },
    desc: {
      en: 'Emergency golden-hour account freeze for UPI/banking fraud, cyber extortion complaints & Sec 503 BNSS relief.',
      bn: 'ইউপিআই ও অনলাইন ব্যাঙ্ক প্রতারণায় টাকা আটকানো, সাইবার ব্ল্যাকমেল নালিশ ও অ্যাকাউন্ট ডি-ফ্রিজিং।',
      hi: 'ऑनलाइन वित्तीय धोखाधड़ी में तत्काल खाता फ्रीज, ब्लैकमेलिंग शिकायत एवं साइबर प्राथमिकी।'
    },
    badgeColor: 'bg-rose-100 text-rose-900 border-rose-300'
  },
  {
    id: 'portal-swid',
    name: { en: 'State Water Investigation Directorate (SWID)', bn: 'রাজ্য জলসম্পদ অনুসন্ধান অধিকার (SWID)', hi: 'राज्य जल संसाधन अन्वेषण निदेशालय (SWID)' },
    url: 'https://wbwridd.gov.in/',
    scope: { en: 'Groundwater / Agri', bn: 'ভূগর্ভস্থ জল ও সেচ', hi: 'भूजल एवं सिंचाई' },
    desc: {
      en: 'Water Resources Investigation & Development Department: permissions for agricultural submersible tubewell borewells.',
      bn: 'পশ্চিমবঙ্গ জলসম্পদ অনুসন্ধান ও উন্নয়ন দপ্তর: কৃষিকাজে সাবমার্সিবল টিউবওয়েল ও পাম্পের সরকারি পারমিট।',
      hi: 'जल संसाधन अन्वेषण एवं विकास विभाग: कृषि सबमर्सिबल पंप एवं नलकूप खनन हेतु वैधानिक अनुमति।'
    },
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300'
  }
];

const UI_TEXT = {
  portalTitle: { bn: 'ন্যায়মিত্র (NyayaMitra)', hi: 'न्यायमित्र (NyayaMitra)', en: 'NyayaMitra' },
  portalSubtitle: { bn: 'পশ্চিমবঙ্গ দেওয়ানি আইনি সহায়িকা ও নাগরিক পথপ্রদর্শক', hi: 'पश्चिम बंगाल सिविल कानूनी मार्गदर्शिका एवं नागरिक पोर्टल', en: 'West Bengal Civil Legal Navigator & Citizen Advisory' },
  heroSuperTitle: { bn: 'পশ্চিমবঙ্গ দেওয়ানি ও বিচারিক অধিক্ষেত্র ডিরেক্টরি', hi: 'पश्चिम बंगाल दीवानी एवं न्यायिक क्षेत्राधिकार डायरेक्टरी', en: 'WEST BENGAL CIVIL & JUDICIAL JURISDICTION DIRECTORY' },
  heroMainTitle: { bn: 'দেওয়ানি মামলার নির্ভুল আইনি পথপ্রদর্শক', hi: 'दीवानी मुकदमों की प्रामाणिक कानूनी मार्गदर्शिका', en: 'Demystifying Civil Litigation in West Bengal' },
  tagline: { bn: 'পশ্চিমবঙ্গের ২৩টি জেলার জন্য ৩০০টি উন্মুক্ত দেওয়ানি আইনি নির্দেশিকা ও ১২টি যাচাইকৃত সরকারি পোর্টাল', hi: 'पश्चिम बंगाल के 23 जिलों के लिए 300 निःशुल्क नागरिक कानूनी प्रक्रियाएं एवं 12 आधिकारिक पोर्टल', en: '300 Verified Procedural Roadmaps & 12 Government Gateways across 23 Districts' },
  searchPlaceholder: { bn: 'যেকোনো দেওয়ানি সমস্যা খুঁজুন (যেমন: মিউটেশন, উচ্ছেদ, রেরা ফ্ল্যাট, চেক বাউন্স, খোরপোশ)...', hi: 'कोई भी कानूनी विषय खोजें (जैसे: म्यूटेशन, बेदखली, रेरा फ्लैट, चेक बाउंस, गुजारा भत्ता)...', en: 'Search any civil legal topic (e.g. land mutation, tenant eviction, RERA delay, cheque bounce)...' },
  voiceListeningPrompt: { bn: 'বলুন, আমরা শুনছি... (কথা বলুন, স্ক্রিনে ভেসে উঠবে)', hi: 'बोलिए, हम सुन रहे हैं... (बोलते ही स्क्रीन पर आएगा)', en: 'Listening... (Speak your dispute naturally now)' },
  adminLoginBtn: { bn: 'অ্যাডমিন লগইন', hi: 'एडमिन लॉगिन', en: 'Admin Login' },
  publicViewBtn: { bn: 'পাবলিক ভিউ', hi: 'পাবলিক ভিউ', en: 'Public View' },
  quickJumpBtn: { bn: 'কুইক জাম্প', hi: 'क्विक जंप', en: 'Quick Jump' },
  proDrafterBtn: { bn: 'নোটিশ ড্রাফট (₹৯৯)', hi: 'नोटिस ड्राफ्ट (₹99)', en: 'Draft Notice (₹99)' },
  selectCategory: { bn: 'দেওয়ানি বিরোধের ৬টি প্রধান ক্ষেত্র', hi: 'নাগরিক বিরোধের ৬টি ক্ষেত্র', en: '6 Core Civil Legal Categories' },
  topicsCount: { bn: 'টি বিষয় অন্তর্ভুক্ত', hi: 'विषय उपलब्ध', en: 'Workflows Available' },
  timeframeHeading: { bn: 'আনুমানিক নিষ্পত্তির সময়:', hi: 'अनुमानित समय सीमा:', en: 'Estimated Statutory Timeframe:' },
  processTimeframeHeading: { bn: 'প্রক্রিয়া/পরিষেবার সময়:', hi: 'प्रक्रिया/सेवा समय:', en: 'Processing / Service Timeframe:' },
  evidenceHeading: { bn: 'ফি ও সময়সীমার উৎস ও শর্ত', hi: 'शुल्क और समय-सीमा के स्रोत व शर्तें', en: 'Fee & timeline sources and conditions' },
  openEvidence: { bn: 'উৎস ও শর্ত দেখুন', hi: 'स्रोत और शर्तें देखें', en: 'Source & conditions' },
  checkedOn: { bn: 'যাচাইয়ের তারিখ:', hi: 'जांच की तारीख:', en: 'Checked:' },
  authorityControls: { bn: 'চূড়ান্ত ফি সংশ্লিষ্ট কর্তৃপক্ষের বর্তমান চাহিদা অনুযায়ী নির্ধারিত হবে।', hi: 'अंतिम शुल्क संबंधित प्राधिकरण की वर्तमान मांग के अनुसार होगा।', en: 'The authority’s current assessed demand controls the final fee.' },
  variableFee: { bn: 'পরিবর্তনশীল ফি', hi: 'परिवर्तनीय शुल्क', en: 'Variable fee' },
  feeAmountAtAuthority: { bn: 'প্রকাশিত নির্দিষ্ট ফি', hi: 'प्रकाशित निश्चित शुल्क', en: 'Published fixed fee' },
  variableTimeline: { bn: 'সময় পরিবর্তনশীল', hi: 'समय परिवर्तनीय', en: 'Variable timing' },
  triggerLabel: { bn: 'সময় গণনার সূচনা:', hi: 'समय-गणना का प्रारंभ:', en: 'Trigger:' },
  consequenceLabel: { bn: 'সময়সীমার প্রভাব:', hi: 'समय-सीमा का प्रभाव:', en: 'Consequence:' },
  authorityHeading: { bn: 'সংশ্লিষ্ট সরকারি কর্তৃপক্ষ বা আদালত:', hi: 'সংক্রান্ত সরকারি কর্তৃপক্ষ বা আদালত:', en: 'Concerned Authority / Forum:' },
  stepsHeading: { bn: 'আইনি পদক্ষেপ ও ধারাবাহিক করণীয় ধাপসমূহ:', hi: 'चरणबद्ध कानूनी प्रक्रिया एवं दिशा-निर्देश:', en: 'Step-by-Step Procedural Roadmap:' },
  portalBtn: { bn: 'অফিসিয়াল সরকারি পোর্টালে যান', hi: 'ऑफिशियल पोर्टल खोलें', en: 'Open Official Government Portal' },
  docsHeading: { bn: 'প্রয়োজনীয় কাগজপত্রের প্রস্তুতি চেকলিস্ট', hi: 'आवश्यक दस्तावेजों की तैयारी चेकलिस्ट', en: 'Preparedness Document Checklist' },
  docsSubtitle: { bn: 'আদালত বা সরকারি কাউন্টারে যাওয়ার পূর্বে নিচের প্রত্যয়িত নথিগুলো প্রস্তুত করে টিক দিন:', hi: 'अदालत বা সরকারি কাউন্টারে যাওয়ার পূর্বে নথিগুলো প্রস্তুত করে টিক দিন:', en: 'Mark off verified xerox documents before attending hearing or office counter:' },
  authorityLabel: { bn: 'ইস্যুকারী কর্তৃপক্ষ:', hi: 'जारीकर्ता प्राधिकरण:', en: 'Issuing Authority:' },
  noResults: { bn: 'কোনো ফলাফল মেলেনি (No matching topics found)', hi: 'कोई परिणाम नहीं मिला (No matching topics found)', en: 'No matching legal topics found' },
  footerBrand: {
    bn: 'Web Administrator: LEXIPULSE TECHNOLOGIES - All Rights Reserved ©',
    hi: 'Web Administrator: LEXIPULSE TECHNOLOGIES - All Rights Reserved ©',
    en: 'Web Administrator: LEXIPULSE TECHNOLOGIES - All Rights Reserved ©'
  },
  territoryToggleHeading: { bn: 'এক্তিয়ার ও ভৌগোলিক ক্ষেত্র নির্বাচন করুন (Jurisdiction):', hi: 'क्षेत्राधिकार एवं प्रशासनिक क्षेत्र चुनें (Jurisdiction):', en: 'Select Administrative Jurisdiction / Territory:' },
  ruralTrackTitle: { bn: 'গ্রামীণ ও ২২টি জেলা এক্তিয়ার', hi: 'ग्रामीण एवं 22 जिले क्षेत्राधिकार', en: 'Rural & 22 Districts Track' },
  ruralTrackSub: { bn: 'Panchayat / BL&LRO / SDO / BMC / HMC', hi: 'Panchayat / BL&LRO / SDO / BMC / HMC', en: 'Panchayat / BL&LRO / SDO / BMC / HMC' },
  ruralTrackBadges: { bn: ['বাংলারভূমি পোর্টাল', 'WBLR Act ১৯৫৫', 'জেলা আদালতসমূহ'], hi: ['बांगलারভূমি पोर्टल', 'WBLR Act 1955', 'जिला न्यायालय'], en: ['Banglarbhumi Portal', 'WBLR Act 1955', 'District Courts'] },
  kolkataTrackTitle: { bn: 'কলকাতা পুর এলাকা ও মেট্রো এক্তিয়ার', hi: 'कोलकाता नगर निगम एवं मेट्रो क्षेत्राधिकार', en: 'Kolkata Urban & Metro Track' },
  kolkataTrackSub: { bn: 'KMC Area / City Civil / Presidency Small Causes', hi: 'KMC Area / City Civil / Presidency Small Causes', en: 'KMC Area / City Civil / Presidency Small Causes' },
  kolkataTrackBadges: { bn: ['কেএমসি পোর্টাল', 'KMC Act ১৯৮০', 'রেন্ট কন্ট্রোলার কিরণ শঙ্কর রায় রোড'], hi: ['केएमसी पोर्टल', 'KMC Act 1980', 'रेंट कंट्रोलर किरण शंकर रॉय रोड'], en: ['KMC Portal', 'KMC Act 1980', 'Rent Controller Kiran Shankar Roy Rd'] },
  trackBadgeRural: { bn: '২২টি জেলা ও গ্রামীণ এক্তিয়ার', hi: '22 जिले एवं ग्रामीण क्षेत्राधिकार', en: '22 Districts Jurisdiction' },
  trackBadgeKolkata: { bn: 'কলকাতা পৌরসভা ও মেট্রো এক্তিয়ার', hi: 'कोलकाता नगर निगम क्षेत्राधिकार', en: 'Kolkata Municipal Jurisdiction' },
  directoryTitle: { bn: 'অফিসিয়াল সরকারি ও বিচারিক পোর্টাল ডিরেক্টরি', hi: 'আधिकारिक सरकारी ও বিচারিক পোর্টাল ডাইরেক্টরি', en: 'Official Government & Judicial Portals Directory' },
  directorySubtitle: { bn: 'পশ্চিমবঙ্গের দেওয়ানি মামলা, জমি মিউটেশন, ট্রাইব্যুনাল, কর অ্যাসেসমেন্ট ও নাগরিক পরিষেবার ১২টি মূল সরকারি পোর্টাল', hi: 'पश्चिम बंगाल मे দিওয়ানি বাদ, ভূমি মিউটেশন, অধিকরণ, কর নির্ধারণ एवं नागरिक सेवाओं हेतु 12 प्रमुख आधिकारिक पोर्टल', en: 'Direct access to 12 verified government portals for civil litigation, land mutation, tribunals, tax assessment & consumer relief across West Bengal' },
  visitPortalBtn: { bn: 'পোর্টাল খুলুন', hi: 'পোর্টাল খোলেন', en: 'Visit Portal' },
  policyLinks: {
    terms: { bn: 'ব্যবহারের শর্তাবলী', hi: 'सेवा की शर्तें', en: 'Terms & Conditions' },
    privacy: { bn: 'গোপনীয়তা নীতি (DPDP)', hi: 'गोपनीयता नीति', en: 'Privacy Policy (DPDP Act)' },
    refund: { bn: 'রিফান্ড ও বাতিলকরণ', hi: 'रिफंड नीति', en: 'Refund Policy' },
    pricing: { bn: 'মূল্যতালিকা ও ডিজিটাল ডেলিভারি', hi: 'मूल्य एवं डिजिटल डिलीवरी', en: 'Pricing & Delivery' },
    contact: { bn: 'যোগাযোগ ও অভিযোগ', hi: 'संपर्क व शिकायत', en: 'Contact & Grievance' }
  },
  inWorkflowNotice: {
    badge: { bn: 'বিধিবদ্ধ আইনি নোটিশ', hi: 'वैधानिक कानूनी नोटिस', en: 'Statutory Legal Notice' },
    heading: { bn: '⚡ এই বিষয়ের জন্য বিধিবদ্ধ আইনি নোটিশ ড্রাফটার উপলব্ধ (₹৯৯)', hi: '⚡ इस विषय हेतु वैधानिक कानूनी नोटिस ड्राफ्टर उपलब्ध (₹99)', en: '⚡ Official Statutory Notice Drafter Available for this Topic (₹99)' },
    desc: (docTitle: string) => ({
      bn: `এই বিরোধে আইনি পদক্ষেপ নিতে চান? মাত্র ২ মিনিটে প্রস্তুত করুন কোর্ট-রেডি ${docTitle}। রেজরপে লাইভ মারফত মাত্র ₹৯৯-এ তাৎক্ষণিক ডাউনলোড।`,
      hi: `क्या आपको इस विवाद हेतु कानूनी नोटिस भेजना है? मात्र 2 मिनट में तैयार करें कोर्ट-प्रमाणित ${docTitle}। रेज़रपे लाइव द्वारा ₹99 में तुरंत डाउनलोड।`,
      en: `Need to serve a formal legal notice for this dispute? Compile your verified, court-ready ${docTitle} in 2 minutes for ₹99 via Razorpay Secure Live Checkout.`
    }),
    btn: { bn: 'নোটিশ ড্রাফট (₹৯৯)', hi: 'नोटिस ड्राफ्ट (₹99)', en: 'Draft Notice (₹99)' },
    toastBadge: { bn: 'রেজরপে লাইভ অ্যাক্টিভ', hi: 'रेज़रपे लाइव सक्रिय', en: 'Razorpay Live Active' },
    toastDesc: (docTitle: string) => ({
      bn: `এই বিরোধের জন্য ${docTitle} স্বহস্তে তৈরি করে ডাকযোগে পাঠাতে চান? রেজরপে লাইভ মারফত মাত্র ₹৯৯-এ ডাউনলোড করুন।`,
      hi: `इस विवाद हेतु ${docTitle} तैयार कर डाक द्वारा भेजना चाहते हैं? रेज़रपे लाइव द्वारा मात्र ₹99 में डाउनलोड करें।`,
      en: `Facing this dispute? You can compile your court-ready ${docTitle} in 2 minutes for ₹99 via Razorpay Live.`
    }),
    toastLater: { bn: 'পরে', hi: 'बाद में', en: 'Later' }
  }
};

const WATERMARK_SVG_URI = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='420' height='260' viewBox='0 0 420 260'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle' transform='rotate(-24 210 130)' font-family='serif' font-weight='800' font-size='22' letter-spacing='4' fill='%230f2b48' opacity='0.028'%3ENYAYAMITRA WB%3C/text%3E%3C/svg%3E")`;

export function App() {
  const [lang, setLang] = useLanguagePersistence('en');
  const { isOnline } = useNetworkStatus();
  const { share } = useShare();

  useNativeSplash();
  useStatusBar();
  useKeyboardShortcut(() => setIsCommandPaletteOpen(prev => !prev));

  const defaultCategory = CIVIL_CATEGORIES[0] || {
    id: 'cat-land-mutation',
    title: { bn: '', hi: '', en: '' },
    description: { bn: '', hi: '', en: '' },
    subcategories: []
  };
  const defaultSubCategory = defaultCategory.subcategories[0] || {
    id: 'sub-land-01',
    title: { bn: '', hi: '', en: '' },
    relevant_act: '',
    summary: { bn: '', hi: '', en: '' },
    authority_forum: { bn: '', hi: '', en: '' },
    is_complex: false,
    roadmap_steps: { bn: [], hi: [], en: [] },
    required_documents: []
  };

  const initialGuideRoute = useMemo(
    () =>
      typeof window !== 'undefined'
        ? resolveGuidePath(window.location.pathname, CIVIL_CATEGORIES)
        : null,
    []
  );

  const [selectedCat, setSelectedCat] = useState<CivilCategory>(
    () => initialGuideRoute?.category || defaultCategory
  );
  const [selectedSubCat, setSelectedSubCat] = useState<CivilSubCategory>(
    () => initialGuideRoute?.subcategory || defaultSubCategory
  );
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});

  // Administrative State & Authentication
  const [isAdminView, setIsAdminView] = useState<boolean>(false);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

  // Verify admin session on mount
  useEffect(() => {
    const checkAdminSession = async () => {
      try {
        const active = await isAdminSessionActive();
        setIsAdminView(active);
      } catch {
        setIsAdminView(false);
      }
    };
    checkAdminSession();
  }, []);

  // Search & Voice Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);

  // Active Territorial Jurisdiction Track (Rural & 22 Districts vs. Kolkata Urban)
  const [activeTerritoryTrack, setActiveTerritoryTrack] = useState<'rural_district' | 'kolkata_urban'>('rural_district');

  // Universal Command Palette (Ctrl+K) State
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // NyayaMitra Pro Document Drafter (₹99) Modal State
  const [showProModal, setShowProModal] = useState<boolean>(false);

  // Statutory Compliance Policy Modal State
  const [showPolicyModal, setShowPolicyModal] = useState<boolean>(false);
  const [policyModalTab, setPolicyModalTab] = useState<PolicyTab>('terms');

  // Advocate Connect (₹499) Modal State
  const [showAdvocateModal, setShowAdvocateModal] = useState<boolean>(false);

  // Exit Confirmation Modal State
  const [showExitConfirm, setShowExitConfirm] = useState<boolean>(false);

  // E-Library Pro — standalone route (/elibrarypro) + legacy ?view=elibrarypro deep link
  const [showELibraryPro, setShowELibraryPro] = useState<boolean>(false);
  const [routePath, setRoutePath] = useState<string>(() =>
    typeof window !== 'undefined' ? window.location.pathname.replace(/\/+$/, '') || '/' : '/'
  );

  const isLibraryView = routePath === '/elibrarypro' || showELibraryPro;
  const isAppDownloadView = routePath === '/app';

  // Redirect /app to home on native (no download page in app)
  useEffect(() => {
    if (Capacitor.isNativePlatform() && routePath === '/app') {
      window.history.replaceState(null, '', '/');
      setSelectedCat(defaultCategory);
      setSelectedSubCat(defaultSubCategory);
    }
  }, [routePath, selectedCat, selectedSubCat, lang]);

  // SECURITY: Disable browser Back/Forward navigation (buttons, Alt+Arrow
  // keys, mobile swipe gestures). Allow programmatic navigation (pushState).
  // A guard history entry is pushed on load and re-pushed on user-initiated
  // popstate, re-anchoring the history stack to the last INTENTIONAL in-app URL.
  const appUrlRef = useRef<string>('');
  const isProgrammaticNavigation = useRef(false);

  useEffect(() => {
    if (!appUrlRef.current) {
      appUrlRef.current = window.location.href;
    }

    const pushGuardEntry = () => {
      try {
        window.history.pushState(
          { nmNavGuard: Date.now() },
          '',
          appUrlRef.current || window.location.href
        );
      } catch {
        /* history unavailable — nothing to trap */
      }
    };
    pushGuardEntry();

    const handleNavTrap = () => {
      // Allow programmatic navigation (our own pushState calls)
      if (isProgrammaticNavigation.current) {
        isProgrammaticNavigation.current = false;
        appUrlRef.current = window.location.href;
        return;
      }
      // Neutralize user-initiated Back/Forward: restore the intentional app URL
      pushGuardEntry();
    };

    const blockNavKeys = (e: KeyboardEvent) => {
      if (e.altKey && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
        e.preventDefault();
      }
    };

    window.addEventListener('popstate', handleNavTrap);
    window.addEventListener('keydown', blockNavKeys);
    return () => {
      window.removeEventListener('popstate', handleNavTrap);
      window.removeEventListener('keydown', blockNavKeys);
    };
  }, []);

  // Instant client-side navigation to E-Library Pro (no page reload, zero latency)
  const openLibraryView = useCallback(() => {
    try {
      isProgrammaticNavigation.current = true;
      window.history.pushState({ view: 'elibrarypro' }, '', '/elibrarypro');
      appUrlRef.current = new URL('/elibrarypro', window.location.origin).href;
    } catch {
      /* history unavailable — state switch still works */
    }
    setRoutePath('/elibrarypro');
    setShowELibraryPro(true);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  // Return to the main landing page from E-Library Pro
  const exitLibraryView = useCallback(() => {
    try {
      isProgrammaticNavigation.current = true;
      const isOnLibraryPath = window.location.pathname.replace(/\/+$/, '') === '/elibrarypro';
      const target = isOnLibraryPath ? '/' : window.location.pathname + window.location.search;
      window.history.pushState({}, '', target);
      appUrlRef.current = new URL(target, window.location.origin).href;
    } catch {
      /* noop */
    }
    setRoutePath('/');
    setShowELibraryPro(false);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  // Explicit Topic Selection Flag — preserves clean homepage '/' canonical & title on initial load
  const [hasExplicitTopic, setHasExplicitTopic] = useState<boolean>(() => {
    if (initialGuideRoute?.kind === 'workflow') return true;
    if (typeof window === 'undefined') return false;
    const params = new URLSearchParams(window.location.search);
    return Boolean(params.get('cat') || params.get('topic'));
  });

  // Splash Screen State — enabled ONLY on native Android app; disabled on Website for instant LCP & zero bounce
  const [showSplash, setShowSplash] = useState<boolean>(() => Capacitor.isNativePlatform());

  const handleSplashClose = useCallback(() => setShowSplash(false), []);

  // Floating Toast Notification State
  const [showDrafterToast, setShowDrafterToast] = useState<boolean>(true);

  const pillsContainerRef = useRef<HTMLDivElement>(null);

  const openCompliancePolicy = (tab: PolicyTab) => {
    setPolicyModalTab(tab);
    setShowPolicyModal(true);
  };

  // Exit App Handler with Confirmation
  const handleExitApp = () => {
    setShowExitConfirm(true);
  };

  const confirmExitApp = async () => {
    setShowExitConfirm(false);
    if (Capacitor.isNativePlatform()) {
      try {
        await CapacitorApp.exitApp();
      } catch {
        // Fallback for older Capacitor versions
        navigator.app?.exitApp?.();
      }
    } else {
      // Web fallback - close window/tab
      window.close();
    }
  };

  const cancelExitApp = () => {
    setShowExitConfirm(false);
  };

  // Global Keyboard Shortcut Listener for Ctrl+K / Cmd+K
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  // Admin Login Modal Event Listener
  useEffect(() => {
    const handleOpenAdminLogin = () => {
      if (Capacitor.isNativePlatform()) return;
      setShowLoginModal(true);
    };
    window.addEventListener('open-admin-login', handleOpenAdminLogin);
    return () => window.removeEventListener('open-admin-login', handleOpenAdminLogin);
  }, []);

  // Safe Deep-Linking & Razorpay Compliance Crawler URL Parameter Hook
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get('cat');
      const topicParam = params.get('topic');
      const trackParam = params.get('track');
      const policyParam = params.get('policy') as PolicyTab | null;

      // Razorpay Audit Crawler Support: Direct Landing on Specific Policy Tab
      if (policyParam && ['terms', 'privacy', 'refund', 'contact', 'pricing'].includes(policyParam)) {
        setPolicyModalTab(policyParam);
        setShowPolicyModal(true);
      }

      if (trackParam === 'rural_district' || trackParam === 'kolkata_urban') {
        setActiveTerritoryTrack(trackParam);
      }

      const viewParam = params.get('view');
      if (viewParam === 'elibrarypro') {
        setShowELibraryPro(true);
      }

      if (catParam) {
        const foundCat = CIVIL_CATEGORIES.find(c => c.id === catParam);
        if (foundCat && foundCat.subcategories && foundCat.subcategories.length > 0) {
          setSelectedCat(foundCat);
          if (topicParam) {
            const foundSub = foundCat.subcategories.find(s => s.id === topicParam);
            if (foundSub) {
              setSelectedSubCat(foundSub);
            } else {
              setSelectedSubCat(foundCat.subcategories[0]);
            }
          } else {
            setSelectedSubCat(foundCat.subcategories[0]);
          }
        }
      }
    } catch (err) {
      console.warn('URL parsing notice:', err);
    }
  }, []);

  // Safe URL Sync — only update URL when user explicitly selects a category/workflow, never hijack '/' or '/app' or '/elibrarypro'
  useEffect(() => {
    try {
      if (isLibraryView || isAppDownloadView) return;
      if (routePath.startsWith('/guides/')) {
        if (!isAdminView && selectedCat?.id && selectedSubCat?.id) {
          const targetPath = hasExplicitTopic
            ? getWorkflowGuidePath(selectedSubCat)
            : getCategoryGuidePath(selectedCat.id);
          const qs = lang !== 'en' ? `?lang=${lang}` : '';
          const newRelativePath = `${targetPath}${qs}`;
          if (`${window.location.pathname}${window.location.search}` !== newRelativePath) {
            window.history.replaceState(null, '', newRelativePath);
            appUrlRef.current = new URL(newRelativePath, window.location.origin).href;
          }
        }
        return;
      }
      if (!hasExplicitTopic) return;
      if (!isAdminView && selectedCat?.id && selectedSubCat?.id) {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('cat', selectedCat.id);
        searchParams.set('topic', selectedSubCat.id);
        searchParams.set('lang', lang);

        if (selectedSubCat.territory_track === 'Dual_Path') {
          searchParams.set('track', activeTerritoryTrack);
        } else {
          searchParams.delete('track');
        }

        const newRelativePath = `${window.location.pathname}?${searchParams.toString()}`;
        window.history.replaceState(null, '', newRelativePath);
        appUrlRef.current = new URL(newRelativePath, window.location.origin).href;
      }
    } catch (err) {
      console.warn('History replace notice:', err);
    }
  }, [selectedCat?.id, selectedSubCat?.id, lang, isAdminView, activeTerritoryTrack, isLibraryView, isAppDownloadView, hasExplicitTopic, routePath]);

  const lastTrackedPathRef = useRef<string>('');

  // Dynamic SEO Engine + GA4 Virtual Page View Tracking
  useEffect(() => {
    const isCategoryGuideOnly = routePath.startsWith('/guides/') && !hasExplicitTopic;

    if (isLibraryView || isAppDownloadView) {
      applySeoHeaders({ lang });
    } else if (!isAdminView) {
      applySeoHeaders({
        category: selectedCat,
        subcategory: hasExplicitTopic ? selectedSubCat : undefined,
        guideKind: isCategoryGuideOnly ? 'category' : hasExplicitTopic ? 'workflow' : undefined,
        lang
      });
    } else {
      document.title = 'NyayaMitra Admin Control Room';
      return;
    }

    if (typeof window !== 'undefined' && !isAdminView) {
      const virtualPath = isLibraryView
        ? '/elibrarypro'
        : isAppDownloadView
          ? '/app'
          : isCategoryGuideOnly
            ? getCategoryGuidePath(selectedCat.id)
            : hasExplicitTopic && selectedSubCat?.id
              ? getWorkflowGuidePath(selectedSubCat)
              : '/';

      if (!lastTrackedPathRef.current) {
        // Initial load is already tracked by gtag('config', ...) in index.html
        lastTrackedPathRef.current = virtualPath;
      } else if (lastTrackedPathRef.current !== virtualPath) {
        lastTrackedPathRef.current = virtualPath;
        trackPageView(virtualPath, document.title, lang);
      }
    }
  }, [selectedCat, selectedSubCat, lang, isAdminView, isLibraryView, isAppDownloadView, hasExplicitTopic, routePath]);

  const searchResults = useMemo(() => {
    return searchLegalTopics(searchQuery, lang);
  }, [searchQuery, lang]);

  // Alphabetical index of all 300 workflows (for crawlable A-Z directory with zero UI bloat)
  const alphabeticalWorkflows = useMemo(() => {
    const list: Array<{ cat: CivilCategory; sub: CivilSubCategory }> = [];
    for (const cat of CIVIL_CATEGORIES) {
      for (const sub of cat.subcategories || []) {
        list.push({ cat, sub });
      }
    }
    return list.sort((a, b) =>
      (a.sub.title?.[lang] || a.sub.title?.en || '').localeCompare(
        b.sub.title?.[lang] || b.sub.title?.en || ''
      )
    );
  }, [lang]);

  // Debounced GA4 Search Event Tracking
  useEffect(() => {
    const trimmed = searchQuery.trim();
    if (isAdminView || trimmed.length < 2) return;
    const timer = setTimeout(() => {
      trackSearch(trimmed, searchResults.length, lang);
    }, 800);
    return () => clearTimeout(timer);
  }, [searchQuery, searchResults.length, lang, isAdminView]);

  const toggleDoc = (docId: string) => {
    setCheckedDocs(prev => ({ ...prev, [docId]: !prev[docId] }));
  };

  const totalDocs = selectedSubCat?.required_documents?.length || 0;
  const markedDocs = selectedSubCat?.required_documents?.filter(d => checkedDocs[d.id])?.length || 0;

  // Admin session exit is handled exclusively by the "Public View" button.
  // Browser Back/Forward is globally disabled by the navigation trap above.

  const handlePublicViewClick = async () => {
    await clearAdminSession();
    setIsAdminView(false);
    window.history.replaceState(null, '', window.location.href);
  };

  // Real-Time Streaming Voice Search Handler
  const handleToggleVoiceSearch = () => {
    if (isListening) {
      stopActiveVoiceRecognition();
      setIsListening(false);
      return;
    }

    if (!isVoiceSearchSupported()) {
      alert('Voice recognition is not supported on this browser. Please use Chrome, Edge, or Safari.');
      return;
    }

    setIsListening(true);
    startVoiceRecognition(
      lang,
      (streamingTranscript) => {
        setSearchQuery(streamingTranscript);
      },
      (error) => {
        setIsListening(false);
        if (error && error.includes('blocked')) {
          alert(error);
        }
      },
      () => {
        setIsListening(false);
      }
    );
  };

  // Dual-Path Territorial Resolution
  const isDualPath = selectedSubCat?.territory_track === 'Dual_Path' && Boolean(selectedSubCat?.dual_path);
  const currentDualData = isDualPath && selectedSubCat.dual_path ? selectedSubCat.dual_path[activeTerritoryTrack] : null;

  const currentAuthority = currentDualData
    ? (currentDualData.authority[lang] || currentDualData.authority.en || '')
    : (selectedSubCat?.authority_forum?.[lang] || selectedSubCat?.authority_forum?.en || '');

  const currentSteps = currentDualData
    ? (currentDualData.steps[lang] || currentDualData.steps.en || [])
    : (selectedSubCat?.roadmap_steps?.[lang] || selectedSubCat?.roadmap_steps?.en || []);

  const currentTimeframe = currentDualData?.statutory_timeframe?.[lang]
    || currentDualData?.statutory_timeframe?.en
    || selectedSubCat?.statutory_timeframe?.[lang]
    || selectedSubCat?.statutory_timeframe?.en
    || '';

  const currentFees = currentDualData?.fees || selectedSubCat?.fees || [];
  const currentTimelineInfo = currentDualData?.timeline_info || selectedSubCat?.timeline_info || [];

  const currentPortalUrl = currentDualData?.portal_url || selectedSubCat?.official_portal_url;
  const currentPortalName = currentDualData?.portal_name
    ? (currentDualData.portal_name[lang] || currentDualData.portal_name.en)
    : null;

  // Active Statutory Notice Drafter Mapping
  const activeTemplateId = useMemo(() => {
    return getWorkflowTemplateMapping(selectedSubCat?.id, selectedCat?.id, selectedSubCat);
  }, [selectedSubCat, selectedCat]);

  const activeProTemplate = useMemo(() => {
    return getTemplateById(activeTemplateId);
  }, [activeTemplateId]);

  useEffect(() => {
    if (!isAdminView) {
      setShowDrafterToast(true);
    }
  }, [selectedSubCat?.id, isAdminView]);

  const resolvedProTitle = activeProTemplate.title[lang] || activeProTemplate.title.en;

  return (
    <div 
      className="min-h-screen bg-slate-50 flex flex-col font-sans antialiased text-slate-900 relative"
      style={{
        backgroundImage: WATERMARK_SVG_URI,
        backgroundRepeat: 'repeat'
      }}
    >
      {Capacitor.isNativePlatform() && (
        <SplashScreen isOpen={showSplash} onClose={handleSplashClose} lang={lang} />
      )}
      <DisclaimerBanner lang={lang} />
      <OfflineBanner lang={lang} />

{/* STICKY NAVIGATION BAR */}
      <header className="bg-[#0a1e34]/95 backdrop-blur-md text-white border-b border-white/10 sticky top-0 z-40 shadow-lg transition-all">
        <div className="max-w-7xl mx-auto px-2.5 sm:px-3 xl:px-4 py-1.5 md:py-2.5">
          {/* Header Layout: 2-row clean stack on mobile (<md: 768px), single unified row on tablet/desktop/Chrome-desktop-view (>=md: 768px) */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-1.5 md:gap-2 lg:gap-4 xl:gap-6 min-w-0">
            {/* BRAND BAR: Logo + Title (left) & Lexipulse emblem (mobile-right <md) */}
            <div className="flex items-center justify-between md:justify-start gap-2 md:gap-2.5 xl:gap-3 w-full md:w-auto shrink-0">
              <div
                className="flex items-center gap-2 md:gap-2.5 xl:gap-3 cursor-pointer shrink-0 group select-none"
                onClick={() => {
                  if (isLibraryView) {
                    exitLibraryView();
                    return;
                  }
                  if (isAdminView) handlePublicViewClick();
                  if (isAppDownloadView) {
                    setRoutePath('/');
                    window.history.pushState({}, '', '/');
                    return;
                  }
                  setSearchQuery('');
                }}
              >
                <div 
                  className="w-8 h-8 md:w-9 md:h-9 xl:w-10 xl:h-10 rounded-xl bg-white border-2 border-red-500 flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300 relative transform-gpu"
                  style={{
                    boxShadow: '0 0 18px rgba(239, 68, 68, 0.95), 0 0 35px rgba(220, 38, 38, 0.55), inset 0 2px 3px #ffffff, inset 0 -3px 5px rgba(185, 28, 28, 0.5), 0 4px 8px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  <span className="absolute -inset-1 rounded-xl bg-red-500/25 blur-sm animate-pulse pointer-events-none" />
                  <Scale className="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 text-red-600 stroke-[2.5] drop-shadow-[0_1px_3px_rgba(185,28,28,0.7)] relative z-10" />
                </div>

                <div className="min-w-0">
                  <span
                    className={`block font-black tracking-wide leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-100 to-emerald-400 drop-shadow-[0_2px_12px_rgba(245,158,11,0.65)] select-none whitespace-nowrap transition-transform group-hover:brightness-110 ${
                      lang === 'en'
                        ? 'text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl'
                        : 'text-sm sm:text-base md:text-sm lg:text-lg xl:text-xl'
                    }`}
                  >
                    {UI_TEXT.portalTitle[lang]}
                  </span>
                </div>
              </div>

              {/* Mobile-only Lexipulse Emblem (<md, top row right, 1:1 square balanced) */}
              <div
                className="flex md:hidden items-center pl-2 border-l border-slate-700/80 shrink-0"
                aria-label="Parent company: LEXIPULSE TECHNOLOGIES"
              >
                <img
                  src="/brand/lexipulse-technologies-logo.png"
                  alt="LEXIPULSE TECHNOLOGIES"
                  className="w-9 h-9 sm:w-10 sm:h-10 aspect-square rounded-lg bg-white p-0.5 object-contain border border-amber-300/70 shadow-[0_2px_10px_rgba(245,158,11,0.25)]"
                  width="40"
                  height="40"
                />
              </div>
            </div>

            {/* ACTION CLUSTER: Second row on mobile (<md), pinned right single-row on tablet/desktop (>=md) */}
            <div className="flex items-center justify-between md:justify-end gap-1.5 md:gap-1.5 lg:gap-2.5 xl:gap-3 w-full md:w-auto shrink-0 flex-nowrap">
              {/* E-LIBRARY PRO — primary action */}
              <button
                type="button"
                onClick={openLibraryView}
                className="group flex items-center gap-1 md:gap-1.5 xl:gap-2 shrink-0 px-2 md:px-2 lg:px-2.5 xl:px-3.5 py-1 md:py-1.5 xl:py-2 rounded-xl bg-gradient-to-r from-amber-400/15 to-emerald-400/15 border border-amber-400/50 hover:border-amber-300 hover:from-amber-400/25 hover:to-emerald-400/25 transition-all shadow-[0_0_14px_rgba(245,158,11,0.25)] cursor-pointer"
                title="E-Library Pro — Genuine Digital Statute Library (88 Official Bare Acts)"
                aria-label="Open E-Library Pro"
              >
                <span className="relative flex w-6 h-6 md:w-7 md:h-7 xl:w-8 xl:h-8 rounded-lg bg-white items-center justify-center border-2 border-emerald-500 shadow-sm group-hover:scale-105 transition-transform shrink-0">
                  <BookOpen className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-700" />
                </span>
                <span className="hidden xl:flex flex-col leading-none text-left">
                  <span className="text-[11px] sm:text-[12px] font-black tracking-[0.12em] text-amber-300 whitespace-nowrap">E-LIBRARY</span>
                  <span className="text-[8px] font-bold tracking-[0.3em] text-emerald-300 whitespace-nowrap mt-0.5">PRO</span>
                </span>
                <span className="inline xl:hidden text-[10px] md:text-[11px] font-black tracking-wider text-amber-300 whitespace-nowrap">E-LIB</span>
              </button>

              {/* QR SHARE — desktop only (>= 1280px) */}
              <a
                href="/assets/qr-logo.jpeg"
                download="NyayaMitra-Website-QR.jpeg"
                className="group hidden xl:flex items-center gap-2 shrink-0 pl-1.5 pr-2.5 py-1.5 rounded-xl bg-white/95 border border-emerald-400/70 hover:border-emerald-300 hover:shadow-[0_0_14px_rgba(16,185,129,0.45)] transition-all cursor-pointer"
                title="Download Website QR to Share"
                aria-label="Download Website QR to Share"
              >
                <img
                  src="/assets/qr-logo.jpeg"
                  alt="NyayaMitra Website QR Code"
                  className="w-7 h-7 xl:w-8 xl:h-8 rounded-md object-contain bg-white border border-slate-200 shrink-0 group-hover:scale-105 transition-transform"
                  width="32"
                  height="32"
                  loading="lazy"
                />
                <span className="hidden 2xl:flex flex-col leading-none text-left">
                  <span className="text-[9.5px] font-extrabold text-slate-900 whitespace-nowrap">Download Website QR</span>
                  <span className="text-[8.5px] font-bold text-emerald-700 whitespace-nowrap mt-0.5">to Share</span>
                </span>
              </a>

              {/* LANGUAGE SWITCHER — compact, touch-friendly */}
              <div className="flex bg-[#071626] rounded-lg p-0.5 md:p-1 border border-slate-700/80 text-xs shadow-inner shrink-0">
                <button
                  onClick={() => { setLang('bn'); trackLanguageSwitch('bn'); }}
                  className={`px-1.5 md:px-1.5 lg:px-2 xl:px-2.5 py-1 rounded font-semibold transition text-[10px] sm:text-xs ${
                    lang === 'bn' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  বাংলা
                </button>
                <button
                  onClick={() => { setLang('hi'); trackLanguageSwitch('hi'); }}
                  className={`px-1.5 md:px-1.5 lg:px-2 xl:px-2.5 py-1 rounded font-semibold transition text-[10px] sm:text-xs ${
                    lang === 'hi' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  हिन्दी
                </button>
                <button
                  onClick={() => { setLang('en'); trackLanguageSwitch('en'); }}
                  className={`px-1.5 md:px-1.5 lg:px-2 xl:px-2.5 py-1 rounded font-semibold transition text-[10px] sm:text-xs ${
                    lang === 'en' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  English
                </button>
              </div>

              {/* CONTACT EMAIL — compact icon button on >=lg (1024px+) */}
              <a
                href="mailto:namaste@nyayamitrawb.in"
                className="hidden lg:flex p-1.5 xl:p-2 rounded-lg border text-xs font-bold items-center bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white transition shadow-xs shrink-0"
                title="Contact: namaste@nyayamitrawb.in"
                aria-label="Email NyayaMitra Support: namaste@nyayamitrawb.in"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              </a>

              {/* EXIT BUTTON — mobile native only */}
              {Capacitor.isNativePlatform() && (
                <button
                  type="button"
                  onClick={handleExitApp}
                  className="flex px-2 sm:px-2.5 py-1.5 rounded-lg border text-xs font-bold items-center gap-1.5 bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-red-900/30 hover:border-red-500 hover:text-red-400 transition shadow-xs shrink-0"
                  title="Exit Application"
                  aria-label="Exit Application"
                >
                  <LogOut className="w-3.5 h-3.5 text-slate-400 hover:text-red-400 shrink-0" />
                  <span className="hidden sm:inline">Exit</span>
                </button>
              )}

              {/* ADMIN / LOGIN — web only */}
              {!Capacitor.isNativePlatform() && (
                <>
                  {isAdminView ? (
                    <button
                      onClick={handlePublicViewClick}
                      className="px-2 md:px-2.5 xl:px-3 py-1 md:py-1.5 rounded-lg border text-xs font-bold flex items-center gap-1.5 bg-amber-500 text-slate-950 border-amber-400 hover:bg-amber-400 shadow-sm transition whitespace-nowrap shrink-0"
                    >
                      <Globe className="w-3.5 h-3.5 shrink-0" />
                      <span className="hidden xl:inline">{UI_TEXT.publicViewBtn[lang]}</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowLoginModal(true)}
                      className="hidden md:flex p-1.5 xl:px-3 xl:py-1.5 rounded-lg border text-xs font-bold items-center gap-1.5 bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white transition whitespace-nowrap shrink-0"
                      title="Admin Login"
                      aria-label="Admin Login"
                    >
                      <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="hidden xl:inline">{UI_TEXT.adminLoginBtn[lang]}</span>
                    </button>
                  )}
                </>
              )}

              {/* DOWNLOAD APP BUTTON — PROMINENT, BOLD, ALWAYS VISIBLE ON WEB */}
              {!isAppDownloadView && !Capacitor.isNativePlatform() && (
                <a
                  href="/app"
                  className="px-2.5 md:px-3 xl:px-3.5 py-1 md:py-1.5 rounded-xl border border-emerald-400/80 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs xl:text-sm shadow-[0_0_12px_rgba(16,185,129,0.35)] hover:shadow-[0_0_18px_rgba(16,185,129,0.55)] transition-all flex items-center gap-1.5 shrink-0 whitespace-nowrap select-none cursor-pointer"
                  title="Download Mobile Application"
                >
                  <Download className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0 text-white" />
                  <span className="tracking-wide">Download App</span>
                </a>
              )}

              {/* RETURN TO MAIN PAGE — only on /app page */}
              {isAppDownloadView && (
                <a
                  href="/"
                  className="px-2.5 md:px-3 xl:px-3.5 py-1 md:py-1.5 rounded-xl border border-amber-400 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs xl:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 shrink-0 whitespace-nowrap select-none cursor-pointer"
                  title="Return to Main Page"
                  aria-label="Return to Main Page"
                >
                  <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" />
                  <span className="sm:hidden font-bold">Main Page</span>
                  <span className="hidden sm:inline font-bold">Return to Main Page</span>
                </a>
              )}

              {/* LEXIPULSE LOGO (tablet/desktop >=md, always last, 1:1 aspect ratio) */}
              <div
                className="hidden md:flex items-center gap-2 md:pl-2.5 xl:pl-3 border-l border-slate-700/80 shrink-0"
                aria-label="Parent company: LEXIPULSE TECHNOLOGIES"
              >
                <img
                  src="/brand/lexipulse-technologies-logo.png"
                  alt="LEXIPULSE TECHNOLOGIES"
                  className="w-10 h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 aspect-square rounded-xl bg-white p-0.5 object-contain border border-amber-300/70 shadow-[0_2px_12px_rgba(245,158,11,0.28)] hover:scale-105 transition-transform"
                  width="48"
                  height="48"
                />
                <span className="hidden xl:block text-[9.5px] leading-tight font-bold tracking-[0.08em] text-slate-300 whitespace-nowrap">
                  LEXIPULSE<br />TECHNOLOGIES
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* HERO BANNER — Compact Height, Full-Width Left-to-Right Stretch & 100% Picture Visible Across All Devices (Shared across /, /elibrarypro, and /app) */}
      {!isAdminView && (
        <section className="relative w-full text-white bg-[#071626] border-b-2 border-amber-500/50 shadow-2xl z-20">
          <div className="relative w-full overflow-hidden bg-[#071626]">
            <picture className="block w-full">
              <source media="(max-width: 639px)" srcSet="/assets/hero-banner-mobile.webp" type="image/webp" />
              <source media="(max-width: 1023px)" srcSet="/assets/hero-banner-tablet.webp" type="image/webp" />
              <img
                src="/assets/hero-banner.webp"
                alt="High Court at Calcutta with antique brass Scales of Justice, warm desk lamp, and bound Indian legal codes"
                className="block w-full h-auto md:h-[390px] lg:h-[430px] xl:h-[460px] md:object-fill select-none pointer-events-none"
                fetchPriority="high"
                decoding="async"
              />
            </picture>

            {/* Subtle readability scrim */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#051120]/45 via-[#071626]/20 to-[#071626] md:to-[#071422]/45 pointer-events-none" />
          </div>

          {/* Overlay Controls: seamlessly below picture on mobile (<md), overlaid cleanly inside compact banner on tablet/desktop (>=md) */}
          <div className="relative md:absolute md:inset-0 flex flex-col justify-center px-3 sm:px-4 pt-2.5 pb-5 md:py-4">
            {isLibraryView ? (
              <div className="max-w-4xl w-full mx-auto bg-[#051120]/70 backdrop-blur-sm border border-amber-400/40 rounded-2xl p-4 sm:p-6 shadow-2xl space-y-3 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/50 text-amber-300 text-[10.5px] font-black tracking-widest uppercase">
                  <Library className="w-3.5 h-3.5 shrink-0" />
                  <span>{ELIBRARY_HERO_UI.tagline[lang]}</span>
                </div>

                <div className="flex items-center justify-between gap-3 sm:gap-4 flex-wrap">
                  <h1 className="text-xl sm:text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-400">
                    {ELIBRARY_HERO_UI.title[lang]}
                  </h1>
                  <button
                    type="button"
                    onClick={exitLibraryView}
                    className="group flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 border border-emerald-400/70 hover:border-emerald-300 text-white transition-all shrink-0 cursor-pointer shadow-[0_0_12px_rgba(16,185,129,0.3)]"
                    title={ELIBRARY_HERO_UI.backToMain[lang]}
                    aria-label={ELIBRARY_HERO_UI.backToMain[lang]}
                  >
                    <span className="w-6 h-6 rounded-lg bg-gradient-to-tr from-amber-400 to-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Home className="w-3.5 h-3.5 text-slate-950" />
                    </span>
                    <span className="text-[11px] sm:text-xs font-extrabold tracking-wide whitespace-nowrap">
                      {ELIBRARY_HERO_UI.backToMain[lang]}
                    </span>
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-slate-100 font-medium leading-relaxed">
                  {ELIBRARY_HERO_UI.subtitle[lang]}
                </p>

                <div className="flex flex-wrap gap-2 pt-0.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/45 border border-white/20 text-[10.5px] font-bold text-white">
                    <BookOpenText className="w-3 h-3 text-amber-300" />{ELIBRARY_HERO_UI.badges.acts[lang]}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/45 border border-white/20 text-[10.5px] font-bold text-white">
                    <Landmark className="w-3 h-3 text-emerald-300" />{ELIBRARY_HERO_UI.badges.source[lang]}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/45 border border-white/20 text-[10.5px] font-bold text-white">
                    <ShieldCheck className="w-3 h-3 text-emerald-300" />{ELIBRARY_HERO_UI.badges.genuine[lang]}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/45 border border-white/20 text-[10.5px] font-bold text-white">
                    <Lock className="w-3 h-3 text-rose-300" />{ELIBRARY_HERO_UI.badges.secure[lang]}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/45 border border-white/20 text-[10.5px] font-bold text-white">
                    <Gavel className="w-3 h-3 text-sky-300" />{ELIBRARY_HERO_UI.badges.trilingual[lang]}
                  </span>
                </div>
              </div>
            ) : isAppDownloadView ? (
              <div className="max-w-3xl w-full mx-auto bg-[#051120]/70 backdrop-blur-sm border border-amber-400/40 rounded-2xl p-4 sm:p-6 shadow-2xl text-center space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-black tracking-widest uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-400/50">
                  <Smartphone className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                  <span>ANDROID NATIVE APPLICATION &bull; v1.0.0</span>
                </div>

                <h1 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-300 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                  Download NyayaMitra App
                </h1>

                <p className="text-xs sm:text-sm md:text-base text-slate-100 max-w-xl mx-auto font-medium leading-relaxed">
                  Free civil legal navigator for West Bengal — offline access, audio roadmaps, secure E-Library, and advocate connect.
                </p>

                <div className="pt-1 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10.5px] text-slate-100">
                  <span className="inline-flex items-center gap-1 bg-black/50 border border-white/20 px-3 py-1 rounded-full">
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span>BCI Rule 36 Compliant</span>
                  </span>
                  <span className="inline-flex items-center gap-1 bg-black/50 border border-white/20 px-3 py-1 rounded-full">
                    <Lock className="w-3 h-3 text-amber-400" />
                    <span>DPDP Act 2023 Ready</span>
                  </span>
                  <span className="inline-flex items-center gap-1 bg-black/50 border border-white/20 px-3 py-1 rounded-full">
                    <ShieldCheck className="w-3 h-3 text-sky-400" />
                    <span>Zero Ads &amp; Zero Trackers</span>
                  </span>
                </div>
              </div>
            ) : (
            <div className="max-w-5xl w-full mx-auto text-center space-y-2 sm:space-y-2.5 lg:space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-black tracking-widest uppercase bg-slate-950/75 text-amber-300 border border-amber-400/60 shadow-lg backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{UI_TEXT.heroSuperTitle[lang]}</span>
              </div>

              <div>
                {hasExplicitTopic ? (
                  <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black tracking-tight text-white leading-snug drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)] select-none">
                    {UI_TEXT.heroMainTitle[lang]}
                  </h2>
                ) : (
                  <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black tracking-tight text-white leading-snug drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)] select-none">
                    {UI_TEXT.heroMainTitle[lang]}
                  </h1>
                )}
              </div>

              <p className="text-xs sm:text-sm md:text-base text-slate-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-[0_1px_10px_rgba(0,0,0,0.95)]">
                {UI_TEXT.tagline[lang]}
              </p>

              {/* SEARCH ROW: Search Bar + Pro Drafter + Quick Jump + Advocate Connect */}
              <div className="relative max-w-4xl mx-auto pt-1 flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-center justify-center gap-2 sm:gap-2.5 lg:gap-3 z-30">
                <div className="relative flex-1 w-full sm:min-w-[260px] flex items-center shadow-[0_20px_50px_rgba(0,0,0,0.6)] rounded-2xl group">
                  <Search className="w-5 h-5 absolute left-4 text-slate-500 group-focus-within:text-amber-500 transition-colors" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder={isListening ? UI_TEXT.voiceListeningPrompt[lang] : UI_TEXT.searchPlaceholder[lang]}
                    className={`w-full pl-12 pr-14 py-3 md:py-3.5 rounded-2xl bg-white/95 backdrop-blur-md text-slate-900 text-xs sm:text-sm font-medium border-2 transition-all focus:outline-none ${
                      isListening
                        ? 'border-red-500 ring-4 ring-red-400/30 placeholder-red-600 font-semibold'
                        : 'border-white/60 focus:border-amber-400 placeholder-slate-400 shadow-inner'
                    }`}
                  />

                  <button
                    type="button"
                    onClick={handleToggleVoiceSearch}
                    className={`absolute right-2.5 p-2 rounded-xl transition-all flex items-center justify-center ${
                      isListening ? 'bg-red-600 text-white animate-pulse shadow-md' : 'text-slate-500 hover:text-[#0f2b48] hover:bg-slate-100'
                    }`}
                    title={isListening ? 'Stop Listening' : 'Voice Search (Awaaz)'}
                  >
                    {isListening ? <MicOff className="w-4 h-4 text-white" /> : <Mic className="w-4 h-4 text-emerald-700" />}
                  </button>
                </div>

                {/* ACTION BUTTON 1: NYAYAMITRA PRO DRAFTER (₹99) */}
                <button
                  type="button"
                  onClick={() => setShowProModal(true)}
                  className="shrink-0 flex items-center justify-center gap-2 px-4 py-3 md:py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm shadow-[0_0_20px_rgba(245,158,11,0.7)] animate-pulse-glow transition hover:scale-105 cursor-pointer border-2 border-amber-300 w-full sm:w-auto"
                  title="Draft Statutory Notice (₹99)"
                >
                  <Zap className="w-4 h-4 fill-slate-950 text-slate-950" />
                  <span>{UI_TEXT.proDrafterBtn[lang]}</span>
                </button>

                {/* ACTION BUTTON 2: Quick Jump (Ctrl+K) */}
                <button
                  type="button"
                  onClick={() => setIsCommandPaletteOpen(true)}
                  className="shrink-0 flex items-center justify-center gap-2 px-4 py-3 md:py-3.5 rounded-2xl bg-[#0a1e34]/90 hover:bg-[#0f2b48] border-2 border-amber-400/60 text-white text-xs sm:text-sm font-bold shadow-xl transition-all hover:scale-105 active:scale-95 group w-full sm:w-auto cursor-pointer"
                  title="Quick Jump Command Palette (Ctrl+K)"
                >
                  <Command className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
                  <span>{UI_TEXT.quickJumpBtn[lang]}</span>
                  <kbd className="font-mono text-[10px] bg-slate-900 px-1.5 py-0.5 rounded border border-slate-700 text-amber-300">
                    Ctrl K
                  </kbd>
                </button>

                {/* ACTION BUTTON 3: Advocate Connect (₹499) */}
                <button
                  type="button"
                  onClick={() => setShowAdvocateModal(true)}
                  className="shrink-0 flex items-center justify-center gap-2 px-4 py-3 md:py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm shadow-[0_0_20px_rgba(245,158,11,0.7)] animate-pulse-glow transition hover:scale-105 cursor-pointer border-2 border-amber-300 w-full sm:w-auto"
                  title="Connect with Legal Advocate (₹499)"
                >
                  <Scale className="w-4 h-4" />
                  <span>Connect Legal Advocate (₹499)</span>
                </button>
              </div>

              {/* Search Dropdown */}
              {searchQuery.trim() && (
                <div className="relative max-w-2xl mx-auto z-40">
                  <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 max-h-72 overflow-y-auto z-50 text-left divide-y divide-slate-100 animate-in fade-in duration-100">
                    {searchResults.length > 0 ? (
                      searchResults.map(({ categoryId, subcategory }) => (
                        <div
                          key={subcategory.id}
                          onClick={() => {
                            const parentCat = CIVIL_CATEGORIES.find(c => c.id === categoryId);
                            if (parentCat) {
                              setHasExplicitTopic(true);
                              setSelectedCat(parentCat);
                              setSelectedSubCat(subcategory);
                              trackWorkflowSelect({
                                categoryId: parentCat.id,
                                topicId: subcategory.id,
                                topicTitle: subcategory.title?.[lang] || subcategory.title?.en || '',
                                lang,
                                source: 'search_result'
                              });
                            }
                            setSearchQuery('');
                          }}
                          className="p-3 hover:bg-emerald-50 cursor-pointer transition flex items-center justify-between gap-2 text-slate-800"
                        >
                          <div>
                            <div className="font-bold text-xs sm:text-sm text-slate-900">
                              {subcategory?.title?.[lang]}
                            </div>
                            <div className="text-[11px] text-slate-500 line-clamp-1">
                              {subcategory?.relevant_act} &bull; {subcategory?.authority_forum?.[lang]}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-emerald-700 shrink-0" />
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-center text-xs text-slate-500">
                        {UI_TEXT.noResults[lang]}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Seals */}
              <div className="pt-1 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[10.5px] text-slate-200">
              <span className="inline-flex items-center gap-1 bg-black/50 border border-white/20 px-3 py-1 rounded-full backdrop-blur-xs">
                <Check className="w-3 h-3 text-emerald-400" />
                <span>BCI Rule 36 Verified Non-Commercial</span>
              </span>
              <span className="inline-flex items-center gap-1 bg-black/50 border border-white/20 px-3 py-1 rounded-full backdrop-blur-xs">
                <Lock className="w-3 h-3 text-amber-400" />
                <span>DPDP Act 2023 Encrypted</span>
              </span>
              <span className="inline-flex items-center gap-1 bg-black/50 border border-white/20 px-3 py-1 rounded-full backdrop-blur-xs">
                <Compass className="w-3 h-3 text-sky-400" />
                <span>Razorpay Live Verified Gateway</span>
              </span>
              </div>
            </div>
            )}
          </div>
        </section>
      )}
 
{/* MAIN CONTENT AREA */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6 space-y-7 relative z-10">
          {isAdminView ? (
            <AdminAdvisorPanel lang={lang} />
          ) : isLibraryView ? (
            <ELibraryProPage lang={lang} onBackToMain={exitLibraryView} />
          ) : isAppDownloadView ? (
            <AppDownloadPage />
          ) : (
            <>
             {/* 1. 12 HIGH-VALUE OFFICIAL GOVERNMENT PORTALS */}
            <section className="bg-white/95 backdrop-blur-xs rounded-2xl border border-[#f59e0b]/70 p-4 sm:p-6 shadow-[0_0_18px_rgba(245,158,11,0.16)] space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#0f2b48] text-amber-400 flex items-center justify-center font-bold shadow-xs">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-sm sm:text-base font-extrabold text-[#0f2b48] flex items-center gap-2">
                      <span>{UI_TEXT.directoryTitle[lang]}</span>
                      <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-extrabold bg-emerald-100 text-emerald-900 border border-emerald-300">
                        12 Verified Gateways
                      </span>
                    </h2>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {UI_TEXT.directorySubtitle[lang]}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Authentic Direct Links</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
                {HIGH_VALUE_PORTALS.map(portal => {
                  const portalName = portal.name?.[lang] || portal.name?.en || 'Official Portal';
                  const portalScope = portal.scope?.[lang] || portal.scope?.en || 'West Bengal';
                  const portalDesc = portal.desc?.[lang] || portal.desc?.en || '';

                  return (
                    <div
                      key={portal.id}
                      className="p-3.5 rounded-xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white hover:border-[#0f2b48] hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-start justify-between gap-1.5">
                          <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded border uppercase tracking-wider ${portal.badgeColor}`}>
                            {portalScope}
                          </span>
                          <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#0f2b48] transition shrink-0" />
                        </div>
                        <h3 className="font-extrabold text-xs text-slate-900 leading-snug group-hover:text-[#0f2b48] transition">
                          {portalName}
                        </h3>
                        <p className="text-[10px] text-slate-500 leading-relaxed line-clamp-3">
                          {portalDesc}
                        </p>
                      </div>

                      <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between">
                        <span className="font-mono text-[8.5px] text-slate-400 truncate max-w-[85px]" title={portal.url}>
                          {portal.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                        </span>
                        <a
                          href={portal.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => trackPortalClick(portal.id, portalName, portal.url)}
                          className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 hover:text-emerald-900 group-hover:underline whitespace-nowrap"
                        >
                          <span>{UI_TEXT.visitPortalBtn[lang]}</span>
                          <ArrowRight className="w-2.5 h-2.5" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 2. 6 Core Civil Legal Categories */}
            <section className="space-y-3 rounded-2xl border border-[#f59e0b]/70 bg-white/45 p-3 sm:p-4 shadow-[0_0_18px_rgba(245,158,11,0.14)]">
              <div className="flex items-center justify-between">
                <h2 className="text-xs sm:text-sm font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  {UI_TEXT.selectCategory[lang]}
                </h2>
                <span className="text-xs text-slate-500 font-bold bg-slate-200/80 px-2.5 py-0.5 rounded-full">
                  {TOTAL_WORKFLOW_COUNT || 300} {UI_TEXT.topicsCount[lang]}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {CIVIL_CATEGORIES.map(cat => (
                  <a
                    key={cat.id}
                    href={getCategoryGuidePath(cat.id)}
                    onClick={(e) => {
                      e.preventDefault();
                      setHasExplicitTopic(true);
                      setSelectedCat(cat);
                      if (cat.subcategories && cat.subcategories.length > 0) {
                        const firstSub = cat.subcategories[0];
                        setSelectedSubCat(firstSub);
                        trackWorkflowSelect({
                          categoryId: cat.id,
                          topicId: firstSub.id,
                          topicTitle: firstSub.title?.[lang] || firstSub.title?.en || '',
                          lang,
                          source: 'category_grid'
                        });
                      }
                    }}
                    className={`block p-4 rounded-xl border cursor-pointer transition-all ${
                      selectedCat?.id === cat.id
                        ? 'bg-white border-emerald-600 shadow-md ring-2 ring-emerald-600/30'
                        : 'bg-white/95 border-slate-200 hover:border-slate-300 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-bold text-slate-900 text-xs sm:text-sm">{cat?.title?.[lang]}</h3>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 shrink-0">
                        {cat?.subcategories?.length || 50} Workflows
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">{cat?.description?.[lang]}</p>
                  </a>
                ))}
              </div>
            </section>

            {/* 3. 50 Subcategory Horizontal Scrollable Pills */}
            <div className="relative">
              <div
                ref={pillsContainerRef}
                className="flex gap-2 overflow-x-auto pb-2 border-b border-slate-200 scrollbar-thin scrollbar-thumb-slate-300"
              >
                {(selectedCat?.subcategories || []).map((sub, idx) => (
                  <button
                    key={sub.id}
                    onClick={() => {
                      setHasExplicitTopic(true);
                      setSelectedSubCat(sub);
                      trackWorkflowSelect({
                        categoryId: selectedCat.id,
                        topicId: sub.id,
                        topicTitle: sub.title?.[lang] || sub.title?.en || '',
                        lang,
                        source: 'workflow_pill'
                      });
                    }}
                    className={`px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                      selectedSubCat?.id === sub.id
                        ? 'bg-[#0f2b48] text-white shadow-sm ring-2 ring-amber-400/50'
                        : 'bg-white/95 text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span className="text-[10px] font-mono opacity-60">{idx + 1}.</span>
                    <span>{sub?.title?.[lang]}</span>
                    <span className="ml-0.5 px-1 py-0.2 rounded-full text-[9px] bg-amber-400/25 text-amber-500 font-bold" title="Statutory Notice Drafter Available">
                      ⚡
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Procedural Roadmap & Document Checklist Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-5">
                <div className="bg-white/95 backdrop-blur-xs p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-block px-2.5 py-1 rounded text-[11px] font-bold bg-[#0f2b48] text-white">
                        {selectedSubCat?.relevant_act}
                      </span>
                      {currentTimeframe && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded text-[11px] font-semibold bg-blue-50 text-blue-800 border border-blue-200">
                          <Clock className="w-3 h-3 text-blue-600" />
                          {currentTimelineInfo.length > 0 ? UI_TEXT.processTimeframeHeading[lang] : UI_TEXT.timeframeHeading[lang]} {currentTimeframe}
                        </span>
                      )}
                      
                      </div>

                    {hasExplicitTopic ? (
                      <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-2">
                        {selectedSubCat?.title?.[lang]}
                      </h1>
                    ) : (
                      <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-2">
                        {selectedSubCat?.title?.[lang]}
                      </h2>
                    )}
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {selectedSubCat?.summary?.[lang]}
                    </p>

                    {/* E-E-A-T / YMYL Legal Reviewer Byline & Statutory Currency */}
                    <div className="mt-2.5 inline-flex flex-wrap items-center gap-x-2 gap-y-1 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/80 text-[11px] text-slate-600">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>
                        {lang === 'bn'
                          ? `আইনি পর্যালোচক: ${ADVOCATE_PROFILE.name} (Bar Council ID: ${ADVOCATE_PROFILE.barCouncilId})`
                          : lang === 'hi'
                            ? `विधिक समीक्षक: ${ADVOCATE_PROFILE.name} (Bar Council ID: ${ADVOCATE_PROFILE.barCouncilId})`
                            : `Reviewed by ${ADVOCATE_PROFILE.name} (Bar Council ID: ${ADVOCATE_PROFILE.barCouncilId})`}
                      </span>
                      <span className="text-slate-400">&bull;</span>
                      <span className="font-semibold text-emerald-700">
                        {lang === 'bn'
                          ? 'হালনাগাদ: নভেম্বর ২০২৬'
                          : lang === 'hi'
                            ? 'अद्यतन: नवंबर 2026'
                            : 'Last Verified: Nov 2026'}
                      </span>
                    </div>
                  </div>

                  {/* Dual-Track Jurisdictional Switcher */}
                  {isDualPath && (
                    <div className="p-3.5 sm:p-4 bg-transparent rounded-2xl border border-slate-200 shadow-xs space-y-3 select-none">
                      <div className="flex items-center justify-between gap-2 border-b border-slate-200/80 pb-2">
                        <span className="text-[11px] font-black text-slate-800 uppercase tracking-widest flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          {UI_TEXT.territoryToggleHeading[lang]}
                        </span>
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300 shrink-0">
                          Dual Track
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div
                          onClick={() => {
                            setActiveTerritoryTrack('rural_district');
                            trackTrackSwitch('rural_district', selectedSubCat?.id);
                          }}
                          className={`p-3.5 rounded-xl border-2 cursor-pointer transition-all flex flex-col justify-between gap-2.5 relative group ${
                            activeTerritoryTrack === 'rural_district'
                              ? 'bg-gradient-to-br from-emerald-50 to-white border-emerald-600 ring-2 ring-emerald-500/20 shadow-md'
                              : 'bg-white/80 border-slate-200 hover:border-emerald-300 hover:bg-slate-50/60'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <div className="font-extrabold text-xs sm:text-[13px] text-slate-900 flex items-center gap-1.5">
                                <span>🌾</span>
                                <span className={activeTerritoryTrack === 'rural_district' ? 'text-emerald-950' : 'text-slate-800'}>
                                  {UI_TEXT.ruralTrackTitle[lang]}
                                </span>
                              </div>
                              <p className="text-[10.5px] text-slate-500 mt-0.5 font-medium">
                                {UI_TEXT.ruralTrackSub[lang]}
                              </p>
                            </div>
                            {activeTerritoryTrack === 'rural_district' && (
                              <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                                <Check className="w-3.5 h-3.5 stroke-[3]" />
                              </div>
                            )}
                          </div>

                          <div className="flex flex-wrap gap-1 pt-1.5 border-t border-slate-100">
                            {UI_TEXT.ruralTrackBadges[lang].map((b, bIdx) => (
                              <span key={bIdx} className="text-[9.5px] font-semibold px-2 py-0.5 rounded bg-emerald-100/70 text-emerald-800 border border-emerald-300">
                                {b}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div
                          onClick={() => {
                            setActiveTerritoryTrack('kolkata_urban');
                            trackTrackSwitch('kolkata_urban', selectedSubCat?.id);
                          }}
                          className={`p-3.5 rounded-xl border-2 cursor-pointer transition-all flex flex-col justify-between gap-2.5 relative group ${
                            activeTerritoryTrack === 'kolkata_urban'
                              ? 'bg-gradient-to-br from-blue-50 to-white border-[#0f2b48] ring-2 ring-blue-500/20 shadow-md'
                              : 'bg-white/80 border-slate-200 hover:border-blue-300 hover:bg-slate-50/60'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <div className="font-extrabold text-xs sm:text-[13px] text-slate-900 flex items-center gap-1.5">
                                <span>🏛️</span>
                                <span className={activeTerritoryTrack === 'kolkata_urban' ? 'text-[#0f2b48]' : 'text-slate-800'}>
                                  {UI_TEXT.kolkataTrackTitle[lang]}
                                </span>
                              </div>
                              <p className="text-[10.5px] text-slate-500 mt-0.5 font-medium">
                                {UI_TEXT.kolkataTrackSub[lang]}
                              </p>
                            </div>
                            {activeTerritoryTrack === 'kolkata_urban' && (
                              <div className="w-5 h-5 rounded-full bg-[#0f2b48] text-white flex items-center justify-center shrink-0 shadow-xs">
                                <Check className="w-3.5 h-3.5 stroke-[3]" />
                              </div>
                            )}
                          </div>

                          <div className="flex flex-wrap gap-1 pt-1.5 border-t border-slate-100">
                            {UI_TEXT.kolkataTrackBadges[lang].map((b, bIdx) => (
                              <span key={bIdx} className="text-[9.5px] font-semibold px-2 py-0.5 rounded bg-blue-100/70 text-blue-800 border border-blue-300">
                                {b}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Authority Forum */}
                  <div className="p-3.5 bg-slate-50/90 rounded-xl border border-slate-200 text-xs text-slate-800 flex items-start gap-2.5">
                    <Building className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-bold text-slate-900 mr-1">
                          {UI_TEXT.authorityHeading[lang]}
                        </span>
                        {isDualPath && (
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                            activeTerritoryTrack === 'rural_district'
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                              : 'bg-blue-100 text-blue-800 border border-blue-300'
                          }`}>
                            {activeTerritoryTrack === 'rural_district' ? UI_TEXT.trackBadgeRural[lang] : UI_TEXT.trackBadgeKolkata[lang]}
                          </span>
                        )}
                      </div>
                      <div className="text-slate-700 font-medium mt-0.5">
                        {currentAuthority}
                      </div>
                    </div>
                  </div>

                  {(currentFees.length > 0 || currentTimelineInfo.length > 0) && (
                    <section className="space-y-2" aria-label={UI_TEXT.evidenceHeading[lang]}>
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">{UI_TEXT.evidenceHeading[lang]}</h4>
                      {currentFees.map(fee => (
                        <details key={fee.id} className="rounded-xl border border-amber-200 bg-amber-50/70 p-3 text-xs">
                          <summary className="cursor-pointer font-bold text-slate-900">
                            {fee.label[lang] || fee.label.en}
                            <span className="ml-2 text-[10px] font-semibold text-amber-800">
                              {fee.evidence.status === 'variable'
                                ? UI_TEXT.variableFee[lang]
                                : fee.kind === 'fixed' && fee.amount_inr !== undefined
                                  ? `${UI_TEXT.feeAmountAtAuthority[lang]}: ₹${fee.amount_inr}`
                                  : UI_TEXT.feeAmountAtAuthority[lang]}
                            </span>
                            <span className="ml-2 text-[10px] font-normal text-slate-500">{UI_TEXT.checkedOn[lang]} {fee.evidence.checked_on}</span>
                          </summary>
                          <div className="mt-2 space-y-1.5 text-slate-700">
                            {fee.formula_description?.[lang] || fee.formula_description?.en ? <p>{fee.formula_description?.[lang] || fee.formula_description?.en}</p> : null}
                            {fee.conditions?.[lang] || fee.conditions?.en ? <p>{fee.conditions?.[lang] || fee.conditions?.en}</p> : null}
                            <p>{UI_TEXT.authorityControls[lang]}</p>
                            <p className="text-[10px]">{fee.evidence.primary_source_title} · {fee.evidence.pinpoint}</p>
                            <a className="font-semibold text-emerald-800 underline break-all" href={fee.evidence.primary_source_url} target="_blank" rel="noopener noreferrer">{fee.evidence.primary_source_url}</a>
                          </div>
                        </details>
                      ))}
                      {currentTimelineInfo.map(timeline => (
                        <details key={timeline.id} className="rounded-xl border border-sky-200 bg-sky-50/70 p-3 text-xs">
                          <summary className="cursor-pointer font-bold text-slate-900">
                            {timeline.label[lang] || timeline.label.en}
                            <span className="ml-2 text-[10px] font-semibold text-sky-800">{UI_TEXT.variableTimeline[lang]}</span>
                            <span className="ml-2 text-[10px] font-normal text-slate-500">{UI_TEXT.checkedOn[lang]} {timeline.evidence.checked_on}</span>
                          </summary>
                          <div className="mt-2 space-y-1.5 text-slate-700">
                            <p>{timeline.value_description[lang] || timeline.value_description.en}</p>
                            {timeline.trigger?.[lang] || timeline.trigger?.en ? <p>{UI_TEXT.triggerLabel[lang]} {timeline.trigger?.[lang] || timeline.trigger?.en}</p> : null}
                            {timeline.consequence?.[lang] || timeline.consequence?.en ? <p>{UI_TEXT.consequenceLabel[lang]} {timeline.consequence?.[lang] || timeline.consequence?.en}</p> : null}
                            <p className="text-[10px]">{timeline.evidence.primary_source_title} · {timeline.evidence.pinpoint}</p>
                            <a className="font-semibold text-emerald-800 underline break-all" href={timeline.evidence.primary_source_url} target="_blank" rel="noopener noreferrer">{timeline.evidence.primary_source_url}</a>
                          </div>
                        </details>
                      ))}
                    </section>
                  )}

                  {/* Audio Roadmap Player */}
                  {selectedSubCat && (
                    <AudioRoadmapPlayer
                      subcategory={selectedSubCat}
                      lang={lang}
                      activeTrack={isDualPath ? activeTerritoryTrack : undefined}
                    />
                  )}

                  {/* Procedural Roadmap Steps */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                      <FileCheck className="w-4 h-4 text-emerald-600" />
                      {UI_TEXT.stepsHeading[lang]}
                    </h4>
                    <div className="space-y-2">
                      {currentSteps.map((step, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/90 border border-slate-100 hover:bg-emerald-50/40 transition text-xs"
                        >
                          <span className="w-5 h-5 rounded-full bg-[#0f2b48] text-amber-300 font-bold flex items-center justify-center shrink-0 text-[11px] shadow-sm">
                            {idx + 1}
                          </span>
                          <span className="text-slate-700 leading-relaxed font-medium">
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Official portal action */}
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    {currentPortalUrl ? (
                      <a
                        href={currentPortalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold shadow-sm transition"
                      >
                        <span>
                          {currentPortalName ? `${UI_TEXT.portalBtn[lang]}: ${currentPortalName}` : UI_TEXT.portalBtn[lang]}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <div />
                    )}

                    {/* ADVOCATE CONNECT — glowing golden CTA (all 300 workflows) */}
                    <button
                      type="button"
                      onClick={() => setShowAdvocateModal(true)}
                      className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm shadow-[0_0_20px_rgba(245,158,11,0.7)] animate-pulse-glow transition hover:scale-105 cursor-pointer border-2 border-amber-300"
                      title="Connect with Legal Advocate (₹499)"
                    >
                      <Scale className="w-4 h-4" />
                      <span>Connect Legal Advocate (₹499)</span>
                    </button>

                  </div>

                  {/* Phase C: Statutory Authority Panel (Landmark Cases, WB Court Fees/Limitation & Appeal Remedies) */}
                  {selectedSubCat?.id && PILLAR_ENRICHMENTS[selectedSubCat.id] && (
                    <div className="mt-4 pt-4 border-t border-slate-200 space-y-4">
                      {(() => {
                        const enr = PILLAR_ENRICHMENTS[selectedSubCat.id];
                        return (
                          <>
                            {enr.executiveSummary && (
                              <div className="p-4 rounded-xl bg-amber-50/90 border border-amber-200/80 border-l-4 border-l-amber-500">
                                <h4 className="text-xs font-extrabold text-[#0f2b48] uppercase tracking-wider flex items-center gap-1.5">
                                  <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                                  <span>Quick Answer</span>
                                </h4>
                                <p className="text-xs text-slate-800 leading-relaxed mt-2 font-medium">{enr.executiveSummary}</p>
                                <p className="text-[10px] text-slate-500 mt-1.5">Reviewed by Advocate Tanweer Ahmed Khan (WB/1863/2010)</p>
                              </div>
                            )}
                            <div className="space-y-2">
                              <h4 className="text-xs font-extrabold text-[#0f2b48] uppercase tracking-wider flex items-center gap-1.5">
                                <Gavel className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                                <span>Landmark Supreme Court &amp; High Court Precedents</span>
                              </h4>
                              <div className="space-y-2">
                                {enr.landmarkCases.map((c, idx) => (
                                  <div
                                    key={idx}
                                    className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs"
                                  >
                                    <div className="font-bold text-slate-900">
                                      {c.citation}{' '}
                                      <span className="font-semibold text-amber-800">({c.court})</span>
                                    </div>
                                    <p className="text-slate-700 mt-1 leading-relaxed">{c.holding}</p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="space-y-2">
                              <h4 className="text-xs font-extrabold text-[#0f2b48] uppercase tracking-wider flex items-center gap-1.5">
                                <Landmark className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                                <span>Statutory Court Fees &amp; Limitation Timelines</span>
                              </h4>
                              <div className="overflow-x-auto rounded-xl border border-slate-200">
                                <table className="w-full text-left border-collapse text-[11px]">
                                  <thead>
                                    <tr className="bg-slate-100 text-slate-800 font-bold">
                                      <th className="p-2.5 border-b border-slate-200">Stage / Forum</th>
                                      <th className="p-2.5 border-b border-slate-200">Fee (WB Court-fees / Rules)</th>
                                      <th className="p-2.5 border-b border-slate-200">Limitation / Window</th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-slate-100 bg-white">
                                    {enr.courtFeeAndLimitation.map((row, idx) => (
                                      <tr key={idx}>
                                        <td className="p-2.5 font-semibold text-slate-900">{row.stage}</td>
                                        <td className="p-2.5 text-slate-700">{row.feeNote}</td>
                                        <td className="p-2.5 text-emerald-800 font-medium">{row.limitation}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <h4 className="text-xs font-extrabold text-[#0f2b48] uppercase tracking-wider flex items-center gap-1.5">
                                <ShieldCheck className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                                <span>Remedies Against Rejection &amp; Statutory Appeals</span>
                              </h4>
                              <div className="space-y-2">
                                {enr.remediesAgainstRejection.map((rem, idx) => (
                                  <div
                                    key={idx}
                                    className="p-3 rounded-xl bg-sky-50/70 border border-sky-200/80 text-xs"
                                  >
                                    <div className="font-bold text-slate-900">{rem.scenario}</div>
                                    <div className="text-slate-700 mt-1">
                                      <span className="font-semibold text-[#0f2b48]">{rem.forum}</span> &bull;{' '}
                                      {rem.provision}{' '}
                                      <span className="inline-block ml-1 px-2 py-0.5 rounded bg-sky-100 text-sky-900 font-bold text-[10px]">
                                        {rem.timeLimit}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {enr.faqs?.length > 0 && (
                              <div className="space-y-2">
                                <h4 className="text-xs font-extrabold text-[#0f2b48] uppercase tracking-wider flex items-center gap-1.5">
                                  <BookOpenText className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                                  <span>Frequently Asked Questions</span>
                                </h4>
                                <div className="space-y-2">
                                  {enr.faqs.map((f, idx) => (
                                    <details
                                      key={idx}
                                      className="rounded-xl border border-slate-200 bg-white/90 p-3 text-xs"
                                    >
                                      <summary className="cursor-pointer font-bold text-slate-900">{f.question}</summary>
                                      <p className="mt-2 text-slate-700 leading-relaxed">{f.answer}</p>
                                    </details>
                                  ))}
                                </div>
                              </div>
                            )}
                          </>
                        );
                      })()}
                    </div>
                  )}
                </div>
              </div>

              {/* Document Checklist & Case Readiness Column */}
              <div className="space-y-4">
                <CaseReadinessGauge totalDocs={totalDocs} markedDocs={markedDocs} lang={lang} />

                <div className="bg-white/95 backdrop-blur-xs p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3.5">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      {UI_TEXT.docsHeading[lang]}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-1">
                      {UI_TEXT.docsSubtitle[lang]}
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-1">
                    {(selectedSubCat?.required_documents || []).map(doc => {
                      const isChecked = Boolean(checkedDocs[doc.id]);
                      return (
                        <div
                          key={doc.id}
                          onClick={() => toggleDoc(doc.id)}
                          className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-2.5 ${
                            isChecked
                              ? 'bg-emerald-50/70 border-emerald-300 shadow-xs'
                              : 'bg-slate-50/90 border-slate-200 hover:border-slate-300 hover:bg-slate-100/70'
                          }`}
                        >
                          {isChecked ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                          ) : (
                            <Circle className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                          )}
                          <div className="text-xs">
                            <div className={`font-semibold ${isChecked ? 'text-emerald-950 line-through decoration-emerald-600/60' : 'text-slate-800'}`}>
                              {doc?.name?.[lang]}
                            </div>
                            <div className="text-[10px] text-slate-500 mt-0.5">
                              <span className="font-semibold text-slate-600">{UI_TEXT.authorityLabel[lang]}</span> {doc?.issuing_authority?.[lang]}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Expandable, Crawlable Alphabetical Directory of All 300 Civil Legal Workflows */}
            <section className="rounded-2xl border border-slate-200 bg-white/90 shadow-xs overflow-hidden">
              <details className="group">
                <summary className="px-4 py-3 cursor-pointer select-none flex items-center justify-between gap-2 text-xs font-extrabold text-[#0f2b48] hover:bg-slate-50 transition list-none">
                  <span className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      {lang === 'bn'
                        ? `সকল ${alphabeticalWorkflows.length}টি দেওয়ানি আইনি কর্মধারার বর্ণানুক্রমিক সূচি (A–Z)`
                        : lang === 'hi'
                          ? `सभी ${alphabeticalWorkflows.length} नागरिक कानूनी कार्यप्रवाहों की वर्णानुक्रमिक निर्देशिका (A–Z)`
                          : `Alphabetical Directory of All ${alphabeticalWorkflows.length} Civil Legal Workflows (A–Z)`}
                    </span>
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full shrink-0 group-open:hidden">
                    {lang === 'bn' ? 'তালিকা দেখুন' : lang === 'hi' ? 'सूची देखें' : 'Expand Index'}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-full shrink-0 hidden group-open:inline">
                    {lang === 'bn' ? 'সংকুচিত করুন' : lang === 'hi' ? 'संक्षिप्त करें' : 'Collapse'}
                  </span>
                </summary>
                <nav
                  aria-label="Alphabetical Directory of All 300 Civil Legal Workflows"
                  className="px-4 pb-4 pt-2 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1.5 max-h-96 overflow-y-auto"
                >
                  {alphabeticalWorkflows.map(({ cat, sub }) => (
                    <a
                      key={sub.id}
                      href={getWorkflowGuidePath(sub)}
                      onClick={(e) => {
                        e.preventDefault();
                        setHasExplicitTopic(true);
                        setSelectedCat(cat);
                        setSelectedSubCat(sub);
                        trackWorkflowSelect({
                          categoryId: cat.id,
                          topicId: sub.id,
                          topicTitle: sub.title?.[lang] || sub.title?.en || '',
                          lang,
                          source: 'workflow_pill'
                        });
                        window.scrollTo({ top: 480, behavior: 'smooth' });
                      }}
                      className="text-[11px] text-slate-700 hover:text-emerald-700 hover:underline py-0.5 truncate block"
                      title={`${sub.title?.[lang] || sub.title?.en} — ${sub.relevant_act}`}
                    >
                      {sub.title?.[lang] || sub.title?.en}
                    </a>
                  ))}
                </nav>
              </details>
            </section>
          </>
        )}
      </main>

      {/* ATTRIBUTED FOOTER WITH RAZORPAY COMPLIANCE LINKS (LEXIPULSE TECHNOLOGIES) */}
      <footer 
        className="relative w-full py-4 sm:py-5 border-t border-amber-500/30 bg-[#071626] bg-cover bg-center text-xs text-slate-300 mt-auto overflow-hidden shadow-2xl z-10"
        style={{ backgroundImage: `url('/assets/footer-banner.webp')` }}
      >
        <div className="absolute inset-0 bg-[#071422]/60 backdrop-blur-[2px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-3 sm:px-4 flex flex-col items-center justify-center gap-2.5">
          <div className="bg-[#0a1e34]/85 backdrop-blur-md rounded-xl py-1.5 px-3 sm:px-6 border border-amber-400/30 shadow-xl flex items-center justify-center gap-2.5 sm:gap-4 flex-nowrap overflow-x-auto scrollbar-none">
            

            <p className="font-bold text-white text-[9.5px] xs:text-[10.5px] sm:text-xs tracking-normal text-center drop-shadow-sm select-none whitespace-nowrap shrink-0">
              {UI_TEXT.footerBrand[lang]}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10.5px] text-slate-300 font-medium">
            <button
              type="button"
              onClick={() => openCompliancePolicy('terms')}
              className="hover:text-amber-300 transition hover:underline cursor-pointer"
            >
              {UI_TEXT.policyLinks.terms[lang]}
            </button>
            <span className="text-slate-600">&bull;</span>
            <button
              type="button"
              onClick={() => openCompliancePolicy('privacy')}
              className="hover:text-amber-300 transition hover:underline cursor-pointer"
            >
              {UI_TEXT.policyLinks.privacy[lang]}
            </button>
            <span className="text-slate-600">&bull;</span>
            <button
              type="button"
              onClick={() => openCompliancePolicy('refund')}
              className="hover:text-amber-300 transition hover:underline cursor-pointer"
            >
              {UI_TEXT.policyLinks.refund[lang]}
            </button>
            <span className="text-slate-600">&bull;</span>
            <button
              type="button"
              onClick={() => openCompliancePolicy('pricing')}
              className="hover:text-amber-300 transition hover:underline cursor-pointer text-emerald-400 font-bold"
            >
              {UI_TEXT.policyLinks.pricing[lang]}
            </button>
            <span className="text-slate-600">&bull;</span>
            <button
              type="button"
              onClick={() => openCompliancePolicy('contact')}
              className="hover:text-amber-300 transition hover:underline cursor-pointer"
            >
              {UI_TEXT.policyLinks.contact[lang]}
            </button>
          </div>
        </div>
      </footer>

      {/* Universal Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        lang={lang}
        onSelectWorkflow={(categoryId, subcategory) => {
          const parentCat = CIVIL_CATEGORIES.find(c => c.id === categoryId);
          if (parentCat) {
            setHasExplicitTopic(true);
            setSelectedCat(parentCat);
            setSelectedSubCat(subcategory);
            trackWorkflowSelect({
              categoryId: parentCat.id,
              topicId: subcategory.id,
              topicTitle: subcategory.title?.[lang] || subcategory.title?.en || '',
              lang,
              source: 'command_palette'
            });
            window.scrollTo({ top: 480, behavior: 'smooth' });
          }
        }}
      />

      {/* PRO DRAFTER MODAL (DIRECT TOP-LEVEL OVERLAY AT z-[100]) */}
      {showProModal && (
        <DocumentDrafterModal
          isOpen={showProModal}
          onClose={() => setShowProModal(false)}
          lang={lang}
          preselectedTemplateId={activeTemplateId}
          prefilledTopicTitle={selectedSubCat?.title?.[lang]}
        />
      )}

      {/* Statutory Legal Governance Policy Modal */}
      {showPolicyModal && (
        <LegalPolicyModal
          isOpen={showPolicyModal}
          onClose={() => setShowPolicyModal(false)}
          initialTab={policyModalTab}
          lang={lang}
        />
      )}

{/* Advocate Connect (₹499) Modal */}
      {showAdvocateModal && (
        <AdvocateConnectModal
          isOpen={showAdvocateModal}
          onClose={() => setShowAdvocateModal(false)}
          lang={lang}
          workflowId={selectedSubCat?.id ?? ''}
          workflowTitle={selectedSubCat?.title?.[lang] ?? ''}
        />
      )}

      {/* Admin Login Modal — WEB ONLY */}
      {!Capacitor.isNativePlatform() && (
        <AdminLoginModal
          isOpen={showLoginModal}
          lang={lang}
          onClose={() => setShowLoginModal(false)}
          onSuccess={() => {
            setShowLoginModal(false);
            setIsAdminView(true);
          }}
        />
      )}

      {/* Exit Confirmation Modal */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="p-5 sm:p-6 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-red-100 flex items-center justify-center">
                <LogOut className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="font-extrabold text-lg text-slate-900">Exit Application?</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Are you sure you want to exit NyayaMitra? Your current session will be closed.
              </p>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={cancelExitApp}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={confirmExitApp}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-red-600 text-white font-semibold text-sm hover:bg-red-700 transition shadow-sm"
                >
                  Yes, Exit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Jump FAB (Mobile) */}
      <button
        type="button"
        onClick={() => setIsCommandPaletteOpen(true)}
        className="fixed bottom-6 right-4 sm:hidden z-50 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold shadow-[0_0_20px_rgba(245,158,11,0.7)] animate-pulse-glow transition hover:scale-105 active:scale-95 border-2 border-amber-300"
        aria-label="Quick Jump (Ctrl+K)"
        title="Quick Jump — Search workflows, categories, districts"
      >
        <Command className="w-6 h-6" />
      </button>

      {/* Share FAB (Mobile) - only visible when a workflow is selected */}
      {!isAdminView && !isLibraryView && selectedSubCat && (
        <button
          type="button"
          onClick={async () => {
            const url = `${window.location.origin}${window.location.pathname}?cat=${selectedCat?.id}&topic=${selectedSubCat?.id}&lang=${lang}`;
            await share({
              title: selectedSubCat?.title?.[lang] ?? 'NyayaMitra Workflow',
              text: `Check out this civil legal workflow on NyayaMitra`,
              url
            });
          }}
          className="fixed bottom-6 left-4 sm:hidden z-50 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold shadow-lg transition hover:scale-105 active:scale-95 border-2 border-emerald-300"
          aria-label="Share this workflow"
          title="Share this workflow"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="M8.59 13.51a5 5 0 0 1 7.41 0M8.59 19.51a5 5 0 0 1 7.41 0" /></svg>
        </button>
      )}

    </div>
  );
}

export default App;
