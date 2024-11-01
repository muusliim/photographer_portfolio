"use client";
import Contacts from "@/components/Contacts";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import ParallaxGallery from "@/components/ParallaxGallery";
import ParallaxScrollGallery from "@/components/ParallaxScrollGallery";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
	useEffect(() => {
		const lenis = new Lenis();

		document.querySelectorAll('a[href^="#"]').forEach((el) => {
			el.addEventListener("click", (e) => {
				e.preventDefault();
				const id = el.getAttribute("href")?.slice(1);
				if (!id) return;
				const target = document.getElementById(id);
				if (target) {
					target.scrollIntoView({ behavior: "smooth" });
				}
			});
		});

		function raf(time: number) {
			lenis.raf(time);

			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);

	return (
		<main>
			<Loader />
			<Hero />
			<ParallaxGallery />
			<ParallaxScrollGallery />
			<Contacts />
		</main>
	);
}
