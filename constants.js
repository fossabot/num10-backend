!process.env.ENVIROMENT ? require("dotenv").config() : "";

exports.SECRET_COOKIE = process.env.SECRET_COOKIE;
exports.PORT = process.env.PORT;
exports.DATABASE_NAME = process.env.DATABASE_NAME;
exports.CLIENT_SIGN_IN_ID = process.env.CLIENT_SIGN_IN_ID;
exports.FIREBASE_CREDENTIAL = process.env.FIREBASE_CREDENTIAL;
exports.SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
