import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/10 dark:border-white/10 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Логотип и название */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">Ojok</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-slate-900 dark:text-white">Ojok</span>
            <span className="text-sm text-slate-600 dark:text-slate-400">Удаленный колл-центр</span>
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
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex flex-col items-end">
            <div className="text-lg font-bold text-slate-900 dark:text-white">8 800 600 34</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Бесплатно по России</div>
          </div>
          <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg">
            Связаться с нами
          </Button>
        </div>
      </div>
    </header>
  );
}


