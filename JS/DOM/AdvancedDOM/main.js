// DOM
// Dynamic

// Selectors
document;

document.getElementById("id");
document.getElementsByClassName("class");
document.getElementsByTagName("tag");
document.getElementsByName("name");

// document.querySelector();
// document.querySelectorAll();

const paragraph = document.querySelector("p");
const paragraphByClass = document.querySelector(".paragraph");
const paragraphById = document.querySelector("#p");

const innerredP = document.querySelector("body .paragraph");

console.log(paragraph, "paragrph");
console.log(paragraphByClass, "paragraphByClass");
console.log(paragraphById, "paragraphId");
console.log(innerredP, "innerredP");

const allParagraphs = document.querySelectorAll("p");
const allParagraphsByClass = document.querySelectorAll(".paragraph");

console.log(allParagraphs, "allParagraphs");
console.log(allParagraphsByClass, "allParagraphsByClass");

// HTMLCollection vs NodeList

// Array-like

const htmlCollectionOfP = document.getElementsByTagName("p");

console.log(htmlCollectionOfP.namedItem("name"), "!!!!");

for (const p of htmlCollectionOfP) {
  console.log(p, "!!!");
}

// htmlCollectionOfP.namedItem; (id or name attributes)

const nodeListOfP = document.querySelectorAll("p");

nodeListOfP.forEach((p, i, list) => {
  console.log(p, i, list, "p");
});
console.log(htmlCollectionOfP, nodeListOfP, "let's compare them!");

const obj = { name: "Igor" };

console.log(Object.keys(nodeListOfP), "keys");
console.log(Object.values(nodeListOfP), "values");
console.log(Object.entries(nodeListOfP), "entries");

console.log(nodeListOfP.entries(), "entries");
console.log(nodeListOfP.keys(), "keys");
console.log(nodeListOfP.values(), "values");

console.log(nodeListOfP[0], "item");

// const myList = new NodeList();

// ONLY ITERABLE (Iterator must be defined)
Array.from([]);
[...[]];
new Array([]);

// Завдання:
const data = [1, 2, 3, 4, 5];
// 1. Створіть елемент div під кожен елемент масива data (+body)
// 2. За допомогою querySelectorAll виберіть ваші елементи за типом тегу
// 3. Видаліть зі сторінки всі div елменти з цифорою менше 3 (включно)

data
  .map((n) => {
    const element = document.createElement("div");
    element.textContent = n;
    document.body.appendChild(element);

    return element;
  })
  .filter((element) => +element.textContent <= 3)
  .forEach((element) => document.body.removeChild(element));

// Manipulators
document;

// NodeList
// HTMLCollection

// Possible types
// HTMLElement;
// Node;
// Element;

// const element = new Element();
// console.log(element);

// const htmlElement = new HTMLElement();
// console.log(htmlElement);

// const node = new Node();
// console.log(node);

// create
const aside = document.createElement("aside");
document.body.appendChild(aside);

// update (styles, attributes, content)
aside.id = "aside";
aside.className = "aside";
// aside.classList

// data-attributes

const lastP = [...document.querySelectorAll("p")].at(-1);
console.log(lastP, "lastP");

console.log(lastP.dataset, "data");

aside.textContent = "Text to display";
aside.innerHTML = "Text";

aside.innerText = "Text2";

const colors = {
  r: 20,
  g: 30,
  b: Math.floor(Math.random() * 250),
};

aside.style.background = `rgb(${colors.r}, ${colors.g}, ${colors.b})`;

// delete

// aside.remove();
// document.body.removeChild(aside);

// replace

// Utils
document;
