const Plant = require("../models/Plant");

const homeGetController = (req, res) => {
  Plant.find((err, docs) => {
    res.json(docs);
  });
};
const homePostController = (req, res) => {
  const newPlantSchema = new Plant(req.body.plant);
  newPlantSchema.save((err, doc) => {
    console.log(doc);
    res.json("New Plant Added!");
  });
};

module.exports = { homePostController, homeGetController };
