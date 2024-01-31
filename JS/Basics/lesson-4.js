const str = "    Hello World!        ";

console.log(str.trim(), "trim");
console.log(str.trimStart(), "trimStart");
console.log(str.trimEnd(), "trimEnd");
console.log(str);

const trimmed = str.trim();
console.log(trimmed, str, "trimmed");

console.log(str);

const str1 = "Hello ";

console.log(str1.repeat(5));

const repeatStr = str1.repeat(10);
console.log(repeatStr.length);

const isStartsWithH = str1.startsWith("Hello ");
console.log(isStartsWithH, "isStartsWith");

const isEndsWithSpace = str1.endsWith("llo ");
console.log(isEndsWithSpace, "isEndsWithSpace");

const possibleNumber = "200";

// Convertions

const number1 = Number(possibleNumber);
console.log(number1);

const number2 = +possibleNumber;
console.log(number2);

// Empty string

// ""
// ''
// ``

const emptyString = "";
console.log(emptyString.length);

// 0, 1
