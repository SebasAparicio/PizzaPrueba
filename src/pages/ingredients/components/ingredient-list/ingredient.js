import React from 'react';
import css from './ingredient.module.css';

export function Ingredient({ingredient}){
    return(
        
        <h3>
            {ingredient.name} ({ingredient.price}€)
        </h3>
      
    )
}