const auth = require("express").Router();
const lodash = require("lodash");
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
          const updates = {
            email: payload.email,
            name: payload.name,
            image: payload.picture
          };
          const oldUser = lodash.pick(user, ["name", "email", "image"]);

          if (lodash.isEqual(updates, oldUser)) {
            return res.json({ status: true });
          } else {
            Users.updateUser(payload.sub, updates)
              .then(user => res.json({ status: true }))
              .catch(error => res.json({ error: error }));
          }
        } else {
          const data = {
            name: payload.name,
            email: payload.email,
            image: payload.picture
          };

          Users.createUser(payload.sub, data)
            .then(user => res.json({ status: true }))
            .catch(error => res.json({ error: error }));
        }
      });
    })
    .catch(error => res.json({ error: error }));
});

auth.post("/logout", (req, res) => {});

exports.auth = auth;
