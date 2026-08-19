import { useState, useEffect } from 'react';
import { X, Lock, RotateCw, ExternalLink, Monitor, Tablet, Smartphone, Sparkles } from 'lucide-react';
import { PROJECTS_DATA } from './Projects';

export default function LivePreviewModal({ activeProjectId, onClose }) {
  const [selectedProject, setSelectedProject] = useState(
    PROJECTS_DATA.find(p => p.id === activeProjectId) || PROJECTS_DATA[0]
  );
  const [deviceMode, setDeviceMode] = useState('desktop'); // desktop, tablet, mobile
  const [loading, setLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    if (activeProjectId) {
      const proj = PROJECTS_DATA.find(p => p.id === activeProjectId);
      if (proj) setSelectedProject(proj);
    }
  }, [activeProjectId]);

  const handleSwitchProject = (proj) => {
    setSelectedProject(proj);
    setLoading(true);
    setIframeKey(prev => prev + 1);
  };

  const handleRefresh = () => {
    setLoading(true);
    setIframeKey(prev => prev + 1);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-tabs">
            {PROJECTS_DATA.map((proj) => (
              <button
                key={proj.id}
                className={`modal-tab ${selectedProject.id === proj.id ? 'active' : ''}`}
                onClick={() => handleSwitchProject(proj)}
              >
                {proj.title}
              </button>
            ))}
          </div>

          <div className="browser-bar">
            <div className="device-toggles">
              <button
                className={`device-btn ${deviceMode === 'desktop' ? 'active' : ''}`}
                onClick={() => setDeviceMode('desktop')}
                title="Desktop View (100%)"
              >
                <Monitor size={16} />
              </button>
              <button
                className={`device-btn ${deviceMode === 'tablet' ? 'active' : ''}`}
                onClick={() => setDeviceMode('tablet')}
                title="Tablet View (768px)"
              >
                <Tablet size={16} />
              </button>
              <button
                className={`device-btn ${deviceMode === 'mobile' ? 'active' : ''}`}
                onClick={() => setDeviceMode('mobile')}
                title="Mobile View (375px)"
              >
                <Smartphone size={16} />
              </button>
            </div>

            <div className="url-bar">
              <Lock size={13} className="url-lock" />
              <span>{selectedProject.url}</span>
            </div>
          </div>

          <div className="modal-controls">
            <button className="icon-btn" onClick={handleRefresh} title="Reload Preview">
              <RotateCw size={16} />
            </button>
            <a
              href={selectedProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              title="Open full page in new tab"
            >
              <ExternalLink size={16} />
            </a>
            <button className="icon-btn" onClick={onClose} title="Close Preview">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="modal-iframe-wrapper">
          {loading && (
            <div className="iframe-loader">
              <div className="spinner"></div>
              <span>Connecting to live server...</span>
            </div>
          )}
          <iframe
            key={iframeKey}
            src={selectedProject.url}
            title={selectedProject.title}
            className={`preview-iframe ${deviceMode}`}
            onLoad={() => setLoading(false)}
          />
        </div>
      </div>
    </div>
  );
}
