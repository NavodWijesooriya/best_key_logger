'use client';

import React from 'react';
import Link from 'next/link';
import { Download, ChevronRight } from 'lucide-react';
import { useI18n } from '@/lib/i18nContext';
import Navbar from '@/components/layout/Navbar';

const ModernHero = () => {
  const { t } = useI18n();

  return (
    <div className="relative w-full overflow-hidden bg-slate-950 text-white">

      {/* ===== Background (Image More Visible) ===== */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80"
          alt="Modern workspace"
          className="h-full w-full scale-105 object-cover opacity-25"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-950/95 via-slate-950/85 to-slate-900/90"></div>

        {/* Subtle Blur */}
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>

        {/* Soft Glow Effects */}
        <div className="absolute -top-32 -left-32 h-87.5 w-87.5 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 h-87.5 w-87.5 rounded-full bg-emerald-500/10 blur-3xl"></div>
      </div>

      <Navbar />

      {/* ===== Hero Content ===== */}
      <main className="relative z-10 px-6 pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 shadow-sm backdrop-blur-md">
            ✨ {t('hero.badge')}
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-sm">
            <span className="text-white">
              {t('hero.heading1')}
            </span>{' '}
            <span className="bg-linear-to-r from-emerald-400 via-cyan-300 to-white bg-clip-text text-transparent">
              {t('hero.heading2')}
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-300 drop-shadow-sm md:text-xl">
            {t('hero.description')}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            {/* Primary CTA */}
            <div className="flex flex-col items-center">
              <Link
                href="/download"
                className="group flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-8 py-4 font-semibold text-white shadow-xl shadow-cyan-950/30 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-800"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                {t('common.downloadBtn')}
              </Link>

              <span className="mt-2 text-[10px] uppercase tracking-widest text-slate-400">
                {t('hero.compatibility')}
              </span>
            </div>

            {/* Secondary CTA */}
            <Link
              href="/features"
              className="group flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/60 px-8 py-4 font-medium text-slate-200 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-500 hover:bg-slate-800 hover:text-white hover:shadow-lg"
            >
              {t('common.learnBtn')}
              <ChevronRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* ===== Feature Cards ===== */}
        <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg backdrop-blur-lg transition hover:border-slate-700 hover:shadow-xl">
            <h3 className="mb-2 text-lg font-semibold text-emerald-300">
              {t('hero.features.feature1Title')}
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">
              {t('hero.features.feature1Desc')}
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg backdrop-blur-lg transition hover:border-slate-700 hover:shadow-xl">
            <h3 className="mb-2 text-lg font-semibold text-cyan-300">
              {t('hero.features.feature2Title')}
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">
              {t('hero.features.feature2Desc')}
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg backdrop-blur-lg transition hover:border-slate-700 hover:shadow-xl">
            <h3 className="mb-2 text-lg font-semibold text-sky-300">
              {t('hero.features.feature3Title')}
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">
              {t('hero.features.feature3Desc')}
            </p>
          </div>

        </div>
      </main>
    </div>
  );
};

export default ModernHero;