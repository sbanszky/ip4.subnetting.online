import React from 'react';
import { BinaryOctet } from './BinaryOctet';

interface AndRepresentationProps {
  x: number;
  y: number;
  result: number;
}

export const AndRepresentation: React.FC<AndRepresentationProps> = ({ x, y, result }) => {
  return (
    <div className="flex flex-col items-start gap-1 font-mono">
      <div className="flex items-center gap-2">
        <span className="text-gray-400 w-2">x</span>
        <BinaryOctet value={x} />
        <span className="text-gray-400 ml-2">{x}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-gray-400 w-2">y</span>
        <BinaryOctet value={y} />
        <span className="text-gray-400 ml-2">{y}</span>
      </div>
      <div className="h-px w-full bg-gray-700 my-1" />
      <div className="flex items-center gap-2">
        <span className="text-gray-400 w-2">z</span>
        <BinaryOctet value={result} />
        <span className="text-gray-400 ml-2">{result}</span>
      </div>
    </div>
  );
};
