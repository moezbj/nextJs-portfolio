import React from "react";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { SiApollographql } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";

const Icons = () => {
  return (
    <div className="flex flex-wrap">
      <FaReact size={30} className="mx-1"/>
      <FaNodeJs size={30} className="mx-1"/>
      <SiTypescript size={30} className="mx-1"/>
      <GrGraphQl size={30} className="mx-1"/>
      <SiApollographql size={30} className="mx-1"/>
      <RiNextjsLine size={30} className="mx-1"/>
      <RiTailwindCssFill size={30} className="mx-1"/>
      <BiLogoMongodb size={30} className="mx-1"/>
    </div>
  );
};

export default Icons;
