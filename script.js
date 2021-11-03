'use strict';

// Our task is to develop 3 buttons, and the score board

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('score--0');
const current1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const scores = [0, 0];

let currentScore = 0;
let activePlayer = 0;

const init = function()
{
    // Here we will initialize all the scores and the variables

    score0El.textContent = 0;
    score1El.textContent = 0;

    diceEl.classList.add('hidden');
}

init();

const switchPlayers = function()
{
    //we need to change the score of last player to 0 before we switch to new player

    document.getElementById(`current--${activePlayer}`).textContent = 0;

    activePlayer = activePlayer === 1 ? 0 : 1;

    //we also need to reset the currentScore 

    currentScore = 0;

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

const viewDiceRolled = function()
{
    //Generate a random number

    const dice = Math.trunc(Math.random()*6) + 1;;

    //now we have the random number, we need to display the corresponding dice image and update the scores of the active player

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    

    //check for a rolled 1, in this case we need to switch the players

    if(dice === 1)
    {
        switchPlayers();
    }
    else
    {
        //add dice to the current score

        currentScore += dice;

        //now all we need to do is to display the score of the current player

        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
}

// 1. User rolls the dice
// Generate a random number in the range 1 to 6
// This function activates as soon as the user clicks the Roll Button

btnRoll.addEventListener('click', viewDiceRolled);
btnHold.addEventListener('click', function()
{
    //Add current score to the score of active player

    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    //Check if the score is >= 100

    //If this happens then finish the game, else switch the players


});
