const express = require("express");

const app = express();
const port = process.env.PORT || 4000

app.get("/", (req, res) => {
  return res.json({ a: "Hello" });
});

app.listen(port, () => console.log(`Running on port ${port}`));
