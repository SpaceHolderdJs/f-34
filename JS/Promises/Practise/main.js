// API, UI, BL
const API = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

// /users - add
// /auth/login - login
