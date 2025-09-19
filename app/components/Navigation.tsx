import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiHome, FiUser, FiCode, FiBriefcase, FiFolder, FiFileText } from "react-icons/fi";

interface NavigationProps {
  darkMode?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ darkMode = false }) => {
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <nav 
      className={`fixed top-1/2 right-4 transformbg- -translate-y-1/2 flex flex-col space-y-3 p-2 rounded-xl 
                ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-800 border-gray-700 border-gray-200'} 
                border shadow-lg z-50`}
    >
      <NavItem 
        to="hero" 
        label="Home" 
        icon={<FiHome size={16} />} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        darkMode={darkMode}
      />
      <NavItem 
        to="about" 
        label="About" 
        icon={<FiUser size={16} />} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        darkMode={darkMode}
      />
      <NavItem 
        to="skill" 
        label="Skills" 
        icon={<FiCode size={16} />} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        darkMode={darkMode}
      />
      <NavItem 
        to="experiences" 
        label="Experience" 
        icon={<FiBriefcase size={16} />} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        darkMode={darkMode}
      />
      <NavItem 
        to="portfolio" 
        label="Portfolio" 
        icon={<FiFolder size={16} />} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        darkMode={darkMode}
      />
      <NavItem 
        to="resume" 
        label="Resume" 
        icon={<FiFileText size={16} />} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        darkMode={darkMode}
      />
    </nav>
  );
};

interface NavItemProps {
  to: string;
  label: string;
  icon: React.ReactNode;
  activeSection: string;
  setActiveSection: (section: string) => void;
  darkMode: boolean;
}

const NavItem = ({ to, label, icon, activeSection, setActiveSection, darkMode }: NavItemProps) => {
  const isActive = activeSection === to;
  
  return (
    <ScrollLink
      to={to}
      spy={true}
      smooth={true}
      offset={-50}
      duration={500}
      onSetActive={() => setActiveSection(to)}
      className={`relative flex items-center justify-center w-12 h-12 rounded-lg cursor-pointer transition-all duration-300 group
                ${isActive 
                  ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md' 
                  : darkMode 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
    >
      {/* Tooltip */}
      <div className={`absolute right-full mr-3 px-3 py-1.5 text-xs font-medium rounded-md shadow-md
                      ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'} 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
                      whitespace-nowrap transform -translate-y-1/2 top-1/2`}>
        {label}
        {/* Tooltip arrow */}
        <div className={`absolute top-1/2 right-0 w-2 h-2 transform rotate-45 -translate-y-1/2 translate-x-1
                        ${darkMode ? 'bg-gray-700' : 'bg-white'}`}></div>
      </div>
      
      {/* Icon */}
      <div className="flex items-center justify-center">
        {icon}
      </div>
      
      {/* Active indicator */}
      {isActive && (
        <div className="absolute -left-1 top-1/2 w-1 h-6 bg-emerald-500 rounded-full transform -translate-y-1/2"></div>
      )}
    </ScrollLink>
  );
};

export default Navigation;