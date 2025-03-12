
import { useParams, Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!project) {
    return (
      <div className="min-h-screen bg-netflix-black pt-24 pb-16 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
        <p className="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
        <Link to="/projects" className="netflix-btn flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-netflix-black pt-20 pb-16">
      {/* Hero Image */}
      <div className="w-full h-[50vh] relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-transparent to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
          <Link to="/projects" className="text-white mb-4 inline-flex items-center gap-2 hover:text-netflix-red transition-colors">
            <ArrowLeft size={20} /> Back to Projects
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">{project.title}</h1>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map(tag => (
            <span key={tag} className="bg-netflix-red/80 text-white text-sm px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-gray-300">{project.description}</p>
          
          {/* Detailed description would go here */}
          <div className="my-8">
            <h2 className="text-2xl font-bold text-white mb-4">Project Details</h2>
            <p className="text-gray-300">
              This is a detailed description of the project. It includes information about the goals,
              challenges, and solutions implemented in the project.
            </p>
            
            {/* Features */}
            <h3 className="text-xl font-bold text-white mt-6 mb-3">Key Features</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Feature one with detailed explanation</li>
              <li>Feature two with detailed explanation</li>
              <li>Feature three with detailed explanation</li>
            </ul>
            
            {/* Technologies */}
            <h3 className="text-xl font-bold text-white mt-6 mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {["React", "TypeScript", "Node.js", "Express", "MongoDB"].map(tech => (
                <span key={tech} className="bg-netflix-gray text-white text-sm px-3 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Links */}
        <div className="mt-12 flex flex-wrap gap-4">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="netflix-btn flex items-center gap-2"
            >
              <Github size={18} /> View Code
            </a>
          )}
          
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-6 rounded-md font-medium transition-colors flex items-center gap-2"
            >
              <ExternalLink size={18} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
