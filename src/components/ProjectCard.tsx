
import { useState } from 'react';
import { ExternalLink, Github, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

const ProjectCard = ({ id, title, description, image, tags, github, demo, featured = false }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`netflix-card group relative ${featured ? 'md:col-span-2 aspect-[16/8]' : 'aspect-[16/9]'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-30"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
        <h3 className="text-white font-bold text-lg md:text-xl">{title}</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.slice(0, 3).map((tag) => (
            <span key={tag} className="bg-netflix-red/80 text-white text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {github && (
          <a 
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/70 p-2 rounded-full hover:bg-netflix-red transition-colors"
          >
            <Github size={16} className="text-white" />
          </a>
        )}
        {demo && (
          <a 
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/70 p-2 rounded-full hover:bg-netflix-red transition-colors"
          >
            <ExternalLink size={16} className="text-white" />
          </a>
        )}
        <Link 
          to={`/projects/${id}`}
          className="bg-black/70 p-2 rounded-full hover:bg-netflix-red transition-colors"
        >
          <Info size={16} className="text-white" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
