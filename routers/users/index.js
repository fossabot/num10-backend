const users = require("express").Router();
const lodash = require("lodash");
const { client } = require("../../client");
const { Users } = require("../../firebase/users");

users.post("/createChange", (req, res) => {
  console.log(req)
});

exports.users = users;
