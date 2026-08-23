import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { getCoreModules } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { 
  LayoutDashboard, ShoppingBag, Boxes, Receipt, Users, UserCheck, 
  Landmark, Wallet, PiggyBank, BarChart3, Sliders, ShieldAlert, 
  Bell, Database, UserCog, ArrowRight, X, Sparkles, Check, Search
} from 'lucide-react';

const iconMap = {
  LayoutDashboard,
  ShoppingBag,
  Boxes,
  Receipt,
  Users,
  UserCheck,
  Landmark,
  Wallet,
  PiggyBank,
  BarChart3,
  Sliders,
  ShieldAlert,
  Bell,
  Database,
  UserCog
};

export default function Modules({ theme }) {
  const { lang, t, isRTL } = useLanguage();
  const coreModules = getCoreModules(lang);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModule, setSelectedModule] = useState(null);

  useEffect(() => {
    setActiveCategory('All');
    setSearchQuery('');
  }, [lang]);

  const getModuleGroup = (mod) => {
    const category = (mod.category || '').trim().toLowerCase();

    if (category.includes('overview') || category.includes('بنیادی')) return 'overview';
    if (
      category.includes('operation') ||
      category.includes('عملیات') ||
      category.includes('آپریشن') ||
      category.includes('عملیاتی')
    ) return 'operations';
    if (category.includes('account') || category.includes('finance') || category.includes('مالیات') || category.includes('کھاتہ')) return 'financials';
    if (category.includes('report') || category.includes('administr') || category.includes('سسٹم') || category.includes('سیکیورٹی')) return 'system';

    return 'other';
  };

  const tabs = lang === 'ur'
    ? [
        { key: 'All', label: 'تمام ماڈیولز' },
        { key: 'overview', label: 'بنیادی امور' },
        { key: 'operations', label: 'عملیات' },
        { key: 'financials', label: 'مالیات و کھاتہ جات' },
        { key: 'system', label: 'سسٹم اور سیکیورٹی' }
      ]
    : [
        { key: 'All', label: 'All' },
        { key: 'overview', label: 'Overview' },
        { key: 'operations', label: 'Operations' },
        { key: 'financials', label: 'Financials' },
        { key: 'system', label: 'System & Admin' }
      ];

  const filteredModules = coreModules.filter((mod) => {
    const matchesCategory = activeCategory === 'All' || getModuleGroup(mod) === activeCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch = !query || mod.name.toLowerCase().includes(query) || 
      mod.shortDescription.toLowerCase().includes(query) ||
      (mod.detailedDescription || '').toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="modules" className={`py-20 md:py-28 relative ${
      theme === 'dark' ? 'bg-[#0a0a0b]' : 'bg-slate-100/70'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 mb-3">
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#10B981]">
              {t.modules.tag}
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight font-sans ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            {t.modules.title}
          </h2>
          <p className={`mt-3 text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            {t.modules.subtitle}
          </p>
        </motion.div>

        {/* Filter Tabs & Search Bar */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          
          {/* Categories */}
          {/* <div className={`flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-full border backdrop-blur-md ${
            theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white shadow-sm'
          }`}>
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeCategory === tab.key
                    ? 'bg-[#10B981] text-black shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                    : theme === 'dark'
                    ? 'text-slate-400 hover:text-white hover:bg-white/10'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div> */}

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className={`w-4 h-4 absolute top-1/2 -translate-y-1/2 text-slate-400 ${isRTL ? 'right-3.5' : 'left-3.5'}`} />
            <input
              type="text"
              placeholder={lang === 'ur' ? 'ماڈیول تلاش کریں...' : 'Search module name...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full py-2 rounded-full text-xs font-medium border outline-none transition-all ${
                isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'
              } ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10 text-white focus:border-[#10B981]'
                  : 'bg-white border-slate-300 text-slate-900 focus:border-[#10B981]'
              }`}
            />
          </div>

        </motion.div>

        {/* Modules Grid */}
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
                staggerChildren: 0.06
              }
            }
          }}
        >
          {filteredModules.map((mod) => {
            const IconComponent = iconMap[mod.icon] || LayoutDashboard;
            
            return (
              <motion.div
                key={mod.id}
                onClick={() => setSelectedModule(mod)}
                variants={{ hidden: { opacity: 0, y: 30, scale: 0.96 }, visible: { opacity: 1, y: 0, scale: 1 } }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer group relative overflow-hidden flex flex-col justify-between ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 hover:border-[#10B981]/50'
                    : 'bg-white border-slate-200 hover:border-[#10B981]/50 shadow-sm'
                }`}
              >
                {/* Subtle Glow on Hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#10B981]/5 rounded-full blur-2xl group-hover:bg-[#10B981]/15 transition-all" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center text-[#10B981] group-hover:scale-110 group-hover:bg-[#10B981] group-hover:text-black transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${
                      theme === 'dark'
                        ? 'bg-white/5 border-white/10 text-slate-400'
                        : 'bg-slate-100 border-slate-200 text-slate-600'
                    }`}>
                      {mod.category}
                    </span>
                  </div>

                  <h3 className={`text-lg font-bold mb-2 group-hover:text-[#10B981] transition-colors ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    {mod.name}
                  </h3>

                  <p className={`text-xs leading-relaxed ${
                    theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {mod.shortDescription}
                  </p>
                </div>

                <div className={`pt-5 mt-4 border-t flex items-center justify-between text-xs font-bold text-[#10B981] ${
                  theme === 'dark' ? 'border-white/10' : 'border-slate-100'
                }`}>
                  <span>{t.modules.viewDetails}</span>
                  <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* Module Detail Modal */}
      <AnimatePresence>
        {selectedModule && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className={`max-w-2xl w-full rounded-2xl border p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto ${
                theme === 'dark' ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-white border-zinc-200 text-zinc-900'
              }`}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedModule(null)}
                className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} p-2 rounded-xl border ${
                  theme === 'dark' ? 'bg-zinc-800 border-zinc-700 text-zinc-300' : 'bg-zinc-100 border-zinc-200 text-zinc-700'
                }`}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-zinc-950 flex items-center justify-center font-bold shrink-0">
                  {React.createElement(iconMap[selectedModule.icon] || LayoutDashboard, { className: 'w-7 h-7' })}
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-500 font-bold">
                    {selectedModule.category} Module
                  </span>
                  <h3 className="text-2xl font-black">{selectedModule.name}</h3>
                </div>
              </div>

              {/* Description */}
              <p className={`text-sm sm:text-base leading-relaxed mb-6 ${
                theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
              }`}>
                {selectedModule.detailedDescription}
              </p>

              {/* Key Features List */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-500 mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> {t.modules.coreTechFeatures}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedModule.keyFeatures.map((feat, i) => (
                    <div key={i} className={`p-3 rounded-xl border text-xs font-semibold flex items-center gap-2.5 ${
                      theme === 'dark' ? 'bg-zinc-950 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
                    }`}>
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              {selectedModule.metrics && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-mono font-bold flex items-center justify-between">
                  <span>{lang === 'ur' ? 'کارکردگی اشاریہ' : 'Performance Indicator'}</span>
                  <span>{selectedModule.metrics}</span>
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-zinc-500/20 flex justify-end">
                <button
                  onClick={() => setSelectedModule(null)}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold bg-emerald-500 text-zinc-950 hover:bg-emerald-400"
                >
                  {t.modules.close}
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

