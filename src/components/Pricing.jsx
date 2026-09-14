import React, { useEffect } from 'react';
import { ArrowRight, BarChart3, BookOpen, BriefcaseBusiness, Check, CircleDollarSign, Coins, CreditCard, Database, FileBarChart, Package, Receipt, ShieldCheck, ShoppingCart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const featureIcons = [Package, ShoppingCart, BookOpen, FileBarChart, CircleDollarSign, BriefcaseBusiness, CreditCard, Receipt, Users, BarChart3, BarChart3, Users, ShieldCheck, Database];

export default function Pricing({ theme }) {
  const { t, isRTL } = useLanguage();
  const content = t.pricing;
  const muted = theme === 'dark' ? 'text-slate-400' : 'text-slate-600';
  const heading = theme === 'dark' ? 'text-white' : 'text-slate-900';
  const panel = theme === 'dark' ? 'border-white/10 bg-white/[0.04]' : 'border-slate-200 bg-white shadow-sm';

  useEffect(() => {
    const previousTitle = document.title;
    const previousDescription = document.querySelector('meta[name="description"]');
    const description = previousDescription || document.createElement('meta');
    document.title = content.metaTitle;
    description.name = 'description';
    description.content = content.metaDescription;
    if (!previousDescription) document.head.appendChild(description);
    return () => { document.title = previousTitle; };
  }, [content.metaDescription, content.metaTitle]);

  return (
    <div className="relative overflow-hidden pt-28 pb-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_62%)]" />
      <section className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-400">{content.eyebrow}</span>
          <h1 className={`mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl ${heading}`}>{content.heroTitle}</h1>
          <p className={`mx-auto mt-5 max-w-2xl text-base leading-8 sm:text-lg ${muted}`}>{content.heroSubtitle}</p>
        </div>

        <div className="mx-auto mt-12 max-w-xl text-start">
          <div className={`relative overflow-hidden rounded-3xl border p-6 text-center shadow-2xl shadow-emerald-950/20 sm:p-9 ${theme === 'dark' ? 'border-emerald-400/30 bg-[#111817]' : 'border-emerald-500/30 bg-white shadow-emerald-900/10'}`}>
            <div className="absolute inset-x-0 top-0 h-1 bg-emerald-500" />
            <div className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400"><span className="h-2 w-2 rounded-full bg-emerald-400" />{content.planName}</div>
            <div className={`mt-5 flex items-end justify-center gap-2 ${heading}`}><span className="text-5xl font-bold tracking-tight sm:text-6xl">Rs. 5,000</span><span className={`pb-2 text-sm ${muted}`}>{content.perMonth}</span></div>
            <div className={`mt-7 flex items-center justify-center gap-2 text-sm ${muted}`}><span>{content.setupFee}</span><span className="font-semibold line-through opacity-60">Rs. 10,000</span><span className="font-bold text-emerald-400">{content.freeNow}</span></div>
            <div className="mt-7 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-300">{content.setupOffer}</div>
            <Link to="/contact" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400">{content.cta}<ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} /></Link>
            <p className={`mt-4 text-xs ${muted}`}>{content.afterTrial}</p>
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-xl items-center gap-4 rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-4 text-start"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-slate-950"><Coins className="h-5 w-5" /></div><div><h2 className={`font-bold ${heading}`}>{content.trialTitle}</h2><p className={`mt-1 text-sm leading-6 ${muted}`}>{content.trialDescription}</p></div></div>
      </section>

      <section className="relative mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mx-auto max-w-2xl text-center"><span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">{content.includedEyebrow}</span><h2 className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${heading}`}>{content.includedTitle}</h2></div><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{content.features.map((feature, index) => { const Icon = featureIcons[index]; return <div key={feature} className={`flex items-center gap-3 rounded-2xl border p-4 ${panel}`}><Icon className="h-5 w-5 shrink-0 text-emerald-400" /><span className={`text-sm font-semibold ${heading}`}>{feature}</span><Check className="ms-auto h-4 w-4 shrink-0 text-emerald-500" /></div>; })}</div></section>

      <section className="relative mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8"><div className={`grid gap-10 rounded-3xl border p-7 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center ${panel}`}><div><span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">{content.valueEyebrow}</span><h2 className={`mt-3 text-3xl font-bold sm:text-4xl ${heading}`}>{content.valueTitle}</h2></div><div><p className={`text-base leading-8 ${muted}`}>{content.valueDescription}</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{content.valuePoints.map((point) => <div key={point} className="flex items-center gap-2 text-sm font-semibold text-emerald-400"><Check className="h-4 w-4" /><span>{point}</span></div>)}</div></div></div></section>

      <section className="relative mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mx-auto max-w-2xl text-center"><span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">{content.transparencyEyebrow}</span><h2 className={`mt-3 text-3xl font-bold sm:text-4xl ${heading}`}>{content.transparencyTitle}</h2></div><div className="mx-auto mt-10 grid max-w-4xl gap-3 md:grid-cols-3">{content.transparencyItems.map((item, index) => <div key={item.label} className={`rounded-2xl border p-5 ${panel}`}><span className={`text-xs font-semibold ${muted}`}>{item.label}</span><p className={`mt-3 text-xl font-bold ${index === 1 ? 'text-emerald-400' : heading}`}>{item.value}</p></div>)}</div></section>

      <section className="relative mx-auto mt-24 max-w-3xl px-4 sm:px-6"><div className="text-center"><span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">{content.faqEyebrow}</span><h2 className={`mt-3 text-3xl font-bold sm:text-4xl ${heading}`}>{content.faqTitle}</h2></div><div className="mt-8 space-y-3">{content.faqs.map((faq) => <details key={faq.question} className={`group rounded-2xl border p-5 ${panel}`}><summary className={`cursor-pointer list-none pe-8 text-sm font-bold ${heading}`}>{faq.question}</summary><p className={`mt-3 text-sm leading-7 ${muted}`}>{faq.answer}</p></details>)}</div></section>
    </div>
  );
}