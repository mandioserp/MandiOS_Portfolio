import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function FloatingControls({ theme }) {
  const { lang, t, isRTL } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`fixed bottom-6 ${isRTL ? 'left-6 items-start' : 'right-6 items-end'} z-40 flex flex-col gap-3`}>
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-11 h-11 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-100 flex items-center justify-center shadow-xl hover:bg-emerald-500 hover:text-zinc-950 transition-all duration-200 hover:scale-110"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/923704380337?text=Hello!%20I%20am%20interested%20in%20MandiOS%20ERP%20Software"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
        className="px-4 py-3 rounded-full bg-emerald-500 text-zinc-950 font-bold text-xs flex items-center gap-2 shadow-2xl hover:bg-emerald-400 hover:scale-105 transition-all duration-200 group"
      >
        <MessageSquare className="w-5 h-5 fill-zinc-950 stroke-none" />
        <span className="hidden sm:inline">{lang === 'ur' ? 'واٹس ایپ رابطہ' : 'WhatsApp Contact'}</span>
        <span className="w-2 h-2 rounded-full bg-zinc-950 animate-ping" />
      </a>

    </div>
  );
}
