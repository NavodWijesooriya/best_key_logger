// i18n utility for static translations
import en from '@/translations/en.json';
import es from '@/translations/es.json';
import de from '@/translations/de.json';
import ru from '@/translations/ru.json';
import pl from '@/translations/pl.json';

export type LanguageCode = 'en' | 'es' | 'de' | 'ru' | 'pl';

const translations = {
  en,
  es,
  de,
  ru,
  pl,
} as const;

const DEFAULT_LANGUAGE: LanguageCode = 'en';
const STORAGE_KEY = 'site-language';

export const LANGUAGE_OPTIONS = [
  { code: 'en' as LanguageCode, label: 'English' },
  { code: 'es' as LanguageCode, label: 'Español' },
  { code: 'de' as LanguageCode, label: 'Deutsch' },
  { code: 'ru' as LanguageCode, label: 'Русский' },
  { code: 'pl' as LanguageCode, label: 'Polski' },
];

// Get translation with nested key support (e.g., "nav.home")
export function getTranslation(
  language: LanguageCode,
  key: string,
  fallback?: string
): string {
  const keys = key.split('.');
  let current: any = translations[language];

  for (const k of keys) {
    if (current && typeof current === 'object' && k in current) {
      current = current[k];
    } else {
      // Fallback to English if translation not found
      current = translations.en;
      for (const fallbackKey of keys) {
        if (current && typeof current === 'object' && fallbackKey in current) {
          current = current[fallbackKey];
        } else {
          return fallback || key;
        }
      }
      return current;
    }
  }

  return typeof current === 'string' ? current : fallback || key;
}

// Get stored language preference or default
export function getStoredLanguage(): LanguageCode {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && isValidLanguage(stored)) {
    return stored as LanguageCode;
  }

  return DEFAULT_LANGUAGE;
}

// Save language preference
export function setStoredLanguage(language: LanguageCode): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, language);
}

// Type guard for language code
export function isValidLanguage(value: unknown): value is LanguageCode {
  return typeof value === 'string' && value in translations;
}

// Get all available translations
export function getAllTranslations(
  language: LanguageCode
): typeof translations.en {
  return translations[language];
}
