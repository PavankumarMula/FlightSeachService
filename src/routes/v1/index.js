const express = require('express');
const router = express.Router();
const cityController  = require("../../controllers/city-controller");

router.post("/city",cityController.createCity);
router.get("/city/:id",cityController.getCity);
router.get("/city",cityController.getAllCities)
router.patch("/city/:id",cityController.updateCity);
router.delete("/city/:id",cityController.removeCity);

module.exports = router;