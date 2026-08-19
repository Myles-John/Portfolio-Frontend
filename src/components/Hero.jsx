import { useState } from 'react';
import { ArrowRight, Eye, Mail, Copy, Check, Terminal, Sparkles, Layers, ShieldCheck, Cpu } from 'lucide-react';

export default function Hero({ onOpenPreviewModal, onCopyEmail, copied }) {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-greeting">
              <Sparkles size={16} />
              Full Stack Web Developer & Software Engineer
            </div>
            
            <h1 className="hero-title">
              Crafting <span className="gradient-text">High-Impact</span> Web Apps & Scalable Digital Portals
            </h1>
            
            <p className="hero-subtitle">
              Hi, I'm <strong>Myles-John Sammah</strong>. I specialize in engineering full-stack web solutions, production POS billing applications, and institutional platforms with clean architecture and modern UX.
            </p>

            <div className="hero-cta-group">
              <a href="#projects" className="btn-primary">
                Explore Projects
                <ArrowRight size={18} />
              </a>
              <button onClick={() => onOpenPreviewModal()} className="btn-secondary">
                <Eye size={18} />
                Live Preview Portal
              </button>
              <button onClick={onCopyEmail} className="btn-secondary" title="Copy Email">
                {copied ? <Check size={18} style={{ color: '#10b981' }} /> : <Copy size={18} />}
                {copied ? 'Copied Email!' : 'johnmyles523@gmail.com'}
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-value">3+</span>
                <span className="stat-label">Production Apps</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">100%</span>
                <span className="stat-label">Responsive & Mobile</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">RESTful</span>
                <span className="stat-label">API Architecture</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glass-card-main">
              <div className="code-window-header">
                <div className="window-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="window-title">
                  <Terminal size={14} style={{ display: 'inline', marginRight: '6px' }} />
                  myles_john_profile.json
                </div>
              </div>

              <div className="developer-card-body">
                <div className="dev-avatar-group">
                  <div className="avatar-placeholder">MJ</div>
                  <div className="dev-info">
                    <h3>Myles-John Sammah</h3>
                    <p>Full Stack Engineer</p>
                  </div>
                </div>

                <div className="code-block">
                  <div><span className="code-keyword">const</span> developer = &#123;</div>
                  <div style={{ paddingLeft: '1.25rem' }}>
                    <span className="code-property">name</span>: <span className="code-string">"Myles-John Sammah"</span>,
                  </div>
                  <div style={{ paddingLeft: '1.25rem' }}>
                    <span className="code-property">role</span>: <span className="code-string">"Full Stack Web Developer"</span>,
                  </div>
                  <div style={{ paddingLeft: '1.25rem' }}>
                    <span className="code-property">contact</span>: <span className="code-string">"johnmyles523@gmail.com"</span>,
                  </div>
                  <div style={{ paddingLeft: '1.25rem' }}>
                    <span className="code-property">status</span>: <span className="code-string">"Open to Opportunities"</span>,
                  </div>
                  <div style={{ paddingLeft: '1.25rem' }}>
                    <span className="code-property">coreStack</span>: [<span className="code-string">"React"</span>, <span className="code-string">"Flask"</span>, <span className="code-string">"REST APIs"</span>],
                  </div>
                  <div>&#125;;</div>
                </div>

                <div className="floating-tech-grid">
                  <span className="tech-pill">⚡ React.js</span>
                  <span className="tech-pill">🐍 Python / Flask</span>
                  <span className="tech-pill">🎨 Vanilla CSS</span>
                  <span className="tech-pill">🌐 REST APIs</span>
                  <span className="tech-pill">🚀 Vercel Deployment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
