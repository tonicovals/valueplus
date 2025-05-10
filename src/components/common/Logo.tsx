import React from 'react';
import { Building2, Users, TrendingUp, Zap, Share2, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';

interface LogoProps {
  size?: number;
  variant?: 'default' | 'white';
  company?: string;
  animated?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 24, variant = 'default', company, animated = false }) => {
  const colorClass = variant === 'white' ? 'text-white' : 'text-yellow-500';
  
  const getIcon = () => {
    switch (company) {
      case 'nadara-contracting':
        return <Zap size={size} />;
      case 'rakeeza-plus':
        return <Users size={size} />;
      case 'khuzam-najd':
        return <Building2 size={size} />;
      case 'ejaba-hr':
        return <Users size={size} />;
      case 'nadara-marketing':
        return <Share2 size={size} />;
      case 'plus-hundred':
        return <LineChart size={size} />;
      default:
        return (
          <motion.div 
            className="relative"
            initial={animated ? { rotate: -180, scale: 0.5 } : {}}
            animate={animated ? { rotate: 0, scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className={`w-${size} h-${size} relative flex items-center justify-center`}>
              {/* Enhanced Plus symbol with 3D effect */}
              <div className="relative w-full h-full">
                {/* Main horizontal line with 3D effect */}
                <motion.div 
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[16%] bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.5)] transform-gpu`}
                  initial={animated ? { scaleX: 0 } : {}}
                  animate={animated ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.2 }}
                  style={{
                    transform: 'perspective(500px) rotateX(20deg)',
                    boxShadow: '0 4px 6px -1px rgba(234,179,8,0.3), 0 2px 4px -2px rgba(234,179,8,0.2)'
                  }}
                />
                
                {/* Main vertical line with 3D effect */}
                <motion.div 
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[16%] h-[80%] bg-gradient-to-b from-yellow-600 via-yellow-500 to-yellow-600 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.5)] transform-gpu`}
                  initial={animated ? { scaleY: 0 } : {}}
                  animate={animated ? { scaleY: 1 } : {}}
                  transition={{ delay: 0.3 }}
                  style={{
                    transform: 'perspective(500px) rotateY(20deg)',
                    boxShadow: '4px 0 6px -1px rgba(234,179,8,0.3), 2px 0 4px -2px rgba(234,179,8,0.2)'
                  }}
                />

                {/* Enhanced glow effects */}
                <div className="absolute inset-0 bg-yellow-500 opacity-30 blur-lg rounded-full animate-pulse-slow" />
                <div className="absolute inset-0 bg-yellow-400 opacity-20 blur-xl rounded-full animate-glow" />
                
                {/* Dynamic shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/30 to-transparent animate-shine" />
                
                {/* Sparkle effects */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-200 rounded-full"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.5,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                    style={{
                      top: `${25 + (i * 50)}%`,
                      left: `${25 + (i * 50)}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        );
    }
  };

  const LogoWrapper = animated ? motion.div : 'div';
  const animationProps = animated ? {
    initial: { scale: 0.9, rotate: -10 },
    animate: { scale: 1, rotate: 0 },
    whileHover: { scale: 1.1, rotate: 5 },
    transition: { type: "spring", stiffness: 300, damping: 15 }
  } : {};

  return (
    <LogoWrapper
      className={`relative flex items-center justify-center rounded-full ${colorClass} bg-opacity-20 p-3`}
      {...animationProps}
    >
      <div className="absolute inset-0 bg-current opacity-10 rounded-full" />
      {getIcon()}
    </LogoWrapper>
  );
};

export default Logo;