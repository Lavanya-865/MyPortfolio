import React from 'react';

const SectionDivider: React.FC = () => (
  <div className="relative my-20 flex items-center justify-center">
    {/* Container that limits width to center */}
    <div className="relative w-2/3 sm:w-1/2 h-6 flex items-center justify-center overflow-hidden">
      
      {/* Main white core beam */}
      <div className="absolute w-full h-[1px] bg-white opacity-90" />

      {/* Blurred glow aura */}
      <div className="absolute w-full h-[2px] bg-white/70 blur-sm animate-pulse" />

      {/* Wavy shimmer motion overlay */}
      <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent blur-[2px] opacity-80 animate-waveMotion" />
    </div>
  </div>
);

export default SectionDivider;
