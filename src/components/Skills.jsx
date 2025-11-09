import { motion } from 'framer-motion';
import { 
  SiReact, SiFlutter, SiFirebase, SiSupabase, SiJavascript, 
  SiTailwindcss, SiGit, SiMysql, SiPython, SiDart, SiVercel, SiNodedotjs
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Mobile Development',
      skills: [
        { name: 'Flutter', icon: SiFlutter, color: 'text-accent-blue' },
        { name: 'Dart', icon: SiDart, color: 'text-accent-blue' },
        { name: 'React Native', icon: SiReact, color: 'text-accent-blue' },
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'React', icon: SiReact, color: 'text-accent-blue' },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-accent-orange' },
        { name: 'Node.js', icon: SiNodedotjs, color: 'text-accent-green' },
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Firebase', icon: SiFirebase, color: 'text-accent-orange' },
        { name: 'Supabase', icon: SiSupabase, color: 'text-accent-green' },
        { name: 'MySQL', icon: SiMysql, color: 'text-accent-blue' },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: SiGit, color: 'text-accent-orange' },
        { name: 'Python', icon: SiPython, color: 'text-accent-blue' },
        { name: 'Vercel', icon: SiVercel, color: 'text-text-primary' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with terminal animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-accent-green font-mono text-sm mb-2">
            <span className="text-text-muted">syed@portfolio:~$</span> cat skills.json
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ▊
            </motion.span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            <span className="text-accent-blue font-mono">03.</span> Skills & Technologies
          </h2>
        </motion.div>

        {/* Skills Grid with animations */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              variants={{
                hidden: { opacity: 0, x: catIndex % 2 === 0 ? -20 : 20 },
                visible: { opacity: 1, x: 0 }
              }}
              className="code-card p-6 rounded-lg"
            >
              <h3 className="text-lg font-bold text-accent-purple mb-4 font-mono">
                {category.title}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center gap-2 p-3 bg-dark-bg rounded hover:bg-dark-hover transition-all cursor-pointer"
                  >
                    <skill.icon className={`text-3xl ${skill.color}`} />
                    <span className="text-xs text-text-secondary font-mono">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
