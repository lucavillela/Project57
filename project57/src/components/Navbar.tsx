"use client";

import React from "react";

const Navbar: React.FC = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Curriculum", href: "/portfolio" },
    { name: "Projects", href: "/blog" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="h-[6vh] w-full bg-brand-cream text-brand-darkgreen flex items-center justify-between px-8 border-b border-b-2 border-brand-cream animate-fadeIn">
      <div className="text-[40px] font-extrabold">57</div>

      <div className="flex gap-6 font-bold">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="relative inline-block group"
          >
            {link.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-darkgreen transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
