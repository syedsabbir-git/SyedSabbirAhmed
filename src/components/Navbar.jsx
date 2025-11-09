import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiCode } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
      }
    })
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all ${
          scrolled ? 'bg-dark-surface/95 backdrop-blur-sm border-b border-dark-border shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-accent-blue hover:text-accent-purple transition-colors"
            >
              <HiCode className="text-2xl" />
              <span className="font-mono font-bold text-lg">syed_sabbir</span>
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;
                
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    whileHover={{ y: -2 }}
                    className={`relative px-4 py-2 rounded transition-all font-mono text-sm ${
                      isActive 
                        ? 'text-accent-blue bg-dark-hover' 
                        : 'text-text-secondary hover:text-text-primary hover:bg-dark-hover'
                    }`}
                  >
                    <span className="text-accent-green">0{index + 1}.</span> {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-blue"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.a>
                );
              })}
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-4 py-2 border border-accent-blue text-accent-blue rounded hover:bg-accent-blue/10 transition-all font-mono text-sm"
              >
                Resume
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              className="md:hidden text-text-primary text-2xl z-[60]"
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Slide-in Menu */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-72 bg-dark-surface border-l border-dark-border z-50 md:hidden"
            >
              <div className="flex flex-col h-full pt-20 px-6">
                {/* Terminal Header */}
                <div className="mb-8 code-card p-4 rounded border border-accent-blue">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-accent-green font-mono text-sm">$ navigation --menu</p>
                </div>

                {/* Menu Items */}
                <nav className="space-y-2 flex-1">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      custom={index}
                      variants={itemVariants}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-dark-hover rounded font-mono text-base border border-transparent hover:border-accent-blue transition-all"
                    >
                      <span className="text-accent-green">0{index + 1}.</span> {item.name}
                    </motion.a>
                  ))}
                </nav>

                {/* Bottom Actions */}
                <div className="space-y-3 pb-8">
                  <motion.a
                    custom={navItems.length}
                    variants={itemVariants}
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-4 py-3 bg-accent-blue text-dark-bg rounded hover:bg-accent-blue/90 font-mono font-semibold"
                  >
                    Get In Touch
                  </motion.a>
                  <motion.a
                    custom={navItems.length + 1}
                    variants={itemVariants}
                    href="/resume.pdf"
                    download
                    className="block w-full text-center px-4 py-3 border border-accent-green text-accent-green rounded hover:bg-accent-green/10 font-mono font-semibold"
                  >
                    Download Resume
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
