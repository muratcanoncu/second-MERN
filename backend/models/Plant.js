const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");
const PlantSchema = new Schema({
  name: String,
  climate: String,
  water: Number,
  photo: String,
  added_by: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Plant = mongoose.model("Plant", PlantSchema);
module.exports = Plant;
