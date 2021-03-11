import React from "react";

export function PizzaCard({pizza}) {
  return (
    <article>
      <h3>{pizza.img}</h3>
      <h2>{pizza.name}</h2>
      <button>Añadir</button><button>Ver mas</button>
    </article>
  );
}
