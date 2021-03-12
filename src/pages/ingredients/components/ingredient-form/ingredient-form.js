import React from "react";
import { Input, Form, Button } from "../../../../components";

export function IngredientAdd() {
  return (
    //quitar label
    <Form>

      <Input label= "Añadir nombre" placeholder="Nombre" />
      <Input label= "Añadir precio" placeholder="Precio" />

      <Button label ="Crea un nuevo ingrediente"></Button>
    </Form>
  );
}
