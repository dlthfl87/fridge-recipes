import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCheckbox from '../components/RecipeCheckbox';

export default function Home (props) {
  return (
    <main className="recipes-list">
      <RecipeCheckbox handleSubmit={props.handleSubmit} />
      <div className="thumbnail-container">
        {props.list.map(recipe => (
          <Link
            to={`/recipes/${recipe.id}`}
            key={recipe.id}
          >
            <div className="thumbnails">
              <img src={recipe.image}/>

                <span>{recipe.title}</span>

                {recipe.missingIngredients && <span>Needs {recipe.missingIngredients} More Ingredients</span>}

                <span>{recipe.time} Mins</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}