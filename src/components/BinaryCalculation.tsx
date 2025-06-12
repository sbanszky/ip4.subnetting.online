import React from 'react';
import { AndRepresentation } from './AndRepresentation';

interface BinaryCalculationProps {
  ipOctet: number;
  maskOctet: number;
  networkOctet: number;
}

export const BinaryCalculation: React.FC<BinaryCalculationProps> = ({
  ipOctet,
  maskOctet,
  networkOctet
}) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <AndRepresentation
        x={ipOctet}
        y={maskOctet}
        result={networkOctet}
      />
    </div>
  );
};
