const config = require('../config');
const axios = require('axios');

module.exports = {
  get: (req, res) => {
  axios.get(config.url, {
      params: {
        apiKey: config.apiKey,
        includeIngredients: req.query.ingredients,
        ignorePantry: true,
        number: 10,
        // sort: 'min-missing-ingredients',
        sort: 'max-used-ingredients',
        addRecipeInformation: true,
      }
  })
  .then((response) => res.status(200).json(response.data.results))
  .catch((err) => res.status(404).send(err))
  }
}