import React from 'react';

export default class RecipesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="thumbnails">
        <div className="container grid">
        {this.props.list.map(recipe => (
          <div
            id={recipe.id}
            key={recipe.id}
            onClick={(e) => this.props.changeView(e)}>
          <img
            id={recipe.id}
            src={recipe.image}
            onClick={(e) => this.props.changeView(e)}/>
          <h2
            id={recipe.id}
            onClick={(e) => this.props.changeView(e)}>
              {recipe.title}
          </h2>
          <div
            id={recipe.id}
            onClick={(e) => this.props.changeView(e)}>
              {recipe.time} Mins
          </div>
          <div
          id={recipe.id}
          onClick={(e) => this.props.changeView(e)}>
            Needs {recipe.missingIngredients} More Ingredients
          </div>
          <div
          id={recipe.id}
          onClick={(e) => this.props.changeView(e)}>
            {recipe.likes} Likes
          </div>
          </div>
        ))}
        </div>
      </div>
    )
  }
}