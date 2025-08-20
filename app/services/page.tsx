import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero секция */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Reveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 bg-clip-text text-transparent mb-6">
                Наши услуги
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Ojok Group предоставляет полный спектр услуг в сфере удаленных контакт-центров. 
                Мы помогаем компаниям развивать клиентский сервис, а специалистам — строить карьеру.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Основные услуги */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Основные направления
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Выберите направление, которое подходит именно вам
            </p>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "📞",
                title: "Входящие звонки",
                description: "Обработка входящих звонков, консультации клиентов, техническая поддержка",
                color: "from-red-500 to-pink-600"
              },
              {
                icon: "📤",
                title: "Исходящие звонки",
                description: "Холодные звонки, обзвон клиентов, проведение опросов и исследований",
                color: "from-blue-500 to-cyan-600"
              },
              {
                icon: "💬",
                title: "Онлайн-чат",
                description: "Поддержка клиентов в чате, ответы на вопросы, решение проблем",
                color: "from-emerald-500 to-teal-600"
              },
              {
                icon: "📧",
                title: "Email поддержка",
                description: "Обработка писем, ответы на запросы, техническая поддержка по email",
                color: "from-purple-500 to-pink-600"
              },
              {
                icon: "🎯",
                title: "Продажи",
                description: "Активные продажи, консультации по продуктам, работа с возражениями",
                color: "from-orange-500 to-red-600"
              },
              {
                icon: "📊",
                title: "Аналитика и отчеты",
                description: "Сбор данных, проведение опросов, подготовка аналитических отчетов",
                color: "from-indigo-500 to-purple-600"
              }
            ].map((service, i) => (
              <Reveal key={service.title} delay={0.1 * i} className="group">
                <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl text-white">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button variant="outline" className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 rounded-xl">
                    Подробнее →
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Дополнительные услуги */}
      <section className="relative py-16 bg-white dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Дополнительные возможности
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Мы предлагаем комплексные решения для развития вашего бизнеса
            </p>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-8 border border-slate-200 dark:border-slate-600">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <span className="text-xl text-white">🎓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    Обучение персонала
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    Мы проводим полное обучение ваших сотрудников, включая технические навыки, 
                    коммуникацию с клиентами и специфику вашего бизнеса.
                  </p>
                  <Button className="bg-red-600 hover:bg-red-700 text-white rounded-xl">
                    Записаться на обучение
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-800 dark:to-emerald-900/20 rounded-3xl p-8 border border-slate-200 dark:border-slate-600">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <span className="text-xl text-white">📈</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    Консалтинг и аудит
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    Анализируем ваши процессы, выявляем точки роста и предлагаем решения 
                    для повышения эффективности работы с клиентами.
                  </p>
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl">
                    Получить консультацию
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="relative py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-3xl p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Готовы начать сотрудничество?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Свяжитесь с нами и получите индивидуальное предложение для вашего бизнеса
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-red-600 hover:bg-white/90 px-8 py-3 rounded-xl text-lg font-semibold">
                  Оставить заявку
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-xl text-lg font-semibold">
                  Связаться с нами
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}


