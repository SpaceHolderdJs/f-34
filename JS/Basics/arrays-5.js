const arr = [10, 20, 30, 40];

const forty = arr.find((n) => n === 40);
// undefined

const indexOfForty = arr.findIndex((element) => element === 50);
// -1
console.log(forty, indexOfForty, arr[indexOfForty], arr[-1]);
console.log(Boolean(-1));

// Don't do this
if (indexOfForty) {
}

if (forty) {
  // do the job
} else {
  // do something to not fail
}

if (indexOfForty !== -1 && arr[indexOfForty]) {
  // do the job
}

// []
[1, 2, 3, 4, 5].filter((e) => e > 10);

// foreach
// filter
// every
// some
// find
// findIndex
// map

// reduce
// splice
// sort

// FIND INDEX
const primitives = [1, 2, 3, 4, 5, 6];
const objects = [{ a: 10 }, { a: 20 }, { a: 10 }, { a: 40 }];

// indexOf
// findIndex

console.log(primitives.indexOf(4));
// Won't work
console.log(objects.indexOf({ a: 10 }));
// Will work
console.log(objects.findIndex((obj) => obj.a === 10));

// Завдання:

const elements = [
  { id: 1, title: "Title 1", value: 90 },
  { id: 2, title: "Title 2", value: 10 },
  { id: 3, title: "Title 3", value: 55 },
  { id: 4, title: "Title 4", value: 90 },
  { id: 5, title: "Title 5", value: 20 },
];

// 1. Знайти індекс елемента з title Title3
// 2. Знайти всі елементи з value більше за 10

// reduce

// [1,2,3,4,5,6] => 21
// [{a: 10}, {a: 90}, {a: 6}] => [10, 90, 6]
// [{a: 90}, {a: 10}, {a: 50}, {a: 10}] => {a: 160}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const sum = numbers.reduce((acc, element) => acc + element, 0);
console.log(sum, "sum");

const arrayOfObjects = [{ a: 10 }, { a: 90 }, { a: 6 }];
const reduced = arrayOfObjects.reduce((acc, object, index) => {
  acc.push(object.a);
  //   another way with index
  //   acc[index] = object.a;
  return acc;
}, []);

console.log(reduced, "reduced");

const sumAsObject = [{ a: 90 }, { a: 10 }, { a: 50 }, { a: 10 }].reduce(
  (acc, object) => {
    acc.a = acc.a + object.a;
    return acc;
  },
  { a: 0 }
);

console.log(sumAsObject, "sumAsObject");

const test = [1, 2, 3, 4].reduce((acc, n) => {
  acc = acc + n;
  return acc;
}, 0);

console.log(test, "test");

function a() {}
const resultA = a();
console.log(resultA, "resultA");

// Завдання
const elements2 = [10, "20", 50, "10", 80, 20, 9, "55"];
// порахуйте суму лише значень типу number (typeof)

typeof 10 === "number";

// Завдання
// ** Напишіть свій reduce

// const elements2 = [10, "20", 50, "10", 80, 20, "90"];
// поверніть на базі масива elements2 наступний object:
// {numbers: 160, strings: 120}

console.log(false ? "true" : "false");

const result = elements2.reduce(
  (acc, el) => {
    // boolean
    const isNumber = typeof el === "number";
    acc[isNumber ? "numbers" : "strings"] += Number(el);
    return acc;
  },
  { numbers: 0, strings: 0 }
);

console.log(result, "result");

// у масиві elements2 порахувати кількість елементів з
// нулями та повернути кількість методом reduce

const result2 = elements2.reduce(
  (acc, el) => (`${el}`.includes(0) ? (acc = acc + 1) : acc),
  0
);

console.log(result2, "result2");

// imutable
// foreach, filter, every, some, find, findIndex, toSorted, toSpliced, map

// mutable
// reduce, sort, splice, reduceRight

// res will be used in the future as memory

const res = [].reduce(() => {}, 0);
