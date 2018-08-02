const app = require("express");
const router = app.Router();
const { auth } = require("./routers/auth");

router.use("/auth", auth);

exports.router = router;
