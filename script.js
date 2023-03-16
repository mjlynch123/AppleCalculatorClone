var btns = document.getElementsByTagName("td");
var numberArea = document.getElementById("numberSpot");

let currentValue = ""; // stores the current input value
let previousValue = ""; // stores the previous input value
let operator = ""; // stores the selected operator

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function (event) {
    var result = handleClick(event);
    if (result !== undefined) {
      numberArea.textContent = result;
    }
  });
}

function handleClick(event) {
  console.log("Current", currentValue);
  console.log("Prev", previousValue);
  numberArea.textContent = "";
  if (
    !event.target.classList.contains("operator") &&
    !event.target.classList.contains("top-row")
  ) {
    // if the clicked button is a number button, add its value to the current input value
    var newValue = event.target.dataset.value;
    currentValue = currentValue + newValue;
    numberArea.textContent = currentValue;
  } else if (event.target.classList.contains("operator")) {
    // if the clicked button is an operator button, store the current input value as the previous value
    // and store the operator
    operator = event.target.dataset.operator;
    console.log(operator); // this should log the operator value to the console
    previousValue = currentValue;
    currentValue = "";
    numberArea.textContent = operator;
  }

  // If user presses equal
  if (event.target.dataset.operator === "=") {
    // if the clicked button is the equals button, perform the operation and display the result
    var result;

    switch (operator) {
      case "+":
        result = parseInt(previousValue) + parseInt(currentValue);
        break;
      case "-":
        result = parseInt(previousValue) - parseInt(currentValue);
        break;
      case "*":
        result = parseInt(previousValue) * parseInt(currentValue);
        break;
      case "/":
        result = parseInt(previousValue) / parseInt(currentValue);
        break;
    }
    console.log("result", result);
    currentValue = "";
    previousValue = "";
    operator = "";
    return result;
  }

  if (event.target.dataset.value === "AC") {
    currentValue = "";
    numberArea.textContent = 0;
  }
}
