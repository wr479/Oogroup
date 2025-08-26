"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuPanelRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  // Отслеживание прокрутки для трансформации header
  useEffect(() => {
    const handleScroll = () => {
      // Не обновляем состояние при открытом мобильном меню
      if (isMenuOpen) return;
      
      const heroSection = document.querySelector('section');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        
        if (scrollPosition > heroBottom) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    if (isMenuOpen && menuPanelRef.current) {
      menuPanelRef.current.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Закрытие по ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Закрывать меню при смене маршрута
  useEffect(() => {
    if (isMenuOpen) setIsMenuOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <header className={`fixed top-0 z-40 w-full transition-all duration-500 ${
        isScrolled 
                  ? 'border-b border-black/10 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60' 
        : 'border-b border-white/20 bg-transparent'
      }`}>
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 h-14 sm:h-16 md:h-20 flex items-center justify-between">
          {/* Логотип и название */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-base sm:text-lg">Ojok</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-sm sm:text-base md:text-lg transition-colors duration-500 ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}>
                <span className="hidden sm:inline">Удаленный колл-центр</span>
                <span className="sm:hidden">Колл-центр</span>
              </span>
            </div>
          </Link>

          {/* Навигация */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm">
            <Link href="/" className={`font-medium transition-colors duration-500 ${
              isScrolled 
                ? 'text-slate-700 hover:text-red-600' 
                : 'text-white hover:text-red-200'
            }`}>
              Главная
            </Link>
            
            <Link href="/about" className={`font-medium transition-colors duration-500 ${
              isScrolled 
                ? 'text-slate-700 hover:text-red-600' 
                : 'text-white hover:text-red-200'
            }`}>
              О компании
            </Link>
            <Link href="/vacancies" className={`font-medium transition-colors duration-500 ${
              isScrolled 
                ? 'text-slate-700 hover:text-red-600' 
                : 'text-white hover:text-red-200'
            }`}>
              Вакансии
            </Link>
          </nav>

          {/* Контактная информация и кнопка */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-6">
            {/* Контактная информация - скрыта на мобильных */}
            <div className="hidden lg:flex flex-col items-end">
              <div className={`text-lg font-bold transition-colors duration-500 ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}>
                8 800 600 34
              </div>
              <div className={`text-sm transition-colors duration-500 ${
                isScrolled ? 'text-slate-600' : 'text-white/80'
              }`}>
                Бесплатно по России
              </div>
            </div>
            
            {/* Кнопка - адаптивная */}
            <Button 
              className={`hidden sm:inline-flex px-4 sm:px-6 py-2 text-sm sm:text-base rounded-lg transition-all duration-500 ${
                isScrolled 
                  ? 'bg-red-600 hover:bg-red-700 text-white' 
                  : 'bg-white text-red-600 hover:bg-white/90'
              }`}
              onClick={() => {
                const contactSection = document.querySelector('#contact-form');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/vacancies#contact-form';
                }
              }}
            >
              <span className="hidden md:inline">Связаться с нами</span>
              <span className="md:hidden">Связаться</span>
            </Button>
            
            {/* Кнопка бургера для мобильных */}
            <button
              className={`md:hidden inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-md border transition-colors duration-500 ${
                isScrolled 
                  ? 'border-foreground/15' 
                  : 'border-white/30'
              }`}
              aria-label="Открыть меню"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu-panel"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-colors duration-500 ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Мобильное меню - вынесено за пределы header для избежания конфликтов */}
      {isMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[99999] md:hidden"
          style={{ zIndex: 99999 }}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0  transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          />
          {/* Panel */}
          <div
            id="mobile-menu-panel"
            ref={menuPanelRef}
            tabIndex={-1}
            className="bg-white h-[100vh] ml-auto h-full w-[85%] sm:w-[80%] max-w-xs bg-white shadow-xl border-l border-black/10 flex flex-col transition-transform duration-300 ease-out outline-none"
            style={{ zIndex: 100000 }}
          >
            <div className="h-14 sm:h-16 px-4 flex items-center justify-between border-b border-black/10">
              <span className="font-semibold text-sm sm:text-base">Меню</span>
              <button
                className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-md border border-foreground/15"
                aria-label="Закрыть меню"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-1 sm:space-y-2" aria-label="Мобильная навигация">
              <Link href="/" className="block px-3 py-3 rounded-md hover:bg-foreground/5 text-sm sm:text-base" onClick={() => setIsMenuOpen(false)}>
                Главная
              </Link>
              <Link href="/about" className="block px-3 py-3 rounded-md hover:bg-foreground/5 text-sm sm:text-base" onClick={() => setIsMenuOpen(false)}>
                О компании
              </Link>
              <Link href="/vacancies" className="block px-3 py-3 rounded-md hover:bg-foreground/5 text-sm sm:text-base" onClick={() => setIsMenuOpen(false)}>
                Вакансии
              </Link>
            </nav>
            <div className="px-4 border-t border-black/10" style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0) + 1rem)" }}>
              <div className="mb-2 text-xs sm:text-sm text-foreground/70">Бесплатно по России</div>
              <div className="mb-4 text-base sm:text-lg font-bold">8 800 600 34</div>
              <Button 
                className="w-full bg-red-600 hover:bg-red-700 text-white rounded-lg mb-4 text-sm sm:text-base" 
                onClick={() => {
                  setIsMenuOpen(false);
                  const contactSection = document.querySelector('#contact-form');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/vacancies#contact-form';
                  }
                }}
              >
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


