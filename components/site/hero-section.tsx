"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import PlasmaAnimation from "../ui/gradient";

export function HeroSection() {
	return (
		<section 
			className="relative w-full min-h-[70vh] sm:min-h-[75vh] md:min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden"
		>
			{/* Переливающийся градиентный фон */}
			
			<PlasmaAnimation diagonalOverlay overlayCorner='br' overlayColor="#ffffff" overlayOpacity={1} />

			{/* Фоновое изображение hero-main.png - поверх градиента */}
			<div className="absolute inset-0 pointer-events-none">
				<Image
					src="/hero-main.png"
					alt="Фоновое изображение"
					width={650}
					height={432}
					className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block"
					style={{
						width: '40.625rem',
						height: '27rem'
					}}
					priority
				/>
			</div>

			{/* Дополнительные фоновые элементы */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white/5 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-white/5 rounded-full blur-3xl"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-white/3 rounded-full blur-3xl"></div>
			</div>

			{/* Контент хироблока */}
			<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-5 md:px-6 py-16 sm:py-20 md:py-24 grid gap-10 sm:gap-12 md:gap-16 lg:grid-cols-2 items-center">
				{/* Левый блок - Текст */}
				<div className="max-w-2xl space-y-5 sm:space-y-6 md:space-y-8 text-center lg:text-left bg-white lg:bg-transparent rounded-2xl lg:rounded-none p-6 sm:p-8 lg:p-0 shadow-xl lg:shadow-none">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 lg:text-white">
						Ваша новая работа ждет здесь
					</h1>
					
					<p className="text-base sm:text-lg md:text-xl text-slate-700 lg:text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
						Присоединяйтесь к команде Ojok Group — лидеру в сфере удалённых контакт-центров! 
						Мы предлагаем не просто работу, а карьеру с ежедневной поддержкой, бесплатным обучением 
						и гарантированным доходом до 40 000₽ уже в первый месяц. Забудьте о часах в пробках — 
						ваше рабочее место там, где есть интернет.
					</p>
					
					<div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start">
						<Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg w-full sm:w-auto">
							Оставить заявку
						</Button>
						<Button variant="outline" size="lg" className="border-2 lg:border-white/30 border-slate-900 lg:text-white text-slate-900 hover:bg-slate-900 hover:text-white lg:hover:bg-white/10 px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold rounded-xl w-full sm:w-auto">
							Посмотреть вакансии
						</Button>
					</div>
				</div>
				
				{/* Правый блок - Мобильное изображение */}
				<div className="flex justify-center order-first lg:order-last  lg:justify-start">
					<Image
						src="/hero-main-mobile.png"
						alt="Мобильное приложение"
						width={160}
						height={160}
						className="w-full h-full max-w-58 rounded-xl sm:rounded-2xl shadow-xl"
						priority
					/>
				</div>
			</div>
		</section>
	);
}
