import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  X,
  Send,
  Mic,
  MicOff,
  Volume2,
  Bot,
  User,
  Scale,
  Loader2,
  AlertCircle,
  ArrowRight,
  Globe,
  GripHorizontal
} from 'lucide-react';
import type { Language } from '../types/legal';
import {
  startVoiceRecognition,
  stopActiveVoiceRecognition,
  isVoiceSearchSupported,
  playAudioRoadmap,
  stopAudio
} from '../utils/speechEngine';
import { cleanPlainText } from '../utils/localLegalKB';
import { getApiUrl } from '../utils/apiBase';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  isLanguagePrompt?: boolean;
}

const GREETINGS = {
  initialEnglish: `Hello! I am NyayaMitra AI Sahayak, your civil legal navigator and AI Friend for India and West Bengal.

Please choose your preferred language to begin:
• English
• বাংলা (Bengali)
• हिन्दी (Hindi)

Tap an option below or type your civil legal question directly:`,

  selectedBengali: `নমস্কার, আমি আপনার এআই বন্ধু (AI Friend) হিসেবে ভারতের দেওয়ানি ও পশ্চিমবঙ্গ আইনি সহায়তার জন্য প্রস্তুত। তবে অনুগ্রহ করে যেকোনো পদক্ষেপের পূর্বে একজন আইন বিশেষজ্ঞের পরামর্শ নিন।

জমিজমা, বাড়িভাড়া, রেরা আবাসন, চেক বাউন্স, বাটোয়ারা বা খোরপোশ সংক্রান্ত যেকোনো সমস্যা আমাকে নির্দ্বিধায় জানান। নিচে দেওয়া বিষয়গুলোতেও ট্যাপ করতে পারেন:`,

  selectedHindi: `नमस्ते, मैं आपके एआई मित्र (AI Friend) के रूप में भारत एवं पश्चिम बंगाल के सिविल विधिक मामलों में सहायता हेतु उपस्थित हूँ। आगे की विधिक सहायता के लिए किसी विधि विशेषज्ञ से परामर्श अवश्य लें।

जमीन-जायदाद, किरायेदारी, रेरा बिल्डर, चेक बाउंस, पारिवारिक अथवा गुजारा भत्ता संबंधी प्रश्न बेझिझक पूछें:`,

  selectedEnglish: `Hello, I am here to help you as an AI Friend as your civil legal navigator for West Bengal and India. However, please consult a legal professional to get this information vetted and provide you further legal assistance.

Feel free to ask any question regarding property disputes, land records, tenancy, consumer/RERA claims, cheque dishonour, inheritance, or family maintenance:`
};

const SUGGESTIONS = {
  bn: [
    'ওয়ারিশান জমি মিউটেশন না হলে কি করব?',
    'বাড়িওয়ালা অন্যায়ভাবে জল বা বিদ্যুৎ কাটলে কি প্রতিকার?',
    'বিল্ডার প্রতিশ্রুত সময়ে ফ্ল্যাট না দিলে ক্ষতিপূরণ দাবি',
    'চেক বাউন্স হলে ধারা ১৩৮ নোটিশ পাঠানোর নিয়ম'
  ],
  hi: [
    'पैतृक संपत्ति में बहनों का कानूनी हिस्सा कैसे लें?',
    'मकान मालिक अवैध रूप से बिजली-पानी काटे तो क्या करें?',
    'बिल्डर द्वारा फ्लैट देरी पर रेरा ब्याज व रिफंड',
    'चेक बाउंस होने पर कानूनी नोटिस के नियम'
  ],
  en: [
    'Can ancestral property be sold without all heirs consent?',
    'Landlord cut electricity and water supply. Immediate remedy?',
    'Builder delayed flat handover by 2 years. How to claim interest?',
    'Cheque bounced due to insufficient funds. What are next steps?'
  ]
};

const PLACEHOLDERS = {
  bn: 'আপনার দেওয়ানি আইনি সমস্যা লিখুন বা মুখে বলুন...',
  hi: 'अपनी सिविल कानूनी समस्या लिखें या बोलें...',
  en: 'Type or speak your civil legal problem...'
};

export const AiChatAssistant: React.FC<{ lang: Language }> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeSpeakingId, setActiveSpeakingId] = useState<string | null>(null);

  const [chatLang, setChatLang] = useState<Language>('en');
  const [hasChosenLanguage, setHasChosenLanguage] = useState(false);

  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  const getInitialMessages = (): ChatMessage[] => [
    {
      id: 'msg-welcome',
      role: 'assistant',
      text: GREETINGS.initialEnglish,
      isLanguagePrompt: true
    }
  ];

  const [messages, setMessages] = useState<ChatMessage[]>(getInitialMessages);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleCloseChat = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    stopAudio();
    stopActiveVoiceRecognition();
    setActiveSpeakingId(null);
    setIsOpen(false);

    setTimeout(() => {
      setDragOffset({ x: 0, y: 0 });
      setMessages(getInitialMessages());
      setChatLang('en');
      setHasChosenLanguage(false);
      setInputText('');
      setIsLoading(false);
      setIsListening(false);
    }, 200);
  };

  const handleSelectLanguage = (chosenLang: Language) => {
    setChatLang(chosenLang);
    setHasChosenLanguage(true);

    const confirmationText =
      chosenLang === 'bn'
        ? GREETINGS.selectedBengali
        : chosenLang === 'hi'
        ? GREETINGS.selectedHindi
        : GREETINGS.selectedEnglish;

    const userAckText =
      chosenLang === 'bn' ? 'বাংলা (Bengali)' : chosenLang === 'hi' ? 'हिन्दी (Hindi)' : 'English';

    setMessages(prev => [
      ...prev,
      {
        id: `user-lang-${Date.now()}`,
        role: 'user',
        text: `I prefer to communicate in ${userAckText}.`
      },
      {
        id: `bot-lang-confirm-${Date.now()}`,
        role: 'assistant',
        text: confirmationText
      }
    ]);
  };

  const handleSendMessage = async (textToSend: string) => {
    const cleanText = textToSend.trim();
    if (!cleanText || isLoading) return;

    const lower = cleanText.toLowerCase();
    if (!hasChosenLanguage) {
      if (lower.includes('bengali') || lower.includes('bangla') || cleanText.includes('বাংলা')) {
        handleSelectLanguage('bn');
        setInputText('');
        return;
      }
      if (lower.includes('hindi') || cleanText.includes('हिन्दी') || cleanText.includes('हिंदी')) {
        handleSelectLanguage('hi');
        setInputText('');
        return;
      }
      if (lower.includes('english')) {
        handleSelectLanguage('en');
        setInputText('');
        return;
      }
      setHasChosenLanguage(true);
    }

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: cleanText
    };

    // Build conversation history (last 6 messages) for multi-turn conversational context
    const historyPayload = messages
      .filter(m => !m.isLanguagePrompt && m.text.trim())
      .slice(-6)
      .map(m => ({
        role: m.role,
        content: m.text
      }));

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    // Timeout extended to 75 seconds to allow full legal synthesis without throttling
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 75000);

    try {
      const res = await fetch(getApiUrl('/api/chat'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: cleanText,
          lang: chatLang,
          history: historyPayload
        }),
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      const data = await res.json();
      let replyText = data?.reply ? cleanPlainText(data.reply) : '';

      if (!replyText) {
        if (data?.error) {
          replyText = `Legal advisory service notice: ${data.error}. Please try again shortly.`;
        } else {
          replyText =
            chatLang === 'bn'
              ? 'নমস্কার, আমি আপনার এআই বন্ধু। আপনার প্রশ্নটি বিশদভাবে বিশ্লেষণ করা হচ্ছে। জমিজমা, বাড়িভাড়া, চেক বাউন্স বা দেওয়ানি বিষয়ে সুনির্দিষ্ট তথ্য দিন যাতে সঠিক আইনি ধারা সহ পরামর্শ দেওয়া যায়।'
              : chatLang === 'hi'
              ? 'नमस्ते, मैं आपके एआई मित्र के रूप में उपस्थित हूँ। कृपया अपनी जमीन, किरायेदारी, चेक बाउंस अथवा सिविल विवाद का विवरण साझा करें ताकि सही कानूनी धाराओं के तहत मार्गदर्शन किया जा सके।'
              : 'Hello, I am your civil legal assistant. Under Indian civil law, please specify the exact details of your property, tenancy, contract, or family dispute so I can guide you through the precise legal remedies and statutory forums.';
        }
      }

      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        text: replyText
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (err: any) {
      clearTimeout(timeoutId);
      const isAbort = err?.name === 'AbortError';
      const fallbackMsg = isAbort
        ? chatLang === 'bn'
          ? 'নমস্কার, উত্তর তৈরিতে সময় বেশি লাগছে। অনুগ্রহ করে প্রশ্নটি সংক্ষেপে পুনরায় জিজ্ঞাসা করুন।'
          : chatLang === 'hi'
          ? 'नमस्ते, उत्तर देने में समय अधिक लग रहा है। कृपया प्रश्न संक्षेप में पुनः पूछें।'
          : 'Hello, generating the detailed legal response took longer than expected. Please ask with a specific question or scenario.'
        : chatLang === 'bn'
        ? 'নমস্কার, সংযোগ বিচ্ছিন্ন হয়েছে। সরকারি বিনামূল্যে আইনি হেল্পলাইন ১৫১০০-তে যোগাযোগ করতে পারেন।'
        : chatLang === 'hi'
        ? 'नमस्ते, नेटवर्क त्रुटि हुई है। कृपया पुनः प्रयास करें अथवा विधिक हेल्पलाइन 15100 पर संपर्क करें।'
        : 'Hello, a network error occurred. Please check your connection or contact the National Free Legal Aid Helpline at 15100.';

      setMessages(prev => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: 'assistant',
          text: fallbackMsg
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMicToggle = () => {
    if (isListening) {
      stopActiveVoiceRecognition();
      setIsListening(false);
      return;
    }

    if (!isVoiceSearchSupported()) {
      alert('Microphone input is not supported in this browser. Please use Chrome, Edge, or Safari.');
      return;
    }

    setIsListening(true);
    startVoiceRecognition(
      chatLang,
      (streamingTranscript) => {
        setInputText(streamingTranscript);
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

  const handleSpeakMessage = (msgId: string, textToSpeak: string) => {
    if (activeSpeakingId === msgId) {
      stopAudio();
      setActiveSpeakingId(null);
      return;
    }

    stopAudio();
    setActiveSpeakingId(msgId);

    const cleanSpeechText = cleanPlainText(textToSpeak)
      .replace(/বিঃদ্রঃ.*$/, '')
      .replace(/Note:.*$/i, '');

    playAudioRoadmap(
      cleanSpeechText,
      chatLang,
      () => setActiveSpeakingId(msgId),
      () => setActiveSpeakingId(null),
      () => setActiveSpeakingId(null)
    );
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('button')) return;

    isDraggingRef.current = true;
    dragStartRef.current = {
      x: e.clientX - dragOffset.x,
      y: e.clientY - dragOffset.y
    };

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const newX = e.clientX - dragStartRef.current.x;
    const newY = e.clientY - dragStartRef.current.y;
    setDragOffset({ x: newX, y: newY });
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {}
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-full bg-[#0f2b48] hover:bg-[#1a3d60] text-white shadow-2xl flex items-center gap-2.5 border-2 border-amber-400 ring-4 ring-amber-400/20 transition-all hover:scale-105 active:scale-95 cursor-pointer group"
          title="NyayaMitra AI Sahayak"
        >
          <div className="relative flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-400 to-emerald-400 flex items-center justify-center text-slate-950 font-bold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
            </div>
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
            </span>
          </div>
          <span className="text-xs font-black tracking-wide pr-1">
            NyayaMitra AI Sahayak
          </span>
        </button>
      )}

      {isOpen && (
        <div
          style={{
            transform: `translate3d(${dragOffset.x}px, ${dragOffset.y}px, 0)`
          }}
          className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 w-full sm:max-w-md h-[92vh] sm:h-[620px] bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl border border-slate-300 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-200"
        >
          {/* HEADER */}
          <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="p-3 bg-[#0f2b48] text-white flex items-center justify-between border-b border-[#1b3e63] shrink-0 cursor-move select-none touch-none"
            title="Click & Drag to reposition window"
          >
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-400 to-emerald-400 flex items-center justify-center text-slate-950 shadow-xs shrink-0">
                <Scale className="w-4 h-4 font-bold" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-xs sm:text-sm font-bold truncate">
                    NyayaMitra AI Sahayak
                  </h3>
                  <div className="flex items-center gap-1 bg-emerald-950/60 border border-emerald-500/40 px-1.5 py-0.5 rounded-full shrink-0">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-[9px] font-black text-emerald-400 uppercase">
                      Active
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[9.5px] text-slate-300">
                  <GripHorizontal className="w-3 h-3 text-amber-300/80" />
                  <span className="truncate">Civil Legal Navigator &bull; {chatLang.toUpperCase()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* MESSAGES LIST */}
          <div className="flex-1 overflow-y-auto p-3.5 space-y-3 bg-slate-50 text-xs">
            {messages.map(m => (
              <div key={m.id} className="space-y-2">
                <div className={`flex gap-2 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {m.role === 'assistant' && (
                    <div className="w-6 h-6 rounded-full bg-[#0f2b48] text-amber-400 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`max-w-[88%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-wrap font-sans ${
                      m.role === 'user'
                        ? 'bg-[#0f2b48] text-white rounded-br-none shadow-xs'
                        : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-xs'
                    }`}
                  >
                    <p>{m.text}</p>

                    {m.role === 'assistant' && !m.isLanguagePrompt && (
                      <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => handleSpeakMessage(m.id, m.text)}
                          className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded transition cursor-pointer ${
                            activeSpeakingId === m.id
                              ? 'bg-emerald-600 text-white animate-pulse'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                          }`}
                        >
                          <Volume2 className="w-3 h-3" />
                          <span>{activeSpeakingId === m.id ? 'Stop Audio' : 'Listen Aloud'}</span>
                        </button>
                        {/* BRAND-SAFE UI BADGE: Completely free of any underlying model names */}
                        <span className="text-[9px] text-slate-400">Verified Legal Engine</span>
                      </div>
                    )}
                  </div>

                  {m.role === 'user' && (
                    <div className="w-6 h-6 rounded-full bg-slate-300 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>

                {m.isLanguagePrompt && !hasChosenLanguage && (
                  <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-2 ml-8 shadow-xs">
                    <div className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-blue-600" />
                      <span>Select Preferred Language:</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => handleSelectLanguage('en')}
                        className="py-2 px-2.5 rounded-lg border-2 border-slate-300 hover:border-[#0f2b48] hover:bg-slate-50 text-slate-800 font-bold text-xs transition text-center shadow-xs cursor-pointer"
                      >
                        🇬🇧 English
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSelectLanguage('bn')}
                        className="py-2 px-2.5 rounded-lg border-2 border-emerald-500 bg-emerald-50 hover:bg-emerald-100 text-emerald-950 font-bold text-xs transition text-center shadow-xs cursor-pointer"
                      >
                        🇮🇳 বাংলা
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSelectLanguage('hi')}
                        className="py-2 px-2.5 rounded-lg border-2 border-orange-400 bg-orange-50 hover:bg-orange-100 text-orange-950 font-bold text-xs transition text-center shadow-xs cursor-pointer"
                      >
                        🇮🇳 हिन्दी
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {hasChosenLanguage && messages.length <= 3 && (
              <div className="pt-1 space-y-1.5 ml-8">
                {SUGGESTIONS[chatLang].map((s, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSendMessage(s)}
                    className="w-full text-left p-2.5 rounded-lg bg-white hover:bg-emerald-50 border border-slate-200 text-slate-700 text-[11px] font-medium transition flex items-center justify-between shadow-2xs cursor-pointer"
                  >
                    <span>💡 {s}</span>
                    <ArrowRight className="w-3 h-3 text-slate-400 shrink-0 ml-1" />
                  </button>
                ))}
              </div>
            )}

            {isLoading && (
              <div className="flex items-center gap-2 text-slate-500 text-[11px] p-2.5 bg-white rounded-xl border border-slate-200 w-fit shadow-xs ml-8">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-[#0f2b48]" />
                <span>NyayaMitra AI Sahayak is compiling detailed civil legal guidance...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* STATUS FOOTER */}
          <div className="px-3 py-1 bg-amber-50/80 border-t border-amber-200/70 text-[9.5px] text-amber-900 flex items-center gap-1.5 shrink-0">
            <AlertCircle className="w-3 h-3 text-amber-700 shrink-0" />
            <span className="truncate">Indian Civil Law &bull; BCI Rule 36 Compliant Guidance &bull; DLSA 15100</span>
          </div>

          {/* BOTTOM FORM BAR WITH CLOSE (X) BUTTON POSITIONED AT BOTTOM-LEFT */}
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSendMessage(inputText);
            }}
            className="p-2.5 bg-white border-t border-slate-200 flex items-center gap-1.5 shrink-0"
          >
            {/* CLOSE (X) BUTTON AT THE BOTTOM-LEFT */}
            <button
              type="button"
              onClick={handleCloseChat}
              className="p-2 rounded-xl bg-red-50 hover:bg-red-600 text-red-600 hover:text-white border border-red-200 transition-all flex items-center justify-center shrink-0 shadow-xs cursor-pointer"
              title="Close NyayaMitra AI Sahayak"
              aria-label="Close NyayaMitra AI Sahayak"
            >
              <X className="w-4 h-4 stroke-[2.5]" />
            </button>

            <input
              type="text"
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              placeholder={isListening ? 'Listening...' : PLACEHOLDERS[chatLang]}
              className={`flex-1 px-3 py-2 text-xs rounded-xl border focus:outline-none transition ${
                isListening
                  ? 'border-red-500 ring-2 ring-red-400/30 placeholder-red-600 font-semibold animate-pulse'
                  : 'border-slate-300 focus:border-[#0f2b48]'
              }`}
            />

            <button
              type="button"
              onClick={handleMicToggle}
              className={`p-2 rounded-xl transition cursor-pointer ${
                isListening ? 'bg-red-600 text-white animate-bounce' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
              }`}
              title="Voice Input (Speak)"
            >
              {isListening ? <MicOff className="w-4 h-4 text-white" /> : <Mic className="w-4 h-4 text-emerald-700" />}
            </button>

            <button
              type="submit"
              disabled={isLoading || !inputText.trim()}
              className="p-2 bg-[#0f2b48] hover:bg-[#1a3d60] disabled:bg-slate-300 text-white rounded-xl transition shadow-xs cursor-pointer"
              title="Send Message"
            >
              <Send className="w-4 h-4 text-amber-400" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};