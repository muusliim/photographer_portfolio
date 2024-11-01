"use client";
import { motion, useScroll } from "framer-motion";
import { Slide } from "./Slide";
import { useRef } from "react";
import { LOADER_ANIMATION_TIME } from "./Loader";

export default function Hero() {
	const container = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});

	return (
		<section id="home" className="relative overflow-x-clip ">
			<motion.div
				variants={{
					hidden: {
						opacity: 0,
					},
					visible: {
						opacity: 1,
					},
				}}
				initial="hidden"
				animate="visible"
				className="h-screen"
			>
				<motion.nav
					variants={{
						hidden: { opacity: 0 },
						visible: {
							opacity: 1,
							transition: { duration: 0.5, delay: 0.5 + LOADER_ANIMATION_TIME },
						},
					}}
					className="mt-5 max-w-[600px] z-20 relative mx-auto"
				>
					<ul className="flex flex-row justify-between items-center ">
						<motion.li whileTap={{ scale: 0.9 }} whileHover={{ y: 10 }}>
							<a
								className="text-6xl cursor-pointer z-50 font-pprightGrotesk"
								href="#work"
							>
								РАБОТЫ
							</a>
						</motion.li>
						<motion.li whileTap={{ scale: 0.9 }} whileHover={{ y: 10 }}>
							<a className="text-6xl cursor-pointer font-pprightGrotesk" href="#contacts">
								КОНТАКТЫ
							</a>
						</motion.li>
					</ul>
				</motion.nav>
				<div className="absolute top-[45%]  left-1/2 -translate-x-1/2 -translate-y-1/2">
					<motion.h1
						className="text-[31vw]  font-pprightGrotesk"
						variants={{
							hidden: {
								opacity: 0,
								y: 100,
							},
							visible: {
								opacity: 1,
								y: 0,
								transition: {
									duration: 0.5,
									delay: LOADER_ANIMATION_TIME,
								},
							},
						}}
					>
						DZHAMBULAT
					</motion.h1>
				</div>
				<motion.div className="relative h-full"></motion.div>
				<motion.div
					variants={{
						hidden: { opacity: 0 },
						visible: {
							opacity: 1,
							transition: { duration: 0.5, delay: LOADER_ANIMATION_TIME + 1 },
						},
					}}
					ref={container}
				>
					<Slide
						src={"/heroSliderPhoto.webp"}
						direction={"left"}
						progress={scrollYProgress}
						left={"-26%"}
					/>
				</motion.div>
			</motion.div>
		</section>
	);
}
