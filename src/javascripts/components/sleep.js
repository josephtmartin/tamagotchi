let energy = 50;

const napButton = () => {
  if (energy < 100) {
    energy += 50;
  } else if (energy > 100) {
    energy = 100;
  }
  return energy;
};

const deepSleepButton = () => {
  if (energy < 100) {
    energy += 60;
  } else if (energy > 100) {
    energy = 100;
  }
  return energy;
};

const sleepButtonEvents = () => {
  $('#nap').click(() => {
    $('#energy').html('');
    $('#energy').html(`<div>${napButton()}</div>`);
  });
  $('#deepSleep').click(() => {
    $('#energy').html('');
    $('#energy').html(`<div>${deepSleepButton()}</div>`);
  });
};

const sleepQuadrant = () => {
  const domString = `
    <div class="card-container sleep-card-container">
        <h2 class="card-header"><i class="fas fa-bed"></i></h2>
        <div class="buttons">
            <button id="nap">Nap</button>
            <button id="deepSleep">Deep Sleep</button>
        </div>
        <div class="score" id="energy">${energy}</div>
    </div>
    `;
  $('#sleep').html(domString);
  sleepButtonEvents();
};

export default { sleepQuadrant };
