const arr = ["Rock", "Paper", "Scissors"];
function getComputerChoice(arr){
    let choice = Math.floor(Math.random() * arr.length);
    return arr[choice];
}
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.trim().toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if(playerSelection == computerSelection){
        return "It's a TIE! play another round!"
    }
    else if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") || (playerSelection == "SCISSORS" && computerSelection == "ROCK")){
        if (playerSelection == "ROCK"){
            return "Scissors can't cut ROCK, Player WINS!"
        }
        else{
            return "Scissors can't cut ROCK, Computer WINS!"
        }
    }
    else if ((playerSelection == "ROCK" && computerSelection == "PAPER") || (playerSelection == "PAPER" && computerSelection == "ROCK")){
        if(playerSelection == "PAPER"){
            return "PAPER beats Rock, Player WINS!"
        }
        else{
            return "PAPER beats Rock, Computer WINS!"
        }
    }
    else if ((playerSelection == "SCISSORS" && computerSelection == "PAPER") || (playerSelection == "PAPER" && computerSelection == "SCISSORS")){
        if(playerSelection == "SCISSORS"){
            return "SCISSORS cut Paper, Player WINS!"
        }
        else{
            return "SCISSORS cut Paper, Computer WINS!"
        }
    }
    else{
        return "Invalid Choice, Player Focus!"
    }
    
}
const playerSelection = "rock";
const computerSelection = getComputerChoice(arr);
console.log(playRound(playerSelection, computerSelection));