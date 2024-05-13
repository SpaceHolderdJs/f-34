const button = document.createElement("button");
button.textContent = "Button";

document.body.appendChild(button);

// mouse events (main)

button.onclick = () => {
  console.log(this, "this from an arrow function");
  console.log("Hello from button");
};

button.ondblclick = () => {
  console.log("dbl click");
};

// hover
button.onmouseover = () => {
  console.log("Hovered");
};

button.onmouseleave = () => {
  console.log("Unhovered");
};

button.onmouseup = () => {
  console.log("Mouse up");
};

button.onfocus = () => {
  console.log("Focus");
};

button.onmousedown = () => {
  console.log("Mouse down");
};

// system events

window.onload = () => {
  console.log("load");
};

window.onblur = () => {
  console.log("blur");
  document.title = "Come back 😭";
};

window.onfocus = () => {
  document.title = "Document";
};

window.onclose = () => {
  console.log("Closed");
};

// inputs events

const textInput = document.createElement("input");
textInput.value = "Hello";

document.body.appendChild(textInput);

const errorElement = document.createElement("p");
errorElement.className = "error-element";

document.body.appendChild(errorElement);

const validateEmail = (value) => {
  // Завдання:
  // написати логіку що перевіряє значення value
  // містить @ та крапку (.) мінімум 6 символів, не має пробілів
  // true / false
  return (
    value.length >= 6 &&
    value.includes("@") &&
    value.includes(".") &&
    !value.includes(" ")
  );
};

textInput.onchange = (event) => {
  const validateResult = validateEmail(event.target.value);

  errorElement.textContent = "";

  if (!validateResult) {
    errorElement.textContent = "Invalid Email";
  }

  console.log(validateResult, "result");
};

const searchInput = document.createElement("input");
searchInput.placeholder = "Search the users";
document.body.appendChild(searchInput);

const users = {
  data: ["user@email.com", "email@gmail.com", "google@gmail.com"],
  wrapper: document.createElement("div"),
  render: function (users) {
    this.wrapper.innerHTML = "";

    users.forEach((email) => {
      const div = document.createElement("div");
      div.textContent = email;
      this.wrapper.appendChild(div);
    });
  },
};

users.wrapper.className = "users-wrapper";
document.body.appendChild(users.wrapper);

users.render(users.data);

searchInput.oninput = (event) => {
  const filteredUsers = users.data.filter((email) =>
    email.includes(event.target.value.toLowerCase())
  );
  users.render(filteredUsers);
};

const rangeInput = document.createElement("input");
rangeInput.type = "range";

rangeInput.onchange = (event) => {
  console.log("Change of the range input", event.target.value);
};

rangeInput.oninput = (event) => {
  console.log("Input range oninput event", event.target.value);
};

document.body.appendChild(rangeInput);

// document.body.onmousemove = (event) => {
//   console.log("Mousemove");
//   console.log(event.pageX, event.pageY, "coordinates");
// };

const coordsElements = {
  x: document.createElement("h1"),
  y: document.createElement("h1"),
};

const { x, y } = coordsElements;

x.textContent = `X: 0`;
document.body.appendChild(x);

y.textContent = `Y: 0`;
document.body.appendChild(y);

document.body.onmousemove = (event) => {
  x.textContent = `X: ${event.pageX}`;
  y.textContent = `Y: ${event.pageY}`;
};

// button.onclick = function (param) {
//   console.log(this, "this from function expression");
//   console.log("Second handler");
// };
