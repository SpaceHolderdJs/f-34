const { faker } = require("@faker-js/faker");
const { createFile } = require("../files/files");

function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => users)
    .catch((err) => console.log(err));
}

function generateUsersLayout() {
  getUsers().then((users) => {
    let content = "";

    users.forEach(({ id, name, email, website, address, phone }) => {
      const userImageSrc = faker.image.avatar();

      content += `
        <div class="user-card">
          <img alt="user-image-${name}" src="${userImageSrc}" />
          <h3>${name}</h3>
          <p>${email}</p>
          <p>${website}</p>
          <a href="./users/user-${id}.html">Link to profile</a>
        </div>
      `;

      const { street, city } = address;

      createFile(
        `./src/files/storage/users/user-${id}.html`,
        `
            <head>
                <title>${name}</title>
            </head>
            <body>
                <h1>User: ${name}</h1>
                <img alt="user-image-${name}" src="${userImageSrc}" />
                <p>${email}</p>
                <p>${street}</p>
                <p>${city}</p>

                <script src="../../../../client/user.js"></script>
            </body>
         `
      );
    });

    createFile("./src/files/storage/users.html", content);
  });
}

module.exports = {
  getUsers,
  generateUsersLayout,
};
