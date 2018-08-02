!process.env.ENVIROMENT ? require("dotenv").config() : "";

exports.GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
exports.GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
exports.CALLBACK_URL = process.env.CALLBACK_URL;
exports.SECRET_COOKIE = process.env.SECRET_COOKIE;
exports.REDIRECT_URL = process.env.REDIRECT_URL;
exports.PORT = process.env.PORT;
