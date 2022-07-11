import express from "express";
import fh from "./modules/fileHandler.js";

const app = express();
const port = 3000;

app.use(express.json());

// Get Request
app.get("/get", function (req, res) {
  res.send("Response to the GET request");
});

//Post Request
app.post("/post", function (req, res) {
  console.log("--------------POST REQUEST---------------");
  console.log(req.body);
  res.send(req.body);
});

//Put request
app.put("/put", function (req, res) {
  console.log("--------------PUT REQUEST---------------");
  console.log(req.body);

  const path = "./upload/" + req.body.fileName;
  const content = req.body.content;

  fh.write(path, content);

  res.send(req.body);
});

//Register POST request
app.post("/register", function (req, res) {
  console.log("--------------Register POST REQUEST---------------");
  console.log(req.body);

  const path = "./users.json";

  res.send(req.body);
});

//This serves static files
app.use(express.static("public"));

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
