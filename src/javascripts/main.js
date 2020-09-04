import '../styles/main.scss';
import printQuadrants from './components/printQuadrants';
import quadrants from './helpers/data/quadrants';

const init = () => {
  printQuadrants.displayQuadrants(quadrants.getQuadrants());
};

init();
