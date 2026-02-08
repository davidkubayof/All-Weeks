const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let firstNumber = null;
let operator = null;
let waitingForSecond = false;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (!isNaN(value) || value === ".") {
      inputNumber(value);
    } else if (["+", "−", "×", "÷"].includes(value)) {
      chooseOperator(value);
    } else if (value === "=") {
      calculate();
    } else if (value === "C") {
      clearCalculator();
    }
  });
});

function inputNumber(num) {
  if (waitingForSecond) {
    display.value = num;
    waitingForSecond = false;
  } else {
    display.value = display.value === "0" ? num : display.value + num;
  }
}

function chooseOperator(op) {
  firstNumber = Number(display.value);
  operator = op;
  waitingForSecond = true;
}

function calculate() {
  if (operator === null) return;

  const secondNumber = Number(display.value);
  let result;

  switch (operator) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "−":
      result = firstNumber - secondNumber;
      break;
    case "×":
      result = firstNumber * secondNumber;
      break;
    case "÷":
      result = secondNumber === 0 ? "שגיאה" : firstNumber / secondNumber;
      break;
  }

  display.value = result;
  operator = null;
}

function clearCalculator() {
  display.value = "0";
  firstNumber = null;
  operator = null;
  waitingForSecond = false;
}
