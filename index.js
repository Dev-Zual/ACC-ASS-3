const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();
const port = process.env.PORT || 8080;

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("Database connection is successful");
  } catch (error) {
    console.log("Database is not connect!");
    console.log(error.message);
    process.exit(1);
  }
};

app.listen(port, () => {
  console.log(`server running at ${port}`);
  dbConnect();
});
