let userPicker = document.getElementById("user-picker");

computerChoiceTransition = (choice) => {
  if (
    document
      .getElementById(`computer-${choice}`)
      .classList.value.includes("updown-animation")
  ) {
    document
      .getElementById(`computer-${choice}`)
      .classList.remove("updown-animation");
    document
      .getElementById(`computer-${choice}`)
      .classList.add("updown-animation");
  }

  document
    .getElementById(`computer-${choice}`)
    .classList.add("updown-animation");
};

getComputerChoice = () => {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  computerChoiceTransition(computerChoice);
  return computerChoice;
};

playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();

  if (playerSelection === computerSelection) {
    return "Tie";
  }
  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
};

let playerScore = 0;
let computerScore = 0;
let playerScoreElement = document.querySelector(".user.score");
let computerScoreElement = document.querySelector(".computer.score");

userPicker.addEventListener("click", (e) => {
  if (
    playerScore < 5 &&
    computerScore < 5 &&
    e.target.classList.contains("user-choice")
  ) {
    let playerSelection = e.target.closest("img").id;
    let computerSelection = getComputerChoice();
    let roundWinner = playRound(playerSelection, computerSelection);

    if (roundWinner == "Player") {
      playerScore++;
      playerScoreElement.innerHTML = `Player Score: ${playerScore}`;
    }
    if (roundWinner == "Computer") {
      computerScore++;
      computerScoreElement.innerHTML = `Computer Score: ${computerScore}`;
    }
  }
});
