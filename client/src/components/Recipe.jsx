import React from 'react';

export default class Recipe extends React.Component {
  constructor(props) {
    super(props);
  }

  vegetarian(boolean) {
    if (boolean) {
      return <i class="fas fa-seedling"></i>
    }
  }

  vegan(boolean) {
    if (boolean === true) {
      return <i class="fab fa-vine"></i>
    }
  }

  gluten(boolean) {
    if (boolean) {
      return <i class="fab fa-gofore"></i>
    }
  }

  render() {
    return (
      <div className="container">
        <h2>{this.props.recipe.title}</h2>
        <h3>by {this.props.recipe.sourceName}</h3>
        <div className="description">
        <img className="image" src={this.props.recipe.image} />
        <div className="summary">{this.props.recipe.summary}</div>
        </div>
        <div>Prep time: {this.props.recipe.time} Mins </div>
        <div>{this.props.recipe.servings} Servings</div>
        {/* {this.vegan(this.props.recipe.vegan)}
        {this.vegetarian(this.props.recipe.vegetarian)}
        {this.gluten(this.props.recipe.glutenFree)} */}
        <h3>Ingredients</h3>
        <div className="ingredients">
        {this.props.recipe.ingredients.map((ingredient, index) => {
          return <div className="ingredient" key={index}>{ingredient}</div>
        })}
        </div>
        <h3>Instructions</h3>
        <div className="rows">
        </div>
        {this.props.recipe.instructions.map((instruction, index) => {
          return <div className="instructions" key={`i-${index}`}>{instruction}</div>
        })}
      </div>
    )
  }
}