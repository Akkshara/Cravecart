const mongoose = require('mongoose');
const { Schema } = mongoose;

const FoodCategory = new Schema({
  CategoryName: {
    type: String,
    required: true,
  },
 
}, { collection: 'Foodcategory', _id: false });



const Category = mongoose.model('Category', FoodCategory);


module.exports = Category;
