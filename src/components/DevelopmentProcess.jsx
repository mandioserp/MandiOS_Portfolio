import React from 'react';
import { motion } from 'motion/react';
import { getDevelopmentProcess } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { 
  Search, FileText, Layout, Code2, Terminal, Database, 
  ShieldCheck, Calculator, CheckCircle2, Rocket, Wrench, 
  Check, UserCheck 
} from 'lucide-react';

const iconMap = {
  Search,
  FileText,
  Layout,
  Code2,
  Terminal,
  Database,
  ShieldCheck,
  Calculator,
  CheckCircle2,
  Rocket,
  Wrench
};

export default function DevelopmentProcess({ theme }) {
  const { lang, t, isRTL } = useLanguage();
  const processList = getDevelopmentProcess(lang);

  return (
    <section id="process" className={`py-20 md:py-28 relative ${
      theme === 'dark' ? 'bg-[#0d0d0f]' : 'bg-white'
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
              {t.process.tag}
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight font-sans ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            {t.process.title}
          </h2>
          <p className={`mt-3 text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            {t.process.subtitle}
          </p>
          
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 text-xs font-bold">
            <UserCheck className="w-4 h-4" />
            <span>{t.process.soloBadge}</span>
          </div>
        </motion.div>

        {/* Timeline Grid */}
        <div className={`relative border-l-2 border-[#10B981]/30 ml-4 sm:ml-8 lg:ml-32 space-y-8 ${isRTL ? 'border-r-2 border-l-0 mr-4 sm:mr-8 lg:mr-32 ml-0' : ''}`}>
          {processList.map((step) => {
            const IconComponent = iconMap[step.icon] || Code2;

            return (
              <motion.div 
                key={step.step} 
                initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className={`relative group ${isRTL ? 'pr-6 sm:pr-10 pl-0' : 'pl-6 sm:pl-10'}`}
              >
                
                {/* Step Circle Node */}
                <div className={`absolute top-1.5 w-8 h-8 rounded-full border-2 border-[#10B981] flex items-center justify-center text-[#10B981] text-xs font-bold font-mono group-hover:scale-125 group-hover:bg-[#10B981] group-hover:text-black transition-all shadow-[0_0_10px_rgba(16,185,129,0.3)] ${
                  isRTL ? '-right-[17px]' : '-left-[17px]'
                } ${
                  theme === 'dark' ? 'bg-[#0d0d0f]' : 'bg-white'
                }`}>
                  {step.step}
                </div>

                {/* Content Card */}
                <div className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 hover:border-[#10B981]/40'
                    : 'bg-slate-50 border-slate-200 hover:border-[#10B981]/40 shadow-sm'
                }`}>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-[#10B981]/10 text-[#10B981]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className={`text-lg font-bold ${
                        theme === 'dark' ? 'text-white' : 'text-slate-900'
                      }`}>{step.title}</h3>
                    </div>
                    <span className="text-xs font-mono text-[#10B981] font-semibold px-2.5 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 self-start sm:self-auto">
                      {step.subtitle}
                    </span>
                  </div>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {step.description}
                  </p>

                  {/* Deliverables Badges */}
                  <div className={`flex flex-wrap gap-2 pt-3 border-t ${
                    theme === 'dark' ? 'border-white/10' : 'border-slate-200'
                  }`}>
                    <span className="text-[10px] uppercase font-bold text-slate-400 self-center mr-1">
                      {t.process.deliverablesLabel}:
                    </span>
                    {step.deliverables.map((del, i) => (
                      <span key={i} className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border flex items-center gap-1 ${
                        theme === 'dark'
                          ? 'bg-white/5 border-white/10 text-slate-300'
                          : 'bg-white border-slate-200 text-slate-700'
                      }`}>
                        <Check className="w-3 h-3 text-[#10B981]" />
                        {del}
                      </span>
                    ))}
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

