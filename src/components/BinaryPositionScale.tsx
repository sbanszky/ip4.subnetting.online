import React from 'react';

export const BinaryPositionScale: React.FC = () => {
  return (
    <div className="flex flex-col gap-0.5 mb-1">
      <div className="flex">
        {Array(4).fill(0).map((_, octet) => (
          <div key={octet} className="flex">
            {Array(8).fill(0).map((_, i) => (
              <div key={i} className="w-4 flex items-center justify-center">
                <span className="text-[10px] text-gray-400">2<sup>{7 - i}</sup></span>
              </div>
            ))}
            {octet < 3 && <div className="w-4" />}
          </div>
        ))}
      </div>
      <div className="flex">
        {Array(4).fill(0).map((_, octet) => (
          <div key={octet} className="flex">
            {Array(8).fill(0).map((_, i) => (
              <div key={i} className="w-4 flex items-center justify-center">
                <span className="text-[10px] text-gray-400">{Math.pow(2, 7 - i)}</span>
              </div>
            ))}
            {octet < 3 && <div className="w-4" />}
          </div>
        ))}
      </div>
    </div>
  );
};
