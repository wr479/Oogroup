"use client";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";

export function HeroSection() {
	// Анимация градиентного фона (react-spring)
	const backgroundAnimation = useSpring({
		from: { 
			background: 'linear-gradient(135deg, #a960ee, #ff333d, #90e0ff, #ffcb57)' 
		},
		to: { 
			background: 'linear-gradient(135deg, #ffcb57, #90e0ff, #ff333d, #a960ee)' 
		},
		config: { duration: 8000 }, // Длительность анимации (8 секунд)
		loop: true, // Бесконечная анимация
		reverse: true, // Добавляем reverse для плавного перехода туда-обратно
	});

	return (
		<animated.section
			style={backgroundAnimation} // Применяем анимацию фона
			className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
		>
			{/* Контент хироблока */}
			<div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24 grid gap-8 md:grid-cols-2 items-center">
				<Reveal className="space-y-6">
					<h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
						Решения для вашего бизнеса
					</h1>
					<p className="text-base md:text-lg text-white/80">
						Комплексные услуги по проектированию, строительству и управлению проектами. Надёжный партнёр на всех этапах.
					</p>
					<div className="flex gap-3">
						<Button className="bg-white text-purple-600 hover:bg-white/90">
							Оставить заявку
						</Button>
						<Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
							Подробнее
						</Button>
					</div>
				</Reveal>

				<Reveal delay={0.1} className="relative aspect-[4/3]">
					<Image
						src="/window.svg"
						alt="Hero"
						fill
						className="object-contain dark:invert"
						priority
					/>
				</Reveal>
			</div>

			{/* Дополнительные элементы анимации */}
			<div className="absolute inset-0 pointer-events-none">
				{/* Анимированные круги */}
				<div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full animate-pulse" />
				<div className="absolute top-3/4 right-1/4 w-24 h-24 bg-white/20 rounded-full animate-ping" />
				<div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-white/15 rounded-full animate-bounce" />
			</div>
		</animated.section>
	);
}
