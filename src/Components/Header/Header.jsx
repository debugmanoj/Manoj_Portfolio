import React, { useState } from "react";
import profilePic from "../../assets/Raw_image_edited_circle_v2.webp";
import { FaTimes, FaRegDotCircle } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Skills } from "../../utils/Datas.js";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToWorks = (sectionSelected) => {
    if (isOpen) {
      setIsOpen(false);
      setTimeout(() => {
        document.getElementById(sectionSelected)?.scrollIntoView({ behavior: "smooth" });
      }, 200); // Small delay to allow state update before scrolling
    } else {
      document.getElementById(sectionSelected)?.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  return (
    <>
      <header className="w-full bg-white font-figtree">
        <div className="container mx-auto px-1 md:px-0 lg:px-32 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-4xl md:text-4xl  font-bold text-[#04263e] tracking-tight">manoj</div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 text-base font-medium ">
            {/* <a   className="text-gray-900 hover:text-[#0370DD] cursor-pointer">Home</a> */}
            <a onClick={()=>scrollToWorks("about-section")} className="text-gray-900 hover:text-[#0370DD] cursor-pointer">About</a>
            <a onClick={()=>scrollToWorks("skills-section")} className="text-gray-900 hover:text-[#0370DD] cursor-pointer">Skills</a>
            <a onClick={()=>scrollToWorks("works-section")} className="text-gray-900 hover:text-[#0370DD] cursor-pointer">Projects</a>
            <a onClick={()=>scrollToWorks("contact-section")} className="text-gray-900 hover:text-[#0370DD] cursor-pointer">Contact</a>
            <a href="https://drive.google.com/file/d/1tat0qXA9C_Z8cKPDQehlrYQLfDfHLzv_/view?usp=sharing" target="_blank" className="text-gray-900 hover:text-[#0370DD] cursor-pointer">Resume</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-gray-900 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div
            className={" fixed inset-0 bg-black bg-opacity-50 z-50 flex"}>
            {/* Sidebar */}
            <div

              className="w-64 bg-white h-full  p-2 shadow-lg transform transition-transform duration-1000 ease-in-out translate-x-0"
            >

              <nav className="mt-[10%] text-left flex flex-col space-y-6 text-md font-medium w-full">
                {/* <a href="#"  className="text-gray-900 hover:text-blue-600 hover:bg-slate-100 hover:p-3 hover:rounded-md hover:translate-x-1 duration-300">Home</a> */}
                <a href="#" onClick={()=>scrollToWorks("about-section")} className="text-gray-900 hover:text-blue-600 hover:bg-slate-100 hover:p-3 hover:rounded-sm hover:translate-x-1 duration-300">About</a>
                <a href="#" onClick={()=>scrollToWorks("skills-section")} className="text-gray-900 hover:text-blue-600 hover:bg-slate-100 hover:p-3 hover:rounded-sm hover:translate-x-1 duration-300">Skills</a>
                <a href="#" onClick={()=>scrollToWorks("works-section")} className="text-gray-900 hover:text-blue-600 hover:bg-slate-100 hover:p-3 hover:rounded-sm hover:translate-x-1 duration-300">Projects</a>
                <a href="#" onClick={()=>scrollToWorks("contact-section")}className="text-gray-900 hover:text-blue-600 hover:bg-slate-100 hover:p-3 hover:rounded-sm hover:translate-x-1 duration-300">Contact</a>
                <a href="https://drive.google.com/file/d/1tat0qXA9C_Z8cKPDQehlrYQLfDfHLzv_/view?usp=sharing" target="_blank" className="text-gray-900 hover:text-blue-600 hover:bg-slate-100 hover:p-3 hover:rounded-sm hover:translate-x-1 duration-300">Resume</a>
              </nav>
            </div>
            {/* Clickable Overlay to Close Sidebar */}
            <div className="flex-1" onClick={() => setIsOpen(false)}></div>
          </div>
        )}
      </header>

      {/* Profile Section */}
      <div className="container mx-auto px-1 md:px-0 lg:px-32 flex flex-col  text-center md:text-left md:items-start ">
        <img src={profilePic} className="rounded-full w-32 md:w-[20%] lg:w-28 h-auto" alt="Manoj Profile" />

        <div className="mt-4 md:mt-6 lg:mt-2 bg-[#e5e9eb] font-medium tracking-wider px-3 py-1 rounded-full flex items-center w-fit">
          <FaRegDotCircle color="#047df7" size={12} />
          <span className="ml-2 text-xs text-[#2d4a5e]">Open for Work</span>
        </div>
      </div>

      {/* Title Section */}
      <div className="container mx-auto px-1 md:px-0 lg:px-32 mt-[1%]  md:text-left">
        <p className="text-lg md:text-3xl font-bold text-[#04263e] leading-tight">
          Passionate MERN Developer.
        </p>
        <p className="text-lg md:text-3xl font-bold text-[#04263e] leading-tight">
          Building Intuitive & Scalable Web Solutions
        </p>
        <span className="text-lg md:text-3xl font-bold text-[#04263e]">
          For Growing Startups.
        </span>
      </div>

      {/* Bio Section */}
      <div className="container mx-auto px-1 md:px-0 lg:px-32 mt-4  md:text-left ">
        <p className="text-sm md:text-base text-gray-500 font-medium">
          I'm Manoj, a MERN stack developer with one year of experience.
        </p>
        <p className="text-sm md:text-base text-gray-500 font-medium">
          I firmly believe that learning never stops because no one is a true master.
        </p>
        <p className="text-sm md:text-base text-gray-500 font-medium">
          Technology evolves every day, and I strive to grow, adapt, and improve my skills continuously.
        </p>
      </div>

      

      {/* <div className="container mx-auto px-1 md:px-0 lg:px-32 mt-[2.8%]  md:text-left">
        <a className="font-figtree font-bold text-xs md:text-base lg:text-base text-[#0370DD] border-[#0370DD] py-1 lg:py-3 px-4 border-y-[1px] border-x-[1px] rounded-lg hover:cursor-pointer hover:border-slate-950 hover:text-black  hover:transition-all duration-700 ">
          All Work
        </a>
      </div> */}
      <div className="container mx-auto px-1 mt-[3%] md:px-0 lg:px-32   md:text-left">
      <div className="flex justify-end md:justify-end items-center gap-4">
        <a href="https://www.linkedin.com/in/manoj-kumar10" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-[#0370DD] text-md lg:text-lg" />
        </a>
        <a href="https://github.com/debugmanoj" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-[#0370DD] text-md lg:text-lg" />
        </a>
        <a href="mailto:manojkumarwork01@gmail.com" target="_blank" rel="noopener noreferrer">
          <SiGmail className="hover:text-[#0370DD] text-md lg:text-lg " />
        </a>
      </div>
        {/* <BsArrowDown size={20}/> */}
      </div >

    </>
  );
};

export default Header;