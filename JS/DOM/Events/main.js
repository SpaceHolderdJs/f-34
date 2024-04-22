// DOM

const scripts = document.scripts;
console.log(scripts, "scripts", scripts.length);

const myOwnCustomScript = document.createElement("script");
myOwnCustomScript.src = "./hello.js";
document.body.appendChild(myOwnCustomScript);

console.log(scripts, "scripts", myOwnCustomScript.src);

const forms = document.forms;
console.log(forms, "forms");

for (const form of forms) {
  form.onsubmit = (event) => {
    event.preventDefault();
  };
}

const images = [
  "https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg",
  "https://img.freepik.com/free-photo/view-car-running-high-speed_23-2150635406.jpg",
  "https://rare-gallery.com/thumbs/1186781-car-vehicle-muscle-cars-sports-car-performance-car-Plymouth-GTX-supercar-land-vehicle-automotive-design-automobile-make-luxury-vehicle-muscle-car-stock-car-racing.jpg",
];

// Завдання:
// напишіть логіку створення та виведення зоображень з масиву на сторінку(body)
// .src =

images.forEach((src) => {
  const image = document.createElement("img");
  image.src = src;
  document.body.appendChild(image);
});

console.log(document.images, "images");

const styles = document.styleSheets;
console.log(styles, "styles");

document.title = "TITLE FROM JS";
console.log(document.head, "head");

let count = 0;

setInterval(() => {
  count = count + 1;
  document.title = count;
}, 1000);

const style = document.createElement("style");
style.innerHTML = `
body {
    background: lightblue;
}`;

document.head.appendChild(style);

// EVENTS in DOM

let count2 = 0;

const count2Element = document.createElement("h1");
count2Element.textContent = count2;
document.body.appendChild(count2Element);

const resetCount2 = () => {
  count2 = 0;
  count2Element.textContent = count2;
};

// +1
const increaseButton = document.createElement("button");
increaseButton.textContent = "+1";
increaseButton.onclick = () => {
  count2 = count2 + 1;
  count2Element.textContent = count2;
};
increaseButton.ondblclick = resetCount2;
document.body.appendChild(increaseButton);

// -1
const decreaseButton = document.createElement("button");
decreaseButton.textContent = "-1";
decreaseButton.onclick = () => {
  count2 = count2 - 1;
  count2Element.textContent = count2;
};
decreaseButton.ondblclick = resetCount2;
document.body.appendChild(decreaseButton);

// Main events:
// onclick, ondbllclick, onChange, onInput, onMouseMove
// onMouseEnter, onMouseLeave, onBlur, onFocus, onLoad

const dblClickButton = document.createElement("button");
dblClickButton.textContent = "Click 2 times";

dblClickButton.ondblclick = function () {
  console.log("DBL click was fired");
};

dblClickButton.onclick = function (event) {
  console.log(event, "event");
  console.log("Click was fired");
};

document.body.appendChild(dblClickButton);

// Завдання:
// Використовуючи dblClick на 2 попередніх кнопках
// реалізувати логіку обнулення count2 (має виводитись)

const selectButtonsWrapper = document.getElementById("select-buttons-wrapper");

const selectButtonsNumbers = [1, 2, 3];
let selectedButtons = [];

const selectButtons = selectButtonsNumbers.map((number) => {
  const selectBtn = document.createElement("button");
  selectBtn.textContent = number;

  selectBtn.onclick = (event) => {
    if (event.ctrlKey && !selectedButtons.includes(number)) {
      selectedButtons.push(number);
      event.target.classList.add("selected");

      console.log(event.target);

      console.log(selectedButtons, "selectedButtons");
    }

    if (event.shiftKey && selectedButtons.includes(number)) {
      selectedButtons = selectedButtons.filter((n) => n !== number);
      event.target.classList.remove("selected");

      console.log(event.shiftKey, "!!! Shift key");
    }

    console.log(number);
  };

  selectButtonsWrapper.appendChild(selectBtn);
});
