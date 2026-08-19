import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import LivePreviewModal from './components/LivePreviewModal';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Check } from 'lucide-react';
import './App.css';

function App() {
  const [copied, setCopied] = useState(false);
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('johnmyles523@gmail.com');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const handleOpenPreviewModal = (projectId = 'pos-system') => {
    setActiveProjectId(projectId);
    setPreviewModalOpen(true);
  };

  return (
    <div className="portfolio-app">
      <Navbar onOpenContact={() => {}} />
      
      <main>
        <Hero 
          onOpenPreviewModal={handleOpenPreviewModal} 
          onCopyEmail={handleCopyEmail}
          copied={copied}
        />
        <Projects onOpenPreviewModal={handleOpenPreviewModal} />
        <Skills />
        <About />
        <Contact onCopyEmail={handleCopyEmail} copied={copied} />
      </main>

      <Footer />

      {previewModalOpen && (
        <LivePreviewModal 
          activeProjectId={activeProjectId} 
          onClose={() => setPreviewModalOpen(false)} 
        />
      )}

      {copied && (
        <div className="toast-notification">
          <Check size={18} />
          <span>Email copied to clipboard: johnmyles523@gmail.com</span>
        </div>
      )}
    </div>
  );
}

export default App;
