import MandalaBackground from "@/components/MandalaBackground";
import Navbar from "@/components/Navbar";
import Curriculum from "@/components/Curriculum";
import ScrollArrow from "@/components/ScrollArrow";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="relative h-[94vh] w-full">
        <Image
          src="/greenBackground.jpg"
          alt="Background"
          fill
          loading="eager"
          className="object-cover -z-20"
        />

        <div className="absolute inset-0 -z-10">
          <MandalaBackground />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-cormorant text-[105px] font-[700] text-brand-cream text-shadow-lg animate-fadeInUp max-sm:text-[80px] mb-[-5]">
            Project 57
          </h1>
          <p className="font-[300] text-3xl text-brand-cream italic text-shadow-xs animate-fadeInUp max-sm:text-[25px]">
            A web portfolio by <br></br> Luca Torres Villela
          </p>
          <div id="curriculum" className="absolute bottom-17">
            <ScrollArrow />
          </div>
        </div>
      </div>

      <div className="flex itens-center justify-center w-full bg-brand-darkgreen -mt-5 relative z-10">
        <Image
          src="/greenBackground.jpg"
          alt="Background"
          fill
          loading="eager"
          className="object-cover -z-20"
        />
        <div className="flex flex-col items-center justify-center h-full w-fit min-sm:min-w-[700px] bg-brand-cream rounded-t-3xl -mt-5 relative z-20 px-8 py-8 max-sm:px-3 max-sm:w-full">
          <h1 className="font-cormorant text-[60px] font-bold text-brand-darkgreen mb-6 max-sm:text-[40px] max-sm:text-center">
            Curriculum
          </h1>
          <Curriculum />
        </div>
      </div>
    </main>
  );
}
