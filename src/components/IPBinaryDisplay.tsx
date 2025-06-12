import React from 'react';

interface IPBinaryDisplayProps {
  octets: number[];
  highlightBits?: boolean[][];
}

export const IPBinaryDisplay: React.FC<IPBinaryDisplayProps> = ({
  octets,
  highlightBits = Array(4).fill(Array(8).fill(false))
}) => {
  return (
    <div className="flex items-center mb-3">
      <div className="flex">
        {octets.map((octet, i) => (
          <React.Fragment key={i}>
            <div className="flex">
              {octet.toString(2).padStart(8, '0').split('').map((bit, j) => (
                <div
                  key={j}
                  className={`
                    w-4 h-6 flex items-center justify-center
                    ${highlightBits[i][j] ? 'bg-blue-900 text-blue-200' : 'bg-gray-700 text-gray-300'}
                  `}
                >
                  <span className="text-[10px] font-mono">{bit}</span>
                </div>
              ))}
            </div>
            {i < 3 && <div className="w-4" />}
          </React.Fragment>
        ))}
      </div>
      <span className="ml-4 text-[10px] font-mono text-gray-300">
        {octets.join('.')}
      </span>
    </div>
  );
};
