
import { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-netflix-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Get In Touch</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-xl font-semibold text-white mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="text-netflix-red flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-white font-medium">Email</h3>
                  <a href="mailto:hello@example.com" className="text-gray-300 hover:text-white transition-colors">hello@example.com</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="text-netflix-red flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-white font-medium">Location</h3>
                  <p className="text-gray-300">San Francisco, CA</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="text-netflix-red flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-white font-medium">Social Profiles</h3>
                  <div className="flex space-x-4 mt-2">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                      <Github size={24} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                      <Linkedin size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-netflix-dark p-6 rounded-lg border border-netflix-gray">
              <h3 className="text-white font-medium mb-4">Looking for new opportunities</h3>
              <p className="text-gray-300">
                I'm currently available for freelance work and full-time positions.
                If you're interested in working together, please get in touch.
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-netflix-dark p-6 rounded-lg border border-netflix-gray">
              <h2 className="text-xl font-semibold text-white mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-netflix-gray border border-netflix-gray rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-netflix-red"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-netflix-gray border border-netflix-gray rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-netflix-red"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-netflix-gray border border-netflix-gray rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-netflix-red"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-netflix-gray border border-netflix-gray rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-netflix-red"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="netflix-btn w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <Send size={18} /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
