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

class CartAPI {
  // [Note]: key - productId, value - quantity
  // https://fakestoreapi.com/docs#:~:text=Show%20output-,Update%20a%20product,-fetch(%27https%3A//fakestoreapi.com/carts

  static cart = {
    1: 3,
    4: 3,
    6: 1,
  };

  static present = () => {
    const productsArray = [];

    for (const productId in CartAPI.cart) {
      productsArray.push({
        productId,
        quantity: CartAPI.cart[productId],
      });
    }

    return productsArray;
  };

  static addToCart = (productId, quantity) => {
    if (CartAPI.cart[productId]) {
      CartAPI.cart[productId] += quantity;
      return;
    }

    CartAPI[productId] = quantity;
  };

  static removeFromCart = (productId, quantity) => {
    if (CartAPI.cart[productId]) {
      CartAPI.cart[productId] -= quantity;

      if (CartAPI.cart[productId] < 0) CartAPI.cart[productId] = 0;
    }
  };

  static removeAllFromCart = (productId) => {
    if (CartAPI.cart[productId]) {
      delete CartAPI.cart[productId];
    }
  };

  static clear = () => {
    CartAPI.cart = {};
  };

  static buy = (cart) => {};
}
