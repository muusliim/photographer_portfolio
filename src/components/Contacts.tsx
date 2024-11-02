"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MagneticLink from "./MagneticLink";

export default function Contacts() {
	interface Time {
		hours: number | string;
		minutes: number | string;
		seconds: number | string;
	}

	const [time, setTime] = useState<Time>({
		hours: 0,
		minutes: 0,
		seconds: 0,
	});
	useEffect(() => {
		const interval = setInterval(() => {
			setTime({
				hours:
					new Date().getHours() < 10
						? `0${new Date().getHours()}`
						: new Date().getHours(),
				minutes:
					new Date().getMinutes() < 10
						? `0${new Date().getMinutes()}`
						: new Date().getMinutes(),
				seconds:
					new Date().getSeconds() < 10
						? `0${new Date().getSeconds()}`
						: new Date().getSeconds(),
			});
		}, 1000);
		return () => clearInterval(interval);
	}, [setTime]);

	return (
		<section className="h-[101vh] bg-background" id="contacts">
			<div className="pt-10">
				<h2 className="text-center text-7xl font-pprightGrotesk ">КОНТАКТЫ</h2>
				<div className="flex flex-col justify-center items-center  h-[70vh]">
					<div className="grid grid-cols-2 gap-8 place-items-center max-w-[900px] h-full w-full mx-auto">
						<div className="relative w-full h-[90%]">
							<Image
								src={"/photo_2.webp"}
								fill
								alt="dzhambo"
								className="object-cover"
							/>
						</div>
						<div className="flex flex-col justify-around items-baseline h-full">
							<MagneticLink>
								<Link href="https://www.instagram.com/dzhambulatd">
									<Image
										src={"/icons/insta.svg"}
										alt="inst"
										width={80}
										height={80}
									/>
								</Link>
							</MagneticLink>

							<MagneticLink>
								<Link href="https://t.me/Dzhambulat">
									<Image
										src={"/icons/telegram.svg"}
										alt="telegram"
										width={80}
										height={80}
									/>
								</Link>
							</MagneticLink>
							<MagneticLink>
								<Link href="www.google.com">
									{" "}
									<Image
										src={"/icons/whatsapp.svg"}
										alt="whatsapp"
										width={80}
										height={80}
									/>
								</Link>
							</MagneticLink>
						</div>
					</div>
				</div>
				<div>
					<div className="border-spacing-1 border-white border mx-auto w-[80%]"></div>
					<div className="flex mt-7 flex-row justify-between max-w-[900px] w-full mx-auto">
						<p className="text-3xl">© {new Date().getFullYear()}</p>
						<div className="flex flex-row justify-center align-baseline gap-3">
							<motion.span
								className="text-[50px] leading-[0.55] "
								animate={{
									opacity: 0,
									transition: {
										duration: 2,
										repeat: Infinity,
										repeatType: "reverse",
									},
								}}
							>
								●
							</motion.span>
							<p className="text-3xl">GROZNY</p>
							<div className="text-3xl">
								{`${time.hours}:${time.minutes}:${time.seconds}`}
							</div>
						</div>
						<a href="#home" className="text-3xl">
							ВВЕРХ{" "}
							<motion.span
								className="inline-block"
								animate={{
									y: -5,
									transition: {
										duration: 0.6,
										repeat: Infinity,
										repeatType: "reverse",
										delay: 3
									},
								}}
							>
								↑
							</motion.span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
