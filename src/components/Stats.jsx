import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { getStats } from '../data';
import { useLanguage } from '../context/LanguageContext';
import {
  Building, Layers, Shield, FileCheck, Users, Activity,
  BarChart, CheckCircle
} from 'lucide-react';

export default function Stats({ theme }) {
  const { lang, t } = useLanguage();
  const statsList = getStats(lang);
  const [counts, setCounts] = useState(statsList.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          statsList.forEach((stat, idx) => {
            const target = stat.value;
            const duration = 1800; // ms
            const steps = 30;
            const increment = target / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const next = [...prev];
                next[idx] = Math.round(current * 10) / 10;
                return next;
              });
            }, duration / steps);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, statsList]);

  // const keyPillars = lang === 'ur' ? [
  //   { title: 'مکمل ای آر پی حل', desc: 'شروع سے آخر تک آڑھت آپریشنز', icon: Building },
  //   { title: '15+ بنیادی ماڈیولز', desc: 'باہم منسلک کاروائیاں', icon: Layers },
  //   { title: 'ملٹی ٹیننٹ فنِ تعمیر', desc: 'محفوظ علیحدہ ڈیٹا بیس', icon: Shield },
  //   { title: 'آڈٹ ٹریل سسٹم', desc: '100٪ ہر تبدیلی کا ریکارڈ', icon: FileCheck },
  //   { title: 'کردار پر مبنی رسائی', desc: 'مالک، منشی، کیشیئر', icon: Users },
  //   { title: 'سرگرمی لاگز', desc: 'لائیو ریئل ٹائم ٹریکنگ', icon: Activity },
  //   { title: 'رپورٹس و تجزیات', desc: '30+ خصوصی رپورٹس', icon: BarChart },
  //   { title: 'بزنس ریڈی', desc: 'عملی پیداواری تعیناتی', icon: CheckCircle },
  // ] : [
  //   { title: '📒 Complete Khata Management', desc: 'End-to-End Trading', icon: Building },
  //   { title: '15+ Business Modules', desc: 'Integrated Operations', icon: Layers },
  //   { title: 'Multi-Tenant Architecture', desc: 'Isolated Databases', icon: Shield },
  //   { title: 'Audit Trail System', desc: '100% Traceability', icon: FileCheck },
  //   { title: 'Role-Based Permissions', desc: 'Owners, Clerks, Cashiers', icon: Users },
  //   { title: 'Activity Logs', desc: 'Real-time Event Logging', icon: Activity },
  //   { title: 'Reports & Analytics', desc: '30+ Custom Reports', icon: BarChart },
  //   { title: 'Business Ready', desc: 'Production Deployment', icon: CheckCircle },
  // ];
  const keyPillars = lang === 'ur' ? [
    {
      title: 'مکمل کھاتہ مینجمنٹ',
      desc: 'گاہک، کسان اور سپلائر کے کھاتے خودکار',
      icon: Building
    },
    {
      title: 'لاٹ اور اسٹاک مینجمنٹ',
      desc: 'لاٹ، کریٹس اور اسٹاک کا مکمل ریکارڈ',
      icon: Layers
    },
    {
      title: 'خودکار کمیشن حساب',
      desc: 'کمیشن، کٹوتیاں اور سیٹلمنٹ خودکار',
      icon: Shield
    },
    {
      title: 'ایک انٹری، مکمل حساب',
      desc: 'ایک انٹری سے تمام رجسٹر خودکار اپ ڈیٹ',
      icon: FileCheck
    },
    {
      title: 'متعدد صارفین کی رسائی',
      desc: 'مالک، منشی، کیشیئر، گاہک اور سپلائر',
      icon: Users
    },
    {
      title: 'کاروباری رپورٹس',
      desc: 'فروخت، کمیشن، اخراجات اور منافع کی رپورٹس',
      icon: Activity
    },
    {
      title: 'محفوظ کاروباری ریکارڈ',
      desc: 'تمام ڈیٹا محفوظ اور منظم',
      icon: BarChart
    },
    {
      title: 'پاکستانی منڈیوں کے لیے تیار',
      desc: 'روزمرہ آڑھت کے کام کے مطابق ڈیزائن',
      icon: CheckCircle
    },
  ] : [
    {
      title: 'Complete Khata Management',
      desc: 'Customer, Farmer & Supplier Accounts',
      icon: Building
    },
    {
      title: 'Lot & Stock Management',
      desc: 'Lots, Crates & Stock Tracking',
      icon: Layers
    },
    {
      title: 'Automatic Commission Calculation',
      desc: 'Commission, Deductions & Settlement',
      icon: Shield
    },
    {
      title: 'One Entry, Complete Records',
      desc: 'Updates Every Register Automatically',
      icon: FileCheck
    },
    {
      title: 'Multi-User Access',
      desc: 'Owners, Clerks, Cashiers & Suppliers',
      icon: Users
    },
    {
      title: 'Business Reports',
      desc: 'Sales, Profit & Outstanding Reports',
      icon: Activity
    },
    {
      title: 'Secure Business Records',
      desc: 'Safe, Organised & Always Available',
      icon: BarChart
    },
    {
      title: 'Built for Pakistani Mandis',
      desc: 'Designed for Fruit & Vegetable Commission Agents',
      icon: CheckCircle
    },
  ];
  return (
    <section ref={sectionRef} className={`py-16 relative overflow-hidden ${theme === 'dark' ? 'bg-[#0d0d0f]' : 'bg-slate-100'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 mb-3">
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#10B981]">
              {t.stats.tag}
            </span>
          </div>
          <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight font-sans ${theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
            {t.stats.title}
          </h2>
        </motion.div>

        {/* Animated Numeric Stat Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
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
          {statsList.map((stat, idx) => (
            <motion.div
              key={stat.id}
              variants={{ hidden: { opacity: 0, y: 30, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1 } }}
              transition={{ duration: 0.5 }}
              className={`p-4 sm:p-5 rounded-2xl border text-center transition-all duration-300 hover:scale-[1.03] ${theme === 'dark'
                  ? 'bg-white/5 border-white/10 text-slate-100 shadow-xl'
                  : 'bg-white border-slate-200 text-slate-900 shadow-sm'
                }`}
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-mono text-[#10B981] tracking-tight">
                {stat.prefix || ''}
                {counts[idx]}
                {stat.suffix}
              </div>
              <div className={`text-xs font-bold mt-1.5 line-clamp-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>{stat.label}</div>
              <div className={`text-[10px] mt-0.5 line-clamp-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 8 Feature Highlights Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
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
          {keyPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.4 }}
                className={`p-3.5 rounded-xl border flex items-center gap-3 transition-all ${theme === 'dark'
                    ? 'bg-white/5 border-white/10 text-slate-200 hover:bg-white/10'
                    : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50 shadow-sm'
                  }`}
              >
                <div className="p-2 rounded-lg bg-[#10B981]/10 text-[#10B981] shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className={`text-xs font-bold truncate ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>{pillar.title}</div>
                  <div className={`text-[10px] truncate ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                    {pillar.desc}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

