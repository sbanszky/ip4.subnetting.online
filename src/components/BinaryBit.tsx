import React from 'react';

interface BinaryBitProps {
  value: string;
  highlight?: boolean;
  onScale?: boolean;
}

export const BinaryBit: React.FC<BinaryBitProps> = ({
  value,
  highlight = false,
  onScale = false
}) => (
  <div
    className={`w-4 h-4 flex items-center justify-center text-[10px] font-mono
      ${highlight 
        ? 'bg-blue-900 text-blue-200' 
        : value === '1' && onScale
          ? 'bg-gray-700 text-emerald-400'
          : 'bg-gray-700 text-gray-300'
      }`}
  >
    {value}
  </div>
);
