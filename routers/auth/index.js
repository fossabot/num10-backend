const auth = require("express").Router();
const { OAuth2Client } = require("google-auth-library");
const { CLIENT_SIGN_IN_ID } = require("../../constants");
const { Users } = require("../../firebase/users");

auth.post("/login", (req, res) => {
  const client = new OAuth2Client(CLIENT_SIGN_IN_ID);
  const { token } = req.body;

  const ticket = client
    .verifyIdToken({
      idToken: token,
      audience: CLIENT_SIGN_IN_ID
    })
    .then(data => {
      const { payload } = data;

      Users.getUser(payload.sub).then(user => {
        if (user) {
          res.json({ user: user });
        } else {
          Users.createUser(
            payload.sub,
            payload.name,
            payload.email,
            payload.picture
          )
            .then(user => res.json({ user: user }))
            .catch(error => res.json({ error: error }));
        }
      });
    })
    .catch(error => res.json({ error: error }));
});

auth.post("/logout", (req, res) => {});

exports.auth = auth;
