
const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
let choice= options[Math.floor(Math.random() * options.length)]; 
return choice;
}




function playRound(playerSelection, computerSelection) { 
if (playerSelection==computerSelection){
return "tie";
}else if (playerSelection == "rock" && computerSelection == "scissors"){
    return "you win rock beats scissors";
}else if (playerSelection == "paper" && computerSelection == "rock"){
    return "you win paper beats rock";
}else if (playerSelection == "scissors" && computerSelection == "paper"){
    return "win scissors beats paper";
}else if (playerSelection == "rock" && computerSelection == "paper"){
    return "you lose paper beats rock";
}else if (playerSelection == "paper" && computerSelection == "scissors"){
    return "you lose scissors beats paper";
}else if (playerSelection == "scissors" && computerSelection == "rock"){
    return "you lose rock beats scissors";
}
}


function playGame(){    
    let playerScore= 0;
    let computerScore= 0;
    console.log("Lets Start")
let(i=0; i < 5; i++) {
const playerSelection = prompt("Choose your option").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
    }
    console.log("The Game is over")
}
