import React from 'react';
import { cn } from '../../utils/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn('container mx-auto px-4 max-w-7xl', className)}>
      {children}
    </div>
  );
};

export default Container;