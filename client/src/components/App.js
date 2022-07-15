import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from '../page/Home.js';
// import data from '../data.js';
import Recipe from './Recipe.jsx';
import Header from './Header.jsx';


export default function App () {
  const [currentRecipe, setCurrentRecipe] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [clickedItems, setClickedItems] = useState('');

  useEffect(() => {
    axios.get('/recipe')
    .then((response) => {
        setRecipes([...response.data]);
      })
      .catch((err) => console.log(err));
  }, [])

  useEffect(() => {
    axios.get('/recipe', {params: {ingredients: clickedItems}})
    .then((response) => {
        setRecipes([...response.data]);
      })
      .catch((err) => console.log(err));
  }, [clickedItems])

  console.log(clickedItems);


  function fetchData(ingredientList) {
    axios.get('/recipe', {params: {ingredients: ingredientList}})
    .then((response) => {
        setRecipes([...response.data]);
      })
      .catch((err) => console.log(err));
  }

  function handleSubmit(e, list) {
    e.preventDefault();
    setClickedItems(list);
  }

  // function getRecipe () {
  //   for (let i = 0; i < this.state.recipes.length; i++) {
  //     if (this.state.recipes[i].id == this.state.recipeId) {
  //       this.setState({
  //         currentRecipe: this.state.recipes[i],
  //         view: 'recipe',
  //       })
  //     }
  //   }
  // }

  // function submitButton(e) {
  //   e.preventDefault();
  //   const ingredientString = this.state.ingredientList.join(', ')
  //   axios.get('/recipes', { params: {ingredients: ingredientString }})
  //   .then((response) => {
  //     this.setState({
  //       recipes: [...response.data]
  //     })
  //   })
  //   .catch((err) => console.log(err))
  // }

  // function handleInputChange(e){
  //   const target = e.target;
  //   const name = target.name;

  //   if (this.state[name] === undefined || this.state[name] === false) {
  //     this.setState({
  //       [name]: e.target.checked,
  //       ingredientList: [name, ...this.state.ingredientList]
  //     })
  //   } else if (this.state[name] === true) {
  //     this.setState({
  //       [name]: e.target.checked,
  //       ingredientList: this.state.ingredientList.filter(e => e !== name)
  //     })
  //   }

  // }

  return (
    <div>
      <Header />

      <Routes>
        <Route
          exact path='/'
          element={<Home list={recipes} handleSubmit={handleSubmit}/>}
        />
        <Route
          path="/recipes/:recipeId"
          element={<Recipe list={recipes} />}
        />
      </Routes>
    </div>
  )
}