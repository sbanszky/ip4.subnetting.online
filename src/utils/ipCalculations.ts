export const calculateNetworkAddress = (ip: number[], subnetMask: number[]): number[] => {
  return ip.map((octet, i) => octet & subnetMask[i]);
};

export const calculateBroadcastAddress = (networkAddress: number[], subnetMask: number[]): number[] => {
  return networkAddress.map((octet, i) => {
    const hostBits = ~subnetMask[i] & 255;
    return octet | hostBits;
  });
};

export const getHighlightedBits = (subnetMask: number[], octetIndex: number): number[] => {
  const binaryMask = subnetMask[octetIndex].toString(2).padStart(8, '0');
  return binaryMask.split('').map((bit, index) => bit === '1' ? index : -1).filter(i => i !== -1);
};
