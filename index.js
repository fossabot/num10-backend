const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const passport = require("passport")
const { PORT } = require("./constants");
const { router } = require("./api");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(passport.initialize());

app.use("/api/v1", router);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
