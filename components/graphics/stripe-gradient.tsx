"use client";
import { useEffect, useRef } from "react";

export function StripeGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Устанавливаем размер canvas
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Анимация градиента
    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.005;
      
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;

      // Очищаем canvas
      ctx.clearRect(0, 0, width, height);

      // Создаем градиент
      const gradient = ctx.createRadialGradient(
        width * 0.5 + Math.sin(time) * 100,
        height * 0.3 + Math.cos(time * 0.7) * 50,
        0,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.8
      );

      // Добавляем цвета как у Stripe
      gradient.addColorStop(0, "rgba(124, 58, 237, 0.3)"); // Purple
      gradient.addColorStop(0.2, "rgba(239, 68, 68, 0.25)"); // Red
      gradient.addColorStop(0.4, "rgba(245, 158, 11, 0.2)"); // Orange
      gradient.addColorStop(0.6, "rgba(34, 197, 94, 0.2)"); // Green
      gradient.addColorStop(0.8, "rgba(6, 182, 212, 0.25)"); // Cyan
      gradient.addColorStop(1, "rgba(124, 58, 237, 0.1)"); // Purple

      // Рисуем градиент
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Добавляем дополнительные слои
      const secondaryGradient = ctx.createRadialGradient(
        width * 0.8 + Math.sin(time * 1.3) * 80,
        height * 0.7 + Math.cos(time * 0.9) * 60,
        0,
        width * 0.8,
        height * 0.7,
        Math.max(width, height) * 0.6
      );

      secondaryGradient.addColorStop(0, "rgba(59, 130, 246, 0.2)"); // Blue
      secondaryGradient.addColorStop(0.5, "rgba(236, 72, 153, 0.15)"); // Pink
      secondaryGradient.addColorStop(1, "rgba(16, 185, 129, 0.1)"); // Green

      ctx.fillStyle = secondaryGradient;
      ctx.fillRect(0, 0, width, height);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="HomepageHeroGradient Gradient isLoaded absolute inset-0 pointer-events-none">
      <canvas
        ref={canvasRef}
        className="Gradient__canvas isLoaded w-full h-full"
        data-js-controller="Gradient"
        data-js-darken-top=""
        data-transition-in=""
      />
    </div>
  );
}
