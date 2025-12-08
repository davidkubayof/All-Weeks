import readline from "readline-sync";
import createPlayer, { addSolveTime, showStats } from "./utils/player.js";
import { askRiddle, measureSolveTime } from "./utils/riddleUtils.js";
import riddles from "./riddles/allRiddles.js";

console.log("Welcome to the Riddle Game!");
const name = readline.question("What is your name? ");
const player = createPlayer(name);
console.log(`\nWelcome: ${name}! Let's start.\n`);

for(const riddle of riddles){
    const duration = measureSolveTime(() => askRiddle(riddle));
    addSolveTime(player,duration);
}

showStats(player);
