import React, {useState, useEffect} from 'react';

export default function RecipeCheckbox (props) {
  const [formData, setFormData] = useState({
    vegetableOptions: { garlic: false, onion: false, tomato: false, potato: false, mushroom: false, avocado: false, carrots: false, broccoli: false, corn: false, romaine: false, squash: false, bokchoy: false, jalapeno: false, scallion: false, kale: false, cauliflower: false, cabbage: false, celery: false },
    dairyAndEggOptions: { butter: false, eggs: false, milk: false, yogurt: false, cream: false, buttermilk: false },
    fruitOptions: { strawberry: false, blueberry: false, orange: false, lemon: false, mango: false, coconut: false, apple: false, banana: false, watermelon: false, pineapple: false, peach: false, lime: false },
    meatOptions: { bacon: false, beef: false, chicken: false, ham: false, pork: false, sausage: false, prosciutto: false, chorizo: false, salami: false, lamb: false, bison: false }
  });

  const vegetables = Object.keys(formData.vegetableOptions);
  const dairyAndEggs = Object.keys(formData.dairyAndEggOptions);
  const fruits = Object.keys(formData.fruitOptions);
  const meats = Object.keys(formData.meatOptions);

  function handleChange(e) {
    const {id, name, checked} = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        [id]: checked
      }
    }))
  }

  function findString() {
    const ingredients = Object.assign(...Object.values(formData));

    const checkedItems = [];
    for (const item in ingredients) {
      if (ingredients[item]) {
        checkedItems.push(item);
      }
    }
    return checkedItems.join(', ')
  }

  return (
      <div>
        <form onSubmit={(e) => {
          props.handleSubmit(e, findString())
          }}>
          <div>

            <span>Vegetables</span>
            {vegetables.map(item => {
              return (
              <span>
                <label htmlFor={item}>{item}</label>
                <input
                  id={item}
                  name={`vegetableOptions`}
                  type="checkbox"
                  checked={formData.vegetableOptions[item]}
                  onChange={(e) => handleChange(e)}>
                </input>
              </span>
            )})}
          </div>

          <div>
            <span>Dairy And Eggs</span>
            {dairyAndEggs.map(item => {
              return (
              <span>
                <label htmlFor={item}>{item}</label>
                <input
                  id={item}
                  name={`dairyAndEggOptions`}
                  type="checkbox"
                  checked={formData.dairyAndEggOptions[item]}
                  onChange={(e) => handleChange(e)}>
                </input>
              </span>
            )})}
          </div>

          <div>
            <span>Fruit</span>
            {fruits.map(item => {
              return (
              <span>
                <label htmlFor={item}>{item}</label>
                <input
                  id={item}
                  name={`fruitOptions`}
                  type="checkbox"
                  checked={formData.fruitOptions[item]}
                  onChange={(e) => handleChange(e)}>
                </input>
              </span>
            )})}
          </div>
          <div>
            <span>Meat</span>
            {meats.map(item => {
              return (
              <span>
                <label htmlFor={item}>{item}</label>
                <input
                  id={item}
                  name={`meatOptions`}
                  type="checkbox"
                  checked={formData.meatOptions[item]}
                  onChange={(e) => handleChange(e)}>
                </input>
              </span>
            )})}
          </div>


          <button>Find Recipe</button>
        </form>
      </div>
  )
}