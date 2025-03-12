
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

interface ProjectRowProps {
  title: string;
  projects: Project[];
}

const ProjectRow = ({ title, projects }: ProjectRowProps) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { current } = rowRef;
      const scrollAmount = current.offsetWidth * 0.7;
      
      if (direction === 'left') {
        current.scrollLeft -= scrollAmount;
      } else {
        current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className="netflix-row">
      <h2 className="netflix-title">{title}</h2>
      
      <div className="relative group">
        <div 
          className="flex space-x-4 overflow-x-scroll scrollbar-none scroll-smooth py-4"
          ref={rowRef}
        >
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="flex-none w-[250px] md:w-[330px] lg:w-[380px]"
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        
        <button 
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-netflix-red"
          onClick={() => scroll('left')}
        >
          <ChevronLeft size={24} className="text-white" />
        </button>
        
        <button 
          className="absolute top-1/2 right-0 -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-netflix-red"
          onClick={() => scroll('right')}
        >
          <ChevronRight size={24} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default ProjectRow;
