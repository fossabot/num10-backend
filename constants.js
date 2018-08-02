!process.env.ENVIROMENT ? require("dotenv").config() : "";

exports.SECRET_COOKIE = process.env.SECRET_COOKIE;
exports.PORT = process.env.PORT;
