import type { CivilCategory } from '../../types/legal';
import { familyPart1 } from './familyParts/familyPart1';
import { familyPart2 } from './familyParts/familyPart2';

export const familyCategory: CivilCategory = {
  id: 'cat-family-maintenance',
  title: {
    bn: 'পারিবারিক সিভিল ও ভরণপোষণ',
    hi: 'पारिवारिक दीवानी एवं भरण-पोषण',
    en: 'Family Disputes & Maintenance'
  },
  description: {
    bn: 'স্ত্রী ও সন্তানের খোরপোশ, প্রবীণ পিতা-মাতার অধিকার, বিবাহবিচ্ছেদ ও শিশু হেফাজতের ৫০টি আইনি রোডম্যাপ।',
    hi: 'गुजारा भत्ता, माता-पिता अधिकार, तलाक एवं बाल अभिरक्षा पर 50 संपूर्ण कानूनी प्रक्रियाएं।',
    en: 'Comprehensive 50 civil procedural workflows for spousal maintenance, senior citizens, divorce, and child custody.'
  },
  subcategories: [...familyPart1, ...familyPart2]
};