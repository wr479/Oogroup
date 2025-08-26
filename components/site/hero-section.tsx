"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import NeatGradientComponent from "@/components/ui/neat-gradient";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

interface HeroSectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  primaryButtonHref?: string;
  secondaryButtonHref?: string;

  mobileImage: string;

  mobileImageAlt?: string;
}

export function HeroSection({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonHref = "#",
  secondaryButtonHref = "#",
 
  mobileImage,

  mobileImageAlt = "Мобильное изображение"
}: HeroSectionProps) {
	return (
		<section 
			className="relative w-full min-h-[70vh] sm:min-h-[75vh] md:min-h-[8	0vh] flex items-center justify-center overflow-hidden"
		>
			{/* Переливающийся градиентный фон */}
			
			<NeatGradientComponent 
				diagonalOverlay 
				overlayCorner='br' 
				overlayColor="#ffffff" 
				overlayOpacity={1} 
			/>
			{/* Дополнительные фоновые элементы */}
			

			{/* Контент хироблока */}
			<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-5 md:px-6 py-16 sm:py-20 md:py-24 grid gap-10 sm:gap-12 md:gap-16 lg:grid-cols-2 items-center">
				{/* Левый блок - Текст */}
				<div className=" space-y-5 sm:space-y-6 md:space-y-8 text-center lg:text-left bg-white lg:bg-transparent rounded-2xl lg:rounded-none p-6 sm:p-8 lg:p-0 shadow-xl lg:shadow-none">
					<h1 className="text-3xl sm:text-4xl lg:text-8xl font-bold  text-[#0A2540] lg:text-[#0A2540] leading-1">
						{title}
					</h1>
					
					<p className="text-base sm:text-lg md:text-xl text-[#0A2540]   max-w-2xl mx-auto lg:mx-0 bg-white p-4 rounded-xl">
						{description}
					</p>
					
					<div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start">
						<Button 
							size="lg" 
							className="bg-red-600  hover:bg-red-700 text-white px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg w-full sm:w-auto"
							onClick={() => window.location.href = primaryButtonHref}
						>
							{primaryButtonText}
						</Button>
						<Button 
							variant="outline" 
							size="lg" 
							className="border-2 bg-[#0A2540] lg:border-white/30 border-slate-900 lg:text-white text-slate-900 hover:bg-[#0A2540] hover:text-white lg:hover:bg-[#0A2540] px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold rounded-xl w-full sm:w-auto"
							onClick={() => window.location.href = secondaryButtonHref}
						>
							{secondaryButtonText}
						</Button>
					</div>
				</div>
				
				{/* Правый блок - Мобильное изображение */}
				<div className="flex justify-center order-first lg:order-last  lg:justify-start">
					<Image
						src={mobileImage}
						alt={mobileImageAlt}
						width={160}
						height={160}
						className="w-full h-full max-w-lg  rounded-xl sm:rounded-2xl shadow-red-500/50 shadow-2xl"
						priority
					/>
				</div>
			</div>
		</section>
	);
}
