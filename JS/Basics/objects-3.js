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

const animals = {
  lion123: {
    id: "lion123",
    species: "Lion",
    age: 6,
    gender: "Male",
    habitat: "Savannah",
    weight_kg: 190,
    diet: "Carnivore",
    lifespan_years: 12,
    conservation_status: "Vulnerable",
    location: {
      latitude: -1.2921,
      longitude: 36.8219,
      region: "Africa",
    },
  },
  elephant456: {
    id: "elephant456",
    species: "African Elephant",
    age: 15,
    gender: "Female",
    habitat: "Grasslands",
    weight_kg: 5000,
    diet: "Herbivore",
    lifespan_years: 60,
    conservation_status: "Vulnerable",
    location: {
      latitude: -4.4419,
      longitude: 15.2663,
      region: "Africa",
    },
  },
  tiger789: {
    id: "tiger789",
    species: "Tiger",
    age: 8,
    gender: "Female",
    habitat: "Tropical Rainforest",
    weight_kg: 150,
    diet: "Carnivore",
    lifespan_years: 10,
    conservation_status: "Endangered",
    location: {
      latitude: 13.4125,
      longitude: 103.866,
      region: "Asia",
    },
  },
  panda101: {
    id: "panda101",
    species: "Giant Panda",
    age: 5,
    gender: "Male",
    habitat: "Temperate Broadleaf and Mixed Forests",
    weight_kg: 120,
    diet: "Herbivore",
    lifespan_years: 20,
    conservation_status: "Vulnerable",
    location: {
      latitude: 30.5928,
      longitude: 103.9526,
      region: "Asia",
    },
  },
  wolf111: {
    id: "wolf111",
    species: "Gray Wolf",
    age: 4,
    gender: "Female",
    habitat: "Taiga",
    weight_kg: 40,
    diet: "Carnivore",
    lifespan_years: 13,
    conservation_status: "Least Concern",
    location: {
      latitude: 61.524,
      longitude: 105.3188,
      region: "Europe",
    },
  },
  penguin222: {
    id: "penguin222",
    species: "Emperor Penguin",
    age: 12,
    gender: "Male",
    habitat: "Antarctic",
    weight_kg: 40,
    diet: "Carnivore",
    lifespan_years: 20,
    conservation_status: "Near Threatened",
    location: {
      latitude: -82.8628,
      longitude: 135,
      region: "Antarctica",
    },
  },
  giraffe333: {
    id: "giraffe333",
    species: "Giraffe",
    age: 10,
    gender: "Male",
    habitat: "Savannah",
    weight_kg: 1200,
    diet: "Herbivore",
    lifespan_years: 25,
    conservation_status: "Vulnerable",
    location: {
      latitude: -4.4419,
      longitude: 34.8522,
      region: "Africa",
    },
  },
  koala444: {
    id: "koala444",
    species: "Koala",
    age: 7,
    gender: "Female",
    habitat: "Eucalypt Woodlands",
    weight_kg: 8,
    diet: "Herbivore",
    lifespan_years: 15,
    conservation_status: "Vulnerable",
    location: {
      latitude: -25.2744,
      longitude: 133.7751,
      region: "Australia",
    },
  },
  rhino555: {
    id: "rhino555",
    species: "White Rhino",
    age: 20,
    gender: "Male",
    habitat: "Grasslands",
    weight_kg: 2300,
    diet: "Herbivore",
    lifespan_years: 40,
    conservation_status: "Near Threatened",
    location: {
      latitude: -23.4162,
      longitude: 31.3659,
      region: "Africa",
    },
  },
  orca666: {
    id: "orca666",
    species: "Orca",
    age: 30,
    gender: "Female",
    habitat: "Marine",
    weight_kg: 5000,
    diet: "Carnivore",
    lifespan_years: 50,
    conservation_status: "Data Deficient",
    location: {
      latitude: 48.5126,
      longitude: -123.383,
      region: "North America",
    },
  },
};

// 1. Поверніть об`єкт лише з тваринами з Африки
// 2. Порахуйте середню вагу всіх тварин
// 3. Видаліть тигра зі списку

function africaOnly(animals) {
  const africaAnimals = {};

  for (const key in animals) {
    const animal = animals[key];

    if (animal.location.region === "Africa") {
      africaAnimals[key] = animal;
    }
  }

  console.log(africaAnimals, "africa");
  return africaAnimals;
}

africaOnly(animals);

function avrgWeight(animals) {
  const result = {
    count: 0,
    sum: 0,
  };

  for (const key in animals) {
    const animal = animals[key];

    result.count = result.count + 1;
    result.sum = result.sum + animal.weight_kg;
  }

  console.log(result.sum / result.count, "avgWeight");
  return result.sum / result.count;
}

avrgWeight(animals);

delete animals.tiger789;
