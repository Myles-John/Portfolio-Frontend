import { useState, useEffect } from 'react';
import { Menu, X, Mail, Code2, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className="container nav-container">
        <a href="#hero" className="nav-logo">
          <div className="logo-badge">MJS</div>
          <div>
            <span>Myles-John</span>
          </div>
        </a>

        <ul className="nav-links">
          <li><a href="#hero" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#projects" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
          <li><a href="#skills" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Skills Matrix</a></li>
          <li><a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</a></li>
          <li><a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
        </ul>

        <div className="nav-actions">
          <div className="hire-badge">
            <span className="dot-pulse"></span>
            Available for Hire
          </div>
          <a href="#contact" className="btn-primary" style={{ padding: '0.55rem 1.15rem', fontSize: '0.85rem' }}>
            <Mail size={15} />
            Contact
          </a>
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
