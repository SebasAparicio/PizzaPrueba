import React from 'react';

export function PizzaIngredients({pizza}){
    const {ingredients} = pizza
    return(
        <section>
            <h2>Ingredientes</h2>
            <ul>
                {ingredients.map((ingredient)=>{
                    return(
                        <li key = {ingredient.id}>
                            {ingredient.name}
                        </li>
                    )
                })}
            </ul>
        </section>
    );
}