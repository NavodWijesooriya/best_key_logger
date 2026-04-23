'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useI18n } from '@/lib/i18nContext';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkPage, setIsDarkPage] = useState(false);
  const pathname = usePathname();
  const { t } = useI18n();

  const navItems = [
    { nameKey: 'navigation.home', path: '/' },
    { nameKey: 'navigation.features', path: '/features' },
    { nameKey: 'navigation.buyNow', path: '/buy_now' },
    { nameKey: 'navigation.support', path: '/support' },
    { nameKey: 'navigation.download', path: '/download' },
    { nameKey: 'navigation.blog', path: '/blog' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect if we're on a dark page (like hero)
      const heroElement = document.querySelector('[data-dark-nav]');
      setIsDarkPage(!!heroElement && window.scrollY < 200);
    };

    window.addEventListener('scroll', handleScroll);

    // Check initial page state
    const heroElement = document.querySelector('[data-dark-nav]');
    setIsDarkPage(!!heroElement);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarStyles = isDarkPage && !isScrolled
    ? 'bg-transparent hover:bg-white/10'
    : 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200';

  const textColor = isDarkPage && !isScrolled
    ? 'text-slate-300 hover:text-white'
    : 'text-slate-700 hover:text-emerald-600';

  const iconColor = isDarkPage && !isScrolled ? 'text-slate-300' : 'text-slate-900';

  const languageSelectorStyles = isDarkPage && !isScrolled
    ? 'border-white/20 bg-slate-900/40 text-white hover:bg-slate-900/55'
    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50';

  const isActivePath = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }

    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 ${navbarStyles}`}
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
            (() => {
              const isActive = isActivePath(item.path);
              const activeClass = isDarkPage && !isScrolled
                ? 'text-white border-b-2 border-white'
                : 'text-emerald-700 border-b-2 border-emerald-600';

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`transition-colors pb-1 ${isActive ? activeClass : textColor}`}
                >
                  {t(item.nameKey)}
                </Link>
              );
            })()
          ))}

          <LanguageSelector className={languageSelectorStyles} />
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden ${iconColor}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden mt-4 flex flex-col gap-4 px-4 ${isDarkPage && !isScrolled ? 'bg-slate-800/90 backdrop-blur-md' : 'bg-white'} rounded-lg p-4 border ${isDarkPage && !isScrolled ? 'border-slate-700' : 'border-slate-200'}`}>
          {navItems.map((item) => (
            (() => {
              const isActive = isActivePath(item.path);
              const activeClass = isDarkPage && !isScrolled
                ? 'text-white bg-slate-700/70'
                : 'text-emerald-700 bg-emerald-50';

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`transition-colors rounded-md px-2 py-1 ${isActive ? activeClass : isDarkPage && !isScrolled ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-black'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t(item.nameKey)}
                </Link>
              );
            })()
          ))}
          <div className="pt-1">
            <LanguageSelector className={languageSelectorStyles} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;