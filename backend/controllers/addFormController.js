let Plant = require("../models/Plant");

const getAddForm = (req, res) => {
  // Plant.find()
  //   .then((plants) => res.json(plants))
  //   .catch((err) => res.json("Error:" + err));
};
const postAddForm = (req, res) => {
  let newPlant = req.body;
  console.log(newPlant);
  res.json(newPlant);
  // const newPlantSchema = new Plant(newPlant);
  // newPlantSchema
  //   .save()
  //   .then(() => res.json("User Added!"))
  //   .catch((err) => res.json("Error:" + err));
};

module.exports = { getAddForm, postAddForm };
