"use client";

import React, { useEffect, useRef } from "react";

export type PlasmaAnimationProps = {
  width?: number; // % ширина контейнера
  height?: number; // % высота контейнера
  grid?: number;
  speed?: number;
  className?: string;
  /** Включить диагональный оверлей, перекрывающий половину блока */
  diagonalOverlay?: boolean;
  /** Угол треугольника-оверлея: tl | tr | bl | br */
  overlayCorner?: "tl" | "tr" | "bl" | "br";
  /** Цвет оверлея (поддерживает rgba) */
  overlayColor?: string;
  /** Непрозрачность оверлея (0..1) */
  overlayOpacity?: number;
};

/**
 * PlasmaAnimation — React TSX-компонент с анимированным <canvas>.
 * Цвета ограничены тёплой палитрой (красный → оранжевый → жёлтый), без «зелёного».
 * Добавлен диагональный блок-оверлей, который перекрывает половину контейнера.
 */
const PlasmaAnimation: React.FC<PlasmaAnimationProps> = ({
  width = 100,
  height = 100,
  grid = 31,
  speed = 0.01,
  className = "",
  diagonalOverlay = true,
  overlayCorner = "tl",
  overlayColor = "#000",
  overlayOpacity = 0.4,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const timeRef = useRef<number>(0);

  // ---------- Палитра: тёплые оттенки без зелёного ----------
  // Идея: делаем R доминирующим, G <= R, B = 0. Это исключает чисто зелёные оттенки.
//   const R = (x: number, y: number, t: number): number =>
//     Math.floor(180 + 75 * Math.sin((x * x - y * y) / 220 + t));

//   const G = (x: number, y: number, t: number): number => {
//     // База колебаний для G
//     const base = 30 + 160 * Math.abs(Math.sin((x + y + t) / 35));
//     // Ограничим G сверху текущим R, чтобы не «уходить» в зелёный
//     return Math.min(base, R(x, y, t));
//   };

//   const B = (_x: number, _y: number, _t: number): number => 0; // без синего

    // ---------- Палитра: ещё более красные оттенки ----------
const R = (x: number, y: number, t: number): number =>
Math.floor(200 + 55 * Math.sin((x * x - y * y) / 180 + t)); // яркий красный, держим ближе к 255

const G = (x: number, y: number, t: number): number =>
Math.floor(10 + 40 * Math.abs(Math.sin((x + y + t) / 50))); // очень приглушённый зелёный (даёт чуть оранжевого)

const B = (_x: number, _y: number, _t: number): number => 0; // полностью убираем синий


useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr =
      typeof window !== "undefined" && window.devicePixelRatio
        ? Math.max(1, window.devicePixelRatio)
        : 1;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const logicalW = grid;
    const logicalH = grid;
    canvas.width = Math.floor(logicalW * dpr);
    canvas.height = Math.floor(logicalH * dpr);
    canvas.style.width = `${width}%`;
    canvas.style.height = `${height}%`;

    (ctx as CanvasRenderingContext2D).resetTransform?.();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.imageSmoothingEnabled = false;

    const draw = () => {
      const t = timeRef.current;
      for (let x = 0; x <= 30; x++) {
        for (let y = 0; y <= 30; y++) {
          const r = R(x, y, t);
          const g = G(x, y, t);
          const b = B(x, y, t);
          ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
          ctx.fillRect(x, y, 1, 1);
        }
      }
      timeRef.current = t + speed;
      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [width, height, grid, speed]);

  // ---------- Диагональный оверлей (перекрывает половину блока) ----------
  const clipPolygon = (() => {
    switch (overlayCorner) {
      case "tr":
        return "polygon(0 0, 100% 0, 100% 100%)"; // треугольник сверху-справа
      case "bl":
        return "polygon(0 0, 0 100%, 100% 100%)"; // снизу-слева
    case "br":
        return "polygon(150% 0, 100% 100%, 0 100%)";
      case "tl":
      default:
        return "polygon(0 0, 100% 0, 0 100%)"; // сверху-слева
    }
  })();

  return (
    <div
      className={className}
      style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
    >
      <canvas ref={canvasRef} />

      {diagonalOverlay && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: overlayColor,
            opacity: overlayOpacity,
            clipPath: clipPolygon as any,
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
};

export default PlasmaAnimation;
