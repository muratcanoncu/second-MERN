const express = require("express");
const router = express.Router();
const User = require("../models/User");
const multer = require("multer");
const indexControllers = require("../controllers/indexController");
const Plant = require("../models/Plant");
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "public/uploads");
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({ storage });

router.post(
  "/plant/add",
  upload.single("plantPhoto"),
  indexControllers.homePostController
);

router.post("/plant/delete/:id", indexControllers.deleteController);

router.get("/plant/all", indexControllers.homeGetController);
router.get("/plant/:name", indexControllers.getByName);
// router.get("/plant/detail/:id",(req,res)=>{
//   Plant.findById()
// })
// router.get("/user/create", (req, res) => {
//   const user = {
//     email: "murat.oncu@gmail",
//     name: "murat can",
//     age: 28,
//   };
//   const newUser = new User(user);
//   newUser.save(() => {
//     res.json(newUser);
//     console.log("new user added");
//   });
// });
module.exports = router;
