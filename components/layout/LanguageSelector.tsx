'use client';

import React from 'react';
import { LANGUAGE_OPTIONS } from '@/lib/i18n';
import { useI18n } from '@/lib/i18nContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useI18n();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as any);
  };

  return (
    <label className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1 text-slate-300 transition-all hover:bg-white/10">
      <span className="sr-only">Select language</span>
      <select
        aria-label="Select language"
        value={language}
        onChange={handleChange}
        className="bg-transparent text-sm outline-none"
      >
        {LANGUAGE_OPTIONS.map((option) => (
          <option key={option.code} value={option.code} className="text-slate-900">
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default LanguageSelector;