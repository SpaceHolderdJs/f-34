// Set
// Map

const map = new Map();
const obj = {
  true: "boolean",
};

console.log(obj);

map.set("primitiveKey", "primitiveValue");
map.set(true, "boolean");
map.set({ a: 10 }, { b: 10 });

console.log(map);
console.log(map.get("primitiveKey"));

const scheduleObj = {
  "2024-06-25": [
    {
      name: "Boeing 747",
      capacity: 416,
      flightTime: 14,
    },
    {
      name: "Airbus A320",
      capacity: 180,
      flightTime: 6,
    },
    {
      name: "Embraer E190",
      capacity: 100,
      flightTime: 5,
    },
    {
      name: "Boeing 787 Dreamliner",
      capacity: 242,
      flightTime: 12,
    },
    {
      name: "Airbus A380",
      capacity: 555,
      flightTime: 15,
    },
  ],
  "2024-06-26": [
    {
      name: "Boeing 737",
      capacity: 215,
      flightTime: 7,
    },
    {
      name: "Airbus A350",
      capacity: 300,
      flightTime: 13,
    },
    {
      name: "Bombardier CRJ900",
      capacity: 90,
      flightTime: 3,
    },
    {
      name: "Boeing 777",
      capacity: 396,
      flightTime: 11,
    },
    {
      name: "Airbus A330",
      capacity: 335,
      flightTime: 10,
    },
  ],
  "2024-06-27": [
    {
      name: "Boeing 767",
      capacity: 269,
      flightTime: 8,
    },
    {
      name: "Airbus A321",
      capacity: 220,
      flightTime: 5,
    },
    {
      name: "Embraer E175",
      capacity: 76,
      flightTime: 4,
    },
    {
      name: "Boeing 737 MAX",
      capacity: 200,
      flightTime: 6,
    },
    {
      name: "Airbus A319",
      capacity: 140,
      flightTime: 3,
    },
  ],
  "2024-06-28": [
    {
      name: "Boeing 757",
      capacity: 239,
      flightTime: 9,
    },
    {
      name: "Airbus A340",
      capacity: 380,
      flightTime: 13,
    },
    {
      name: "Bombardier Q400",
      capacity: 78,
      flightTime: 2,
    },
    {
      name: "Boeing 787-9",
      capacity: 290,
      flightTime: 12,
    },
    {
      name: "Airbus A350-1000",
      capacity: 410,
      flightTime: 14,
    },
  ],
  "2024-06-29": [
    {
      name: "Boeing 727",
      capacity: 189,
      flightTime: 6,
    },
    {
      name: "Airbus A380-800",
      capacity: 575,
      flightTime: 16,
    },
    {
      name: "Embraer E195",
      capacity: 124,
      flightTime: 5,
    },
    {
      name: "Boeing 737-800",
      capacity: 189,
      flightTime: 7,
    },
    {
      name: "Airbus A320neo",
      capacity: 195,
      flightTime: 6,
    },
  ],
};

const flightDates = {};

const schedule = new Map();

for (const flightDate in scheduleObj) {
  flightDates[flightDate] = new Date(flightDate);
  schedule.set(flightDates[flightDate], scheduleObj[flightDate]);
}

class FlightBS {
  static schedule = schedule;

  static getAllPlanesForDate = (date) => {
    return FlightBS.schedule.get(flightDates[date]) || [];
  };

  static getAllSittingPlacesForDate = (date) => {
    return FlightBS.getAllPlanesForDate(date).reduce(
      (acc, plane) => (acc += plane.capacity),
      0
    );
  };

  static addSchedulePlanes = (date, planes) => {
    if (!flightDates[date]) {
      flightDates[date] = new Date(date);
    }

    const exstingPlanesForDate = FlightBS.getAllPlanesForDate(date);

    FlightBS.schedule.set(
      flightDates[date],
      exstingPlanesForDate.length
        ? [...exstingPlanesForDate, ...planes]
        : planes
    );

    return FlightBS.schedule;
  };
}

// [NOTE]: Testing flight dates
const planesForDate = FlightBS.getAllPlanesForDate("2024-06-29");
console.log(planesForDate, "planesForDate");

const planesForWrongDate = FlightBS.getAllPlanesForDate("2025-09-11");
console.log(planesForWrongDate, "planesForWrongDate");

const capacityForDate = FlightBS.getAllSittingPlacesForDate("2024-06-29");
console.log(capacityForDate, "capacityForDate");

const morePlanes = [
  {
    name: "Airbus A380-800",
    capacity: 575,
    flightTime: 16,
  },
  {
    name: "Boeing 747-8",
    capacity: 467,
    flightTime: 15,
  },
  {
    name: "Boeing 787-10",
    capacity: 318,
    flightTime: 14,
  },
];

console.log(
  FlightBS.addSchedulePlanes("2024-06-30", morePlanes),
  "Planes added"
);

console.log(
  FlightBS.addSchedulePlanes("2024-06-29", morePlanes),
  "Planes added to date before"
);

const defaultMap = new Map();
const defaultSet = new Set();

defaultMap.set("key", "value");
defaultMap.set("key2", "value2");

defaultSet.add("Value");

for (const pair of defaultMap) {
  console.log(pair, "key");
}

defaultMap.forEach((value, key) => {
  console.log(value, key);
});

const wasDeleted = defaultMap.delete("key2");
console.log(wasDeleted, "wasDeleted");

console.log(defaultMap, "defaultMapAfterDelete");

// defaultMap.clear();

console.log(defaultMap, "defaultMapCleared");

console.log(defaultMap.has("key"), "key");

// console.log(defaultMap);

const pairs = [
  ["key1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"],
];

const testMap = new Map();
testMap.set("key1", "value1");

// Завдання:
// Заповнити testMap значеннями з pairs
// Якщо така пара уже існує - видаліть цю пару з map

pairs.forEach(([key, value]) => {
  !testMap.delete(key) && testMap.set(key, value);
});

console.log(testMap, "result");

console.log(testMap.size, "size");
console.log(testMap.entries(), "entries");
