getComputerChoice = () => {
    let choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * 3)]
}

playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toUpperCase()
    computerSelection = computerSelection.toUpperCase()

    if (playerSelection === computerSelection) {
        return `Its a tie! You both selected ${playerSelection}`
    }
    if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')) {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection))
