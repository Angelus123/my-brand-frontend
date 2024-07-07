import React from 'react';
import '../App.css';
import logo from '../assets/img/logo/logo.png';
import jsIcon from '../assets/img/icon/js.png';
import figmaIcon from '../assets/img/icon/figma.png';
import mysqlIcon from '../assets/img/icon/mysql.png';
import cssIcon from '../assets/img/icon/css.png';
import Navigation  from './Navigation';
import Skills from './Skills';
// import mapImage from './assets/img/portfolio/map.png';

const App: React.FC = () => {
  const [isSignUpOpen, setIsSignUpOpen] = React.useState(false);
  
  const openSignUpForm = () => setIsSignUpOpen(true);
  const closeSignUpForm = () => setIsSignUpOpen(false);

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
            <div className="lds-ring-up">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </form>
        </div>
      )}
      <section id='hero'  >
        <div className="container">
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
              <div className="get-started" onClick={openSignUpForm}>Contact me</div>
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
      <Skills />

      <section id="portfolio">
        <div className="section-title">
          <h2>Portfolio</h2>
          <div className="content">
            <h2>My Works</h2>
            <p>Over the years I have worked on different software and web development projects. Below are some of my highlighted works that showcase my skills and experience.</p>
          </div>
        </div>
        {/* <div className="grid-container">
          <div className="grid-item"><img src={mapImage} alt="Project 1" /><p>Project 1</p></div>
          <div className="grid-item"><img src={mapImage} alt="Project 2" /><p>Project 2</p></div>
          <div className="grid-item"><img src={mapImage} alt="Project 3" /><p>Project 3</p></div>
          <div className="grid-item"><img src={mapImage} alt="Project 4" /><p>Project 4</p></div>
        </div> */}
      </section>

      <footer>
        <div className="footer-container">
          <p>&copy; 2024 Felix. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
