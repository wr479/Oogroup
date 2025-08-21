export default function VacanciesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Открытые вакансии
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Присоединяйтесь к нашей команде!
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 border">
            <h2 className="text-2xl font-bold mb-4">Оператор контакт-центра</h2>
            <p className="text-red-600 font-semibold mb-4">от 25 000₽</p>
            <p className="text-gray-600 mb-6">
              Работа с клиентами, консультирование по продуктам и услугам компании
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Требования:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Опыт работы не требуется
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Грамотная речь
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Желание развиваться
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Мы предлагаем:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Официальное оформление
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Бесплатное обучение
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Гибкий график
                  </li>
                </ul>
              </div>
            </div>
            
            <button className="w-full mt-8 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold">
              Откликнуться на вакансию
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
