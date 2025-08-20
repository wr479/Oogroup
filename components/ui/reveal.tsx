"use client";
import { motion, type MotionProps } from "framer-motion";
import * as React from "react";
import { cn } from "@/lib/utils";

type RevealProps = React.HTMLAttributes<HTMLDivElement> & {
	asChild?: boolean;
	delay?: number;
	duration?: number;
	distance?: number;
};

export function Reveal({
	children,
	className,
	delay = 0,
	duration = 0.5,
	distance = 24,
	...props
}: RevealProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: distance }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
			className={cn(className)}
			{...(props as MotionProps)}
		>
			{children}
		</motion.div>
	);
}


