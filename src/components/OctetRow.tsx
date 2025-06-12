import React from 'react';
import { BinaryDisplay } from './BinaryDisplay';

interface OctetRowProps {
  octets: number[];
  highlightBits?: boolean[];
  label?: string;
}

export const OctetRow: React.FC<OctetRowProps> = ({ octets, highlightBits = [], label }) => {
  return (
    <div className="flex items-center">
      <div className="flex">
        {octets.map((octet, i) => (
          <React.Fragment key={i}>
            <BinaryDisplay 
              value={octet}
              highlight={highlightBits[i]}
            />
            {i < 3 && <div className="w-4" />}
          </React.Fragment>
        ))}
      </div>
      <span className="ml-4 text-xs text-gray-300 font-mono">
        {octets.join('.')}
      </span>
    </div>
  );
};
