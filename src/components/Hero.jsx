import React, { useState ,useEffect} from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, MessageSquare, ShieldCheck,ChevronLeft, ChevronRight, TrendingUp, Zap, Building2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import DashboardMockup from '../assets/dashboard.png';
export default function Hero({ theme }) {
  const [activeTab, setActiveTab] = useState('auction');
  const { lang, t, isRTL } = useLanguage();

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  //images for crousal
const images = [
  DashboardMockup,
  DashboardMockup,
 DashboardMockup,
  DashboardMockup,
];
const [current, setCurrent] = useState(0);
const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };
useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      
      {/* Background Subtle Gradient & Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full blur-[140px] opacity-25 ${
          theme === 'dark' ? 'bg-emerald-600' : 'bg-emerald-400'
        }`} />
        <div className={`absolute top-1/3 right-10 w-[400px] h-[400px] rounded-full blur-[120px] opacity-15 ${
          theme === 'dark' ? 'bg-teal-500' : 'bg-teal-300'
        }`} />
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Developer & Product Tag */}
        <motion.div 
          className="flex flex-col items-center text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#10B981] ml-2 animate-ping"></span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#10B981]">{t.hero.tag}</span>
          </div>

          {/* Main Headline */}
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-5xl mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            {t.hero.titlePart1}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] via-emerald-400 to-teal-400">
              {t.hero.titlePart2}
            </span>
          </h1>

          {/* Subheading */}
          <p className={`text-base sm:text-lg lg:text-xl font-normal max-w-3xl leading-relaxed ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {t.hero.description}
          </p>

          {/* Metric Badges Grid */}
          <motion.div 
            className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1 } }}
              transition={{ duration: 0.5 }}
              className={`p-4 rounded-xl border ${
                theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className={`text-2xl font-bold font-mono ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{t.hero.badge1Value}</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">{t.hero.badge1Label}</div>
            </motion.div>
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1 } }}
              transition={{ duration: 0.5 }}
              className={`p-4 rounded-xl border ${
                theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className={`text-2xl font-bold font-mono ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{t.hero.badge2Value}</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">{t.hero.badge2Label}</div>
            </motion.div>
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1 } }}
              transition={{ duration: 0.5 }}
              className={`p-4 rounded-xl border ${
                theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="text-2xl font-bold text-[#10B981] font-mono">{t.hero.badge3Value}</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">{t.hero.badge3Label}</div>
            </motion.div>
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1 } }}
              transition={{ duration: 0.5 }}
              className={`p-4 rounded-xl border ${
                theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="text-2xl font-bold text-orange-400 font-mono">{t.hero.badge4Value}</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">{t.hero.badge4Label}</div>
            </motion.div>
          </motion.div>

          {/* Call to Actions */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('#sandbox')}
              className="px-7 py-3.5 bg-[#10B981] text-black font-bold rounded-full text-sm shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <span>{t.hero.btnLiveDemo}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            </button>

            <a
              href="https://wa.me/?text=Hello!%20I%20am%20interested%20in%20MandiOS%20ERP%20Software"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3.5 rounded-full text-sm font-semibold border transition-all flex items-center gap-2 hover:scale-105 active:scale-95 ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                  : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50'
              }`}
            >
              <MessageSquare className="w-4 h-4 text-[#10B981]" />
              <span>{t.hero.btnWhatsApp}</span>
            </a>
          </div>

        </motion.div>

        {/* Laptop Hero Visual Mockup */}
        <motion.div 
          className="mt-8 relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          
          {/* Outer Ambient Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 via-teal-500/20 to-emerald-600/30 rounded-3xl blur-2xl opacity-50 -z-10" />
{/* 
          {/* Laptop Screen Frame */}
          <div className="relative w-full h-[500px] overflow-hidden rounded-xl group">
      {/* Images */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full transition opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full transition opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              current === index
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
        {/* <img src={DashboardMockup} alt="Dashboard img" /> */}
          {/* Floating Feature Badges around Laptop */}
          <motion.div 
            className="hidden sm:flex absolute -bottom-6 -left-8 p-3.5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 text-white backdrop-blur-xl shadow-2xl items-center gap-3 animate-bounce-slow"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold block">{lang === 'ur' ? '100٪ محفوظ ملٹی ٹیننٹ' : '100% Data Isolation'}</span>
              <span className="text-[11px] text-zinc-400">{lang === 'ur' ? 'علیحدہ ڈیٹا بیس سرور' : 'Multi-Tenant Architecture'}</span>
            </div>
          </motion.div>

          <motion.div 
            className="hidden sm:flex absolute -top-6 -right-6 p-3.5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 text-white backdrop-blur-xl shadow-2xl items-center gap-3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold block">{lang === 'ur' ? 'فوری منڈی پرچی پرنٹ' : '< 10s Mandi Patti'}</span>
              <span className="text-[11px] text-zinc-400">{lang === 'ur' ? 'خودکار آڑھت و حمالی حساب' : 'Automated Commission Math'}</span>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

