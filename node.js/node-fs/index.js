const { createFile, deleteFile, readFile } = require("./src/files/files");
const { getUsers, generateUsersLayout } = require("./src/users/users");

console.log("Node.js is starting");

createFile();
// deleteFile();
readFile();
generateUsersLayout();
