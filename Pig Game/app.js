/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var player1, player2, currentScore, activePlayer, globalScore;

player1 = "Player 1";
player2 = "Player 2";
globalScore = [0, 0];
activePlayer = 0;
roundScore = 0;
// player1 = prompt("Enter Player 1 name");
// player2 = prompt("Enter Player 2 name");

init();

document.querySelector(".btn-new").addEventListener("click", function(){
    
})

document.querySelector(".btn-roll").addEventListener("click", function(){
    var dice = Math.floor(Math.random() * 6 + 1);

    document.querySelector(".dice").style.display = "block";
    document.querySelector(".dice").src = "dice-" + dice + ".png";

    if(dice !== 1) {
        roundScore += dice;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;

        if(globalScore[activePlayer] + roundScore >= 25) {
            globalScore[activePlayer] += roundScore;
            document.querySelector("#score-" + activePlayer).textContent = globalScore[activePlayer];

            document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
            document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
            document.querySelector("#name-"+activePlayer).textContent = "Winner!";
            activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;
            document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
            document.querySelector("#name-"+activePlayer).textContent = "Loser!";
            activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;
            document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
            document.querySelector(".btn-roll").style.display = "none";
            document.querySelector(".btn-hold").style.display = "none";
            document.querySelector(".dice").style.display = "none";
        }

    } else {
        nextPlayer();
    }
})

document.querySelector(".btn-hold").addEventListener("click", function(){
    globalScore[activePlayer] += roundScore;
    document.querySelector("#score-" + activePlayer).textContent = globalScore[activePlayer];
    nextPlayer();
})

function init() {
    document.querySelector("#name-0").textContent = player1;
    document.querySelector("#name-1").textContent = player2;
    document.querySelector("#score-0").textContent = "0";
    document.querySelector("#current-0").textContent = "0";
    document.querySelector("#score-1").textContent = "0";
    document.querySelector("#current-1").textContent = "0"; 
    document.querySelector(".dice").style.display = "none";
    roundScore = 0;
    activePlayer = 0;
    globalScore = [0, 0];
    document.querySelector(".player-0-panel").classList.add("active");
    document.querySelector(".player-1-panel").classList.remove("active");
}

function nextPlayer() {
    document.querySelector("#current-"+activePlayer).textContent = "0";
    roundScore = 0;

    activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
}