import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="py-12 bg-gray-100 h-full flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 ">Resume</h2>
        <div className="space-y-12 text-left">
          <div className="resume_item flex">
            <div className="flex flex-col items-center mr-8">
              <div className="h-4 w-4 rounded-full bg-gray-800 mb-2"></div>
              <div className="w-px h-full bg-gray-400"></div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">BACKGROUND</h3>
              <ul className="list-none space-y-2">
                <li className="text-lg">IZERE Ange Felix</li>
                <li className="text-lg">
                  Innovative and deadline-driven Software developer with 3+ years of experience,
                  passionate about web designing and development.
                </li>
                <li className="text-lg">Kigali, Rwanda</li>
                <li className="text-lg">+250785182823</li>
                <li className="text-lg">izerefaifelix@gmail.com</li>
              </ul>
            </div>
          </div>

          {/* Skills Section */}
          <div className="resume_item flex">
            <div className="flex flex-col items-center mr-8">
              <div className="h-4 w-4 rounded-full bg-gray-800 mb-2"></div>
              <div className="w-px h-full bg-gray-400"></div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">SKILLS</h3>
              <ul className="list-none space-y-2">
                <li className="text-lg">
                  <strong>Front-End:</strong> JavaScript, React, Redux, Vue js, HTML5, CSS3, Tailwind, Bootstrap, and Material UI
                </li>
                <li className="text-lg">
                  <strong>Backend:</strong> Node Js, PHP, Firebase, MySQL, MongoDB
                </li>
              </ul>
            </div>
          </div>

          {/* Education Section */}
          <div className="resume_item flex">
            <div className="flex flex-col items-center mr-8">
              <div className="h-4 w-4 rounded-full bg-gray-800 mb-2"></div>
              <div className="w-px h-full bg-gray-400"></div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">EDUCATION</h3>
              <ul className="list-none space-y-2">
                <li className="text-lg">
                  <strong>BACHELOR OF COMPUTER AND SOFTWARE ENGINEERING</strong><br/>
                  2017 - 2020<br/>
                  College of Science and Technology, University of Rwanda
                </li>
              </ul>
              <h3 className="text-2xl font-semibold mt-8">PROJECTS</h3>
              <ul className="list-none space-y-2">
                <li className="text-lg">Diligram chrome extension</li>
                <li className="text-lg">A mute smart ward</li>
                <li className="text-lg">Sybele dashboard</li>
                <li className="text-lg">Text console</li>
              </ul>
            </div>
          </div>

          {/* Professional Experience Section */}
          <div className="resume_item flex">
            <div className="flex flex-col items-center mr-8">
              <div className="h-4 w-4 rounded-full bg-gray-800 mb-2"></div>
              <div className="w-px h-full bg-gray-400"></div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Professional Experience</h3>
              <ul className="list-none space-y-2">
                <li className="text-lg">Full Stack developer</li>
                <li className="text-lg">Two years of experience in Full Stack development using MERN and LAMP stack</li>
                <li className="text-lg">Andela ATLP</li>
                <li className="text-lg">BTC- blockchain</li>
                <li className="text-lg">Akagera & Rheign- website development</li>
                <li className="text-lg">Panel Tech - website development</li>
                <li className="text-lg">HAZA Tech - website development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;