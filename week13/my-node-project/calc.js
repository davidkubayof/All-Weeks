import input from "analiza-sync";

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

const opr = input("Choose operation (1 = +, 2 = -, 3 = *, 4 = /): ");
const num1 = parseFloat(input("Enter first number: "));
const num2 = parseFloat(input("Enter second number: "));

switch(opr) {
    case "1":
        console.log(sum(num1, num2));
        break;
    case "2":
        console.log(sub(num1, num2));
        break;
    case "3":
        console.log(mul(num1, num2));
        break;
    case "4":
        console.log(div(num1, num2));
        break;
    default:
        console.log("Invalid choice");
}