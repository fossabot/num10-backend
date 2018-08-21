const auth = require("express").Router();
const lodash = require("lodash");
const { Users } = require("../../firebase/users");

auth.post("/login", (req, res) => {
  const { userData } = req;
  const { payload } = userData;

  Users.getUser(payload.sub)
    .then(user => {
      if (user) {
        const updates = {
          email: payload.email,
          name: payload.name,
          image: payload.picture
        };
        const oldUser = (({ name, email, image }) => ({ name, email, image }))(
          user
        );

        if (lodash.isEqual(updates, oldUser)) {
          return res.json({ status: true });
        } else {
          Users.updateUser(payload.sub, updates)
            .then(() => res.json({ status: true }))
            .catch(error => res.json({ error: error }));
        }
      } else {
        const data = {
          name: payload.name,
          email: payload.email,
          image: payload.picture
        };

        Users.createUser(payload.sub, data)
          .then(() => res.json({ status: true }))
          .catch(error => res.json({ error: error }));
      }
    })
    .catch(error => res.json({ error: error }));
});

auth.post("/logout", (req, res) => {});

exports.auth = auth;
