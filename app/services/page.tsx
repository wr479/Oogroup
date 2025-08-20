import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
      <Reveal>
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">Услуги</h1>
      </Reveal>
      <Reveal delay={0.05} className="text-foreground/80 mb-10 max-w-2xl">
        Мы предоставляем полный цикл услуг — от предпроектной подготовки до сдачи объекта и последующего обслуживания.
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { title: "Проектирование", desc: "Архитектурные и инженерные решения любой сложности." },
          { title: "Строительство", desc: "Полный цикл генерального подряда и технадзора." },
          { title: "Консалтинг", desc: "Снижение рисков и оптимизация бюджета проекта." },
          { title: "Авторский надзор", desc: "Контроль качества и соответствия проекту." },
          { title: "Сметы и планирование", desc: "Планирование сроков, затрат и ресурсов." },
          { title: "Эксплуатация", desc: "Сервис и поддержка объектов после ввода." },
        ].map((s, i) => (
          <Reveal key={s.title} delay={0.04 * i} className="rounded-lg border border-black/10 dark:border-white/10 p-6 hover:-translate-y-0.5 hover:shadow-sm transition-transform">
            <div className="h-10 w-10 rounded-md bg-foreground/10 mb-4" />
            <div className="font-medium mb-2">{s.title}</div>
            <p className="text-sm text-foreground/70 mb-4">{s.desc}</p>
            <Button variant="ghost" className="px-0">Подробнее →</Button>
          </Reveal>
        ))}
      </div>
    </div>
  );
}


