let strength = 100;

const runButton = () => {
  if (strength < 100) {
    strength += 1;
  } else if (strength >= 100) {
    strength = 100;
  }
  return strength;
};

const violenceButton = () => {
  if (strength <= 100) {
    strength -= 10;
  } else if (strength <= 0) {
    strength = 0;
  }
  return strength;
};

const fightButtonEvents = () => {
  $('#run').click(() => {
    $('#strength').html('');
    $('#strength').html(`<div>${runButton()}</div>`);
  });
  $('#violence').click(() => {
    $('#strength').html('');
    $('#strength').html(`<div>${violenceButton()}</div>`);
  });
};

const fightQuadrant = () => {
  const domString = `
    <div class="card-container fight-card-container">
        <h2 class="card-header"><i class="fas fa-fist-raised"></i></h2>
        <div class="buttons">
            <button id="run">Running Away</button>
            <button id="violence">Committing Violence</button>
        </div>
        <div class="score" id="strength">${strength}</div>
    </div>
    `;
  $('#fight').html(domString);
  fightButtonEvents();
};

export default { fightQuadrant };
