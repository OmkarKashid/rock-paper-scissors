const arr = ["Rock", "Paper", "Scissors"];
function getComputerChoice(arr){
    let choice = Math.floor(Math.random() * arr.length);
    return arr[choice];
}
console.log(getComputerChoice(arr));