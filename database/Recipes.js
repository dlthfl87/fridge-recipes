const mongoose = require('mongoose');
const db = require('./index');

const Schema = mongoose.Schema;

const recipesSchema = new Schema({
  id: Number,
  image: String,
  title: String,
  time: Number,
  missingIngredients: Number,
  likes: Number,
  // vegan: Boolean,
  // vegetarian: Boolean,
  // glutenFree: Boolean,
  servings: Number,
  summary: String,
  instructions: Array,
  ingredients: Array,
  sourceName: String,
})

const Recipes = mongoose.model('Recipe', recipesSchema);

module.exports = Recipes;