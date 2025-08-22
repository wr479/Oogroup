"use client"
import { HeroSection } from "@/components/site/hero-section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import Image from "next/image";
import { useState } from "react";

export default function AboutPage() {
  const [openItem, setOpenItem] = useState(0); // По умолчанию открыт первый элемент
  const [activeProject, setActiveProject] = useState(0); // По умолчанию активен первый проект

  return (
    <div className="min-h-dvh flex flex-col bg-background">
      <main className="flex-1">
        {/* Hero Section согласно дизайну Figma */}
        <section className="relative w-full flex items-center overflow-hidden">
        <HeroSection 
          title="Ваша новая работа ждет здесь"
          description="Присоединяйтесь к команде Ojok Group — лидеру в сфере удалённых контакт-центров! Мы предлагаем не просто работу, а карьеру с ежедневной поддержкой, бесплатным обучением и гарантированным доходом до 40 000₽ уже в первый месяц. Забудьте о часах в пробках — ваше рабочее место там, где есть интернет."
          primaryButtonText="Оставить заявку"
          secondaryButtonText="Посмотреть вакансии"
          primaryButtonHref="#contact"
          secondaryButtonHref="/vacancies"
          heroImage="/about/1.png"
          mobileImage="/about/2.png"
          heroImageAlt="Фоновое изображение"
          mobileImageAlt="Мобильное приложение"
        />
        </section>

        {/* Секция преимуществ согласно дизайну Figma */}
        <section className="py-20" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-6 items-center">
              {/* Левая колонка - Достоинства */}
              <div className="bg-white rounded-xl p-4 shadow-lg h-full">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Достоинства</h2>
                <div className="flex flex-wrap gap-2.5">
               
                   <p className="bg-white border-2 border-[#0A2540] text-[#0A2540] px-2 py-1.5 rounded-full text-sm font-medium text-center">
                     Гибкость и адаптация
                   </p>
                   <p className="bg-white border-2 border-[#0A2540] text-[#0A2540] px-2 py-1.5 rounded-full text-sm font-medium text-center">
                     Постоянное обучение
                   </p>
                   
                 
                   <p className="bg-[#0A2540] text-white px-2 py-1.5 rounded-full text-base font-medium text-center">
                     Полный цикл продаж
                   </p>
                   <p className="bg-[#0A2540] text-white px-2 py-1.5 rounded-full text-base font-medium text-center">
                     Доступные цены
                   </p>
                   
                   {/* Нижний ряд */}
                     <p className="bg-white border-2 border-[#0A2540] text-[#0A2540] px-1.5 py-1.5 rounded-full text-base font-medium text-center">
                     Индивидуальный подход
                       
                     </p>
                  
                   <p className="bg-[#0A2540] text-white px-2 py-1.5 rounded-full text-base font-medium text-center">
                     Профессиональные команды продаж
                   </p>
                 </div>
              </div>

              {/* Центральная колонка - Статистика */}
              <div className=" text-left flex flex-col justify-between h-full">
                <div className="space-y-4 bg-[#0A2540] p-6 rounded-lg">
                  <div className="text-4xl font-bold text-white mb-0">1000</div>
                  <p className="text-sm text-white max-w-xs mx-auto">
                    Более 1000 успешно реализованных проектов
                  </p>
                </div>
                
                <div className="space-y-4 bg-white p-6 rounded-lg">
                  <div className="text-4xl font-bold text-[#0A2540] mb-0">20%</div>
                  <p className="text-sm text-[#0A2540] max-w-xs mx-auto">
                  Снижение затрат на продажи на 20% благодаря собственной IT-платформе
                  </p>
                </div>
              </div>

              {/* Правая колонка - Цитата */}
              <div className="bg-white rounded-xl p-6 shadow-lg text-left h-full">
                <div className="text-6xl text-[#0A2540] mb-4">"</div>
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
          <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">Наша история</h2>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                             {/* Левая колонка - Изображение */}
               <div className="relative">
                 <Image
                   src={[
                     "/hero-main.png",      // 2012
                     "/laptop/1.png",       // 2013
                     "/laptop/2.png",       // 2014
                     "/laptop/3.png",       // 2015
                     "/laptop/4.png"        // 2016
                   ][openItem >= 0 ? openItem : 0]}
                   alt="История компании Ojok"
                   width={600}
                   height={400}
                   className="w-full h-auto rounded-2xl shadow-2xl transition-all duration-500 ease-out"
                 />
               </div>

              {/* Правая колонка - Timeline */}
              <div className="space-y-8">
                
                
                                 <div className="space-y-6">
                   {[
                     {
                       year: "2012",
                       title: "История компании Ojok: от стартапа к лидеру продаж в России",
                       description: "Основание компании и первые проекты в сфере аутсорсинга продаж. Создание команды из 5 человек, первые клиенты и разработка базовых процессов продаж. Начало работы с образовательными проектами."
                     },
                     {
                       year: "2013", 
                       title: "Ojok: эволюция успешного аутсорсинга продаж полного цикла",
                       description: "Развитие технологий и расширение клиентской базы. Команда выросла до 25 человек, внедрение первых CRM-систем, работа с IT-компаниями и бухгалтерскими услугами."
                     },
                     {
                       year: "2014",
                       title: "Как Ojok стала одной из ведущих компаний в сфере аутсорсинга продаж",
                       description: "Выход на федеральный уровень и новые отраслевые решения. Расширение до 50 сотрудников, открытие офисов в 3 городах, работа с крупными корпоративными клиентами."
                     },
                     {
                       year: "2015",
                       title: "Ojok — путь инноваций и развития в продажах по всей России",
                       description: "Внедрение собственной IT-платформы и автоматизация процессов. Команда достигла 100 человек, создание уникальной системы аналитики продаж, работа с международными проектами."
                     },
                     {
                       year: "2016",
                       title: "Развитие Ojok: ключевые этапы становления компании и достижение успеха",
                       description: "Становление лидером отрасли и международное признание. Команда из 200+ специалистов, присутствие в 15 городах России, партнерство с ведущими мировыми компаниями."
                     }
                   ].map((item, index) => (
                     <div key={index} className="space-y-4">
                       <div 
                         className="flex space-x-6 cursor-pointer hover:opacity-80 transition-opacity"
                         onClick={() => setOpenItem(openItem === index ? -1 : index)}
                       >
                         <div className="flex-shrink-0">
                           <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                             {item.year}
                           </div>
                         </div>
                         <div className="flex-1">
                           <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                         </div>
                       </div>
                       
                                               {/* Описание - показывается только для открытого элемента */}
                        <div 
                          className={`ml-24 pl-6 border-l-2 border-red-200 overflow-hidden transition-all duration-500 ease-out ${
                            openItem === index 
                              ? 'max-h-40 opacity-100 translate-y-0' 
                              : 'max-h-0 opacity-0 -translate-y-2'
                          }`}
                        >
                          <p className="text-slate-600 text-lg leading-relaxed pb-4">{item.description}</p>
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
                <b>Миссия компании Ojok заключается в создании и развитии высокоэффективных боевых команд продаж, которые выходят за рамки традиционного понятия холодных звонков.</b> Ojok стремится не просто обеспечить контакт с потенциальными клиентами, а выстраивать полноценные и систематизированные процессы, направленные на достижение конкретных бизнес-целей заказчиков. Компания создает индивидуальные сценарии продаж и использует методологии, адаптированные под особенности каждого клиента, что позволяет максимально эффективно вести клиентов по всем этапам воронки продаж — от первого контакта до заключения сделки и получения оплаты.
                </p>
                
                <p className="text-lg text-slate-700 leading-relaxed">
                В основе миссии лежит принцип честности и личной ответственности. Руководители и сотрудники Ojok не обещают невозможного, а строят работу на основе прозрачной коммуникации и реальных данных. Компания не использует шаблонные решения, предпочитая индивидуальный подход и глубокое понимание особенностей каждого рынка и продукта. Такой подход позволяет работать не просто как обычный колл-центр, а как партнер, который входит в бизнес-процессы клиента и помогает достигать устойчивых результатов.
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
               {[
                 { name: "SKILLINE", index: 0 },
                 { name: "контур", index: 1 },
                 { name: "КРОК", index: 2 }
               ].map((company) => (
                 <div 
                   key={company.index}
                   className={`text-2xl font-bold cursor-pointer transition-all duration-300 ${
                     activeProject === company.index 
                       ? 'text-red-600 scale-110' 
                       : 'text-slate-700 hover:text-red-500'
                   }`}
                   onClick={() => setActiveProject(company.index)}
                 >
                   {company.name}
                 </div>
               ))}
             </div>
             
             {/* Изображение и описание */}
             <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="relative">
                 <Image
                   src={[
                     "/laptop/1.png",
                     "/laptop/2.png", 
                     "/laptop/3.png"
                   ][activeProject]}
                   alt="Рабочий процесс"
                   width={600}
                   height={400}
                   className="w-full h-auto rounded-2xl shadow-2xl transition-all duration-500"
                 />
               </div>
               
               <div className="space-y-6">
                 <div className="transition-all duration-500">
                   {[
                     {
                       title: "SKILLINE - Образовательная платформа",
                       description: "Мы помогли организовать полноценный отдел продаж с индивидуальной воронкой продаж и скриптами звонков, что привело к увеличению конверсии и более быстрому закрытию сделок. Результат: рост продаж на 40% за 3 месяца.",
                       results: ["Увеличение конверсии на 40%", "Сокращение времени закрытия сделок", "Внедрение CRM-системы"]
                     },
                     {
                       title: "контур - Бухгалтерские услуги",
                       description: "Разработали стратегию холодных звонков для B2B сегмента с фокусом на средний и крупный бизнес. Создали скрипты для разных типов клиентов и обучили команду продаж.",
                       results: ["Рост лидов на 60%", "Улучшение качества входящих заявок", "Оптимизация воронки продаж"]
                     },
                     {
                       title: "КРОК - IT-решения",
                       description: "Помогли выстроить процесс продаж сложных IT-решений с длительным циклом продаж. Внедрили систему квалификации лидов и обучили менеджеров работе с техническими специалистами.",
                       results: ["Увеличение среднего чека на 25%", "Сокращение цикла продаж", "Повышение квалификации команды"]
                     }
                   ][activeProject] && (
                     <>
                       <h3 className="text-2xl font-bold text-slate-900 mb-4">
                         {[
                           "SKILLINE - Образовательная платформа",
                           "контур - Бухгалтерские услуги", 
                           "КРОК - IT-решения"
                         ][activeProject]}
                       </h3>
                       <p className="text-base text-slate-700 leading-relaxed">
                         {[
                           "Мы помогли организовать полноценный отдел продаж с индивидуальной воронкой продаж и скриптами звонков, что привело к увеличению конверсии и более быстрому закрытию сделок. Результат: рост продаж на 40% за 3 месяца.",
                           "Разработали стратегию холодных звонков для B2B сегмента с фокусом на средний и крупный бизнес. Создали скрипты для разных типов клиентов и обучили команду продаж.",
                           "Помогли выстроить процесс продаж сложных IT-решений с длительным циклом продаж. Внедрили систему квалификации лидов и обучили менеджеров работе с техническими специалистами."
                         ][activeProject]}
                       </p>
                       
                       {/* Результаты проекта */}
                       <div className="mt-6">
                         <h4 className="text-lg font-semibold text-slate-800 mb-3">Ключевые результаты:</h4>
                         <ul className="space-y-2">
                           {[
                             ["Увеличение конверсии на 40%", "Сокращение времени закрытия сделок", "Внедрение CRM-системы"],
                             ["Рост лидов на 60%", "Улучшение качества входящих заявок", "Оптимизация воронки продаж"],
                             ["Увеличение среднего чека на 25%", "Сокращение цикла продаж", "Повышение квалификации команды"]
                           ][activeProject].map((result, index) => (
                             <li key={index} className="flex items-center space-x-2">
                               <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                               <span className="text-slate-600">{result}</span>
                             </li>
                           ))}
                         </ul>
                       </div>
                     </>
                   )}
                 </div>
                 
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


