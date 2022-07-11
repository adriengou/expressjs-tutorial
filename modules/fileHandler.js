import fs from "fs";

function write(path, content) {
  fs.writeFile(path, content, (err) => {
    if (err) {
      console.error(err);
      return err;
    }
    // file written successfully
  });
}

function read(path) {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return err;
    }
    return data;
  });
}

export default { write };
