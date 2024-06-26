// [], {}

// Indexing
// Key - value approach

const arr = [1, 2, 3, 4, 5, 6];
const obj = {
  a: 10,
};

// Linked list, Queue, Hash-map, Array, List, Literal, Object, Map, Set

const users = [
  { id: "zaa-dmamda-amdkam", name: "Igor" },
  { id: "kalskals-saskal-zal", name: "Oleg" },
  { id: "doadpaop-adka-za", name: "Alina" },
];

const userById = users.find((user) => user.id === "zaa-dmamda-amdkam");

// for (const user of users) {
//     if (user.id === 'zaa-dmamda-amdkam') {
//         return user;
//     }
// }

// Завдання:
// Написати логіку, що з масиву користувачів повертає {userId: userData}
const sol1 = () => {
  const usersData = {};

  users.forEach((user) => {
    usersData[user.id] = user;
  });

  return usersData;
};

const sol2 = () => {
  return users.reduce((acc, user) => {
    acc[user.id] = user;

    return acc;
  }, {});
};

console.log(sol1(), "sol1");
console.log(sol2(), "sol2");

const optimizedUsers = {
  "zaa-dmamda-amdkam": { id: "zaa-dmamda-amdkam", name: "Igor" },
  "kalskals-saskal-zal": { id: "kalskals-saskal-zal", name: "Oleg" },
  "doadpaop-adka-za": { id: "doadpaop-adka-za", name: "Alina" },
};

const userById2 = optimizedUsers["zaa-dmamda-amdkam"];

const usersData = Object.values(optimizedUsers);
const usersId = Object.keys(optimizedUsers);

class UserBS {
  constructor(users) {
    this.users = users;
  }

  getUser(id) {
    return this.users[id];
  }

  updateUser(id, data) {
    this.users[id] = { ...this.users[id], ...data };
  }

  deleteUser(id) {
    delete this.users[id];
  }

  createUser(id, data) {
    this.users[id] = { ...data, id };
  }
}

const usersBs = new UserBS(optimizedUsers);

usersBs.updateUser("kalskals-saskal-zal", { name: "Boris" });
usersBs.deleteUser("kalskals-saskal-zal");
const userById3 = usersBs.getUser("zaa-dmamda-amdkam");

console.log(usersBs, "usersBs");
console.log(userById3);

// Orders
// Queue
// FIFO standart

const winners = [
  { place: "1st", car: "Totyota", license: 11 },
  { place: "2st", car: "Car2", license: 15 },
  { place: "3st", car: "Ford", license: 13 },
];

const awardsTo = (winners) => {
  const awardedWinners = [];

  [...winners].forEach(() => {
    const winner = winners.shift();
    winner.prize = "Prize";
    awardedWinners.push(winner);
  });

  return awardedWinners;
};

console.log(awardsTo(winners));

Map;
Set;
Object;
Array;

// Set
const set = new Set();

set.add("Igor");
set.add("Oleg");
set.add("Viktoria");
set.add("Oleg");

const setObj = { a: 10 };

set.add(setObj);
set.add({ a: 11 });
set.add(setObj);

set.delete("Igor");
set.delete(setObj);

console.log(set.size, "size");

set.clear();

console.log(set.has(setObj));

console.log(set, "set");

const generateCoords = () => {
  return {
    x: Math.floor(Math.random() * 10),
    y: Math.floor(Math.random() * 10),
    z: Math.floor(Math.random() * 10),
  };
};

const minimizedCoords = new Set();

for (let i = 0; i < 100; i++) {
  const generatedCoords = generateCoords();
  const { x, y, z } = generatedCoords;

  minimizedCoords.add(`${x}${y}${z}`);
}
console.log(minimizedCoords, "minimizedCoords");

const coords = [];

minimizedCoords.forEach((value) => {
  const [x, y, z] = value;
  coords.push({ x, y, z });
});

console.log(coords, "coords");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 3, 1, 6, 3, 1];

const uniqueNumbers = Array.from(new Set(numbers));

console.log(uniqueNumbers, "uniqueNumbers");

// Завдання:
const orders = [
  { item: "Socks", price: 30 },
  { item: "TShirt", price: 20 },
  { item: "Socks", price: 30 },
  { item: "Shorts", price: 70 },
];

// Відсіяти лише унікальні товари у orders

const itemsTitle = orders.map((order) => order.item);
console.log(itemsTitle, "itemstitle");

const uniqueOrders = new Set(itemsTitle);
const uniqueOrdersData = [];

console.log(uniqueOrders, "uniqueOrders");

uniqueOrders.forEach((value) => {
  const orderIndex = orders.findIndex((order) => order.item === value);

  const orderData = { price: orders[orderIndex].price, item: value };
  uniqueOrdersData.push(orderData);
});

// HW

const orders2 = [
  { item: "Socks", price: 30 },
  { item: "TShirt", price: 20 },
  { item: "Socks", price: 30 },
  { item: "Shorts", price: 70 },
];

// {"Socks": {...item}}

const mappedOrders = orders2.reduce((acc, order) => {
  acc[order.item] = order;

  return acc;
}, {});

console.log(mappedOrders, "mappedOrder");

const names = ["Igor", "Nastya", "Oleg", "Max", "Max"];

console.log(Array.from(new Set(names)), "unique names");
