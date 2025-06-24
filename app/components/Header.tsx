"use client";

import { useLanguage } from "../contexts/LanguageContext";

const translations = {
  pt: {
    title: "Portfólio",
    switch: "English",
  },
  en: {
    title: "Portfolio",
    switch: "Português",
  },
};

export default function Header() {
  const { language, setLanguage } = useLanguage();

  const handleSwitch = () => {
    setLanguage(language === "pt" ? "en" : "pt");
  };

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-gray-950/80 border-b border-gray-800 sticky top-0 z-50">
      <h1 className="text-xl font-bold text-white tracking-wide">
        {translations[language].title}
      </h1>
      <button
        onClick={handleSwitch}
        className="px-4 py-2 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
        aria-label="Switch language"
      >
        {translations[language].switch}
      </button>
    </header>
  );
} 