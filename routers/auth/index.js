const auth = require("express").Router();
const { google } = require("./google");

auth.use("/google", google)

exports.auth = auth;
