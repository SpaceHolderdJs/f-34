const str = "I am a string";

const str2 = new String("String");
console.log(str2);

// str[0]; I

// immutable
const I = str.slice(0, 1);
const am = str.slice(2, 4);
const a = str.slice(5, 6);
const string = str.slice(7);

console.log(I, am, a, string, "slice");
console.log(str);

const lastStrSymbol = str[str.length - 1];

console.log(lastStrSymbol.toUpperCase());

// Завдання:

const str3 = "Igor";
// нарізати всі голосні літери вашого імені (slice)

console.log(str.indexOf("I"), "indexOf");
console.log(str.indexOf("a"), "indexOf");
console.log(str.indexOf(" "), "indexOf");

console.log(str.lastIndexOf("I"), "lastIndexOf");
console.log(str.lastIndexOf("a"), "lastIndexOf");
console.log(str.lastIndexOf(" "), "lastIndexOf");

console.log(str.at(-1), str[str.length - 1]);

console.log(str.includes("I am a string"), "includes I");

// Завдання
// const str = "I am a string";
// const world = "Hello";

// перевірити чи є слово у строці (не враховуйте регістр)

console.log(str.replace("string", "number"), "replace");
console.log(str.replace("I", ""));
console.log(str.replaceAll("a", "-"));
console.log(
  str.length,
  str
    .replaceAll(" ", "")
    .replaceAll(",", "")
    .replaceAll(".", "")
    .replaceAll(":", "").length
);

// Завдання

// const message = "I am a message. Here is my text, here is my symbols: @#$%^&*()"

// Порахуйте кількість корисної інформації у message (.,:@#$%^&*()" ")

const string1 = "";
const string2 = ":)";
const string3 = new String("");

const string4 = `${str.replace("I", "").length} Hello, world! ${string2} ${
  10 * 10
}
`;

console.log(string4);
console.log(str + string2);
console.log(str.concat(string2));
console.log(`${str}${string2}`);

// Easter egg

const fn = (a) => {
  console.log(a);
};

fn`10`;
