const CAREER_START = Date.UTC(2017, 6, 1);
const YEARS = Math.floor((Date.now() - CAREER_START) / (365.25 * 24 * 60 * 60 * 1000));

export const STATS = [
  { value: `${YEARS}+`, label: 'Years of experience' },
  { value: '12+', label: 'Projects shipped' },
  { value: '5+', label: 'Client countries' },
];
