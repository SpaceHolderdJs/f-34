// document.cookie

document.cookie;

console.log(document.cookie, "cookie");

document.cookie = "name=Igor;";
document.cookie = "age=24;";
document.cookie = "city=Kyiv";

// Delete cookies

// document.cookie = "name=;";
// key - name
// value - Igor

// secure - HTTPS only (not http)
// samesite - Requests only from same domain (sub-domain)
// httpOnly - cookie is available only for http based requests
// expires - sets the UTC date of exparation

// const exparationDate = new Date();
// exparationDate.setSeconds(exparationDate.getSeconds() + 5);

// console.log(new Date().toUTCString());

// class Cookies {
//   static setCookie(
//     name,
//     value,
//     options = {
//       samesite: "",
//       secure: "",
//       httpOnly: "",
//       expires: "",
//       path: "",
//       domain: "",
//     }
//   ) {
//     let optionsString = "";
//     for (const option in options) {
//       if (options[option]) {
//         optionsString += `${option}=${options[option]};`;
//       }
//     }

//     console.log(`${name}=${value}; ${optionsString}`, "!!!");
//     document.cookie = `${name}=${value}; ${optionsString}`;
//   }

//   static getCookie(name) {
//     // Завдання:
//     // Використайте Cookies.getAllCookies() для отримання всіх cookie
//     // Поверніть значення того cookie яке ви шукаєте за параметром name
//     // getCookie("age") => 24
//     // return Cookies.getAllCookies()[name];
//     return Cookies.getAllCookies()[name];
//   }

//   static getAllCookies() {
//     const cookies = {};
//     const arrayOfCookies = document.cookie.split("; ");

//     for (const cookiePair of arrayOfCookies) {
//       const splittedPair = cookiePair.split("=");
//       const key = splittedPair[0];
//       const value = splittedPair[1];

//       cookies[key] = value;
//     }

//     return cookies;
//   }

//   static getAllCookies = () =>
//     document.cookie.split("; ").reduce((acc, pair) => {
//       const [key, value] = pair.split("=");
//       return { ...acc, [key]: value };
//     }, {});
// }

// const cookies = Cookies.getAllCookies();
// console.log(Cookies.getCookie("something"));

// Cookies.setCookie("newCookie", "NEW", {
//   expires: exparationDate.toUTCString(),
// });
// console.log(Cookies.getCookie("newCookie"), "cookie");
// console.log(Cookies.getAllCookies(), "allCookies");

// LIBRARY! https://www.jsdelivr.com/package/npm/js-cookie

Cookies.set("key", "value", { domain: ".com" });
console.log(Cookies.get("key"));
Cookies.remove("name", { path: "/JS/Cookies" });
