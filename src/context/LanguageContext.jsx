import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    return localStorage.getItem('mandios_lang') || 'en';
  });
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    // Apply RTL / LTR direction and lang attribute to html element
    const dir = lang === 'ur' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('mandios_lang', lang);
  }, [lang]);

  const setLanguage = (newLang) => {
    if (newLang === lang) return;
    setIsChanging(true);
    setTimeout(() => {
      setLangState(newLang);
      setTimeout(() => {
        setIsChanging(false);
      }, 50);
    }, 150);
  };

  const toggleLanguage = () => {
    setLanguage(lang === 'en' ? 'ur' : 'en');
  };

  const t = translations[lang] || translations['en'];
  const isRTL = lang === 'ur';

  return (
    <LanguageContext.Provider value={{ lang, setLanguage, toggleLanguage, t, isRTL, isChanging }}>
      <div className={`lang-transition ${isChanging ? 'lang-changing' : ''}`}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
