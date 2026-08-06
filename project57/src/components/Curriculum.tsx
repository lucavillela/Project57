"use client";

import { useState } from "react";
import {
  ChevronDown,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  Linkedin,
  Github,
  MapPin,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { renderRich } from "@/i18n/renderRich";
import Contact, { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/components/Contact";

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

const SKILL_GROUP_STYLES = [
  "bg-blue-100 text-blue-900",
  "bg-green-100 text-green-900",
  "bg-purple-100 text-purple-900",
  "bg-amber-100 text-amber-900",
];

const Curriculum = () => {
  const { t } = useLanguage();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(["about"])
  );

  const toggleSection = (id: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedSections(newExpanded);
  };

  const sections: Section[] = [
    {
      id: "about",
      title: t.curriculum.about.title,
      icon: <GraduationCap className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <p className="font-source-serif text-lg text-brand-darkgreen leading-relaxed font-normal hover:text-gray-950 transition-colors duration-200">
            {t.curriculum.about.text}
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-800 hover:text-brand-darkgreen transition-colors duration-200 cursor-default">
              <MapPin className="w-5 h-5 text-brand-darkgreen shrink-0" />
              <span className="text-md">{t.curriculum.about.location}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-800 group">
              <Mail className="w-5 h-5 text-brand-darkgreen shrink-0 group-hover:animate-pulse" />
              <a
                href={`mailto:${EMAIL}`}
                className="text-md hover:text-brand-darkgreen transition-colors duration-200 hover:underline underline-offset-2"
              >
                {EMAIL}
              </a>
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brand-darkgreen hover:text-brand-darkgreen bg-brand-cream hover:bg-brand-cream px-4 py-2 rounded-lg transition-all duration-300 font-semibold hover:shadow-lg hover:scale-101 transform text-sm border-2 border-brand-cream hover:border-brand-darkgreen"
            >
              <Github className="w-5 h-5 " />
              GitHub
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brand-darkgreen hover:text-brand-darkgreen bg-brand-cream hover:bg-brand-cream px-4 py-2 rounded-lg transition-all duration-300 font-semibold hover:shadow-lg hover:scale-101 transform text-sm border-2 border-brand-cream hover:border-brand-darkgreen"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      ),
    },
    {
      id: "skills",
      title: t.curriculum.skills.title,
      icon: <Code className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          {t.curriculum.skills.groups.map((group, index) => (
            <div key={group.title}>
              <h4 className="font-semibold text-brand-darkgreen mb-3 text-lg">
                {group.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className={`text-md px-4 py-2 font-semibold rounded-full text-sm ${
                      SKILL_GROUP_STYLES[index % SKILL_GROUP_STYLES.length]
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "experience",
      title: t.curriculum.experience.title,
      icon: <Briefcase className="w-6 h-6" />,
      content: (
        <div className="space-y-8">
          {t.curriculum.experience.jobs.map((job) => (
            <div key={job.company} className="border-l-4 border-brand-darkgreen pl-6">
              <h4 className="font-semibold text-brand-darkgreen text-xl mb-1">
                {job.role}
              </h4>
              <p className="text-lg text-gray-700 font-medium mb-1">
                {job.company}
              </p>
              <p className="text-md text-gray-700 font-medium mb-4">
                {job.place}
              </p>
              <ul className="space-y-3 text-gray-800">
                {job.bullets.map((bullet, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-brand-darkgreen mt-1 shrink-0 font-bold">
                      •
                    </span>
                    <span className="text-md font-medium leading-relaxed">
                      {renderRich(bullet)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "education",
      title: t.curriculum.education.title,
      icon: <Award className="w-6 h-6" />,
      content: (
        <div className="space-y-8">
          {t.curriculum.education.entries.map((entry) => (
            <div
              key={entry.degree}
              className="border-l-4 border-brand-darkgreen pl-6"
            >
              <h4 className="font-semibold text-brand-darkgreen text-xl mb-1">
                {entry.degree}
              </h4>
              <p className="text-base text-gray-700 font-medium mb-1">
                {entry.school}
              </p>
              <p className="text-base text-gray-600 mb-1">{entry.place}</p>
              <p className="text-gray-800 text-base font-medium">
                {entry.detail}
              </p>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div id="curriculum" className="w-full max-w-4xl mx-auto scroll-m-[250px]">
      <div className="space-y-3">
        {sections.map((section) => {
          const isExpanded = expandedSections.has(section.id);

          return (
            <div
              key={section.id}
              className="rounded-xl overflow-hidden border-2 border-brand-darkgreen/30 hover:border-brand-darkgreen/70 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <button
                onClick={() => toggleSection(section.id)}
                aria-expanded={isExpanded}
                aria-controls={`section-panel-${section.id}`}
                className="w-full px-6 py-4 flex items-center justify-between bg-linear-to-r from-brand-darkgreen/8 to-transparent hover:from-brand-darkgreen/15 hover:to-brand-darkgreen/5 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="text-brand-darkgreen group-hover:scale-125 group-hover:text-brand-darkgreen/80 transition-all duration-300">
                    {section.icon}
                  </div>
                  <h3 className="text-2xl font-extrabold text-brand-darkgreen group-hover:text-opacity-80 text-left transition-all duration-200">
                    {section.title}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-brand-darkgreen transition-transform duration-300 ${
                    isExpanded ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {/* The grid-rows trick animates both opening and closing. */}
              <div
                id={`section-panel-${section.id}`}
                className={`grid transition-all duration-300 ease-in-out ${
                  isExpanded
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 py-6 border-t border-brand-darkgreen/20 bg-white/60 backdrop-blur-sm">
                    {section.content}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Contact />
    </div>
  );
};

export default Curriculum;
