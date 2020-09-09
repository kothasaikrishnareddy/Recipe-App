import React, { useState, useEffect } from 'react';
import './App.css';
import Recipe from "./recipe";

const App = () => {
  const APP_ID = 'c1c409f5';
  const APP_KEY = 'd12055cf0653c512ce6559cd31989442';
  const [recipes,setRecipe] = useState([]);
  const [search,setSearch] = useState("");
  const [query,setQuery] = useState('chicken');

useEffect(() => {
  getRecipes();
},[query]);

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipe(data.hits);
}
const updateSearch = e => {
  setSearch(e.target.value);
  console.log(search);
}
const getSearch = e =>{
  e.preventDefault();
  setQuery(search);
  setSearch("");
}
  return (
    <div className="App">   
       <form onSubmit = {getSearch} className = "search-form">
        <input className = "search-bar" 
        type = "text"
        value = {search}
        onChange ={updateSearch}
        />
        <button className = "search-button" type = "submit">
        Search
        </button>
      </form>
      <div className = "recipes">
      {recipes.map(recipe => (
        <Recipe 
        key = {recipe.recipe.label}
        title = {recipe.recipe.label} 
        calories = {recipe.recipe.calories} 
        image = {recipe.recipe.image}
        ingredients = {recipe.recipe.ingredients} />
      ))}
      </div>
    </div>
  )
}

export default App;
