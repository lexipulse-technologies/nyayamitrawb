import type { CivilCategory } from '../../types/legal';
import { consumerPart1 } from './consumerParts/consumerPart1';
import { consumerPart2 } from './consumerParts/consumerPart2';

export const consumerCategory: CivilCategory = {
  id: 'cat-consumer-rights',
  title: {
    bn: 'ক্রেতা সুরক্ষা ও আবাসন (WBRERA)',
    hi: 'उपभोक्ता संरक्षण एवं रियल एस्टेट (WBRERA)',
    en: 'Consumer Rights & Real Estate'
  },
  description: {
    bn: 'ই-জাগৃতি ক্রেতা আদালত, রেরা আবাসন বিরোধ, বিদ্যুৎ বিল (WBSEDCL বনাম CESC), চিকিৎসা গাফিলতি ও ব্যাংক প্রতারণা সংক্রান্ত ৫০টি আইনি রোডম্যাপ।',
    hi: 'ई-जागृति उपभोक्ता अदालत, रेरा बिल्डर विवाद, बिजली बिल (WBSEDCL बनाम CESC), चिकित्सा लापरवाही एवं बैंक धोखाधड़ी पर 50 संपूर्ण कानूनी प्रक्रियाएं।',
    en: 'Comprehensive 50 civil procedural workflows for e-Jagriti consumer claims, WBRERA housing disputes, utilities, and insurance.'
  },
  subcategories: [...consumerPart1, ...consumerPart2]
};