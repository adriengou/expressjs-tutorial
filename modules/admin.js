import crypto from "crypto";

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fh = await import(`${__dirname}/fileHandler.js`);

const passwordPath = path.join(__dirname, "/../password.json");

async function getPassword() {
  let r = await fh.exists(passwordPath);

  if (r) {
    let data = await fh.read(passwordPath);
    return JSON.parse(data);
  } else {
    return {};
  }
}

async function setPassword(password) {
  let data = JSON.stringify(password);
  await fh.write(passwordPath, data);
}

async function register(password) {
  // load password.json file
  let password = await getPassword();

  // check if the user is not already registered
  if (password) {
    return false;
  }

  // hash the password
  let hashedPassword = password; // <-- add the hashing here

  // write the users object back to users.json
  await setPassword(hashedPassword);
  return true;
}

async function login(password) {
  // load password.json file
  let storedPassword = await getPassword();

  // hash the password
  let hashedPassword = password; // <-- add the hashing here

  // compare the sent password with the stored password
  if (hashedPassword === storedPassword) {
    // create a hash that will be stored as a cookie by the client
    // send back the hash
    console.log("GOOD PASSWORD");
    return true; //<-- return something instead
  } else {
    console.log("WRONG PASSWORD");
    return false;
  }
}

export { register, login };
