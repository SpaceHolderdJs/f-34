// Дано значення: 10, 7, 3, 9 - порахуйте середнє арифметичне (сума / кількість) цих значень
// Дано:

const part1 = "F34";
const part2 = "is";
const part3 = "the best!";

const space = " ";

// Виведіть готове повідомлення (+)

const a = 10;
const b = 7;
const c = 3;
const d = 9;

const avrg = (a + b + c + d) / 4;

console.log(avrg, "AVRG");

const message = part1 + " " + part2 + " " + part3;

console.log(message, "message");

// Numbers

const n = 100;
const m = 0.675;
const o = 13.765484;

const number = new Number(50);

console.log(number);

// "100"
const stringFromNumber = n.toString();
console.log(n, stringFromNumber, "stringFromNumber");

const stringFromNumber2 = n.toLocaleString();
console.log(n, stringFromNumber2, "stringFromNumber2");

const fixedValue = o.toFixed(1);
console.log(o, fixedValue, "fixedValue");

const precisionValue = o.toPrecision(3);
console.log(o, precisionValue, "precisionValue");

// Завдання:

// const n1 = 10.1234567;
// const n2 = 3;

// Округліть та виведіть число n1 (2 знаки після коми)
// Переведіть n2 у строку
// "Додайте" дві строки, що у вас вийшли +

// Strings

const name1 = "Igor";
const message2 = "Hello World!";
const smile = "😎";

String;

const oldString = new String("Old string");
console.log(smile);

console.log(oldString);

console.log(name1 + " " + message2);

console.log(name1[0], name1[1], name1[2], name1[3], name1[100]);
console.log(name1[0] + name1[1]);

// I
const firstLetter = name1[0];

console.log(name1.length, "length");
console.log(message2.length, "length2");
console.log(smile.length, "length3");

const str1 = "Hello";
const str2 = "World";
const str3 = "! :)";

const str1And2 = str1.concat(" ", str2, " ", str3, "I am a programmer", "2000");
console.log(str1And2, "concat");

const capitalizedStr1 = str1.toUpperCase();
console.log(capitalizedStr1, "toUpperCase");

const loweredLetter = str1.toLowerCase();
console.log(loweredLetter, "toLowerCase");

console.log(str1.toLocaleLowerCase(), str1.toLocaleUpperCase());

const firstNameLetter = name1[0].toLowerCase();

console.log(firstNameLetter.concat(smile));
console.log(o.toFixed(2).concat(" ", "$"));
