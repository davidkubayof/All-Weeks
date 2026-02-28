import input from 'analiza-sync';

export function askRiddle(riddleObj) {
  console.log(`\nRiddle ${riddleObj.id}: ${riddleObj.name}`);
  console.log(riddleObj.taskDescription);

  if (riddleObj.choices) {
    riddleObj.choices.forEach((choice, index) => {
      console.log(`${index + 1}. ${choice}`);
    });
  }

  while (true) {
    const answer = input("→ ");
    if (riddleObj.choices) {
      if (answer === riddleObj.correctAnswer) break;
      console.log("Incorrect! Try again.");
    } else {
      if (answer.trim().toLowerCase() === riddleObj.correctAnswer.toLowerCase()) break;
      console.log("Incorrect! Try again.");
    }
  }

  console.log("Correct!");
}

export function measureSolveTime(fn) {
  const start = Date.now();
  fn();
  const end = Date.now();
  return (end - start) / 1000; // seconds
}
