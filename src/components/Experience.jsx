const workExperience = {
  company: '6amTech',
  location: 'Dhaka, Bangladesh',
  roles: [
    {
      title: 'Junior Software Engineer',
      period: 'May 2026 – Present',
      summary:
        'Driving production-scale feature delivery, architecture decisions, and cross-platform stability improvements.',
    },
    {
      title: 'Trainee Software Engineer',
      period: 'Dec 2025 – Apr 2026',
      summary:
        'Contributed to mobile and admin workflows while strengthening testing, integration, and module reliability.',
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
        <div className="mb-12">
          <p className="text-accent-green font-mono text-sm mb-2">
            <span className="text-text-muted">syed@portfolio:~/experience$</span> cat work.log
            <span> ▊</span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            <span className="text-accent-blue font-mono">02.</span> Work Experience
          </h2>
        </div>

        <div className="space-y-6">
          <div className="code-card p-6 rounded-lg border border-dark-border">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
              <h3 className="text-xl font-bold text-accent-purple">{workExperience.company}</h3>
              <p className="text-sm font-mono text-text-muted">{workExperience.location}</p>
            </div>
            <div className="relative mt-6 pl-6 border-l border-dark-border/90 space-y-6">
              {workExperience.roles.map((role) => (
                <div key={role.title} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-accent-blue border-2 border-dark-bg"
                  />
                  <p className="text-text-primary font-semibold">{role.title}</p>
                  <p className="text-text-muted text-sm font-mono mt-1">{role.period}</p>
                  <p className="text-text-secondary text-sm mt-2 leading-relaxed">{role.summary}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="code-card p-5 rounded-lg border border-dark-border">
            <h4 className="text-accent-green font-mono text-sm mb-4">Impact Highlights</h4>
            <div className="space-y-3">
              {workExperience.achievements.map((item) => (
                <details key={item.title} className="bg-dark-bg rounded-lg border border-dark-border px-4 py-3">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-3">
                    <span className="text-text-primary text-sm font-medium">{item.title}</span>
                    <span className="text-text-muted text-xs font-mono">view</span>
                  </summary>
                  <p className="text-text-secondary leading-relaxed text-sm mt-3">{item.description}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
