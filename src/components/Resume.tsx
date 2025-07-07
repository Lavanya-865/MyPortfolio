import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download } from 'lucide-react';

const Resume: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1tMUo4XtO86wwmqhxP3ugFfWyg7MUC_kg/view?usp=drive_link', '_blank');
  };

  return (
    <section id="resume" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Download my resume to learn more about my experience and qualifications.
          </p>
          <motion.button
            onClick={handleDownload}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-transparent border-2 border-white/30 rounded-full text-white hover:border-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            data-hover
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            <span className="text-lg font-medium">Download Resume</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;