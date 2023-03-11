const loveTestButton = document.querySelector('.btn button');
const lovePercentageInput = document.querySelector('.love input[type="text"]');

loveTestButton.addEventListener('click', function(event) {
  if (event.target !== loveTestButton) {
    return;
  }

  const yourNameInput = document.querySelector('.user input[type="text"]:first-of-type');
  const loveNameInput = document.querySelector('.user input[type="text"]:last-of-type');

  const yourName = yourNameInput.value.trim();
  const loveName = loveNameInput.value.trim();

  if (!yourName || !loveName) {
    return;
  }

  const lovePercentage = Math.floor(Math.random() * 51) + 50;

  lovePercentageInput.value = `${yourName} and ${loveName} are ${lovePercentage}% in love!`;
});
