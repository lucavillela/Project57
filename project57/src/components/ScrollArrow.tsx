"use client";

type ScrollArrowProps = {
  /** Id of the section to scroll to; falls back to the content wrapper. */
  targetId?: string;
};

export default function ScrollArrow({
  targetId = "curriculum",
}: ScrollArrowProps) {
  const handleScroll = () => {
    const target =
      document.getElementById(targetId) ||
      document.getElementById("content-section");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button
      type="button"
      aria-label="Scroll to content"
      className="animate-bounce-down cursor-pointer"
      onClick={handleScroll}
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
    </button>
  );
}
