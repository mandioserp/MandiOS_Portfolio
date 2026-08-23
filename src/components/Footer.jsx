import React from 'react';
import { 
  Layers, MessageSquare, Mail, Linkedin, Github, Facebook,
  ArrowUp 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer({ theme }) {
  const { lang, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={`border-t relative transition-colors ${
      theme === 'dark' ? 'bg-[#0a0a0b] border-white/10 text-slate-300' : 'bg-slate-900 border-slate-800 text-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#10B981] text-black flex items-center justify-center font-bold shadow-[0_0_10px_rgba(16,185,129,0.4)]">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Mandi<span className="text-[#10B981]">OS</span> ERP
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/923496305842?text=Hello!%20I%20am%20interested%20in%20MandiOS%20ERP%20Software"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-[#10B981] hover:text-black text-slate-300 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
               onClick={() => {
                    window.open(
                      `https://mail.google.com/mail/?view=cm&fs=1&to=mandioserp@gmail.com`,
                      "_blank"
                    );
                  }}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-[#10B981] hover:text-black text-slate-300 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-blue-600 hover:text-white text-slate-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white hover:text-black text-slate-300 transition-colors"
                aria-label="GitHub"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#10B981] mb-4">{t.footer.quickNav}</h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-400">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="hover:text-[#10B981] transition-colors">{t.nav.home}</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('#about'); }} className="hover:text-[#10B981] transition-colors">{t.nav.about}</a></li>
              <li><a href="#modules" onClick={(e) => { e.preventDefault(); scrollToSection('#modules'); }} className="hover:text-[#10B981] transition-colors">{t.nav.modules}</a></li>
              <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('#features'); }} className="hover:text-[#10B981] transition-colors">{t.nav.features}</a></li>
              <li><a href="#screenshots" onClick={(e) => { e.preventDefault(); scrollToSection('#screenshots'); }} className="hover:text-[#10B981] transition-colors">{t.nav.screenshots}</a></li>
            </ul>
          </div>

          {/* Col 3: Key Technologies */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#10B981] mb-4">{t.footer.techArch}</h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-400">
              <li>React.js (Frontend UI)</li>
              <li>Node.js & Express.js (REST API)</li>
              <li>MongoDB (Multi-Tenant DB)</li>
              <li>Tailwind CSS (Sleek Theme)</li>
              <li>JWT Security Guard</li>
              <li>Vercel Cloud Hosting</li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#10B981] mb-4">{t.footer.devInfo}</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="font-bold text-white">{t.footer.devRole}</div>
              <div>{t.footer.devSpec}</div>
              <div className="text-[#10B981] font-mono pt-2">raheelrugh677@gmail.com</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {t.footer.rights}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-[#10B981] hover:text-black text-slate-300 transition-all flex items-center gap-1 font-bold"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
