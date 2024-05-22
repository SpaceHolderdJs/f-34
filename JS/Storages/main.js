// const, let
// heap

// memory:
// - Global
// - Closed (Scope - related)

// const b = 90;

// function a() {
//   const b = 10;
//   console.log(b, "b");
// }

// console.log(b, "!!");

// a();

window.localStorage;
window.sessionStorage;

// document.cookie

localStorage.setItem("message", "Hello");
// localStorage.setItem("email", "email@gmai.com");
localStorage.setItem("lastTab", "about");

// JSON - JavaScript Object Notation

const settings = {
  background: "red",
  count: 10,
};

const settingInJson = JSON.stringify(settings);
localStorage.setItem("settings", settingInJson);

const data = {
  x: 1,
  y: 9,
  z: 7,
};

// Завдання:
// Записати у LS дані data

localStorage.setItem("data", JSON.stringify(data));

// localStorage.setItem();

const jsonDataFromLs = localStorage.getItem("data");
const dataFromLs = JSON.parse(jsonDataFromLs);

console.log(dataFromLs, "dataFromLs");

// localStorage.setItem("settings", {
//   background: "red",
// });

localStorage.setItem("array", JSON.stringify([1, 2, 3, 4]));
localStorage.setItem("users", JSON.stringify([{ email: "email@gmai.com" }]));

const users = JSON.parse(localStorage.getItem("users"));
console.log(users, "users");

// localStorage.setItem("array", [1, 2, 3, 4, 5, 6]);
// console.log([1, 2, 3, 4, 5].toString(), "join");
// console.log([{ a: 1 }, { b: 1 }].toString(), "join2");

const email = localStorage.getItem("email");
console.log(email, "email");

// Завдання:
// Записати дані корстувача у localStorage (окремо): name, age, email, city
// Отримати доступ до даних: name, city

[
  { key: "name", value: "Igor" },
  { key: "age", value: "24" },
  //   { key: "email", value: "igor@gmai.com" },
  { key: "city", value: "Kyiv" },
].forEach((item) => {
  localStorage.setItem(item.key, item.value);
});

const name = localStorage.getItem("name");
const city = localStorage.getItem("city");

console.log(name, city);

// Wrong way
// localStorage.setItem("name", null);
// localStorage.setItem("name", undefined);

localStorage.removeItem("name");

localStorage.removeItem("non-existing-item");

const emailInput = document.querySelector("#email-input");
emailInput.value = localStorage.getItem("email");

emailInput.addEventListener("input", (event) => {
  console.log("input event", event.target.value);
  localStorage.setItem("email", event.target.value);
});

console.log(localStorage.length);

console.log(localStorage.key(0));
console.log(localStorage.key(1));

for (let i = 0; i < localStorage.length; i++) {
  console.log(i, localStorage.key(i));
}

// Clears all the values!
// localStorage.clear();

// Session storage

sessionStorage.setItem("sessionItem", "item");

const item = sessionStorage.getItem("sessionItem");
console.log(item, "item");

sessionStorage.setItem("user", JSON.stringify({ name: "Igor" }));

// Завдання:

const tokens = [
  { type: "access", token: "1dad233rmfmwkmmr3rnm3m" },
  { type: "access", token: "4420djqejqe2e10" },
  { type: "refresh", token: "1sasqsqqdfwwfwfwfwf" },
  { type: "access", token: "aadndjn1k1k1dnsjfj" },
];

// 1
localStorage.setItem("tokens", JSON.stringify(tokens));

// 2, 3
// tokens.forEach((t) => {
//   if (t.type === "access") {
//     sessionStorage.setItem("access", t.token);
//   }

//   if (t.type === "refresh") {
//     localStorage.setItem("refresh", t.token);
//   }
// });

const lastRefreshToken = tokens.filter(({ type }) => type === "refresh").at(-1);
const lastAccessToken = tokens.filter(({ type }) => type === "access").at(-1);

localStorage.setItem("refresh", lastRefreshToken.token);
localStorage.setItem("access", lastAccessToken.token);

// sessionStorage.clear();
sessionStorage.removeItem("access");
// localStorage.clear();

// 1. Записати всі токени (масив) у LS [tokens]
// 2. Записати останній з access токенів у SS [access]
// 3. Записати останній з refresh токенів у LS [refresh]

const information = {
  usersQ: 12,
  admins: 2,
  posts: [{ title: "Title1" }, { title: "Title2" }],
};

// - Використати LS для зберігання даних:  posts
// - Використати SS для зберігання даних: usersQ, admins
// - Написати функцію, що створює новий пост, оновлюючи дані у LS відповідно (новий пост додається до масиву)

// 1
localStorage.setItem("posts", JSON.stringify(information.posts));

// 2
sessionStorage.setItem("admins", information.admins);
sessionStorage.setItem("usersQ", information.usersQ);

// 3

function addPost(post) {
  const existingPosts = JSON.parse(localStorage.getItem("posts"));
  existingPosts.push(post);
  localStorage.setItem("posts", JSON.stringify(existingPosts));
}

addPost({ title: "Title3" });
