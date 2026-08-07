export type Lang = "en" | "pt";

export const LANGUAGES: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
];

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Job = {
  role: string;
  company: string;
  place: string;
  bullets: string[];
};

export type Education = {
  degree: string;
  school: string;
  place: string;
  detail: string;
};

export type Translation = {
  nav: {
    curriculum: string;
    projects: string;
    contact: string;
    language: string;
  };
  hero: {
    byline: string;
    name: string;
  };
  sections: {
    curriculum: string;
    projects: string;
  };
  curriculum: {
    about: {
      title: string;
      text: string;
      location: string;
    };
    skills: {
      title: string;
      groups: SkillGroup[];
    };
    experience: {
      title: string;
      jobs: Job[];
    };
    education: {
      title: string;
      entries: Education[];
    };
  };
  contact: {
    title: string;
    description: string;
    close: string;
    email: string;
  };
};

/**
 * Text inside `**double asterisks**` is rendered in bold (see renderRich).
 */
export const translations: Record<Lang, Translation> = {
  en: {
    nav: {
      curriculum: "Curriculum",
      projects: "Projects",
      contact: "Contact",
      language: "Language",
    },
    hero: {
      byline: "A web portfolio by",
      name: "Luca Villela",
    },
    sections: {
      curriculum: "Curriculum",
      projects: "Projects",
    },
    curriculum: {
      about: {
        title: "About Me",
        text: "Computer Engineering undergraduate focused on creating innovative software solutions. I bring international experience from Germany and a solid Computer Science background, along with practical skills in Full-stack development, Docker, Data Science, and Machine Learning. Seeking to apply my experience and my vision in Software Engineering or Data Science fields.",
        location: "Salvador, Brazil 🇧🇷",
      },
      skills: {
        title: "Technical Skills",
        groups: [
          {
            title: "Programming Languages",
            items: ["Type/JavaScript", "Python", "SQL", "C/C++", "Java", "C#"],
          },
          {
            title: "Frameworks & Tools",
            items: [
              "React",
              "Next.js",
              "Angular",
              "Node.js",
              "Docker",
              "Git",
              "DBeaver",
              "Linux",
            ],
          },
          {
            title: "Areas of Interest and Knowledge",
            items: [
              "Software Engineering",
              "Full-stack Development",
              "Data Science",
              "Databases",
              "Machine Learning",
            ],
          },
          {
            title: "Other Tools",
            items: ["Power BI", "Power Automate", "Power Apps"],
          },
        ],
      },
      experience: {
        title: "Professional Experience",
        jobs: [
          {
            role: "Research Assistant — Software Developer",
            company: "Fraunhofer Institute for Production Technology IPT",
            place: "Aachen, Germany 🇩🇪 • 07/2024 – 07/2025",
            bullets: [
              "Developed **Angular** web applications used to demonstrate research results to partners and industry.",
              "Implemented **MQTT communication** with microcontrollers, enabling real-time monitoring of experiments and prototypes.",
              "Containerized systems with **Docker**, ensuring reproducible environments and facilitating deployment.",
              "Researched **5G network technologies** and contributed to prototypes involving edge computing.",
              "Managed **virtual machines** and **Linux systems** used in experiments and internal tools.",
              "Collaborated with multicultural teams using **Git** and **agile methodologies**.",
            ],
          },
          {
            role: "Data Science & Software Development Intern",
            company: "Bahia Court of Justice",
            place: "Salvador, Brazil 🇧🇷 • 01/2024 – 06/2024",
            bullets: [
              "Developed **Power BI dashboards** used by administrative departments to support decision-making.",
              "Automated manual processes using **Power Apps** and **Power Automate**, increasing efficiency.",
              "Created internal **C#** applications to replace third-party tools, ensuring technological independence.",
              "Delivered solutions aligned with court standards, contributing to agility and service quality.",
            ],
          },
          {
            role: "Software Development Intern",
            company: "In9 Mídia",
            place: "Salvador, Brazil 🇧🇷 • 03/2023 – 12/2023",
            bullets: [
              "Modeled and managed databases with **PostgreSQL** for production applications.",
              "Used **Docker** to facilitate development, integration, and deployment.",
              "Developed applications with **Node.js** and **React**.",
              "Implemented **RESTful APIs** and optimized existing endpoints.",
            ],
          },
        ],
      },
      education: {
        title: "Education",
        entries: [
          {
            degree: "Bachelor's Degree in Computer Engineering",
            school: "SENAI CIMATEC University",
            place: "Salvador, Brazil • In Progress",
            detail: "9/10 semesters completed",
          },
        ],
      },
    },
    contact: {
      title: "Contact",
      description:
        "Feel free to reach out for questions, opportunities, or just to connect!",
      close: "Close",
      email: "lucatvillela@gmail.com",
    },
  },
  pt: {
    nav: {
      curriculum: "Currículo",
      projects: "Projetos",
      contact: "Contato",
      language: "Idioma",
    },
    hero: {
      byline: "Um portfólio web por",
      name: "Luca Villela",
    },
    sections: {
      curriculum: "Currículo",
      projects: "Projetos",
    },
    curriculum: {
      about: {
        title: "Sobre Mim",
        text: "Estudante de Engenharia de Computação focado em criar soluções de software inovadoras. Tenho internacional da Alemanha e uma base sólida em Ciência da Computação, além de habilidades práticas em desenvolvimento Full-stack, Docker, Ciência de Dados e Machine Learning. Busco aplicar minha experiência e visão nas áreas de Engenharia de Software ou Ciência de Dados.",
        location: "Salvador, Brasil 🇧🇷",
      },
      skills: {
        title: "Habilidades Técnicas",
        groups: [
          {
            title: "Linguagens de Programação",
            items: ["Type/JavaScript", "Python", "SQL", "C/C++", "Java", "C#"],
          },
          {
            title: "Frameworks e Ferramentas",
            items: [
              "React",
              "Next.js",
              "Angular",
              "Node.js",
              "Docker",
              "Git",
              "DBeaver",
              "Linux",
            ],
          },
          {
            title: "Áreas de Interesse e Conhecimento",
            items: [
              "Engenharia de Software",
              "Desenvolvimento Full-stack",
              "Ciência de Dados",
              "Bancos de Dados",
              "Machine Learning",
            ],
          },
          {
            title: "Outras Ferramentas",
            items: ["Power BI", "Power Automate", "Power Apps"],
          },
        ],
      },
      experience: {
        title: "Experiência Profissional",
        jobs: [
          {
            role: "Assistente de Pesquisa — Desenvolvedor de Software",
            company: "Fraunhofer Institute for Production Technology IPT",
            place: "Aachen, Alemanha 🇩🇪 • 07/2024 – 07/2025",
            bullets: [
              "Desenvolvi aplicações web em **Angular** para demonstrar resultados de pesquisa a parceiros da indústria.",
              "Implementei **comunicação MQTT** com microcontroladores, permitindo o monitoramento em tempo real de experimentos e protótipos.",
              "Containerizei sistemas com **Docker**, garantindo ambientes reprodutíveis e facilitando o deploy.",
              "Pesquisei **tecnologias de rede 5G** e contribuí com protótipos envolvendo edge computing.",
              "Gerenciei **máquinas virtuais** e **sistemas Linux** utilizados em experimentos e ferramentas internas.",
              "Colaborei com equipes multiculturais usando **Git** e **metodologias ágeis**.",
            ],
          },
          {
            role: "Estagiário de Ciência de Dados e Desenvolvimento de Software",
            company: "Tribunal de Justiça da Bahia",
            place: "Salvador, Brasil 🇧🇷 • 01/2024 – 06/2024",
            bullets: [
              "Desenvolvi **dashboards em Power BI** utilizados por departamentos administrativos para apoiar a tomada de decisão.",
              "Automatizei processos manuais com **Power Apps** e **Power Automate**, aumentando a eficiência.",
              "Criei aplicações internas em **C#** para substituir ferramentas de terceiros, garantindo independência tecnológica.",
              "Entreguei soluções alinhadas aos padrões do tribunal, contribuindo para a agilidade e a qualidade do serviço.",
            ],
          },
          {
            role: "Estagiário de Desenvolvimento de Software",
            company: "In9 Mídia",
            place: "Salvador, Brasil 🇧🇷 • 03/2023 – 12/2023",
            bullets: [
              "Modelei e gerenciei bancos de dados com **PostgreSQL** para aplicações em produção.",
              "Utilizei **Docker** para facilitar o desenvolvimento, a integração e o deploy.",
              "Desenvolvi aplicações com **Node.js** e **React**.",
              "Implementei **APIs RESTful** e otimizei endpoints existentes.",
            ],
          },
        ],
      },
      education: {
        title: "Formação",
        entries: [
          {
            degree: "Bacharelado em Engenharia de Computação",
            school: "SENAI CIMATEC",
            place: "Salvador, Brasil • Em andamento",
            detail: "9/10 semestres concluídos",
          },
        ],
      },
    },
    contact: {
      title: "Contato",
      description:
        "Entre em contato para tirar dúvidas, falar sobre oportunidades ou só trocar uma ideia!",
      close: "Fechar",
      email: "lucatvillela@gmail.com",
    },
  },
};
