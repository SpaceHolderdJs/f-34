class Cart {
  static elements = {
    container: document.querySelector(".cart-container"),
  };

  static renderCart = async () => {
    try {
      const cartProducts = CartAPI.present();

      if (!cartProducts.length) {
        Cart.elements.container.innerHTML =
          "<h1>There is no any products so far</h1>";

        return;
      }

      const { data: products } = await API.get("/products");

      Cart.elements.container.innerHTML = "";

      cartProducts.forEach((product) => {
        const { productId, quantity } = product;

        const productData = products.find(
          (product) => product.id === +productId
        );

        const { title, description, price, image, category, id } = productData;

        // [TODO]: Check if it is possible
        const onRemoveItemClick = () => {
          CartAPI.removeFromCart(id, 1);
          Cart.renderCart();
        };

        Cart.elements.container.innerHTML += `
          <div class="card mb-3" style="max-width: 640px;">
            <div class="d-flex g-0 gap-3">
              <div class="col-md-4">
                <img
                  src="${image}"
                  class="img-fluid rounded-start item-image"
                  alt="${title}"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${title}</h5>
                  <p class="card-text">${description}</p>
                  <p class="card-text">
                    <small class="text-body-secondary">${category}</small>
                  </p>
                  <strong>
                    <p>${quantity * price}$</p>
                  </strong>
                  <strong>
                    <p>Items: ${quantity}</p>
                  </strong>

                  <button
                    class="btn btn-danger"
                    onclick="
                    CartAPI.removeFromCart(${id}, 1);
                    Cart.renderCart();
                  "
                  >
                    Remove from cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        `;
      });
    } catch (err) {
      console.log(err);
      //   alert(err.response.data);
    }
  };
}

Cart.renderCart();
