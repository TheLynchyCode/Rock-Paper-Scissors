// variables
const input = document.querySelector('input');
const btn = document.querySelector('button');
const para = document.querySelector('.choices');
const options = ['scissors', 'paper', 'rock'];
let computerChoice;
let userChoice;
let compScoreText = document.createElement('p');
let userScoreText = document.createElement('p');
let userScore = 0;
let computerScore = 0;

btn.addEventListener('click', function () {
  const index = Math.floor(Math.random() * options.length);
  computerChoice = options[index];
  userChoice = input.value;
  if (computerChoice === 'scissors' && userChoice === 'rock') {
    para.textContent = `Nice! You win! ${userChoice} beats ${computerChoice}`;
    userScore += 1;
  } else if (computerChoice === 'rock' && userChoice === 'paper') {
    para.textContent = `Nice! You win! ${userChoice} beats ${computerChoice}`;
    userScore += 1;
  } else if (computerChoice === 'paper' && userChoice === 'scissors') {
    para.textContent = `Nice! You win! ${userChoice} beats ${computerChoice}`;
    userScore += 1;
  } else if (computerChoice === userChoice) {
    para.textContent = `Draw! Computer chose ${computerChoice} and you chose ${userChoice}!`;
    computerScore += 0;
    userScore += 0;
  } else {
    para.textContent = `Sorry, you lose! Computer chose ${computerChoice} and that beats your ${userChoice}!`;
    computerScore += 1;
  }
  document.body.appendChild(para);
  input.value = '';
  input.focus();
  compScoreText.textContent = `Computer Score: ${computerScore}`;
  userScoreText.textContent = `Your Score: ${userScore}`;
  document.body.appendChild(compScoreText);
  document.body.appendChild(userScoreText);
});
