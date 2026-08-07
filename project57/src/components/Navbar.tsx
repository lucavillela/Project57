"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { LANGUAGES } from "@/i18n/translations";

type NavbarProps = {
  onSectionChange?: (section: string) => void;
};

const LanguageToggle = ({ className = "" }: { className?: string }) => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className={`flex items-center rounded-full border-2 border-brand-darkgreen/40 overflow-hidden text-sm font-bold ${className}`}
    >
      {LANGUAGES.map((option) => (
        <button
          key={option.code}
          onClick={() => setLang(option.code)}
          aria-pressed={lang === option.code}
          className={`px-3 py-1 transition-colors duration-300 cursor-pointer ${
            lang === option.code
              ? "bg-brand-darkgreen text-brand-cream"
              : "text-brand-darkgreen hover:bg-brand-darkgreen/10"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

const Navbar: React.FC<NavbarProps> = ({ onSectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { name: t.nav.curriculum, href: "#curriculum" },
    { name: t.nav.projects, href: "#projects" },
    /*{ name: "Blog", href: "/blog" }, */
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      onSectionChange?.(href.replace("#", ""));
    }
    setIsOpen(false);
  };

  return (
    <nav className="w-full bg-brand-cream text-brand-darkgreen flex items-center justify-between px-8 border-b border-b-2 border-brand-cream animate-fadeIn relative">
      <div className="text-[40px] font-extrabold">57</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 font-semibold text-lg">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleSmoothScroll(e, link.href)}
            className="relative inline-block group"
          >
            {link.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-darkgreen transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
        <LanguageToggle />
      </div>

      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
        aria-expanded={isOpen}
        className="md:hidden flex flex-col gap-1.5 cursor-pointer z-50"
      >
        <span
          className={`h-0.5 w-6 bg-brand-darkgreen transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`h-0.5 w-6 bg-brand-darkgreen transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`h-0.5 w-6 bg-brand-darkgreen transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[6vh] left-0 w-full bg-brand-cream border-b border-brand-darkgreen md:hidden shadow-lg transform transition-all duration-300 ease-in-out origin-top z-40 ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-2 invisible"
        }`}
      >
        <div className="flex flex-col gap-4 px-8 py-6 font-bold text-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-brand-darkgreen hover:text-brand-darkgreen transition-colors"
            >
              {link.name}
            </a>
          ))}
          <LanguageToggle className="w-fit" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
