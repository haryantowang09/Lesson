let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);
const getAbsoluteDistance = (playerGuess, targetValue) => Math.abs(playerGuess - targetValue);
const compareGuesses = (humanGuess, computerGuess, targetValue) => {
  if (humanGuess < 0 || humanGuess > 9) {
    window.alert('You input the wrong range of numbers. Only between 0 to 9 is acceptable.');
  }
  const humanGuessDiff = getAbsoluteDistance(humanGuess, targetValue);
  const computerGuessDiff = getAbsoluteDistance(computerGuess, targetValue);

  return (computerGuessDiff < humanGuessDiff) ? false : true;
}
const updateScore = winner => {
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  }
}
const advanceRound = () => {
  return currentRoundNumber += 1;
}

// console.log(compareGuesses(-1, 6, generateTarget()));
