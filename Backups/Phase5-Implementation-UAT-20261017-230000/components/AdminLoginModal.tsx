import React, { useState } from 'react';
import {
  Lock,
  User,
  Eye,
  EyeOff,
  X,
  ShieldCheck,
  AlertCircle,
  KeyRound,
  Loader2
} from 'lucide-react';
import type { Language } from '../types/legal';
import { verifyAdminCredentials, setAdminSession, recordAdminLogin } from '../utils/authUtils';

const LOGIN_TEXT = {
  modalTitle: {
    bn: 'প্রশাসনিক নিরাপত্তা গেটওয়ে (Admin Login)',
    hi: 'प्रशासनिक सुरक्षा गेटवे (Admin Login)',
    en: 'Administrative Security Gateway'
  },
  modalSubtitle: {
    bn: 'পশ্চিমবঙ্গ দেওয়ানি নির্দেশিকা অ্যাডমিন কন্ট্রোল রুম',
    hi: 'पश्चिम बंगाल सिविल लीगल नेविगेटर एडमिन रूम',
    en: 'West Bengal Civil Legal Navigator Admin Room'
  },
  usernameLabel: {
    bn: 'ইউজারনেম (Username) *',
    hi: 'यूज़रनेम (Username) *',
    en: 'Username *'
  },
  usernamePlaceholder: {
    bn: 'ইউজারনেম লিখুন',
    hi: 'यूज़रनेम दर्ज करें',
    en: 'Enter admin username'
  },
  passwordLabel: {
    bn: 'পাসওয়ার্ড (Password) *',
    hi: 'पासवर्ड (Password) *',
    en: 'Password *'
  },
  passwordPlaceholder: {
    bn: 'পাসওয়ার্ড লিখুন',
    hi: 'पासवर्ड दर्ज करें',
    en: 'Enter security password'
  },
  loginBtn: {
    bn: 'লগইন করুন (Access Panel)',
    hi: 'लॉगिन करें (Access Panel)',
    en: 'Access Admin Panel'
  },
  loggingIn: {
    bn: 'নিরাপত্তা অডিট ও যাচাইকরণ চলছে...',
    hi: 'सुरक्षा ऑडिट एवं सत्यापन जारी...',
    en: 'Logging Security Audit & Verifying...'
  },
  cancelBtn: {
    bn: 'বাতিল (Cancel)',
    hi: 'रद्द करें (Cancel)',
    en: 'Cancel'
  },
  authError: {
    bn: 'ভুল ইউজারনেম বা পাসওয়ার্ড! প্রবেশাধিকার প্রত্যাখ্যাত হয়েছে।',
    hi: 'अमान्य यूज़रनेम या पासवर्ड! प्रवेश अस्वीकृत।',
    en: 'Invalid username or password. Access denied.'
  },
  securityNotice: {
    bn: 'নিরাপত্তা প্রোটোকল সক্রিয়: প্রতিটি অ্যাডমিন লগইনের সময় IPv4 এবং টাইমস্ট্যাম্প রেকর্ড করা হয়।',
    hi: 'सुरक्षा प्रोटोकॉल सक्रिय: प्रत्येक एडमिन लॉगिन पर IPv4 एवं टाइमस्टैम्प अनिवार्य रूप से रिकॉर्ड किया जाता है।',
    en: 'Security protocol active: IPv4 address and timestamp are permanently recorded on every admin login.'
  }
};

interface Props {
  isOpen: boolean;
  lang: Language;
  onClose: () => void;
  onSuccess: () => void;
}

export const AdminLoginModal: React.FC<Props> = ({
  isOpen,
  lang,
  onClose,
  onSuccess
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(false);
    setIsSubmitting(true);

    const isValid = verifyAdminCredentials(username, password);

    if (isValid) {
      try {
        // MANDATORY AUDIT PROTOCOL: Record IP & Timestamp before access is granted
        await recordAdminLogin(username);
      } catch (auditErr) {
        console.warn('[Security Audit Protocol Warning]:', auditErr);
      }

      setAdminSession();
      setIsSubmitting(false);
      setUsername('');
      setPassword('');
      onSuccess();
    } else {
      setIsSubmitting(false);
      setErrorMessage(true);
      setPassword('');
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl border border-slate-200">
        <div className="p-4 sm:p-5 bg-[#0f2b48] text-white flex items-center justify-between border-b border-[#1b3d63]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/30 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base leading-tight">
                {LOGIN_TEXT.modalTitle[lang]}
              </h3>
              <p className="text-[11px] text-slate-300 mt-0.5">
                {LOGIN_TEXT.modalSubtitle[lang]}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
          {errorMessage && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
              <span className="font-medium">{LOGIN_TEXT.authError[lang]}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {LOGIN_TEXT.usernameLabel[lang]}
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                required
                autoFocus
                value={username}
                onChange={e => {
                  setUsername(e.target.value);
                  setErrorMessage(false);
                }}
                placeholder={LOGIN_TEXT.usernamePlaceholder[lang]}
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0f2b48]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {LOGIN_TEXT.passwordLabel[lang]}
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={e => {
                  setPassword(e.target.value);
                  setErrorMessage(false);
                }}
                placeholder={LOGIN_TEXT.passwordPlaceholder[lang]}
                className="w-full pl-9 pr-10 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0f2b48]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 transition"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-[10.5px] text-slate-500 flex items-start gap-2">
            <KeyRound className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
            <span>{LOGIN_TEXT.securityNotice[lang]}</span>
          </div>

          <div className="pt-2 flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition"
            >
              {LOGIN_TEXT.cancelBtn[lang]}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-2 px-4 bg-[#0f2b48] hover:bg-[#1a3d60] disabled:bg-slate-400 text-white rounded-lg text-xs font-semibold transition shadow-sm flex items-center justify-center gap-1.5"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-400" />
                  <span>{LOGIN_TEXT.loggingIn[lang]}</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>{LOGIN_TEXT.loginBtn[lang]}</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};