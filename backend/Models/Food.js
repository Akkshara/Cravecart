const mongoose = require('mongoose');
const { Schema } = mongoose;

const FoodSchema = new Schema({
  CategoryName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  options: {
    type: [
      new Schema({
        half: {
          type: String,
          required: true,
          description: "Price of half portion"
        },
        full: {
          type: String,
          required: true,
          description: "Price of full portion"
        }
      }, { _id: false })
    ],
    required: true,
    description: "Array of available options for the food item"
  },
  description: {
    type: String,
    required: true,
    description: "Description of the food item"
  }
}, { collection: 'Fooddata', _id: false });



const Food = mongoose.model('Food', FoodSchema);


module.exports = Food;
