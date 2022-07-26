const controller = require('./controller/getRecipe.js');
const express = require('express');
const router = express.Router();

router
  .get('/recipes', controller.getAll)
  .get('/recipes/:recipeId', controller.findRecipe);

module.exports = router;