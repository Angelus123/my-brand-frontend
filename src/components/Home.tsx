import React from 'react';
import '../App.css';
import logo from '../assets/img/logo/logo.png';
import Scroll from "react-scroll";
import Navigation from './Navigation';
import Skills from './SkillsSection';
import Portfolio from './Portfolio';
import Resume from './Resume';
import CodeTyping from './CodeTyping';
import ContactInfo from './ContactInfo'

const App: React.FC = () => {
  const ScrollLink = Scroll.Link;
  return (
    <div className="App">
      <header className="header">
        <div className="mobile-container">
          <div className="topnav">
            <div className="log">
              <img src={logo} alt="My Brand" height="40px" width="100px" />
            </div>
          </div>
        </div>
      </header>

      <Navigation />
      <section id='hero' className='w-full'>
        <div className="container w-full">
          <div className="item1">
            <div className="text-center md:text-center space-y-2  w-full fixed top-0 left-0  ">
              <h1 className="text-5xl md:text-3xl text-white w-1/3 bg-gradient-to-r from-gray-500 via-gray-600 to-blue-500 rounded-br-full">
                Hello, <span className="text-white">Felix </span>Here!
              </h1>
              
            </div>
            <div className="text-center md:text-center space-y-2 mt-12">
              <p className="text-lg md:text-2xl py-4 font-semibold uppercase tracking-widest text-blue-500 drop-shadow-lg">
                A SOFTWARE ENGINEER | DEVOPS | QA Engineer
              </p>
            </div>
            <CodeTyping />
            <div className="text-green-400 space-y-4 font-mono p-2 rounded-lg shadow-lg max-w-xl mx-auto mt-2 overflow-y-auto text-lg md:text-xl  ">Felix will,
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                build applications from development to deployment — handling UI design, backend logic, API integration, testing, and cloud deployment to ensure complete, reliable, and scalable solutions.
              </p>

              <a
                href="/assets/pdf/felix-software-engineer-5212025.pdf" // Path to your PDF file in the public folder
                download
                className="inline-block px-6 py-2 text-white bg-blue-500 hover:bg-indigo-700 font-semibold rounded-lg shadow-md transition duration-300"
              >
                📄 Download My CV
              </a>
            </div>
          </div>
          <ContactInfo />
          <div className="item3"></div>
          <div className="absolute cursor-pointer bottom-0 right-0 flex justify-center">
            <ScrollLink
              to="portfolio"
              spy={true}
              smooth={true}
              duration={500}
              className="px-8 cursor-pointer py-4 bg-gradient-to-r from-gray-500 via-gray-600 to-blue-500 
               text-white text-lg font-bold rounded-full shadow-lg hover:scale-105 
               transform transition-all duration-300 ease-in-out animate-bounce"
            >
              🚀 FLY TO WORK HISTORY!
            </ScrollLink>
          </div>
        </div>
      </section>

      <section id="about">
  <div className="container-about">
    <div className="section-title-about text-blue-500">
      <h2>About</h2>
      <p>
        Hello, Felix is a persistent and ambitious software engineer with a desire to grow fast in this domain. Capable of ramping up quickly and efficiently, and of both working in a team and independently. Skilled in various languages, frameworks, and technologies.
      </p>
    </div>

    <div className="section-background mt-10">
      <div>
        <h2 className="text-3xl font-semibold text-blue-500 mb-6">Education Background</h2>
        <ul className="px-12 text-gray-800 space-y-8">
          <li className="flex items-start gap-4">
            <img src="/assets/icons/ur.jpg" alt="University Icon" className="w-10 h-10 mt-1" />
            <div>
              <strong>BSc, Computer Engineering</strong><br />
              <i>University of Rwanda, 2017–2022</i>
            </div>
          </li>

          <li className="flex items-start gap-4 pr-12">
            <img src="/assets/icons/andela.png" alt="Andela Icon" className="w-10 h-10 mt-1" />
            <div>
              <strong>Full Stack Web Development Program</strong><br />
              <i>Andela Technical Leadership Program, Jan – Sept 2022 (Remote)</i><br />
              Completed 9-month intensive training focused on React, Node.js, PostgreSQL, CI/CD, cloud, and security. Collaborated on real-world projects using git-flow, pair programming, and agile practices.
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

      <section id="skill">
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
