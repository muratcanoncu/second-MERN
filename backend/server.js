const express = require("express");
const app = express();
const cors = require("cors");
//! Settings
app.use(cors());
app.use(express.json());

app.post("/", (req, res) => {
  res.json(req.body);
});

app.listen(5200, () => {
  console.log("Server is running on PORT::" + 5200);
});
