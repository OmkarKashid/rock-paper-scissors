const arr = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;
let result = "START";
const btnRock = document.getElementById('btn-rock');
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");
console.log(btnPaper);
btnRock.addEventListener("click", () => playRound("ROCK"));
btnPaper.addEventListener("click", () => playRound("PAPER"));
btnScissors.addEventListener("click", () => playRound("SCISSORS"));

function checkWinner(){
    if(playerScore == 5){
        document.querySelector("#winner").textContent = "Player Wins!";
    }
    else{
        document.querySelector("#winner").textContent = "Computer Wins!";
    }
}

function playRound(playerSelection){
    const choice = Math.floor(Math.random() * arr.length);
    const computerSelection = arr[choice];
    if(playerSelection == computerSelection){

        result ="It's a TIE! play another round!";
    }
    else if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") || (playerSelection == "SCISSORS" && computerSelection == "ROCK")){
        if (playerSelection == "ROCK"){
            playerScore++;
            result = "Scissors can't cut ROCK, Player WINS!";
        }
        else{
            computerScore++;
            result = "Scissors can't cut ROCK, Computer WINS!";
        }
    }
    else if ((playerSelection == "ROCK" && computerSelection == "PAPER") || (playerSelection == "PAPER" && computerSelection == "ROCK")){
        if(playerSelection == "PAPER"){
            playerScore++;
            result = "PAPER beats Rock, Player WINS!";
        }
        else{
            computerScore++;
            result = "PAPER beats Rock, Computer WINS!";
        }
    }
    else if ((playerSelection == "SCISSORS" && computerSelection == "PAPER") || (playerSelection == "PAPER" && computerSelection == "SCISSORS")){
        if(playerSelection == "SCISSORS"){
            playerScore++;
            result = "SCISSORS cut Paper, Player WINS!";
        }
        else{
            computerScore++;
            result = "SCISSORS cut Paper, Computer WINS!";
        }
    }
    else{
        result = "Invalid Choice, Player Focus!";
    }
    document.querySelector("#score").textContent = `Score- Player: ${playerScore}  Computer: ${computerScore}`;
    document.querySelector("#result").textContent = result;
    document.querySelector("#winner").textContent = "";
    if(playerScore == 5 || computerScore == 5){
        checkWinner();
        playerScore = 0;
        computerScore = 0;
    }
}