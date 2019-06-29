
let playerScore = 0;
let computerScore = 0;
const numberOfRounds = 5;
const maximumScore = 5;

const displayedPlayerScore = document.querySelector('#player-score');
const displayedComputerScore = document.querySelector('#computer-score');
const displayedResult = document.querySelector('#result');

function game() {
  let maximumScore = 0;
  displayWelcomeMessage();
  if (maximumScore >= numberOfRounds) {
    maximumScore = calculateMaximumScore(playerScore, computerScore);
  }
  displayWinner();
}

function displayWelcomeMessage() {
  displayedResult.textContent = 'Welcome to Rock, Paper, Scissors.';
  displayedResult.textContent = `The first player to win ${numberOfRounds} rounds wins the game.`;
  displayedResult.textContent = 'Welcome to Rock, Paper, Scissors.'
}

function displayScore() {
  console.log(`Your score: ${playerScore}`);
  console.log(`Computer score: ${computerScore}`);
  displayedResult.textContent = `Your score: ${playerScore}. Computer score: ${computerScore}`;
}

function displayWinner() {
  if (playerScore > computerScore) {
    console.log('Congratulations! You won the game!!!');
    console.log(`The final score is: ${playerScore} - ${computerScore}`);
  } else {
    console.log('The computer won the game.');
    console.log(`The final score is: ${playerScore} - ${computerScore}`);
  }
}

function calculateMaximumScore(playerScore, computerScore) {
  return (playerScore > computerScore) ? playerScore : computerScore;
}

function playRound(playerSelection, computerSelection) {
  let winner = determineWinner(playerSelection, computerSelection);
  displayRoundWinner(winner, playerSelection, computerSelection);
  if (playerScore >= numberOfRounds || computerScore >= numberOfRounds) {
    displayWinner(playerScore, computerScore);
    // showRestartButton();
    // resetGame();
  }
}

function displayWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    const winnerLabel = document.createElement('div');
    winnerLabel.textContent = 'Congratulations! :) You won the game!';
    displayedResult.appendChild(winnerLabel);
  } else {
    const winnerLabel = document.createElement('div');
    winnerLabel.textContent = 'Too bad! :( Computer won the game';
    displayedResult.appendChild(winnerLabel);
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  displayedPlayerScore.innerHTML = playerScore;
  displayedComputerScore.innerHTML = playerScore;
}

function determineWinner(playerSelection, computerSelection) {
  let playerMove = playerSelection.toLowerCase();
  let computerMove = computerSelection.toLowerCase();
  let winner = '';
  if ((playerMove === 'rock' && computerMove === 'scissors') || (playerMove === 'paper' && computerMove === 'rock') || (playerMove === 'scissors' && computerMove === 'paper')) {
    winner = 'Player';
    playerScore++;
    displayedPlayerScore.innerHTML = playerScore;
  } else if (playerMove === computerMove) {
    winner = 'Draw';
  } else {
    winner = 'Computer';
    computerScore++;
    displayedComputerScore.innerHTML = computerScore;
  }
  return winner;
}

function displayRoundWinner(winner, playerSelection, computerSelection) {
  if (winner === 'Player') {
    displayedResult.textContent = `You picked ${playerSelection}. Computer picked ${computerSelection}. You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (winner === 'Computer') {
    displayedResult.textContent = `You picked ${playerSelection}. Computer picked ${computerSelection}.\nYou Lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    displayedResult.textContent = `You picked ${playerSelection}. Computer picked ${computerSelection}.\nIt\'s a draw! You both picked ${playerSelection}.`
  }
}

function computerPlay() {
  let randomNumber = Math.random() * 120;
  if (randomNumber <= 40) {
    return 'Rock';
  } else if (randomNumber > 40 && randomNumber <= 80) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

let rockButton = document.querySelector('#rock');
let paperButton = document.querySelector('#paper');
let scissorsButton = document.querySelector('#scissors');

rockButton.addEventListener('click', () => {
  playRound('rock', computerPlay());
});

paperButton.addEventListener('click', () => {
  playRound('paper', computerPlay());
});

scissorsButton.addEventListener('click', () => {
  playRound('scissors', computerPlay());
});