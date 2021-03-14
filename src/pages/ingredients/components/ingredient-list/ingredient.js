import React from 'react';
import css from './ingredient-list.module.css';

export function Ingredient({ingredient}){
    return(
        
        <h3 className = {css.h3}>
            {ingredient.name} ({ingredient.price}€)
        </h3>
      
    )
}