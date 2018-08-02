const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const cookieSession = require("cookie-session");
const { router } = require("./api");
const app = express();
const { SECRET_COOKIE, PORT } = require("./constants");

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

app.use("/api/v1", router);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
