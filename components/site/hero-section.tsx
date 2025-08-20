"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
	return (
		<section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500">
			{/* Контент хироблока */}
			<div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24 grid gap-8 md:grid-cols-2 items-center">
				<div className="space-y-6">
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
				</div>

				<div className="relative aspect-[4/3]">
					<Image
						src="/window.svg"
						alt="Hero"
						fill
						className="object-contain dark:invert"
						priority
					/>
				</div>
			</div>
		</section>
	);
}
