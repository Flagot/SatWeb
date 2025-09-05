require("dotenv").config();
const express = require("express");
const examRoute = require("./routes/examRoute");
const moduleRoutes = require("./routes/moduleRoute");
const sectionRoutes = require("./routes/sectionRoute");
const questionRoute = require("./routes/questionsRoute");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  //   console.log(req.path, req.method);
  next();
});

app.use("/api/sat", examRoute);
app.use("/api/sat", moduleRoutes);
app.use("/api/sat", questionRoute);
app.use("/api/sat", sectionRoutes);

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
