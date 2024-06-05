const elements = {
  email: document.querySelector("#email"),
  username: document.querySelector("#username"),
  password: document.querySelector("#password"),
  button: document.querySelector("#login-button"),
};

elements.button.onclick = async () => {
  try {
    const { data: response } = await API.post("/users", {
      username: elements.username.value,
      email: elements.email.value,
      password: elements.password.value,
    });

    // redirect to /login
    window.location.href = window.location.href.replace("register", "login");

    console.log("Response", response);
  } catch (err) {
    alert(err.response.data);
  }
};

console.log(window.location.href, "!!!");
