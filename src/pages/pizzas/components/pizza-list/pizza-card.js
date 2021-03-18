import React from "react";
import {Link,Image, CartForm} from '../../../../components';
import css from "./pizza-card.module.css"

export function PizzaCard({pizza}) {
  const href = `pizzas/${pizza.id}`;
  return (
    <article className={css.card}>
      <Image public_id = {pizza.image.public_id} width="8" height="5" small={400} big={800}/>
      <h3 className={css.h3}>{pizza.name}</h3>
      <h4 className={css.h4}>{pizza.price}€</h4>
      <h3 className={css.buttonContainer}>
        <CartForm className={css.buttonCarrito} id={pizza.id}/> <Link href={href} text="VER MAS"/>
      </h3> 
    </article>
  );
}

