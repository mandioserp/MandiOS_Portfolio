import React, { useState } from 'react';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';

import {
  MessageSquare, Mail, MapPin,
  Send, CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact({ theme }) {
  const { lang, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: 'Commission Broker',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const whatsappMessage = `
*📩 New MandiOS Inquiry*

*Name:* ${formData.name}
*Business Type:* ${formData.businessType}
*Phone:* ${formData.phone}
*Email:* ${formData.email}

*Message:*
${formData.message}
`;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
    console.log('Form submitted:', formData);
    e.preventDefault();

    const whatsappMessage = `

*Name:* ${formData.name}
*Business Type:* ${formData.businessType}
*Phone:* ${formData.phone}
*Email:* ${formData.email}

*Message:*
${formData.message}
`;

    window.open(
      `https://wa.me/923704380337?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );

  };
  const subject = encodeURIComponent("Inquiry About MandiOS ERP");
const whatsappHiMessage = encodeURIComponent("Hello! I would like to inquire about MandiOS ERP.");
  return (
    <section id="contact" className={`py-20 md:py-28 relative ${theme === 'dark' ? 'bg-[#0d0d0f]' : 'bg-white'
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
              {t.contact.tag}
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight font-sans ${theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
            {t.contact.title}
          </h2>
          <p className={`mt-3 text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            {t.contact.subtitle}
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Contact Info & Direct Links */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >

            <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
              }`}>
              <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                <MessageSquare className="w-5 h-5 text-[#10B981]" />
                {t.contact.directChannels}
              </h3>

              <div className="space-y-4">

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/923496305842?text=${encodeURIComponent(whatsappHiMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3.5 rounded-xl border flex items-center gap-3.5 transition-all group ${theme === 'dark' ? 'bg-black/30 border-white/10 hover:border-[#10B981]/50' : 'bg-white border-slate-200 hover:border-[#10B981]/50 shadow-sm'
                    }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#10B981]/10 text-[#10B981] flex items-center justify-center font-bold group-hover:bg-[#10B981] group-hover:text-black transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`text-xs font-bold block ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                      }`}>{t.contact.whatsapp}</span>
                    <span className="text-[11px] text-[#10B981] font-mono font-semibold">{t.contact.whatsappStatus}</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  onClick={() => {
                    window.open(
                      `https://mail.google.com/mail/?view=cm&fs=1&to=mandioserp@gmail.com&su=${subject}`,
                      "_blank"
                    );
                  }}
                  className={`p-3.5 rounded-xl border flex items-center gap-3.5 transition-all group ${theme === 'dark' ? 'bg-black/30 border-white/10 hover:border-[#10B981]/50' : 'bg-white border-slate-200 hover:border-[#10B981]/50 shadow-sm'
                    }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#10B981]/10 text-[#10B981] flex items-center justify-center font-bold group-hover:bg-[#10B981] group-hover:text-black transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`text-xs font-bold block ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                      }`}>{t.contact.emailLabel}</span>
                    <span className="text-[11px] text-slate-400 font-mono">raheelrugh677@gmail.com</span>
                  </div>
                </a>

              </div>
            </div>


          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            className={`lg:col-span-7 p-6 sm:p-8 rounded-2xl border ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200 shadow-sm'
              }`}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>{t.contact.formTitle}</h3>
            <p className={`text-xs mb-6 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              {t.contact.formSubtitle}
            </p>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/30 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#10B981] text-black mx-auto flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#10B981]">{t.contact.successTitle}</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  {t.contact.successMsg}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-[#10B981] text-black hover:bg-[#10B981]/80 mt-4"
                >
                  {t.contact.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-medium">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 mb-1 font-semibold">{t.contact.nameLabel} *</label>
                    <input
                      type="text"
                      required
                      placeholder={t.contact.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border outline-none ${theme === 'dark' ? 'bg-black/40 border-white/10 text-white focus:border-[#10B981]' : 'bg-white border-slate-300 text-slate-900 focus:border-[#10B981]'
                        }`}
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1 font-semibold">{t.contact.emailInputLabel} *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@business.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border outline-none ${theme === 'dark' ? 'bg-black/40 border-white/10 text-white focus:border-[#10B981]' : 'bg-white border-slate-300 text-slate-900 focus:border-[#10B981]'
                        }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 mb-1 font-semibold">{t.contact.phoneLabel}</label>
                    <input
                      type="tel"
                      placeholder="+92349 87654320"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border outline-none ${theme === 'dark' ? 'bg-black/40 border-white/10 text-white focus:border-[#10B981]' : 'bg-white border-slate-300 text-slate-900 focus:border-[#10B981]'
                        }`}
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1 font-semibold">{t.contact.bizLabel}</label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border outline-none ${theme === 'dark' ? 'bg-black/40 border-white/10 text-white focus:border-[#10B981]' : 'bg-white border-slate-300 text-slate-900 focus:border-[#10B981]'
                        }`}
                    >
                      {t.contact.bizOptions.map((opt, i) => (
                        <option key={i} className="bg-[#0d0d0f] text-white">{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1 font-semibold">{t.contact.msgLabel} *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder={t.contact.msgPlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border outline-none ${theme === 'dark' ? 'bg-black/40 border-white/10 text-white focus:border-[#10B981]' : 'bg-white border-slate-300 text-slate-900 focus:border-[#10B981]'
                      }`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-xs font-bold bg-[#10B981] hover:bg-[#10B981]/90 text-black transition-all shadow-lg shadow-[#10B981]/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.contact.sendBtn}</span>
                </button>

              </form>
            )}

          </motion.div>

        </div>

      </div>
    </section>
  );
}

