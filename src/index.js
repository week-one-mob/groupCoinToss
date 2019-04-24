// import our function
import coinTossFunction from "./coinTossFunction.js"
//reference our DOM elements
const flipButton = document.getElementById("flip-button");
const coinImage = document.getElementById("coin-img");
const winsDisplay = document.getElementById("win");
const lossesDisplay = document.getElementById("losses");
const headsChoice = document.getElementById("heads-choice");

// initialize some stuff
let winCount = 0;
let lossesCount = 0;

// add event listener
flipButton.addEventListener('click', () => {
    const randomNumber = Math.random();
    const flip = coinTossFunction(randomNumber);

    coinImage.src = "./assets/" + flip + ".png";

    let guess = '';
    if (headsChoice.checked) {
        guess = "heads";
    } else {
        guess = "tails";
    }

});

//changee image display

//show message

//increment wins/losses