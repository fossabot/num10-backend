!process.env.ENVIROMENT ? require("dotenv").config() : "";

exports.SECRET_COOKIE = process.env.SECRET_COOKIE;
exports.PORT = process.env.PORT;
exports.PROJECT_ID = process.env.PROJECT_ID;
exports.CLIENT_EMAIL = process.env.CLIENT_EMAIL;
exports.PRIVATE_KEY_ID = process.env.PRIVATE_KEY_ID;
exports.PRIVATE_KEY = process.env.PRIVATE_KEY;
exports.DATABASE_NAME = process.env.DATABASE_NAME;
exports.CLIENT_ID = process.env.CLIENT_ID
exports.CLIENT_SIGN_IN_ID = process.env.CLIENT_SIGN_IN_ID
