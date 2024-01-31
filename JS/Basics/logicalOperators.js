const t = true;
const f = false;

const t1 = Number(t);
const f1 = Number(f);

console.log(t, f, t1, f1);

// Falsy (false-like)
// false, 0, undefined, null, "";

// True-like
// true, 1, "string", [], {}, function;

const isBigger = 10 > 50;
const isLower = 10 < 50;
const isBiggerOrEqual = 10 >= 50;
const isLowerOrEqual = 10 <= 50;

const isEqual = 10 == 50;
const isDetailedEqual = 10 === 50;

console.log(10 == 10);
console.log(10 == "10");
console.log(10 === 10);
console.log(10 === "10");

const name1 = "Igor";
const name2 = "Katerina";

console.log(name1 === name2);
console.log(10 === name1);

console.log(name2.toUpperCase());

console.log(
  isBigger,
  isLower,
  isBiggerOrEqual,
  isLowerOrEqual,
  isEqual,
  isDetailedEqual
);

if (isBigger) {
  console.log("Hello, true");
} else {
  console.log("Hello, false");
}

// function

const a = 10;

function main() {
  const a = 10;
  const b = 12;
  console.log("Hello", a + b);
}

main();

// Завдання:

// 1. Написати функцію, що виводить в консоль
// "Password is too short" якщо password має довжину меншу за 10
// або виводить "Password is proper" у ІНШОМУ випадку

function task1() {
  const password = "password12345";

  if (password.length < 10) {
    console.log("Password is too short");
  } else {
    console.log("Password is proper");
  }
}

task1();

// Завдання:

// 2. Написати функцію, що виводить в консоль ваш вік, спираючись на поточний рік
// та на дату вашого народження (рік)

function task2() {
  const currentYear = 2024;
  const birthYear = 1999;

  console.log(currentYear - birthYear);
}

task2();

// 3. Написати функцію, що виводить true якщо строка починається
// та закінчується на однакову літеру (cимвол)

function task3() {
  const string = "I am a string I";
  const firstLetter = string[0];
  const lastLetter = string[string.length - 1];

  console.log(firstLetter === lastLetter);
}

task3();

// const isLastAndFirstEq = (str) => str.at(0) === str.at(-1);
// console.log(isLastAndFirstEq("I am a string I"));

// function task3() {
//   const string = "I am a string I";
//   const firstLetter = string.at(0);

//   if (string.endsWith(firstLetter)) {
//     console.log(true);
//   }
// }

// task3();

// ! not (no)
// || or
// && and

// &&

if (1 > 0 && 1 < 2) {
  console.log("TRUE");
}

const number1 = 10;
const number2 = 9;

const condition1 = true && true;
console.log(condition1);

if (condition1) {
  console.log("TRUE");
}

// ||

const condition2 = false || 10 < 3 || false;

console.log(condition2, "||");

// !

console.log(!false, "!");
console.log("str" !== "str1");

// if (str.startsWith("I") && str.endsWith()) {
// }

if (condition2) {
  // code
}
