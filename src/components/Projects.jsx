import { useState } from 'react';
import { ExternalLink, Eye, CheckCircle, Code, Layers, Sparkles } from 'lucide-react';

export const PROJECTS_DATA = [
  {
    id: 'pos-system',
    category: 'fullstack',
    categoryLabel: 'Full-Stack Web App',
    title: 'POS System & Billing App',
    url: 'https://pos-system-frontend-p9cx.vercel.app/new-bill',
    image: '/images/pos-system.jpg',
    description: 'A modern, full-stack Point of Sale application supporting real-time transaction processing, itemized bill creation, dynamic cart recalculations, product management, and REST API integration.',
    highlights: [
      'Real-time billing & invoice generator',
      'Dynamic product grid & search filters',
      'Flask REST API backend connectivity',
      'Deployed on Vercel Cloud infrastructure'
    ],
    tags: ['React', 'Python / Flask', 'REST API', 'Vercel', 'Tailwind/CSS']
  },
  {
    id: 'faithfield',
    category: 'institutional',
    categoryLabel: 'Educational Portal',
    title: 'Faithfield Community School',
    url: 'https://faithfieldcommunityschool.com/',
    image: '/images/faithfield.jpg',
    description: 'Comprehensive institutional web platform built for Faithfield Community School showcasing academic curricula, admissions processes, campus facilities, and news updates.',
    highlights: [
      'Pixel-perfect responsive layout for all devices',
      'Academic department & admission showcases',
      'Optimized page architecture & SEO metadata',
      'Seamless user navigation & quick inquiry portal'
    ],
    tags: ['HTML5 / CSS3', 'JavaScript', 'Responsive UI', 'SEO', 'Production Web']
  },
  {
    id: 'vraschools',
    category: 'institutional',
    categoryLabel: 'Multi-Campus Platform',
    title: 'VRA Schools Portal',
    url: 'https://vraschools.com',
    image: '/images/vraschools.jpg',
    description: 'Official multi-campus web portal for Volta River Authority (VRA) Schools, highlighting basic and senior high divisions, campus locations, and institutional news.',
    highlights: [
      'Multi-campus structure navigation & portal hubs',
      'Custom institutional color scheme & branding',
      'Resource directory for parents & students',
      'High-speed page rendering & clean UI'
    ],
    tags: ['Web Stack', 'Custom Styling', 'Cross-Browser', 'Live Production']
  }
];

export default function Projects({ onOpenPreviewModal }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = activeTab === 'all' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            Featured Portfolio
          </div>
          <h2 className="section-title">
            Explore My <span>Live Web Projects</span>
          </h2>
          <p className="section-desc">
            Production web applications and institutional platforms built with a focus on performance, responsive design, and intuitive user experiences.
          </p>
        </div>

        <div className="filter-tabs">
          <button 
            className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Projects ({PROJECTS_DATA.length})
          </button>
          <button 
            className={`filter-btn ${activeTab === 'fullstack' ? 'active' : ''}`}
            onClick={() => setActiveTab('fullstack')}
          >
            Full-Stack Apps
          </button>
          <button 
            className={`filter-btn ${activeTab === 'institutional' ? 'active' : ''}`}
            onClick={() => setActiveTab('institutional')}
          >
            Institutional Portals
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.style.background = 'linear-gradient(135deg, #1e1b4b, #0f172a)';
                  }} 
                />
                <span className="project-badge">{project.categoryLabel}</span>
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <ul className="project-highlights">
                  {project.highlights.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle size={15} className="highlight-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="project-tech-stack">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tech-tag">{tag}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <button 
                    onClick={() => onOpenPreviewModal(project.id)}
                    className="btn-preview"
                    title="Preview Live Site inside Modal"
                  >
                    <Eye size={16} />
                    Live Frame Preview
                  </button>

                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-external"
                    title="Open Live Site in New Tab"
                  >
                    <ExternalLink size={16} />
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
