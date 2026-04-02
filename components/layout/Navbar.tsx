'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 px-6 py-4 shadow-sm shadow-black/20 ${isScrolled
        ? 'bg-[#050608]/85 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/assets/images/company_logo180.png"
            alt="Keylogger Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {[
            { name: 'Home', path: '/' },
            { name: 'Features', path: '/features' },
            { name: 'Buy now', path: '/buy' },
            { name: 'Support', path: '/support' },
            { name: 'Download', path: '/download' },
            { name: 'Blog', path: '/blog' },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-slate-400 hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}

          <button className="bg-white/5 hover:bg-white/10 px-3 py-1 rounded-md border border-white/10 text-slate-300 transition-all">
            EN ▾
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-4">
          {[
            { name: 'Home', path: '/' },
            { name: 'Features', path: '/features' },
            { name: 'Buy now', path: '/buy' },
            { name: 'Support', path: '/support' },
            { name: 'Download', path: '/download' },
            { name: 'Blog', path: '/blog' },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-slate-300 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;