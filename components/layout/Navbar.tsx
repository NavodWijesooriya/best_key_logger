'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="fixed w-full z-50 transition-all duration-300 px-6 py-4 bg-transparent shadow-md shadow-black/25"
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
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
          {[
            { name: 'Home', path: '/' },
            { name: 'Features', path: '/features' },
            { name: 'Buy now', path: '/buy_now' },
            { name: 'Support', path: '/support' },
            { name: 'Download', path: '/download' },
            { name: 'Blog', path: '/blog' },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-slate-400  transition-colors"
            >
              {item.name}
            </Link>
          ))}

          <LanguageSelector />
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
            { name: 'Buy now', path: '/buy_now' },
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
          <div className="pt-1">
            <LanguageSelector />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;