const counter = {
  counterValue: 0,
  increment() {
    console.log("increment -> this", this);
    this.counterValue += 1;
  },
  decrement() {
    console.log("decrement -> this", this);
    this.counterValue -= 1;
  },
};

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

// console.log(decrementBtn.dataset.action);
// console.log(incrementBtn.dataset.action);

decrementBtn.addEventListener("click", function () {
  console.log("Click decrises");
  counter.decrement();
  console.log(counter);
  valueEl.textContent = counter.counterValue;
});

incrementBtn.addEventListener("click", function () {
  console.log("Click incrises");
  counter.increment();
  console.log(counter);
  valueEl.textContent = counter.counterValue;
});
