import React from 'react';
import axios from 'axios';
import RecipesList from './RecipesList.jsx';
import data from '../data.js';
import Recipe from './Recipe.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [...data],
      ingredients: '',
      view: 'main',
      recipeId: '',
      currentRecipe: {},
    }
    this.insertText = this.insertText.bind(this);
    this.submitButton = this.submitButton.bind(this);
    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
    this.getRecipe = this.getRecipe.bind(this);
  }

  changeView (e){
    e.preventDefault();
    this.setState({
      recipeId: e.target.id,
    }, () => this.getRecipe())
  }

  getRecipe () {
    for (let i = 0; i < this.state.recipes.length; i++) {
      if (this.state.recipes[i].id == this.state.recipeId) {
        this.setState({
          currentRecipe: this.state.recipes[i],
          view: 'recipe',
        })
      }
    }
  }

  submitButton(e) {
    e.preventDefault();
    axios.get('/api/recipes', { params: {ingredients: this.state.ingredients }})
    .then((response) => {
      this.setState({
        recipes: [...response.data]
      })
    })
    .catch((err) => console.log(err))
  }

  insertText(e) {
    this.setState({
      ingredients: e.target.value
    })
  }

  renderView() {
    if (this.state.view === 'main') {
      return  < RecipesList changeView={this.changeView} list={this.state.recipes}/>
    } else if (this.state.view === 'recipe') {
      return <Recipe recipe={this.state.currentRecipe}/>
    }
  }


  render() {
    return (
      <div>
        <h1>Happy Fridge</h1>
        <form onSubmit={this.submitButton}>
          <label htmlFor="ingredients">Ingredients: </label>
          <input onChange={this.insertText} name="ingredients" placeholder="for more than 1, add ', '"></input>
          <button>Submit</button>

          <div>
            {this.renderView()}
          </div>
        </form>
      </div>
    )
  }
}