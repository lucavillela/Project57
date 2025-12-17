"use client";

export default function ScrollArrow() {
  return (
    <div
      className="animate-bounce-down cursor-pointer"
      onClick={() => {
        const curriculumSection = document.getElementById("curriculum");
        curriculumSection?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <svg
        className="w-8 h-8 text-brand-cream"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  );
}
