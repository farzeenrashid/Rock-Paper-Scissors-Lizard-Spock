function showStartScreen() {
    document.getElementById('game-description-screen').style.display = 'none';
}

window.onload = function () {
    showStartScreen();
};

function startGame() {
    // Hide start screen
    document.getElementById('start-screen').style.display = 'none';

    // Show game screen
    document.getElementById('game-description-screen').style.display = 'block';
}

console.log("Let's play rock paper scissors!")

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const playerSelection = () => new Promise(resolve => rl.question("Pick your fighter: ", resolve));

function computerSelection() {
    const arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(Math.random() * arr.length)];
}

let computerWinCounter = 0;
let playerWinCounter = 0;

async function playRound() {

    for (let round = 1; round <= 5;) {
        console.log("--------------------------------");
        console.log(`Round ${round}:`);
      
        let playerChoice = await playerSelection();
        playerChoice = playerChoice.toLowerCase().trim();
        console.log(`Your choice: ${playerChoice}`);
      
        const computerChoice = computerSelection();
        console.log(`Computer's choice: ${computerChoice}`);  
      
        if (computerChoice === "rock" && playerChoice === "paper" || computerChoice === "scissors" && playerChoice === "rock" || computerChoice === "paper" && playerChoice === "scissors") {
            console.log("You win!");
            playerWinCounter++;
            console.log(`Player wins: ${playerWinCounter}, Computer wins: ${computerWinCounter}`);
            round++
        } else if (computerChoice === "paper" && playerChoice === "rock" || computerChoice === "rock" && playerChoice === "scissors" || computerChoice === "scissors" && playerChoice === "paper") {
            console.log("Computer wins!");
            computerWinCounter++;
            console.log(`Player wins: ${playerWinCounter}, Computer wins: ${computerWinCounter}`);
            round++
        } else if (computerChoice === playerChoice) {
            console.log("It's a tie! Restarting round...");
            continue;
        }
    }
    determineWinner();
    rl.close();
 }

function determineWinner() {
    if (playerWinCounter > computerWinCounter) {
        console.log("Congrats! You won the game!");
    } else if (playerWinCounter < computerWinCounter) {
        console.log("Aw shucks, looks like the computer beat you. Better luck next time.");
    } else if (playerWinCounter === computerWinCounter) {
        console.log("It's a tie! You were so close.");
    }  
 }

 playRound();