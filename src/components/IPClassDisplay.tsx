import React from 'react';
import { getIPClass } from '../utils/ipClassUtils';

interface IPClassDisplayProps {
  firstOctet: number;
}

export const IPClassDisplay: React.FC<IPClassDisplayProps> = ({ firstOctet }) => {
  const ipClass = getIPClass(firstOctet);
  
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="bg-gray-700 px-3 py-1.5 rounded-lg border border-gray-600 flex items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-gray-400">Class</span>
          <span className="text-[10px] font-mono text-blue-300 font-semibold">{ipClass.class}</span>
        </div>
        <div className="h-4 w-px bg-gray-600" />
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-gray-400">Range</span>
          <span className="text-[10px] font-mono text-gray-300">{ipClass.range}</span>
        </div>
        <div className="h-4 w-px bg-gray-600" />
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-gray-400">MSB</span>
          <span className="text-[10px] font-mono text-gray-300">{ipClass.msb}</span>
        </div>
      </div>
    </div>
  );
};
