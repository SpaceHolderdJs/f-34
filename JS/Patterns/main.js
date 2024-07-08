// Patterns

// Singleton

class A {
  static instance = undefined;

  constructor(a) {
    this.a = a;

    if (A.instance) {
      return A.instance;
      //   throw new Error(
      //     "You are allowed to create only one intance of the class"
      //   );
    }

    A.instance = this;
  }

  getA() {
    return this.a;
  }

  incerement() {
    this.a = this.a + 1;
  }
}

// const a = new A(10);
// const valueA = a.getA();

// same function
function getA() {
  const a = new A(10);
  a.incerement();
  return a.getA();
}

// same function
function getValue() {
  const a = new A(10);
  a.incerement();
  return a.getA();
}

console.log(getA());
console.log(getValue());

const a = new A(0);

a.incerement();

console.log(a.getA());

// Завдання:
// Реалізувати оптимізацію створення екземплярів класу
// за допомогою патерну SingleTon

class PostAPI {
  constructor(url, options) {
    this.url = url;
    this.options = options;
  }

  getAll() {
    return fetch(this.url, this.options);
  }

  deleteOne(id) {
    return fetch(`${this.url}/${id}`, { ...options, method: "DELETE" });
  }
}

const postAPI1 = new PostAPI("https://jsonplaceholder.typicode.com/posts");
const postAPI2 = new PostAPI("https://jsonplaceholder.typicode.com/posts");

// Proxy

const userContentWrapper = document.createElement("div");
document.body.appendChild(userContentWrapper);

const renderUser = (user) => {
  userContentWrapper.innerHTML = `
        <div>
            <h1>Name: ${user.name}</h1>
            <h2>City: ${user.city}</h2>
        </div>
    `;
};

const obj = {
  name: "Oleg",
  city: "Kyiv",
  a: 10,
};

renderUser(obj);

const proxyObject = new Proxy(obj, {
  get: (object, key) => {
    console.log("GET");
    console.log(object, key);
  },
  set: (object, key, value) => {
    renderUser({ ...object, [key]: value });
    console.log(object, key, value);
  },
  deleteProperty: (object, key) => {
    console.log("DELETE");
    console.log(object, key);
  },
});

const button = document.createElement("button");
button.textContent = "Change user name";
button.onclick = () => {
  proxyObject.name = "Another name";
};
document.body.appendChild(button);

const button2 = document.createElement("button");
button2.textContent = "Change user city";
button2.onclick = () => {
  proxyObject.city = "Another City";
};

document.body.appendChild(button2);

console.log(proxyObject, "proxyObject");

proxyObject.name;
proxyObject.city;

delete proxyObject.a;

// Завдання:

const data = {
  a: 10,
  b: 20,
};

// реагуйте на зміни даних у data
// якщо data.a при зміні більше за значення data.b
// виводьте помилку trow new Error('Too big value');

const proxyData = new Proxy(data, {
  set: (object, key, value) => {
    console.log("SET OF DATA", object, key, value);
    if (key === "a" && object.b < value) {
      throw new Error("Too big value for a");
    }
  },
});

proxyData.a = 12;

// Factory

// class Figure {
//   constructor(sides, p, s) {
//     this.sides = sides;
//     this.p = p;
//     this.s = s;
//   }
// }

// const square = new Figure(4, 16, 16);
// const rectangle = new Figure(4, 20, 20);
// const triangle = new Figure(3, 15, 33);

function Figure(sides, p, s) {
  if (sides.length === 4 && sides.every((side) => side === sides[0])) {
    return new Square(sides, p, s);
  }

  //  another case
  if (sides.length === 4) {
    return new Rectangle(sides, p, s);
  }

  if (sides.length === 3) {
    return new Triangle(sides, p, s);
  }
}

function Triangle(sides, p, s) {
  this.sides = sides;
  this.p = p;
  this.s = s;

  this.isTriangle = function () {
    return this.sides.length === 3;
  };
}

function Square(sides, p, s) {
  this.sides = sides;
  this.p = p;
  this.s = s;

  this.isSquare = function () {
    return (
      this.sides.length === 4 &&
      this.sides.every((side) => side === this.sides[0])
    );
  };
}

function Rectangle(sides, p, s) {
  this.sides = sides;
  this.p = p;
  this.s = s;

  this.isRectangle = function () {
    return this.sides.length === 4;
  };
}

const square = new Figure([1, 1, 1, 1], 16, 16);
const triangle = new Figure([3, 3, 4], 16, 12);
const rectangle = new Figure([2, 2, 4, 4], 15, 3);

console.log(square.isSquare());
console.log(triangle.isTriangle());
console.log(rectangle.isRectangle());

// Prototype (proto)

function Car(color, name, price) {
  this.color = color;
  this.name = name;
  this.price = price;

  // this.show = function () {
  //   console.log(this);
  // };
}

Car.prototype.show = function () {
  console.log(this);
};

const car1 = new Car("black", "toyota", 12000);
car1.show();

Car.prototype.ride = function (distance) {
  console.log(`The car is riding ${distance}`);
};

const car2 = new Car("blue", "ford", 15555);
car2.show();

car1.ride(1000);

// Object.prototype.hello = function () {
//   console.log(`Hello from`, this);
// };

// const a1 = { a: 10 };
// a1.hello();

class A1 {
  constructor(a) {
    this.a = a;
  }
}

class B1 extends A1 {
  constructor(a) {
    super(a);
  }
}

const b = new B1(100);

A1.prototype.show = function () {
  console.log("Hello", this);
};

b.show();

console.log(b.__proto__);

// Завдання:
// Реалізувати механіку протитоипного наслідування на базі коду:
//

class Customer {
  constructor(name, budget, registrationDate) {
    this.name = name;
    this.budget = budget;
    this.registrationDate = registrationDate;
  }
}

Customer.prototype.buy = function (price) {
  return this.budget - price;
};

class AdvancedCustomer extends Customer {
  constructor(name, budget, registrationDate) {
    super(name, budget, registrationDate);
  }
}

AdvancedCustomer.prototype.buy = function (price, discount) {
  return this.budget - (price - (price * discount) / 100);
};

const customer = new Customer("Oleg", 10000, new Date());
const afterCustomerBuy = customer.buy(500);
console.log(afterCustomerBuy);
console.log(customer);

const advancedCustomer = new AdvancedCustomer("Alina", 1000, new Date());
const afterAdvencedCustomerBuy = advancedCustomer.buy(1000, 10);
console.log(afterAdvencedCustomerBuy);
console.log(advancedCustomer);
// додати метод buy до customer
// buy(price) = > budget - price

// для AdvancedCustomer змінити цей метод так, щоб він приймав знижку
// buy(price, discount) => budget - price (% discount)

// Observer

class Observerable {
  constructor() {
    this.observers = [];
  }

  notify(payload) {
    this.observers.forEach((observer) => observer(payload));
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unscribe(fn) {
    this.observers = this.observers.filter((obsrv) => obsrv !== fn);
  }
}

const observeable = new Observerable();

const registerUser = (user) => {
  console.log(`This user ${user.name} was registered`);
};

const activateUser = (user) => {
  console.log(`This user ${user.name} was actived just now!`);
};

observeable.subscribe(registerUser);
observeable.subscribe(activateUser);

const user = {
  name: "Martin",
  password: 1111111,
};

observeable.notify(user);

const userObservable = new Observerable();

class UserRegistrationComponent {
  constructor(user) {
    this.user = user;

    userObservable.subscribe(this.register);
  }

  register(user) {
    console.log(`This user ${user.name} was registered`);
  }

  render(parent) {
    parent.innerHTML = `
      <div>
        <input />
        <input />
        <button>Create</button>
      </div>
    `;
  }
}

class UserActivationComponent {
  constructor(user) {
    this.user = user;

    userObservable.subscribe(this.activate);
  }

  activate() {
    console.log(`This user was activated from a class ${user.name}`);
  }

  render(parent) {
    parent.innerHTML = `
      <div>
        <input />
        <button>Activate</button>
      </div>
    `;
  }
}

const userRegistrationComponent = new UserRegistrationComponent(user);
const userActivationComponent = new UserActivationComponent(user);

userObservable.notify(user);

// Завдання:

// Створити власний екземплряр observable
// та підписку на події через observer для різних сутностей
// post, user1 на події update і post відповідно

const postAndUserObservable = new Observerable();

const post = {
  update: function ({ title, text }) {
    this.text = text;
    this.title = title;

    console.log(this, "Post updated");
  },
  title: "Title",
  text: "Text...",
};

const user1 = {
  post: function ({ title, text }) {
    post.update({ title, text });
  },

  name: "User1",
};

postAndUserObservable.subscribe(post.update);
postAndUserObservable.subscribe(user1.post);

postAndUserObservable.notify({ title: "Title", text: "Text" });

// class Observerable {
//   constructor() {
//     this.observers = [];
//   }

//   notify(payload) {
//     this.observers.forEach((observer) => observer(payload));
//   }

//   subscribe(fn) {
//     this.observers.push(fn);
//   }

//   unscribe(fn) {
//     this.observers = this.observers.filter((obsrv) => obsrv !== fn);
//   }
// }

// Middleware / Mediator

const validateMiddleware = (data) => {
  const { email, password } = data;
  if (!email.includes("@") || !email.includes(".")) {
    throw new Error("Email is not valid");
  }

  if (!password || password.length <= 3) {
    throw new Error("Password is too short");
  }

  return data;
};

const encryptPasswordMiddleware = (data) => {
  data.password = data.password.replaceAll("1", "$");

  return data;
};

const addNameMiddleware = (data) => {
  data.name = "Igor";

  return data;
};

function saveUser(data, ...middlewares) {
  // save to DB

  let finalData = data;

  middlewares.forEach((middleware) => {
    finalData = middleware(data);
  });

  console.log("This data was saved", finalData);
  return finalData;
}

saveUser(
  { email: "email@gmail.com", password: "1111" },
  validateMiddleware,
  encryptPasswordMiddleware,
  addNameMiddleware
);

const userToDelete = {
  id: 1,
  name: "Igor",
  email: "email@gmail.com",
  password: "$$$$$$",
};

let posts = [
  { title: "Title1", text: "Text1", authorId: 1 },
  { title: "Title2", text: "Text2", authorId: 1 },
  { title: "Title3", text: "Text3", authorId: 2 },
];

// Використовуючи middleware патерн реалізувати:
// 1. Видалення всіх постів користувача
// 2. Розшифрувати пароль $ - 1
// 3. Видалити name

const deletePosts = (user) => {
  posts = posts.filter((post) => post.authorId !== user.id);
  return user;
};

const decryptPassword = (user) => {
  user.password = user.password.replaceAll("$", "1");
};

const deleteName = (user) => {
  delete user.name;
};

function deleteUser(user, ...middlewares) {
  let userFinalData = user;

  middlewares.forEach((middleware) => {
    userFinalData = middleware(user);
  });

  console.log(`User ${user.email} was deleted`);

  return userFinalData;
}

deleteUser(userToDelete, deletePosts, decryptPassword, deleteName);
