"use client";

export default function Button({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full text-brand-cream bg-brand-cream/2 backdrop-blur-md w-35 px-4 py-2 transition-all duration-300 font-semibold hover:shadow-lg hover:scale-104 transform text-md border-1 border-brand-cream hover:border-brand-cream/50 cursor-pointer mx-sm:2 max-sm:px-3 max-sm:w-28 max-sm:text-sm`}
    >
      {label}
    </button>
  );
}
