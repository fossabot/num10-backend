const admin = require("firebase-admin");
const serviceAccount = require("./service-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://num10-208508.firebaseio.com"
});

exports.db = admin.database()