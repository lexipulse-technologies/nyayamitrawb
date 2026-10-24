import React, { useState, useMemo, useEffect, useRef } from 'react';
import { CIVIL_CATEGORIES, TOTAL_WORKFLOW_COUNT } from './data/civilLegalData';
import type { Language, CivilCategory, CivilSubCategory, CaseIntakeSubmission } from './types/legal';
import { DisclaimerBanner } from './components/DisclaimerBanner';
import { OfflineBanner } from './components/OfflineBanner';
import { TriageIntakeModal } from './components/TriageIntakeModal';
import { AdminAdvisorPanel } from './components/AdminAdvisorPanel';
import { AdminLoginModal } from './components/AdminLoginModal';
import { AudioRoadmapPlayer } from './components/AudioRoadmapPlayer';
import { VisitorCounter } from './components/VisitorCounter';
import { CommandPalette } from './components/CommandPalette';
import { CaseReadinessGauge } from './components/CaseReadinessGauge';
import { DocumentDrafterModal } from './components/DocumentDrafterModal';
import { LegalPolicyModal } from './components/LegalPolicyModal';
import type { PolicyTab } from './components/LegalPolicyModal';
import { getWorkflowTemplateMapping, getTemplateById } from './utils/proDocumentTemplates';
import { searchLegalTopics, findSubmissionById, lookupTicketRemotely } from './utils/triageEngine';
import { isAdminSessionActive, clearAdminSession } from './utils/authUtils';
import { startVoiceRecognition, stopActiveVoiceRecognition, isVoiceSearchSupported } from './utils/speechEngine';
import { applySeoHeaders } from './utils/seoEngine';
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
  Ticket,
  FileCheck,
  Building,
  Sparkles,
  X,
  Award,
  Lock,
  Loader2,
  Globe,
  Mail,
  Mic,
  MicOff,
  MapPin,
  Compass,
  Check,
  Command,
  Zap
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
    url: 'http://wbwridd.gov.in/',
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
  trackTicketBtn: { bn: 'স্লিপ যাচাই', hi: 'स्लिप जांचें', en: 'Track Ticket' },
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
  referralBtn: { bn: 'প্যানেল আইনজীবী / DLSA রেফারেল নিন', hi: 'প্যানেল আইনজীবী / DLSA পরামর্শ নিন', en: 'Consult Panel Advocate / DLSA' },
  docsHeading: { bn: 'প্রয়োজনীয় কাগজপত্রের প্রস্তুতি চেকলিস্ট', hi: 'आवश्यक दस्तावेजों की तैयारी चेकलिस्ट', en: 'Preparedness Document Checklist' },
  docsSubtitle: { bn: 'আদালত বা সরকারি কাউন্টারে যাওয়ার পূর্বে নিচের প্রত্যয়িত নথিগুলো প্রস্তুত করে টিক দিন:', hi: 'अदालत বা সরকারি কাউন্টারে যাওয়ার পূর্বে নথিগুলো প্রস্তুত করে টিক দিন:', en: 'Mark off verified xerox documents before attending hearing or office counter:' },
  authorityLabel: { bn: 'ইস্যুকারী কর্তৃপক্ষ:', hi: 'जारीकर्ता प्राधिकरण:', en: 'Issuing Authority:' },
  noResults: { bn: 'কোনো ফলাফল মেলেনি (No matching topics found)', hi: 'कोई परिणाम नहीं मिला (No matching topics found)', en: 'No matching legal topics found' },
  footerBrand: {
    bn: 'Web Administrator: LEXIPULSE TECHNOLOGIES - All Rights Reserved ©',
    hi: 'Web Administrator: LEXIPULSE TECHNOLOGIES - All Rights Reserved ©',
    en: 'Web Administrator: LEXIPULSE TECHNOLOGIES - All Rights Reserved ©'
  },
  ticketModalTitle: { bn: 'রেফারেল স্লিপ যাচাই (Centralized Ticket Verification)', hi: 'রেফারল টোকেন যাচাই (Centralized Ticket Verification)', en: 'Referral Ticket Verification (Central Cloud Lookup)' },
  searchingTicket: { bn: 'ক্লাউড ডাটাবেস থেকে তথ্য খোঁজা হচ্ছে...', hi: 'ক্লাউড ডেটাবেস সে খোঁজা যা রহা হ্যায়...', en: 'Searching Central Cloud Database...' },
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
  const [lang, setLang] = useState<Language>('bn');
 
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

  const [selectedCat, setSelectedCat] = useState<CivilCategory>(defaultCategory);
  const [selectedSubCat, setSelectedSubCat] = useState<CivilSubCategory>(defaultSubCategory);
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});
  const [showTriageModal, setShowTriageModal] = useState<boolean>(false);

  // Administrative State & Authentication
  const [isAdminView, setIsAdminView] = useState<boolean>(() => isAdminSessionActive());
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

  // Search & Voice Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);

  // Active Territorial Jurisdiction Track (Rural & 22 Districts vs. Kolkata Urban)
  const [activeTerritoryTrack, setActiveTerritoryTrack] = useState<'rural_district' | 'kolkata_urban'>('rural_district');

  // Ticket Lookup State
  const [trackingIdInput, setTrackingIdInput] = useState('');
  const [trackedRecord, setTrackedRecord] = useState<CaseIntakeSubmission | null>(null);
  const [showTrackModal, setShowTrackModal] = useState(false);
  const [isSearchingTicket, setIsSearchingTicket] = useState(false);

  // Universal Command Palette (Ctrl+K) State
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // NyayaMitra Pro Document Drafter (₹99) Modal State
  const [showProModal, setShowProModal] = useState<boolean>(false);

  // Statutory Compliance Policy Modal State
  const [showPolicyModal, setShowPolicyModal] = useState<boolean>(false);
  const [policyModalTab, setPolicyModalTab] = useState<PolicyTab>('terms');

  // Floating Toast Notification State
  const [showDrafterToast, setShowDrafterToast] = useState<boolean>(true);

  const pillsContainerRef = useRef<HTMLDivElement>(null);

  const openCompliancePolicy = (tab: PolicyTab) => {
    setPolicyModalTab(tab);
    setShowPolicyModal(true);
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

  // Safe Deep-Linking & Razorpay Compliance Crawler URL Parameter Hook
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get('cat');
      const topicParam = params.get('topic');
      const langParam = params.get('lang') as Language | null;
      const trackParam = params.get('track');
      const policyParam = params.get('policy') as PolicyTab | null;

      // Razorpay Audit Crawler Support: Direct Landing on Specific Policy Tab
      if (policyParam && ['terms', 'privacy', 'refund', 'contact', 'pricing'].includes(policyParam)) {
        setPolicyModalTab(policyParam);
        setShowPolicyModal(true);
      }

      if (langParam && (langParam === 'bn' || langParam === 'hi' || langParam === 'en')) {
        setLang(langParam);
      }

      if (trackParam === 'rural_district' || trackParam === 'kolkata_urban') {
        setActiveTerritoryTrack(trackParam);
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

  // Safe URL Sync
  useEffect(() => {
    try {
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
      }
    } catch (err) {
      console.warn('History replace notice:', err);
    }
  }, [selectedCat?.id, selectedSubCat?.id, lang, isAdminView, activeTerritoryTrack]);

  // Dynamic SEO Engine Integration
  useEffect(() => {
    if (!isAdminView) {
      applySeoHeaders({
        subcategory: selectedSubCat,
        lang: lang
      });
    } else {
      document.title = 'NyayaMitra Admin Control Room';
    }
  }, [selectedSubCat, lang, isAdminView]);

  const searchResults = useMemo(() => {
    return searchLegalTopics(searchQuery, lang);
  }, [searchQuery, lang]);

  const toggleDoc = (docId: string) => {
    setCheckedDocs(prev => ({ ...prev, [docId]: !prev[docId] }));
  };

  const totalDocs = selectedSubCat?.required_documents?.length || 0;
  const markedDocs = selectedSubCat?.required_documents?.filter(d => checkedDocs[d.id])?.length || 0;

  // History Guard
  useEffect(() => {
    if (isAdminView) {
      window.history.pushState({ view: 'admin_panel' }, '', window.location.href);
    }

    const handlePopState = () => {
      if (isAdminView) {
        clearAdminSession();
        setIsAdminView(false);
        window.history.pushState(null, '', window.location.href);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [isAdminView]);

  const handlePublicViewClick = () => {
    clearAdminSession();
    setIsAdminView(false);
    window.history.replaceState(null, '', window.location.href);
  };

  // Secure Single-Ticket Lookup
  const handleTrackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanQuery = trackingIdInput.trim().toUpperCase();
    if (!cleanQuery) return;

    setIsSearchingTicket(true);
    setShowTrackModal(true);

    let found = findSubmissionById(cleanQuery);

    if (!found) {
      try {
        const remoteMatch = await lookupTicketRemotely(cleanQuery);
        if (remoteMatch) found = remoteMatch;
      } catch (err) {
        console.warn('Remote ticket lookup notice:', err);
      }
    }

    setTrackedRecord(found || null);
    setIsSearchingTicket(false);
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
      <DisclaimerBanner lang={lang} />
      <OfflineBanner lang={lang} />

      {/* STICKY NAVIGATION BAR */}
      <header className="bg-[#0a1e34]/95 backdrop-blur-md text-white border-b border-white/10 sticky top-0 z-40 shadow-lg transition-all">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between gap-2">
          
          {/* 3D EMBLEM & TITLE */}
          <div
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer min-w-0 group select-none flex-1"
            onClick={() => {
              if (isAdminView) handlePublicViewClick();
              setSearchQuery('');
            }}
          >
            <div 
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border-2 border-red-500 flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300 relative transform-gpu"
              style={{
                boxShadow: '0 0 18px rgba(239, 68, 68, 0.95), 0 0 35px rgba(220, 38, 38, 0.55), inset 0 2px 3px #ffffff, inset 0 -3px 5px rgba(185, 28, 28, 0.5), 0 4px 8px rgba(0, 0, 0, 0.4)'
              }}
            >
              <span className="absolute -inset-1 rounded-xl bg-red-500/25 blur-sm animate-pulse pointer-events-none" />
              <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 stroke-[2.5] drop-shadow-[0_1px_3px_rgba(185,28,28,0.7)] relative z-10" />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-nowrap overflow-hidden">
                <h1 className="font-black text-xs sm:text-base md:text-lg lg:text-xl tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-amber-400 drop-shadow-[0_2px_10px_rgba(245,158,11,0.5)] select-none whitespace-nowrap shrink-0">
                  {UI_TEXT.portalTitle[lang]}
                </h1>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400/15 text-amber-300 border border-amber-400/40 shadow-[0_0_12px_rgba(245,158,11,0.25)] whitespace-nowrap">
                  300 Civil Workflows &bull; 23 Districts
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-slate-300 mt-0.5 font-medium truncate max-w-sm md:max-w-md lg:max-w-lg">
                {UI_TEXT.portalSubtitle[lang]}
              </p>
            </div>
          </div>

          {/* Action Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 flex-nowrap">
            
            {/* Reference Ticket Search Form */}
            <form onSubmit={handleTrackSubmit} className="hidden lg:flex items-center bg-[#071626]/80 border border-slate-700/80 rounded-lg overflow-hidden text-xs shadow-inner">
              <input
                type="text"
                value={trackingIdInput}
                onChange={e => setTrackingIdInput(e.target.value)}
                placeholder="WB-REF-XXXXXX"
                className="bg-transparent px-2.5 py-1 text-white placeholder-slate-400 focus:outline-none w-24 font-mono uppercase text-[11px]"
              />
              <button
                type="submit"
                className="px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition flex items-center gap-1 text-[11px] whitespace-nowrap"
              >
                <Ticket className="w-3 h-3" />
                <span>{UI_TEXT.trackTicketBtn[lang]}</span>
              </button>
            </form>

            {/* Trilingual Switcher */}
            <div className="flex bg-[#071626] rounded-lg p-0.5 border border-slate-700/80 text-xs shadow-inner shrink-0">
              <button
                onClick={() => setLang('bn')}
                className={`px-1.5 sm:px-2 py-1 rounded font-semibold transition text-[11px] sm:text-xs ${
                  lang === 'bn' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-300 hover:text-white'
                }`}
              >
                বাংলা
              </button>
              <button
                onClick={() => setLang('hi')}
                className={`px-1.5 sm:px-2 py-1 rounded font-semibold transition text-[11px] sm:text-xs ${
                  lang === 'hi' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-300 hover:text-white'
                }`}
              >
                हिन्दी
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-1.5 sm:px-2 py-1 rounded font-semibold transition text-[11px] sm:text-xs ${
                  lang === 'en' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-300 hover:text-white'
                }`}
              >
                English
              </button>
            </div>

            {/* Contact Email Link */}
            <a
              href="mailto:namaste@nyayamitrawb.in"
              className="hidden md:flex px-2 sm:px-2.5 py-1.5 rounded-lg border text-[11px] sm:text-xs font-bold items-center gap-1.5 bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white transition shadow-xs whitespace-nowrap shrink-0"
              title="Email NyayaMitra Support"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Contact: <strong className="text-white font-bold">namaste@nyayamitrawb.in</strong></span>
            </a>

            {/* Admin Login / Public View Button */}
            {isAdminView ? (
              <button
                onClick={handlePublicViewClick}
                className="px-2.5 sm:px-3 py-1.5 rounded-lg border text-[11px] sm:text-xs font-bold flex items-center gap-1.5 bg-amber-500 text-slate-950 border-amber-400 hover:bg-amber-400 shadow-sm transition whitespace-nowrap shrink-0"
              >
                <Globe className="w-3.5 h-3.5 shrink-0" />
                <span>{UI_TEXT.publicViewBtn[lang]}</span>
              </button>
            ) : (
              <button
                onClick={() => setShowLoginModal(true)}
                className="px-2.5 sm:px-3 py-1.5 rounded-lg border text-[11px] sm:text-xs font-bold flex items-center gap-1.5 bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white transition whitespace-nowrap shrink-0"
              >
                <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{UI_TEXT.adminLoginBtn[lang]}</span>
              </button>
            )}

            <div
              className="flex items-center gap-1.5 sm:gap-2 pl-1.5 sm:pl-2 border-l border-slate-600/80 shrink-0"
              aria-label="Parent company: LEXIPULSE TECHNOLOGIES"
            >
              <img
                src="/brand/lexipulse-technologies-logo.png"
                alt="LEXIPULSE TECHNOLOGIES"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white object-contain border border-white/70 shadow-sm"
                width="36"
                height="36"
              />
              <span className="hidden xl:block text-[9px] leading-tight font-bold tracking-[0.08em] text-slate-300 whitespace-nowrap">
                LEXIPULSE<br />TECHNOLOGIES
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* HERO BANNER */}
      {!isAdminView && (
        <section 
          className="relative text-white py-16 sm:py-20 md:py-26 px-4 overflow-hidden border-b-2 border-amber-500/50 bg-[#071626] bg-cover bg-center shadow-2xl z-10"
          style={{ backgroundImage: `url('/assets/hero-banner.webp')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/30 to-[#071422]/75 pointer-events-none" />

          <div className="relative max-w-5xl mx-auto text-center space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10.5px] sm:text-xs font-black tracking-widest uppercase bg-slate-950/60 text-amber-300 border border-amber-400/60 shadow-lg backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{UI_TEXT.heroSuperTitle[lang]}</span>
            </div>

            <div className="w-full flex items-center justify-center overflow-hidden">
              <h2 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-black tracking-tight text-white leading-tight whitespace-nowrap drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] select-none">
                {UI_TEXT.heroMainTitle[lang]}
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
              {UI_TEXT.tagline[lang]}
            </p>

            {/* SEARCH ROW: Search Bar + Pro Drafter Button + Quick Jump Button */}
            <div className="relative max-w-4xl mx-auto pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
              <div className="relative flex-1 w-full flex items-center shadow-[0_20px_50px_rgba(0,0,0,0.6)] rounded-2xl group">
                <Search className="w-5 h-5 absolute left-4 text-slate-500 group-focus-within:text-amber-500 transition-colors" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder={isListening ? UI_TEXT.voiceListeningPrompt[lang] : UI_TEXT.searchPlaceholder[lang]}
                  className={`w-full pl-12 pr-14 py-3.5 rounded-2xl bg-white/95 backdrop-blur-md text-slate-900 text-xs sm:text-sm font-medium border-2 transition-all focus:outline-none ${
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
                className="shrink-0 flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs sm:text-sm font-extrabold shadow-xl transition-all hover:scale-105 active:scale-95 group w-full sm:w-auto border-2 border-amber-300 cursor-pointer"
                title="Draft Statutory Notice (₹99)"
              >
                <Zap className="w-4 h-4 fill-slate-950 text-slate-950" />
                <span>{UI_TEXT.proDrafterBtn[lang]}</span>
              </button>

              {/* ACTION BUTTON 2: Quick Jump (Ctrl+K) */}
              <button
                type="button"
                onClick={() => setIsCommandPaletteOpen(true)}
                className="shrink-0 flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-[#0a1e34]/90 hover:bg-[#0f2b48] border-2 border-amber-400/60 text-white text-xs sm:text-sm font-bold shadow-xl transition-all hover:scale-105 active:scale-95 group w-full sm:w-auto cursor-pointer"
                title="Quick Jump Command Palette (Ctrl+K)"
              >
                <Command className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
                <span>{UI_TEXT.quickJumpBtn[lang]}</span>
                <kbd className="font-mono text-[10px] bg-slate-900 px-1.5 py-0.5 rounded border border-slate-700 text-amber-300">
                  Ctrl K
                </kbd>
              </button>
            </div>

            {/* Search Dropdown */}
            {searchQuery.trim() && (
              <div className="relative max-w-2xl mx-auto">
                <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 max-h-72 overflow-y-auto z-50 text-left divide-y divide-slate-100 animate-in fade-in duration-100">
                  {searchResults.length > 0 ? (
                    searchResults.map(({ categoryId, subcategory }) => (
                      <div
                        key={subcategory.id}
                        onClick={() => {
                          const parentCat = CIVIL_CATEGORIES.find(c => c.id === categoryId);
                          if (parentCat) {
                            setSelectedCat(parentCat);
                            setSelectedSubCat(subcategory);
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
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[10.5px] text-slate-200">
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
        </section>
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6 space-y-7 relative z-10">
        {isAdminView ? (
          <AdminAdvisorPanel lang={lang} />
        ) : (
          <>
            {/* 1. 12 HIGH-VALUE OFFICIAL GOVERNMENT PORTALS */}
            <section className="bg-white/95 backdrop-blur-xs rounded-2xl border-2 border-[#123961]/20 p-4 sm:p-6 shadow-sm space-y-4">
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
            <section className="space-y-3">
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
                  <div
                    key={cat.id}
                    onClick={() => {
                      setSelectedCat(cat);
                      if (cat.subcategories && cat.subcategories.length > 0) {
                        setSelectedSubCat(cat.subcategories[0]);
                      }
                    }}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
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
                  </div>
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
                    onClick={() => setSelectedSubCat(sub)}
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
                      
                      <button
                        type="button"
                        onClick={() => setShowProModal(true)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-bold bg-amber-100 text-amber-950 border border-amber-300 hover:bg-amber-200 transition shadow-2xs cursor-pointer"
                      >
                        <Zap className="w-3.5 h-3.5 fill-amber-500 text-amber-600" />
                        <span>⚡ {UI_TEXT.inWorkflowNotice.btn[lang]}</span>
                      </button>
                    </div>

                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-2">
                      {selectedSubCat?.title?.[lang]}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {selectedSubCat?.summary?.[lang]}
                    </p>
                  </div>

                  {/* IN-WORKFLOW STATUTORY NOTICE CALLOUT */}
                  <div className="p-3.5 sm:p-4 bg-gradient-to-r from-amber-50 via-amber-50/70 to-emerald-50 rounded-2xl border-2 border-amber-400 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 select-none">
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded text-[9.5px] font-black bg-amber-400 text-slate-950 uppercase tracking-wider">
                          {UI_TEXT.inWorkflowNotice.badge[lang]}
                        </span>
                        <span className="text-slate-500 text-[11px] font-semibold font-mono">
                          • {activeProTemplate.code}
                        </span>
                      </div>
                      <h4 className="font-extrabold text-xs sm:text-sm text-slate-950 leading-snug">
                        {UI_TEXT.inWorkflowNotice.heading[lang]}
                      </h4>
                      <p className="text-[11px] text-slate-700 leading-relaxed">
                        {UI_TEXT.inWorkflowNotice.desc(resolvedProTitle)[lang]}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowProModal(true)}
                      className="shrink-0 px-4 py-2.5 bg-gradient-to-r from-[#0f2b48] to-[#1a3d60] hover:from-[#14385d] hover:to-[#224e7a] text-white rounded-xl text-xs font-bold transition shadow-md flex items-center gap-2 border border-amber-400 cursor-pointer active:scale-95 whitespace-nowrap"
                    >
                      <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span>{UI_TEXT.inWorkflowNotice.btn[lang]}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
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
                          onClick={() => setActiveTerritoryTrack('rural_district')}
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
                          onClick={() => setActiveTerritoryTrack('kolkata_urban')}
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

                  {/* Portal & Triage Buttons */}
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

                    <button
                      onClick={() => setShowTriageModal(true)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0f2b48] hover:bg-[#1a3d60] text-white rounded-xl text-xs font-bold shadow-md transition cursor-pointer"
                    >
                      <Scale className="w-4 h-4 text-amber-400" />
                      {UI_TEXT.referralBtn[lang]}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
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
          </>
        )}
      </main>

      {/* FLOATING QUICK-ACTION PILL AT BOTTOM-LEFT */}
      {!isAdminView && (
        <div className="fixed bottom-6 left-4 sm:left-6 z-40 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowProModal(true)}
            className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-full font-black text-xs shadow-2xl border-2 border-white/70 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            title="Open Statutory Notice Drafter"
          >
            <Zap className="w-4 h-4 fill-slate-950 text-slate-950" />
            <span>{UI_TEXT.inWorkflowNotice.btn[lang]}</span>
          </button>
        </div>
      )}

      {/* FLOATING PROACTIVE TOAST NOTIFICATION */}
      {showDrafterToast && !showProModal && !isAdminView && (
        <aside aria-label="Statutory Notice Drafter Notification" className="fixed bottom-20 left-4 sm:left-6 z-40 max-w-sm w-full bg-[#0a1e34]/95 text-white border-2 border-amber-400/90 rounded-2xl shadow-2xl p-4 backdrop-blur-md">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4 fill-slate-950" />
              </div>
              <span className="font-extrabold text-xs text-amber-300 uppercase tracking-wider">
                {UI_TEXT.inWorkflowNotice.toastBadge[lang]}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setShowDrafterToast(false)}
              className="text-slate-400 hover:text-white p-1 rounded-md transition cursor-pointer"
              title="Dismiss Notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-slate-200 mt-2 leading-relaxed">
            {UI_TEXT.inWorkflowNotice.toastDesc(resolvedProTitle)[lang]}
          </p>

          <div className="mt-3 flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setShowProModal(true);
                setShowDrafterToast(false);
              }}
              className="flex-1 py-2 px-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-xl text-xs font-bold transition shadow-md flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
            >
              <Zap className="w-3.5 h-3.5 fill-slate-950" />
              <span>{UI_TEXT.inWorkflowNotice.btn[lang]}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => setShowDrafterToast(false)}
              className="py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition cursor-pointer"
            >
              {UI_TEXT.inWorkflowNotice.toastLater[lang]}
            </button>
          </div>
        </aside>
      )}

      {/* ATTRIBUTED FOOTER WITH RAZORPAY COMPLIANCE LINKS (LEXIPULSE TECHNOLOGIES) */}
      <footer 
        className="relative w-full py-4 sm:py-5 border-t border-amber-500/30 bg-[#071626] bg-cover bg-center text-xs text-slate-300 mt-auto overflow-hidden shadow-2xl z-10"
        style={{ backgroundImage: `url('/assets/footer-banner.webp')` }}
      >
        <div className="absolute inset-0 bg-[#071422]/60 backdrop-blur-[2px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-3 sm:px-4 flex flex-col items-center justify-center gap-2.5">
          <div className="bg-[#0a1e34]/85 backdrop-blur-md rounded-xl py-1.5 px-3 sm:px-6 border border-amber-400/30 shadow-xl flex items-center justify-center gap-2.5 sm:gap-4 flex-nowrap overflow-x-auto scrollbar-none">
            <div className="shrink-0 flex items-center">
              <VisitorCounter lang={lang} />
            </div>

            <span className="text-amber-400/60 font-bold select-none shrink-0">&bull;</span>

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
            setSelectedCat(parentCat);
            setSelectedSubCat(subcategory);
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

      {/* Citizen Triage Referral Modal */}
      {showTriageModal && selectedSubCat && (
        <TriageIntakeModal
          subcategory={selectedSubCat}
          lang={lang}
          onClose={() => setShowTriageModal(false)}
        />
      )}

      {/* Admin Login Modal */}
      <AdminLoginModal
        isOpen={showLoginModal}
        lang={lang}
        onClose={() => setShowLoginModal(false)}
        onSuccess={() => {
          setShowLoginModal(false);
          setIsAdminView(true);
        }}
      />

      {/* Referral Slip Verification Modal */}
      {showTrackModal && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-5 border border-slate-200 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 flex items-center gap-2">
                <Ticket className="w-4 h-4 text-emerald-600" />
                {UI_TEXT.ticketModalTitle[lang]}
              </h3>
              <button
                onClick={() => setShowTrackModal(false)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {isSearchingTicket ? (
              <div className="p-8 text-center space-y-2 text-xs text-slate-600">
                <Loader2 className="w-6 h-6 animate-spin text-emerald-600 mx-auto" />
                <p>{UI_TEXT.searchingTicket[lang]}</p>
              </div>
            ) : trackedRecord ? (
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 text-xs">
                <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-medium">রেফারেন্স কোড (Ref ID):</span>
                  <span className="font-mono font-bold text-emerald-900 text-sm bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                    {trackedRecord.id}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">আবেদনকারীর নাম:</span>
                  <span className="font-bold text-slate-900">{trackedRecord.citizenName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">পশ্চিমবঙ্গের জেলা:</span>
                  <span className="font-semibold text-slate-800">{trackedRecord.district}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">বিরোধের বিষয়:</span>
                  <span className="font-semibold text-slate-800 max-w-[200px] truncate text-right" title={trackedRecord.subcategoryTitle}>
                    {trackedRecord.subcategoryTitle}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-1 border-t border-slate-200">
                  <span className="text-slate-500">কাউন্সেল ট্র্যাক (Counsel Track):</span>
                  {trackedRecord.preferredAidType === 'ADVOCATE' ? (
                    <span className="inline-flex items-center gap-1 font-bold text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                      <Award className="w-3.5 h-3.5 text-blue-600" />
                      Track B (Empanelled Advocate)
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 font-bold text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                      <Scale className="w-3.5 h-3.5 text-emerald-600" />
                      Track A (DLSA Free Aid)
                    </span>
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">DPDP ডেটা সুরক্ষা সম্মতি:</span>
                  <span className="inline-flex items-center gap-1 font-bold text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <Lock className="w-3.5 h-3.5 text-emerald-600" />
                    Granted &amp; Logged
                  </span>
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-200">
                  <span>জমা দেওয়ার সময় (Timestamp):</span>
                  <span>{trackedRecord.timestamp}</span>
                </div>
              </div>
            ) : (
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-1">
                <p className="font-bold">কোনো রেকর্ড পাওয়া যায়নি (No Record Found)</p>
                <p className="text-[11px] text-amber-800 leading-relaxed">
                  অনুগ্রহ করে রেফারেন্স নম্বরটি যাচাই করুন (যেমন: <strong>WB-REF-XXXXXX</strong>)।
                </p>
              </div>
            )}

            <button
              onClick={() => setShowTrackModal(false)}
              className="w-full py-2 bg-[#0f2b48] hover:bg-[#1a3d60] text-white rounded-lg text-xs font-semibold transition cursor-pointer"
            >
              বন্ধ করুন (Close)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
