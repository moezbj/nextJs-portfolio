import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Modal from "react-modal";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import ee from "../../../public/P1.png";
import Link from "next/link";

interface ProjectProps {
  technologies: string;
  title: string;
  image: string;
  color: string;
  id: number;
  deployed: string;
  description: string;
}

const Project = ({
  technologies,
  title,
  image,
  color,
  id,
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
        /* transition-all duration-500 ease-in-out fade */
        className="projectCard lg:h-80 color-white rounded-sm overflow-hidden relative
         grid grid-cols-12 hover:cursor-pointer
        [&_p]:hover:hidden [&_p]:hover:animation-fade [&_p]:hover:transition-all [&_p]:hover:duration-500 [&_p]:hover:ease-in-out
        [&_h3]:hover:hidden [&_h3]:hover:animation-fade [&_h3]:hover:transition-all [&_h3]:hover:duration-500 [&_h3]:hover:ease-in-out
        [&_span]:hover:hidden [&_span]:hover:animation-fade [&_span]:hover:transition-all [&_span]:hover:duration-500 [&_span]:hover:ease-in-out
        [&_img]:hover:scale-125 [&_img]:hover:-translate-x-[60%] [&_img]:hover:transition-all [&_img]:hover:duration-500 [&_img]:hover:ease-in-out
        "
        onClick={handleOpenModal}
      >
        <div className="z-1 h-40 lg:h-80 col-span-12 lg:col-span-6 flex flex-col justify-center items-center m-3">
          <h3 className="text-medium py-2.5 px-0 text-white">{title}</h3>
          <span className="text-standard ">View Work &#8594;</span>
        </div>
        <div className="hidden col-span-4 lg:flex items-center justify-center">
          <Image
            priority
            src={ee}
            alt="Laptop displaying application"
            className="mt-6 "
          />
        </div>
      </div>
      <Modal
        isOpen={showModal}
        // appElement={document.getElementById("root") as HTMLElement || <div />}
        onRequestClose={handleCloseModal}
        ariaHideApp={false}
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
        <p className="text-sm col-span-12 whitespace-break-spaces">
          <span>Technologies:</span> <span className="text-white">{technologies}</span>
        </p>
        <Link
          href={deployed}
          target="_blank"
          className="text-white text-center bg-green border-none text-standard px-6 py-3 rounded-[20px] mt-10 cursor-pointer hover:bg-[#03b979]"
          /*    onClick={() => (window.location.href = deployed)} */
        >
          Live Link
        </Link>
      </Modal>
    </motion.div>
  );
};

export default Project;
