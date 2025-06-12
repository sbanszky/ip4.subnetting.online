import React from 'react';
import { BinaryDisplay } from './BinaryDisplay';
import { getHighlightedBits } from '../utils/ipCalculations';

interface VerticalNetworkDisplayProps {
  ip: number[];
  subnetMask: number[];
  networkAddress: number[];
  broadcastAddress: number[];
}

export const VerticalNetworkDisplay: React.FC<VerticalNetworkDisplayProps> = ({
  ip,
  subnetMask,
  networkAddress,
  broadcastAddress
}) => {
  const renderOctetRow = (octets: number[], highlightNetwork = false) => (
    <div className="flex gap-1">
      {octets.map((octet, i) => (
        <BinaryDisplay 
          key={i} 
          value={octet}
          highlight={highlightNetwork ? getHighlightedBits(subnetMask, i) : []}
          className="text-blue-400"
        />
      ))}
      <span className="text-xs ml-2 text-gray-300 font-mono">
        {octets.join('.')}
      </span>
    </div>
  );

  return (
    <div className="space-y-2 font-mono">
      {renderOctetRow(ip, true)}
      <div className="border-y border-gray-700 py-2">
        {renderOctetRow(subnetMask, true)}
      </div>
      {renderOctetRow(networkAddress, true)}
      <div className="pt-2 border-t border-gray-700">
        {renderOctetRow(broadcastAddress, true)}
      </div>
    </div>
  );
};
