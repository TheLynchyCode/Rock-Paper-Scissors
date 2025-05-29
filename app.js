// variables
// const input = document.querySelector('input');
// const btn = document.querySelector('button');
const para = document.querySelector('.choices');
const options = ['scissors', 'paper', 'rock'];
const startOverBtn = document.createElement('button');
let computerChoice;
let userChoice;
let compScoreText = document.createElement('p');
let userScoreText = document.createElement('p');
let userScore = 0;
let computerScore = 0;
const scissorsBtn = document.querySelector('.scissors');
const paperBtn = document.querySelector('.paper');
const rockBtn = document.querySelector('.rock');
const scores = document.getElementById('scores');

scissorsBtn.addEventListener('click', function () {
  userChoice = 'scissors';
  const index = Math.floor(Math.random() * options.length);
  computerChoice = options[index];
  if (computerChoice === 'paper') {
    para.textContent = `You win! You selected ${userChoice}, and the computer chose ${computerChoice}!`;
    userScore += 1;
  } else if (computerChoice === userChoice) {
    para.textContent = `It's a draw! Computer chose ${computerChoice}, and you selected ${userChoice}!`;
  } else {
    para.textContent = `You lose! Computer chose ${computerChoice}, and you selected ${userChoice}!`;
    computerScore += 1;
  }
  showScores();
});

rockBtn.addEventListener('click', function () {
  userChoice = 'rock';
  const index = Math.floor(Math.random() * options.length);
  computerChoice = options[index];
  if (computerChoice === 'scissors') {
    para.textContent = `You win! You selected ${userChoice}, and the computer chose ${computerChoice}!`;
    userScore += 1;
  } else if (computerChoice === userChoice) {
    para.textContent = `It's a draw! Computer chose ${computerChoice}, and you selected ${userChoice}!`;
  } else {
    para.textContent = `You lose! Computer chose ${computerChoice}, and you selected ${userChoice}!`;
    computerScore += 1;
  }
  showScores();
});

paperBtn.addEventListener('click', function () {
  userChoice = 'paper';
  const index = Math.floor(Math.random() * options.length);
  computerChoice = options[index];
  if (computerChoice === 'rock') {
    para.textContent = `You win! You selected ${userChoice}, and the computer chose ${computerChoice}!`;
    userScore += 1;
  } else if (computerChoice === userChoice) {
    para.textContent = `It's a draw! Computer chose ${computerChoice}, and you selected ${userChoice}!`;
  } else {
    para.textContent = `You lose! Computer chose ${computerChoice}, and you selected ${userChoice}!`;
    computerScore += 1;
  }
  showScores();
});

function showScores() {
  userScoreText.textContent = `User Score: ${userScore}`;
  compScoreText.textContent = `Computer Score: ${computerScore}`;
  scores.appendChild(userScoreText);
  scores.appendChild(compScoreText);
}

// startOverBtn.textContent = 'Start Over';
// document.body.appendChild(startOverBtn);

// btn.addEventListener('click', function () {
//   const index = Math.floor(Math.random() * options.length);
//   computerChoice = options[index];
//   if (computerChoice === 'scissors' && userChoice === 'rock') {
//     para.textContent = `Nice! You win! ${userChoice} beats ${computerChoice}`;
//     userScore += 1;
//   } else if (computerChoice === 'rock' && userChoice === 'paper') {
//     para.textContent = `Nice! You win! ${userChoice} beats ${computerChoice}`;
//     userScore += 1;
//   } else if (computerChoice === 'paper' && userChoice === 'scissors') {
//     para.textContent = `Nice! You win! ${userChoice} beats ${computerChoice}`;
//     userScore += 1;
//   } else if (computerChoice === userChoice) {
//     para.textContent = `Draw! Computer chose ${computerChoice} and you chose ${userChoice}!`;
//     computerScore += 0;
//     userScore += 0;
//   } else {
//     para.textContent = `Sorry, you lose! Computer chose ${computerChoice} and that beats your ${userChoice}!`;
//     computerScore += 1;
//   }
//   document.body.appendChild(para);
//   compScoreText.textContent = `Computer Score: ${computerScore}`;
//   userScoreText.textContent = `Your Score: ${userScore}`;
//   document.body.appendChild(compScoreText);
//   document.body.appendChild(userScoreText);
//   if (computerScore === 5 && userScore < 5) {
//     compScoreText.textContent = `GAME OVER! Computer wins ${computerScore} to ${userScore}`;
//     userScoreText.textContent = '';
//     para.textContent = '';
//   } else if (userScore === 5 && computerScore < 5) {
//     userScoreText.textContent = `GAME OVER! You win! ${userScore} to ${computerScore}`;
//     compScoreText.textContent = '';
//     para.textContent = '';
//   }
//   input.value = '';
//   input.focus();
// });

function startOver() {
  userScoreText.textContent = '';
  compScoreText.textContent = '';
  userScore = 0;
  computerScore = 0;
  para.textContent = '';
  document.body.removeChild(startOverBtn);
  input.focus();
  document.body.appendChild(startOverBtn);
}

// startOverBtn.addEventListener('click', startOver);
