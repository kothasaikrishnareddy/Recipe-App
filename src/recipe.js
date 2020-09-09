import React from 'react';
import style from './recipe.module.css';



const Recipe = ({title,calories,image,ingredients}) => {
    return(
        <div className ={style.recipe}>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
        </style>  
            <h1 className = "title"> {title}</h1>
            <ol>
                {ingredients.map(ingredients =>(
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <p>Total Calories = {calories}</p>
            <img className = {style.image} src={image} alt = '' />

        </div>
    )
}
export default Recipe;