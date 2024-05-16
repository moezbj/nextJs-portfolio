"use client";
import { FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import SocialIcons from "../components/SocialIcons";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface infoProps {
  name: string;
  email: string;
  location: string;
}

const ContactInfo = ({ name, email, location }: infoProps) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <motion.div
      className="contactInfo"
      ref={ref}
      initial={{ x: "10vw", opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <h4 className="text-text font-bold">Contact Information</h4>
      <p className="mb-7 text-secondaryText">
        Open for opportunities. Let&lsquo;s connect and build something awesome
        together!{" "}
      </p>
      <ul className="listInfo">
        <li>
          <div className="flex items-center my-1">
            <span className="w-[50px] h-[50px] flex items-center">
              <FaUser size={20} />
            </span>
            <div className="pl-8 border-l-[2px] border-l-title gap-y-2">
              <h6 className="text-text text-md">Name</h6>
              <span className="text-secondaryText">{name}</span>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-center my-1">
            <span className="w-[50px] h-[50px] flex items-center">
              <FaLocationDot size={20} />
            </span>
            <div className="pl-8 border-l-[2px] border-l-title gap-y-2">
              <h6 className="text-text text-md">Location</h6>
              <span className="text-secondaryText">{location}</span>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-center my-1">
            <span className="w-[50px] h-[50px] flex items-center">
              <MdEmail size={20} />
            </span>
            <div className="pl-8 border-l-[2px] border-l-title">
              <h6 className="text-text text-md">Email</h6>
              <span className="infoValue">
                <a className="text-green" href={`mailto:${email}`}>
                  {email}
                </a>
              </span>
            </div>
          </div>
        </li>
      </ul>
      <SocialIcons />

    </motion.div>
  );
};

export default ContactInfo;
