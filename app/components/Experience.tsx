import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiChevronRight } from 'react-icons/fi';

const project1 = '/images/assets/img/portfolio/portfolio-1.jpg';
const project2 = '/images/assets/img/portfolio/portfolio-2.jpg';
const project3 = '/images/assets/img/portfolio/gaia-landingpage.png';
const project4 = '/images/assets/img/portfolio/portfolio-4.jpg';
const placeholderImage = '/images/placeholder.png';

interface Experience {
  company: string;
  role: string;
  period: string;
  image: string;
  location: string;
  description: string | string[];
  link?: string | null;
}

const experiences: Experience[] = [
  {
    company: 'Teknowledge',
    role: 'Software Developer',
    period: 'Oct 2023 – Present',
    image: project1,
    location: 'Onsite, Rwanda',
    description: [
      'Support OpenText SMAX on Azure, AWS, GCP, and on-prem environments, handling installation, upgrades, and troubleshooting.',
      'Develop internal software tools using Python, Java, and JavaScript to automate tasks and enhance productivity.',
      'Utilize Docker, Kubernetes, and log analysis for efficient debugging and deployment.',
      'Integrate systems with external partners for secure and efficient data exchange.',
    ],
  },
  {
    company: 'Abidors',
    role: 'Software Developer',
    period: 'Mar 2023 – Aug 2023',
    image: project2,
    location: 'Remote, Bulgaria',
    description: [
      'Built a full-featured platform using the PERN stack (PostgreSQL, Express.js, React, Node.js).',
      'Developed secure APIs and optimized database queries, improving performance by 30%.',
      'Led API design, business logic, and frontend-backend integration.',
      'Deployed on AWS using CI/CD pipelines, version control, and automated testing.',
      'Collaborated in an Agile team with regular sprints and code reviews.',
    ],
  },
  {
    company: 'Gaia Survey Rwanda',
    role: 'Full-Stack Developer',
    period: 'Mar 2019 – Nov 2019',
    image: project3,
    location: 'Kigali, Rwanda',
    description:
      'Developed a web platform for Gaia Survey Rwanda, a division of Gaia Survey AB Sweden, specializing in well/borehole construction, water pipeline installations, and pump systems. Built features for water treatment, storage solutions, and management tools for public and private wells.',
  },
  {
    company: 'Sluu Corporation LTD',
    role: 'Frontend Engineer',
    period: 'Nov 2019 – Jan 2020',
    image: project4,
    location: 'Remote',
    description: [
      'Led full-stack development of a PERN-based web platform, managing architecture and frontend/backend.',
      'Built a secure JavaScript sandbox with React and Babylon.js for in-browser code execution.',
      'Designed and deployed an admin dashboard for analytics, user management, and subscriptions.',
      'Integrated real-time chat and video streaming for team collaboration.',
      'Developed a custom VS Code extension to enhance developer workflow.',
      'Provided technical support, ensuring platform stability and user satisfaction.',
    ],
  },
  {
    company: 'Andela',
    role: 'Software Developer',
    period: 'Jan 2019 – Apr 2020',
    image: project4,
    location: 'Kigali, Rwanda',
    description: [
      "Selected as a full-stack developer through Andela's competitive talent program.",
      "Contributed to Author's Haven, a full-stack article publishing platform using PostgreSQL, React/Redux, Node.js, and Express.",
      'Built new features, improved UI/UX, and maintained test coverage with unit/integration tests.',
      'Collaborated with Agile teams to deliver scalable, production-ready code.',
      'Led interviews and mentored new developers through bootcamp sessions.',
      'Gained hands-on experience in distributed, high-performance engineering teams.',
    ],
    link: 'https://andela.com',
  },
];

const Experiences = () => {
  const [selectedCompany, setSelectedCompany] = useState<string>('Andela');
  const [showFullDescription, setShowFullDescription] = useState(false);

  const currentExperience = experiences.find((exp) => exp.company === selectedCompany);

  const toggleDescription = () => setShowFullDescription(!showFullDescription);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <section
      id="experiences"
      className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-100 to-lime-50 transition-colors duration-500"
    >
      {/* Computer-Themed Background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1920 1080"
        >
          <defs>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 0.2 }} />
              <stop offset="100%" style={{ stopColor: '#0d9488', stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>
          <g>
            {/* Circuit Lines */}
            <path
              d="M0 200 H400 V400 H800 V600 H1200 V800 H1600 V1080"
              stroke="url(#circuitGradient)"
              strokeWidth="2"
              fill="none"
              className="animate-circuit"
            />
            <path
              d="M1920 100 H1600 V300 H1200 V500 H800 V700 H400 V900 H0"
              stroke="url(#circuitGradient)"
              strokeWidth="2"
              fill="none"
              className="animate-circuit-reverse"
            />
            {/* Glowing Nodes */}
            <circle cx="400" cy="200" r="6" fill="#10b981" className="animate-pulse-node" />
            <circle cx="800" cy="400" r="6" fill="#10b981" className="animate-pulse-node delay-200" />
            <circle cx="1200" cy="600" r="6" fill="#10b981" className="animate-pulse-node delay-400" />
            <circle cx="1600" cy="800" r="6" fill="#10b981" className="animate-pulse-node delay-600" />
          </g>
        </svg>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.25),transparent_60%)] animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-emerald-700 mb-4 relative inline-block"
          >
            Professional Experience
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: '50%' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-2 left-1/4 w-1/2 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"
            ></motion.span>
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-teal-900 leading-relaxed">
            A visual journey through my professional roles, showcasing expertise in cutting-edge technologies and impactful contributions.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
          {/* Tab Navigation */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4 mb-8 bg-white/95 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow-lg"
          >
            {experiences.map((exp, index) => (
              <motion.button
                key={exp.company}
                variants={tabVariants}
                onClick={() => {
                  setSelectedCompany(exp.company);
                  setShowFullDescription(false);
                }}
                className={`flex items-center px-4 sm:px-6 py-2.5 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 transform hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                  selectedCompany === exp.company
                    ? 'bg-emerald-600 text-white shadow-xl'
                    : 'bg-white/90 text-teal-800 hover:bg-emerald-100/90 border border-teal-200/50'
                }`}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`View experience at ${exp.company}`}
              >
                <FiChevronRight className={`w-4 h-4 mr-2 ${selectedCompany === exp.company ? '' : 'opacity-60'}`} />
                {exp.company}
              </motion.button>
            ))}
          </motion.div>

          {/* Experience Details */}
          <AnimatePresence mode="wait">
            {currentExperience && (
              <motion.div
                key={currentExperience.company}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: 30 }}
                className="flex flex-col lg:flex-row gap-6 sm:gap-8 bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-2xl relative overflow-hidden"
              >
                {/* Subtle Card Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]" />
                
                {/* Left Side: Image */}
                <motion.div
                  variants={imageVariants}
                  className="w-full lg:w-1/3 relative h-48 sm:h-64 lg:h-80 rounded-lg overflow-hidden shadow-lg"
                >
                  <Image
                    src={currentExperience.image}
                    alt={`${currentExperience.company} illustration`}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    placeholder="blur"
                    blurDataURL={placeholderImage}
                    onError={(e) => {
                      e.currentTarget.src = placeholderImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 border-4 border-emerald-500/20 rounded-lg" />
                </motion.div>

                {/* Right Side: Details */}
                <div className="w-full lg:w-2/3 relative">
                  <motion.h3
                    variants={itemVariants}
                    className="text-xl sm:text-2xl lg:text-3xl font-semibold text-teal-900 mb-2"
                  >
                    {currentExperience.role}
                  </motion.h3>
                  <motion.p
                    variants={itemVariants}
                    className="text-sm sm:text-base text-teal-800 italic mb-4"
                  >
                    {currentExperience.period} · {currentExperience.location}
                  </motion.p>
                  <motion.div variants={itemVariants} className="text-sm sm:text-base text-teal-800 leading-relaxed">
                    {Array.isArray(currentExperience.description) ? (
                      <>
                        <ul className="list-none space-y-3">
                          {(showFullDescription
                            ? currentExperience.description
                            : currentExperience.description.slice(0, 3)
                          ).map((item, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -15 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start"
                            >
                              <FiChevronRight className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0 animate-pulse-glow" />
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                        {currentExperience.description.length > 3 && (
                          <motion.button
                            onClick={toggleDescription}
                            className="mt-4 text-emerald-500 hover:text-emerald-600 font-medium underline transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label={showFullDescription ? 'Show less details' : 'Show more details'}
                          >
                            {showFullDescription ? 'Show Less' : 'Show More'}
                          </motion.button>
                        )}
                      </>
                    ) : (
                      <p>{currentExperience.description}</p>
                    )}
                  </motion.div>
                  {currentExperience.link && currentExperience.link !== '#' ? (
                    <motion.a
                      variants={itemVariants}
                      href={currentExperience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-4 px-4 py-2 bg-emerald-500 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`Visit ${currentExperience.company} website`}
                    >
                      <FiExternalLink className="w-5 h-5 mr-2" />
                      Visit {currentExperience.company}
                    </motion.a>
                  ) : (
                    <motion.span
                      variants={itemVariants}
                      className="inline-flex items-center mt-4 px-4 py-2 bg-gray-200 text-gray-500 rounded-lg font-medium cursor-not-allowed"
                      aria-label={`Website for ${currentExperience.company} not available`}
                    >
                      <FiExternalLink className="w-5 h-5 mr-2" />
                      Visit {currentExperience.company} (Coming Soon)
                    </motion.span>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse 12s infinite ease-in-out;
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-circuit {
          animation: circuitFlow 20s linear infinite;
        }
        .animate-circuit-reverse {
          animation: circuitFlow 20s linear infinite reverse;
        }
        @keyframes circuitFlow {
          0% {
            stroke-dashoffset: 0;
            stroke-dasharray: 50 2000;
          }
          100% {
            stroke-dashoffset: -2000;
            stroke-dasharray: 50 2000;
          }
        }
        .animate-pulse-node {
          animation: pulseNode 2s infinite ease-in-out;
        }
        .animate-pulse-node.delay-200 {
          animation-delay: 0.2s;
        }
        .animate-pulse-node.delay-400 {
          animation-delay: 0.4s;
        }
        .animate-pulse-node.delay-600 {
          animation-delay: 0.6s;
        }
        @keyframes pulseNode {
          0%,
          100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        .animate-pulse-glow {
          animation: pulseGlow 1.5s infinite ease-in-out;
        }
        @keyframes pulseGlow {
          0%,
          100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
            filter: drop-shadow(0 0 4px rgba(16, 185, 129, 0.5));
          }
        }
      `}</style>
    </section>
  );
};

export default Experiences;