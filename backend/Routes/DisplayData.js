const express = require ('express');
const router = express.Router();
const Food = require('../Models/Food');
const Category = require('../Models/Category');
// api/foodcategory
router.get('/displaydata', async (req, res) => {
    try {
      const foods = await Food.find({});
      res.json(foods);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

router.get('/displaycategory', async (req, res) => {
    try {
      const category = await Category.find({});
      res.json(category);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;