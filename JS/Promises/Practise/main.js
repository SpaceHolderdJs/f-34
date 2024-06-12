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

  static cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : {};

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

  static sychronizeCartFromLS = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  static addToCart = (productId, quantity) => {
    if (CartAPI.cart[productId]) {
      CartAPI.cart[productId] += quantity;
    } else {
      CartAPI.cart[productId] = quantity;
    }

    CartAPI.sychronizeCartFromLS(CartAPI.cart);
  };

  static removeFromCart = (productId, quantity) => {
    if (CartAPI.cart[productId]) {
      CartAPI.cart[productId] -= quantity;

      if (CartAPI.cart[productId] <= 0) delete CartAPI.cart[productId];
    }

    CartAPI.sychronizeCartFromLS(CartAPI.cart);
  };

  static removeAllFromCart = (productId) => {
    if (CartAPI.cart[productId]) {
      delete CartAPI.cart[productId];
    }

    CartAPI.sychronizeCartFromLS(CartAPI.cart);
  };

  static clear = () => {
    CartAPI.cart = {};

    CartAPI.sychronizeCartFromLS(CartAPI.cart);
  };

  static buy = (cart) => {};
}

class UI_ELEMENTS {
  static header = (
    // [NOTE]: the link property is bad, we should not do this way when we have an address
    // [NOTE]: Icons from BootstrapIcons: https://icons.getbootstrap.com/
    links = [
      {
        title: "Catalog",
        link: window.location.href.replace("cart", "catalog"),
        icon: "card-list",
      },
      {
        title: "Cart",
        link: window.location.href.replace("catalog", "cart"),
        icon: "cart",
      },
    ],
    parent = document.querySelector("header")
  ) => {
    if (parent) {
      parent.innerHTML = `
        <nav class="navbar navbar-expand-lg mb-3 bg-primary">
          <div class="container-fluid">
            <a class="navbar-brand text-white" href="#">Navbar</a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                ${links
                  .map(
                    ({ link, title, icon }) => `
                      <li class="nav-item">
                        <a
                          class="nav-link active text-white"
                          aria-current="page"
                          href="${link}"
                          >
                           ${icon ? `<i class="bi bi-${icon}"></i>` : ``}
                           ${title}</a
                        >
                      </li>
                    `
                  )
                  .join("")}
              </ul>
            </div>
          </div>
        </nav>
      `;
    }
  };
}

UI_ELEMENTS.header();
