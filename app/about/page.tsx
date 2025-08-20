import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero секция */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Reveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 bg-clip-text text-transparent mb-6">
                О компании Ojok Group
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Мы — лидер в сфере удаленных контакт-центров, создающий карьерные возможности для тысяч специалистов по всей России
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Основной контент */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            {/* Левый блок - Описание */}
            <Reveal className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  Наша миссия
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Мы создаем возможности для людей, которые хотят работать удаленно, развиваться профессионально 
                  и получать стабильный доход. Наша команда специалистов обеспечивает ежедневную поддержку, 
                  бесплатное обучение и создает комфортные условия для работы.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Мы верим, что качественная работа не должна быть привязана к офису. 
                  Ваше рабочее место — там, где есть интернет и желание развиваться.
                </p>
              </div>
              
              <div className="flex gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl">
                  Присоединиться к команде
                </Button>
                <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 rounded-xl">
                  Узнать больше
                </Button>
              </div>
            </Reveal>

            {/* Правый блок - Статистика */}
            <Reveal delay={0.2} className="relative">
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                  Наши достижения
                </h3>
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-black text-red-500 mb-2">5+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">лет на рынке</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-black text-blue-500 mb-2">1000+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">сотрудников</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-black text-emerald-500 mb-2">98%</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">довольных клиентов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-black text-purple-500 mb-2">24/7</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">поддержка</div>
                  </div>
                </div>
              </div>
              
              {/* Фоновые элементы */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-red-400/20 to-pink-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-full blur-2xl"></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="relative py-16 bg-white dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Почему выбирают нас
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Мы создаем лучшие условия для удаленной работы и профессионального развития
            </p>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🚀",
                title: "Быстрый старт",
                description: "Начните работать уже через 3 дня после подачи заявки"
              },
              {
                icon: "💻",
                title: "Удаленная работа",
                description: "Работайте из любой точки России, где есть интернет"
              },
              {
                icon: "🎓",
                title: "Бесплатное обучение",
                description: "Получите все необходимые навыки для успешной работы"
              },
              {
                icon: "💰",
                title: "Гарантированный доход",
                description: "До 40 000₽ уже в первый месяц работы"
              },
              {
                icon: "🤝",
                title: "Поддержка 24/7",
                description: "Наша команда всегда готова помочь и ответить на вопросы"
              },
              {
                icon: "📈",
                title: "Карьерный рост",
                description: "Возможности для развития и повышения в должности"
              }
            ].map((item, i) => (
              <Reveal key={item.title} delay={0.1 * i} className="group">
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border border-slate-200 dark:border-slate-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


