import makeQuadrants from './makeQuadrants';

const displayQuadrants = (array) => {
  $('#eat').html('');
  $('#play').html('');
  $('#fight').html('');
  $('#sleep').html('');
  array.forEach((item) => {
    if (item.name === 'eat') {
      $('#eat').append(makeQuadrants.makeQuadrants(item.name, item.score, item.button1, item.button2));
    } else if (item.name === 'play') {
      $('#play').append(makeQuadrants.makeQuadrants(item.name, item.score, item.button1, item.button2));
    } else if (item.name === 'fight') {
      $('#fight').append(makeQuadrants.makeQuadrants(item.name, item.score, item.button1, item.button2));
    } else {
      $('#sleep').append(makeQuadrants.makeQuadrants(item.name, item.score, item.button1, item.button2));
    }
  });
};

export default { displayQuadrants };
