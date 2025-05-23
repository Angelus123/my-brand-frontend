type VerticalSkillBarProps = {
  skill: string;
  years: number;         // actual years of experience
  totalYears: number;    // total expected for full proficiency
};

export default function SkillBar({ skill, years, totalYears }: VerticalSkillBarProps) {
  const percent = Math.min((years / totalYears) * 100, 100);
   return (
    <div className="flex flex-col items-center space-y-2 w-20">
      <div className="relative h-20 w-4 bg-gray-200 rounded-full overflow-hidden shadow-inner">
        <div
          className="absolute bottom-0 w-4 rounded-full bg-gradient-to-t from-green-400 via-blue-500 to-purple-500 animate-pulse"
          style={{ height: `${percent}%` }}
        />
        
      </div>
      <span className="text-xs font-medium text-center text-gray-700">{skill}</span>
      <span className="text-[11px] text-gray-500">{years} yrs / {totalYears} yrs</span>
    </div>
  );
}