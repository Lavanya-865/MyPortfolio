import React from 'react';

const SectionDivider: React.FC = () => {
  return (
    <div className="relative my-20 flex justify-center">
      <svg
        viewBox="0 0 600 40"
        className="w-[70%] h-6"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M 0 20 Q 150 0 300 20 T 600 20"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          filter="url(#glow)"
          className="animate-[waveMotion_4s_ease-in-out_infinite]"
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
