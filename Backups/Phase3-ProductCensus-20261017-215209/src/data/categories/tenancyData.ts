import type { CivilCategory } from '../../types/legal';
import { tenancyPart1 } from './tenancyParts/tenancyPart1';
import { tenancyPart2 } from './tenancyParts/tenancyPart2';

export const tenancyCategory: CivilCategory = {
  id: 'cat-tenancy-disputes',
  title: {
    bn: 'বাড়িভাড়া ও ভাড়াটে বিরোধ',
    hi: 'किरायेदारी एवं परिसर विवाद',
    en: 'Tenancy & Premises Disputes'
  },
  description: {
    bn: 'জেলা রেন্ট কন্ট্রোলার (SDO) বনাম কলকাতা রেন্ট কন্ট্রোলার ও প্রেসিডেন্সি স্মল কজেস কোর্ট ভিত্তিক সম্পূর্ণ ৫০টি আইনি রোডম্যাপ।',
    hi: 'जिला रेंट कंट्रोलर (एसडीओ) बनाम कोलकाता रेंट कंट्रोलर एवं प्रेसिडेंसी स्माल कॉजेज कोर्ट आधारित 50 संपूर्ण कानूनी प्रक्रियाएं।',
    en: 'Comprehensive 50 tenancy workflows segregated across District SDO Rent Controllers and Kolkata Urban Rent Controller & Small Causes Court.'
  },
  subcategories: [...tenancyPart1, ...tenancyPart2]
};