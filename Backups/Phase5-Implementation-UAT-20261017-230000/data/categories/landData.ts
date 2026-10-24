import type { CivilCategory } from '../../types/legal';
import { landPart1 } from './landParts/landPart1';
import { landPart2 } from './landParts/landPart2';

export const landCategory: CivilCategory = {
  id: 'cat-land-mutation',
  title: {
    bn: 'জমি, রেকর্ড ও মিউটেশন',
    hi: 'भूमि, रिकॉर्ड एवं नामांतरण',
    en: 'Land, Records & Mutation'
  },
  description: {
    bn: 'গ্রামীণ ও জেলা (বাংলারভূমি/BL&LRO) বনাম কলকাতা পুরসভা (KMC Assessee) ভিত্তিক সম্পূর্ণ ৫০টি জমির আইনি রোডম্যাপ।',
    hi: 'ग्रामीण एवं जिला (बांगलारभूमि/BL&LRO) बनाम कोलकाता नगर निगम (KMC) आधारित 50 संपूर्ण भूमि कानूनी प्रक्रियाएं।',
    en: 'Comprehensive 50 land workflows segregated across Rural/District (Banglarbhumi/BL&LRO) and Urban Kolkata (KMC).'
  },
  subcategories: [...landPart1, ...landPart2]
};