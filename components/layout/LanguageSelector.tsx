'use client';

import React from 'react';
import { LANGUAGE_OPTIONS } from '@/lib/i18n';
import { useI18n } from '@/lib/i18nContext';

type LanguageSelectorProps = {
  className?: string;
};

const LanguageSelector = ({ className = '' }: LanguageSelectorProps) => {
  const { language, setLanguage } = useI18n();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as any);
  };

  return (
    <label className={`inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm transition-all hover:bg-slate-50 ${className}`}>
      <span className="sr-only">Select language</span>
      <select
        aria-label="Select language"
        value={language}
        onChange={handleChange}
        className="appearance-none cursor-pointer bg-transparent outline-none"
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