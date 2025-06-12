import React from 'react';
import { BinaryDisplay } from './BinaryDisplay';
import { getIPClass } from '../utils/ipClassUtils';

interface IPClassIdentifierProps {
  firstOctet: number;
}

export const IPClassIdentifier: React.FC<IPClassIdentifierProps> = ({ firstOctet }) => {
  const ipClass = getIPClass(firstOctet);

  return (
    <div className="flex items-center gap-4">
      <h3 className="text-lg font-semibold text-blue-400">Class Identification</h3>
      <div className="bg-gray-700 px-4 py-1 rounded-lg border border-gray-600">
        <span className="font-semibold text-blue-300">Class {ipClass.class}</span>
        <span className="text-sm text-gray-400 ml-2">Range: {ipClass.range}</span>
        <span className="text-sm text-gray-400 ml-2">MSB: {ipClass.msb}</span>
      </div>
    </div>
  );
};
