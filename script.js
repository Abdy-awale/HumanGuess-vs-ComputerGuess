let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = (n) => {
	return Math.floor(Math.random() * 10);
};
const compareGuesses = (humanGuess, computereGuesse, secrateTarget) => {
	const humanDiff = Math.abs(humanGuess - secrateTarget);
	const computerDiff = Math.abs(computereGuesse - secrateTarget);
	return humanDiff <= computerDiff;
};
const updateScore = (winner) => {
	if (winner === 'human') {
		humanScore++;
	} else if (winner === 'computer') {
		computerScore++;
	}
};

const advanceRound = () => currentRoundNumber++;
