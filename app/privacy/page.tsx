import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-dvh flex flex-col bg-background">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Политика конфиденциальности
              </h1>
              <p className="text-xl text-slate-700 leading-relaxed">
                Информация о том, как мы собираем, используем и защищаем ваши персональные данные
              </p>
            </Reveal>
          </div>
        </section>

        {/* Основной контент */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <Reveal>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">1. Общие положения</h2>
                <p className="text-slate-700 mb-4">
                  Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки персональных данных пользователей сайта ojok.ru (далее — «Сайт»), принадлежащего компании Ojok Group.
                </p>
                <p className="text-slate-700 mb-6">
                  Используя Сайт, вы соглашаетесь с условиями данной Политики. Если вы не согласны с этими условиями, пожалуйста, не используйте Сайт.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-6">2. Сбор персональных данных</h2>
                <p className="text-slate-700 mb-4">
                  Мы собираем следующие виды персональных данных:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
                  <li>ФИО</li>
                  <li>Email адрес</li>
                  <li>Номер телефона</li>
                  <li>Информация об опыте работы</li>
                  <li>Дополнительные сообщения, которые вы можете оставить</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mb-6">3. Цель сбора данных</h2>
                <p className="text-slate-700 mb-4">
                  Собранные персональные данные используются для:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
                  <li>Обработки ваших заявок на трудоустройство</li>
                  <li>Связи с вами по вопросам вакансий</li>
                  <li>Предоставления информации о компании и услугах</li>
                  <li>Улучшения качества обслуживания</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mb-6">4. Защита данных</h2>
                <p className="text-slate-700 mb-6">
                  Мы принимаем необходимые меры для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения. Ваши данные передаются по защищенным каналам связи и хранятся на защищенных серверах.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-6">5. Передача данных третьим лицам</h2>
                <p className="text-slate-700 mb-6">
                  Мы не продаем, не обмениваем и не передаем ваши персональные данные третьим лицам, за исключением случаев, когда это необходимо для выполнения наших обязательств или когда это требуется по закону.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-6">6. Ваши права</h2>
                <p className="text-slate-700 mb-4">
                  Вы имеете право:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">
                  <li>Получить информацию о том, какие данные о вас мы храним</li>
                  <li>Исправить неточные данные</li>
                  <li>Удалить ваши данные</li>
                  <li>Отозвать согласие на обработку данных</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mb-6">7. Cookies</h2>
                <p className="text-slate-700 mb-6">
                  Наш Сайт использует cookies для улучшения пользовательского опыта. Вы можете отключить cookies в настройках вашего браузера, но это может повлиять на функциональность Сайта.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-6">8. Изменения в Политике</h2>
                <p className="text-slate-700 mb-6">
                  Мы оставляем за собой право вносить изменения в данную Политику. При внесении существенных изменений мы уведомим вас об этом на Сайте или по email.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-6">9. Контактная информация</h2>
                <p className="text-slate-700 mb-6">
                  Если у вас есть вопросы по поводу данной Политики или обработки ваших персональных данных, свяжитесь с нами:
                </p>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <p className="text-slate-700 mb-2">
                    <strong>Email:</strong> info@ojok.ru
                  </p>
                  <p className="text-slate-700 mb-2">
                    <strong>Телефон:</strong> 8 800 600 34 37
                  </p>
                  <p className="text-slate-700">
                    <strong>Адрес:</strong> Россия
                  </p>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-sm text-slate-500 mb-4">
                    Последнее обновление: 1 января 2025 года
                  </p>
                  <Link href="/">
                    <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl">
                      Вернуться на главную
                    </Button>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
