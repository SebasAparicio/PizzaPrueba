import React from "react";
import {BreadCrumb, Image} from '../../../../components';
export function Pizza({ pizza }) {
  const { name, price } = pizza;
  const items = [{ text: "Carta", url: "/" }, { text: name }];
  return (
    <section>
     <BreadCrumb items = {items}/>
      <Image image = {pizza.image}/>
      <h2>{name}</h2>
      <div>Descripcion de la pizza</div>
      <div>{price}€</div>
    </section>
  );
}
