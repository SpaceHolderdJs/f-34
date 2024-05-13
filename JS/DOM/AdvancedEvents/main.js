// Events
const button = document.querySelector("button");

const clickHandler1 = () => console.log("Hello");
const clickHandler2 = () => console.log("Goodbye");

button.onclick = () => {
  //   clickHandler1();
  //   clickHandler2();
};

button.addEventListener("click", () => {
  console.log("Hello from addEventListener");
});

button.addEventListener("click", () => {
  console.log("Goodbye from addEventListener");
});

button.addEventListener("mouseover", function () {
  console.log(this, "this");
});
// ... code

const clickHandler = () => {
  console.log("This click handler can be removed");
};

button.addEventListener("click", clickHandler);

button.removeEventListener("click", clickHandler);

// Завдання:

// 1. Додати подію (on) input до елемента input (створити)
// через addEventListener (input) - виводити значення іnput (event.target.value)

// 2. Видалити цю подію, на окрему кнопку

const input = document.createElement("input");
const btn = document.createElement("button");

document.body.appendChild(input);
document.body.appendChild(btn);
btn.textContent = "Remove event from input";

const onInputHandler = (event) => {
  console.log(event.target.value);
};

input.addEventListener("input", onInputHandler);

btn.addEventListener("click", () =>
  input.removeEventListener("input", onInputHandler)
);
