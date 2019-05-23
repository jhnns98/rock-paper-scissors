// All code should be written in this file.

/* Twelve global variables representing each player’s move types and values
(3 move types and 3 move values for each player). These variable names should be in the form
of playerOneMoveOneType, playerOneMoveOneValue, etc.
*/
let playerOneMoveOneType
let playerOneMoveTwoType
let playerOneMoveThreeType

let playerTwoMoveOneType
let playerTwoMoveTwoType
let playerTwoMoveThreeType

let playerOneMoveOneValue
let playerOneMoveTwoValue
let playerOneMoveThreeValue

let playerTwoMoveOneValue
let playerTwoMoveTwoValue
let playerTwoMoveThreeValue

/* A function called setPlayerMoves, which will take a string representing a player
(in the form of 'Player One' or 'Player Two'),
three move types, and three move values, and set the correct global move variables.
The method signature for this function should be as follows:
setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue).
*/

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
  if ((!moveOneType || !moveTwoType || !moveThreeType || !player) || (moveOneType === '' || moveTwoType === '' || moveThreeType === '' || player === '')) {
    return 'error: missing type'
  } else if (moveOneType !== 'scissors' && moveOneType !== 'rock' && moveOneType !== 'paper') {
    return 'error: invalid move type'
  } else if (moveTwoType !== 'scissors' && moveTwoType !== 'rock' && moveTwoType !== 'paper') {
    return 'error: invalid move type'
  } else if (moveThreeType !== 'scissors' && moveThreeType !== 'rock' && moveThreeType !== 'paper') {
    return 'error: invalid move type'
  } else if (!moveOneValue || !moveTwoValue || !moveThreeValue) {
    return 'error: missing value'
  } else if ((moveOneValue < 1 || moveOneValue > 99) || (moveTwoValue < 1 || moveTwoValue > 99) || (moveThreeValue < 1 || moveThreeValue > 99)) {
    return 'error: value has to be between 1-99'
  } else if ((moveOneValue + moveTwoValue + moveThreeValue) > 99) {
    return 'error: sum of move values has to be less than 99'
  } else if ((moveOneValue === '') || (moveTwoValue === '') || (moveThreeValue === '')) {
    return 'error: missing move value'
  } else if (player === 'Player One') {
    playerOneMoveOneType = moveOneType
    playerOneMoveOneValue = moveOneValue
    playerOneMoveTwoType = moveTwoType
    playerOneMoveTwoValue = moveTwoValue
    playerOneMoveThreeType = moveThreeType
    playerOneMoveThreeValue = moveThreeValue
  } else if (player === 'Player Two') {
    playerTwoMoveOneType = moveOneType
    playerTwoMoveOneValue = moveOneValue
    playerTwoMoveTwoType = moveTwoType
    playerTwoMoveTwoValue = moveTwoValue
    playerTwoMoveThreeType = moveThreeType
    playerTwoMoveThreeValue = moveThreeValue
  } else {
    return 'error: cannot find player type'
  }
}

/* A function called getRoundWinner, which takes a round number (1, 2, or 3),
compares both player’s move types and values for that round, and returns the appropriate winner
('Player One', 'Player Two', or 'Tie') */

function getRoundWinner (round) {
  let roundWinner
  if (round < 1 || round > 3) {
    return null
  } switch (round) {
    case 1:
      if (playerOneMoveOneType === playerTwoMoveOneType) {
        if (playerOneMoveOneValue === playerTwoMoveOneValue) {
          roundWinner = 'Tie'
        } else if (playerOneMoveOneValue > playerTwoMoveOneValue) {
          roundWinner = 'Player One'
        } else {
          roundWinner = 'Player Two'
        }
      } else if (playerOneMoveOneType === 'scissors') {
        if (playerTwoMoveOneType === 'rock') {
          roundWinner = 'Player Two'
        } else {
          roundWinner = 'Player One'
        }
      } else if (playerOneMoveOneType === 'rock') {
        if (playerTwoMoveOneType === 'scissors') {
          roundWinner = 'Player One'
        } else {
          roundWinner = 'Player Two'
        }
      } else {
        if (playerTwoMoveOneType === 'scissors') {
          roundWinner = 'Player Two'
        } else {
          roundWinner = 'Player One'
        }
      }
      return roundWinner
      break;
    case 2:
      if (playerOneMoveTwoType === playerTwoMoveTwoType) {
        if (playerOneMoveTwoValue === playerTwoMoveTwoValue) {
          roundWinner = 'Tie'
        } else if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
          roundWinner = 'Player One'
        } else {
          roundWinner = 'Player Two'
        }
      } else if (playerOneMoveTwoType === 'scissors') {
        if (playerTwoMoveTwoType === 'rock') {
          roundWinner = 'Player Two'
        } else {
          roundWinner = 'Player One'
        }
      } else if (playerOneMoveTwoType === 'rock') {
        if (playerTwoMoveTwoType === 'scissors') {
          roundWinner = 'Player One'
        } else {
          roundWinner = 'Player Two'
        }
      } else {
        if (playerTwoMoveTwoType === 'scissors') {
          roundWinner = 'Player Two'
        } else {
          roundWinner = 'Player One'
        }
      }
      return roundWinner
      break;
    case 3:
      if (playerOneMoveThreeType === playerTwoMoveThreeType) {
        if (playerOneMoveThreeValue === playerTwoMoveThreeValue) {
          roundWinner = 'Tie'
        } else if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
          roundWinner = 'Player One'
        } else {
          roundWinner = 'Player Two'
        }
      } else if (playerOneMoveThreeType === 'scissors') {
        if (playerTwoMoveThreeType === 'rock') {
          roundWinner = 'Player Two'
        } else {
          roundWinner = 'Player One'
        }
      } else if (playerOneMoveThreeType === 'rock') {
        if (playerTwoMoveThreeType === 'scissors') {
          roundWinner = 'Player One'
        } else {
          roundWinner = 'Player Two'
        }
      } else {
        if (playerTwoMoveThreeType === 'scissors') {
          roundWinner = 'Player Two'
        } else {
          roundWinner = 'Player One'
        }
      }
      return roundWinner
      break;
    default:
      return 'error with getRoundWinner function'
  }
}

/*
A function called getGameWinner, which compares both player’s move types and values for the whole game
and returns the appropriate winner ('Player One', 'Player Two', or 'Tie')
*/
function getGameWinner () {
  let p1WinCount = 0
  let p2WinCount = 0
  let gameWinner
  let errorCount = 0

  if (getRoundWinner(1) === 'Player One') {
    p1WinCount += 1
  } else if (getRoundWinner(1) === 'Player Two') {
    p2WinCount += 1
  } else if (getRoundWinner(1) === 'Tie') {
    p1WinCount += 1
    p2WinCount += 1
  } else {
    errorCount += 1
  };

  if (getRoundWinner(2) === 'Player One') {
    p1WinCount += 1
  } else if (getRoundWinner(2) === 'Player Two') {
    p2WinCount += 1
  } else if (getRoundWinner(2) === 'Tie') {
    p1WinCount += 1
    p2WinCount += 1
  } else {
    errorCount += 1
  };

  if (getRoundWinner(3) === 'Player One') {
    p1WinCount += 1
  } else if (getRoundWinner(3) === 'Player Two') {
    p2WinCount += 1
  } else if (getRoundWinner(3) === 'Tie') {
    p1WinCount += 1
    p2WinCount += 1
  } else {
    errorCount += 1
  };

  if (errorCount > 0) {
    gameWinner = 'error'
  } else if (p1WinCount === p2WinCount) {
    gameWinner = 'Tie'
  } else if (p1WinCount > p2WinCount) {
    gameWinner = 'Player One'
  } else if (p1WinCount < p2WinCount) {
    gameWinner = 'Player Two'
  } else {
    return null
  }
  if (gameWinner === 'error') {
    return null
  } else {
    return gameWinner
  }
}

/*
Bonus: A function called setComputerMoves, which chooses three random moves for player two.
 The move type for each move should be completely random, and the move values should be random but add up to 99
*/
function setComputerMoves () {
  let randMoveNumber1 = Math.floor(Math.random() * 3) + 1
  let randMoveNumber2 = Math.floor(Math.random() * 3) + 1
  let randMoveNumber3 = Math.floor(Math.random() * 3) + 1

  if (randMoveNumber1 === 1) {
    playerTwoMoveOneType = 'scissors'
  } else if (randMoveNumber1 === 2) {
    playerTwoMoveOneType = 'rock'
  } else if (randMoveNumber1 === 3) {
    playerTwoMoveOneType = 'paper'
  } else {
    return console.log('error random number no 1')
  };

  if (randMoveNumber2 === 1) {
    playerTwoMoveTwoType = 'scissors'
  } else if (randMoveNumber2 === 2) {
    playerTwoMoveTwoType = 'rock'
  } else if (randMoveNumber2 === 3) {
    playerTwoMoveTwoType = 'paper'
  } else {
    return console.log('error random number no 2')
  };

  if (randMoveNumber3 === 1) {
    playerTwoMoveThreeType = 'scissors'
  } else if (randMoveNumber3 === 2) {
    playerTwoMoveThreeType = 'rock'
  } else if (randMoveNumber3 === 3) {
    playerTwoMoveThreeType = 'paper'
  } else {
    return console.log('error random number no 3')
  };

  // create an empty array
  let numberArray1 = [];
  // count to 98 starting at 1 so max value can be 97. Array is 0 indexed
  for (i = 1; i < 98; i++) {
    numberArray1.push(i);
  }
  // set random value of array + 1 so it doesn't give a 0
  let randomValue = Math.floor(Math.random() * numberArray1.length + 1);
  playerTwoMoveOneValue = randomValue;
  // create a leftOver variable and set it to equal the first number array. add 2 so it will go to 99 and subtract the first random value
  let leftoverOne = numberArray1.length + 2 - randomValue;
  // create a new empty array and count to the leftover value and push it into the array
  let numberArrays2 = [];
  for (x = 1; x < leftoverOne; x++) {
    numberArrays2.push(x);
  }
  // create new random value and multiply it by the new number arrays length. Add 1 in case it rounds to 0
  let randomValue2 = Math.floor(Math.random() * numberArrays2.length + 1);
  playerTwoMoveTwoValue = randomValue2;
  // create final random variable that subtracts the lengh of the second array by the second random variable. Add 1 to avoid 0
  let randomValue3 = numberArrays2.length - randomValue2 + 1;
  playerTwoMoveThreeValue = randomValue3;
}
