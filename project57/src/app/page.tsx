import MandalaBackground from "@/components/MandalaBackground";
import Navbar from "@/components/Navbar";
import Curriculum from "@/components/Curriculum";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="relative h-[94vh] w-full">
        <Image
          src="/greenBackground.png"
          alt="Background"
          fill
          loading="eager"
          className="object-cover -z-20"
        />

        <div className="absolute inset-0 -z-10">
          <MandalaBackground />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-[105px] font-bold text-brand-cream text-shadow-lg animate-fadeInUp max-sm:text-[90px]">
            Project 57
          </h1>
          <p className="text-xl md:text-2xl text-brand-cream italic text-shadow-xs animate-fadeInUp">
            A blog and visual portfolio by Luca Torres Villela
          </p>
          <div
            id="curriculum"
            className="absolute bottom-17 animate-bounce-down cursor-pointer"
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
        </div>
      </div>

      <div className="flex itens-center justify-center w-full min-h-[100vh] bg-brand-darkgreen -mt-5 relative z-10">
        <Image
          src="/greenBackground.png"
          alt="Background"
          fill
          loading="eager"
          className="object-cover -z-20"
        />
        <div className="flex flex-col items-center justify-center h-full w-fit bg-brand-cream rounded-t-3xl -mt-5 relative z-20 px-8 py-8 max-sm:px-3 max-sm:w-full">
          <h1 className="text-[60px] font-bold text-brand-darkgreen mb-6 max-sm:text-[40px] max-sm:text-center">
            Curriculum
          </h1>
          <Curriculum />
        </div>
      </div>
    </main>
  );
}
