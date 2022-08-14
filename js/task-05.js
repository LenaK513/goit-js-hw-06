const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

function onInputChangeText(event) {
  if (event.currentTarget.value.trim() === "") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = event.currentTarget.value;
  }
}

input.addEventListener("input", onInputChangeText);
// function onInputChangeText(event) {
//   span.textContent = event.currentTarget.value;

//   if (event.currentTarget.value === "") {
//     span.textContent = "Anonymous";
//   }
// }
