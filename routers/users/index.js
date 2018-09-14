const users = require("express").Router();
const { Users } = require("../../firebase/users");

users.post("/createChange", (req, res) => {
  const { body, userData } = req;
  const { numberOfChange, datetime } = body;
  const { payload } = userData;
  const updates = {
    [`/changes/${datetime}`]: numberOfChange
  };

  Users.updateUser(payload.sub, updates)
    .then(() => res.json({ status: true }))
    .catch(error => res.json({ error: error }));
});

exports.users = users;
