const express = require("express");
const mongoose = require("mongoose");
const linkRoute = require('./routes/linkRoute');
const path = require('path');
const app = express();
const port = 3000;

mongoose
  .connect("mongodb://localhost/newlinks", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => {
    console.log("Database loaded");
  })
  .catch((error) => {
    console.log("Error", error);
  });

app.use("/", linkRoute)

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "templates"))

app.listen(port, () => console.log(`Server running on port ${port}`));
