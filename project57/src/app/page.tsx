import Image from "next/image";

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      <main style={{ position: "relative" }}>
        <h1 style={{ color: "white" }}>Project 57</h1>
        <p style={{ color: "white" }}>
          A visual portifolio and blog by Luca Villela
        </p>
      </main>

      <div
        style={{
          position: "fixed",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          zIndex: -2,
          top: 0,
          left: 0,
        }}
      >
        <Image
          src="/homeBackground.jpg"
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
