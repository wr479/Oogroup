import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import Image from "next/image";
import { HeroSection } from "@/components/site/hero-section";

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col bg-background">
      <main className="flex-1">
        <HeroSection />

        {/* Первый блок - Преимущества */}
        <section className="relative py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <Reveal>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 bg-clip-text text-transparent mb-6">
                  Преимущества работы с нами
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  Мы создаем инновационные решения, которые помогают вашему бизнесу расти и развиваться
                </p>
              </Reveal>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Левый блок - Быстрый ответ */}
              <Reveal className="space-y-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-red-600 uppercase tracking-wider">МЫ БЫСТРО ОТВЕЧАЕМ</div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Молниеносная скорость</h3>
                  </div>
                </div>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Наша команда профессионалов работает с современными технологиями и методологиями, 
                  обеспечивая высокое качество и соблюдение всех сроков выполнения проектов.
                </p>
                
                <div className="flex items-baseline gap-4">
                  <span className="text-6xl font-black text-red-500">98%</span>
                  <span className="text-lg text-slate-500 dark:text-slate-400">клиентов довольны скоростью</span>
                </div>
                
                <div className="flex gap-4">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl">
                    Узнать больше
                  </Button>
                  <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 rounded-xl">
                    Детали
                  </Button>
                </div>
              </Reveal>

              {/* Правый блок - Визуальные элементы */}
              <Reveal delay={0.2} className="relative">
                <div className="relative aspect-square max-w-lg mx-auto">
                  {/* Основной градиентный круг */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 via-pink-500/30 to-red-600/20 rounded-full blur-3xl"></div>
                  
                  {/* Красная фигура */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-500/80 to-pink-600/60 rounded-tl-full transform translate-x-8 -translate-y-8 shadow-2xl"></div>
                  
                  {/* Белые карточки */}
                  <div className="absolute top-16 right-32 w-32 h-24 bg-white rounded-2xl shadow-2xl border border-gray-100 transform rotate-12"></div>
                  <div className="absolute top-32 right-16 w-24 h-20 bg-white rounded-xl shadow-xl border border-gray-100 transform -rotate-6"></div>
                  
                  {/* Дополнительные элементы */}
                  <div className="absolute bottom-16 left-8 w-20 h-20 bg-gradient-to-br from-blue-400/40 to-cyan-500/40 rounded-full blur-xl"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"></div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Второй блок - Качество */}
        <section className="relative py-24 bg-gradient-to-bl from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20">
          <div className="absolute inset-0 bg-dots-pattern opacity-5"></div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Левый блок - Визуальные элементы */}
              <Reveal className="relative order-2 lg:order-1">
                <div className="relative aspect-square max-w-lg mx-auto">
                  {/* Основной градиентный круг */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-teal-500/30 to-green-600/20 rounded-full blur-3xl"></div>
                  
                  {/* Зеленая фигура */}
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-emerald-500/80 to-teal-600/60 rounded-bl-full transform -translate-x-8 translate-y-8 shadow-2xl"></div>
                  
                  {/* Белые карточки */}
                  <div className="absolute bottom-16 left-32 w-32 h-24 bg-white rounded-2xl shadow-2xl border border-gray-100 transform -rotate-12"></div>
                  <div className="absolute bottom-32 left-16 w-24 h-20 bg-white rounded-xl shadow-xl border border-gray-100 transform rotate-6"></div>
                  
                  {/* Дополнительные элементы */}
                  <div className="absolute top-16 right-8 w-20 h-20 bg-gradient-to-br from-emerald-400/40 to-teal-500/40 rounded-full blur-xl"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 rounded-full blur-2xl"></div>
                </div>
              </Reveal>

              {/* Правый блок - Качество */}
              <Reveal delay={0.2} className="space-y-8 order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">ГАРАНТИЯ КАЧЕСТВА</div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Высокие стандарты</h3>
                  </div>
                </div>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Мы придерживаемся строгих стандартов качества на всех этапах работы. 
                  От проектирования до реализации - каждый проект выполняется с максимальным вниманием к деталям.
                </p>
                
                <div className="flex items-baseline gap-4">
                  <span className="text-6xl font-black text-emerald-500">100%</span>
                  <span className="text-lg text-slate-500 dark:text-slate-400">гарантия качества</span>
                </div>
                
                <div className="flex gap-4">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl">
                    Начать проект
                  </Button>
                  <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 rounded-xl">
                    Портфолио
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Остальные секции остаются без изменений */}
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
