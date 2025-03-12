import { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, GraduationCap, Library, School } from 'lucide-react';

interface Education {
  id: number;
  degree: string;
  school: string;
  year: string;
  description: string;
  icon: JSX.Element;
}

const educationData: Education[] = [
  {
    id: 1,
    degree: 'Master of Computer Science',
    school: 'Stanford University',
    year: '2018 - 2020',
    description: 'Specialized in Artificial Intelligence and Machine Learning with a focus on neural networks and deep learning architectures.',
    icon: <GraduationCap className="w-8 h-8 text-netflix-red" />
  },
  {
    id: 2,
    degree: 'Bachelor of Science in Computer Science',
    school: 'MIT',
    year: '2014 - 2018',
    description: 'Focused on software engineering practices, data structures, and algorithms. Participated in multiple hackathons and coding competitions.',
    icon: <School className="w-8 h-8 text-netflix-red" />
  },
  {
    id: 3,
    degree: 'Full-Stack Web Development Bootcamp',
    school: 'Coding Academy',
    year: '2017 (Summer)',
    description: 'Intensive 12-week bootcamp covering modern web technologies including React, Node.js, and database management.',
    icon: <Book className="w-8 h-8 text-netflix-red" />
  },
  {
    id: 4,
    degree: 'Online Courses & Self Learning',
    school: 'Various Platforms',
    year: 'Ongoing',
    description: 'Continuously expanding knowledge through online courses on platforms like Coursera, Udemy, and through technical documentation and books.',
    icon: <Library className="w-8 h-8 text-netflix-red" />
  }
];

const Education = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-netflix-black text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <motion.h1 
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education & Learning Journey
      </motion.h1>

      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="grid gap-8 md:gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              layoutId={`card-${item.id}`}
              onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
              className={`netflix-card cursor-pointer p-6 ${selectedId === item.id ? 'bg-netflix-gray' : 'bg-netflix-dark'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4">
                {item.icon}
                <div>
                  <h3 className="text-xl font-bold">{item.degree}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm text-gray-300">
                    <span>{item.school}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{item.year}</span>
                  </div>
                </div>
              </div>
              
              <motion.div
                initial={{ height: selectedId === item.id ? 'auto' : 0, opacity: selectedId === item.id ? 1 : 0 }}
                animate={{ height: selectedId === item.id ? 'auto' : 0, opacity: selectedId === item.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-4"
              >
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
