const express = require("express");
const cors = require("cors");
const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("route is working!");
});

module.exports = app;
