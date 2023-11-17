const mongoose = require("mongoose");

// Declare the Schema of the Mongo model
const carSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  modal: {
    type: String,
    required: true,
  },
  registrationNo: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  
});

const modelExists = mongoose.models.car;
const Car = modelExists
  ? mongoose.model("car")
  : mongoose.model("car", carSchema);

//Export the model
module.exports = {
  Car,
  carSchema,
};
