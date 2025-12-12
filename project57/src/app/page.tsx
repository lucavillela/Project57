import Image from "next/image";
import MandalaBackground from "@/components/MandalaBackground";

export default function Home() {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        margin: "0px",
      }}
    >
      <MandalaBackground />

      <div
        style={{
          position: "fixed",
          height: "100%",
          width: "100%",
          overflow: "hidden",
          zIndex: -2,
          top: 0,
          left: 0,
        }}
      >
        <Image
          src="/greenBackground.png"
          alt="Background Image"
          fill
          style={{
            objectFit: "cover",
            opacity: 1,
          }}
          priority
        />
      </div>
    </div>
  );
}
