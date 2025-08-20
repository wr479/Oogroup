"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
	return (
		<section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
			{/* Переливающийся градиентный фон */}
			<div className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-pink-600 animate-gradient-shift"></div>
			
			{/* Дополнительные фоновые элементы */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
			</div>

			{/* Контент хироблока */}
			<div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24 grid gap-12 lg:grid-cols-2 items-center">
				{/* Левый блок - Текст */}
				<div className="space-y-8 text-white">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
						Ваша новая работа ждет здесь
					</h1>
					
					<p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
						Присоединяйтесь к команде Ojok Group — лидеру в сфере удалённых контакт-центров! 
						Мы предлагаем не просто работу, а карьеру с ежедневной поддержкой, бесплатным обучением 
						и гарантированным доходом до 40 000₽ уже в первый месяц. Забудьте о часах в пробках — 
						ваше рабочее место там, где есть интернет.
					</p>
					
					<div className="flex flex-col sm:flex-row gap-4">
						<Button size="lg" className="bg-white text-red-600 hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg">
							Оставить заявку
						</Button>
						<Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl">
							Посмотреть вакансии
						</Button>
					</div>
				</div>

				{/* Правый блок - Изображения */}
				<div className="relative flex justify-center lg:justify-end">
					<div className="relative w-full max-w-lg">
						{/* Основное изображение hero-main.png */}
						<div className="relative mb-6">
							<Image
								src="/hero-main.png"
								alt="Работа в колл-центре"
								width={500}
								height={400}
								className="w-full h-auto rounded-2xl shadow-2xl"
								priority
							/>
							
							{/* Смартфон поверх основного изображения */}
							<div className="absolute -top-8 -right-8 w-32 h-32">
								<Image
									src="/hero-main-mobile.png"
									alt="Мобильное приложение"
									width={128}
									height={128}
									className="w-full h-auto rounded-2xl shadow-xl"
									priority
								/>
							</div>
							
							{/* Дополнительные визуальные элементы */}
							<div className="absolute -top-4 -left-4 w-16 h-16 bg-white/20 rounded-full blur-sm"></div>
							<div className="absolute -bottom-4 -right-4 w-12 h-12 bg-white/15 rounded-full blur-sm"></div>
						</div>
						
						{/* Дополнительные фоновые элементы */}
						<div className="absolute top-1/2 -left-20 transform -translate-y-1/2">
							<div className="w-16 h-16 bg-white/20 rounded-full blur-sm"></div>
						</div>
						<div className="absolute bottom-1/2 -right-16 transform translate-y-1/2">
							<div className="w-12 h-12 bg-white/15 rounded-full blur-sm"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
