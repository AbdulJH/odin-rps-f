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

console.log(getComputerChoice());
console.log(getUserChoice());
