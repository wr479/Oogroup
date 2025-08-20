import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export default function ContactsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
      <Reveal>
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">Контакты</h1>
      </Reveal>
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal className="rounded-xl border border-black/10 dark:border-white/10 p-6 space-y-4">
          <div>
            <div className="text-sm text-foreground/60">Телефон</div>
            <div className="font-medium">+7 (000) 000-00-00</div>
          </div>
          <div>
            <div className="text-sm text-foreground/60">Email</div>
            <div className="font-medium">info@odzhok.group</div>
          </div>
          <div>
            <div className="text-sm text-foreground/60">Адрес</div>
            <div className="font-medium">Москва, ул. Пример, 1</div>
          </div>
        </Reveal>
        <Reveal delay={0.06} className="rounded-xl border border-black/10 dark:border-white/10 p-6 space-y-4">
          <div className="font-medium">Напишите нам</div>
          <form className="grid gap-3">
            <input className="h-10 px-3 rounded-md border border-black/10 dark:border-white/10 bg-transparent" placeholder="Имя" />
            <input className="h-10 px-3 rounded-md border border-black/10 dark:border-white/10 bg-transparent" placeholder="Email" />
            <textarea className="min-h-28 p-3 rounded-md border border-black/10 dark:border-white/10 bg-transparent" placeholder="Сообщение" />
            <Button className="justify-self-start">Отправить</Button>
          </form>
        </Reveal>
      </div>
    </div>
  );
}


