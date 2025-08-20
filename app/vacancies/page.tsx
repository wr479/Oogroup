import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export default function VacanciesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero секция */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Reveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 bg-clip-text text-transparent mb-6">
                Открытые вакансии
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Присоединяйтесь к команде Ojok Group! Мы предлагаем интересную работу, 
                стабильный доход и возможности для профессионального роста
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Фильтры */}
      <section className="relative py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex flex-wrap gap-4 items-center justify-center">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Фильтр:</span>
                <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50 rounded-xl">
                  Все вакансии
                </Button>
                <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 rounded-xl">
                  Входящие звонки
                </Button>
                <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 rounded-xl">
                  Исходящие звонки
                </Button>
                <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 rounded-xl">
                  Онлайн-чат
                </Button>
                <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 rounded-xl">
                  Продажи
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Список вакансий */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Оператор входящих звонков",
                type: "Входящие звонки",
                salary: "от 35 000₽",
                experience: "Без опыта",
                schedule: "Полная занятость",
                location: "Удаленно",
                description: "Обработка входящих звонков, консультации клиентов, техническая поддержка",
                requirements: ["Грамотная речь", "Умение работать с ПК", "Желание развиваться"],
                benefits: ["Бесплатное обучение", "Гибкий график", "Премии за качество"]
              },
              {
                title: "Менеджер по продажам",
                type: "Продажи",
                salary: "от 40 000₽ + %",
                experience: "От 1 года",
                schedule: "Полная занятость",
                location: "Удаленно",
                description: "Активные продажи, консультации по продуктам, работа с возражениями",
                requirements: ["Опыт в продажах", "Целеустремленность", "Коммуникабельность"],
                benefits: ["Высокий % с продаж", "Карьерный рост", "Обучение"]
              },
              {
                title: "Оператор онлайн-чата",
                type: "Онлайн-чат",
                salary: "от 32 000₽",
                experience: "Без опыта",
                schedule: "Гибкий график",
                location: "Удаленно",
                description: "Поддержка клиентов в чате, ответы на вопросы, решение проблем",
                requirements: ["Быстрая печать", "Грамотность", "Внимательность"],
                benefits: ["Гибкий график", "Работа из дома", "Стабильный доход"]
              },
              {
                title: "Оператор исходящих звонков",
                type: "Исходящие звонки",
                salary: "от 38 000₽",
                experience: "Без опыта",
                schedule: "Полная занятость",
                location: "Удаленно",
                description: "Холодные звонки, обзвон клиентов, проведение опросов",
                requirements: ["Устойчивость к отказам", "Хорошая дикция", "Терпение"],
                benefits: ["Бонусы за результат", "Поддержка команды", "Развитие навыков"]
              },
              {
                title: "Email-менеджер",
                type: "Email поддержка",
                salary: "от 35 000₽",
                experience: "От 6 месяцев",
                schedule: "Полная занятость",
                location: "Удаленно",
                description: "Обработка писем, ответы на запросы, техническая поддержка по email",
                requirements: ["Грамотность", "Опыт работы с email", "Усидчивость"],
                benefits: ["Стабильный график", "Развитие письменной речи", "Премии"]
              },
              {
                title: "Аналитик колл-центра",
                type: "Аналитика",
                salary: "от 50 000₽",
                experience: "От 2 лет",
                schedule: "Полная занятость",
                location: "Удаленно",
                description: "Сбор данных, проведение опросов, подготовка аналитических отчетов",
                requirements: ["Аналитическое мышление", "Опыт в аналитике", "Excel/Google Sheets"],
                benefits: ["Высокая зарплата", "Развитие аналитических навыков", "Карьерный рост"]
              }
            ].map((vacancy, i) => (
              <Reveal key={vacancy.title} delay={0.1 * i} className="group">
                <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  {/* Заголовок и тип */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-medium rounded-full">
                        {vacancy.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-red-600 transition-colors">
                      {vacancy.title}
                    </h3>
                  </div>

                  {/* Основная информация */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500">💰</span>
                      <span className="font-semibold text-slate-900 dark:text-white">{vacancy.salary}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500">👤</span>
                      <span className="text-slate-600 dark:text-slate-400">{vacancy.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500">⏰</span>
                      <span className="text-slate-600 dark:text-slate-400">{vacancy.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500">📍</span>
                      <span className="text-slate-600 dark:text-slate-400">{vacancy.location}</span>
                    </div>
                  </div>

                  {/* Описание */}
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {vacancy.description}
                  </p>

                  {/* Требования */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Требования:</h4>
                    <ul className="space-y-2">
                      {vacancy.requirements.map((req, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Преимущества */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Что мы предлагаем:</h4>
                    <ul className="space-y-2">
                      {vacancy.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Кнопка */}
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-xl">
                    Откликнуться на вакансию
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="relative py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-3xl p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Не нашли подходящую вакансию?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Отправьте нам свое резюме, и мы свяжемся с вами, когда появится подходящая позиция
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-red-600 hover:bg-white/90 px-8 py-3 rounded-xl text-lg font-semibold">
                  Отправить резюме
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-xl text-lg font-semibold">
                  Связаться с HR
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
