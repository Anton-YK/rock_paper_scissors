humanScore = 0;
computerScore = 0;


playGame();

function playGame(i){
    for (var i = 1; i < 5; i++) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    }
    

}



function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3);
    if (computerChoice === 0) {
        return "rock";
    } else if(computerChoice === 1){
        return "paper"; 
    } else {
        return "scissors";
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Choose rock, paper or scissors")
    return humanChoice;
}

function playRound(humanSelection, computerSelection){

    if (humanSelection === computerSelection) {
        console.log("its a tie");
        return "its a tie!"
    }
    else if (
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "scissors" && computerSelection === "paper") ||
        (humanSelection === "paper" && computerSelection === "rock")
    )
    {   humanScore++;
        return `You win! ${humanSelection} beats ${computerSelection}`
        
    }
    else { computerScore++;
        return `You lose! ${computerSelection} beats ${humanSelection}`
    }
}

console.log(playRound(humanSelection, computerSelection));
console.log(`Your Score: ${humanScore}`);
console.log(`Computers' score: ${computerScore}`);
