
import { Code, Database, Layout, Server, Terminal, Share2 } from 'lucide-react';
import SkillCard from '@/components/SkillCard';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Layout className="text-white" size={24} />,
      skills: ['React', 'Angular', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'SASS', 'Redux', 'Next.js', 'Responsive Design', 'Webpack', 'Vite'],
      color: 'bg-blue-600'
    },
    {
      title: 'Backend',
      icon: <Server className="text-white" size={24} />,
      skills: ['Node.js', 'Express', 'Python', 'Django', 'FastAPI', 'Ruby on Rails', 'Java', 'Spring Boot', 'PHP', 'Laravel', 'ASP.NET Core', 'RESTful APIs', 'GraphQL'],
      color: 'bg-green-600'
    },
    {
      title: 'Database',
      icon: <Database className="text-white" size={24} />,
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Firebase', 'Redis', 'Elasticsearch', 'DynamoDB', 'Prisma', 'SQL', 'NoSQL', 'Database Design'],
      color: 'bg-yellow-600'
    },
    {
      title: 'DevOps',
      icon: <Terminal className="text-white" size={24} />,
      skills: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure', 'CI/CD', 'GitHub Actions', 'Jenkins', 'Terraform', 'Linux', 'Nginx', 'Monitoring', 'Security'],
      color: 'bg-purple-600'
    },
    {
      title: 'Mobile',
      icon: <Share2 className="text-white" size={24} />,
      skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'iOS Development', 'Android Development', 'Expo', 'Mobile UI Design', 'App Performance'],
      color: 'bg-pink-600'
    },
    {
      title: 'Other',
      icon: <Code className="text-white" size={24} />,
      skills: ['Git', 'Agile', 'Scrum', 'TDD', 'Unit Testing', 'UI/UX Design', 'Figma', 'Adobe XD', 'Project Management', 'WebSockets', 'SEO', 'Accessibility'],
      color: 'bg-netflix-red'
    }
  ];

  return (
    <div className="min-h-screen bg-netflix-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Skills & Expertise</h1>
        
        <p className="text-gray-300 mb-12 max-w-3xl">
          Here's a comprehensive view of my technical skills and areas of expertise. 
          Click on each category to see more details.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={category.title}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">Experience Level</h2>
          
          <div className="space-y-4 max-w-3xl">
            {[
              { name: 'JavaScript', level: 90 },
              { name: 'React', level: 85 },
              { name: 'Node.js', level: 80 },
              { name: 'TypeScript', level: 75 },
              { name: 'Python', level: 70 }
            ].map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-white">{skill.name}</span>
                  <span className="text-netflix-red">{skill.level}%</span>
                </div>
                <div className="w-full bg-netflix-gray rounded-full h-2">
                  <div 
                    className="bg-netflix-red h-2 rounded-full animate-shimmer bg-gradient-to-r from-netflix-red to-red-600"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
