"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuPanelRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

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
    <header className="sticky top-0 z-40 w-full border-b border-black/10 dark:border-white/10 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Логотип и название */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">Ojok</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-slate-900 dark:text-white">Удаленный колл-центр</span>
          </div>
        </Link>

        {/* Навигация */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/" className="text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 font-medium">
            Главная
          </Link>
          
          <Link href="/about" className="text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 font-medium">
            О компании
          </Link>
          <Link href="/vacancies" className="text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 font-medium">
            Вакансии
          </Link>
         
        </nav>

        {/* Контактная информация и кнопка */}
        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden lg:flex flex-col items-end">
            <div className="text-lg font-bold text-slate-900 dark:text-white">8 800 600 34</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Бесплатно по России</div>
          </div>
          <Button className="hidden sm:inline-flex bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg">
            Связаться с нами
          </Button>
          {/* Кнопка бургера для мобильных */}
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-foreground/15"
            aria-label="Открыть меню"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu-panel"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Мобильное меню (всегда в DOM для анимации) */}
      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!isMenuOpen}
        className={`fixed inset-0 z-[99] md:hidden ${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* Overlay */}
        <div
          className={`${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} absolute inset-0 bg-white/80 transition-opacity duration-300`}
          onClick={() => setIsMenuOpen(false)}
        />
        {/* Panel */}
        <div
          id="mobile-menu-panel"
          ref={menuPanelRef}
          tabIndex={-1}
          className={`${isMenuOpen ? "translate-x-0" : "translate-x-full"}     bg-white h-[100vh] ml-auto h-full w-[80%] max-w-xs bg-white shadow-xl border-l border-black/10 dark:border-white/10 flex flex-col transition-transform duration-300 ease-out outline-none`}
        >
          <div className="h-16 px-4 flex items-center justify-between border-b border-black/10 dark:border-white/10">
            <span className="font-semibold">Меню</span>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-foreground/15"
              aria-label="Закрыть меню"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 px-4 py-6 space-y-2" aria-label="Мобильная навигация">
            <Link href="/" className="block px-3 py-3 rounded-md hover:bg-foreground/5" onClick={() => setIsMenuOpen(false)}>
              Главная
            </Link>
            <Link href="/about" className="block px-3 py-3 rounded-md hover:bg-foreground/5" onClick={() => setIsMenuOpen(false)}>
              О компании
            </Link>
            <Link href="/vacancies" className="block px-3 py-3 rounded-md hover:bg-foreground/5" onClick={() => setIsMenuOpen(false)}>
              Вакансии
            </Link>
          </nav>
          <div className="px-4 border-t border-black/10 dark:border-white/10" style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0) + 1rem)" }}>
            <div className="mb-2 text-sm text-foreground/70">Бесплатно по России</div>
            <div className="mb-4 text-lg font-bold">8 800 600 34</div>
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-lg mb-4" onClick={() => setIsMenuOpen(false)}>
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}


