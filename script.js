let calculation = localStorage.getItem("Calculation") || "";
displayCalculation();

function updateCalculation(value) {
  calculation += value;
  displayCalculation();
  localStorage.setItem("Calculation", calculation);
}

function displayCalculation() {
  document.querySelector(".js-calculation").innerHTML = calculation;
}
