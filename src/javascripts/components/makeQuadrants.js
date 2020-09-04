const makeQuadrants = (name, score, button1, button2) => {
  $(`#${name}`).html(`
        <div class="card-container card-container${name}">
            <h1 class="card-header">${name}</h1>
            <div class="buttons">
                <button id="${button1}">${button1}</button>
                <button id="${button2}">${button2}</button>
            </div>
            <div class="score">${score}</div>
        </div>
    `);
};

export default { makeQuadrants };
