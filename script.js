const playerChoice = document.getElementById("playerchoice")
const computerChoice = document.getElementById("computerchoice")
const selected_button = document.querySelectorAll(".choice")
const initialresult=document.getElementById("initialresult")
const result = document.getElementById("result")
const gameplayed = document.getElementById("gamesplayed")
const initialplayerscore=document.getElementById("playerscore")
const initialcomputerscore=document.getElementById("computerscore")
/* Variable decleration and initilization */
let player, computer, finalResult, timesplayed = 0, playerscore = 0, computerscore = 0;

selected_button.forEach(button => button.addEventListener("click", () => {
    timesplayed += 1;
    gameplayed.textContent = `Games Played:${timesplayed}`
    player = button.textContent;
    computerTurn();
    changeText();
    
    if (timesplayed %5=== 0) {
        final_result=document.createElement('h3')
        if (playerscore > computerscore) {
            final_result.textContent = `Final Result: Player won`
        
        }
        else {
            final_result.textContent = `Final Result: Computer won`
        }
        document.body.appendChild(final_result);
    }


}
))
// Function to determine computer choice using switch
function computerTurn() {
    const random = Math.floor(Math.random() * 3) + 1
    switch (random) {
        case 1:
            computer = "Rock ✊";
            break;
        case 2:
            computer = "Paper ✋"
            break;
        case 3:
            computer = "Scissors ✌"
            break;
    }
}

function checkwinner() {
    if (player === computer) {
        return "Draw"
    }
    else if ((computer === "Rock ✊" && player === "Paper ✋") || (computer === "Paper ✋" && player === "Scissors ✌") || (computer === "Paper ✋" && player === "Scissors ✌")) {
        playerscore += 1
        return "You win"
    }
    else {
        computerscore += 1
        return "Computer Win"
    }
}
// Function to extract and chnage the text according to the current state of the game 
//Function name had typo and is corrected.
function changeText(){
    playerChoice.textContent = `Player:${player}`
    computerChoice.textContent = `Computer:${computer}`
    initialresult.textContent=`Result :${checkwinner()}`
    initialcomputerscore.textContent=`Computer Score:${computerscore} `
    initialplayerscore.textContent=`Player Score:${playerscore} `
}