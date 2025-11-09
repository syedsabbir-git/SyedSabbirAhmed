import { useEffect, useState, useRef } from 'react';
import { HiChevronRight, HiTerminal } from 'react-icons/hi';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [commandIndex, setCommandIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  const fullText = 'Full-Stack And App Developer';
  
  const terminalCommands = [
    '> Initializing portfolio...',
    '> Loading projects...',
    '> Connecting to GitHub...',
    '> Ready to showcase work ✓',
  ];

  // Parallax setup
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Typing animation
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Terminal commands animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCommandIndex((prev) => (prev + 1) % terminalCommands.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content - Always first column on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Terminal prompt */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 text-accent-green font-mono text-sm mb-4"
            >
              <HiTerminal className="text-lg" />
              <span className="text-text-muted">syed@portfolio:~$</span>
              <span className="text-accent-green">whoami</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-4"
            >
              Syed Sabbir Ahmed
            </motion.h1>

            {/* Typing effect title */}
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-text-secondary mb-6 font-mono"
            >
              <span className="text-accent-purple">{'>'}</span> {displayedText}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>_</span>
            </motion.h2>

            {/* Hero Image - MOBILE ONLY - Shows after title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="lg:hidden mb-8"
            >
              <div className="relative max-w-xs mx-auto">
                {/* Decorative code background */}
                <div className="absolute inset-0 code-card rounded-lg transform rotate-3 opacity-20"></div>
                <div className="absolute inset-0 code-card rounded-lg transform -rotate-3 opacity-20"></div>
                
                {/* Main image container */}
                <div className="relative code-card rounded-lg overflow-hidden border-2 border-accent-blue">
                  <img
                    src="/rafi.png"
                    alt="Syed Sabbir Ahmed"
                    className="w-full h-auto"
                  />
                  
                  {/* Overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60"></div>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-base sm:text-lg text-text-secondary max-w-2xl mb-6 leading-relaxed"
            >
              Building scalable web and mobile applications with modern technologies. 
              Specialized in React, Flutter, and Firebase with a focus on performance optimization 
              and clean architecture.
            </motion.p>

            {/* Terminal output animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="code-card p-4 rounded mb-6 font-mono text-sm"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-text-muted text-xs ml-2">terminal</span>
              </div>
              <div className="space-y-1 text-text-muted">
                {terminalCommands.map((cmd, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: commandIndex >= idx ? 1 : 0.3, x: 0 }}
                    transition={{ delay: idx * 0.5 }}
                    className="flex items-center gap-2"
                  >
                    <span className={commandIndex === idx ? 'text-accent-green' : ''}>
                      {cmd}
                    </span>
                    {commandIndex === idx && showCursor && <span className="text-accent-green">▊</span>}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats - Full Width Distribution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="grid grid-cols-3 gap-3 mb-6 max-w-xl"
            >
              <div className="code-card px-4 py-3 rounded">
                <p className="text-accent-blue font-mono text-xs mb-1">Production Apps</p>
                <p className="text-xl font-bold text-text-primary">3</p>
              </div>
              <div className="code-card px-4 py-3 rounded">
                <p className="text-accent-green font-mono text-xs mb-1">Active Users</p>
                <p className="text-xl font-bold text-text-primary">20K+</p>
              </div>
              <div className="code-card px-4 py-3 rounded">
                <p className="text-accent-purple font-mono text-xs mb-1">Experience</p>
                <p className="text-xl font-bold text-text-primary">2+ Years</p>
              </div>
            </motion.div>

            {/* CTAs - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex flex-wrap gap-4 max-w-xl"
            >
              <a
                href="#projects"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-accent-blue text-dark-bg rounded hover:bg-accent-blue/90 transition-all font-mono font-semibold min-w-[180px]"
              >
                <HiChevronRight /> View Projects
              </a>
              <a
                href="#contact"
                className="flex-1 px-6 py-3 border border-accent-blue text-accent-blue rounded hover:bg-accent-blue/10 transition-all font-mono font-semibold text-center min-w-[180px]"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Image - DESKTOP ONLY - Shows on right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              {/* Decorative code background */}
              <div className="absolute inset-0 code-card rounded-lg transform rotate-3 opacity-20"></div>
              <div className="absolute inset-0 code-card rounded-lg transform -rotate-3 opacity-20"></div>
              
              {/* Main image container */}
              <div className="relative code-card rounded-lg overflow-hidden border-2 border-accent-blue">
                <img
                  src="/rafi.png"
                  alt="Syed Sabbir Ahmed"
                  className="w-full h-auto"
                />
                
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 code-card px-3 py-2 rounded border border-accent-green"
              >
                <span className="text-accent-green font-mono text-sm">{'<Developer />'}</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 code-card px-3 py-2 rounded border border-accent-purple"
              >
                <span className="text-accent-purple font-mono text-sm">const skills = ["React", "Flutter"];</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom terminal prompt */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="text-accent-green font-mono text-sm mt-12"
        >
          <span className="text-text-muted">syed@portfolio:~$</span> cd about/
          <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>▊</span>
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
