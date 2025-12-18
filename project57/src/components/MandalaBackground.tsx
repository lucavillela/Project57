"use client";

import React, { useRef, useEffect } from "react";

const MandalaBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // -- CONFIGURAÇÕES --
  const SYMMETRY = 10;
  const FADE_SPEED = 0.05;
  const DRAW_COLORS = ["#f6f2ea", "#f6f2ea"];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let hue = 0;

    // Variáveis para animação automática
    let time = 0;

    // Estado do mouse/input
    let mouse = { x: 0, y: 0, active: false };
    let lastMouse = { x: 0, y: 0 };

    // Detecta se é mobile pela largura da janela (pode ajustar o 768px conforme sua preferência)
    const isMobile = () => window.innerWidth <= 768;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      // Se o usuário mexer o mouse, desativa o modo automático momentaneamente
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      lastMouse = { x: 0, y: 0 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    const draw = () => {
      time += 0.004;

      ctx.save();
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = `rgba(0, 0, 0, ${FADE_SPEED})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.restore();

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      let currentX = mouse.x;
      let currentY = mouse.y;
      let shouldDraw = mouse.active;

      if (isMobile()) {
        shouldDraw = true; // Força o desenho

        const radiusX = canvas.width * 0.5; // 50% da largura
        const radiusY = canvas.height * 0.5; // 50% da altura

        currentX = centerX + Math.sin(time) * radiusX;
        currentY = centerY + Math.cos(time * 1.3) * radiusY;

        if (!mouse.active && lastMouse.x === 0 && lastMouse.y === 0) {
          lastMouse.x = currentX;
          lastMouse.y = currentY;
        }
      }

      if (shouldDraw) {
        // Inicializa lastMouse na primeira iteração do desenho
        if (lastMouse.x === 0 && lastMouse.y === 0) {
          lastMouse.x = currentX;
          lastMouse.y = currentY;
        }

        const startX = lastMouse.x - centerX;
        const startY = lastMouse.y - centerY;
        const endX = currentX - centerX;
        const endY = currentY - centerY;

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

        // Atualiza lastMouse com a posição atual (seja ela real ou automática)
        lastMouse.x = currentX;
        lastMouse.y = currentY;
      } else {
        // Se parou de desenhar, reseta o lastMouse
        lastMouse = { x: 0, y: 0 };
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
      className="pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
};

export default MandalaBackground;
