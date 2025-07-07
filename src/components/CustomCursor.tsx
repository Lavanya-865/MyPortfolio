import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768); // Only show on desktop
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  if (isMobile) return null; // Skip rendering on mobile

  return (
    <motion.div
      className="fixed top-0 left-0 w-1 h-1 rounded-full pointer-events-none z-50"
      style={{
        backgroundColor: '#00ffff', // Cyan color
        boxShadow: '0 0 8px #00ffff, 0 0 16px #00ffff, 0 0 24px #00ffff50',
      }}
      animate={{
        x: mousePosition.x - 0.5,
        y: mousePosition.y - 0.5,
      }}
      transition={{
        type: 'spring',
        stiffness: 1000,
        damping: 50,
        mass: 0.1,
      }}
    />
  );
};

export default CustomCursor;
