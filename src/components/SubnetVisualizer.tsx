import React from 'react';
import { BinaryScale } from './BinaryScale';
import { SubnetSlider } from './SubnetSlider';
import { IPBinaryDisplay } from './IPBinaryDisplay';
import { IPClassDisplay } from './IPClassDisplay';
import { calculateNetworkAddress, calculateBroadcastAddress } from '../utils/ipCalculations';

interface SubnetVisualizerProps {
  ip: number[];
  cidr: number;
  onCidrChange: (value: number) => void;
}

export const SubnetVisualizer: React.FC<SubnetVisualizerProps> = ({
  ip,
  cidr,
  onCidrChange
}) => {
  const subnetMask = Array(4).fill(0).map((_, i) => {
    const bitsInOctet = Math.min(8, Math.max(0, cidr - i * 8));
    return parseInt('1'.repeat(bitsInOctet).padEnd(8, '0'), 2);
  });

  const networkAddress = calculateNetworkAddress(ip, subnetMask);
  const broadcastAddress = calculateBroadcastAddress(networkAddress, subnetMask);

  const getHighlightBits = () => 
    Array(4).fill(0).map((_, i) => 
      Array(8).fill(false).map((_, j) => (i * 8 + j) < cidr)
    );

  const networkBits = getHighlightBits();

  return (
    <div className="space-y-10">
      <div>
        <h3 className="text-lg font-semibold text-blue-400 mb-6">IP Binary Representation</h3>
        <IPClassDisplay firstOctet={ip[0]} />
        <BinaryScale />
        <IPBinaryDisplay octets={ip} highlightBits={networkBits} />
      </div>

      <div>
        <div className="flex items-center gap-2 mb-6">
          <h3 className="text-lg font-semibold text-blue-400">Subnet Mask</h3>
          <span className="text-gray-300 font-mono">/{cidr}</span>
        </div>
        <BinaryScale />
        <SubnetSlider value={cidr} onChange={onCidrChange} />
        <IPBinaryDisplay octets={subnetMask} highlightBits={networkBits} />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-blue-400 mb-6">Network & Broadcast</h3>
        <BinaryScale />
        <div className="space-y-3">
          <IPBinaryDisplay octets={networkAddress} highlightBits={networkBits} />
          <IPBinaryDisplay octets={broadcastAddress} highlightBits={networkBits} />
        </div>
      </div>

      <div className="flex gap-4 text-[10px] font-mono text-gray-400">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 bg-blue-900 rounded"></div>
          <span>Network bits</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 bg-gray-700 rounded"></div>
          <span>Host bits</span>
        </div>
      </div>
    </div>
  );
};
