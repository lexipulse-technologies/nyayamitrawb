import type { CivilCategory } from '../../types/legal';
import { moneyPart1 } from './moneyParts/moneyPart1';
import { moneyPart2 } from './moneyParts/moneyPart2';

export const moneyCategory: CivilCategory = {
  id: 'cat-money-recovery',
  title: {
    bn: 'টাকা আদায় ও চেক বাউন্স',
    hi: 'धन वसूली एवं चेक बाउंस',
    en: 'Money Recovery & Cheque Bounce'
  },
  description: {
    bn: 'চেক বাউন্স, সাইবার প্রতারণা থেকে টাকা ফেরত, দ্রুত ঋণ আদায় (DRT/NCLT), এমএসএমই বকেয়া ও ব্যক্তিগত দেনা সংক্রান্ত ৫০টি আইনি রোডম্যাপ।',
    hi: 'चेक बाउंस, साइबर फ्रॉड, ऋण वसूली (DRT/NCLT), एमएसएमई बकाया एवं व्यक्तिगत कर्ज पर 50 संपूर्ण कानूनी प्रक्रियाएं।',
    en: 'Comprehensive 50 civil procedural workflows for cheque bounce, cyber fraud recovery, summary debt suits, IBC insolvency, and private lending disputes.'
  },
  subcategories: [...moneyPart1, ...moneyPart2]
};