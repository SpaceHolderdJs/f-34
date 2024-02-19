const user = { name: "Igor", age: 24, email: "email@gmail.com" };
const user2 = { name: "Oleg", age: 33, email: "email2@gmail.com" };

const obj = { b: false };
// key (name, age, email)
// value (Igor, 24, email@gmail.com)

const name = "Igor";
const age = 24;
const email = "email@gmail.com";

console.log(`${name} ${age} ${email}`);
console.log(`${user.name} ${user.age} ${user.email}`);

obj.a = 100;
obj.b = true;
obj.b = ":)";

console.log(obj, "obj");

Object;

const obj2 = new Object({ a: 10 });
console.log(obj2);

// Завдання
// створіть свій object з інформацією про name, surname, age, email, password
// виведіть данні у консоль

const key = "Igor".toUpperCase();

const obj3 = {
  [key]: 10,
  ["a".concat("b").toUpperCase()]: 11,
};

console.log(obj3);
console.log(obj3["AB".toUpperCase()]);
console.log(obj3.AB);

obj3["AB"] = 10000;
// obj3.AB = 100;

console.log(obj3);
console.table(obj3);

const str = new String("Hello");
console.log(str);
console["table"](str);
console.log(str[0]);

obj3[0] = "H";
obj3[1] = "e";
obj3[20 / 10] = "l";

console.log(obj3);
console.log(obj3[0]);

const obj4 = {};
console.log(obj4.name, "!!!");

// Завдання:
//
function textAnalytics(str) {
  // повернути кількість кожної літери або символу у строці str
  const result = {};

  for (const char of str) {
    if (result[char]) {
      result[char] = result[char] + 1;
    } else {
      result[char] = 1;
    }
  }

  return result;
}

const result = textAnalytics("Hello");
console.log(result);

const result2 = textAnalytics("Hello world!");
// => {H: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1, "!": 1, " ": 1}
console.log(result2);

const a = 10;
const b = "String";
const valueOftheName = "Name";

const object1 = { a: a, b: b };
const object2 = { a, b, c: 10, [10 - 1]: "nine", valueOftheName };

console.log(object1, object2);

function sum(a, b) {
  return { a, b, sum: a + b };
}

const sumResult = sum(10, 20);
console.log(sumResult.a, sumResult.b, sumResult.sum);

function calculate(a, b) {
  const operations = "+-*/";
  const results = { a, b };

  for (const operation of operations) {
    switch (operation) {
      case operations[0]:
        results["+"] = a + b;
        break;

      case operations[1]:
        results["-"] = a - b;
        break;

      case operations[2]:
        results["*"] = a * b;
        break;

      case operations[3]:
        results["/"] = a / b;
        break;

      default:
        "";
    }
  }

  return results;
}

const calculation = calculate(70, 5);
console.log(calculation);

console.log(calculation["+"]);
console.log(calculation["-"]);
console.log(calculation["/"]);
console.log(calculation["*"]);

console.log(calculation.a, calculation.b);
