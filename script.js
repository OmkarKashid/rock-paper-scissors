let playAgain = true;
const arr = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
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
            playerScore++;
            return "Scissors can't cut ROCK, Player WINS!"
        }
        else{
            computerScore++;
            return "Scissors can't cut ROCK, Computer WINS!"
        }
    }
    else if ((playerSelection == "ROCK" && computerSelection == "PAPER") || (playerSelection == "PAPER" && computerSelection == "ROCK")){
        if(playerSelection == "PAPER"){
            playerScore++;
            return "PAPER beats Rock, Player WINS!"
        }
        else{
            computerScore++;
            return "PAPER beats Rock, Computer WINS!"
        }
    }
    else if ((playerSelection == "SCISSORS" && computerSelection == "PAPER") || (playerSelection == "PAPER" && computerSelection == "SCISSORS")){
        if(playerSelection == "SCISSORS"){
            playerScore++;
            return "SCISSORS cut Paper, Player WINS!"
        }
        else{
            computerScore++;
            return "SCISSORS cut Paper, Computer WINS!"
        }
    }
    else{
        return "Invalid Choice, Player Focus!"
    }
    
}
function game(){
    while (playerScore != 5 && computerScore != 5){
        let playerSelection = prompt("Choose Rock, Paper or Scissors");
        let computerSelection = getComputerChoice(arr);
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Current Score: Player-${playerScore} , Computer-${computerScore}`);
    }
    let winner = checkWinner();
    if (winner == "Tie"){
        console.log("It's a Tie!");
    } 
    else {
        console.log(`${winner} Wins!`);
    }
}
function checkWinner(){
    if(playerScore > computerScore){
        return "Player";
    }
    else if(computerScore > playerScore){
        return "Computer";
    }
    else{
        return "Tie";
    }
}
while(playAgain){
    game();
    let userResponse = prompt("Do you want to play again?(Yes/No)");
    playAgain= (userResponse.toUpperCase() == "YES" ? true : false);
    playerScore = 0;
    computerScore = 0;
}
