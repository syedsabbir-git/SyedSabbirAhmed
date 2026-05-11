import { motion } from 'framer-motion';

const workExperience = {
  company: '6amTech',
  location: 'Dhaka, Bangladesh',
  roles: [
    {
      title: 'Junior Software Engineer',
      period: 'May 2026 – Present',
    },
    {
      title: 'Trainee Software Engineer',
      period: 'Dec 2025 – Apr 2026',
    },
  ],
  achievements: [
    {
      title: 'Architecture & State Management',
      description:
        'Implemented clean architecture using GetX, decoupling UI from business logic with centralized controllers, Repository/Service patterns, and Fenix lazy initialization to optimize memory usage across multi-vendor platforms including 6amMart and 6Valley.',
    },
    {
      title: 'Testing & Automation Infrastructure',
      description:
        'Integrated Patrol for End-to-End mobile testing and developed a custom Node.js crawler to parse, detect, and report 4xx/5xx network errors across complex vendor admin panels.',
    },
    {
      title: 'Dynamic Data Systems',
      description:
        'Engineered scalable UI and data flows for large product catalogs with dynamic filtering, advanced search auto-suggestions, and robust pagination/load-more logic for high-traffic environments.',
    },
    {
      title: 'Codebase Optimization',
      description:
        'Refactored core modules to reduce technical debt, standardized API integrations, fixed complex data-flow inconsistencies, and introduced unified module-handling logic to improve cross-platform stability and maintainability.',
    },
  ],
};

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-accent-green font-mono text-sm mb-2">
            <span className="text-text-muted">syed@portfolio:~/experience$</span> cat work.log
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ▊
            </motion.span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            <span className="text-accent-blue font-mono">02.</span> Work Experience
          </h2>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="code-card p-6 rounded-lg border border-dark-border"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
              <h3 className="text-xl font-bold text-accent-purple">{workExperience.company}</h3>
              <p className="text-sm font-mono text-text-muted">{workExperience.location}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {workExperience.roles.map((role) => (
                <div key={role.title} className="bg-dark-bg rounded-lg border border-dark-border p-4">
                  <p className="text-text-primary font-semibold">{role.title}</p>
                  <p className="text-text-muted text-sm font-mono mt-1">{role.period}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {workExperience.achievements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
                className="code-card p-5 rounded-lg border border-dark-border"
              >
                <h4 className="text-accent-green font-mono text-sm mb-3">{item.title}</h4>
                <p className="text-text-secondary leading-relaxed text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
