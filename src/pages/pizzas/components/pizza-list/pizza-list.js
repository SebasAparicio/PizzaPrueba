import React from "react";
import { PizzaCard } from "./pizza-card";
import css from "./pizza-list.module.css"

export function PizzaList({pizzas}) {
  return (
<<<<<<< HEAD
      <ul className={css.list}>
=======
      <ul>
>>>>>>> 12e5f819e810f45637c49dad5b9e6e04dad44687
        {pizzas.map((pizza)=>{
        return(
          <li key={pizza.id}>
            <PizzaCard pizza={pizza} />
          </li>
        ) 
      })}
      </ul>
  );
}
