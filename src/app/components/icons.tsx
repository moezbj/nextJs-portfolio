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
  { icon: <FaReact size={30} color="#61dbfb" />, title: "React js" },
  { icon: <FaReact size={30} color="#61dbfb" />, title: "React Native" },
  { icon: <IoLogoElectron size={30} color="#4183c4" />, title: "Eletron js" },
  { icon: <RiNextjsLine size={30} color="#000" />, title: "Next js" },
  { icon: <SiTypescript size={30} color="#3178c6" />, title: "TypeScript" },
  { icon: <RiTailwindCssFill size={30} color="#4dc0b5" />, title: "Tailwind css" },
  { icon: <SiApollographql size={30} color="#000" />, title: "Apollo" },
  {
    icon: <FaNodeJs size={30} color="#3c873a" />,
    title: "Node js",
  },
  { icon: <GrGraphQl size={30} color="#E10098" />, title: "Graphql" },
  { icon: <BiLogoMongodb size={30} color="#589636" />, title: "Mongodb" },
  { icon: <SiPrisma size={30} color="#0b344b" />, title: "prisma" },
];

const Icons = () => {
  return (
    <div className="flex flex-wrap">
      {techs.map((tech) => (
        <div
          key={tech.title}
          className="flex flex-col rounded-md items-center p-2 border border-black bg-white mx-1 my-2 lg:m-2 cursor-pointer"
        >
          {tech.icon}
          <p className="text-black mt-2">{tech.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Icons;
