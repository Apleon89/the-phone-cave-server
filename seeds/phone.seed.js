require("dotenv").config();
require("../db/index.js");

const { default: mongoose } = require("mongoose");
const Phone = require("../models/Phone.model.js");

const phones = require("./phones.json");

const insertData = async () => {
  try {
    await Phone.deleteMany();

    await Phone.create(phones);

    console.log("Data added!");
    mongoose.connection.close();
  } catch (error) {
    console.log("Ops! There is a problem!", error);
  }
};

insertData();
