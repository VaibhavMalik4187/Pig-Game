'use strict';

// Our task is to develop 3 buttons, and the score board

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores;
let currentScore;
let activePlayer;
let playing;

const init = function () {
    // Here we will initialize all the scores and the variables

    scores = [0, 0];
    activePlayer = 0;
    playing = true;
    currentScore = 0;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

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

    if (playing)
    {
        const dice = Math.trunc(Math.random()*6) + 1;;

        //now we have the random number, we need to display the corresponding dice image and update the scores of the active player

        diceEl.classList.remove('hidden');
        diceEl.src = `https://github.com/VaibhavMalik4187/Pig-Game/blob/main/images/dice-${dice}.png`;
    
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
}

// 1. User rolls the dice
// Generate a random number in the range 1 to 6
// This function activates as soon as the user clicks the Roll Button

btnRoll.addEventListener('click', viewDiceRolled);
btnHold.addEventListener('click', function()
{
    //Add current score to the score of active player

    if (playing)
    {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        //Check if the score is >= 100

        if (scores[activePlayer] >= 100)
        {
            playing = false;
        
            // add the winner class to activePlayer's classList
        
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden');
        }
        else
        {
            switchPlayers();   
        }    
    }
});

btnNew.addEventListener('click', init);
