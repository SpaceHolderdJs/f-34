// this
// console.log(this);

function sum(a, b) {
  return a + b;
}

// Function - Constructor

function Car(brand, color, price) {
  this.brand = brand;
  this.color = color;
  this.price = price;

  this.miles = 0;
  this.owners = [];

  // methods
  this.ride = function (miles) {
    this.miles = this.miles + miles;
  };

  // Завдання:
  // Опишіть метод changeColor(newColor)
  // він має змінити колір автомобіля
  this.changeColor = function (newColor) {
    this.color = newColor;
  };

  this.addOwner = function (owner) {
    // Завдання: дописати логіку додавання owner
    this.owners.push(owner);
  };

  this.removeOwner = function (owner) {
    // Завдання: дописати логіку видалення owner
  };

  return this;
}

function Owner(fullname, age, budget) {
  this.fullname = fullname;
  this.age = age;
  this.budget = budget;

  // опишіть метод birthday, що збільшує вік на +1
  this.birthday = function () {
    this.age = this.age + 1;
  };

  this.buyCar = function (car) {
    if (this.budget >= car.price) {
      this.budget = this.budget - car.price;
      car.addOwner(this);
    } else {
      console.log(
        `Potential owner ${this.fullname} has not enough money to buy the car ${car.brand}`
      );
    }
    // something should be done
  };

  return this;
}

const me = new Owner("Igor Sergienko", 24, 100000);
console.log(me, "me");

const anotherPerson = new Owner("Somebody", 30, 100000);

const car1 = new Car("Ford Mustang", "black", 100000);
console.log(car1, "car1");

me.buyCar(car1);
car1.addOwner(anotherPerson);

console.log(car1, me);

function Star(color) {
  this.color = color;

  this.x = Math.floor(Math.random() * 8000);
  this.y = Math.floor(Math.random() * 5000);

  this.appear = function () {
    document.body.innerHTML += `<div 
    class="star"
    style="top: ${this.y}px; left: ${this.x}px;"
    >
    </div>`;
  };

  this.dissappear = function () {};
}

const testStar = new Star("white");
console.log(testStar, "testStar");
testStar.appear();

// Завдання
// Написати цикл for генерації 100 зірок

for (let i = 0; i < 1000; i = i + 1) {
  const star = new Star("white");
  star.appear();
}
