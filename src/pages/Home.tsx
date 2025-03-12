
import HeroSection from '@/components/HeroSection';
import ProjectRow from '@/components/ProjectRow';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { ArrowRight } from 'lucide-react';

const featuredProjects = projects.filter(project => project.featured);
const webProjects = projects.filter(project => project.tags.includes('Web Development'));
const mobileProjects = projects.filter(project => project.tags.includes('Mobile'));

const Home = () => {
  return (
    <div className="min-h-screen bg-netflix-black text-white">       
      <HeroSection 
        name="John Developer"
        title="Full Stack Engineer"
        backgroundImage="profile.jpg"
        description="Crafting digital experiences with clean code and creative solutions. Specializing in full-stack development with React, Node.js, and modern web technologies."
      />
      
      <div className="py-8">
        {/* Featured Projects */}
        <ProjectRow title="Featured Projects" projects={featuredProjects} />
        
        {/* Web Projects */}
        <ProjectRow title="Web Development" projects={webProjects} />
        
        {/* Mobile Projects */}
        <ProjectRow title="Mobile Apps" projects={mobileProjects} />
        
        {/* View All Projects Button */}
        <div className="flex justify-center my-12">
          <Link to="/projects" className="netflix-btn flex items-center gap-2">
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
