import React from 'react';
import { useParams } from 'react-router-dom';

export default function Recipe (props) {
  const {recipeId} = useParams();

  const currentRecipe = props.list.find(recipe => recipe.id === Number(recipeId));

  return (
    <div className="container">
      recipe
      <h2>{currentRecipe.title}</h2>
      <h3>by {currentRecipe.sourceName}</h3>
      <div className="description">
      <img className="image" src={currentRecipe.image} />
      <div className="summary">{currentRecipe.summary}</div>
      </div>
      <div>Prep time: {currentRecipe.time} Mins </div>
      <div>{currentRecipe.servings} Servings</div>

      <h3>Ingredients</h3>
      <div className="ingredients">
      {currentRecipe.ingredients.map((ingredient, index) => {
        return <div className="ingredient" key={index}>{ingredient}</div>
      })}
      </div>
      <h3>Instructions</h3>
      <div className="rows">
      </div>
      {currentRecipe.instructions.map((instruction, index) => {
        return <div className="instructions" key={`i-${index}`}>{instruction}</div>
      })}
    </div>
  )
}