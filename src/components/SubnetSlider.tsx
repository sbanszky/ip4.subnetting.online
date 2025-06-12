import React from 'react';

interface SubnetSliderProps {
  value: number;
  onChange: (value: number) => void;
}

export const SubnetSlider: React.FC<SubnetSliderProps> = ({ value, onChange }) => {
  const cellWidth = 16; // 1rem = 16px for each bit cell
  const gapWidth = 16; // 1rem = 16px gap between octets
  const totalWidth = (cellWidth * 8 + gapWidth) * 4 - gapWidth;
  
  return (
    <div className="relative h-8 mb-2">
      <div className="absolute inset-0 flex items-center">
        <div 
          className="h-0.5 bg-blue-500 relative"
          style={{ width: `${totalWidth}px` }}
        >
          <input
            type="range"
            min="0"
            max="32"
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="absolute inset-0 w-full opacity-0 cursor-pointer"
          />
          <div 
            className="absolute w-3 h-3 bg-white rounded-full shadow-lg"
            style={{ 
              left: `${(value / 32) * 100}%`,
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          />
          <div 
            className="absolute text-[10px] font-mono text-gray-300"
            style={{ 
              left: `${(value / 32) * 100}%`,
              top: '-16px',
              transform: 'translateX(-50%)'
            }}
          >
            /{value}
          </div>
        </div>
      </div>
    </div>
  );
};
