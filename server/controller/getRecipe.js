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
      number: 3,
      sort: 'max-used-ingredients',
      addRecipeInformation: true,
    }
  })
    .then(async (response) => {
      response.data.results.forEach(async (recipe) => {
        const foodRecipe = new Recipes({
          id: recipe.id,
          image: recipe.image,
          title: recipe.title,
          time: recipe.readyInMinutes,
          missingIngredients: recipe.missedIngredientCount,
          likes: recipe.aggregateLikes,
        })
        await foodRecipe.save();
      })
      await Recipes.find()
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(404).send('failed'))
    })
  }
}