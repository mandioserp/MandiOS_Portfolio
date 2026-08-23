import React from 'react';
import { motion } from 'motion/react';
import { getTraditionalVsMandios } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { XCircle, CheckCircle2 } from 'lucide-react';

export default function Comparison({ theme }) {
  const { lang, t } = useLanguage();
  const comparisonData = getTraditionalVsMandios(lang);

  return (
    <section id="comparison" className={`py-20 md:py-28 relative ${
      theme === 'dark' ? 'bg-[#0a0a0b]' : 'bg-slate-100/70'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 mb-3">
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#10B981]">
              {t.comparison.tag}
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight font-sans ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            {t.comparison.title}
          </h2>
          <p className={`mt-3 text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            {t.comparison.subtitle}
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Traditional Method Card */}
          <motion.div 
            className={`p-6 sm:p-8 rounded-3xl border ${
              theme === 'dark'
                ? 'bg-white/5 border-red-500/20 text-slate-300'
                : 'bg-white border-red-200 text-slate-800 shadow-sm'
            }`}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-red-500/20">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center font-bold">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-400">{t.comparison.tradTitle}</h3>
                <p className="text-xs text-slate-400">{t.comparison.tradSubtitle}</p>
              </div>
            </div>

            <div className="space-y-4">
              {comparisonData.traditional.map((item, idx) => (
                <div key={idx} className={`p-4 rounded-xl border flex items-start gap-3 ${
                  theme === 'dark' ? 'bg-black/30 border-white/5' : 'bg-red-50/50 border-red-100'
                }`}>
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-red-400">❌ {item.title}</h4>
                    <p className={`text-xs mt-0.5 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* MandiOS Card */}
          <motion.div 
            className={`p-6 sm:p-8 rounded-3xl border relative overflow-hidden ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-[#10B981]/10 via-white/5 to-white/5 border-[#10B981]/40 text-white shadow-2xl'
                : 'bg-gradient-to-br from-emerald-50 via-white to-white border-emerald-300 text-slate-900 shadow-lg'
            }`}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            
            <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl bg-[#10B981] text-black font-bold text-xs uppercase tracking-wider">
              {t.comparison.recBadge}
            </div>

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#10B981]/30">
              <div className="w-10 h-10 rounded-xl bg-[#10B981] text-black flex items-center justify-center font-bold shadow-[0_0_10px_rgba(16,185,129,0.4)]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className={`text-xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>{t.comparison.mandiosTitle}</h3>
                <p className="text-xs text-slate-400">{t.comparison.mandiosSubtitle}</p>
              </div>
            </div>

            <div className="space-y-4">
              {comparisonData.mandios.map((item, idx) => (
                <div key={idx} className={`p-4 rounded-xl border flex items-start gap-3 ${
                  theme === 'dark' ? 'bg-black/40 border-[#10B981]/30' : 'bg-emerald-50/80 border-emerald-200'
                }`}>
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#10B981]">✅ {item.title}</h4>
                    <p className={`text-xs mt-0.5 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

