import { useState } from "react";
import Link from "next/link";

import openMenu from "../../../public/open.svg";
import closeMenu from "../../../public/close.svg";
import Image from "next/image";

const NavLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const linksStyle =
    "relative text-text text-links flex justify-center px-4 py-0 hover:text-green ";
  return (
    <div className="h-10">
      <button
        className="hidden max-md:block bg-none md:border-none md:text-standard max-md:cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <Image
            className="h-4 cursor-pointer transform rotate-180 transition-transform duration-500 ease-in-out"
            src={closeMenu}
            alt="Close"
          />
        ) : (
          <Image className="h-4" src={openMenu} alt="Open" />
        )}
      </button>
      <nav
        className={`px-5 max-md:py-2 max-md:z-50 max-md:bg-black max-md:rounded-md ${
          isMenuOpen ? "block" : "flex"
        } max-md:hidden`}
      >
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className={linksStyle}
        >
          Home
        </Link>
        <Link
          href="/about"
          onClick={() => setIsMenuOpen(false)}
          className={linksStyle}
        >
          About
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
    </div>
  );
};

export default NavLinks;
