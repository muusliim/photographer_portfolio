"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTransform, useScroll, motion, MotionValue } from "framer-motion";
import useDimension from "@/hooks/useDimension";
import Lenis from "lenis";

const images = [
	"/parallaxScrollPics/parallaxScroll1.webp",
	"/parallaxScrollPics/parallaxScroll3.webp",
	"/parallaxScrollPics/parallaxScroll2.webp",
	"/parallaxScrollPics/parallaxScroll4.webp",
	"/parallaxScrollPics/parallaxScroll5.webp",
	"/parallaxScrollPics/parallaxScroll6.webp",
	"/parallaxScrollPics/parallaxScroll7.webp",
	"/parallaxScrollPics/parallaxScroll8.webp",
	"/parallaxScrollPics/parallaxScroll9.webp",
	"/parallaxScrollPics/parallaxScroll10.webp",
	"/parallaxScrollPics/parallaxScroll11.webp",
	"/parallaxScrollPics/parallaxScroll12.webp",
];
export default function ParallaxScrollGallery() {
	useEffect(() => {
		const lenis = new Lenis();

		const raf = (time: number) => {
			lenis.raf(time);

			requestAnimationFrame(raf);
		};

		requestAnimationFrame(raf);
	}, []);

	const gallery = useRef(null);
	const { height } = useDimension();
	const { scrollYProgress } = useScroll({
		target: gallery,
		offset: ["start end", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
	const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.2]);
	const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 2.25]);
	const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

	return (
		<section
			ref={gallery}
			className="h-[175vh] relative bg-background flex flex-row gap-[2vw] p-[2vw] overflow-hidden"
		>
			<Column
				images={[images[0], images[1], images[2]]}
				classNameColumn="top-[-45%]"
				y={y}
			/>
			<Column
				images={[images[3], images[4], images[5]]}
				y={y2}
				classNameColumn="top-[-85%]"
			/>
			<Column
				images={[images[6], images[7], images[8]]}
				y={y3}
				classNameColumn="top-[-55%]"
			/>
			<Column
				images={[images[9], images[10], images[11]]}
				y={y4}
				classNameColumn="top-[-95%]"
			/>
		</section>
	);
}

const Column = ({
	images,
	y,
	classNameColumn,
}: {
	images: string[];
	y: MotionValue<number>;
	classNameColumn?: string;
}) => {
	return (
		<motion.div
			style={{ y }}
			className="relative h-full w-1/4 min-w-[250px] flex flex-col gap-[2vw]"
		>
			{images.map((src, i) => {
				return (
					<div
						key={i}
						className={`h-full w-full relative rounded-[1vw] overflow-hidden ${classNameColumn}`}
					>
						<Image
							loading="lazy"
							className="object-cover"
							src={src}
							alt="image"
							fill
						/>
					</div>
				);
			})}
		</motion.div>
	);
};
