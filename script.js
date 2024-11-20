let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    let result = eval(display.value);
    if (result === Infinity || result === -Infinity) {
      display.value = "Error: Div by Zero";
    } else {
      display.value = result;
    }
  } catch (e) {
    display.value = "Error";
  }
}
