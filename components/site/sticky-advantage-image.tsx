"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface AdvantageBlock {
  id: string;
  image: string;
  title: string;
}

interface StickyAdvantageImageProps {
  advantages: AdvantageBlock[];
  width: number;
  height: number;
  className?: string;
}

export function StickyAdvantageImage({ 
  advantages, 
  width, 
  height, 
  className = "" 
}: StickyAdvantageImageProps) {
  const [activeAdvantageIndex, setActiveAdvantageIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);
  const stickyContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Определяем, какой блок преимуществ сейчас в поле зрения
      const advantageSections = document.querySelectorAll('[data-advantage-section]');
      let currentIndex = 0;
      
      advantageSections.forEach((section, index) => {
        const sectionRect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Если секция в центре экрана (60% - 40% от высоты)
        if (sectionRect.top < windowHeight * 0.6 && sectionRect.bottom > windowHeight * 0.4) {
          currentIndex = index;
        }
      });
      
      if (currentIndex !== activeAdvantageIndex) {
        // Плавная смена изображения
        setImageOpacity(0);
        setTimeout(() => {
          setActiveAdvantageIndex(currentIndex);
          setImageOpacity(1);
        }, 300);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeAdvantageIndex]);

  return (
    <div className="lg:block hidden">
      <div 
        ref={stickyContainerRef}
        className="sticky top-32 w-full max-w-md mx-auto"
        style={{ 
          position: 'sticky',
          top: '8rem'
        }}
      >
        <div className="relative bg-white rounded-xl shadow-xl overflow-hidden border border-black/5">
          <Image
            src={advantages[activeAdvantageIndex].image}
            alt={advantages[activeAdvantageIndex].title}
            width={width}
            height={height}
            className="w-full h-auto transition-opacity duration-500"
            style={{ opacity: imageOpacity }}
            priority
          />
          
          {/* Индикатор активного преимущества */}
          <div className="absolute bottom-4 left-4 flex gap-2">
            {advantages.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeAdvantageIndex 
                    ? 'bg-red-500 scale-125' 
                    : 'bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
