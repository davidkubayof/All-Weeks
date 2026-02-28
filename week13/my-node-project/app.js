//import input
import input from 'analiza-sync';

//impor all ridil
import riddles from './riddles/all.js';

//import func 
import { addSolveTime ,createPlayer,showStats} from './utils/utility.js';
import {measureSolveTime ,askRiddle} from './utils/riddle.js'


// print walkem
console.log("walkam to riddl game: ");

// input name
const playerName = input("What is your name? ");
const player = createPlayer(playerName);

// loop all arr
for(const riddle of riddles){
    // time on riddil
    const duration = measureSolveTime(() => askRiddle(riddle));
    //add time to player
    addSolveTime(player,duration)

}
showStats(player);