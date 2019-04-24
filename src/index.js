// import our function
import coinTossFunction from './coinTossFunction.js';
//reference our DOM elements
const flipButton = document.getElementById('flip-button');
const coinImage = document.getElementById('coin-img');
const winsDisplay = document.getElementById('win');
const lossesDisplay = document.getElementById('losses');
const headsChoice = document.getElementById('heads-choice');
let resultMessage = document.getElementById('result-message');

// initialize some stuff
let winsCount = 0;
let lossesCount = 0;

// add event listener
flipButton.addEventListener('click', () => {
    const randomNumber = Math.random();
    const flip = coinTossFunction(randomNumber);

    coinImage.src = './assets/' + flip + '.png';

    let guess = '';
    if(headsChoice.checked) {
        guess = 'heads';
    } else {
        guess = 'tails';
    }

    const guessedCorrect = flip === guess;

    if(guessedCorrect){
        resultMessage.textContent = 'npmYou won!';
        resultMessage.classList.remove('lose');
        resultMessage.classList.add('win');
    } else {
        resultMessage.textContent = 'You lose!';
        resultMessage.classList.remove('win');
        resultMessage.classList.add('lose');
    }

    if(guessedCorrect) {
        winsCount++;
        winsDisplay.textContent = 'Wins: ' + winsCount;
    } else {
        lossesCount++;
        lossesDisplay.textContent = 'Losses: ' + lossesCount;
    }
    
});

//changee image display

//show message

//increment wins/losses