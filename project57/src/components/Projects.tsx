"use client";

import Image from "next/image";
import Link from "next/link";
import projectsData from "@/data/projects.json";
import { useLanguage } from "@/context/LanguageContext";
import Contact from "@/components/Contact";
import { Lang } from "@/i18n/translations";

type Project = {
  id: number;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  image: string;
  link: string;
  callToAction: Record<Lang, string>;
};

export default function Projects() {
  const { lang } = useLanguage();
  const projects = projectsData as Project[];

  return (
    <div
      id="projects"
      className="scroll-m-[250px] w-full max-w-[900px] mt-4 animate-fadeInUp"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link
            href={project.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            key={project.id}
            className="group flex flex-col bg-brand-cream border-2 border-brand-darkgreen/10 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-brand-darkgreen/50 cursor-pointer"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={project.image || "/greenBackground.jpg"}
                alt={project.title[lang]}
                sizes="max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h2 className="font-source-serif text-[28px] font-bold text-brand-darkgreen mb-3 leading-tight">
                {project.title[lang]}
              </h2>
              <p className="text-brand-darkgreen text-md flex-1 font-[400] mb-4">
                {project.description[lang]}
              </p>

              <div className="mt-auto w-fit text-brand-darkgreen font-semibold text-sm border-b-2 border-transparent group-hover:border-brand-darkgreen transition-all duration-300 pb-1">
                {`${project.callToAction[lang]} →`}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Contact />
    </div>
  );
}
