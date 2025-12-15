import MandalaBackground from "@/components/MandalaBackground";
import Navbar from "@/components/Navbar";
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
          <h1 className="text-[105px] font-bold text-brand-cream text-shadow-lg animate-fadeInUp">
            Project 57
          </h1>
          <p className="text-xl md:text-2xl text-brand-cream italic text-shadow-xs animate-fadeInUp">
            A blog and visual portfolio by Luca Torres Villela
          </p>
          {/* possivel feature, seta que chama para baixo  
          <div className="absolute bottom-15 animate-bounce-down cursor-pointer">
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
          </div> */}
        </div>
      </div>

      <div className="h-[100vh] bg-brand-cream rounded-t-3xl -mt-5 relative z-20 p-8">
        <h1 className="text-[60px] font-bold text-brand-darkgreen">
          Curriculum
        </h1>
      </div>
    </main>
  );
}
