import React from "react";

export function PizzaCard({pizza}) {
  return (
    <article>
      <h2>{pizza.name}</h2>
      <h3>{pizza.img}</h3>
      <button>Añadir</button><button>Ver mas</button>
    </article>
  );
}
