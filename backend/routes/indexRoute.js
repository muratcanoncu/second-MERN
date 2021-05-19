const express = require("express");
const router = express.Router();

const indexControllers = require("../controllers/indexController");

router.get("/plant/add", indexControllers.homeGetController);

router.post("/plant/add", indexControllers.homePostController);

module.exports = router;
