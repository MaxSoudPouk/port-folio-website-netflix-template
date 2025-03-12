
import { useState } from 'react';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import { Filter } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  // Get unique tags for filter
  const allTags = ['All', ...new Set(projects.flatMap(project => project.tags))];
  
  // Filter projects based on selected tag
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <div className="min-h-screen bg-netflix-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Projects</h1>
        
        {/* Filters */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter size={20} className="text-netflix-red" />
            <h2 className="text-white font-medium">Filter by:</h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === tag 
                    ? 'bg-netflix-red text-white' 
                    : 'bg-netflix-gray text-gray-300 hover:bg-gray-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div key={project.id} className="animate-scale-in">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No projects found for this filter.</p>
            <button 
              onClick={() => setFilter('All')}
              className="mt-4 netflix-btn"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
