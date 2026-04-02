import React from 'react';
import {
  Globe,
  MessageCircle,
  GitBranch,
  Lock,
  ChevronRight
} from 'lucide-react';

const ModernDarkFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: ['Features', 'Pricing', 'Documentation', 'Download'],
    Company: ['About Us', 'Contact', 'Blog', 'Careers'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Legal Usage', 'Refund Policy'],
    Support: ['Help Center', 'Community', 'Status', 'API']
  };

  return (
    <footer className="relative bg-slate-900 text-slate-400 pt-24 pb-12 overflow-hidden font-sans">
      {/* Aesthetic Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Newsletter / "The Hook" Section */}
        {/* <div className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-gradient-to-b from-slate-900/50 to-slate-950/50 p-8 md:p-12 mb-20 backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                Secure your digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">future today.</span>
              </h3>
              <p className="text-slate-400 text-lg max-w-md">
                Join 10,000+ teams monitoring their infrastructure with Bestx.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1 group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors" size={20} />
                <input
                  type="email"
                  placeholder="work@company.com"
                  className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/50 transition-all"
                />
              </div>
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2 group">
                Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div> */}

        {/* Main Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">

              <img src="/assets/images/company_logo180.png" alt="Keylogger Logo" className="h-10 w-auto" />
            </div>
            <p className="text-sm leading-relaxed text-slate-500 mb-8 max-w-xs">
              Next-generation monitoring architecture. Built for the modern web with security at its core.
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
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="col-span-1">
              <h5 className="text-white font-semibold mb-6 text-sm tracking-wide">{title}</h5>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors flex items-center gap-1 group">
                      {link}
                      <ChevronRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-500" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-1.5 bg-emerald-500/5 border border-emerald-500/10 rounded-full text-[11px] font-medium text-emerald-500">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              SYSTEMS OPERATIONAL
            </div>
            <div className="flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[11px] font-medium text-slate-400">
              <Lock size={12} /> AES-256
            </div>
          </div>

          <div className="text-xs text-slate-600 flex flex-col md:flex-row items-center gap-4">
            <span>© {currentYear} Bestx Software Inc.</span>
            <span className="hidden md:block text-slate-800">|</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-slate-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernDarkFooter;