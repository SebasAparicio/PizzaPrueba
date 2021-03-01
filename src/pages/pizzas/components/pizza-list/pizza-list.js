import React from "react";
import { PizzaCard } from "./pizza-card";

export function PizzaList({pizzas}) {
  return (
    <h2>
      <ul>
        {pizzas.map((pizza)=>{
        return(
          <li key={pizza.id}>
            <PizzaCard pizza={pizza} />
          </li>
        ) 
      })}
      </ul>
    </h2>
  );
}
