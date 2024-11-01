import { MotionValue, useTransform, motion } from "framer-motion";
import Image from "next/image";

export const Slide = (props: {
	src: string;
	left: string;
	direction: string;
	progress: MotionValue<number>;
}) => {
	const direction = props.direction == "left" ? -1 : 1;

	const translateX = useTransform(
		props.progress,
		[0, 1],
		[110 * direction, -200 * direction]
	);
	return (
		<motion.div
			style={{ x: translateX, left: props.left, opacity: 1}}
			className="absolute bottom-0 flex whitespace-nowrap overflow-x-clip"
		>
			<Phrase src={props.src} />

			<Phrase src={props.src} />

			<Phrase src={props.src} />
		</motion.div>
	);
};

const Phrase = ({ src }: { src: string }) => {
	return (
		<div className={"px-5 flex gap-5 items-center overflow-x-clip"}>
			<p className="text-[7.5vw]">Freelance Photographer</p>
			<span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
				<Image style={{ objectFit: "cover" }} src={src} alt="image" fill />
			</span>
		</div>
	);
};
