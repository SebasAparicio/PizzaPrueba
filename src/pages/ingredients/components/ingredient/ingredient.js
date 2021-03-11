import React from 'react';

export function Ingredient({ingredient}){
    return(
        <article>
        <h3>{ingredient.name}</h3>
        <h2>{ingredient.price}</h2>
      </article>
    )
}