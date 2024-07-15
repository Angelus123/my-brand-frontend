import React from "react";
import { Link, useLocation } from "react-router-dom";
import Scroll from "react-scroll";

const ScrollLink = Scroll.Link;

interface NavbarProps {}

interface NavbarState {}

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-800 p-4  w-full top-0 fixed">
      <div className="w-fit mx-auto px-4">
        <div className="flex space-x-4">
          <NavLink to="/" active={location.pathname === "/"}>
          <ScrollLink
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            className="text-white hover:text-red-300 cursor-pointer"
            activeClass="text-red-300"
          >
            Home
          </ScrollLink>
           
          </NavLink>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="text-white hover:text-red-300 cursor-pointer"
            activeClass="text-red-300"
          >
            about
          </ScrollLink>

          <ScrollLink
            to="skill"
            spy={true}
            smooth={true}
            duration={500}
            className="text-white hover:text-red-300 cursor-pointer"
            activeClass="text-red-300"
          >
           Skills
          </ScrollLink>
          <ScrollLink
            to="portfolio"
            spy={true}
            smooth={true}
            duration={500}
            className="text-white hover:text-red-300 cursor-pointer"
            activeClass="text-red-300"
          >
           Portifolio
          </ScrollLink>
          <ScrollLink
            to="resume"
            spy={true}
            smooth={true}
            duration={500}
            className="text-white hover:text-red-300 cursor-pointer"
            activeClass="text-red-300"
          >
           Resume
          </ScrollLink>

          
          {/* <NavLink
            to="/GeneralContact"
            active={location.pathname === "/GeneralContact"}
          >
            General Contact
          </NavLink>
          <NavLink
            to="/ServiceRequest"
            active={location.pathname === "/ServiceRequest"}
          >
            Service Request
          </NavLink> */}
        </div>
      </div>
    </nav>
  );
};

// Custom NavLink component to handle active state
interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, active, children }) => {
  return (
    <Link
      to={to}
      className={`text-white hover:text-gray-300 ${active ? "underline" : ""}`}
    >
      {children}
    </Link>
  );
};

export default Navigation;

// import Scroll from 'react-scroll';

// const ScrollLink = Scroll.Link;

// interface NavbarProps {}

// interface NavbarState {}

// class Navbar extends Component<NavbarProps, NavbarState> {
//   render() {
//     return (
//       <nav>
//         <ScrollLink
//           to="hero"
//           spy={true}
//           smooth={true}
//           duration={500}
//           className="some-class"
//           activeClass="some-active-class"
//         >
//           Link Text Goes Here
//         </ScrollLink>
//       </nav>
//     );
//   }
// }

// export default Navbar;
