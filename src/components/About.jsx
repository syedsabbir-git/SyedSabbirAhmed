import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState([
    '$ Welcome! Type "help" for commands'
  ]);

  const commands = {
    help: [
      'Available commands:',
      '  skills     - Technical skills',
      '  projects   - Project count',
      '  contact    - Contact info',
      '  experience - Work experience',
      '  clear      - Clear terminal'
    ],
    skills: [
      'Skills:',
      '  • Frontend: React, Flutter',
      '  • Backend: Node.js, Firebase',
      '  • Database: MySQL, PostgreSQL'
    ],
    projects: [
      'Projects: 3 production apps',
      '  • ClassSync - 20K+ users',
      '  • UniRide - Ride-sharing',
      '  • DIURecycle - Marketplace'
    ],
    contact: [
      'Contact:',
      '  📧 syedsabbirahmed.contact@gmail.com',
      '  📱 +880 1793662422'
    ],
    experience: [
      '6amTech | Dhaka, Bangladesh',
      '  • Junior Software Engineer (May 2026 - Present)',
      '  • Trainee Software Engineer (Dec 2025 - Apr 2026)'
    ],
    clear: 'CLEAR'
  };

  const handleCommand = (cmd) => {
    const command = cmd.trim().toLowerCase();
    
    if (command === 'clear') {
      setTerminalOutput(['$ Terminal cleared']);
      return;
    }

    const output = commands[command] || [`Command not found: ${cmd}`, 'Type "help" for commands'];
    setTerminalOutput([...terminalOutput, `$ ${cmd}`, ...output]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (terminalInput.trim()) {
      handleCommand(terminalInput);
      setTerminalInput('');
    }
  };

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-12">
            <p className="text-accent-green font-mono text-sm mb-2">
              <span className="text-text-muted">syed@portfolio:~$</span> cat about.txt
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ▊
              </motion.span>
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              <span className="text-accent-blue font-mono">01.</span> About Me
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left: Bio Content - 3 columns width */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="code-card p-6 rounded-lg border border-dark-border space-y-4 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <p className="text-text-secondary leading-relaxed">
                    I'm a <span className="text-accent-blue font-semibold">Junior Software Engineer</span> at{' '}
                    <span className="text-accent-purple font-semibold">6amTech</span>, passionate about building
                    scalable applications that make a real impact.
                  </p>

                  <p className="text-text-secondary leading-relaxed">
                    Currently pursuing <span className="text-accent-green">B.Sc. in Computer Science</span> at 
                    Daffodil International University (Expected Dec 2025). I've architected production-ready 
                    apps serving over <span className="text-accent-blue font-semibold">20,000+ users</span> with 
                    features like real-time communication, advanced caching, and 99.9% uptime.
                  </p>

                  <p className="text-text-secondary leading-relaxed">
                    My expertise spans <span className="text-accent-blue">React</span>,{' '}
                    <span className="text-accent-purple">Flutter</span>, Firebase, Supabase, and modern 
                    web technologies. I focus on performance optimization, clean architecture, and 
                    building solutions that scale.
                  </p>

                  <p className="text-text-secondary leading-relaxed">
                    Beyond coding, I'm active in competitive programming with a{' '}
                    <span className="text-accent-purple">990 max rating on Codeforces</span> and 120+ 
                    problems solved across platforms. I also participated in ICPC Asia Dhaka Regional 2024.
                  </p>
                </div>

                {/* Education and Current at Bottom */}
                <div className="grid sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-dark-border">
                  <div>
                    <h3 className="text-accent-purple font-mono text-sm mb-2">🎓 Education</h3>
                    <p className="text-text-secondary text-sm">B.Sc. Computer Science</p>
                    <p className="text-text-muted text-xs">DIU • Dec 2025</p>
                  </div>

                  <div>
                    <h3 className="text-accent-green font-mono text-sm mb-2">💼 Current</h3>
                    <p className="text-text-secondary text-sm">Junior Software Engineer</p>
                    <p className="text-text-muted text-xs">6amTech</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Interactive Terminal - 2 columns width */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="code-card rounded-lg border border-dark-border overflow-hidden flex flex-col h-full">
                {/* Terminal Header */}
                <div className="bg-dark-bg px-4 py-2 border-b border-dark-border flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-text-muted text-xs ml-2 font-mono">terminal</span>
                </div>

                {/* Terminal Output - Manual Scroll Only */}
                <div 
                  className="p-4 font-mono text-xs overflow-y-auto scrollbar-thin bg-dark-surface/50"
                  style={{ 
                    minHeight: '300px',
                    maxHeight: '400px',
                    flex: '1 1 auto'
                  }}
                >
                  {terminalOutput.map((line, idx) => (
                    <div
                      key={idx}
                      className={`mb-1 ${
                        line.startsWith('$') ? 'text-accent-green' : 'text-text-secondary'
                      }`}
                    >
                      {line}
                    </div>
                  ))}
                </div>

                {/* Terminal Input */}
                <form onSubmit={handleSubmit} className="bg-dark-bg px-4 py-2 border-t border-dark-border flex-shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="text-accent-green font-mono text-xs">$</span>
                    <input
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      placeholder="Type command..."
                      className="flex-1 bg-transparent border-none outline-none text-text-primary font-mono text-xs placeholder:text-text-muted"
                      autoComplete="off"
                    />
                  </div>
                </form>

                {/* All Command Shortcuts */}
                <div className="bg-dark-bg px-3 py-2 border-t border-dark-border flex-shrink-0">
                  <div className="flex flex-wrap gap-2">
                    {['help', 'skills', 'projects', 'contact', 'experience', 'clear'].map((cmd) => (
                      <button
                        key={cmd}
                        onClick={() => handleCommand(cmd)}
                        className="px-2 py-1 text-xs font-mono bg-dark-surface border border-dark-border rounded hover:border-accent-blue transition-colors"
                      >
                        {cmd}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
