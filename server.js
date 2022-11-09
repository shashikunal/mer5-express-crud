const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const employeeRoute = require("./routes/employee");
let app = express();
//connect database
let URL = "mongodb://localhost:27017/emp-api";

let connectDb = async () => {
  await mongoose.connect(URL);
  console.log("database connected");
};
connectDb();

//bodyparser middleware
app.use(express.json());
app.use(cors());
//mount routes
app.use("/api", employeeRoute);
app.listen(5000, err => {
  if (err) throw err;
  console.log("api server is running on 5000");
});
