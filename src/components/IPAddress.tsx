import React from 'react';
import { BinaryOctet } from './BinaryOctet';

interface IPAddressProps {
  octets: number[];
  highlightBits?: boolean[][];
  label?: string;
}

export const IPAddress: React.FC<IPAddressProps> = ({
  octets,
  highlightBits = Array(4).fill(Array(8).fill(false)),
  label
}) => (
  <div className="flex items-center gap-2">
    {label && (
      <span className="text-[10px] font-mono text-gray-400 w-16">{label}</span>
    )}
    <div className="flex">
      {octets.map((octet, i) => (
        <React.Fragment key={i}>
          <BinaryOctet
            value={octet}
            highlight={highlightBits[i]}
          />
          {i < 3 && <div className="w-4" />}
        </React.Fragment>
      ))}
    </div>
    <span className="text-[10px] font-mono text-gray-300 ml-4">
      {octets.join('.')}
    </span>
  </div>
);
