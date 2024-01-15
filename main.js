getComputerChoice = () => {
  let choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
};

playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();

  if (playerSelection === computerSelection) {
    playRound(
      prompt("Pick either Rock, Paper, or Scissors"),
      getComputerChoice()
    );
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

game = () => {
  let playerScore = 0;
  let ComputerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Pick either Rock, Paper, or Scissors");
    let computerSelection = getComputerChoice();

    let roundWinner = playRound(playerSelection, computerSelection);

    if (roundWinner == "Player") {
      console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
      playerScore++;
    }
    if (roundWinner == "Computer") {
      console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
      ComputerScore++;
    }
  }
  if (playerScore > ComputerScore) {
    console.log("You win the game!");
  } else {
    console.log("You lost the game!");
  }
};

game();
