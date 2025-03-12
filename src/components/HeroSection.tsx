import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Play, Send } from "lucide-react";

interface HeroProps {
  name: string;
  title: string;
  backgroundImage: string;
  description: string;
}

const HeroSection = ({
  name,
  title,
  backgroundImage,
  description,
}: HeroProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Gradient overlay */}
      <div className="hero-gradient" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-end pb-16 md:pb-24 px-6 md:px-16">
        <div
          className="max-w-3xl animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            {name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-xl">{description}</p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="netflix-btn flex items-center gap-2"
            >
              <Play size={16} /> View Projects
            </Link>
            <Link
              to="/contact"
              className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-6 rounded-md font-medium transition-colors flex items-center gap-2"
            >
              <Send size={16} /> Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
