import React from 'react';

interface ReservedIPRange {
  range: string;
  cidr: string;
  purpose: string;
  addresses: string;
}

const RESERVED_IPS: ReservedIPRange[] = [
  {
    range: '0.0.0.0 – 0.255.255.255',
    cidr: '0.0.0.0/8',
    purpose: 'This Network (Default Route)',
    addresses: '16,777,216'
  },
  {
    range: '10.0.0.0 – 10.255.255.255',
    cidr: '10.0.0.0/8',
    purpose: 'Private Use Networks',
    addresses: '16,777,216'
  },
  {
    range: '172.16.0.0 – 172.31.255.255',
    cidr: '172.16.0.0/12',
    purpose: 'Private Use Networks',
    addresses: '1,048,576'
  },
  {
    range: '192.168.0.0 – 192.168.255.255',
    cidr: '192.168.0.0/16',
    purpose: 'Private Use Networks',
    addresses: '65,536'
  },
  {
    range: '127.0.0.0 – 127.255.255.255',
    cidr: '127.0.0.0/8',
    purpose: 'Loopback',
    addresses: '16,777,216'
  },
  {
    range: '169.254.0.0 – 169.254.255.255',
    cidr: '169.254.0.0/16',
    purpose: 'Link-Local Addresses',
    addresses: '65,536'
  },
  {
    range: '100.64.0.0 – 100.127.255.255',
    cidr: '100.64.0.0/10',
    purpose: 'Shared Address Space (CGN)',
    addresses: '4,194,304'
  },
  {
    range: '224.0.0.0 – 239.255.255.255',
    cidr: '224.0.0.0/4',
    purpose: 'Multicast',
    addresses: '268,435,456'
  },
  {
    range: '240.0.0.0 – 255.255.255.254',
    cidr: '240.0.0.0/4',
    purpose: 'Class E/Experimental',
    addresses: '268,435,455'
  }
];

export const ReservedIPTable: React.FC = () => {
  return (
    <div className="mb-6 bg-gray-700 rounded-lg p-4 border border-gray-600">
      <h3 className="text-lg font-semibold text-emerald-400 mb-3">Reserved IP Address Ranges</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-300 border-b border-gray-600">
              <th className="text-left py-2 px-4">Range</th>
              <th className="text-left py-2 px-4">CIDR</th>
              <th className="text-left py-2 px-4">Purpose</th>
              <th className="text-left py-2 px-4">Addresses</th>
            </tr>
          </thead>
          <tbody>
            {RESERVED_IPS.map((ip, index) => (
              <tr key={index} className="text-gray-300 border-b border-gray-600">
                <td className="py-2 px-4 font-mono">{ip.range}</td>
                <td className="py-2 px-4 font-mono">{ip.cidr}</td>
                <td className="py-2 px-4">{ip.purpose}</td>
                <td className="py-2 px-4">{ip.addresses}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
