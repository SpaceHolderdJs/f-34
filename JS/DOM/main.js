// DOM
// window
document;

const body = document.body;
console.log(body, "body");

const div = document.createElement("div");
console.log(div, "div");

div.id = "myId";
div.className = "myClass myClass2";
div.classList.add("myClass3");

div.textContent = "Hello, div";

document.body.appendChild(div);

const users = [
  { name: "Vladislav", age: 22 },
  { name: "Igor", age: 24 },
  { name: "Karina", age: 18 },
];

// users.forEach((user) => {
//   const div = document.createElement("div");
//   div.classList.add("user");
//   div.textContent = `${user.name}`;

//   const span = document.createElement("span");
//   span.classList.add("user-age");
//   span.textContent = user.age;
//   div.appendChild(span);

//   document.body.appendChild(div);
// });

function present(data, into) {
  data.forEach((item) => {
    const { tag, content, classes, id } = item;

    const element = document.createElement(tag);
    element.textContent = content;
    element.className = classes;
    element.id = id;

    into.appendChild(element);
  });
}

const usersWithLayouts = users.map((user) => ({
  tag: "div",
  content: `${user.name}, ${user.age}`,
  id: "user-id",
  classes: "user",
}));

present(usersWithLayouts, document.body);

// Завдання:

const locations = [
  { city: "Kyiv", population: 120000 },
  { city: "Kharkiv", population: 120000 },
  { city: "Chernihiv", population: 80000 },
];

// вивести всі локації у document.body використовуючи
// DOM

// div -> p(city) -> span -> population

// id, class, name, tag

const header = document.getElementById("header");
console.log(header, "header");
header.textContent = "The text was updated";

// better convert to the array
// Array.from, [...]

const pCollections = [...document.getElementsByClassName("p")];
console.log(pCollections, "p");

pCollections.forEach((element) => {
  element.textContent = element.textContent + "Added new text";
});

const inputWithNameEmail = [...document.getElementsByName("email")];
console.log(inputWithNameEmail, "inputWithNameEmail");

const inputWithNamePassword = [...document.getElementsByName("password")];
console.log(inputWithNamePassword, "inputWithNamePassword");

// Array, HTMLCollection, NodeList

// const input = inputWithNameEmail.item(0);
// console.log(input, "input");

inputWithNameEmail.forEach((item) => {
  console.log(item, "item");
});

// const itemP = pCollections.item(0);
// console.log(itemP, "!!!");

const inputs = [...document.getElementsByTagName("p")];

console.log(inputs, "inputs");

// Завдання:
// 1. Отримати всі елементи з тегом input
// 2. Додати кожному елементу клас (input)

const headerToRemove = document.getElementById("header");

const element = document.body.removeChild(headerToRemove);
console.log(element, "element");

// 2. Завдання: створіть 5 різних елементів використовуючи DOM js
// 3. Видаліть 2 останніх створенних елемента
// 4. Першому елементу дайте клас “first”
// 5. Другому елементу дайте Id “second”

const elementNames = ["p", "span", "div", "article", "h1"];
const elements = elementNames.map((tag) => document.createElement(tag));

// 1
elements.forEach((element, index) => {
  element.textContent = index;
  document.body.appendChild(element);
});

// 2
elements.slice(-2).forEach((element) => document.body.removeChild(element));
// 3
elements.at(0).className = "first";
// 4
elements.at(1).id = "second";
