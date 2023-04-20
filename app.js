const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// __________________________________________________________________
// DARK MODE FEATURE
const apperancebtn = document.querySelector(".dark-mode-btn");
const calcContainer = document.querySelector(".calculator");
const controls = document.querySelector(".controls");
const controlsBtns = document.querySelectorAll(".calc-btn");

apperancebtn.addEventListener("click", () => {
  calcContainer.classList.toggle("white-apperance");
  apperancebtn.classList.toggle("white-btn-mode");
  controls.classList.toggle("white-controls");
  controlsBtns.forEach((btn) => {
    btn.classList.toggle("white-controls-btns");
  });
});
// __________________________________________________________________

// static values
let firstNum = "";
let operator = "";
let secondNum = "";
let equalClicked = false;

function operate(op, num, num2) {
  switch (op) {
    case "+":
      return add(num, num2);

    case "-":
      return subtract(num, num2);

    case "*":
      return multiply(num, num2);

    case "/":
      return divide(num, num2);
    case "%":
      return num % num2;
    default:
      return;
  }
}

const userInput = document.querySelector(".user-input");
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".num");
const equalBtn = document.querySelector("#equal");
const result = document.querySelector(".result");

numbers.forEach((number) =>
  number.addEventListener("click", () => displayNumber(number.innerText))
);

// Display the user input in UI
function displayNumber(number) {
  if (!equalClicked) {
    if (userInput.innerText == 0) {
      userInput.innerText = "";
    }
    if (!operator) {
      firstNum += number;
    }
    userInput.innerText += number;

    if (operator) {
      secondNum += number;
    }
  }
}

operators.forEach((op) =>
  op.addEventListener("click", () => {
    switch (op.textContent) {
      case "x":
        if (!equalClicked) {
          operator = "*";
          userInput.innerText = "\u00A0";
        }
        break;

      case "÷":
        if (!equalClicked) {
          operator = "/";
          userInput.innerText = "\u00A0";
        }
        break;

      case "-":
        if (!equalClicked) {
          operator = "-";
          userInput.innerText = "\u00A0";
        }
        break;

      case "+":
        if (!equalClicked) {
          operator = "+";
          userInput.innerText = "\u00A0";
        }
        break;

      case "%":
        if (!equalClicked) {
          operator = "%";
          userInput.innerText = "\u00A0";
        }

        break;
      case "AC":
        clear();
        break;
      case "C":
        clear();
    }
  })
);

equalBtn.addEventListener("click", () => {
  equalClicked = true;
  if (operator && firstNum && secondNum) {
    result.style.visibility = "visible";
    result.innerText = "";
    userInput.innerText = "\u00A0";
    let resultVal = operate(operator, parseInt(firstNum), parseInt(secondNum));
    result.innerText = resultVal;
  }
  operator = "";
  firstNum = "";
  secondNum = "";
});

// Helper function

function clear() {
  userInput.innerText = "0";
  result.innerText = "0";
  result.style.visibility = "hidden";
  equalClicked = false;
}
