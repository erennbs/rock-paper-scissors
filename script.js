const buttons = document.querySelectorAll("button");
const resultDiv = document.querySelector(".results");
const playerScoreSpan = document.querySelector(".player-score");
const computerScoreSpan = document.querySelector(".computer-score");

buttons.forEach((button) => button.addEventListener("click", buttonOnClick));


let playerScore = 0;
let computerScore = 0;


function buttonOnClick(e) {
    if (playerScore === 5 || computerScore === 5) return;

    playerSelection = e.target.id;
    computerSelection = getComputerChoice();

    updateTexts(play(playerSelection, computerSelection));
}    

function updateTexts(text) {
    resultDiv.textContent = text;
    playerScoreSpan.textContent = `Player: ${playerScore}`;
    computerScoreSpan.textContent = `Computer: ${computerScore}`;

    if (playerScore === 5) {
        resultDiv.textContent = "Winner is: You";
    } else if (computerScore === 5) {
        resultDiv.textContent = "Winner is: Computer";
    }
    
}    



const OPTIONS = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);

    return OPTIONS[randomIndex];
}

function play(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "Tie";
    }
    
    if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        return "You Win!";
    }
    else {
        computerScore++
        return "Computer Win!";
    }
}

function isChoiceValid(selection) {
    if (OPTIONS.includes(selection.toLowerCase())) {
        return true;
    }
    return false;
}
