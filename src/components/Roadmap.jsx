import React from 'react';
import { motion } from 'motion/react';
import { getFutureRoadmap } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { Smartphone, QrCode, Sparkles, MessageSquare, CreditCard, Languages } from 'lucide-react';

const iconMap = {
  Smartphone,
  QrCode,
  Sparkles,
  MessageSquare,
  CreditCard,
  Languages
};

export default function Roadmap({ theme }) {
  const { lang, t } = useLanguage();
  const roadmapList = getFutureRoadmap(lang);

  return (
    <section id="roadmap" className={`py-20 md:py-28 relative ${
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
              {t.roadmap.tag}
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight font-sans ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            {t.roadmap.title}
          </h2>
          <p className={`mt-3 text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            {t.roadmap.subtitle}
          </p>
        </motion.div>

        {/* Roadmap Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
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
          {roadmapList.map((rm) => {
            const IconComponent = iconMap[rm.icon] || Sparkles;

            return (
              <motion.div
                key={rm.id}
                variants={{ hidden: { opacity: 0, y: 30, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1 } }}
                transition={{ duration: 0.5 }}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 hover:border-[#10B981]/40'
                    : 'bg-white border-slate-200 hover:border-[#10B981]/40 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 text-[#10B981] flex items-center justify-center font-bold">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border font-bold ${
                    rm.status.includes('Progress') || rm.status.includes('جاری')
                      ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                      : 'bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20'
                  }`}>
                    {rm.period} • {rm.status}
                  </span>
                </div>

                <h3 className={`text-base font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>{rm.title}</h3>
                <p className={`text-xs leading-relaxed ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {rm.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

