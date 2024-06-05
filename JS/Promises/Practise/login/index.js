const elements = {
  username: document.querySelector("#username"),
  password: document.querySelector("#password"),
  button: document.querySelector("#login-button"),
};

elements.button.onclick = async () => {
  try {
    const { data: response } = await API.post("/auth/login", {
      //   username: elements.username.value,
      //   password: elements.password.value,
      //   [Note]: Just at this case
      username: "mor_2314",
      password: "83r5^_",
    });

    const token = response.token;
    localStorage.setItem("token", token);
  } catch (err) {
    alert(err.response.data);
  }
};
