const { Car } = require("../models/Car");

const createCar = async ({name, category, color, imageUrl, modal, registrationNo}) => {
   
  
    const car = new Car({
        name, category, color, imageUrl, registrationNo, modal
    });
  
    const createdCar = await car.save();
    return createdCar;
  };

  const getAll = async () => {
    const cars = await Car.find();
    return cars;
  };

  module.exports = {
    createCar,
    getAll,
  };