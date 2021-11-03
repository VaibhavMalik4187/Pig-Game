'use strict';

// Our task is to develop 3 buttons, and the score board

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

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
}

// 1. User rolls the dice
// Generate a random number in the range 1 to 6
// This function activates as soon as the user clicks the Roll Button

btnRoll.addEventListener('click', viewDiceRolled);
