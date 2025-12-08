import readline from "readline-sync";

export function askRiddle(riddle) {
    console.log(`\nRiddle ${riddle.id}: ${riddle.name}`);
    console.log(riddle.taskDescription);

    if (riddle.choices) {
        riddle.choices.forEach((c, i) => {
            console.log(`${i}. ${c}`);
        });
    }

    while (true) {
        const userAnswer = readline.question("→ ");

        if (riddle.choices) {
            if (userAnswer === riddle.correctAnswer) {
                console.log("Correct!");
                break;
            }
        } else {
            if (userAnswer.toLowerCase() === riddle.correctAnswer.toLowerCase()) {
                console.log("Correct!");
                break;
            }
        }

        console.log("Wrong answer, try again!");
    }
}

export function measureSolveTime(fn) {
    const start = Date.now();
    fn();
    const end = Date.now();
    return (end - start) / 1000;
}
