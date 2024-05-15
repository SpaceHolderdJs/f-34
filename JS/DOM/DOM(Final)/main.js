// Selectors
// Events

console.log({ document }, "document");

console.log(document.characterSet);
console.log(document.contentType);
console.log(document.URL);
console.log(document.baseURI);

// const allElements = document.all;

const allElements = document.querySelectorAll("*");
const allBodyElements = document.querySelectorAll("body *");

console.log([...allElements], "allElements");
console.log([...allBodyElements], "allBodyElements");

console.log(document.location, "location");

console.log(document.location.href, "href");
console.log(document.location.host, "host");
console.log(document.location.pathname, "pathname");
console.log(document.location.pathname.split("/"), "path parts");
console.log(document.location.port, "port");
console.log(document.location.protocol, "protocol");

// document.location.reload();

// setTimeout(() => {
//   document.location.reload();
// }, 4000);

// setTimeout(() => {
//   document.location.assign("https://google.com");
// }, 4000);

// setTimeout(() => {
//   document.location.replace("https://google.com");
// }, 4000);

// Завдання:
// Створіть лічильник counter та кнопку "+"
// Збільшуйте counter на 1 на кожний клік кнопки
// Якщо counter > 10 - перезавантажте сторінку

let counter = 0;

const button = document.createElement("button");
button.textContent = "+";
document.body.appendChild(button);

button.addEventListener("click", () => {
  counter = counter + 1;

  button.textContent = counter;

  if (counter > 9) {
    document.location.reload();
  }
});

const nameHeading = document.querySelector("#name");
const ageHeading = document.querySelector("#age");

console.log(document.location.search, "search");

const searchPairs = document.location.search.replace("?", "").split("&");

const searchParameters = searchPairs.reduce((acc, values) => {
  const [key, value] = values.split("=");
  acc[key] = value;

  return acc;
}, {});

const { name = "", age = "" } = searchParameters;

nameHeading.textContent += name;
ageHeading.textContent += age;

console.log(searchParameters, "searchParameters");
// console.log(searchPairs, "searchPairs");
