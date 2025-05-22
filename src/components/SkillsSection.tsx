import SkillBar from './SkillBar';

const skillCategories = {
    Languages: [
    { skill: 'Javascript', years: 5, total: 5 },
    { skill: 'Java', years: 4, total: 5 },
    { skill: 'Python', years: 3, total: 5 },
    { skill: 'PHP', years: 2, total: 5 }
  ],
  Frontend: [
    { skill: 'HTML/CSS', years: 5, total: 5 },
    { skill: 'React', years: 4, total: 5 },
    { skill: 'Next.js', years: 3, total: 5 },
    { skill: 'Django', years: 2, total: 5 },
    { skill: 'Tailwind', years: 2, total: 5 }
  ],
  Backend: [
    { skill: 'Node.js', years: 4, total: 5 },
    { skill: 'Express', years: 4, total: 5 },
    { skill: 'REST API', years: 4, total: 5 },
    { skill: 'Nest.js', years: 2, total: 5 },
    { skill: 'Spring boot', years: 3, total: 5 },
   
  ],
  DevOps: [
    { skill: 'Git', years: 5, total: 5 },
    { skill: 'Docker', years: 3, total: 5 },
    { skill: 'Kubernetes', years: 2, total: 5 },
    { skill: 'CI/CD', years: 2.5, total: 5 },
  ],
  'ORM & DB': [
    { skill: 'MongoDB', years: 4.5, total: 5 },
    { skill: 'MySQL', years: 4.5, total: 5 },
    { skill: 'PostgreSQL', years: 3.5, total: 5 },
    { skill: 'Sequerize', years: 3, total: 5 },
    { skill: 'Prisma', years: 2, total: 5 },
  ],
  'QA': [
  { skill: 'Postman', years: 4, total: 5 },
  { skill: 'Manual Testing', years: 2.5, total: 5 },
  { skill: 'Test Case Design', years: 2, total: 5 },
  { skill: 'Bug Reporting (Jira)', years: 2, total: 5 },
  { skill: 'Selenium', years: 1.5, total: 5 },
  { skill: 'Automation Scripts', years: 1, total: 5 },
],
Support: [
  { skill: 'Linux Server Debugging', years: 4, total: 5 },
  { skill: 'SMAX (UCMD)', years: 2, total: 5 },
  { skill: 'Salesforce', years: 1.5, total: 5 }, // 👈 Add this
  { skill: 'Incident Management', years: 2, total: 5 },
  { skill: 'Log Analysis', years: 2, total: 5 },
  
],
Cybersecurity: [
  { skill: 'OWASP Top 10', years: 1.5, total: 5 },
  { skill: 'Authentication & Authorization', years: 2, total: 5 },
  { skill: 'Security Testing', years: 1.5, total: 5 },
  { skill: 'Data Protection & Encryption', years: 1, total: 5 },
  { skill: 'Secure Coding Practices', years: 1.5, total: 5 },
],
};

export default function SkillsSection() {
  return (
    <div className="skills-section py-12 p-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-500 mb-8 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="bg-white p-1 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-blue-600 mb-4 text-center">{category}</h3>
              <div className="flex justify-center gap-1 flex-wrap">
                {skills.map(({ skill, years, total }) => (
                  <SkillBar  key={skill} skill={skill} years={years} totalYears={total} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}