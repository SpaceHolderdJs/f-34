const role = "customer";
// switch-case

if (role === "admin") {
  console.log("Admin");
} else if (role === "user" || role === "customer" || role === "guest") {
  console.log("User");
} else {
  console.log("Role is not recognized");
}

// const a = 10;

switch (role) {
  case "admin":
    console.log("Admin");
    break;

  case "user":
  case "guest":
  case "customer":
    console.log("User");
    console.log("Hello, Guest");

    break;

  default:
    console.log("Role is not recognized");
    break;
}

// Завдання:

// const name = "Igor";
// const name = "Karina";
// const name = "Olexandr";

// Залежно від імені опрацюйте вивід інформації switch-case оператором:
// "Igor" - :-)
// "Karina" - :-0
// "Olexandr" - :-(

const a = 10;
const b = 2;

const operation = "@";

let result;

switch (operation) {
  case "+":
    result = a + b;
    break;

  case "-":
    result = a - b;
    break;

  case "*":
    result = a * b;
    break;

  case "/":
    result = a / b;
    break;

  default:
    result = "Invalid operation";
}

console.log(`Result: ${result}`);

let x = 0;
let y = 0;
let z = 0;

// let step = 2;
// let basis = "x";

// userPosition = { y: 0, x: 2 };

function distance(step, basis) {
  switch (basis) {
    case "x":
      x = x + step;
      return x;

    case "y":
      y = y + step;
      return y;

    case "z":
      z = z + step;
      return z;

    default:
  }

  console.log(`After last move the values are: x: ${x}, y: ${y}, z: ${z}`);
}

const newX = distance(10, "x");
const newY = distance(3, "y");
const newZ = distance(100, "z");

console.log(`New values: ${newX}, ${newY}, ${newZ}`);

// distance(-10, "x");
