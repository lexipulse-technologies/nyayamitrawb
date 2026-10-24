import type { CivilCategory } from '../../types/legal';
import { partitionPart1 } from './partitionParts/partitionPart1';
import { partitionPart2 } from './partitionParts/partitionPart2';

export const partitionCategory: CivilCategory = {
  id: 'cat-partition-succession',
  title: {
    bn: 'সম্পত্তি বাটোয়ারা ও উত্তরাধিকার',
    hi: 'संपत्ति बंटवारा एवं उत्तराधिकार',
    en: 'Partition & Succession'
  },
  description: {
    bn: 'পৈতৃক জমি বাটোয়ারা, কলকাতা হাইকোর্ট প্রোবেট বনাম জেলা আদালত, সাকসেশন ও পারিবারিক আপস-বণ্টন সংক্রান্ত ৫০টি আইনি রোডম্যাপ।',
    hi: 'पैतृक संपत्ति बंटवारा, कलकत्ता हाईकोर्ट प्रोबेट बनाम जिला अदालत, उत्तराधिकार एवं पारिवारिक समझौते पर 50 संपूर्ण कानूनी प्रक्रियाएं।',
    en: 'Comprehensive 50 civil procedural workflows for ancestral property partition, high court vs district probate, and succession.'
  },
  subcategories: [...partitionPart1, ...partitionPart2]
};