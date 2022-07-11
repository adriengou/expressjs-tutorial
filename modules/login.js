import fh from "./modules/fileHandler.js";
import crypto from "crypto";

const path = __dirname + "/users.json";

function register(username, password) {
  // hash the password
  // check if the user is not already registered
  // load users.json
  // create an object with username and hashed password
  // add object to the users object
  // write the users object back to users.json
}
function login(username, password) {
  // hash the password
  // check if the user is already registered
  // check if the user is not already logged in
  // load users.json
  // compare the sent password with the stored password
  // create a hash that will be stored as a cookie by the client
  // send back the hash
  // write the users object back to users.json
}
