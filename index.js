const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const passport = require("passport");
const cookieSession = require("cookie-session");
const { router } = require("./api");
const app = express();
const { SECRET_COOKIE } = require("./constants");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(
  cookieSession({
    name: "session",
    keys: [SECRET_COOKIE],
    maxAge: 24 * 60 * 60 * 1000 * 7
  })
);
app.use(passport.initialize());
app.use(passport.session())

app.use("/api/v1", router);

app.listen(4000, () => console.log(`Running on port ${4000}`));
