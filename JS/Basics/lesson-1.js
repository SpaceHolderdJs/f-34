// Data types

// Primitives

// Numbers: 1 2 3 123 (BigInt)
Number;
12;

// String: "Hello world" '123'
String;
("Hello world");

// Boolean: true/false
Boolean;
true;
false;

// Undefined: undefined
undefined;

// Null: null
null;

// Symbol: Symbol
// -

// BigInt: 1
// -

// Object - orientired data types:

// Object: {}, [], function() {}, Map, Set, null.

const a = 10;
let b = 20;
// var c = 10; - not useful

const sum = ((a + b) * 10) / 5;

console.log(sum);
console.log(100 / 5);

const message = "Hello world!";
let message2 = "I am programmer 😎";

console.log(message);
console.log(message2);
console.log("Igor");

console.log(message + message2);
// console.log(message - message2); Not works

const isAdmin = true;
const isUser = false;

let user = undefined;
console.log(user);

user = "Igor";
console.log(user);

user = "Igor07";
console.log(user);

user = null;
console.log(user);

let counter = 0;

counter = counter + 1;
counter = counter + 100;

console.log(counter);

let greetingMessage = "";
greetingMessage = greetingMessage + "H";
greetingMessage = greetingMessage + "e";
greetingMessage = greetingMessage + "l";
greetingMessage = greetingMessage + "l";
greetingMessage = greetingMessage + "o";

console.log(greetingMessage);

// Object

const obj = {
  name: "Igor",
  age: 24,
  isAdmin: true,
  info: undefined,
};

console.log(obj);
console.log(obj.name);

console.log(window);

window.console.log("Hello from window");
