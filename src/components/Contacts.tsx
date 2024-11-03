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
        <h2 className="text-center font-pprightGrotesk text-7xl">КОНТАКТЫ</h2>
        <div className="flex h-[70vh] max-sm:h-[60vh] flex-col items-center justify-center max-sm:px-5">
          <div className="mx-auto grid h-full w-full max-w-[900px] grid-cols-2 place-items-center gap-8">
            <div className="relative h-[90%] w-full">
              <Image
                src={"/photo_2.webp"}
                fill
                alt="dzhambo"
                className="object-cover max-sm:w-[40%]"
              />
            </div>
            <div className="flex h-full flex-col items-baseline justify-around">
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
          <div className="mx-auto w-[80%] border-spacing-1 border border-white"></div>
          <div className="mx-auto mt-7 flex w-full max-w-[900px] flex-row justify-between max-sm:flex-col">
            <p className="text-3xl max-sm:text-center max-sm:text-lg">
              © {new Date().getFullYear()}
            </p>
            <div className="flex flex-row justify-center gap-3 align-baseline">
              <motion.span
                className="text-[50px] leading-[0.55] max-sm:text-[26px] max-sm:leading-[1]"
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
              <p className="text-3xl max-sm:text-lg">GROZNY</p>
              <div className="text-3xl max-sm:text-lg">
                {`${time.hours}:${time.minutes}:${time.seconds}`}
              </div>
            </div>
            <a
              href="#home"
              className="text-3xl max-sm:mt-8 max-sm:text-center max-sm:text-2 xl"
            >
              ВВЕРХ{" "}
              <motion.span
                className="inline-block"
                animate={{
                  y: -5,
                  transition: {
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 3,
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
