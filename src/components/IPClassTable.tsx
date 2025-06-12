import React from 'react';
import { IP_CLASSES } from '../utils/ipClassUtils';

export const IPClassTable: React.FC = () => {
  return (
    <div className="mb-6 bg-gray-700 rounded-lg p-4 border border-gray-600">
      <h3 className="text-lg font-semibold text-emerald-400 mb-3">IP Address Classes</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-300 border-b border-gray-600">
              <th className="text-left py-2 px-4">Class</th>
              <th className="text-left py-2 px-4">MSB Pattern</th>
              <th className="text-left py-2 px-4">First Octet Range</th>
              <th className="text-left py-2 px-4">Default Mask</th>
              <th className="text-left py-2 px-4">First Private Subnet</th>
              <th className="text-left py-2 px-4">Subnet Mask</th>
            </tr>
          </thead>
          <tbody>
            {IP_CLASSES.map((ipClass) => (
              <tr key={ipClass.class} className="text-gray-300 border-b border-gray-600">
                <td className="py-2 px-4">Class {ipClass.class}</td>
                <td className="py-2 px-4 font-mono">{ipClass.msb}</td>
                <td className="py-2 px-4">{ipClass.range}</td>
                <td className="py-2 px-4 font-mono">
                  {ipClass.class === 'A' && '/8 (255.0.0.0)'}
                  {ipClass.class === 'B' && '/16 (255.255.0.0)'}
                  {ipClass.class === 'C' && '/24 (255.255.255.0)'}
                  {ipClass.class === 'D' && 'N/A (Multicast)'}
                  {ipClass.class === 'E' && 'N/A (Reserved)'}
                </td>
                <td className="py-2 px-4 font-mono">
                  {ipClass.class === 'A' && '10.0.0.0/8'}
                  {ipClass.class === 'B' && '172.16.0.0/20'}
                  {ipClass.class === 'C' && '192.168.0.0/16'}
                  {ipClass.class === 'D' && 'N/A'}
                  {ipClass.class === 'E' && 'N/A'}
                </td>
                <td className="py-2 px-4 font-mono">
                  {ipClass.class === 'A' && '255.0.0.0'}
                  {ipClass.class === 'B' && '255.255.240.0'}
                  {ipClass.class === 'C' && '255.255.0.0'}
                  {ipClass.class === 'D' && 'N/A'}
                  {ipClass.class === 'E' && 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
