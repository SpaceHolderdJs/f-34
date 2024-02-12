let numbers = "";

while (numbers.length !== 10) {
  console.log(numbers);
  numbers = numbers.concat("1");
}

console.log(numbers, numbers.length);

let shouldGoOn = true;
let n = -10;

while (shouldGoOn) {
  console.log(n, "iteration");
  n = n + 1;

  if (n === 0) {
    shouldGoOn = false;
  }
}

console.log(n, "result");

let n1 = 10;

while (true) {
  //   if (n1 === 5) {
  //     continue;
  //     i++;
  //   }

  console.log(n1, "iteration(n1)");
  n1 = n1 - 1;

  if (n1 === 1) {
    break;
  }
}

console.log(n1, "result(n1)");

// Завдання:

function draw(symbol, iterations) {}

// draw("*", 3)

// *
// **
// ***
// ***
// **
// *

// function draw(symbol, iteration) {
//   let str = "";

//   while (str.length !== iteration) {
//     str = str.concat(symbol);
//     console.log(str);
//   }

//   while (str.length !== 0) {
//     console.log(str);
//     str = str.slice(0, str.length - 1);
//   }
// }

// draw("*", 3);
// console.log();
// draw("+", 100);

// function draw(symbol, iterations) {
//   let centr = Math.floor(iterations / 2);
//   let count = 0;

//   while (count <= centr) {
//     console.log(symbol.repeat(count + 1));
//     count += 1;
//   }

//   while (count !== 0) {
//     console.log(symbol.repeat(count - 1));
//     count -= 1;
//   }
// }

// draw("*", 5);

function draw(symbol, iteration) {
  let str = symbol;

  while (true) {
    console.log(str);
    str += symbol;

    if (str.length === iteration + 1) {
      break;
    }
  }

  while (true) {
    str = str.slice(0, str.length - 1);
    console.log(str);

    if (str.length === 0) {
      break;
    }
  }
}

draw("*", 3);
draw("-", 10);

// for

const str = "qwertyuiop";

for (let i = 0; i < str.length; i = i + 1) {
  console.log(str[i], i, "iteration (for)");
}

console.log("____________________________");

for (let i = 0; i < str.length / 2; i = i + 1) {
  console.log(str[i], i, "by two iteration");
}
