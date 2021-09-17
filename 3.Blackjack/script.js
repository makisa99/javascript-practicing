let firstCard = Math.floor(Math.random() * 10 + 2);
let secondCard = Math.floor(Math.random() * 10 + 2);
let cards = [firstCard, secondCard];
let hasBlackJack = false;
let isAlive = true;
let sum = firstCard + secondCard;
let newCard;
let message;

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

function checkSum() {
  if (sum < 21) {
    message = "Do you want to draw a new card?";
    isAlive = true;
  } else if (sum === 21) {
    message = "YOU WON";
    hasBlackJack = true;
    isAlive = false;
  } else {
    message = "you lost";
    isAlive = false;
    return;
  }
  messageEl.textContent = message;
}

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
  sumEl.textContent = "Sum: " + sum;
  checkSum();
}

function newCardF() {
  newCard = Math.floor(Math.random() * 10 + 2);
  sum += newCard;

  // cardsEl.textContent += " " + newCard;
  // sumEl.textContent = "Sum: " + sum;
  renderGame();
}
