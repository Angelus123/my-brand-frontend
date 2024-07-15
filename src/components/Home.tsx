import React from 'react';
import '../App.css';
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/img/logo/logo.png';
import jsIcon from '../assets/img/icon/js.png';
import figmaIcon from '../assets/img/icon/figma.png';
import mysqlIcon from '../assets/img/icon/mysql.png';
import cssIcon from '../assets/img/icon/css.png';
import Navigation  from './Navigation';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Resume from './Resume';
// import mapImage from './assets/img/portfolio/map.png';
interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
}

const App: React.FC = () => {
  const [isSignUpOpen, setIsSignUpOpen] = React.useState(false);
  const location = useLocation();
  
  const openSignUpForm = () => setIsSignUpOpen(true);
  const closeSignUpForm = () => setIsSignUpOpen(false);
  const NavLink: React.FC<NavLinkProps> = ({ to, active, children }) => {
    return (
      <Link
        to={to}
        className={`text-black hover:text-white  hover:text-gray-300 ${active ? "underline" : ""}`}
      >
        {children}
      </Link>
    );
  };

  return (
    <div className="App">
      <header className="header">
        <div className="mobile-container">
          <div className="topnav">
            <div className="log">
              <img src={logo} alt="My Brand" height="40px" width="100px" />
            </div>
            <div id="myLinks"></div>
            <a href="javascript:void(0);" className="icon">
              <i className="fa fa-bars"></i>
            </a>
          </div>
        </div>
      </header>

      <Navigation />

      {isSignUpOpen && (
        <div className="form-popup" id="mySignUpForm">
          <form className="form-container-signup">
            <div className="cancel" onClick={closeSignUpForm}>x</div>
            <h1>Sign Up</h1>
            <label htmlFor="name"><b>Name</b></label>
            <input type="text" placeholder="Enter a Name" name="name" required />
            <label htmlFor="email"><b>Email</b></label>
            <input type="email" placeholder="Enter Email" name="email" required />
            <label htmlFor="phone"><b>Phone</b></label>
            <input type="text" placeholder="Enter phone" name="phone" required />
            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" required />
            <label htmlFor="psw"><b>Confirm Password</b></label>
            <input type="password" placeholder="Confirm Password" name="confirmpassword" required />
            <div id="snackbar"></div>
            <div id="errorsnackbar"></div>
            <input type="submit" className="btn" value="Sign Up" />
            <div className="lds-rw-fulling-up">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </form>
        </div>
      )}
      <section id='hero'  className='w-full'>
        <div className="container w-full">
          <div className="item1">
            <div className="hero-title">
              <p>A SOFTWARE ENGINEER</p>
            </div>
          </div>
          <div className="item2">
            <div className="hero-question">
              <h1>I can take Your Web or Software To The Next Level?</h1>
            </div>
            <div className="hero-description">
              <div className="hero-desc">
                <p>Felix will design and build amazing web app and software for you,</p>
                <ul>
                  <li>Take Your Website to best level,</li>
                  <li>Do search Engine Optimization</li>
                  <li>Customer-Oriented</li>
                  <li>Ultra Fast Loading Sites</li>
                  <li>Works Across Devices</li>
                  <li>Happiness Guaranteed</li>
                </ul>
              </div>
               <NavLink
            to="/GeneralContact"
            active={location.pathname === "/GeneralContact"}
          ><div className="get-started" onClick={openSignUpForm}>
             Contact me 
              </div></NavLink>
            </div>
          </div>
          <div className="item3"></div>
        </div>
      </section>

      <section id="about">
        <div className="container-about">
          <div className="section-title-about">
            <h2>About</h2>
            <p>Hello, Felix is persistent and ambitious software engineer with a desire to grow fast in this domain. Capable of ramping up quickly and efficiently, and of both working in a team and independently. Skilled in various languages, frameworks, and technologies</p>
          </div>
          <div className="section-title">
            <div className="content">
              <h2>Background</h2>
              <p>Over the years ago I built a range of skills and qualities that could make me best match for any position require software and web development skills. I'm a quick learner, passionate, and honest in my work, making me a reliable choice for your project</p>
            </div>
          </div>
        </div>
        
      </section>

      <section id="skills">
      <Skills />
      </section>
      <section id="portfolio">
       <Portfolio />
      </section>
      <section id="resume">
       <Resume />
      </section>

      <footer>
        <div className="footer-container py-12 text-center">
          <p>&copy; 2024 Felix. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
