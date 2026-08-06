"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react";
import { Lang, Translation, translations } from "@/i18n/translations";

const STORAGE_KEY = "project57-lang";

const isLang = (value: unknown): value is Lang =>
  value === "en" || value === "pt";

/**
 * The language lives in a tiny external store so it can be read straight from
 * localStorage on the client without a setState-in-effect round trip. React
 * uses the server snapshot while hydrating, then swaps in the stored value.
 */
let cachedLang: Lang | null = null;
const listeners = new Set<() => void>();

const getSnapshot = (): Lang => {
  if (cachedLang) return cachedLang;

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (isLang(stored)) {
    cachedLang = stored;
  } else {
    cachedLang = navigator.language?.toLowerCase().startsWith("pt")
      ? "pt"
      : "en";
  }
  return cachedLang;
};

const getServerSnapshot = (): Lang => "en";

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

const writeLang = (next: Lang) => {
  cachedLang = next;
  window.localStorage.setItem(STORAGE_KEY, next);
  listeners.forEach((listener) => listener());
};

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const setLang = useCallback((next: Lang) => writeLang(next), []);

  const toggleLang = useCallback(
    () => writeLang(lang === "en" ? "pt" : "en"),
    [lang]
  );

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggleLang, t: translations[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
