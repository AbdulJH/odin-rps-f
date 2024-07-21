function getComputerChoice() {
  options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function getUserChoice() {
  const userPrompt = prompt("ROCK , PAPER, OR SCISSORS?").toLowerCase();
  if (
    userPrompt !== "rock" &&
    userPrompt !== "paper" &&
    userPrompt !== "scissors"
  ) {
    alert("ERROR!! MUST PICK A VALID CHOICE");
    return getUserChoice();
  }

  return userPrompt;
}

let userScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("ITS A TIE!");
    return;
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    userScore += 1;
    console.log(
      `YOU WON!! ${humanChoice} BEATS ${computerChoice}\nScore ${userScore}-${computerScore}`
    );
  } else {
    computerScore += 1;
    console.log(
      `YOU LOST. ${computerChoice} BEATS ${humanChoice}\nScore ${userScore}-${computerScore}`
    );
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getUserChoice(), getComputerChoice());
  }
  checkWinner(userScore, computerScore);
}

function checkWinner(userPoints, computerPoints) {
  if (userPoints == computerPoints) {
    console.log(`TIE GAME. FINAL SCORE: ${userPoints}-${computerPoints}`);
  } else if (userPoints > computerPoints) {
    console.log(`YOU WON THE GAME. FINAL SCORE: ${userPoints}-${computerPoints}`);
  } else {
    console.log(`YOU LOST THE GAME. FINAL SCORE: ${userPoints}-${computerPoints}`);
  }
}

playGame();
