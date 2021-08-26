import React from 'react';
import axios from 'axios';
import RecipesList from './RecipesList.jsx';
import data from '../data.js';
import Recipe from './Recipe.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      // ingredients: '',
      view: 'main',
      recipeId: '',
      currentRecipe: {},
      ingredientList: [],
    }
    // this.insertText = this.insertText.bind(this);
    this.submitButton = this.submitButton.bind(this);
    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
    this.getRecipe = this.getRecipe.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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
    const ingredientString = this.state.ingredientList.join(', ')
    axios.get('/api/recipes', { params: {ingredients: ingredientString }})
    .then((response) => {
      this.setState({
        recipes: [...response.data]
      })
    })
    .catch((err) => console.log(err))
  }

  // insertText(e) {
  //   this.setState({
  //     ingredients: e.target.value
  //   })
  // }

  renderView() {
    if (this.state.view === 'main') {
      return  (
      <div>
        < RecipesList changeView={this.changeView} list={this.state.recipes}/>
        <form onSubmit={this.submitButton}>
            <h1>Ingredients:</h1>
            <h2>Vegetables</h2>

            <label>
            potato
            <input
            name="potato"
            type="checkbox"
            checked={this.state.potato}
            onChange={this.handleInputChange}>
            </input>
          </label>

          <label>
            carrot
            <input
            name="carrot"
            type="checkbox"
            checked={this.state.carrot}
            onChange={this.handleInputChange}>
            </input>
          </label>

          <label>
            spinach
            <input
            name="spinach"
            type="checkbox"
            checked={this.state.spinach}
            onChange={this.handleInputChange}>
            </input>
          </label>

          <label>
            mushroom
            <input
            name="mushroom"
            type="checkbox"
            checked={this.state.mushroom}
            onChange={this.handleInputChange}>
            </input>
          </label>

          <label>
            cilantro
            <input
            name="cilantro"
            type="checkbox"
            checked={this.state.cilantro}
            onChange={this.handleInputChange}>
            </input>
          </label>

          <label>
            corn
            <input
            name="corn"
            type="checkbox"
            checked={this.state.corn}
            onChange={this.handleInputChange}>
            </input>
          </label>
          <label>
            tomatoes
            <input
            name="tomatoes"
            type="checkbox"
            checked={this.state.tomatoes}
            onChange={this.handleInputChange}>
            </input>
          </label>

          <label>
            onions
            <input
            name="onions"
            type="checkbox"
            checked={this.state.onions}
            onChange={this.handleInputChange}>
            </input>
          </label>

          <label>
            lettuce
            <input
            name="lettuce"
            type="checkbox"
            checked={this.state.lettuce}
            onChange={this.handleInputChange}>
            </input>
          </label>

          <label>
            avocado
            <input
            name="avocado"
            type="checkbox"
            checked={this.state.avocado}
            onChange={this.handleInputChange}>
            </input>
          </label>

          <label>
            cucumber
            <input
            name="cucumber"
            type="checkbox"
            checked={this.state.cucumber}
            onChange={this.handleInputChange}>
            </input>
          </label>

          <label>
            asparagus
            <input
            name="asparagus"
            type="checkbox"
            checked={this.state.asparagus}
            onChange={this.handleInputChange}>
            </input>
          </label>

          <label>
            eggplant
            <input
            name="eggplant"
            type="checkbox"
            checked={this.state.eggplant}
            onChange={this.handleInputChange}>
            </input>
          </label>

          <h2>Fruits</h2>

            <label>
            lime
            <input
            name="lime"
            type="checkbox"
            checked={this.state.lime}
            onChange={this.handleInputChange}>
            </input>
          </label>

          <label>
            banana
            <input
            name="banana"
            type="checkbox"
            checked={this.state.banana}
            onChange={this.handleInputChange}>
            </input>
          </label>

          <label>
            blueberry
            <input
            name="blueberry"
            type="checkbox"
            checked={this.state.blueberry}
            onChange={this.handleInputChange}>
            </input>
          </label>

          <label>
            kiwi
            <input
            name="kiwi"
            type="checkbox"
            checked={this.state.kiwi}
            onChange={this.handleInputChange}>
            </input>
          </label>

          <label>
            peach
            <input
            name="peach"
            type="checkbox"
            checked={this.state.peach}
            onChange={this.handleInputChange}>
            </input>
          </label>

          <label>
            watermelon
            <input
            name="watermelon"
            type="checkbox"
            checked={this.state.watermelon}
            onChange={this.handleInputChange}>
            </input>
          </label>
          <label>
            orange
            <input
            name="orange"
            type="checkbox"
            checked={this.state.orange}
            onChange={this.handleInputChange}>
            </input>
          </label>

          <label>
            mango
            <input
            name="mango"
            type="checkbox"
            checked={this.state.mango}
            onChange={this.handleInputChange}>
            </input>
          </label>

          <label>
            papaya
            <input
            name="papaya"
            type="checkbox"
            checked={this.state.papaya}
            onChange={this.handleInputChange}>
            </input>
          </label>

          <label>
            blackberry
            <input
            name="blackberry"
            type="checkbox"
            checked={this.state.blackberry}
            onChange={this.handleInputChange}>
            </input>
          </label>

          <label>
            strawberry
            <input
            name="strawberry"
            type="checkbox"
            checked={this.state.strawberry}
            onChange={this.handleInputChange}>
            </input>
          </label>

          <label>
            apple
            <input
            name="apple"
            type="checkbox"
            checked={this.state.apple}
            onChange={this.handleInputChange}>
            </input>
          </label>

          <label>
            lemon
            <input
            name="lemon"
            type="checkbox"
            checked={this.state.lemon}
            onChange={this.handleInputChange}>
            </input>
          </label>

          <br></br><br></br>
          <button>Find Recipe</button>
        </form>
      </div>
      )
    } else if (this.state.view === 'recipe') {
      return <Recipe recipe={this.state.currentRecipe}/>
    }
  }

  handleInputChange(e){
    const target = e.target;
    const name = target.name;

    if (this.state[name] === undefined || this.state[name] === false) {
      this.setState({
        [name]: e.target.checked,
        ingredientList: [name, ...this.state.ingredientList]
      })
    } else if (this.state[name] === true) {
      this.setState({
        [name]: e.target.checked,
        ingredientList: this.state.ingredientList.filter(e => e !== name)
      })
    }

  }

  render() {
    return (
      <div>
        <h1>Happy Fridge</h1>
        {/* <form onSubmit={this.submitButton}>
          <label htmlFor="ingredients">Ingredients:
          <input onChange={this.insertText} name="ingredients" placeholder="for more than 1, add ', '"></input>
          </label>
          <button>Submit</button>
        </form> */}

          <div>
            {this.renderView()}
          </div>
      </div>
    )
  }
}