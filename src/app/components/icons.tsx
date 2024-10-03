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
  { icon: <FaReact size={30} />, title: "React js" },
  { icon: <IoLogoElectron size={30} />, title: "Eletron js" },
  { icon: <RiNextjsLine size={30} />, title: "Next js" },
  { icon: <SiTypescript size={30} />, title: "TypeScript" },
  { icon: <RiTailwindCssFill size={30} />, title: "Tailwind css" },
  { icon: <SiApollographql size={30} />, title: "Apollo" },
  { icon: <FaNodeJs size={30} />, title: "Node js" },
  { icon: <GrGraphQl size={30} />, title: "Graphql" },
  { icon: <BiLogoMongodb size={30} />, title: "Mongodb" },
  { icon: <SiPrisma size={30} />, title: "prisma" },
];

const Icons = () => {
  return (
    <div className="flex flex-wrap">
      {techs.map((tech) => (
        <div
          key={tech.title}
          className="flex flex-col rounded-md items-center p-2 border border-white m-2 cursor-pointer"
        >
          {tech.icon}
          <p className="">{tech.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Icons;
