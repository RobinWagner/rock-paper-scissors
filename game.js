
let playerScore = 0;
let computerScore = 0;
const numberOfRounds = 5;

function game() {
  let maximumScore = 0;
  displayWelcomeMessage();
  while (maximumScore < numberOfRounds) {
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    displayScore();
    maximumScore = calculateMaximumScore(playerScore, computerScore);
  }
  displayWinner();
}

function displayWelcomeMessage() {
  console.log('Welcome to Rock, Paper, Scissors.');
  console.log(`The first player to win ${numberOfRounds} rounds wins the game.`)
}

function displayScore() {
  console.log(`Your score: ${playerScore}`);
  console.log(`Computer score: ${computerScore}`);
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
  console.log(displayRoundWinner(winner, playerSelection, computerSelection));
}

function determineWinner(playerSelection, computerSelection) {
  let playerMove = playerSelection.toLowerCase();
  let computerMove = computerSelection.toLowerCase();
  let winner = '';
  if ((playerMove === 'rock' && computerMove === 'scissors') || (playerMove === 'paper' && computerMove === 'rock') || (playerMove === 'scissors' && computerMove === 'paper')) {
    winner = 'Player';
    playerScore++;
  } else if (playerMove === computerMove) {
    winner = 'Draw';
  } else {
    winner = 'Computer';
    computerScore++;
  }
  return winner;
}

function displayRoundWinner(winner, playerSelection, computerSelection) {
  if (winner === 'Player') {
    return `You picked ${playerSelection}. Computer picked ${computerSelection}.\nYou Win! ${playerSelection} beats ${computerSelection}`;
  } else if (winner === 'Computer') {
    return `You picked ${playerSelection}. Computer picked ${computerSelection}.\nYou Lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    return `You picked ${playerSelection}. Computer picked ${computerSelection}.\nIt\'s a draw! You both picked ${playerSelection}.`
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

function playerPlay() {
  let playerSelection = prompt('Enter your move (Rock, Paper or Scissors):');
  let standardizedPlayerSelection = ''
  if (playerSelection.length > 0) {
    standardizedPlayerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
  }
  while (!(['Rock', 'Paper', 'Scissors'].includes(standardizedPlayerSelection))) {
    playerSelection = prompt('Wrong entry. Please enter one of these values: Rock, Paper, Scissors');
    standardizedPlayerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
  }
  console.log(standardizedPlayerSelection);
  return standardizedPlayerSelection;
}