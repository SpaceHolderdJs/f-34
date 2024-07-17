// NO window
// NO document
const os = require("os");
const fs = require("fs/promises");

console.log("Hello Node.js!");

console.log(os.version());
console.log(os.arch());
console.log(os.cpus());
console.log(os.machine());
console.log(os.homedir());
console.log(os.hostname());

fs.appendFile("hello.txt", "Hello from node js", { encoding: "utf-8" })
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

fs.appendFile(
  "main.html",
  `<head>
      <title>Title</title>
    </head>
    <body>
      <h1>Hello NodeJS!</h1>
      <script>
        alert("Hello node js")
      </script>
    </body> `,
  { encoding: "utf-8" }
);
