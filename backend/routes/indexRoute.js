const express = require("express");
const router = express.Router();
const multer = require("multer");
const indexControllers = require("../controllers/indexController");

router.get("/plant/add", indexControllers.homeGetController);
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

module.exports = router;
