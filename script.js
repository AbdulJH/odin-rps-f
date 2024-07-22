document.addEventListener("DOMContentLoaded", initializeGame);

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

let userScore = 0;
let computerScore = 0;

function initializeGame() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.innerText = button.innerText.toLowerCase();
    button.addEventListener("click", () => {
      if (!checkWinner()) {
        const playerChoice = button.innerText;
        const computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
        if (checkWinner()) {
          endGame();
        }
      }
    });
  });
}

function playRound(humanChoice, computerChoice) {
  const score = document.querySelector(".score");
  const gameProgress = document.querySelector(".gameProgress");

  if (humanChoice === computerChoice) {
    gameProgress.innerText = `IT'S A TIE!!! BOTH CHOSE ${humanChoice.toUpperCase()}`;
    console.log("IT'S A TIE!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore += 1;
    gameProgress.innerText = `YOU WON!! ${humanChoice.toUpperCase()} BEATS ${computerChoice.toUpperCase()}`;
    console.log(
      `YOU WON!! ${humanChoice.toUpperCase()} BEATS ${computerChoice.toUpperCase()}\nScore ${userScore}-${computerScore}`
    );
  } else {
    computerScore += 1;
    gameProgress.innerText = `YOU LOST. ${computerChoice.toUpperCase()} BEATS ${humanChoice.toUpperCase()}`;
    console.log(
      `YOU LOST. ${computerChoice.toUpperCase()} BEATS ${humanChoice.toUpperCase()}\nScore ${userScore}-${computerScore}`
    );
  }
  score.innerText = `Score ${userScore}-${computerScore}`;
}

function checkWinner() {
  return userScore >= 5 || computerScore >= 5;
}

function endGame() {
  const score = document.querySelector(".score");
  const gameProgress = document.querySelector(".gameProgress");

  // Ensure the variables are accessible
  if (!score || !gameProgress) {
    console.error("Score or gameProgress element not found.");
    return;
  }

  score.innerText = " ";

  if (userScore > computerScore) {
    gameProgress.innerText = `YOU WON THE GAME. FINAL SCORE: ${userScore}-${computerScore}`;
    console.log(`YOU WON THE GAME. FINAL SCORE: ${userScore}-${computerScore}`);
  } else {
    gameProgress.innerText = `YOU LOST THE GAME. FINAL SCORE: ${userScore}-${computerScore}`;
    console.log(
      `YOU LOST THE GAME. FINAL SCORE: ${userScore}-${computerScore}`
    );
  }

  disableGame();
  setTimeout(() => {
    playAgain();
  }, 3000);
}

function playAgain() {
  const userPrompt = prompt("Would you like to play again? (YES or NO)");
  const userResponse = userPrompt.toLowerCase();
  if (userResponse === "yes") {
    resetGame();
    enableGame();
  } else if (userResponse === "no") {
    // No additional action needed here as the game is already disabled
  } else {
    alert("INVALID RESPONSE... TRY AGAIN");
    playAgain();
  }
}

function resetGame() {
  userScore = 0;
  computerScore = 0;
  const score = document.querySelector(".score");
  const gameProgress = document.querySelector(".gameProgress");
  score.innerText = "0-0";
  gameProgress.innerText = " ";
}

function disableGame() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function enableGame() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.disabled = false;
  });
}
