import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Modal from "react-modal";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import ee from "../../../public/P1.png";

interface ProjectProps {
  technologies: string;
  title: string;
  image: string;
  color: string;
  id: number;
  github: string;
  deployed: string;
  description: string;
}

const Project = ({
  technologies,
  title,
  image,
  color,
  id,
  github,
  deployed,
  description,
}: ProjectProps) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const variants = {
    hidden: { x: id % 2 === 0 ? "10vw" : "-10vw", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  // Modal.setAppElement("#root");

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <motion.div
      ref={ref}
      className="max-md:col-span-12 col-span-6"
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div
        style={{ backgroundColor: color }}
        className="projectCard lg:h-80 color-white rounded-sm mb-5 overflow-hidden relative transition-all duration-500 ease-in-out p-5 grid grid-cols-12"
        onClick={handleOpenModal}
      >
        <div className="z-1 transition-all duration-900 ease-in-out col-span-6 flex flex-col justify-center items-center m-5 hover:transform hover:-translate-x-60">
          <p className="text-sm whitespace-nowrap">
            <em>{technologies}</em>
          </p>
          <h3 className="text-medium py-2.5 px-0">{title}</h3>
          <span className="text-standard ">View Work &#8594;</span>
        </div>
        <div className="transition-all duration-300 ease-in-out translate-x-[180%] col-span-4 flex items-center justify-center">
          <Image
            src={ee}
            alt="Laptop displaying application"
            className="mt-6 transition-all duration-500 ease-in-out hover:transform hover:-translate-x-3/4"
          />
        </div>
      </div>
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        style={{
          content: {
            backgroundColor: "#101010",
            color: "#9f9f9f",
            padding: "60px",
            display: "flex",
            flexDirection: "column",
            width: "400px",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            zIndex: "999",
          },
        }}
      >
        <IoMdClose onClick={handleCloseModal}></IoMdClose>
        <h3 className="text-center mb-2.5 color-white">{title}</h3>
        <p className="mb-2.5">{description}</p>
        <button
          className="text-white bg-green border-none text-standard px-6 py-3 rounded-[20px] mt-10 cursor-pointer hover:bg-[#03b979]"
          onClick={() => (window.location.href = github)}
        >
          GitHub Repo
        </button>
        <button
          className="text-white bg-green border-none text-standard px-6 py-3 rounded-[20px] mt-10 cursor-pointer hover:bg-[#03b979]"
          onClick={() => (window.location.href = deployed)}
        >
          Live Link
        </button>
      </Modal>
    </motion.div>
  );
};

export default Project;
