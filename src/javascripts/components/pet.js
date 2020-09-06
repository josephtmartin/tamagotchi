const pet = () => {
  const domString = `
    <div class="pet-container">
      <h1>Coughy Boi</h1>
      <img class="pet-image" src="https://data.whicdn.com/images/337309690/original.png?t=1573586811" alt="Coughing Cat Image">
    </div>
  `;
  $('#pet').html(domString);
};

export default { pet };
