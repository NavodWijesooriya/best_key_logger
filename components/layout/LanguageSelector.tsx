'use client';

import React, { useEffect, useMemo, useState } from 'react';

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            autoDisplay: boolean;
            layout?: number;
          },
          elementId: string
        ) => unknown;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

type LanguageOption = {
  code: string;
  label: string;
};

const OPTIONS: LanguageOption[] = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'de', label: 'Deutsch' },
  { code: 'ru', label: 'Русский' },
  { code: 'pl', label: 'Polski' },
];

const STORAGE_KEY = 'site-language';

const LanguageSelector = () => {
  const [selected, setSelected] = useState('en');

  const validCodes = useMemo(() => new Set(OPTIONS.map((item) => item.code)), []);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && validCodes.has(saved)) {
      setSelected(saved);
    }
  }, [validCodes]);

  useEffect(() => {
    const syncTranslator = () => {
      const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
      if (!combo) return false;

      if (combo.value !== selected) {
        combo.value = selected;
        combo.dispatchEvent(new Event('change'));
      }

      return true;
    };

    if (syncTranslator()) return;

    const intervalId = window.setInterval(() => {
      if (syncTranslator()) {
        window.clearInterval(intervalId);
      }
    }, 250);

    return () => window.clearInterval(intervalId);
  }, [selected]);

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLanguage = event.target.value;
    setSelected(nextLanguage);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
  };

  return (
    <label className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1 text-slate-300 transition-all hover:bg-white/10">
      <span className="sr-only">Select language</span>
      <select
        aria-label="Select language"
        value={selected}
        onChange={onChange}
        className="bg-transparent text-sm outline-none"
      >
        {OPTIONS.map((option) => (
          <option key={option.code} value={option.code} className="text-slate-900">
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default LanguageSelector;