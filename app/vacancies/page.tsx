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
          heroImage="/vac/1.png"
          mobileImage="/vac/2.png"
          heroImageAlt="Команда профессионалов Ojok"
          mobileImageAlt="Команда профессионалов Ojok"
        />

        {/* Секция "Карьера в Ojok: возможности и условия" */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Карьера в Ojok: возможности и условия
              </h2>
              <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
                Присоединяйтесь к профессиональной команде Ojok и растите вместе с лидером в сфере аутсорсинга продаж. 
                У нас есть интересные вакансии, комфортные условия работы и поддержка на каждом этапе.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Левая колонка - ВАКАНСИИ */}
              <div className="text-center p-8 bg-slate-50 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">ВАКАНСИИ</h3>
                <p className="text-slate-700 leading-relaxed">
                  Открытые позиции в продажах, управлении проектами, IT и поддержке клиентов. 
                  Если вы ориентированы на результат и хотите быть частью профессиональной команды — 
                  посмотрите наши текущие вакансии.
                </p>
              </div>

              {/* Центральная колонка - УСЛОВИЯ И БОНУСЫ */}
              <div className="text-center p-8 bg-slate-50 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">УСЛОВИЯ И БОНУСЫ</h3>
                <p className="text-slate-700 leading-relaxed">
                  Конкурентная зарплата, гибкий график, удалённая работа, комфортные условия. 
                  Бонусы за достижения и участие в корпоративных программах развития.
                </p>
              </div>

              {/* Правая колонка - КАК ПОПАСТЬ В КОМАНДУ */}
              <div className="text-center p-8 bg-slate-50 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">КАК ПОПАСТЬ В КОМАНДУ</h3>
                <p className="text-slate-700 leading-relaxed">
                  Простая подача заявки на сайте или отправка резюме на email. 
                  Далее — собеседование и тестовое задание. Станьте частью Ojok и 
                  начните карьеру с перспективами и поддержкой.
                </p>
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
                  <button className="text-red-600 text-sm font-medium mt-2 hover:text-red-700">
                    Показать все
                  </button>
                </div>

                {/* Что вы получите */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Что вы получите:</h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Оклад по часовой ставке от 32 000 рублей на руки плюс премии и бонусы. 
                    Грейд — повышение ставки после полугода работы и успешного экзамена.
                  </p>
                  <button className="text-red-600 text-sm font-medium mt-2 hover:text-red-700">
                    Показать все
                  </button>
                </div>

                {/* Что мы хотим от кандидата */}
                <div className="mb-8">
                  <h4 className="font-semibold text-slate-900 mb-3">Что мы хотим от кандидата:</h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Готовность много общаться по телефону. Стрессоустойчивость и ответственность.
                  </p>
                  <button className="text-red-600 text-sm font-medium mt-2 hover:text-red-700">
                    Показать все
                  </button>
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg font-semibold rounded-xl">
                  Откликнуться
                </Button>
              </div>

              {/* Карточка вакансии 2 */}
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
                  <button className="text-red-600 text-sm font-medium mt-2 hover:text-red-700">
                    Показать все
                  </button>
                </div>

                {/* Что вы получите */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Что вы получите:</h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Оклад по часовой ставке от 32 000 рублей на руки плюс премии и бонусы. 
                    Грейд — повышение ставки после полугода работы и успешного экзамена.
                  </p>
                  <button className="text-red-600 text-sm font-medium mt-2 hover:text-red-700">
                    Показать все
                  </button>
                </div>

                {/* Что мы хотим от кандидата */}
                <div className="mb-8">
                  <h4 className="font-semibold text-slate-900 mb-3">Что мы хотим от кандидата:</h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Готовность много общаться по телефону. Стрессоустойчивость и ответственность.
                  </p>
                  <button className="text-red-600 text-sm font-medium mt-2 hover:text-red-700">
                    Показать все
                  </button>
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg font-semibold rounded-xl">
                  Откликнуться
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Секция "СВЯЖИТЕСЬ С НАМИ СЕЙЧАС" */}
        <section id="contact-form" className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                СВЯЖИТЕСЬ С НАМИ СЕЙЧАС
              </h2>
              <p className="text-lg text-slate-700">
                Оставьте заявку и мы свяжемся с вами в ближайшее время
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 shadow-xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      ФИО
                    </label>
                    <input
                      type="text"
                      placeholder="Иванов Иван Иванович"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Номер телефона
                    </label>
                    <input
                      type="tel"
                      placeholder="+7"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Telegram
                    </label>
                    <input
                      type="text"
                      placeholder="@username"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Гражданство
                    </label>
                    <select className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent">
                      <option>Россия</option>
                      <option>Другое</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Опыт работы
                    </label>
                    <select className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent">
                      <option>Без опыта</option>
                      <option>До 1 года</option>
                      <option>1-3 года</option>
                      <option>Более 3 лет</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Резюме
                    </label>
                    <button
                      type="button"
                      className="w-full px-4 py-3 border-2 border-dashed border-slate-300 rounded-xl text-slate-500 hover:border-red-500 hover:text-red-500 transition-colors"
                    >
                      Прикрепить файл
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Комментарий
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Оставьте комментарий."
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg font-semibold rounded-xl"
                >
                  Откликнуться
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
