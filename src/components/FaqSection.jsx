import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { getFaqs } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection({ theme }) {
  const { lang, t, isRTL } = useLanguage();
  const [openId, setOpenId] = useState('faq-1');
  const faqs = getFaqs(lang);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className={`py-20 md:py-28 relative ${
      theme === 'dark' ? 'bg-[#0a0a0b]' : 'bg-slate-100/70'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 mb-3">
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#10B981]">
              {t.faq.tag}
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight font-sans ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            {t.faq.title}
          </h2>
          <p className={`mt-3 text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            {t.faq.subtitle}
          </p>
        </motion.div>

        {/* Accordion List */}
        <motion.div 
          className="space-y-4"
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
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.4 }}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? theme === 'dark'
                      ? 'bg-white/10 border-[#10B981]/40 shadow-lg'
                      : 'bg-white border-[#10B981]/40 shadow-md'
                    : theme === 'dark'
                    ? 'bg-white/5 border-white/10 hover:border-white/20'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className={`w-full p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-sm sm:text-base outline-none ${
                    isRTL ? 'text-right' : 'text-left'
                  } ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-[#10B981]' : 'text-slate-400'}`} />
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#10B981]' : 'text-slate-400'
                  }`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`px-6 pb-6 pt-0 text-xs sm:text-sm leading-relaxed border-t pt-4 ${
                        theme === 'dark'
                          ? 'text-slate-300 border-white/10'
                          : 'text-slate-600 border-slate-100'
                      }`}
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

