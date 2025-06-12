import React from 'react';
import { BinaryGrid } from './BinaryGrid';

interface BinaryGridRowProps {
  octets: number[];
  highlightBits?: (octetIndex: number) => boolean;
  showDecimal?: boolean;
  label?: string;
}

export const BinaryGridRow: React.FC<BinaryGridRowProps> = ({
  octets,
  highlightBits,
  showDecimal = true,
  label
}) => {
  return (
    <div className="flex items-center">
      {label && (
        <span className="text-xs text-gray-400 w-16">{label}</span>
      )}
      <div className="flex">
        {octets.map((octet, i) => (
          <React.Fragment key={i}>
            <BinaryGrid
              value={octet}
              highlight={highlightBits ? highlightBits(i) : false}
              showDecimal={false}
            />
            {i < 3 && <div className="w-4" />}
          </React.Fragment>
        ))}
      </div>
      {showDecimal && (
        <span className="ml-4 text-xs text-gray-300 font-mono">
          {octets.join('.')}
        </span>
      )}
    </div>
  );
};
