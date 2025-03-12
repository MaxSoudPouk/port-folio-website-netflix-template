
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-netflix-black p-6">
      <div className="text-center max-w-md">
        <h1 className="text-netflix-red text-6xl font-bold mb-4">404</h1>
        <h2 className="text-white text-2xl font-medium mb-6">Lost your way?</h2>
        <p className="text-gray-300 mb-8">
          Sorry, we can't find the page you're looking for. But there's a lot more to explore!
        </p>
        <Link 
          to="/" 
          className="netflix-btn inline-flex items-center gap-2"
        >
          <Home size={18} /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
