import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import openMenu from "../../../public/open.svg";
import closeMenu from "../../../public/close.svg";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const NavLinks = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const linksStyle = `relative text-text text-links flex justify-center px-4 py-0 hover:text-green ${
    isMenuOpen ? "text-black h-10 py-4" : ""
  }`;

  return (
    <div className="h-10">
      <button
        className="hidden max-md:block bg-none md:border-none md:text-standard max-md:cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <Image
            priority
            className="h-4 w-fit cursor-pointer transform rotate-180 transition-transform duration-500 ease-in-out"
            src={closeMenu}
            alt="Close"
          />
        ) : (
          <Image priority className="h-4 w-fit" src={openMenu} alt="Open" />
        )}
      </button>
      <nav
        className={`px-5 max-md:py-2 max-md:z-50 flex max-md:bg-black max-md:rounded-md max-md:hidden`}
      >
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className={linksStyle}
        >
          Home
        </Link>
        <Link
          href="/portfolio"
          onClick={() => setIsMenuOpen(false)}
          className={linksStyle}
        >
          Portfolio
        </Link>
        <Link
          href="/contact"
          onClick={() => setIsMenuOpen(false)}
          className={linksStyle}
        >
          Contact
        </Link>
      </nav>
      <motion.div
        ref={ref}
        initial={{ y: "-40vh", opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: "-10vh", opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`${
          isMenuOpen
            ? "flex flex-col absolute left-0 right-0 top-0 bg-white w-full h-32"
            : "hidden"
        } `}
      >
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className={linksStyle}
        >
          Home
        </Link>
        <Link
          href="/portfolio"
          onClick={() => setIsMenuOpen(false)}
          className={linksStyle}
        >
          Portfolio
        </Link>
        <Link
          href="/contact"
          onClick={() => setIsMenuOpen(false)}
          className={linksStyle}
        >
          Contact
        </Link>
      </motion.div>
    </div>
  );
};

export default NavLinks;
