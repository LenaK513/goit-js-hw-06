const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// console.log(ingredients);

const ingredientsFinalList = document.querySelector("#ingredients");

const ingredientsNewList = ingredients.map((ingredient) => {
  const ingredientsItemEl = document.createElement("li");
  ingredientsItemEl.classList.add("item");
  ingredientsItemEl.textContent = ingredient;
  return ingredientsItemEl;
});

ingredientsFinalList.append(...ingredientsNewList);
console.log(ingredientsFinalList);

// const ingredientsItemEl = document.createElement("li");
// ingredientsItemEl.classList.add("item");
// ingredientsItemEl.textContent = "Potatoes";
// // console.log(ingredientsItemEl);

// const ingredientsItemElSecond = document.createElement("li");
// ingredientsItemElSecond.classList.add("item");
// ingredientsItemElSecond.textContent = "Mushrooms";
// // console.log(ingredientsItemElSecond);

// const ingredientsItemElThird = document.createElement("li");
// ingredientsItemElThird.classList.add("item");
// ingredientsItemElThird.textContent = "Garlic";
// // console.log(ingredientsItemElThird);

// const ingredientsItemElForth = document.createElement("li");
// ingredientsItemElForth.classList.add("item");
// ingredientsItemElForth.textContent = "Tomatos";
// // console.log(ingredientsItemElForth);

// const ingredientsItemElFifth = document.createElement("li");
// ingredientsItemElFifth.classList.add("item");
// ingredientsItemElFifth.textContent = "Herbs";
// // console.log(ingredientsItemElFifth);

// const ingredientsItemElSixth = document.createElement("li");
// ingredientsItemElSixth.classList.add("item");
// ingredientsItemElSixth.textContent = "Condiments";
// // console.log(ingredientsItemElSixth);

// const newIngredientsList = document.querySelector("#ingredients");

// newIngredientsList.append(
//   ingredientsItemEl,
//   ingredientsItemElSecond,
//   ingredientsItemElThird,
//   ingredientsItemElForth,
//   ingredientsItemElFifth,
//   ingredientsItemElSixth
// );

// console.log(newIngredientsList);
