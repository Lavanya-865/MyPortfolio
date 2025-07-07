import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, BookOpen, Palette, Users } from 'lucide-react';

const Interests: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const interests = [
    {
      icon: <Heart size={24} />,
      title: 'Learning & Building',
      description: 'Passionate about learning and building meaningful tech tools'
    },
    {
      icon: <BookOpen size={24} />,
      title: 'Reading & Music',
      description: 'Enjoy reading, listening to music, and exploring new ideas'
    },
    {
      icon: <Palette size={24} />,
      title: 'Art & Design',
      description: 'Fascinated by both traditional and digital art, and love experimenting with UI/UX design'
    },
    {
      icon: <Users size={24} />,
      title: 'Connection & Collaboration',
      description: 'Enjoy connecting with people, meaningful conversations, and collaboration'
    }
  ];

  return (
    <section id="interests" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Interests & Hobbies
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-900/50 border border-white/10 rounded-lg p-6 hover:border-white/30 transition-all duration-300 group"
              data-hover
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/10 rounded-full text-white group-hover:bg-white/20 transition-colors">
                  {interest.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gray-300 transition-colors">
                    {interest.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;