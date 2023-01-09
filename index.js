let player = {
  Name: "Caro",
  Chips: 200,
};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.Name + ": $" + player.Chips;

// To generate a random card
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1; // will return a number between 1-13

  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

// To start the game
function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

// To display the cards
function renderGame() {
  cardsEl.textContent = "Cards: ";
  // for loop to display all the cards available in the cards array
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw another card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  // Cash Out!
  console.log(hasBlackJack);
  // hasBlackJack allows to keep track of the data/state

  messageEl.textContent = message;
}

function newCard() {
  // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
}
