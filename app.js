import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

// Get Request
app.get("/", function (req, res) {
  res.send("Response to the GET request");
});

//Post Request
app.post("/post", function (req, res) {
  console.log("--------------POST REQUEST---------------");
  console.log(req.body);
  res.send("Response to the POST request");
});

//This serves static files
app.use(express.static("public"));

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
