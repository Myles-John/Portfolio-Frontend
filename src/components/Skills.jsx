import { Code2, Server, Database, Wrench, Cpu, ShieldCheck } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: 'Frontend Engineering',
    icon: Code2,
    skills: [
      { name: 'React.js & Hooks', level: 95, label: 'Advanced' },
      { name: 'JavaScript (ES6+)', level: 92, label: 'Proficient' },
      { name: 'HTML5 & Vanilla CSS3', level: 96, label: 'Expert' },
      { name: 'Responsive Layouts & UX', level: 94, label: 'Expert' }
    ]
  },
  {
    title: 'Backend & APIs',
    icon: Server,
    skills: [
      { name: 'Python / Flask Framework', level: 88, label: 'Advanced' },
      { name: 'RESTful API Architecture', level: 94, label: 'Expert' },
      { name: 'Node.js & Express Basics', level: 82, label: 'Competent' },
      { name: 'JSON & Data Processing', level: 95, label: 'Expert' }
    ]
  },
  {
    title: 'Databases & Storage',
    icon: Database,
    skills: [
      { name: 'PostgreSQL / SQL Queries', level: 85, label: 'Advanced' },
      { name: 'SQLite Database Systems', level: 90, label: 'Proficient' },
      { name: 'Schema Design & Relations', level: 88, label: 'Advanced' }
    ]
  },
  {
    title: 'DevOps & Tooling',
    icon: Wrench,
    skills: [
      { name: 'Vercel Deployment & Hosting', level: 95, label: 'Expert' },
      { name: 'Git & GitHub Version Control', level: 92, label: 'Proficient' },
      { name: 'Vite & Build Tooling', level: 90, label: 'Proficient' },
      { name: 'Postman & API Testing', level: 94, label: 'Expert' }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            Technical Proficiency
          </div>
          <h2 className="section-title">
            Full-Stack <span>Skills Matrix</span>
          </h2>
          <p className="section-desc">
            Core technologies, backend frameworks, database architecture, and deployment workflows powering my web applications.
          </p>
        </div>

        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <div key={idx} className="skill-category-card">
                <div className="skill-card-header">
                  <div className="skill-icon-wrapper">
                    <IconComponent size={22} />
                  </div>
                  <h3>{cat.title}</h3>
                </div>

                <div className="skill-list">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.label}</span>
                      </div>
                      <div className="skill-progress-bar">
                        <div 
                          className="skill-progress-fill" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
