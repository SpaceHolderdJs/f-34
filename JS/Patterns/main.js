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
