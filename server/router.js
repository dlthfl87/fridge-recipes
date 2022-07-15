const controller = require('./controller/getRecipe.js');
const express = require('express');
const router = express.Router();

router.get('/recipe', controller.get);

module.exports = router;