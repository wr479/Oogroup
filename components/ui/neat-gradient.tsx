"use client";

import React, { useEffect, useRef } from "react";
import { NeatGradient } from "@firecms/neat";

interface NeatGradientProps {
  className?: string;
  /** Включить диагональный оверлей, перекрывающий половину блока */
  diagonalOverlay?: boolean;
  /** Угол треугольника-оверлея: tl | tr | bl | br */
  overlayCorner?: "tl" | "tr" | "bl" | "br";
  /** Цвет оверлея (поддерживает rgba) */
  overlayColor?: string;
  /** Непрозрачность оверлея (0..1) */
  overlayOpacity?: number;
}

const NeatGradientComponent: React.FC<NeatGradientProps> = ({ 
  className = "",
  diagonalOverlay = true,
  overlayCorner = "br",
  overlayColor = "#ffffff",
  overlayOpacity = 1
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const neatRef = useRef<NeatGradient | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const config = {
      colors: [
        {
          color: '#FD113F',
          enabled: true,
        },
        {
          color: '#90E0FF',
          enabled: true,
        },
        {
          color: '#FFC858',
          enabled: true,
        },
        {
          color: '#753BFF',
          enabled: true,
        },
        {
          color: '#f5e1e5',
          enabled: false,
        },
      ],
      speed: 2,
      horizontalPressure: 5,
      verticalPressure: 6,
      waveFrequencyX: 1,
      waveFrequencyY: 2,
      waveAmplitude: 10,
      shadows: 0,
      highlights: 7,
      colorBrightness: 1.05,
      colorSaturation: 0,
      wireframe: false,
      colorBlending: 9,
      backgroundColor: '#003FFF',
      backgroundAlpha: 1,
      grainScale: 0,
      grainSparsity: 0,
      grainIntensity: 0,
      grainSpeed: 0,
      resolution: 1,
      yOffset: 0,
    };

    // Создаем canvas элемент для Neat
    const gradientElement = document.createElement('canvas');
    gradientElement.id = 'gradient';
    gradientElement.style.width = '100%';
    gradientElement.style.height = '100%';
    gradientElement.style.position = 'absolute';
    gradientElement.style.top = '0';
    gradientElement.style.left = '0';
    
    // Устанавливаем размеры canvas
    gradientElement.width = containerRef.current.offsetWidth;
    gradientElement.height = containerRef.current.offsetHeight;
    
    containerRef.current.appendChild(gradientElement);

    // Инициализируем Neat градиент
    try {
      neatRef.current = new NeatGradient({
        ref: gradientElement,
        ...config
      });
    } catch (error) {
      console.error('Ошибка инициализации Neat градиента:', error);
    }

    // Обработчик изменения размера окна
    const handleResize = () => {
      if (containerRef.current && gradientElement) {
        gradientElement.width = containerRef.current.offsetWidth;
        gradientElement.height = containerRef.current.offsetHeight;
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup при размонтировании
    return () => {
      window.removeEventListener('resize', handleResize);
      if (neatRef.current) {
        neatRef.current.destroy();
        neatRef.current = null;
      }
      if (gradientElement && gradientElement.parentNode) {
        gradientElement.parentNode.removeChild(gradientElement);
      }
    };
  }, []);

  // ---------- Диагональный оверлей (перекрывает половину блока) ----------
  const clipPolygon = (() => {
    switch (overlayCorner) {
      case "tr":
        return "polygon(0 0, 100% 0, 100% 100%)"; // треугольник сверху-справа
      case "bl":
        return "polygon(0 0, 0 100%, 100% 100%)"; // снизу-слева
      case "br":
        return "polygon(150% 0, 100% 100%, 0 100%)"; // снизу-справа
      case "tl":
      default:
        return "polygon(0 0, 100% 0, 0 100%)"; // сверху-слева
    }
  })();

  return (
    <div 
      ref={containerRef}
      className={`w-full h-full absolute inset-0 ${className}`}
    >
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
            zIndex: 10,
          }}
        />
      )}
    </div>
  );
};

export default NeatGradientComponent;
