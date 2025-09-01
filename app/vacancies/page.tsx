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
              <form id="contactForm" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      ФИО *
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Иванов Иван Иванович"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Номер телефона *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
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
                      name="telegram"
                      type="text"
                      placeholder="Telegram"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Гражданство *
                    </label>
                    <input
                      name="citizenship"
                      type="text"
                      required
                      placeholder="Россия"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Опыт работы
                    </label>
                    <input
                      name="experience"
                      type="text"
                      placeholder="Без опыта"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="ivanov@example.com"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Комментарий
                  </label>
                  <textarea
                    name="comment"
                    rows={4}
                    placeholder="Оставьте комментарий..."
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Резюме
                  </label>
                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:border-red-400 transition-colors">
                    <input
                      type="file"
                      name="resume"
                      id="resume"
                      accept=".pdf,.doc,.docx,.txt"
                      className="hidden"
                      onChange={(e) => {
                        const fileName = e.target.files?.[0]?.name;
                        if (fileName) {
                          const labelElement = document.getElementById('resumeLabel');
                          const iconElement = document.getElementById('resumeIcon');
                          if (labelElement && iconElement) {
                            labelElement.textContent = fileName;
                            iconElement.className = 'w-6 h-6 text-green-500';
                          }
                        }
                      }}
                    />
                    <label htmlFor="resume" className="cursor-pointer">
                      <div className="flex items-center justify-center gap-3">
                        <svg id="resumeIcon" className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <span id="resumeLabel" className="text-slate-600 font-medium">Прикрепить файл</span>
                      </div>
                      <p className="text-sm text-slate-500 mt-2">PDF, DOC, DOCX или TXT до 5MB</p>
                    </label>
                  </div>
                </div>

                {/* Статус отправки */}
                <div id="status" className="hidden p-4 rounded-xl text-center font-medium"></div>

                <Button 
                  id="submitBtn"
                  type="submit" 
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Откликнуться
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Подключение axios и скрипт формы */}
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            const webhookUrl = 'https://core.emfy.com/widgets/webhooks/?module=site_integration&amo_account_id=31802054&hook_id=MTc1NTg1MzQ5Nzg3NTExMTYyNDEw';
            
            // Маска для телефона
            function initPhoneMask() {
                const phoneInput = document.getElementById('phone');
                if (!phoneInput) return;
                
                let cursorPosition = 0;
                
                phoneInput.addEventListener('input', function(e) {
                    let value = e.target.value.replace(/\\D/g, '');
                    let formattedValue = '';
                    
                    if (value.length > 0) {
                        if (value.length <= 1) {
                            formattedValue = '+7 (' + value;
                        } else if (value.length <= 4) {
                            formattedValue = '+7 (' + value.substring(0, 3) + ') ' + value.substring(3);
                        } else if (value.length <= 7) {
                            formattedValue = '+7 (' + value.substring(0, 3) + ') ' + value.substring(3, 6) + '-' + value.substring(6);
                        } else if (value.length <= 9) {
                            formattedValue = '+7 (' + value.substring(0, 3) + ') ' + value.substring(3, 6) + '-' + value.substring(6, 8) + '-' + value.substring(8);
                        } else {
                            formattedValue = '+7 (' + value.substring(0, 3) + ') ' + value.substring(3, 6) + '-' + value.substring(6, 8) + '-' + value.substring(8, 10);
                        }
                    }
                    
                    e.target.value = formattedValue;
                    
                    // Сохраняем позицию курсора
                    if (cursorPosition < formattedValue.length) {
                        e.target.setSelectionRange(cursorPosition, cursorPosition);
                    }
                });
                
                phoneInput.addEventListener('keydown', function(e) {
                    cursorPosition = e.target.selectionStart;
                });
                
                phoneInput.addEventListener('focus', function(e) {
                    if (!e.target.value) {
                        e.target.value = '+7 (';
                    }
                });
                
                phoneInput.addEventListener('blur', function(e) {
                    if (e.target.value === '+7 (') {
                        e.target.value = '';
                    }
                });
            }
            
            // Валидация email
            function initEmailValidation() {
                const emailInput = document.getElementById('email');
                if (!emailInput) return;
                
                emailInput.addEventListener('blur', function(e) {
                    const email = e.target.value;
                    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
                    
                    if (email && !emailRegex.test(email)) {
                        e.target.classList.add('border-red-500', 'focus:border-red-500');
                        e.target.classList.remove('border-slate-300', 'focus:border-red-500');
                        
                        // Показываем ошибку
                        let errorDiv = e.target.parentNode.querySelector('.email-error');
                        if (!errorDiv) {
                            errorDiv = document.createElement('div');
                            errorDiv.className = 'email-error text-red-500 text-sm mt-1';
                            e.target.parentNode.appendChild(errorDiv);
                        }
                        errorDiv.textContent = 'Введите корректный email адрес';
                    } else {
                        e.target.classList.remove('border-red-500');
                        e.target.classList.add('border-slate-300');
                        
                        // Убираем ошибку
                        const errorDiv = e.target.parentNode.querySelector('.email-error');
                        if (errorDiv) {
                            errorDiv.remove();
                        }
                    }
                });
                
                emailInput.addEventListener('input', function(e) {
                    if (e.target.classList.contains('border-red-500')) {
                        e.target.classList.remove('border-red-500');
                        e.target.classList.add('border-slate-300');
                        
                        const errorDiv = e.target.parentNode.querySelector('.email-error');
                        if (errorDiv) {
                            errorDiv.remove();
                        }
                    }
                });
            }
            
            // Инициализация масок при загрузке страницы
            document.addEventListener('DOMContentLoaded', function() {
                initPhoneMask();
                initEmailValidation();
                
                // Обработка загрузки файла резюме
                const resumeInput = document.getElementById('resume');
                if (resumeInput) {
                    resumeInput.addEventListener('change', function(e) {
                        const file = e.target.files[0];
                        if (file) {
                            // Проверка размера файла (5MB)
                            if (file.size > 5 * 1024 * 1024) {
                                alert('Файл слишком большой. Максимальный размер: 5MB');
                                this.value = '';
                                return;
                            }
                            
                            // Проверка типа файла
                            const allowedTypes = ['.pdf', '.doc', '.docx', '.txt'];
                            const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
                            if (!allowedTypes.includes(fileExtension)) {
                                alert('Неподдерживаемый тип файла. Разрешены: PDF, DOC, DOCX, TXT');
                                this.value = '';
                                return;
                            }
                            
                            // Обновляем UI
                            const labelElement = document.getElementById('resumeLabel');
                            const iconElement = document.getElementById('resumeIcon');
                            if (labelElement && iconElement) {
                                labelElement.textContent = file.name;
                                iconElement.className = 'w-6 h-6 text-green-500';
                            }
                        }
                    });
                }
            });
            
            document.getElementById('contactForm').addEventListener('submit', function(e) {
                e.preventDefault();
                
                const submitBtn = document.getElementById('submitBtn');
                const statusDiv = document.getElementById('status');
                
                // Получаем данные из формы
                const formData = new FormData(this);
                const dataFromForm = {
                    'name': formData.get('name'),
                    'phone': formData.get('phone'),
                    'telegram': formData.get('telegram') || 'Не указан',
                    'citizenship': formData.get('citizenship'),
                    'experience': formData.get('experience') || 'Не указан',
                    'email': formData.get('email') || 'Не указан',
                    'comment': formData.get('comment') || 'Не указан'
                };
                
                // Показываем статус загрузки
                submitBtn.disabled = true;
                submitBtn.textContent = 'Отправка...';
                statusDiv.style.display = 'block';
                statusDiv.className = 'status loading p-4 rounded-xl text-center font-medium bg-blue-50 text-blue-700';
                statusDiv.textContent = 'Отправка данных...';
                
                // Создаем URLSearchParams для отправки
                const postData = new URLSearchParams();
                for (const key in dataFromForm) {
                    if (Object.hasOwnProperty.call(dataFromForm, key)) {
                        postData.append(key, dataFromForm[key]);
                    }
                }
                
                // Добавляем информацию о загруженном файле
                const resumeInput = document.getElementById('resume') as HTMLInputElement;
                if (resumeInput && resumeInput.files && resumeInput.files[0]) {
                    const resumeFile = resumeInput.files[0];
                    postData.append('resume_file', resumeFile.name);
                    postData.append('resume_size', Math.round(resumeFile.size / 1024) + 'KB');
                }
                
                // Отправляем запрос через axios
                axios.post(webhookUrl, postData.toString(), {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    timeout: 30000 // 30 секунд таймаут
                })
                .then(response => {
                    console.log('Webhook response (success):', response.data);
                    
                    // Показываем успешный статус
                    statusDiv.className = 'status success p-4 rounded-xl text-center font-medium bg-green-50 text-green-700';
                    statusDiv.textContent = 'Данные успешно отправлены! Мы свяжемся с вами в ближайшее время.';
                    
                    // Очищаем форму
                    document.getElementById('contactForm').reset();
                })
                .catch(error => {
                    console.error('Error sending data to webhook:', error);
                    
                    let errorMessage = 'Ошибка при отправке данных';
                    
                    if (error.response) {
                        // Сервер ответил с ошибкой
                        errorMessage += \`: \${error.response.status} \${error.response.statusText}\`;
                        if (error.response.data) {
                            console.log('Response data:', error.response.data);
                        }
                    } else if (error.request) {
                        // Запрос был отправлен, но ответ не получен
                        errorMessage += ': Нет ответа от сервера';
                    } else {
                        // Ошибка при настройке запроса
                        errorMessage += \`: \${error.message}\`;
                    }
                    
                    // Показываем ошибку
                    statusDiv.className = 'status error p-4 rounded-xl text-center font-medium bg-red-50 text-red-700';
                    statusDiv.textContent = errorMessage;
                })
                .finally(() => {
                    // Восстанавливаем кнопку
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Откликнуться';
                    
                    // Скрываем статус через 5 секунд
                    setTimeout(() => {
                        statusDiv.style.display = 'none';
                    }, 5000);
                });
            });
          `
        }} />
      </main>
    </div>
  );
}
