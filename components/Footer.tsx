'use client';

import React from 'react';
import { useI18n } from '@/lib/i18nContext';
import {
  Globe,
  MessageCircle,
  GitBranch,
  Lock,
  ChevronRight
} from 'lucide-react';

const ModernDarkFooter = () => {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      titleKey: 'footer.sections.product',
      linksKey: 'footer.links.product'
    },
    {
      titleKey: 'footer.sections.company',
      linksKey: 'footer.links.company'
    },
    {
      titleKey: 'footer.sections.legal',
      linksKey: 'footer.links.legal'
    },
    {
      titleKey: 'footer.sections.support',
      linksKey: 'footer.links.support'
    }
  ];

  return (
    <footer className="relative bg-slate-900 text-slate-400 pt-24 pb-12 overflow-hidden font-sans">
      {/* Aesthetic Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Main Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src="/assets/images/company_logo180.png" alt="Keylogger Logo" className="h-10 w-auto" />
            </div>
            <p className="text-sm leading-relaxed text-slate-500 mb-8 max-w-xs">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              {[Globe, MessageCircle, GitBranch].map((Icon, i) => (
                <a key={i} href="#" className="p-2.5 rounded-lg border border-white/5 bg-white/5 hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-400 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map(({ titleKey, linksKey }) => {
            const links = t(linksKey) as any;
            const isArray = Array.isArray(links);
            const linkItems = isArray ? links : Object.values(links || {});

            return (
              <div key={titleKey} className="col-span-1">
                <h5 className="text-white font-semibold mb-6 text-sm tracking-wide">{t(titleKey)}</h5>
                <ul className="space-y-4">
                  {(linkItems as string[]).map((link, idx) => (
                    <li key={idx}>
                      <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors flex items-center gap-1 group">
                        {link}
                        <ChevronRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-500" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-1.5 bg-emerald-500/5 border border-emerald-500/10 rounded-full text-[11px] font-medium text-emerald-500">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {t('footer.status')}
            </div>
            <div className="flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[11px] font-medium text-slate-400">
              <Lock size={12} /> {t('footer.security')}
            </div>
          </div>

          <div className="text-xs text-slate-600 flex flex-col md:flex-row items-center gap-4">
            <span>© {currentYear} Bestx Software Inc.</span>
            <span className="hidden md:block text-slate-800">|</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-slate-400 transition-colors">{t('footer.bottomLinks.privacy')}</a>
              <a href="#" className="hover:text-slate-400 transition-colors">{t('footer.bottomLinks.terms')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernDarkFooter;