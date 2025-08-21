import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { HeroSection } from "@/components/site/hero-section";
import PlasmaAnimation from "@/components/ui/gradient";

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col bg-background">
      <main className="flex-1">
        <HeroSection />

        {/* Первый блок - Преимущества */}
        <section className="relative py-14 sm:py-18 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-14 md:mb-20">
              <Reveal>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 bg-clip-text text-transparent mb-4 sm:mb-6">
                  Преимущества работы с нами
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  Мы создаем инновационные решения, которые помогают вашему бизнесу расти и развиваться
                </p>
              </Reveal>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 md:gap-16 items-center">
              {/* Левый блок - Быстрый ответ */}
              <Reveal className="space-y-6 sm:space-y-8">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-red-600 uppercase tracking-wider">МЫ БЫСТРО ОТВЕЧАЕМ</div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Молниеносная скорость</h3>
                  </div>
                </div>
                
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Наша команда профессионалов работает с современными технологиями и методологиями, 
                  обеспечивая высокое качество и соблюдение всех сроков выполнения проектов.
                </p>
                
                <div className="flex items-baseline gap-3 sm:gap-4">
                  <span className="text-4xl sm:text-5xl md:text-6xl font-black text-red-500">98%</span>
                  <span className="text-sm sm:text-base md:text-lg text-slate-500 dark:text-slate-400">клиентов довольны скоростью</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-7 sm:px-8 py-3 rounded-xl">
                    Узнать больше
                  </Button>
                  <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-7 sm:px-8 py-3 rounded-xl">
                    Детали
                  </Button>
                </div>
              </Reveal>

              {/* Правый блок - Визуальные элементы */}
              <Reveal delay={0.2} className="relative">
                <div className="relative aspect-square max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                  {/* Основной градиентный круг */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 via-pink-500/30 to-red-600/20 rounded-full blur-2xl sm:blur-3xl"></div>
                  
                  {/* Красная фигура */}
                  <div className="absolute top-0 right-0 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gradient-to-br from-red-500/80 to-pink-600/60 rounded-tl-full transform translate-x-4 sm:translate-x-8 -translate-y-6 sm:-translate-y-8 shadow-2xl"></div>
                  
                  {/* Белые карточки */}
                  <div className="absolute top-10 sm:top-16 right-20 sm:right-32 w-24 sm:w-32 h-20 sm:h-24 bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-gray-100 transform rotate-12"></div>
                  <div className="absolute top-24 sm:top-32 right-8 sm:right-16 w-20 sm:w-24 h-16 sm:h-20 bg-white rounded-lg sm:rounded-xl shadow-xl border border-gray-100 transform -rotate-6"></div>
                  
                  {/* Дополнительные элементы */}
                  <div className="absolute bottom-10 sm:bottom-16 left-6 sm:left-8 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-blue-400/40 to-cyan-500/40 rounded-full blur-lg sm:blur-xl"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl sm:blur-2xl"></div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Второй блок - Качество */}
        <section className="relative py-14 sm:py-18 md:py-24 bg-gradient-to-bl from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20">
          <div className="absolute inset-0 bg-dots-pattern opacity-5"></div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 md:gap-16 items-center">
              {/* Левый блок - Визуальные элементы */}
              <Reveal className="relative order-2 lg:order-1">
                <div className="relative aspect-square max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                  {/* Основной градиентный круг */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-teal-500/30 to-green-600/20 rounded-full blur-2xl sm:blur-3xl"></div>
                  
                  {/* Зеленая фигура */}
                  <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gradient-to-tr from-emerald-500/80 to-teal-600/60 rounded-bl-full transform -translate-x-4 sm:-translate-x-8 translate-y-6 sm:translate-y-8 shadow-2xl"></div>
                  
                  {/* Белые карточки */}
                  <div className="absolute bottom-10 sm:bottom-16 left-20 sm:left-32 w-24 sm:w-32 h-20 sm:h-24 bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-gray-100 transform -rotate-12"></div>
                  <div className="absolute bottom-24 sm:bottom-32 left-10 sm:left-16 w-20 sm:w-24 h-16 sm:h-20 bg-white rounded-lg sm:rounded-xl shadow-xl border border-gray-100 transform rotate-6"></div>
                  
                  {/* Дополнительные элементы */}
                  <div className="absolute top-10 sm:top-16 right-6 sm:right-8 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-emerald-400/40 to-teal-500/40 rounded-full blur-lg sm:blur-xl"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 rounded-full blur-xl sm:blur-2xl"></div>
                </div>
              </Reveal>

              {/* Правый блок - Качество */}
              <Reveal delay={0.2} className="space-y-6 sm:space-y-8 order-1 lg:order-2">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-emerald-600 uppercase tracking-wider">ГАРАНТИЯ КАЧЕСТВА</div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Высокие стандарты</h3>
                  </div>
                </div>
                
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Мы придерживаемся строгих стандартов качества на всех этапах работы. 
                  От проектирования до реализации - каждый проект выполняется с максимальным вниманием к деталям.
                </p>
                
                <div className="flex items-baseline gap-3 sm:gap-4">
                  <span className="text-4xl sm:text-5xl md:text-6xl font-black text-emerald-500">100%</span>
                  <span className="text-sm sm:text-base md:text-lg text-slate-500 dark:text-slate-400">гарантия качества</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-7 sm:px-8 py-3 rounded-xl">
                    Начать проект
                  </Button>
                  <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-7 sm:px-8 py-3 rounded-xl">
                    Портфолио
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        

        <section id="contacts" className="border-t border-black/10 dark:border-white/10 bg-[rgba(10, 37, 64, 0.05)] w-full" >
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-14 md:py-20">
            <Reveal className="rounded-2xl border-2 border-blue-200/60 dark:border-white/10 bg-white dark:bg-slate-900 p-6 sm:p-8 md:p-10 shadow-sm">
              <div className="max-w-4xl mx-auto text-center mb-8 md:mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Хотите с нами работать?</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Ojok Group — это больше чем работа. Это сообщество профессионалов, где ценят ваше время, комфорт и стремление к росту.
                  Мы создали среду, где удалённая работа становится преимуществом, а не ограничением. Присоединяйтесь к нам и убедитесь сами!
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-10">
                <div>
                  <div className="text-center md:text-left text-xs font-semibold tracking-wider uppercase text-slate-700 dark:text-slate-200 mb-3">МЫ ПРЕДЛАГАЕМ</div>
                  <ul className="space-y-3 md:space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 w-4 h-4 rounded-sm border-2 border-slate-300 bg-slate-100"></span>
                      <span className="text-slate-800 dark:text-slate-200">ОФИЦИАЛЬНОЕ ТРУДОУСТРОЙСТВО С ПЕРВОГО ДНЯ</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 w-4 h-4 rounded-sm border-2 border-slate-300 bg-slate-100"></span>
                      <span className="text-slate-800 dark:text-slate-200">100% УДАЛЁННЫЙ ФОРМАТ ИЗ ЛЮБОГО ГОРОДА РОССИИ</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 w-4 h-4 rounded-sm border-2 border-slate-300 bg-slate-100"></span>
                      <span className="text-slate-800 dark:text-slate-200">ЗАРПЛАТА 35 000 — 40 000₽ С ПЕРЕСМОТРОМ КАЖДЫЕ 3 МЕСЯЦА</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="text-center md:text-left text-xs font-semibold tracking-wider uppercase text-slate-700 dark:text-slate-200 mb-3">КОГО МЫ ИЩЕМ</div>
                  <ul className="space-y-3 md:space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 w-4 h-4 rounded-sm border-2 border-slate-300 bg-slate-100"></span>
                      <span className="text-slate-800 dark:text-slate-200">ОПЫТ В СЕРВИСЕ ИЛИ ПРОДАЖАХ</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 w-4 h-4 rounded-sm border-2 border-slate-300 bg-slate-100"></span>
                      <span className="text-slate-800 dark:text-slate-200">ГОТОВНОСТЬ ПОМОГАТЬ ЛЮДЯМ И РЕШАТЬ ИХ ЗАДАЧИ</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 w-4 h-4 rounded-sm border-2 border-slate-300 bg-slate-100"></span>
                      <span className="text-slate-800 dark:text-slate-200">КОМАНДНЫХ ИГРОКОВ С АКТИВНОЙ ЖИЗНЕННОЙ ПОЗИЦИЕЙ</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-center">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl">
                  Посмотреть вакансии
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}
