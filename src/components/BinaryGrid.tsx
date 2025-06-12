import React from 'react';

interface BinaryGridProps {
  value: number;
  highlight?: boolean;
  showDecimal?: boolean;
}

export const BinaryGrid: React.FC<BinaryGridProps> = ({ 
  value, 
  highlight = false,
  showDecimal = true 
}) => {
  const binary = value.toString(2).padStart(8, '0');
  
  return (
    <div className="flex gap-[1px]">
      {binary.split('').map((bit, i) => (
        <div
          key={i}
          className={`w-4 h-4 flex items-center justify-center text-xs font-mono
            ${highlight ? 'bg-blue-900 text-blue-200' : 'bg-gray-700 text-gray-300'}`}
        >
          {bit}
        </div>
      ))}
      {showDecimal && (
        <span className="ml-2 text-xs text-gray-300 font-mono">
          {value}
        </span>
      )}
    </div>
  );
};
