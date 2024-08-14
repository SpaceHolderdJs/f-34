const express = require("express");
const UsersService = require("../services/users");

const usersController = express.Router();

usersController.get("/", (_, response) => {
  const users = UsersService.getAll();
  response.status(200).send(users);
});

usersController.get("/get-one/:id", (request, response) => {
  const user = UsersService.getOne(+request.params.id);

  if (!user) return response.status(404).send({ message: "User is not found" });

  response.status(200).send(user);
});

usersController.post("/", (request, response) => {
  UsersService.create(request.body);

  response.status(201).send({ message: "User was created" });
});

module.exports = usersController;
