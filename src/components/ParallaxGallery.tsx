"use client";
import Image from "next/image";

import { useScroll, useTransform, motion } from "framer-motion";

import { useRef } from "react";

export default function ParallaxGallery() {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});

	const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);

	const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);

	const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);

	const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);

	const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

	const pictures = [
		{
			src: "/parallaxPics/parallaxPhoto1.webp",
			scale: scale4,
			className: "relative w-[25vw] h-[25vh]",
		},
		{
			src: "/parallaxPics/parallaxPhoto2.webp",
			scale: scale5,
			className: " relative top-[-30vh] left-[5vw] w-[35vw] h-[30vh]",
		},
		{
			src: "/parallaxPics/parallaxPhoto7.webp",
			scale: scale6,
			className: "relative top-[-10vh] left-[-25vw] w-[20vw] h-[45vh]",
		},
		{
			src: "/parallaxPics/parallaxPhoto6.webp",
			scale: scale8,
			className: "relative left-[27.5vw] top-[-2.5vh] w-[15vw] h-[35vh]",
		},
		{
			src: "/parallaxPics/parallaxPhoto3.webp",
			scale: scale9,
			className: "relative top-[31.5vh] left-[-19vw] w-[21vw] h-[28vh]",
		},
        {
			src: "/parallaxPics/parallaxPhoto8.webp",
			scale: scale9,
			className: "relative top-[28.5vh] left-[24vw] w-[13vw] h-[17vh]",
		},
        {
			src: "/parallaxPics/parallaxPhoto4.webp",
			scale: scale9,
			className: "relative top-[27.5vh] left-[5vw] w-[20vw] h-[25vh]",
		},
	];
	return (
		<>
			<section
				id="work"
				ref={container}
				className="h-[300vh] mt-20 relative z-10"
			>
				<div className="sticky top-0 overflow-hidden h-screen z-10">
					<motion.div
						whileInView={{ opacity: 0, transition: { duration: 0.8 } }}
						viewport={{ amount: 0.9, once: true }}
						className="h-screen bg-background absolute inset-0 w-screen z-20 "
					>
						<h2 className="text-[29vw] text-center cursor-default  font-pprightGrotesk">
							ПОРТФОЛИО
						</h2>
					</motion.div>
					{pictures.map(({ src, scale, className }, index) => (
						<motion.div
							key={index}
							style={{ scale }}
							className="w-full h-full top-0 absolute flex items-center justify-center"
						>
							<div className={className}>
								<Image loading="lazy" src={src} fill alt="image" className="object-cover" />
							</div>
						</motion.div>
					))}
				</div>
			</section>
		</>
	);
}
