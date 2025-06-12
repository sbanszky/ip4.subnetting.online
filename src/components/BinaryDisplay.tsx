import React from 'react';
import { BinaryBit } from './BinaryBit';

interface BinaryDisplayProps {
  value: number;
  highlight?: boolean;
  className?: string;
  onScale?: boolean;
}

export const BinaryDisplay: React.FC<BinaryDisplayProps> = ({ 
  value, 
  highlight = false,
  className = '',
  onScale = false
}) => {
  const binary = value.toString(2).padStart(8, '0');
  
  return (
    <div className={`flex gap-[1px] ${className}`}>
      {binary.split('').map((bit, i) => (
        <BinaryBit 
          key={i} 
          value={bit} 
          highlight={highlight} 
          onScale={onScale}
        />
      ))}
    </div>
  );
};
