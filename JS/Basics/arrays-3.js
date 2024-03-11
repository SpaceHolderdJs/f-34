const numbers = [1, 2, 3, 4, 5];
const strings = ["a", "b", "c"];

for (const element of numbers) {
  console.log(element);
}

// callback
numbers.forEach(function () {});

numbers.forEach((element) => console.log(element, "element from foreach"));

// Завдання:
// const strings = ["a", "b", "c"];
// Опишіть forEach по масиву strings

const fn = (a, b) => {
  return a + b;
};

function fn1(a, b) {
  return a + b;
}

console.log(fn(10, 20), fn1(10, 90));

strings.forEach((str, i, arr) => console.log(str, i, arr));

const uppercasedStrings = strings.map((str) => {
  return str.toUpperCase();
});

const uppercasedStrings2 = strings
  .map((str) => str.toUpperCase())
  .forEach((str) => console.log(str));

//   Завдання:
const names = ["alex", "john", "bob"];
// трансформувати масив так, щоб кожен елемент починався з великої літери

// function a("".slice(1), b, c) {}

// ["igor", "ivan", "oleg"].map((element) => {
//   console.log(element.at(0).toUpperCase() + element.slice(1));
// });

const arrayOfObjects = [{ a: 10 }, { a: 11 }, { a: 12 }];

arrayOfObjects.forEach((e) => {
  console.log(e.a);
});

const arryOfObjectsAfter = arrayOfObjects.map((obj) => {
  obj.a = obj.a + 1;
  return obj;
});

console.log(arryOfObjectsAfter, "after");
console.log(arrayOfObjects.map((obj) => ({ ...obj, a: obj.a + 1 })));

// Завдання:
const coords = [
  { x: 2, y: 70, z: 80 },
  { x: 10, y: 20, z: 30 },
  { x: 20, y: 70, z: 60 },
  { x: 10, y: 8, z: 30 },
];

// Трансофрмуйте масив так,
// щоб у кожного елемнта був ключ sum зі значенням суми 3 його координат

// Поверніть з масива coords масив вигляду
// [{x: 2}, {x: 10}, {x: 20}, {x: 10}]

// forEach, map - immutable

// filter
const tens = [10, 20, 30, 40, 50, 60, 1, 2, 3, 4];
const biggerThan30 = [];

for (const n of tens) {
  if (n > 30) {
    biggerThan30.push(n);
  }
}

console.log(biggerThan30, "bigger than 30");

const biggerThan30WithFilter = tens.filter((number) => number > 30);
console.log(biggerThan30WithFilter, "with filter", tens);

const onlyWithZeros = tens
  .map((n) => {
    return n.toString();
  })
  .filter((str) => true)
  .forEach((e) => {
    console.log(+e);
  });

const users = [
  { name: "Igor", age: 24, city: "Kyiv" },
  { name: "Oleg", age: 34, city: "Kharkiv" },
  { name: "Alex", age: 12, city: "Kyiv" },
  { name: "Kate", age: 20, city: "Odessa" },
  { name: "Karina", age: 18, city: "Kyiv" },
];

const adultUsers = users.filter((user) => {
  return user.age >= 18;
});

console.log(adultUsers, "adultUsers");

const adultUsersFromKyiv = users.filter((user) => {
  return user.age >= 18 && user.city === "Kyiv";
});

console.log(adultUsersFromKyiv, "adultUsersFromKyiv");

// Завдання:
// const users = [
//     { name: "Igor", age: 24, city: "Kyiv" },
//     { name: "Oleg", age: 34, city: "Kharkiv" },
//     { name: "Alex", age: 12, city: "Kyiv" },
//     { name: "Kate", age: 20, city: "Odessa" },
//     { name: "Karina", age: 18, city: "Kyiv" },
//   ];

// 1. Поверніть користувачів, яким 18+, або які з Києва
// 2. Поверніть користувачів ім`я яких містить літеру К

// find, findIndex, every, reduce, some, sort, splice

const obj = { a: 10 };
obj.a;
obj["a"];

const { a } = obj;

const nums = [1, 2, 3, 4, 5];
nums[0];
nums[1];

const [firstElem, secondElem] = nums;
console.log("nums", firstElem, secondElem);

const [l1, l2, l3, l4, l5] = "Hello";

console.log(l1, l2, l3, l4, l5);
