import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Navigation: React.FC = () => {

  return (
    <nav className="fixed top-1/3 right-2 flex w-fit p-1 bg-gray-400 flex-col space-y-4 bg-white p-6 border border-gray-200 shadow-sm hover:shadow-md transition z-50">
      <NavItem to="hero" label="Home" />
      <NavItem to="about" label="About Me " />
      <NavItem to="skill" label="Skills" />
      <NavItem to="portfolio" label="Portfolio" />
      <NavItem to="resume" label="Resume" />
    </nav>
  );
};

const NavItem = ({ to, label }: { to: string; label: string }) => (
  <ScrollLink
    to={to}
    spy={true}
    smooth={true}
    offset={-50}
    duration={500}
    activeClass="bg-gradient-to-r w-30 from-gray-500 to-blue-300 text-white shadow-xl scale-105 before:border-l-white"
    className="relative group w-30 px-6 py-1 pl-8 bg-white/90 rounded-lg shadow-md text-sm cursor-pointer text-gray-800 
               hover:bg-gradient-to-r from-gray-500 to-blue-400 hover:text-white 
               transition-all duration-300 ease-in-out transform hover:scale-105
               before:content-[''] before:absolute before:left-2 before:top-1/2 before:-translate-y-1/2
               before:w-0 before:h-0 before:border-y-8 before:border-r-8 before:border-y-transparent
               before:border-r-white group-hover:before:border-r-blue-500"
  >
    {label}
  </ScrollLink>
);

export default Navigation;
