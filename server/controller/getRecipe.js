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
      number: 1,
      sort: 'max-used-ingredients',
      addRecipeInformation: true,
      instructionsRequired: true,
    }
  })
  .then((response) => {
    return response.data.results.map((recipe) => {

    const ingredients = [];
    const instructions = [];
    recipe.analyzedInstructions.forEach(instruction => {
      instruction.steps.forEach(step => {
        instructions.push(step.step)
        step.ingredients.forEach(ingredient => {
          ingredients.push(ingredient.name)
        })
      })
    })

    const recipeObj = {
    id: recipe.id,
    image: recipe.image,
    title: recipe.title,
    time: recipe.readyInMinutes,
    missingIngredients: recipe.missedIngredientCount,
    likes: recipe.aggregateLikes,
    vegan: recipe.vegan,
    vegetarian: recipe.vegetarian,
    glutenFree: recipe.glutenFree,
    dairyFree: recipe.dairyFree,
    servings: recipe.servings,
    summary: recipe.summary.replace(/<[^>]*>?/gm, ''),
    instructions: instructions,
    ingredients: ingredients,
    sourceName: recipe.sourceName
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