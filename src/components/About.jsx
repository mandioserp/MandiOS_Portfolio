import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, Layers, ShieldCheck, Cpu, ArrowRight, BarChart3, Zap
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About({ theme }) {
  const { t, isRTL } = useLanguage();

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className={`py-20 md:py-28 relative ${
      theme === 'dark' ? 'bg-[#0a0a0b]' : 'bg-slate-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag & Heading */}
        <motion.div 
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 mb-3">
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#10B981]">
              {t.about.tag}
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight font-sans ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            {t.about.title}
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {t.about.subtitle}
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Explanation */}
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            
            <div className={`p-6 rounded-2xl border transition-all ${
              theme === 'dark'
                ? 'bg-white/5 border-white/10 text-slate-200 shadow-xl'
                : 'bg-white border-slate-200 text-slate-800 shadow-sm'
            }`}>
              <h3 className={`text-xl font-bold mb-3 flex items-center gap-2 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                <Building2 className="w-5 h-5 text-[#10B981]" />
                {t.about.card1Title}
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {t.about.card1Desc}
              </p>
            </div>

            <div className={`p-6 rounded-2xl border transition-all ${
              theme === 'dark'
                ? 'bg-white/5 border-white/10 text-slate-200 shadow-xl'
                : 'bg-white border-slate-200 text-slate-800 shadow-sm'
            }`}>
              <h3 className={`text-xl font-bold mb-3 flex items-center gap-2 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                <Layers className="w-5 h-5 text-teal-400" />
                {t.about.card2Title}
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {t.about.card2Desc}
              </p>
            </div>

            {/* Developer Expertise Callout */}
            <div className={`p-6 rounded-2xl border bg-gradient-to-r ${
              theme === 'dark'
                ? 'from-[#10B981]/10 via-white/5 to-white/5 border-[#10B981]/30 text-slate-200'
                : 'from-emerald-50 via-white to-white border-emerald-200 text-slate-800'
            }`}>
              <h4 className="text-xs font-bold text-[#10B981] uppercase tracking-widest mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4" /> {t.about.devTitle}
              </h4>
              <p className={`text-xs sm:text-sm leading-relaxed ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
              }`}>
                {t.about.devDesc}
              </p>
            </div>

          </motion.div>

          {/* Right Highlights Cards */}
          <motion.div 
            className="lg:col-span-5 space-y-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            
            <div className={`p-5 rounded-2xl border flex items-start gap-4 ${
              theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="p-3 rounded-xl bg-[#10B981]/10 text-[#10B981] font-bold">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{t.about.feature1Title}</h4>
                <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  {t.about.feature1Desc}
                </p>
              </div>
            </div>

            <div className={`p-5 rounded-2xl border flex items-start gap-4 ${
              theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400 font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{t.about.feature2Title}</h4>
                <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  {t.about.feature2Desc}
                </p>
              </div>
            </div>

            <div className={`p-5 rounded-2xl border flex items-start gap-4 ${
              theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 font-bold">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <h4 className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{t.about.feature3Title}</h4>
                <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  {t.about.feature3Desc}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => scrollToSection('#modules')}
                className="w-full py-3.5 rounded-full text-xs font-semibold bg-[#10B981] text-black shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{t.about.btnModules}</span>
                <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

