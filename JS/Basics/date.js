const date = new Date();

const miliseconds = date.getMilliseconds();
const seconds = date.getSeconds();
const minutes = date.getMinutes();
const hours = date.getHours();

console.log(miliseconds);
console.log(seconds);
console.log(hours);

date.setHours(7);
date.setMinutes(7);
date.setSeconds(7);
date.setMilliseconds(777);
console.log(date);

date.setMinutes(70);
date.setMilliseconds(2500);

console.log(date);

console.log(`${hours}:${minutes}:${seconds}:${miliseconds}`);

// Завдання:
// 1. Cтворіть дату
// 2. Змініть кількість годин на 10
// 3. Змініть кількість хвилин на 5
// 4. Додайте до хвилин ще 15 (та змініть)

const date2 = new Date();

// date2.setHours(10);
date2.setMinutes(5);
date2.setMinutes(date2.getMinutes() + 15);

console.log(date2);

const hours2 = date2.getHours();
const utcHours2 = date2.getUTCHours();

console.log(hours2, utcHours2);

const seconds2 = date2.getSeconds();
const utcSeconds2 = date2.getUTCSeconds();

console.log(seconds2, utcSeconds2);

const date3 = new Date();

const year = date3.getFullYear();

// -1
const month = date3.getMonth();
const day = date3.getDate();

console.log(year);
console.log(month);
console.log(day);

// Завдання:
// 1. Cтворити дату
// 2. Описати кількість годин (5)
// 3. Описати місяць (наступний)
// 4. Описати рік (+5)

const date4 = new Date();
date4.setHours(5);
date4.setMonth(date.getMonth() + 1);
date4.setFullYear(date4.getFullYear() + 5);

console.log(date4);

const dayOfWeek = date4.getDay();
console.log(dayOfWeek);

// transformations

const date5 = new Date();

// !
const isoString = date5.toISOString();
console.log(isoString);

const dateFromIso = new Date(isoString);
console.log(dateFromIso, "!!!");

const dateString = date5.toDateString();
console.log(dateString, "!!!");

const timeString = date5.toTimeString();
console.log(timeString, "!!!");

const json = date5.toJSON();
console.log(json, "!!!");

// !
const string = date5.toString();
console.log(string);

// !
console.log(date5.toLocaleDateString());
console.log(date5.toLocaleTimeString());
console.log(date5.toLocaleString());

const date6 = new Date();

const fixedTimeValue = (value) => {
  //   `${value}`.length < 2 ? `0${value}` : `${value}`;
  const stringedValue = `${value}`;

  if (stringedValue.length < 2) {
    return `0${stringedValue}`;
  } else {
    return stringedValue;
  }
};

setInterval(() => {
  date6.setSeconds(date6.getSeconds() + 1);
  // Вивести лише hh:mm:ss
  // Забезпечити виведення 0 якщо в одиниці часу є лише одна цифра
  //  20:1:22  => 20:01:22
  //  20:11:22 => 20:11:22

  const [hours, minutes, seconds] = [
    date6.getHours(),
    date6.getMinutes(),
    date6.getSeconds(),
  ];

  console.log(
    `${fixedTimeValue(hours)}:${fixedTimeValue(minutes)}:${fixedTimeValue(
      seconds
    )}`
  );
}, 1000);
