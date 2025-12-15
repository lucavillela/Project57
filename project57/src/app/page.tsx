import MandalaBackground from "@/components/MandalaBackground";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="h-[5vh] w-full bg-brand-darkgreen text-brand-cream flex items-center justify-center">
        Navbar Teste
      </nav>

      <div className="relative h-[90vh] w-full">
        <Image
          src="/greenBackground.png"
          alt="Background"
          fill
          className="object-cover -z-20"
        />

        <div className="absolute inset-0 -z-10">
          <MandalaBackground />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-[100px] font-bold text-brand-cream mb-4">
            Project 57
          </h1>
          <p className="text-xl md:text-2xl text-brand-cream italic">
            A blog and visual portfolio by Luca Torres Villela
          </p>
        </div>
      </div>

      <div className="h-[5vh]"></div>
    </main>
  );
}
