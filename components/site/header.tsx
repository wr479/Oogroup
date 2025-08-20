import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/10 dark:border-white/10 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/next.svg" alt="Logo" width={24} height={24} className="dark:invert" />
          <span className="font-semibold tracking-tight">Odzhok Group</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/services" className="hover:opacity-80">Услуги</Link>
          <Link href="#advantages" className="hover:opacity-80">Преимущества</Link>
          <Link href="/about" className="hover:opacity-80">О нас</Link>
          <Link href="/contacts" className="hover:opacity-80">Контакты</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="hidden sm:inline-flex">Связаться</Button>
        </div>
      </div>
    </header>
  );
}


