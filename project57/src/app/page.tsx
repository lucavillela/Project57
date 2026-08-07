"use client";

import { useState } from "react";
import MandalaBackground from "@/components/MandalaBackground";
import Navbar from "@/components/Navbar";
import Curriculum from "@/components/Curriculum";
import Projects from "@/components/Projects";
import ScrollArrow from "@/components/ScrollArrow";
import Image from "next/image";
import Button from "@/components/Button";
import ContactModal from "@/components/ContactModal";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const [activeSection, setActiveSection] = useState("curriculum");
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { t } = useLanguage();

  const handleSectionChange = (section: string) => {
    setActiveSection(section);

    requestAnimationFrame(() => {
      setTimeout(() => {
        const target =
          document.getElementById(section) ||
          document.getElementById("content-section");
        if (target instanceof HTMLElement) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    });
  };

  const sectionTitle =
    activeSection === "projects" ? t.sections.projects : t.sections.curriculum;

  return (
    <main className="min-h-screen">
      <Navbar onSectionChange={handleSectionChange} />

      <div className="relative h-[max(500px,94vh)] w-full">
        <Image
          src="/greenBackground.jpg"
          alt="Background"
          fill
          loading="eager"
          className="object-cover -z-20 w-full"
        />

        <div className="absolute inset-0 -z-10 w-full">
          <MandalaBackground />
        </div>

        <div className="relative z-10 h-[max(500px,94vh)] flex flex-col items-center justify-center text-center px-4 w-full">
          <h1 className="font-cormorant text-[105px] font-[700] text-brand-cream text-shadow-lg animate-fadeInUp max-sm:text-[65px] mb-[-5]">
            Project 57
          </h1>
          <p className="font-[300] text-3xl text-brand-cream italic text-shadow-xs animate-fadeInUp max-sm:text-[20px] mb-8">
            {t.hero.byline} <br /> {t.hero.name}
          </p>

          <div className="flex flex-col items-center gap-5 animate-fadeInUp max-sm:gap-4">
            <div className="flex flex-row items-center justify-center gap-10 max-sm:gap-2">
              <Button
                label={t.nav.curriculum}
                onClick={() => handleSectionChange("curriculum")}
              />
              <Button
                label={t.nav.projects}
                onClick={() => handleSectionChange("projects")}
              />
            </div>
            <Button
              label={t.nav.contact}
              onClick={() => setIsContactOpen(true)}
            />
          </div>

          <div className="absolute bottom-17 w-full flex justify-center left-0">
            <ScrollArrow targetId={activeSection} />
          </div>
        </div>
      </div>

      <div
        id="content-section"
        className="flex itens-center justify-center w-full bg-brand-darkgreen -mt-5 relative z-10"
      >
        <Image
          src="/greenBackground.jpg"
          alt="Background"
          fill
          loading="eager"
          className="object-cover -z-20"
        />
        <div className="flex flex-col items-center justify-center h-full w-fit min-sm: bg-brand-cream rounded-t-3xl -mt-5 relative z-20 px-8 py-8 max-sm:px-3 max-sm:w-full min-h-[500px]">
          <h1 className="font-cormorant text-[60px] font-bold text-brand-darkgreen mb-6 max-sm:text-[40px] max-sm:text-center capitalize">
            {sectionTitle}
          </h1>

          {activeSection === "curriculum" ? <Curriculum /> : <Projects />}
        </div>
      </div>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </main>
  );
}
