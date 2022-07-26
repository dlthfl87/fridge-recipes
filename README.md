# What is Happy Fridge?

With Happy Fridge, you can do your part to help reduce the environmental impact that food waste has on our climate. Happy Fridge provides a solution to reducing food waste by offering over 5,000 recipes to its users. Just enter the ingredients you have on hand and we'll do the rest!

## How to run locally
### Configuration
To run Happy Fridge locally, fork and clone this repository to your own local directory.

You will need to use the [Spoonacular API](https://spoonacular.com/food-api/console#Dashboard) to generate a private key. After signing up, find the API key in your console and insert private key in config.js file.

### Start the server
To start the server, run:
```bash
npm install
npm start
npm build
```

## Navigating the Application
In the top of the page, click on the hamburger icon to display the sidebar containing different recipes.You will be prompted to choose all the ingredients you have on hand with the exception of pantry items.

<!-- Not finding the ingredients? Input any additional ingredients in the text box below placing a comma in between each ingredient.  -->
Once you have made your selection, click the Find Recipe button.

Based on the ingredients you have chosen, you will be given a list of recipes in the order of the least additional ingredients needed.

 <!-- Click the show more button on the bottom to view additional recipes. -->