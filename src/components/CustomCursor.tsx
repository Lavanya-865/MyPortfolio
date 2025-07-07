import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const cursor = document.createElement('div');
    cursor.id = 'custom-cursor-dot';
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX - 4}px`;
      cursor.style.top = `${e.clientY - 4}px`;
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-hover]')) {
        cursor.style.transform = 'scale(1.6)';
      } else {
        cursor.style.transform = 'scale(1)';
      }
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleHover);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleHover);
      cursor.remove();
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      <style>
        {`
          * { cursor: none !important; }
          #custom-cursor-dot {
            position: fixed;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: cyan;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: difference;
            transition: transform 0.12s ease-out;
            box-shadow:
              0 0 6px rgba(255, 255, 255, 0.8),
              0 0 14px rgba(255, 255, 255, 0.6),
              0 0 25px rgba(255, 255, 255, 0.3);
          }
        `}
      </style>
    </>
  );
};

export default CustomCursor;
