'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18nContext';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useI18n();

  const navItems = [
    { nameKey: 'navigation.home', path: '/' },
    { nameKey: 'navigation.features', path: '/features' },
    { nameKey: 'navigation.buyNow', path: '/buy_now' },
    { nameKey: 'navigation.support', path: '/support' },
    { nameKey: 'navigation.download', path: '/download' },
    { nameKey: 'navigation.blog', path: '/blog' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 bg-transparent shadow-md shadow-black/25"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/assets/images/company_logo180.png"
              alt="Keylogger Logo"
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="text-slate-400"
            >
              {t(item.nameKey)}
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
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="text-slate-300 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t(item.nameKey)}
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