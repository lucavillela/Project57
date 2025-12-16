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
  Phone,
} from "lucide-react";

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

const Curriculum = () => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(["about", "skills", "experience", "education"])
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
      title: "About Me",
      icon: <GraduationCap className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <p className="text-xl text-brand-darkgreen leading-relaxed font-semibold hover:text-gray-950 transition-colors duration-200">
            Computer Engineering undergraduate with international experience in
            Germany and solid computer science background. Practical experience
            in Full-stack development, Docker containerization, Data Science,
            and Machine Learning.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-800 hover:text-brand-darkgreen transition-colors duration-200 cursor-default">
              <MapPin className="w-5 h-5 text-brand-darkgreen flex-shrink-0" />
              <span className="text-lg font-medium">Salvador, Brazil 🇧🇷</span>
            </div>
            <div className="flex items-center gap-3 text-gray-800 group">
              <Mail className="w-5 h-5 text-brand-darkgreen flex-shrink-0 group-hover:animate-pulse" />
              <a
                href="mailto:lucatvillela@gmail.com"
                className="text-lg font-medium hover:text-brand-darkgreen transition-colors duration-200 hover:underline underline-offset-2"
              >
                lucatvillela@gmail.com
              </a>
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/lucavillela"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brand-darkgreen hover:text-brand-darkgreen bg-brand-cream hover:bg-brand-cream px-4 py-2 rounded-lg transition-all duration-300 font-semibold hover:shadow-lg hover:scale-101 transform text-sm border-2 border-brand-cream hover:border-brand-darkgreen"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/luca-villela"
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
      title: "Technical Skills",
      icon: <Code className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-bold text-brand-darkgreen mb-3 text-lg">
              Programming Languages
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Type/JavaScript", "Python", "SQL", "C/C++", "Java", "C#"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="text-[16px] px-4 py-2 bg-blue-100 text-blue-900 font-semibold rounded-full text-sm"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold text-brand-darkgreen mb-3 text-lg">
              Frameworks & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "Angular",
                "Node.js",
                "Docker",
                "Git",
                "PostgreSQL",
              ].map((skill) => (
                <span
                  key={skill}
                  className="text-[16px] px-4 py-2 bg-green-100 text-green-900 font-semibold rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold text-brand-darkgreen mb-3 text-lg">
              Areas of Interest and Knowledge
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Full-stack Development",
                "Databases",
                "Linux",
                "Automation",
                "Machine Learning",
              ].map((skill) => (
                <span
                  key={skill}
                  className="text-[16px] px-4 py-2 bg-purple-100 text-purple-900 font-semibold rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold text-brand-darkgreen mb-3 text-lg">
              Other Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Power BI", "Power Automate", "Power Apps"].map((skill) => (
                <span
                  key={skill}
                  className="text-[16px] px-4 py-2 bg-amber-100 text-amber-900 font-semibold rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "experience",
      title: "Professional Experience",
      icon: <Briefcase className="w-6 h-6" />,
      content: (
        <div className="space-y-8">
          <div className="border-l-4 border-brand-darkgreen pl-6">
            <h4 className="font-bold text-brand-darkgreen text-2xl mb-1">
              Research Assistant — Software Developer
            </h4>
            <p className="text-lg text-gray-700 font-semibold mb-1">
              Fraunhofer Institute for Production Technology IPT
            </p>
            <p className="text-md text-gray-700 font-semibold mb-4">
              Aachen, Germany 🇩🇪 • 07/2024 – 07/2025
            </p>
            <ul className="space-y-3 text-gray-800">
              <li className="flex gap-3">
                <span className="text-brand-darkgreen mt-1 flex-shrink-0 font-bold">
                  •
                </span>
                <span className="text-lg font-medium leading-relaxed">
                  Developed <span className="font-bold">Angular</span> web
                  applications used to demonstrate research results to partners
                  and industry.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-darkgreen mt-1 flex-shrink-0 font-bold">
                  •
                </span>
                <span className="text-lg font-medium leading-relaxed">
                  Implemented{" "}
                  <span className="font-bold">MQTT communication</span> with
                  microcontrollers, enabling real-time monitoring of experiments
                  and prototypes.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-darkgreen mt-1 flex-shrink-0 font-bold">
                  •
                </span>
                <span className="text-lg font-medium leading-relaxed">
                  Containerized systems with{" "}
                  <span className="font-bold">Docker</span>, ensuring
                  reproducible environments and facilitating deployment.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-darkgreen mt-1 flex-shrink-0 font-bold">
                  •
                </span>
                <span className="text-lg font-medium leading-relaxed">
                  Researched{" "}
                  <span className="font-bold">5G network technologies</span> and
                  contributed to prototypes involving edge computing.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-darkgreen mt-1 flex-shrink-0 font-bold">
                  •
                </span>
                <span className="text-lg font-medium leading-relaxed">
                  Managed <span className="font-bold">virtual machines</span>{" "}
                  and <span className="font-bold">Linux systems</span> used in
                  experiments and internal tools.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-darkgreen mt-1 flex-shrink-0 font-bold">
                  •
                </span>
                <span className="text-lg font-medium leading-relaxed">
                  Collaborated with multicultural teams using{" "}
                  <span className="font-bold">Git</span> and{" "}
                  <span className="font-bold">agile methodologies</span>.
                </span>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-brand-darkgreen pl-6">
            <h4 className="font-bold text-brand-darkgreen text-2xl mb-1">
              Data Science & Software Development Intern
            </h4>
            <p className="text-lg text-gray-700 font-semibold mb-1">
              Bahia Court of Justice
            </p>
            <p className="text-md text-gray-700 font-semibold mb-4">
              Salvador, Brazil 🇧🇷 • 01/2024 – 06/2024
            </p>
            <ul className="space-y-3 text-gray-800">
              <li className="flex gap-3">
                <span className="text-brand-darkgreen mt-1 flex-shrink-0 font-bold">
                  •
                </span>
                <span className="text-lg font-medium leading-relaxed">
                  Developed{" "}
                  <span className="font-bold">Power BI dashboards</span> used by
                  administrative departments to support decision-making.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-darkgreen mt-1 flex-shrink-0 font-bold">
                  •
                </span>
                <span className="text-lg font-medium leading-relaxed">
                  Automated manual processes using{" "}
                  <span className="font-bold">Power Apps</span> and{" "}
                  <span className="font-bold">Power Automate</span>, increasing
                  efficiency.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-darkgreen mt-1 flex-shrink-0 font-bold">
                  •
                </span>
                <span className="text-lg font-medium leading-relaxed">
                  Created internal <span className="font-bold">C#</span>{" "}
                  applications to replace third-party tools, ensuring
                  technological independence.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-darkgreen mt-1 flex-shrink-0 font-bold">
                  •
                </span>
                <span className="text-lg font-medium leading-relaxed">
                  Delivered solutions aligned with court standards, contributing
                  to agility and service quality.
                </span>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-brand-darkgreen pl-6">
            <h4 className="font-bold text-brand-darkgreen text-2xl mb-1">
              Software Development Intern
            </h4>
            <p className="text-lg text-gray-700 font-semibold mb-1">
              In9 Mídia
            </p>
            <p className="text-md text-gray-700 font-semibold mb-4">
              Salvador, Brazil 🇧🇷 • 03/2023 – 12/2023
            </p>
            <ul className="space-y-3 text-gray-800">
              <li className="flex gap-3">
                <span className="text-brand-darkgreen mt-1 flex-shrink-0 font-bold">
                  •
                </span>
                <span className="text-lg font-medium leading-relaxed">
                  Modeled and managed databases with{" "}
                  <span className="font-bold">PostgreSQL</span> for production
                  applications.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-darkgreen mt-1 flex-shrink-0 font-bold">
                  •
                </span>
                <span className="text-lg font-medium leading-relaxed">
                  Used <span className="font-bold">Docker</span> to facilitate
                  development, integration, and deployment.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-darkgreen mt-1 flex-shrink-0 font-bold">
                  •
                </span>
                <span className="text-lg font-medium leading-relaxed">
                  Developed full-stack applications with{" "}
                  <span className="font-bold">Node.js</span> and{" "}
                  <span className="font-bold">React</span>, integrating critical
                  features.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-darkgreen mt-1 flex-shrink-0 font-bold">
                  •
                </span>
                <span className="text-lg font-medium leading-relaxed">
                  Implemented <span className="font-bold">RESTful APIs</span>{" "}
                  and optimized existing endpoints.
                </span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "education",
      title: "Education",
      icon: <Award className="w-6 h-6" />,
      content: (
        <div className="space-y-8">
          <div className="border-l-4 border-brand-darkgreen pl-6">
            <h4 className="font-bold text-brand-darkgreen text-2xl mb-1">
              Bachelor's Degree in Computer Engineering
            </h4>
            <p className="text-base text-gray-700 font-semibold mb-1">
              SENAI CIMATEC University
            </p>
            <p className="text-base text-gray-600 mb-2">
              Salvador, Brazil • In Progress
            </p>
            <p className="text-gray-800 text-base font-medium">
              8/10 semesters completed
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
            max-height: 0;
          }
          to {
            opacity: 1;
            transform: translateY(0);
            max-height: 1000px;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 1;
            transform: translateY(0);
            max-height: 1000px;
          }
          to {
            opacity: 0;
            transform: translateY(-10px);
            max-height: 0;
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-in forwards;
        }
      `}</style>
      <div className="space-y-3">
        {sections.map((section) => (
          <div
            key={section.id}
            className="rounded-xl overflow-hidden border-2 border-brand-darkgreen/30 hover:border-brand-darkgreen/70 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-brand-darkgreen/8 to-transparent hover:from-brand-darkgreen/15 hover:to-brand-darkgreen/5 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="text-brand-darkgreen group-hover:scale-125 group-hover:text-brand-darkgreen/80 transition-all duration-300">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-darkgreen group-hover:text-opacity-80 text-left transition-all duration-200">
                  {section.title}
                </h3>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-brand-darkgreen transition-transform duration-300 ${
                  expandedSections.has(section.id) ? "transform rotate-180" : ""
                }`}
              />
            </button>

            {expandedSections.has(section.id) && (
              <div className="px-6 py-6 border-t border-brand-darkgreen/20 bg-white/60 backdrop-blur-sm animate-slideDown">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Curriculum;
