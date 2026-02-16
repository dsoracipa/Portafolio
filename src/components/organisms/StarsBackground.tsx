import React, { useMemo } from 'react';

interface StarsBackgroundProps {
  theme: string;
}

const StarsBackground: React.FC<StarsBackgroundProps> = ({ theme }) => {
  const stars = useMemo(() => Array.from({ length: 40 }, (_, i) => {
    const size = Math.random() * 2 + 1;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const duration = Math.random() * 2 + 1;
    return (
      <div
        key={i}
        className="absolute rounded-full bg-white opacity-80 animate-pulse"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
          animationDuration: `${duration}s`
        }}
      />
    );
  }), [theme]);

  const lightBg = 'radial-gradient(circle at 50% 30%, #ccfbf1 0%, #f3f4f6 60%, #f0fdfa 100%)';
  const darkBg = 'radial-gradient(circle at 50% 30%, #134e4a 0%, #115e59 20%, #0a1a18 40%, #000 80%, #000 100%)';

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <div className="w-full h-full" style={{ background: theme === 'dark' ? darkBg : lightBg }} />
      {stars}
      <div className={`absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-3xl ${theme === 'dark' ? 'bg-primary-900 opacity-40' : 'bg-primary-400 opacity-30'}`} />
    </div>
  );
};

export default StarsBackground;
