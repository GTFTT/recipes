import React from 'react';
import style from './recipe.module.css';

function Recipe({key, title, calories, imageSrc, ingredients}) {
    return (
        <div className={style.recipe}>
            <h2>{title}</h2>
            <img src={imageSrc}></img>
            <h3>Calories: {calories}</h3>
            <div className={style.ingredients}>
                <h3>Ingredients:</h3>
                <ul>
                    {ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))}
                </ul>
            </div>
            
        </div>
    );
}

export default Recipe;