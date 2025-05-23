import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="py-12 px-20 bg-gray-100 h-full flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-20 sm:px-6 lg:px-8 w-full">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-blue-400">Resume</h2>
        <div className="space-y-12 text-left text-sm">
          <div className="resume_item flex">
            <div className="flex flex-col items-center mr-8">
              <div className="h-5 w-4 rounded-full bg-blue-500 mb-2"></div>
              <div className="w-1 h-full bg-blue-500 rounded-lg"></div>
            </div>
            <div className="text-xs">
              <ul list-none className="space-y-2">
                <li className=""><h4 className='text-2xl bold'>IZERE Ange Felix</h4></li>
                <li className="">Kigali, Rwanda</li>
                <li className="">+250785182823</li>
                <li className="">izerefaifelix@gmail.com</li>
              </ul>
            </div>
          </div>
          {/* Skills Section */}
          <div className="resume_item flex">
            <div className="flex flex-col items-center mr-8">
              <div className="h-5 w-4 rounded-full bg-blue-500 mb-2"></div>
              <div className="w-1 h-full bg-blue-500 rounded-lg"></div>
            </div>
            <div className="">
              <h3 className="text-2xl font-semibold mb-4">PROFESSIONAL SUMMARY</h3>
              <p list-none className="space-y-2">
                Results-driven Software Engineer with 5+ years of experience in building and supporting scalable applications.
                Skilled in Java, Python, JavaScript (React, Next.js, Node.js and Nest.js), and PostgreSQL.

                Strong in
                microservices, REST APIs, CI/CD, and DevOps tools like Docker, Kubernetes, and Terraform. Experienced in
                supporting SMAX systems across AWS, GCP, Azure, and on-prem environments. deliver quality software in agile,
                remote settings. Known for attention to detail, clean code, and independent problem-solving.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="resume_item flex">
            <div className="flex flex-col items-center mr-8">
              <div className="h-5 w-4 rounded-full bg-blue-500 mb-2"></div>
              <div className="w-1 h-full bg-blue-500 rounded-lg"></div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">SKILLS</h3>
              <ul className="list-none space-y-2">
                <li className="">
                  <strong>Programming Languages:</strong> JavaScript, Python, Java, TypeScript
                </li>
                <li className="">
                  <strong>Front-End:</strong> JavaScript, React, Redux, Vue js, HTML5, CSS3, Tailwind, Bootstrap, and Material UI
                </li>
                <li className="">
                  <strong>Backend:</strong> Node Js, PHP, Firebase, MySQL, MongoDB
                </li>
                <li className="">
                  <strong>Databases & ORMs:</strong>  PostgreSQL, MySQL, MongoDB, Supabase, SQLite, Prisma ORM, Sequelize ORM,
                  Django ORM, SQLC, GORM
                </li>

                <li className="">
                  <strong>DevOps & CI/CD:</strong>  Docker, GitLab CI, Jenkins, GitHub Actions, Terraform (basic), Kubernetes
                </li>
                <li className="">
                  <strong>Cloud & Monitoring:</strong>AWS, Azure, GCP (basic), SMAX, Salesforce, Jira
                </li>
                <li className="">
                  <strong>Other: </strong>REST APIs, microservices, agile, full-stack development, remote collaboration
                </li>
              </ul>
            </div>
          </div>

          {/* Education Section */}
          <div className="resume_item flex w-full">
            <div className="flex flex-col items-center mr-8">
              <div className="h-5 w-4 rounded-full bg-blue-500 mb-2"></div>
              <div className="w-1 h-full bg-blue-500 rounded-lg"></div>
            </div>
            <div className="w-1/3">

              <h3 className="text-2xl font-semibold mb-4">EDUCATION</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm">
                <li className="">
                  <strong>BBSc, Computer Engineering</strong><br />
                  <i>University of Rwanda, 2017–2022</i> <br />
                  <p>College of Science and Technology, Kigali Rwanda</p>
                </li>

                <li className="">
                  <strong>Full Stack Web Development Program</strong><br />
                  <i>Andela Technical Leadership Program, Jan – Sept 2022 (Remote)</i> <br />
                  <p>Completed 9-month intensive training focused on React, Node.js, PostgreSQL, CI/CD, cloud, and security.
                    Collaborated on real-world projects using git-flow, pair programming, and agile practices.</p>
                </li>
              </ul>
            </div>
            {/* Education Section */}
            <div className="resume_item flex">
              <div className="flex flex-col items-center mr-8">
                <div className="h-5 w-4 rounded-full bg-blue-500 mb-2"></div>
                <div className="w-1 h-full bg-blue-500 rounded-lg"></div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">PROFESSIONAL EXPERIENCE </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm">
                    <strong>Software Engineer & SMAX Support Specialist </strong><br />
                    <i>Teknowledge | Onsite | Oct 2023 – Present </i> <br />
                  <li className="">Support OpenText SMAX on Azure, AWS, GCP, and on-prem (install, upgrade, troubleshoot).</li>
                  <li className="">Develop internal software tools using Python, Java and Javascript to automate tasks and boost productivity.</li>
                  <li className="">Use Docker, Kubernetes, and logs for debugging and deployment. </li>
                  <li className="">Integrate systems with external partners for secure, efficient data exchange. </li>
                    <br /><br />
                    <strong>Backend Developer </strong><br />
                    <i>Abidors | Remote (Bulgaria) | Mar 2023 – Aug 2023</i> <br />

                  <li className="">Built a full-featured platform using the PERN stack (PostgreSQL, Express.js, React, Node.js). </li>
                  <li className="">Developed secure APIs and optimized queries, improving performance by 30%. </li>
                  <li className="">Deployed on AWS, using CI/CD, version control, and automated testing. </li>
                  <li className="">Worked in an Agile team with regular sprints and code reviews. </li>
                </ul>
              </div>
            </div>

            <div className="resume_item flex">
              <div className="flex flex-col items-center mr-8">
                <div className="h-5 w-4 rounded-full bg-blue-500 mb-2"></div>
                <div className="w-1 h-full bg-blue-500 rounded-lg"></div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mt-8">PROJECTS</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm">
                  <li className="">Abidors Real Estate Platform</li>
                  <li className="">Gaia Survey Rwanda Web Application</li>
                  <li className="">Akagera & Rhein Academy Website </li>
                  <li className="">Mute Smart Ward – Gesture-Based Patient Monitoring </li>
                </ul>

              </div>
            </div></div>
          {/* Professional Experience Section */}
          <div className="resume_item flex pb-5">
            <div className="flex flex-col items-center mr-8">
              <div className="h-5 w-4 rounded-full bg-blue-500 mb-2"></div>
              <div className="w-1 h-full bg-blue-500 rounded-lg"></div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">ACHIEVEMENTS</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm">
                <li className="">Andela – Full stack developer certificate –2022</li>
                <li className="">UDEMY – Certified in Software development and cyber security. –2020 </li>
                <li className="">Cisco Certified Network Associate (CCNA) –2022</li>
                <li className="">LinkedIn Learning Certificate of  completion  – DevOps Foundations and Full-Stack Web Development</li>
              </ul>
            </div>
          </div>
        </div>
        <a
          href="/assets/pdf/felix-software-engineer-5212025.pdf" // Path to your PDF file in the public folder
          download
          className="inline-block px-6 py-2 text-white bg-blue-400 hover:bg-indigo-700 font-semibold rounded-lg shadow-md transition duration-300"
        >
          📄 DOWNLOAD MY CV
        </a>
      </div>

    </section>
  );
};

export default Resume;