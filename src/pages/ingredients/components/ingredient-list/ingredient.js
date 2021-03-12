import React from 'react';
import css from './ingredient.module.css';

export function Ingredient({ingredient}){
    return(
        <article className = {css.article}>
        <h3>
            {ingredient.name} ({ingredient.price}€)
        </h3>
      </article>
    )
}