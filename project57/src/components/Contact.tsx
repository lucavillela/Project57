"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const GITHUB_URL = "https://github.com/lucavillela";
export const LINKEDIN_URL = "https://www.linkedin.com/in/luca-villela";
export const EMAIL = "lucatvillela@gmail.com";

export const ContactLinks = () => (
  <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
    <a
      href={`mailto:${EMAIL}`}
      aria-label="Email"
      className="flex items-center gap-2 text-brand-cream bg-brand-darkgreen px-5 py-2.5 rounded-lg transition-all duration-300 font-semibold hover:shadow-lg hover:scale-105 transform text-sm w-full sm:w-auto justify-center"
    >
      <Mail className="w-5 h-5" />
    </a>
    <a
      href={GITHUB_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className="flex items-center gap-2 text-brand-cream bg-brand-darkgreen px-5 py-2.5 rounded-lg transition-all duration-300 font-semibold hover:shadow-lg hover:scale-105 transform text-sm w-full sm:w-auto justify-center"
    >
      <Github className="w-5 h-5" />
    </a>
    <a
      href={LINKEDIN_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="flex items-center gap-2 text-brand-cream bg-brand-darkgreen px-5 py-2.5 rounded-lg transition-all duration-300 font-semibold hover:shadow-lg hover:scale-105 transform text-sm w-full sm:w-auto justify-center"
    >
      <Linkedin className="w-5 h-5" />
    </a>
  </div>
);

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="mt-4 w-full rounded-xl overflow-hidden border-2 border-brand-darkgreen bg-linear-to-br from-brand-green/30 via-brand-green/20 to-brand-darkgreen/10 shadow-md hover:border-brand-darkgreen/70 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="px-6 py-6">
        <div className="flex items-center gap-4 mb-4">
          <Mail className="w-6 h-6 text-brand-darkgreen" />
          <h3 className="text-2xl font-extrabold text-brand-darkgreen">
            {t.contact.title}
          </h3>
        </div>
        <p className="text-gray-700 text-base mb-6 leading-relaxed">
          {t.contact.description}
        </p>
        <ContactLinks />
      </div>
    </div>
  );
};

export default Contact;
