console.log(axios, window.axios, "axios");

// Most common way
// GET, POST, PATCH, PUT, DELETE
axios
  .get("https://jsonplaceholder.typicode.com/albums")
  .then((response) => console.log(response.data, "data"))
  .catch((error) => console.log(error, "error"));

const data = {
  id: 10,
  userId: 10,
  title: "Hello, this is new album",
};

axios
  .post("https://jsonplaceholder.typicode.com/albums", data)
  .then((response) => console.log(response.data, "created album"))
  .catch((err) => console.log(err, "err"));

// Завдання:
// написати GET запит на посилання
// https://jsonplaceholder.typicode.com/users

// Отримати та вивести data
// Вiдловити помилки

// axios vs fetch
axios
  .put("https://jsonplaceholder.typicode.com/albums/1", {
    id: 11,
    userId: 8,
    title: "@@@@@@@@@@",
  })
  .then((response) => console.log(response.data))
  .catch((err) => console.log(err, "err"));

// fetch("https://jsonplaceholder.typicode.com/albums/1", {
//   method: "PUT",
//   body: JSON.stringify({
//     id: 11,
//     userId: 1,
//     title: "@@@@",
//   }),
// });

// delete
axios
  .delete("https://jsonplaceholder.typicode.com/albums/1")
  .then((res) => console.log(res, "res"))
  .catch((err) => console.log(err, "!!!"));

// Another way of using axios

axios({
  method: "get",
  url: "https://jsonplaceholder.typicode.com/albums",
}).then((res) => console.log(res.data, "data"));

// GET by default
axios("https://jsonplaceholder.typicode.com/albums").then((response) =>
  console.log(response.data, "data3")
);

// BACKEND - base url https://jsonplaceholder.typicode.com
// Creating an axios instance

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "Application/json",
  },
  timeout: 5000,
});

// sub-route request
axiosInstance.get("/users").then((res) => console.log(res.data, "!!!!!"));
axiosInstance.get("/todos").then((res) => console.log(res.data, "!!!!!!"));

// Завдання:
// Cтворiть свiй axios instance та зробiть кiлька запитiв (get):
// "/albums", "/posts", "/comments"

// Дочекайтеся всiх запитiв, вивести результат цих запитiв

// Promise.all([
//   axiosInstance.get("/albums"),
//   axiosInstance.get("/posts"),
//   axiosInstance.get("/comments"),
// ]).then((data) => {
//   data.forEach((res, i) => {
//     console.log(`Data${i}: ${res.data}`);
//   });
// });

// Async / await

async function getUsers() {
  // await
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  console.log("Final data", data);

  return data;
}

getUsers().then((users) => console.log(users, "FINAL USERS"));

async function getPosts() {
  const { data: posts } = await axiosInstance.get("/posts");
  console.log(posts, "posts");
}

getPosts();

async function createPost(post) {
  const { data: createdPost } = await axiosInstance.post("/posts", post);
  return createdPost;
}

createPost({ id: 101, userId: 1, title: "Hello", body: "Something" }).then(
  (createdPost) => console.log(createdPost, "createdPost")
);

// const fn = async () => {};
// const fn1 = async function () {};

class API {
  constructor(baseURL, headers, timeout) {
    this.baseURL = baseURL;
    this.headers = headers;
    this.timeout = timeout;

    this.instance = axios.create({ baseURL, headers, timeout });
  }

  async get(path) {
    const { data } = await this.instance.get(path);
    return data;
  }

  async post(path, body) {
    const { data } = await this.instance.post(path, body);
    return data;
  }

  async patch(path, body) {
    const { data } = await this.instance.patch(path, body);
    return data;
  }

  async put(path, body) {
    const { data } = await this.instance.put(path, body);
    return data;
  }

  async delete(path) {
    const { data } = await this.instance.delete(path);
    return data;
  }
}

// H/W

const api = new API(
  "https://jsonplaceholder.typicode.com",
  {
    "Content-Type": "Application/Json",
  },
  10000
);

// Just an example
api.get("/users").then((users) => console.log("USERS FROM API", users));

// H/W
// Посилаючись на https://fakestoreapi.com/products/
// Унаслiдувати клас API та розписати додактовi методи:
// getOneProduct
