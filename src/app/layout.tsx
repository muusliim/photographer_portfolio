import type { Metadata } from "next";
import { Merriweather, PT_Sans_Narrow } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import clsx from "clsx";

const merriweather = Merriweather({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--merriweather",
});

const pt_sans_narrow = PT_Sans_Narrow({
	subsets: ["cyrillic"],
	weight: ["400", "700"],
	variable: "--pt-sans-narrow",
});

const pprightGrotesk = localFont({
	src: "/fonts/PPRightGroteskTightMedium.woff",
	variable: "--pprightGrotesk",
});

export const metadata: Metadata = {
	title: "Dzhambulat Dikaev",
	description: "Freelance Photographer. Grozny, Chechen Republic",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en, ru">
			<body
				className={clsx(
					merriweather.variable,
					pt_sans_narrow.variable,
					pprightGrotesk.variable
				)}
			>
				{children}
			</body>
		</html>
	);
}
