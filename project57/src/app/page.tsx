"use client";

import { SetStateAction, useState } from "react";
import MandalaBackground from "@/components/MandalaBackground";
import Navbar from "@/components/Navbar";
import Curriculum from "@/components/Curriculum";
import Projects from "@/components/Projects";
import ScrollArrow from "@/components/ScrollArrow";
import Image from "next/image";
import Button from "@/components/Button";

export default function Home() {
  const [activeSection, setActiveSection] = useState("curriculum");

  const handleSectionChange = (section: SetStateAction<string>) => {
    setActiveSection(section);

    const element = document.getElementById("content-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="relative h-[max(500px,94vh)] w-full">
        <Image
          src="/greenBackground.jpg"
          alt="Background"
          fill
          loading="eager"
          className="object-cover -z-20"
        />

        <div className="absolute inset-0 -z-10">
          <MandalaBackground />
        </div>

        <div className="relative z-10 h-[max(500px,94vh)] flex flex-col text-center px-4 w-full">
          <div className="flex-1"></div>

          <div className="flex flex-col items-center">
            <h1 className="font-cormorant text-[105px] font-[700] text-brand-cream text-shadow-lg animate-fadeInUp max-sm:text-[80px] mb-[-5]">
              Project 57
            </h1>
            <p className="font-[300] text-3xl text-brand-cream italic text-shadow-xs animate-fadeInUp max-sm:text-[25px]">
              A web portfolio by <br /> Luca Torres Villela
            </p>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center w-full -translate-y-13">
            <div className="flex flex-row items-center justify-center gap-10 animate-fadeInUp">
              <Button
                label="Curriculum"
                onClick={() => handleSectionChange("curriculum")}
              />
              <Button
                label="Projects"
                onClick={() => handleSectionChange("projects")}
              />
            </div>
          </div>

          <div
            id="curriculum"
            className="absolute bottom-17 w-full flex justify-center left-0"
          >
            <ScrollArrow />
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
        <div className="flex flex-col items-center justify-center h-full w-fit min-sm:min-w-[700px] bg-brand-cream rounded-t-3xl -mt-5 relative z-20 px-8 py-8 max-sm:px-3 max-sm:w-full min-h-[500px]">
          <h1 className="font-cormorant text-[60px] font-bold text-brand-darkgreen mb-6 max-sm:text-[40px] max-sm:text-center capitalize">
            {activeSection}
          </h1>

          {activeSection === "curriculum" ? <Curriculum /> : <Projects />}
        </div>
      </div>
    </main>
  );
}
