const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener("input", onSpanChangeSize);

function onSpanChangeSize(event) {
  // console.dir(event.currentTarget.value);
  // console.log(span.style.fontSize);
  span.style.fontSize = `${input.value}px`;
}
