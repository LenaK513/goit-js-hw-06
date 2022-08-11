const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", onInputChangeText);

function onInputChangeText(event) {
  span.textContent = event.currentTarget.value;
}
