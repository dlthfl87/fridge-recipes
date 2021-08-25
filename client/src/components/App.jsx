import React from 'react';
import axios from 'axios';
import RecipesList from './RecipesList.jsx';
import data from '../data.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [...data],
      ingredients: '',
    }
    this.insertText = this.insertText.bind(this);
    this.submitButton = this.submitButton.bind(this);
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

  render() {
    return (
      <div>
        <h1>Fridge Recipes</h1>
        <form onSubmit={this.submitButton}>
          <label htmlFor="ingredients">Ingredients: </label>
          <input onChange={this.insertText} name="ingredients" placeholder="for more than 1, add ', '"></input>
          <button>Submit</button>
          < RecipesList list={this.state.recipes}/>
        </form>
      </div>
    );
  }
}