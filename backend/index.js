const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Shashi!");
});

app.listen(port, () => {
  console.log(` listening at http://localhost:${port}`);
});
