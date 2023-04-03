const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

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
