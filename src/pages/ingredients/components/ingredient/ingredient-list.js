import React from "react";
import { Ingredient } from "./ingredient";

export function IngredientList({ ingredients }) {
  return (
      <ul>
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
