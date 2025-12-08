import input from "analiza-sync";

const add = (a,b)=> a+b;
const sub = (a,b)=> a-b;
const mul = (a,b)=> a*b;
const div = (a,b)=> b===0 ? "canot div by ziro ":a/b;
const Exponent = (a,b)=> a**b;
const Square = (a,b)=> a**(1/b);

console.log(`
    1 = +
    2 = -
    3 = *
    4 = /
    5 = **
    6 = Square
    0 = exit
    `);


while(true){

    const choice = Number(input("enter a choice: "));
    if(choice===0){break}
    
    const num1 = Number(input("enter a first num: "));

    const num2 = Number(input("enter a second num: "))

switch(choice){
    case 1:
        console.log(add(num1,num2));
        break;
    case 2:
        console.log(sub(num1,num2));
        break;
    case 3:
        console.log(mul(num1,num2));
        break;
    case 4:
        console.log(div(num1,num2));
        break;
    case 5:
        console.log(Exponent(num1,num2));
        break;
    case 6:
        console.log(Square(num1,num2));
        break;

    default:
        console.log("choice not invilid! ");
         
    }
    
}