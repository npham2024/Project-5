// -1 means no guess has been made
let guessFirst = -1;
let guessSecond = -1;

// Cards to be matched
let cards = [
   {
      entity: "&spades;",
      color: "green"
   },
   {
      entity: "&clubs;",
      color: "blue"
   },
   {
      entity: "&hearts;",
      color: "red"
   },
   {
      entity: "&diams;",
      color: "purple"
   },
   {
      entity: "&starf;",
      color: "orange"
   },
   {
      entity: "&malt;",
      color: "gold"
   },
];

// Create the match for each card
cards = cards.concat(cards);

let $cardDivs = [];
$(function () {
   let $game = $("#cardGrid");

   // Hide the game grid before initializing
   $game.hide();

   // Add divs for each card
   for (let i = 0; i < cards.length; i++) {
      let $card = $("<div></div>");
      $card.on("click", function () { clickCard(i); });
      $game.append($card);
      $cardDivs.push($card);
   }

   newGame();

   $("#newGameBtn").click(newGame);
});

function clickCard(index) {
   if (!$cardDivs[index].hasClass("card-visible")) {
      if (guessFirst == -1) {
         showCard(index);
         guessFirst = index;
      } else if (guessSecond == -1) {
         showCard(index);
         guessSecond = index;

         if (cards[guessFirst].entity == cards[guessSecond].entity) {
            showMatch(guessFirst, guessSecond);
            guessFirst = -1;
            guessSecond = -1;
         } else {
            setTimeout(function () {
               hideCard(guessFirst);
               hideCard(guessSecond);
               guessFirst = -1;
               guessSecond = -1;
            }, 1000);
         }
      }
   }
}

function showCard(index) {
   $cardDivs[index].slideUp(200, function () {
      $(this).html(cards[index].entity)
         .css("color", cards[index].color)
         .addClass("card-visible")
         .slideDown(200);
   });
}

function hideCard(index) {
   $cardDivs[index].slideUp(200, function () {
      $(this).html("")
         .removeClass("card-visible")
         .slideDown(200);
   });
}

function showMatch(cardIndex1, cardIndex2) {
   setTimeout(function () {
      $cardDivs[cardIndex1].add($cardDivs[cardIndex2]).animate({ fontSize: "100px" }, 200)
         .animate({ fontSize: "75px" }, 200);
   }, 500);
}

function newGame() {
   $("#cardGrid").fadeOut("normal", function () {
      // Randomize the cards array
      for (let i = 0; i < 20; i++) {
         let cardIndex1 = getRandomNumber(0, cards.length - 1);
         let cardIndex2 = getRandomNumber(0, cards.length - 1);
         let temp = cards[cardIndex1];
         cards[cardIndex1] = cards[cardIndex2];
         cards[cardIndex2] = temp;
      }

      // Hide all cards
      for (let i = 0; i < $cardDivs.length; i++) {
         $cardDivs[i].html("").removeClass("card-visible");
      }

      // Reset guesses
      guessFirst = -1;
      guessSecond = -1;

      // Fade in the game grid
      $("#cardGrid").fadeIn("normal");
   });
}

// Return a random number between min and max (inclusive).
function getRandomNumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}
