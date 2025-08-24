import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-8">
        {/* Контактная информация как на дизайне хедера */}
        <div className="text-center mb-8 flex  items-center justify-between">
          <div className="text-lg font-medium text-slate-800 mb-2">info@ojok.ru</div>
          <div className="text-sm text-slate-600 mb-4">Звоните, пишите - обсудим, договоримся!</div>
          <div className="flex items-center gap-3">
            <div className="text-sm text-slate-600 mb-1">Бесплатно по России</div>
            <Link href='tel:88006003437' className="text-lg font-medium text-slate-800">8 800 600 34 37</Link>
          </div>
          
        </div>
        
        {/* Нижняя часть футера */}
        <div className="text-center">
          <div className="space-y-2 text-sm text-foreground/80">
            <p>Политика конфиденциальности</p>
            <p>© 2025 Ojok.ru</p>
          </div>
        </div>
      </div>
    </footer>
  );
}


