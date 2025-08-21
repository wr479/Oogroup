"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import PlasmaAnimation from "../ui/gradient";

export function HeroSection() {
	return (
		<section className="relative w-full min-h-[70vh] md:min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
			{/* Переливающийся градиентный фон */}
			
			<PlasmaAnimation diagonalOverlay overlayCorner='br' overlayColor="#ffffff" overlayOpacity={1} />

			{/* <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-pink-600 animate-gradient-shift"></div> */}
			
			{/* Дополнительные фоновые элементы */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
			</div>

			{/* Контент хироблока */}
			<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-5 md:px-6 py-12 sm:py-16 md:py-24 grid gap-10 sm:gap-12 lg:grid-cols-2 items-center">
				{/* Левый блок - Текст */}
				<div className="space-y-6 sm:space-y-8 text-white">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
						Ваша новая работа ждет здесь
					</h1>
					
					<p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
						Присоединяйтесь к команде Ojok Group — лидеру в сфере удалённых контакт-центров! 
						Мы предлагаем не просто работу, а карьеру с ежедневной поддержкой, бесплатным обучением 
						и гарантированным доходом до 40 000₽ уже в первый месяц. Забудьте о часах в пробках — 
						ваше рабочее место там, где есть интернет.
					</p>
					
					<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
						<Button size="lg" className="bg-white text-red-600 hover:bg-white/90 px-7 sm:px-8 py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg">
							Оставить заявку
						</Button>
						<Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-7 sm:px-8 py-4 text-base sm:text-lg font-semibold rounded-xl">
							Посмотреть вакансии
						</Button>
					</div>
				</div>

				{/* Правый блок - Изображения */}
				<div className="relative flex justify-center lg:justify-end mt-4 sm:mt-0">
					<div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg">
						{/* Основное изображение hero-main.png */}
						<div className="relative mb-4 sm:mb-6">
							<Image
								src="/hero-main.png"
								alt="Работа в колл-центре"
								width={600}
								height={480}
								className="w-full h-auto rounded-xl sm:rounded-2xl shadow-2xl"
								priority
							/>
							
							{/* Смартфон поверх основного изображения */}
							<div className="absolute -top-6 sm:-top-8 -right-6 sm:-right-8 w-24 h-24 sm:w-32 sm:h-32">
								<Image
									src="/hero-main-mobile.png"
									alt="Мобильное приложение"
									width={128}
									height={128}
									className="w-full h-auto rounded-xl sm:rounded-2xl shadow-xl"
									priority
								/>
							</div>
							
							{/* Дополнительные визуальные элементы */}
							<div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-12 sm:w-16 h-12 sm:h-16 bg-white/20 rounded-full blur-sm"></div>
							<div className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 w-10 sm:w-12 h-10 sm:h-12 bg-white/15 rounded-full blur-sm"></div>
						</div>
						
						{/* Дополнительные фоновые элементы */}
						<div className="absolute top-1/2 -left-12 sm:-left-16 md:-left-20 transform -translate-y-1/2">
							<div className="w-10 sm:w-14 md:w-16 h-10 sm:h-14 md:h-16 bg-white/20 rounded-full blur-sm"></div>
						</div>
						<div className="absolute bottom-1/2 -right-10 sm:-right-14 md:-right-16 transform translate-y-1/2">
							<div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-white/15 rounded-full blur-sm"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
