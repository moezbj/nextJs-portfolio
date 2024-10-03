"use client";
import Image from "next/image";
import aboutMeImg from "../../public/aboutme.jpg";
import { motion } from "framer-motion";
import SocialIcons from "./components/SocialIcons";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import Icons from "./components/icons";
import PageHeader from "./components/PageHeader";

const AboutMe = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1S3wFZcIqtuWxQxhOa5F-4OwUhWRPuN9M/view?usp=drive_link";
    link.target = "_blank";
    link.download = "benJemaaMedMoez.pdf";
    link.onload = () => {
      link.remove();
      setDownloading(false);
    };
    document.body.appendChild(link);
    link.click();
  };

  return (
    <section className="flex flex-col items-center mt-12 mx-10 md:mx-30 lg:mx-36 xl:mx-44">
      <PageHeader title="About Me" description="Let me introduce myself" />

      <div className="border-b-[1px] border-b-title mt-12 pb-4">
        <div className="grid grid-cols-12 gap-4 p-0 m-0">
          <motion.div
            className="flex items-center mb-12 col-span-4 max-md:col-span-12 justify-center"
            ref={ref}
            initial={{ x: "-10vw", opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Image
              priority
              src={aboutMeImg}
              alt="image"
              className="h-[330px] w-[330px] p-2 z-50 border-[1px] border-title"
            />
          </motion.div>
          <motion.div
            className="flex items-center mb-12 col-span-8 max-md:col-span-12"
            ref={ref}
            initial={{ x: "10vw", opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="p-2.5">
              <h4 className="text-md mb-3.5 font-normal text-green">
                Nice to meet you
              </h4>
              <h5 className="text-lg mb-3.5 text-text">
                Full stack Developer who creates amazing digital experiences!
              </h5>
              <div className="text-secondaryText">
                <p>
                  I am a seasoned Full Stack JavaScript developer with 5 years
                  of experience in both front-end and back-end development. I
                  specialize in JavaScript frameworks, databases, and server-
                  side technology to create efficient and innovative web
                  applications that exceed client expectations.
                </p>
              </div>
              <div className="border-t-[1px] border-t-title mt-8 pt-8">
                <div className="my-1 grid grid-cols-12 max-md:">
                  <div className="flex col-span-6 max-md:col-span-12 max-md:my-2">
                    <span className="text-text">Name:</span>
                    <p className="text-secondaryText ml-2.5 pl-2.5">
                      Ben jemaa momaed el moez
                    </p>
                  </div>
                  <div className="flex col-span-6 max-md:col-span-12 max-md:my-2">
                    <span className="text-text">Email:</span>
                    <p className="text-secondaryText ml-2.5 pl-2.5">
                      <a
                        href={`mailto:moezbj.93@gmail.com`}
                        className="text-green hover:text-[#03b979]"
                      >
                        moezbj.93@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="my-2 grid grid-cols-12">
                  <div className="flex col-span-6 max-md:col-span-12 max-md:my-2">
                    <span className="text-text">Location:</span>
                    <p className="text-secondaryText ml-2.5 pl-2.5">
                      Tunis, Tunisia
                    </p>
                  </div>
                  <div className="flex col-span-6 max-md:col-span-12 max-md:my-2">
                    <span className="text-text">Availability:</span>
                    <p className="text-secondaryText ml-2.5 pl-2.5">
                      Open for work
                    </p>
                  </div>
                </div>
                <div className="my-2 grid grid-cols-12">
                  <div className="flex items-center col-span-12 max-md:col-span-12 max-md:my-2">
                    <span className="text-text mt-4">Technologies:</span>
                    <Icons />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mr-8">
                <button
                  className="text-[#f9f9f] bg-green border-none text-standard px-6 py-3 rounded-[20px] mt-10 cursor-pointer hover:bg-[#03b979]"
                  onClick={handleDownload}
                  disabled={downloading}
                >
                  {downloading ? "Downloading..." : "Download Resume"}
                </button>{" "}
                <SocialIcons />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
