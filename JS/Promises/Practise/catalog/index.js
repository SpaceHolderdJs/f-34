class Catalog {
  static elements = {
    categories: document.querySelector(".categories"),
    goods: document.querySelector(".goods"),
  };

  static renderCategories = async () => {
    try {
      const { data: categories } = await API.get("/products/categories");

      categories.forEach((category) => {
        const span = document.createElement("span");
        span.className = "badge rounded-pill text-bg-primary";
        span.textContent = category;

        Catalog.elements.categories.appendChild(span);
      });
    } catch (err) {
      alert(err.response.data);
    }
  };

  static renderGoods = (goods) => {
    Catalog.elements.goods.innerHTML = "";

    goods.forEach((good) => {
      const { title, price, category, description, image } = good;

      Catalog.elements.goods.innerHTML += `
        <div class="card">
          <img class="card-img-top" src="${image}" alt="${title}" />
          <div class="card-body">
            <h4 class="card-title">${title}, ${price}</h4>
            <p class="card-text">${description}</p>
          </div>
        </div>
      `;
    });
  };

  static renderAllGoods = async () => {
    try {
      const { data: products } = await API.get("/products");
      Catalog.renderGoods(products);
    } catch (err) {
      alert(err.response.data);
    }
  };
}

Catalog.renderCategories();
Catalog.renderAllGoods();
