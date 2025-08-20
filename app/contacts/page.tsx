import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero секция */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Reveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 bg-clip-text text-transparent mb-6">
                Свяжитесь с нами
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Готовы начать сотрудничество или у вас есть вопросы? Мы всегда на связи и готовы помочь!
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Основной контент */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-start">
            {/* Левый блок - Контактная информация */}
            <Reveal className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">
                  Контактная информация
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                  Свяжитесь с нами любым удобным способом. Мы ответим в течение 24 часов.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <span className="text-white">📞</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                      Телефон
                    </div>
                    <div className="text-xl font-bold text-slate-900 dark:text-white">
                      8 800 600 34
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Бесплатно по России
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                    <span className="text-white">📧</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                      Email
                    </div>
                    <div className="text-xl font-bold text-slate-900 dark:text-white">
                      info@ojok.group
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Ответим в течение дня
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <span className="text-white">🌐</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                      Веб-сайт
                    </div>
                    <div className="text-xl font-bold text-slate-900 dark:text-white">
                      www.ojok.group
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Узнайте больше о нас
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <span className="text-white">⏰</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                      Время работы
                    </div>
                    <div className="text-xl font-bold text-slate-900 dark:text-white">
                      Пн-Пт: 9:00 - 18:00
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Сб-Вс: 10:00 - 16:00
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Правый блок - Форма */}
            <Reveal delay={0.2} className="relative">
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Напишите нам
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                  Заполните форму, и мы свяжемся с вами в ближайшее время
                </p>
                
                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Имя *
                      </label>
                      <input 
                        type="text" 
                        required
                        className="w-full h-12 px-4 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-colors"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Email *
                      </label>
                      <input 
                        type="email" 
                        required
                        className="w-full h-12 px-4 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Телефон
                    </label>
                    <input 
                      type="tel" 
                      className="w-full h-12 px-4 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-colors"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Тема обращения
                    </label>
                    <select className="w-full h-12 px-4 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-colors">
                      <option>Выберите тему</option>
                      <option>Общие вопросы</option>
                      <option>Сотрудничество</option>
                      <option>Вакансии</option>
                      <option>Техническая поддержка</option>
                      <option>Другое</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Сообщение *
                    </label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full p-4 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-colors resize-none"
                      placeholder="Опишите ваш вопрос или предложение..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl text-lg font-semibold"
                  >
                    Отправить сообщение
                  </Button>
                </form>
              </div>
              
              {/* Фоновые элементы */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-red-400/20 to-pink-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-full blur-2xl"></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Дополнительная информация */}
      <section className="relative py-16 bg-white dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Другие способы связи
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Мы доступны в различных социальных сетях и мессенджерах
            </p>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "💬", name: "Telegram", link: "@ojok_group", color: "from-blue-500 to-cyan-600" },
              { icon: "📱", name: "WhatsApp", link: "+7 800 600 34", color: "from-green-500 to-emerald-600" },
              { icon: "📘", name: "ВКонтакте", link: "vk.com/ojok", color: "from-blue-600 to-indigo-700" },
              { icon: "📷", name: "Instagram", link: "@ojok_group", color: "from-pink-500 to-purple-600" }
            ].map((social, i) => (
              <Reveal key={social.name} delay={0.1 * i} className="text-center">
                <div className="group cursor-pointer">
                  <div className={`w-16 h-16 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl text-white">{social.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {social.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {social.link}
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


