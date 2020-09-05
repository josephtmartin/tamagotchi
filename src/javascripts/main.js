import '../styles/main.scss';
import eat from './components/eat';
import play from './components/play';
import fight from './components/fight';
import sleep from './components/sleep';

const init = () => {
  eat.eatQuadrant();
  play.playQuadrant();
  fight.fightQuadrant();
  sleep.sleepQuadrant();
};

init();
