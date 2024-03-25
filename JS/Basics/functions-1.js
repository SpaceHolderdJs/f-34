function declaredFunction() {}
const expressedFunction = function () {};

function sayHello(name = "", surname = "") {
  console.log(`Hello ${name} ${surname}`);
}

function sayHello2(name, surname) {
  if (name && surname) {
    console.log(`Hello ${name} ${surname}`);
  } else if (!surname && name) {
    console.log(`Hello ${name}`);
  } else {
    console.log("Hello");
  }
}

sayHello("Igor", "Sergienko");
sayHello("Igor");
sayHello();

function sum() {
  return Array.from(arguments).reduce((acc, arg) => acc + arg, 0);
}

const sum1 = sum(10, 11, 90, 10, 22, 11, 22, 49, 19, 91, 91, 1, 2);
console.log(sum1);

main3();

// Function declaration
// this +
function main3() {
  console.log("Main3");
}

// Function arrow expression
// this -
const main4 = () => {
  console.log(arguments, "arguments");
  console.log("Main4 (arrow)");
};

// main4();

// Function expression
// this +
const main5 = function () {
  console.log(arguments, "arguments");
};

main5();

// Завдання:
// Написати функцію diff, що примає числа
// функція має від першого прийнятого числа
// відняти всі інші числа

// diff(100, 50, 2, 1, 4)
// 43
// function declaration

function diff(first) {
  return Array.from(arguments)
    .slice(1)
    .reduce((acc, n) => acc - n, first);
}

const diff1 = diff(100, 50, 2, 1, 4);
console.log(diff1);

// Arrow function

const arrow = (e) => {
  console.log(e);
};

[1, 2, 32, 43].forEach(() => {});

[].forEach(function () {
  return 1;
});

// self - called

let c = 10;

(function (a, b) {
  let c = 100;
  console.log(c);
})(10, 20);

// Завдання
// Напишіть функцію, що примає масив чисел
// вона має для кожного числа створити функцію, що буде потрапляти у масив
// функція що створена має повертати те число, яке було у масиві

// task3([1,2,3,4,5]);
// [() => 1, () => 2, () => 3, () => 4, () => 5];

const task3 = (function () {
  return [1, 2, 3, 4, 5].map((num) => {
    const fn = () => num;
    return fn;
  });
})();

console.log(task3);

task3.forEach((fn) => {
  console.log(fn());
});

// this

// globally, this = window
console.log(this, "this");

function functionWithThis() {
  console.log(this, "this from function");

  return {
    a: 10,
    showA: function () {
      console.log(this, "this from function in object");
    },
  };
}

const returnValue = functionWithThis();
returnValue.showA();

const obj = {
  a: 10,
  b: 20,
  c: 30,
  showA: function () {
    console.log(this.a);
  },
  showB: function () {
    console.log(this.b);
  },
  showC: function () {
    console.log(this.c);
  },
};

obj.showA();
obj.showB();
obj.showC();

// const obj = {
//     a: 10,
//     b: 20,
//     c: 30,
//     showA: function () {
//       console.log(this.a);
//     },
//     showB: function () {
//       console.log(this.b);
//     },
//     showC: function () {
//       console.log(this.c);
//     },
//   };

// Завдання: створіть метод show, що приймає ключ який потрібно вивести
// obj.show("a"); - 10
// obj.show("b"); - 20
// obj.show("c"); - 30

// Instances

function OurFirstConstructor() {
  this.a = 10;
}

const instance = new OurFirstConstructor();

console.log(instance, "instance");
