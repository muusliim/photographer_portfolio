"use client";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";


export const LOADER_ANIMATION_TIME = 5;
export default function Loader() {

	const images = [
		"/loaderPics/photo_loader-1.webp",
		"/loaderPics/photo_loader-2.webp",
		"/loaderPics/photo_loader-3.webp",
		"/loaderPics/photo_loader-4.webp",
	];

	const [scope, animate] = useAnimate();

	async function myAnimation()   {
		await animate("#imageCon", {
			clipPath: "polygon(50% 40%, 50% 40%, 50% 60%, 50% 60%)",
            opacity: 0
		});

		await animate(
			"#imageCon",
			{
				clipPath: "polygon(0 40%, 100% 40%, 100% 60%, 0 60%)",
				display: "flex",
                opacity: 1,
			},{
				delay: 0.45,
				duration: 0.4,
				ease: "easeInOut",
			});

		await animate(
			"#imageCon",
			{
				clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
				display: "flex",
                opacity: 1
			},{
				delay: 0.2,
				duration: 0.4,
				ease: "easeInOut",
                opacity: {
                    duration: 0.01
                }
			});
	     }

	useEffect(() => {
		myAnimation();
	}, []);

	const move = {
		hidden: (i: number[]) => ({
			y: "100%",
			x: i[0],
		}),
		moveUp: (i: number[]) => ({
			y: 0,
			transition: {
				delay: i[1],
				duration: 0.4,
				ease: "easeInOut",
			},
		}),
		moveRight: {
			x: 20,
			transition: {
				delay: 0.8,
				duration: 0.4,
				ease: "easeInOut",
			},
		},
		moveLeft: {
			x: -20,
			transition: {
				delay: 0.8,
				duration: 0.4,
				ease: "easeInOut",
			},
		},
	};

	const imgChange = {
		hidden: {
			display: "block",
		},
		show: (i: number) => ({
			display: "none",
			transition: {
				duration: 0.6,
				delay: i,
				ease: "easeInOut",
			},
		}),
	};
	const containerUp = {
		hidden: {
			clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
		},
		show: {
			clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
			display: "none",
			transition: {
				delay: 4,
				duration: 0.6,
				ease: "easeInOut",
			},
		},
	};
	return (
		<motion.div
			variants={containerUp}
			initial="hidden"
			animate="show"
			className="h-screen sticky bg-black w-screen  inset-0 overflow-hidden z-50"
			ref={scope}
		>
			<motion.section className="flex max-sm:flex-col justify-center items-center w-full h-full overflow-hidden">
				<div className="overflow-y-clip">
					<motion.h1
						variants={move}
						initial="hidden"
						animate={["moveUp", "moveLeft"]}
						custom={[150, 0.2]}
						className="text-[60px] font-bold max-sm:text-3xl"
					>
						DZHAMBULAT
					</motion.h1>
				</div>
				<motion.div initial={{opacity: 0}} id="imageCon" className="w-[450px] max-sm:w-[300px] h-max relative flex flex-row">
					<motion.img
						variants={imgChange}
						initial="hidden"
						animate="show"
						custom={1.8}
						className="object-cover"
						src={images[0]}
						alt={`1photo`}
					/>
					<motion.img
						variants={imgChange}
						initial="hidden"
						animate="show"
						custom={2.2}
						className="object-cover"
						src={images[1]}
						alt={`2photo`}
					/>
					<motion.img
						variants={imgChange}
						initial="hidden"
						animate="show"
						custom={2.6}
						className="object-cover"
						src={images[2]}
						alt={`3photo`}
					/>
					<motion.img
						variants={{
                            lastImgHidden: {
                                display: "none",
                                opacity: 0
                            },
                            lastImgShow: {
                                display: "block",
                                opacity: 1
                            }
                        }}
						initial="lastImgHidden"
						animate="lastImgShow"
						transition={{ delay: 3, duration: 0.3, ease: "easeInOut" }}
						className="object-cover"
						src={images[3]}
						alt={`4photo`}
					/>
				</motion.div>
				<div className="overflow-y-clip">
					<motion.h2
						variants={ move}
						initial="hidden"
						animate={["moveUp", "moveRight"]}
						custom={[-150, 0.3]}
						className="text-[60px] font-bold max-sm:text-3xl translate-y[--x]"
					>
						DIKAEV
					</motion.h2>
				</div>
			</motion.section>
		</motion.div>
	);
}
