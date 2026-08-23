import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { getDashboardShowcase, getScreenshotCategories } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { 
  Maximize2, X, Eye
} from 'lucide-react';

export default function DashboardShowcase({ theme }) {
  const { lang, t, isRTL } = useLanguage();
  const showcaseData = getDashboardShowcase(lang);
  const screenshotCategories = getScreenshotCategories(lang);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeLightbox, setActiveLightbox] = useState(null);

  const categories = ['All', ...screenshotCategories];

  const filteredItems = showcaseData.filter((item) => {
    return selectedCategory === 'All' || item.category === selectedCategory;
  });

  return (
    <section id="screenshots" className={`py-20 md:py-28 relative ${
      theme === 'dark' ? 'bg-[#0a0a0b]' : 'bg-slate-100/80'
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
              {t.dashboardShowcase.tag}
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight font-sans ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            {t.dashboardShowcase.title}
          </h2>
          <p className={`mt-3 text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            {t.dashboardShowcase.subtitle}
          </p>
        </motion.div>

        {/* Category Selector Tabs */}
        <motion.div 
          className={`flex flex-wrap items-center justify-center gap-1.5 mb-10 max-w-4xl mx-auto p-1.5 rounded-full border backdrop-blur-md ${
            theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white shadow-sm'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#10B981] text-black shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                  : theme === 'dark'
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              {cat === 'All' && lang === 'ur' ? 'تمام سکرینز' : cat}
            </button>
          ))}
        </motion.div>

        {/* Showcase Masonry Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
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
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => setActiveLightbox(item)}
              variants={{ hidden: { opacity: 0, y: 35, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1 } }}
              transition={{ duration: 0.6 }}
              className={`rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer group ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10 hover:border-[#10B981]/50'
                  : 'bg-white border-slate-200 hover:border-[#10B981]/50 shadow-sm'
              }`}
            >
              
              {/* Simulated UI Mockup Header */}
              <div className="bg-[#1a1a1c] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
                  <span className="ml-2 text-[11px] font-mono text-slate-400">
                    MandiOS • {item.category} Module View
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase bg-[#10B981]/10 text-[#10B981] px-2 py-0.5 rounded-full border border-[#10B981]/20">
                  {lang === 'ur' ? 'انٹرایکٹو پیش نظارہ' : 'Interactive Preview'}
                </span>
              </div>

              {/* Styled Mock Screen Content */}
              <div className={`p-6 bg-gradient-to-br ${item.imageBg} text-white min-h-[240px] flex flex-col justify-between relative group-hover:scale-[1.01] transition-transform duration-500`}>
                
                {/* Top Badge & Zoom Action */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-black/60 border border-white/10 backdrop-blur-md">
                    {item.title}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#10B981] text-black flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all shadow-[0_0_10px_rgba(16,185,129,0.4)]">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Mock Data Highlights Card */}
                <div className="my-4 bg-[#1a1a1c]/90 border border-white/10 rounded-xl p-3.5 backdrop-blur-md">
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    {item.mockDataSummary.map((data, idx) => (
                      <div key={idx} className="p-1.5 rounded bg-black/40 border border-white/5">
                        <span className="text-[10px] text-slate-400 block">{data.label}</span>
                        <span className="text-[#10B981] font-bold">{data.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlights Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {item.highlights.map((hl, i) => (
                    <span key={i} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white/10 border border-white/10 backdrop-blur-sm">
                      ✓ {hl}
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom Text Bar */}
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className={`text-base font-bold group-hover:text-[#10B981] transition-colors ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-xs mt-1 line-clamp-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                    {item.description}
                  </p>
                </div>
                <div className="p-2 rounded-xl bg-[#10B981]/10 text-[#10B981] shrink-0 ml-3">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightbox && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className={`max-w-3xl w-full rounded-2xl border p-6 sm:p-8 relative ${
                theme === 'dark' ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-white border-zinc-200 text-zinc-900'
              }`}
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
            >
              
              <button
                onClick={() => setActiveLightbox(null)}
                className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} p-2 rounded-xl border ${
                  theme === 'dark' ? 'bg-zinc-800 border-zinc-700 text-zinc-300' : 'bg-zinc-100 border-zinc-200 text-zinc-700'
                }`}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-500 font-bold">
                  MandiOS Screen Preview • {activeLightbox.category}
                </span>
                <h3 className="text-2xl font-black mt-1">{activeLightbox.title}</h3>
                <p className={`text-xs sm:text-sm mt-1 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {activeLightbox.description}
                </p>
              </div>

              {/* Lightbox Visual Area */}
              <div className={`p-6 rounded-2xl bg-gradient-to-br ${activeLightbox.imageBg} border border-zinc-800 my-6 text-white`}>
                
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 font-mono text-xs space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-zinc-800">
                    <span className="text-emerald-400 font-bold">{lang === 'ur' ? 'عملی لائیو پیش نظارہ' : 'LIVE OPERATIONAL VIEW'}</span>
                    <span className="text-zinc-400">{lang === 'ur' ? 'فرم: شری گنیش ٹریڈرز' : 'Firm: Shree Ganesh Traders'}</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {activeLightbox.mockDataSummary.map((data, i) => (
                      <div key={i} className="p-2.5 rounded bg-zinc-900 border border-zinc-800">
                        <div className="text-[10px] text-zinc-500">{data.label}</div>
                        <div className="text-sm font-bold text-emerald-400">{data.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded bg-zinc-900/90 border border-zinc-800/80 text-[11px] leading-relaxed text-zinc-300">
                    ⚡ <strong>{lang === 'ur' ? 'سسٹم کی رفتار:' : 'System Performance Note:'}</strong> {lang === 'ur' ? '50 ملی سیکنڈ سے کم رسپانس ٹائم کے ساتھ خودکار حساب مکمل۔' : 'Rendered with sub-50ms React state cycles. Fully compliant with APMC Market Committee audit standards.'}
                  </div>
                </div>

              </div>

              <div className="flex items-center justify-between pt-4 border-t border-zinc-500/20">
                <div className="flex flex-wrap gap-2">
                  {activeLightbox.highlights.map((hl, idx) => (
                    <span key={idx} className="text-xs font-medium px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                      ✓ {hl}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setActiveLightbox(null)}
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-500 text-zinc-950 hover:bg-emerald-400"
                >
                  {t.dashboardShowcase.close}
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

