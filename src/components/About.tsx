import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="text-lg md:text-xl text-gray-300 leading-relaxed">
            <p className="mb-6">
              Hi! I'm Lavanya, a B.Tech Computer Science student at VIT Chennai (Batch 2023–2027). 
              I enjoy building things with code — from practical tools to fun experiments. Currently 
              diving deep into machine learning, backend development, and problem-solving.
            </p>
            <p>
              I've worked on personal and collaborative projects that reflect both curiosity and 
              technical growth. Each project has taught me something new and pushed me to explore 
              different aspects of software development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;