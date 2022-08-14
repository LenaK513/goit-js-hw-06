const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");

const listOfElements = (image) => {
  return `<li> <img class="image-item" src=${image.url} alt='${image.alt}' /> </li>`;
};

const listOfImages = images.map(listOfElements).join("");

gallery.insertAdjacentHTML("beforeend", listOfImages);
console.log(gallery);

// const gallery = document.querySelector(".gallery");
// const listOfElements = images.map((image) => {
//   // const imageEl = document.createElement("img");
//   // imageEl.src = image.url;
//   // imageEl.alt = image.alt;
//   // console.log(imageEl);
//   gallery.insertAdjacentHTML(
//     "beforeend",
//     `<li> <img class="image-item" src=${image.url} alt=${image.alt} /> </li>`
//   );
// });

// console.log(gallery);
