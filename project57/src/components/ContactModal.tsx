"use client";

import { useEffect } from "react";
import { Mail, MapPin, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ContactLinks, EMAIL } from "@/components/Contact";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const { t } = useLanguage();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t.contact.title}
      onClick={onClose}
      className="fixed inset-0 z-100 flex items-center justify-center px-4 bg-brand-darkgreen/60 backdrop-blur-sm animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-2xl border-2 border-brand-darkgreen bg-brand-cream shadow-2xl px-8 py-8 animate-fadeInUp"
      >
        <button
          onClick={onClose}
          aria-label={t.contact.close}
          className="absolute top-4 right-4 text-brand-darkgreen hover:scale-110 transition-transform duration-200 cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="font-cormorant text-[42px] font-bold text-brand-darkgreen leading-tight mb-2">
          {t.contact.title}
        </h2>
        <p className="text-gray-700 text-base mb-6 leading-relaxed">
          {t.contact.description}
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-gray-800">
            <MapPin className="w-5 h-5 text-brand-darkgreen shrink-0" />
            <span className="text-md">{t.curriculum.about.location}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-800">
            <Mail className="w-5 h-5 text-brand-darkgreen shrink-0" />
            <a
              href={`mailto:${EMAIL}`}
              className="text-md hover:text-brand-darkgreen transition-colors duration-200 hover:underline underline-offset-2"
            >
              {EMAIL}
            </a>
          </div>
        </div>

        <ContactLinks />
      </div>
    </div>
  );
};

export default ContactModal;
