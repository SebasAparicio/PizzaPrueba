import React from "react";
import {Button} from '../../../../components';
export function PizzaCard({pizza}) {
  return (
    <article>
      <h3>{pizza.img}</h3>
      <h3>{pizza.name}</h3>
      <h4>{pizza.price}€</h4>
      <Button label="Añadir"/><Button label="Ver mas"/>
    </article>
  );
}
