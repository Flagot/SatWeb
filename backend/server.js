require("dotenv").config();
const express = require("express");
const waiterRoute = require("./routes/waiter.route");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  //   console.log(req.path, req.method);
  next();
});

app.use("/api/sat", waiterRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db & Listining on port 4000:");
    });
  })
  .catch((err) => {
    console.log(err);
  });
