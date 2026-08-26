import React, { useState, useEffect } from 'react';
import {
  Sun, Moon, Menu, X, ArrowUpRight, MessageSquare, Globe
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png"
export default function Navbar({ theme, toggleTheme }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { lang, setLanguage, t, isRTL } = useLanguage();

  const isRouteActive = (path) => location.pathname.toLowerCase() === path.toLowerCase();
  const desktopLinkClass = (path) => `px-3 py-1.5 rounded-full border text-xs font-medium transition-all duration-200 ${
    isRouteActive(path)
      ? 'border-[#10B981] text-[#10B981]'
      : 'border-transparen hover:text-white'
  }`;
  const mobileLinkClass = (path) => `w-full py-2.5 rounded-xl text-xs font-bold border text-center flex items-center justify-center gap-2 ${
    isRouteActive(path)
      ? 'border-[#10B981] text-[#10B981]'
      : theme === 'dark'
      ? 'border-zinc-800 text-zinc-200'
      : 'border-zinc-200 text-zinc-800'
  }`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'features', 'modules', 'screenshots', 'technologies', 'process', 'comparison', 'challenges', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const homeDropdown = [
    { name: 'Hero', href: '/#hero', id: 'hero' },
    { name: 'Modules', href: '/#modules', id: 'modules' },
    { name: 'Features', href: '/#features', id: 'features' },
    { name: 'Comparison', href: '/#comparison', id: 'comparison' },
    { name: 'About', href: '/#about', id: 'about' },
  ];

  const handleHomeItemClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const hash = href.startsWith('/#') ? href.slice(1) : href;

    if (location.pathname !== '/') {
      navigate({ pathname: '/', hash });
      return;
    }

    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = hash;
    }
  };

  const scrollToSection = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? theme === 'dark'
          ? 'bg-[#0a0a0b]/80 backdrop-blur-md border-b border-white/5 py-3 shadow-2xl'
          : 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-md'
        : theme === 'dark'
          ? 'bg-[#0a0a0b]/60 backdrop-blur-sm border-b border-white/5 py-4'
          : 'bg-slate-50/80 backdrop-blur-sm border-b border-slate-200/50 py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo & Branding */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
            className="flex items-center gap-2.5 group"
          >
            {/*<div className="w-8 h-8 rounded-lg bg-[#10B981] flex items-center justify-center font-bold text-black shadow-[0_0_20px_rgba(16,185,129,0.4)] group-hover:scale-105 transition-transform duration-200">
              <img src="/src/assets/logo2.png" alt="MandiOS ERP Logo" />
            </div>*/}
             <div className="p-1.5 bg-white rounded-xl shadow-md border border-emerald-500/30 flex items-center justify-center shrink-0">
              <img
                src={logo}
                alt="Mandi OS logo"
                referrerPolicy="no-referrer"
                className="h-8 w-8 object-contain rounded-lg"
              />
            </div>
            {/* <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tight flex items-center gap-1.5 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                {t.nav.brand}<span className="text-[#10B981]">OS</span>
                <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 font-mono font-bold">
                  {t.nav.badge}
                </span>
              </span>
            </div> */}
             <div className="flex ">
              <h1 className={`text-sm font-bold tracking-tight uppercase ${theme==="dark"?"text-white":"text-black"} font-display`}>{("Mandi OS")}</h1>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 ms-0.5 border border-emerald-500/30 text-emerald-400 text-[10px] font-semibold uppercase tracking-wider">
                ERP
              </span>
              {/* <p className="text-[10px] text-emerald-400 uppercase tracking-widest font-semibold">{t("ERP Broker System")}</p> */}
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className={`hidden lg:flex items-center gap-1 rounded-full px-4 py-1.5 border backdrop-blur-md ${theme === 'dark'
            ? 'border-white/10 bg-white/5'
            : 'border-slate-200 bg-white shadow-sm'
            }`}>
            <div className="relative group">
              <Link
                to="/"
                className={desktopLinkClass('/')}
              >
                {t.nav.home} <span className="text-xs">▾</span>
              </Link>
              <div className="invisible absolute left-0 top-full z-20 mt-2 min-w-[10rem] overflow-hidden rounded-2xl border border-slate-700 bg-slate-950/95 p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                {homeDropdown.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleHomeItemClick(e, item.href)}
                    className="block rounded-xl px-3 py-2 text-sm text-slate-200 transition-colors hover:bg-slate-800"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <Link
              to="/technologies"
              className={desktopLinkClass('/technologies')}
            >
              {t.nav.technologies} <span className="text-xs">Technologies</span>
            </Link>
            
            <Link
              to="/gallery"
              className={desktopLinkClass('/gallery')}
            >
              {t.nav.screenshots} <span className="text-xs"></span>
            </Link>
            <Link
              to="/faqs"
              className={desktopLinkClass('/faqs')}
            >
              {t.nav.faqs} <span className="text-xs">FAQs</span>
            </Link>
            <Link
              to="/HowItsBuilt"
              className={desktopLinkClass('/HowItsBuilt')}
            >
              {t.nav.howItsBuilt} <span className="text-xs">How It's Built</span>
            </Link>
            <Link
              to="/contact"
              className={desktopLinkClass('/contact')}
            >
              {t.nav.contact} <span className="text-xs">Contact</span>
            </Link>
            {/* {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  to={link.href}
                  className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
                >
                  {link.name}
                </Link>
              );
            })} */}
          </nav>
          {/* Right Action Buttons, Language Toggle & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-3">

            {/* Language Switcher Button (EN | اردو) */}
            <div className={`flex items-center p-0.5 rounded-full border text-xs font-medium transition-all ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-100 border-slate-200'
              }`}>
              <button
                onClick={() => setLanguage('en')}
                aria-label="Switch to English"
                className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all ${lang === 'en'
                  ? 'bg-[#10B981] text-black shadow-sm'
                  : theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-950'
                  }`}
              >
                EN
              </button>
              <span className={`px-0.5 text-[10px] ${theme === 'dark' ? 'text-slate-600' : 'text-slate-300'}`}>|</span>
              <button
                onClick={() => setLanguage('ur')}
                aria-label="اردو زبان منتخب کریں"
                className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all ${lang === 'ur'
                  ? 'bg-[#10B981] text-black shadow-sm'
                  : theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-950'
                  }`}
              >
                اردو
              </button>
            </div>

            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className={`p-2 rounded-full border transition-all duration-200 ${theme === 'dark'
                ? 'bg-white/5 border-white/10 text-amber-400 hover:bg-white/10'
                : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                }`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Live Demo Button */}
            <a
              href="#sandbox"
              onClick={(e) => { e.preventDefault(); scrollToSection('#sandbox'); window.open('https://demo.mandioserp.com', '_blank', 'noopener,noreferrer'); }}
              className="px-4 py-2 bg-[#10B981] text-black rounded-full text-xs font-semibold shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all flex items-center gap-1.5"
            >
              <span>{t.nav.liveDemo}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
            </a>

            {/* WhatsApp Contact */}
            <a
              href="https://wa.me/923704380337?text=Hello!%20I%20am%20interested%20in%20MandiOS%20ERP%20Software"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 rounded-full border text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${theme === 'dark'
                ? 'border-white/10 text-slate-200 hover:bg-white/5'
                : 'border-slate-300 text-slate-800 hover:bg-slate-100'
                }`}
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#10B981]" />
              {t.nav.whatsAppBtn}
            </a>
          </div>

          {/* Mobile Language Switcher & Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Language Toggle Mobile */}
            <div className={`flex items-center p-0.5 rounded-lg border text-xs ${theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-slate-100 border-slate-200'
              }`}>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded text-[11px] font-bold ${lang === 'en' ? 'bg-[#10B981] text-black' : 'text-slate-400'
                  }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ur')}
                className={`px-2 py-1 rounded text-[11px] font-bold ${lang === 'ur' ? 'bg-[#10B981] text-black' : 'text-slate-400'
                  }`}
              >
                اردو
              </button>
            </div>

            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className={`p-2 rounded-lg border ${theme === 'dark' ? 'bg-zinc-900 border-zinc-800 text-amber-400' : 'bg-zinc-100 border-zinc-200 text-zinc-700'
                }`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border ${theme === 'dark' ? 'bg-zinc-900 border-zinc-800 text-zinc-200' : 'bg-zinc-100 border-zinc-200 text-zinc-800'
                }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b transition-all duration-300 ${theme === 'dark' ? 'bg-zinc-950/95 border-zinc-800 text-zinc-200' : 'bg-white/95 border-zinc-200 text-zinc-800'
          } px-4 pt-4 pb-6 mt-3 space-y-3 shadow-2xl backdrop-blur-xl`}>
          <div className="grid grid-cols-2 gap-2">
           <Link
              to="/"
              onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
              className={mobileLinkClass('/')}
            >
            Home
            </Link>
            <Link
              to="/technologies"
              onClick={() => setMobileMenuOpen(false)}
              className={mobileLinkClass('/technologies')}
            >
              Technologies
            </Link>
            <Link
              to="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className={mobileLinkClass('/gallery')}
            >
              Gallery
            </Link>
            <Link
              to="/faqs"
              onClick={() => setMobileMenuOpen(false)}
              className={mobileLinkClass('/faqs')}
            >
             FAQS
            </Link>
            <Link
              to="/HowItsBuilt"
              onClick={() => setMobileMenuOpen(false)}
              className={mobileLinkClass('/HowItsBuilt')}
            >
              How It's Built
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={mobileLinkClass('/contact')}
            >
              contact
            </Link>
          </div>

          <div className="pt-3 border-t border-zinc-500/20 flex flex-col gap-2.5">
            <a
              href="#sandbox"
              onClick={(e) => { e.preventDefault(); scrollToSection('#sandbox'); }}
              className="w-full py-2.5 rounded-xl text-xs font-bold bg-emerald-500 text-zinc-950 text-center flex items-center justify-center gap-2"
            >
              {t.nav.liveDemo}
              <ArrowUpRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            </a>

            <a
              href="https://wa.me/?text=Hello!%20I%20am%20interested%20in%20MandiOS%20ERP%20Software"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl text-xs font-bold border border-emerald-500/30 text-emerald-500 text-center flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              {t.nav.whatsAppBtn}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
