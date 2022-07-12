import fs from "fs";
const fsPromises = fs.promises;

async function write(path, content) {
  // fs.writeFile(path, content, (err) => {
  //   if (err) {
  //     console.error(err);
  //     return err;
  //   }
  //   // file written successfully
  // });

  try {
    await fsPromises.writeFile(path, content);
  } catch (err) {
    console.error("Error occured while writing file!", err);
  }
}

async function read(path) {
  // fs.readFile(path, "utf8", (err, data) => {
  //   if (err) {
  //     console.error(err);
  //     return err;
  //   }
  //   return data;
  // });

  try {
    return await fsPromises.readFile(path);
  } catch (err) {
    console.error("Error occured while reading file!", err);
  }
}

async function exists(path) {
  try {
    await fsPromises.access(path);
    return true;
  } catch {
    return false;
  }
}

export { write, read, exists };
