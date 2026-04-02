'use client';

import React, { useState, useEffect } from 'react';
import { Monitor, Download, ChevronRight, Menu, X } from 'lucide-react';

const ModernHero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#050608] text-slate-300 font-sans overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80"
          alt="Modern workspace"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050608]/40 via-[#050608]/75 to-[#050608]"></div>
      </div>

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 px-6 py-4 ${isScrolled ? 'bg-[#050608]/85 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <Monitor size={20} />
            </div> */}
            <img src="/assets/images/company_logo180.png" alt="Keylogger Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {['Home', 'Features', 'Buy now', 'Support', 'Download', 'Blog'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors">
                {item}
              </a>
            ))}
            <button className="bg-white/5 hover:bg-white/10 px-3 py-1 rounded-md border border-white/10 text-slate-300 transition-all">
              EN ▾
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pt-20">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wide text-indigo-300 uppercase bg-indigo-500/10 rounded-full border border-indigo-500/20">
            Trusted Monitoring Solutions
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white">
            Best Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Keylogger</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            A powerful, discreet solution to monitor what your children or
            employees are doing on their computers in real-time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex flex-col items-center">
              <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg shadow-indigo-600/20 transition-all transform hover:-translate-y-1 active:scale-95 group border border-indigo-400/10">
                <Download size={20} className="group-hover:animate-bounce" />
                Free Download
              </button>
              <span className="mt-2 text-[10px] text-slate-500 uppercase tracking-widest">
                Windows Vista / 7 / 8 / 10 / 11
              </span>
            </div>

            <button className="flex items-center gap-1 text-slate-300 hover:text-white font-semibold py-4 px-8 transition-colors group">
              Learn about PRO
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform text-indigo-400" />
            </button>
          </div>
        </div>

        {/* Feature Pill (Modern touch) */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full text-left bg-slate-900/40 backdrop-blur-xl p-8 rounded-[2rem] border border-white/5 shadow-2xl shadow-black/20">
          <div>
            <h3 className="font-semibold text-indigo-300 mb-2">100% Invisible</h3>
            <p className="text-sm text-slate-500">Completely hidden from the task manager and startup list.</p>
          </div>
          <div>
            <h3 className="font-semibold text-cyan-300 mb-2">Remote Reports</h3>
            <p className="text-sm text-slate-500">Get logs delivered straight to your email or FTP server.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">Safe & Secure</h3>
            <p className="text-sm text-slate-500">Encrypted logs ensure only you can see the captured data.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModernHero;