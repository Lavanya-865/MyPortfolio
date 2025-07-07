import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative z-10">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 border-2 border-white/20 flex items-center justify-center relative overflow-hidden group">
              {/* Glowing rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-transparent"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Actual profile photo (place this in /public/photo.jpg) */}
              <img
                src="/photo.jpg"
                alt="Lavanya Mall Thakur"
                className="w-full h-full object-cover rounded-full z-10"
              />

              {/* Hover overlay effect */}
              <div className="absolute inset-0 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300" />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Lavanya Mall Thakur
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Aspiring SDE & AI/ML Enthusiast
          </p>
        </motion.div>

        {/* Typewriter Line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-mono text-lg md:text-xl text-green-400"
        >
          <Typewriter
            options={{
              strings: [
                'Curious Computer Science student.',
                'I like building stuff.',
                'I spiral occasionally.',
                'It balances out.',
              ],
              autoStart: true,
              loop: true,
              delay: 40,
              deleteSpeed: 18,
            }}
          />
        </motion.div>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <button
            onClick={() =>
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-4 border border-white/30 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            data-hover
          >
            Explore My Work
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
