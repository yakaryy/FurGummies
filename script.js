// Initial coins and pick status
let coins = 0;
let bodyPicked = false;
let eyesPicked = false;

// Update the coin display
document.getElementById('coins').innerText = coins;

// Simulate earning coins for testing (1 coin per second)
setInterval(() => {
  coins += 1;
  document.getElementById('coins').innerText = coins;
}, 1000);

// Function to pick a body
function chooseBody(filename, cost) {
  if (!bodyPicked && cost === 0) {
    // First free pick
    document.querySelector('.body').src = 'assets/' + filename;
    bodyPicked = true;
    alert('You picked your free body!');
  } else if (coins >= cost) {
    // Unlock with coins
    coins -= cost;
    document.getElementById('coins').innerText = coins;
    document.querySelector('.body').src = 'assets/' + filename;
    alert('Body unlocked!');
  } else {
    alert('Not enough coins!');
  }
}

// Function to pick eyes
function chooseEyes(filename, cost) {
  if (!eyesPicked && cost === 0) {
    // First free pick
    document.querySelector('.eyes').src = 'assets/' + filename;
    eyesPicked = true;
    alert('You picked your free eyes!');
  } else if (coins >= cost) {
    // Unlock with coins
    coins -= cost;
    document.getElementById('coins').innerText = coins;
    document.querySelector('.eyes').src = 'assets/' + filename;
    alert('Eyes unlocked!');
  } else {
    alert('Not enough coins!');
  }
}
