import React from 'react';
import { BinaryPositionScale } from './BinaryPositionScale';
import { OctetRow } from './OctetRow';
import { 
  calculateNetworkAddress, 
  calculateBroadcastAddress
} from '../utils/ipCalculations';

interface NetworkCalculatorProps {
  ip: number[];
  subnetMask: number[];
}

export const NetworkCalculator: React.FC<NetworkCalculatorProps> = ({ ip, subnetMask }) => {
  const networkAddress = calculateNetworkAddress(ip, subnetMask);
  const broadcastAddress = calculateBroadcastAddress(networkAddress, subnetMask);

  const networkBits = Array(4).fill(false).map((_, i) => 
    subnetMask[i] > 0
  );

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold text-blue-400">Network & Broadcast</h3>
      <BinaryPositionScale />
      <div className="space-y-1">
        <OctetRow octets={ip} highlightBits={networkBits} />
        <OctetRow octets={subnetMask} highlightBits={networkBits} />
        <OctetRow octets={networkAddress} highlightBits={networkBits} />
        <OctetRow octets={broadcastAddress} highlightBits={networkBits} />
      </div>
      <div className="flex gap-4 text-xs text-gray-400">
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
