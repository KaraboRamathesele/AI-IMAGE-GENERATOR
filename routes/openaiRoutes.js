// bring in express
const express = require("express");

//import controllers
const { generateImage } = require("../controllers/openaiControllers");

//create router
const router = express.Router();

router.post("/generateimage", generateImage);

// export router
module.exports = router;
