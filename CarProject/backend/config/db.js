const mongoose = require("mongoose");
require("dotenv").config();

const mongoDB = process.env.DB_URL;
const connectionDB = async () => {
  try {
    mongoose.connect(mongoDB, {
      useNewUrlParser: true,
    });
    console.log("mongodb connection established");
  } catch (error) {
    console.log("Error in DB connection: " + error);
    process.exit(1);
  }
};

module.exports = connectionDB;
