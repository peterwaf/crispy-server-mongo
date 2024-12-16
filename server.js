const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 3000;
dotenv.config();

//middlewares

app.use(express.json());

//routes

const subscribersRouter = require("./routes/subscribers");

app.use("/subscribers", subscribersRouter);

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("..connected to the database successfully");
  })
  .catch(() => {
    console.log("error connecting to the database");
  });
app.listen(PORT, () => {
  console.log("..server started");
});
