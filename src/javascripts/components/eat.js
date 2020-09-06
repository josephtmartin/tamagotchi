let full = 100;

const healthy = () => {
  if (full < 100) {
    full += 10;
  } else if (full >= 100) {
    full = 100;
  }
  return full;
};

const unhealthy = () => {
  if (full > 0) {
    full -= 3;
  } else if (full <= 0) {
    full = 0;
  }
  return full;
};

const eatButtonEvents = () => {
  $('#healthy').click(() => {
    $('#full').html('');
    $('#full').html(`<div>${healthy()}</div>`);
  });
  $('#unhealthy').click(() => {
    $('#full').html('');
    $('#full').html(`<div>${unhealthy()}</div>`);
  });
};

const eatQuadrant = () => {
  const domString = `
    <div class="card-container eat-card-container">
        <h2 class="card-header"><i class="fas fa-utensils"></i></h2>
        <div class="buttons">
            <button id="healthy">Healthy</button>
            <button id="unhealthy">Unhealthy</button>
        </div>
        <div class="score" id="full">${full}</div>
    </div>
    `;
  $('#eat').html(domString);
  eatButtonEvents();
};

export default { eatQuadrant };
