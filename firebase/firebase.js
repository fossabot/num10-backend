const admin = require("firebase-admin");
const { DATABASE_NAME, FIREBASE_CREDENTIAL } = require("../constants");

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(FIREBASE_CREDENTIAL)),
  databaseURL: `https://${DATABASE_NAME}.firebaseio.com`
});

exports.db = admin.database();
