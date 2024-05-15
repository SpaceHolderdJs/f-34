// Завдання: додати логіку на натискання shift + m
// Виводити console.log

const input = document.querySelector("#text");

const onKeyPress = (key) => {
  input.value = input.value + key;
};

const highlightKey = (keyElement) => {
  keyElement.classList.add("pressed");

  setTimeout(() => {
    keyElement.classList.remove("pressed");
  }, 400);
};

const keyboardWrapper = document.querySelector("#keyboard");

const keys = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
  [" "],
];

for (const keysLine of keys) {
  const keyboardRow = document.createElement("div");
  keyboardRow.className = "keyboard-row";
  keyboardWrapper.appendChild(keyboardRow);

  keysLine.forEach((key) => {
    const kbd = document.createElement("kbd");
    kbd.textContent = key;
    kbd.className = `key-${key}`;

    key === " " && kbd.classList.add("space");

    kbd.addEventListener("click", () => {
      highlightKey(kbd);
      onKeyPress(key);
    });

    keyboardRow.appendChild(kbd);
  });
}

document.addEventListener("keydown", (event) => {
  console.log("The key was pressed", event.key.toLowerCase());

  const key = event.key.toLowerCase();
  const keyClass = key === " " ? "space" : key;
  const keyElement = document.querySelector(`kbd.key-${keyClass}`);

  highlightKey(keyElement);
  onKeyPress(key);

  console.log(keyElement);

  if (event.ctrlKey && event.key.toLowerCase() === "d") {
    console.log("cntrl + d was pressed");
    input.value = "";
  }
});
