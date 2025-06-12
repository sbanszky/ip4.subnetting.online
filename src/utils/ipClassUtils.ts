export interface IPClassInfo {
  class: string;
  bits: number[];
  range: string;
  msb: string;
}

export const IP_CLASSES: IPClassInfo[] = [
  { class: 'A', bits: [0], range: '1-126', msb: '0' },
  { class: 'B', bits: [0, 1], range: '128-191', msb: '10' },
  { class: 'C', bits: [0, 1, 2], range: '192-223', msb: '110' },
  { class: 'D', bits: [0, 1, 2, 3], range: '224-239', msb: '1110' },
  { class: 'E', bits: [0, 1, 2, 3], range: '240-255', msb: '1111' }
];

export const getIPClass = (octet: number): IPClassInfo => {
  if (octet < 128) return IP_CLASSES[0];
  if (octet < 192) return IP_CLASSES[1];
  if (octet < 224) return IP_CLASSES[2];
  if (octet < 240) return IP_CLASSES[3];
  return IP_CLASSES[4];
};
