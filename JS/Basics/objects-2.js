const obj = {
  name: "Igor",
  age: 24,
};

const str = "Hello";

// for with iterator for(let i = 0; i < 10; i++)
// for of (for strings and arrays) for (const char of str)
// for in (for objects!!!) for (const key in obj)

// for (const char of str) {
//   console.log(char);
// }

// console.log(obj["name"]);
// console.log(obj["age"]);

for (const key in obj) {
  console.log(key, obj[key]);
}

const numbersObj = {
  a: 10,
  b: 10,
  c: 80,
  d: 100,
  e: 80,
  f: 0,
  g: 15,
};

function checkValues(obj) {
  let sum = 0;

  for (const key in obj) {
    sum = sum + obj[key];
  }

  console.log(sum, "sum");

  if (sum > 50) {
    console.log(true);
  }
}

checkValues(numbersObj);

// Завдання:
function decrease(obj) {
  let sum = 500;

  for (const key in obj) {
    sum = sum - obj[key];
  }

  return sum;
  // відняти всі поля obj від sum та вививести те, що залишиться
}

console.log(decrease({ a: 10, b: 100, c: 200 }));

// Завдання

function filterObjectValues(obj) {
  // опишіть функцію так, щоб якщо вона зустрічає значення
  // менше за 10 - вона змінювала його на undefined

  for (const key in obj) {
    if (obj[key] < 10) {
      delete obj[key];
    }
  }

  console.log(obj);
  return obj;
}

function calculateObjectValues(obj) {
  let sum = 0;

  for (const key in obj) {
    sum = sum + obj[key];
  }

  return sum;
}

const filteredObject = filterObjectValues({ a: 11, b: 7, c: 30 });
const sum = calculateObjectValues(filteredObject);

console.log(sum, "SUM");

const obj1 = {
  a: 10,
  b: 80,
};

delete obj1.b;
delete obj1["a"];

console.log(obj1);

Object;

String;

const str1 = "Hello";

const obj4 = { x: 50, y: 10 };

const keys = Object.keys(obj4);
const values = Object.values(obj4);

console.log(keys);
console.log(values);

const obj5 = Object.create({ message: "Hello" });
console.log(obj5);

const objectToChange = { o: 70 };

Object.freeze(objectToChange);

objectToChange.o = 90;
objectToChange.a = 30;
console.log(objectToChange);

console.log(Object.isFrozen({}), "isFrozen");
console.log(Object.isFrozen(objectToChange), "isFrozen");

function checkAndFreezeObject(obj, allowedKeysQuanity) {
  let keys = 0;

  for (const key in obj) {
    keys = keys + 1;
    console.log(`Iteration`);

    if (keys > allowedKeysQuanity) {
      Object.freeze(obj);
      return;
    }
  }
}

const obj8 = { a: 10, b: 90, c: 90 };

checkAndFreezeObject(obj8, 1);

obj8.a = 100;

console.log(obj8);

const obj9 = { a: 10 };
Object.seal(obj9);

obj9.b = 10;
obj9.a = 11;

console.log(obj9);

console.log(Object.isSealed({}), "isSealed");
console.log(Object.isSealed(obj9), "isSealed");

// Завдання

// function tournament (obj1, obj2) {
// порахуйте суми довжин всіх string значень obj1, obj2
// той obj що має меншу довжину має бути замороженим
// }

// tournament({ message: "Hello", a: 1, b: "14" }, { a: 10, c: "World!" });

// Object.freeze(lenth2 > length1 ? obj1 : obj2);

// if (typeof obj1[key] === "string")

function tournament(obj1, obj2) {
  let sum1 = 0;
  let sum2 = 0;

  for (let key in obj1) {
    if (typeof obj1[key] === "string") {
      sum1 += obj1[key].length;
    }
  }

  for (let key in obj2) {
    if (typeof obj1[key] === "string") {
      sum2 += obj2[key].length;
    }
  }

  if (sum1 < sum2) {
    Object.freeze(obj1);
    console.log("Obj1 loose");
  } else {
    Object.freeze(obj2);
    console.log("Obj2 loose");
  }
}

console.log(
  tournament({ message: "Hello", a: 1, b: "14" }, { a: 10, c: "World" })
);

const data = {
  a: 100,
  b: 300,
  c: 400,
  d: 500,
  e: 600,
  f: 700,
  g: 800,
};

// За допомогою циклу опрацюйте данні так, щоб менші значення були у lowData,
// більші у bigData

function dataManagement(data, border = 300) {
  const lowData = {};
  const bigData = {};

  for (const key in data) {
    const value = data[key];

    if (value <= border) {
      lowData[key] = value;
    } else {
      bigData[key] = value;
    }
  }

  console.log(lowData, bigData);
  return { lowData, bigData };
}

console.log(dataManagement(data));
