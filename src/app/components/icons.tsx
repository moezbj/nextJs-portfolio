import React from "react";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { SiApollographql } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoElectron } from "react-icons/io5";
import { SiPrisma } from "react-icons/si";

const techs = [
  { icon: <FaReact size={30} fill="#fff" />, title: "React js" },
  { icon: <IoLogoElectron size={30} fill="#fff" />, title: "Eletron js" },
  { icon: <RiNextjsLine size={30} fill="#fff" />, title: "Next js" },
  { icon: <SiTypescript size={30} fill="#fff" />, title: "TypeScript" },
  { icon: <RiTailwindCssFill size={30} fill="#fff" />, title: "Tailwind css" },
  { icon: <SiApollographql size={30} fill="#fff" />, title: "Apollo" },
  { icon: <FaNodeJs size={30} fill="#fff" />, title: "Node js" },
  { icon: <GrGraphQl size={30} fill="#fff" />, title: "Graphql" },
  { icon: <BiLogoMongodb size={30} fill="#fff" />, title: "Mongodb" },
  { icon: <SiPrisma size={30} fill="#fff" />, title: "prisma" },
];

const Icons = () => {
  return (
    <div className="flex flex-wrap">
      {techs.map((tech) => (
        <div
          key={tech.title}
          className="flex flex-col rounded-md items-center p-2 border border-white m-1 lg:m-2 cursor-pointer"
        >
          {tech.icon}
          <p className="text-white">{tech.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Icons;
