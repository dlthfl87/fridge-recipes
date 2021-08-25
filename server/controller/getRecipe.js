const config = require('../config');
const axios = require('axios');
const Recipes = require('../../database/Recipes.js');
// const sampleData = require('../../database/sampleData.js');
const mongoose = require('mongoose');

module.exports = {
  get: (req, res) => {
  axios.get(config.url, {
    params: {
      apiKey: config.apiKey,
      includeIngredients: req.query.ingredients,
      ignorePantry: true,
      number: 8,
      sort: 'max-used-ingredients',
      addRecipeInformation: true,
    }
  })
  .then((response) => {
    return response.data.results.map((recipe) => {
    const recipeObj = {
    id: recipe.id,
    image: recipe.image,
    title: recipe.title,
    time: recipe.readyInMinutes,
    missingIngredients: recipe.missedIngredientCount,
    likes: recipe.aggregateLikes,
    }
    return recipeObj;
  })
})
  .then((recipes) => {
    console.log(recipes)
    Recipes.insertMany(recipes, function (err) {
      if (err) {
            return handleError(err);
      } else {
        Recipes.find((err, response) => {
          if (err) res.status(404).send('failed');
          else {

            res.status(200).send(response);
          }
        }).sort({ missingIngredients: 'asc'})
      }
    })
  })
  }
}