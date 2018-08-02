const admin = require("firebase-admin");
const {
  PROJECT_ID,
  CLIENT_EMAIL,
  PRIVATE_KEY_ID,
  PRIVATE_KEY,
  DATABASE_NAME,
  CLIENT_ID
} = require("../constants");

admin.initializeApp({
  credential: admin.credential.cert({
    type: "service_account",
    project_id: PROJECT_ID,
    private_key_id: PRIVATE_KEY_ID,
    private_key: PRIVATE_KEY,
    client_email: CLIENT_EMAIL,
    client_id: CLIENT_ID,
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://accounts.google.com/o/oauth2/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-n5j69%40num10-208508.iam.gserviceaccount.com"
  }),
  databaseURL: `https://${DATABASE_NAME}.firebaseio.com`
});

exports.db = admin.database();
