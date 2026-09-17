import { ArrowUp, Mail, ExternalLink, Code } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-text">
          © {new Date().getFullYear()} <strong>Myles-John Sammah</strong>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <a href="mailto:johnmyles523@gmail.com" className="nav-link" style={{ fontSize: '0.88rem' }}>
            johnmyles523@gmail.com
          </a>
          <button onClick={scrollToTop} className="back-to-top" title="Scroll to Top" aria-label="Back to Top">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
