
import { useState } from 'react';

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color?: string;
}

const SkillCard = ({ title, icon, skills, color = "bg-netflix-red" }: SkillCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={`netflix-card cursor-pointer overflow-hidden ${
        isExpanded ? 'md:col-span-2 row-span-2' : ''
      }`}
      onClick={toggleExpand}
    >
      <div className={`${color} p-4 flex items-center justify-between`}>
        <div className="flex items-center gap-3">
          {icon}
          <h3 className="text-white font-bold text-lg">{title}</h3>
        </div>
        <span className="text-white">
          {isExpanded ? '−' : '+'}
        </span>
      </div>
      
      <div className={`p-4 transition-all duration-300 ${
        isExpanded ? 'max-h-96 overflow-y-auto' : 'max-h-32 overflow-hidden'
      }`}>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {skills.map((skill) => (
            <li key={skill} className="bg-netflix-gray p-2 rounded text-white text-sm">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillCard;
