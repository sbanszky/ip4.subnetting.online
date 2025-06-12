import React from 'react';

interface IPInputProps {
  ip: number[];
  onIPChange: (newIP: number[]) => void;
}

export const IPInput: React.FC<IPInputProps> = ({ ip, onIPChange }) => {
  const handleOctetChange = (index: number, value: string) => {
    const numValue = parseInt(value, 10);
    if (isNaN(numValue) || numValue < 0 || numValue > 255) return;
    
    const newIP = [...ip];
    newIP[index] = numValue;
    onIPChange(newIP);
  };

  return (
    <div className="flex items-center gap-2">
      <label className="text-gray-300">IP Address:</label>
      <div className="flex items-center">
        {ip.map((octet, i) => (
          <React.Fragment key={i}>
            <input
              type="text"
              value={octet}
              onChange={(e) => handleOctetChange(i, e.target.value)}
              className="w-16 px-2 py-1 bg-gray-800 border border-gray-700 rounded text-gray-100 font-mono focus:outline-none focus:border-blue-500"
              maxLength={3}
            />
            {i < 3 && <span className="text-gray-300 mx-1">.</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
