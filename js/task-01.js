const quantityOfEl = document.querySelectorAll(".item");
console.log("Number of categories:", quantityOfEl.length);

quantityOfEl.forEach((element) => {
  const elTitle = element.querySelector("h2");
  const elLenght = element.querySelectorAll("li");
  console.log(`Category:`, elTitle.innerHTML);
  console.log(`Elements:`, elLenght.length);
});
// console.log(elTitle);
