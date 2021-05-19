const Plant = require("../models/Plant");

const homePostController = (req, res) => {
  const newPlantSchema = new Plant({
    name: req.body.name,
    climate: req.body.climate,
    water: req.body.water,
    photo: "/uploads/" + req.file.filename,
  });
  newPlantSchema.save((err, doc) => {
    console.log(doc);
    res.json("New Plant Added!");
  });
};

const deleteController = (req, res) => {
  const plantId = req.body.removePlantId;
  console.log(plantId);
  Plant.findByIdAndDelete(plantId, (err, doc) => {
    console.log("Item is successfully deleted:", doc);
  });
};
const homeGetController = (req, res) => {
  Plant.find((err, docs) => {
    res.json(docs);
  });
};
module.exports = { homePostController, homeGetController, deleteController };
