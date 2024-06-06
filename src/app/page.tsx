"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SocialIcons from "./components/SocialIcons";
import landingImage from "../../public/aboutme.jpeg";

const a = {
  name: "Ben jemaa mohamed el moez",
  location: "Loughborough, UK",
  tagline: "I'm a Developer",
  email: "michael-yeates@outlook.com",
  availability: "Open for work",
};

export default function Home() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div className="flex flex-col w-screen h-[calc(100vh-105px)] relative">
      <main className="flex items-center justify-center h-full ">
        <div className="flex flex-col text-center tracking-[1px] z-1 text-white">
          <motion.h1
            className="text-bigTitle1"
            ref={ref}
            initial={{ y: "-10vw", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: "-10vw", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {a.name}
          </motion.h1>
          <motion.p
            className="text-xl"
            ref={ref}
            initial={{ y: "10vw", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: "10vw", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {a.tagline}
          </motion.p>
        </div>
        <div className="image-container">
          <motion.div
            className="absolute bottom-0 right-0 opacity-[0.3] h-[80%]"
            ref={ref}
            initial={{ y: "10vw", opacity: 0 }}
            animate={
              inView ? { y: 0, opacity: 0.4 } : { y: "10vw", opacity: 0 }
            }
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {/* <Image src={landingImage} alt="image" /> */}
          </motion.div>
        </div>
      </main>
      <div className="absolute flex left-12 bottom-12">
        <SocialIcons />
      </div>
    </div>
  );
}
