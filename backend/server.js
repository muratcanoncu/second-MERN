const express = require("express");
const app = express();
const cors = require("cors");

const dataBase = require("./config/dataBase");
dataBase();
//! Settings
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

const indexRoute = require("./routes/indexRoute");

app.use("/", indexRoute);

app.listen(5200, () => {
  console.log("Server is running on PORT::" + 5200);
});
