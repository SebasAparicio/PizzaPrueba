import React from 'react';
import css from './ingredient.module.css';

export function Ingredient({ingredient}){
    return(
        <article className = {css.article}>
        <span>
            {ingredient.name} {ingredient.price}
        </span>
      </article>
    )
}