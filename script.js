
const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
let choice= options[Math.floor(Math.random() * options.length)]; 
return choice;
}

function playGame(){  
let playerScore= 0;
let computerScore= 0;  
for (let i= 0; i < 5; i++) {
    const playerSelection = prompt("Choose your option").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    function playRound(playerSelection, computerSelection) { 
        if (playerSelection === computerSelection){
        return "tie";
        }else if (playerSelection === "rock" && computerSelection === "scissors"){
            playerScore++;
            return "you win rock beats scissors";
        }else if (playerSelection === "paper" && computerSelection === "rock"){
            playerScore++;
            return "you win paper beats rock";
        }else if (playerSelection === "scissors" && computerSelection === "paper"){
            playerScore++;
            return "win scissors beats paper";
        }else if (playerSelection === "rock" && computerSelection === "paper"){
            computerScore++;
            return "you lose paper beats rock";
        }else if (playerSelection === "paper" && computerSelection === "scissors"){
            computerScore++;
            return "you lose scissors beats paper";
        }else if (playerSelection === "scissors" && computerSelection === "rock"){
            computerScore++;
            return "you lose rock beats scissors";
        }
    }
}
if (playerScore < computerScore){
    console.log("Computer Wins");
}else if (playerScore > computerScore){
    console.log("Player Wins");
}else {
    console.log("Its a Tie");
}
}

playGame()
