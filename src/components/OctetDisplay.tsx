import React from 'react';
import { BinaryDisplay } from './BinaryDisplay';

interface OctetDisplayProps {
  octets: number[];
  highlightBits?: (octetIndex: number) => number[];
  className?: string;
}

export const OctetDisplay: React.FC<OctetDisplayProps> = ({ 
  octets, 
  highlightBits,
  className = ''
}) => {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="flex gap-1">
        {octets.map((octet, i) => (
          <BinaryDisplay 
            key={i} 
            value={octet} 
            highlight={highlightBits ? highlightBits(i) : []}
            className="text-blue-400"
          />
        ))}
      </div>
      <span className="text-xs ml-2 text-gray-300 font-mono">
        {octets.join('.')}
      </span>
    </div>
  );
};
