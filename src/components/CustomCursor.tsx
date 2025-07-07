import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[9999]"
      style={{
        backgroundColor: 'white',
        boxShadow: `
          0 0 6px rgba(255, 255, 255, 0.8),
          0 0 12px rgba(255, 255, 255, 0.5),
          0 0 20px rgba(255, 255, 255, 0.3)
        `,
        mixBlendMode: 'difference',
      }}
      animate={{
        x: mousePosition.x - 5,
        y: mousePosition.y - 5,
      }}
      transition={{
        type: 'tween',
        duration: 0.03,
        ease: 'linear',
      }}
    />
  );
};

export default CustomCursor;
