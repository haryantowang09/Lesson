const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock') {
    return userInput;
  }
  else if (userInput === 'paper') {
    return userInput;
  }
  else if (userInput === 'scissors') {
    return userInput;
  } else if (userInput === 'bomb') {
    return userInput;
  } else {
    console.log('User Input is not recognized.');
  }
}

// console.log(getUserChoice('paper'));

const getComputerChoice = () => {
  const number = Math.floor(Math.random() * 3);
  if (number === 0) {
    return 'rock';
  } else if (number === 1) {
    return 'paper';
  } else if (number === 2) {
    return 'scissors';
  }
}

// console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'User used cheat and won the game.';
  }

  if (userChoice === computerChoice) {
    return 'The game is tie.';
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer won the game.';
    } else {
      return 'User won the game.';
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer won the game';
    } else {
      return 'User won the game.';
    }
  } else if (userChoice === 'scissors') {
    if (computerChouce === 'rock') {
      return 'Computer won the game.';
    } else {
      return 'User won the game.';
    }
  }
}

// console.log(determineWinner('rock', 'scissors'));

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
