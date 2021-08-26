import React from 'react';

export default class Recipe extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <img src={this.props.recipe.image} />
        <div>{this.props.recipe.title}</div>
        <div>by {this.props.recipe.sourceName}</div>
        <div>Prep time {this.props.recipe.time} Mins </div>
        <div>{this.props.recipe.vegan} Vegan</div>
        <div>{this.props.recipe.vegetarian} vegetarian</div>
        <div>{this.props.recipe.glutenFree} glutenFree</div>
        <div>{this.props.recipe.dairyFree}dairyFree</div>
        <div>{this.props.recipe.servings} Servings</div>
        <div>{this.props.recipe.summary}</div>
        {/* <div>{this.props.recipe.instructions}</div> */}
      </div>
    )
  }
}