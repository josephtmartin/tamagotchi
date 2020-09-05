let score = 50;

const superFunButton = () => {
  if (score < 100) {
    score += 50;
  } else if (score >= 100) {
    score = 100;
  }
  return score;
};

const slightlyFunButton = () => {
  if (score < 100) {
    score += 2;
  } else if (score >= 0) {
    score = 100;
  }
  return score;
};

const playButtonEvents = () => {
  $('#superFun').click(() => {
    $('#fun').html('');
    $('#fun').html(`<div>${superFunButton()}</div>`);
  });
  $('#slightlyFun').click(() => {
    $('#fun').html('');
    $('#fun').html(`<div>${slightlyFunButton()}</div>`);
  });
};

const playQuadrant = () => {
  const domString = `
    <div class="card-container card-container">
        <h1 class="card-header">Play</h1>
        <div class="buttons">
            <button id="superFun">Super Fun</button>
            <button id="slightlyFun">Slightly Fun</button>
        </div>
        <div class="score" id="fun">${score}</div>
    </div>
    `;
  $('#play').html(domString);
  playButtonEvents();
};

export default { playQuadrant };
