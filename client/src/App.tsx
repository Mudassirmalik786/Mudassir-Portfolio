import { useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { downloadResume } from './utils/smoothScroll';

function App() {
  useEffect(() => {
    // Add Font Awesome to the document head
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(link);

    return () => {
      // Cleanup if needed
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
      
      {/* Floating Resume Download Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={downloadResume}
          className="bg-accent hover:bg-yellow-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
          title="Download Resume"
        >
          <i className="fas fa-download text-xl group-hover:animate-bounce"></i>
        </button>
      </div>
    </div>
  );
}

export default App;
