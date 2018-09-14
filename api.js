const app = require("express");
const router = app.Router();
const { auth } = require("./routers/auth");
const { users } = require("./routers/users");

router.use("/auth", auth);
router.use("/users", users);

exports.router = router;
