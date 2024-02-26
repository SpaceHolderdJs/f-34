const user = {
  id: "qokwo119-2020k1-111",
  name: "John",
  age: 50,
  location: {
    city: { name: "Kyiv", population: "1.5M", avarageSalary: 20000 },
    street: "Drahomanova",
    index: 20021,
  },
};

// Завдання:
// Виведіть сумму age та index користувача

const population = "1.5M";

const id = user.id;
const name = user.name;
const userLocation = user.location;
const street = userLocation.street;

console.log(id, name, userLocation);
console.log(
  street,
  user.location.city.population,
  user["location"]["city"]["name"]
);

const users = {
  "abc123-2024a1-001": {
    id: "abc123-2024a1-001",
    name: "Alice",
    age: 30,
    location: {
      city: { name: "New York", population: "8.4M", averageSalary: 60000 },
      street: "Broadway",
      index: 10001,
    },
  },
  "def456-2024b2-002": {
    id: "def456-2024b2-002",
    name: "Bob",
    age: 45,
    location: {
      city: { name: "Los Angeles", population: "3.9M", averageSalary: 55000 },
      street: "Hollywood Blvd",
      index: 90001,
    },
  },
  "ghi789-2024c3-003": {
    id: "ghi789-2024c3-003",
    name: "Emily",
    age: 35,
    location: {
      city: { name: "London", population: "8.9M", averageSalary: 45000 },
      street: "Baker Street",
      index: "W1U 6EG",
    },
  },
  "jkl012-2024d4-004": {
    id: "jkl012-2024d4-004",
    name: "Michael",
    age: 40,
    location: {
      city: { name: "Tokyo", population: "9.7M", averageSalary: 70000 },
      street: "Shibuya",
      index: "150-0042",
    },
  },
  "mno345-2024e5-005": {
    id: "mno345-2024e5-005",
    name: "Sophia",
    age: 28,
    location: {
      city: { name: "Paris", population: "2.2M", averageSalary: 50000 },
      street: "Champs-Élysées",
      index: "75008",
    },
  },
  "pqr678-2024f6-006": {
    id: "pqr678-2024f6-006",
    name: "David",
    age: 55,
    location: {
      city: { name: "Sydney", population: "5.3M", averageSalary: 65000 },
      street: "George Street",
      index: 2000,
    },
  },
  "stu901-2024g7-007": {
    id: "stu901-2024g7-007",
    name: "Olivia",
    age: 32,
    location: {
      city: { name: "Berlin", population: "3.7M", averageSalary: 48000 },
      street: "Unter den Linden",
      index: 10117,
    },
  },
  "vwx234-2024h8-008": {
    id: "vwx234-2024h8-008",
    name: "Daniel",
    age: 38,
    location: {
      city: { name: "Toronto", population: "2.9M", averageSalary: 57000 },
      street: "Yonge Street",
      index: "M5B 2H1",
    },
  },
  "yza567-2024i9-009": {
    id: "yza567-2024i9-009",
    name: "Isabella",
    agWEe: 25,
    location: {
      city: { name: "Rome", population: "2.8M", averageSalary: 48000 },
      street: "Via dei Fori Imperiali",
      index: "00186",
    },
  },
  "bcd890-2024j10-010": {
    id: "bcd890-2024j10-010",
    name: "Alexander",
    age: 48,
    location: {
      city: { name: "Moscow", population: "12.5M", averageSalary: 55000 },
      street: "Tverskaya Street",
      index: 125009,
    },
  },
};

// Завдання
// -1 Виведіть кожного користувача
// -2 Виведіть середній вік користувачів

function calcAvarageAge(users) {
  const result = {
    count: 0,
    ageSum: 0,
  };

  for (const key in users) {
    const user = users[key];

    result.count = result.count + 1;
    result.ageSum = result.ageSum + user.age;
  }

  return result.ageSum / result.count;
}

const avarageAge = calcAvarageAge(users);
console.log(avarageAge);

// -3 Порахувати середню avarageSalary для міста кожного користувача

function calculateAvarageSalary(users) {
  const result = {
    count: 0,
    avg: 0,
  };

  for (const key in users) {
    const user = users[key];

    result.count++;
    result.avg += user.location.city.averageSalary;
  }

  return result.avg / result.count;
}

const averageSalary = calculateAvarageSalary(users);
console.log(averageSalary, "!!!");

// Завдання:
// Порахувати сумарне population всіх users

console.log(Number("10.5"));

let a = 10;
let b = a;

console.log(a, b);

a = 15;

console.log(a, b);
// ----------------

let obj1 = { c: 10 };
let obj2 = obj1;
let obj3 = obj2;

console.log(obj1, obj2);

obj3.c = 10000;

obj3.name = "Igor";

console.log(obj1, obj2, obj3);
