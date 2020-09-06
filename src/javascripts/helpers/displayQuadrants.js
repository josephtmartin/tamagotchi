import eat from '../components/eat';
import play from '../components/play';
import fight from '../components/fight';
import sleep from '../components/sleep';
import pet from '../components/pet';

const displayQuadrants = () => {
  eat.eatQuadrant();
  play.playQuadrant();
  fight.fightQuadrant();
  sleep.sleepQuadrant();
  pet.pet();
};

export default { displayQuadrants };
