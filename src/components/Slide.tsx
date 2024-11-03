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
    [110 * direction, -200 * direction],
  );
  return (
    <motion.div
      style={{ x: translateX, left: props.left, opacity: 1 }}
      className="absolute bottom-0 max-sm:bottom-12 flex overflow-x-clip whitespace-nowrap"
    >
      <Phrase src={props.src} />

      <Phrase src={props.src} />

      <Phrase src={props.src} />
    </motion.div>
  );
};

const Phrase = ({ src }: { src: string }) => {
  return (
    <div className="flex items-center gap-5 overflow-x-clip px-5 max-sm:px-2">
      <p className="text-[7.5vw] max-sm:text-[13vw]">Freelance Photographer</p>
      <span className="relative aspect-[4/2] h-[7.5vw] overflow-hidden rounded-full">
        <Image style={{ objectFit: "cover" }} src={src} alt="image" fill />
      </span>
    </div>
  );
};
