let secretNumber;
let score;
const result = [];
startGame();

function startGame() {
  secretNumber = Math.floor(Math.random() * 30) + 1;
  console.log(secretNumber);

  score = 10;

  document.getElementById("score").textContent = score;
  document.getElementById("message").textContent = "";
  document.getElementById("message").className = "";
  document.getElementById("guessInput").value = "";
  document.getElementById("playAgain").style.display = "none";
}

function checkGuess() {
  if (score < 0 + 1) return;
  const guess = Number(document.getElementById("guessInput").value);
  const message = document.getElementById("message");
  let includes = result.includes(guess)
  if (includes) {
    message.textContent = "The number was previously selected";
    message.className = "wrong";
    return;
  } else {
    result.push(guess);
  }

  console.log(result);


  if (guess === secretNumber) {
    message.textContent = "You guessed right!!";
    message.className = "correct";
    endGame();
    return;
  }

  score--;
  document.getElementById("score").textContent = score;

  if (score === 0) {
    message.textContent = "The game is over";
    message.className = "game-over";
    endGame();
  } else {
    message.textContent = "Wrong guess";
    message.className = "wrong";
  }
}

function endGame() {
  document.getElementById("playAgain").style.display = "inline-block";
}

function resetGame() {
  startGame();
}
