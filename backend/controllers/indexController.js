const Plant = require("../models/Plant");

const homePostController = (req, res) => {
  console.log(req.body, req.file);
  const newPlantSchema = new Plant({
    name: req.body.name,
    climate: req.body.climate,
    water: req.body.water,
    photo: "/uploads/" + req.file.filename,
    added_by: "60acb4404ed48940c0e98b50",
  });
  newPlantSchema.save((err, doc) => {
    console.log(doc);
    res.json("New Plant Added!");
  });
};

const deleteController = (req, res) => {
  const plantId = req.body.removePlantId;
  Plant.findByIdAndDelete(plantId, (err, doc) => {
    console.log("Item is successfully deleted:");
  });
};
const homeGetController = (req, res) => {
  Plant.find((err, docs) => {
    res.json(docs);
  }).populate("added_by");
};
const getByName = (req, res) => {
  const name = req.params.name;

  Plant.find((err, plants) => {
    res.json(plants);
  })
    .where("name")
    .equals(name);
};
module.exports = {
  homePostController,
  homeGetController,
  deleteController,
  getByName,
};
