"use client";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { HeroSection } from "@/components/site/hero-section";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Shield, Zap, Users, Settings } from "lucide-react";

export default function Home() {
  const [activeAdvantageIndex, setActiveAdvantageIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);
  const [imageSlide, setImageSlide] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);

  // Массив преимуществ с изображениями и цветами для фоновых иллюстраций
  const advantages = [
    {
      id: "reliability",
      image: "/laptop/1.png",
      title: "Финансы и стабильность",
      bgColor: "rgba(124, 58, 237, 0.18)" // Фиолетовый
    },
    {
      id: "freedom",
      image: "/laptop/2.png", 
      title: "Свобода выбора и комфорт",
      bgColor: "rgba(34, 197, 94, 0.16)" // Зеленый
    },
    {
      id: "development",
      image: "/laptop/3.png",
      title: "Растите вместе с нами",
      bgColor: "rgba(59, 130, 246, 0.18)" // Синий
    },
    {
      id: "technology",
      image: "/laptop/4.png",
      title: "Всё понятно и удобно",
      bgColor: "rgba(236, 72, 153, 0.16)" // Розовый
    }
  ];

  useEffect(() => {
    // Устанавливаем флаг инициализации после первого рендера
    // И устанавливаем правильное начальное изображение
    setIsInitialized(true);
    
    // Убеждаемся, что первое изображение отображается без анимации
    setImageOpacity(1);
    setImageSlide(0);
  }, []);

  useEffect(() => {
    // Не выполняем логику скролла до инициализации
    if (!isInitialized) return;

    const handleScroll = () => {
      // Определяем, какой блок преимуществ сейчас в поле зрения
      const advantageSections = document.querySelectorAll('[data-advantage-section]');
      let currentIndex = activeAdvantageIndex; // Начинаем с текущего индекса
      
      advantageSections.forEach((section, index) => {
        const sectionRect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Секция активна, если она находится в центре экрана
        // Используем более точную логику без перескакиваний
        const sectionCenter = sectionRect.top + sectionRect.height / 2;
        const viewportCenter = windowHeight / 2;
        
        // Если центр секции находится в центре экрана с небольшим допуском
        // И эта секция ближе к центру, чем текущая активная
        if (Math.abs(sectionCenter - viewportCenter) < windowHeight * 0.25) {
          const currentSection = advantageSections[activeAdvantageIndex];
          if (currentSection) {
            const currentSectionRect = currentSection.getBoundingClientRect();
            const currentSectionCenter = currentSectionRect.top + currentSectionRect.height / 2;
            
            // Переключаемся только если новая секция действительно ближе к центру
            if (Math.abs(sectionCenter - viewportCenter) < Math.abs(currentSectionCenter - viewportCenter)) {
              currentIndex = index;
            }
          } else {
            currentIndex = index;
          }
        }
      });
      
      // Проверяем, что индекс действительно изменился и валиден
      if (currentIndex !== activeAdvantageIndex && currentIndex >= 0 && currentIndex < advantages.length) {
        // Slide анимация смены изображения
        setImageOpacity(0);
        setImageSlide(-50); // Сдвигаем влево
        
        setTimeout(() => {
          setActiveAdvantageIndex(currentIndex);
          setImageSlide(50); // Новое изображение появляется справа
          
          setTimeout(() => {
            setImageOpacity(1);
            setImageSlide(0); // Возвращаем в центр
          }, 100);
        }, 200);
      }
    };

    // Добавляем throttling для лучшей производительности
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll);
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [activeAdvantageIndex, advantages.length, isInitialized]);

  return (
    <div className="min-h-dvh flex flex-col bg-background">
      <main className="flex-1">
        <HeroSection 
          title="Ваша новая работа ждет здесь"
          description="Присоединяйтесь к команде Ojok Group — лидеру в сфере удалённых контакт-центров! Мы предлагаем не просто работу, а карьеру с ежедневной поддержкой, бесплатным обучением и гарантированным доходом до 40 000₽ уже в первый месяц. Забудьте о часах в пробках — ваше рабочее место там, где есть интернет."
          primaryButtonText="Оставить заявку"
          secondaryButtonText="Посмотреть вакансии"
          primaryButtonHref="#contact"
          secondaryButtonHref="/vacancies"
          heroImage="/hero-main.png"
          mobileImage="/hero-main-mobile.png"
          heroImageAlt="Фоновое изображение"
          mobileImageAlt="Мобильное приложение"
        />
        
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
                <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold leading-tight text-slate-900 dark:text-white mb-8 font-serif">Преимущества работы с нами</h2>
              </Reveal>
              <div className="flex justify-start items-center gap-4 md:gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-slate-400" />
                  <span className="text-sm md:text-base font-semibold uppercase text-slate-900 dark:text-white">НАДЕЖНОСТЬ</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-slate-400" />
                  <span className="text-sm md:text-base font-semibold uppercase text-slate-900 dark:text-white">ФОРМАТ И СВОБОДА</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-slate-400" />
                  <span className="text-sm md:text-base font-semibold uppercase text-slate-900 dark:text-white">РАЗВИТИЕ И ПОДДЕРЖКА</span>
                </div>  
                <div className="flex items-center gap-2">
                  <Settings className="w-4 h-4 text-slate-400" />
                  <span className="text-sm md:text-base font-semibold uppercase text-slate-900 dark:text-white">ТЕХНОЛОГИИ И ПРОСТОТА</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Секция преимуществ с sticky изображением */}
        <div className="relative flex flex-row-reverse min-h-screen mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" style={{ '--sticky-top': '8rem' } as React.CSSProperties}>
          {/* Sticky изображение справа */}
          <div className="lg:block hidden relative lg:right-0 lg:top-0 lg:w-1/2 lg:pl-8">
            <div 
              className="sticky w-full max-w-lg mx-auto flex items-center justify-center"
              style={{ 
                position: 'sticky',
                top: 'var(--sticky-top)',
                height: 'fit-content',
                zIndex: 10
              }}
            >
              <div className="relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 rounded-xl shadow-2xl overflow-hidden border border-black/5 backdrop-blur-sm">
                {/* Фоновая иллюстрация в стиле Slack */}
                <div 
                  className="absolute inset-0 z-0"
                  style={{
                    background: `
                      radial-gradient(50% 60% at 70% 40%, ${advantages[activeAdvantageIndex].bgColor}, transparent 60%),
                      radial-gradient(60% 70% at 40% 70%, ${advantages[activeAdvantageIndex].bgColor}, transparent 65%),
                      radial-gradient(55% 65% at 60% 60%, ${advantages[activeAdvantageIndex].bgColor}, transparent 60%)
                    `,
                    filter: 'blur(30px)',
                    borderRadius: '60% 40% 50% 50% / 60% 50% 40% 50%',
                    transform: 'rotate(-8deg) translateY(10px)'
                  }}
                />
                
                <Image
                  src={advantages[activeAdvantageIndex].image}
                  alt={advantages[activeAdvantageIndex].title}
                  width={800}
                  height={600}
                  className="w-full h-auto transition-all duration-500 ease-out relative z-10"
                  style={{ 
                    opacity: imageOpacity,
                    transform: `translateY(${imageSlide}px)`,
                  }}
                  priority
                />
                
                {/* Красивая рамка с градиентом */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none z-20" />
              </div>
            </div>
          </div>

          {/* Блоки преимуществ слева */}
          <div className="lg:w-1/2 space-y-16 lg:space-y-24">
            {/* Преимущества – 1 */}
            <section data-advantage-section="reliability" className="relative py-12 md:py-16">
              <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <Reveal className="space-y-4 md:space-y-5">
                  <div className="text-[12px] md:text-sm font-semibold tracking-[.15em] uppercase text-slate-500">НАДЕЖНОСТЬ</div>
                  <h3 className="text-[24px] sm:text-2xl md:text-[30px] font-bold leading-snug text-slate-900 dark:text-white font-serif">Финансы и стабильность</h3>
                  <p className="text-[15px] md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    Финансовая стабильность — это фундамент. Мы гарантируем официальное оформление,
                    своевременные выплаты и прозрачные условия. У нас регулярно проходят пересмотры дохода —
                    стабильный доход уже в первый месяц работы.
                  </p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl md:text-5xl font-black text-red-600">65%</span>
                    <span className="text-sm md:text-base text-slate-500">Описание</span>
                  </div>
                </Reveal>
              </div>
            </section>

            {/* Преимущества – 2 */}
            <section data-advantage-section="freedom" className="relative py-12 md:py-16">
              <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <Reveal className="space-y-4 md:space-y-5">
                  <div className="text-[12px] md:text-sm font-semibold tracking-[.15em] uppercase text-slate-500">ФОРМАТ И СВОБОДА</div>
                  <h3 className="text-[24px] sm:text-2xl md:text-[30px] font-bold leading-snug text-slate-900 dark:text-white font-serif">Свобода выбора и комфорт</h3>
                  <p className="text-[15px] md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    Работайте из офиса, дома или любимого кафе — мы за свободу выбора и заботимся о вашем комфорте.
                    Гибкий график и поддержка наставников помогают сочетать работу с учёбой или личными делами.
                  </p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl md:text-5xl font-black text-red-600">100%</span>
                    <span className="text-sm md:text-base text-slate-500">Удобный формат</span>
                  </div>
                </Reveal>
              </div>
            </section>

            {/* Преимущества – 3 */}
            <section data-advantage-section="development" className="relative py-12 md:py-16">
              <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <Reveal className="space-y-4 md:space-y-5">
                  <div className="text-[12px] md:text-sm font-semibold tracking-[.15em] uppercase text-slate-500">РАЗВИТИЕ И ПОДДЕРЖКА</div>
                  <h3 className="text-[24px] sm:text-2xl md:text-[30px] font-bold leading-snug text-slate-900 dark:text-white font-serif">Растите вместе с нами</h3>
                  <p className="text-[15px] md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    Бесплатное обучение, наставники и понятный карьерный рост. За 3 месяца можно вырасти
                    до позиции наставника, а дальше — в руководителя направления.
                  </p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl md:text-5xl font-black text-red-600">42 500₽</span>
                    <span className="text-sm md:text-base text-slate-500">Средняя зарплата по компаниям</span>
                  </div>
                </Reveal>
              </div>
            </section>

            {/* Преимущества – 4 */}
            <section data-advantage-section="technology" className="relative py-12 md:py-16">
              <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <Reveal className="space-y-4 md:space-y-5">
                  <div className="text-[12px] md:text-sm font-semibold tracking-[.15em] uppercase text-slate-500">ТЕХНОЛОГИИ И ПРОСТОТА</div>
                  <h3 className="text-[24px] sm:text-2xl md:text-[30px] font-bold leading-snug text-slate-900 dark:text-white font-serif">Всё понятно и удобно</h3>
                  <p className="text-[15px] md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    Мы используем современные инструменты и надёжные программы. Поддержка 24/7,
                    быстрый онбординг и понятные инструкции — чтобы вы уверенно чувствовали себя в работе.
                  </p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl md:text-5xl font-black text-red-600">5 мин</span>
                    <span className="text-sm md:text-base text-slate-500">Ответ поддержки</span>
                  </div>
                </Reveal>
              </div>
            </section>
          </div>
        </div>

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
                      <span className="mt-2 w-2 h-2 rounded-full bg-red-500 flex-shrink-0"></span>
                      <span className="text-slate-800 dark:text-slate-200">ОФИЦИАЛЬНОЕ ТРУДОУСТРОЙСТВО С ПЕРВОГО ДНЯ</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-red-500 flex-shrink-0"></span>
                      <span className="text-slate-800 dark:text-slate-200">100% УДАЛЁННЫЙ ФОРМАТ ИЗ ЛЮБОГО ГОРОДА РОССИИ</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-red-500 flex-shrink-0"></span>
                      <span className="text-slate-800 dark:text-slate-200">ЗАРПЛАТА 35 000 — 40 000₽ С ПЕРЕСМОТРОМ КАЖДЫЕ 3 МЕСЯЦА</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="text-center md:text-left text-xs font-semibold tracking-wider uppercase text-slate-700 dark:text-slate-200 mb-3">КОГО МЫ ИЩЕМ</div>
                  <ul className="space-y-3 md:space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-red-500 flex-shrink-0"></span>
                      <span className="text-slate-800 dark:text-slate-200">ОПЫТ В СЕРВИСЕ ИЛИ ПРОДАЖАХ</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-red-500 flex-shrink-0"></span>
                      <span className="text-slate-800 dark:text-slate-200">ГОТОВНОСТЬ ПОМОГАТЬ ЛЮДЯМ И РЕШАТЬ ИХ ЗАДАЧИ</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-red-500 flex-shrink-0"></span>
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
