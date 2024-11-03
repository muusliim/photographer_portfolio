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
      className: "relative w-[25vw] h-[25vh] max-sm:w-[25vw] max-sm:h-[25vh]",
    },
    {
      src: "/parallaxPics/parallaxPhoto2.webp",
      scale: scale5,
      className: " relative top-[-30vh] left-[5vw] w-[35vw] h-[30vh] max-sm:w-[80vw] max-sm:h-[25vh]",
    },
    {
      src: "/parallaxPics/parallaxPhoto7.webp",
      scale: scale6,
      className: "relative top-[-10vh] left-[-25vw] w-[20vw] h-[45vh] max-sm:w-[32vw] max-sm:h-[27vh] max-sm:left-[-30vw] max-sm:top-[-7vh]",
    },
    {
      src: "/parallaxPics/parallaxPhoto6.webp",
      scale: scale8,
      className: "relative left-[27.5vw] top-[-2.5vh] w-[15vw] h-[35vh] max-sm:w-[30vw] max-sm:h-[29vh] max-sm:left-[32vw]",
    },
    {
      src: "/parallaxPics/parallaxPhoto3.webp",
      scale: scale9,
      className: "relative top-[31.5vh] left-[-19vw] w-[21vw] h-[28vh] max-sm:w-[35vw] max-sm:h-[25vh] max-sm:left-[-27vw] max-sm:top-[23vh]",
    },
    {
      src: "/parallaxPics/parallaxPhoto8.webp",
      scale: scale9,
      className: "relative top-[28.5vh] left-[24vw] w-[13vw] h-[17vh] max-sm:w-[45vw] max-sm:h-[15vh] max-sm:left-[25vw] max-sm:top-[23vh]",
    },
    {
      src: "/parallaxPics/parallaxPhoto4.webp",
      scale: scale9,
      className: "relative top-[27.5vh] left-[5vw] w-[20vw] h-[25vh] max-sm:w-[45vw] max-sm:h-[15vh] max-sm:left-[10vw] max-sm:top-[40vh]",
    },
  ];
  return (
    <>
      <section
        id="work"
        ref={container}
        className="relative z-10 mt-20 h-[300vh]"
      >
        <div className="sticky top-0 z-10 h-screen overflow-hidden">
          <motion.div
            whileInView={{ opacity: 0, transition: { duration: 0.8 } }}
            viewport={{ amount: 0.9, once: true }}
            className="absolute inset-0 z-20 h-screen w-screen bg-background"
          >
            <h2 className="absolute left-1/2 top-[40vh] -translate-x-1/2 -translate-y-1/2 cursor-default text-center font-pprightGrotesk text-[29vw]">
              ПОРТФОЛИО
            </h2>
          </motion.div>
          {pictures.map(({ src, scale, className }, index) => (
            <motion.div
              key={index}
              style={{ scale }}
              className="absolute top-0 flex h-full w-full items-center justify-center"
            >
              <div className={className}>
                <Image
                  loading="lazy"
                  src={src}
                  fill
                  alt="image"
                  className="h-10 object-cover max-sm:w-11"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
