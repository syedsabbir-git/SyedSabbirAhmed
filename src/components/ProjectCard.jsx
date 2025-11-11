import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiExternalLink, HiDownload, HiCode, HiFolder } from 'react-icons/hi';

const ProjectCard = ({ project, onClick }) => {
  const [isTouching, setIsTouching] = useState(false);
  const [imageError, setImageError] = useState(false);

  const getAccentColor = () => {
    switch (project.color) {
      case 'cyan': return 'text-accent-blue';
      case 'purple': return 'text-accent-purple';
      case 'green': return 'text-accent-green';
      default: return 'text-accent-blue';
    }
  };

  return (
    <motion.div 
      className={`code-card rounded-lg overflow-hidden cursor-pointer group h-full flex flex-col ${
        isTouching ? 'scale-98' : ''
      }`}
      onClick={onClick}
      onTouchStart={() => setIsTouching(true)}
      onTouchEnd={() => setIsTouching(false)}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Project Thumbnail Image */}
      <div className="relative w-full h-full overflow-hidden bg-dark-bg border-b border-dark-border">
        {!imageError ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-dark-surface">
            <HiFolder className={`text-6xl ${getAccentColor()}`} />
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        
        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 text-xs font-mono bg-dark-surface/90 backdrop-blur-sm rounded text-accent-purple border border-dark-border">
            {project.category === 'mobile' ? '📱 Mobile' : '🌐 Web'}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <HiFolder className={`text-3xl ${getAccentColor()}`} />
          <div className="flex gap-3 text-text-muted">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hover:text-accent-blue transition-colors p-2 -m-2"
              >
                <HiExternalLink className="text-xl" />
              </a>
            )}
            {project.downloadLink && (
              <a
                href={project.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hover:text-accent-green transition-colors p-2 -m-2"
              >
                <HiDownload className="text-xl" />
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="hover:text-text-primary transition-colors p-2 -m-2"
            >
              <HiCode className="text-xl" />
            </a>
          </div>
        </div>

        {/* Title & Description */}
        <h3 className={`text-xl font-bold mb-2 ${getAccentColor()} group-hover:underline`}>
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm mb-4 flex-grow line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {project.metrics.slice(0, 2).map((metric, idx) => (
            <div key={idx} className="bg-dark-bg p-2 rounded">
              <p className={`text-xs font-mono ${getAccentColor()} font-bold`}>{metric.value}</p>
              <p className="text-xs text-text-muted truncate">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="text-xs font-mono text-text-muted"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-xs font-mono text-text-muted">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        {/* Click to view indicator */}
        <div className="mt-4 pt-4 border-t border-dark-border text-center text-xs text-text-muted font-mono opacity-0 group-hover:opacity-100 transition-opacity">
          Click to view details →
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
