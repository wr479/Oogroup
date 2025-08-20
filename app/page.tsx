import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import Image from "next/image";
import { HeroSection } from "@/components/site/hero-section";

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col bg-background">
      <main className="flex-1">
        <HeroSection />

        <section id="advantages" className="border-t border-black/10 dark:border-white/10">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-14 md:py-20">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-semibold mb-8">Преимущества работы с нами</h2>
            </Reveal>
            <div className="space-y-20">
              {/* Блок 1: МЫ БЫСТРО ОТВЕЧАЕМ */}
              <Reveal className="grid items-center gap-12 md:grid-cols-2">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-foreground/10 rounded-lg flex items-center justify-center">
                      <span className="text-lg">⚡</span>
                    </div>
                    <div className="text-xs font-medium text-foreground/60 uppercase tracking-wider">МЫ БЫСТРО ОТВЕЧАЕМ</div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground">Описание</h3>
                  <p className="text-base text-foreground/70 leading-relaxed max-w-md">
                    Сплоченная команда профессионалов с современной методологией разработки. Мы обеспечиваем высокое качество и соблюдение сроков выполнения всех проектов.
                  </p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-bold text-red-500">12%</span>
                    <span className="text-sm text-foreground/60">Описание</span>
                  </div>
                </div>
                <div className="relative aspect-[4/3]">
                  {/* Красная фигура как на скрине */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-red-400/30 to-red-600/20 rounded-tl-full transform translate-x-8 -translate-y-8"></div>
                  {/* Белый прямоугольник с тенью */}
                  <div className="absolute top-12 right-24 w-24 h-20 bg-white rounded-xl shadow-2xl border border-gray-100"></div>
                </div>
              </Reveal>

              {/* Блок 2: НАЗВАНИЕ */}
              <Reveal delay={0.1} className="grid items-center gap-12 md:grid-cols-2">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-foreground/10 rounded-lg flex items-center justify-center">
                      <span className="text-lg">📋</span>
                    </div>
                    <div className="text-xs font-medium text-foreground/60 uppercase tracking-wider">НАЗВАНИЕ</div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground">Описание</h3>
                  <p className="text-base text-foreground/70 leading-relaxed max-w-md">
                    Чёткие сроки, прозрачные процессы и высокие стандарты качества. Полный цикл — от проектирования до эксплуатации.
                  </p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-bold text-green-500">12%</span>
                    <span className="text-sm text-foreground/60">Описание</span>
                  </div>
                </div>
                <div className="relative aspect-[4/3]">
                  {/* Зеленая фигура как на скрине */}
                  <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tr from-green-400/30 to-green-600/20 rounded-bl-full transform translate-x-8 translate-y-8"></div>
                  {/* Белый прямоугольник с тенью */}
                  <div className="absolute bottom-12 right-24 w-24 h-20 bg-white rounded-xl shadow-2xl border border-gray-100"></div>
                </div>
              </Reveal>
            </div>
          </div>
                </section>

        <section id="services" className="border-t border-black/10 dark:border-white/10">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-14 md:py-20">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-semibold mb-8">Услуги</h2>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Проектирование", Icon: "📐", description: "Архитектурные и инженерные решения любой сложности" },
                { title: "Строительство", Icon: "🏗️", description: "Полный цикл генерального подряда и технадзора" },
                { title: "Консалтинг", Icon: "💼", description: "Снижение рисков и оптимизация бюджета проекта" },
              ].map((item, i) => (
                <Reveal key={item.title} delay={0.05 * i} className="group rounded-lg border border-black/10 dark:border-white/10 p-6 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300 hover:border-foreground/20">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-foreground/10 group-hover:bg-foreground/20 transition-colors">
                    <span className="text-2xl">{item.Icon}</span>
                  </div>
                  <h3 className="font-medium mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-black/10 dark:border-white/10">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-14 md:py-20">
            <div className="space-y-20">
              {/* Блок 1: МЫ БЫСТРО ОТВЕЧАЕМ */}
              <Reveal className="grid items-center gap-12 md:grid-cols-2">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-foreground/10 rounded-lg flex items-center justify-center">
                      <span className="text-lg">⚡</span>
                    </div>
                    <div className="text-xs font-medium text-foreground/60 uppercase tracking-wider">МЫ БЫСТРО ОТВЕЧАЕМ</div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground">Описание</h3>
                  <p className="text-base text-foreground/70 leading-relaxed max-w-md">
                    Сплоченная команда профессионалов с современной методологией разработки. Мы обеспечиваем высокое качество и соблюдение сроков выполнения всех проектов.
                  </p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-bold text-red-500">12%</span>
                    <span className="text-sm text-foreground/60">Описание</span>
                  </div>
                </div>
                <div className="relative aspect-[4/3]">
                  {/* Красная фигура как на скрине */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-red-400/30 to-red-600/20 rounded-tl-full transform translate-x-8 -translate-y-8"></div>
                  {/* Белый прямоугольник с тенью */}
                  <div className="absolute top-12 right-24 w-24 h-20 bg-white rounded-xl shadow-2xl border border-gray-100"></div>
                </div>
              </Reveal>

              {/* Блок 2: НАЗВАНИЕ */}
              <Reveal delay={0.1} className="grid items-center gap-12 md:grid-cols-2">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-foreground/10 rounded-lg flex items-center justify-center">
                      <span className="text-lg">📋</span>
                    </div>
                    <div className="text-xs font-medium text-foreground/60 uppercase tracking-wider">НАЗВАНИЕ</div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground">Описание</h3>
                  <p className="text-base text-foreground/70 leading-relaxed max-w-md">
                    Чёткие сроки, прозрачные процессы и высокие стандарты качества. Полный цикл — от проектирования до эксплуатации.
                  </p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-bold text-green-500">12%</span>
                    <span className="text-sm text-foreground/60">Описание</span>
                  </div>
                </div>
                <div className="relative aspect-[4/3]">
                  {/* Зеленая фигура как на скрине */}
                  <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tr from-green-400/30 to-green-600/20 rounded-bl-full transform translate-x-8 translate-y-8"></div>
                  {/* Белый прямоугольник с тенью */}
                  <div className="absolute bottom-12 right-24 w-24 h-20 bg-white rounded-xl shadow-2xl border border-gray-100"></div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="contacts" className="border-t border-black/10 dark:border-white/10">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-14 md:py-20">
            <Reveal className="rounded-xl border border-black/10 dark:border-white/10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xl md:text-2xl font-semibold">Готовы начать?</div>
                <p className="text-foreground/70">Свяжитесь с нами и получите индивидуальное предложение.</p>
              </div>
              <Button size="lg">Связаться</Button>
            </Reveal>
        </div>
        </section>
      </main>
    </div>
  );
}
