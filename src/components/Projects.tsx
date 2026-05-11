import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'PII Redaction Suite — Video',
      description:
        'Developed a real-time privacy protection pipeline using YOLOv8 and EasyOCR to automatically redact faces, ID cards, license plates, and sensitive information during live video streams.',
      link: 'https://drive.google.com/file/d/1mGC1g-LlPY9W-q8aE4DQluY11-1-YzzP/view?usp=sharing',
      linkLabel: 'Research Paper',
      tech: ['Python', 'YOLOv8', 'OpenCV', 'EasyOCR'],
      status: 'Research'
    },

    {
      title: 'PII Redaction Suite — Documents',
      description:
        'Built a privacy-preserving document redaction system for secure LLM querying using cryptographic hashing, OCR pipelines, and automated sensitive text masking.',
      link: 'https://drive.google.com/file/d/1z83HvItHU3PEBwR9fDQpXzPQ6q6tA_CZ/view?usp=sharing',
      linkLabel: 'Research Paper',
      tech: ['Python', 'OCR', 'Argon2', 'BLAKE3', 'LLMs'],
      status: 'Research'
    },

    {
      title: 'Tool-E — Accessibility Assistant',
      description:
        'AI-powered accessibility assistant using Gemini API and computer vision to provide real-time visual and audio guidance for physical tasks.',
      link: 'https://devpost.com/software/tool-e-wgz9fb',
      secondaryLink: 'https://github.com/Lavanya-865/tool-e',
      linkLabel: 'Devpost',
      secondaryLabel: 'GitHub',
      tech: ['Python', 'Gemini API', 'Streamlit', 'Computer Vision'],
      status: 'Featured'
    },
    
    {
      title: 'AWS Security Alert Dashboard',
      description:
        'Built a serverless cloud security monitoring dashboard using AWS CloudTrail, Lambda, DynamoDB, and SNS to detect anomalies and trigger real-time security alerts.',
      link: 'https://drive.google.com/file/d/1Kk4KiLxjXMenUEYon7PMzNVghCHGxytF/view?usp=sharing',
      linkLabel: 'Project Report',
      tech: ['AWS', 'Lambda', 'CloudTrail', 'DynamoDB', 'SNS'],
      status: 'Cloud'
    },
    
    {
      title: 'FlatSync',
      description:
        'Full-stack flatmate management platform with secure authentication, chore automation, expense tracking, and responsive real-time interfaces.',
      link: 'https://github.com/Lavanya-865/flatsync',
      linkLabel: 'GitHub',
      tech: ['React', 'Flask', 'SQL', 'REST API']
    },

    {
      title: 'Gesture-Based WhatsApp Messenger',
      description:
        'Real-time gesture recognition application using OpenCV and Flask to trigger WhatsApp messaging through hand-sign detection.',
      link: 'https://github.com/Lavanya-865/GestureBasedMessenger',
      linkLabel: 'GitHub',
      tech: ['Python', 'Flask', 'OpenCV']
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
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-[#111111]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300 group shadow-lg"
              data-hover
            >
              <div className="flex justify-between items-start mb-4 gap-3">
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                {project.status && (
                  <span className="px-2 py-1 bg-cyan-500/10 text-cyan-300 text-xs rounded-full whitespace-nowrap">
                    {project.status}
                  </span>
                )}
              </div>

              <p className="text-gray-400 mb-5 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-white/10 text-white text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-cyan-300 hover:text-cyan-200 transition-colors"
                  data-hover
                >
                  <ExternalLink size={16} />
                  <span className="text-sm">{project.linkLabel}</span>
                </a>

                {project.secondaryLink && (
                  <a
                    href={project.secondaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                    data-hover
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">
                      {project.secondaryLabel}
                    </span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
