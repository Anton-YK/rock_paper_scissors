let humanScore = 0;
let computerScore = 0;
const paperbtn = document.querySelector("#paper");
const scissorsbtn = document.querySelector("#scissors");
const resultdiv = document.querySelector("#result");
const rockbtn = document.querySelector("#rock");
const playerscore = document.querySelector("#playerScore");
const computscore = document.querySelector("#computerScore");

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Choose rock, paper or scissors");
  return humanChoice;
}

function playRound(humanSelection) {
  let computerSelection = getComputerChoice();
  let result;
  if (humanSelection === computerSelection) {
    result = "its a tie";
  } else if (
    (humanSelection === "rock" && computerSelection === "scissors") ||
    (humanSelection === "scissors" && computerSelection === "paper") ||
    (humanSelection === "paper" && computerSelection === "rock")
  ) {
    humanScore++;
    result = "you win";
  } else {
    result = "you lose";
    computerScore++;
  }
  resultdiv.textContent = `You chose ${humanSelection}. Computer chose ${computerSelection}. ${result}.`;
  playerscore.textContent = `PLAYER: ${humanScore}`;
  computscore.textContent = `COMPUTER: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    endGame();
  }
}

function endGame() {
  let finalResult;
  if (humanScore > computerScore) {
    finalResult = "You won the game!";
  } else {
    finalResult = "The computer won the game.";
  }
  resultdiv.textContent = finalResult;
}

// integration

rockbtn.addEventListener("click", function () {
  playRound("rock");
});
paperbtn.addEventListener("click", function () {
  playRound("paper");
});
scissorsbtn.addEventListener("click", function () {
  playRound("scissors");
});
