const inputEl = document.querySelector("#validation-input");
// console.dir(input);
console.dir(inputEl.attributes[2].value);

inputEl.addEventListener("blur", onInputBlurCountSymbols);

function onInputBlurCountSymbols(event) {
  let length = inputEl.value.length;
  console.log(length);

  if (length <= inputEl.attributes[2].value) {
    this.classList.add("valid");
  } else {
    this.classList.add("invalid");
  }
}
