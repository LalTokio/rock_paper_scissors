let playerScore= 0
let computerScore= 0



const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
const choice= options[Math.floor(Math.random() * options.length)]; 
return choice
}

function verifyWinner(){
    if(playerSelection == computerSelection){
        return "Tie";
    }else if (playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "paper" && computerSelection == "rock" ||
    playerSelection == "scissors" && computerSelection == "paper"){
        return "Player";
    } else{
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection) {
   
  }
