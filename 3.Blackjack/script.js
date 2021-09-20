let firstCard;
let secondCard;
let cards = [];
let hasBlackJack;
let isAlive;
let sum = 0;
let newCard;
let message;

let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

let player = {
  name: "Mario",
  chips: 145,
};

let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
  isAlive = true;
  hasBlackJack = false;
  firstCard = getRandomCard();
  secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = cards[0] + cards[1];
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += " " + cards[i];
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "Do you want to draw a new card?";
    console.log(sum);
  } else if (sum === 21) {
    message = "YOU WON";
    hasBlackJack = true;
    console.log(sum);
  } else {
    message = "you lost";
    console.log(sum);
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCardF() {
  if (!hasBlackJack && isAlive) {
    newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);

    renderGame();
  }
}

function getRandomCard() {
  let randomnum = Math.floor(Math.random() * 13 + 1);
  if (randomnum === 1) {
    return 11;
  } else if (randomnum > 10) {
    return 10;
  } else {
    return randomnum;
  }
  return; //13=max+1-min, 1 = min
}
