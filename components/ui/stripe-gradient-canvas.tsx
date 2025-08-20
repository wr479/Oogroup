"use client";
import { useEffect, useRef } from "react";

export function StripeGradientCanvas() {
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

    // Параметры анимации
    let time = 0;
    let animationId: number;

    // Точные цвета Stripe
    const colors = [
      { r: 124, g: 58, b: 237, a: 0.6 },   // Purple - основной
      { r: 239, g: 68, b: 68, a: 0.5 },    // Red
      { r: 245, g: 158, b: 11, a: 0.4 },   // Orange
      { r: 34, g: 197, b: 94, a: 0.4 },    // Green
      { r: 6, g: 182, b: 212, a: 0.5 },    // Cyan
      { r: 59, g: 130, b: 246, a: 0.4 },   // Blue
    ];

    // Создаем градиентные круги с точными позициями как у Stripe
    const circles = [
      // Центральный фиолетовый
      {
        x: 0.5,
        y: 0.4,
        radius: 0.8,
        color: colors[0],
        speed: 0.001,
        offset: 0,
        movement: { x: 0.05, y: 0.03 }
      },
      // Красный слева
      {
        x: 0.3,
        y: 0.3,
        radius: 0.6,
        color: colors[1],
        speed: 0.0015,
        offset: Math.PI / 3,
        movement: { x: 0.04, y: 0.05 }
      },
      // Оранжевый справа
      {
        x: 0.7,
        y: 0.5,
        radius: 0.7,
        color: colors[2],
        speed: 0.0012,
        offset: Math.PI * 2 / 3,
        movement: { x: 0.06, y: 0.02 }
      },
      // Зеленый снизу
      {
        x: 0.4,
        y: 0.7,
        radius: 0.5,
        color: colors[3],
        speed: 0.0018,
        offset: Math.PI,
        movement: { x: 0.03, y: 0.06 }
      },
      // Голубой сверху
      {
        x: 0.6,
        y: 0.2,
        radius: 0.6,
        color: colors[4],
        speed: 0.0013,
        offset: Math.PI * 4 / 3,
        movement: { x: 0.05, y: 0.04 }
      },
      // Синий в углу
      {
        x: 0.8,
        y: 0.8,
        radius: 0.4,
        color: colors[5],
        speed: 0.002,
        offset: Math.PI * 5 / 3,
        movement: { x: 0.07, y: 0.05 }
      }
    ];

    const animate = () => {
      time += 0.001; // Медленнее для плавности
      
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;

      // Очищаем canvas
      ctx.clearRect(0, 0, width, height);

      // Рисуем каждый градиентный круг
      circles.forEach((circle) => {
        const x = width * (circle.x + Math.sin(time * circle.speed + circle.offset) * circle.movement.x);
        const y = height * (circle.y + Math.cos(time * circle.speed + circle.offset) * circle.movement.y);
        const radius = Math.max(width, height) * circle.radius;

        // Создаем радиальный градиент как у Stripe
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, `rgba(${circle.color.r}, ${circle.color.g}, ${circle.color.b}, ${circle.color.a})`);
        gradient.addColorStop(0.3, `rgba(${circle.color.r}, ${circle.color.g}, ${circle.color.b}, ${circle.color.a * 0.8})`);
        gradient.addColorStop(0.6, `rgba(${circle.color.r}, ${circle.color.g}, ${circle.color.b}, ${circle.color.a * 0.4})`);
        gradient.addColorStop(1, `rgba(${circle.color.r}, ${circle.color.g}, ${circle.color.b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      });

      // Добавляем мягкие белые блики как у Stripe
      const whiteGradient1 = ctx.createRadialGradient(
        width * 0.7 + Math.sin(time * 0.5) * 80,
        height * 0.3 + Math.cos(time * 0.7) * 60,
        0,
        width * 0.7,
        height * 0.3,
        Math.max(width, height) * 0.4
      );
      whiteGradient1.addColorStop(0, "rgba(255, 255, 255, 0.15)");
      whiteGradient1.addColorStop(0.5, "rgba(255, 255, 255, 0.08)");
      whiteGradient1.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = whiteGradient1;
      ctx.fillRect(0, 0, width, height);

      const whiteGradient2 = ctx.createRadialGradient(
        width * 0.3 + Math.sin(time * 0.6) * 60,
        height * 0.6 + Math.cos(time * 0.8) * 40,
        0,
        width * 0.3,
        height * 0.6,
        Math.max(width, height) * 0.3
      );
      whiteGradient2.addColorStop(0, "rgba(255, 255, 255, 0.1)");
      whiteGradient2.addColorStop(0.5, "rgba(255, 255, 255, 0.05)");
      whiteGradient2.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = whiteGradient2;
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
    <div className="absolute inset-0 z-0 pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          filter: "blur(60px)",
          mixBlendMode: "normal",
        }}
      />
    </div>
  );
}
