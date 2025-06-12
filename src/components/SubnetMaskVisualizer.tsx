import React from 'react';
import { BinaryPositionScale } from './BinaryPositionScale';
import { SubnetSlider } from './SubnetSlider';
import { OctetRow } from './OctetRow';

interface SubnetMaskVisualizerProps {
  cidr: number;
  onCidrChange: (newCidr: number) => void;
}

export const SubnetMaskVisualizer: React.FC<SubnetMaskVisualizerProps> = ({ cidr, onCidrChange }) => {
  const maskOctets = Array(4).fill(0).map((_, i) => {
    const bitsInOctet = Math.min(8, Math.max(0, cidr - i * 8));
    return parseInt('1'.repeat(bitsInOctet).padEnd(8, '0'), 2);
  });

  const highlightBits = Array(4).fill(false).map((_, i) => 
    maskOctets[i] > 0
  );

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-semibold text-blue-400">Subnet Mask</h3>
        <span className="text-gray-300">/{cidr}</span>
      </div>
      
      <BinaryPositionScale />
      <SubnetSlider cidr={cidr} onCidrChange={onCidrChange} />
      <OctetRow octets={maskOctets} highlightBits={highlightBits} />
    </div>
  );
};
