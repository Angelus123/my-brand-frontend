import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const ContactInfo: React.FC = () => {
  return (
      <div className="fixed top-1/3 left-4 flex flex-col space-y-4 z-50 max-w-5xl mx-auto text-center space-y-6">

        <div className="justify-center gap-6 text-4xl">
          <a
            href="https://www.linkedin.com/in/izere-ange-felix-aa50b9175/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <FaLinkedin className="text-gray-800 mb-2 text-2xl"/>
          </a>
          <a
            href="https://github.com/Angelus123/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            <FaGithub className="text-gray-800 mb-2 text-2xl"/>
          </a>
          <a
            href="https://x.com/izereangefelix"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaTwitter className="text-gray-800 mb-2 text-2xl"/>
          </a>
          <a
            href="mailto:izerefaifelix@gmail.com"
            className="hover:text-red-600 transition-colors"
          >
            <FaEnvelope className="text-gray-800 mb-2 text-2xl"/>
          </a>
        </div>
      </div>
  );
};

export default ContactInfo;
