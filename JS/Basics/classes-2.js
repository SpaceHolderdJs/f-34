// OOP

// legacy
// polimorphism
// incapsulation

// LEGACY

// extensional
// class User {
//   constructor(email, password) {
//     this.email = email;
//     this.password = password;
//   }
// }

// // Admin => User - wrong
// // User => Admin - right way!

// class Admin extends User {
//   constructor(email, password, isAdmin) {
//     super(email, password);
//     this.isAdmin = isAdmin;
//   }
// }

// polimorphic

class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  ride() {
    console.log(`The car is riding!`);
  }
}

const car = new Car("Toyota", "black");
car.ride();

class Bus extends Car {
  constructor(brand, color) {
    super(brand, color);
  }

  ride() {
    console.log(`Beep-beep. The bus is riding`);
  }
}

const bus = new Bus("Mersedess", "gray");
bus.ride();

// Завдання:

// (id, biller, reciever)
class Invoice {
  constructor(id, biller, reciever) {
    this.id = id;
    this.biller = biller;
    this.reciever = reciever;
  }
}
// (id, biller, reciever, amount)
class DetailedInvoice extends Invoice {
  constructor(id, biller, reciever, amount) {
    super(id, biller, reciever);
    this.amount = amount;
  }
}

// 1. Написати наслідування на розширення

// name, age, email, credits
class Subject {
  constructor(name, age, email, credits) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.credits = credits;
  }
  // info - show info

  info() {
    console.table(this);
  }
}

// name, age, email, credits
class Reciever extends Subject {
  constructor(name, age, email, credits) {
    super(name, age, email, credits);
  }
  // info - same
  // operate(detailedInvoice) - shows detailed invoice
  operate(detailedInvoice) {
    console.log(`Detailed invoice`);
    console.table(detailedInvoice);
  }
}

// name, age, email, credits
class Biller extends Reciever {
  // info - same
  constructor(name, age, email, credits) {
    super(name, age, email, credits);
  }

  // operate(invoice) - shows only invoice ID
  operate(invoice) {
    console.log(`Invoice ID: ${invoice.id}`);
  }
}

// 2. Описати наслідування
// Subject => extensional => Reciever => polimorphic => Biller
const biller = new Biller("Biller1", 22, "biller-email@gmail.com", 14000);
const reciever = new Reciever(
  "Reciever1",
  24,
  "reciever-email@gmail.com",
  20000
);

const invoice = new Invoice(1, biller, reciever);
const detailedInvoice = new DetailedInvoice(2, biller, reciever, 2000);

reciever.info();
reciever.operate(detailedInvoice);

biller.info();
biller.operate(invoice);

// Polimorphism

class Animal {
  constructor(name, animalType) {
    this.name = name;
    this.animalType = animalType;
  }

  voice() {
    console.log(`Voice from ${this.animalType} ${this.name}`);
  }
}

const cat = new Animal("Barsik", "cat");
cat.voice();

const dog = new Animal("Pluto", "dog");
dog.voice();

const fish = new Animal("Bruno", "fish");
fish.voice();

class Fish extends Animal {
  constructor(name, animalType) {
    super(name, animalType);
  }

  voice() {
    console.log(`I can't speak, I am fish`);
  }
}

const fish2 = new Fish("Fish2", "fish");
fish2.voice();

// interface
// type
// private public readonly static
// legacy
// Generic<T, P>

// incapsulation

class Application {
  #accounts;

  constructor(accounts) {
    this.#accounts = accounts;
  }

  addAccount(account) {
    if (!account.id) throw new Error("This account has not id");
    this.#accounts.push(account);
  }

  removeAccount(account) {
    this.#accounts = this.#accounts.filter(({ id }) => id !== account.id);
  }

  getAccounts() {
    return this.#accounts;
  }
}

const applicaton = new Application([]);
console.log(applicaton.accounts);

applicaton.addAccount({
  id: 1,
  email: "email1@gmail.com",
  password: "password",
});
// applicaton.#accounts.push({ email: "email1@gmail.com", password: "password" });
applicaton.removeAccount({ email: "email1@gmail.com", password: "password" });

console.log(applicaton);
// console.log(applicaton.#accounts);
console.log(applicaton.getAccounts(), "accounts (private)");
const accounts = applicaton.getAccounts();

accounts.push({ email: "wrong-account@gmail.com", password: "password" });
// const accountsAfterFilter = accounts.filter((account) => account.id !== 1);

// console.log(accountsAfterFilter, applicaton);

console.log(applicaton.getAccounts(), accounts);
// console.log(applicaton);

// Завдання:

// name, email, private(budget)
class User {
  #budget;

  constructor(name, email, budget) {
    this.name = name;
    this.email = email;
    this.#budget = budget;
  }

  increase(amount) {
    this.#budget = this.#budget + amount;
  }

  decrease(amount) {
    this.#budget = this.#budget - amount;
  }

  getBudget() {
    return this.#budget;
  }

  getInfo() {
    console.table(this);
  }
}

const user = new User("Igor", "email@gmail.com", 100000);

user.increase(1000);
user.getInfo();

// 1. Описати конструктор класу
// 2. Описати методи incerease(amount)/decrease(amount) budget
// 3. Описати метод getBudget
// 4. Описати метод getInfo (виводить всі дані в консоль)
