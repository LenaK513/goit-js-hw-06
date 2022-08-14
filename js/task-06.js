const inputEl = document.querySelector("#validation-input");
// console.dir(input);
// console.dir(inputEl.attributes[2].value);

inputEl.addEventListener("blur", onInputBlurCountSymbols);

function onInputBlurCountSymbols(event) {
  let length = inputEl.value.length;
  const lengthInitial = Number(inputEl.attributes[2].value);
  console.log(length);
  console.log(lengthInitial);

  if (length === lengthInitial) {
    this.classList.add("valid");
    this.classList.remove("invalid");
  } else {
    this.classList.remove("valid");
    this.classList.add("invalid");
  }
}
