import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fh = await import(`${__dirname}/modules/fileHandler.js`);

const login = await import(`${__dirname}/modules/login.js`);

const app = express();
const port = 3000;

app.use(express.json());

// Get Request
app.get("/get", async function (req, res) {
  res.send("Response to the GET request");
});

//Post Request
app.post("/post", async function (req, res) {
  console.log("--------------POST REQUEST---------------");
  console.log(req.body);
  res.send(req.body);
});

//Put request
app.put("/put", async function (req, res) {
  console.log("--------------PUT REQUEST---------------");
  console.log(req.body);

  const path = "./upload/" + req.body.fileName;
  const content = req.body.content;

  fh.write(path, content);

  res.send(req.body);
});

//Register POST request
app.post("/register", async function (req, res) {
  console.log("--------------Register POST REQUEST---------------");
  console.log(req.body);

  let username = req.body.username;
  let password = req.body.password;

  let result = await login.register(username, password);
  console.log("RESULT: " + result);
  res.send({
    body: req.body,
    result: result,
  });
});

//Login POST request
app.post("/login", async function (req, res) {
  console.log("--------------Login POST REQUEST---------------");
  console.log(req.body);

  let username = req.body.username;
  let password = req.body.password;

  let result = await login.login(username, password);
  console.log("RESULT: " + result);
  res.send({
    body: req.body,
    result: result,
  });
});

//This serves static files
app.use(express.static("public"));

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
