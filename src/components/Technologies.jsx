import React from 'react';
import { motion } from 'motion/react';
import { getTechnologies } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { 
  Atom, Server, Cpu, Database, Palette, Flame, 
  KeyRound, Globe, Code2 
} from 'lucide-react';

const iconMap = {
  Atom,
  Server,
  Cpu,
  Database,
  Palette,
  Flame,
  KeyRound,
  Globe
};

export default function Technologies({ theme }) {
  const { lang, t } = useLanguage();
  const technologies = getTechnologies(lang);

  return (
    <section id="technologies" className={`py-20 md:py-28 relative ${
      theme === 'dark' ? 'bg-[#0a0a0b]' : 'bg-slate-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 mb-3">
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#10B981]">
              {t.technologies.tag}
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight font-sans ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            {t.technologies.title}
          </h2>
          <p className={`mt-3 text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            {t.technologies.subtitle}
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
        >
          {technologies.map((tech) => {
            const IconComponent = iconMap[tech.icon] || Code2;

            return (
              <motion.div
                key={tech.id}
                variants={{ hidden: { opacity: 0, y: 30, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1 } }}
                transition={{ duration: 0.5 }}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl group flex flex-col justify-between ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 hover:border-[#10B981]/50'
                    : 'bg-white border-slate-200 hover:border-[#10B981]/50 shadow-sm'
                }`}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] flex items-center justify-center font-bold shadow-md group-hover:scale-110 group-hover:bg-[#10B981] group-hover:text-black transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                      theme === 'dark'
                        ? 'bg-white/5 border-white/10 text-slate-400'
                        : 'bg-slate-100 border-slate-200 text-slate-600'
                    }`}>
                      {tech.category}
                    </span>
                  </div>

                  <h3 className={`text-lg font-bold mb-2 group-hover:text-[#10B981] transition-colors ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    {tech.name}
                  </h3>

                  <p className={`text-xs leading-relaxed mb-4 ${
                    theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {tech.description}
                  </p>
                </div>

                {/* Role in MandiOS */}
                <div className={`pt-4 border-t ${
                  theme === 'dark' ? 'border-white/10' : 'border-slate-100'
                }`}>
                  <span className="text-[10px] uppercase font-bold text-[#10B981] block mb-1">
                    {t.technologies.roleLabel}:
                  </span>
                  <p className={`text-[11px] leading-tight ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    {tech.roleInMandiOS}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

