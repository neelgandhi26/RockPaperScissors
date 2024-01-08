getComputerChoice = () => {
    let choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * 3)]
}

playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toUpperCase()
    computerSelection = computerSelection.toUpperCase()

    if (playerSelection == computerSelection) {
        return `Its a tie! You both selected ${playerSelection}`
    }
    if (playerSelection == 'ROCK' && computerSelection=='PAPER') {
        return `You Lose! Paper beats Rock`
    }
    if (playerSelection == 'ROCK' && computerSelection=='SCISSORS') {
        return `You Win! Rock beats Scissors`
    }
    if (playerSelection == 'PAPER' && computerSelection=='ROCK') {
        return `You Win! Paper beats rock`
    }
    if (playerSelection == 'PAPER' && computerSelection=='SCISSORS') {
        return `You Lose! Scissors beats Paper`
    }
    if (playerSelection == 'SCISSORS' && computerSelection=='PAPER') {
        return `You Win! Scissors beats Paper`
    }
    if (playerSelection == 'SCISSORS' && computerSelection=='ROCK') {
        return `You Lose! Rock beats Scissors`
    }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection))
