import React from 'react';

function Recipe({key, title, calories, imageSrc, ingredients}) {
    return (
        <div>
            <h2>{title}</h2>
            <h3>Calories: {calories}</h3>
            <div>
                <h3>Ingredients:</h3>
                <ol>
                    {ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))}
                </ol>
            </div>
            <img src={imageSrc}></img>
        </div>
    );
}

export default Recipe;