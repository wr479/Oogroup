export function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-10 grid gap-8 md:grid-cols-3 text-sm">
        <div className="space-y-2">
          <div className="font-semibold">Odzhok Group</div>
          <p className="text-foreground/70">Строим и развиваем проекты с 2010 года.</p>
        </div>
        <div>
          <div className="font-medium mb-2">Навигация</div>
          <ul className="space-y-1 text-foreground/80">
            <li><a href="/services" className="hover:opacity-80">Услуги</a></li>
            <li><a href="/about" className="hover:opacity-80">О нас</a></li>
            <li><a href="/contacts" className="hover:opacity-80">Контакты</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-2">Контакты</div>
          <ul className="space-y-1 text-foreground/80">
            <li>+7 (000) 000-00-00</li>
            <li>info@odzhok.group</li>
            <li>Москва, ул. Пример, 1</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 md:px-6 h-12 flex items-center justify-between text-xs text-foreground/60">
        <span>© {new Date().getFullYear()} Odzhok Group</span>
        <span>Все права защищены</span>
      </div>
    </footer>
  );
}


