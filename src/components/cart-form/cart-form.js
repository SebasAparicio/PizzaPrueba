import React from "react";
import {Button} from '../wrappers/button.js';
import {Form} from '../wrappers/form.js';
export function CartForm({pizza}) {
  return (
    <Form>
      <input type="hidden" value={pizza} />
      <Button label="Añadir al carrito" />
    </Form>
  );
}
