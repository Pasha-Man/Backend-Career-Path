let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random()*9);
};

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {  
    if (humanGuess < 0 || humanGuess > 9) {
        alert('Please enter a number between 0 and 9');
    } else {
        const humanDifference = Math.abs(targetNumber - humanGuess);
        const computerDifference = Math.abs(targetNumber - computerGuess);
        if (humanDifference <= computerDifference || humanDifference === computerDifference) {
            return true;
        }
        else {
            return false;
        };
    }
};

const updateScore = winner =>{
    if (winner === 'human'){
        humanScore = humanScore + 1;
        return 'winner is human';
    } else {
        computerScore = computerScore + 1;
        return 'winner is computer';
    };
};

const advanceRound = () =>{
    currentRoundNumber = currentRoundNumber + 1;
    return currentRoundNumber;
}

console.log(compareGuesses(6, 5, 10));
console.log(updateScore());
console.log(advanceRound());
console.log(humanScore);
console.log(computerScore);