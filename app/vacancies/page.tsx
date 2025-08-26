"use client";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { HeroSection } from "@/components/site/hero-section";
import Image from "next/image";

export default function VacanciesPage() {
  return (
    <div className="min-h-dvh flex flex-col bg-background">
      <main className="flex-1">
        {/* Hero Section согласно дизайну Figma */}
        <HeroSection 
          title="Вакансии и карьера в Ojok"
          description="Мы — лидер в сфере аутсорсинга продаж, ищем мотивированных профессионалов для развития вместе с нами. У нас есть интересные вакансии, комфортные условия работы, поддержка наставников и дружественная атмосфера. Станьте частью успешного бизнеса!"
          primaryButtonText="Оставить заявку"
          secondaryButtonText="Посмотреть вакансии"
          primaryButtonHref="#contact-form"
          secondaryButtonHref="#vacancies"
          mobileImage="/hero/3.png"
          mobileImageAlt="Команда профессионалов Ojok"
        />

        {/* Секция "Карьера в Ojok: возможности и условия" */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Карьера в Ojok: возможности и условия
              </h2>
              <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
                Присоединяйтесь к профессиональной команде Ojok и растите вместе с лидером в сфере аутсорсинга продаж. 
                У нас есть интересные вакансии, комфортные условия работы и поддержка на каждом этапе вашего развития.
              </p>
            </div>

            {/* Основные преимущества */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16 items-stretch">
              {/* Левая колонка - Изображение */}
              <div className="relative h-full">
                <Image
                  src="/laptop/1.png"
                  alt="Команда Ojok за работой"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                
              </div>

              {/* Правая колонка - Ключевые преимущества */}
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">💰 Конкурентная зарплата</h3>
                  <p className="text-slate-700">
                    От 35 000 до 40 000 ₽ на руки + премии и бонусы за достижения. 
                    Регулярные повышения и система грейдов.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">🏠 Удаленная работа</h3>
                  <p className="text-slate-700">
                    Работайте из любой точки России. Гибкий график от 6 часов в день. 
                    Никаких пробок и поездок в офис.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">📚 Обучение и развитие</h3>
                  <p className="text-slate-700">
                    Бесплатное обучение, наставничество, карьерный рост. 
                    Развитие soft и hard skills под руководством экспертов.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Секция "Вакансии" */}
        <section id="vacancies" className="py-20 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">Вакансии</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Карточка вакансии 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Оператор на входящую линию</h3>
                
                {/* Детали вакансии */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="text-slate-700">Формат: Удалённо</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    <span className="text-slate-700">Зарплата: 35 000 - 40 000 ₽</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-slate-700">Опыт работы: Не требуется</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 011.5-3.5M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2m0 0V3a4 4 0 00-1.5-3.5M8 7v10a2 2 0 002 2h4a2 2 0 002-2V7" />
                    </svg>
                    <span className="text-slate-700">График: 5/2, 6/1, гибкий график (от 6 часов в день)</span>
                  </div>
                </div>

                {/* Что нужно делать */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Что нужно делать:</h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Принимать входящие звонки от жителей России по готовому сценарию. 
                    Никаких продаж — только горячая входящая линия.
                  </p>
                 
                </div>

                {/* Что вы получите */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Что вы получите:</h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Оклад по часовой ставке от 32 000 рублей на руки плюс премии и бонусы. 
                    Грейд — повышение ставки после полугода работы и успешного экзамена.
                  </p>
                
                </div>

                {/* Что мы хотим от кандидата */}
                <div className="mb-8">
                  <h4 className="font-semibold text-slate-900 mb-3">Что мы хотим от кандидата:</h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Готовность много общаться по телефону. Стрессоустойчивость и ответственность.
                  </p>
               
                </div>

                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg font-semibold rounded-xl"
                  onClick={() => {
                    const contactForm = document.querySelector('#contact-form');
                    if (contactForm) {
                      contactForm.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Откликнуться
                </Button>
              </div>

              {/* Карточка вакансии 2 */}
             
            </div>
          </div>
        </section>

        {/* Секция "СВЯЖИТЕСЬ С НАМИ СЕЙЧАС" */}
         
      </main>
    </div>
  );
}
