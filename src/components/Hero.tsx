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
    <section id="home" className="relative overflow-x-clip">
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
          className="relative z-20 mx-auto mt-5 max-w-[600px]"
        >
          <ul className="flex flex-row items-center justify-between px-5">
            <motion.li whileTap={{ scale: 0.9 }} whileHover={{ y: 10 }}>
              <a
                className="z-50 cursor-pointer font-pprightGrotesk text-6xl max-sm:text-5xl"
                href="#work"
              >
                РАБОТЫ
              </a>
            </motion.li>
            <motion.li whileTap={{ scale: 0.9 }} whileHover={{ y: 10 }}>
              <a
                className="cursor-pointer font-pprightGrotesk text-6xl max-sm:text-5xl"
                href="#contacts"
              >
                КОНТАКТЫ
              </a>
            </motion.li>
          </ul>
        </motion.nav>
        <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2">
          <motion.h1
            className="font-pprightGrotesk text-[31vw] max-sm:text-[29vw]"
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
          <motion.ul
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: {
                opacity: 1,
				y: 0,
                transition: {
                  duration: 0.8,
                  delay: LOADER_ANIMATION_TIME + 0.8,
                },
              },
            }}
            className="absolute top-[90%] flex -translate-x-1/2 max-sm:left-[10%] max-[370px]:left-0 -translate-y-1/2 flex-row items-center justify-center gap-2 md:hidden"
          >
            <li>ФОТОГРАФ</li>●<li>КОНТЕНТ</li>●<li>ОБУЧЕНИЕ</li>
          </motion.ul>
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
