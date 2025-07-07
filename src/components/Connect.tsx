import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail } from 'lucide-react';

const Connect: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    {
      icon: <Github size={32} />,
      label: 'GitHub',
      url: 'https://github.com/Lavanya-865',
      color: 'hover:text-gray-300'
    },
    {
      icon: <Linkedin size={32} />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/lavanya-thakur-58b853347/',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="connect" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, and conversations. 
            Feel free to reach out if you'd like to connect!
          </p>

          <div className="flex justify-center space-x-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-6 bg-gray-900/50 border border-white/10 rounded-full text-white ${link.color} hover:border-white/30 transition-all duration-300 transform hover:scale-110`}
                data-hover
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
                <span className="sr-only">{link.label}</span>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-gray-500 text-sm"
          >
            <p>Built with React, TypeScript, and Tailwind CSS</p>
            <p className="mt-2">© 2025 Lavanya Mall Thakur. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Connect;