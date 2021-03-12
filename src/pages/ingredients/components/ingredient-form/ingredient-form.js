import React from "react";
import { Input, Form, Button } from "../../../../components";
import css from './ingredient-form.module.css'
export function IngredientAdd() {
  return (
    <section>
    <h2 className={css.h2}>Crea un nuevo ingrediente</h2>
    <Form>

      <Input label= "Añadir nombre" placeholder="Nombre" />
      <Input label= "Añadir precio" placeholder="Precio" />

      <Button label ="Crea un nuevo ingrediente"></Button>
    </Form>
    </section>
  );
}
