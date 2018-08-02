const app = require("express");
const router = app.Router();
const { auth } = require("./routers/auth");

router.use("/auth", auth);

router.get("/test", (req, res) => res.json({ test: "ok" }));

exports.router = router;
