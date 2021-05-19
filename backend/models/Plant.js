const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlantSchema = new Schema({
  name: String,
  climate: String,
  water: Number,
  photo: String,
});

const Plant = mongoose.model("Plant", PlantSchema);
module.exports = Plant;
