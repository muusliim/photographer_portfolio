"use client";
import { useRef } from "react";
import Image from "next/image";
import { useTransform, useScroll, motion, MotionValue } from "framer-motion";
import useDimension from "@/hooks/useDimension";

const images = [
	"/parallaxScrollPics/parallaxScroll1.jpg",
	"/parallaxScrollPics/parallaxScroll2.jpg",
	"/parallaxScrollPics/parallaxScroll3.jpg",
	"/parallaxScrollPics/parallaxScroll4.jpg",
	"/parallaxScrollPics/parallaxScroll5.jpg",
	"/parallaxScrollPics/parallaxScroll6.jpg",
	"/parallaxScrollPics/parallaxScroll7.jpg",
	"/parallaxScrollPics/parallaxScroll8.jpg",
	"/parallaxScrollPics/parallaxScroll9.jpg",
	"/parallaxScrollPics/parallaxScroll10.jpg",
	"/parallaxScrollPics/parallaxScroll11.jpg",
	"/parallaxScrollPics/parallaxScroll12.jpg",
];
export default function ParallaxScrollGallery() {
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
	classNameColumn?: any;
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