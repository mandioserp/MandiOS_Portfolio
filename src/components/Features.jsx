import React from 'react';
import { motion } from 'motion/react';
import { getPowerfulFeatures } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { Check } from 'lucide-react';

export default function Features({ theme }) {
  const { lang, t } = useLanguage();
  const powerfulFeatures = getPowerfulFeatures(lang);



  return (
    <section id="features" className={`py-20 md:py-28 relative ${
      theme === 'dark' ? 'bg-[#0d0d0f]' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 mb-3">
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#10B981]">
              {t.features.tag}
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight font-sans ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            {t.features.title}
          </h2>
          <p className={`mt-3 text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            {t.features.subtitle}
          </p>
        </motion.div>


        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
        >
          {powerfulFeatures.map((feature) => (
            <motion.div
              key={feature.id}
              variants={{ hidden: { opacity: 0, y: 25, scale: 0.97 }, visible: { opacity: 1, y: 0, scale: 1 } }}
              transition={{ duration: 0.45 }}
              className={`p-5 rounded-2xl border transition-all duration-300 hover:scale-[1.01] flex items-start gap-3.5 ${
                feature.isHighlighted
                  ? theme === 'dark'
                    ? 'bg-gradient-to-br from-[#10B981]/10 via-white/5 to-white/5 border-[#10B981]/30 shadow-lg'
                    : 'bg-gradient-to-br from-emerald-50/80 via-white to-white border-emerald-300 shadow-sm'
                  : theme === 'dark'
                  ? 'bg-white/5 border-white/10'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              {/* Checkmark Icon */}
              <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                feature.isHighlighted
                  ? 'bg-[#10B981] text-black font-bold shadow-[0_0_10px_rgba(16,185,129,0.4)]'
                  : 'bg-[#10B981]/10 text-[#10B981]'
              }`}>
                <Check className="w-4 h-4 stroke-[2.5]" />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className={`text-sm font-bold tracking-tight ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    {feature.title}
                  </h3>
                  {feature.isHighlighted && (
                    <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded-full bg-[#10B981]/20 text-[#10B981] font-bold border border-[#10B981]/30">
                      {lang === 'ur' ? 'بنیادی' : 'Core'}
                    </span>
                  )}
                </div>
                <p className={`text-xs leading-relaxed ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

