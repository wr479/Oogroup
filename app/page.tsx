import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { HeroSection } from "@/components/site/hero-section";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col bg-background">
      <main className="flex-1">
        <HeroSection />
        
        {/* Полоса логотипов партнёров */}
        <section className="py-10 md:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 items-center opacity-80 grayscale">
                <Image src="/company/1.png" alt="Лого" width={120} height={40} className="mx-auto h-full w-auto" />
                <Image src="/company/2.png" alt="Лого" width={120} height={40} className="mx-auto h-full w-auto" />
                <Image src="/company/3.png" alt="Лого" width={120} height={40} className="mx-auto h-full w-auto" />
                <Image src="/company/3.png" alt="Лого" width={120} height={40} className="mx-auto h-full w-auto" />
                <Image src="/company/1.png" alt="Лого" width={120} height={40} className="mx-auto h-full w-auto" />
                <Image src="/company/2.png" alt="Лого" width={120} height={40} className="mx-auto h-full w-auto" />
                <Image src="/company/3.png" alt="Лого" width={120} height={40} className="mx-auto h-full w-auto" />
                <Image src="/company/3.png" alt="Лого" width={120} height={40} className="mx-auto h-full w-auto" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Заголовок блока преимуществ */}
        <section className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-left">
              <Reveal>
                <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold leading-tight text-slate-900 dark:text-white mb-8">Преимущества работы с нами</h2>
              </Reveal>
              <div className="flex justify-start items-center gap-4 md:gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-slate-300 "></div>
                  <span className="text-sm md:text-base font-semibold uppercase text-slate-900 dark:text-white">НАДЕЖНОСТЬ</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-slate-300 "></div>
                  <span className="text-sm md:text-base font-semibold uppercase text-slate-900 dark:text-white">ФОРМАТ И СВОБОДА</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-slate-300 "></div>
                  <span className="text-sm md:text-base font-semibold uppercase text-slate-900 dark:text-white">РАЗВИТИЕ И ПОДДЕРЖКА</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-slate-300 "></div>
                  <span className="text-sm md:text-base font-semibold uppercase text-slate-900 dark:text-white">ТЕХНОЛОГИИ И ПРОСТОТА</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Преимущества – 1 */}
        <section className="relative py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            <Reveal className="space-y-3 md:space-y-4">
              <div className="text-[11px] md:text-xs font-semibold tracking-[.15em] uppercase text-slate-500">НАДЕЖНОСТЬ</div>
              <h3 className="text-[22px] sm:text-2xl md:text-[28px] font-bold leading-snug text-slate-900 dark:text-white">Финансы и стабильность</h3>
              <p className="text-[14px] md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                Финансовая стабильность — это фундамент. Мы гарантируем официальное оформление,
                своевременные выплаты и прозрачные условия. У нас регулярно проходят пересмотры дохода —
                стабильный доход уже в первый месяц работы.
              </p>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl md:text-5xl font-black text-red-600">65%</span>
                <span className="text-sm md:text-base text-slate-500">Описание</span>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-red-600 rounded-l-full" aria-hidden="true"></div>
              <div className="relative ml-8 md:ml-12 bg-white dark:bg-slate-900 rounded-xl shadow-xl overflow-hidden border border-black/5">
                <Image src="/laptop/1.png" alt="Иллюстрация" width={720} height={480} className="w-full h-auto" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Преимущества – 2 */}
        <section className="relative py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            <Reveal className="space-y-3 md:space-y-4">
              <div className="text-[11px] md:text-xs font-semibold tracking-[.15em] uppercase text-slate-500">ФОРМАТ И СВОБОДА</div>
              <h3 className="text-[22px] sm:text-2xl md:text-[28px] font-bold leading-snug text-slate-900 dark:text-white">Свобода выбора и комфорт</h3>
              <p className="text-[14px] md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                Работайте из офиса, дома или любимого кафе — мы за свободу выбора и заботимся о вашем комфорте.
                Гибкий график и поддержка наставников помогают сочетать работу с учёбой или личными делами.
              </p>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl md:text-5xl font-black text-red-600">100%</span>
                <span className="text-sm md:text-base text-slate-500">Удобный формат</span>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-red-600 rounded-l-full" aria-hidden="true"></div>
              <div className="relative ml-8 md:ml-12 bg-white dark:bg-slate-900 rounded-xl shadow-xl overflow-hidden border border-black/5">
              <Image src="/laptop/2.png" alt="Иллюстрация" width={720} height={480} className="w-full h-auto" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Преимущества – 3 */}
        <section className="relative py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            <Reveal className="space-y-3 md:space-y-4">
              <div className="text-[11px] md:text-xs font-semibold tracking-[.15em] uppercase text-slate-500">РАЗВИТИЕ И ПОДДЕРЖКА</div>
              <h3 className="text-[22px] sm:text-2xl md:text-[28px] font-bold leading-snug text-slate-900 dark:text-white">Растите вместе с нами</h3>
              <p className="text-[14px] md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                Бесплатное обучение, наставники и понятный карьерный рост. За 3 месяца можно вырасти
                до позиции наставника, а дальше — в руководителя направления.
              </p>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl md:text-5xl font-black text-red-600">42 500₽</span>
                <span className="text-sm md:text-base text-slate-500">Средняя зарплата по компаниям</span>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-red-600 rounded-l-full" aria-hidden="true"></div>
              <div className="relative ml-8 md:ml-12 bg-white dark:bg-slate-900 rounded-xl shadow-xl overflow-hidden border border-black/5">
              <Image src="/laptop/3.png" alt="Иллюстрация" width={720} height={480} className="w-full h-auto" />

              </div>
            </Reveal>
          </div>
        </section>

        {/* Преимущества – 4 */}
        <section className="relative py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            <Reveal className="space-y-3 md:space-y-4">
              <div className="text-[11px] md:text-xs font-semibold tracking-[.15em] uppercase text-slate-500">ТЕХНОЛОГИИ И ПРОСТОТА</div>
              <h3 className="text-[22px] sm:text-2xl md:text-[28px] font-bold leading-snug text-slate-900 dark:text-white">Всё понятно и удобно</h3>
              <p className="text-[14px] md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                Мы используем современные инструменты и надёжные программы. Поддержка 24/7,
                быстрый онбординг и понятные инструкции — чтобы вы уверенно чувствовали себя в работе.
              </p>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl md:text-5xl font-black text-red-600">5 мин</span>
                <span className="text-sm md:text-base text-slate-500">Ответ поддержки</span>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-red-600 rounded-l-full" aria-hidden
              ="true"></div>
              <div className="relative ml-8 md:ml-12 bg-white dark:bg-slate-900 rounded-xl shadow-xl overflow-hidden border border-black/5">
                <Image src="/laptop/4.png" alt="Иллюстрация" width={720} height={480} className="w-full h-auto" />

              </div>
            </Reveal>
          </div>
        </section>

        {/* Финальный блок CTA */}
        <section id="contacts" className="border-t border-black/10 dark:border-white/10 bg-[rgba(10, 37, 64, 0.05)] w-full">
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
