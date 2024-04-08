// ES-5
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Person.prototype.method = function () {};

const person = new Person("Igor", 24);

console.log(person);

// ES-6

class PersonClass {
  constructor(name, age, skills = []) {
    this.name = name;
    this.age = age;
    this.skills = skills;
  }

  addSkill(skill) {
    this.skills.push(skill);
  }

  removeSkill(skill) {
    this.skills = this.skills.filter((sk) => sk !== skill);
  }
}

const personClassInstance = new PersonClass("Oleg", 26, ["JavaScript"]);
personClassInstance.addSkill("React");
personClassInstance.removeSkill("JavaScript");
console.log(personClassInstance, "personClassInstance");

// Завдання:
// створити клас ProgrammingLanguage (name, programmers, rating)
// створити 2-3 екземпляра
// Додайте метод changeRating(newRating) він має змінювати рейтинг

// Legacy

class Car {
  constructor(brand, price, distance) {
    this.brand = brand;
    this.price = price;
    this.distance = distance;
  }

  ride(distance) {
    this.distance = this.distance + distance;
  }
}

const car = new Car("Audi", 20000, 0);
car.ride(100);
console.log(car, "car");

class SportCar extends Car {
  constructor(brand, price, distance, speed) {
    super(brand, price, distance);

    this.speed = speed;
  }

  // overriding
  ride(distance) {
    this.distance = this.distance + distance + (distance * this.speed) / 100;
  }

  stage(newSpeed) {
    this.speed = newSpeed;
  }
}

const sportCar = new SportCar("Audi TT", 30000, 0, 250);
sportCar.ride(150);
sportCar.stage(300);
sportCar.ride(400);

// Won't work
// car.stage(30);

console.log(sportCar, "sportCar");

// Завдання:
// Person (name, age)
// Programmer (name, age, skills, salary)

// Реалізувати механізм наслідування (extends) Programmer => Person

// описати метод sayHello у Person ("Hello, I am ${this.name}")
// переписати його для Programmer так щоб у тексті вітання була salary
//  ("Hello, I am ${this.name} ${this.salary}")

class Calculator {
  static PI = 3.14;

  constructor() {
    this.operations = [];
    this.currentOperationIndex = 0;
  }

  registerOperation(value) {
    this.operations.push(value);
    this.currentOperationIndex += 1;

    return value;
  }

  prevOperation() {
    // code here
    // має повернути результат попередньої операції, aбо null
    // this.currentOperationIndex
    this.currentOperationIndex -= 1;
    return this.operations[this.currentOperationIndex] || null;
  }

  nextOperation() {
    // code here
    // має повернути результат наступної операції, aбо null
    // this.currentOperationIndex
    this.currentOperationIndex += 1;
    return this.operations[this.currentOperationIndex] || null;
  }

  add() {
    return this.registerOperation(
      Array.from(arguments).reduce((acc, n) => (acc += n), 0)
    );
  }

  diff() {
    const args = Array.from(arguments);
    return this.registerOperation(
      args.slice(1).reduce((acc, n) => (acc -= n), args[0])
    );
  }

  multiply() {
    const args = Array.from(arguments);
    return this.registerOperation(
      args.slice(1).reduce((acc, n) => (acc *= n), args[0])
    );
  }

  divide() {
    const args = Array.from(arguments);
    return this.registerOperation(
      args.slice(1).reduce((acc, n) => (acc /= n), args[0])
    );
  }
}

const calculator = new Calculator();
console.log(calculator.add(1, 2, 7, 4));
console.log(calculator.diff(10, 4, 3));
console.log(calculator.multiply(10, 10, 10));
console.log(calculator.divide(100, 10, 5));

console.log(calculator.operations, "operations");
console.log(calculator.prevOperation(), "prevOperation");
console.log(calculator.prevOperation(), "prevOperation(2)");
console.log(calculator.prevOperation(), "prevOperation(3)");

console.log(calculator.nextOperation(), "nextOperation");
console.log(calculator.nextOperation(), "nextOperation(2)");
console.log(calculator.nextOperation(), "nextOperation(3)");

console.log(Calculator.PI);

console.log(calculator.add(10, Calculator.PI));

class User {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  sayHello() {
    console.log(`Hello from ${this.name}`);
  }

  changeCity(city) {
    this.city = city;
  }
}

const user = new User("Name1", 21, "Kyiv");
console.log(user, "user");
user.sayHello();
user.changeCity("Odessa");
console.log(user);

class AdvancedUser extends User {
  constructor(name, age, city, location, email) {
    super(name, age, city);

    this.location = location;
    this.email = email;
  }

  sayHello() {
    console.log(`Hello from advanced user ${this.name} ${this.email}`);
  }
}

const advancedUser = new AdvancedUser(
  "Name2",
  25,
  "Lviv",
  "Ukraine",
  "email@gmai.com"
);

console.log(advancedUser, "advancedUser");
advancedUser.sayHello();
