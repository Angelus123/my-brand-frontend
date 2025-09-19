import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const Resume = () => {
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

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="resume"
      className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-100 to-lime-50 transition-colors duration-500"
    >
      {/* Subtle Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.2),transparent_60%)] animate-pulse-slow"></div>
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
            Resume
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"></span>
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-teal-900 leading-relaxed">
            A curated showcase of my expertise, experience, and passion for building innovative software solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12 sm:space-y-16"
        >
          {/* Personal Information */}
          <motion.div variants={itemVariants} className="resume-item flex">
            <div className="flex flex-col items-center mr-6 sm:mr-8">
              <motion.div variants={dotVariants} className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-emerald-500 mb-2 shadow-md"></motion.div>
              <div className="w-1 h-full bg-emerald-500/50 rounded-lg"></div>
            </div>
            <div className="text-sm sm:text-base">
              <h3 className="text-xl sm:text-2xl font-bold text-teal-900 mb-3">IZERE Ange Felix</h3>
              <ul className="list-none space-y-1.5 text-teal-800">
                <li>Kigali, Rwanda</li>
                <li>+250785182823</li>
                <li>izerefaifelix@gmail.com</li>
              </ul>
            </div>
          </motion.div>

          {/* Professional Summary */}
          <motion.div variants={itemVariants} className="resume-item flex">
            <div className="flex flex-col items-center mr-6 sm:mr-8">
              <motion.div variants={dotVariants} className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-emerald-500 mb-2 shadow-md"></motion.div>
              <div className="w-1 h-full bg-emerald-500/50 rounded-lg"></div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-semibold text-teal-900 mb-4">Professional Summary</h3>
              <p className="text-sm sm:text-base text-teal-800 leading-relaxed">
                Results-driven Software Engineer with over 5 years of experience crafting scalable applications. Expert in Java, Python, JavaScript (React, Next.js, Node.js, Nest.js), and PostgreSQL. Proficient in microservices, REST APIs, CI/CD, and DevOps tools like Docker, Kubernetes, and Terraform. Experienced in supporting SMAX systems across AWS, GCP, Azure, and on-prem environments. Passionate about delivering high-quality software in agile, remote settings with a focus on clean code and innovative problem-solving.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemVariants} className="resume-item flex">
            <div className="flex flex-col items-center mr-6 sm:mr-8">
              <motion.div variants={dotVariants} className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-emerald-500 mb-2 shadow-md"></motion.div>
              <div className="w-1 h-full bg-emerald-500/50 rounded-lg"></div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-semibold text-teal-900 mb-4">Skills</h3>
              <ul className="list-none grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base text-teal-800">
                <li><strong>Programming Languages:</strong> JavaScript, Python, Java, TypeScript</li>
                <li><strong>Front-End:</strong> React, Redux, Vue.js, HTML5, CSS3, Tailwind CSS, Bootstrap, Material UI</li>
                <li><strong>Backend:</strong> Node.js, PHP, Firebase, MySQL, MongoDB</li>
                <li><strong>Databases & ORMs:</strong> PostgreSQL, MySQL, MongoDB, Supabase, SQLite, Prisma, Sequelize, Django ORM, SQLC, GORM</li>
                <li><strong>DevOps & CI/CD:</strong> Docker, GitLab CI, Jenkins, GitHub Actions, Terraform (Basic), Kubernetes</li>
                <li><strong>Cloud & Monitoring:</strong> AWS, Azure, GCP (Basic), SMAX, Salesforce, Jira</li>
                <li><strong>Other:</strong> REST APIs, Microservices, Agile Methodologies, Full-Stack Development, Remote Collaboration</li>
              </ul>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants} className="resume-item flex">
            <div className="flex flex-col items-center mr-6 sm:mr-8">
              <motion.div variants={dotVariants} className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-emerald-500 mb-2 shadow-md"></motion.div>
              <div className="w-1 h-full bg-emerald-500/50 rounded-lg"></div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-semibold text-teal-900 mb-4">Education</h3>
              <ul className="list-none space-y-6 text-sm sm:text-base text-teal-800">
                <li>
                  <strong>BSc, Computer Engineering</strong><br />
                  <em>University of Rwanda, 2017–2022</em><br />
                  College of Science and Technology, Kigali, Rwanda
                </li>
                <li>
                  <strong>Full Stack Web Development Program</strong><br />
                  <em>Andela Technical Leadership Program, Jan – Sept 2022 (Remote)</em><br />
                  Completed a 9-month intensive training focused on React, Node.js, PostgreSQL, CI/CD, cloud, and security. Collaborated on real-world projects using git-flow, pair programming, and agile practices.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Professional Experience */}
          <motion.div variants={itemVariants} className="resume-item flex">
            <div className="flex flex-col items-center mr-6 sm:mr-8">
              <motion.div variants={dotVariants} className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-emerald-500 mb-2 shadow-md"></motion.div>
              <div className="w-1 h-full bg-emerald-500/50 rounded-lg"></div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-semibold text-teal-900 mb-4">Professional Experience</h3>
              <ul className="list-none space-y-8 text-sm sm:text-base text-teal-800">
                <li>
                  <strong>Software Engineer & SMAX Support Specialist</strong><br />
                  <em>Teknowledge | Onsite | Oct 2023 – Present</em><br />
                  <ul className="list-disc list-inside mt-2 space-y-1.5">
                    <li>Support OpenText SMAX on Azure, AWS, GCP, and on-prem environments, handling installation, upgrades, and troubleshooting.</li>
                    <li>Develop internal tools using Python, Java, and JavaScript to automate tasks and enhance productivity.</li>
                    <li>Utilize Docker, Kubernetes, and log analysis for efficient debugging and deployment.</li>
                    <li>Integrate systems with external partners for secure and efficient data exchange.</li>
                  </ul>
                </li>
                <li>
                  <strong>Backend Developer</strong><br />
                  <em>Abidors | Remote (Bulgaria) | Mar 2023 – Aug 2023</em><br />
                  <ul className="list-disc list-inside mt-2 space-y-1.5">
                    <li>Developed a full-featured platform using the PERN stack (PostgreSQL, Express.js, React, Node.js).</li>
                    <li>Built secure APIs and optimized database queries, improving performance by 30%.</li>
                    <li>Deployed applications on AWS with CI/CD pipelines, version control, and automated testing.</li>
                    <li>Collaborated in an Agile team with regular sprints and code reviews.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Projects */}
          <motion.div variants={itemVariants} className="resume-item flex">
            <div className="flex flex-col items-center mr-6 sm:mr-8">
              <motion.div variants={dotVariants} className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-emerald-500 mb-2 shadow-md"></motion.div>
              <div className="w-1 h-full bg-emerald-500/50 rounded-lg"></div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-semibold text-teal-900 mb-4">Projects</h3>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-teal-800">
                <li>Abidors Real Estate Platform – Full-stack platform for real estate management.</li>
                <li>Gaia Survey Rwanda Web Application – Survey platform with admin dashboard.</li>
                <li>Akagera & Rhein Academy Website – Educational platform with modern UI.</li>
                <li>Mute Smart Ward – Gesture-based patient monitoring system.</li>
              </ul>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div variants={itemVariants} className="resume-item flex pb-8">
            <div className="flex flex-col items-center mr-6 sm:mr-8">
              <motion.div variants={dotVariants} className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-emerald-500 mb-2 shadow-md"></motion.div>
              <div className="w-1 h-full bg-emerald-500/50 rounded-lg"></div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-semibold text-teal-900 mb-4">Achievements</h3>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-teal-800">
                <li>Andela Full Stack Developer Certificate – 2022</li>
                <li>Udemy Certification in Software Development and Cybersecurity – 2020</li>
                <li>Cisco Certified Network Associate (CCNA) – 2022</li>
                <li>LinkedIn Learning Certificate – DevOps Foundations and Full-Stack Web Development</li>
              </ul>
            </div>
          </motion.div>

          {/* Download Button */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <a
              href="/assets/pdf/felix-software-engineer-5212025.pdf"
              download
              className="inline-flex items-center px-6 py-3 text-white bg-emerald-500 hover:bg-emerald-600 font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Download resume PDF"
            >
              <FiDownload className="w-5 h-5 mr-2" />
              Download My CV
            </a>
          </motion.div>
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
      `}</style>
    </section>
  );
};

export default Resume;