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
        return "You Win!";
    }
    else {
        return "Computer Win!";
    }
}

function isChoiceValid(selection) {
    if (OPTIONS.includes(selection.toLowerCase())) {
        return true;
    }
    return false;
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Rock, Paper, Scicssor: ");

        while(!isChoiceValid(playerSelection)) {
            playerSelection = prompt("Rock, Paper, Scissors");
        }
        
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(play(playerSelection, computerSelection));
    }
}

playGame();