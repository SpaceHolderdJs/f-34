// SOLID

// S - Single Responsibility
// O - Open - Closed Principe
// L - Liskov Substitution Principe
// I - Interface Segragation
// D - Dependency Inversion

// S

const calculateMetrics = (a, b, metric) => {
  if (metric === "s") {
    return a * b;
  }

  if (metric === "p") {
    return 2 * a + 2 * b;
  }

  if (metric === "r") {
    return;
  }
};

console.log(calculateMetrics(2, 4, "p"));
console.log(calculateMetrics(4, 2, "s"));

const calcluateP = (a, b) => 2 * a + 2 * b;
const calcluateS = (a, b) => a * b;
const calcluateR = (p) => p;

// const calculateS = () => {};

class API {
  constructor(url, headers, options) {
    this.url = url;
    this.headers = headers;
    this.options = options;
  }

  // posts

  getAllPosts() {
    return fetch(this.url, { ...this.options });
  }

  getPost() {
    return fetch(this.url, { ...this.options });
  }

  createPost() {
    return fetch(this.url, { ...this.options });
  }

  deletePost() {
    return fetch(this.url, { ...this.options });
  }

  // users

  getUsers() {
    return fetch(this.url, { ...this.options });
  }

  getUser() {
    return fetch(this.url, { ...this.options });
  }

  createUser() {
    return fetch(this.url, { ...this.options });
  }

  deleteUser() {
    return fetch(this.url, { ...this.options });
  }

  // images...
}

const api = new API("https://jsonplaceholder.typicode.com", {}, {});

class UserAPI {
  constructor(url, headers, options) {}

  getAllUsers() {}

  // ...
}

class PostAPI {
  constructor(url, headers, options) {}

  getAllPosts() {}

  //   ...
}

const usersAPI = new UserAPI();
const postsAPI = new PostAPI();

// O

class BaseBank {
  constructor(abonents) {
    this.abonents = abonents;

    this.invoices = [];
    this.cards = [];

    // new functionality
    this.installments = [];
  }

  invoice(proceeder, reciever, amount) {
    this.cards.push({ proceeder, reciever, amount });
  }

  createCard(balance, abonent) {
    this.cards.push({
      balance,
      owner: abonent.id,
      number: Math.random() * 100000000,
    });
  }

  destoryCard(number) {
    // ...
  }
}

class InstallmentBank extends BaseBank {
  constructor(abonents, installments) {
    super(abonents);

    this.installments = installments;
  }

  createCard(balance, abonent, cardType) {
    this.cards.push({ balance, abonent, cardType });
  }

  destoryCard(number) {
    const card = this.cards.find((card) => card.number === number);

    if (card.cardType === "credit" && card.balance <= 0)
      throw new Error("You can`t close this credit card");

    this.cards = this.cards.filter((card) => card.number !== number);
  }

  // NEW METHODS...
}

// L

const usersData = {};

const userData = {
  name: "Igor",
  age: 24,
  email: "email@gmail.com",
  password: "password",
  location: {
    city: "Kyiv",
    country: "Ukraine",
  },
};

const userDataPrototype = {
  name: "Oleg",
  age: 30,
};

const setUserInfo = (user) => {
  usersData[user.name] = user;
};

setUserInfo(userData);
setUserInfo(userDataPrototype);
console.log(usersData);

const avgAge =
  Object.values(usersData).reduce((acc, user) => (acc += user.age), 0) /
  Object.values(usersData).length;

console.log(avgAge, "avgAge");

// I

class User {
  constructor(name, age, city, email, password, id) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.email = email;
    this.password = password;
    this.id = id;
  }
}

const userInstance = new User({
  id: 1,
  name: "Igor",
  age: 24,
  email: "email@gmail.com",
  password: "asasasa",
  city: "Kyiv",
});

class LoginUserData {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}

const loginData = new LoginUserData("email@gmail.com", "111111");

const loginUser = (loginData) => {
  // login process
  // will need email and password
};

// wrong
loginUser(userInstance);

// rigth
loginUser(loginData);

const registerUser = (registerData) => {
  // register process
  // will need email, name and password
};

class RegisterUserData {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

const registerData = new RegisterUserData(
  "Igor",
  "email2@gmail.com",
  "password"
);

// wrong
registerUser(userInstance);

// right
registerUser(registerData);

// D

// In TS interfaces and types

const dataExample = {
  users: [{ name: "", password: "" }],
  posts: [{ title: "", text: "" }],
  admin: { name: "", password: "", isAdmin: true },
};

class Data {
  constructor(data = dataExample) {
    this.data = data;
  }

  isUserAdmin(user = dataExample.users[0]) {
    return data.admin.name === user.name;
  }

  setAdmin(admin = dataExample.admin) {
    this.data.admin = admin;
  }
}

const data = new Data({
  users: [{ name: "Igor", password: "11111" }],
  posts: [{ title: "Hello", text: "text" }],
  admin: { name: "Admin", password: "password", isAdmin: true },
});
