import React from 'react';
import { BinaryBit } from './BinaryBit';

interface BinaryOctetProps {
  value: number;
  highlight?: boolean[];
}

export const BinaryOctet: React.FC<BinaryOctetProps> = ({
  value,
  highlight = Array(8).fill(false)
}) => {
  const binary = value.toString(2).padStart(8, '0');
  
  return (
    <div className="flex gap-[1px]">
      {binary.split('').map((bit, i) => (
        <BinaryBit
          key={i}
          value={bit}
          highlight={highlight[i]}
        />
      ))}
    </div>
  );
};
