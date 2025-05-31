import { useState } from "react";
import project1 from '../assets/img/portfolio/portfolio-1.jpg';
import project2 from '../assets/img/portfolio/portfolio-2.jpg';
import project3 from '../assets/img/portfolio/gaia-landingpage.png';
import project4 from '../assets/img/portfolio/portfolio-4.jpg';

interface Experience {
    company: string;
    role: string;
    period: string;
    image: string,
    location: string;
    description: string | string[],
    link?: string | null;
}

const experiences: Experience[] = [
    {
        company: "Teknowledge",
        role: "Software Developer",
        period: "Oct 2023 – Present ",
        image: project1,
        location: "On Site,  Rwanda",
        description: [
            "Support OpenText SMAX on Azure, AWS, GCP, and on-prem (install, upgrade, troubleshoot).",
            "Develop internal software tools using Python, Java, and JavaScript to automate tasks and boost productivity.",
            "Use Docker, Kubernetes, and logs for debugging and deployment.",
            "Integrate systems with external partners for secure, efficient data exchange.",
        ],
    },
    {
        company: "Abidors",
        role: "Software Developer",
        period: "Mar 2023 - Aug 2023",
        image: project2,
        location: "Remote, bulgaria",
        description: [
            "Built a full-featured platform using the PERN stack (PostgreSQL, Express.js, React, Node.js).",
            "Developed secure APIs and optimized queries, improving performance by 30%. ",
            "Led API design, business logic, and frontend-backend integration. ",
            "Deployed on AWS, using CI/CD, version control, and automated testing.",
            "Worked in an Agile team with regular sprints and code reviews. ",
        ],
    },
    {
        company: "GAIA Survey Rwanda",
        role: "Full-Stack Developer",
        period: "Mar 19 - Nov 19",
        image: project3,
        location: "Kigali, Rwanda",
        description:
            "Gaia Survey Rwanda is a division of Gaia Survey AB Sweden, specializing in the construction of wells/boreholes, water pipeline installations, and the setup of various pump systems. We also offer water treatment, storage solutions, and provide ongoing maintenance and management for both public and private wells.",
    },
    {
        company: "Sluu Corporation LTD ",
        role: "Frontend Engineer",
        period: "Nov 19 - Jan 20",
        image: project4,
        location: "Remote",
        description: [
            "Led full-stack development of a PERN-based web platform, managing architecture and frontend/backend.",
            "Built a secure JavaScript sandbox with React and Babylon.js for in-browser code execution.",
            "Designed and deployed an admin dashboard for analytics, user management, and subscriptions.",
            "Integrated real-time chat and video streaming for team collaboration.",
            "Developed a custom VS Code extension to enhance developer workflow.",
            "Provided technical support ensuring platform stability and user satisfaction.",
        ],
    },
    {
        company: "Andela",
        role: "Software Developer",
        period: "Jan 19 - Apr 20",
        image: project4,
        location: "Kigali, Rwanda",
        description: [
  "Selected as a full-stack developer through Andela's competitive talent program.",
  "Contributed to Author's Haven — a full-stack article publishing platform (PostgreSQL, React/Redux, Node.js, Express).",
  "Built new features, improved UI/UX, and maintained test coverage with unit/integration tests.",
  "Collaborated with Agile teams to deliver scalable, production-ready code.",
  "Led interviews and mentored new developers through bootcamp sessions.",
  "Gained hands-on experience working in distributed, high-performance engineering teams.",
],
        link: "https://andela.com",
    }
];

export default function Experiences() {
    const [selectedCompany, setSelectedCompany] = useState<string>("Andela");
    const [showFullDescription, setShowFullDescription] = useState(false);
    const toggleDescription = () => setShowFullDescription(!showFullDescription);

    const currentExperience = experiences.find(
        (exp) => exp.company === selectedCompany
    );

    return (
        <section className="bg-gray-400 justify-center items-center text-white py-16 px-4 md:px-16">

            <div className="w-full">
                <div className="w-full space-y-4">

                    <div>
                        {currentExperience && (
                            <div className="flex flex-col md:flex-row w-full gap-8">

                                {/* Left Side: Image */}
                                <div className="w-full md:w-1/3 ">
                                    <img
                                        src={currentExperience.image} // <-- replace with your actual image path
                                        alt="Experience Illustration"
                                        className="rounded-lg w-full h-auto shadow-md"
                                    />
                                </div>
                                {/* Right Side: Details */}
                                <div className="w-2/3">
                                    <h2 className="text-4xl font-bold text-blue-800 mb-10 border-b-4 border-green-300 inline-block">
                                        Experiences
                                    </h2>
                                    <div className="w-full">
                                        {experiences.map((exp) => (
                                            <button
                                                key={exp.company}
                                                onClick={() => setSelectedCompany(exp.company)}
                                                className={`text-left px-4 py-2  transition duration-200 font-medium ${selectedCompany === exp.company
                                                    ? "text-black transition bg-gray-400 "
                                                    : "hover:text-green-300duration-200 font-medium bg-gradient-to-r text-black from-gray-300 via-gray-300 to-black-800"
                                                    }`}
                                            >
                                                {exp.company}
                                            </button>
                                        ))}
                                    </div>
                                    <h3 className="text-2xl font-semibold">{currentExperience.role}</h3>
                                    <i className="text-sm font-bold text-white-600 mt-1">
                                        {currentExperience.period} · {currentExperience.location}
                                    </i>


                                    <div className="mt-4 text-lg pr-40 mr-20 leading-relaxed">
                                        {Array.isArray(currentExperience.description) ? (
                                            <>
                                                <ul className="list-disc pl-5 space-y-2">
                                                    {(showFullDescription
                                                        ? currentExperience.description
                                                        : currentExperience.description.slice(0, 3)
                                                    ).map((item, index) => (
                                                        <li key={index}>{item}</li>
                                                    ))}
                                                </ul>
                                                {currentExperience.description.length > 3 && (
                                                    <button
                                                        onClick={toggleDescription}
                                                        className="mt-2 text-blue-500 underline cursor-pointer"
                                                    >
                                                        {showFullDescription ? "Show less" : "Show more"}
                                                    </button>
                                                )}
                                            </>
                                        ) : (
                                            <p>{currentExperience.description}</p>
                                        )}
                                    </div>
                                    🔍
                                    {currentExperience.link && (
                                        <a
                                            href={currentExperience.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block mt-4 text-green-300 underline"
                                        >
                                            Visit {currentExperience.company}
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
