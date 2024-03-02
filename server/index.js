const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");

// mongoose
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log(`MongoDB connected 🧠`))
  .catch((err) => console.log(`Database not connected`, err));

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/", require("./routes/newsRoutes"));

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
