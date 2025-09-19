'use client';
import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactInfo: React.FC = () => {
  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.9 },
  };

  const containerVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className="fixed top-1/3 left-4 flex flex-col space-y-4 z-50 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-full p-4 shadow-lg transition-colors duration-300"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.a
        href="https://www.linkedin.com/in/izere-ange-felix-aa50b9175/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 dark:text-gray-200 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-300 animate-pulse-glow"
        variants={iconVariants}
        custom={0}
        whileHover="hover"
        whileTap="tap"
        aria-label="Visit LinkedIn Profile"
        title="LinkedIn Profile"
      >
        <FaLinkedin className="text-2xl" />
      </motion.a>
      <motion.a
        href="https://github.com/Angelus123/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 dark:text-gray-200 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-300 animate-pulse-glow"
        variants={iconVariants}
        custom={1}
        whileHover="hover"
        whileTap="tap"
        aria-label="Visit GitHub Profile"
        title="GitHub Profile"
      >
        <FaGithub className="text-2xl" />
      </motion.a>
      <motion.a
        href="https://x.com/izereangefelix"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 dark:text-gray-200 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-300 animate-pulse-glow"
        variants={iconVariants}
        custom={2}
        whileHover="hover"
        whileTap="tap"
        aria-label="Visit Twitter Profile"
        title="Twitter Profile"
      >
        <FaTwitter className="text-2xl" />
      </motion.a>
      <motion.a
        href="mailto:izerefaifelix@gmail.com"
        className="text-gray-800 dark:text-gray-200 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-300 animate-pulse-glow"
        variants={iconVariants}
        custom={3}
        whileHover="hover"
        whileTap="tap"
        aria-label="Send Email"
        title="Send Email"
      >
        <FaEnvelope className="text-2xl" />
      </motion.a>
    </motion.div>
  );
};

export default ContactInfo;

<style jsx>{`
  .animate-pulse-glow {
    animation: pulseGlow 1.5s infinite ease-in-out;
  }
  @keyframes pulseGlow {
    0%,
    100% {
      filter: drop-shadow(0 0 2px rgba(16, 185, 129, 0.3));
    }
    50% {
      filter: drop-shadow(0 0 6px rgba(16, 185, 129, 0.6));
    }
  }
`}</style>