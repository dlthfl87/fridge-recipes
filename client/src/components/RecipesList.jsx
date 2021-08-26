import React from 'react';

export default class RecipesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="recipe-thumbnail">
        {this.props.list.map(recipe => (
          <div
            id={recipe.id}
            key={recipe.id}
            onClick={(e) => this.props.changeView(e)}>
          <img
            id={recipe.id}
            src={recipe.image}
            onClick={(e) => this.props.changeView(e)}/>
          <div
            id={recipe.id}
            onClick={(e) => this.props.changeView(e)}>
              {recipe.title}
          </div>
          <div
            id={recipe.id}
            onClick={(e) => this.props.changeView(e)}>
              {recipe.time} Mins
          </div>
          <div
          id={recipe.id}
          onClick={(e) => this.props.changeView(e)}>
            Need {recipe.missingIngredients} More Ingredients
          </div>
          <div
          id={recipe.id}
          onClick={(e) => this.props.changeView(e)}>
            {recipe.likes} Likes
          </div>
          </div>
        ))}
      </div>
    )
  }
}