
function displayResult(parameter) {
  console.log(parameter);
}

function calculate(x, y, myCallback) {
  let sum = x + y;
  myCallback(sum);
}

calculate(10, 10, displayResult);
