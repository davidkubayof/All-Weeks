// import {question} from 'readline-sync'
// import {first_p_x,first_p_o,ifampty} from './player.js'
import promptSync from "prompt-sync";
const prompt = promptSync();

// const choice = "1";//delet test

// const choice = question(`
//     walkem x o game ?:
//     1. play whit man 
//     2. play whit qomputer 
//     `)

// switch(choice){
//     case "1":
//         toplayer()
//         break
//     case "2":
//         //computer()
//         break
//     default:
//         console.log("invalid num or key: ");
//     }



// function game(){
//     let bool = true;
//     while(bool){
//         const index = first_p_x()
//         ifampty(index,"x")
        
//     }
// }


let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

let currentPlayer = "X";      // מי מתחיל
let playAgainstComputer = false; // האם משחקים נגד מחשב

function printBoard() {
    console.log("GAME: ");
    for (let row of board) {
        console.log(row.join(" [] "));
    }
}


function isCellFree(index) {
    return board[index] === "";
}

// ----------------------------------
// הזנת מהלך של שחקן אנושי
// ----------------------------------
function humanMove() {
    let row = prompt("הכנס מספר שורה (0-2):");
    let col = prompt("הכנס מספר טור (0-2):");

    if (!isCellFree(row, col)) {
        console.log("תא לא פנוי! נסה שוב.");
        return humanMove();
    }

    board[row][col] = currentPlayer;
}

// ----------------------------------
// מהלך מחשב (פשוט – רנדומלי)
// ----------------------------------
function computerMove() {
    let freeCells = [];

    // מציאת כל התאים הפנויים
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            if (board[r][c] === "") freeCells.push([r, c]);
        }
    }

    // בחירת תא אקראי
    let [r, c] = freeCells[Math.floor(Math.random() * freeCells.length)];
    board[r][c] = currentPlayer;
}

// ----------------------------------
// בדיקת ניצחון
// ----------------------------------
function checkWin(symbol) {
    // בדיקת שורות
    for (let r = 0; r < 3; r++) {
        if (board[r][0] === symbol && board[r][1] === symbol && board[r][2] === symbol)
            return true;
    }

    // בדיקת טורים
    for (let c = 0; c < 3; c++) {
        if (board[0][c] === symbol && board[1][c] === symbol && board[2][c] === symbol)
            return true;
    }

    // בדיקת אלכסונים
    if (board[0][0] === symbol && board[1][1] === symbol && board[2][2] === symbol) return true;
    if (board[0][2] === symbol && board[1][1] === symbol && board[2][0] === symbol) return true;

    return false;
}

// ----------------------------------
// החלפת תור
// ----------------------------------
function switchPlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// ----------------------------------
// התחלת המשחק
// ----------------------------------
function main() {
    // בחירה אם לשחק מול מחשב
    let mode = prompt("בחר מצב משחק:\n1 - שני שחקנים\n2 - נגד מחשב");
    if (mode === "2") playAgainstComputer = true;

    printBoard();

    while (true) {
        if (!playAgainstComputer || currentPlayer === "X") {
            // מהלך שחקן אנושי
            humanMove();
        } else {
            // מהלך מחשב
            computerMove();
        }

        printBoard();

        // בדיקה אם יש מנצח
        if (checkWin(currentPlayer)) {
            console.log("השחקן " + currentPlayer + " ניצח!");
            break;
        }

        switchPlayer();
    }
}

// הרצת המשחק
main();
