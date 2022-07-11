import express from "express";
import fs from "fs";

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

app.put("/put", function (req, res) {
  console.log("--------------PUT REQUEST---------------");
  console.log(req.body);

  const path = "./upload/" + req.body.fileName;
  const content = req.body.content;

  fs.writeFile(path, content, (err) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });

  res.send(req.body);
});

//This serves static files
app.use(express.static("public"));

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
