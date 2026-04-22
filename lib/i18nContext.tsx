'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { LanguageCode, getTranslation, getStoredLanguage, setStoredLanguage } from './i18n';

interface I18nContextType {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  t: (key: string, fallback?: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>('en');

  // Initialize from localStorage on mount
  useEffect(() => {
    const stored = getStoredLanguage();
    setLanguageState(stored);
  }, []);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    setStoredLanguage(lang);
  };

  const t = (key: string, fallback?: string) => {
    return getTranslation(language, key, fallback);
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
