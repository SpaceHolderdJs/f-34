const str = "123456789";

const sum =
  Number(str[0]) +
  Number(str[1]) +
  Number(str[2]) +
  Number(str[3]) +
  Number(str[4]) +
  Number(str[5]) +
  Number(str[6]) +
  Number(str[7]) +
  Number(str[8]);

console.log(sum);

// while
// for

let counter = 0;
let border = str.length;

let loopSum = 0;

while (counter < border) {
  loopSum = loopSum + Number(str[counter]);
  //   console.log(loopSum);
  counter = counter + 1;
}

console.log(loopSum, "loopSum");

// Завдання:
// const str2 = "Hello world. I am a programmer :)";
// Порахуйте пробіли у строці ' '; ===

// let counter = 0;
// let border = str.length;

// while (counter < border) {

//   counter = counter + 1;
// }

const str3 = "Hello world. i am a programmer :)";
let modifiedStr = "";

for (let i = 0; i < str3.length; i++) {
  if (str3[i] === " ") {
    modifiedStr += " ";
    while (str3[i + 1] === " ") {
      modifiedStr += " ";
      i++;
    }
    if (str3[i + 1]) {
      modifiedStr += str3[i + 1].toUpperCase();
      i++;
    }
  } else {
    modifiedStr += str3[i];
  }
}

console.log(modifiedStr);

// for await (const n of []) {
// }

function repeat(message, times) {
  let counter = 0;

  while (counter < times) {
    console.log(message);
    counter = counter + 1;
  }
}

repeat("Hello", 5);

function getMonthsOf(season) {
  const normalizedSeason = season.toLowerCase().trim();

  switch (normalizedSeason) {
    case "winter":
      return "December, ...";

    case "spring":
      return "March, ...";

    case "summer":
      return "June, ...";

    case "autumn":
      return "September, ...";

    default:
      return "-_-";
  }
  // опишіть функцію getMonthsOf, яка залежно від пори року
  // (winter, summer, autumnm, spring) поверне її місяці як строку (switch-case)
}

const summerMonths = getMonthsOf("summer"); // -> June, July, August
console.log(summerMonths);

const winterMonths = getMonthsOf("winter");
console.log(winterMonths);
