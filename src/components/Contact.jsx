import { Mail, Copy, Check, ExternalLink, Sparkles, MapPin, Briefcase } from 'lucide-react';

export default function Contact({ onCopyEmail, copied }) {
  const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=johnmyles523@gmail.com";

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-card">
          <div className="section-tag" style={{ margin: '0 auto 1.5rem auto' }}>
            <Sparkles size={14} />
            Let's Build Together
          </div>

          <h2 className="contact-title">
            Interested in working with <span className="gradient-text">Myles-John</span>?
          </h2>

          <p className="contact-desc">
            I am actively open to web developer positions, full-stack software engineer roles, and technical project collaborations. Send me an email directly on Gmail or copy my email address!
          </p>

          <div className="email-box" style={{ maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            <Mail size={20} style={{ color: '#00f2fe' }} />
            <a 
              href={gmailUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="email-address" 
              title="Open in Gmail"
              style={{ textDecoration: 'none', color: 'inherit', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              johnmyles523@gmail.com
              <ExternalLink size={14} style={{ opacity: 0.7 }} />
            </a>
            <button onClick={onCopyEmail} className="btn-copy">
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? 'Copied to Clipboard!' : 'Copy Email'}
            </button>
          </div>

          <div className="contact-actions" style={{ marginBottom: '2.5rem' }}>
            <a 
              href={gmailUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
              style={{ textDecoration: 'none', padding: '0.85rem 2rem', fontSize: '1rem' }}
            >
              <Mail size={20} />
              Open Gmail to Send Email
              <ExternalLink size={16} />
            </a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.88rem', color: '#94a3b8' }}>
              <Briefcase size={16} style={{ color: '#6366f1' }} /> Full-Time / Contract Roles
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.88rem', color: '#94a3b8' }}>
              <MapPin size={16} style={{ color: '#10b981' }} /> Remote / On-site Available
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

