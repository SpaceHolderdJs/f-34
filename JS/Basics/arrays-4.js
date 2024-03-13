const arr = ["a", "b", "c"];

arr.forEach((e, i, arr) => {
  console.log("from foreach", e, i, arr);
});

// callback
// foreach
function customForEach(arr, callback) {
  for (let i = 0; i < arr.length; i = i + 1) {
    callback(arr[i], i, arr);
  }
}

customForEach(arr, (e, i, arr) => console.log("from customforEach", e, i, arr));

function customMap(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i = i + 1) {
    const newElement = callback(arr[i], i, arr);
    result.push(newElement);
  }

  return result;
}

[].map((e, i, arr) => {
  return e;
});
[].forEach((e, i, arr) => {});
[].filter((e, i, arr) => {});

const resultFromCustomMap = customMap([1, 2, 3, 4, 5], (e) => {
  return e * 10;
});

console.log(resultFromCustomMap, "resultFromCustomMap");

const regularMapResult = [1, 2, 3, 4, 5].map((e) => e * 10);
console.log(regularMapResult);

function customFilter(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i = i + 1) {
    const isRelevant = callback(arr[i], i, arr);

    if (isRelevant) {
      result.push(arr[i]);
    }
  }

  return result;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const filteredNumbers = numbers.filter((e) => {
  return e > 3;
});

console.log(filteredNumbers, "filteredNumbers");

const filteredCustomNumbers = customFilter(numbers, (e) => {
  return e > 3;
});

console.log(filteredCustomNumbers, "filteredCustomNumbers");

// Завдання:
const elements = [{ x: 10 }, { x: 12 }, { x: 8 }];
// порахувати середнє арифметичне elements (x)

let sum = 0;

elements.forEach((obj) => {
  sum = sum + obj.x;
});

console.log(sum / elements.length, "avarage value");

// every
// some

const letters = ["a", "b", "c", "d"];

const areAllTheElementsStrings = letters.every(
  (e, i, arr) => typeof e === "string"
);

console.log(areAllTheElementsStrings, "result every");

// Завдання:
const numbers2 = [10, 20, 30, 40, 50];
// перевірте, чи ВСІ значення numbers2 є меншими за 100

const users = [
  { email: "email@gmail.com", age: 20 },
  { email: "email6@gmail.com", age: 18 },
  { email: "email12@gmail.com", age: 30 },
  { email: "email2@gmail.com", age: 10 },
];

const areAllUsersAdult = users.every((user) => user.age > 18);
console.log(areAllUsersAdult, "areAllUsersAdult");

// some

const transactions = [
  { code: 121213, isValid: true, customer: { name: "Oleg" } },
  { code: 121213, isValid: true, customer: { name: "Igor" } },
  { code: 121213, isValid: false, customer: { name: "Alex" } },
  { code: 121213, isValid: true, customer: { name: "Katerina" } },
];

const isAnyTransactionInvalid = transactions.some((transaction) => {
  return !transaction.isValid;
});

console.log(isAnyTransactionInvalid, "isAnyTransactionInvalid");

// Завдання

// const transactions2 = [
//     { code: 121213, isValid: true, customer: { name: "Oleg" } },
//     { code: 121213, isValid: true, customer: { name: "Igor" } },
//     { code: 121213, isValid: false, customer: { name: "Alex" } },
//     { code: 121213, isValid: true, customer: { name: "Katerina" } },
//   ];

// 1. Перевірити, що ВСІ code кожної transaction дорівнюють 121213
// 2. Перевірити, що є хоча б один customer тразакції, з name Katerina
// 3. Поверніть новий масив транзакцій, де будуть тільки данні: code, customer

// [{code: 121213, customer: { name: "Katerina" }}]

function customSome(arr, callback) {
  let result = false;

  for (let i = 0; i < arr.length; i++) {
    const criteria = callback(arr[i], i, arr);

    if (criteria) {
      return criteria;
    }
  }

  return result;
}

const defaultSome = [10, 11].some((e) => e > 10);
console.log(defaultSome, "defaultSome");

const customSomeResult = customSome([10, 11], (e) => e > 10);
console.log(customSomeResult, "customSome");

const newTransactions = transactions.map((transaction) => {
  delete transaction.isValid;
  return transaction;
});

console.log(newTransactions, "new transaction");

// advanced solution
const anotherTransaction = transactions.map(({ code, customer }) => ({
  code,
  customer,
}));

console.log(anotherTransaction, "anotherTransaction");

// find

const primitives = [1, 4, 2, "Hello", true];

const numberOne = primitives.find((e, i, arr) => {
  return e === 1;
});

const numberTwo = primitives.find((e) => e === 2);

const helloString = primitives.find((e) => e === "Hello");

console.log(numberOne, "numberOne");
console.log(numberTwo, "numberTwo");
console.log(helloString, "helloString");

// Завдання:

const values = [12.5, 20.4, 1.2, 8.9];
// Знайдіть та поверніть числа:
// 1. 12.5
// 2. 1.2

const objects = [
  { a: 10, b: 12 },
  { a: 12, b: 11 },
  { a: 30, b: 12 },
  { a: 10, b: 19 },
];

const obj1 = objects.find((obj) => {
  return obj.a === 12 && obj.b === 11;
});

const obj2 = objects.find((obj) => {
  return obj.a === 10 || obj.b === 19;
});

console.log(obj1, "obj1");
console.log(obj2, "obj2");

const objectsWith10 = objects.filter((obj) => obj.a === 10 || obj.b === 12);
console.log(objectsWith10, "objectsWith10");

// Завдання:
// const objects = [
//     { a: 10, b: 12 },
//     { a: 12, b: 11 },
//     { a: 30, b: 12 },
//     { a: 10, b: 19 },
//   ];

// Знайдіть об`єкт сума значень якого дорівнює 23
