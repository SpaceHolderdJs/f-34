Object;

const car = {
  name: "Ford",
  model: "Mustang",
  price: 40000,
  color: "black",
};

// car.vin = 1000020101;

// not allowed

Object.defineProperty(car, "vin2", {
  value: 7777777777,
  enumerable: false,
  writable: true,
  configurable: true,
});

console.log(Object.keys(car));
console.log(Object.values(car));

console.log(car.vin2, "vin2");
car.vin2 = 9000000000;
console.log(car.vin2, "vin2");

delete car.vin2;
console.log("after delete", car);

Object.defineProperty(car, "private", {
  value: "private",
});

console.log(car);

for (const key in car) {
  console.log(key, car[key]);
}

// // Завдання:

// const obj1 = { a: 10 };
// // додайте значення b до obj1  так, щоб його ігнорували цикли

// Опишіть метод keys(obj) - він має повертати всі
// ключі obj через кому у вигляді строки

function keys(obj) {
  let objectKeys = "";

  for (const key in obj) {
    objectKeys = objectKeys.concat(`${key}, `);
  }

  console.log(objectKeys.slice(0, objectKeys.length - 2), "keys");
  return objectKeys.slice(0, objectKeys.length - 2);
}

keys(car);
// a, b, c, d, price, color

// Завдання
// Написати свій freeze (існуючі ключі НЕ можна міняти)
const obj2 = { a: 10 };
// Object.freeze(obj2);

obj2.a = 15;

console.log(obj2);

function freeze(obj) {
  for (const key in obj) {
    Object.defineProperty(obj, key, {
      value: obj[key],
      writable: false,
      enumerable: true,
      configurable: true,
    });
  }
}

freeze(obj2);

obj2.a = 100000;
obj2.b = 90;

console.log(Object.entries(obj2));
console.log(Object.fromEntries([["a", 30]]));

console.log({ a: 10 }.hasOwnProperty("a"));
const obj3 = { b: 10 };
obj3.hasOwnProperty();

const user = {
  id: 0,
  name: "Admin",
  password: 123243,
};

const adminUser = {
  id: 1,
  name: "Admin",
  password: 123243,
  isAdmin: true,
};

console.log(user.isAdmin);
console.log(adminUser.isAdmin);

if (user.hasOwnProperty("id")) {
  console.log(user.id, "USER ID");
}

if ("id" in user) {
  console.log(user.id, "USER ID");
}

if ("loan" in user) {
}

typeof user === "object";

function hasOwnProperty(object, keyTolookFor) {
  let keys = ``;

  for (const key in object) {
    keys = keys + `${key}|`;
  }

  // console.log(keys, "keys");

  return keys.includes(keyTolookFor);
}

console.log(hasOwnProperty({ a: 10 }, "b"));

// Destruction of objects

const dataFromServer = {
  a: 10,
  b: 10,
  c: 10,
};

const { a: a1, b, c } = dataFromServer;

console.log(a1, b, c);

const o1 = { a: 1, b: 2, c: 3, d: 4 };
const o2 = { a: 1, d: 4 };

// виведіть за допомогою циклу всі спільні ключі о1 та о2 (in)

function solution(o1, o2) {
  const result = {};

  for (const key in o1) {
    if (key in o2) {
      result[key] = o1[key];
    }
  }
  console.log(result, "result");
  return result;
}

solution(o1, o2);
