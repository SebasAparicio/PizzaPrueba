import React from "react";
import {Button} from '../../../../components';
import css from "./pizza-card.module.css"

export function PizzaCard({pizza}) {
  return (
    <article className={css.card}>
      <h3>{pizza.image}</h3>
      <h3>{pizza.name}</h3>
      <h4>{pizza.price}€</h4>
      <h3 className={css.buttonContainer}>
        <Button className={css.buttonCarrito} label="AÑADIR AL CARRITO"/><Button className={css.buttonVer} label="VER MAS"/>
      </h3>
    </article>
  );
}

