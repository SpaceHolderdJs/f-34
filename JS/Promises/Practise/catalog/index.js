class Catalog {
  static elements = {
    categories: document.querySelector(".categories"),
    goods: document.querySelector(".goods"),
    search: document.querySelector("#search-input"),
  };

  static allGoods = [];

  static searchGoods = async (query = "") => {
    try {
      const { data: products } = await API.get("/products");

      if (!query) {
        Catalog.renderGoods(products);

        return;
      }

      const filteredProducts = products.filter((good) =>
        good.title.toLowerCase().includes(query.toLowerCase())
      );

      console.log(filteredProducts, "filterredProducts");

      Catalog.renderGoods(filteredProducts);
    } catch (err) {
      alert(err.response.data);
    }
  };

  static renderCategories = async () => {
    try {
      const { data: categories } = await API.get("/products/categories");

      categories.forEach((category) => {
        const span = document.createElement("span");
        span.className = "badge rounded-pill text-bg-primary p-2";
        span.textContent = category;

        span.onclick = () => {
          Catalog.renderGoodsOfCategory(category);
        };

        Catalog.elements.categories.appendChild(span);
      });
    } catch (err) {
      alert(err.response.data);
    }
  };

  static renderGoods = (goods = []) => {
    Catalog.elements.goods.innerHTML = "";

    const goodsToRender = goods.length ? goods : Catalog.allGoods;

    goodsToRender.forEach((good) => {
      const { title, price, description, image, id } = good;

      const currentGoodQuantityInCart = CartAPI.cart[id];

      //   CartAPI.addToCart()

      Catalog.elements.goods.innerHTML += `
        <div class="card good-card">
          <img class="card-img-top" src="${image}" alt="${title}" />
          <div class="card-body">
            <h4 class="card-title">${title}, ${price}</h4>
            <p class="card-text">${description}</p>

            ${
              currentGoodQuantityInCart
                ? `<button
                    onclick="
                        CartAPI.addToCart(${id}, 1);
                        Catalog.renderGoods();
                    "
                    class="btn btn-primary position-relative"
                  >
                    Add to cart
                    <span
                      class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    >
                      ${currentGoodQuantityInCart}
                    </span>
                  </button>`
                : `<button
                    onclick="
                        CartAPI.addToCart(${id}, 1);
                        Catalog.renderGoods();
                    "
                    class="btn btn-primary"
                  >
                    Add to cart
                  </button>`
            }

          </div>
        </div>
      `;
    });
  };

  static renderGoodsOfCategory = async (category = "jewelery") => {
    try {
      const { data: products } = await API.get(
        `/products/category/${category}`
      );
      Catalog.renderGoods(products);
    } catch (err) {
      alert(err.response.data);
    }
  };

  static renderAllGoods = async () => {
    try {
      const { data: products } = await API.get("/products");
      Catalog.allGoods = products;
      Catalog.renderGoods(products);
    } catch (err) {
      alert(err.response.data);
    }
  };
}

Catalog.renderCategories();
Catalog.renderAllGoods();

Catalog.elements.search.oninput = (event) => {
  Catalog.searchGoods(event.target.value);
};
