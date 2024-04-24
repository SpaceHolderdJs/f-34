import { faker } from "https://esm.sh/@faker-js/faker";
const { person, location, image, helpers, internet, random, database } = faker;

// Interfaces

const userInterface = {
  // id: "",
  name: "",
  surname: "",
  age: 0,
  city: "",
  salary: 0,
  bio: "",
  avatar: "",
  email: "",
  skills: [],
};

// Elements
const usersWrapper = document.getElementsByClassName("users-wrapper")[0];

class Faker {
  static generateUsers = (amount = 10) => {
    const users = [];

    for (let i = 0; i < amount; i++) {
      const user = {
        id: database.mongodbObjectId(),
        name: person.firstName(),
        surname: person.lastName(),
        age: +random.numeric(2) + 10,
        city: location.city(),
        salary: +random.numeric() * 1000,
        bio: person.bio(),
        avatar: image.avatar(),
        email: internet.email(),
        skills: helpers.arrayElements([
          "html",
          "css",
          "javascript",
          "react",
          "angular",
          "jquery",
          "axios",
        ]),
      };

      users.push(user);
    }

    return users;
  };
}

let users = Faker.generateUsers(5);
console.log(users, "users");

class UserViews {
  static renderInitials = (user, parent) => {
    const card = document.createElement("div");
    card.classList.add("user-initials");
    card.textContent = `${user.name} ${user.surname}`;

    parent.appendChild(card);
  };

  static renderCard = (user, parent, actions = {}) => {
    const { name, surname, age, salary, avatar, skills, bio, email, id } = user;

    const card = document.createElement("div");
    card.classList.add("user-card");

    card.innerHTML = `
      <div class="content">
        <img alt="${name}" src="${avatar}" />
        <article>
          <h4>${name} ${surname}</h4>
          <p>${email}</p>

          <div class="box">
            <div class="box-item">Age: ${age}</div>
            <div class="box-item">Salary: ${salary}</div>
          </div>

          <div class="box inline">
            ${skills
              .map((skill) => `<div class="box-item">${skill}</div>`)
              .join("")}
          </div>
        </article>
      </div>
    `;

    // buttons
    const buttonsWrapper = document.createElement("div");
    buttonsWrapper.classList.add("user-card-actions");

    const removeUserButton = document.createElement("button");
    removeUserButton.textContent = "Delete user";
    removeUserButton.onclick = () => actions.delete(id);
    buttonsWrapper.appendChild(removeUserButton);

    card.appendChild(buttonsWrapper);

    parent.appendChild(card);
  };

  static renderForm(fields = userInterface) {
    const form = document.getElementById("create-user-form");

    form.onsubmit = (event) => {
      event.preventDefault();
      const formInputs = form.getElementsByTagName("input");

      const requiredFields = ["name", "surname", "age", "email"];

      const isSomeRequiredFieldEmpty = requiredFields.some(
        (fieldName) => !formInputs.namedItem(fieldName).value
      );

      if (
        // !formInputs.namedItem("name").value ||
        // !formInputs.namedItem("surname").value ||
        // !formInputs.namedItem("age").value ||
        // !formInputs.namedItem("email").value
        isSomeRequiredFieldEmpty
      ) {
        alert("Not all required fields are filled");
        return;
      }

      const user = {};

      for (const field in fields) {
        const inputField = formInputs.namedItem(field);
        user[field] = inputField.value;

        inputField.value = "";
      }

      App.addUser(user);
      console.log(user, "user");
      App.renderUsers(users);
      console.log(users, "users");
    };

    for (const field in fields) {
      console.log(field, typeof fields[field]);

      const input = document.createElement("input");
      input.placeholder = field;
      input.name = field;
      input.type = typeof fields[field] === "number" ? "number" : "text";
      form.appendChild(input);
    }

    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Create User";
    form.appendChild(button);
  }
}

class App {
  static addUser(userData) {
    const {
      id = database.mongodbObjectId(),
      avatar = image.avatar(),
      name,
      surname,
      age,
      city,
      salary,
      bio,
      email,
      skills,
    } = userData;

    users.push({
      id,
      avatar: avatar || image.avatar(),
      name,
      surname,
      age: +age,
      city,
      salary: +salary,
      bio,
      email,
      skills: skills.split(" "),
    });
  }

  static removeUser(id) {
    users = users.filter((user) => user.id !== id);
    console.log(users, "removedUsers");
    App.renderUsers(users);
  }

  static searchUsers(query) {
    // email or name
    // HW!
  }

  static changeUser() {}

  static renderUsers(usersToRender = [], parent = usersWrapper) {
    parent.innerHTML = "";

    usersToRender.forEach((user) => {
      UserViews.renderCard(user, parent, { delete: App.removeUser });
    });
  }
}

// App.addUser({
//   name: "Igor",
//   avatar: "https://avatars.githubusercontent.com/u/62031924?s=40&v=4",
//   surname: "Sergienko",
//   age: 24,
//   city: "Kyiv",
//   salary: 3000,
//   bio: "Something",
//   email: "email@gmail.com",
//   skills: ["js", "html", "css"],
// });

App.renderUsers(users);
UserViews.renderForm();
