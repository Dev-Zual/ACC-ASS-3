const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/v1/user.route");
const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("route is working! in acc");
});

app.use("/api/v1/user", userRoutes);

module.exports = app;
