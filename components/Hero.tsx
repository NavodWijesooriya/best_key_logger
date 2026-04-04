'use client';

import React, { useState, useEffect } from 'react';
import { Monitor, Download, ChevronRight, Menu, X } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';

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
    <div className="relative min-h-screen w-full bg-slate-900 text-white font-sans overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80"
          alt="Modern workspace"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900"></div>
      </div>

      <Navbar />

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pt-20">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wide text-blue-400 uppercase bg-blue-400/10 rounded-full border border-blue-400/20">
            Trusted Monitoring Solutions
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Best Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Keylogger</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            A powerful, discreet solution to monitor what your children or
            employees are doing on their computers in real-time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex flex-col items-center">
              <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all transform hover:-translate-y-1 active:scale-95 group">
                <Download size={20} className="group-hover:animate-bounce" />
                Free Download
              </button>
              <span className="mt-2 text-[10px] text-slate-400 uppercase tracking-widest">
                Windows Vista / 7 / 8 / 10 / 11
              </span>
            </div>

            <button className="flex items-center gap-1 text-white hover:text-blue-400 font-semibold py-4 px-8 transition-colors group">
              Learn about PRO
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Feature Pill (Modern touch) */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full text-left bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
          <div>
            <h3 className="font-bold text-emerald-400 mb-2">100% Invisible</h3>
            <p className="text-sm text-slate-400">Completely hidden from the task manager and startup list.</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-400 mb-2">Remote Reports</h3>
            <p className="text-sm text-slate-400">Get logs delivered straight to your email or FTP server.</p>
          </div>
          <div>
            <h3 className="font-bold text-purple-400 mb-2">Safe & Secure</h3>
            <p className="text-sm text-slate-400">Encrypted logs ensure only you can see the captured data.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModernHero;