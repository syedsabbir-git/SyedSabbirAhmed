import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiExternalLink, HiDownload, HiCode, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  const images = project.screenshots || [project.image];
  const hasMultipleImages = images.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getAccentColor = () => {
    switch (project.color) {
      case 'cyan': return { text: 'text-accent-blue', border: 'border-accent-blue', bg: 'bg-accent-blue' };
      case 'purple': return { text: 'text-accent-purple', border: 'border-accent-purple', bg: 'bg-accent-purple' };
      case 'green': return { text: 'text-accent-green', border: 'border-accent-green', bg: 'bg-accent-green' };
      default: return { text: 'text-accent-blue', border: 'border-accent-blue', bg: 'bg-accent-blue' };
    }
  };

  const colors = getAccentColor();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-hidden"
          >
            <div className="bg-dark-surface border-2 border-dark-border rounded-lg h-full flex flex-col overflow-hidden">
              {/* Terminal-style Header - FIXED SMALL DOTS */}
              <div className="bg-dark-bg border-b-2 border-dark-border px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between flex-shrink-0">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  {/* Terminal dots - Fixed 10px size */}
                  <div className="flex gap-1.5 flex-shrink-0">
                    <button 
                      onClick={onClose} 
                      className="rounded-full bg-red-500 hover:bg-red-600 transition-colors flex-shrink-0"
                      style={{ width: '10px', height: '10px', minWidth: '10px', minHeight: '10px' }}
                      aria-label="Close"
                    ></button>
                    <div 
                      className="rounded-full bg-yellow-500 flex-shrink-0"
                      style={{ width: '10px', height: '10px', minWidth: '10px', minHeight: '10px' }}
                    ></div>
                    <div 
                      className="rounded-full bg-green-500 flex-shrink-0"
                      style={{ width: '10px', height: '10px', minWidth: '10px', minHeight: '10px' }}
                    ></div>
                  </div>
                  <span className="text-text-muted font-mono text-xs sm:text-sm truncate">project_details.json</span>
                </div>
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-dark-hover rounded transition-colors text-text-muted hover:text-text-primary flex-shrink-0"
                  aria-label="Close modal"
                >
                  <HiX className="text-lg sm:text-xl" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-4 md:p-8">
                <div className="max-w-5xl mx-auto">
                  {/* Project Title Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-8"
                  >
                    <div className="flex items-start justify-between mb-4 gap-4">
                      <div className="flex-1 min-w-0">
                        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${colors.text} mb-2`}>
                          {project.title}
                        </h2>
                        <p className="text-text-secondary text-sm sm:text-base lg:text-lg font-mono">{project.tagline}</p>
                      </div>
                      <span className="px-2 sm:px-3 py-1 text-xs font-mono bg-dark-bg rounded border border-dark-border text-accent-purple flex-shrink-0">
                        {project.category === 'mobile' ? '📱 Mobile' : '🌐 Web'}
                      </span>
                    </div>
                  </motion.div>

                  {/* Image Carousel */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="relative bg-dark-bg rounded-lg overflow-hidden mb-6 border-2 border-dark-border"
                  >
                    <div className="relative h-48 sm:h-64 md:h-96 lg:h-[500px]">
                      <img
                        src={images[currentImageIndex]}
                        alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                        className="w-full h-full object-contain"
                      />
                      
                      {/* Navigation Arrows */}
                      {hasMultipleImages && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-dark-surface/90 hover:bg-dark-surface border border-dark-border rounded transition-all"
                            aria-label="Previous image"
                          >
                            <HiChevronLeft className="text-base sm:text-xl text-text-primary" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-dark-surface/90 hover:bg-dark-surface border border-dark-border rounded transition-all"
                            aria-label="Next image"
                          >
                            <HiChevronRight className="text-base sm:text-xl text-text-primary" />
                          </button>
                          
                          {/* Image Counter */}
                          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 px-2 sm:px-3 py-1 bg-dark-surface/90 border border-dark-border rounded text-xs sm:text-sm font-mono">
                            <span className={colors.text}>{currentImageIndex + 1}</span>
                            <span className="text-text-muted"> / {images.length}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>

                  {/* Thumbnails */}
                  {hasMultipleImages && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="flex gap-2 sm:gap-3 mb-8 overflow-x-auto pb-2 scrollbar-thin"
                    >
                      {images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded overflow-hidden border-2 transition-all ${
                            idx === currentImageIndex
                              ? `${colors.border} scale-105`
                              : 'border-dark-border opacity-50 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={img}
                            alt={`Thumbnail ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </motion.div>
                  )}

                  {/* Metrics Grid */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8"
                  >
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="code-card p-3 sm:p-4 rounded text-center border border-dark-border">
                        <div className={`text-lg sm:text-xl md:text-2xl font-bold font-mono ${colors.text} mb-1`}>
                          {metric.value}
                        </div>
                        <div className="text-xs text-text-muted uppercase">{metric.label}</div>
                      </div>
                    ))}
                  </motion.div>

                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="code-card p-4 sm:p-6 rounded mb-6 border border-dark-border"
                  >
                    <h3 className="text-base sm:text-lg font-bold text-text-primary mb-3 font-mono flex items-center gap-2">
                      <span className={colors.text}>$</span> cat description.txt
                    </h3>
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                      {project.fullDescription}
                    </p>
                  </motion.div>

                  {/* Highlights */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="code-card p-4 sm:p-6 rounded mb-6 border border-dark-border"
                  >
                    <h3 className="text-base sm:text-lg font-bold text-text-primary mb-4 font-mono flex items-center gap-2">
                      <span className={colors.text}>$</span> cat features.txt
                    </h3>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + idx * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <span className={`${colors.text} mt-1 flex-shrink-0`}>▹</span>
                          <span className="text-sm sm:text-base text-text-secondary">{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Tech Stack */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="code-card p-4 sm:p-6 rounded mb-6 border border-dark-border"
                  >
                    <h3 className="text-base sm:text-lg font-bold text-text-primary mb-4 font-mono flex items-center gap-2">
                      <span className={colors.text}>$</span> ls tech_stack/
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 + idx * 0.03 }}
                          className="px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-mono bg-dark-bg rounded border border-dark-border hover:border-accent-blue transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-wrap gap-3 sm:gap-4"
                  >
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 ${colors.bg} text-dark-bg rounded hover:opacity-90 transition-all font-mono font-semibold text-sm sm:text-base flex-1 sm:flex-initial`}
                      >
                        <HiExternalLink className="text-base sm:text-lg" /> Website
                      </a>
                    )}
                    {project.downloadLink && (
                      <a
                        href={project.downloadLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border-2 ${colors.border} ${colors.text} rounded hover:bg-current/10 transition-all font-mono font-semibold text-sm sm:text-base flex-1 sm:flex-initial`}
                      >
                        <HiDownload className="text-base sm:text-lg" /> Download App
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border-2 border-text-muted text-text-muted rounded hover:border-text-primary hover:text-text-primary transition-all font-mono font-semibold text-sm sm:text-base flex-1 sm:flex-initial"
                    >
                      <HiCode className="text-base sm:text-lg" /> Source Code
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
