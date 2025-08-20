"use client";
import { useEffect, useRef } from "react";

// Точная копия кода из CodePen ThreePixDroid/MWeomWp с ускоренной анимацией
class Circle {
  x: number;
  y: number;
  angle: number;
  radius: number;
  firstColor: string;
  secondColor: string;

  constructor(w: number, h: number, minR: number, maxR: number) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.angle = Math.random() * Math.PI * 2;
    this.radius = Math.random() * (maxR - minR) + minR;
    
    // Используем только цвета из CSS переменных пользователя
    const colors = [
      '#a960ee', // --gradientColorZero
      '#ff333d', // --gradientColorOne  
      '#90e0ff', // --gradientColorTwo
      '#ffcb57'  // --gradientColorThree
    ];
    const transparentColors = [
      'rgba(169, 96, 238, 0)', // --gradientColorZeroTransparent
      'rgba(255, 51, 61, 0)',  // --gradientColorOneTransparent
      'rgba(144, 224, 255, 0)', // --gradientColorTwoTransparent
      'rgba(255, 203, 87, 0)'   // --gradientColorThreeTransparent
    ];
    
    const colorIndex = Math.floor(Math.random() * colors.length);
    this.firstColor = colors[colorIndex];
    this.secondColor = transparentColors[colorIndex];
  }

  draw(ctx: CanvasRenderingContext2D, speed: number) {
    this.angle += speed;
    const x = this.x + Math.cos(this.angle) * 200;
    const y = this.y + Math.sin(this.angle) * 200;
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, this.radius);
    gradient.addColorStop(0, this.firstColor);
    gradient.addColorStop(1, this.secondColor);

    ctx.globalCompositeOperation = `overlay`;
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

class GradientAnimation {
  private cnv: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private circlesNum: number;
  private minRadius: number;
  private maxRadius: number;
  private speed: number;
  private w: number = 0;
  private h: number = 0;
  private circles: Circle[] = [];

  constructor(canvas: HTMLCanvasElement) {
    this.cnv = canvas;
    this.ctx = this.cnv.getContext('2d')!;
    this.circlesNum = 15;
    this.minRadius = 400;
    this.maxRadius = 400;
    this.speed = 0.02; // Ускорил в 4 раза (было 0.005)
    this.circles = [];

    this.setCanvasSize();
    this.createCircles();
    this.drawAnimation();
  }

  setCanvasSize() {
    const rect = this.cnv.getBoundingClientRect();
    this.w = this.cnv.width = rect.width * devicePixelRatio;
    this.h = this.cnv.height = rect.height * devicePixelRatio;
    this.ctx.scale(devicePixelRatio, devicePixelRatio);
  }

  createCircles() {
    this.circles = [];
    for (let i = 0; i < this.circlesNum; ++i) {
      this.circles.push(new Circle(this.w, this.h, this.minRadius, this.maxRadius));
    }
  }

  drawCircles() {
    this.circles.forEach(circle => circle.draw(this.ctx, this.speed));
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.w, this.h);
  }

  drawAnimation() {
    this.clearCanvas();
    this.drawCircles();
    requestAnimationFrame(() => this.drawAnimation());
  }

  resize() {
    this.setCanvasSize();
    this.createCircles();
  }
}

export function CodepenGradientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<GradientAnimation | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Создаем анимацию
    animationRef.current = new GradientAnimation(canvas);

    // Обработчик ресайза
    const handleResize = () => {
      if (animationRef.current) {
        animationRef.current.resize();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full block"
        style={{ 
          background: 'hsl(222, 25%, 20%)',
          filter: 'blur(0px)' // Убираем размытие для точной копии
        }} 
      />
    </div>
  );
}
