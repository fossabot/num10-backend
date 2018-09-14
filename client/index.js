const { CLIENT_SIGN_IN_ID } = require("../constants");
const { OAuth2Client } = require("google-auth-library");

exports.client = new OAuth2Client(CLIENT_SIGN_IN_ID);
