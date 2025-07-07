import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Oblivion — Study Assistant App',
      description: 'Pomodoro timer, to-do list, and chat-based accountability assistant using Python, Streamlit, Gemini API.',
      github: 'https://github.com/Lavanya-865/Oblivion',
      tech: ['Python', 'Streamlit', 'Gemini API']
    },
    {
      title: 'Sign Language Translator',
      description: 'Browser extension converting ASL gestures to text/speech using OpenCV + real-time recognition.',
      github: 'https://github.com/K37VIN/SignScribe',
      tech: ['OpenCV', 'JavaScript', 'Machine Learning'],
      status: 'Ongoing'
    },
    {
      title: 'Gesture-Based WhatsApp Messenger',
      description: 'Flask + OpenCV app that detects real-time hand gestures to send custom WhatsApp messages via a web UI.',
      github: 'https://github.com/Lavanya-865/GestureBasedMessenger',
      tech: ['Flask', 'OpenCV', 'Python']
    },
    {
      title: 'NGO Management System',
      description: 'Full-stack web app with Flask + SQL for donation/volunteer tracking.',
      github: 'https://github.com/Lavanya-865/ngo-management-system',
      tech: ['Flask', 'SQL', 'Python']
    },
    {
      title: 'Student Course Registration System',
      description: 'JavaScript-based course scheduler with a dynamically updating timetable interface.',
      github: 'https://github.com/HarshiniMaale/course-reg',
      tech: ['JavaScript', 'HTML', 'CSS']
    },
    {
      title: 'File Manager Utility',
      description: 'Streamlit-based UI for file/folder creation, deletion, renaming, and movement — lightweight and simple.',
      github: 'https://github.com/Lavanya-865/FileManager',
      tech: ['Streamlit', 'Python']
    },
    {
      title: 'FloatingVoiceMic',
      description: 'Floating mic widget that listens to voice commands and instantly opens user-defined websites.',
      github: 'https://github.com/Lavanya-865/FloatingVoiceMic',
      tech: ['Python', 'Speech Recognition']
    }
  ];

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-900/50 border border-white/10 rounded-lg p-6 hover:border-white/30 transition-all duration-300 group"
              data-hover
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                {project.status && (
                  <span className="px-2 py-1 bg-cyan-500/10 text-cyan-300 text-xs rounded-full">
                    {project.status}
                  </span>
                )}
              </div>
              
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-white/10 text-white text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                  data-hover
                >
                  <Github size={16} />
                  <span className="text-sm">Code</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;