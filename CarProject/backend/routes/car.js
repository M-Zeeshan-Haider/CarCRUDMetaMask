const express = require("express");
const router = express.Router();
const {
  createCar,
  getCars,
  deleteCar,
  updateCar
} = require("../controllers/carController");

const validate = require("../middlewares/validation/validateSchema");
const createCarSchema = require("../schemas/createCarSchema");
// Routes
router.post("/", validate(createCarSchema), createCar);
router.get("/", getCars);
router.delete("/:id", deleteCar);
router.put("/:id", validate(createCarSchema), updateCar);

module.exports = router;
