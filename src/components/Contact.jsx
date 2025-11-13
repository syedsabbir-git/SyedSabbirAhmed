import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import { SiGithub, SiLinkedin, SiLeetcode, SiCodeforces } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const contactInfo = [
    {
      icon: HiMail,
      label: 'Email',
      value: 'syedsabbirahmed.contact@gmail.com',
      href: 'mailto:syedsabbirahmed.contact@gmail.com',
    },
    {
      icon: HiPhone,
      label: 'Phone',
      value: '+880 1793662422',
      href: 'tel:+8801793662422',
    },
    {
      icon: HiLocationMarker,
      label: 'Location',
      value: 'Dhaka, Bangladesh',
      href: null,
    }
  ];

  const socialLinks = [
    { icon: SiGithub, label: 'GitHub', href: 'https://github.com/syedsabbir-git' },
    { icon: SiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/syed-sabbir-ahmed/' },
    { icon: SiLeetcode, label: 'LeetCode', href: 'https://leetcode.com/u/rafivaiii/' },
    { icon: SiCodeforces, label: 'Codeforces', href: 'https://codeforces.com/profile/syedsabbirahmed' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '74d15574-41c9-4bf0-bb7a-a19472aedc44', 
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ 
          type: 'success', 
          message: '✓ Message sent successfully! I\'ll get back to you soon.' 
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: '✗ Failed to send message. Please try again or email me directly.' 
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-accent-green font-mono text-sm mb-2">
            <span className="text-text-muted">syed@portfolio:~$</span> curl -X POST /contact
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ▊
            </motion.span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            <span className="text-accent-blue font-mono">04.</span> Get In Touch
          </h2>
          <p className="text-text-secondary max-w-2xl">
            I'm currently open to new opportunities and interesting projects. 
            Feel free to reach out if you'd like to work together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="code-card p-6 rounded-lg border border-dark-border space-y-4 h-full flex flex-col">
              <h3 className="text-lg font-bold text-accent-purple mb-2 font-mono">Send Message</h3>
              
              <div className="flex-1 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-text-secondary text-sm font-mono mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark-bg border border-dark-border rounded focus:border-accent-blue focus:outline-none text-text-primary font-mono text-sm"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-text-secondary text-sm font-mono mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark-bg border border-dark-border rounded focus:border-accent-blue focus:outline-none text-text-primary font-mono text-sm"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="flex-1 flex flex-col">
                  <label htmlFor="message" className="block text-text-secondary text-sm font-mono mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="flex-1 w-full px-4 py-2 bg-dark-bg border border-dark-border rounded focus:border-accent-blue focus:outline-none text-text-primary font-mono text-sm resize-none"
                    placeholder="Your message here..."
                  />
                </div>
              </div>

              {status.message && (
                <div className={`p-3 rounded font-mono text-sm ${
                  status.type === 'success' 
                    ? 'bg-accent-green/10 text-accent-green border border-accent-green/30' 
                    : 'bg-red-500/10 text-red-400 border border-red-400/30'
                }`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent-blue text-dark-bg rounded hover:bg-accent-blue/90 transition-all font-mono font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-dark-bg border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <HiPaperAirplane /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Right: Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full"
          >
            <div className="code-card p-6 rounded-lg border border-dark-border flex-1 flex flex-col">
              {/* Contact Info */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-accent-purple mb-4 font-mono">Contact Info</h3>
                <div className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3"
                    >
                      <div className="p-2 bg-dark-bg rounded border border-dark-border flex-shrink-0">
                        <info.icon className="text-lg text-accent-blue" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-text-muted text-xs font-mono">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-text-primary hover:text-accent-blue transition-colors text-sm truncate block"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-text-primary text-sm">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-accent-purple mb-4 font-mono">Social Links</h3>
                <div className="grid grid-cols-2 gap-3 flex-1">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="flex flex-col items-center justify-center gap-2 p-3 bg-dark-bg rounded border border-dark-border hover:border-accent-blue transition-all"
                    >
                      <social.icon className="text-2xl text-text-muted hover:text-accent-blue transition-colors" />
                      <span className="text-xs font-mono text-text-secondary text-center">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Download Resume Button */}
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 block w-full text-center px-6 py-3 border-2 border-accent-green text-accent-green rounded hover:bg-accent-green/10 transition-all font-mono font-semibold"
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
