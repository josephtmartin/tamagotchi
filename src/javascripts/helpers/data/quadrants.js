const quadrants = [
  {
    name: 'eat',
    score: 100,
    button1: 'Healthy',
    button2: 'Unhealthy',
  },
  {
    name: 'play',
    score: 50,
    button1: 'Super Fun',
    button2: 'Slightly Fun',
  },
  {
    name: 'fight',
    score: 100,
    button1: 'Running Away (Bravely)',
    button2: 'Commiting Violence',
  },
  {
    name: 'sleep',
    score: 50,
    button1: 'Nap',
    button2: 'Deep Slumber',
  },
];

const getQuadrants = () => quadrants;

export default { getQuadrants };
