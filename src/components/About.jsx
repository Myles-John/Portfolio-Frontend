import { UserCheck, Zap, Shield, Smartphone, Globe, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="projects-section" style={{ paddingBottom: '3rem' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <UserCheck size={14} />
            About Myles-John
          </div>
          <h2 className="section-title">
            Engineering <span>Clean Solutions</span>
          </h2>
          <p className="section-desc">
            Passionate about transforming complex requirements into smooth, high-performing digital applications that solve real-world problems.
          </p>
        </div>

        <div className="glass-card-main" style={{ maxWidth: '950px', margin: '0 auto' }}>
          <div className="hero-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#f8fafc' }}>
                Full-Stack Passion & Technical Focus
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                I am <strong>Myles-John Sammah</strong>, a full stack developer dedicated to building reliable, high-performance web applications. From designing intuitive user interfaces with <strong>React</strong> to connecting seamless backend APIs with <strong>Python / Flask</strong>, I ensure every layer of the application is built to high standards.
              </p>
              <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.7' }}>
                Whether it's developing point-of-sale systems with live calculation pipelines or designing institutional portals for schools, my emphasis is on code quality, speed, and cross-device responsiveness.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="skill-category-card" style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <Zap size={20} style={{ color: '#00f2fe' }} />
                  <h4 style={{ color: '#f8fafc', fontSize: '1.05rem', fontWeight: 600 }}>Speed & Optimization</h4>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.88rem' }}>Fast loading times, lightweight bundle sizes, and reactive UI component states.</p>
              </div>

              <div className="skill-category-card" style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <Smartphone size={20} style={{ color: '#a855f7' }} />
                  <h4 style={{ color: '#f8fafc', fontSize: '1.05rem', fontWeight: 600 }}>Mobile-First Responsive</h4>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.88rem' }}>Flawless operation across smartphones, tablets, laptops, and desktop displays.</p>
              </div>

              <div className="skill-category-card" style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <Globe size={20} style={{ color: '#10b981' }} />
                  <h4 style={{ color: '#f8fafc', fontSize: '1.05rem', fontWeight: 600 }}>Production Readiness</h4>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.88rem' }}>Clean deployment pipelines on cloud hosting platforms like Vercel with SSL security.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
