import { HeroSection } from "@/components/site/hero-section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-dvh flex flex-col bg-background">
      <main className="flex-1">
        {/* Hero Section согласно дизайну Figma */}
        <section className="relative w-full min-h-screen flex items-center overflow-hidden">
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
        </section>

        {/* Секция преимуществ согласно дизайну Figma */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              {/* Левая колонка - Достоинства */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Достоинства</h2>
                <div className="space-y-4">
                  {[
                    "Гибкость и адаптация",
                    "Полный цикл продаж", 
                    "Постоянное обучение",
                    "Индивидуальный подход",
                    "Доступные цены",
                    "Профессиональные команды продаж"
                  ].map((advantage, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-lg text-slate-700">{advantage}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Центральная колонка - Статистика */}
              <div className="text-center space-y-8">
                <div className="space-y-4">
                  <div className="text-6xl font-bold text-red-600">1000</div>
                  <p className="text-lg text-slate-600 max-w-xs mx-auto">
                    Более 1000 успешно реализованных проектов
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="text-6xl font-bold text-red-600">20%</div>
                  <p className="text-lg text-slate-600 max-w-xs mx-auto">
                    Снижение затрат на продажи на 20% благодаря собственной IT-платформе
                  </p>
                </div>
              </div>

              {/* Правая колонка - Цитата */}
              <div className="text-center lg:text-right">
                <div className="text-6xl text-red-200 mb-4">"</div>
                <blockquote className="text-xl text-slate-700 italic mb-4">
                  Успех — это не случайность, а результат систематической работы над достижением поставленных целей.
                </blockquote>
                <cite className="text-lg font-semibold text-slate-900">Ojok</cite>
              </div>
            </div>
          </div>
        </section>

        {/* Секция истории согласно дизайну Figma */}
        <section className="py-20 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Левая колонка - Изображение */}
              <div className="relative">
                <Image
                  src="/hero-main.png"
                  alt="Команда Ojok"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>

              {/* Правая колонка - Timeline */}
              <div className="space-y-8">
                <h2 className="text-4xl font-bold text-slate-900 mb-8">Наша история</h2>
                
                <div className="space-y-6">
                  {[
                    {
                      year: "2012",
                      title: "История компании Ojok: от стартапа к лидеру продаж в России",
                      description: "Основание компании и первые проекты в сфере аутсорсинга продаж"
                    },
                    {
                      year: "2013", 
                      title: "Ojok: эволюция успешного аутсорсинга продаж полного цикла",
                      description: "Развитие технологий и расширение клиентской базы"
                    },
                    {
                      year: "2014",
                      title: "Как Ojok стала одной из ведущих компаний в сфере аутсорсинга продаж",
                      description: "Выход на федеральный уровень и новые отраслевые решения"
                    },
                    {
                      year: "2015",
                      title: "Ojok — путь инноваций и развития в продажах по всей России",
                      description: "Внедрение собственной IT-платформы и автоматизация процессов"
                    },
                    {
                      year: "2016",
                      title: "Развитие Ojok: ключевые этапы становления компании и достижение успеха",
                      description: "Становление лидером отрасли и международное признание"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                          {item.year}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Секция миссии согласно дизайну Figma */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Левая колонка - Текст */}
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-slate-900 mb-8">Наша миссия</h2>
                
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  Создавать высокоэффективные команды продаж, которые фокусируются на систематических процессах, 
                  индивидуальных сценариях и глубоком понимании потребностей клиентов для достижения бизнес-целей.
                </p>
                
                <p className="text-lg text-slate-700 leading-relaxed">
                  Мы строим наши отношения на принципах честности, личной ответственности, прозрачности и 
                  нетрафаретном подходе. Мы не просто исполнители, мы партнеры наших клиентов.
                </p>
              </div>

              {/* Правая колонка - Изображение */}
              <div className="relative">
                <Image
                  src="/laptop/1.png"
                  alt="Команда за работой"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Секция ценностей согласно дизайну Figma */}
        <section className="py-20 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">Наши ценности</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Честность и личная ответственность",
                  description: "Мы обеспечиваем полную прозрачность, честность и личную ответственность каждого менеджера и сотрудника.",
                  image: "/laptop/2.png"
                },
                {
                  title: "Индивидуальный подход и экспертиза",
                  description: "Разрабатываем уникальную стратегию и сценарии продаж для каждого клиента, адаптированные под специфику продукта и рынка.",
                  image: "/laptop/3.png"
                },
                {
                  title: "Инновации и технологичность",
                  description: "Активно внедряем современные IT-решения для автоматизации процессов, контроля KPI и аналитики продаж.",
                  image: "/laptop/4.png"
                }
              ].map((value, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
                  <div className="mb-6">
                    <Image
                      src={value.image}
                      alt={value.title}
                      width={400}
                      height={250}
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Секция проектов согласно дизайну Figma */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">Проекты с которыми мы работали</h2>
            
            {/* Логотипы клиентов */}
            <div className="flex justify-center items-center space-x-12 mb-16">
              <div className="text-2xl font-bold text-slate-700">SKILLINE</div>
              <div className="text-2xl font-bold text-slate-700">контур</div>
              <div className="text-2xl font-bold text-slate-700">КРОК</div>
            </div>
            
            {/* Изображение и описание */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <Image
                  src="/laptop/1.png"
                  alt="Рабочий процесс"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Мы помогли организовать полноценный отдел продаж с индивидуальной воронкой продаж 
                  и скриптами звонков, что привело к увеличению конверсии и более быстрому закрытию сделок.
                </p>
                
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-xl">
                  Узнать больше
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


