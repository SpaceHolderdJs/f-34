// function iterate(str, until) {
//   for (let i = 0; i < until; i++) {
//     console.log(str[i]);
//   }
//   // Опишіть логіку, що виводить символи строки str у консоль ДО [until] числа
//   // дійшовши лічильником циклу до значення, що дорівнює until треба зупинити цикл
// }

// iterate("I am a string", 5);
// iterate("I am a string", 3);

// function showAllButNotSpaces(str) {
//   //   const stringWithoutSpaces = str.replaceAll(" ", "");
//   for (let i = 0; i < str.length; i = i + 1) {
//     if (str[i] !== " ") {
//       console.log(str.at(i));
//     }
//   }
//   // Опишіть логіку, що виводить кожен символ строки str, окрім пробілів " "
//   // for
// }

// showAllButNotSpaces("Hello, there!");

for (let i = 0; i < 10; i = i + 1) {
  console.log("Hello");
}

// Завдання
//
const str = "Hello World!";
// Перегорніть строку

function reverseString(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i = i - 1) {
    result = result.concat(str[i]);
  }

  return result;
}

const reversedStr = reverseString(str);
console.log(reversedStr, "reversedString");

const reversedString2 = reverseString("Igor");
console.log(reversedString2);

function multiply(a, times) {
  let result = a;

  for (let i = 0; i < times; i = i + 1) {
    result = result * a;
  }

  return result;
}

const f10 = multiply(2, 10);
console.log(f10);

const nums = "0123456789";

// ES-6

const withSpaces = "Hello wor l d";

function replaceAll(str, charToChange, withChar) {
  let result = "";

  for (const char of str) {
    if (char === charToChange) {
      result = result.concat(withChar);
    } else {
      result = result.concat(char);
    }
  }

  return result;
}

console.log(replaceAll(withSpaces, " ", ""));

// Завдання:
// Напишіть свою функцію replace
// replace("Hello World", " ", "");

function replace(str, charToChange, withChar) {
  let result = "";
  let hasBeenChanged = false;

  for (const char of str) {
    if (char === charToChange && !hasBeenChanged) {
      result = result.concat(withChar);
      hasBeenChanged = true;
    } else {
      result = result.concat(char);
    }
  }

  return result;
}

console.log(replace(withSpaces, " ", ""));

// Завдання:
// Продублювати кожний символ строки 3 рази

const str2 = "I am string";

function duplicateChar(str, n) {
  let result = "";

  for (const char of str2) {
    console.log("First loop", char);

    for (let i = 0; i < n; i = i + 1) {
      result = result.concat(char);
      console.log("Second loop", result, i);
    }
  }

  return result;
}

console.log(duplicateChar(str2, 100));

// Завдання: поверніть числа з numbers (2) які у сумі дають lookingFor

const numbers = "345129";
const lookingFor = 11;

function sumOf(numbers, sum) {
  let result = "";

  for (const char1 of numbers) {
    for (const char2 of numbers) {
      if (Number(char1) + Number(char2) === sum) {
        // console.log("Match", char1, char2);
        result = `${char1}, ${char2}`;
        return result;
      }
    }
  }

  return result;
}

console.log(sumOf(numbers, lookingFor));
