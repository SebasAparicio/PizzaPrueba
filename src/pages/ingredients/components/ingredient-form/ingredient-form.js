import React from "react";
import { Input, Form, Button } from "../../../../components";
import css from './ingredient-form.module.css';

export function IngredientAdd() {
  return (
    //quitar label
    <Form>
      <h2>Crea un nuevo ingrediente</h2>
      <section>
      <label>Añade un nombre</label>
      <Input type ="text" placeholder= "Nombre" />
      <label>Añade un precio</label>
      <Input type ="text" placeholder= "Precio" />

      <Button label ="Crea un nuevo ingrediente"></Button>
      </section>
    </Form>
  );
}
