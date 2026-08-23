import React from 'react';
import { motion } from 'motion/react';
import { getTechnicalChallenges } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck } from 'lucide-react';

export default function ChallengesSolved({ theme }) {
  const { lang, t } = useLanguage();
  const challenges = getTechnicalChallenges(lang);

  return (
    <section id="challenges" className={`py-20 md:py-28 relative ${
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
              {t.challenges.tag}
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight font-sans ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            {t.challenges.title}
          </h2>
          <p className={`mt-3 text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            {t.challenges.subtitle}
          </p>
        </motion.div>

        {/* Challenges Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {challenges.map((ch) => (
            <motion.div
              key={ch.id}
              variants={{ hidden: { opacity: 0, y: 30, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1 } }}
              transition={{ duration: 0.5 }}
              className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover:shadow-2xl flex flex-col justify-between ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10 hover:border-[#10B981]/50'
                  : 'bg-slate-50 border-slate-200 hover:border-[#10B981]/50'
              }`}
            >
              <div>
                <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  <ShieldCheck className="w-5 h-5 text-[#10B981] shrink-0" />
                  {ch.title}
                </h3>

                {/* Problem Statement */}
                <div className={`p-4 rounded-xl border mb-4 text-xs leading-relaxed ${
                  theme === 'dark' ? 'bg-black/30 border-red-500/20 text-slate-300' : 'bg-red-50/50 border-red-200 text-slate-700'
                }`}>
                  <span className="font-bold text-red-400 uppercase tracking-wider block mb-1">
                    {t.challenges.problemLabel}:
                  </span>
                  {ch.problem}
                </div>

                {/* Solution Statement */}
                <div className={`p-4 rounded-xl border mb-4 text-xs leading-relaxed ${
                  theme === 'dark' ? 'bg-black/40 border-[#10B981]/30 text-slate-200' : 'bg-emerald-50/80 border-emerald-200 text-slate-800'
                }`}>
                  <span className="font-bold text-[#10B981] uppercase tracking-wider block mb-1">
                    {t.challenges.solutionLabel}:
                  </span>
                  {ch.solution}
                </div>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {ch.techUsed.map((tech, i) => (
                    <span key={i} className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 font-bold">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Impact Banner */}
                <div className={`pt-3 border-t flex items-center justify-between text-xs font-bold text-[#10B981] ${
                  theme === 'dark' ? 'border-white/10' : 'border-slate-200'
                }`}>
                  <span>{t.challenges.impactLabel}:</span>
                  <span className={`font-mono px-2.5 py-0.5 rounded-full border border-[#10B981]/30 ${
                    theme === 'dark' ? 'text-white bg-[#10B981]/20' : 'text-slate-900 bg-[#10B981]/10'
                  }`}>
                    {ch.impact}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

