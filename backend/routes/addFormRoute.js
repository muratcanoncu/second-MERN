const express = require("express");
const router = express.Router();
const addFormController = require("../controllers/addFormController");

router.get("/", addFormController.getAddForm);
router.post("/", addFormController.postAddForm);

module.exports = router;
