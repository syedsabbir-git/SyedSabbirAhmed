import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiExternalLink, HiDownload, HiCode, HiFolder } from 'react-icons/hi';

const ProjectCard = ({ project, onClick }) => {
  const [isTouching, setIsTouching] = useState(false);

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
      className={`code-card rounded-lg p-6 cursor-pointer group h-full flex flex-col ${
        isTouching ? 'scale-98' : ''
      }`}
      onClick={onClick}
      onTouchStart={() => setIsTouching(true)}
      onTouchEnd={() => setIsTouching(false)}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <HiFolder className={`text-4xl ${getAccentColor()}`} />
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

      {/* Category Badge */}
      <div className="mb-3">
        <span className="px-2 py-1 text-xs font-mono bg-dark-hover rounded text-accent-purple border border-dark-border">
          {project.category === 'mobile' ? '📱 Mobile' : '🌐 Web'}
        </span>
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

      {/* Tap to view indicator (mobile only) */}
      <div className="mt-4 text-center text-xs text-text-muted font-mono md:hidden">
        Tap to view details →
      </div>
    </motion.div>
  );
};

export default ProjectCard;
