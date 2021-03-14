import React from "react";
import { Input, Form, Button } from "../../../../components";
import css from './ingredient-form.module.css'
export function IngredientAdd() {
  return (
    <section>
    <h2>Crea un nuevo ingrediente</h2>
    <Form>

      <Input className={css.input} label= "Añadir nombre" placeholder="Nombre" />
      <Input className={css.input} label= "Añadir precio" placeholder="Precio" />

      <Button className = {css.but} label ="Crea un nuevo ingrediente"></Button>
    </Form>
    </section>
  );
}
