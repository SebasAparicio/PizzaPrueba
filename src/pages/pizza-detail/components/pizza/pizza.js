import React from "react";
import {BreadCrumb} from '../../../../components';
export function Pizza({ pizza }) {
  const { name, price } = pizza;
  const items = [{ text: "Carta", url: "/" }, { text: name }];
  return (
    <section>
     <BreadCrumb items = {items}/>
      <div>Imagen</div>
      <h2>{name}</h2>
      <div>Descripcion de la pizza</div>
      <div>{price}€</div>
    </section>
  );
}
