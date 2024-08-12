const fs = require("fs/promises");

function createFile(path = "./src/files/storage/testing.txt", content = "") {
  fs.writeFile(path, content, {
    encoding: "utf-8",
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

function deleteFile(path = "./src/files/storage/testing.txt") {
  fs.unlink(path)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

function readFile(path = "./src/files/storage/testing.txt") {
  fs.readFile(path, { encoding: "utf-8" })
    .then((fileData) => console.log(fileData, "fileData"))
    .catch((err) => console.log(err));
}

module.exports = {
  createFile,
  deleteFile,
  readFile,
};
