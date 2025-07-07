import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Cpu, GitBranch } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code size={24} />,
      skills: ['Python', 'C++', 'Java', 'JavaScript', 'HTML', 'CSS']
    },
    {
      title: 'Frameworks & Tools',
      icon: <Database size={24} />,
      skills: ['Streamlit', 'Flask', 'React', 'OpenCV', 'Scikit-learn', 'Git']
    },
    {
      title: 'Focus Areas',
      icon: <Cpu size={24} />,
      skills: ['Backend Development', 'AI/ML', 'DSA']
    }
  ];

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-900/50 border border-white/10 rounded-lg p-6 hover:border-white/30 transition-all duration-300"
              data-hover
            >
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-white/10 rounded-full text-white">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: (index * 0.2) + (skillIndex * 0.1) }}
                    className="px-3 py-1 bg-white/10 text-white text-sm rounded-full hover:bg-white/20 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;