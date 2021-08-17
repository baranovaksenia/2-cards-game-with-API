let deckId;
let computerScore = 0;
let userScore = 0;

const cardsContainer = document.getElementById("cards");
const newDeckBtn = document.getElementById("new-deck");
const drawBtn = document.getElementById("draw-cards");
const header = document.getElementById("header");
const remainingText = document.getElementById("remaining");
let computerScoreEl = document.getElementById("computer-score");
let userScoreEl = document.getElementById("user-score");

function handleClick() {
  fetch("https://deckofcardsapi.com/api/deck/new/shuffle/")
    .then((res) => res.json())
    .then((data) => {
      remainingText.textContent = `Remaining cards: ${data.remaining}`;
      deckId = data.deck_id;
    });
}

newDeckBtn.addEventListener("click", handleClick);

drawBtn.addEventListener("click", () => {
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    .then((res) => res.json())
    .then((data) => {
      cardsContainer.children[0].innerHTML = `<img src=${data.cards[0].image} class="card"/>`;
      cardsContainer.children[1].innerHTML = `<img src=${data.cards[1].image} class="card"/>`;

      remainingText.textContent = `Remaining cards: ${data.remaining}`;

      const winnerText = determineCardWinner(data.cards[0], data.cards[1]);
      header.textContent = winnerText;

      if (data.remaining === 0) {
        drawBtn.disabled = true;
        if (computerScore > userScore) {
          // display "The computer won the game!"
          header.textContent = "The computer won the game!";
        } else if (userScore > computerScore) {
          // display "You won the game!"
          header.textContent = "You won the game!";
        } else {
          // display "It's a tie game!"
          header.textContent = "It's a tie game!";
        }
      }
    });
});

function determineCardWinner(card1, card2) {
  const valueOptions = ["2","3","4","5","6","7","8","9","10","JACK","QUEEN","KING","ACE"];
  const card1IndexValue = valueOptions.indexOf(card1.value);
  const card2IndexValue = valueOptions.indexOf(card2.value);

  if (card1IndexValue > card2IndexValue) {
    computerScore++;
    computerScoreEl.textContent = `Computer score: ${computerScore}`;
    return "Computer is wins";
  } else if (card1IndexValue < card2IndexValue) {
    userScore++;
    userScoreEl.textContent = `My score: ${userScore}`;
    return "You are win";
  } else {
    return "It's a tie!";
  }
}
