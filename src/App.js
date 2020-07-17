import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

//API: https://developer.edamam.com/edamam-docs-recipe-api

function App() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('chicken');
  const [search, setSearch] = useState('');

  const APP_ID = '9f30e1ae';
  const APP_KEY = '5659efeef86a9b939ac783a7a7a91956';
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  

  const getRecipes = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
    
  };

  const searchChanged = e => {
    //e.preventDefault();
    setSearch(e.target.value);
  }

  const searchBtnClicked = e => {
    e.preventDefault();
    setQuery(search);
  }

  useEffect(()=> {
    getRecipes();
  }, [query]);

  return (
    <div className="App">
      <form className='search-form'>
        <input type="text" className='search-bar' onChange={searchChanged}></input>
        <button className='search-btn' onClick={searchBtnClicked}>Search</button>
      </form>
      {
        recipes.map(recipe => {
          return (<Recipe
              key={recipe.recipe.label}
              title = {recipe.recipe.label}
              calories = {Math.floor(recipe.recipe.calories)}
              imageSrc = {recipe.recipe.image}
              ingredients = {recipe.recipe.ingredients}
              recipeObj={recipe}
            />)
        })
      }
    </div>
  );
}

export default App;
