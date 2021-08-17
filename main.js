// let deckId;
// const cardsContainer = document.getElementById("cards");
// const newDeckBtn = document.getElementById("new-deck");
// const drawBtn = document.getElementById("draw-cards");

// function handleClick() {
//   fetch("https://deckofcardsapi.com/api/deck/new/shuffle/")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       deckId = data.deck_id;
//     });
// }

// newDeckBtn.addEventListener("click", handleClick);

// drawBtn.addEventListener("click", () => {
//   fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
//     .then((res) => res.json())
//     .then((data) => {
//       cardsContainer.children[0].innerHTML = `<img src=${data.cards[0].image} class="card"/>`;
//       cardsContainer.children[1].innerHTML = `<img src=${data.cards[1].image} class="card"/>`;
//     });
// });

function determineCardWinner(card1, card2) {
  const valueOptions = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "JACK",
    "QUEEN",
    "KING",
    "ACE",
  ];
  const card1IndexValue = valueOptions.indexOf(card1.value);
  const card2IndexValue = valueOptions.indexOf(card2.value);

  console.log("card1:", card1IndexValue);
  console.log("card2:", card2IndexValue);

  if (card1IndexValue > card2IndexValue) {
    console.log("Card 1 is wins");
  } else if (card1IndexValue < card2IndexValue) {
    console.log("Card 2 is wins");
  } else {
    console.log("It's a tie!");
  }
}

const card1Obj = {
  value: "7",
};

const card2Obj = {
  value: "KING",
};

determineCardWinner(card1Obj, card2Obj);
