"use client";

import React, { useRef, useEffect } from "react";

const MandalaBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // -- CONFIGURAÇÕES --
  const SYMMETRY = 10;

  const FADE_SPEED = 0.05;

  const DRAW_COLORS = ["#202b17", "#2c3c20"];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let hue = 0;

    let mouse = { x: 0, y: 0, active: false };
    let lastMouse = { x: 0, y: 0 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      // Reseta o lastMouse para que, ao voltar, não risque uma linha reta do nada
      lastMouse = { x: 0, y: 0 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    const draw = () => {
      ctx.save();
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = `rgba(0, 0, 0, ${FADE_SPEED})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.restore();
      if (mouse.active) {
        if (lastMouse.x === 0 && lastMouse.y === 0) {
          lastMouse.x = mouse.x;
          lastMouse.y = mouse.y;
        }

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        const startX = lastMouse.x - centerX;
        const startY = lastMouse.y - centerY;
        const endX = mouse.x - centerX;
        const endY = mouse.y - centerY;

        ctx.lineWidth = 1;
        ctx.lineCap = "round";

        const colorIndex = Math.floor(hue / 20) % DRAW_COLORS.length;
        ctx.strokeStyle = DRAW_COLORS[colorIndex];

        ctx.shadowBlur = 20;
        ctx.shadowColor = "rgba(0,0,0,0.5)";

        ctx.save();
        ctx.translate(centerX, centerY);

        for (let i = 0; i < SYMMETRY; i++) {
          ctx.rotate((Math.PI * 2) / SYMMETRY);

          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(endX, endY);
          ctx.stroke();

          ctx.save();
          ctx.scale(1, -1);
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(endX, endY);
          ctx.stroke();
          ctx.restore();
        }

        ctx.restore();
      }

      if (mouse.active) {
        lastMouse.x = mouse.x;
        lastMouse.y = mouse.y;
      }

      hue++;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen -z-10 pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
};

export default MandalaBackground;
