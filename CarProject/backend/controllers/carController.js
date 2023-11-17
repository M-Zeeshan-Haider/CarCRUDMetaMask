const carService = require("../services/carService");
const { Car } = require("../models/Car");

const createCar = async (req, res) => {
  const { name, category, color, imageUrl, modal, registrationNo } = req.body;

  try {
    await carService.createCar({
      name,
      category,
      color,
      imageUrl,
      modal,
      registrationNo,
    });
    return res.send("Car created succesfully");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getCars = async (req, res) => {
  try {
    const cars = await carService.getAll();
    return res.status(200).json(cars);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteCar = async (req, res) =>{
    const carId = req.params.id;

    try {
      const removedCar = await Car.findByIdAndDelete(carId);
  
      if (!removedCar) {
        return res.status(404).json({ error: 'Car not found' });
      }
  
      res.json({ message: 'Car removed successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
};

const updateCar = async (req, res) => {
    const carId = req.params.id;
    const { name, category, color, imageUrl, modal, registrationNo } = req.body;
  
    try {
      // Find the car by ID and update its fields
      const updatedCar = await Car.findByIdAndUpdate(
        carId,
        {
          name,
          category,
          color,
          imageUrl,
          modal,
          registrationNo,
        },
        { new: true } // Return the updated car instead of the original one
      );
  
      if (!updatedCar) {
        return res.status(404).json({ error: 'Car not found' });
      }
  
      res.json({ message: 'Car updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

module.exports = {
  createCar,
  getCars,
  deleteCar,
  updateCar,
};
