"use client";
import { useRef } from "react";

import Image from "next/image";
import { useTransform, useScroll, motion, MotionValue } from "framer-motion";
import useDimension from "@/hooks/useDimension";

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
  const y5 = useTransform(scrollYProgress, [0, 1], [0, height]);
  const y6 = useTransform(scrollYProgress, [0, 1], [0, height* 1.2]);

  return (
    <section
      ref={gallery}
      id="gallery"
      className=" relative flex h-[175vh] flex-row gap-[2vw] overflow-hidden bg-background p-[2vw] max-lg:gap-[1vw] max-lg:p-0 max-lg:pr-6 max-sm:p-2"
    >
      <Column
        images={[
          images[0],
          images[1],
          images[2],
          images[3],
          images[4],
          images[5],
        ]}
        classNameColumn="top-[-35%] md:hidden scroll-smooth"
        classNameDiv="md:hidden"
        y={y5}
      />

      <Column
        images={[
          images[6],
          images[7],
          images[8],
          images[9],
          images[10],
          images[11],
        ]}
        y={y6}
        classNameColumn="top-[-25%] md:hidden"
        classNameDiv="md:hidden"
      />
      <Column
        images={[images[0], images[1], images[2]]}
        classNameColumn="top-[-45%] max-sm:hidden"
        y={y}
      />
      <Column
        images={[images[3], images[4], images[5]]}
        y={y2}
        classNameColumn="top-[-90%] max-sm:hidden"
      />
      <Column
        images={[images[6], images[7], images[8]]}
        y={y3}
        classNameColumn="top-[-55%] max-sm:hidden"
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
  classNameDiv,
}: {
  images: string[];
  y: MotionValue<number>;
  classNameColumn?: string;
  classNameDiv?: string;
}) => {
  return (
    <motion.div
      style={{ y }}
      className={`relative flex  h-full w-1/4 min-w-[250px] flex-col gap-[2vw] max-sm:h-full max-sm:w-1/2 max-sm:min-w-[47vw] ${classNameDiv}`}
    >
      {images.map((src, i) => {
        return (
          <div
            key={i}
            className={`relative h-full w-full overflow-hidden rounded-[1vw] ${classNameColumn}`}
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
