import React, { useState } from "react";
import jsIcon from "../assets/img/icon/js.png";
import figmaIcon from "../assets/img/icon/figma.png";
import mysqlIcon from "../assets/img/icon/mysql.png";
import cssIcon from "../assets/img/icon/css.png";
// Import other icons as necessary

interface Skill {
  icon: string;
  skill: string;
  experience: string;
  description: string;
}

const skills: Skill[] = [
  {
    icon: jsIcon,
    skill: "JavaScript",
    experience: "5 years",
    description:
      "Proficient in ES6+, experienced in building web applications.",
  },
  {
    icon: jsIcon,
    skill: "Node.js",
    experience: "4 years",
    description: "Experienced in building backend services and REST APIs.",
  },
  {
    icon: jsIcon,
    skill: "React",
    experience: "4 years",
    description: "Skilled in building dynamic and responsive web interfaces.",
  },
  {
    icon: jsIcon,
    skill: "TypeScript",
    experience: "3 years",
    description:
      "Strong understanding of static typing and advanced TypeScript features.",
  },
  {
    icon: jsIcon,
    skill: "Next.js",
    experience: "2 years",
    description:
      "Experience with server-side rendering and static site generation.",
  },
  {
    icon: jsIcon,
    skill: "Nest.js",
    experience: "2 years",
    description:
      "Proficient in building scalable and maintainable backend applications.",
  },
  {
    icon: figmaIcon,
    skill: "Figma",
    experience: "2 years",
    description: "Experienced in designing user interfaces and prototypes.",
  },
  {
    icon: mysqlIcon,
    skill: "MySQL",
    experience: "3 years",
    description: "Proficient in database design and writing complex queries.",
  },
  {
    icon: mysqlIcon,
    skill: "PostgresSQL",
    experience: "3 years",
    description: "Skilled in database management and optimization.",
  },
  {
    icon: mysqlIcon,
    skill: "MongoDB",
    experience: "3 years",
    description: "Experienced in building NoSQL databases and data modeling.",
  },
  {
    icon: cssIcon,
    skill: "HTML 5",
    experience: "5 years",
    description: "Proficient in semantic HTML and modern web standards.",
  },
  {
    icon: cssIcon,
    skill: "CSS",
    experience: "5 years",
    description: "Experienced in CSS3, Flexbox, Grid, and responsive design.",
  },
];

const Skills: React.FC = () => {
  const [detailsVisibility, setDetailsVisibility] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleDetails = (index: number) => {
    setDetailsVisibility((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <section id="skill" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-b-12">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="flex flex-col items-start p-4 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center w-full">
        <img
          src={skill.icon}
          alt={`${skill.skill} icon`}
          className="w-12 h-12 mr-4"
        />
        <div>
          <span className="text-xl font-semibold text-gray-700">
            {skill.skill}
          </span>
          <p className="text-sm text-gray-500">{skill.experience}</p>
        </div>
        <svg
          className={`w-4 h-4 fill-current ml-auto transform ${
            isOpen ? "rotate-0" : "rotate-180"
          } transition-transform duration-300`}
          viewBox="0 0 20 20"
        >
          <path d="M10 13.535l4.95-4.95 1.414 1.414-6.364 6.364-6.364-6.364 1.414-1.414z" />
        </svg>
      </div>
      {isOpen && (
        <div className="relative p-5 bg-white text-gray-600">
          <p>{skill.description}</p>
        </div>
      )}
    </div>
  );
};

export default Skills;
