import crypto from "crypto";

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fh = await import(`${__dirname}/fileHandler.js`);

const usersPath = path.join(__dirname, "/../users.json");

async function getUsers() {
  let r = await fh.exists(usersPath);

  if (r) {
    let data = await fh.read(usersPath);
    return JSON.parse(data);
  } else {
    return {};
  }
}

async function setUsers(users) {
  let data = JSON.stringify(users);
  await fh.write(usersPath, data);
}

async function register(username, password) {
  // load users.json file
  let users = await getUsers();

  // check if the user is not already registered
  if (users[username]) {
    return false;
  }

  // hash the password
  let hashedPassword = password; // <-- add the hashing here

  // add user to the users object
  users[username] = hashedPassword;

  // write the users object back to users.json
  await setUsers(users);
  return true;
}

async function login(username, password) {
  // load users.json file
  let users = await getUsers();

  // check if the user is already registered
  if (!users[username]) {
    return false;
  }

  // hash the password
  let hashedPassword = password; // <-- add the hashing here

  // check if the user is not already logged in

  // compare the sent password with the stored password
  if (hashedPassword === users[username]) {
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
