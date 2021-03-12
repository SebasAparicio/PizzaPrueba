import React from "react";
import { Ingredient } from "./ingredient";
import css from './ingredient.module.css';

export function IngredientList({ ingredients }) {
  return ( //<section> y h2
      <ul className = {css.ul}>
        {ingredients.map((ingredient) => {
          return (
            <li key={ingredient.id}>
              <Ingredient ingredient = {ingredient}/>
            </li>
          );
        })}
      </ul>

  );
}
